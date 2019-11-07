import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export declare type Maybe<T> = T;
export declare type RequireFields<T, K extends keyof T> = {
    [X in Exclude<keyof T, K>]?: T[X];
} & {
    [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export declare type Scalars = {
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
    /**
     * Accepts a single filterObject (`{field: NonEmptyString!, operator: OPERATOR!,
     * value: [String]}`), a single array of filterObjects (creates an AND'ed query),
     * or a two dimentional array (each array is OR'ed) to produce your resource query.
     * Refer to the following JSON schema for more filter restriction details:
     *
     * ```json
     * {
     *   "anyOf": [
     *     {
     *       "type": "object",
     *       "$ref": "#/definitions/filterInput"
     *     },
     *     {
     *       "type": "array",
     *       "items": {
     *         "anyOf": [
     *           {
     *             "$ref": "#/definitions/filterInput"
     *           },
     *           {
     *             "type": "array",
     *             "items": {
     *               "$ref": "#/definitions/filterInput"
     *             }
     *           }
     *         ]
     *       }
     *     }
     *   ],
     *   "definitions": {
     *     "alphabeticString": {
     *       "type": "string",
     *       "pattern": "^[a-zA-Z]+$",
     *       "minLength": 1,
     *       "required": true
     *     },
     *     "filterInput": {
     *       "anyOf": [
     *         {
     *           "type": "object",
     *           "additionalProperties": false,
     *           "properties": {
     *             "field": {
     *               "$ref": "#/definitions/alphabeticString"
     *             },
     *             "operator": {
     *               "type": "string",
     *               "enum": [
     *                 "IN"
     *               ],
     *               "required": true
     *             },
     *             "value": {
     *               "type": "array",
     *               "items": {
     *                 "type": [
     *                   "string",
     *                   "integer",
     *                   "boolean"
     *                 ]
     *               },
     *               "require": true
     *             }
     *           }
     *         },
     *         {
     *           "type": "object",
     *           "additionalProperties": false,
     *           "properties": {
     *             "field": {
     *               "$ref": "#/definitions/alphabeticString"
     *             },
     *             "operator": {
     *               "type": "string",
     *               "enum": [
     *                 "EQUALS",
     *                 "NOT_EQUALS",
     *                 "CONTAINS",
     *                 "ICONTAINS",
     *                 "GT",
     *                 "GTE",
     *                 "LT",
     *                 "LTE"
     *               ],
     *               "required": true
     *             },
     *             "value": {
     *               "type": [
     *                 "string",
     *                 "integer",
     *                 "boolean"
     *               ],
     *               "required": true
     *             }
     *           }
     *         },
     *         {
     *           "type": "object",
     *           "additionalProperties": false,
     *           "properties": {
     *             "field": {
     *               "$ref": "#/definitions/alphabeticString"
     *             },
     *             "operator": {
     *               "type": "string",
     *               "enum": [
     *                 "IS_NULL"
     *               ],
     *               "required": true
     *             }
     *           }
     *         }
     *       ]
     *     }
     *   }
     * }
     * ```
     **/
    FilterInput: {
        field: string;
        operator: 'EQUALS' | 'NOT_EQUALS' | 'CONTAINS' | 'ICONTAINS' | 'GT' | 'GTE' | 'LT' | 'LTE';
        value: string | string[];
    } | {
        field: string;
        operator: 'EQUALS' | 'NOT_EQUALS' | 'CONTAINS' | 'ICONTAINS' | 'GT' | 'GTE' | 'LT' | 'LTE';
        value: string | string[];
    }[] | {
        field: string;
        operator: 'EQUALS' | 'NOT_EQUALS' | 'CONTAINS' | 'ICONTAINS' | 'GT' | 'GTE' | 'LT' | 'LTE';
        value: string | string[];
    }[][];
    /** The `Upload` scalar type represents a file upload. */
    Upload: any;
};
/** Authorization field type */
export declare enum AuthField {
    /** Generic object id */
    Id = "id",
    /** User id */
    UserId = "userId",
    /** Vendor id */
    VendorId = "vendorId",
    /** Organization id */
    OrganizationId = "organizationId",
    /** Marketplace id */
    MarketplaceId = "marketplaceId",
    /** Media channel id */
    MediaChannelId = "mediaChannelId",
    /** Campaign template id */
    CampaignTemplateId = "campaignTemplateId",
    /** Entitlement target resource id */
    ResourceId = "resourceId",
    /** Product catalog id */
    CatalogId = "catalogId",
    /** Product ids */
    ProductIds = "productIds"
}
/** Location of the authorization operation */
export declare enum AuthLocation {
    /** On the query arguments */
    Arg = "ARG",
    /** On the mutation input */
    Input = "INPUT",
    /** On the parent object */
    Parent = "PARENT",
    /** On the referenced catalog */
    Catalog = "CATALOG",
    /** On the referenced entitlement */
    Entitlement = "ENTITLEMENT",
    /** On the referenced marketing ad */
    MarketingAd = "MARKETING_AD",
    /** On the referenced marketing campaign */
    MarketingCampaign = "MARKETING_CAMPAIGN",
    /** On the referenced campaign template */
    CampaignTemplate = "CAMPAIGN_TEMPLATE",
    /** On the referenced media channel */
    MediaChannel = "MEDIA_CHANNEL",
    /** On the referenced product */
    Product = "PRODUCT",
    /** On the referenced result */
    Result = "RESULT",
    /** On the referenced vendor */
    Vendor = "VENDOR",
    VendorToken = "VENDOR_TOKEN"
}
/** Types of permissions that can be granted to resources */
export declare enum AuthPermission {
    /** Allows fetching the resource */
    Read = "READ",
    /** Allows creation and updating the resource */
    Write = "WRITE",
    /** Allows deleting the resource */
    Delete = "DELETE",
    /** Allows managing entitlements targeting the resource  */
    ManageEntitlements = "MANAGE_ENTITLEMENTS"
}
/** Permission check type */
export declare enum AuthType {
    /** Permission granted by entitlement */
    Entitlement = "ENTITLEMENT",
    /** Permission granted by vendor relationship */
    Vendor = "VENDOR",
    /** Permission granted by user ownership */
    UserOnly = "USER_ONLY"
}
export declare enum CacheControlScope {
    Public = "PUBLIC",
    Private = "PRIVATE"
}
/**
 * Campaign templates contain targeting and creative information tailored
 * to your objectives specific to your goals and business needs
 **/
export declare type CampaignTemplate = {
    /** Id of the campaign template */
    id: Scalars['ObjectId'];
    /** Date and time the campaign template was created */
    creationDate: Scalars['DateISO'];
    /** Date and time the campaign template was last modified */
    lastChangeDate: Scalars['DateISO'];
    /** Name of the campaign template */
    name: Scalars['NonEmptyString'];
    /** Description of the campaign template */
    description: Scalars['String'];
    /** Platform the campaign template is available for */
    platform: Platform;
    /** Id of the campaign template on the corresponding platform */
    remoteId: Scalars['String'];
    /** Marketplace the campaign template was created for */
    marketplace: Marketplace;
    /** Marketing campaigns that are using this campaign template */
    marketingCampaigns?: Maybe<MarketingCampaignConnection>;
};
/**
 * Campaign templates contain targeting and creative information tailored
 * to your objectives specific to your goals and business needs
 **/
export declare type CampaignTemplateMarketingCampaignsArgs = {
    filter?: Maybe<Scalars['FilterInput']>;
    sort?: Maybe<SortInput>;
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    last?: Maybe<Scalars['Int']>;
    before?: Maybe<Scalars['String']>;
    showDeleted?: Maybe<Scalars['Boolean']>;
};
/** Campaign templates collection */
export declare type CampaignTemplateConnection = {
    /** Collection of campaign templates */
    edges?: Maybe<Array<Maybe<CampaignTemplateEdge>>>;
    /** Pagination information */
    pageInfo: PageInfo;
};
/** Campaign template in a collection */
export declare type CampaignTemplateEdge = {
    /** Id of the contained campaign template */
    cursor: Scalars['ObjectId'];
    /** Container for a campaign template */
    node?: Maybe<CampaignTemplate>;
};
/** Catalogs contain products linked to a specific platform and media channel */
export declare type Catalog = {
    /** Id of the product catalog */
    id: Scalars['ObjectId'];
    /** Name of the product catalog */
    name: Scalars['NonEmptyString'];
    /** Category of the products referenced by the product catalog */
    catalogType: CatalogType;
    /** Date and time the product catalog was created */
    creationDate: Scalars['DateISO'];
    /** Date and time the product catalog was last modified */
    lastChangeDate: Scalars['DateISO'];
    /** Id of the product catalog on the related platform */
    remoteId?: Maybe<Scalars['String']>;
    /** System status of the product catalog */
    systemStatus: SystemStatus;
    /** Data related to the product catalog stored on the remote platform */
    remoteState: Scalars['JSONObject'];
    /** Facebook data feed id referenced by the product catalog */
    dataFeedId?: Maybe<Scalars['String']>;
    /** Validation errors of the product catalog */
    errors?: Maybe<Array<Scalars['JSONObject']>>;
    /** Media channel related to the product catalog */
    mediaChannel: MediaChannel;
    /** Products referenced by the catalog */
    products?: Maybe<ProductConnection>;
};
/** Catalogs contain products linked to a specific platform and media channel */
export declare type CatalogProductsArgs = {
    filter?: Maybe<Scalars['FilterInput']>;
    sort?: Maybe<SortInput>;
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    last?: Maybe<Scalars['Int']>;
    before?: Maybe<Scalars['String']>;
    showDeleted?: Maybe<Scalars['Boolean']>;
};
/** Product catalogs collection */
export declare type CatalogConnection = {
    /** Collection of product catalogs */
    edges?: Maybe<Array<Maybe<CatalogEdge>>>;
    /** Pagination information */
    pageInfo: PageInfo;
};
/** Product catalog creation input data */
export declare type CatalogCreateInput = {
    /** Name of the product catalog */
    name: Scalars['NonEmptyString'];
    /** Media channel id referenced by the product catalog */
    mediaChannelId: Scalars['ObjectId'];
    /** Category of the products referenced by the catalog */
    catalogType: CatalogType;
};
/** Product catalog in a collection */
export declare type CatalogEdge = {
    /** Id of the contained product catalog */
    cursor: Scalars['ObjectId'];
    /** Container for a product catalog */
    node?: Maybe<Catalog>;
};
/** Product catalog import input data */
export declare type CatalogImportInput = {
    /** Media channel id referenced by the product catalog */
    mediaChannelId: Scalars['ObjectId'];
    /** Id of the product catalog on the related platform */
    remoteId: Scalars['String'];
};
/** Product catalog type */
export declare enum CatalogType {
    /** Catalog of bookable services */
    Bookable = "bookable",
    /** Catalog of standard products or services */
    Commerce = "commerce",
    /** Catalog of travel destinations */
    Destinations = "destinations",
    /** Catalog of plane tickets */
    Flights = "flights",
    /** Catalog of home rentals */
    HomeListings = "home_listings",
    /** Catalog of hotel rooms */
    Hotels = "hotels",
    /** Catalog of store-based products or services */
    OfflineCommerce = "offline_commerce",
    /** Catalog of event tickets */
    TicketedExperiences = "ticketed_experiences",
    /** Catalog of transactable goods */
    TransactableItems = "transactable_items",
    /** Catalog of vehicle rentals or sales */
    Vehicles = "vehicles"
}
/** Product catalog update input data */
export declare type CatalogUpdateInput = {
    /** Name of the product catalog */
    name?: Maybe<Scalars['NonEmptyString']>;
};
/** Object deletion operation result */
export declare type Deletion = {
    /** Id of the deleted object */
    id: Scalars['String'];
};
/** A set of user permissions related to a resource */
export declare type Entitlement = {
    /** Id of the entitlement */
    id: Scalars['ObjectId'];
    /** Date and time the entitlement was created */
    creationDate: Scalars['DateISO'];
    /** Date and time the entitlement was last modified */
    lastChangeDate: Scalars['DateISO'];
    /** User the permissions are granted to */
    user: User;
    /** Type of resource related to the entitlement */
    type: EntitlementResourceTypeEnum;
    /** Resource related to the entitlement */
    resource: EntitlementResource;
    /** Set of permissions granted to the related user */
    permissions: Array<AuthPermission>;
};
/** Entitlement collection */
export declare type EntitlementConnection = {
    /** Collection of entitlements */
    edges?: Maybe<Array<Maybe<EntitlementEdge>>>;
    /** Pagination information */
    pageInfo: PageInfo;
};
/** Entitlement in a collection */
export declare type EntitlementEdge = {
    /** Id of the contained entitlement */
    cursor: Scalars['ObjectId'];
    /** Container for an entitlement */
    node?: Maybe<Entitlement>;
};
/** Entitlement creation input data */
export declare type EntitlementInput = {
    /** Id of the user the permissions are granted to */
    userId: Scalars['ObjectId'];
    /** Id of the resource related to the entitlement */
    resourceId: Scalars['ObjectId'];
    /** Set of permissions granted to the related user */
    permissions: Array<AuthPermission>;
};
/** Resource targeted by an entitlement */
export declare type EntitlementResource = {
    /** Id of the resource */
    id: Scalars['ObjectId'];
    /** Name of the resource */
    name: Scalars['NonEmptyString'];
    /** System status of the resource */
    systemStatus: SystemStatus;
    /** Date and time the resource was created */
    creationDate: Scalars['DateISO'];
    /** Date and time the resource was last modified */
    lastChangeDate: Scalars['DateISO'];
    /** Validation errors of the resource */
    errors?: Maybe<Array<Scalars['JSONObject']>>;
};
/** Resource types that can be granted permissions to */
export declare enum EntitlementResourceTypeEnum {
    /** Marketplace resource type */
    Marketplace = "Marketplace",
    /** Organization resource type */
    Organization = "Organization",
    /** Media channel resource type */
    MediaChannel = "MediaChannel"
}
/** Entitlement update input data */
export declare type EntitlementUpdateInput = {
    /** Set of permissions granted to the related user */
    permissions: Array<AuthPermission>;
};
/**
 * Marketing ad represents an specific ad on a platform belonging
 * to a marketing campaign and associated with a single vendor
 **/
export declare type MarketingAd = ResultResource & {
    /** Id of the marketing ad */
    id: Scalars['ObjectId'];
    /** Date and time the marketing ad was created */
    creationDate: Scalars['DateISO'];
    /** Date and time the marketing ad was last modified */
    lastChangeDate: Scalars['DateISO'];
    /** Id of the marketing ad on the related marketing campaign platform */
    remoteId: Scalars['String'];
    /** Preview data of the marketing ad */
    preview: Scalars['String'];
    /** Results related to the marketing ad */
    results?: Maybe<ResultConnection>;
    /** Marketing campaigns related to the marketing ad */
    marketingCampaign: MarketingCampaign;
    /** Vendor related to the marketing ad */
    vendor: Vendor;
};
/**
 * Marketing ad represents an specific ad on a platform belonging
 * to a marketing campaign and associated with a single vendor
 **/
export declare type MarketingAdResultsArgs = {
    filter?: Maybe<Scalars['FilterInput']>;
    sort?: Maybe<SortInput>;
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    last?: Maybe<Scalars['Int']>;
    before?: Maybe<Scalars['String']>;
};
/** Marketing ads collection */
export declare type MarketingAdConnection = {
    /** Collection of marketing ads */
    edges?: Maybe<Array<Maybe<MarketingAdEdge>>>;
    /** Pagination information */
    pageInfo: PageInfo;
};
/** Marketing ad in a collection */
export declare type MarketingAdEdge = {
    /** Id of the contained marketing ad */
    cursor: Scalars['ObjectId'];
    /** Container for a marketing ad */
    node?: Maybe<MarketingAd>;
};
/**
 * Marketing campaign is a collection of dynamic marketing ads
 * utilizing a specified campaign template, list of products, run
 * time and creative specifications that are launched on a provided
 * media channel
 **/
export declare type MarketingCampaign = ResultResource & {
    /** Id of the marketing campaign */
    id: Scalars['ObjectId'];
    /** Date and time the marketing campaign was created */
    creationDate: Scalars['DateISO'];
    /** Date and time the marketing campaign was last modified */
    lastChangeDate: Scalars['DateISO'];
    /** Name of the marketing campaign */
    name: Scalars['NonEmptyString'];
    /** Delivering status of the marketing campaign */
    status: MarketingCampaignStatus;
    /** Marketing ads contained by the marketing campaign */
    marketingAds?: Maybe<MarketingAdConnection>;
    /** Products referenced by the marketing campaign */
    products?: Maybe<ProductConnection>;
    /** Vendor related to the marketing campaign */
    vendor: Vendor;
    /** Catalog related to the marketing campaign */
    catalog: Catalog;
    /** Campaign template related to the marketing campaign */
    campaignTemplate: CampaignTemplate;
    /** Media channel the marketing campaign is delivering to */
    mediaChannel: MediaChannel;
    /** Results referencing the marketing campaign */
    results?: Maybe<ResultConnection>;
    /** Marketing campaign creative data */
    creativeSpec: Scalars['JSONObject'];
    /** Marketing campaign scheduling data */
    runTimeSpec: Scalars['JSONObject'];
    /** System status of the marketing campaign */
    systemStatus: SystemStatus;
    /** Validation errors of the marketing campaign */
    errors?: Maybe<Array<Scalars['JSONObject']>>;
};
/**
 * Marketing campaign is a collection of dynamic marketing ads
 * utilizing a specified campaign template, list of products, run
 * time and creative specifications that are launched on a provided
 * media channel
 **/
export declare type MarketingCampaignMarketingAdsArgs = {
    filter?: Maybe<Scalars['FilterInput']>;
    sort?: Maybe<SortInput>;
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    last?: Maybe<Scalars['Int']>;
    before?: Maybe<Scalars['String']>;
};
/**
 * Marketing campaign is a collection of dynamic marketing ads
 * utilizing a specified campaign template, list of products, run
 * time and creative specifications that are launched on a provided
 * media channel
 **/
export declare type MarketingCampaignProductsArgs = {
    filter?: Maybe<Scalars['FilterInput']>;
    sort?: Maybe<SortInput>;
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    last?: Maybe<Scalars['Int']>;
    before?: Maybe<Scalars['String']>;
    showDeleted?: Maybe<Scalars['Boolean']>;
};
/**
 * Marketing campaign is a collection of dynamic marketing ads
 * utilizing a specified campaign template, list of products, run
 * time and creative specifications that are launched on a provided
 * media channel
 **/
export declare type MarketingCampaignResultsArgs = {
    filter?: Maybe<Scalars['FilterInput']>;
    sort?: Maybe<SortInput>;
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    last?: Maybe<Scalars['Int']>;
    before?: Maybe<Scalars['String']>;
};
/** Marketing campaign collection */
export declare type MarketingCampaignConnection = {
    /** Collection of marketing campaigns */
    edges?: Maybe<Array<Maybe<MarketingCampaignEdge>>>;
    /** Pagination information */
    pageInfo: PageInfo;
};
/** Marketing campaign in a collection */
export declare type MarketingCampaignEdge = {
    /** Id of the marketing campaign */
    cursor: Scalars['ObjectId'];
    /** Container for a marketing campaign */
    node?: Maybe<MarketingCampaign>;
};
/** Marketing campaign creation input data */
export declare type MarketingCampaignInput = {
    /** Id of the campaign template referenced by the marketing campaign */
    campaignTemplateId: Scalars['ObjectId'];
    /** Marketing campaign creative data */
    creativeSpec: Scalars['JSONObject'];
    /** Marketing campaign scheduling data */
    runTimeSpec: Scalars['JSONObject'];
    /** Ids of the products advertised in the marketing campaign */
    productIds?: Maybe<Array<Scalars['ObjectId']>>;
    /** Delivering status of the marketing campaign */
    status?: Maybe<MarketingCampaignStatus>;
    name?: Maybe<Scalars['NonEmptyString']>;
};
/** Delivering status a of a marketing campaign */
export declare enum MarketingCampaignStatus {
    /** Active status */
    Active = "ACTIVE",
    /** Paused status */
    Paused = "PAUSED"
}
/** Marketing campaign update input data */
export declare type MarketingCampaignUpdateInput = {
    /** Marketing campaign creative data */
    creativeSpec?: Maybe<Scalars['JSONObject']>;
    /** Marketing campaign scheduling data */
    runTimeSpec?: Maybe<Scalars['JSONObject']>;
    /** Delivering status of the marketing campaign */
    status?: Maybe<MarketingCampaignStatus>;
    name?: Maybe<Scalars['NonEmptyString']>;
};
/**
 * Marketplace represents a collection of media channels, campaign templates
 * and vendors. A marketplace belongs to a single organization.
 **/
export declare type Marketplace = EntitlementResource & {
    /** Id of the marketplace */
    id: Scalars['ObjectId'];
    /** Date and time the marketplace was created */
    creationDate: Scalars['DateISO'];
    /** Date and time the marketplace was last updated */
    lastChangeDate: Scalars['DateISO'];
    /** Name of the marketplace */
    name: Scalars['NonEmptyString'];
    /** Organization related to the marketplace */
    organization: Organization;
    /** Media channels related to the marketplace */
    mediaChannels?: Maybe<MediaChannelConnection>;
    /** Campaign templates related to the marketplace */
    campaignTemplates?: Maybe<CampaignTemplateConnection>;
    /** Vendors related to the marketplace */
    vendors?: Maybe<VendorConnection>;
    /** Vendor tokens associated with the marketplace that can be used to access the api as a vendor */
    vendorTokens?: Maybe<VendorTokenConnection>;
    /** System status of the marketplace */
    systemStatus: SystemStatus;
    /** Validation errors of the marketplace */
    errors?: Maybe<Array<Scalars['JSONObject']>>;
};
/**
 * Marketplace represents a collection of media channels, campaign templates
 * and vendors. A marketplace belongs to a single organization.
 **/
export declare type MarketplaceMediaChannelsArgs = {
    filter?: Maybe<Scalars['FilterInput']>;
    sort?: Maybe<SortInput>;
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    last?: Maybe<Scalars['Int']>;
    before?: Maybe<Scalars['String']>;
    showDeleted?: Maybe<Scalars['Boolean']>;
};
/**
 * Marketplace represents a collection of media channels, campaign templates
 * and vendors. A marketplace belongs to a single organization.
 **/
export declare type MarketplaceCampaignTemplatesArgs = {
    filter?: Maybe<Scalars['FilterInput']>;
    sort?: Maybe<SortInput>;
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    last?: Maybe<Scalars['Int']>;
    before?: Maybe<Scalars['String']>;
};
/**
 * Marketplace represents a collection of media channels, campaign templates
 * and vendors. A marketplace belongs to a single organization.
 **/
export declare type MarketplaceVendorsArgs = {
    filter?: Maybe<Scalars['FilterInput']>;
    sort?: Maybe<SortInput>;
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    last?: Maybe<Scalars['Int']>;
    before?: Maybe<Scalars['String']>;
    showDeleted?: Maybe<Scalars['Boolean']>;
};
/**
 * Marketplace represents a collection of media channels, campaign templates
 * and vendors. A marketplace belongs to a single organization.
 **/
export declare type MarketplaceVendorTokensArgs = {
    filter?: Maybe<Scalars['FilterInput']>;
    sort?: Maybe<SortInput>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    before?: Maybe<Scalars['String']>;
    after?: Maybe<Scalars['String']>;
};
/** Marketplaces collection */
export declare type MarketplaceConnection = {
    /** Collection of marketplaces */
    edges?: Maybe<Array<Maybe<MarketplaceEdge>>>;
    /** Pagination information */
    pageInfo: PageInfo;
};
/** Marketplace in a collection */
export declare type MarketplaceEdge = {
    /** Id of the contained marketplace */
    cursor: Scalars['ObjectId'];
    /** Container for a marketplace */
    node?: Maybe<Marketplace>;
};
/** Marketplace creation input */
export declare type MarketplaceInput = {
    /** Name of the marketplace */
    name: Scalars['NonEmptyString'];
    /** Id of the organization referenced by the marketplace */
    organizationId: Scalars['ObjectId'];
};
/** Marketplace update input */
export declare type MarketplaceUpdateInput = {
    /** Name of the marketplace */
    name?: Maybe<Scalars['NonEmptyString']>;
};
export declare type Me = {
    id: Scalars['ObjectId'];
    creationDate: Scalars['DateISO'];
    lastChangeDate: Scalars['DateISO'];
};
/** Media channel represents an ad account on a specific platform */
export declare type MediaChannel = EntitlementResource & {
    /** Id of the media channel */
    id: Scalars['ObjectId'];
    /** Date and time the media channel was created */
    creationDate: Scalars['DateISO'];
    /** Date and time the media channel was last modified */
    lastChangeDate: Scalars['DateISO'];
    /** Name of the media channel */
    name: Scalars['NonEmptyString'];
    /** Platform the media channel is available for */
    platform: Platform;
    /** Id of the media channel on the corresponding platform */
    remoteId?: Maybe<Scalars['String']>;
    /** Data related to the media channel stored on the remote platform */
    remoteState: Scalars['JSONObject'];
    /** Currency code of the media channel */
    currency?: Maybe<Scalars['NonEmptyString']>;
    /** Currency symbol of the media channel */
    currencySymbol?: Maybe<Scalars['NonEmptyString']>;
    /** Currency offset of the media channel that must be applied to monetary analytics values */
    currencyOffset?: Maybe<Scalars['Int']>;
    /** Time zone of the media channel */
    timezone?: Maybe<Scalars['NonEmptyString']>;
    /** Status of the platform authentication token */
    tokenStatus: TokenStatus;
    /** System status of the media channel */
    systemStatus: SystemStatus;
    /** Validation errors of the media channel */
    errors?: Maybe<Array<Scalars['JSONObject']>>;
    /** Product catalogs referenced by the media channel */
    catalogs: CatalogConnection;
    /** Marketplace related to the media channel */
    marketplace: Marketplace;
};
/** Media channel represents an ad account on a specific platform */
export declare type MediaChannelCatalogsArgs = {
    filter?: Maybe<Scalars['FilterInput']>;
    sort?: Maybe<SortInput>;
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    last?: Maybe<Scalars['Int']>;
    before?: Maybe<Scalars['String']>;
    showDeleted?: Maybe<Scalars['Boolean']>;
};
/** Media channels collection */
export declare type MediaChannelConnection = {
    /** Collection of media channels */
    edges?: Maybe<Array<Maybe<MediaChannelEdge>>>;
    /** Pagination information */
    pageInfo: PageInfo;
};
/** Media channel creation input data */
export declare type MediaChannelCreateInput = {
    /** Name of the media channel */
    name: Scalars['NonEmptyString'];
    /** Id of the marketplace referenced by the media channel */
    marketplaceId: Scalars['ObjectId'];
    /** Platform the media channel is available for */
    platform: Platform;
    /** Media channel platform authentication token */
    token: Scalars['NonEmptyString'];
};
/** Media channel in  a collection */
export declare type MediaChannelEdge = {
    /** Id of the contained media channel */
    cursor: Scalars['ObjectId'];
    /** Container for a media channel */
    node?: Maybe<MediaChannel>;
};
/** Media channel import input data */
export declare type MediaChannelImportInput = {
    /** Id of the marketplace referenced by the media channel */
    marketplaceId: Scalars['ObjectId'];
    /** Platform the media channel is available for */
    platform: Platform;
    /** Id of the media channel on the corresponding platform */
    remoteId: Scalars['String'];
    /** Media channel platform authentication token */
    token: Scalars['NonEmptyString'];
};
/** Media channel update input data */
export declare type MediaChannelUpdateInput = {
    /** Name of the media channel */
    name?: Maybe<Scalars['NonEmptyString']>;
    /** Media channel platform authentication token */
    token?: Maybe<Scalars['NonEmptyString']>;
};
export declare type Mutation = {
    /** Creates a product catalog using input data */
    createCatalog?: Maybe<Catalog>;
    /** Imports a product catalog using input data */
    importCatalog?: Maybe<Catalog>;
    /** Deletes a product catalog identified by a given id */
    deleteCatalog?: Maybe<Deletion>;
    /** Updates a product catalog identified by an id using input data */
    updateCatalog?: Maybe<Catalog>;
    /** Creates an entitlement using input data */
    createEntitlement?: Maybe<Entitlement>;
    /** Updates an entitlement identified by an id using input data */
    updateEntitlement?: Maybe<Entitlement>;
    /** Deletes an entitlement identified by an id */
    deleteEntitlement?: Maybe<Deletion>;
    /** Creates a marketing campaign using input data */
    createMarketingCampaign?: Maybe<MarketingCampaign>;
    /** Updates a marketing campaign identified by a given id using input data */
    updateMarketingCampaign?: Maybe<MarketingCampaign>;
    /** Deletes a marketing campaign identified by a given id */
    deleteMarketingCampaign?: Maybe<Deletion>;
    /** Creates a marketplace using input data */
    createMarketplace?: Maybe<Marketplace>;
    /** Updates a marketplace identified by a given id using input data */
    updateMarketplace?: Maybe<Marketplace>;
    /** Deletes a marketplace identified by an id */
    deleteMarketplace?: Maybe<Deletion>;
    /** Creates a media channel using input data */
    createMediaChannel?: Maybe<MediaChannel>;
    /** Imports a media channel using input data */
    importMediaChannel?: Maybe<MediaChannel>;
    /** Updates a media channel identified by an id using input data */
    updateMediaChannel?: Maybe<MediaChannel>;
    /** Deletes a media channel identified by an id */
    deleteMediaChannel?: Maybe<Deletion>;
    /** Creates an organization using input data */
    createOrganization?: Maybe<Organization>;
    /** Updates an organization identified by a given id using input data */
    updateOrganization?: Maybe<Organization>;
    /** Deletes an organization identified by a given id */
    deleteOrganization?: Maybe<Deletion>;
    /** Creates a product using input data */
    createProduct?: Maybe<Product>;
    /** Updates a product identified by an id using input data */
    updateProduct?: Maybe<Product>;
    /** Deletes a product identified by a given id */
    deleteProduct?: Maybe<Deletion>;
    /** Authenticates the user using login input data */
    login?: Maybe<Token>;
    /** Updates the user using update input data */
    updateUser?: Maybe<User>;
    /** Refreshed the user authentication using refresh login input data */
    refreshLogin?: Maybe<Token>;
    /** Creates a vendor token using input data */
    createVendorToken?: Maybe<VendorToken>;
    /** Deletes a vendor token identified by a given id */
    deleteVendorToken?: Maybe<Deletion>;
    /** Creates a vendor using input data */
    createVendor?: Maybe<Vendor>;
    /** Updates a vendor identified by a given id using input data */
    updateVendor?: Maybe<Vendor>;
    /** Deletes a vendor identified by a given id */
    deleteVendor?: Maybe<Deletion>;
};
export declare type MutationCreateCatalogArgs = {
    input: CatalogCreateInput;
};
export declare type MutationImportCatalogArgs = {
    input: CatalogImportInput;
};
export declare type MutationDeleteCatalogArgs = {
    id: Scalars['ObjectId'];
};
export declare type MutationUpdateCatalogArgs = {
    id: Scalars['ObjectId'];
    input: CatalogUpdateInput;
};
export declare type MutationCreateEntitlementArgs = {
    input: EntitlementInput;
};
export declare type MutationUpdateEntitlementArgs = {
    id: Scalars['ObjectId'];
    input: EntitlementUpdateInput;
};
export declare type MutationDeleteEntitlementArgs = {
    id: Scalars['ObjectId'];
};
export declare type MutationCreateMarketingCampaignArgs = {
    input: MarketingCampaignInput;
};
export declare type MutationUpdateMarketingCampaignArgs = {
    id: Scalars['ObjectId'];
    input: MarketingCampaignUpdateInput;
};
export declare type MutationDeleteMarketingCampaignArgs = {
    id: Scalars['ObjectId'];
};
export declare type MutationCreateMarketplaceArgs = {
    input: MarketplaceInput;
};
export declare type MutationUpdateMarketplaceArgs = {
    id: Scalars['ObjectId'];
    input: MarketplaceUpdateInput;
};
export declare type MutationDeleteMarketplaceArgs = {
    id: Scalars['ObjectId'];
};
export declare type MutationCreateMediaChannelArgs = {
    input: MediaChannelCreateInput;
};
export declare type MutationImportMediaChannelArgs = {
    input: MediaChannelImportInput;
};
export declare type MutationUpdateMediaChannelArgs = {
    id: Scalars['ObjectId'];
    input: MediaChannelUpdateInput;
};
export declare type MutationDeleteMediaChannelArgs = {
    id: Scalars['ObjectId'];
};
export declare type MutationCreateOrganizationArgs = {
    input: OrganizationInput;
};
export declare type MutationUpdateOrganizationArgs = {
    id: Scalars['ObjectId'];
    input: OrganizationUpdateInput;
};
export declare type MutationDeleteOrganizationArgs = {
    id: Scalars['ObjectId'];
};
export declare type MutationCreateProductArgs = {
    input: ProductInput;
};
export declare type MutationUpdateProductArgs = {
    id: Scalars['ObjectId'];
    input: ProductUpdateInput;
};
export declare type MutationDeleteProductArgs = {
    id: Scalars['ObjectId'];
};
export declare type MutationLoginArgs = {
    input: UserLoginInput;
};
export declare type MutationUpdateUserArgs = {
    input: UserUpdateInput;
};
export declare type MutationRefreshLoginArgs = {
    input: RefreshTokenInput;
};
export declare type MutationCreateVendorTokenArgs = {
    input: VendorTokenInput;
};
export declare type MutationDeleteVendorTokenArgs = {
    id: Scalars['ObjectId'];
};
export declare type MutationCreateVendorArgs = {
    input: VendorInput;
};
export declare type MutationUpdateVendorArgs = {
    id: Scalars['ObjectId'];
    input: VendorUpdateInput;
};
export declare type MutationDeleteVendorArgs = {
    id: Scalars['ObjectId'];
};
/** Filter operator */
export declare enum Operator {
    /** Field value equals the given value */
    Equals = "EQUALS",
    /** Field value is not equal to the given value */
    NotEquals = "NOT_EQUALS",
    /** Field contains the given value (case sensitive) */
    Contains = "CONTAINS",
    /** Field contains the given value (case insensitive) */
    Icontains = "ICONTAINS",
    /** Field value is greater than the given value */
    Gt = "GT",
    /** Field value is equal or greater than the given value */
    Gte = "GTE",
    /** Field value is lower than the given value */
    Lt = "LT",
    /** Field value is equal or lower than the given value */
    Lte = "LTE",
    /** Field value is contained in the given list of values */
    In = "IN",
    /** Field value is null */
    IsNull = "IS_NULL"
}
/**
 * Organization is the top level of your resources hierarchy
 * and links to all owned marketplaces
 **/
export declare type Organization = EntitlementResource & {
    /** Id of the organization */
    id: Scalars['ObjectId'];
    /** Date and time the organization was created */
    creationDate: Scalars['DateISO'];
    /** Date and time the organization was last updated */
    lastChangeDate: Scalars['DateISO'];
    users?: Maybe<UserConnection>;
    marketplaces?: Maybe<MarketplaceConnection>;
    /** Name of the organization */
    name: Scalars['NonEmptyString'];
    /** Tier type of the organization */
    tier: OrganizationTierEnum;
    /** System status of the organization */
    systemStatus: SystemStatus;
    /** Validation errors of the organization */
    errors?: Maybe<Array<Scalars['JSONObject']>>;
};
/**
 * Organization is the top level of your resources hierarchy
 * and links to all owned marketplaces
 **/
export declare type OrganizationUsersArgs = {
    filter?: Maybe<Scalars['FilterInput']>;
    sort?: Maybe<SortInput>;
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    last?: Maybe<Scalars['Int']>;
    before?: Maybe<Scalars['String']>;
};
/**
 * Organization is the top level of your resources hierarchy
 * and links to all owned marketplaces
 **/
export declare type OrganizationMarketplacesArgs = {
    filter?: Maybe<Scalars['FilterInput']>;
    sort?: Maybe<SortInput>;
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    last?: Maybe<Scalars['Int']>;
    before?: Maybe<Scalars['String']>;
    showDeleted?: Maybe<Scalars['Boolean']>;
};
/** Organizations collection */
export declare type OrganizationConnection = {
    /** Collection of organizations */
    edges?: Maybe<Array<Maybe<OrganizationEdge>>>;
    /** Pagination information */
    pageInfo: PageInfo;
};
/** Organization in a collection */
export declare type OrganizationEdge = {
    /** Id of the contained organization */
    cursor: Scalars['ObjectId'];
    /** Container for an organization */
    node?: Maybe<Organization>;
};
/** Organization creation input data */
export declare type OrganizationInput = {
    /** Name of the organization */
    name: Scalars['NonEmptyString'];
};
/** Organization tier type */
export declare enum OrganizationTierEnum {
    Standard = "Standard",
    Developer = "Developer"
}
/** Organization update input data */
export declare type OrganizationUpdateInput = {
    /** Name of the organization */
    name?: Maybe<Scalars['NonEmptyString']>;
};
/** Pagination information */
export declare type PageInfo = {
    /** Whether there's more pages to retrieve after this page */
    hasNextPage: Scalars['Boolean'];
    /** Whether there's more pages to retrieve before this page */
    hasPreviousPage: Scalars['Boolean'];
    /** Id of the first object contained on the page */
    startCursor?: Maybe<Scalars['String']>;
    /** Id of the last object contained on the page */
    endCursor?: Maybe<Scalars['String']>;
};
/** Marketing platform */
export declare enum Platform {
    /** Facebook marketing platform */
    Facebook = "facebook"
}
/**
 * Product is a collection of data representing a
 * single product associated with a specific catalog
 * and vendor which can be used to generate
 * dynamic ads via a marekting campaign
 **/
export declare type Product = {
    /** Id of the product */
    id: Scalars['ObjectId'];
    /** Date and time the product was created */
    creationDate: Scalars['DateISO'];
    /** Date and time the product was last modified */
    lastChangeDate: Scalars['DateISO'];
    /** Name of the product */
    name: Scalars['NonEmptyString'];
    /** Stock keeping unit of the product */
    sku: Scalars['NonEmptyString'];
    /** Data related to the product stored on the remote platform */
    remoteState?: Maybe<Scalars['JSONObject']>;
    /** Marketing campaigns referenced by the product */
    marketingCampaigns?: Maybe<MarketingCampaignConnection>;
    /** Product catalog containing the product */
    catalog: Catalog;
    /** Data related to the product */
    metadata: Scalars['JSONObject'];
    /** Vendor owning the product */
    vendor: Vendor;
    /** System status of the product */
    systemStatus: SystemStatus;
    /** Validation errors of the product */
    errors?: Maybe<Array<Scalars['JSONObject']>>;
    /** Validation warnings */
    warnings?: Maybe<Array<Scalars['JSONObject']>>;
};
/**
 * Product is a collection of data representing a
 * single product associated with a specific catalog
 * and vendor which can be used to generate
 * dynamic ads via a marekting campaign
 **/
export declare type ProductMarketingCampaignsArgs = {
    filter?: Maybe<Scalars['FilterInput']>;
    sort?: Maybe<SortInput>;
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    last?: Maybe<Scalars['Int']>;
    before?: Maybe<Scalars['String']>;
    showDeleted?: Maybe<Scalars['Boolean']>;
};
/** Products collection */
export declare type ProductConnection = {
    /** Collection of products */
    edges?: Maybe<Array<Maybe<ProductEdge>>>;
    /** Pagination information */
    pageInfo: PageInfo;
};
/** Product in a collection */
export declare type ProductEdge = {
    /** Id of the contained product */
    cursor: Scalars['ObjectId'];
    /** Container for a product */
    node?: Maybe<Product>;
};
/** Product creation input */
export declare type ProductInput = {
    /** Id of the vendor that owns the product */
    vendorId: Scalars['ObjectId'];
    /** Id of the product catalog containing the product */
    catalogId: Scalars['ObjectId'];
    /** Data related to the product */
    metadata: Scalars['JSONObject'];
};
/** Product update input data */
export declare type ProductUpdateInput = {
    /** Data related to the product */
    metadata: Scalars['JSONObject'];
};
export declare type Query = {
    /** Returns a single campaign template identified by a given id */
    campaignTemplate?: Maybe<CampaignTemplate>;
    /** Returns a collection of campaign templates */
    campaignTemplates?: Maybe<CampaignTemplateConnection>;
    /** Returns a single product catalog identified by a given id */
    catalog?: Maybe<Catalog>;
    /** Returns a collection of product catalogs */
    catalogs?: Maybe<CatalogConnection>;
    /** Returns a single entitlement identified by a given id */
    entitlement?: Maybe<Entitlement>;
    /** Returns a collection of entitlements */
    entitlements?: Maybe<EntitlementConnection>;
    /** Returns a single marketing ad identified by a given id */
    marketingAd?: Maybe<MarketingAd>;
    /** Returns a collection of marketing ads */
    marketingAds?: Maybe<MarketingAdConnection>;
    /** Returns a single marketing campaign identified by a given id */
    marketingCampaign?: Maybe<MarketingCampaign>;
    /** Returns a collection of marketing campaigns */
    marketingCampaigns?: Maybe<MarketingCampaignConnection>;
    /** Returns a single marketplace identified by a given id */
    marketplace?: Maybe<Marketplace>;
    /** Returns a collection of marketplaces */
    marketplaces?: Maybe<MarketplaceConnection>;
    /** Returns a single product catalog identified by a given id */
    mediaChannel?: Maybe<MediaChannel>;
    /** Returns a collection of media channels */
    mediaChannels?: Maybe<MediaChannelConnection>;
    /** Returns a single organization identified by a given id */
    organization?: Maybe<Organization>;
    /** Returns a collection of organizations */
    organizations?: Maybe<OrganizationConnection>;
    /** Returns a single product identified by a given id */
    product?: Maybe<Product>;
    /** Returns a collection of products */
    products?: Maybe<ProductConnection>;
    /** Returns a single result identified by a given id */
    result?: Maybe<Result>;
    /** Returns a collecton of results */
    results?: Maybe<ResultConnection>;
    /** Returns the user making this query */
    me?: Maybe<Me>;
    /** Returns a single vendor token identified by a given id */
    vendorToken?: Maybe<VendorToken>;
    /** Returns a collection of vendor tokens */
    vendorTokens?: Maybe<VendorTokenConnection>;
    /** Returns a single vendor identified by a given id */
    vendor?: Maybe<Vendor>;
    /** Returns a collection of vendors */
    vendors?: Maybe<VendorConnection>;
};
export declare type QueryCampaignTemplateArgs = {
    id: Scalars['ObjectId'];
};
export declare type QueryCampaignTemplatesArgs = {
    filter?: Maybe<Scalars['FilterInput']>;
    sort?: Maybe<SortInput>;
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    last?: Maybe<Scalars['Int']>;
    before?: Maybe<Scalars['String']>;
};
export declare type QueryCatalogArgs = {
    id: Scalars['ObjectId'];
};
export declare type QueryCatalogsArgs = {
    filter?: Maybe<Scalars['FilterInput']>;
    sort?: Maybe<SortInput>;
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    last?: Maybe<Scalars['Int']>;
    before?: Maybe<Scalars['String']>;
    showDeleted?: Maybe<Scalars['Boolean']>;
};
export declare type QueryEntitlementArgs = {
    id: Scalars['ObjectId'];
};
export declare type QueryEntitlementsArgs = {
    filter?: Maybe<Scalars['FilterInput']>;
    sort?: Maybe<SortInput>;
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    last?: Maybe<Scalars['Int']>;
    before?: Maybe<Scalars['String']>;
};
export declare type QueryMarketingAdArgs = {
    id: Scalars['ObjectId'];
};
export declare type QueryMarketingAdsArgs = {
    filter?: Maybe<Scalars['FilterInput']>;
    sort?: Maybe<SortInput>;
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    last?: Maybe<Scalars['Int']>;
    before?: Maybe<Scalars['String']>;
};
export declare type QueryMarketingCampaignArgs = {
    id: Scalars['ObjectId'];
};
export declare type QueryMarketingCampaignsArgs = {
    filter?: Maybe<Scalars['FilterInput']>;
    sort?: Maybe<SortInput>;
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    last?: Maybe<Scalars['Int']>;
    before?: Maybe<Scalars['String']>;
    showDeleted?: Maybe<Scalars['Boolean']>;
};
export declare type QueryMarketplaceArgs = {
    id: Scalars['ObjectId'];
};
export declare type QueryMarketplacesArgs = {
    filter?: Maybe<Scalars['FilterInput']>;
    sort?: Maybe<SortInput>;
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    last?: Maybe<Scalars['Int']>;
    before?: Maybe<Scalars['String']>;
    showDeleted?: Maybe<Scalars['Boolean']>;
};
export declare type QueryMediaChannelArgs = {
    id: Scalars['ObjectId'];
};
export declare type QueryMediaChannelsArgs = {
    filter?: Maybe<Scalars['FilterInput']>;
    sort?: Maybe<SortInput>;
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    last?: Maybe<Scalars['Int']>;
    before?: Maybe<Scalars['String']>;
    showDeleted?: Maybe<Scalars['Boolean']>;
};
export declare type QueryOrganizationArgs = {
    id: Scalars['ObjectId'];
};
export declare type QueryOrganizationsArgs = {
    filter?: Maybe<Scalars['FilterInput']>;
    sort?: Maybe<SortInput>;
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    last?: Maybe<Scalars['Int']>;
    before?: Maybe<Scalars['String']>;
    showDeleted?: Maybe<Scalars['Boolean']>;
};
export declare type QueryProductArgs = {
    id: Scalars['ObjectId'];
};
export declare type QueryProductsArgs = {
    filter?: Maybe<Scalars['FilterInput']>;
    sort?: Maybe<SortInput>;
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    last?: Maybe<Scalars['Int']>;
    before?: Maybe<Scalars['String']>;
    showDeleted?: Maybe<Scalars['Boolean']>;
};
export declare type QueryResultArgs = {
    id: Scalars['ObjectId'];
};
export declare type QueryResultsArgs = {
    filter?: Maybe<Scalars['FilterInput']>;
    sort?: Maybe<SortInput>;
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    last?: Maybe<Scalars['Int']>;
    before?: Maybe<Scalars['String']>;
};
export declare type QueryVendorTokenArgs = {
    id: Scalars['ObjectId'];
};
export declare type QueryVendorTokensArgs = {
    filter?: Maybe<Scalars['FilterInput']>;
    sort?: Maybe<SortInput>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    before?: Maybe<Scalars['String']>;
    after?: Maybe<Scalars['String']>;
};
export declare type QueryVendorArgs = {
    id: Scalars['ObjectId'];
};
export declare type QueryVendorsArgs = {
    filter?: Maybe<Scalars['FilterInput']>;
    sort?: Maybe<SortInput>;
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    last?: Maybe<Scalars['Int']>;
    before?: Maybe<Scalars['String']>;
    showDeleted?: Maybe<Scalars['Boolean']>;
};
/** Refresh login input data */
export declare type RefreshTokenInput = {
    /** Secondary token value */
    refreshToken: Scalars['String'];
};
/** Result */
export declare type Result = {
    /** Id of the result */
    id: Scalars['ObjectId'];
    /** Date and time the result was created */
    creationDate: Scalars['DateISO'];
    /** Date and time the result was last modified */
    lastChangeDate: Scalars['DateISO'];
    /** Date and time the result data was generated */
    date: Scalars['DateISO'];
    /** Analytics data related to the result */
    analytics: ResultAnalytics;
    /** Resource type related to the result */
    type: ResultResourceTypeEnum;
    /** Resource related to the result */
    resource: ResultResource;
    /** Vendor related to the result */
    vendor: Vendor;
};
/** Analytics data referenced by a result */
export declare type ResultAnalytics = {
    /** Number of results */
    results?: Maybe<Scalars['Int']>;
    /** Number of impressions */
    impressions?: Maybe<Scalars['Int']>;
    /** Number of clicks */
    clicks?: Maybe<Scalars['Int']>;
    /** Amount spent */
    spend?: Maybe<Scalars['Float']>;
};
/** Results collection */
export declare type ResultConnection = {
    /** Collection of results */
    edges?: Maybe<Array<Maybe<ResultEdge>>>;
    /** Pagination information */
    pageInfo: PageInfo;
};
/** Result in a collection */
export declare type ResultEdge = {
    /** Id of the contained result */
    cursor: Scalars['ObjectId'];
    /** Container for a result */
    node?: Maybe<Result>;
};
/** Resource referenced by a result */
export declare type ResultResource = {
    /** Id of the result resource */
    id: Scalars['ObjectId'];
    /** Date and time the result resource was created */
    creationDate: Scalars['DateISO'];
    /** Date and time the result resource was last modified */
    lastChangeDate: Scalars['DateISO'];
    /** Vendor related with the result resource */
    vendor: Vendor;
};
/** Resource related to a result */
export declare enum ResultResourceTypeEnum {
    MarketingAd = "MarketingAd",
    MarketingCampaign = "MarketingCampaign"
}
/** Sorting direction */
export declare enum Sort_Order {
    /** Ascending sort order */
    Asc = "ASC",
    /** Descending sort order */
    Desc = "DESC"
}
/** Sort input data */
export declare type SortInput = {
    /** Field that will be sorted in the specified direction */
    field?: Maybe<Scalars['NonEmptyString']>;
    /** Sorting direction */
    order?: Maybe<Sort_Order>;
};
/** System status */
export declare enum SystemStatus {
    /** Awaiting an update */
    Pending = "PENDING",
    /** Awaiting deletion */
    PendingDeletion = "PENDING_DELETION",
    /** Awaiting synchronization */
    PendingSync = "PENDING_SYNC",
    /** Being processed for an update */
    Processing = "PROCESSING",
    /** Being processed for synchronization */
    ProcessingSync = "PROCESSING_SYNC",
    /** Being processed for deletion */
    ProcessingDeletion = "PROCESSING_DELETION",
    /** Already been processed */
    Processed = "PROCESSED",
    /** Having errors */
    Error = "ERROR",
    /** Marked as deleted */
    Deleted = "DELETED"
}
/** Authentication token */
export declare type Token = {
    /** Token value */
    token: Scalars['String'];
    /** Secondary token used to refresh authentication */
    refreshToken: Scalars['String'];
    /** Date and time the token will expire */
    expiryDate: Scalars['DateISO'];
    /** User the token was created for */
    user: User;
};
/** Platform token processing status */
export declare enum TokenStatus {
    /** Token submitted and awaiting processing */
    Pending = "PENDING",
    /** Token not submitted */
    Missing = "MISSING",
    /** Token successfully validated */
    Valid = "VALID",
    /** Invalid token */
    Invalid = "INVALID"
}
/**
 * User of the system that is granted access to resources
 * through entitlements
 **/
export declare type User = Me & {
    /** Id of the user */
    id: Scalars['ObjectId'];
    /** Date and time the user was created */
    creationDate: Scalars['DateISO'];
    /** Date and time the user was last modified */
    lastChangeDate: Scalars['DateISO'];
    /** Email of the user */
    email: Scalars['NonEmptyString'];
    /** First name of the user */
    firstName?: Maybe<Scalars['NonEmptyString']>;
    /** Last name of the user */
    lastName?: Maybe<Scalars['NonEmptyString']>;
    /** Organizations the user is a member of */
    organizations?: Maybe<OrganizationConnection>;
    /** Entitlements granting permissions to the user */
    entitlements?: Maybe<EntitlementConnection>;
};
/**
 * User of the system that is granted access to resources
 * through entitlements
 **/
export declare type UserOrganizationsArgs = {
    filter?: Maybe<Scalars['FilterInput']>;
    sort?: Maybe<SortInput>;
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    last?: Maybe<Scalars['Int']>;
    before?: Maybe<Scalars['String']>;
    showDeleted?: Maybe<Scalars['Boolean']>;
};
/**
 * User of the system that is granted access to resources
 * through entitlements
 **/
export declare type UserEntitlementsArgs = {
    filter?: Maybe<Scalars['FilterInput']>;
    sort?: Maybe<SortInput>;
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    last?: Maybe<Scalars['Int']>;
    before?: Maybe<Scalars['String']>;
};
/** User collection */
export declare type UserConnection = {
    /** Collection of users */
    edges?: Maybe<Array<Maybe<UserEdge>>>;
    /** Pagination information */
    pageInfo: PageInfo;
};
/** User in a collection */
export declare type UserEdge = {
    /** Id of the contained user */
    cursor: Scalars['ObjectId'];
    /** Container for a user */
    node?: Maybe<User>;
};
/** User login input data */
export declare type UserLoginInput = {
    /** Password used for the login */
    password: Scalars['NonEmptyString'];
    /** Email used for the login */
    email: Scalars['NonEmptyString'];
};
/** User update input data */
export declare type UserUpdateInput = {
    /** First name of the user */
    firstName?: Maybe<Scalars['NonEmptyString']>;
    /** Last name of the user */
    lastName?: Maybe<Scalars['NonEmptyString']>;
    /** Password of the user */
    password?: Maybe<Scalars['NonEmptyString']>;
    /** Email of the user */
    email?: Maybe<Scalars['NonEmptyString']>;
};
/**
 * Vendor belongs to a marketplace and is granted access to specific
 * products they can use to create a marketing campaign
 **/
export declare type Vendor = Me & {
    /** Id of the vendor */
    id: Scalars['ObjectId'];
    /** Date and time the vendor was created */
    creationDate: Scalars['DateISO'];
    /** Date and time the vendor was last updated */
    lastChangeDate: Scalars['DateISO'];
    /** Name of the vendor */
    name: Scalars['NonEmptyString'];
    /** Marketplace referenced by the vendor */
    marketplace: Marketplace;
    /** Vendor tokens associated with the vendor that can be used to access the api */
    vendorTokens?: Maybe<VendorTokenConnection>;
    /** Products related to the vendor */
    products?: Maybe<ProductConnection>;
    /** System status of the vendor */
    systemStatus: SystemStatus;
    /** Validation errors of the vendor */
    errors?: Maybe<Array<Scalars['JSONObject']>>;
};
/**
 * Vendor belongs to a marketplace and is granted access to specific
 * products they can use to create a marketing campaign
 **/
export declare type VendorVendorTokensArgs = {
    filter?: Maybe<Scalars['FilterInput']>;
    sort?: Maybe<SortInput>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    before?: Maybe<Scalars['String']>;
    after?: Maybe<Scalars['String']>;
};
/**
 * Vendor belongs to a marketplace and is granted access to specific
 * products they can use to create a marketing campaign
 **/
export declare type VendorProductsArgs = {
    filter?: Maybe<Scalars['FilterInput']>;
    sort?: Maybe<SortInput>;
    first?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    last?: Maybe<Scalars['Int']>;
    before?: Maybe<Scalars['String']>;
    showDeleted?: Maybe<Scalars['Boolean']>;
};
/** Vendors collection */
export declare type VendorConnection = {
    /** Collection of vendors */
    edges?: Maybe<Array<Maybe<VendorEdge>>>;
    /** Pagination information */
    pageInfo: PageInfo;
};
/** Vendor in a collection */
export declare type VendorEdge = {
    /** Id of the contained vendor */
    cursor: Scalars['ObjectId'];
    /** Container for a vendor */
    node?: Maybe<Vendor>;
};
/** Vendor creation input data */
export declare type VendorInput = {
    /** Name of the vendor */
    name: Scalars['NonEmptyString'];
    /** Id of the marketplace referenced by the vendor */
    marketplaceId: Scalars['ObjectId'];
};
/** Vendor token is an API access token associated with a vendor and marketplace */
export declare type VendorToken = {
    /** Id of the vendor */
    id: Scalars['ObjectId'];
    /** Date and time the vendor was created */
    creationDate: Scalars['DateISO'];
    /** Date and time the vendor was last updated */
    lastChangeDate: Scalars['DateISO'];
    /** Marketplace associated with the vendor token */
    marketplace: Marketplace;
    /** Vednor associated with the vendor token */
    vendor: Vendor;
    /** API access token associated with the vendor */
    token: Scalars['String'];
};
/** Vendor tokens collection */
export declare type VendorTokenConnection = {
    edges?: Maybe<Array<Maybe<VendorTokenEdge>>>;
    pageInfo: PageInfo;
};
/** Vendor token in a collection */
export declare type VendorTokenEdge = {
    cursor: Scalars['ObjectId'];
    node?: Maybe<VendorToken>;
};
/** Vendor token creation input data */
export declare type VendorTokenInput = {
    vendorId: Scalars['ObjectId'];
};
/** Vendor update input data */
export declare type VendorUpdateInput = {
    /** Name of the vendor */
    name?: Maybe<Scalars['NonEmptyString']>;
};
export declare type ResolverTypeWrapper<T> = Promise<T> | T;
export declare type ResolverFn<TResult, TParent, TContext, TArgs> = (parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => Promise<TResult> | TResult;
export declare type StitchingResolver<TResult, TParent, TContext, TArgs> = {
    fragment: string;
    resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export declare type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | StitchingResolver<TResult, TParent, TContext, TArgs>;
export declare type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;
export declare type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => TResult | Promise<TResult>;
export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
    subscribe: SubscriptionSubscribeFn<{
        [key in TKey]: TResult;
    }, TParent, TContext, TArgs>;
    resolve?: SubscriptionResolveFn<TResult, {
        [key in TKey]: TResult;
    }, TContext, TArgs>;
}
export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
    subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
    resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}
export declare type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> = SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs> | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;
export declare type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> = ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>) | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;
export declare type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (parent: TParent, context: TContext, info: GraphQLResolveInfo) => Maybe<TTypes>;
export declare type NextResolverFn<T> = () => Promise<T>;
export declare type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (next: NextResolverFn<TResult>, parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => TResult | Promise<TResult>;
/** Mapping between all available schema types and the resolvers types */
export declare type ResolversTypes = {
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
    FilterInput: ResolverTypeWrapper<Scalars['FilterInput']>;
    SortInput: SortInput;
    SORT_ORDER: Sort_Order;
    Int: ResolverTypeWrapper<Scalars['Int']>;
    UserConnection: ResolverTypeWrapper<UserConnection>;
    UserEdge: ResolverTypeWrapper<UserEdge>;
    User: ResolverTypeWrapper<User>;
    Me: ResolverTypeWrapper<Me>;
    Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
    OrganizationConnection: ResolverTypeWrapper<OrganizationConnection>;
    OrganizationEdge: ResolverTypeWrapper<OrganizationEdge>;
    PageInfo: ResolverTypeWrapper<PageInfo>;
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
    MarketingCampaignConnection: ResolverTypeWrapper<MarketingCampaignConnection>;
    MarketingCampaignEdge: ResolverTypeWrapper<MarketingCampaignEdge>;
    MarketingCampaign: ResolverTypeWrapper<MarketingCampaign>;
    ResultResource: ResolverTypeWrapper<ResultResource>;
    Vendor: ResolverTypeWrapper<Vendor>;
    VendorTokenConnection: ResolverTypeWrapper<VendorTokenConnection>;
    VendorTokenEdge: ResolverTypeWrapper<VendorTokenEdge>;
    VendorToken: ResolverTypeWrapper<VendorToken>;
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
    VendorTokenInput: VendorTokenInput;
    VendorInput: VendorInput;
    VendorUpdateInput: VendorUpdateInput;
    AuthField: AuthField;
    AuthLocation: AuthLocation;
    AuthType: AuthType;
    CacheControlScope: CacheControlScope;
    OPERATOR: Operator;
    Upload: ResolverTypeWrapper<Scalars['Upload']>;
};
/** Mapping between all available schema types and the resolvers parents */
export declare type ResolversParentTypes = {
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
    FilterInput: Scalars['FilterInput'];
    SortInput: SortInput;
    SORT_ORDER: Sort_Order;
    Int: Scalars['Int'];
    UserConnection: UserConnection;
    UserEdge: UserEdge;
    User: User;
    Me: Me;
    Boolean: Scalars['Boolean'];
    OrganizationConnection: OrganizationConnection;
    OrganizationEdge: OrganizationEdge;
    PageInfo: PageInfo;
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
    VendorTokenConnection: VendorTokenConnection;
    VendorTokenEdge: VendorTokenEdge;
    VendorToken: VendorToken;
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
    VendorTokenInput: VendorTokenInput;
    VendorInput: VendorInput;
    VendorUpdateInput: VendorUpdateInput;
    AuthField: AuthField;
    AuthLocation: AuthLocation;
    AuthType: AuthType;
    CacheControlScope: CacheControlScope;
    OPERATOR: Operator;
    Upload: Scalars['Upload'];
};
export declare type AuthDirectiveResolver<Result, Parent, ContextType = any, Args = {
    field?: Maybe<Maybe<AuthField>>;
    location?: Maybe<Maybe<AuthLocation>>;
    type?: Maybe<Maybe<AuthType>>;
    permissions?: Maybe<Maybe<Array<Maybe<AuthPermission>>>>;
}> = DirectiveResolverFn<Result, Parent, ContextType, Args>;
export declare type CacheControlDirectiveResolver<Result, Parent, ContextType = any, Args = {
    maxAge?: Maybe<Maybe<Scalars['Int']>>;
    scope?: Maybe<Maybe<CacheControlScope>>;
}> = DirectiveResolverFn<Result, Parent, ContextType, Args>;
export declare type CampaignTemplateResolvers<ContextType = any, ParentType extends ResolversParentTypes['CampaignTemplate'] = ResolversParentTypes['CampaignTemplate']> = {
    id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    creationDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    lastChangeDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    name?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
    description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    platform?: Resolver<ResolversTypes['Platform'], ParentType, ContextType>;
    remoteId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    marketplace?: Resolver<ResolversTypes['Marketplace'], ParentType, ContextType>;
    marketingCampaigns?: Resolver<Maybe<ResolversTypes['MarketingCampaignConnection']>, ParentType, ContextType, RequireFields<CampaignTemplateMarketingCampaignsArgs, 'showDeleted'>>;
};
export declare type CampaignTemplateConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CampaignTemplateConnection'] = ResolversParentTypes['CampaignTemplateConnection']> = {
    edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['CampaignTemplateEdge']>>>, ParentType, ContextType>;
    pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
};
export declare type CampaignTemplateEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CampaignTemplateEdge'] = ResolversParentTypes['CampaignTemplateEdge']> = {
    cursor?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    node?: Resolver<Maybe<ResolversTypes['CampaignTemplate']>, ParentType, ContextType>;
};
export declare type CatalogResolvers<ContextType = any, ParentType extends ResolversParentTypes['Catalog'] = ResolversParentTypes['Catalog']> = {
    id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    name?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
    catalogType?: Resolver<ResolversTypes['CatalogType'], ParentType, ContextType>;
    creationDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    lastChangeDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    remoteId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    systemStatus?: Resolver<ResolversTypes['SystemStatus'], ParentType, ContextType>;
    remoteState?: Resolver<ResolversTypes['JSONObject'], ParentType, ContextType>;
    dataFeedId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    errors?: Resolver<Maybe<Array<ResolversTypes['JSONObject']>>, ParentType, ContextType>;
    mediaChannel?: Resolver<ResolversTypes['MediaChannel'], ParentType, ContextType>;
    products?: Resolver<Maybe<ResolversTypes['ProductConnection']>, ParentType, ContextType, RequireFields<CatalogProductsArgs, 'showDeleted'>>;
};
export declare type CatalogConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CatalogConnection'] = ResolversParentTypes['CatalogConnection']> = {
    edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['CatalogEdge']>>>, ParentType, ContextType>;
    pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
};
export declare type CatalogEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CatalogEdge'] = ResolversParentTypes['CatalogEdge']> = {
    cursor?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    node?: Resolver<Maybe<ResolversTypes['Catalog']>, ParentType, ContextType>;
};
export interface DateIsoScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateISO'], any> {
    name: 'DateISO';
}
export declare type DeletionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Deletion'] = ResolversParentTypes['Deletion']> = {
    id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};
