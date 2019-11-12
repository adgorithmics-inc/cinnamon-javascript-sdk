import fetch from 'cross-fetch';
import get from 'lodash.get';
import { codes } from '@adgorithmics/graphql-errors';

import {
    PageInfo,
    Scalars,
    Mutation,
    Query,
    SortInput,
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
} from './inputFields';

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

    private isVendorToken(token: string) {
        return token.length === VENDOR_TOKEN_LENGTH;
    }

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
        return json;
    }

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

    async login(input: UserLoginInput) {
        const result = (await this.api<'login'>({
            query: `mutation($input: UserLoginInput!) {
                login(input: $input) {
                    ${[
                        TokenFields.expiryDate,
                        TokenFields.token,
                        TokenFields.refreshToken,
                    ].join(' ')}
                }
            }`,
            variables: { input },
        })).data.login;

        if (result.token && result.refreshToken) {
            this.token = result.token;
            this.refreshToken = result.refreshToken;
        }

        return result;
    }

    async refreshLogin(input: RefreshTokenInput) {
        const result = (await this.api<'refreshLogin'>({
            query: `mutation($input: RefreshTokenInput!) {
                refreshLogin(input: $input) {
                    ${[
                        TokenFields.expiryDate,
                        TokenFields.token,
                        TokenFields.refreshToken,
                    ].join(' ')}
                }
            }`,
            variables: { input },
        })).data.refreshLogin;

        if (result.token && result.refreshToken) {
            this.token = result.token;
            this.refreshToken = result.refreshToken;
        }

        return result;
    }

    setToken(token: string) {
        this.token = token;
    }

    async me({
        fields,
        headers,
        token,
    }: {
        fields?: Array<keyof UserFields | keyof VendorFields | string>;
        headers?: Headers;
        token?: string;
    } = {}) {
        return (await this.api<'me'>({
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
        })).data.me;
    }

    async updateUser({
        input,
        fields = [UserFields.id, UserFields.email],
        headers,
        token,
    }: {
        input: UserUpdateInput;
        fields?: Array<keyof UserFields | string>;
        headers?: Headers;
        token?: string;
    }) {
        return (await this.api<'updateUser'>({
            query: `mutation($input: UserUpdateInput!) {
                updateUser(input: $input) {
                    ${fields.join(' ')}
                }
            }`,
            variables: { input },
            headers,
            token,
        })).data.updateUser;
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

    async organization({
        id,
        fields = this.defaultOrganizationFields,
        headers,
        token,
    }: {
        id: Scalars['ObjectId'];
        fields?: Array<keyof OrganizationFields | string>;
        headers?: Headers;
        token?: string;
    }) {
        return (await this.api<'organization'>({
            query: `query($id: ObjectId!) {
                organization(id: $id) {
                    ${fields.join(' ')}
                }
            }`,
            variables: { id },
            headers,
            token,
        })).data.organization;
    }

    async organizations({
        filter,
        sort,
        after,
        fields = this.defaultOrganizationFields,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        after?: PageInfo['endCursor'];
        fields?: Array<keyof OrganizationFields | string>;
        headers?: Headers;
        token?: string;
    } = {}) {
        return (await this.api<'organizations'>({
            query: `query($filter: FilterInput, $sort: SortInput, $after: String) {
                organizations(filter: $filter, sort: $sort, after: $after) {
                    pageInfo {
                        hasNextPage
                        endCursor
                    }
                    edges {
                        node {
                            ${fields.join(' ')}
                        }
                    }
                }
            }`,
            variables: { filter, sort, after },
            headers,
            token,
        })).data.organizations;
    }

    organizationsAll({
        filter,
        sort,
        fields = this.defaultOrganizationFields,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: Array<keyof OrganizationFields | string>;
        headers?: Headers;
        token?: string;
    } = {}) {
        return this.allPages<Organization>((after: PageInfo['endCursor']) =>
            this.organizations({ filter, sort, after, fields, headers, token }),
        );
    }

    organizationsEach({
        filter,
        sort,
        fields = this.defaultOrganizationFields,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: Array<keyof OrganizationFields | string>;
        headers?: Headers;
        token?: string;
    } = {}) {
        return this.eachNode<Organization>((after: PageInfo['endCursor']) =>
            this.organizations({ filter, sort, after, fields, headers, token }),
        );
    }

    async createOrganization({
        input,
        fields = this.defaultOrganizationFields,
        headers,
        token,
    }: {
        input: OrganizationInput;
        fields?: Array<keyof OrganizationFields | string>;
        headers?: Headers;
        token?: string;
    }) {
        return (await this.api<'createOrganization'>({
            query: `mutation($input: OrganizationInput!) {
                createOrganization(input: $input) {
                    ${fields.join(' ')}
                }
            }`,
            variables: { input },
            headers,
            token,
        })).data.createOrganization;
    }

    async updateOrganization({
        id,
        input,
        fields = this.defaultOrganizationFields,
        headers,
        token,
    }: {
        id: Scalars['ObjectId'];
        input: OrganizationUpdateInput;
        fields?: Array<keyof OrganizationFields | string>;
        headers?: Headers;
        token?: string;
    }) {
        return (await this.api<'updateOrganization'>({
            query: `mutation($id: ObjectId!, $input: OrganizationUpdateInput!) {
                updateOrganization(id: $id, input: $input) {
                    ${fields.join(' ')}
                }
            }`,
            variables: { id, input },
            headers,
            token,
        })).data.updateOrganization;
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

    async marketplace({
        id,
        fields = this.defaultMarketplaceFields,
        headers,
        token,
    }: {
        id: Scalars['ObjectId'];
        fields?: Array<keyof MarketplaceFields | string>;
        headers?: Headers;
        token?: string;
    }) {
        return (await this.api<'marketplace'>({
            query: `query($id: ObjectId!) {
                marketplace(id: $id) {
                    ${fields.join(' ')}
                }
            }`,
            variables: { id },
            headers,
            token,
        })).data.marketplace;
    }

    async marketplaces({
        filter,
        sort,
        after,
        fields = this.defaultMarketplaceFields,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        after?: PageInfo['endCursor'];
        fields?: Array<keyof MarketplaceFields | string>;
        headers?: Headers;
        token?: string;
    } = {}) {
        return (await this.api<'marketplaces'>({
            query: `query($filter: FilterInput, $sort: SortInput, $after: String) {
                marketplaces(filter: $filter, sort: $sort, after: $after) {
                    pageInfo {
                        hasNextPage
                        endCursor
                    }
                    edges {
                        node {
                            ${fields.join(' ')}
                        }
                    }
                }
            }`,
            variables: { filter, sort, after },
            headers,
            token,
        })).data.marketplaces;
    }

    marketplacesAll({
        filter,
        sort,
        fields = this.defaultMarketplaceFields,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: Array<keyof MarketplaceFields | string>;
        headers?: Headers;
        token?: string;
    } = {}) {
        return this.allPages<Marketplace>((after: PageInfo['endCursor']) =>
            this.marketplaces({ filter, sort, after, fields, headers, token }),
        );
    }

    marketplacesEach({
        filter,
        sort,
        fields = this.defaultMarketplaceFields,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: Array<keyof MarketplaceFields | string>;
        headers?: Headers;
        token?: string;
    } = {}) {
        return this.eachNode<Marketplace>((after: PageInfo['endCursor']) =>
            this.marketplaces({ filter, sort, after, fields, headers, token }),
        );
    }

    async createMarketplace({
        input,
        fields = this.defaultMarketplaceFields,
        headers,
        token,
    }: {
        input: MarketplaceInput;
        fields?: Array<keyof MarketplaceFields | string>;
        headers?: Headers;
        token?: string;
    }) {
        return (await this.api<'createMarketplace'>({
            query: `mutation($input: MarketplaceInput!) {
                createMarketplace(input: $input) {
                    ${fields.join(' ')}
                }
            }`,
            variables: { input },
            headers,
            token,
        })).data.createMarketplace;
    }

    async updateMarketplace({
        id,
        input,
        fields = this.defaultMarketplaceFields,
        headers,
        token,
    }: {
        id: Scalars['ObjectId'];
        input: MarketplaceUpdateInput;
        fields?: Array<keyof MarketplaceFields | string>;
        headers?: Headers;
        token?: string;
    }) {
        return (await this.api<'updateMarketplace'>({
            query: `mutation($id: ObjectId!, $input: MarketplaceUpdateInput!) {
                updateMarketplace(id: $id, input: $input) {
                    ${fields.join(' ')}
                }
            }`,
            variables: { id, input },
            headers,
            token,
        })).data.updateMarketplace;
    }

    async deleteMarketplace({
        id,
        headers,
        token,
    }: {
        id: Scalars['ObjectId'];
        headers?: Headers;
        token?: string;
    }) {
        return (await this.api<'deleteMarketplace'>({
            query: `mutation($id: ObjectId!) {
                deleteMarketplace(id: $id) {
                    id
                }
            }`,
            variables: { id },
            headers,
            token,
        })).data.deleteMarketplace;
    }

    // ####################################
    // MediaChannel
    // ####################################

    private defaultMediaChannelFields = [
        MarketplaceFields.id,
        MarketplaceFields.name,
    ];

    async mediaChannel({
        id,
        fields = this.defaultMediaChannelFields,
        headers,
        token,
    }: {
        id: Scalars['ObjectId'];
        fields?: Array<keyof MediaChannelFields | string>;
        headers?: Headers;
        token?: string;
    }) {
        return (await this.api<'mediaChannel'>({
            query: `query($id: ObjectId!) {
                mediaChannel(id: $id) {
                    ${fields.join(' ')}
                }
            }`,
            variables: { id },
            headers,
            token,
        })).data.mediaChannel;
    }

    async mediaChannels({
        filter,
        sort,
        after,
        fields = this.defaultMediaChannelFields,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        after?: PageInfo['endCursor'];
        fields?: Array<keyof MediaChannelFields | string>;
        headers?: Headers;
        token?: string;
    } = {}) {
        return (await this.api<'mediaChannels'>({
            query: `query($filter: FilterInput, $sort: SortInput, $after: String) {
                mediaChannels(filter: $filter, sort: $sort, after: $after) {
                    pageInfo {
                        hasNextPage
                        endCursor
                    }
                    edges {
                        node {
                            ${fields.join(' ')}
                        }
                    }
                }
            }`,
            variables: { filter, sort, after },
            headers,
            token,
        })).data.mediaChannels;
    }

    mediaChannelsAll({
        filter,
        sort,
        fields = this.defaultMediaChannelFields,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: Array<keyof MediaChannelFields | string>;
        headers?: Headers;
        token?: string;
    } = {}) {
        return this.allPages<MediaChannel>((after: PageInfo['endCursor']) =>
            this.mediaChannels({ filter, sort, after, fields, headers, token }),
        );
    }

    mediaChannelsEach({
        filter,
        sort,
        fields = this.defaultMediaChannelFields,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: Array<keyof MediaChannelFields | string>;
        headers?: Headers;
        token?: string;
    } = {}) {
        return this.eachNode<MediaChannel>((after: PageInfo['endCursor']) =>
            this.mediaChannels({ filter, sort, after, fields, headers, token }),
        );
    }

    async createMediaChannel({
        input,
        fields = this.defaultMediaChannelFields,
        headers,
        token,
    }: {
        input: MediaChannelCreateInput;
        fields?: Array<keyof MediaChannelFields | string>;
        headers?: Headers;
        token?: string;
    }) {
        return (await this.api<'createMediaChannel'>({
            query: `mutation($input: MediaChannelCreateInput!) {
                createMediaChannel(input: $input) {
                    ${fields.join(' ')}
                }
            }`,
            variables: { input },
            headers,
            token,
        })).data.createMediaChannel;
    }

    async importMediaChannel({
        input,
        fields = this.defaultMediaChannelFields,
        headers,
        token,
    }: {
        input: MediaChannelImportInput;
        fields?: Array<keyof MediaChannelFields | string>;
        headers?: Headers;
        token?: string;
    }) {
        return (await this.api<'importMediaChannel'>({
            query: `mutation($input: MediaChannelImportInput!) {
                importMediaChannel(input: $input) {
                    ${fields.join(' ')}
                }
            }`,
            variables: { input },
            headers,
            token,
        })).data.importMediaChannel;
    }

    async updateMediaChannel({
        id,
        input,
        fields = this.defaultMediaChannelFields,
        headers,
        token,
    }: {
        id: Scalars['ObjectId'];
        input: MediaChannelUpdateInput;
        fields?: Array<keyof MediaChannelFields | string>;
        headers?: Headers;
        token?: string;
    }) {
        return (await this.api<'updateMediaChannel'>({
            query: `mutation($id: ObjectId!, $input: MediaChannelUpdateInput!) {
                updateMediaChannel(id: $id, input: $input) {
                    ${fields.join(' ')}
                }
            }`,
            variables: { id, input },
            headers,
            token,
        })).data.updateMediaChannel;
    }

    async deleteMediaChannel({
        id,
        headers,
        token,
    }: {
        id: Scalars['ObjectId'];
        headers?: Headers;
        token?: string;
    }) {
        return (await this.api<'deleteMediaChannel'>({
            query: `mutation($id: ObjectId!) {
                deleteMediaChannel(id: $id) {
                    id
                }
            }`,
            variables: { id },
            headers,
            token,
        })).data.deleteMediaChannel;
    }

    // ####################################
    // CampaignTemplate
    // ####################################

    private defaultCampaignTemplateFields = [
        CampaignTemplateFields.id,
        CampaignTemplateFields.name,
    ];

    async campaignTemplate({
        id,
        fields = this.defaultCampaignTemplateFields,
        headers,
        token,
    }: {
        id: Scalars['ObjectId'];
        fields?: Array<keyof CampaignTemplateFields | string>;
        headers?: Headers;
        token?: string;
    }) {
        return (await this.api<'campaignTemplate'>({
            query: `query($id: ObjectId!) {
                campaignTemplate(id: $id) {
                    ${fields.join(' ')}
                }
            }`,
            variables: { id },
            headers,
            token,
        })).data.campaignTemplate;
    }

    async campaignTemplates({
        filter,
        sort,
        after,
        fields = this.defaultCampaignTemplateFields,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        after?: PageInfo['endCursor'];
        fields?: Array<keyof CampaignTemplateFields | string>;
        headers?: Headers;
        token?: string;
    } = {}) {
        return (await this.api<'campaignTemplates'>({
            query: `query($filter: FilterInput, $sort: SortInput, $after: String) {
                campaignTemplates(filter: $filter, sort: $sort, after: $after) {
                    pageInfo {
                        hasNextPage
                        endCursor
                    }
                    edges {
                        node {
                            ${fields.join(' ')}
                        }
                    }
                }
            }`,
            variables: { filter, sort, after },
            headers,
            token,
        })).data.campaignTemplates;
    }

    campaignTemplatesAll({
        filter,
        sort,
        fields = this.defaultCampaignTemplateFields,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: Array<keyof CampaignTemplateFields | string>;
        headers?: Headers;
        token?: string;
    } = {}) {
        return this.allPages<CampaignTemplate>((after: PageInfo['endCursor']) =>
            this.campaignTemplates({
                filter,
                sort,
                after,
                fields,
                headers,
                token,
            }),
        );
    }

    campaignTemplatesEach({
        filter,
        sort,
        fields = this.defaultCampaignTemplateFields,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: Array<keyof CampaignTemplateFields | string>;
        headers?: Headers;
        token?: string;
    } = {}) {
        return this.eachNode<CampaignTemplate>((after: PageInfo['endCursor']) =>
            this.campaignTemplates({
                filter,
                sort,
                after,
                fields,
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

    async vendor({
        id,
        fields = this.defaultVendorFields,
        headers,
        token,
    }: {
        id: Scalars['ObjectId'];
        fields?: Array<keyof VendorFields | string>;
        headers?: Headers;
        token?: string;
    }) {
        return (await this.api<'vendor'>({
            query: `query($id: ObjectId!) {
                vendor(id: $id) {
                    ${fields.join(' ')}
                }
            }`,
            variables: { id },
            headers,
            token,
        })).data.vendor;
    }

    async vendors({
        filter,
        sort,
        after,
        fields = this.defaultVendorFields,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        after?: PageInfo['endCursor'];
        fields?: Array<keyof VendorFields | string>;
        headers?: Headers;
        token?: string;
    } = {}) {
        return (await this.api<'vendors'>({
            query: `query($filter: FilterInput, $sort: SortInput, $after: String) {
                vendors(filter: $filter, sort: $sort, after: $after) {
                    pageInfo {
                        hasNextPage
                        endCursor
                    }
                    edges {
                        node {
                            ${fields.join(' ')}
                        }
                    }
                }
            }`,
            variables: { filter, sort, after },
            headers,
            token,
        })).data.vendors;
    }

    vendorsAll({
        filter,
        sort,
        fields = this.defaultVendorFields,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: Array<keyof VendorFields | string>;
        headers?: Headers;
        token?: string;
    } = {}) {
        return this.allPages<Vendor>((after: PageInfo['endCursor']) =>
            this.vendors({ filter, sort, after, fields, headers, token }),
        );
    }

    vendorsEach({
        filter,
        sort,
        fields = this.defaultVendorFields,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: Array<keyof VendorFields | string>;
        headers?: Headers;
        token?: string;
    } = {}) {
        return this.eachNode<Vendor>((after: PageInfo['endCursor']) =>
            this.vendors({ filter, sort, after, fields, headers, token }),
        );
    }

    async createVendor({
        input,
        fields = this.defaultVendorFields,
        headers,
        token,
    }: {
        input: VendorInput;
        fields?: Array<keyof VendorFields | string>;
        headers?: Headers;
        token?: string;
    }) {
        return (await this.api<'createVendor'>({
            query: `mutation($input: VendorInput!) {
                createVendor(input: $input) {
                    ${fields.join(' ')}
                }
            }`,
            variables: { input },
            headers,
            token,
        })).data.createVendor;
    }

    async updateVendor({
        id,
        input,
        fields = this.defaultVendorFields,
        headers,
        token,
    }: {
        id: Scalars['ObjectId'];
        input: VendorUpdateInput;
        fields?: Array<keyof VendorFields | string>;
        headers?: Headers;
        token?: string;
    }) {
        return (await this.api<'updateVendor'>({
            query: `mutation($id: ObjectId!, $input: VendorUpdateInput!) {
                updateVendor(id: $id, input: $input) {
                    ${fields.join(' ')}
                }
            }`,
            variables: { id, input },
            headers,
            token,
        })).data.updateVendor;
    }

    async deleteVendor({
        id,
        headers,
        token,
    }: {
        id: Scalars['ObjectId'];
        headers?: Headers;
        token?: string;
    }) {
        return (await this.api<'deleteVendor'>({
            query: `mutation($id: ObjectId!) {
                deleteVendor(id: $id) {
                    id
                }
            }`,
            variables: { id },
            headers,
            token,
        })).data.deleteVendor;
    }

    // ####################################
    // Vendor Token
    // ####################################

    private defaultVendorTokenFields = [
        VendorTokenFields.id,
        VendorTokenFields.token,
    ];

    async vendorToken({
        id,
        fields = this.defaultVendorTokenFields,
        headers,
        token,
    }: {
        id: Scalars['ObjectId'];
        fields?: Array<keyof VendorTokenFields | string>;
        headers?: Headers;
        token?: string;
    }) {
        return (await this.api<'vendorToken'>({
            query: `query($id: ObjectId!) {
                vendorToken(id: $id) {
                    ${fields.join(' ')}
                }
            }`,
            variables: { id },
            headers,
            token,
        })).data.vendorToken;
    }

    async vendorTokens({
        filter,
        sort,
        after,
        fields = this.defaultVendorTokenFields,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        after?: PageInfo['endCursor'];
        fields?: Array<keyof VendorTokenFields | string>;
        headers?: Headers;
        token?: string;
    } = {}) {
        return (await this.api<'vendorTokens'>({
            query: `query($filter: FilterInput, $sort: SortInput, $after: String) {
                vendorTokens(filter: $filter, sort: $sort, after: $after) {
                    pageInfo {
                        hasNextPage
                        endCursor
                    }
                    edges {
                        node {
                            ${fields.join(' ')}
                        }
                    }
                }
            }`,
            variables: { filter, sort, after },
            headers,
            token,
        })).data.vendorTokens;
    }

    vendorTokensAll({
        filter,
        sort,
        fields = this.defaultVendorTokenFields,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: Array<keyof VendorTokenFields | string>;
        headers?: Headers;
        token?: string;
    } = {}) {
        return this.allPages<VendorToken>((after: PageInfo['endCursor']) =>
            this.vendorTokens({ filter, sort, after, fields, headers, token }),
        );
    }

    vendorTokensEach({
        filter,
        sort,
        fields = this.defaultVendorTokenFields,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: Array<keyof VendorTokenFields | string>;
        headers?: Headers;
        token?: string;
    } = {}) {
        return this.eachNode<VendorToken>((after: PageInfo['endCursor']) =>
            this.vendorTokens({ filter, sort, after, fields, headers, token }),
        );
    }

    async createVendorToken({
        input,
        fields = this.defaultVendorTokenFields,
        headers,
        token,
    }: {
        input: VendorTokenInput;
        fields?: Array<keyof VendorTokenFields | string>;
        headers?: Headers;
        token?: string;
    }) {
        return (await this.api<'createVendorToken'>({
            query: `mutation($input: VendorTokenInput!) {
                createVendorToken(input: $input) {
                    ${fields.join(' ')}
                }
            }`,
            variables: { input },
            headers,
            token,
        })).data.createVendorToken;
    }

    async deleteVendorToken({
        id,
        headers,
        token,
    }: {
        id: Scalars['ObjectId'];
        headers?: Headers;
        token?: string;
    }) {
        return (await this.api<'deleteVendorToken'>({
            query: `mutation($id: ObjectId!) {
                deleteVendorToken(id: $id) {
                    id
                }
            }`,
            variables: { id },
            headers,
            token,
        })).data.deleteVendorToken;
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

    async catalog({
        id,
        fields = this.defaultCatalogFields,
        headers,
        token,
    }: {
        id: Scalars['ObjectId'];
        fields?: Array<keyof CatalogFields | string>;
        headers?: Headers;
        token?: string;
    }) {
        return (await this.api<'catalog'>({
            query: `query($id: ObjectId!) {
                catalog(id: $id) {
                    ${fields.join(' ')}
                }
            }`,
            variables: { id },
            headers,
            token,
        })).data.catalog;
    }

    async catalogs({
        filter,
        sort,
        after,
        fields = this.defaultCatalogFields,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        after?: PageInfo['endCursor'];
        fields?: Array<keyof CatalogFields | string>;
        headers?: Headers;
        token?: string;
    } = {}) {
        return (await this.api<'catalogs'>({
            query: `query($filter: FilterInput, $sort: SortInput, $after: String) {
                catalogs(filter: $filter, sort: $sort, after: $after) {
                    pageInfo {
                        hasNextPage
                        endCursor
                    }
                    edges {
                        node {
                            ${fields.join(' ')}
                        }
                    }
                }
            }`,
            variables: { filter, sort, after },
            headers,
            token,
        })).data.catalogs;
    }

    catalogsAll({
        filter,
        sort,
        fields = this.defaultCatalogFields,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: Array<keyof CatalogFields | string>;
        headers?: Headers;
        token?: string;
    } = {}) {
        return this.allPages<Catalog>((after: PageInfo['endCursor']) =>
            this.catalogs({ filter, sort, after, fields, headers, token }),
        );
    }

    catalogsEach({
        filter,
        sort,
        fields = this.defaultCatalogFields,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: Array<keyof CatalogFields | string>;
        headers?: Headers;
        token?: string;
    } = {}) {
        return this.eachNode<Catalog>((after: PageInfo['endCursor']) =>
            this.catalogs({ filter, sort, after, fields, headers, token }),
        );
    }

    async createCatalog({
        input,
        fields = this.defaultCatalogFields,
        headers,
        token,
    }: {
        input: CatalogCreateInput;
        fields?: Array<keyof CatalogFields | string>;
        headers?: Headers;
        token?: string;
    }) {
        return (await this.api<'createCatalog'>({
            query: `mutation($input: CatalogCreateInput!) {
                createCatalog(input: $input) {
                    ${fields.join(' ')}
                }
            }`,
            variables: { input },
            headers,
            token,
        })).data.createCatalog;
    }

    async importCatalog({
        input,
        fields = this.defaultCatalogFields,
        headers,
        token,
    }: {
        input: CatalogImportInput;
        fields?: Array<keyof CatalogFields | string>;
        headers?: Headers;
        token?: string;
    }) {
        return (await this.api<'createCatalog'>({
            query: `mutation($input: CatalogImportInput!) {
                createCatalog(input: $input) {
                    ${fields.join(' ')}
                }
            }`,
            variables: { input },
            headers,
            token,
        })).data.createCatalog;
    }

    async updateCatalog({
        id,
        input,
        fields = this.defaultCatalogFields,
        headers,
        token,
    }: {
        id: Scalars['ObjectId'];
        input: CatalogUpdateInput;
        fields?: Array<keyof CatalogFields | string>;
        headers?: Headers;
        token?: string;
    }) {
        return (await this.api<'updateCatalog'>({
            query: `mutation($id: ObjectId!, $input: CatalogUpdateInput!) {
                updateCatalog(id: $id, input: $input) {
                    ${fields.join(' ')}
                }
            }`,
            variables: { id, input },
            headers,
            token,
        })).data.updateCatalog;
    }

    async deleteCatalog({
        id,
        headers,
        token,
    }: {
        id: Scalars['ObjectId'];
        headers?: Headers;
        token?: string;
    }) {
        return (await this.api<'deleteCatalog'>({
            query: `mutation($id: ObjectId!) {
                deleteCatalog(id: $id) {
                    id
                }
            }`,
            variables: { id },
            headers,
            token,
        })).data.deleteCatalog;
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

    async product({
        id,
        fields = this.defaultProductFields,
        headers,
        token,
    }: {
        id: Scalars['ObjectId'];
        fields?: Array<keyof ProductFields | string>;
        headers?: Headers;
        token?: string;
    }) {
        return (await this.api<'product'>({
            query: `query($id: ObjectId!) {
                product(id: $id) {
                    ${fields.join(' ')}
                }
            }`,
            variables: { id },
            headers,
            token,
        })).data.product;
    }

    async products({
        filter,
        sort,
        after,
        fields = this.defaultProductFields,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        after?: PageInfo['endCursor'];
        fields?: Array<keyof ProductFields | string>;
        headers?: Headers;
        token?: string;
    } = {}) {
        return (await this.api<'products'>({
            query: `query($filter: FilterInput, $sort: SortInput, $after: String) {
                products(filter: $filter, sort: $sort, after: $after) {
                    pageInfo {
                        hasNextPage
                        endCursor
                    }
                    edges {
                        node {
                            ${fields.join(' ')}
                        }
                    }
                }
            }`,
            variables: { filter, sort, after },
            headers,
            token,
        })).data.products;
    }

    productsAll({
        filter,
        sort,
        fields = this.defaultProductFields,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: Array<keyof ProductFields | string>;
        headers?: Headers;
        token?: string;
    } = {}) {
        return this.allPages<Product>((after: PageInfo['endCursor']) =>
            this.products({ filter, sort, after, fields, headers, token }),
        );
    }

    productsEach({
        filter,
        sort,
        fields = this.defaultProductFields,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: Array<keyof ProductFields | string>;
        headers?: Headers;
        token?: string;
    } = {}) {
        return this.eachNode<Product>((after: PageInfo['endCursor']) =>
            this.products({ filter, sort, after, fields, headers, token }),
        );
    }

    async createProduct({
        input,
        fields = this.defaultProductFields,
        headers,
        token,
    }: {
        input: ProductInput;
        fields?: Array<keyof ProductFields | string>;
        headers?: Headers;
        token?: string;
    }) {
        return (await this.api<'createProduct'>({
            query: `mutation($input: ProductInput!) {
                createProduct(input: $input) {
                    ${fields.join(' ')}
                }
            }`,
            variables: { input },
            headers,
            token,
        })).data.createProduct;
    }

    async updateProduct({
        id,
        input,
        fields = this.defaultProductFields,
        headers,
        token,
    }: {
        id: Scalars['ObjectId'];
        input: ProductUpdateInput;
        fields?: Array<keyof ProductFields | string>;
        headers?: Headers;
        token?: string;
    }) {
        return (await this.api<'updateProduct'>({
            query: `mutation($id: ObjectId!, $input: ProductUpdateInput!) {
                updateProduct(id: $id, input: $input) {
                    ${fields.join(' ')}
                }
            }`,
            variables: { id, input },
            headers,
            token,
        })).data.updateProduct;
    }

    async deleteProduct({
        id,
        headers,
        token,
    }: {
        id: Scalars['ObjectId'];
        headers?: Headers;
        token?: string;
    }) {
        return (await this.api<'deleteProduct'>({
            query: `mutation($id: ObjectId!) {
                deleteProduct(id: $id) {
                    id
                }
            }`,
            variables: { id },
            headers,
            token,
        })).data.deleteProduct;
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

    async marketingCampaign({
        id,
        fields = this.defaultMarketingCampaignFields,
        headers,
        token,
    }: {
        id: Scalars['ObjectId'];
        fields?: Array<keyof MarketingCampaignFields | string>;
        headers?: Headers;
        token?: string;
    }) {
        return (await this.api<'marketingCampaign'>({
            query: `query($id: ObjectId!) {
                marketingCampaign(id: $id) {
                    ${fields.join(' ')}
                }
            }`,
            variables: { id },
            headers,
            token,
        })).data.marketingCampaign;
    }

    async marketingCampaigns({
        filter,
        sort,
        after,
        fields = this.defaultMarketingCampaignFields,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        after?: PageInfo['endCursor'];
        fields?: Array<keyof MarketingCampaignFields | string>;
        headers?: Headers;
        token?: string;
    } = {}) {
        return (await this.api<'marketingCampaigns'>({
            query: `query($filter: FilterInput, $sort: SortInput, $after: String) {
                marketingCampaigns(filter: $filter, sort: $sort, after: $after) {
                    pageInfo {
                        hasNextPage
                        endCursor
                    }
                    edges {
                        node {
                            ${fields.join(' ')}
                        }
                    }
                }
            }`,
            variables: { filter, sort, after },
            headers,
            token,
        })).data.marketingCampaigns;
    }

    marketingCampaignsAll({
        filter,
        sort,
        fields = this.defaultMarketingCampaignFields,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: Array<keyof MarketingCampaignFields | string>;
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
                    headers,
                    token,
                }),
        );
    }

    marketingCampaignsEach({
        filter,
        sort,
        fields = this.defaultMarketingCampaignFields,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: Array<keyof MarketingCampaignFields | string>;
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
                    headers,
                    token,
                }),
        );
    }

    async createMarketingCampaign({
        input,
        fields = this.defaultMarketingCampaignFields,
        headers,
        token,
    }: {
        input: MarketingCampaignInput;
        fields?: Array<keyof MarketingCampaignFields | string>;
        headers?: Headers;
        token?: string;
    }) {
        return (await this.api<'createMarketingCampaign'>({
            query: `mutation($input: MarketingCampaignInput!) {
                createMarketingCampaign(input: $input) {
                    ${fields.join(' ')}
                }
            }`,
            variables: { input },
            headers,
            token,
        })).data.createMarketingCampaign;
    }

    async updateMarketingCampaign({
        id,
        input,
        fields = this.defaultMarketingCampaignFields,
        headers,
        token,
    }: {
        id: Scalars['ObjectId'];
        input: MarketingCampaignUpdateInput;
        fields?: Array<keyof MarketingCampaignFields | string>;
        headers?: Headers;
        token?: string;
    }) {
        return (await this.api<'updateMarketingCampaign'>({
            query: `mutation($id: ObjectId!, $input: MarketingCampaignUpdateInput!) {
                updateMarketingCampaign(id: $id, input: $input) {
                    ${fields.join(' ')}
                }
            }`,
            variables: { id, input },
            headers,
            token,
        })).data.updateMarketingCampaign;
    }

    async deleteMarketingCampaign({
        id,
        headers,
        token,
    }: {
        id: Scalars['ObjectId'];
        headers?: Headers;
        token?: string;
    }) {
        return (await this.api<'deleteMarketingCampaign'>({
            query: `mutation($id: ObjectId!) {
                deleteMarketingCampaign(id: $id) {
                    id
                }
            }`,
            variables: { id },
            headers,
            token,
        })).data.deleteMarketingCampaign;
    }

    // ####################################
    // MarketingAd
    // ####################################

    private defaultMarketingAdFields = [
        MarketingAdFields.id,
        MarketingAdFields.remoteId,
    ];

    async marketingAd({
        id,
        fields = this.defaultMarketingAdFields,
        headers,
        token,
    }: {
        id: Scalars['ObjectId'];
        fields?: Array<keyof MarketingAdFields | string>;
        headers?: Headers;
        token?: string;
    }) {
        return (await this.api<'marketingAd'>({
            query: `query($id: ObjectId!) {
                marketingAd(id: $id) {
                    ${fields.join(' ')}
                }
            }`,
            variables: { id },
            headers,
            token,
        })).data.marketingAd;
    }

    async marketingAds({
        filter,
        sort,
        after,
        fields = this.defaultMarketingAdFields,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        after?: PageInfo['endCursor'];
        fields?: Array<keyof MarketingAdFields | string>;
        headers?: Headers;
        token?: string;
    } = {}) {
        return (await this.api<'marketingAds'>({
            query: `query($filter: FilterInput, $sort: SortInput, $after: String) {
                marketingAds(filter: $filter, sort: $sort, after: $after) {
                    pageInfo {
                        hasNextPage
                        endCursor
                    }
                    edges {
                        node {
                            ${fields.join(' ')}
                        }
                    }
                }
            }`,
            variables: { filter, sort, after },
            headers,
            token,
        })).data.marketingAds;
    }

    marketingAdsAll({
        filter,
        sort,
        fields = this.defaultMarketingAdFields,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: Array<keyof MarketingAdFields | string>;
        headers?: Headers;
        token?: string;
    } = {}) {
        return this.allPages<MarketingAd>((after: PageInfo['endCursor']) =>
            this.marketingAds({ filter, sort, after, fields, headers, token }),
        );
    }

    marketingAdsEach({
        filter,
        sort,
        fields = this.defaultMarketingAdFields,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: Array<keyof MarketingAdFields | string>;
        headers?: Headers;
        token?: string;
    } = {}) {
        return this.eachNode<MarketingAd>((after: PageInfo['endCursor']) =>
            this.marketingAds({ filter, sort, after, fields, headers, token }),
        );
    }

    // ####################################
    // Result
    // ####################################

    private defaultResultFields = [
        ResultFields.id,
        ResultFields.date,
        'analytics {results}',
    ];

    async result({
        id,
        fields = this.defaultResultFields,
        headers,
        token,
    }: {
        id: Scalars['ObjectId'];
        fields?: Array<keyof ResultFields | string>;
        headers?: Headers;
        token?: string;
    }) {
        return (await this.api<'result'>({
            query: `query($id: ObjectId!) {
                result(id: $id) {
                    ${fields.join(' ')}
                }
            }`,
            variables: { id },
            headers,
            token,
        })).data.result;
    }

    async results({
        filter,
        sort,
        after,
        fields = this.defaultResultFields,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        after?: PageInfo['endCursor'];
        fields?: Array<keyof ResultFields | string>;
        headers?: Headers;
        token?: string;
    } = {}) {
        return (await this.api<'results'>({
            query: `query($filter: FilterInput, $sort: SortInput, $after: String) {
                results(filter: $filter, sort: $sort, after: $after) {
                    pageInfo {
                        hasNextPage
                        endCursor
                    }
                    edges {
                        node {
                            ${fields.join(' ')}
                        }
                    }
                }
            }`,
            variables: { filter, sort, after },
            headers,
            token,
        })).data.results;
    }

    resultsAll({
        filter,
        sort,
        fields = this.defaultResultFields,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: Array<keyof ResultFields | string>;
        headers?: Headers;
        token?: string;
    } = {}) {
        return this.allPages<Result>((after: PageInfo['endCursor']) =>
            this.results({ filter, sort, after, fields, headers, token }),
        );
    }

    resultsEach({
        filter,
        sort,
        fields = this.defaultResultFields,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: Array<keyof ResultFields | string>;
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

    async entitlement({
        id,
        fields = this.defaultEntitlementFields,
        headers,
        token,
    }: {
        id: Scalars['ObjectId'];
        fields?: Array<keyof EntitlementFields | string>;
        headers?: Headers;
        token?: string;
    }) {
        return (await this.api<'entitlement'>({
            query: `query($id: ObjectId!) {
                entitlement(id: $id) {
                    ${fields.join(' ')}
                }
            }`,
            variables: { id },
            headers,
            token,
        })).data.entitlement;
    }

    async entitlements({
        filter,
        sort,
        after,
        fields = this.defaultEntitlementFields,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        after?: PageInfo['endCursor'];
        fields?: Array<keyof EntitlementFields | string>;
        headers?: Headers;
        token?: string;
    } = {}) {
        return (await this.api<'entitlements'>({
            query: `query($filter: FilterInput, $sort: SortInput, $after: String) {
                entitlements(filter: $filter, sort: $sort, after: $after) {
                    pageInfo {
                        hasNextPage
                        endCursor
                    }
                    edges {
                        node {
                            ${fields.join(' ')}
                        }
                    }
                }
            }`,
            variables: { filter, sort, after },
            headers,
            token,
        })).data.entitlements;
    }

    entitlementsAll({
        filter,
        sort,
        fields = this.defaultEntitlementFields,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: Array<keyof EntitlementFields | string>;
        headers?: Headers;
        token?: string;
    } = {}) {
        return this.allPages<Entitlement>((after: PageInfo['endCursor']) =>
            this.entitlements({ filter, sort, after, fields, headers, token }),
        );
    }

    entitlementsEach({
        filter,
        sort,
        fields = this.defaultEntitlementFields,
        headers,
        token,
    }: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: Array<keyof EntitlementFields | string>;
        headers?: Headers;
        token?: string;
    } = {}) {
        return this.eachNode<Entitlement>((after: PageInfo['endCursor']) =>
            this.entitlements({ filter, sort, after, fields, headers, token }),
        );
    }

    async createEntitlement({
        input,
        fields = this.defaultEntitlementFields,
        headers,
        token,
    }: {
        input: EntitlementInput;
        fields?: Array<keyof EntitlementFields | string>;
        headers?: Headers;
        token?: string;
    }) {
        return (await this.api<'createEntitlement'>({
            query: `mutation($input: EntitlementInput!) {
                createEntitlement(input: $input) {
                    ${fields.join(' ')}
                }
            }`,
            variables: { input },
            headers,
            token,
        })).data.createEntitlement;
    }

    async updateEntitlement({
        id,
        input,
        fields = this.defaultEntitlementFields,
        headers,
        token,
    }: {
        id: Scalars['ObjectId'];
        input: EntitlementUpdateInput;
        fields?: Array<keyof EntitlementFields | string>;
        headers?: Headers;
        token?: string;
    }) {
        return (await this.api<'updateEntitlement'>({
            query: `mutation($id: ObjectId!, $input: EntitlementUpdateInput!) {
                updateEntitlement(id: $id, input: $input) {
                    ${fields.join(' ')}
                }
            }`,
            variables: { id, input },
            headers,
            token,
        })).data.updateEntitlement;
    }

    async deleteEntitlement({
        id,
        headers,
        token,
    }: {
        id: Scalars['ObjectId'];
        headers?: Headers;
        token?: string;
    }) {
        return (await this.api<'deleteEntitlement'>({
            query: `mutation($id: ObjectId!) {
                deleteEntitlement(id: $id) {
                    id
                }
            }`,
            variables: { id },
            headers,
            token,
        })).data.deleteEntitlement;
    }
}

export * from './generated/graphql';
export * from './inputFields';
