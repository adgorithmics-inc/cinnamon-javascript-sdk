import { codes } from '@adgorithmics/graphql-errors';
import { Scalars, Mutation, Query, UserLoginInput, UserUpdateInput, RefreshTokenInput, Organization, OrganizationInput, OrganizationsFilterInput, OrganizationUpdateInput, Marketplace, MarketplaceInput, MarketplacesFilterInput, MarketplaceUpdateInput, MediaChannel, MediaChannelInput, MediaChannelsFilterInput, MediaChannelUpdateInput, CampaignTemplate, Vendor, VendorInput, VendorsFilterInput, VendorUpdateInput, Catalog, CatalogInput, CatalogsFilterInput, CatalogUpdateInput, Product, ProductInput, ProductsFilterInput, ProductUpdateInput, MarketingCampaign, MarketingCampaignInput, MarketingCampaignsFilterInput, MarketingCampaignUpdateInput, MarketingAd, MarketingAdsFilterInput, Result, ResultsFilterInput, Entitlement, EntitlementInput, EntitlementsFilterInput, EntitlementUpdateInput } from './generated/graphql';
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
    data: Record<U, NonNullable<Partial<(Query & Mutation)[T]>>>;
};
export declare class Cinnamon {
    config: Config;
    refreshToken: string;
    token: string;
    constructor(config: Config);
    api<T extends APIKey, U extends string = T>(query: string, variables?: object, headers?: Headers, token?: string): Promise<APIResult<T, U>>;
    apiPaging<T>(query: string, variables: object | undefined, headers: Headers, token?: string): Promise<Partial<T>[]>;
    login(input: UserLoginInput): Promise<Partial<import("./generated/graphql").Token>>;
    refreshLogin(input: RefreshTokenInput): Promise<Partial<import("./generated/graphql").Token>>;
    me(fields?: Array<keyof UserFields>, headers?: Headers, token?: string): Promise<Partial<import("./generated/graphql").User>>;
    updateUser(input: UserUpdateInput, fields?: Array<keyof UserFields>, headers?: Headers, token?: string): Promise<Partial<import("./generated/graphql").User>>;
    organization(id: Scalars['ID'], fields?: Array<keyof OrganizationFields>, headers?: Headers, token?: string): Promise<Partial<Organization>>;
    organizations(filter: OrganizationsFilterInput, fields?: Array<keyof OrganizationFields>, headers?: Headers, token?: string): Promise<Partial<Organization>[]>;
    createOrganization(input: OrganizationInput, fields?: Array<keyof OrganizationFields>, headers?: Headers, token?: string): Promise<Partial<Organization>>;
    updateOrganization(id: Scalars['ID'], input: OrganizationUpdateInput, fields?: Array<keyof OrganizationFields>, headers?: Headers, token?: string): Promise<Partial<Organization>>;
    marketplace(id: Scalars['ID'], fields?: Array<keyof MarketplaceFields>, headers?: Headers, token?: string): Promise<Partial<Marketplace>>;
    marketplaces(filter: MarketplacesFilterInput, fields?: Array<keyof MarketplaceFields>, headers?: Headers, token?: string): Promise<Partial<Marketplace>[]>;
    createMarketplace(input: MarketplaceInput, fields?: Array<keyof MarketplaceFields>, headers?: Headers, token?: string): Promise<Partial<Marketplace>>;
    updateMarketplace(id: Scalars['ID'], input: MarketplaceUpdateInput, fields?: Array<keyof MarketplaceFields>, headers?: Headers, token?: string): Promise<Partial<Marketplace>>;
    deleteMarketplace(id: Scalars['ID'], headers?: Headers, token?: string): Promise<Partial<import("./generated/graphql").Deletion>>;
    mediaChannel(id: Scalars['ID'], fields?: Array<keyof MediaChannelFields>, headers?: Headers, token?: string): Promise<Partial<MediaChannel>>;
    mediaChannels(filter?: MediaChannelsFilterInput, fields?: Array<keyof MediaChannelFields>, headers?: Headers, token?: string): Promise<Partial<MediaChannel>[]>;
    createMediaChannel(input: MediaChannelInput, fields?: Array<keyof MediaChannelFields>, headers?: Headers, token?: string): Promise<Partial<MediaChannel>>;
    updateMediaChannel(id: Scalars['ID'], input: MediaChannelUpdateInput, fields?: Array<keyof MediaChannelFields>, headers?: Headers, token?: string): Promise<Partial<MediaChannel>>;
    deleteMediaChannel(id: Scalars['ID'], headers?: Headers, token?: string): Promise<Partial<import("./generated/graphql").Deletion>>;
    campaignTemplate(id: Scalars['ID'], fields?: Array<keyof CampaignTemplateFields>, headers?: Headers, token?: string): Promise<Partial<CampaignTemplate>>;
    campaignTemplates(fields?: Array<keyof CampaignTemplateFields>, headers?: Headers, token?: string): Promise<Partial<CampaignTemplate>[]>;
    vendor(id: Scalars['ID'], fields?: Array<keyof VendorFields>, headers?: Headers, token?: string): Promise<Partial<Vendor>>;
    vendors(filter: VendorsFilterInput, fields?: Array<keyof VendorFields>, headers?: Headers, token?: string): Promise<Partial<Vendor>[]>;
    createVendor(input: VendorInput, fields?: Array<keyof VendorFields>, headers?: Headers, token?: string): Promise<Partial<Vendor>>;
    updateVendor(id: Scalars['ID'], input: VendorUpdateInput, fields?: Array<keyof VendorFields>, headers?: Headers, token?: string): Promise<Partial<Vendor>>;
    deleteVendor(id: Scalars['ID'], headers?: Headers, token?: string): Promise<Partial<import("./generated/graphql").Deletion>>;
    catalog(id: Scalars['ID'], fields?: Array<keyof CatalogFields>, headers?: Headers, token?: string): Promise<Partial<Catalog>>;
    catalogs(filter: CatalogsFilterInput, fields?: Array<keyof CatalogFields>, headers?: Headers, token?: string): Promise<Partial<Catalog>[]>;
    createCatalog(input: CatalogInput, fields?: Array<keyof CatalogFields>, headers?: Headers, token?: string): Promise<Partial<Catalog>>;
    updateCatalog(id: Scalars['ID'], input: CatalogUpdateInput, fields?: Array<keyof CatalogFields>, headers?: Headers, token?: string): Promise<Partial<Catalog>>;
    deleteCatalog(id: Scalars['ID'], headers?: Headers, token?: string): Promise<Partial<import("./generated/graphql").Deletion>>;
    product(id: Scalars['ID'], fields?: Array<keyof ProductFields>, headers?: Headers, token?: string): Promise<Partial<Product>>;
    products(filter: ProductsFilterInput, fields?: Array<keyof ProductFields>, headers?: Headers, token?: string): Promise<Partial<Product>[]>;
    createProduct(input: ProductInput, fields?: Array<keyof ProductFields>, headers?: Headers, token?: string): Promise<Partial<Product>>;
    updateProduct(id: Scalars['ID'], input: ProductUpdateInput, fields?: Array<keyof ProductFields>, headers?: Headers, token?: string): Promise<Partial<Product>>;
    deleteProduct(id: Scalars['ID'], headers?: Headers, token?: string): Promise<Partial<import("./generated/graphql").Deletion>>;
    marketingCampaign(id: Scalars['ID'], fields?: Array<keyof MarketingCampaignFields>, headers?: Headers, token?: string): Promise<Partial<MarketingCampaign>>;
    marketingCampaigns(filter: MarketingCampaignsFilterInput, fields?: Array<keyof MarketingCampaignFields>, headers?: Headers, token?: string): Promise<Partial<MarketingCampaign>[]>;
    createMarketingCampaign(input: MarketingCampaignInput, fields?: Array<keyof MarketingCampaignFields>, headers?: Headers, token?: string): Promise<Partial<MarketingCampaign>>;
    updateMarketingCampaign(id: Scalars['ID'], input: MarketingCampaignUpdateInput, fields?: Array<keyof MarketingCampaignFields>, headers?: Headers, token?: string): Promise<Partial<MarketingCampaign>>;
    deleteMarketingCampaign(id: Scalars['ID'], headers?: Headers, token?: string): Promise<Partial<import("./generated/graphql").Deletion>>;
    marketingAd(id: Scalars['ID'], fields?: Array<keyof MarketingAdFields>, headers?: Headers, token?: string): Promise<Partial<MarketingAd>>;
    marketingAds(filter: MarketingAdsFilterInput, fields?: Array<keyof MarketingAdFields>, headers?: Headers, token?: string): Promise<Partial<MarketingAd>[]>;
    result(id: Scalars['ID'], fields?: Array<keyof ResultFields>, headers?: Headers, token?: string): Promise<Partial<Result>>;
    results(filter: ResultsFilterInput, fields?: Array<keyof ResultFields>, headers?: Headers, token?: string): Promise<Partial<Result>[]>;
    entitlement(id: Scalars['ID'], fields?: Array<keyof EntitlementFields>, headers?: Headers, token?: string): Promise<Partial<Entitlement>>;
    entitlements(filter: EntitlementsFilterInput, fields?: Array<keyof EntitlementFields>, headers?: Headers, token?: string): Promise<Partial<Entitlement>[]>;
    createEntitlement(input: EntitlementInput, fields?: Array<keyof EntitlementFields>, headers?: Headers, token?: string): Promise<Partial<Entitlement>>;
    updateEntitlement(id: Scalars['ID'], input: EntitlementUpdateInput, fields?: Array<keyof EntitlementFields>, headers?: Headers, token?: string): Promise<Partial<Entitlement>>;
    deleteEntitlement(id: Scalars['ID'], headers?: Headers, token?: string): Promise<Partial<import("./generated/graphql").Deletion>>;
}
export * from './generated/graphql';
export * from './inputFields';
