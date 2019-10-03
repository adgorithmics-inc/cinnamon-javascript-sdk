import {
    GraphQLResolveInfo,
    GraphQLScalarType,
    GraphQLScalarTypeConfig,
} from 'graphql';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = {
    [X in Exclude<keyof T, K>]?: T[X]
} &
    { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    /** ObjectId must be 24 bytes */
    ObjectId: string;
    /** Date strings must follow ISO 8601 specifications */
    DateISO: any;
    /** String must contain at least one character */
    NonEmptyString: string;
    /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
    JSONObject: any;
    /** The `Upload` scalar type represents a file upload. */
    Upload: any;
};

export enum AuthField {
    Id = 'id',
    UserId = 'userId',
    VendorId = 'vendorId',
    OrganizationId = 'organizationId',
    MarketplaceId = 'marketplaceId',
    MediaChannelId = 'mediaChannelId',
    CampaignTemplateId = 'campaignTemplateId',
    ResourceId = 'resourceId',
    CatalogId = 'catalogId',
    ProductIds = 'productIds',
}

export enum AuthLocation {
    Arg = 'ARG',
    Input = 'INPUT',
    Parent = 'PARENT',
    Catalog = 'CATALOG',
    Entitlement = 'ENTITLEMENT',
    MarketingAd = 'MARKETING_AD',
    MarketingCampaign = 'MARKETING_CAMPAIGN',
    CampaignTemplate = 'CAMPAIGN_TEMPLATE',
    MediaChannel = 'MEDIA_CHANNEL',
    Product = 'PRODUCT',
    Result = 'RESULT',
    Vendor = 'VENDOR',
}

export enum AuthPermission {
    Read = 'READ',
    Write = 'WRITE',
    Delete = 'DELETE',
    ManageEntitlements = 'MANAGE_ENTITLEMENTS',
}

export enum AuthType {
    Entitlement = 'ENTITLEMENT',
    Vendor = 'VENDOR',
    UserOnly = 'USER_ONLY',
}

export enum CacheControlScope {
    Public = 'PUBLIC',
    Private = 'PRIVATE',
}

export type CampaignTemplate = {
    id: Scalars['ObjectId'];
    creationDate: Scalars['DateISO'];
    lastChangeDate: Scalars['DateISO'];
    name: Scalars['NonEmptyString'];
    description: Scalars['String'];
    platform: Platform;
    remoteId: Scalars['String'];
    marketplace: Marketplace;
    marketingCampaigns?: Maybe<MarketingCampaignConnection>;
};

export type CampaignTemplateMarketingCampaignsArgs = {
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['ObjectId']>;
};

export type CampaignTemplateConnection = {
    edges?: Maybe<Array<Maybe<CampaignTemplateEdge>>>;
    pageInfo: PageInfo;
};

export type CampaignTemplateEdge = {
    cursor: Scalars['ObjectId'];
    node?: Maybe<CampaignTemplate>;
};

export type CampaignTemplatesFilterInput = {
    name?: Maybe<Scalars['String']>;
    name__contains?: Maybe<Scalars['String']>;
    name__icontains?: Maybe<Scalars['String']>;
    id__in?: Maybe<Array<Scalars['ObjectId']>>;
    platform?: Maybe<Platform>;
    remoteId?: Maybe<Scalars['String']>;
    marketplaceId?: Maybe<Scalars['ObjectId']>;
};

export type Catalog = {
    id: Scalars['ObjectId'];
    name: Scalars['NonEmptyString'];
    catalogType: CatalogType;
    creationDate: Scalars['DateISO'];
    lastChangeDate: Scalars['DateISO'];
    remoteId?: Maybe<Scalars['String']>;
    systemStatus: SystemStatus;
    remoteState: Scalars['JSONObject'];
    dataFeedId?: Maybe<Scalars['String']>;
    errors?: Maybe<Array<Scalars['JSONObject']>>;
    mediaChannel: MediaChannel;
    products?: Maybe<ProductConnection>;
};

export type CatalogProductsArgs = {
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['ObjectId']>;
};

export type CatalogConnection = {
    edges?: Maybe<Array<Maybe<CatalogEdge>>>;
    pageInfo: PageInfo;
};

export type CatalogCreateInput = {
    name: Scalars['NonEmptyString'];
    mediaChannelId: Scalars['ObjectId'];
    catalogType: CatalogType;
};

export type CatalogEdge = {
    cursor: Scalars['ObjectId'];
    node?: Maybe<Catalog>;
};

export type CatalogImportInput = {
    mediaChannelId: Scalars['ObjectId'];
    remoteId: Scalars['String'];
};

export type CatalogsFilterInput = {
    name?: Maybe<Scalars['String']>;
    name__contains?: Maybe<Scalars['String']>;
    name__icontains?: Maybe<Scalars['String']>;
    systemStatus?: Maybe<SystemStatus>;
    systemStatus__in?: Maybe<Array<SystemStatus>>;
    id__in?: Maybe<Array<Scalars['ObjectId']>>;
    mediaChannelId?: Maybe<Scalars['ObjectId']>;
    remoteId?: Maybe<Scalars['ObjectId']>;
};

export enum CatalogType {
    Bookable = 'bookable',
    Commerce = 'commerce',
    Destinations = 'destinations',
    Flights = 'flights',
    HomeListings = 'home_listings',
    Hotels = 'hotels',
    OfflineCommerce = 'offline_commerce',
    TicketedExperiences = 'ticketed_experiences',
    TransactableItems = 'transactable_items',
    Vehicles = 'vehicles',
}

export type CatalogUpdateInput = {
    name?: Maybe<Scalars['NonEmptyString']>;
};

export type Deletion = {
    id: Scalars['String'];
};

export type Entitlement = {
    id: Scalars['ObjectId'];
    creationDate: Scalars['DateISO'];
    lastChangeDate: Scalars['DateISO'];
    user: User;
    type: EntitlementResourceTypeEnum;
    resource: EntitlementResource;
    permissions: Array<AuthPermission>;
};

export type EntitlementConnection = {
    edges?: Maybe<Array<Maybe<EntitlementEdge>>>;
    pageInfo: PageInfo;
};

export type EntitlementEdge = {
    cursor: Scalars['ObjectId'];
    node?: Maybe<Entitlement>;
};

export type EntitlementInput = {
    userId: Scalars['ObjectId'];
    resourceId: Scalars['ObjectId'];
    permissions: Array<AuthPermission>;
};

export type EntitlementResource = {
    id: Scalars['ObjectId'];
    name: Scalars['NonEmptyString'];
    systemStatus: SystemStatus;
    creationDate: Scalars['DateISO'];
    lastChangeDate: Scalars['DateISO'];
    errors?: Maybe<Array<Scalars['JSONObject']>>;
};

export enum EntitlementResourceTypeEnum {
    Marketplace = 'Marketplace',
    Organization = 'Organization',
    MediaChannel = 'MediaChannel',
}

export type EntitlementsFilterInput = {
    userId?: Maybe<Scalars['ObjectId']>;
    resourceId?: Maybe<Scalars['ObjectId']>;
    type?: Maybe<EntitlementResourceTypeEnum>;
    id__in?: Maybe<Array<Scalars['ObjectId']>>;
};

export type EntitlementUpdateInput = {
    permissions: Array<AuthPermission>;
};

export type MarketingAd = ResultResource & {
    id: Scalars['ObjectId'];
    creationDate: Scalars['DateISO'];
    lastChangeDate: Scalars['DateISO'];
    remoteId: Scalars['String'];
    preview: Scalars['String'];
    results?: Maybe<ResultConnection>;
    marketingCampaign: MarketingCampaign;
    vendor: Vendor;
};

export type MarketingAdResultsArgs = {
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['ObjectId']>;
};

export type MarketingAdConnection = {
    edges?: Maybe<Array<Maybe<MarketingAdEdge>>>;
    pageInfo: PageInfo;
};

export type MarketingAdEdge = {
    cursor: Scalars['ObjectId'];
    node?: Maybe<MarketingAd>;
};

export type MarketingAdsFilterInput = {
    id__in?: Maybe<Array<Scalars['ObjectId']>>;
    vendorId?: Maybe<Scalars['ObjectId']>;
    marketingCampaignId?: Maybe<Scalars['ObjectId']>;
    remoteId?: Maybe<Scalars['String']>;
};

export type MarketingCampaign = ResultResource & {
    id: Scalars['ObjectId'];
    creationDate: Scalars['DateISO'];
    lastChangeDate: Scalars['DateISO'];
    status: MarketingCampaignStatus;
    marketingAds?: Maybe<MarketingAdConnection>;
    products?: Maybe<ProductConnection>;
    vendor: Vendor;
    campaignTemplate: CampaignTemplate;
    mediaChannel: MediaChannel;
    results?: Maybe<ResultConnection>;
    creativeSpec: Scalars['JSONObject'];
    runTimeSpec: Scalars['JSONObject'];
    systemStatus: SystemStatus;
    errors?: Maybe<Array<Scalars['JSONObject']>>;
};

export type MarketingCampaignMarketingAdsArgs = {
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['ObjectId']>;
};

export type MarketingCampaignProductsArgs = {
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['ObjectId']>;
};

export type MarketingCampaignResultsArgs = {
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['ObjectId']>;
};

export type MarketingCampaignConnection = {
    edges?: Maybe<Array<Maybe<MarketingCampaignEdge>>>;
    pageInfo: PageInfo;
};

export type MarketingCampaignEdge = {
    cursor: Scalars['ObjectId'];
    node?: Maybe<MarketingCampaign>;
};

export type MarketingCampaignInput = {
    campaignTemplateId: Scalars['ObjectId'];
    creativeSpec: Scalars['JSONObject'];
    runTimeSpec: Scalars['JSONObject'];
    productIds?: Maybe<Array<Scalars['ObjectId']>>;
    status?: Maybe<MarketingCampaignStatus>;
};