export declare type EntitlementResolvers<ContextType = any, ParentType extends ResolversParentTypes['Entitlement'] = ResolversParentTypes['Entitlement']> = {
    id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    creationDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    lastChangeDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
    type?: Resolver<ResolversTypes['EntitlementResourceTypeEnum'], ParentType, ContextType>;
    resource?: Resolver<ResolversTypes['EntitlementResource'], ParentType, ContextType>;
    permissions?: Resolver<Array<ResolversTypes['AuthPermission']>, ParentType, ContextType>;
};
export declare type EntitlementConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntitlementConnection'] = ResolversParentTypes['EntitlementConnection']> = {
    edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['EntitlementEdge']>>>, ParentType, ContextType>;
    pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
};
export declare type EntitlementEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntitlementEdge'] = ResolversParentTypes['EntitlementEdge']> = {
    cursor?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    node?: Resolver<Maybe<ResolversTypes['Entitlement']>, ParentType, ContextType>;
};
export declare type EntitlementResourceResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntitlementResource'] = ResolversParentTypes['EntitlementResource']> = {
    __resolveType: TypeResolveFn<'Marketplace' | 'Organization' | 'MediaChannel', ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    name?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
    systemStatus?: Resolver<ResolversTypes['SystemStatus'], ParentType, ContextType>;
    creationDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    lastChangeDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    errors?: Resolver<Maybe<Array<ResolversTypes['JSONObject']>>, ParentType, ContextType>;
};
export interface FilterInputScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['FilterInput'], any> {
    name: 'FilterInput';
}
export interface JsonObjectScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSONObject'], any> {
    name: 'JSONObject';
}
export declare type MarketingAdResolvers<ContextType = any, ParentType extends ResolversParentTypes['MarketingAd'] = ResolversParentTypes['MarketingAd']> = {
    id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    creationDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    lastChangeDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    remoteId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    preview?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    results?: Resolver<Maybe<ResolversTypes['ResultConnection']>, ParentType, ContextType, MarketingAdResultsArgs>;
    marketingCampaign?: Resolver<ResolversTypes['MarketingCampaign'], ParentType, ContextType>;
    vendor?: Resolver<ResolversTypes['Vendor'], ParentType, ContextType>;
};
export declare type MarketingAdConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MarketingAdConnection'] = ResolversParentTypes['MarketingAdConnection']> = {
    edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['MarketingAdEdge']>>>, ParentType, ContextType>;
    pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
};
export declare type MarketingAdEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MarketingAdEdge'] = ResolversParentTypes['MarketingAdEdge']> = {
    cursor?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    node?: Resolver<Maybe<ResolversTypes['MarketingAd']>, ParentType, ContextType>;
};
export declare type MarketingCampaignResolvers<ContextType = any, ParentType extends ResolversParentTypes['MarketingCampaign'] = ResolversParentTypes['MarketingCampaign']> = {
    id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    creationDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    lastChangeDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    name?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
    status?: Resolver<ResolversTypes['MarketingCampaignStatus'], ParentType, ContextType>;
    marketingAds?: Resolver<Maybe<ResolversTypes['MarketingAdConnection']>, ParentType, ContextType, MarketingCampaignMarketingAdsArgs>;
    products?: Resolver<Maybe<ResolversTypes['ProductConnection']>, ParentType, ContextType, RequireFields<MarketingCampaignProductsArgs, 'showDeleted'>>;
    vendor?: Resolver<ResolversTypes['Vendor'], ParentType, ContextType>;
    catalog?: Resolver<ResolversTypes['Catalog'], ParentType, ContextType>;
    campaignTemplate?: Resolver<ResolversTypes['CampaignTemplate'], ParentType, ContextType>;
    mediaChannel?: Resolver<ResolversTypes['MediaChannel'], ParentType, ContextType>;
    results?: Resolver<Maybe<ResolversTypes['ResultConnection']>, ParentType, ContextType, MarketingCampaignResultsArgs>;
    creativeSpec?: Resolver<ResolversTypes['JSONObject'], ParentType, ContextType>;
    runTimeSpec?: Resolver<ResolversTypes['JSONObject'], ParentType, ContextType>;
    systemStatus?: Resolver<ResolversTypes['SystemStatus'], ParentType, ContextType>;
    errors?: Resolver<Maybe<Array<ResolversTypes['JSONObject']>>, ParentType, ContextType>;
};
export declare type MarketingCampaignConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MarketingCampaignConnection'] = ResolversParentTypes['MarketingCampaignConnection']> = {
    edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['MarketingCampaignEdge']>>>, ParentType, ContextType>;
    pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
};
export declare type MarketingCampaignEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MarketingCampaignEdge'] = ResolversParentTypes['MarketingCampaignEdge']> = {
    cursor?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    node?: Resolver<Maybe<ResolversTypes['MarketingCampaign']>, ParentType, ContextType>;
};
export declare type MarketplaceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Marketplace'] = ResolversParentTypes['Marketplace']> = {
    id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    creationDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    lastChangeDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    name?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
    organization?: Resolver<ResolversTypes['Organization'], ParentType, ContextType>;
    mediaChannels?: Resolver<Maybe<ResolversTypes['MediaChannelConnection']>, ParentType, ContextType, RequireFields<MarketplaceMediaChannelsArgs, 'showDeleted'>>;
    campaignTemplates?: Resolver<Maybe<ResolversTypes['CampaignTemplateConnection']>, ParentType, ContextType, MarketplaceCampaignTemplatesArgs>;
    vendors?: Resolver<Maybe<ResolversTypes['VendorConnection']>, ParentType, ContextType, RequireFields<MarketplaceVendorsArgs, 'showDeleted'>>;
    vendorTokens?: Resolver<Maybe<ResolversTypes['VendorTokenConnection']>, ParentType, ContextType, MarketplaceVendorTokensArgs>;
    systemStatus?: Resolver<ResolversTypes['SystemStatus'], ParentType, ContextType>;
    errors?: Resolver<Maybe<Array<ResolversTypes['JSONObject']>>, ParentType, ContextType>;
};
export declare type MarketplaceConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MarketplaceConnection'] = ResolversParentTypes['MarketplaceConnection']> = {
    edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['MarketplaceEdge']>>>, ParentType, ContextType>;
    pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
};
export declare type MarketplaceEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MarketplaceEdge'] = ResolversParentTypes['MarketplaceEdge']> = {
    cursor?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    node?: Resolver<Maybe<ResolversTypes['Marketplace']>, ParentType, ContextType>;
};
export declare type MeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Me'] = ResolversParentTypes['Me']> = {
    __resolveType: TypeResolveFn<'User' | 'Vendor', ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    creationDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    lastChangeDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
};
export declare type MediaChannelResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaChannel'] = ResolversParentTypes['MediaChannel']> = {
    id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    creationDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    lastChangeDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    name?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
    platform?: Resolver<ResolversTypes['Platform'], ParentType, ContextType>;
    remoteId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    remoteState?: Resolver<ResolversTypes['JSONObject'], ParentType, ContextType>;
    currency?: Resolver<Maybe<ResolversTypes['NonEmptyString']>, ParentType, ContextType>;
    currencySymbol?: Resolver<Maybe<ResolversTypes['NonEmptyString']>, ParentType, ContextType>;
    currencyOffset?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    timezone?: Resolver<Maybe<ResolversTypes['NonEmptyString']>, ParentType, ContextType>;
    tokenStatus?: Resolver<ResolversTypes['TokenStatus'], ParentType, ContextType>;
    systemStatus?: Resolver<ResolversTypes['SystemStatus'], ParentType, ContextType>;
    errors?: Resolver<Maybe<Array<ResolversTypes['JSONObject']>>, ParentType, ContextType>;
    catalogs?: Resolver<ResolversTypes['CatalogConnection'], ParentType, ContextType, RequireFields<MediaChannelCatalogsArgs, 'showDeleted'>>;
    marketplace?: Resolver<ResolversTypes['Marketplace'], ParentType, ContextType>;
};
export declare type MediaChannelConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaChannelConnection'] = ResolversParentTypes['MediaChannelConnection']> = {
    edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaChannelEdge']>>>, ParentType, ContextType>;
    pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
};
export declare type MediaChannelEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaChannelEdge'] = ResolversParentTypes['MediaChannelEdge']> = {
    cursor?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    node?: Resolver<Maybe<ResolversTypes['MediaChannel']>, ParentType, ContextType>;
};
export declare type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
    createCatalog?: Resolver<Maybe<ResolversTypes['Catalog']>, ParentType, ContextType, RequireFields<MutationCreateCatalogArgs, 'input'>>;
    importCatalog?: Resolver<Maybe<ResolversTypes['Catalog']>, ParentType, ContextType, RequireFields<MutationImportCatalogArgs, 'input'>>;
    deleteCatalog?: Resolver<Maybe<ResolversTypes['Deletion']>, ParentType, ContextType, RequireFields<MutationDeleteCatalogArgs, 'id'>>;
    updateCatalog?: Resolver<Maybe<ResolversTypes['Catalog']>, ParentType, ContextType, RequireFields<MutationUpdateCatalogArgs, 'id' | 'input'>>;
    createEntitlement?: Resolver<Maybe<ResolversTypes['Entitlement']>, ParentType, ContextType, RequireFields<MutationCreateEntitlementArgs, 'input'>>;
    updateEntitlement?: Resolver<Maybe<ResolversTypes['Entitlement']>, ParentType, ContextType, RequireFields<MutationUpdateEntitlementArgs, 'id' | 'input'>>;
    deleteEntitlement?: Resolver<Maybe<ResolversTypes['Deletion']>, ParentType, ContextType, RequireFields<MutationDeleteEntitlementArgs, 'id'>>;
    createMarketingCampaign?: Resolver<Maybe<ResolversTypes['MarketingCampaign']>, ParentType, ContextType, RequireFields<MutationCreateMarketingCampaignArgs, 'input'>>;
    updateMarketingCampaign?: Resolver<Maybe<ResolversTypes['MarketingCampaign']>, ParentType, ContextType, RequireFields<MutationUpdateMarketingCampaignArgs, 'id' | 'input'>>;
    deleteMarketingCampaign?: Resolver<Maybe<ResolversTypes['Deletion']>, ParentType, ContextType, RequireFields<MutationDeleteMarketingCampaignArgs, 'id'>>;
    createMarketplace?: Resolver<Maybe<ResolversTypes['Marketplace']>, ParentType, ContextType, RequireFields<MutationCreateMarketplaceArgs, 'input'>>;
    updateMarketplace?: Resolver<Maybe<ResolversTypes['Marketplace']>, ParentType, ContextType, RequireFields<MutationUpdateMarketplaceArgs, 'id' | 'input'>>;
    deleteMarketplace?: Resolver<Maybe<ResolversTypes['Deletion']>, ParentType, ContextType, RequireFields<MutationDeleteMarketplaceArgs, 'id'>>;
    createMediaChannel?: Resolver<Maybe<ResolversTypes['MediaChannel']>, ParentType, ContextType, RequireFields<MutationCreateMediaChannelArgs, 'input'>>;
    importMediaChannel?: Resolver<Maybe<ResolversTypes['MediaChannel']>, ParentType, ContextType, RequireFields<MutationImportMediaChannelArgs, 'input'>>;
    updateMediaChannel?: Resolver<Maybe<ResolversTypes['MediaChannel']>, ParentType, ContextType, RequireFields<MutationUpdateMediaChannelArgs, 'id' | 'input'>>;
    deleteMediaChannel?: Resolver<Maybe<ResolversTypes['Deletion']>, ParentType, ContextType, RequireFields<MutationDeleteMediaChannelArgs, 'id'>>;
    createOrganization?: Resolver<Maybe<ResolversTypes['Organization']>, ParentType, ContextType, RequireFields<MutationCreateOrganizationArgs, 'input'>>;
    updateOrganization?: Resolver<Maybe<ResolversTypes['Organization']>, ParentType, ContextType, RequireFields<MutationUpdateOrganizationArgs, 'id' | 'input'>>;
    deleteOrganization?: Resolver<Maybe<ResolversTypes['Deletion']>, ParentType, ContextType, RequireFields<MutationDeleteOrganizationArgs, 'id'>>;
    createProduct?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<MutationCreateProductArgs, 'input'>>;
    updateProduct?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<MutationUpdateProductArgs, 'id' | 'input'>>;
    deleteProduct?: Resolver<Maybe<ResolversTypes['Deletion']>, ParentType, ContextType, RequireFields<MutationDeleteProductArgs, 'id'>>;
    login?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType, RequireFields<MutationLoginArgs, 'input'>>;
    updateUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'input'>>;
    refreshLogin?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType, RequireFields<MutationRefreshLoginArgs, 'input'>>;
    createVendorToken?: Resolver<Maybe<ResolversTypes['VendorToken']>, ParentType, ContextType, RequireFields<MutationCreateVendorTokenArgs, 'input'>>;
    deleteVendorToken?: Resolver<Maybe<ResolversTypes['Deletion']>, ParentType, ContextType, RequireFields<MutationDeleteVendorTokenArgs, 'id'>>;
    createVendor?: Resolver<Maybe<ResolversTypes['Vendor']>, ParentType, ContextType, RequireFields<MutationCreateVendorArgs, 'input'>>;
    updateVendor?: Resolver<Maybe<ResolversTypes['Vendor']>, ParentType, ContextType, RequireFields<MutationUpdateVendorArgs, 'id' | 'input'>>;
    deleteVendor?: Resolver<Maybe<ResolversTypes['Deletion']>, ParentType, ContextType, RequireFields<MutationDeleteVendorArgs, 'id'>>;
};
export interface NonEmptyStringScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NonEmptyString'], any> {
    name: 'NonEmptyString';
}
export interface ObjectIdScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ObjectId'], any> {
    name: 'ObjectId';
}
export declare type OrganizationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Organization'] = ResolversParentTypes['Organization']> = {
    id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    creationDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    lastChangeDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    users?: Resolver<Maybe<ResolversTypes['UserConnection']>, ParentType, ContextType, OrganizationUsersArgs>;
    marketplaces?: Resolver<Maybe<ResolversTypes['MarketplaceConnection']>, ParentType, ContextType, RequireFields<OrganizationMarketplacesArgs, 'showDeleted'>>;
    name?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
    tier?: Resolver<ResolversTypes['OrganizationTierEnum'], ParentType, ContextType>;
    systemStatus?: Resolver<ResolversTypes['SystemStatus'], ParentType, ContextType>;
    errors?: Resolver<Maybe<Array<ResolversTypes['JSONObject']>>, ParentType, ContextType>;
};
export declare type OrganizationConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrganizationConnection'] = ResolversParentTypes['OrganizationConnection']> = {
    edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrganizationEdge']>>>, ParentType, ContextType>;
    pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
};
export declare type OrganizationEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrganizationEdge'] = ResolversParentTypes['OrganizationEdge']> = {
    cursor?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    node?: Resolver<Maybe<ResolversTypes['Organization']>, ParentType, ContextType>;
};
export declare type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
    hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
    hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
    startCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};
