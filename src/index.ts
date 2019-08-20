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
    OrganizationInput,
    OrganizationUpdateInput,
    MarketplaceInput,
    MarketplaceUpdateInput,
    MediaChannelInput,
    MediaChannelUpdateInput,
    CampaignTemplate,
    VendorInput,
    VendorUpdateInput,
    CatalogInput,
    CatalogUpdateInput,
    ProductInput,
    ProductUpdateInput,
    MarketingCampaignInput,
    MarketingCampaignUpdateInput,
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

export class Cinnamon {
    config: Config;
    refreshToken = '';
    token = '';

    constructor(config: Config) {
        this.config = config;
    }

    async api<T extends keyof (Query & Mutation), U extends string = T>(
        query: string,
        variables: object = {},
        headers: Headers = {},
        token?: string,
    ): Promise<{
        data: Record<U, NonNullable<Partial<(Query & Mutation)[T]>>>;
    }> {
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
                        get(error, 'extentions.code') === codes.TOKEN_EXPIRED,
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

    async apiPaging<T>(
        query: string,
        variables: object = {},
        headers: Headers,
        token?: string,
    ) {
        const result: Partial<T>[] = [];
        const getPage = async (
            after: PageInfo['endCursor'] = '',
        ): Promise<void> => {
            const { data } = await this.api(
                query,
                { ...variables, after },
                headers,
                token,
            );

            const { edges, pageInfo } = Object.values(data)[0] as {
                pageInfo: PageInfo;
                edges: Array<{ node: T }>;
            };

            result.push(...edges.map(({ node }: { node: T }) => node));

            if (pageInfo.hasNextPage) {
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
        id: Scalars['ID'],
        fields: Array<keyof OrganizationFields> = [
            OrganizationFields.id,
            OrganizationFields.name,
        ],
        headers: Headers = {},
        token?: string,
    ) {
        return (await this.api<'organization'>(
            `query($id: ID!) {
                organization(id: $id) {
                    ${fields.join(' ')}
                }
            }`,
            { id },
            headers,
            token,
        )).data.organization;
    }

    async createOrganization(
        input: OrganizationInput,
        fields: Array<keyof OrganizationFields> = [
            OrganizationFields.id,
            OrganizationFields.name,
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
        id: Scalars['ID'],
        input: OrganizationUpdateInput,
        fields: Array<keyof OrganizationFields> = [
            OrganizationFields.id,
            OrganizationFields.name,
        ],
        headers: Headers = {},
        token?: string,
    ) {
        return (await this.api<'updateOrganization'>(
            `mutation($id: ID!, $input: OrganizationUpdateInput!) {
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
        id: Scalars['ID'],
        fields: Array<keyof MarketplaceFields> = [
            MarketplaceFields.id,
            MarketplaceFields.name,
        ],
        headers: Headers = {},
        token?: string,
    ) {
        return (await this.api<'marketplace'>(
            `query($id: ID!) {
                marketplace(id: $id) {
                    ${fields.join(' ')}
                }
            }`,
            { id },
            headers,
            token,
        )).data.marketplace;
    }

    async createMarketplace(
        input: MarketplaceInput,
        fields: Array<keyof MarketplaceFields> = [
            MarketplaceFields.id,
            MarketplaceFields.name,
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
        id: Scalars['ID'],
        input: MarketplaceUpdateInput,
        fields: Array<keyof MarketplaceFields> = [
            MarketplaceFields.id,
            MarketplaceFields.name,
        ],
        headers: Headers = {},
        token?: string,
    ) {
        return (await this.api<'updateMarketplace'>(
            `mutation($id: ID!, $input: MarketplaceUpdateInput!) {
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
        id: Scalars['ID'],
        headers: Headers = {},
        token?: string,
    ) {
        return (await this.api<'deleteMarketplace'>(
            `mutation($id: ID!) {
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
        id: Scalars['ID'],
        fields: Array<keyof MediaChannelFields> = [
            MediaChannelFields.id,
            MediaChannelFields.name,
        ],
        headers: Headers = {},
        token?: string,
    ) {
        return (await this.api<'mediaChannel'>(
            `query($id: ID!) {
                mediaChannel(id: $id) {
                    ${fields.join(' ')}
                }
            }`,
            { id },
            headers,
            token,
        )).data.mediaChannel;
    }

    async createMediaChannel(
        input: MediaChannelInput,
        fields: Array<keyof MediaChannelFields> = [
            MediaChannelFields.id,
            MediaChannelFields.name,
        ],
        headers: Headers = {},
        token?: string,
    ) {
        return (await this.api<'createMediaChannel'>(
            `mutation($input: MediaChannelInput!) {
                createMediaChannel(input: $input) {
                    ${fields.join(' ')}
                }
            }`,
            { input },
            headers,
            token,
        )).data.createMediaChannel;
    }

    async updateMediaChannel(
        id: Scalars['ID'],
        input: MediaChannelUpdateInput,
        fields: Array<keyof MediaChannelFields> = [
            MediaChannelFields.id,
            MediaChannelFields.name,
        ],
        headers: Headers = {},
        token?: string,
    ) {
        return (await this.api<'updateMediaChannel'>(
            `mutation($id: ID!, $input: MediaChannelUpdateInput!) {
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
        id: Scalars['ID'],
        headers: Headers = {},
        token?: string,
    ) {
        return (await this.api<'deleteMediaChannel'>(
            `mutation($id: ID!) {
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
        id: Scalars['ID'],
        fields: Array<keyof CampaignTemplateFields> = [
            CampaignTemplateFields.id,
            CampaignTemplateFields.name,
        ],
        headers: Headers = {},
        token?: string,
    ) {
        return (await this.api<'campaignTemplate'>(
            `query($id: ID!) {
                campaignTemplate(id: $id) {
                    ${fields.join(' ')}
                }
            }`,
            { id },
            headers,
            token,
        )).data.campaignTemplate;
    }

    campaignTemplates(
        fields: Array<keyof CampaignTemplateFields> = [
            CampaignTemplateFields.id,
            CampaignTemplateFields.name,
        ],
        headers: Headers = {},
        token?: string,
    ) {
        return this.apiPaging<CampaignTemplate>(
            `query($after: ID!) {
                campaignTemplates(after: $after) {
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
            {},
            headers,
            token,
        );
    }

    // ####################################
    // Vendor
    // ####################################

    async vendor(
        id: Scalars['ID'],
        fields: Array<keyof VendorFields> = [
            VendorFields.id,
            VendorFields.name,
        ],
        headers: Headers = {},
        token?: string,
    ) {
        return (await this.api<'vendor'>(
            `query($id: ID!) {
                vendor(id: $id) {
                    ${fields.join(' ')}
                }
            }`,
            { id },
            headers,
            token,
        )).data.vendor;
    }

    async createVendor(
        input: VendorInput,
        fields: Array<keyof VendorFields> = [
            VendorFields.id,
            VendorFields.name,
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
        id: Scalars['ID'],
        input: VendorUpdateInput,
        fields: Array<keyof VendorFields> = [
            VendorFields.id,
            VendorFields.name,
        ],
        headers: Headers = {},
        token?: string,
    ) {
        return (await this.api<'updateVendor'>(
            `mutation($id: ID!, $input: VendorUpdateInput!) {
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
        id: Scalars['ID'],
        headers: Headers = {},
        token?: string,
    ) {
        return (await this.api<'deleteVendor'>(
            `mutation($id: ID!) {
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
        id: Scalars['ID'],
        fields: Array<keyof CatalogFields> = [
            CatalogFields.id,
            CatalogFields.name,
        ],
        headers: Headers = {},
        token?: string,
    ) {
        return (await this.api<'catalog'>(
            `query($id: ID!) {
                catalog(id: $id) {
                    ${fields.join(' ')}
                }
            }`,
            { id },
            headers,
            token,
        )).data.catalog;
    }

    async createCatalog(
        input: CatalogInput,
        fields: Array<keyof CatalogFields> = [
            CatalogFields.id,
            CatalogFields.name,
        ],
        headers: Headers = {},
        token?: string,
    ) {
        return (await this.api<'createCatalog'>(
            `mutation($input: CatalogInput!) {
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
        id: Scalars['ID'],
        input: CatalogUpdateInput,
        fields: Array<keyof CatalogFields> = [
            CatalogFields.id,
            CatalogFields.name,
        ],
        headers: Headers = {},
        token?: string,
    ) {
        return (await this.api<'updateCatalog'>(
            `mutation($id: ID!, $input: CatalogUpdateInput!) {
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
        id: Scalars['ID'],
        headers: Headers = {},
        token?: string,
    ) {
        return (await this.api<'deleteCatalog'>(
            `mutation($id: ID!) {
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
        id: Scalars['ID'],
        fields: Array<keyof ProductFields> = [
            ProductFields.id,
            ProductFields.name,
        ],
        headers: Headers = {},
        token?: string,
    ) {
        return (await this.api<'product'>(
            `query($id: ID!) {
                product(id: $id) {
                    ${fields.join(' ')}
                }
            }`,
            { id },
            headers,
            token,
        )).data.product;
    }

    async createProduct(
        input: ProductInput,
        fields: Array<keyof ProductFields> = [
            ProductFields.id,
            ProductFields.name,
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
        id: Scalars['ID'],
        input: ProductUpdateInput,
        fields: Array<keyof ProductFields> = [
            ProductFields.id,
            ProductFields.name,
        ],
        headers: Headers = {},
        token?: string,
    ) {
        return (await this.api<'updateProduct'>(
            `mutation($id: ID!, $input: ProductUpdateInput!) {
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
        id: Scalars['ID'],
        headers: Headers = {},
        token?: string,
    ) {
        return (await this.api<'deleteProduct'>(
            `mutation($id: ID!) {
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
        id: Scalars['ID'],
        fields: Array<keyof MarketingCampaignFields> = [
            MarketingCampaignFields.id,
            MarketingCampaignFields.status,
        ],
        headers: Headers = {},
        token?: string,
    ) {
        return (await this.api<'marketingCampaign'>(
            `query($id: ID!) {
                marketingCampaign(id: $id) {
                    ${fields.join(' ')}
                }
            }`,
            { id },
            headers,
            token,
        )).data.marketingCampaign;
    }

    async createMarketingCampaign(
        input: MarketingCampaignInput,
        fields: Array<keyof MarketingCampaignFields> = [
            MarketingCampaignFields.id,
            MarketingCampaignFields.status,
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
        id: Scalars['ID'],
        input: MarketingCampaignUpdateInput,
        fields: Array<keyof MarketingCampaignFields> = [
            MarketingCampaignFields.id,
            MarketingCampaignFields.status,
        ],
        headers: Headers = {},
        token?: string,
    ) {
        return (await this.api<'updateMarketingCampaign'>(
            `mutation($id: ID!, $input: MarketingCampaignUpdateInput!) {
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
        id: Scalars['ID'],
        headers: Headers = {},
        token?: string,
    ) {
        return (await this.api<'deleteMarketingCampaign'>(
            `mutation($id: ID!) {
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
        id: Scalars['ID'],
        fields: Array<keyof MarketingAdFields> = [
            MarketingAdFields.id,
            MarketingAdFields.remoteId,
        ],
        headers: Headers = {},
        token?: string,
    ) {
        return (await this.api<'marketingAd'>(
            `query($id: ID!) {
                marketingAd(id: $id) {
                    ${fields.join(' ')}
                }
            }`,
            { id },
            headers,
            token,
        )).data.marketingAd;
    }

    // ####################################
    // Result
    // ####################################

    async result(
        id: Scalars['ID'],
        fields: Array<keyof ResultFields> = [
            ResultFields.id,
            ResultFields.results,
        ],
        headers: Headers = {},
        token?: string,
    ) {
        return (await this.api<'result'>(
            `query($id: ID!) {
                result(id: $id) {
                    ${fields.join(' ')}
                }
            }`,
            { id },
            headers,
            token,
        )).data.result;
    }

    // ####################################
    // Entitlement
    // ####################################

    async entitlement(
        id: Scalars['ID'],
        fields: Array<keyof EntitlementFields> = [
            EntitlementFields.id,
            EntitlementFields.permissions,
        ],
        headers: Headers = {},
        token?: string,
    ) {
        return (await this.api<'entitlement'>(
            `query($id: ID!) {
                entitlement(id: $id) {
                    ${fields.join(' ')}
                }
            }`,
            { id },
            headers,
            token,
        )).data.entitlement;
    }

    async createEntitlement(
        input: EntitlementInput,
        fields: Array<keyof EntitlementFields> = [
            EntitlementFields.id,
            EntitlementFields.permissions,
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
        id: Scalars['ID'],
        input: EntitlementUpdateInput,
        fields: Array<keyof EntitlementFields> = [
            EntitlementFields.id,
            EntitlementFields.permissions,
        ],
        headers: Headers = {},
        token?: string,
    ) {
        return (await this.api<'updateEntitlement'>(
            `mutation($id: ID!, $input: EntitlementUpdateInput!) {
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
        id: Scalars['ID'],
        headers: Headers = {},
        token?: string,
    ) {
        return (await this.api<'deleteEntitlement'>(
            `mutation($id: ID!) {
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
