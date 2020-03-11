import fetch from 'cross-fetch';
import get from 'lodash.get';
import { codes, isRetryableCode } from '@adgorithmics/graphql-errors';
import { AdgoError } from '@adgorithmics/adgo-errors';

import {
    PageInfo,
    Scalars,
    Mutation,
    Query,
    SortInput,
    User,
    UserLoginInput,
    UserUpdateInput,
    RefreshTokenInput,
    Organization,
    OrganizationInput,
    OrganizationUpdateInput,
    Marketplace,
    MarketplaceInput,
    MarketplaceUpdateInput,
    MediaChannel,
    MediaChannelCreateInput,
    MediaChannelUpdateInput,
    MediaChannelImportInput,
    CampaignTemplate,
    Vendor,
    VendorInput,
    VendorUpdateInput,
    VendorToken,
    VendorTokenInput,
    SetVendorPasswordInput,
    LoginVendorInput,
    Catalog,
    CatalogCreateInput,
    CatalogImportInput,
    CatalogUpdateInput,
    Product,
    ProductInput,
    ProductUpdateInput,
    MarketingCampaign,
    MarketingCampaignInput,
    MarketingCampaignUpdateInput,
    MarketingCampaignSyncInput,
    MarketingAd,
    Result,
    Entitlement,
    EntitlementInput,
    EntitlementUpdateInput,
    CreativeFont,
    CreativeFontCreateInput,
    CreativeFontUpdateInput,
    CreativeImage,
    CreativeImageCreateInput,
    CreativeImageUpdateInput,
    CreativeLayer,
    CreativeLayerCreateInput,
    CreativeLayerUpdateInput,
    CreativeTemplate,
    CreativeTemplateCreateInput,
    CreativeTemplateUpdateInput,
    RequestResetPasswordInput,
    ResetPasswordInput,
    Notification,
    NotificationUpdateInput,
} from './generated/graphql';

import {
    TokenFields,
    OrganizationFields,
    OrganizationField,
    UserFields,
    UserField,
    RequestResultFields,
    RequestResultField,
    MarketplaceFields,
    MarketplaceField,
    MediaChannelFields,
    MediaChannelField,
    CampaignTemplateFields,
    CampaignTemplateField,
    VendorFields,
    VendorField,
    VendorTokenFields,
    VendorTokenField,
    CatalogFields,
    CatalogField,
    ProductFields,
    ProductField,
    MarketingCampaignFields,
    MarketingCampaignField,
    MarketingAdFields,
    MarketingAdField,
    ResultFields,
    ResultField,
    EntitlementFields,
    EntitlementField,
    CreativeFontFields,
    CreativeFontField,
    CreativeImageFields,
    CreativeImageField,
    CreativeLayerFields,
    CreativeLayerField,
    CreativeTemplateFields,
    CreativeTemplateField,
    NotificationFields,
    NotificationField,
} from './generated/fields';

import {
    bind,
    pageQueryGenerator,
    APIError,
    CinnamonError,
    AugmentedRequired,
    sleep,
    pageMutationGenerator,
} from './helpers';

export interface Config {
    url: string;
    retryHook?: (
        error: AdgoError,
        retryCount: number,
    ) => boolean | Promise<boolean>;
    maxRetry?: number;
    retrySleepTime?: number;
}

export interface Headers {
    [key: string]: string;
}

export type APIKey = keyof (Query & Mutation);
export type APIResult<T extends APIKey, U extends string = T> = {
    data: Record<U, NonNullable<(Query & Mutation)[T]>>;
};

const VENDOR_TOKEN_LENGTH = 60;
const DEFAULT_MAX_RETRY = 3;
const DEFAULT_RETRY_SLEEP_TIME = 500;

export class Cinnamon {
    private config: AugmentedRequired<Config, 'maxRetry' | 'retrySleepTime'>;
    private refreshToken = '';
    private token = '';
    private refreshTokenRequest: Promise<null> | null = null;

    constructor({
        maxRetry = DEFAULT_MAX_RETRY,
        retrySleepTime = DEFAULT_RETRY_SLEEP_TIME,
        ...config
    }: Config) {
        this.config = { maxRetry, retrySleepTime, ...config };
    }

    @bind
    private isVendorToken(token: string) {
        return token.length === VENDOR_TOKEN_LENGTH;
    }

    @bind
    async api<T extends APIKey, U extends string = T>(
        {
            query,
            variables = {},
            headers = {},
            token,
        }: {
            query: string;
            variables?: object;
            headers?: Headers;
            token?: string;
        },
        retryCount = 0,
    ): Promise<APIResult<T, U>> {
        await this.refreshTokenRequest;

        let json;

        try {
            try {
                const response = await fetch(this.config.url, {
                    method: 'POST',
                    headers: {
                        authorization:
                            token || this.token
                                ? `Bearer ${token || this.token}`
                                : '',
                        accept: 'application/json',
                        'content-type': 'application/json',
                        ...headers,
                    },
                    body: JSON.stringify({ query, variables }),
                });

                json = await response.json();
            } catch (error) {
                throw new AdgoError(error);
            }

            if (json.errors) {
                if (
                    json.errors.some(
                        (error: APIError) =>
                            get(error, 'extensions.code') ===
                            codes.TOKEN_EXPIRED,
                    ) &&
                    !token
                ) {
                    if (!this.refreshTokenRequest) {
                        this.refreshTokenRequest = this.refreshLogin({
                            refreshToken: this.refreshToken,
                        }).then(() => null);
                    }

                    this.refreshTokenRequest = await this.refreshTokenRequest;
                    return this.api({ query, variables, headers, token });
                }
                throw new CinnamonError(
                    json.errors.map((error: Error) => error.message).join('\n'),
                    json,
                );
            }
            if (!json.data) {
                throw new CinnamonError(
                    `Invalid server response: ${JSON.stringify(json)}`,
                    json,
                );
            }
            return json;
        } catch (error) {
            if (retryCount >= this.config.maxRetry) {
                throw error;
            }

            if (
                error?.raw?.errors?.some((error: APIError) => {
                    const code = get(error, 'extensions.code');
                    return code && !isRetryableCode(code);
                })
            ) {
                throw error;
            }

            if (
                this.config.retryHook &&
                !(await this.config.retryHook(error, retryCount))
            ) {
                throw error;
            }

            await sleep(this.config.retrySleepTime * retryCount);

            return this.api(
                { query, variables, headers, token },
                retryCount + 1,
            );
        }
    }

    @bind
    async allPages<T>(
        fetchRelayConnection: (
            after: PageInfo['endCursor'],
        ) => Promise<{
            pageInfo: PageInfo;
            edges?: Array<{ node?: T }>;
        }>,
    ) {
        const result: T[] = [];
        const getPage = async (
            after: PageInfo['endCursor'] = '',
        ): Promise<void> => {
            const { edges = [], pageInfo } = await fetchRelayConnection(after);

            edges.forEach(edge => edge.node && result.push(edge.node));

            if (pageInfo.hasNextPage) {
                await getPage(pageInfo.endCursor);
            }
        };
        await getPage();
        return result;
    }

    @bind
    async *eachNode<T>(
        fetchRelayConnection: (
            after: PageInfo['endCursor'],
        ) => Promise<{
            pageInfo: PageInfo;
            edges?: Array<{ node?: T }>;
        }>,
    ) {
        const getPage = async function*(
            after: PageInfo['endCursor'] = '',
        ): AsyncGenerator<T> {
            const { edges = [], pageInfo } = await fetchRelayConnection(after);

            for (const edge of edges) {
                if (edge.node) {
                    yield edge.node;
                }
            }

            if (pageInfo.hasNextPage) {
                yield* getPage(pageInfo.endCursor);
            }
        };
        yield* getPage();
    }

    // ####################################
    // User
    // ####################################

    private defaultUserFields = [UserFields.id, UserFields.email];

    @bind
    async login(input: UserLoginInput) {
        const result = (
            await this.api<'login'>({
                query: `mutation($input: UserLoginInput!) {
                    login(input: $input) {
                        ${TokenFields.expiryDate}
                        ${TokenFields.token}
                        ${TokenFields.refreshToken}
                    }
                }`,
                variables: { input },
            })
        ).data.login;

        if (result.token && result.refreshToken) {
            this.token = result.token;
            this.refreshToken = result.refreshToken;
        }

        return result;
    }

    @bind
    async refreshLogin(input: RefreshTokenInput) {
        const result = (
            await this.api<'refreshLogin'>({
                query: `mutation($input: RefreshTokenInput!) {
                    refreshLogin(input: $input) {
                        ${TokenFields.expiryDate}
                        ${TokenFields.token}
                        ${TokenFields.refreshToken}
                    }
                }`,
                variables: { input },
            })
        ).data.refreshLogin;

        if (result.token && result.refreshToken) {
            this.token = result.token;
            this.refreshToken = result.refreshToken;
        }

        return result;
    }

    @bind
    setToken(token: string) {
        this.token = token;
    }

    @bind
    setRefreshToken(refreshToken: string) {
        this.refreshToken = refreshToken;
    }

    @bind
    async me<T extends Vendor | User>({
        fields,
        headers,
        token,
    }: {
        fields?: UserField[] | VendorField[];
        headers?: Headers;
        token?: string;
    } = {}) {
        return (
            await this.api<'me'>({
                query: `query {
                    me {
                        ${
                            this.isVendorToken(token || this.token)
                                ? `... on Vendor { ${(
                                      fields || this.defaultVendorFields
                                  ).join(' ')} }`
                                : `... on User { ${(
                                      fields || this.defaultUserFields
                                  ).join(' ')} }`
                        }
                    }
                }`,
                variables: {},
                headers,
                token,
            })
        ).data.me as T;
    }

