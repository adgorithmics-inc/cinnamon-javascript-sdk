import fetch from 'cross-fetch';
import get from 'lodash.get';
import { codes } from '@adgorithmics/graphql-errors';

import {
    PageInfo,
    Scalars,
    Mutation,
    Query,
    UserLoginInput,
    UserUpdateInput,
    RefreshTokenInput,
    Organization,
    OrganizationInput,
    OrganizationsFilterInput,
    OrganizationUpdateInput,
    Marketplace,
    MarketplaceInput,
    MarketplacesFilterInput,
    MarketplaceUpdateInput,
    MediaChannel,
    MediaChannelCreateInput,
    MediaChannelUpdateInput,
    MediaChannelImportInput,
    MediaChannelsFilterInput,
    CampaignTemplate,
    CampaignTemplatesFilterInput,
    Vendor,
    VendorInput,
    VendorsFilterInput,
    VendorUpdateInput,
    Catalog,
    CatalogCreateInput,
    CatalogImportInput,
    CatalogUpdateInput,
    CatalogsFilterInput,
    Product,
    ProductInput,
    ProductsFilterInput,
    ProductUpdateInput,
    MarketingCampaign,
    MarketingCampaignInput,
    MarketingCampaignsFilterInput,
    MarketingCampaignUpdateInput,
    MarketingAd,
    MarketingAdsFilterInput,
    Result,
    ResultsFilterInput,
    Entitlement,
    EntitlementInput,
    EntitlementsFilterInput,
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

export class Cinnamon {
    config: Config;
    refreshToken = '';
    token = '';

    constructor(config: Config) {
        this.config = config;
    }

    async api<T extends APIKey, U extends string = T>(
        query: string,
        variables: object = {},
        headers: Headers = {},
        token?: string,
    ): Promise<APIResult<T, U>> {
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
                return this.api(query, variables, headers, token);
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
            pageInfo?: PageInfo;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            edges?: any;
        }>,
    ) {
        const result: T[] = [];
        const getPage = async (
            after: PageInfo['endCursor'] = '',
        ): Promise<void> => {
            const { edges, pageInfo } = await fetchRelayConnection(after);

            result.push(...edges.map(({ node }: { node: T }) => node));

            if (pageInfo && pageInfo.hasNextPage) {
                await getPage(pageInfo.endCursor);
            }
        };
        await getPage();
        return result;
    }

    // ####################################
    // User
    // ####################################

    async login(input: UserLoginInput) {
        const result = (await this.api<'login'>(
            `mutation($input: UserLoginInput!) {
                login(input: $input) {
                    ${[
                        TokenFields.expiryDate,
                        TokenFields.token,
                        TokenFields.refreshToken,
                    ].join(' ')}
                }
            }`,
            { input },
        )).data.login;

        if (result.token && result.refreshToken) {
            this.token = result.token;
            this.refreshToken = result.refreshToken;
        }

        return result;
    }

    async refreshLogin(input: RefreshTokenInput) {
        const result = (await this.api<'refreshLogin'>(
            `mutation($input: RefreshTokenInput!) {
                refreshLogin(input: $input) {
                    ${[
                        TokenFields.expiryDate,
                        TokenFields.token,
                        TokenFields.refreshToken,
                    ].join(' ')}
                }
            }`,
            { input },
        )).data.refreshLogin;

        if (result.token && result.refreshToken) {
            this.token = result.token;
            this.refreshToken = result.refreshToken;
        }

        return result;
    }

    async me(
        fields: Array<keyof UserFields> = [UserFields.id, UserFields.email],
        headers: Headers = {},
        token?: string,
    ) {
        return (await this.api<'me'>(
            `query {
                me {
                    ${fields.join(' ')}
                }
            }`,
            {},
            headers,
            token,
        )).data.me;
    }

    async updateUser(
        input: UserUpdateInput,
        fields: Array<keyof UserFields> = [UserFields.id, UserFields.email],
        headers: Headers = {},
        token?: string,
    ) {
        return (await this.api<'updateUser'>(
            `mutation($input: UserUpdateInput!) {
                updateUser(input: $input) {
                    ${fields.join(' ')}
                }
            }`,
            { input },
            headers,
            token,
        )).data.updateUser;
    }

    // ####################################
    // Organization
    // ####################################

    async organization(
        id: Scalars['ObjectId'],
        fields: Array<keyof OrganizationFields> = [
            OrganizationFields.id,
            OrganizationFields.name,
            OrganizationFields.systemStatus,
            OrganizationFields.errors,
        ],
        headers: Headers = {},
        token?: string,
    ) {
        return (await this.api<'organization'>(
            `query($id: ObjectId!) {
                organization(id: $id) {
                    ${fields.join(' ')}
                }
            }`,
            { id },
            headers,
            token,
        )).data.organization;
    }

    async organizations(
        filter: OrganizationsFilterInput = {},
        after: PageInfo['endCursor'] = '',
        fields: Array<keyof OrganizationFields> = [
            OrganizationFields.id,
            OrganizationFields.name,
            OrganizationFields.systemStatus,
            OrganizationFields.errors,
        ],
        headers: Headers = {},
        token?: string,
    ) {
        return (await this.api<'organizations'>(
            `query($filter: OrganizationsFilterInput, $after: ObjectId!) {
                organizations(filter: $filter, after: $after) {
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
            { filter, after },
            headers,
            token,
        )).data.organizations;
    }

    organizationsAll(
        filter: OrganizationsFilterInput = {},
        fields: Array<keyof OrganizationFields> = [
            OrganizationFields.id,
            OrganizationFields.name,
            OrganizationFields.systemStatus,
            OrganizationFields.errors,
        ],
        headers: Headers = {},
        token?: string,
    ) {
        return this.allPages<Organization>((after: PageInfo['endCursor']) =>
            this.organizations(filter, after, fields, headers, token),
        );
    }

    async createOrganization(
        input: OrganizationInput,
        fields: Array<keyof OrganizationFields> = [
            OrganizationFields.id,
            OrganizationFields.name,
            OrganizationFields.systemStatus,
            OrganizationFields.errors,
        ],
        headers: Headers = {},
        token?: string,
    ) {
        return (await this.api<'createOrganization'>(
            `mutation($input: OrganizationInput!) {
                createOrganization(input: $input) {
                    ${fields.join(' ')}
                }
            }`,
            { input },
            headers,
            token,
        )).data.createOrganization;
    }

    async updateOrganization(
        id: Scalars['ObjectId'],
        input: OrganizationUpdateInput,
        fields: Array<keyof OrganizationFields> = [
            OrganizationFields.id,
            OrganizationFields.name,
            OrganizationFields.systemStatus,
            OrganizationFields.errors,
        ],
        headers: Headers = {},
        token?: string,
    ) {
        return (await this.api<'updateOrganization'>(
            `mutation($id: ObjectId!, $input: OrganizationUpdateInput!) {
                updateOrganization(id: $id, input: $input) {
                    ${fields.join(' ')}
                }
            }`,
            { id, input },
            headers,
            token,
        )).data.updateOrganization;
    }

    // ####################################
    // Marketplace
    // ####################################

    async marketplace(
        id: Scalars['ObjectId'],
        fields: Array<keyof MarketplaceFields> = [
            MarketplaceFields.id,
            MarketplaceFields.name,
            MarketplaceFields.systemStatus,
            MarketplaceFields.errors,
        ],
        headers: Headers = {},
        token?: string,
    ) {
        return (await this.api<'marketplace'>(
            `query($id: ObjectId!) {
                marketplace(id: $id) {
                    ${fields.join(' ')}
                }
            }`,
            { id },
            headers,
            token,
        )).data.marketplace;
    }

    async marketplaces(
        filter: MarketplacesFilterInput = {},
        after: PageInfo['endCursor'] = '',
        fields: Array<keyof MarketplaceFields> = [
            MarketplaceFields.id,
            MarketplaceFields.name,
            MarketplaceFields.systemStatus,
            MarketplaceFields.errors,
        ],
        headers: Headers = {},
        token?: string,
    ) {
        return (await this.api<'marketplaces'>(
            `query($filter: MarketplacesFilterInput, $after: ObjectId!) {
                marketplaces(filter: $filter, after: $after) {
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
            { filter, after },
            headers,
            token,
        )).data.marketplaces;
    }

    marketplacesAll(
        filter: MarketplacesFilterInput = {},
        fields: Array<keyof MarketplaceFields> = [
            MarketplaceFields.id,
            MarketplaceFields.name,
            MarketplaceFields.systemStatus,
            MarketplaceFields.errors,
        ],
        headers: Headers = {},
        token?: string,
    ) {
        return this.allPages<Marketplace>((after: PageInfo['endCursor']) =>
            this.marketplaces(filter, after, fields, headers, token),
        );
    }

    async createMarketplace(
        input: MarketplaceInput,
        fields: Array<keyof MarketplaceFields> = [
            MarketplaceFields.id,
            MarketplaceFields.name,
            MarketplaceFields.systemStatus,
            MarketplaceFields.errors,
        ],
        headers: Headers = {},
        token?: string,
    ) {
        return (await this.api<'createMarketplace'>(
            `mutation($input: MarketplaceInput!) {
                createMarketplace(input: $input) {
                    ${fields.join(' ')}
                }
            }`,
            { input },
            headers,
            token,
        )).data.createMarketplace;
    }

    async updateMarketplace(
        id: Scalars['ObjectId'],
        input: MarketplaceUpdateInput,
        fields: Array<keyof MarketplaceFields> = [
            MarketplaceFields.id,
            MarketplaceFields.name,
            MarketplaceFields.systemStatus,
            MarketplaceFields.errors,
        ],
        headers: Headers = {},
        token?: string,
    ) {
        return (await this.api<'updateMarketplace'>(
            `mutation($id: ObjectId!, $input: MarketplaceUpdateInput!) {
                updateMarketplace(id: $id, input: $input) {
                    ${fields.join(' ')}
                }
            }`,
            { id, input },
            headers,
            token,
        )).data.updateMarketplace;
    }

    async deleteMarketplace(
        id: Scalars['ObjectId'],
        headers: Headers = {},
        token?: string,
    ) {
        return (await this.api<'deleteMarketplace'>(
            `mutation($id: ObjectId!) {
                deleteMarketplace(id: $id) {
                    id
                }
            }`,
            { id },
            headers,
            token,
        )).data.deleteMarketplace;
    }

    // ####################################
    // MediaChannel
    // ####################################

    async mediaChannel(
        id: Scalars['ObjectId'],
        fields: Array<keyof MediaChannelFields> = [
            MediaChannelFields.id,
            MediaChannelFields.name,
            MediaChannelFields.systemStatus,
            MediaChannelFields.errors,
        ],
        headers: Headers = {},
        token?: string,
    ) {
        return (await this.api<'mediaChannel'>(
            `query($id: ObjectId!) {
                mediaChannel(id: $id) {
                    ${fields.join(' ')}
                }
            }`,
            { id },
            headers,
            token,
        )).data.mediaChannel;
    }

    async mediaChannels(
        filter: MediaChannelsFilterInput = {},
        after: PageInfo['endCursor'] = '',
        fields: Array<keyof MediaChannelFields> = [
            MediaChannelFields.id,
            MediaChannelFields.name,
            MediaChannelFields.systemStatus,
            MediaChannelFields.errors,
        ],
        headers: Headers = {},
        token?: string,
    ) {
        return (await this.api<'mediaChannels'>(
            `query($filter: MediaChannelsFilterInput!, $after: ObjectId!) {
                mediaChannels(filter: $filter, after: $after) {
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
            { filter, after },
            headers,
            token,
        )).data.mediaChannels;
    }

    mediaChannelsAll(
        filter: MediaChannelsFilterInput = {},
        fields: Array<keyof MediaChannelFields> = [
            MediaChannelFields.id,
            MediaChannelFields.name,
            MediaChannelFields.systemStatus,
            MediaChannelFields.errors,
        ],
        headers: Headers = {},
        token?: string,
    ) {
        return this.allPages<MediaChannel>((after: PageInfo['endCursor']) =>
            this.mediaChannels(filter, after, fields, headers, token),
        );
    }

    async createMediaChannel(
        input: MediaChannelCreateInput,
        fields: Array<keyof MediaChannelFields> = [
            MediaChannelFields.id,
            MediaChannelFields.name,
            MediaChannelFields.systemStatus,
            MediaChannelFields.errors,
        ],
        headers: Headers = {},
        token?: string,
    ) {
        return (await this.api<'createMediaChannel'>(
            `mutation($input: MediaChannelCreateInput!) {
                createMediaChannel(input: $input) {
                    ${fields.join(' ')}
                }
            }`,
            { input },
            headers,
            token,
        )).data.createMediaChannel;
    }

    async importMediaChannel(
        input: MediaChannelImportInput,
        fields: Array<keyof MediaChannelFields> = [
            MediaChannelFields.id,
            MediaChannelFields.name,
            MediaChannelFields.systemStatus,
            MediaChannelFields.errors,
        ],
        headers: Headers = {},
        token?: string,
    ) {
        return (await this.api<'importMediaChannel'>(
            `mutation($input: MediaChannelImportInput!) {
                importMediaChannel(input: $input) {
                    ${fields.join(' ')}
                }
            }`,
            { input },
            headers,
            token,
        )).data.importMediaChannel;
    }

    async updateMediaChannel(
        id: Scalars['ObjectId'],
        input: MediaChannelUpdateInput,
        fields: Array<keyof MediaChannelFields> = [
            MediaChannelFields.id,
            MediaChannelFields.name,
            MediaChannelFields.systemStatus,
            MediaChannelFields.errors,
        ],
        headers: Headers = {},
        token?: string,
    ) {
        return (await this.api<'updateMediaChannel'>(
            `mutation($id: ObjectId!, $input: MediaChannelUpdateInput!) {
                updateMediaChannel(id: $id, input: $input) {
                    ${fields.join(' ')}
                }
            }`,
            { id, input },
            headers,
            token,
        )).data.updateMediaChannel;
    }

    async deleteMediaChannel(
        id: Scalars['ObjectId'],
        headers: Headers = {},
        token?: string,
    ) {
        return (await this.api<'deleteMediaChannel'>(
            `mutation($id: ObjectId!) {
                deleteMediaChannel(id: $id) {
                    id
                }
            }`,
            { id },
            headers,
            token,
        )).data.deleteMediaChannel;
    }

    // ####################################
    // CampaignTemplate
    // ####################################

    async campaignTemplate(
        id: Scalars['ObjectId'],
        fields: Array<keyof CampaignTemplateFields> = [
            CampaignTemplateFields.id,
            CampaignTemplateFields.name,
        ],
        headers: Headers = {},
        token?: string,
    ) {
        return (await this.api<'campaignTemplate'>(
            `query($id: ObjectId!) {
                campaignTemplate(id: $id) {
                    ${fields.join(' ')}
                }
            }`,
            { id },
            headers,
            token,
        )).data.campaignTemplate;
    }

    async campaignTemplates(
        filter: CampaignTemplatesFilterInput = {},
        after: PageInfo['endCursor'] = '',
        fields: Array<keyof CampaignTemplateFields> = [
            CampaignTemplateFields.id,
            CampaignTemplateFields.name,
        ],
        headers: Headers = {},
        token?: string,
    ) {
        return (await this.api<'campaignTemplates'>(
            `query($filter: CampaignTemplatesFilterInput, $after: ObjectId!) {
                campaignTemplates(filter: $filter, after: $after) {
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
            { filter, after },
            headers,
            token,
        )).data.campaignTemplates;
    }

    campaignTemplatesAll(
        filter: CampaignTemplatesFilterInput = {},
        fields: Array<keyof CampaignTemplateFields> = [
            CampaignTemplateFields.id,
            CampaignTemplateFields.name,
        ],
        headers: Headers = {},
        token?: string,
    ) {
        return this.allPages<CampaignTemplate>((after: PageInfo['endCursor']) =>
            this.campaignTemplates(filter, after, fields, headers, token),
        );
    }

    // ####################################
    // Vendor
    // ####################################

    async vendor(
        id: Scalars['ObjectId'],
        fields: Array<keyof VendorFields> = [
            VendorFields.id,
            VendorFields.name,
            VendorFields.systemStatus,
            VendorFields.errors,
        ],
        headers: Headers = {},
        token?: string,
    ) {
        return (await this.api<'vendor'>(
            `query($id: ObjectId!) {
                vendor(id: $id) {
                    ${fields.join(' ')}
                }
            }`,
            { id },
            headers,
            token,
        )).data.vendor;
    }

    async vendors(
        filter: VendorsFilterInput = {},
        after: PageInfo['endCursor'] = '',
        fields: Array<keyof VendorFields> = [
            VendorFields.id,
            VendorFields.name,
            VendorFields.systemStatus,
            VendorFields.errors,
        ],
        headers: Headers = {},
        token?: string,
    ) {
        return (await this.api<'vendors'>(
            `query($filter: VendorsFilterInput, $after: ObjectId!) {
                vendors(filter: $filter, after: $after) {
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
            { filter, after },
            headers,
            token,
        )).data.vendors;
    }

    vendorsAll(
        filter: VendorsFilterInput = {},
        fields: Array<keyof VendorFields> = [
            VendorFields.id,
            VendorFields.name,
            VendorFields.systemStatus,
            VendorFields.errors,
        ],
        headers: Headers = {},
        token?: string,
    ) {
        return this.allPages<Vendor>((after: PageInfo['endCursor']) =>
            this.vendors(filter, after, fields, headers, token),
        );
    }

    async createVendor(
        input: VendorInput,
        fields: Array<keyof VendorFields> = [
            VendorFields.id,
            VendorFields.name,
            VendorFields.systemStatus,
            VendorFields.errors,
        ],
        headers: Headers = {},
        token?: string,
    ) {
        return (await this.api<'createVendor'>(
            `mutation($input: VendorInput!) {
                createVendor(input: $input) {
                    ${fields.join(' ')}
                }
            }`,
            { input },
            headers,
            token,
        )).data.createVendor;
    }

    async updateVendor(
        id: Scalars['ObjectId'],
        input: VendorUpdateInput,
        fields: Array<keyof VendorFields> = [
            VendorFields.id,
            VendorFields.name,
            VendorFields.systemStatus,
            VendorFields.errors,
        ],
        headers: Headers = {},
        token?: string,
    ) {
        return (await this.api<'updateVendor'>(
            `mutation($id: ObjectId!, $input: VendorUpdateInput!) {
                updateVendor(id: $id, input: $input) {
                    ${fields.join(' ')}
                }
            }`,
            { id, input },
            headers,
            token,
        )).data.updateVendor;
    }

    async deleteVendor(
        id: Scalars['ObjectId'],
        headers: Headers = {},
        token?: string,
    ) {
        return (await this.api<'deleteVendor'>(
            `mutation($id: ObjectId!) {
                deleteVendor(id: $id) {
                    id
                }
            }`,
            { id },
            headers,
            token,
        )).data.deleteVendor;
    }

    // ####################################
    // Catalog
    // ####################################

    async catalog(
        id: Scalars['ObjectId'],
        fields: Array<keyof CatalogFields> = [
            CatalogFields.id,
            CatalogFields.name,
            CatalogFields.remoteId,
            CatalogFields.systemStatus,
            CatalogFields.errors,
        ],
        headers: Headers = {},
        token?: string,
    ) {
        return (await this.api<'catalog'>(
            `query($id: ObjectId!) {
                catalog(id: $id) {
                    ${fields.join(' ')}
                }
            }`,
            { id },
            headers,
            token,
        )).data.catalog;
    }

    async catalogs(
        filter: CatalogsFilterInput = {},
        after: PageInfo['endCursor'] = '',
        fields: Array<keyof CatalogFields> = [
            CatalogFields.id,
            CatalogFields.name,
            CatalogFields.remoteId,
            CatalogFields.systemStatus,
            CatalogFields.errors,
        ],
        headers: Headers = {},
        token?: string,
    ) {
        return (await this.api<'catalogs'>(
            `query($filter: CatalogsFilterInput, $after: ObjectId!) {
                catalogs(filter: $filter, after: $after) {
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
            { filter, after },
            headers,
            token,
        )).data.catalogs;
    }

    catalogsAll(
        filter: CatalogsFilterInput = {},
        fields: Array<keyof CatalogFields> = [
            CatalogFields.id,
            CatalogFields.name,
            CatalogFields.remoteId,
            CatalogFields.systemStatus,
            CatalogFields.errors,
        ],
        headers: Headers = {},
        token?: string,
    ) {
        return this.allPages<Catalog>((after: PageInfo['endCursor']) =>
            this.catalogs(filter, after, fields, headers, token),
        );
    }

    async createCatalog(
        input: CatalogCreateInput,
        fields: Array<keyof CatalogFields> = [
            CatalogFields.id,
            CatalogFields.name,
            CatalogFields.remoteId,
            CatalogFields.systemStatus,
            CatalogFields.errors,
        ],
        headers: Headers = {},
        token?: string,
    ) {
        return (await this.api<'createCatalog'>(
            `mutation($input: CatalogCreateInput!) {
                createCatalog(input: $input) {
                    ${fields.join(' ')}
                }
            }`,
            { input },
            headers,
            token,
        )).data.createCatalog;
    }

    async importCatalog(
        input: CatalogImportInput,
        fields: Array<keyof CatalogFields> = [
            CatalogFields.id,
            CatalogFields.name,
            CatalogFields.remoteId,
            CatalogFields.systemStatus,
            CatalogFields.errors,
        ],
        headers: Headers = {},
        token?: string,
    ) {
        return (await this.api<'createCatalog'>(
            `mutation($input: CatalogImportInput!) {
                createCatalog(input: $input) {
                    ${fields.join(' ')}
                }
            }`,
            { input },
            headers,
            token,
        )).data.createCatalog;
    }

    async updateCatalog(
        id: Scalars['ObjectId'],
        input: CatalogUpdateInput,
        fields: Array<keyof CatalogFields> = [
            CatalogFields.id,
            CatalogFields.name,
            CatalogFields.remoteId,
            CatalogFields.systemStatus,
            CatalogFields.errors,
        ],
        headers: Headers = {},
        token?: string,
    ) {
        return (await this.api<'updateCatalog'>(
            `mutation($id: ObjectId!, $input: CatalogUpdateInput!) {
                updateCatalog(id: $id, input: $input) {
                    ${fields.join(' ')}
                }
            }`,
            { id, input },
            headers,
            token,
        )).data.updateCatalog;
    }

    async deleteCatalog(
        id: Scalars['ObjectId'],
        headers: Headers = {},
        token?: string,
    ) {
        return (await this.api<'deleteCatalog'>(
            `mutation($id: ObjectId!) {
                deleteCatalog(id: $id) {
                    id
                }
            }`,
            { id },
            headers,
            token,
        )).data.deleteCatalog;
    }

    // ####################################
    // Product
    // ####################################

    async product(
        id: Scalars['ObjectId'],
        fields: Array<keyof ProductFields> = [
            ProductFields.id,
            ProductFields.name,
            ProductFields.sku,
            ProductFields.systemStatus,
            ProductFields.errors,
            ProductFields.warnings,
        ],
        headers: Headers = {},
        token?: string,
    ) {
        return (await this.api<'product'>(
            `query($id: ObjectId!) {
                product(id: $id) {
                    ${fields.join(' ')}
                }
            }`,
            { id },
            headers,
            token,
        )).data.product;
    }

    async products(
        filter: ProductsFilterInput = {},
        after: PageInfo['endCursor'] = '',
        fields: Array<keyof ProductFields> = [
            ProductFields.id,
            ProductFields.name,
            ProductFields.sku,
            ProductFields.systemStatus,
            ProductFields.errors,
            ProductFields.warnings,
        ],
        headers: Headers = {},
        token?: string,
    ) {
        return (await this.api<'products'>(
            `query($filter: ProductsFilterInput, $after: ObjectId!) {
                products(filter: $filter, after: $after) {
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
            { filter, after },
            headers,
            token,
        )).data.products;
    }

    productsAll(
        filter: ProductsFilterInput = {},
        fields: Array<keyof ProductFields> = [
            ProductFields.id,
            ProductFields.name,
            ProductFields.sku,
            ProductFields.systemStatus,
            ProductFields.errors,
            ProductFields.warnings,
        ],
        headers: Headers = {},
        token?: string,
    ) {
        return this.allPages<Product>((after: PageInfo['endCursor']) =>
            this.products(filter, after, fields, headers, token),
        );
    }

    async createProduct(
        input: ProductInput,
        fields: Array<keyof ProductFields> = [
            ProductFields.id,
            ProductFields.name,
            ProductFields.sku,
            ProductFields.systemStatus,
            ProductFields.errors,
            ProductFields.warnings,
        ],
        headers: Headers = {},
        token?: string,
    ) {
        return (await this.api<'createProduct'>(
            `mutation($input: ProductInput!) {
                createProduct(input: $input) {
                    ${fields.join(' ')}
                }
            }`,
            { input },
            headers,
            token,
        )).data.createProduct;
    }

    async updateProduct(
        id: Scalars['ObjectId'],
        input: ProductUpdateInput,
        fields: Array<keyof ProductFields> = [
            ProductFields.id,
            ProductFields.name,
            ProductFields.sku,
            ProductFields.systemStatus,
            ProductFields.errors,
            ProductFields.warnings,
        ],
        headers: Headers = {},
        token?: string,
    ) {
        return (await this.api<'updateProduct'>(
            `mutation($id: ObjectId!, $input: ProductUpdateInput!) {
                updateProduct(id: $id, input: $input) {
                    ${fields.join(' ')}
                }
            }`,
            { id, input },
            headers,
            token,
        )).data.updateProduct;
    }

    async deleteProduct(
        id: Scalars['ObjectId'],
        headers: Headers = {},
        token?: string,
    ) {
        return (await this.api<'deleteProduct'>(
            `mutation($id: ObjectId!) {
                deleteProduct(id: $id) {
                    id
                }
            }`,
            { id },
            headers,
            token,
        )).data.deleteProduct;
    }

    // ####################################
    // MarketingCampaign
    // ####################################

    async marketingCampaign(
        id: Scalars['ObjectId'],
        fields: Array<keyof MarketingCampaignFields> = [
            MarketingCampaignFields.id,
            MarketingCampaignFields.status,
            MarketingCampaignFields.systemStatus,
            MarketingCampaignFields.errors,
        ],
        headers: Headers = {},
        token?: string,
    ) {
        return (await this.api<'marketingCampaign'>(
            `query($id: ObjectId!) {
                marketingCampaign(id: $id) {
                    ${fields.join(' ')}
                }
            }`,
            { id },
            headers,
            token,
        )).data.marketingCampaign;
    }

    async marketingCampaigns(
        filter: MarketingCampaignsFilterInput = {},
        after: PageInfo['endCursor'] = '',
        fields: Array<keyof MarketingCampaignFields> = [
            MarketingCampaignFields.id,
            MarketingCampaignFields.status,
            MarketingCampaignFields.systemStatus,
            MarketingCampaignFields.errors,
        ],
        headers: Headers = {},
        token?: string,
    ) {
        return (await this.api<'marketingCampaigns'>(
            `query($filter: MarketingCampaignsFilterInput, $after: ObjectId!) {
                marketingCampaigns(filter: $filter, after: $after) {
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
            { filter, after },
            headers,
            token,
        )).data.marketingCampaigns;
    }

    marketingCampaignsAll(
        filter: MarketingCampaignsFilterInput = {},
        fields: Array<keyof MarketingCampaignFields> = [
            MarketingCampaignFields.id,
            MarketingCampaignFields.status,
            MarketingCampaignFields.systemStatus,
            MarketingCampaignFields.errors,
        ],
        headers: Headers = {},
        token?: string,
    ) {
        return this.allPages<MarketingCampaign>(
            (after: PageInfo['endCursor']) =>
                this.marketingCampaigns(filter, after, fields, headers, token),
        );
    }

    async createMarketingCampaign(
        input: MarketingCampaignInput,
        fields: Array<keyof MarketingCampaignFields> = [
            MarketingCampaignFields.id,
            MarketingCampaignFields.status,
            MarketingCampaignFields.systemStatus,
            MarketingCampaignFields.errors,
        ],
        headers: Headers = {},
        token?: string,
    ) {
        return (await this.api<'createMarketingCampaign'>(
            `mutation($input: MarketingCampaignInput!) {
                createMarketingCampaign(input: $input) {
                    ${fields.join(' ')}
                }
            }`,
            { input },
            headers,
            token,
        )).data.createMarketingCampaign;
    }

    async updateMarketingCampaign(
        id: Scalars['ObjectId'],
        input: MarketingCampaignUpdateInput,
        fields: Array<keyof MarketingCampaignFields> = [
            MarketingCampaignFields.id,
            MarketingCampaignFields.status,
            MarketingCampaignFields.systemStatus,
            MarketingCampaignFields.errors,
        ],
        headers: Headers = {},
        token?: string,
    ) {
        return (await this.api<'updateMarketingCampaign'>(
            `mutation($id: ObjectId!, $input: MarketingCampaignUpdateInput!) {
                updateMarketingCampaign(id: $id, input: $input) {
                    ${fields.join(' ')}
                }
            }`,
            { id, input },
            headers,
            token,
        )).data.updateMarketingCampaign;
    }

    async deleteMarketingCampaign(
        id: Scalars['ObjectId'],
        headers: Headers = {},
        token?: string,
    ) {
        return (await this.api<'deleteMarketingCampaign'>(
            `mutation($id: ObjectId!) {
                deleteMarketingCampaign(id: $id) {
                    id
                }
            }`,
            { id },
            headers,
            token,
        )).data.deleteMarketingCampaign;
    }

    // ####################################
    // MarketingAd
    // ####################################

    async marketingAd(
        id: Scalars['ObjectId'],
        fields: Array<keyof MarketingAdFields> = [
            MarketingAdFields.id,
            MarketingAdFields.remoteId,
        ],
        headers: Headers = {},
        token?: string,
    ) {
        return (await this.api<'marketingAd'>(
            `query($id: ObjectId!) {
                marketingAd(id: $id) {
                    ${fields.join(' ')}
                }
            }`,
            { id },
            headers,
            token,
        )).data.marketingAd;
    }

    async marketingAds(
        filter: MarketingAdsFilterInput = {},
        after: PageInfo['endCursor'] = '',
        fields: Array<keyof MarketingAdFields> = [
            MarketingAdFields.id,
            MarketingAdFields.remoteId,
        ],
        headers: Headers = {},
        token?: string,
    ) {
        return (await this.api<'marketingAds'>(
            `query($filter: MarketingAdsFilterInput, $after: ObjectId!) {
                marketingAds(filter: $filter, after: $after) {
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
            { filter, after },
            headers,
            token,
        )).data.marketingAds;
    }

    marketingAdsAll(
        filter: MarketingAdsFilterInput = {},
        fields: Array<keyof MarketingAdFields> = [
            MarketingAdFields.id,
            MarketingAdFields.remoteId,
        ],
        headers: Headers = {},
        token?: string,
    ) {
        return this.allPages<MarketingAd>((after: PageInfo['endCursor']) =>
            this.marketingAds(filter, after, fields, headers, token),
        );
    }

    // ####################################
    // Result
    // ####################################

    async result(
        id: Scalars['ObjectId'],
        fields: Array<keyof ResultFields> = [
            ResultFields.id,
            ResultFields.date,
            ResultFields.results,
            ResultFields.impressions,
        ],
        headers: Headers = {},
        token?: string,
    ) {
        return (await this.api<'result'>(
            `query($id: ObjectId!) {
                result(id: $id) {
                    ${fields.join(' ')}
                }
            }`,
            { id },
            headers,
            token,
        )).data.result;
    }

    async results(
        filter: ResultsFilterInput = {},
        after: PageInfo['endCursor'] = '',
        fields: Array<keyof ResultFields> = [
            ResultFields.id,
            ResultFields.date,
            ResultFields.results,
            ResultFields.impressions,
        ],
        headers: Headers = {},
        token?: string,
    ) {
        return (await this.api<'results'>(
            `query($filter: ResultsFilterInput, $after: ObjectId!) {
                results(filter: $filter, after: $after) {
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
            { filter, after },
            headers,
            token,
        )).data.results;
    }

    resultsAll(
        filter: ResultsFilterInput = {},
        fields: Array<keyof ResultFields> = [
            ResultFields.id,
            ResultFields.date,
            ResultFields.results,
            ResultFields.impressions,
        ],
        headers: Headers = {},
        token?: string,
    ) {
        return this.allPages<Result>((after: PageInfo['endCursor']) =>
            this.results(filter, after, fields, headers, token),
        );
    }

    // ####################################
    // Entitlement
    // ####################################

    async entitlement(
        id: Scalars['ObjectId'],
        fields: Array<keyof EntitlementFields> = [
            EntitlementFields.id,
            EntitlementFields.permissions,
            EntitlementFields.type,
        ],
        headers: Headers = {},
        token?: string,
    ) {
        return (await this.api<'entitlement'>(
            `query($id: ObjectId!) {
                entitlement(id: $id) {
                    ${fields.join(' ')}
                }
            }`,
            { id },
            headers,
            token,
        )).data.entitlement;
    }

    async entitlements(
        filter: EntitlementsFilterInput = {},
        after: PageInfo['endCursor'] = '',
        fields: Array<keyof EntitlementFields> = [
            EntitlementFields.id,
            EntitlementFields.permissions,
            EntitlementFields.type,
        ],
        headers: Headers = {},
        token?: string,
    ) {
        return (await this.api<'entitlements'>(
            `query($filter: EntitlementsFilterInput, $after: ObjectId!) {
                entitlements(filter: $filter, after: $after) {
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
            { filter, after },
            headers,
            token,
        )).data.entitlements;
    }

    entitlementsAll(
        filter: EntitlementsFilterInput = {},
        fields: Array<keyof EntitlementFields> = [
            EntitlementFields.id,
            EntitlementFields.permissions,
            EntitlementFields.type,
        ],
        headers: Headers = {},
        token?: string,
    ) {
        return this.allPages<Entitlement>((after: PageInfo['endCursor']) =>
            this.entitlements(filter, after, fields, headers, token),
        );
    }

    async createEntitlement(
        input: EntitlementInput,
        fields: Array<keyof EntitlementFields> = [
            EntitlementFields.id,
            EntitlementFields.permissions,
            EntitlementFields.type,
        ],
        headers: Headers = {},
        token?: string,
    ) {
        return (await this.api<'createEntitlement'>(
            `mutation($input: EntitlementInput!) {
                createEntitlement(input: $input) {
                    ${fields.join(' ')}
                }
            }`,
            { input },
            headers,
            token,
        )).data.createEntitlement;
    }

    async updateEntitlement(
        id: Scalars['ObjectId'],
        input: EntitlementUpdateInput,
        fields: Array<keyof EntitlementFields> = [
            EntitlementFields.id,
            EntitlementFields.permissions,
            EntitlementFields.type,
        ],
        headers: Headers = {},
        token?: string,
    ) {
        return (await this.api<'updateEntitlement'>(
            `mutation($id: ObjectId!, $input: EntitlementUpdateInput!) {
                updateEntitlement(id: $id, input: $input) {
                    ${fields.join(' ')}
                }
            }`,
            { id, input },
            headers,
            token,
        )).data.updateEntitlement;
    }

    async deleteEntitlement(
        id: Scalars['ObjectId'],
        headers: Headers = {},
        token?: string,
    ) {
        return (await this.api<'deleteEntitlement'>(
            `mutation($id: ObjectId!) {
                deleteEntitlement(id: $id) {
                    id
                }
            }`,
            { id },
            headers,
            token,
        )).data.deleteEntitlement;
    }
}

export * from './generated/graphql';
export * from './inputFields';