export type MarketingCampaignsFilterInput = {
    status?: Maybe<MarketingCampaignStatus>;
    campaignTemplateId?: Maybe<Scalars['ObjectId']>;
    mediaChannelId?: Maybe<Scalars['ObjectId']>;
    vendorId?: Maybe<Scalars['ObjectId']>;
    id__in?: Maybe<Array<Scalars['ObjectId']>>;
    systemStatus?: Maybe<SystemStatus>;
    systemStatus__in?: Maybe<Array<SystemStatus>>;
};

export enum MarketingCampaignStatus {
    Active = 'ACTIVE',
    Paused = 'PAUSED',
}

export type MarketingCampaignUpdateInput = {
    creativeSpec?: Maybe<Scalars['JSONObject']>;
    runTimeSpec?: Maybe<Scalars['JSONObject']>;
    status?: Maybe<MarketingCampaignStatus>;
};

export type Marketplace = EntitlementResource & {
    id: Scalars['ObjectId'];
    creationDate: Scalars['DateISO'];
    lastChangeDate: Scalars['DateISO'];
    name: Scalars['NonEmptyString'];
    organization: Organization;
    mediaChannels?: Maybe<MediaChannelConnection>;
    campaignTemplates?: Maybe<CampaignTemplateConnection>;
    vendors?: Maybe<VendorConnection>;
    systemStatus: SystemStatus;
    errors?: Maybe<Array<Scalars['JSONObject']>>;
};

export type MarketplaceMediaChannelsArgs = {
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['ObjectId']>;
};

export type MarketplaceCampaignTemplatesArgs = {
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['ObjectId']>;
};

export type MarketplaceVendorsArgs = {
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['ObjectId']>;
};

export type MarketplaceConnection = {
    edges?: Maybe<Array<Maybe<MarketplaceEdge>>>;
    pageInfo: PageInfo;
};

export type MarketplaceEdge = {
    cursor: Scalars['ObjectId'];
    node?: Maybe<Marketplace>;
};

export type MarketplaceInput = {
    name: Scalars['NonEmptyString'];
    organizationId: Scalars['ObjectId'];
};

export type MarketplacesFilterInput = {
    name?: Maybe<Scalars['String']>;
    name__contains?: Maybe<Scalars['String']>;
    name__icontains?: Maybe<Scalars['String']>;
    id__in?: Maybe<Array<Scalars['ObjectId']>>;
    organizationId?: Maybe<Scalars['ObjectId']>;
    organizationId__in?: Maybe<Array<Scalars['ObjectId']>>;
    systemStatus?: Maybe<SystemStatus>;
    systemStatus__in?: Maybe<Array<SystemStatus>>;
};

export type MarketplaceUpdateInput = {
    name?: Maybe<Scalars['NonEmptyString']>;
};

export type MediaChannel = EntitlementResource & {
    id: Scalars['ObjectId'];
    creationDate: Scalars['DateISO'];
    lastChangeDate: Scalars['DateISO'];
    name: Scalars['NonEmptyString'];
    platform: Platform;
    remoteId?: Maybe<Scalars['String']>;
    remoteState: Scalars['JSONObject'];
    currency?: Maybe<Scalars['NonEmptyString']>;
    timezone?: Maybe<Scalars['NonEmptyString']>;
    tokenStatus: TokenStatus;
    systemStatus: SystemStatus;
    errors?: Maybe<Array<Scalars['JSONObject']>>;
    catalogs: CatalogConnection;
    marketplace: Marketplace;
};

export type MediaChannelCatalogsArgs = {
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['ObjectId']>;
};

export type MediaChannelConnection = {
    edges?: Maybe<Array<Maybe<MediaChannelEdge>>>;
    pageInfo: PageInfo;
};

export type MediaChannelCreateInput = {
    name: Scalars['NonEmptyString'];
    marketplaceId: Scalars['ObjectId'];
    platform: Platform;
    token: Scalars['NonEmptyString'];
};

export type MediaChannelEdge = {
    cursor: Scalars['ObjectId'];
    node?: Maybe<MediaChannel>;
};

export type MediaChannelImportInput = {
    marketplaceId: Scalars['ObjectId'];
    platform: Platform;
    remoteId: Scalars['String'];
    token: Scalars['NonEmptyString'];
};

export type MediaChannelsFilterInput = {
    name?: Maybe<Scalars['String']>;
    name__contains?: Maybe<Scalars['String']>;
    name__icontains?: Maybe<Scalars['String']>;
    systemStatus?: Maybe<SystemStatus>;
    systemStatus__in?: Maybe<Array<SystemStatus>>;
    tokenStatus?: Maybe<TokenStatus>;
    tokenStatus__in?: Maybe<Array<TokenStatus>>;
    platform?: Maybe<Platform>;
    remoteId?: Maybe<Scalars['String']>;
    id__in?: Maybe<Array<Scalars['ObjectId']>>;
    marketplaceId?: Maybe<Scalars['ObjectId']>;
};

export type MediaChannelUpdateInput = {
    name?: Maybe<Scalars['NonEmptyString']>;
    token?: Maybe<Scalars['NonEmptyString']>;
};

export type Mutation = {
    createCatalog?: Maybe<Catalog>;
    importCatalog?: Maybe<Catalog>;
    deleteCatalog?: Maybe<Deletion>;
    updateCatalog?: Maybe<Catalog>;
    createEntitlement?: Maybe<Entitlement>;
    updateEntitlement?: Maybe<Entitlement>;
    deleteEntitlement?: Maybe<Deletion>;
    createMarketingCampaign?: Maybe<MarketingCampaign>;
    updateMarketingCampaign?: Maybe<MarketingCampaign>;
    deleteMarketingCampaign?: Maybe<Deletion>;
    createMarketplace?: Maybe<Marketplace>;
    updateMarketplace?: Maybe<Marketplace>;
    deleteMarketplace?: Maybe<Deletion>;
    createMediaChannel?: Maybe<MediaChannel>;
    importMediaChannel?: Maybe<MediaChannel>;
    updateMediaChannel?: Maybe<MediaChannel>;
    deleteMediaChannel?: Maybe<Deletion>;
    createOrganization?: Maybe<Organization>;
    updateOrganization?: Maybe<Organization>;
    deleteOrganization?: Maybe<Deletion>;
    createProduct?: Maybe<Product>;
    updateProduct?: Maybe<Product>;
    deleteProduct?: Maybe<Deletion>;
    login?: Maybe<Token>;
    updateUser?: Maybe<User>;
    refreshLogin?: Maybe<Token>;
    createVendor?: Maybe<Vendor>;
    updateVendor?: Maybe<Vendor>;
    deleteVendor?: Maybe<Deletion>;
};

export type MutationCreateCatalogArgs = {
    input: CatalogCreateInput;
};

export type MutationImportCatalogArgs = {
    input: CatalogImportInput;
};

export type MutationDeleteCatalogArgs = {
    id: Scalars['ObjectId'];
};

export type MutationUpdateCatalogArgs = {
    id: Scalars['ObjectId'];
    input: CatalogUpdateInput;
};

export type MutationCreateEntitlementArgs = {
    input: EntitlementInput;
};

export type MutationUpdateEntitlementArgs = {
    id: Scalars['ObjectId'];
    input: EntitlementUpdateInput;
};

export type MutationDeleteEntitlementArgs = {
    id: Scalars['ObjectId'];
};

export type MutationCreateMarketingCampaignArgs = {
    input: MarketingCampaignInput;
};

export type MutationUpdateMarketingCampaignArgs = {
    id: Scalars['ObjectId'];
    input: MarketingCampaignUpdateInput;
};

export type MutationDeleteMarketingCampaignArgs = {
    id: Scalars['ObjectId'];
};

export type MutationCreateMarketplaceArgs = {
    input: MarketplaceInput;
};

export type MutationUpdateMarketplaceArgs = {
    id: Scalars['ObjectId'];
    input: MarketplaceUpdateInput;
};

export type MutationDeleteMarketplaceArgs = {
    id: Scalars['ObjectId'];
};

export type MutationCreateMediaChannelArgs = {
    input: MediaChannelCreateInput;
};

export type MutationImportMediaChannelArgs = {
    input: MediaChannelImportInput;
};

export type MutationUpdateMediaChannelArgs = {
    id: Scalars['ObjectId'];
    input: MediaChannelUpdateInput;
};

export type MutationDeleteMediaChannelArgs = {
    id: Scalars['ObjectId'];
};

export type MutationCreateOrganizationArgs = {
    input: OrganizationInput;
};

export type MutationUpdateOrganizationArgs = {
    id: Scalars['ObjectId'];
    input: OrganizationUpdateInput;
};

export type MutationDeleteOrganizationArgs = {
    id: Scalars['ObjectId'];
};

export type MutationCreateProductArgs = {
    input: ProductInput;
};

export type MutationUpdateProductArgs = {
    id: Scalars['ObjectId'];
    input: ProductUpdateInput;
};

export type MutationDeleteProductArgs = {
    id: Scalars['ObjectId'];
};

export type MutationLoginArgs = {
    input: UserLoginInput;
};

export type MutationUpdateUserArgs = {
    input: UserUpdateInput;
};

export type MutationRefreshLoginArgs = {
    input: RefreshTokenInput;
};

export type MutationCreateVendorArgs = {
    input: VendorInput;
};

export type MutationUpdateVendorArgs = {
    id: Scalars['ObjectId'];
    input: VendorUpdateInput;
};

export type MutationDeleteVendorArgs = {
    id: Scalars['ObjectId'];
};

export type Organization = EntitlementResource & {
    id: Scalars['ObjectId'];
    creationDate: Scalars['DateISO'];
    lastChangeDate: Scalars['DateISO'];
    users?: Maybe<UserConnection>;
    marketplaces?: Maybe<MarketplaceConnection>;
    name: Scalars['NonEmptyString'];
    tier: OrganizationTierEnum;
    systemStatus: SystemStatus;
    errors?: Maybe<Array<Scalars['JSONObject']>>;
};

