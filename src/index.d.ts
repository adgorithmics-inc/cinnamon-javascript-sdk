import { codes } from '@adgorithmics/graphql-errors';
import { PageInfo, Scalars, Mutation, Query, SortInput, UserLoginInput, UserUpdateInput, RefreshTokenInput, Organization, OrganizationInput, OrganizationUpdateInput, Marketplace, MarketplaceInput, MarketplaceUpdateInput, MediaChannel, MediaChannelCreateInput, MediaChannelUpdateInput, MediaChannelImportInput, CampaignTemplate, Vendor, VendorInput, VendorUpdateInput, VendorToken, VendorTokenInput, Catalog, CatalogCreateInput, CatalogImportInput, CatalogUpdateInput, Product, ProductInput, ProductUpdateInput, MarketingCampaign, MarketingCampaignInput, MarketingCampaignUpdateInput, MarketingAd, Result, Entitlement, EntitlementInput, EntitlementUpdateInput } from './generated/graphql';
import { OrganizationFields, UserFields, MarketplaceFields, MediaChannelFields, CampaignTemplateFields, VendorFields, VendorTokenFields, CatalogFields, ProductFields, MarketingCampaignFields, MarketingAdFields, ResultFields, EntitlementFields } from './inputFields';
export interface Config {
    url: string;
}
export interface Headers {
    [key: string]: string;
}
export interface Error {
    message?: string;
    extentions?: {
        code?: codes;
    };
}
export declare type APIKey = keyof (Query & Mutation);
export declare type APIResult<T extends APIKey, U extends string = T> = {
    data: Record<U, NonNullable<(Query & Mutation)[T]>>;
};
export declare class Cinnamon {
    config: Config;
    refreshToken: string;
    token: string;
    constructor(config: Config);
    private isVendorToken;
    api<T extends APIKey, U extends string = T>({ query, variables, headers, token, }: {
        query: string;
        variables?: object;
        headers?: Headers;
        token?: string;
    }): Promise<APIResult<T, U>>;
    allPages<T>(fetchRelayConnection: (after: PageInfo['endCursor']) => Promise<{
        pageInfo: PageInfo;
        edges?: Array<{
            node?: T;
        }>;
    }>): Promise<T[]>;
    eachNode<T>(fetchRelayConnection: (after: PageInfo['endCursor']) => Promise<{
        pageInfo: PageInfo;
        edges?: Array<{
            node?: T;
        }>;
    }>): AsyncGenerator<T, void, unknown>;
    private defaultUserFields;
    login(input: UserLoginInput): Promise<import("./generated/graphql").Token>;
    refreshLogin(input: RefreshTokenInput): Promise<import("./generated/graphql").Token>;
    setToken(token: string): void;
    me({ fields, headers, token, }?: {
        fields?: Array<keyof UserFields | keyof VendorFields | string>;
        headers?: Headers;
        token?: string;
    }): Promise<import("./generated/graphql").Me>;
    updateUser({ input, fields, headers, token, }: {
        input: UserUpdateInput;
        fields?: Array<keyof UserFields | string>;
        headers?: Headers;
        token?: string;
    }): Promise<import("./generated/graphql").User>;
    private defaultOrganizationFields;
    organization({ id, fields, headers, token, }: {
        id: Scalars['ObjectId'];
        fields?: Array<keyof OrganizationFields | string>;
        headers?: Headers;
        token?: string;
    }): Promise<Organization>;
    organizations({ filter, sort, after, fields, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        after?: PageInfo['endCursor'];
        fields?: Array<keyof OrganizationFields | string>;
        headers?: Headers;
        token?: string;
    }): Promise<import("./generated/graphql").OrganizationConnection>;
    organizationsAll({ filter, sort, fields, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: Array<keyof OrganizationFields | string>;
        headers?: Headers;
        token?: string;
    }): Promise<Organization[]>;
    organizationsEach({ filter, sort, fields, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: Array<keyof OrganizationFields | string>;
        headers?: Headers;
        token?: string;
    }): AsyncGenerator<Organization, void, unknown>;
    createOrganization({ input, fields, headers, token, }: {
        input: OrganizationInput;
        fields?: Array<keyof OrganizationFields | string>;
        headers?: Headers;
        token?: string;
    }): Promise<Organization>;
    updateOrganization({ id, input, fields, headers, token, }: {
        id: Scalars['ObjectId'];
        input: OrganizationUpdateInput;
        fields?: Array<keyof OrganizationFields | string>;
        headers?: Headers;
        token?: string;
    }): Promise<Organization>;
    private defaultMarketplaceFields;
    marketplace({ id, fields, headers, token, }: {
        id: Scalars['ObjectId'];
        fields?: Array<keyof MarketplaceFields | string>;
        headers?: Headers;
        token?: string;
    }): Promise<Marketplace>;
    marketplaces({ filter, sort, after, fields, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        after?: PageInfo['endCursor'];
        fields?: Array<keyof MarketplaceFields | string>;
        headers?: Headers;
        token?: string;
    }): Promise<import("./generated/graphql").MarketplaceConnection>;
    marketplacesAll({ filter, sort, fields, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: Array<keyof MarketplaceFields | string>;
        headers?: Headers;
        token?: string;
    }): Promise<Marketplace[]>;
    marketplacesEach({ filter, sort, fields, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: Array<keyof MarketplaceFields | string>;
        headers?: Headers;
        token?: string;
    }): AsyncGenerator<Marketplace, void, unknown>;
    createMarketplace({ input, fields, headers, token, }: {
        input: MarketplaceInput;
        fields?: Array<keyof MarketplaceFields | string>;
        headers?: Headers;
        token?: string;
    }): Promise<Marketplace>;
    updateMarketplace({ id, input, fields, headers, token, }: {
        id: Scalars['ObjectId'];
        input: MarketplaceUpdateInput;
        fields?: Array<keyof MarketplaceFields | string>;
        headers?: Headers;
        token?: string;
    }): Promise<Marketplace>;
    deleteMarketplace({ id, headers, token, }: {
        id: Scalars['ObjectId'];
        headers?: Headers;
        token?: string;
    }): Promise<import("./generated/graphql").Deletion>;
    private defaultMediaChannelFields;
    mediaChannel({ id, fields, headers, token, }: {
        id: Scalars['ObjectId'];
        fields?: Array<keyof MediaChannelFields | string>;
        headers?: Headers;
        token?: string;
    }): Promise<MediaChannel>;
    mediaChannels({ filter, sort, after, fields, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        after?: PageInfo['endCursor'];
        fields?: Array<keyof MediaChannelFields | string>;
        headers?: Headers;
        token?: string;
    }): Promise<import("./generated/graphql").MediaChannelConnection>;
    mediaChannelsAll({ filter, sort, fields, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: Array<keyof MediaChannelFields | string>;
        headers?: Headers;
        token?: string;
    }): Promise<MediaChannel[]>;
    mediaChannelsEach({ filter, sort, fields, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: Array<keyof MediaChannelFields | string>;
        headers?: Headers;
        token?: string;
    }): AsyncGenerator<MediaChannel, void, unknown>;
    createMediaChannel({ input, fields, headers, token, }: {
        input: MediaChannelCreateInput;
        fields?: Array<keyof MediaChannelFields | string>;
        headers?: Headers;
        token?: string;
    }): Promise<MediaChannel>;
    importMediaChannel({ input, fields, headers, token, }: {
        input: MediaChannelImportInput;
        fields?: Array<keyof MediaChannelFields | string>;
        headers?: Headers;
        token?: string;
    }): Promise<MediaChannel>;
    updateMediaChannel({ id, input, fields, headers, token, }: {
        id: Scalars['ObjectId'];
        input: MediaChannelUpdateInput;
        fields?: Array<keyof MediaChannelFields | string>;
        headers?: Headers;
        token?: string;
    }): Promise<MediaChannel>;
    deleteMediaChannel({ id, headers, token, }: {
        id: Scalars['ObjectId'];
        headers?: Headers;
        token?: string;
    }): Promise<import("./generated/graphql").Deletion>;
    private defaultCampaignTemplateFields;
    campaignTemplate({ id, fields, headers, token, }: {
        id: Scalars['ObjectId'];
        fields?: Array<keyof CampaignTemplateFields | string>;
        headers?: Headers;
        token?: string;
    }): Promise<CampaignTemplate>;
    campaignTemplates({ filter, sort, after, fields, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        after?: PageInfo['endCursor'];
        fields?: Array<keyof CampaignTemplateFields | string>;
        headers?: Headers;
        token?: string;
    }): Promise<import("./generated/graphql").CampaignTemplateConnection>;
    campaignTemplatesAll({ filter, sort, fields, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: Array<keyof CampaignTemplateFields | string>;
        headers?: Headers;
        token?: string;
    }): Promise<CampaignTemplate[]>;
    campaignTemplatesEach({ filter, sort, fields, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: Array<keyof CampaignTemplateFields | string>;
        headers?: Headers;
        token?: string;
    }): AsyncGenerator<CampaignTemplate, void, unknown>;
    private defaultVendorFields;
    vendor({ id, fields, headers, token, }: {
        id: Scalars['ObjectId'];
        fields?: Array<keyof VendorFields | string>;
        headers?: Headers;
        token?: string;
    }): Promise<Vendor>;
    vendors({ filter, sort, after, fields, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        after?: PageInfo['endCursor'];
        fields?: Array<keyof VendorFields | string>;
        headers?: Headers;
        token?: string;
    }): Promise<import("./generated/graphql").VendorConnection>;
    vendorsAll({ filter, sort, fields, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: Array<keyof VendorFields | string>;
        headers?: Headers;
        token?: string;
    }): Promise<Vendor[]>;
    vendorsEach({ filter, sort, fields, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: Array<keyof VendorFields | string>;
        headers?: Headers;
        token?: string;
    }): AsyncGenerator<Vendor, void, unknown>;
    createVendor({ input, fields, headers, token, }: {
        input: VendorInput;
        fields?: Array<keyof VendorFields | string>;
        headers?: Headers;
        token?: string;
    }): Promise<Vendor>;
    updateVendor({ id, input, fields, headers, token, }: {
        id: Scalars['ObjectId'];
        input: VendorUpdateInput;
        fields?: Array<keyof VendorFields | string>;
        headers?: Headers;
        token?: string;
    }): Promise<Vendor>;
    deleteVendor({ id, headers, token, }: {
        id: Scalars['ObjectId'];
        headers?: Headers;
        token?: string;
    }): Promise<import("./generated/graphql").Deletion>;
    private defaultVendorTokenFields;
    vendorToken({ id, fields, headers, token, }: {
        id: Scalars['ObjectId'];
        fields?: Array<keyof VendorTokenFields | string>;
        headers?: Headers;
        token?: string;
    }): Promise<VendorToken>;
    vendorTokens({ filter, sort, after, fields, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        after?: PageInfo['endCursor'];
        fields?: Array<keyof VendorTokenFields | string>;
        headers?: Headers;
        token?: string;
    }): Promise<import("./generated/graphql").VendorTokenConnection>;
    vendorTokensAll({ filter, sort, fields, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: Array<keyof VendorTokenFields | string>;
        headers?: Headers;
        token?: string;
    }): Promise<VendorToken[]>;
    vendorTokensEach({ filter, sort, fields, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: Array<keyof VendorTokenFields | string>;
        headers?: Headers;
        token?: string;
    }): AsyncGenerator<VendorToken, void, unknown>;
    createVendorToken({ input, fields, headers, token, }: {
        input: VendorTokenInput;
        fields?: Array<keyof VendorTokenFields | string>;
        headers?: Headers;
        token?: string;
    }): Promise<VendorToken>;
    deleteVendorToken({ id, headers, token, }: {
        id: Scalars['ObjectId'];
        headers?: Headers;
        token?: string;
    }): Promise<import("./generated/graphql").Deletion>;
    private defaultCatalogFields;
    catalog({ id, fields, headers, token, }: {
        id: Scalars['ObjectId'];
        fields?: Array<keyof CatalogFields | string>;
        headers?: Headers;
        token?: string;
    }): Promise<Catalog>;
    catalogs({ filter, sort, after, fields, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        after?: PageInfo['endCursor'];
        fields?: Array<keyof CatalogFields | string>;
        headers?: Headers;
        token?: string;
    }): Promise<import("./generated/graphql").CatalogConnection>;
    catalogsAll({ filter, sort, fields, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: Array<keyof CatalogFields | string>;
        headers?: Headers;
        token?: string;
    }): Promise<Catalog[]>;
    catalogsEach({ filter, sort, fields, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: Array<keyof CatalogFields | string>;
        headers?: Headers;
        token?: string;
    }): AsyncGenerator<Catalog, void, unknown>;
    createCatalog({ input, fields, headers, token, }: {
        input: CatalogCreateInput;
        fields?: Array<keyof CatalogFields | string>;
        headers?: Headers;
        token?: string;
    }): Promise<Catalog>;
    importCatalog({ input, fields, headers, token, }: {
        input: CatalogImportInput;
        fields?: Array<keyof CatalogFields | string>;
        headers?: Headers;
        token?: string;
    }): Promise<Catalog>;
    updateCatalog({ id, input, fields, headers, token, }: {
        id: Scalars['ObjectId'];
        input: CatalogUpdateInput;
        fields?: Array<keyof CatalogFields | string>;
        headers?: Headers;
        token?: string;
    }): Promise<Catalog>;
    deleteCatalog({ id, headers, token, }: {
        id: Scalars['ObjectId'];
        headers?: Headers;
        token?: string;
    }): Promise<import("./generated/graphql").Deletion>;
    private defaultProductFields;
    product({ id, fields, headers, token, }: {
        id: Scalars['ObjectId'];
        fields?: Array<keyof ProductFields | string>;
        headers?: Headers;
        token?: string;
    }): Promise<Product>;
    products({ filter, sort, after, fields, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        after?: PageInfo['endCursor'];
        fields?: Array<keyof ProductFields | string>;
        headers?: Headers;
        token?: string;
    }): Promise<import("./generated/graphql").ProductConnection>;
    productsAll({ filter, sort, fields, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: Array<keyof ProductFields | string>;
        headers?: Headers;
        token?: string;
    }): Promise<Product[]>;
    productsEach({ filter, sort, fields, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: Array<keyof ProductFields | string>;
        headers?: Headers;
        token?: string;
    }): AsyncGenerator<Product, void, unknown>;
    createProduct({ input, fields, headers, token, }: {
        input: ProductInput;
        fields?: Array<keyof ProductFields | string>;
        headers?: Headers;
        token?: string;
    }): Promise<Product>;
    updateProduct({ id, input, fields, headers, token, }: {
        id: Scalars['ObjectId'];
        input: ProductUpdateInput;
        fields?: Array<keyof ProductFields | string>;
        headers?: Headers;
        token?: string;
    }): Promise<Product>;
    deleteProduct({ id, headers, token, }: {
        id: Scalars['ObjectId'];
        headers?: Headers;
        token?: string;
    }): Promise<import("./generated/graphql").Deletion>;
    private defaultMarketingCampaignFields;
    marketingCampaign({ id, fields, headers, token, }: {
        id: Scalars['ObjectId'];
        fields?: Array<keyof MarketingCampaignFields | string>;
        headers?: Headers;
        token?: string;
    }): Promise<MarketingCampaign>;
    marketingCampaigns({ filter, sort, after, fields, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        after?: PageInfo['endCursor'];
        fields?: Array<keyof MarketingCampaignFields | string>;
        headers?: Headers;
        token?: string;
    }): Promise<import("./generated/graphql").MarketingCampaignConnection>;
    marketingCampaignsAll({ filter, sort, fields, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: Array<keyof MarketingCampaignFields | string>;
        headers?: Headers;
        token?: string;
    }): Promise<MarketingCampaign[]>;
    marketingCampaignsEach({ filter, sort, fields, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: Array<keyof MarketingCampaignFields | string>;
        headers?: Headers;
        token?: string;
    }): AsyncGenerator<MarketingCampaign, void, unknown>;
    createMarketingCampaign({ input, fields, headers, token, }: {
        input: MarketingCampaignInput;
        fields?: Array<keyof MarketingCampaignFields | string>;
        headers?: Headers;
        token?: string;
    }): Promise<MarketingCampaign>;
    updateMarketingCampaign({ id, input, fields, headers, token, }: {
        id: Scalars['ObjectId'];
        input: MarketingCampaignUpdateInput;
        fields?: Array<keyof MarketingCampaignFields | string>;
        headers?: Headers;
        token?: string;
    }): Promise<MarketingCampaign>;
    deleteMarketingCampaign({ id, headers, token, }: {
        id: Scalars['ObjectId'];
        headers?: Headers;
        token?: string;
    }): Promise<import("./generated/graphql").Deletion>;
    private defaultMarketingAdFields;
    marketingAd({ id, fields, headers, token, }: {
        id: Scalars['ObjectId'];
        fields?: Array<keyof MarketingAdFields | string>;
        headers?: Headers;
        token?: string;
    }): Promise<MarketingAd>;
    marketingAds({ filter, sort, after, fields, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        after?: PageInfo['endCursor'];
        fields?: Array<keyof MarketingAdFields | string>;
        headers?: Headers;
        token?: string;
    }): Promise<import("./generated/graphql").MarketingAdConnection>;
    marketingAdsAll({ filter, sort, fields, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: Array<keyof MarketingAdFields | string>;
        headers?: Headers;
        token?: string;
    }): Promise<MarketingAd[]>;
    marketingAdsEach({ filter, sort, fields, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: Array<keyof MarketingAdFields | string>;
        headers?: Headers;
        token?: string;
    }): AsyncGenerator<MarketingAd, void, unknown>;
    private defaultResultFields;
    result({ id, fields, headers, token, }: {
        id: Scalars['ObjectId'];
        fields?: Array<keyof ResultFields | string>;
        headers?: Headers;
        token?: string;
    }): Promise<Result>;
    results({ filter, sort, after, fields, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        after?: PageInfo['endCursor'];
        fields?: Array<keyof ResultFields | string>;
        headers?: Headers;
        token?: string;
    }): Promise<import("./generated/graphql").ResultConnection>;
    resultsAll({ filter, sort, fields, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: Array<keyof ResultFields | string>;
        headers?: Headers;
        token?: string;
    }): Promise<Result[]>;
    resultsEach({ filter, sort, fields, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: Array<keyof ResultFields | string>;
        headers?: Headers;
        token?: string;
    }): AsyncGenerator<Result, void, unknown>;
    private defaultEntitlementFields;
    entitlement({ id, fields, headers, token, }: {
        id: Scalars['ObjectId'];
        fields?: Array<keyof EntitlementFields | string>;
        headers?: Headers;
        token?: string;
    }): Promise<Entitlement>;
    entitlements({ filter, sort, after, fields, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        after?: PageInfo['endCursor'];
        fields?: Array<keyof EntitlementFields | string>;
        headers?: Headers;
        token?: string;
    }): Promise<import("./generated/graphql").EntitlementConnection>;
    entitlementsAll({ filter, sort, fields, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: Array<keyof EntitlementFields | string>;
        headers?: Headers;
        token?: string;
    }): Promise<Entitlement[]>;
    entitlementsEach({ filter, sort, fields, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: Array<keyof EntitlementFields | string>;
        headers?: Headers;
        token?: string;
    }): AsyncGenerator<Entitlement, void, unknown>;
    createEntitlement({ input, fields, headers, token, }: {
        input: EntitlementInput;
        fields?: Array<keyof EntitlementFields | string>;
        headers?: Headers;
        token?: string;
    }): Promise<Entitlement>;
    updateEntitlement({ id, input, fields, headers, token, }: {
        id: Scalars['ObjectId'];
        input: EntitlementUpdateInput;
        fields?: Array<keyof EntitlementFields | string>;
        headers?: Headers;
        token?: string;
    }): Promise<Entitlement>;
    deleteEntitlement({ id, headers, token, }: {
        id: Scalars['ObjectId'];
        headers?: Headers;
        token?: string;
    }): Promise<import("./generated/graphql").Deletion>;
}
export * from './generated/graphql';
export * from './inputFields';
export * from './helpers';
