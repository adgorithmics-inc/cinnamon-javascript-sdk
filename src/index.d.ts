import { codes } from '@adgorithmics/graphql-errors';
import { Scalars, Mutation, Query, UserLoginInput, UserUpdateInput, RefreshTokenInput, OrganizationInput, OrganizationUpdateInput, MarketplaceInput, MarketplaceUpdateInput, MediaChannelInput, MediaChannelUpdateInput, CampaignTemplate, VendorInput, VendorUpdateInput, CatalogInput, CatalogUpdateInput, ProductInput, ProductUpdateInput, MarketingCampaignInput, MarketingCampaignUpdateInput, EntitlementInput, EntitlementUpdateInput } from './generated/graphql';
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
export declare class Cinnamon {
    config: Config;
    refreshToken: string;
    token: string;
    constructor(config: Config);
    api<T extends keyof (Query & Mutation), U extends string = T>(query: string, variables?: object, headers?: Headers, token?: string): Promise<{
        data: Record<U, NonNullable<Partial<(Query & Mutation)[T]>>>;
    }>;
    apiPaging<T>(query: string, variables: object | undefined, headers: Headers, token?: string): Promise<Partial<T>[]>;
    login(input: UserLoginInput): Promise<Partial<import("./generated/graphql").Token>>;
    refreshLogin(input: RefreshTokenInput): Promise<Partial<import("./generated/graphql").Token>>;
    me(fields?: Array<keyof UserFields>, headers?: Headers, token?: string): Promise<Partial<import("./generated/graphql").User>>;
    updateUser(input: UserUpdateInput, fields?: Array<keyof UserFields>, headers?: Headers, token?: string): Promise<Partial<import("./generated/graphql").User>>;
    organization(id: Scalars['ID'], fields?: Array<keyof OrganizationFields>, headers?: Headers, token?: string): Promise<Partial<import("./generated/graphql").Organization>>;
    createOrganization(input: OrganizationInput, fields?: Array<keyof OrganizationFields>, headers?: Headers, token?: string): Promise<Partial<import("./generated/graphql").Organization>>;
    updateOrganization(id: Scalars['ID'], input: OrganizationUpdateInput, fields?: Array<keyof OrganizationFields>, headers?: Headers, token?: string): Promise<Partial<import("./generated/graphql").Organization>>;
    marketplace(id: Scalars['ID'], fields?: Array<keyof MarketplaceFields>, headers?: Headers, token?: string): Promise<Partial<import("./generated/graphql").Marketplace>>;
    createMarketplace(input: MarketplaceInput, fields?: Array<keyof MarketplaceFields>, headers?: Headers, token?: string): Promise<Partial<import("./generated/graphql").Marketplace>>;
    updateMarketplace(id: Scalars['ID'], input: MarketplaceUpdateInput, fields?: Array<keyof MarketplaceFields>, headers?: Headers, token?: string): Promise<Partial<import("./generated/graphql").Marketplace>>;
    deleteMarketplace(id: Scalars['ID'], headers?: Headers, token?: string): Promise<Partial<import("./generated/graphql").Deletion>>;
    mediaChannel(id: Scalars['ID'], fields?: Array<keyof MediaChannelFields>, headers?: Headers, token?: string): Promise<Partial<import("./generated/graphql").MediaChannel>>;
    createMediaChannel(input: MediaChannelInput, fields?: Array<keyof MediaChannelFields>, headers?: Headers, token?: string): Promise<Partial<import("./generated/graphql").MediaChannel>>;
    updateMediaChannel(id: Scalars['ID'], input: MediaChannelUpdateInput, fields?: Array<keyof MediaChannelFields>, headers?: Headers, token?: string): Promise<Partial<import("./generated/graphql").MediaChannel>>;
    deleteMediaChannel(id: Scalars['ID'], headers?: Headers, token?: string): Promise<Partial<import("./generated/graphql").Deletion>>;
    campaignTemplate(id: Scalars['ID'], fields?: Array<keyof CampaignTemplateFields>, headers?: Headers, token?: string): Promise<Partial<CampaignTemplate>>;
    campaignTemplates(fields?: Array<keyof CampaignTemplateFields>, headers?: Headers, token?: string): Promise<Partial<CampaignTemplate>[]>;
    vendor(id: Scalars['ID'], fields?: Array<keyof VendorFields>, headers?: Headers, token?: string): Promise<Partial<import("./generated/graphql").Vendor>>;
    createVendor(input: VendorInput, fields?: Array<keyof VendorFields>, headers?: Headers, token?: string): Promise<Partial<import("./generated/graphql").Vendor>>;
    updateVendor(id: Scalars['ID'], input: VendorUpdateInput, fields?: Array<keyof VendorFields>, headers?: Headers, token?: string): Promise<Partial<import("./generated/graphql").Vendor>>;
    deleteVendor(id: Scalars['ID'], headers?: Headers, token?: string): Promise<Partial<import("./generated/graphql").Deletion>>;
    catalog(id: Scalars['ID'], fields?: Array<keyof CatalogFields>, headers?: Headers, token?: string): Promise<Partial<import("./generated/graphql").Catalog>>;
    createCatalog(input: CatalogInput, fields?: Array<keyof CatalogFields>, headers?: Headers, token?: string): Promise<Partial<import("./generated/graphql").Catalog>>;
    updateCatalog(id: Scalars['ID'], input: CatalogUpdateInput, fields?: Array<keyof CatalogFields>, headers?: Headers, token?: string): Promise<Partial<import("./generated/graphql").Catalog>>;
    deleteCatalog(id: Scalars['ID'], headers?: Headers, token?: string): Promise<Partial<import("./generated/graphql").Deletion>>;
    product(id: Scalars['ID'], fields?: Array<keyof ProductFields>, headers?: Headers, token?: string): Promise<Partial<import("./generated/graphql").Product>>;
    createProduct(input: ProductInput, fields?: Array<keyof ProductFields>, headers?: Headers, token?: string): Promise<Partial<import("./generated/graphql").Product>>;
    updateProduct(id: Scalars['ID'], input: ProductUpdateInput, fields?: Array<keyof ProductFields>, headers?: Headers, token?: string): Promise<Partial<import("./generated/graphql").Product>>;
    deleteProduct(id: Scalars['ID'], headers?: Headers, token?: string): Promise<Partial<import("./generated/graphql").Deletion>>;
    marketingCampaign(id: Scalars['ID'], fields?: Array<keyof MarketingCampaignFields>, headers?: Headers, token?: string): Promise<Partial<import("./generated/graphql").MarketingCampaign>>;
    createMarketingCampaign(input: MarketingCampaignInput, fields?: Array<keyof MarketingCampaignFields>, headers?: Headers, token?: string): Promise<Partial<import("./generated/graphql").MarketingCampaign>>;
    updateMarketingCampaign(id: Scalars['ID'], input: MarketingCampaignUpdateInput, fields?: Array<keyof MarketingCampaignFields>, headers?: Headers, token?: string): Promise<Partial<import("./generated/graphql").MarketingCampaign>>;
    deleteMarketingCampaign(id: Scalars['ID'], headers?: Headers, token?: string): Promise<Partial<import("./generated/graphql").Deletion>>;
    marketingAd(id: Scalars['ID'], fields?: Array<keyof MarketingAdFields>, headers?: Headers, token?: string): Promise<Partial<import("./generated/graphql").MarketingAd>>;
    result(id: Scalars['ID'], fields?: Array<keyof ResultFields>, headers?: Headers, token?: string): Promise<Partial<import("./generated/graphql").Result>>;
    entitlement(id: Scalars['ID'], fields?: Array<keyof EntitlementFields>, headers?: Headers, token?: string): Promise<Partial<import("./generated/graphql").Entitlement>>;
    createEntitlement(input: EntitlementInput, fields?: Array<keyof EntitlementFields>, headers?: Headers, token?: string): Promise<Partial<import("./generated/graphql").Entitlement>>;
    updateEntitlement(id: Scalars['ID'], input: EntitlementUpdateInput, fields?: Array<keyof EntitlementFields>, headers?: Headers, token?: string): Promise<Partial<import("./generated/graphql").Entitlement>>;
    deleteEntitlement(id: Scalars['ID'], headers?: Headers, token?: string): Promise<Partial<import("./generated/graphql").Deletion>>;
}
export * from './generated/graphql';
export * from './inputFields';
