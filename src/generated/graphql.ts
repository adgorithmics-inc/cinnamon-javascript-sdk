import {
    GraphQLResolveInfo,
    GraphQLScalarType,
    GraphQLScalarTypeConfig,
} from 'graphql';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
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
    /** String must contain at least one character */
    NonEmptyString: any;
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
    Product = 'PRODUCT',
}

export enum CacheControlScope {
    Public = 'PUBLIC',
    Private = 'PRIVATE',
}

export type CampaignTemplate = {
    id: Scalars['ID'];
    creationDate: Scalars['String'];
    lastChangeDate: Scalars['String'];
    name: Scalars['NonEmptyString'];
    description: Scalars['String'];
    platform: Platform;
    remoteId: Scalars['String'];
    marketplace: Marketplace;
    marketingCampaigns?: Maybe<MarketingCampaignConnection>;
};

export type CampaignTemplateMarketingCampaignsArgs = {
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
};

export type CampaignTemplateConnection = {
    edges?: Maybe<Array<Maybe<CampaignTemplateEdge>>>;
    pageInfo: PageInfo;
};

export type CampaignTemplateEdge = {
    cursor: Scalars['ID'];
    node?: Maybe<CampaignTemplate>;
};

export type Catalog = {
    id: Scalars['ID'];
    creationDate: Scalars['String'];
    lastChangeDate: Scalars['String'];
    name: Scalars['NonEmptyString'];
    mediaChannel: MediaChannel;
    remoteId?: Maybe<Scalars['String']>;
    products?: Maybe<ProductConnection>;
};

export type CatalogProductsArgs = {
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
};

export type CatalogConnection = {
    edges?: Maybe<Array<Maybe<CatalogEdge>>>;
    pageInfo: PageInfo;
};

export type CatalogEdge = {
    cursor: Scalars['ID'];
    node?: Maybe<Catalog>;
};

export type CatalogInput = {
    name: Scalars['NonEmptyString'];
    mediaChannelId: Scalars['ID'];
    remoteId?: Maybe<Scalars['String']>;
};

export type CatalogUpdateInput = {
    name?: Maybe<Scalars['NonEmptyString']>;
};

export type Deletion = {
    id: Scalars['String'];
};

export type Entitlement = {
    id: Scalars['ID'];
    creationDate: Scalars['String'];
    lastChangeDate: Scalars['String'];
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
    cursor: Scalars['ID'];
    node?: Maybe<Entitlement>;
};

export type EntitlementInput = {
    userId: Scalars['ID'];
    resourceId: Scalars['ID'];
    permissions: Array<AuthPermission>;
};

export type EntitlementResource = Marketplace | Organization | MediaChannel;

export enum EntitlementResourceTypeEnum {
    Marketplace = 'Marketplace',
    Organization = 'Organization',
    MediaChannel = 'MediaChannel',
}

export type EntitlementUpdateInput = {
    permissions: Array<AuthPermission>;
};

export type MarketingAd = {
    id: Scalars['ID'];
    creationDate: Scalars['String'];
    lastChangeDate: Scalars['String'];
    remoteId: Scalars['String'];
    preview: Scalars['String'];
    results?: Maybe<ResultConnection>;
    marketingCampaign: MarketingCampaign;
    vendor: Vendor;
};

export type MarketingAdResultsArgs = {
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['ID']>;
};

export type MarketingAdConnection = {
    edges?: Maybe<Array<Maybe<MarketingAdEdge>>>;
    pageInfo: PageInfo;
};

export type MarketingAdEdge = {
    cursor: Scalars['ID'];
    node?: Maybe<MarketingAd>;
};

export type MarketingCampaign = {
    id: Scalars['ID'];
    creationDate: Scalars['String'];
    lastChangeDate: Scalars['String'];
    status: MarketingCampaignStatus;
    marketingAds?: Maybe<MarketingAdConnection>;
    products?: Maybe<ProductConnection>;
    vendor: Vendor;
    campaignTemplate: CampaignTemplate;
    mediaChannel: MediaChannel;
    results?: Maybe<ResultConnection>;
    creativeSpec: Scalars['JSONObject'];
    runTimeSpec: Scalars['JSONObject'];
};