export type OrganizationUsersArgs = {
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['ObjectId']>;
};

export type OrganizationMarketplacesArgs = {
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['ObjectId']>;
};

export type OrganizationConnection = {
    edges?: Maybe<Array<Maybe<OrganizationEdge>>>;
    pageInfo: PageInfo;
};

export type OrganizationEdge = {
    cursor: Scalars['ObjectId'];
    node?: Maybe<Organization>;
};

export type OrganizationInput = {
    name: Scalars['NonEmptyString'];
};

export type OrganizationsFilterInput = {
    name?: Maybe<Scalars['String']>;
    name__contains?: Maybe<Scalars['String']>;
    name__icontains?: Maybe<Scalars['String']>;
    tier?: Maybe<OrganizationTierEnum>;
    id__in?: Maybe<Array<Scalars['ObjectId']>>;
    systemStatus?: Maybe<SystemStatus>;
    systemStatus__in?: Maybe<Array<SystemStatus>>;
};

export enum OrganizationTierEnum {
    Standard = 'Standard',
    Developer = 'Developer',
}

export type OrganizationUpdateInput = {
    name?: Maybe<Scalars['NonEmptyString']>;
};

export type PageInfo = {
    hasNextPage: Scalars['Boolean'];
    startCursor?: Maybe<Scalars['String']>;
    endCursor?: Maybe<Scalars['String']>;
};

export enum Platform {
    Facebook = 'facebook',
}

export type Product = {
    id: Scalars['ObjectId'];
    creationDate: Scalars['DateISO'];
    lastChangeDate: Scalars['DateISO'];
    name: Scalars['NonEmptyString'];
    sku: Scalars['NonEmptyString'];
    remoteState?: Maybe<Scalars['JSONObject']>;
    marketingCampaigns?: Maybe<MarketingCampaignConnection>;
    catalog: Catalog;
    metadata: Scalars['JSONObject'];
    vendor: Vendor;
    systemStatus: SystemStatus;
    errors?: Maybe<Array<Scalars['JSONObject']>>;
    warnings?: Maybe<Array<Scalars['JSONObject']>>;
};

export type ProductMarketingCampaignsArgs = {
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['ObjectId']>;
};

export type ProductConnection = {
    edges?: Maybe<Array<Maybe<ProductEdge>>>;
    pageInfo: PageInfo;
};

export type ProductEdge = {
    cursor: Scalars['ObjectId'];
    node?: Maybe<Product>;
};

export type ProductInput = {
    vendorId: Scalars['ObjectId'];
    catalogId: Scalars['ObjectId'];
    metadata: Scalars['JSONObject'];
};

export type ProductsFilterInput = {
    name?: Maybe<Scalars['String']>;
    name__contains?: Maybe<Scalars['String']>;
    name__icontains?: Maybe<Scalars['String']>;
    systemStatus?: Maybe<SystemStatus>;
    systemStatus__in?: Maybe<Array<SystemStatus>>;
    id__in?: Maybe<Array<Scalars['ObjectId']>>;
    sku?: Maybe<Scalars['String']>;
    catalogId?: Maybe<Scalars['ObjectId']>;
    vendorId?: Maybe<Scalars['ObjectId']>;
};

export type ProductUpdateInput = {
    metadata: Scalars['JSONObject'];
};

export type Query = {
    campaignTemplate?: Maybe<CampaignTemplate>;
    campaignTemplates?: Maybe<CampaignTemplateConnection>;
    catalog?: Maybe<Catalog>;
    catalogs?: Maybe<CatalogConnection>;
    entitlement?: Maybe<Entitlement>;
    entitlements?: Maybe<EntitlementConnection>;
    marketingAd?: Maybe<MarketingAd>;
    marketingAds?: Maybe<MarketingAdConnection>;
    marketingCampaign?: Maybe<MarketingCampaign>;
    marketingCampaigns?: Maybe<MarketingCampaignConnection>;
    marketplace?: Maybe<Marketplace>;
    marketplaces?: Maybe<MarketplaceConnection>;
    mediaChannel?: Maybe<MediaChannel>;
    mediaChannels?: Maybe<MediaChannelConnection>;
    organization?: Maybe<Organization>;
    organizations?: Maybe<OrganizationConnection>;
    product?: Maybe<Product>;
    products?: Maybe<ProductConnection>;
    result?: Maybe<Result>;
    results?: Maybe<ResultConnection>;
    me?: Maybe<User>;
    vendor?: Maybe<Vendor>;
    vendors?: Maybe<VendorConnection>;
};

export type QueryCampaignTemplateArgs = {
    id: Scalars['ObjectId'];
};

export type QueryCampaignTemplatesArgs = {
    filter?: Maybe<CampaignTemplatesFilterInput>;
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['ObjectId']>;
};

export type QueryCatalogArgs = {
    id: Scalars['ObjectId'];
};

export type QueryCatalogsArgs = {
    filter?: Maybe<CatalogsFilterInput>;
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['ObjectId']>;
};

export type QueryEntitlementArgs = {
    id: Scalars['ObjectId'];
};

export type QueryEntitlementsArgs = {
    filter?: Maybe<EntitlementsFilterInput>;
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['ObjectId']>;
};

export type QueryMarketingAdArgs = {
    id: Scalars['ObjectId'];
};

export type QueryMarketingAdsArgs = {
    filter?: Maybe<MarketingAdsFilterInput>;
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['ObjectId']>;
};

export type QueryMarketingCampaignArgs = {
    id: Scalars['ObjectId'];
};

export type QueryMarketingCampaignsArgs = {
    filter?: Maybe<MarketingCampaignsFilterInput>;
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['ObjectId']>;
};

export type QueryMarketplaceArgs = {
    id: Scalars['ObjectId'];
};

export type QueryMarketplacesArgs = {
    filter?: Maybe<MarketplacesFilterInput>;
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['ObjectId']>;
};

export type QueryMediaChannelArgs = {
    id: Scalars['ObjectId'];
};

export type QueryMediaChannelsArgs = {
    filter?: Maybe<MediaChannelsFilterInput>;
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['ObjectId']>;
};

export type QueryOrganizationArgs = {
    id: Scalars['ObjectId'];
};

export type QueryOrganizationsArgs = {
    filter?: Maybe<OrganizationsFilterInput>;
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['ObjectId']>;
};

export type QueryProductArgs = {
    id: Scalars['ObjectId'];
};

export type QueryProductsArgs = {
    filter?: Maybe<ProductsFilterInput>;
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['ObjectId']>;
};

export type QueryResultArgs = {
    id: Scalars['ObjectId'];
};

export type QueryResultsArgs = {
    filter?: Maybe<ResultsFilterInput>;
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['ObjectId']>;
};

export type QueryVendorArgs = {
    id: Scalars['ObjectId'];
};

export type QueryVendorsArgs = {
    filter?: Maybe<VendorsFilterInput>;
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['ObjectId']>;
};

export type RefreshTokenInput = {
    refreshToken: Scalars['String'];
};

export type Result = {
    id: Scalars['ObjectId'];
    creationDate: Scalars['DateISO'];
    lastChangeDate: Scalars['DateISO'];
    date: Scalars['DateISO'];
    analytics: ResultAnalytics;
    type: ResultResourceTypeEnum;
    resource: ResultResource;
    vendor: Vendor;
};

export type ResultAnalytics = {
    results?: Maybe<Scalars['Int']>;
    impressions?: Maybe<Scalars['Int']>;
    clicks?: Maybe<Scalars['Int']>;
    spend?: Maybe<Scalars['Float']>;
};

export type ResultConnection = {
    edges?: Maybe<Array<Maybe<ResultEdge>>>;
    pageInfo: PageInfo;
};

export type ResultEdge = {
    cursor: Scalars['ObjectId'];
    node?: Maybe<Result>;
};

export type ResultResource = {
    id: Scalars['ObjectId'];
    creationDate: Scalars['DateISO'];
    lastChangeDate: Scalars['DateISO'];
    vendor: Vendor;
};

export enum ResultResourceTypeEnum {
    MarketingAd = 'MarketingAd',
    MarketingCampaign = 'MarketingCampaign',
}

export type ResultsFilterInput = {
    id__in?: Maybe<Array<Scalars['ObjectId']>>;
    type?: Maybe<ResultResourceTypeEnum>;
    resourceId?: Maybe<Scalars['ObjectId']>;
    vendorId?: Maybe<Scalars['ObjectId']>;
};

export enum SystemStatus {
    Pending = 'PENDING',
    PendingDeletion = 'PENDING_DELETION',
    PendingSync = 'PENDING_SYNC',
    Processing = 'PROCESSING',
    ProcessingSync = 'PROCESSING_SYNC',
    ProcessingDeletion = 'PROCESSING_DELETION',
    Processed = 'PROCESSED',
    Error = 'ERROR',
    Deleted = 'DELETED',
}

export type Token = {
    token: Scalars['String'];
    refreshToken: Scalars['String'];
    expiryDate: Scalars['DateISO'];
    user: User;
};

export enum TokenStatus {
    Pending = 'PENDING',
    Missing = 'MISSING',
    Valid = 'VALID',
    Invalid = 'INVALID',
}

export type User = {
    id: Scalars['ObjectId'];
    creationDate: Scalars['DateISO'];
    lastChangeDate: Scalars['DateISO'];
    email: Scalars['NonEmptyString'];
    firstName?: Maybe<Scalars['NonEmptyString']>;
    lastName?: Maybe<Scalars['NonEmptyString']>;
    organizations?: Maybe<OrganizationConnection>;
    entitlements?: Maybe<EntitlementConnection>;
};

export type UserOrganizationsArgs = {
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['ObjectId']>;
};

export type UserEntitlementsArgs = {
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['ObjectId']>;
};

export type UserConnection = {
    edges?: Maybe<Array<Maybe<UserEdge>>>;
    pageInfo: PageInfo;
};

export type UserEdge = {
    cursor: Scalars['ObjectId'];
    node?: Maybe<User>;
};

