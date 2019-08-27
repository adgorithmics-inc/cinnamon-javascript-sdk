import { codes } from '@adgorithmics/graphql-errors';
import { PageInfo, Scalars, Mutation, Query, UserLoginInput, UserUpdateInput, RefreshTokenInput, Organization, OrganizationInput, OrganizationsFilterInput, OrganizationUpdateInput, Marketplace, MarketplaceInput, MarketplacesFilterInput, MarketplaceUpdateInput, MediaChannel, MediaChannelInput, MediaChannelsFilterInput, MediaChannelUpdateInput, CampaignTemplate, CampaignTemplatesFilterInput, Vendor, VendorInput, VendorsFilterInput, VendorUpdateInput, Catalog, CatalogInput, CatalogsFilterInput, CatalogUpdateInput, Product, ProductInput, ProductsFilterInput, ProductUpdateInput, MarketingCampaign, MarketingCampaignInput, MarketingCampaignsFilterInput, MarketingCampaignUpdateInput, MarketingAd, MarketingAdsFilterInput, Result, ResultsFilterInput, Entitlement, EntitlementInput, EntitlementsFilterInput, EntitlementUpdateInput } from './generated/graphql';
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
    me(fields?: Array<keyof UserFields>, headers?: Headers, token?: string): Promise<import("./generated/graphql").User>;
    updateUser(input: UserUpdateInput, fields?: Array<keyof UserFields>, headers?: Headers, token?: string): Promise<import("./generated/graphql").User>;
    organization(id: Scalars['ID'], fields?: Array<keyof OrganizationFields>, headers?: Headers, token?: string): Promise<Organization>;
    organizations(filter?: OrganizationsFilterInput, after?: PageInfo['endCursor'], fields?: Array<keyof OrganizationFields>, headers?: Headers, token?: string): Promise<import("./generated/graphql").OrganizationConnection>;
    organizationsAll(filter?: OrganizationsFilterInput, fields?: Array<keyof OrganizationFields>, headers?: Headers, token?: string): Promise<Organization[]>;
    createOrganization(input: OrganizationInput, fields?: Array<keyof OrganizationFields>, headers?: Headers, token?: string): Promise<Organization>;
    updateOrganization(id: Scalars['ID'], input: OrganizationUpdateInput, fields?: Array<keyof OrganizationFields>, headers?: Headers, token?: string): Promise<Organization>;
    marketplace(id: Scalars['ID'], fields?: Array<keyof MarketplaceFields>, headers?: Headers, token?: string): Promise<Marketplace>;
    marketplaces(filter?: MarketplacesFilterInput, after?: PageInfo['endCursor'], fields?: Array<keyof MarketplaceFields>, headers?: Headers, token?: string): Promise<import("./generated/graphql").MarketplaceConnection>;
    marketplacesAll(filter?: MarketplacesFilterInput, fields?: Array<keyof MarketplaceFields>, headers?: Headers, token?: string): Promise<Marketplace[]>;
    createMarketplace(input: MarketplaceInput, fields?: Array<keyof MarketplaceFields>, headers?: Headers, token?: string): Promise<Marketplace>;
    updateMarketplace(id: Scalars['ID'], input: MarketplaceUpdateInput, fields?: Array<keyof MarketplaceFields>, headers?: Headers, token?: string): Promise<Marketplace>;
    deleteMarketplace(id: Scalars['ID'], headers?: Headers, token?: string): Promise<import("./generated/graphql").Deletion>;
    mediaChannel(id: Scalars['ID'], fields?: Array<keyof MediaChannelFields>, headers?: Headers, token?: string): Promise<MediaChannel>;
    mediaChannels(filter?: MediaChannelsFilterInput, after?: PageInfo['endCursor'], fields?: Array<keyof MediaChannelFields>, headers?: Headers, token?: string): Promise<import("./generated/graphql").MediaChannelConnection>;
    mediaChannelsAll(filter?: MediaChannelsFilterInput, fields?: Array<keyof MediaChannelFields>, headers?: Headers, token?: string): Promise<MediaChannel[]>;
    createMediaChannel(input: MediaChannelInput, fields?: Array<keyof MediaChannelFields>, headers?: Headers, token?: string): Promise<MediaChannel>;
    updateMediaChannel(id: Scalars['ID'], input: MediaChannelUpdateInput, fields?: Array<keyof MediaChannelFields>, headers?: Headers, token?: string): Promise<MediaChannel>;
    deleteMediaChannel(id: Scalars['ID'], headers?: Headers, token?: string): Promise<import("./generated/graphql").Deletion>;
    campaignTemplate(id: Scalars['ID'], fields?: Array<keyof CampaignTemplateFields>, headers?: Headers, token?: string): Promise<CampaignTemplate>;
    campaignTemplates(filter?: CampaignTemplatesFilterInput, after?: PageInfo['endCursor'], fields?: Array<keyof CampaignTemplateFields>, headers?: Headers, token?: string): Promise<import("./generated/graphql").CampaignTemplateConnection>;
    campaignTemplatesAll(filter?: CampaignTemplatesFilterInput, fields?: Array<keyof CampaignTemplateFields>, headers?: Headers, token?: string): Promise<CampaignTemplate[]>;
    vendor(id: Scalars['ID'], fields?: Array<keyof VendorFields>, headers?: Headers, token?: string): Promise<Vendor>;
    vendors(filter?: VendorsFilterInput, after?: PageInfo['endCursor'], fields?: Array<keyof VendorFields>, headers?: Headers, token?: string): Promise<import("./generated/graphql").VendorConnection>;
    vendorsAll(filter?: VendorsFilterInput, fields?: Array<keyof VendorFields>, headers?: Headers, token?: string): Promise<Vendor[]>;
    createVendor(input: VendorInput, fields?: Array<keyof VendorFields>, headers?: Headers, token?: string): Promise<Vendor>;
    updateVendor(id: Scalars['ID'], input: VendorUpdateInput, fields?: Array<keyof VendorFields>, headers?: Headers, token?: string): Promise<Vendor>;
    deleteVendor(id: Scalars['ID'], headers?: Headers, token?: string): Promise<import("./generated/graphql").Deletion>;
    catalog(id: Scalars['ID'], fields?: Array<keyof CatalogFields>, headers?: Headers, token?: string): Promise<Catalog>;
    catalogs(filter?: CatalogsFilterInput, after?: PageInfo['endCursor'], fields?: Array<keyof CatalogFields>, headers?: Headers, token?: string): Promise<import("./generated/graphql").CatalogConnection>;
    catalogsAll(filter?: CatalogsFilterInput, fields?: Array<keyof CatalogFields>, headers?: Headers, token?: string): Promise<Catalog[]>;
    createCatalog(input: CatalogInput, fields?: Array<keyof CatalogFields>, headers?: Headers, token?: string): Promise<Catalog>;
    updateCatalog(id: Scalars['ID'], input: CatalogUpdateInput, fields?: Array<keyof CatalogFields>, headers?: Headers, token?: string): Promise<Catalog>;
    deleteCatalog(id: Scalars['ID'], headers?: Headers, token?: string): Promise<import("./generated/graphql").Deletion>;
    product(id: Scalars['ID'], fields?: Array<keyof ProductFields>, headers?: Headers, token?: string): Promise<Product>;
    products(filter?: ProductsFilterInput, after?: PageInfo['endCursor'], fields?: Array<keyof ProductFields>, headers?: Headers, token?: string): Promise<import("./generated/graphql").ProductConnection>;
    productsAll(filter?: ProductsFilterInput, fields?: Array<keyof ProductFields>, headers?: Headers, token?: string): Promise<Product[]>;
    createProduct(input: ProductInput, fields?: Array<keyof ProductFields>, headers?: Headers, token?: string): Promise<Product>;
    updateProduct(id: Scalars['ID'], input: ProductUpdateInput, fields?: Array<keyof ProductFields>, headers?: Headers, token?: string): Promise<Product>;
    deleteProduct(id: Scalars['ID'], headers?: Headers, token?: string): Promise<import("./generated/graphql").Deletion>;
    marketingCampaign(id: Scalars['ID'], fields?: Array<keyof MarketingCampaignFields>, headers?: Headers, token?: string): Promise<MarketingCampaign>;
    marketingCampaigns(filter?: MarketingCampaignsFilterInput, after?: PageInfo['endCursor'], fields?: Array<keyof MarketingCampaignFields>, headers?: Headers, token?: string): Promise<import("./generated/graphql").MarketingCampaignConnection>;
    marketingCampaignsAll(filter?: MarketingCampaignsFilterInput, fields?: Array<keyof MarketingCampaignFields>, headers?: Headers, token?: string): Promise<MarketingCampaign[]>;
    createMarketingCampaign(input: MarketingCampaignInput, fields?: Array<keyof MarketingCampaignFields>, headers?: Headers, token?: string): Promise<MarketingCampaign>;
    updateMarketingCampaign(id: Scalars['ID'], input: MarketingCampaignUpdateInput, fields?: Array<keyof MarketingCampaignFields>, headers?: Headers, token?: string): Promise<MarketingCampaign>;
    deleteMarketingCampaign(id: Scalars['ID'], headers?: Headers, token?: string): Promise<import("./generated/graphql").Deletion>;
    marketingAd(id: Scalars['ID'], fields?: Array<keyof MarketingAdFields>, headers?: Headers, token?: string): Promise<MarketingAd>;
    marketingAds(filter?: MarketingAdsFilterInput, after?: PageInfo['endCursor'], fields?: Array<keyof MarketingAdFields>, headers?: Headers, token?: string): Promise<import("./generated/graphql").MarketingAdConnection>;
    marketingAdsAll(filter?: MarketingAdsFilterInput, fields?: Array<keyof MarketingAdFields>, headers?: Headers, token?: string): Promise<MarketingAd[]>;
    result(id: Scalars['ID'], fields?: Array<keyof ResultFields>, headers?: Headers, token?: string): Promise<Result>;
    results(filter?: ResultsFilterInput, after?: PageInfo['endCursor'], fields?: Array<keyof ResultFields>, headers?: Headers, token?: string): Promise<import("./generated/graphql").ResultConnection>;
    resultsAll(filter?: ResultsFilterInput, fields?: Array<keyof ResultFields>, headers?: Headers, token?: string): Promise<Result[]>;
    entitlement(id: Scalars['ID'], fields?: Array<keyof EntitlementFields>, headers?: Headers, token?: string): Promise<Entitlement>;
    entitlements(filter?: EntitlementsFilterInput, after?: PageInfo['endCursor'], fields?: Array<keyof EntitlementFields>, headers?: Headers, token?: string): Promise<import("./generated/graphql").EntitlementConnection>;
    entitlementsAll(filter?: EntitlementsFilterInput, fields?: Array<keyof EntitlementFields>, headers?: Headers, token?: string): Promise<Entitlement[]>;
    createEntitlement(input: EntitlementInput, fields?: Array<keyof EntitlementFields>, headers?: Headers, token?: string): Promise<Entitlement>;
    updateEntitlement(id: Scalars['ID'], input: EntitlementUpdateInput, fields?: Array<keyof EntitlementFields>, headers?: Headers, token?: string): Promise<Entitlement>;
    deleteEntitlement(id: Scalars['ID'], headers?: Headers, token?: string): Promise<import("./generated/graphql").Deletion>;
}
export * from './generated/graphql';
export * from './inputFields';