export type MarketingCampaignMarketingAdsArgs = {
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['ID']>;
};

export type MarketingCampaignProductsArgs = {
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['ID']>;
};

export type MarketingCampaignResultsArgs = {
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['ID']>;
};

export type MarketingCampaignConnection = {
    edges?: Maybe<Array<Maybe<MarketingCampaignEdge>>>;
    pageInfo: PageInfo;
};

export type MarketingCampaignEdge = {
    cursor: Scalars['ID'];
    node?: Maybe<MarketingCampaign>;
};

export type MarketingCampaignInput = {
    campaignTemplateId: Scalars['ID'];
    creativeSpec: Scalars['JSONObject'];
    runTimeSpec: Scalars['JSONObject'];
    productIds?: Maybe<Array<Scalars['ID']>>;
    status?: Maybe<MarketingCampaignStatus>;
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

export type Marketplace = {
    id: Scalars['ID'];
    creationDate: Scalars['String'];
    lastChangeDate: Scalars['String'];
    name: Scalars['NonEmptyString'];
    organization: Organization;
    mediaChannels?: Maybe<MediaChannelConnection>;
    campaignTemplates?: Maybe<CampaignTemplateConnection>;
    vendors?: Maybe<VendorConnection>;
};

export type MarketplaceMediaChannelsArgs = {
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['ID']>;
};

export type MarketplaceCampaignTemplatesArgs = {
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['ID']>;
};

export type MarketplaceVendorsArgs = {
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['ID']>;
};

export type MarketplaceConnection = {
    edges?: Maybe<Array<Maybe<MarketplaceEdge>>>;
    pageInfo: PageInfo;
};

export type MarketplaceEdge = {
    cursor: Scalars['ID'];
    node?: Maybe<Marketplace>;
};

export type MarketplaceInput = {
    name: Scalars['NonEmptyString'];
    organizationId: Scalars['ID'];
};

export type MarketplaceUpdateInput = {
    name?: Maybe<Scalars['NonEmptyString']>;
};

export type MediaChannel = {
    id: Scalars['ID'];
    creationDate: Scalars['String'];
    lastChangeDate: Scalars['String'];
    name: Scalars['NonEmptyString'];
    platform: Platform;
    remoteId: Scalars['String'];
    catalogs: CatalogConnection;
    marketplace: Marketplace;
};

export type MediaChannelConnection = {
    edges?: Maybe<Array<Maybe<MediaChannelEdge>>>;
    pageInfo: PageInfo;
};

export type MediaChannelEdge = {
    cursor: Scalars['ID'];
    node?: Maybe<MediaChannel>;
};

export type MediaChannelInput = {
    name: Scalars['NonEmptyString'];
    marketplaceId: Scalars['ID'];
    platform: Platform;
    remoteId: Scalars['String'];
};

export type MediaChannelUpdateInput = {
    name?: Maybe<Scalars['NonEmptyString']>;
    platform?: Maybe<Platform>;
};

export type Mutation = {
    createCatalog?: Maybe<Catalog>;
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
    updateMediaChannel?: Maybe<MediaChannel>;
    deleteMediaChannel?: Maybe<Deletion>;
    createOrganization?: Maybe<Organization>;
    updateOrganization?: Maybe<Organization>;
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
    input: CatalogInput;
};

export type MutationDeleteCatalogArgs = {
    id: Scalars['ID'];
};

export type MutationUpdateCatalogArgs = {
    id: Scalars['ID'];
    input: CatalogUpdateInput;
};

export type MutationCreateEntitlementArgs = {
    input: EntitlementInput;
};

export type MutationUpdateEntitlementArgs = {
    id: Scalars['ID'];
    input: EntitlementUpdateInput;
};

export type MutationDeleteEntitlementArgs = {
    id: Scalars['ID'];
};

export type MutationCreateMarketingCampaignArgs = {
    input: MarketingCampaignInput;
};

export type MutationUpdateMarketingCampaignArgs = {
    id: Scalars['ID'];
    input: MarketingCampaignUpdateInput;
};

export type MutationDeleteMarketingCampaignArgs = {
    id: Scalars['ID'];
};

export type MutationCreateMarketplaceArgs = {
    input: MarketplaceInput;
};

export type MutationUpdateMarketplaceArgs = {
    id: Scalars['ID'];
    input: MarketplaceUpdateInput;
};

export type MutationDeleteMarketplaceArgs = {
    id: Scalars['ID'];
};

export type MutationCreateMediaChannelArgs = {
    input: MediaChannelInput;
};

export type MutationUpdateMediaChannelArgs = {
    id: Scalars['ID'];
    input: MediaChannelUpdateInput;
};

export type MutationDeleteMediaChannelArgs = {
    id: Scalars['ID'];
};

export type MutationCreateOrganizationArgs = {
    input: OrganizationInput;
};

export type MutationUpdateOrganizationArgs = {
    id: Scalars['ID'];
    input: OrganizationUpdateInput;
};

export type MutationCreateProductArgs = {
    input: ProductInput;
};

export type MutationUpdateProductArgs = {
    id: Scalars['ID'];
    input: ProductUpdateInput;
};

export type MutationDeleteProductArgs = {
    id: Scalars['ID'];
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
    id: Scalars['ID'];
    input: VendorUpdateInput;
};

export type MutationDeleteVendorArgs = {
    id: Scalars['ID'];
};

export type Organization = {
    id: Scalars['ID'];
    creationDate: Scalars['String'];
    lastChangeDate: Scalars['String'];
    users?: Maybe<UserConnection>;
    marketplaces?: Maybe<MarketplaceConnection>;
    name: Scalars['NonEmptyString'];
    tier: OrganizationTierEnum;
};

export type OrganizationUsersArgs = {
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['ID']>;
};

export type OrganizationMarketplacesArgs = {
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['ID']>;
};

export type OrganizationConnection = {
    edges?: Maybe<Array<Maybe<OrganizationEdge>>>;
    pageInfo: PageInfo;
};

export type OrganizationEdge = {
    cursor: Scalars['ID'];
    node?: Maybe<Organization>;
};

export type OrganizationInput = {
    name: Scalars['NonEmptyString'];
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
    id: Scalars['ID'];
    creationDate: Scalars['String'];
    lastChangeDate: Scalars['String'];
    name: Scalars['NonEmptyString'];
    sku: Scalars['String'];
    remoteState: Scalars['JSONObject'];
    marketingCampaigns?: Maybe<MarketingCampaignConnection>;
    catalog: Catalog;
    metadata: Scalars['JSONObject'];
    vendor: Vendor;
};

export type ProductMarketingCampaignsArgs = {
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['ID']>;
};

export type ProductConnection = {
    edges?: Maybe<Array<Maybe<ProductEdge>>>;
    pageInfo: PageInfo;
};

export type ProductEdge = {
    cursor: Scalars['ID'];
    node?: Maybe<Product>;
};

export type ProductInput = {
    name: Scalars['NonEmptyString'];
    sku: Scalars['String'];
    remoteState: Scalars['JSONObject'];
    vendorId: Scalars['ID'];
    catalogId: Scalars['ID'];
    metadata?: Maybe<Scalars['JSONObject']>;
};

export type ProductUpdateInput = {
    name?: Maybe<Scalars['NonEmptyString']>;
    sku?: Maybe<Scalars['String']>;
    remoteState?: Maybe<Scalars['JSONObject']>;
    metadata?: Maybe<Scalars['JSONObject']>;
};

export type Query = {
    campaignTemplate?: Maybe<CampaignTemplate>;
    campaignTemplates?: Maybe<CampaignTemplateConnection>;
    catalog?: Maybe<Catalog>;
    entitlement?: Maybe<Entitlement>;
    marketingAd?: Maybe<MarketingAd>;
    marketingCampaign?: Maybe<MarketingCampaign>;
    marketplace?: Maybe<Marketplace>;
    mediaChannel?: Maybe<MediaChannel>;
    organization?: Maybe<Organization>;
    product?: Maybe<Product>;
    result?: Maybe<Result>;
    me?: Maybe<User>;
    vendor?: Maybe<Vendor>;
};

export type QueryCampaignTemplateArgs = {
    id: Scalars['ID'];
};

export type QueryCampaignTemplatesArgs = {
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['ID']>;
};

export type QueryCatalogArgs = {
    id: Scalars['ID'];
};

export type QueryEntitlementArgs = {
    id: Scalars['ID'];
};

export type QueryMarketingAdArgs = {
    id: Scalars['ID'];
};

export type QueryMarketingCampaignArgs = {
    id: Scalars['ID'];
};

export type QueryMarketplaceArgs = {
    id: Scalars['ID'];
};

export type QueryMediaChannelArgs = {
    id: Scalars['ID'];
};

export type QueryOrganizationArgs = {
    id: Scalars['ID'];
};

export type QueryProductArgs = {
    id: Scalars['ID'];
};

export type QueryResultArgs = {
    id: Scalars['ID'];
};

export type QueryVendorArgs = {
    id: Scalars['ID'];
};

export type RefreshTokenInput = {
    refreshToken: Scalars['String'];
};

export type Result = {
    id: Scalars['ID'];
    creationDate: Scalars['String'];
    lastChangeDate: Scalars['String'];
    date: Scalars['String'];
    impressions: Array<Scalars['String']>;
    results: Array<Scalars['String']>;
    type: ResultResourceTypeEnum;
    resource: ResultResource;
    vendor: Vendor;
};

export type ResultConnection = {
    edges?: Maybe<Array<Maybe<ResultEdge>>>;
    pageInfo: PageInfo;
};

export type ResultEdge = {
    cursor: Scalars['ID'];
    node?: Maybe<Result>;
};

export type ResultResource = MarketingAd | MarketingCampaign;

export enum ResultResourceTypeEnum {
    MarketingAd = 'MarketingAd',
    MarketingCampaign = 'MarketingCampaign',
}

export type Token = {
    token: Scalars['String'];
    refreshToken: Scalars['String'];
    expiryDate: Scalars['String'];
    user: User;
};

export type User = {
    id: Scalars['ID'];
    creationDate: Scalars['String'];
    lastChangeDate: Scalars['String'];
    email: Scalars['NonEmptyString'];
    firstName?: Maybe<Scalars['NonEmptyString']>;
    lastName?: Maybe<Scalars['NonEmptyString']>;
    organizations?: Maybe<OrganizationConnection>;
    entitlements?: Maybe<EntitlementConnection>;
};

export type UserOrganizationsArgs = {
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['ID']>;
};

export type UserEntitlementsArgs = {
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['ID']>;
};

export type UserConnection = {
    edges?: Maybe<Array<Maybe<UserEdge>>>;
    pageInfo: PageInfo;
};

export type UserEdge = {
    cursor: Scalars['ID'];
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
    id: Scalars['ID'];
    creationDate: Scalars['String'];
    lastChangeDate: Scalars['String'];
    name: Scalars['NonEmptyString'];
    marketplace: Marketplace;
    products?: Maybe<ProductConnection>;
};

export type VendorProductsArgs = {
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['ID']>;
};

export type VendorConnection = {
    edges?: Maybe<Array<Maybe<VendorEdge>>>;
    pageInfo: PageInfo;
};

export type VendorEdge = {
    cursor: Scalars['ID'];
    node?: Maybe<Vendor>;
};

export type VendorInput = {
    name: Scalars['NonEmptyString'];
    marketplaceId: Scalars['ID'];
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
    ID: ResolverTypeWrapper<Scalars['ID']>;
    CampaignTemplate: ResolverTypeWrapper<CampaignTemplate>;
    String: ResolverTypeWrapper<Scalars['String']>;
    NonEmptyString: ResolverTypeWrapper<Scalars['NonEmptyString']>;
    Platform: Platform;
    Marketplace: ResolverTypeWrapper<Marketplace>;
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
    Entitlement: ResolverTypeWrapper<
        Omit<Entitlement, 'resource'> & {
            resource: ResolversTypes['EntitlementResource'];
        }
    >;
    EntitlementResourceTypeEnum: EntitlementResourceTypeEnum;
    EntitlementResource:
        | ResolversTypes['Marketplace']
        | ResolversTypes['Organization']
        | ResolversTypes['MediaChannel'];
    MediaChannel: ResolverTypeWrapper<MediaChannel>;
    CatalogConnection: ResolverTypeWrapper<CatalogConnection>;
    CatalogEdge: ResolverTypeWrapper<CatalogEdge>;
    Catalog: ResolverTypeWrapper<Catalog>;
    ProductConnection: ResolverTypeWrapper<ProductConnection>;
    ProductEdge: ResolverTypeWrapper<ProductEdge>;
    Product: ResolverTypeWrapper<Product>;
    JSONObject: ResolverTypeWrapper<Scalars['JSONObject']>;
    MarketingCampaignConnection: ResolverTypeWrapper<
        MarketingCampaignConnection
    >;
    MarketingCampaignEdge: ResolverTypeWrapper<MarketingCampaignEdge>;
    MarketingCampaign: ResolverTypeWrapper<MarketingCampaign>;
    MarketingCampaignStatus: MarketingCampaignStatus;
    MarketingAdConnection: ResolverTypeWrapper<MarketingAdConnection>;
    MarketingAdEdge: ResolverTypeWrapper<MarketingAdEdge>;
    MarketingAd: ResolverTypeWrapper<MarketingAd>;
    ResultConnection: ResolverTypeWrapper<ResultConnection>;
    ResultEdge: ResolverTypeWrapper<ResultEdge>;
    Result: ResolverTypeWrapper<
        Omit<Result, 'resource'> & {
            resource: ResolversTypes['ResultResource'];
        }
    >;
    ResultResourceTypeEnum: ResultResourceTypeEnum;
    ResultResource:
        | ResolversTypes['MarketingAd']
        | ResolversTypes['MarketingCampaign'];
    Vendor: ResolverTypeWrapper<Vendor>;
    AuthPermission: AuthPermission;
    MarketplaceConnection: ResolverTypeWrapper<MarketplaceConnection>;
    MarketplaceEdge: ResolverTypeWrapper<MarketplaceEdge>;
    OrganizationTierEnum: OrganizationTierEnum;
    MediaChannelConnection: ResolverTypeWrapper<MediaChannelConnection>;
    MediaChannelEdge: ResolverTypeWrapper<MediaChannelEdge>;
    CampaignTemplateConnection: ResolverTypeWrapper<CampaignTemplateConnection>;
    CampaignTemplateEdge: ResolverTypeWrapper<CampaignTemplateEdge>;
    VendorConnection: ResolverTypeWrapper<VendorConnection>;
    VendorEdge: ResolverTypeWrapper<VendorEdge>;
    Mutation: ResolverTypeWrapper<{}>;
    CatalogInput: CatalogInput;
    Deletion: ResolverTypeWrapper<Deletion>;
    CatalogUpdateInput: CatalogUpdateInput;
    EntitlementInput: EntitlementInput;
    EntitlementUpdateInput: EntitlementUpdateInput;
    MarketingCampaignInput: MarketingCampaignInput;
    MarketingCampaignUpdateInput: MarketingCampaignUpdateInput;
    MarketplaceInput: MarketplaceInput;
    MarketplaceUpdateInput: MarketplaceUpdateInput;
    MediaChannelInput: MediaChannelInput;
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
    ID: Scalars['ID'];
    CampaignTemplate: CampaignTemplate;
    String: Scalars['String'];
    NonEmptyString: Scalars['NonEmptyString'];
    Platform: Platform;
    Marketplace: Marketplace;
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
    Entitlement: Omit<Entitlement, 'resource'> & {
        resource: ResolversTypes['EntitlementResource'];
    };
    EntitlementResourceTypeEnum: EntitlementResourceTypeEnum;
    EntitlementResource:
        | ResolversTypes['Marketplace']
        | ResolversTypes['Organization']
        | ResolversTypes['MediaChannel'];
    MediaChannel: MediaChannel;
    CatalogConnection: CatalogConnection;
    CatalogEdge: CatalogEdge;
    Catalog: Catalog;
    ProductConnection: ProductConnection;
    ProductEdge: ProductEdge;
    Product: Product;
    JSONObject: Scalars['JSONObject'];
    MarketingCampaignConnection: MarketingCampaignConnection;
    MarketingCampaignEdge: MarketingCampaignEdge;
    MarketingCampaign: MarketingCampaign;
    MarketingCampaignStatus: MarketingCampaignStatus;
    MarketingAdConnection: MarketingAdConnection;
    MarketingAdEdge: MarketingAdEdge;
    MarketingAd: MarketingAd;
    ResultConnection: ResultConnection;
    ResultEdge: ResultEdge;
    Result: Omit<Result, 'resource'> & {
        resource: ResolversTypes['ResultResource'];
    };
    ResultResourceTypeEnum: ResultResourceTypeEnum;
    ResultResource:
        | ResolversTypes['MarketingAd']
        | ResolversTypes['MarketingCampaign'];
    Vendor: Vendor;
    AuthPermission: AuthPermission;
    MarketplaceConnection: MarketplaceConnection;
    MarketplaceEdge: MarketplaceEdge;
    OrganizationTierEnum: OrganizationTierEnum;
    MediaChannelConnection: MediaChannelConnection;
    MediaChannelEdge: MediaChannelEdge;
    CampaignTemplateConnection: CampaignTemplateConnection;
    CampaignTemplateEdge: CampaignTemplateEdge;
    VendorConnection: VendorConnection;
    VendorEdge: VendorEdge;
    Mutation: {};
    CatalogInput: CatalogInput;
    Deletion: Deletion;
    CatalogUpdateInput: CatalogUpdateInput;
    EntitlementInput: EntitlementInput;
    EntitlementUpdateInput: EntitlementUpdateInput;
    MarketingCampaignInput: MarketingCampaignInput;
    MarketingCampaignUpdateInput: MarketingCampaignUpdateInput;
    MarketplaceInput: MarketplaceInput;
    MarketplaceUpdateInput: MarketplaceUpdateInput;
    MediaChannelInput: MediaChannelInput;
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
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    creationDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    lastChangeDate?: Resolver<
        ResolversTypes['String'],
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
    cursor?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
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
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    creationDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    lastChangeDate?: Resolver<
        ResolversTypes['String'],
        ParentType,
        ContextType
    >;
    name?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
    mediaChannel?: Resolver<
        ResolversTypes['MediaChannel'],
        ParentType,
        ContextType
    >;
    remoteId?: Resolver<
        Maybe<ResolversTypes['String']>,
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
    cursor?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    node?: Resolver<Maybe<ResolversTypes['Catalog']>, ParentType, ContextType>;
};

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
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    creationDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    lastChangeDate?: Resolver<
        ResolversTypes['String'],
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
    cursor?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
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
};