export declare type ProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = {
    id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    creationDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    lastChangeDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    name?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
    sku?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
    remoteState?: Resolver<Maybe<ResolversTypes['JSONObject']>, ParentType, ContextType>;
    marketingCampaigns?: Resolver<Maybe<ResolversTypes['MarketingCampaignConnection']>, ParentType, ContextType, RequireFields<ProductMarketingCampaignsArgs, 'showDeleted'>>;
    catalog?: Resolver<ResolversTypes['Catalog'], ParentType, ContextType>;
    metadata?: Resolver<ResolversTypes['JSONObject'], ParentType, ContextType>;
    vendor?: Resolver<ResolversTypes['Vendor'], ParentType, ContextType>;
    systemStatus?: Resolver<ResolversTypes['SystemStatus'], ParentType, ContextType>;
    errors?: Resolver<Maybe<Array<ResolversTypes['JSONObject']>>, ParentType, ContextType>;
    warnings?: Resolver<Maybe<Array<ResolversTypes['JSONObject']>>, ParentType, ContextType>;
};
export declare type ProductConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductConnection'] = ResolversParentTypes['ProductConnection']> = {
    edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductEdge']>>>, ParentType, ContextType>;
    pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
};
export declare type ProductEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductEdge'] = ResolversParentTypes['ProductEdge']> = {
    cursor?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    node?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType>;
};
export declare type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
    campaignTemplate?: Resolver<Maybe<ResolversTypes['CampaignTemplate']>, ParentType, ContextType, RequireFields<QueryCampaignTemplateArgs, 'id'>>;
    campaignTemplates?: Resolver<Maybe<ResolversTypes['CampaignTemplateConnection']>, ParentType, ContextType, QueryCampaignTemplatesArgs>;
    catalog?: Resolver<Maybe<ResolversTypes['Catalog']>, ParentType, ContextType, RequireFields<QueryCatalogArgs, 'id'>>;
    catalogs?: Resolver<Maybe<ResolversTypes['CatalogConnection']>, ParentType, ContextType, RequireFields<QueryCatalogsArgs, 'showDeleted'>>;
    entitlement?: Resolver<Maybe<ResolversTypes['Entitlement']>, ParentType, ContextType, RequireFields<QueryEntitlementArgs, 'id'>>;
    entitlements?: Resolver<Maybe<ResolversTypes['EntitlementConnection']>, ParentType, ContextType, QueryEntitlementsArgs>;
    marketingAd?: Resolver<Maybe<ResolversTypes['MarketingAd']>, ParentType, ContextType, RequireFields<QueryMarketingAdArgs, 'id'>>;
    marketingAds?: Resolver<Maybe<ResolversTypes['MarketingAdConnection']>, ParentType, ContextType, QueryMarketingAdsArgs>;
    marketingCampaign?: Resolver<Maybe<ResolversTypes['MarketingCampaign']>, ParentType, ContextType, RequireFields<QueryMarketingCampaignArgs, 'id'>>;
    marketingCampaigns?: Resolver<Maybe<ResolversTypes['MarketingCampaignConnection']>, ParentType, ContextType, RequireFields<QueryMarketingCampaignsArgs, 'showDeleted'>>;
    marketplace?: Resolver<Maybe<ResolversTypes['Marketplace']>, ParentType, ContextType, RequireFields<QueryMarketplaceArgs, 'id'>>;
    marketplaces?: Resolver<Maybe<ResolversTypes['MarketplaceConnection']>, ParentType, ContextType, RequireFields<QueryMarketplacesArgs, 'showDeleted'>>;
    mediaChannel?: Resolver<Maybe<ResolversTypes['MediaChannel']>, ParentType, ContextType, RequireFields<QueryMediaChannelArgs, 'id'>>;
    mediaChannels?: Resolver<Maybe<ResolversTypes['MediaChannelConnection']>, ParentType, ContextType, RequireFields<QueryMediaChannelsArgs, 'showDeleted'>>;
    organization?: Resolver<Maybe<ResolversTypes['Organization']>, ParentType, ContextType, RequireFields<QueryOrganizationArgs, 'id'>>;
    organizations?: Resolver<Maybe<ResolversTypes['OrganizationConnection']>, ParentType, ContextType, RequireFields<QueryOrganizationsArgs, 'showDeleted'>>;
    product?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<QueryProductArgs, 'id'>>;
    products?: Resolver<Maybe<ResolversTypes['ProductConnection']>, ParentType, ContextType, RequireFields<QueryProductsArgs, 'showDeleted'>>;
    result?: Resolver<Maybe<ResolversTypes['Result']>, ParentType, ContextType, RequireFields<QueryResultArgs, 'id'>>;
    results?: Resolver<Maybe<ResolversTypes['ResultConnection']>, ParentType, ContextType, QueryResultsArgs>;
    me?: Resolver<Maybe<ResolversTypes['Me']>, ParentType, ContextType>;
    vendorToken?: Resolver<Maybe<ResolversTypes['VendorToken']>, ParentType, ContextType, RequireFields<QueryVendorTokenArgs, 'id'>>;
    vendorTokens?: Resolver<Maybe<ResolversTypes['VendorTokenConnection']>, ParentType, ContextType, QueryVendorTokensArgs>;
    vendor?: Resolver<Maybe<ResolversTypes['Vendor']>, ParentType, ContextType, RequireFields<QueryVendorArgs, 'id'>>;
    vendors?: Resolver<Maybe<ResolversTypes['VendorConnection']>, ParentType, ContextType, RequireFields<QueryVendorsArgs, 'showDeleted'>>;
};
export declare type ResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['Result'] = ResolversParentTypes['Result']> = {
    id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    creationDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    lastChangeDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    date?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    analytics?: Resolver<ResolversTypes['ResultAnalytics'], ParentType, ContextType>;
    type?: Resolver<ResolversTypes['ResultResourceTypeEnum'], ParentType, ContextType>;
    resource?: Resolver<ResolversTypes['ResultResource'], ParentType, ContextType>;
    vendor?: Resolver<ResolversTypes['Vendor'], ParentType, ContextType>;
};
export declare type ResultAnalyticsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResultAnalytics'] = ResolversParentTypes['ResultAnalytics']> = {
    results?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    impressions?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    clicks?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    spend?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
};
export declare type ResultConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResultConnection'] = ResolversParentTypes['ResultConnection']> = {
    edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['ResultEdge']>>>, ParentType, ContextType>;
    pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
};
export declare type ResultEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResultEdge'] = ResolversParentTypes['ResultEdge']> = {
    cursor?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    node?: Resolver<Maybe<ResolversTypes['Result']>, ParentType, ContextType>;
};
export declare type ResultResourceResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResultResource'] = ResolversParentTypes['ResultResource']> = {
    __resolveType: TypeResolveFn<'MarketingCampaign' | 'MarketingAd', ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    creationDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    lastChangeDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    vendor?: Resolver<ResolversTypes['Vendor'], ParentType, ContextType>;
};
export declare type TokenResolvers<ContextType = any, ParentType extends ResolversParentTypes['Token'] = ResolversParentTypes['Token']> = {
    token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    refreshToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    expiryDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
};
export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
    name: 'Upload';
}
export declare type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
    id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    creationDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    lastChangeDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    email?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
    firstName?: Resolver<Maybe<ResolversTypes['NonEmptyString']>, ParentType, ContextType>;
    lastName?: Resolver<Maybe<ResolversTypes['NonEmptyString']>, ParentType, ContextType>;
    organizations?: Resolver<Maybe<ResolversTypes['OrganizationConnection']>, ParentType, ContextType, RequireFields<UserOrganizationsArgs, 'showDeleted'>>;
    entitlements?: Resolver<Maybe<ResolversTypes['EntitlementConnection']>, ParentType, ContextType, UserEntitlementsArgs>;
};
export declare type UserConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserConnection'] = ResolversParentTypes['UserConnection']> = {
    edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserEdge']>>>, ParentType, ContextType>;
    pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
};
export declare type UserEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserEdge'] = ResolversParentTypes['UserEdge']> = {
    cursor?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    node?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
};
export declare type VendorResolvers<ContextType = any, ParentType extends ResolversParentTypes['Vendor'] = ResolversParentTypes['Vendor']> = {
    id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    creationDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    lastChangeDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    name?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
    marketplace?: Resolver<ResolversTypes['Marketplace'], ParentType, ContextType>;
    vendorTokens?: Resolver<Maybe<ResolversTypes['VendorTokenConnection']>, ParentType, ContextType, VendorVendorTokensArgs>;
    products?: Resolver<Maybe<ResolversTypes['ProductConnection']>, ParentType, ContextType, RequireFields<VendorProductsArgs, 'showDeleted'>>;
    systemStatus?: Resolver<ResolversTypes['SystemStatus'], ParentType, ContextType>;
    errors?: Resolver<Maybe<Array<ResolversTypes['JSONObject']>>, ParentType, ContextType>;
};
export declare type VendorConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['VendorConnection'] = ResolversParentTypes['VendorConnection']> = {
    edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['VendorEdge']>>>, ParentType, ContextType>;
    pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
};
export declare type VendorEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['VendorEdge'] = ResolversParentTypes['VendorEdge']> = {
    cursor?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    node?: Resolver<Maybe<ResolversTypes['Vendor']>, ParentType, ContextType>;
};
export declare type VendorTokenResolvers<ContextType = any, ParentType extends ResolversParentTypes['VendorToken'] = ResolversParentTypes['VendorToken']> = {
    id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    creationDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    lastChangeDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    marketplace?: Resolver<ResolversTypes['Marketplace'], ParentType, ContextType>;
    vendor?: Resolver<ResolversTypes['Vendor'], ParentType, ContextType>;
    token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};