export type UserLoginInput = {
    password: Scalars['NonEmptyString'];
    email: Scalars['NonEmptyString'];
};

export type UserUpdateInput = {
    firstName?: Maybe<Scalars['NonEmptyString']>;
    lastName?: Maybe<Scalars['NonEmptyString']>;
    password?: Maybe<Scalars['NonEmptyString']>;
    email?: Maybe<Scalars['NonEmptyString']>;
};

export type Vendor = {
    id: Scalars['ObjectId'];
    creationDate: Scalars['DateISO'];
    lastChangeDate: Scalars['DateISO'];
    name: Scalars['NonEmptyString'];
    marketplace: Marketplace;
    products?: Maybe<ProductConnection>;
    systemStatus: SystemStatus;
    errors?: Maybe<Array<Scalars['JSONObject']>>;
};

export type VendorProductsArgs = {
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['ObjectId']>;
};

export type VendorConnection = {
    edges?: Maybe<Array<Maybe<VendorEdge>>>;
    pageInfo: PageInfo;
};

export type VendorEdge = {
    cursor: Scalars['ObjectId'];
    node?: Maybe<Vendor>;
};

export type VendorInput = {
    name: Scalars['NonEmptyString'];
    marketplaceId: Scalars['ObjectId'];
};

export type VendorsFilterInput = {
    id__in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
    name?: Maybe<Scalars['String']>;
    name__contains?: Maybe<Scalars['String']>;
    name__icontains?: Maybe<Scalars['String']>;
    marketplaceId?: Maybe<Scalars['ObjectId']>;
    systemStatus?: Maybe<SystemStatus>;
    systemStatus__in?: Maybe<Array<SystemStatus>>;
};