export interface JsonObjectScalarConfig
    extends GraphQLScalarTypeConfig<ResolversTypes['JSONObject'], any> {
    name: 'JSONObject';
}

export type MarketingAdResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['MarketingAd'] = ResolversParentTypes['MarketingAd']
> = {
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    creationDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    lastChangeDate?: Resolver<
        ResolversTypes['String'],
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
    cursor?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
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
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    creationDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    lastChangeDate?: Resolver<
        ResolversTypes['String'],
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
    cursor?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
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
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    creationDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    lastChangeDate?: Resolver<
        ResolversTypes['String'],
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
    cursor?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
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
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    creationDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    lastChangeDate?: Resolver<
        ResolversTypes['String'],
        ParentType,
        ContextType
    >;
    name?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
    platform?: Resolver<ResolversTypes['Platform'], ParentType, ContextType>;
    remoteId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    catalogs?: Resolver<
        ResolversTypes['CatalogConnection'],
        ParentType,
        ContextType
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
    cursor?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
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

export type OrganizationResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['Organization'] = ResolversParentTypes['Organization']
> = {
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    creationDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    lastChangeDate?: Resolver<
        ResolversTypes['String'],
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
    cursor?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
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
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    creationDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    lastChangeDate?: Resolver<
        ResolversTypes['String'],
        ParentType,
        ContextType
    >;
    name?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
    sku?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    remoteState?: Resolver<
        ResolversTypes['JSONObject'],
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
    cursor?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
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
    entitlement?: Resolver<
        Maybe<ResolversTypes['Entitlement']>,
        ParentType,
        ContextType,
        RequireFields<QueryEntitlementArgs, 'id'>
    >;
    marketingAd?: Resolver<
        Maybe<ResolversTypes['MarketingAd']>,
        ParentType,
        ContextType,
        RequireFields<QueryMarketingAdArgs, 'id'>
    >;
    marketingCampaign?: Resolver<
        Maybe<ResolversTypes['MarketingCampaign']>,
        ParentType,
        ContextType,
        RequireFields<QueryMarketingCampaignArgs, 'id'>
    >;
    marketplace?: Resolver<
        Maybe<ResolversTypes['Marketplace']>,
        ParentType,
        ContextType,
        RequireFields<QueryMarketplaceArgs, 'id'>
    >;
    mediaChannel?: Resolver<
        Maybe<ResolversTypes['MediaChannel']>,
        ParentType,
        ContextType,
        RequireFields<QueryMediaChannelArgs, 'id'>
    >;
    organization?: Resolver<
        Maybe<ResolversTypes['Organization']>,
        ParentType,
        ContextType,
        RequireFields<QueryOrganizationArgs, 'id'>
    >;
    product?: Resolver<
        Maybe<ResolversTypes['Product']>,
        ParentType,
        ContextType,
        RequireFields<QueryProductArgs, 'id'>
    >;
    result?: Resolver<
        Maybe<ResolversTypes['Result']>,
        ParentType,
        ContextType,
        RequireFields<QueryResultArgs, 'id'>
    >;
    me?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
    vendor?: Resolver<
        Maybe<ResolversTypes['Vendor']>,
        ParentType,
        ContextType,
        RequireFields<QueryVendorArgs, 'id'>
    >;
};

export type ResultResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['Result'] = ResolversParentTypes['Result']
> = {
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    creationDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    lastChangeDate?: Resolver<
        ResolversTypes['String'],
        ParentType,
        ContextType
    >;
    date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    impressions?: Resolver<
        Array<ResolversTypes['String']>,
        ParentType,
        ContextType
    >;
    results?: Resolver<
        Array<ResolversTypes['String']>,
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
    cursor?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    node?: Resolver<Maybe<ResolversTypes['Result']>, ParentType, ContextType>;
};

export type ResultResourceResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['ResultResource'] = ResolversParentTypes['ResultResource']
> = {
    __resolveType: TypeResolveFn<
        'MarketingAd' | 'MarketingCampaign',
        ParentType,
        ContextType
    >;
};

export type TokenResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['Token'] = ResolversParentTypes['Token']
> = {
    token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    refreshToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    expiryDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    creationDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    lastChangeDate?: Resolver<
        ResolversTypes['String'],
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
    cursor?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    node?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
};

export type VendorResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['Vendor'] = ResolversParentTypes['Vendor']
> = {
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    creationDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    lastChangeDate?: Resolver<
        ResolversTypes['String'],
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
    cursor?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
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
    Organization?: OrganizationResolvers<ContextType>;
    OrganizationConnection?: OrganizationConnectionResolvers<ContextType>;
    OrganizationEdge?: OrganizationEdgeResolvers<ContextType>;
    PageInfo?: PageInfoResolvers<ContextType>;
    Product?: ProductResolvers<ContextType>;
    ProductConnection?: ProductConnectionResolvers<ContextType>;
    ProductEdge?: ProductEdgeResolvers<ContextType>;
    Query?: QueryResolvers<ContextType>;
    Result?: ResultResolvers<ContextType>;
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