export declare type VendorTokenConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['VendorTokenConnection'] = ResolversParentTypes['VendorTokenConnection']> = {
    edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['VendorTokenEdge']>>>, ParentType, ContextType>;
    pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
};
export declare type VendorTokenEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['VendorTokenEdge'] = ResolversParentTypes['VendorTokenEdge']> = {
    cursor?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    node?: Resolver<Maybe<ResolversTypes['VendorToken']>, ParentType, ContextType>;
};
export declare type Resolvers<ContextType = any> = {
    CampaignTemplate?: CampaignTemplateResolvers<ContextType>;
    CampaignTemplateConnection?: CampaignTemplateConnectionResolvers<ContextType>;
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
    FilterInput?: GraphQLScalarType;
    JSONObject?: GraphQLScalarType;
    MarketingAd?: MarketingAdResolvers<ContextType>;
    MarketingAdConnection?: MarketingAdConnectionResolvers<ContextType>;
    MarketingAdEdge?: MarketingAdEdgeResolvers<ContextType>;
    MarketingCampaign?: MarketingCampaignResolvers<ContextType>;
    MarketingCampaignConnection?: MarketingCampaignConnectionResolvers<ContextType>;
    MarketingCampaignEdge?: MarketingCampaignEdgeResolvers<ContextType>;
    Marketplace?: MarketplaceResolvers<ContextType>;
    MarketplaceConnection?: MarketplaceConnectionResolvers<ContextType>;
    MarketplaceEdge?: MarketplaceEdgeResolvers<ContextType>;
    Me?: MeResolvers;
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
    VendorToken?: VendorTokenResolvers<ContextType>;
    VendorTokenConnection?: VendorTokenConnectionResolvers<ContextType>;
    VendorTokenEdge?: VendorTokenEdgeResolvers<ContextType>;
};
/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export declare type IResolvers<ContextType = any> = Resolvers<ContextType>;
export declare type DirectiveResolvers<ContextType = any> = {
    auth?: AuthDirectiveResolver<any, any, ContextType>;
    cacheControl?: CacheControlDirectiveResolver<any, any, ContextType>;
};
/**
 * @deprecated
 * Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
 */
export declare type IDirectiveResolvers<ContextType = any> = DirectiveResolvers<ContextType>;
