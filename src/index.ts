import fetch from 'cross-fetch';
import get from 'lodash.get';
import { codes } from '@adgorithmics/graphql-errors';

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
} from './generated/graphql';

import {
    TokenFields,
    OrganizationFields,
    UserFields,
    MarketplaceFields,
    MediaChannelFields,
    CampaignTemplateFields,
    VendorFields,
    VendorTokenFields,
    CatalogFields,
    ProductFields,
    MarketingCampaignFields,
    MarketingAdFields,
    ResultFields,
    EntitlementFields,
    CreativeFontFields,
    CreativeImageFields,
    CreativeLayerFields,
    CreativeTemplateFields,
} from './generated/fields';

import { Deep, bind, pageQueryGenerator, getFormattedFields } from './helpers';

export interface Config {
    url: string;
}

export interface Headers {
    [key: string]: string;
}

export interface Error {
    message?: string;
    extentions?: { code?: codes };
}

export type APIKey = keyof (Query & Mutation);
export type APIResult<T extends APIKey, U extends string = T> = {
    data: Record<U, NonNullable<(Query & Mutation)[T]>>;
};

const VENDOR_TOKEN_LENGTH = 60;

export class Cinnamon {
    config: Config;
    refreshToken = '';
    token = '';

    constructor(config: Config) {
        this.config = config;
    }

    @bind
    private isVendorToken(token: string) {
        return token.length === VENDOR_TOKEN_LENGTH;
    }