    @bind
    async updateUser({
        input,
        fields = [UserFields.id, UserFields.email],
        headers,
        token,
    }: {
        input: UserUpdateInput;
        fields?: UserField[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'updateUser'>({
                query: `mutation($input: UserUpdateInput!) {
                    updateUser(input: $input) {
                        ${fields.join(' ')}
                    }
                }`,
                variables: { input },
                headers,
                token,
            })
        ).data.updateUser;
    }

    // ####################################
    // SingleUseToken
    // ####################################

    private defaultRequestResultFields = [RequestResultFields.result];

    @bind
    async requestResetPassword({
        input,
        fields = this.defaultRequestResultFields,
        headers,
        token,
    }: {
        input: RequestResetPasswordInput;
        fields?: RequestResultField[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'requestResetPassword'>({
                query: `mutation($input: RequestResetPasswordInput!) {
                    requestResetPassword(input: $input) {
                        ${fields.join(' ')}
                    }
                }`,
                variables: { input },
                headers,
                token,
            })
        ).data.requestResetPassword;
    }

    @bind
    async resetPassword({
        input,
        fields = this.defaultUserFields,
        headers,
        token,
    }: {
        input: ResetPasswordInput;
        fields?: UserField[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'resetPassword'>({
                query: `mutation($input: ResetPasswordInput!) {
                    resetPassword(input: $input) {
                        ${fields.join(' ')}
                    }
                }`,
                variables: { input },
                headers,
                token,
            })
        ).data.resetPassword;
    }

    // ####################################
    // Organization
    // ####################################

    private defaultOrganizationFields = [
        OrganizationFields.id,
        OrganizationFields.name,
        OrganizationFields.systemStatus,
        OrganizationFields.errors,
    ];

    @bind
    async organization({
        id,
        fields = this.defaultOrganizationFields,
        headers,
        token,
    }: {
        id: Scalars['ObjectId'];
        fields?: OrganizationField[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'organization'>({
                query: `query($id: ObjectId!) {
                    organization(id: $id) {
                        ${fields.join(' ')}
                    }
                }`,
                variables: { id },
                headers,
                token,
            })
        ).data.organization;
    }

    @bind
    async organizations({
        filter,
        sort,
        first,
        last,
        after,
        before,
        fields = this.defaultOrganizationFields,
        showDeleted,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        first?: number;
        last?: number;
        after?: PageInfo['endCursor'];
        before?: PageInfo['startCursor'];
        fields?: OrganizationField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    } = {}) {
        return (
            await this.api<'organizations'>({
                query: pageQueryGenerator('organizations', fields, {
                    showDeleted: 'Boolean',
                }),
                variables: {
                    filter,
                    sort,
                    first,
                    last,
                    after,
                    before,
                    showDeleted,
                },
                headers,
                token,
            })
        ).data.organizations;
    }

    @bind
    organizationsAll({
        filter,
        sort,
        fields = this.defaultOrganizationFields,
        showDeleted,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: OrganizationField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    } = {}) {
        return this.allPages<Organization>((after: PageInfo['endCursor']) =>
            this.organizations({
                filter,
                sort,
                after,
                fields,
                showDeleted,
                headers,
                token,
            }),
        );
    }

    @bind
    organizationsEach({
        filter,
        sort,
        fields = this.defaultOrganizationFields,
        showDeleted,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: OrganizationField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    } = {}) {
        return this.eachNode<Organization>((after: PageInfo['endCursor']) =>
            this.organizations({
                filter,
                sort,
                after,
                fields,
                showDeleted,
                headers,
                token,
            }),
        );
    }

    @bind
    async createOrganization({
        input,
        fields = this.defaultOrganizationFields,
        headers,
        token,
    }: {
        input: OrganizationInput;
        fields?: OrganizationField[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'createOrganization'>({
                query: `mutation($input: OrganizationInput!) {
                    createOrganization(input: $input) {
                        ${fields.join(' ')}
                    }
                }`,
                variables: { input },
                headers,
                token,
            })
        ).data.createOrganization;
    }

    @bind
    async updateOrganization({
        id,
        input,
        fields = this.defaultOrganizationFields,
        headers,
        token,
    }: {
        id: Scalars['ObjectId'];
        input: OrganizationUpdateInput;
        fields?: OrganizationField[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'updateOrganization'>({
                query: `mutation($id: ObjectId!, $input: OrganizationUpdateInput!) {
                    updateOrganization(id: $id, input: $input) {
                        ${fields.join(' ')}
                    }
                }`,
                variables: { id, input },
                headers,
                token,
            })
        ).data.updateOrganization;
    }

    @bind
    async updateOrganizations({
        input,
        filter,
        sort,
        first,
        last,
        after,
        before,
        fields = this.defaultOrganizationFields,
        showDeleted,
        headers,
        token,
    }: {
        input: OrganizationUpdateInput;
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        first?: number;
        last?: number;
        after?: PageInfo['endCursor'];
        before?: PageInfo['startCursor'];
        fields?: OrganizationField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'updateOrganizations'>({
                query: pageMutationGenerator('updateOrganizations', fields, {
                    input: 'OrganizationUpdateInput!',
                    showDeleted: 'Boolean',
                }),
                variables: {
                    input,
                    filter,
                    sort,
                    first,
                    last,
                    after,
                    before,
                    showDeleted,
                },
                headers,
                token,
            })
        ).data.updateOrganizations;
    }

    @bind
    updateOrganizationsAll({
        input,
        filter,
        sort,
        fields = this.defaultOrganizationFields,
        showDeleted,
        headers,
        token,
    }: {
        input: OrganizationUpdateInput;
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: OrganizationField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }) {
        return this.allPages<Organization>((after: PageInfo['endCursor']) =>
            this.updateOrganizations({
                input,
                filter,
                sort,
                after,
                fields,
                showDeleted,
                headers,
                token,
            }),
        );
    }

    @bind
    updateOrganizationsEach({
        input,
        filter,
        sort,
        fields = this.defaultOrganizationFields,
        showDeleted,
        headers,
        token,
    }: {
        input: OrganizationUpdateInput;
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: OrganizationField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }) {
        return this.eachNode<Organization>((after: PageInfo['endCursor']) =>
            this.updateOrganizations({
                input,
                filter,
                sort,
                after,
                first: 1,
                fields,
                showDeleted,
                headers,
                token,
            }),
        );
    }

    // ####################################
    // Marketplace
    // ####################################

    private defaultMarketplaceFields = [
        MarketplaceFields.id,
        MarketplaceFields.name,
        MarketplaceFields.systemStatus,
        MarketplaceFields.errors,
    ];

    @bind
    async marketplace({
        id,
        fields = this.defaultMarketplaceFields,
        headers,
        token,
    }: {
        id: Scalars['ObjectId'];
        fields?: MarketplaceField[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'marketplace'>({
                query: `query($id: ObjectId!) {
                    marketplace(id: $id) {
                        ${fields.join(' ')}
                    }
                }`,
                variables: { id },
                headers,
                token,
            })
        ).data.marketplace;
    }

    @bind
    async marketplaces({
        filter,
        sort,
        first,
        last,
        after,
        before,
        fields = this.defaultMarketplaceFields,
        showDeleted,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        first?: number;
        last?: number;
        after?: PageInfo['endCursor'];
        before?: PageInfo['startCursor'];
        fields?: MarketplaceField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    } = {}) {
        return (
            await this.api<'marketplaces'>({
                query: pageQueryGenerator('marketplaces', fields, {
                    showDeleted: 'Boolean',
                }),
                variables: {
                    filter,
                    sort,
                    first,
                    last,
                    after,
                    before,
                    showDeleted,
                },
                headers,
                token,
            })
        ).data.marketplaces;
    }

    @bind
    marketplacesAll({
        filter,
        sort,
        fields = this.defaultMarketplaceFields,
        showDeleted,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: MarketplaceField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    } = {}) {
        return this.allPages<Marketplace>((after: PageInfo['endCursor']) =>
            this.marketplaces({
                filter,
                sort,
                after,
                fields,
                showDeleted,
                headers,
                token,
            }),
        );
    }

    @bind
    marketplacesEach({
        filter,
        sort,
        fields = this.defaultMarketplaceFields,
        showDeleted,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: MarketplaceField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    } = {}) {
        return this.eachNode<Marketplace>((after: PageInfo['endCursor']) =>
            this.marketplaces({
                filter,
                sort,
                after,
                fields,
                showDeleted,
                headers,
                token,
            }),
        );
    }

    @bind
    async createMarketplace({
        input,
        fields = this.defaultMarketplaceFields,
        headers,
        token,
    }: {
        input: MarketplaceInput;
        fields?: MarketplaceField[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'createMarketplace'>({
                query: `mutation($input: MarketplaceInput!) {
                    createMarketplace(input: $input) {
                        ${fields.join(' ')}
                    }
                }`,
                variables: { input },
                headers,
                token,
            })
        ).data.createMarketplace;
    }

    @bind
    async updateMarketplace({
        id,
        input,
        fields = this.defaultMarketplaceFields,
        headers,
        token,
    }: {
        id: Scalars['ObjectId'];
        input: MarketplaceUpdateInput;
        fields?: MarketplaceField[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'updateMarketplace'>({
                query: `mutation($id: ObjectId!, $input: MarketplaceUpdateInput!) {
                    updateMarketplace(id: $id, input: $input) {
                        ${fields.join(' ')}
                    }
                }`,
                variables: { id, input },
                headers,
                token,
            })
        ).data.updateMarketplace;
    }

    @bind
    async updateMarketplaces({
        input,
        filter,
        sort,
        first,
        last,
        after,
        before,
        fields = this.defaultMarketplaceFields,
        showDeleted,
        headers,
        token,
    }: {
        input: MarketplaceUpdateInput;
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        first?: number;
        last?: number;
        after?: PageInfo['endCursor'];
        before?: PageInfo['startCursor'];
        fields?: MarketplaceField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'updateMarketplaces'>({
                query: pageMutationGenerator('updateMarketplaces', fields, {
                    input: 'MarketplaceUpdateInput!',
                    showDeleted: 'Boolean',
                }),
                variables: {
                    input,
                    filter,
                    sort,
                    first,
                    last,
                    after,
                    before,
                    showDeleted,
                },
                headers,
                token,
            })
        ).data.updateMarketplaces;
    }

    @bind
    updateMarketplacesAll({
        input,
        filter,
        sort,
        fields = this.defaultMarketplaceFields,
        showDeleted,
        headers,
        token,
    }: {
        input: MarketplaceUpdateInput;
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: MarketplaceField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }) {
        return this.allPages<Marketplace>((after: PageInfo['endCursor']) =>
            this.updateMarketplaces({
                input,
                filter,
                sort,
                after,
                fields,
                showDeleted,
                headers,
                token,
            }),
        );
    }

    @bind
    updateMarketplacesEach({
        input,
        filter,
        sort,
        fields = this.defaultMarketplaceFields,
        showDeleted,
        headers,
        token,
    }: {
        input: MarketplaceUpdateInput;
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: MarketplaceField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }) {
        return this.eachNode<Marketplace>((after: PageInfo['endCursor']) =>
            this.updateMarketplaces({
                input,
                filter,
                sort,
                after,
                first: 1,
                fields,
                showDeleted,
                headers,
                token,
            }),
        );
    }

    @bind
    async deleteMarketplace({
        id,
        headers,
        token,
    }: {
        id: Scalars['ObjectId'];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'deleteMarketplace'>({
                query: `mutation($id: ObjectId!) {
                    deleteMarketplace(id: $id) {
                        id
                    }
                }`,
                variables: { id },
                headers,
                token,
            })
        ).data.deleteMarketplace;
    }

    // ####################################
    // MediaChannel
    // ####################################

    private defaultMediaChannelFields = [
        MediaChannelFields.id,
        MediaChannelFields.name,
    ];

    @bind
    async mediaChannel({
        id,
        fields = this.defaultMediaChannelFields,
        headers,
        token,
    }: {
        id: Scalars['ObjectId'];
        fields?: MediaChannelField[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'mediaChannel'>({
                query: `query($id: ObjectId!) {
                    mediaChannel(id: $id) {
                        ${fields.join(' ')}
                    }
                }`,
                variables: { id },
                headers,
                token,
            })
        ).data.mediaChannel;
    }

    @bind
    async mediaChannels({
        filter,
        sort,
        first,
        last,
        after,
        before,
        fields = this.defaultMediaChannelFields,
        showDeleted,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        first?: number;
        last?: number;
        after?: PageInfo['endCursor'];
        before?: PageInfo['startCursor'];
        fields?: MediaChannelField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    } = {}) {
        return (
            await this.api<'mediaChannels'>({
                query: pageQueryGenerator('mediaChannels', fields, {
                    showDeleted: 'Boolean',
                }),
                variables: {
                    filter,
                    sort,
                    first,
                    last,
                    after,
                    before,
                    showDeleted,
                },
                headers,
                token,
            })
        ).data.mediaChannels;
    }

    @bind
    mediaChannelsAll({
        filter,
        sort,
        fields = this.defaultMediaChannelFields,
        showDeleted,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: MediaChannelField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    } = {}) {
        return this.allPages<MediaChannel>((after: PageInfo['endCursor']) =>
            this.mediaChannels({
                filter,
                sort,
                after,
                fields,
                showDeleted,
                headers,
                token,
            }),
        );
    }

    @bind
    mediaChannelsEach({
        filter,
        sort,
        fields = this.defaultMediaChannelFields,
        showDeleted,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: MediaChannelField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    } = {}) {
        return this.eachNode<MediaChannel>((after: PageInfo['endCursor']) =>
            this.mediaChannels({
                filter,
                sort,
                after,
                fields,
                showDeleted,
                headers,
                token,
            }),
        );
    }

    @bind
    async createMediaChannel({
        input,
        fields = this.defaultMediaChannelFields,
        headers,
        token,
    }: {
        input: MediaChannelCreateInput;
        fields?: MediaChannelField[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'createMediaChannel'>({
                query: `mutation($input: MediaChannelCreateInput!) {
                    createMediaChannel(input: $input) {
                        ${fields.join(' ')}
                    }
                }`,
                variables: { input },
                headers,
                token,
            })
        ).data.createMediaChannel;
    }

    @bind
    async importMediaChannel({
        input,
        fields = this.defaultMediaChannelFields,
        headers,
        token,
    }: {
        input: MediaChannelImportInput;
        fields?: MediaChannelField[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'importMediaChannel'>({
                query: `mutation($input: MediaChannelImportInput!) {
                    importMediaChannel(input: $input) {
                        ${fields.join(' ')}
                    }
                }`,
                variables: { input },
                headers,
                token,
            })
        ).data.importMediaChannel;
    }

    @bind
    async updateMediaChannel({
        id,
        input,
        fields = this.defaultMediaChannelFields,
        headers,
        token,
    }: {
        id: Scalars['ObjectId'];
        input: MediaChannelUpdateInput;
        fields?: MediaChannelField[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'updateMediaChannel'>({
                query: `mutation($id: ObjectId!, $input: MediaChannelUpdateInput!) {
                    updateMediaChannel(id: $id, input: $input) {
                        ${fields.join(' ')}
                    }
                }`,
                variables: { id, input },
                headers,
                token,
            })
        ).data.updateMediaChannel;
    }

    @bind
    async updateMediaChannels({
        input,
        filter,
        sort,
        first,
        last,
        after,
        before,
        fields = this.defaultMediaChannelFields,
        showDeleted,
        headers,
        token,
    }: {
        input: MediaChannelUpdateInput;
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        first?: number;
        last?: number;
        after?: PageInfo['endCursor'];
        before?: PageInfo['startCursor'];
        fields?: MediaChannelField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'updateMediaChannels'>({
                query: pageMutationGenerator('updateMediaChannels', fields, {
                    input: 'MediaChannelUpdateInput!',
                    showDeleted: 'Boolean',
                }),
                variables: {
                    input,
                    filter,
                    sort,
                    first,
                    last,
                    after,
                    before,
                    showDeleted,
                },
                headers,
                token,
            })
        ).data.updateMediaChannels;
    }

    @bind
    updateMediaChannelsAll({
        input,
        filter,
        sort,
        fields = this.defaultMediaChannelFields,
        showDeleted,
        headers,
        token,
    }: {
        input: MediaChannelUpdateInput;
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: MediaChannelField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }) {
        return this.allPages<MediaChannel>((after: PageInfo['endCursor']) =>
            this.updateMediaChannels({
                input,
                filter,
                sort,
                after,
                fields,
                showDeleted,
                headers,
                token,
            }),
        );
    }

    @bind
    updateMediaChannelsEach({
        input,
        filter,
        sort,
        fields = this.defaultMediaChannelFields,
        showDeleted,
        headers,
        token,
    }: {
        input: MediaChannelUpdateInput;
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: MediaChannelField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }) {
        return this.eachNode<MediaChannel>((after: PageInfo['endCursor']) =>
            this.updateMediaChannels({
                input,
                filter,
                sort,
                after,
                first: 1,
                fields,
                showDeleted,
                headers,
                token,
            }),
        );
    }

    @bind
    async deleteMediaChannel({
        id,
        headers,
        token,
    }: {
        id: Scalars['ObjectId'];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'deleteMediaChannel'>({
                query: `mutation($id: ObjectId!) {
                    deleteMediaChannel(id: $id) {
                        id
                    }
                }`,
                variables: { id },
                headers,
                token,
            })
        ).data.deleteMediaChannel;
    }

    // ####################################
    // CampaignTemplate
    // ####################################

    private defaultCampaignTemplateFields = [
        CampaignTemplateFields.id,
        CampaignTemplateFields.name,
    ];

    @bind
    async campaignTemplate({
        id,
        fields = this.defaultCampaignTemplateFields,
        headers,
        token,
    }: {
        id: Scalars['ObjectId'];
        fields?: CampaignTemplateField[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'campaignTemplate'>({
                query: `query($id: ObjectId!) {
                    campaignTemplate(id: $id) {
                        ${fields.join(' ')}
                    }
                }`,
                variables: { id },
                headers,
                token,
            })
        ).data.campaignTemplate;
    }

    @bind
    async campaignTemplates({
        filter,
        sort,
        first,
        last,
        after,
        before,
        fields = this.defaultCampaignTemplateFields,
        showDeleted,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        first?: number;
        last?: number;
        after?: PageInfo['endCursor'];
        before?: PageInfo['startCursor'];
        fields?: CampaignTemplateField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    } = {}) {
        return (
            await this.api<'campaignTemplates'>({
                query: pageQueryGenerator('campaignTemplates', fields, {
                    showDeleted: 'Boolean',
                }),
                variables: {
                    filter,
                    sort,
                    first,
                    last,
                    after,
                    before,
                    showDeleted,
                },
                headers,
                token,
            })
        ).data.campaignTemplates;
    }

    @bind
    campaignTemplatesAll({
        filter,
        sort,
        fields = this.defaultCampaignTemplateFields,
        showDeleted,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: CampaignTemplateField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    } = {}) {
        return this.allPages<CampaignTemplate>((after: PageInfo['endCursor']) =>
            this.campaignTemplates({
                filter,
                sort,
                after,
                fields,
                showDeleted,
                headers,
                token,
            }),
        );
    }

    @bind
    campaignTemplatesEach({
        filter,
        sort,
        fields = this.defaultCampaignTemplateFields,
        showDeleted,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: CampaignTemplateField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    } = {}) {
        return this.eachNode<CampaignTemplate>((after: PageInfo['endCursor']) =>
            this.campaignTemplates({
                filter,
                sort,
                after,
                fields,
                showDeleted,
                headers,
                token,
            }),
        );
    }

    // ####################################
    // Vendor
    // ####################################

    private defaultVendorFields = [
        VendorFields.id,
        VendorFields.name,
        VendorFields.systemStatus,
        VendorFields.errors,
    ];

    @bind
    async vendor({
        id,
        fields = this.defaultVendorFields,
        headers,
        token,
    }: {
        id: Scalars['ObjectId'];
        fields?: VendorField[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'vendor'>({
                query: `query($id: ObjectId!) {
                    vendor(id: $id) {
                        ${fields.join(' ')}
                    }
                }`,
                variables: { id },
                headers,
                token,
            })
        ).data.vendor;
    }

    @bind
    async vendors({
        filter,
        sort,
        first,
        last,
        after,
        before,
        fields = this.defaultVendorFields,
        showDeleted,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        first?: number;
        last?: number;
        after?: PageInfo['endCursor'];
        before?: PageInfo['startCursor'];
        fields?: VendorField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    } = {}) {
        return (
            await this.api<'vendors'>({
                query: pageQueryGenerator('vendors', fields, {
                    showDeleted: 'Boolean',
                }),
                variables: {
                    filter,
                    sort,
                    first,
                    last,
                    after,
                    before,
                    showDeleted,
                },
                headers,
                token,
            })
        ).data.vendors;
    }

    @bind
    vendorsAll({
        filter,
        sort,
        fields = this.defaultVendorFields,
        showDeleted,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: VendorField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    } = {}) {
        return this.allPages<Vendor>((after: PageInfo['endCursor']) =>
            this.vendors({
                filter,
                sort,
                after,
                fields,
                showDeleted,
                headers,
                token,
            }),
        );
    }

    @bind
    vendorsEach({
        filter,
        sort,
        fields = this.defaultVendorFields,
        showDeleted,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: VendorField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    } = {}) {
        return this.eachNode<Vendor>((after: PageInfo['endCursor']) =>
            this.vendors({
                filter,
                sort,
                after,
                fields,
                showDeleted,
                headers,
                token,
            }),
        );
    }

    @bind
    async createVendor({
        input,
        fields = this.defaultVendorFields,
        headers,
        token,
    }: {
        input: VendorInput;
        fields?: VendorField[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'createVendor'>({
                query: `mutation($input: VendorInput!) {
                    createVendor(input: $input) {
                        ${fields.join(' ')}
                    }
                }`,
                variables: { input },
                headers,
                token,
            })
        ).data.createVendor;
    }

    @bind
    async updateVendor({
        id,
        input,
        fields = this.defaultVendorFields,
        headers,
        token,
    }: {
        id: Scalars['ObjectId'];
        input: VendorUpdateInput;
        fields?: VendorField[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'updateVendor'>({
                query: `mutation($id: ObjectId!, $input: VendorUpdateInput!) {
                    updateVendor(id: $id, input: $input) {
                        ${fields.join(' ')}
                    }
                }`,
                variables: { id, input },
                headers,
                token,
            })
        ).data.updateVendor;
    }

    @bind
    async updateVendors({
        input,
        filter,
        sort,
        first,
        last,
        after,
        before,
        fields = this.defaultVendorFields,
        showDeleted,
        headers,
        token,
    }: {
        input: VendorUpdateInput;
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        first?: number;
        last?: number;
        after?: PageInfo['endCursor'];
        before?: PageInfo['startCursor'];
        fields?: VendorField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'updateVendors'>({
                query: pageMutationGenerator('updateVendors', fields, {
                    input: 'VendorUpdateInput!',
                    showDeleted: 'Boolean',
                }),
                variables: {
                    input,
                    filter,
                    sort,
                    first,
                    last,
                    after,
                    before,
                    showDeleted,
                },
                headers,
                token,
            })
        ).data.updateVendors;
    }

    @bind
    updateVendorsAll({
        input,
        filter,
        sort,
        fields = this.defaultVendorFields,
        showDeleted,
        headers,
        token,
    }: {
        input: VendorUpdateInput;
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: VendorField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }) {
        return this.allPages<Vendor>((after: PageInfo['endCursor']) =>
            this.updateVendors({
                input,
                filter,
                sort,
                after,
                fields,
                showDeleted,
                headers,
                token,
            }),
        );
    }

    @bind
    updateVendorsEach({
        input,
        filter,
        sort,
        fields = this.defaultVendorFields,
        showDeleted,
        headers,
        token,
    }: {
        input: VendorUpdateInput;
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: VendorField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }) {
        return this.eachNode<Vendor>((after: PageInfo['endCursor']) =>
            this.updateVendors({
                input,
                filter,
                sort,
                after,
                first: 1,
                fields,
                showDeleted,
                headers,
                token,
            }),
        );
    }

    @bind
    async deleteVendor({
        id,
        headers,
        token,
    }: {
        id: Scalars['ObjectId'];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'deleteVendor'>({
                query: `mutation($id: ObjectId!) {
                    deleteVendor(id: $id) {
                        id
                    }
                }`,
                variables: { id },
                headers,
                token,
            })
        ).data.deleteVendor;
    }

    // ####################################
    // Vendor Token
    // ####################################

    private defaultVendorTokenFields = [
        VendorTokenFields.id,
        VendorTokenFields.token,
    ];

    @bind
    async vendorToken({
        id,
        fields = this.defaultVendorTokenFields,
        headers,
        token,
    }: {
        id: Scalars['ObjectId'];
        fields?: VendorTokenField[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'vendorToken'>({
                query: `query($id: ObjectId!) {
                    vendorToken(id: $id) {
                        ${fields.join(' ')}
                    }
                }`,
                variables: { id },
                headers,
                token,
            })
        ).data.vendorToken;
    }

    @bind
    async vendorTokens({
        filter,
        sort,
        first,
        last,
        after,
        before,
        fields = this.defaultVendorTokenFields,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        first?: number;
        last?: number;
        after?: PageInfo['endCursor'];
        before?: PageInfo['startCursor'];
        fields?: VendorTokenField[];
        headers?: Headers;
        token?: string;
    } = {}) {
        return (
            await this.api<'vendorTokens'>({
                query: pageQueryGenerator('vendorTokens', fields),
                variables: {
                    filter,
                    sort,
                    first,
                    last,
                    after,
                    before,
                },
                headers,
                token,
            })
        ).data.vendorTokens;
    }

    @bind
    vendorTokensAll({
        filter,
        sort,
        fields = this.defaultVendorTokenFields,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: VendorTokenField[];
        headers?: Headers;
        token?: string;
    } = {}) {
        return this.allPages<VendorToken>((after: PageInfo['endCursor']) =>
            this.vendorTokens({
                filter,
                sort,
                after,
                fields,
                headers,
                token,
            }),
        );
    }

    @bind
    vendorTokensEach({
        filter,
        sort,
        fields = this.defaultVendorTokenFields,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: VendorTokenField[];
        headers?: Headers;
        token?: string;
    } = {}) {
        return this.eachNode<VendorToken>((after: PageInfo['endCursor']) =>
            this.vendorTokens({
                filter,
                sort,
                after,
                fields,
                headers,
                token,
            }),
        );
    }

    @bind
    async createVendorToken({
        input,
        fields = this.defaultVendorTokenFields,
        headers,
        token,
    }: {
        input: VendorTokenInput;
        fields?: VendorTokenField[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'createVendorToken'>({
                query: `mutation($input: VendorTokenInput!) {
                    createVendorToken(input: $input) {
                        ${fields.join(' ')}
                    }
                }`,
                variables: { input },
                headers,
                token,
            })
        ).data.createVendorToken;
    }

    @bind
    async loginVendor({
        input,
        fields = this.defaultVendorTokenFields,
        headers,
        token,
    }: {
        input: LoginVendorInput;
        fields?: VendorTokenField[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'loginVendor'>({
                query: `mutation($input: LoginVendorInput!) {
                    loginVendor(input: $input) {
                        ${fields.join(' ')}
                    }
                }`,
                variables: { input },
                headers,
                token,
            })
        ).data.loginVendor;
    }

    @bind
    async setVendorPassword({
        input,
        fields = this.defaultVendorTokenFields,
        headers,
        token,
    }: {
        input: SetVendorPasswordInput;
        fields?: VendorTokenField[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'setVendorPassword'>({
                query: `mutation($input: SetVendorPasswordInput!) {
                    setVendorPassword(input: $input) {
                        ${fields.join(' ')}
                    }
                }`,
                variables: { input },
                headers,
                token,
            })
        ).data.setVendorPassword;
    }

    @bind
    async deleteVendorToken({
        id,
        headers,
        token,
    }: {
        id: Scalars['ObjectId'];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'deleteVendorToken'>({
                query: `mutation($id: ObjectId!) {
                    deleteVendorToken(id: $id) {
                        id
                    }
                }`,
                variables: { id },
                headers,
                token,
            })
        ).data.deleteVendorToken;
    }

    // ####################################
    // Catalog
    // ####################################

    private defaultCatalogFields = [
        CatalogFields.id,
        CatalogFields.name,
        CatalogFields.remoteId,
        CatalogFields.systemStatus,
        CatalogFields.errors,
    ];

    @bind
    async catalog({
        id,
        fields = this.defaultCatalogFields,
        headers,
        token,
    }: {
        id: Scalars['ObjectId'];
        fields?: CatalogField[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'catalog'>({
                query: `query($id: ObjectId!) {
                    catalog(id: $id) {
                        ${fields.join(' ')}
                    }
                }`,
                variables: { id },
                headers,
                token,
            })
        ).data.catalog;
    }

    @bind
    async catalogs({
        filter,
        sort,
        first,
        last,
        after,
        before,
        fields = this.defaultCatalogFields,
        showDeleted,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        first?: number;
        last?: number;
        after?: PageInfo['endCursor'];
        before?: PageInfo['startCursor'];
        fields?: CatalogField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    } = {}) {
        return (
            await this.api<'catalogs'>({
                query: pageQueryGenerator('catalogs', fields, {
                    showDeleted: 'Boolean',
                }),
                variables: {
                    filter,
                    sort,
                    first,
                    last,
                    after,
                    before,
                    showDeleted,
                },
                headers,
                token,
            })
        ).data.catalogs;
    }

    @bind
    catalogsAll({
        filter,
        sort,
        fields = this.defaultCatalogFields,
        showDeleted,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: CatalogField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    } = {}) {
        return this.allPages<Catalog>((after: PageInfo['endCursor']) =>
            this.catalogs({
                filter,
                sort,
                after,
                fields,
                showDeleted,
                headers,
                token,
            }),
        );
    }

    @bind
    catalogsEach({
        filter,
        sort,
        fields = this.defaultCatalogFields,
        showDeleted,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: CatalogField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    } = {}) {
        return this.eachNode<Catalog>((after: PageInfo['endCursor']) =>
            this.catalogs({
                filter,
                sort,
                after,
                fields,
                showDeleted,
                headers,
                token,
            }),
        );
    }

    @bind
    async createCatalog({
        input,
        fields = this.defaultCatalogFields,
        headers,
        token,
    }: {
        input: CatalogCreateInput;
        fields?: CatalogField[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'createCatalog'>({
                query: `mutation($input: CatalogCreateInput!) {
                    createCatalog(input: $input) {
                        ${fields.join(' ')}
                    }
                }`,
                variables: { input },
                headers,
                token,
            })
        ).data.createCatalog;
    }

    @bind
    async importCatalog({
        input,
        fields = this.defaultCatalogFields,
        headers,
        token,
    }: {
        input: CatalogImportInput;
        fields?: CatalogField[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'importCatalog'>({
                query: `mutation($input: CatalogImportInput!) {
                    importCatalog(input: $input) {
                        ${fields.join(' ')}
                    }
                }`,
                variables: { input },
                headers,
                token,
            })
        ).data.importCatalog;
    }

    @bind
    async updateCatalog({
        id,
        input,
        fields = this.defaultCatalogFields,
        headers,
        token,
    }: {
        id: Scalars['ObjectId'];
        input: CatalogUpdateInput;
        fields?: CatalogField[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'updateCatalog'>({
                query: `mutation($id: ObjectId!, $input: CatalogUpdateInput!) {
                    updateCatalog(id: $id, input: $input) {
                        ${fields.join(' ')}
                    }
                }`,
                variables: { id, input },
                headers,
                token,
            })
        ).data.updateCatalog;
    }

    @bind
    async updateCatalogs({
        input,
        filter,
        sort,
        first,
        last,
        after,
        before,
        fields = this.defaultCatalogFields,
        showDeleted,
        headers,
        token,
    }: {
        input: CatalogUpdateInput;
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        first?: number;
        last?: number;
        after?: PageInfo['endCursor'];
        before?: PageInfo['startCursor'];
        fields?: CatalogField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'updateCatalogs'>({
                query: pageMutationGenerator('updateCatalogs', fields, {
                    input: 'CatalogUpdateInput!',
                    showDeleted: 'Boolean',
                }),
                variables: {
                    input,
                    filter,
                    sort,
                    first,
                    last,
                    after,
                    before,
                    showDeleted,
                },
                headers,
                token,
            })
        ).data.updateCatalogs;
    }

    @bind
    updateCatalogsAll({
        input,
        filter,
        sort,
        fields = this.defaultCatalogFields,
        showDeleted,
        headers,
        token,
    }: {
        input: CatalogUpdateInput;
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: CatalogField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }) {
        return this.allPages<Catalog>((after: PageInfo['endCursor']) =>
            this.updateCatalogs({
                input,
                filter,
                sort,
                after,
                fields,
                showDeleted,
                headers,
                token,
            }),
        );
    }

    @bind
    updateCatalogsEach({
        input,
        filter,
        sort,
        fields = this.defaultCatalogFields,
        showDeleted,
        headers,
        token,
    }: {
        input: CatalogUpdateInput;
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: CatalogField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }) {
        return this.eachNode<Catalog>((after: PageInfo['endCursor']) =>
            this.updateCatalogs({
                input,
                filter,
                sort,
                after,
                first: 1,
                fields,
                showDeleted,
                headers,
                token,
            }),
        );
    }

    @bind
    async deleteCatalog({
        id,
        headers,
        token,
    }: {
        id: Scalars['ObjectId'];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'deleteCatalog'>({
                query: `mutation($id: ObjectId!) {
                    deleteCatalog(id: $id) {
                        id
                    }
                }`,
                variables: { id },
                headers,
                token,
            })
        ).data.deleteCatalog;
    }

    // ####################################
    // Product
    // ####################################

    private defaultProductFields = [
        ProductFields.id,
        ProductFields.name,
        ProductFields.sku,
        ProductFields.systemStatus,
        ProductFields.errors,
        ProductFields.warnings,
    ];

    @bind
    async product({
        id,
        fields = this.defaultProductFields,
        headers,
        token,
    }: {
        id: Scalars['ObjectId'];
        fields?: ProductField[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'product'>({
                query: `query($id: ObjectId!) {
                    product(id: $id) {
                        ${fields.join(' ')}
                    }
                }`,
                variables: { id },
                headers,
                token,
            })
        ).data.product;
    }

    @bind
    async products({
        filter,
        sort,
        first,
        last,
        after,
        before,
        fields = this.defaultProductFields,
        showDeleted,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        first?: number;
        last?: number;
        after?: PageInfo['endCursor'];
        before?: PageInfo['startCursor'];
        fields?: ProductField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    } = {}) {
        return (
            await this.api<'products'>({
                query: pageQueryGenerator('products', fields, {
                    showDeleted: 'Boolean',
                }),
                variables: {
                    filter,
                    sort,
                    first,
                    last,
                    after,
                    before,
                    showDeleted,
                },
                headers,
                token,
            })
        ).data.products;
    }

    @bind
    productsAll({
        filter,
        sort,
        fields = this.defaultProductFields,
        showDeleted,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: ProductField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    } = {}) {
        return this.allPages<Product>((after: PageInfo['endCursor']) =>
            this.products({
                filter,
                sort,
                after,
                fields,
                showDeleted,
                headers,
                token,
            }),
        );
    }

    @bind
    productsEach({
        filter,
        sort,
        fields = this.defaultProductFields,
        showDeleted,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: ProductField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    } = {}) {
        return this.eachNode<Product>((after: PageInfo['endCursor']) =>
            this.products({
                filter,
                sort,
                after,
                fields,
                showDeleted,
                headers,
                token,
            }),
        );
    }

    @bind
    async createProduct({
        input,
        fields = this.defaultProductFields,
        headers,
        token,
    }: {
        input: ProductInput;
        fields?: ProductField[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'createProduct'>({
                query: `mutation($input: ProductInput!) {
                    createProduct(input: $input) {
                        ${fields.join(' ')}
                    }
                }`,
                variables: { input },
                headers,
                token,
            })
        ).data.createProduct;
    }

    @bind
    async updateProduct({
        id,
        input,
        fields = this.defaultProductFields,
        headers,
        token,
    }: {
        id: Scalars['ObjectId'];
        input: ProductUpdateInput;
        fields?: ProductField[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'updateProduct'>({
                query: `mutation($id: ObjectId!, $input: ProductUpdateInput!) {
                    updateProduct(id: $id, input: $input) {
                        ${fields.join(' ')}
                    }
                }`,
                variables: { id, input },
                headers,
                token,
            })
        ).data.updateProduct;
    }

    @bind
    async updateProducts({
        input,
        filter,
        sort,
        first,
        last,
        after,
        before,
        fields = this.defaultProductFields,
        showDeleted,
        headers,
        token,
    }: {
        input: ProductUpdateInput;
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        first?: number;
        last?: number;
        after?: PageInfo['endCursor'];
        before?: PageInfo['startCursor'];
        fields?: ProductField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'updateProducts'>({
                query: pageMutationGenerator('updateProducts', fields, {
                    input: 'ProductUpdateInput!',
                    showDeleted: 'Boolean',
                }),
                variables: {
                    input,
                    filter,
                    sort,
                    first,
                    last,
                    after,
                    before,
                    showDeleted,
                },
                headers,
                token,
            })
        ).data.updateProducts;
    }

    @bind
    updateProductsAll({
        input,
        filter,
        sort,
        fields = this.defaultProductFields,
        showDeleted,
        headers,
        token,
    }: {
        input: ProductUpdateInput;
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: ProductField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }) {
        return this.allPages<Product>((after: PageInfo['endCursor']) =>
            this.updateProducts({
                input,
                filter,
                sort,
                after,
                fields,
                showDeleted,
                headers,
                token,
            }),
        );
    }

    @bind
    updateProductsEach({
        input,
        filter,
        sort,
        fields = this.defaultProductFields,
        showDeleted,
        headers,
        token,
    }: {
        input: ProductUpdateInput;
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: ProductField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }) {
        return this.eachNode<Product>((after: PageInfo['endCursor']) =>
            this.updateProducts({
                input,
                filter,
                sort,
                after,
                first: 1,
                fields,
                showDeleted,
                headers,
                token,
            }),
        );
    }

    @bind
    async deleteProduct({
        id,
        headers,
        token,
    }: {
        id: Scalars['ObjectId'];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'deleteProduct'>({
                query: `mutation($id: ObjectId!) {
                    deleteProduct(id: $id) {
                        id
                    }
                }`,
                variables: { id },
                headers,
                token,
            })
        ).data.deleteProduct;
    }

    // ####################################
    // MarketingCampaign
    // ####################################

    private defaultMarketingCampaignFields = [
        MarketingCampaignFields.id,
        MarketingCampaignFields.status,
        MarketingCampaignFields.systemStatus,
        MarketingCampaignFields.errors,
    ];

    @bind
    async marketingCampaign({
        id,
        fields = this.defaultMarketingCampaignFields,
        headers,
        token,
    }: {
        id: Scalars['ObjectId'];
        fields?: MarketingCampaignField[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'marketingCampaign'>({
                query: `query($id: ObjectId!) {
                    marketingCampaign(id: $id) {
                        ${fields.join(' ')}
                    }
                }`,
                variables: { id },
                headers,
                token,
            })
        ).data.marketingCampaign;
    }

    @bind
    async marketingCampaigns({
        filter,
        sort,
        first,
        last,
        after,
        before,
        fields = this.defaultMarketingCampaignFields,
        showDeleted,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        first?: number;
        last?: number;
        after?: PageInfo['endCursor'];
        before?: PageInfo['startCursor'];
        fields?: MarketingCampaignField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    } = {}) {
        return (
            await this.api<'marketingCampaigns'>({
                query: pageQueryGenerator('marketingCampaigns', fields, {
                    showDeleted: 'Boolean',
                }),
                variables: {
                    filter,
                    sort,
                    first,
                    last,
                    after,
                    before,
                    showDeleted,
                },
                headers,
                token,
            })
        ).data.marketingCampaigns;
    }

    @bind
    marketingCampaignsAll({
        filter,
        sort,
        fields = this.defaultMarketingCampaignFields,
        showDeleted,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: MarketingCampaignField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    } = {}) {
        return this.allPages<MarketingCampaign>(
            (after: PageInfo['endCursor']) =>
                this.marketingCampaigns({
                    filter,
                    sort,
                    after,
                    fields,
                    showDeleted,
                    headers,
                    token,
                }),
        );
    }

    @bind
    marketingCampaignsEach({
        filter,
        sort,
        fields = this.defaultMarketingCampaignFields,
        showDeleted,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: MarketingCampaignField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    } = {}) {
        return this.eachNode<MarketingCampaign>(
            (after: PageInfo['endCursor']) =>
                this.marketingCampaigns({
                    filter,
                    sort,
                    after,
                    fields,
                    showDeleted,
                    headers,
                    token,
                }),
        );
    }

    @bind
    async createMarketingCampaign({
        input,
        fields = this.defaultMarketingCampaignFields,
        headers,
        token,
    }: {
        input: MarketingCampaignInput;
        fields?: MarketingCampaignField[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'createMarketingCampaign'>({
                query: `mutation($input: MarketingCampaignInput!) {
                    createMarketingCampaign(input: $input) {
                        ${fields.join(' ')}
                    }
                }`,
                variables: { input },
                headers,
                token,
            })
        ).data.createMarketingCampaign;
    }

    @bind
    async updateMarketingCampaign({
        id,
        input,
        fields = this.defaultMarketingCampaignFields,
        headers,
        token,
    }: {
        id: Scalars['ObjectId'];
        input: MarketingCampaignUpdateInput;
        fields?: MarketingCampaignField[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'updateMarketingCampaign'>({
                query: `mutation($id: ObjectId!, $input: MarketingCampaignUpdateInput!) {
                    updateMarketingCampaign(id: $id, input: $input) {
                        ${fields.join(' ')}
                    }
                }`,
                variables: { id, input },
                headers,
                token,
            })
        ).data.updateMarketingCampaign;
    }

    @bind
    async updateMarketingCampaigns({
        input,
        filter,
        sort,
        first,
        last,
        after,
        before,
        fields = this.defaultMarketingCampaignFields,
        showDeleted,
        headers,
        token,
    }: {
        input: MarketingCampaignUpdateInput;
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        first?: number;
        last?: number;
        after?: PageInfo['endCursor'];
        before?: PageInfo['startCursor'];
        fields?: MarketingCampaignField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'updateMarketingCampaigns'>({
                query: pageMutationGenerator(
                    'updateMarketingCampaigns',
                    fields,
                    {
                        input: 'MarketingCampaignUpdateInput!',
                        showDeleted: 'Boolean',
                    },
                ),
                variables: {
                    input,
                    filter,
                    sort,
                    first,
                    last,
                    after,
                    before,
                    showDeleted,
                },
                headers,
                token,
            })
        ).data.updateMarketingCampaigns;
    }

    @bind
    updateMarketingCampaignsAll({
        input,
        filter,
        sort,
        fields = this.defaultMarketingCampaignFields,
        showDeleted,
        headers,
        token,
    }: {
        input: MarketingCampaignUpdateInput;
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: MarketingCampaignField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }) {
        return this.allPages<MarketingCampaign>(
            (after: PageInfo['endCursor']) =>
                this.updateMarketingCampaigns({
                    input,
                    filter,
                    sort,
                    after,
                    fields,
                    showDeleted,
                    headers,
                    token,
                }),
        );
    }

    @bind
    updateMarketingCampaignsEach({
        input,
        filter,
        sort,
        fields = this.defaultMarketingCampaignFields,
        showDeleted,
        headers,
        token,
    }: {
        input: MarketingCampaignUpdateInput;
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: MarketingCampaignField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }) {
        return this.eachNode<MarketingCampaign>(
            (after: PageInfo['endCursor']) =>
                this.updateMarketingCampaigns({
                    input,
                    filter,
                    sort,
                    after,
                    first: 1,
                    fields,
                    showDeleted,
                    headers,
                    token,
                }),
        );
    }

    @bind
    async approveMarketingCampaign({
        id,
        lastChangeDate,
        fields = this.defaultMarketingCampaignFields,
        headers,
        token,
    }: {
        id: Scalars['ObjectId'];
        lastChangeDate: Scalars['DateISO'];
        fields?: MarketingCampaignField[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'approveMarketingCampaign'>({
                query: `mutation($id: ObjectId!, $lastChangeDate: DateISO!) {
                    approveMarketingCampaign(id: $id, lastChangeDate: $lastChangeDate) {
                        ${fields.join(' ')}
                    }
                }`,
                variables: { id, lastChangeDate },
                headers,
                token,
            })
        ).data.approveMarketingCampaign;
    }

    @bind
    async syncMarketingCampaign({
        id,
        input,
        headers,
        token,
    }: {
        id: Scalars['ObjectId'];
        input: MarketingCampaignSyncInput;
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'syncMarketingCampaign'>({
                query: `mutation($id: ObjectId!, $input: MarketingCampaignSyncInput) {
                    syncMarketingCampaign(id: $id, input: $input) {
                        id
                    }
                }`,
                variables: { id, input },
                headers,
                token,
            })
        ).data.syncMarketingCampaign;
    }

    @bind
    async deleteMarketingCampaign({
        id,
        headers,
        token,
    }: {
        id: Scalars['ObjectId'];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'deleteMarketingCampaign'>({
                query: `mutation($id: ObjectId!) {
                    deleteMarketingCampaign(id: $id) {
                        id
                    }
                }`,
                variables: { id },
                headers,
                token,
            })
        ).data.deleteMarketingCampaign;
    }

    // ####################################
    // MarketingAd
    // ####################################

    private defaultMarketingAdFields = [
        MarketingAdFields.id,
        MarketingAdFields.remoteId,
    ];

    @bind
    async marketingAd({
        id,
        fields = this.defaultMarketingAdFields,
        headers,
        token,
    }: {
        id: Scalars['ObjectId'];
        fields?: MarketingAdField[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'marketingAd'>({
                query: `query($id: ObjectId!) {
                    marketingAd(id: $id) {
                        ${fields.join(' ')}
                    }
                }`,
                variables: { id },
                headers,
                token,
            })
        ).data.marketingAd;
    }

    @bind
    async marketingAds({
        filter,
        sort,
        first,
        last,
        after,
        before,
        fields = this.defaultMarketingAdFields,
        showDeleted,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        first?: number;
        last?: number;
        after?: PageInfo['endCursor'];
        before?: PageInfo['startCursor'];
        fields?: MarketingAdField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    } = {}) {
        return (
            await this.api<'marketingAds'>({
                query: pageQueryGenerator('marketingAds', fields, {
                    showDeleted: 'Boolean',
                }),
                variables: {
                    filter,
                    sort,
                    first,
                    last,
                    after,
                    before,
                    showDeleted,
                },
                headers,
                token,
            })
        ).data.marketingAds;
    }

    @bind
    marketingAdsAll({
        filter,
        sort,
        fields = this.defaultMarketingAdFields,
        showDeleted,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: MarketingAdField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    } = {}) {
        return this.allPages<MarketingAd>((after: PageInfo['endCursor']) =>
            this.marketingAds({
                filter,
                sort,
                after,
                fields,
                showDeleted,
                headers,
                token,
            }),
        );
    }

    @bind
    marketingAdsEach({
        filter,
        sort,
        fields = this.defaultMarketingAdFields,
        showDeleted,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: MarketingAdField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    } = {}) {
        return this.eachNode<MarketingAd>((after: PageInfo['endCursor']) =>
            this.marketingAds({
                filter,
                sort,
                after,
                fields,
                showDeleted,
                headers,
                token,
            }),
        );
    }

    // ####################################
    // Result
    // ####################################

    private defaultResultFields = [
        ResultFields.id,
        ResultFields.date,
        ResultFields.analytics.results,
        ResultFields.analytics.impressions,
        ResultFields.analytics.clicks,
        ResultFields.analytics.spend,
        ResultFields.analytics.purchases,
        ResultFields.analytics.purchasesValue,
    ];

    @bind
    async result({
        id,
        fields = this.defaultResultFields,
        headers,
        token,
    }: {
        id: Scalars['ObjectId'];
        fields?: ResultField[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'result'>({
                query: `query($id: ObjectId!) {
                    result(id: $id) {
                        ${fields.join(' ')}
                    }
                }`,
                variables: { id },
                headers,
                token,
            })
        ).data.result;
    }

    @bind
    async results({
        filter,
        sort,
        first,
        last,
        after,
        before,
        fields = this.defaultResultFields,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        first?: number;
        last?: number;
        after?: PageInfo['endCursor'];
        before?: PageInfo['startCursor'];
        fields?: ResultField[];
        headers?: Headers;
        token?: string;
    } = {}) {
        return (
            await this.api<'results'>({
                query: pageQueryGenerator('results', fields),
                variables: { filter, sort, first, last, after, before },
                headers,
                token,
            })
        ).data.results;
    }

    @bind
    resultsAll({
        filter,
        sort,
        fields = this.defaultResultFields,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: ResultField[];
        headers?: Headers;
        token?: string;
    } = {}) {
        return this.allPages<Result>((after: PageInfo['endCursor']) =>
            this.results({ filter, sort, after, fields, headers, token }),
        );
    }

    @bind
    resultsEach({
        filter,
        sort,
        fields = this.defaultResultFields,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: ResultField[];
        headers?: Headers;
        token?: string;
    } = {}) {
        return this.eachNode<Result>((after: PageInfo['endCursor']) =>
            this.results({ filter, sort, after, fields, headers, token }),
        );
    }

    // ####################################
    // Entitlement
    // ####################################

    private defaultEntitlementFields = [
        EntitlementFields.id,
        EntitlementFields.permissions,
        EntitlementFields.type,
    ];

    @bind
    async entitlement({
        id,
        fields = this.defaultEntitlementFields,
        headers,
        token,
    }: {
        id: Scalars['ObjectId'];
        fields?: EntitlementField[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'entitlement'>({
                query: `query($id: ObjectId!) {
                    entitlement(id: $id) {
                        ${fields.join(' ')}
                    }
                }`,
                variables: { id },
                headers,
                token,
            })
        ).data.entitlement;
    }

    @bind
    async entitlements({
        filter,
        sort,
        first,
        last,
        after,
        before,
        fields = this.defaultEntitlementFields,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        first?: number;
        last?: number;
        after?: PageInfo['endCursor'];
        before?: PageInfo['startCursor'];
        fields?: EntitlementField[];
        headers?: Headers;
        token?: string;
    } = {}) {
        return (
            await this.api<'entitlements'>({
                query: pageQueryGenerator('entitlements', fields),
                variables: { filter, sort, first, last, after, before },
                headers,
                token,
            })
        ).data.entitlements;
    }

    @bind
    entitlementsAll({
        filter,
        sort,
        fields = this.defaultEntitlementFields,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: EntitlementField[];
        headers?: Headers;
        token?: string;
    } = {}) {
        return this.allPages<Entitlement>((after: PageInfo['endCursor']) =>
            this.entitlements({ filter, sort, after, fields, headers, token }),
        );
    }

    @bind
    entitlementsEach({
        filter,
        sort,
        fields = this.defaultEntitlementFields,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: EntitlementField[];
        headers?: Headers;
        token?: string;
    } = {}) {
        return this.eachNode<Entitlement>((after: PageInfo['endCursor']) =>
            this.entitlements({ filter, sort, after, fields, headers, token }),
        );
    }

    @bind
    async createEntitlement({
        input,
        fields = this.defaultEntitlementFields,
        headers,
        token,
    }: {
        input: EntitlementInput;
        fields?: EntitlementField[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'createEntitlement'>({
                query: `mutation($input: EntitlementInput!) {
                    createEntitlement(input: $input) {
                        ${fields.join(' ')}
                    }
                }`,
                variables: { input },
                headers,
                token,
            })
        ).data.createEntitlement;
    }

    @bind
    async updateEntitlement({
        id,
        input,
        fields = this.defaultEntitlementFields,
        headers,
        token,
    }: {
        id: Scalars['ObjectId'];
        input: EntitlementUpdateInput;
        fields?: EntitlementField[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'updateEntitlement'>({
                query: `mutation($id: ObjectId!, $input: EntitlementUpdateInput!) {
                    updateEntitlement(id: $id, input: $input) {
                        ${fields.join(' ')}
                    }
                }`,
                variables: { id, input },
                headers,
                token,
            })
        ).data.updateEntitlement;
    }

    @bind
    async updateEntitlements({
        input,
        filter,
        sort,
        first,
        last,
        after,
        before,
        fields = this.defaultEntitlementFields,
        headers,
        token,
    }: {
        input: EntitlementUpdateInput;
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        first?: number;
        last?: number;
        after?: PageInfo['endCursor'];
        before?: PageInfo['startCursor'];
        fields?: EntitlementField[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'updateEntitlements'>({
                query: pageMutationGenerator('updateEntitlements', fields, {
                    input: 'EntitlementUpdateInput!',
                }),
                variables: {
                    input,
                    filter,
                    sort,
                    first,
                    last,
                    after,
                    before,
                },
                headers,
                token,
            })
        ).data.updateEntitlements;
    }

    @bind
    updateEntitlementsAll({
        input,
        filter,
        sort,
        fields = this.defaultEntitlementFields,
        headers,
        token,
    }: {
        input: EntitlementUpdateInput;
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: EntitlementField[];
        headers?: Headers;
        token?: string;
    }) {
        return this.allPages<Entitlement>((after: PageInfo['endCursor']) =>
            this.updateEntitlements({
                input,
                filter,
                sort,
                after,
                fields,
                headers,
                token,
            }),
        );
    }

    @bind
    updateEntitlementsEach({
        input,
        filter,
        sort,
        fields = this.defaultEntitlementFields,
        headers,
        token,
    }: {
        input: EntitlementUpdateInput;
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: EntitlementField[];
        headers?: Headers;
        token?: string;
    }) {
        return this.eachNode<Entitlement>((after: PageInfo['endCursor']) =>
            this.updateEntitlements({
                input,
                filter,
                sort,
                after,
                first: 1,
                fields,
                headers,
                token,
            }),
        );
    }

    @bind
    async deleteEntitlement({
        id,
        headers,
        token,
    }: {
        id: Scalars['ObjectId'];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'deleteEntitlement'>({
                query: `mutation($id: ObjectId!) {
                    deleteEntitlement(id: $id) {
                        id
                    }
                }`,
                variables: { id },
                headers,
                token,
            })
        ).data.deleteEntitlement;
    }

    // ####################################
    // CreativeFont
    // ####################################

    private defaultCreativeFontFields = [
        CreativeFontFields.id,
        CreativeFontFields.name,
    ];

    @bind
    async creativeFont({
        id,
        fields = this.defaultCreativeFontFields,
        headers,
        token,
    }: {
        id: Scalars['ObjectId'];
        fields?: CreativeFontField[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'creativeFont'>({
                query: `query($id: ObjectId!) {
                    creativeFont(id: $id) {
                        ${fields.join(' ')}
                    }
                }`,
                variables: { id },
                headers,
                token,
            })
        ).data.creativeFont;
    }

    @bind
    async creativeFonts({
        filter,
        sort,
        first,
        last,
        after,
        before,
        fields = this.defaultCreativeFontFields,
        showDeleted,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        first?: number;
        last?: number;
        after?: PageInfo['endCursor'];
        before?: PageInfo['startCursor'];
        fields?: CreativeFontField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    } = {}) {
        return (
            await this.api<'creativeFonts'>({
                query: pageQueryGenerator('creativeFonts', fields, {
                    showDeleted: 'Boolean',
                }),
                variables: {
                    filter,
                    sort,
                    first,
                    last,
                    after,
                    before,
                    showDeleted,
                },
                headers,
                token,
            })
        ).data.creativeFonts;
    }

    @bind
    creativeFontsAll({
        filter,
        sort,
        fields = this.defaultCreativeFontFields,
        showDeleted,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: CreativeFontField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    } = {}) {
        return this.allPages<CreativeFont>((after: PageInfo['endCursor']) =>
            this.creativeFonts({
                filter,
                sort,
                after,
                fields,
                showDeleted,
                headers,
                token,
            }),
        );
    }

    @bind
    creativeFontsEach({
        filter,
        sort,
        fields = this.defaultCreativeFontFields,
        showDeleted,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: CreativeFontField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    } = {}) {
        return this.eachNode<CreativeFont>((after: PageInfo['endCursor']) =>
            this.creativeFonts({
                filter,
                sort,
                after,
                fields,
                showDeleted,
                headers,
                token,
            }),
        );
    }

    @bind
    async createCreativeFont({
        input,
        fields = this.defaultCreativeFontFields,
        headers,
        token,
    }: {
        input: CreativeFontCreateInput;
        fields?: CreativeFontField[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'createCreativeFont'>({
                query: `mutation($input: CreativeFontCreateInput!) {
                    createCreativeFont(input: $input) {
                        ${fields.join(' ')}
                    }
                }`,
                variables: { input },
                headers,
                token,
            })
        ).data.createCreativeFont;
    }

    @bind
    async updateCreativeFont({
        id,
        input,
        fields = this.defaultCreativeFontFields,
        headers,
        token,
    }: {
        id: Scalars['ObjectId'];
        input: CreativeFontUpdateInput;
        fields?: CreativeFontField[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'updateCreativeFont'>({
                query: `mutation($id: ObjectId!, $input: CreativeFontUpdateInput!) {
                    updateCreativeFont(id: $id, input: $input) {
                        ${fields.join(' ')}
                    }
                }`,
                variables: { id, input },
                headers,
                token,
            })
        ).data.updateCreativeFont;
    }

    @bind
    async updateCreativeFonts({
        input,
        filter,
        sort,
        first,
        last,
        after,
        before,
        fields = this.defaultCreativeFontFields,
        showDeleted,
        headers,
        token,
    }: {
        input: CreativeFontUpdateInput;
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        first?: number;
        last?: number;
        after?: PageInfo['endCursor'];
        before?: PageInfo['startCursor'];
        fields?: CreativeFontField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'updateCreativeFonts'>({
                query: pageMutationGenerator('updateCreativeFonts', fields, {
                    input: 'CreativeFontUpdateInput!',
                    showDeleted: 'Boolean',
                }),
                variables: {
                    input,
                    filter,
                    sort,
                    first,
                    last,
                    after,
                    before,
                    showDeleted,
                },
                headers,
                token,
            })
        ).data.updateCreativeFonts;
    }

    @bind
    updateCreativeFontsAll({
        input,
        filter,
        sort,
        fields = this.defaultCreativeFontFields,
        showDeleted,
        headers,
        token,
    }: {
        input: CreativeFontUpdateInput;
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: CreativeFontField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }) {
        return this.allPages<CreativeFont>((after: PageInfo['endCursor']) =>
            this.updateCreativeFonts({
                input,
                filter,
                sort,
                after,
                fields,
                showDeleted,
                headers,
                token,
            }),
        );
    }

    @bind
    updateCreativeFontsEach({
        input,
        filter,
        sort,
        fields = this.defaultCreativeFontFields,
        showDeleted,
        headers,
        token,
    }: {
        input: CreativeFontUpdateInput;
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: CreativeFontField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }) {
        return this.eachNode<CreativeFont>((after: PageInfo['endCursor']) =>
            this.updateCreativeFonts({
                input,
                filter,
                sort,
                after,
                first: 1,
                fields,
                showDeleted,
                headers,
                token,
            }),
        );
    }

    @bind
    async deleteCreativeFont({
        id,
        headers,
        token,
    }: {
        id: Scalars['ObjectId'];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'deleteCreativeFont'>({
                query: `mutation($id: ObjectId!) {
                    deleteCreativeFont(id: $id) {
                        id
                    }
                }`,
                variables: { id },
                headers,
                token,
            })
        ).data.deleteCreativeFont;
    }

    // ####################################
    // CreativeImage
    // ####################################

    private defaultCreativeImageFields = [
        CreativeImageFields.id,
        CreativeImageFields.name,
    ];

    @bind
    async creativeImage({
        id,
        fields = this.defaultCreativeImageFields,
        headers,
        token,
    }: {
        id: Scalars['ObjectId'];
        fields?: CreativeImageField[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'creativeImage'>({
                query: `query($id: ObjectId!) {
                    creativeImage(id: $id) {
                        ${fields.join(' ')}
                    }
                }`,
                variables: { id },
                headers,
                token,
            })
        ).data.creativeImage;
    }

    @bind
    async creativeImages({
        filter,
        sort,
        first,
        last,
        after,
        before,
        fields = this.defaultCreativeImageFields,
        showDeleted,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        first?: number;
        last?: number;
        after?: PageInfo['endCursor'];
        before?: PageInfo['startCursor'];
        fields?: CreativeImageField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    } = {}) {
        return (
            await this.api<'creativeImages'>({
                query: pageQueryGenerator('creativeImages', fields, {
                    showDeleted: 'Boolean',
                }),
                variables: {
                    filter,
                    sort,
                    first,
                    last,
                    after,
                    before,
                    showDeleted,
                },
                headers,
                token,
            })
        ).data.creativeImages;
    }

    @bind
    creativeImagesAll({
        filter,
        sort,
        fields = this.defaultCreativeImageFields,
        showDeleted,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: CreativeImageField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    } = {}) {
        return this.allPages<CreativeImage>((after: PageInfo['endCursor']) =>
            this.creativeImages({
                filter,
                sort,
                after,
                fields,
                showDeleted,
                headers,
                token,
            }),
        );
    }

    @bind
    creativeImagesEach({
        filter,
        sort,
        fields = this.defaultCreativeImageFields,
        showDeleted,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: CreativeImageField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    } = {}) {
        return this.eachNode<CreativeImage>((after: PageInfo['endCursor']) =>
            this.creativeImages({
                filter,
                sort,
                after,
                fields,
                showDeleted,
                headers,
                token,
            }),
        );
    }

    @bind
    async createCreativeImage({
        input,
        fields = this.defaultCreativeImageFields,
        headers,
        token,
    }: {
        input: CreativeImageCreateInput;
        fields?: CreativeImageField[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'createCreativeImage'>({
                query: `mutation($input: CreativeImageCreateInput!) {
                    createCreativeImage(input: $input) {
                        ${fields.join(' ')}
                    }
                }`,
                variables: { input },
                headers,
                token,
            })
        ).data.createCreativeImage;
    }

    @bind
    async updateCreativeImage({
        id,
        input,
        fields = this.defaultCreativeImageFields,
        headers,
        token,
    }: {
        id: Scalars['ObjectId'];
        input: CreativeImageUpdateInput;
        fields?: CreativeImageField[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'updateCreativeImage'>({
                query: `mutation($id: ObjectId!, $input: CreativeImageUpdateInput!) {
                    updateCreativeImage(id: $id, input: $input) {
                        ${fields.join(' ')}
                    }
                }`,
                variables: { id, input },
                headers,
                token,
            })
        ).data.updateCreativeImage;
    }

    @bind
    async updateCreativeImages({
        input,
        filter,
        sort,
        first,
        last,
        after,
        before,
        fields = this.defaultCreativeImageFields,
        showDeleted,
        headers,
        token,
    }: {
        input: CreativeImageUpdateInput;
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        first?: number;
        last?: number;
        after?: PageInfo['endCursor'];
        before?: PageInfo['startCursor'];
        fields?: CreativeImageField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'updateCreativeImages'>({
                query: pageMutationGenerator('updateCreativeImages', fields, {
                    input: 'CreativeImageUpdateInput!',
                    showDeleted: 'Boolean',
                }),
                variables: {
                    input,
                    filter,
                    sort,
                    first,
                    last,
                    after,
                    before,
                    showDeleted,
                },
                headers,
                token,
            })
        ).data.updateCreativeImages;
    }

    @bind
    updateCreativeImagesAll({
        input,
        filter,
        sort,
        fields = this.defaultCreativeImageFields,
        showDeleted,
        headers,
        token,
    }: {
        input: CreativeImageUpdateInput;
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: CreativeImageField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }) {
        return this.allPages<CreativeImage>((after: PageInfo['endCursor']) =>
            this.updateCreativeImages({
                input,
                filter,
                sort,
                after,
                fields,
                showDeleted,
                headers,
                token,
            }),
        );
    }

    @bind
    updateCreativeImagesEach({
        input,
        filter,
        sort,
        fields = this.defaultCreativeImageFields,
        showDeleted,
        headers,
        token,
    }: {
        input: CreativeImageUpdateInput;
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: CreativeImageField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }) {
        return this.eachNode<CreativeImage>((after: PageInfo['endCursor']) =>
            this.updateCreativeImages({
                input,
                filter,
                sort,
                after,
                first: 1,
                fields,
                showDeleted,
                headers,
                token,
            }),
        );
    }

    @bind
    async deleteCreativeImage({
        id,
        headers,
        token,
    }: {
        id: Scalars['ObjectId'];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'deleteCreativeImage'>({
                query: `mutation($id: ObjectId!) {
                    deleteCreativeImage(id: $id) {
                        id
                    }
                }`,
                variables: { id },
                headers,
                token,
            })
        ).data.deleteCreativeImage;
    }

    // ####################################
    // CreativeLayer
    // ####################################

    private defaultCreativeLayerFields = [
        CreativeLayerFields.id,
        CreativeLayerFields.name,
    ];

    @bind
    async creativeLayer({
        id,
        fields = this.defaultCreativeLayerFields,
        headers,
        token,
    }: {
        id: Scalars['ObjectId'];
        fields?: CreativeLayerField[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'creativeLayer'>({
                query: `query($id: ObjectId!) {
                    creativeLayer(id: $id) {
                        ${fields.join(' ')}
                    }
                }`,
                variables: { id },
                headers,
                token,
            })
        ).data.creativeLayer;
    }

    @bind
    async creativeLayers({
        filter,
        sort,
        first,
        last,
        after,
        before,
        fields = this.defaultCreativeLayerFields,
        showDeleted,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        first?: number;
        last?: number;
        after?: PageInfo['endCursor'];
        before?: PageInfo['startCursor'];
        fields?: CreativeLayerField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    } = {}) {
        return (
            await this.api<'creativeLayers'>({
                query: pageQueryGenerator('creativeLayers', fields, {
                    showDeleted: 'Boolean',
                }),
                variables: {
                    filter,
                    sort,
                    first,
                    last,
                    after,
                    before,
                    showDeleted,
                },
                headers,
                token,
            })
        ).data.creativeLayers;
    }

    @bind
    creativeLayersAll({
        filter,
        sort,
        fields = this.defaultCreativeLayerFields,
        showDeleted,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: CreativeLayerField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    } = {}) {
        return this.allPages<CreativeLayer>((after: PageInfo['endCursor']) =>
            this.creativeLayers({
                filter,
                sort,
                after,
                fields,
                showDeleted,
                headers,
                token,
            }),
        );
    }

    @bind
    creativeLayersEach({
        filter,
        sort,
        fields = this.defaultCreativeLayerFields,
        showDeleted,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: CreativeLayerField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    } = {}) {
        return this.eachNode<CreativeLayer>((after: PageInfo['endCursor']) =>
            this.creativeLayers({
                filter,
                sort,
                after,
                fields,
                showDeleted,
                headers,
                token,
            }),
        );
    }

    @bind
    async createCreativeLayer({
        input,
        fields = this.defaultCreativeLayerFields,
        headers,
        token,
    }: {
        input: CreativeLayerCreateInput;
        fields?: CreativeLayerField[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'createCreativeLayer'>({
                query: `mutation($input: CreativeLayerCreateInput!) {
                    createCreativeLayer(input: $input) {
                        ${fields.join(' ')}
                    }
                }`,
                variables: { input },
                headers,
                token,
            })
        ).data.createCreativeLayer;
    }

    @bind
    async updateCreativeLayer({
        id,
        input,
        fields = this.defaultCreativeLayerFields,
        headers,
        token,
    }: {
        id: Scalars['ObjectId'];
        input: CreativeLayerUpdateInput;
        fields?: CreativeLayerField[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'updateCreativeLayer'>({
                query: `mutation($id: ObjectId!, $input: CreativeLayerUpdateInput!) {
                    updateCreativeLayer(id: $id, input: $input) {
                        ${fields.join(' ')}
                    }
                }`,
                variables: { id, input },
                headers,
                token,
            })
        ).data.updateCreativeLayer;
    }

    @bind
    async updateCreativeLayers({
        input,
        filter,
        sort,
        first,
        last,
        after,
        before,
        fields = this.defaultCreativeLayerFields,
        showDeleted,
        headers,
        token,
    }: {
        input: CreativeLayerUpdateInput;
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        first?: number;
        last?: number;
        after?: PageInfo['endCursor'];
        before?: PageInfo['startCursor'];
        fields?: CreativeLayerField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'updateCreativeLayers'>({
                query: pageMutationGenerator('updateCreativeLayers', fields, {
                    input: 'CreativeLayerUpdateInput!',
                    showDeleted: 'Boolean',
                }),
                variables: {
                    input,
                    filter,
                    sort,
                    first,
                    last,
                    after,
                    before,
                    showDeleted,
                },
                headers,
                token,
            })
        ).data.updateCreativeLayers;
    }

    @bind
    updateCreativeLayersAll({
        input,
        filter,
        sort,
        fields = this.defaultCreativeLayerFields,
        showDeleted,
        headers,
        token,
    }: {
        input: CreativeLayerUpdateInput;
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: CreativeLayerField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }) {
        return this.allPages<CreativeLayer>((after: PageInfo['endCursor']) =>
            this.updateCreativeLayers({
                input,
                filter,
                sort,
                after,
                fields,
                showDeleted,
                headers,
                token,
            }),
        );
    }

    @bind
    updateCreativeLayersEach({
        input,
        filter,
        sort,
        fields = this.defaultCreativeLayerFields,
        showDeleted,
        headers,
        token,
    }: {
        input: CreativeLayerUpdateInput;
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: CreativeLayerField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }) {
        return this.eachNode<CreativeLayer>((after: PageInfo['endCursor']) =>
            this.updateCreativeLayers({
                input,
                filter,
                sort,
                after,
                first: 1,
                fields,
                showDeleted,
                headers,
                token,
            }),
        );
    }

    @bind
    async deleteCreativeLayer({
        id,
        headers,
        token,
    }: {
        id: Scalars['ObjectId'];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'deleteCreativeLayer'>({
                query: `mutation($id: ObjectId!) {
                    deleteCreativeLayer(id: $id) {
                        id
                    }
                }`,
                variables: { id },
                headers,
                token,
            })
        ).data.deleteCreativeLayer;
    }

    // ####################################
    // CreativeTemplate
    // ####################################

    private defaultCreativeTemplateFields = [
        CreativeTemplateFields.id,
        CreativeTemplateFields.name,
    ];

    @bind
    async creativeTemplate({
        id,
        fields = this.defaultCreativeTemplateFields,
        headers,
        token,
    }: {
        id: Scalars['ObjectId'];
        fields?: CreativeTemplateField[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'creativeTemplate'>({
                query: `query($id: ObjectId!) {
                    creativeTemplate(id: $id) {
                        ${fields.join(' ')}
                    }
                }`,
                variables: { id },
                headers,
                token,
            })
        ).data.creativeTemplate;
    }

    @bind
    async creativeTemplates({
        filter,
        sort,
        first,
        last,
        after,
        before,
        fields = this.defaultCreativeTemplateFields,
        showDeleted,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        first?: number;
        last?: number;
        after?: PageInfo['endCursor'];
        before?: PageInfo['startCursor'];
        fields?: CreativeTemplateField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    } = {}) {
        return (
            await this.api<'creativeTemplates'>({
                query: pageQueryGenerator('creativeTemplates', fields, {
                    showDeleted: 'Boolean',
                }),
                variables: {
                    filter,
                    sort,
                    first,
                    last,
                    after,
                    before,
                    showDeleted,
                },
                headers,
                token,
            })
        ).data.creativeTemplates;
    }

    @bind
    creativeTemplatesAll({
        filter,
        sort,
        fields = this.defaultCreativeTemplateFields,
        showDeleted,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: CreativeTemplateField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    } = {}) {
        return this.allPages<CreativeTemplate>((after: PageInfo['endCursor']) =>
            this.creativeTemplates({
                filter,
                sort,
                after,
                fields,
                showDeleted,
                headers,
                token,
            }),
        );
    }

    @bind
    creativeTemplatesEach({
        filter,
        sort,
        fields = this.defaultCreativeTemplateFields,
        showDeleted,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: CreativeTemplateField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    } = {}) {
        return this.eachNode<CreativeTemplate>((after: PageInfo['endCursor']) =>
            this.creativeTemplates({
                filter,
                sort,
                after,
                fields,
                showDeleted,
                headers,
                token,
            }),
        );
    }

    @bind
    async createCreativeTemplate({
        input,
        fields = this.defaultCreativeTemplateFields,
        headers,
        token,
    }: {
        input: CreativeTemplateCreateInput;
        fields?: CreativeTemplateField[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'createCreativeTemplate'>({
                query: `mutation($input: CreativeTemplateCreateInput!) {
                    createCreativeTemplate(input: $input) {
                        ${fields.join(' ')}
                    }
                }`,
                variables: { input },
                headers,
                token,
            })
        ).data.createCreativeTemplate;
    }

    @bind
    async updateCreativeTemplate({
        id,
        input,
        fields = this.defaultCreativeTemplateFields,
        headers,
        token,
    }: {
        id: Scalars['ObjectId'];
        input: CreativeTemplateUpdateInput;
        fields?: CreativeTemplateField[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'updateCreativeTemplate'>({
                query: `mutation($id: ObjectId!, $input: CreativeTemplateUpdateInput!) {
                    updateCreativeTemplate(id: $id, input: $input) {
                        ${fields.join(' ')}
                    }
                }`,
                variables: { id, input },
                headers,
                token,
            })
        ).data.updateCreativeTemplate;
    }

    @bind
    async updateCreativeTemplates({
        input,
        filter,
        sort,
        first,
        last,
        after,
        before,
        fields = this.defaultCreativeTemplateFields,
        showDeleted,
        headers,
        token,
    }: {
        input: CreativeTemplateUpdateInput;
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        first?: number;
        last?: number;
        after?: PageInfo['endCursor'];
        before?: PageInfo['startCursor'];
        fields?: CreativeTemplateField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'updateCreativeTemplates'>({
                query: pageMutationGenerator(
                    'updateCreativeTemplates',
                    fields,
                    {
                        input: 'CreativeTemplateUpdateInput!',
                        showDeleted: 'Boolean',
                    },
                ),
                variables: {
                    input,
                    filter,
                    sort,
                    first,
                    last,
                    after,
                    before,
                    showDeleted,
                },
                headers,
                token,
            })
        ).data.updateCreativeTemplates;
    }

    @bind
    updateCreativeTemplatesAll({
        input,
        filter,
        sort,
        fields = this.defaultCreativeTemplateFields,
        showDeleted,
        headers,
        token,
    }: {
        input: CreativeTemplateUpdateInput;
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: CreativeTemplateField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }) {
        return this.allPages<CreativeTemplate>((after: PageInfo['endCursor']) =>
            this.updateCreativeTemplates({
                input,
                filter,
                sort,
                after,
                fields,
                showDeleted,
                headers,
                token,
            }),
        );
    }

    @bind
    updateCreativeTemplatesEach({
        input,
        filter,
        sort,
        fields = this.defaultCreativeTemplateFields,
        showDeleted,
        headers,
        token,
    }: {
        input: CreativeTemplateUpdateInput;
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: CreativeTemplateField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }) {
        return this.eachNode<CreativeTemplate>((after: PageInfo['endCursor']) =>
            this.updateCreativeTemplates({
                input,
                filter,
                sort,
                after,
                first: 1,
                fields,
                showDeleted,
                headers,
                token,
            }),
        );
    }

    @bind
    async deleteCreativeTemplate({
        id,
        headers,
        token,
    }: {
        id: Scalars['ObjectId'];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'deleteCreativeTemplate'>({
                query: `mutation($id: ObjectId!) {
                    deleteCreativeTemplate(id: $id) {
                        id
                    }
                }`,
                variables: { id },
                headers,
                token,
            })
        ).data.deleteCreativeTemplate;
    }

    // ####################################
    // Notification
    // ####################################

    private defaultNotificationFields = [
        NotificationFields.id,
        NotificationFields.title,
        NotificationFields.message,
        NotificationFields.status,
        NotificationFields.severity,
        NotificationFields.code,
    ];

    @bind
    async notification({
        id,
        fields = this.defaultNotificationFields,
        headers,
        token,
    }: {
        id: Scalars['ObjectId'];
        fields?: NotificationField[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'notification'>({
                query: `query($id: ObjectId!) {
                    notification(id: $id) {
                        ${fields.join(' ')}
                    }
                }`,
                variables: { id },
                headers,
                token,
            })
        ).data.notification;
    }

    @bind
    async notifications({
        filter,
        sort,
        first,
        last,
        after,
        before,
        fields = this.defaultNotificationFields,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        first?: number;
        last?: number;
        after?: PageInfo['endCursor'];
        before?: PageInfo['startCursor'];
        fields?: NotificationField[];
        headers?: Headers;
        token?: string;
    } = {}) {
        return (
            await this.api<'notifications'>({
                query: pageQueryGenerator('notifications', fields),
                variables: {
                    filter,
                    sort,
                    first,
                    last,
                    after,
                    before,
                },
                headers,
                token,
            })
        ).data.notifications;
    }

    @bind
    notificationsAll({
        filter,
        sort,
        fields = this.defaultNotificationFields,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: NotificationField[];
        headers?: Headers;
        token?: string;
    } = {}) {
        return this.allPages<Notification>((after: PageInfo['endCursor']) =>
            this.notifications({
                filter,
                sort,
                after,
                fields,
                headers,
                token,
            }),
        );
    }

    @bind
    notificationsEach({
        filter,
        sort,
        fields = this.defaultNotificationFields,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: NotificationField[];
        headers?: Headers;
        token?: string;
    } = {}) {
        return this.eachNode<Notification>((after: PageInfo['endCursor']) =>
            this.notifications({
                filter,
                sort,
                after,
                fields,
                headers,
                token,
            }),
        );
    }

    @bind
    async updateNotification({
        id,
        input,
        fields = this.defaultNotificationFields,
        headers,
        token,
    }: {
        id: Scalars['ObjectId'];
        input: NotificationUpdateInput;
        fields?: NotificationField[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'updateNotification'>({
                query: `mutation($id: ObjectId!, $input: NotificationUpdateInput!) {
                    updateNotification(id: $id, input: $input) {
                        ${fields.join(' ')}
                    }
                }`,
                variables: { id, input },
                headers,
                token,
            })
        ).data.updateNotification;
    }

    @bind
    async updateNotifications({
        input,
        filter,
        sort,
        first,
        last,
        after,
        before,
        fields = this.defaultNotificationFields,
        headers,
        token,
    }: {
        input: NotificationUpdateInput;
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        first?: number;
        last?: number;
        after?: PageInfo['endCursor'];
        before?: PageInfo['startCursor'];
        fields?: NotificationField[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'updateNotifications'>({
                query: pageMutationGenerator('updateNotifications', fields, {
                    input: 'NotificationUpdateInput!',
                }),
                variables: {
                    input,
                    filter,
                    sort,
                    first,
                    last,
                    after,
                    before,
                },
                headers,
                token,
            })
        ).data.updateNotifications;
    }

    @bind
    updateNotificationsAll({
        input,
        filter,
        sort,
        fields = this.defaultNotificationFields,
        headers,
        token,
    }: {
        input: NotificationUpdateInput;
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: NotificationField[];
        headers?: Headers;
        token?: string;
    }) {
        return this.allPages<Notification>((after: PageInfo['endCursor']) =>
            this.updateNotifications({
                input,
                filter,
                sort,
                after,
                fields,
                headers,
                token,
            }),
        );
    }

    @bind
    updateNotificationsEach({
        input,
        filter,
        sort,
        fields = this.defaultNotificationFields,
        headers,
        token,
    }: {
        input: NotificationUpdateInput;
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: NotificationField[];
        headers?: Headers;
        token?: string;
    }) {
        return this.eachNode<Notification>((after: PageInfo['endCursor']) =>
            this.updateNotifications({
                input,
                filter,
                sort,
                after,
                first: 1,
                fields,
                headers,
                token,
            }),
        );
    }
}

export * from './generated/graphql';
export * from './generated/fields';
export * from './helpers';
export { Operator } from './scalars';