export type VendorUpdateInput = {
    name?: Maybe<Scalars['NonEmptyString']>;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
    fragment: string;
    resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
    | ResolverFn<TResult, TParent, TContext, TArgs>
    | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo,
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
    TResult,
    TKey extends string,
    TParent,
    TContext,
    TArgs
> {
    subscribe: SubscriptionSubscribeFn<
        { [key in TKey]: TResult },
        TParent,
        TContext,
        TArgs
    >;
    resolve?: SubscriptionResolveFn<
        TResult,
        { [key in TKey]: TResult },
        TContext,
        TArgs
    >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
    subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
    resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
    TResult,
    TKey extends string,
    TParent,
    TContext,
    TArgs
> =
    | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
    | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
    TResult,
    TKey extends string,
    TParent = {},
    TContext = {},
    TArgs = {}
> =
    | ((
          ...args: any[]
      ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
    | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
    parent: TParent,
    context: TContext,
    info: GraphQLResolveInfo,
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
    TResult = {},
    TParent = {},
    TContext = {},
    TArgs = {}
> = (
    next: NextResolverFn<TResult>,
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
    Query: ResolverTypeWrapper<{}>;
    ObjectId: ResolverTypeWrapper<Scalars['ObjectId']>;
    CampaignTemplate: ResolverTypeWrapper<CampaignTemplate>;
    DateISO: ResolverTypeWrapper<Scalars['DateISO']>;
    NonEmptyString: ResolverTypeWrapper<Scalars['NonEmptyString']>;
    String: ResolverTypeWrapper<Scalars['String']>;
    Platform: Platform;
    Marketplace: ResolverTypeWrapper<Marketplace>;
    EntitlementResource: ResolverTypeWrapper<EntitlementResource>;
    SystemStatus: SystemStatus;
    JSONObject: ResolverTypeWrapper<Scalars['JSONObject']>;
    Organization: ResolverTypeWrapper<Organization>;
    Int: ResolverTypeWrapper<Scalars['Int']>;
    UserConnection: ResolverTypeWrapper<UserConnection>;
    UserEdge: ResolverTypeWrapper<UserEdge>;
    User: ResolverTypeWrapper<User>;
    OrganizationConnection: ResolverTypeWrapper<OrganizationConnection>;
    OrganizationEdge: ResolverTypeWrapper<OrganizationEdge>;
    PageInfo: ResolverTypeWrapper<PageInfo>;
    Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
    EntitlementConnection: ResolverTypeWrapper<EntitlementConnection>;
    EntitlementEdge: ResolverTypeWrapper<EntitlementEdge>;
    Entitlement: ResolverTypeWrapper<Entitlement>;
    EntitlementResourceTypeEnum: EntitlementResourceTypeEnum;
    AuthPermission: AuthPermission;
    MarketplaceConnection: ResolverTypeWrapper<MarketplaceConnection>;
    MarketplaceEdge: ResolverTypeWrapper<MarketplaceEdge>;
    OrganizationTierEnum: OrganizationTierEnum;
    MediaChannelConnection: ResolverTypeWrapper<MediaChannelConnection>;
    MediaChannelEdge: ResolverTypeWrapper<MediaChannelEdge>;
    MediaChannel: ResolverTypeWrapper<MediaChannel>;
    TokenStatus: TokenStatus;
    CatalogConnection: ResolverTypeWrapper<CatalogConnection>;
    CatalogEdge: ResolverTypeWrapper<CatalogEdge>;
    Catalog: ResolverTypeWrapper<Catalog>;
    CatalogType: CatalogType;
    ProductConnection: ResolverTypeWrapper<ProductConnection>;
    ProductEdge: ResolverTypeWrapper<ProductEdge>;
    Product: ResolverTypeWrapper<Product>;
    MarketingCampaignConnection: ResolverTypeWrapper<
        MarketingCampaignConnection
    >;
    MarketingCampaignEdge: ResolverTypeWrapper<MarketingCampaignEdge>;
    MarketingCampaign: ResolverTypeWrapper<MarketingCampaign>;
    ResultResource: ResolverTypeWrapper<ResultResource>;
    Vendor: ResolverTypeWrapper<Vendor>;
    MarketingCampaignStatus: MarketingCampaignStatus;
    MarketingAdConnection: ResolverTypeWrapper<MarketingAdConnection>;
    MarketingAdEdge: ResolverTypeWrapper<MarketingAdEdge>;
    MarketingAd: ResolverTypeWrapper<MarketingAd>;
    ResultConnection: ResolverTypeWrapper<ResultConnection>;
    ResultEdge: ResolverTypeWrapper<ResultEdge>;
    Result: ResolverTypeWrapper<Result>;
    ResultAnalytics: ResolverTypeWrapper<ResultAnalytics>;
    Float: ResolverTypeWrapper<Scalars['Float']>;
    ResultResourceTypeEnum: ResultResourceTypeEnum;
    CampaignTemplateConnection: ResolverTypeWrapper<CampaignTemplateConnection>;
    CampaignTemplateEdge: ResolverTypeWrapper<CampaignTemplateEdge>;
    VendorConnection: ResolverTypeWrapper<VendorConnection>;
    VendorEdge: ResolverTypeWrapper<VendorEdge>;
    CampaignTemplatesFilterInput: CampaignTemplatesFilterInput;
    CatalogsFilterInput: CatalogsFilterInput;
    EntitlementsFilterInput: EntitlementsFilterInput;
    MarketingAdsFilterInput: MarketingAdsFilterInput;
    MarketingCampaignsFilterInput: MarketingCampaignsFilterInput;
    MarketplacesFilterInput: MarketplacesFilterInput;
    MediaChannelsFilterInput: MediaChannelsFilterInput;
    OrganizationsFilterInput: OrganizationsFilterInput;
    ProductsFilterInput: ProductsFilterInput;
    ResultsFilterInput: ResultsFilterInput;
    VendorsFilterInput: VendorsFilterInput;
    Mutation: ResolverTypeWrapper<{}>;
    CatalogCreateInput: CatalogCreateInput;
    CatalogImportInput: CatalogImportInput;
    Deletion: ResolverTypeWrapper<Deletion>;
    CatalogUpdateInput: CatalogUpdateInput;
    EntitlementInput: EntitlementInput;
    EntitlementUpdateInput: EntitlementUpdateInput;
    MarketingCampaignInput: MarketingCampaignInput;
    MarketingCampaignUpdateInput: MarketingCampaignUpdateInput;
    MarketplaceInput: MarketplaceInput;
    MarketplaceUpdateInput: MarketplaceUpdateInput;
    MediaChannelCreateInput: MediaChannelCreateInput;
    MediaChannelImportInput: MediaChannelImportInput;
    MediaChannelUpdateInput: MediaChannelUpdateInput;
    OrganizationInput: OrganizationInput;
    OrganizationUpdateInput: OrganizationUpdateInput;
    ProductInput: ProductInput;
    ProductUpdateInput: ProductUpdateInput;
    UserLoginInput: UserLoginInput;
    Token: ResolverTypeWrapper<Token>;
    UserUpdateInput: UserUpdateInput;
    RefreshTokenInput: RefreshTokenInput;
    VendorInput: VendorInput;
    VendorUpdateInput: VendorUpdateInput;
    AuthField: AuthField;
    AuthLocation: AuthLocation;
    AuthType: AuthType;
    CacheControlScope: CacheControlScope;
    Upload: ResolverTypeWrapper<Scalars['Upload']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
    Query: {};
    ObjectId: Scalars['ObjectId'];
    CampaignTemplate: CampaignTemplate;
    DateISO: Scalars['DateISO'];
    NonEmptyString: Scalars['NonEmptyString'];
    String: Scalars['String'];
    Platform: Platform;
    Marketplace: Marketplace;
    EntitlementResource: EntitlementResource;
    SystemStatus: SystemStatus;
    JSONObject: Scalars['JSONObject'];
    Organization: Organization;
    Int: Scalars['Int'];
    UserConnection: UserConnection;
    UserEdge: UserEdge;
    User: User;
    OrganizationConnection: OrganizationConnection;
    OrganizationEdge: OrganizationEdge;
    PageInfo: PageInfo;
    Boolean: Scalars['Boolean'];
    EntitlementConnection: EntitlementConnection;
    EntitlementEdge: EntitlementEdge;
    Entitlement: Entitlement;
    EntitlementResourceTypeEnum: EntitlementResourceTypeEnum;
    AuthPermission: AuthPermission;
    MarketplaceConnection: MarketplaceConnection;
    MarketplaceEdge: MarketplaceEdge;
    OrganizationTierEnum: OrganizationTierEnum;
    MediaChannelConnection: MediaChannelConnection;
    MediaChannelEdge: MediaChannelEdge;
    MediaChannel: MediaChannel;
    TokenStatus: TokenStatus;
    CatalogConnection: CatalogConnection;
    CatalogEdge: CatalogEdge;
    Catalog: Catalog;
    CatalogType: CatalogType;
    ProductConnection: ProductConnection;
    ProductEdge: ProductEdge;
    Product: Product;
    MarketingCampaignConnection: MarketingCampaignConnection;
    MarketingCampaignEdge: MarketingCampaignEdge;
    MarketingCampaign: MarketingCampaign;
    ResultResource: ResultResource;
    Vendor: Vendor;
    MarketingCampaignStatus: MarketingCampaignStatus;
    MarketingAdConnection: MarketingAdConnection;
    MarketingAdEdge: MarketingAdEdge;
    MarketingAd: MarketingAd;
    ResultConnection: ResultConnection;
    ResultEdge: ResultEdge;
    Result: Result;
    ResultAnalytics: ResultAnalytics;
    Float: Scalars['Float'];
    ResultResourceTypeEnum: ResultResourceTypeEnum;
    CampaignTemplateConnection: CampaignTemplateConnection;
    CampaignTemplateEdge: CampaignTemplateEdge;
    VendorConnection: VendorConnection;
    VendorEdge: VendorEdge;
    CampaignTemplatesFilterInput: CampaignTemplatesFilterInput;
    CatalogsFilterInput: CatalogsFilterInput;
    EntitlementsFilterInput: EntitlementsFilterInput;
    MarketingAdsFilterInput: MarketingAdsFilterInput;
    MarketingCampaignsFilterInput: MarketingCampaignsFilterInput;
    MarketplacesFilterInput: MarketplacesFilterInput;
    MediaChannelsFilterInput: MediaChannelsFilterInput;
    OrganizationsFilterInput: OrganizationsFilterInput;
    ProductsFilterInput: ProductsFilterInput;
    ResultsFilterInput: ResultsFilterInput;
    VendorsFilterInput: VendorsFilterInput;
    Mutation: {};
    CatalogCreateInput: CatalogCreateInput;
    CatalogImportInput: CatalogImportInput;
    Deletion: Deletion;
    CatalogUpdateInput: CatalogUpdateInput;
    EntitlementInput: EntitlementInput;
    EntitlementUpdateInput: EntitlementUpdateInput;
    MarketingCampaignInput: MarketingCampaignInput;
    MarketingCampaignUpdateInput: MarketingCampaignUpdateInput;
    MarketplaceInput: MarketplaceInput;
    MarketplaceUpdateInput: MarketplaceUpdateInput;
    MediaChannelCreateInput: MediaChannelCreateInput;
    MediaChannelImportInput: MediaChannelImportInput;
    MediaChannelUpdateInput: MediaChannelUpdateInput;
    OrganizationInput: OrganizationInput;
    OrganizationUpdateInput: OrganizationUpdateInput;
    ProductInput: ProductInput;
    ProductUpdateInput: ProductUpdateInput;
    UserLoginInput: UserLoginInput;
    Token: Token;
    UserUpdateInput: UserUpdateInput;
    RefreshTokenInput: RefreshTokenInput;
    VendorInput: VendorInput;
    VendorUpdateInput: VendorUpdateInput;
    AuthField: AuthField;
    AuthLocation: AuthLocation;
    AuthType: AuthType;
    CacheControlScope: CacheControlScope;
    Upload: Scalars['Upload'];
};

export type AuthDirectiveResolver<
    Result,
    Parent,
    ContextType = any,
    Args = {
        field?: Maybe<Maybe<AuthField>>;
        location?: Maybe<Maybe<AuthLocation>>;
        type?: Maybe<Maybe<AuthType>>;
        permissions?: Maybe<Maybe<Array<Maybe<AuthPermission>>>>;
    }
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type CacheControlDirectiveResolver<
    Result,
    Parent,
    ContextType = any,
    Args = {
        maxAge?: Maybe<Maybe<Scalars['Int']>>;
        scope?: Maybe<Maybe<CacheControlScope>>;
    }
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type CampaignTemplateResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['CampaignTemplate'] = ResolversParentTypes['CampaignTemplate']
> = {
    id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    creationDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    lastChangeDate?: Resolver<
        ResolversTypes['DateISO'],
        ParentType,
        ContextType
    >;
    name?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
    description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    platform?: Resolver<ResolversTypes['Platform'], ParentType, ContextType>;
    remoteId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    marketplace?: Resolver<
        ResolversTypes['Marketplace'],
        ParentType,
        ContextType
    >;
    marketingCampaigns?: Resolver<
        Maybe<ResolversTypes['MarketingCampaignConnection']>,
        ParentType,
        ContextType,
        CampaignTemplateMarketingCampaignsArgs
    >;
};

export type CampaignTemplateConnectionResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['CampaignTemplateConnection'] = ResolversParentTypes['CampaignTemplateConnection']
> = {
    edges?: Resolver<
        Maybe<Array<Maybe<ResolversTypes['CampaignTemplateEdge']>>>,
        ParentType,
        ContextType
    >;
    pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
};

export type CampaignTemplateEdgeResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['CampaignTemplateEdge'] = ResolversParentTypes['CampaignTemplateEdge']
> = {
    cursor?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    node?: Resolver<
        Maybe<ResolversTypes['CampaignTemplate']>,
        ParentType,
        ContextType
    >;
};

export type CatalogResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['Catalog'] = ResolversParentTypes['Catalog']
> = {
    id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    name?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
    catalogType?: Resolver<
        ResolversTypes['CatalogType'],
        ParentType,
        ContextType
    >;
    creationDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    lastChangeDate?: Resolver<
        ResolversTypes['DateISO'],
        ParentType,
        ContextType
    >;
    remoteId?: Resolver<
        Maybe<ResolversTypes['String']>,
        ParentType,
        ContextType
    >;
    systemStatus?: Resolver<
        ResolversTypes['SystemStatus'],
        ParentType,
        ContextType
    >;
    remoteState?: Resolver<
        ResolversTypes['JSONObject'],
        ParentType,
        ContextType
    >;
    dataFeedId?: Resolver<
        Maybe<ResolversTypes['String']>,
        ParentType,
        ContextType
    >;
    errors?: Resolver<
        Maybe<Array<ResolversTypes['JSONObject']>>,
        ParentType,
        ContextType
    >;
    mediaChannel?: Resolver<
        ResolversTypes['MediaChannel'],
        ParentType,
        ContextType
    >;
    products?: Resolver<
        Maybe<ResolversTypes['ProductConnection']>,
        ParentType,
        ContextType,
        CatalogProductsArgs
    >;
};

export type CatalogConnectionResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['CatalogConnection'] = ResolversParentTypes['CatalogConnection']
> = {
    edges?: Resolver<
        Maybe<Array<Maybe<ResolversTypes['CatalogEdge']>>>,
        ParentType,
        ContextType
    >;
    pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
};

export type CatalogEdgeResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['CatalogEdge'] = ResolversParentTypes['CatalogEdge']
> = {
    cursor?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    node?: Resolver<Maybe<ResolversTypes['Catalog']>, ParentType, ContextType>;
};

export interface DateIsoScalarConfig
    extends GraphQLScalarTypeConfig<ResolversTypes['DateISO'], any> {
    name: 'DateISO';
}

export type DeletionResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['Deletion'] = ResolversParentTypes['Deletion']
> = {
    id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type EntitlementResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['Entitlement'] = ResolversParentTypes['Entitlement']
> = {
    id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    creationDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    lastChangeDate?: Resolver<
        ResolversTypes['DateISO'],
        ParentType,
        ContextType
    >;
    user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
    type?: Resolver<
        ResolversTypes['EntitlementResourceTypeEnum'],
        ParentType,
        ContextType
    >;
    resource?: Resolver<
        ResolversTypes['EntitlementResource'],
        ParentType,
        ContextType
    >;
    permissions?: Resolver<
        Array<ResolversTypes['AuthPermission']>,
        ParentType,
        ContextType
    >;
};

export type EntitlementConnectionResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['EntitlementConnection'] = ResolversParentTypes['EntitlementConnection']
> = {
    edges?: Resolver<
        Maybe<Array<Maybe<ResolversTypes['EntitlementEdge']>>>,
        ParentType,
        ContextType
    >;
    pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
};

export type EntitlementEdgeResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['EntitlementEdge'] = ResolversParentTypes['EntitlementEdge']
> = {
    cursor?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    node?: Resolver<
        Maybe<ResolversTypes['Entitlement']>,
        ParentType,
        ContextType
    >;
};

export type EntitlementResourceResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['EntitlementResource'] = ResolversParentTypes['EntitlementResource']
> = {
    __resolveType: TypeResolveFn<
        'Marketplace' | 'Organization' | 'MediaChannel',
        ParentType,
        ContextType
    >;
    id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    name?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
    systemStatus?: Resolver<
        ResolversTypes['SystemStatus'],
        ParentType,
        ContextType
    >;
    creationDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    lastChangeDate?: Resolver<
        ResolversTypes['DateISO'],
        ParentType,
        ContextType
    >;
    errors?: Resolver<
        Maybe<Array<ResolversTypes['JSONObject']>>,
        ParentType,
        ContextType
    >;
};

export interface JsonObjectScalarConfig
    extends GraphQLScalarTypeConfig<ResolversTypes['JSONObject'], any> {
    name: 'JSONObject';
}

export type MarketingAdResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['MarketingAd'] = ResolversParentTypes['MarketingAd']
> = {
    id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    creationDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    lastChangeDate?: Resolver<
        ResolversTypes['DateISO'],
        ParentType,
        ContextType
    >;
    remoteId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    preview?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    results?: Resolver<
        Maybe<ResolversTypes['ResultConnection']>,
        ParentType,
        ContextType,
        MarketingAdResultsArgs
    >;
    marketingCampaign?: Resolver<
        ResolversTypes['MarketingCampaign'],
        ParentType,
        ContextType
    >;
    vendor?: Resolver<ResolversTypes['Vendor'], ParentType, ContextType>;
};

export type MarketingAdConnectionResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['MarketingAdConnection'] = ResolversParentTypes['MarketingAdConnection']
> = {
    edges?: Resolver<
        Maybe<Array<Maybe<ResolversTypes['MarketingAdEdge']>>>,
        ParentType,
        ContextType
    >;
    pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
};

export type MarketingAdEdgeResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['MarketingAdEdge'] = ResolversParentTypes['MarketingAdEdge']
> = {
    cursor?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    node?: Resolver<
        Maybe<ResolversTypes['MarketingAd']>,
        ParentType,
        ContextType
    >;
};

export type MarketingCampaignResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['MarketingCampaign'] = ResolversParentTypes['MarketingCampaign']
> = {
    id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    creationDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    lastChangeDate?: Resolver<
        ResolversTypes['DateISO'],
        ParentType,
        ContextType
    >;
    status?: Resolver<
        ResolversTypes['MarketingCampaignStatus'],
        ParentType,
        ContextType
    >;
    marketingAds?: Resolver<
        Maybe<ResolversTypes['MarketingAdConnection']>,
        ParentType,
        ContextType,
        MarketingCampaignMarketingAdsArgs
    >;
    products?: Resolver<
        Maybe<ResolversTypes['ProductConnection']>,
        ParentType,
        ContextType,
        MarketingCampaignProductsArgs
    >;
    vendor?: Resolver<ResolversTypes['Vendor'], ParentType, ContextType>;
    campaignTemplate?: Resolver<
        ResolversTypes['CampaignTemplate'],
        ParentType,
        ContextType
    >;
    mediaChannel?: Resolver<
        ResolversTypes['MediaChannel'],
        ParentType,
        ContextType
    >;
    results?: Resolver<
        Maybe<ResolversTypes['ResultConnection']>,
        ParentType,
        ContextType,
        MarketingCampaignResultsArgs
    >;
    creativeSpec?: Resolver<
        ResolversTypes['JSONObject'],
        ParentType,
        ContextType
    >;
    runTimeSpec?: Resolver<
        ResolversTypes['JSONObject'],
        ParentType,
        ContextType
    >;
    systemStatus?: Resolver<
        ResolversTypes['SystemStatus'],
        ParentType,
        ContextType
    >;
    errors?: Resolver<
        Maybe<Array<ResolversTypes['JSONObject']>>,
        ParentType,
        ContextType
    >;
};

export type MarketingCampaignConnectionResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['MarketingCampaignConnection'] = ResolversParentTypes['MarketingCampaignConnection']
> = {
    edges?: Resolver<
        Maybe<Array<Maybe<ResolversTypes['MarketingCampaignEdge']>>>,
        ParentType,
        ContextType
    >;
    pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
};

export type MarketingCampaignEdgeResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['MarketingCampaignEdge'] = ResolversParentTypes['MarketingCampaignEdge']
> = {
    cursor?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    node?: Resolver<
        Maybe<ResolversTypes['MarketingCampaign']>,
        ParentType,
        ContextType
    >;
};

export type MarketplaceResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['Marketplace'] = ResolversParentTypes['Marketplace']
> = {
    id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    creationDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    lastChangeDate?: Resolver<
        ResolversTypes['DateISO'],
        ParentType,
        ContextType
    >;
    name?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
    organization?: Resolver<
        ResolversTypes['Organization'],
        ParentType,
        ContextType
    >;
    mediaChannels?: Resolver<
        Maybe<ResolversTypes['MediaChannelConnection']>,
        ParentType,
        ContextType,
        MarketplaceMediaChannelsArgs
    >;
    campaignTemplates?: Resolver<
        Maybe<ResolversTypes['CampaignTemplateConnection']>,
        ParentType,
        ContextType,
        MarketplaceCampaignTemplatesArgs
    >;
    vendors?: Resolver<
        Maybe<ResolversTypes['VendorConnection']>,
        ParentType,
        ContextType,
        MarketplaceVendorsArgs
    >;
    systemStatus?: Resolver<
        ResolversTypes['SystemStatus'],
        ParentType,
        ContextType
    >;
    errors?: Resolver<
        Maybe<Array<ResolversTypes['JSONObject']>>,
        ParentType,
        ContextType
    >;
};

export type MarketplaceConnectionResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['MarketplaceConnection'] = ResolversParentTypes['MarketplaceConnection']
> = {
    edges?: Resolver<
        Maybe<Array<Maybe<ResolversTypes['MarketplaceEdge']>>>,
        ParentType,
        ContextType
    >;
    pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
};

export type MarketplaceEdgeResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['MarketplaceEdge'] = ResolversParentTypes['MarketplaceEdge']
> = {
    cursor?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    node?: Resolver<
        Maybe<ResolversTypes['Marketplace']>,
        ParentType,
        ContextType
    >;
};

export type MediaChannelResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['MediaChannel'] = ResolversParentTypes['MediaChannel']
> = {
    id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    creationDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    lastChangeDate?: Resolver<
        ResolversTypes['DateISO'],
        ParentType,
        ContextType
    >;
    name?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
    platform?: Resolver<ResolversTypes['Platform'], ParentType, ContextType>;
    remoteId?: Resolver<
        Maybe<ResolversTypes['String']>,
        ParentType,
        ContextType
    >;
    remoteState?: Resolver<
        ResolversTypes['JSONObject'],
        ParentType,
        ContextType
    >;
    currency?: Resolver<
        Maybe<ResolversTypes['NonEmptyString']>,
        ParentType,
        ContextType
    >;
    timezone?: Resolver<
        Maybe<ResolversTypes['NonEmptyString']>,
        ParentType,
        ContextType
    >;
    tokenStatus?: Resolver<
        ResolversTypes['TokenStatus'],
        ParentType,
        ContextType
    >;
    systemStatus?: Resolver<
        ResolversTypes['SystemStatus'],
        ParentType,
        ContextType
    >;
    errors?: Resolver<
        Maybe<Array<ResolversTypes['JSONObject']>>,
        ParentType,
        ContextType
    >;
    catalogs?: Resolver<
        ResolversTypes['CatalogConnection'],
        ParentType,
        ContextType,
        MediaChannelCatalogsArgs
    >;
    marketplace?: Resolver<
        ResolversTypes['Marketplace'],
        ParentType,
        ContextType
    >;
};

export type MediaChannelConnectionResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['MediaChannelConnection'] = ResolversParentTypes['MediaChannelConnection']
> = {
    edges?: Resolver<
        Maybe<Array<Maybe<ResolversTypes['MediaChannelEdge']>>>,
        ParentType,
        ContextType
    >;
    pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
};

export type MediaChannelEdgeResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['MediaChannelEdge'] = ResolversParentTypes['MediaChannelEdge']
> = {
    cursor?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    node?: Resolver<
        Maybe<ResolversTypes['MediaChannel']>,
        ParentType,
        ContextType
    >;
};

export type MutationResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = {
    createCatalog?: Resolver<
        Maybe<ResolversTypes['Catalog']>,
        ParentType,
        ContextType,
        RequireFields<MutationCreateCatalogArgs, 'input'>
    >;
    importCatalog?: Resolver<
        Maybe<ResolversTypes['Catalog']>,
        ParentType,
        ContextType,
        RequireFields<MutationImportCatalogArgs, 'input'>
    >;
    deleteCatalog?: Resolver<
        Maybe<ResolversTypes['Deletion']>,
        ParentType,
        ContextType,
        RequireFields<MutationDeleteCatalogArgs, 'id'>
    >;
    updateCatalog?: Resolver<
        Maybe<ResolversTypes['Catalog']>,
        ParentType,
        ContextType,
        RequireFields<MutationUpdateCatalogArgs, 'id' | 'input'>
    >;
    createEntitlement?: Resolver<
        Maybe<ResolversTypes['Entitlement']>,
        ParentType,
        ContextType,
        RequireFields<MutationCreateEntitlementArgs, 'input'>
    >;
    updateEntitlement?: Resolver<
        Maybe<ResolversTypes['Entitlement']>,
        ParentType,
        ContextType,
        RequireFields<MutationUpdateEntitlementArgs, 'id' | 'input'>
    >;
    deleteEntitlement?: Resolver<
        Maybe<ResolversTypes['Deletion']>,
        ParentType,
        ContextType,
        RequireFields<MutationDeleteEntitlementArgs, 'id'>
    >;
    createMarketingCampaign?: Resolver<
        Maybe<ResolversTypes['MarketingCampaign']>,
        ParentType,
        ContextType,
        RequireFields<MutationCreateMarketingCampaignArgs, 'input'>
    >;
    updateMarketingCampaign?: Resolver<
        Maybe<ResolversTypes['MarketingCampaign']>,
        ParentType,
        ContextType,
        RequireFields<MutationUpdateMarketingCampaignArgs, 'id' | 'input'>
    >;
    deleteMarketingCampaign?: Resolver<
        Maybe<ResolversTypes['Deletion']>,
        ParentType,
        ContextType,
        RequireFields<MutationDeleteMarketingCampaignArgs, 'id'>
    >;
    createMarketplace?: Resolver<
        Maybe<ResolversTypes['Marketplace']>,
        ParentType,
        ContextType,
        RequireFields<MutationCreateMarketplaceArgs, 'input'>
    >;
    updateMarketplace?: Resolver<
        Maybe<ResolversTypes['Marketplace']>,
        ParentType,
        ContextType,
        RequireFields<MutationUpdateMarketplaceArgs, 'id' | 'input'>
    >;
    deleteMarketplace?: Resolver<
        Maybe<ResolversTypes['Deletion']>,
        ParentType,
        ContextType,
        RequireFields<MutationDeleteMarketplaceArgs, 'id'>
    >;
    createMediaChannel?: Resolver<
        Maybe<ResolversTypes['MediaChannel']>,
        ParentType,
        ContextType,
        RequireFields<MutationCreateMediaChannelArgs, 'input'>
    >;
    importMediaChannel?: Resolver<
        Maybe<ResolversTypes['MediaChannel']>,
        ParentType,
        ContextType,
        RequireFields<MutationImportMediaChannelArgs, 'input'>
    >;
    updateMediaChannel?: Resolver<
        Maybe<ResolversTypes['MediaChannel']>,
        ParentType,
        ContextType,
        RequireFields<MutationUpdateMediaChannelArgs, 'id' | 'input'>
    >;
    deleteMediaChannel?: Resolver<
        Maybe<ResolversTypes['Deletion']>,
        ParentType,
        ContextType,
        RequireFields<MutationDeleteMediaChannelArgs, 'id'>
    >;
    createOrganization?: Resolver<
        Maybe<ResolversTypes['Organization']>,
        ParentType,
        ContextType,
        RequireFields<MutationCreateOrganizationArgs, 'input'>
    >;
    updateOrganization?: Resolver<
        Maybe<ResolversTypes['Organization']>,
        ParentType,
        ContextType,
        RequireFields<MutationUpdateOrganizationArgs, 'id' | 'input'>
    >;
    deleteOrganization?: Resolver<
        Maybe<ResolversTypes['Deletion']>,
        ParentType,
        ContextType,
        RequireFields<MutationDeleteOrganizationArgs, 'id'>
    >;
    createProduct?: Resolver<
        Maybe<ResolversTypes['Product']>,
        ParentType,
        ContextType,
        RequireFields<MutationCreateProductArgs, 'input'>
    >;
    updateProduct?: Resolver<
        Maybe<ResolversTypes['Product']>,
        ParentType,
        ContextType,
        RequireFields<MutationUpdateProductArgs, 'id' | 'input'>
    >;
    deleteProduct?: Resolver<
        Maybe<ResolversTypes['Deletion']>,
        ParentType,
        ContextType,
        RequireFields<MutationDeleteProductArgs, 'id'>
    >;
    login?: Resolver<
        Maybe<ResolversTypes['Token']>,
        ParentType,
        ContextType,
        RequireFields<MutationLoginArgs, 'input'>
    >;
    updateUser?: Resolver<
        Maybe<ResolversTypes['User']>,
        ParentType,
        ContextType,
        RequireFields<MutationUpdateUserArgs, 'input'>
    >;
    refreshLogin?: Resolver<
        Maybe<ResolversTypes['Token']>,
        ParentType,
        ContextType,
        RequireFields<MutationRefreshLoginArgs, 'input'>
    >;
    createVendor?: Resolver<
        Maybe<ResolversTypes['Vendor']>,
        ParentType,
        ContextType,
        RequireFields<MutationCreateVendorArgs, 'input'>
    >;
    updateVendor?: Resolver<
        Maybe<ResolversTypes['Vendor']>,
        ParentType,
        ContextType,
        RequireFields<MutationUpdateVendorArgs, 'id' | 'input'>
    >;
    deleteVendor?: Resolver<
        Maybe<ResolversTypes['Deletion']>,
        ParentType,
        ContextType,
        RequireFields<MutationDeleteVendorArgs, 'id'>
    >;
};

export interface NonEmptyStringScalarConfig
    extends GraphQLScalarTypeConfig<ResolversTypes['NonEmptyString'], any> {
    name: 'NonEmptyString';
}

export interface ObjectIdScalarConfig
    extends GraphQLScalarTypeConfig<ResolversTypes['ObjectId'], any> {
    name: 'ObjectId';
}

export type OrganizationResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['Organization'] = ResolversParentTypes['Organization']
> = {
    id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    creationDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    lastChangeDate?: Resolver<
        ResolversTypes['DateISO'],
        ParentType,
        ContextType
    >;
    users?: Resolver<
        Maybe<ResolversTypes['UserConnection']>,
        ParentType,
        ContextType,
        OrganizationUsersArgs
    >;
    marketplaces?: Resolver<
        Maybe<ResolversTypes['MarketplaceConnection']>,
        ParentType,
        ContextType,
        OrganizationMarketplacesArgs
    >;
    name?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
    tier?: Resolver<
        ResolversTypes['OrganizationTierEnum'],
        ParentType,
        ContextType
    >;
    systemStatus?: Resolver<
        ResolversTypes['SystemStatus'],
        ParentType,
        ContextType
    >;
    errors?: Resolver<
        Maybe<Array<ResolversTypes['JSONObject']>>,
        ParentType,
        ContextType
    >;
};

export type OrganizationConnectionResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['OrganizationConnection'] = ResolversParentTypes['OrganizationConnection']
> = {
    edges?: Resolver<
        Maybe<Array<Maybe<ResolversTypes['OrganizationEdge']>>>,
        ParentType,
        ContextType
    >;
    pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
};

export type OrganizationEdgeResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['OrganizationEdge'] = ResolversParentTypes['OrganizationEdge']
> = {
    cursor?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    node?: Resolver<
        Maybe<ResolversTypes['Organization']>,
        ParentType,
        ContextType
    >;
};

export type PageInfoResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']
> = {
    hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
    startCursor?: Resolver<
        Maybe<ResolversTypes['String']>,
        ParentType,
        ContextType
    >;
    endCursor?: Resolver<
        Maybe<ResolversTypes['String']>,
        ParentType,
        ContextType
    >;
};

export type ProductResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']
> = {
    id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    creationDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    lastChangeDate?: Resolver<
        ResolversTypes['DateISO'],
        ParentType,
        ContextType
    >;
    name?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
    sku?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
    remoteState?: Resolver<
        Maybe<ResolversTypes['JSONObject']>,
        ParentType,
        ContextType
    >;
    marketingCampaigns?: Resolver<
        Maybe<ResolversTypes['MarketingCampaignConnection']>,
        ParentType,
        ContextType,
        ProductMarketingCampaignsArgs
    >;
    catalog?: Resolver<ResolversTypes['Catalog'], ParentType, ContextType>;
    metadata?: Resolver<ResolversTypes['JSONObject'], ParentType, ContextType>;
    vendor?: Resolver<ResolversTypes['Vendor'], ParentType, ContextType>;
    systemStatus?: Resolver<
        ResolversTypes['SystemStatus'],
        ParentType,
        ContextType
    >;
    errors?: Resolver<
        Maybe<Array<ResolversTypes['JSONObject']>>,
        ParentType,
        ContextType
    >;
    warnings?: Resolver<
        Maybe<Array<ResolversTypes['JSONObject']>>,
        ParentType,
        ContextType
    >;
};

export type ProductConnectionResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['ProductConnection'] = ResolversParentTypes['ProductConnection']
> = {
    edges?: Resolver<
        Maybe<Array<Maybe<ResolversTypes['ProductEdge']>>>,
        ParentType,
        ContextType
    >;
    pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
};

export type ProductEdgeResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['ProductEdge'] = ResolversParentTypes['ProductEdge']
> = {
    cursor?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    node?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType>;
};

export type QueryResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = {
    campaignTemplate?: Resolver<
        Maybe<ResolversTypes['CampaignTemplate']>,
        ParentType,
        ContextType,
        RequireFields<QueryCampaignTemplateArgs, 'id'>
    >;
    campaignTemplates?: Resolver<
        Maybe<ResolversTypes['CampaignTemplateConnection']>,
        ParentType,
        ContextType,
        QueryCampaignTemplatesArgs
    >;
    catalog?: Resolver<
        Maybe<ResolversTypes['Catalog']>,
        ParentType,
        ContextType,
        RequireFields<QueryCatalogArgs, 'id'>
    >;
    catalogs?: Resolver<
        Maybe<ResolversTypes['CatalogConnection']>,
        ParentType,
        ContextType,
        QueryCatalogsArgs
    >;
    entitlement?: Resolver<
        Maybe<ResolversTypes['Entitlement']>,
        ParentType,
        ContextType,
        RequireFields<QueryEntitlementArgs, 'id'>
    >;
    entitlements?: Resolver<
        Maybe<ResolversTypes['EntitlementConnection']>,
        ParentType,
        ContextType,
        QueryEntitlementsArgs
    >;
    marketingAd?: Resolver<
        Maybe<ResolversTypes['MarketingAd']>,
        ParentType,
        ContextType,
        RequireFields<QueryMarketingAdArgs, 'id'>
    >;
    marketingAds?: Resolver<
        Maybe<ResolversTypes['MarketingAdConnection']>,
        ParentType,
        ContextType,
        QueryMarketingAdsArgs
    >;
    marketingCampaign?: Resolver<
        Maybe<ResolversTypes['MarketingCampaign']>,
        ParentType,
        ContextType,
        RequireFields<QueryMarketingCampaignArgs, 'id'>
    >;
    marketingCampaigns?: Resolver<
        Maybe<ResolversTypes['MarketingCampaignConnection']>,
        ParentType,
        ContextType,
        QueryMarketingCampaignsArgs
    >;
    marketplace?: Resolver<
        Maybe<ResolversTypes['Marketplace']>,
        ParentType,
        ContextType,
        RequireFields<QueryMarketplaceArgs, 'id'>
    >;
    marketplaces?: Resolver<
        Maybe<ResolversTypes['MarketplaceConnection']>,
        ParentType,
        ContextType,
        QueryMarketplacesArgs
    >;
    mediaChannel?: Resolver<
        Maybe<ResolversTypes['MediaChannel']>,
        ParentType,
        ContextType,
        RequireFields<QueryMediaChannelArgs, 'id'>
    >;
    mediaChannels?: Resolver<
        Maybe<ResolversTypes['MediaChannelConnection']>,
        ParentType,
        ContextType,
        QueryMediaChannelsArgs
    >;
    organization?: Resolver<
        Maybe<ResolversTypes['Organization']>,
        ParentType,
        ContextType,
        RequireFields<QueryOrganizationArgs, 'id'>
    >;
    organizations?: Resolver<
        Maybe<ResolversTypes['OrganizationConnection']>,
        ParentType,
        ContextType,
        QueryOrganizationsArgs
    >;
    product?: Resolver<
        Maybe<ResolversTypes['Product']>,
        ParentType,
        ContextType,
        RequireFields<QueryProductArgs, 'id'>
    >;
    products?: Resolver<
        Maybe<ResolversTypes['ProductConnection']>,
        ParentType,
        ContextType,
        QueryProductsArgs
    >;
    result?: Resolver<
        Maybe<ResolversTypes['Result']>,
        ParentType,
        ContextType,
        RequireFields<QueryResultArgs, 'id'>
    >;
    results?: Resolver<
        Maybe<ResolversTypes['ResultConnection']>,
        ParentType,
        ContextType,
        QueryResultsArgs
    >;
    me?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
    vendor?: Resolver<
        Maybe<ResolversTypes['Vendor']>,
        ParentType,
        ContextType,
        RequireFields<QueryVendorArgs, 'id'>
    >;
    vendors?: Resolver<
        Maybe<ResolversTypes['VendorConnection']>,
        ParentType,
        ContextType,
        QueryVendorsArgs
    >;
};

export type ResultResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['Result'] = ResolversParentTypes['Result']
> = {
    id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    creationDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    lastChangeDate?: Resolver<
        ResolversTypes['DateISO'],
        ParentType,
        ContextType
    >;
    date?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    analytics?: Resolver<
        ResolversTypes['ResultAnalytics'],
        ParentType,
        ContextType
    >;
    type?: Resolver<
        ResolversTypes['ResultResourceTypeEnum'],
        ParentType,
        ContextType
    >;
    resource?: Resolver<
        ResolversTypes['ResultResource'],
        ParentType,
        ContextType
    >;
    vendor?: Resolver<ResolversTypes['Vendor'], ParentType, ContextType>;
};

export type ResultAnalyticsResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['ResultAnalytics'] = ResolversParentTypes['ResultAnalytics']
> = {
    results?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    impressions?: Resolver<
        Maybe<ResolversTypes['Int']>,
        ParentType,
        ContextType
    >;
    clicks?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    spend?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
};

export type ResultConnectionResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['ResultConnection'] = ResolversParentTypes['ResultConnection']
> = {
    edges?: Resolver<
        Maybe<Array<Maybe<ResolversTypes['ResultEdge']>>>,
        ParentType,
        ContextType
    >;
    pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
};

export type ResultEdgeResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['ResultEdge'] = ResolversParentTypes['ResultEdge']
> = {
    cursor?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    node?: Resolver<Maybe<ResolversTypes['Result']>, ParentType, ContextType>;
};

export type ResultResourceResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['ResultResource'] = ResolversParentTypes['ResultResource']
> = {
    __resolveType: TypeResolveFn<
        'MarketingCampaign' | 'MarketingAd',
        ParentType,
        ContextType
    >;
    id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    creationDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    lastChangeDate?: Resolver<
        ResolversTypes['DateISO'],
        ParentType,
        ContextType
    >;
    vendor?: Resolver<ResolversTypes['Vendor'], ParentType, ContextType>;
};

export type TokenResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['Token'] = ResolversParentTypes['Token']
> = {
    token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    refreshToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    expiryDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
};

export interface UploadScalarConfig
    extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
    name: 'Upload';
}

export type UserResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']
> = {
    id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    creationDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    lastChangeDate?: Resolver<
        ResolversTypes['DateISO'],
        ParentType,
        ContextType
    >;
    email?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
    firstName?: Resolver<
        Maybe<ResolversTypes['NonEmptyString']>,
        ParentType,
        ContextType
    >;
    lastName?: Resolver<
        Maybe<ResolversTypes['NonEmptyString']>,
        ParentType,
        ContextType
    >;
    organizations?: Resolver<
        Maybe<ResolversTypes['OrganizationConnection']>,
        ParentType,
        ContextType,
        UserOrganizationsArgs
    >;
    entitlements?: Resolver<
        Maybe<ResolversTypes['EntitlementConnection']>,
        ParentType,
        ContextType,
        UserEntitlementsArgs
    >;
};

export type UserConnectionResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['UserConnection'] = ResolversParentTypes['UserConnection']
> = {
    edges?: Resolver<
        Maybe<Array<Maybe<ResolversTypes['UserEdge']>>>,
        ParentType,
        ContextType
    >;
    pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
};

export type UserEdgeResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['UserEdge'] = ResolversParentTypes['UserEdge']
> = {
    cursor?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    node?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
};

export type VendorResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['Vendor'] = ResolversParentTypes['Vendor']
> = {
    id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    creationDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    lastChangeDate?: Resolver<
        ResolversTypes['DateISO'],
        ParentType,
        ContextType
    >;
    name?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
    marketplace?: Resolver<
        ResolversTypes['Marketplace'],
        ParentType,
        ContextType
    >;
    products?: Resolver<
        Maybe<ResolversTypes['ProductConnection']>,
        ParentType,
        ContextType,
        VendorProductsArgs
    >;
    systemStatus?: Resolver<
        ResolversTypes['SystemStatus'],
        ParentType,
        ContextType
    >;
    errors?: Resolver<
        Maybe<Array<ResolversTypes['JSONObject']>>,
        ParentType,
        ContextType
    >;
};

export type VendorConnectionResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['VendorConnection'] = ResolversParentTypes['VendorConnection']
> = {
    edges?: Resolver<
        Maybe<Array<Maybe<ResolversTypes['VendorEdge']>>>,
        ParentType,
        ContextType
    >;
    pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
};

export type VendorEdgeResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['VendorEdge'] = ResolversParentTypes['VendorEdge']
> = {
    cursor?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    node?: Resolver<Maybe<ResolversTypes['Vendor']>, ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
    CampaignTemplate?: CampaignTemplateResolvers<ContextType>;
    CampaignTemplateConnection?: CampaignTemplateConnectionResolvers<
        ContextType
    >;
    CampaignTemplateEdge?: CampaignTemplateEdgeResolvers<ContextType>;
    Catalog?: CatalogResolvers<ContextType>;
    CatalogConnection?: CatalogConnectionResolvers<ContextType>;
    CatalogEdge?: CatalogEdgeResolvers<ContextType>;
    DateISO?: GraphQLScalarType;
    Deletion?: DeletionResolvers<ContextType>;
    Entitlement?: EntitlementResolvers<ContextType>;
    EntitlementConnection?: EntitlementConnectionResolvers<ContextType>;
    EntitlementEdge?: EntitlementEdgeResolvers<ContextType>;
    EntitlementResource?: EntitlementResourceResolvers;
    JSONObject?: GraphQLScalarType;
    MarketingAd?: MarketingAdResolvers<ContextType>;
    MarketingAdConnection?: MarketingAdConnectionResolvers<ContextType>;
    MarketingAdEdge?: MarketingAdEdgeResolvers<ContextType>;
    MarketingCampaign?: MarketingCampaignResolvers<ContextType>;
    MarketingCampaignConnection?: MarketingCampaignConnectionResolvers<
        ContextType
    >;
    MarketingCampaignEdge?: MarketingCampaignEdgeResolvers<ContextType>;
    Marketplace?: MarketplaceResolvers<ContextType>;
    MarketplaceConnection?: MarketplaceConnectionResolvers<ContextType>;
    MarketplaceEdge?: MarketplaceEdgeResolvers<ContextType>;
    MediaChannel?: MediaChannelResolvers<ContextType>;
    MediaChannelConnection?: MediaChannelConnectionResolvers<ContextType>;
    MediaChannelEdge?: MediaChannelEdgeResolvers<ContextType>;
    Mutation?: MutationResolvers<ContextType>;
    NonEmptyString?: GraphQLScalarType;
    ObjectId?: GraphQLScalarType;
    Organization?: OrganizationResolvers<ContextType>;
    OrganizationConnection?: OrganizationConnectionResolvers<ContextType>;
    OrganizationEdge?: OrganizationEdgeResolvers<ContextType>;
    PageInfo?: PageInfoResolvers<ContextType>;
    Product?: ProductResolvers<ContextType>;
    ProductConnection?: ProductConnectionResolvers<ContextType>;
    ProductEdge?: ProductEdgeResolvers<ContextType>;
    Query?: QueryResolvers<ContextType>;
    Result?: ResultResolvers<ContextType>;
    ResultAnalytics?: ResultAnalyticsResolvers<ContextType>;
    ResultConnection?: ResultConnectionResolvers<ContextType>;
    ResultEdge?: ResultEdgeResolvers<ContextType>;
    ResultResource?: ResultResourceResolvers;
    Token?: TokenResolvers<ContextType>;
    Upload?: GraphQLScalarType;
    User?: UserResolvers<ContextType>;
    UserConnection?: UserConnectionResolvers<ContextType>;
    UserEdge?: UserEdgeResolvers<ContextType>;
    Vendor?: VendorResolvers<ContextType>;
    VendorConnection?: VendorConnectionResolvers<ContextType>;
    VendorEdge?: VendorEdgeResolvers<ContextType>;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
export type DirectiveResolvers<ContextType = any> = {
    auth?: AuthDirectiveResolver<any, any, ContextType>;
    cacheControl?: CacheControlDirectiveResolver<any, any, ContextType>;
};

/**
 * @deprecated
 * Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
 */
export type IDirectiveResolvers<ContextType = any> = DirectiveResolvers<
    ContextType
>;