    @bind
    async api<T extends APIKey, U extends string = T>({
        query,
        variables = {},
        headers = {},
        token,
    }: {
        query: string;
        variables?: object;
        headers?: Headers;
        token?: string;
    }): Promise<APIResult<T, U>> {
        const response = await fetch(this.config.url, {
            method: 'POST',
            headers: {
                authorization: `Bearer ${token || this.token}`,
                accept: 'application/json',
                'content-type': 'application/json',
                ...headers,
            },
            body: JSON.stringify({ query, variables }),
        });

        const json = await response.json();
        if (json.errors) {
            if (
                json.errors.some(
                    (error: Error) =>
                        get(error, 'extensions.code') === codes.TOKEN_EXPIRED,
                ) &&
                !token
            ) {
                await this.refreshLogin({ refreshToken: this.refreshToken });
                return this.api({ query, variables, headers, token });
            }
            throw new Error(
                json.errors.map((error: Error) => error.message).join('\n'),
            );
        }
        if (!json.data) {
            throw new Error(`Invalid server response: ${JSON.stringify(json)}`);
        }
        return json;
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
                        ${getFormattedFields([
                            TokenFields.expiryDate,
                            TokenFields.token,
                            TokenFields.refreshToken,
                        ])}
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
                        ${getFormattedFields([
                            TokenFields.expiryDate,
                            TokenFields.token,
                            TokenFields.refreshToken,
                        ])}
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
    async me<T extends Vendor | User>({
        fields,
        headers,
        token,
    }: {
        fields?: Deep<UserFields>[] | Deep<VendorFields>[];
        headers?: Headers;
        token?: string;
    } = {}) {
        return (
            await this.api<'me'>({
                query: `query {
                    me {
                        ${
                            this.isVendorToken(token || this.token)
                                ? `... on Vendor { ${getFormattedFields(
                                      (fields as string[]) ||
                                          this.defaultVendorFields,
                                  )} }`
                                : `... on User { ${getFormattedFields(
                                      (fields as string[]) ||
                                          this.defaultUserFields,
                                  )} }`
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
        fields?: Deep<UserFields>[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'updateUser'>({
                query: `mutation($input: UserUpdateInput!) {
                    updateUser(input: $input) {
                        ${getFormattedFields(fields as string[])}
                    }
                }`,
                variables: { input },
                headers,
                token,
            })
        ).data.updateUser;
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
        fields?: Deep<OrganizationFields>[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'organization'>({
                query: `query($id: ObjectId!) {
                    organization(id: $id) {
                        ${getFormattedFields(fields as string[])}
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
        fields?: Deep<OrganizationFields>[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    } = {}) {
        return (
            await this.api<'organizations'>({
                query: pageQueryGenerator(
                    'organizations',
                    fields as string[],
                    true,
                ),
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
        fields?: Deep<OrganizationFields>[];
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
        fields?: Deep<OrganizationFields>[];
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
        fields?: Deep<OrganizationFields>[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'createOrganization'>({
                query: `mutation($input: OrganizationInput!) {
                    createOrganization(input: $input) {
                        ${getFormattedFields(fields as string[])}
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
        fields?: Deep<OrganizationFields>[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'updateOrganization'>({
                query: `mutation($id: ObjectId!, $input: OrganizationUpdateInput!) {
                    updateOrganization(id: $id, input: $input) {
                        ${getFormattedFields(fields as string[])}
                    }
                }`,
                variables: { id, input },
                headers,
                token,
            })
        ).data.updateOrganization;
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
        fields?: Deep<MarketplaceFields>[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'marketplace'>({
                query: `query($id: ObjectId!) {
                    marketplace(id: $id) {
                        ${getFormattedFields(fields as string[])}
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
        fields?: Deep<MarketplaceFields>[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    } = {}) {
        return (
            await this.api<'marketplaces'>({
                query: pageQueryGenerator(
                    'marketplaces',
                    fields as string[],
                    true,
                ),
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
        fields?: Deep<MarketplaceFields>[];
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
        fields?: Deep<MarketplaceFields>[];
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
        fields?: Deep<MarketplaceFields>[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'createMarketplace'>({
                query: `mutation($input: MarketplaceInput!) {
                    createMarketplace(input: $input) {
                        ${getFormattedFields(fields as string[])}
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
        fields?: Deep<MarketplaceFields>[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'updateMarketplace'>({
                query: `mutation($id: ObjectId!, $input: MarketplaceUpdateInput!) {
                    updateMarketplace(id: $id, input: $input) {
                        ${getFormattedFields(fields as string[])}
                    }
                }`,
                variables: { id, input },
                headers,
                token,
            })
        ).data.updateMarketplace;
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
        fields?: Deep<MediaChannelFields>[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'mediaChannel'>({
                query: `query($id: ObjectId!) {
                    mediaChannel(id: $id) {
                        ${getFormattedFields(fields as string[])}
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
        fields?: Deep<MediaChannelFields>[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    } = {}) {
        return (
            await this.api<'mediaChannels'>({
                query: pageQueryGenerator(
                    'mediaChannels',
                    fields as string[],
                    true,
                ),
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
        fields?: Deep<MediaChannelFields>[];
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
        fields?: Deep<MediaChannelFields>[];
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
        fields?: Deep<MediaChannelFields>[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'createMediaChannel'>({
                query: `mutation($input: MediaChannelCreateInput!) {
                    createMediaChannel(input: $input) {
                        ${getFormattedFields(fields as string[])}
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
        fields?: Deep<MediaChannelFields>[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'importMediaChannel'>({
                query: `mutation($input: MediaChannelImportInput!) {
                    importMediaChannel(input: $input) {
                        ${getFormattedFields(fields as string[])}
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
        fields?: Deep<MediaChannelFields>[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'updateMediaChannel'>({
                query: `mutation($id: ObjectId!, $input: MediaChannelUpdateInput!) {
                    updateMediaChannel(id: $id, input: $input) {
                        ${getFormattedFields(fields as string[])}
                    }
                }`,
                variables: { id, input },
                headers,
                token,
            })
        ).data.updateMediaChannel;
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
        fields?: Deep<CampaignTemplateFields>[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'campaignTemplate'>({
                query: `query($id: ObjectId!) {
                    campaignTemplate(id: $id) {
                        ${getFormattedFields(fields as string[])}
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
        fields?: Deep<CampaignTemplateFields>[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    } = {}) {
        return (
            await this.api<'campaignTemplates'>({
                query: pageQueryGenerator(
                    'campaignTemplates',
                    fields as string[],
                    true,
                ),
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
        fields?: Deep<CampaignTemplateFields>[];
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
        fields?: Deep<CampaignTemplateFields>[];
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
        fields?: Deep<VendorFields>[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'vendor'>({
                query: `query($id: ObjectId!) {
                    vendor(id: $id) {
                        ${getFormattedFields(fields as string[])}
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
        fields?: Deep<VendorFields>[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    } = {}) {
        return (
            await this.api<'vendors'>({
                query: pageQueryGenerator('vendors', fields as string[], true),
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
        fields?: Deep<VendorFields>[];
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
        fields?: Deep<VendorFields>[];
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
        fields?: Deep<VendorFields>[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'createVendor'>({
                query: `mutation($input: VendorInput!) {
                    createVendor(input: $input) {
                        ${getFormattedFields(fields as string[])}
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
        fields?: Deep<VendorFields>[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'updateVendor'>({
                query: `mutation($id: ObjectId!, $input: VendorUpdateInput!) {
                    updateVendor(id: $id, input: $input) {
                        ${getFormattedFields(fields as string[])}
                    }
                }`,
                variables: { id, input },
                headers,
                token,
            })
        ).data.updateVendor;
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
        fields?: Deep<VendorTokenFields>[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'vendorToken'>({
                query: `query($id: ObjectId!) {
                    vendorToken(id: $id) {
                        ${getFormattedFields(fields as string[])}
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
        fields?: Deep<VendorTokenFields>[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    } = {}) {
        return (
            await this.api<'vendorTokens'>({
                query: pageQueryGenerator(
                    'vendorTokens',
                    fields as string[],
                    true,
                ),
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
        ).data.vendorTokens;
    }

    @bind
    vendorTokensAll({
        filter,
        sort,
        fields = this.defaultVendorTokenFields,
        showDeleted,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: Deep<VendorTokenFields>[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    } = {}) {
        return this.allPages<VendorToken>((after: PageInfo['endCursor']) =>
            this.vendorTokens({
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
    vendorTokensEach({
        filter,
        sort,
        fields = this.defaultVendorTokenFields,
        showDeleted,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: Deep<VendorTokenFields>[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    } = {}) {
        return this.eachNode<VendorToken>((after: PageInfo['endCursor']) =>
            this.vendorTokens({
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
    async createVendorToken({
        input,
        fields = this.defaultVendorTokenFields,
        headers,
        token,
    }: {
        input: VendorTokenInput;
        fields?: Deep<VendorTokenFields>[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'createVendorToken'>({
                query: `mutation($input: VendorTokenInput!) {
                    createVendorToken(input: $input) {
                        ${getFormattedFields(fields as string[])}
                    }
                }`,
                variables: { input },
                headers,
                token,
            })
        ).data.createVendorToken;
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
        fields?: Deep<CatalogFields>[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'catalog'>({
                query: `query($id: ObjectId!) {
                    catalog(id: $id) {
                        ${getFormattedFields(fields as string[])}
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
        fields?: Deep<CatalogFields>[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    } = {}) {
        return (
            await this.api<'catalogs'>({
                query: pageQueryGenerator('catalogs', fields as string[], true),
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
        fields?: Deep<CatalogFields>[];
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
        fields?: Deep<CatalogFields>[];
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
        fields?: Deep<CatalogFields>[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'createCatalog'>({
                query: `mutation($input: CatalogCreateInput!) {
                    createCatalog(input: $input) {
                        ${getFormattedFields(fields as string[])}
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
        fields?: Deep<CatalogFields>[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'importCatalog'>({
                query: `mutation($input: CatalogImportInput!) {
                    importCatalog(input: $input) {
                        ${getFormattedFields(fields as string[])}
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
        fields?: Deep<CatalogFields>[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'updateCatalog'>({
                query: `mutation($id: ObjectId!, $input: CatalogUpdateInput!) {
                    updateCatalog(id: $id, input: $input) {
                        ${getFormattedFields(fields as string[])}
                    }
                }`,
                variables: { id, input },
                headers,
                token,
            })
        ).data.updateCatalog;
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
        fields?: Deep<ProductFields>[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'product'>({
                query: `query($id: ObjectId!) {
                    product(id: $id) {
                        ${getFormattedFields(fields as string[])}
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
        fields?: Deep<ProductFields>[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    } = {}) {
        return (
            await this.api<'products'>({
                query: pageQueryGenerator('products', fields as string[], true),
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
        fields?: Deep<ProductFields>[];
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
        fields?: Deep<ProductFields>[];
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
        fields?: Deep<ProductFields>[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'createProduct'>({
                query: `mutation($input: ProductInput!) {
                    createProduct(input: $input) {
                        ${getFormattedFields(fields as string[])}
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
        fields?: Deep<ProductFields>[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'updateProduct'>({
                query: `mutation($id: ObjectId!, $input: ProductUpdateInput!) {
                    updateProduct(id: $id, input: $input) {
                        ${getFormattedFields(fields as string[])}
                    }
                }`,
                variables: { id, input },
                headers,
                token,
            })
        ).data.updateProduct;
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
        fields?: Deep<MarketingCampaignFields>[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'marketingCampaign'>({
                query: `query($id: ObjectId!) {
                    marketingCampaign(id: $id) {
                        ${getFormattedFields(fields as string[])}
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
        fields?: Deep<MarketingCampaignFields>[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    } = {}) {
        return (
            await this.api<'marketingCampaigns'>({
                query: pageQueryGenerator(
                    'marketingCampaigns',
                    fields as string[],
                    true,
                ),
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
        fields?: Deep<MarketingCampaignFields>[];
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
        fields?: Deep<MarketingCampaignFields>[];
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
        fields?: Deep<MarketingCampaignFields>[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'createMarketingCampaign'>({
                query: `mutation($input: MarketingCampaignInput!) {
                    createMarketingCampaign(input: $input) {
                        ${getFormattedFields(fields as string[])}
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
        fields?: Deep<MarketingCampaignFields>[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'updateMarketingCampaign'>({
                query: `mutation($id: ObjectId!, $input: MarketingCampaignUpdateInput!) {
                    updateMarketingCampaign(id: $id, input: $input) {
                        ${getFormattedFields(fields as string[])}
                    }
                }`,
                variables: { id, input },
                headers,
                token,
            })
        ).data.updateMarketingCampaign;
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
        fields?: Deep<MarketingCampaignFields>[];
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
        fields?: Deep<MarketingAdFields>[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'marketingAd'>({
                query: `query($id: ObjectId!) {
                    marketingAd(id: $id) {
                        ${getFormattedFields(fields as string[])}
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
        fields?: Deep<MarketingAdFields>[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    } = {}) {
        return (
            await this.api<'marketingAds'>({
                query: pageQueryGenerator(
                    'marketingAds',
                    fields as string[],
                    true,
                ),
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
        fields?: Deep<MarketingAdFields>[];
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
        fields?: Deep<MarketingAdFields>[];
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
        fields?: Deep<ResultFields>[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'result'>({
                query: `query($id: ObjectId!) {
                    result(id: $id) {
                        ${getFormattedFields(fields as string[])}
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
        fields?: Deep<ResultFields>[];
        headers?: Headers;
        token?: string;
    } = {}) {
        return (
            await this.api<'results'>({
                query: pageQueryGenerator('results', fields as string[]),
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
        fields?: Deep<ResultFields>[];
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
        fields?: Deep<ResultFields>[];
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
        fields?: Deep<EntitlementFields>[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'entitlement'>({
                query: `query($id: ObjectId!) {
                    entitlement(id: $id) {
                        ${getFormattedFields(fields as string[])}
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
        fields?: Deep<EntitlementFields>[];
        headers?: Headers;
        token?: string;
    } = {}) {
        return (
            await this.api<'entitlements'>({
                query: pageQueryGenerator('entitlements', fields as string[]),
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
        fields?: Deep<EntitlementFields>[];
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
        fields?: Deep<EntitlementFields>[];
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
        fields?: Deep<EntitlementFields>[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'createEntitlement'>({
                query: `mutation($input: EntitlementInput!) {
                    createEntitlement(input: $input) {
                        ${getFormattedFields(fields as string[])}
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
        fields?: Deep<EntitlementFields>[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'updateEntitlement'>({
                query: `mutation($id: ObjectId!, $input: EntitlementUpdateInput!) {
                    updateEntitlement(id: $id, input: $input) {
                        ${getFormattedFields(fields as string[])}
                    }
                }`,
                variables: { id, input },
                headers,
                token,
            })
        ).data.updateEntitlement;
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
        fields?: Deep<CreativeFontFields>[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'creativeFont'>({
                query: `query($id: ObjectId!) {
                    creativeFont(id: $id) {
                        ${getFormattedFields(fields as string[])}
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
        fields?: Deep<CreativeFontFields>[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    } = {}) {
        return (
            await this.api<'creativeFonts'>({
                query: pageQueryGenerator(
                    'creativeFonts',
                    fields as string[],
                    true,
                ),
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
        fields?: Deep<CreativeFontFields>[];
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
        fields?: Deep<CreativeFontFields>[];
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
        fields?: Deep<CreativeFontFields>[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'createCreativeFont'>({
                query: `mutation($input: CreativeFontCreateInput!) {
                    createCreativeFont(input: $input) {
                        ${getFormattedFields(fields as string[])}
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
        fields?: Deep<CreativeFontFields>[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'updateCreativeFont'>({
                query: `mutation($id: ObjectId!, $input: CreativeFontUpdateInput!) {
                    updateCreativeFont(id: $id, input: $input) {
                        ${getFormattedFields(fields as string[])}
                    }
                }`,
                variables: { id, input },
                headers,
                token,
            })
        ).data.updateCreativeFont;
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
        fields?: Deep<CreativeImageFields>[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'creativeImage'>({
                query: `query($id: ObjectId!) {
                    creativeImage(id: $id) {
                        ${getFormattedFields(fields as string[])}
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
        fields?: Deep<CreativeImageFields>[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    } = {}) {
        return (
            await this.api<'creativeImages'>({
                query: pageQueryGenerator(
                    'creativeImages',
                    fields as string[],
                    true,
                ),
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
        fields?: Deep<CreativeImageFields>[];
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
        fields?: Deep<CreativeImageFields>[];
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
        fields?: Deep<CreativeImageFields>[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'createCreativeImage'>({
                query: `mutation($input: CreativeImageCreateInput!) {
                    createCreativeImage(input: $input) {
                        ${getFormattedFields(fields as string[])}
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
        fields?: Deep<CreativeImageFields>[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'updateCreativeImage'>({
                query: `mutation($id: ObjectId!, $input: CreativeImageUpdateInput!) {
                    updateCreativeImage(id: $id, input: $input) {
                        ${getFormattedFields(fields as string[])}
                    }
                }`,
                variables: { id, input },
                headers,
                token,
            })
        ).data.updateCreativeImage;
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
        fields?: Deep<CreativeLayerFields>[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'creativeLayer'>({
                query: `query($id: ObjectId!) {
                    creativeLayer(id: $id) {
                        ${getFormattedFields(fields as string[])}
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
        fields?: Deep<CreativeLayerFields>[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    } = {}) {
        return (
            await this.api<'creativeLayers'>({
                query: pageQueryGenerator(
                    'creativeLayers',
                    fields as string[],
                    true,
                ),
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
        fields?: Deep<CreativeLayerFields>[];
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
        fields?: Deep<CreativeLayerFields>[];
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
        fields?: Deep<CreativeLayerFields>[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'createCreativeLayer'>({
                query: `mutation($input: CreativeLayerCreateInput!) {
                    createCreativeLayer(input: $input) {
                        ${getFormattedFields(fields as string[])}
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
        fields?: Deep<CreativeLayerFields>[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'updateCreativeLayer'>({
                query: `mutation($id: ObjectId!, $input: CreativeLayerUpdateInput!) {
                    updateCreativeLayer(id: $id, input: $input) {
                        ${getFormattedFields(fields as string[])}
                    }
                }`,
                variables: { id, input },
                headers,
                token,
            })
        ).data.updateCreativeLayer;
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
        fields?: Deep<CreativeTemplateFields>[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'creativeTemplate'>({
                query: `query($id: ObjectId!) {
                    creativeTemplate(id: $id) {
                        ${getFormattedFields(fields as string[])}
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
        fields?: Deep<CreativeTemplateFields>[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    } = {}) {
        return (
            await this.api<'creativeTemplates'>({
                query: pageQueryGenerator(
                    'creativeTemplates',
                    fields as string[],
                    true,
                ),
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
        fields?: Deep<CreativeTemplateFields>[];
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
        fields?: Deep<CreativeTemplateFields>[];
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
        fields?: Deep<CreativeTemplateFields>[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'createCreativeTemplate'>({
                query: `mutation($input: CreativeTemplateCreateInput!) {
                    createCreativeTemplate(input: $input) {
                        ${getFormattedFields(fields as string[])}
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
        fields?: Deep<CreativeTemplateFields>[];
        headers?: Headers;
        token?: string;
    }) {
        return (
            await this.api<'updateCreativeTemplate'>({
                query: `mutation($id: ObjectId!, $input: CreativeTemplateUpdateInput!) {
                    updateCreativeTemplate(id: $id, input: $input) {
                        ${getFormattedFields(fields as string[])}
                    }
                }`,
                variables: { id, input },
                headers,
                token,
            })
        ).data.updateCreativeTemplate;
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
}

export * from './generated/graphql';
export * from './generated/fields';
// export * from './inputFields';
export * from './helpers';
