import { codes } from '@adgorithmics/graphql-errors';
import { PageInfo, Scalars, Mutation, Query, UserLoginInput, UserUpdateInput, RefreshTokenInput, Organization, OrganizationInput, OrganizationUpdateInput, Marketplace, MarketplaceInput, MarketplaceUpdateInput, MediaChannel, MediaChannelCreateInput, MediaChannelUpdateInput, MediaChannelImportInput, CampaignTemplate, Vendor, VendorInput, VendorUpdateInput, Catalog, CatalogCreateInput, CatalogImportInput, CatalogUpdateInput, Product, ProductInput, ProductUpdateInput, MarketingCampaign, MarketingCampaignInput, MarketingCampaignUpdateInput, MarketingAd, Result, Entitlement, EntitlementInput, EntitlementUpdateInput } from './generated/graphql';
import { OrganizationFields, UserFields, MarketplaceFields, MediaChannelFields, CampaignTemplateFields, VendorFields, CatalogFields, ProductFields, MarketingCampaignFields, MarketingAdFields, ResultFields, EntitlementFields } from './inputFields';
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
    api<T extends APIKey, U extends string = T>(query: string, variables?: object, headers?: Headers, token?: string): Promise<APIResult<T, U>>;
    allPages<T>(fetchRelayConnection: (after: PageInfo['endCursor']) => Promise<{
        pageInfo?: PageInfo;
        edges?: any;
    }>): Promise<T[]>;
    login(input: UserLoginInput): Promise<import("./generated/graphql").Token>;
    refreshLogin(input: RefreshTokenInput): Promise<import("./generated/graphql").Token>;
    me(fields?: Array<keyof UserFields | string>, headers?: Headers, token?: string): Promise<import("./generated/graphql").User>;
    updateUser(input: UserUpdateInput, fields?: Array<keyof UserFields | string>, headers?: Headers, token?: string): Promise<import("./generated/graphql").User>;
    organization(id: Scalars['ObjectId'], fields?: Array<keyof OrganizationFields | string>, headers?: Headers, token?: string): Promise<Organization>;
    organizations(filter?: Scalars['FilterInput'], after?: PageInfo['endCursor'], fields?: Array<keyof OrganizationFields | string>, headers?: Headers, token?: string): Promise<import("./generated/graphql").OrganizationConnection>;
    organizationsAll(filter?: Scalars['FilterInput'], fields?: Array<keyof OrganizationFields | string>, headers?: Headers, token?: string): Promise<Organization[]>;
    createOrganization(input: OrganizationInput, fields?: Array<keyof OrganizationFields | string>, headers?: Headers, token?: string): Promise<Organization>;
    updateOrganization(id: Scalars['ObjectId'], input: OrganizationUpdateInput, fields?: Array<keyof OrganizationFields | string>, headers?: Headers, token?: string): Promise<Organization>;
    marketplace(id: Scalars['ObjectId'], fields?: Array<keyof MarketplaceFields | string>, headers?: Headers, token?: string): Promise<Marketplace>;
    marketplaces(filter?: Scalars['FilterInput'], after?: PageInfo['endCursor'], fields?: Array<keyof MarketplaceFields | string>, headers?: Headers, token?: string): Promise<import("./generated/graphql").MarketplaceConnection>;
    marketplacesAll(filter?: Scalars['FilterInput'], fields?: Array<keyof MarketplaceFields | string>, headers?: Headers, token?: string): Promise<Marketplace[]>;
    createMarketplace(input: MarketplaceInput, fields?: Array<keyof MarketplaceFields | string>, headers?: Headers, token?: string): Promise<Marketplace>;
    updateMarketplace(id: Scalars['ObjectId'], input: MarketplaceUpdateInput, fields?: Array<keyof MarketplaceFields | string>, headers?: Headers, token?: string): Promise<Marketplace>;
    deleteMarketplace(id: Scalars['ObjectId'], headers?: Headers, token?: string): Promise<import("./generated/graphql").Deletion>;
    mediaChannel(id: Scalars['ObjectId'], fields?: Array<keyof MediaChannelFields | string>, headers?: Headers, token?: string): Promise<MediaChannel>;
    mediaChannels(filter?: Scalars['FilterInput'], after?: PageInfo['endCursor'], fields?: Array<keyof MediaChannelFields | string>, headers?: Headers, token?: string): Promise<import("./generated/graphql").MediaChannelConnection>;
    mediaChannelsAll(filter?: Scalars['FilterInput'], fields?: Array<keyof MediaChannelFields | string>, headers?: Headers, token?: string): Promise<MediaChannel[]>;
    createMediaChannel(input: MediaChannelCreateInput, fields?: Array<keyof MediaChannelFields | string>, headers?: Headers, token?: string): Promise<MediaChannel>;
    importMediaChannel(input: MediaChannelImportInput, fields?: Array<keyof MediaChannelFields | string>, headers?: Headers, token?: string): Promise<MediaChannel>;
    updateMediaChannel(id: Scalars['ObjectId'], input: MediaChannelUpdateInput, fields?: Array<keyof MediaChannelFields | string>, headers?: Headers, token?: string): Promise<MediaChannel>;
    deleteMediaChannel(id: Scalars['ObjectId'], headers?: Headers, token?: string): Promise<import("./generated/graphql").Deletion>;
    campaignTemplate(id: Scalars['ObjectId'], fields?: Array<keyof CampaignTemplateFields | string>, headers?: Headers, token?: string): Promise<CampaignTemplate>;
    campaignTemplates(filter?: Scalars['FilterInput'], after?: PageInfo['endCursor'], fields?: Array<keyof CampaignTemplateFields | string>, headers?: Headers, token?: string): Promise<import("./generated/graphql").CampaignTemplateConnection>;
    campaignTemplatesAll(filter?: Scalars['FilterInput'], fields?: Array<keyof CampaignTemplateFields | string>, headers?: Headers, token?: string): Promise<CampaignTemplate[]>;
    vendor(id: Scalars['ObjectId'], fields?: Array<keyof VendorFields | string>, headers?: Headers, token?: string): Promise<Vendor>;
    vendors(filter?: Scalars['FilterInput'], after?: PageInfo['endCursor'], fields?: Array<keyof VendorFields | string>, headers?: Headers, token?: string): Promise<import("./generated/graphql").VendorConnection>;
    vendorsAll(filter?: Scalars['FilterInput'], fields?: Array<keyof VendorFields | string>, headers?: Headers, token?: string): Promise<Vendor[]>;
    createVendor(input: VendorInput, fields?: Array<keyof VendorFields | string>, headers?: Headers, token?: string): Promise<Vendor>;
    updateVendor(id: Scalars['ObjectId'], input: VendorUpdateInput, fields?: Array<keyof VendorFields | string>, headers?: Headers, token?: string): Promise<Vendor>;
    deleteVendor(id: Scalars['ObjectId'], headers?: Headers, token?: string): Promise<import("./generated/graphql").Deletion>;
    catalog(id: Scalars['ObjectId'], fields?: Array<keyof CatalogFields | string>, headers?: Headers, token?: string): Promise<Catalog>;
    catalogs(filter?: Scalars['FilterInput'], after?: PageInfo['endCursor'], fields?: Array<keyof CatalogFields | string>, headers?: Headers, token?: string): Promise<import("./generated/graphql").CatalogConnection>;
    catalogsAll(filter?: Scalars['FilterInput'], fields?: Array<keyof CatalogFields | string>, headers?: Headers, token?: string): Promise<Catalog[]>;
    createCatalog(input: CatalogCreateInput, fields?: Array<keyof CatalogFields | string>, headers?: Headers, token?: string): Promise<Catalog>;
    importCatalog(input: CatalogImportInput, fields?: Array<keyof CatalogFields | string>, headers?: Headers, token?: string): Promise<Catalog>;
    updateCatalog(id: Scalars['ObjectId'], input: CatalogUpdateInput, fields?: Array<keyof CatalogFields | string>, headers?: Headers, token?: string): Promise<Catalog>;
    deleteCatalog(id: Scalars['ObjectId'], headers?: Headers, token?: string): Promise<import("./generated/graphql").Deletion>;
    product(id: Scalars['ObjectId'], fields?: Array<keyof ProductFields | string>, headers?: Headers, token?: string): Promise<Product>;
    products(filter?: Scalars['FilterInput'], after?: PageInfo['endCursor'], fields?: Array<keyof ProductFields | string>, headers?: Headers, token?: string): Promise<import("./generated/graphql").ProductConnection>;
    productsAll(filter?: Scalars['FilterInput'], fields?: Array<keyof ProductFields | string>, headers?: Headers, token?: string): Promise<Product[]>;
    createProduct(input: ProductInput, fields?: Array<keyof ProductFields | string>, headers?: Headers, token?: string): Promise<Product>;
    updateProduct(id: Scalars['ObjectId'], input: ProductUpdateInput, fields?: Array<keyof ProductFields | string>, headers?: Headers, token?: string): Promise<Product>;
    deleteProduct(id: Scalars['ObjectId'], headers?: Headers, token?: string): Promise<import("./generated/graphql").Deletion>;
    marketingCampaign(id: Scalars['ObjectId'], fields?: Array<keyof MarketingCampaignFields | string>, headers?: Headers, token?: string): Promise<MarketingCampaign>;
    marketingCampaigns(filter?: Scalars['FilterInput'], after?: PageInfo['endCursor'], fields?: Array<keyof MarketingCampaignFields | string>, headers?: Headers, token?: string): Promise<import("./generated/graphql").MarketingCampaignConnection>;
    marketingCampaignsAll(filter?: Scalars['FilterInput'], fields?: Array<keyof MarketingCampaignFields | string>, headers?: Headers, token?: string): Promise<MarketingCampaign[]>;
    createMarketingCampaign(input: MarketingCampaignInput, fields?: Array<keyof MarketingCampaignFields | string>, headers?: Headers, token?: string): Promise<MarketingCampaign>;
    updateMarketingCampaign(id: Scalars['ObjectId'], input: MarketingCampaignUpdateInput, fields?: Array<keyof MarketingCampaignFields | string>, headers?: Headers, token?: string): Promise<MarketingCampaign>;
    deleteMarketingCampaign(id: Scalars['ObjectId'], headers?: Headers, token?: string): Promise<import("./generated/graphql").Deletion>;
    marketingAd(id: Scalars['ObjectId'], fields?: Array<keyof MarketingAdFields | string>, headers?: Headers, token?: string): Promise<MarketingAd>;
    marketingAds(filter?: Scalars['FilterInput'], after?: PageInfo['endCursor'], fields?: Array<keyof MarketingAdFields | string>, headers?: Headers, token?: string): Promise<import("./generated/graphql").MarketingAdConnection>;
    marketingAdsAll(filter?: Scalars['FilterInput'], fields?: Array<keyof MarketingAdFields | string>, headers?: Headers, token?: string): Promise<MarketingAd[]>;
    result(id: Scalars['ObjectId'], fields?: Array<keyof ResultFields | string>, headers?: Headers, token?: string): Promise<Result>;
    results(filter?: Scalars['FilterInput'], after?: PageInfo['endCursor'], fields?: Array<keyof ResultFields | string>, headers?: Headers, token?: string): Promise<import("./generated/graphql").ResultConnection>;
    resultsAll(filter?: Scalars['FilterInput'], fields?: Array<keyof ResultFields | string>, headers?: Headers, token?: string): Promise<Result[]>;
    entitlement(id: Scalars['ObjectId'], fields?: Array<keyof EntitlementFields | string>, headers?: Headers, token?: string): Promise<Entitlement>;
    entitlements(filter?: Scalars['FilterInput'], after?: PageInfo['endCursor'], fields?: Array<keyof EntitlementFields | string>, headers?: Headers, token?: string): Promise<import("./generated/graphql").EntitlementConnection>;
    entitlementsAll(filter?: Scalars['FilterInput'], fields?: Array<keyof EntitlementFields | string>, headers?: Headers, token?: string): Promise<Entitlement[]>;
    createEntitlement(input: EntitlementInput, fields?: Array<keyof EntitlementFields | string>, headers?: Headers, token?: string): Promise<Entitlement>;
    updateEntitlement(id: Scalars['ObjectId'], input: EntitlementUpdateInput, fields?: Array<keyof EntitlementFields | string>, headers?: Headers, token?: string): Promise<Entitlement>;
    deleteEntitlement(id: Scalars['ObjectId'], headers?: Headers, token?: string): Promise<import("./generated/graphql").Deletion>;
}
export * from './generated/graphql';
export * from './inputFields';
