import { ObjectId } from '../scalars';
import { DateISO } from '../scalars';
import { NonEmptyString } from '../scalars';
import { JSONObject } from '../scalars';
import { FilterInput } from '../scalars';
import {
    GraphQLResolveInfo,
    GraphQLScalarType,
    GraphQLScalarTypeConfig,
} from 'graphql';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = {
    [X in Exclude<keyof T, K>]?: T[X];
} &
    { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    /** The ObjectId is a 24 byte unique identifier for an object */
    ObjectId: ObjectId;
    /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
    DateISO: DateISO;
    /** String must contain at least one character */
    NonEmptyString: NonEmptyString;
    /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
    JSONObject: JSONObject;
    /**
     * Accepts a single filterObject (`{field: NonEmptyString!, operator: OPERATOR!,
     * value: [String]}`), a single array of filterObjects (creates an AND'ed query),
     * or a two dimensional array (each array is OR'ed) to produce your resource query.
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
     *         "oneOf": [
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
     *                 "IN",
     *                 "NOT_IN"
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
     *                 "NOT_CONTAINS",
     *                 "NOT_ICONTAINS",
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
     *                 "IS_NULL",
     *                 "NOT_NULL"
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
     */
    FilterInput: FilterInput;
};

/** Image preview of a marketingAd on the media channel for a specific placement */
export type AdPreview = {
    /** URL of the image */
    url: Scalars['String'];
    /** Width and height of the image */
    dimensions: Array<Scalars['Int']>;
    /** The placement on the media channel the preview is for */
    placement: Scalars['String'];
};

/** Types of permissions that can be granted to resources */
export enum AuthPermission {
    Read = 'READ',
    Write = 'WRITE',
    Delete = 'DELETE',
    ManageEntitlements = 'MANAGE_ENTITLEMENTS',
}

/**
 * Campaign templates contain targeting and creative information tailored to your
 * objectives specific to your goals and business needs
 */
export type CampaignTemplate = {
    /** Unique identifier */
    id: Scalars['ObjectId'];
    /** Date and time of creation */
    creationDate: Scalars['DateISO'];
    /** Date and time of last updated */
    lastChangeDate: Scalars['DateISO'];
    /** Name of the campaign template */
    name: Scalars['NonEmptyString'];
    /** Description of the campaign template */
    description: Scalars['String'];
    /** Platform the campaign template is available for */
    platform: Platform;
    /** Id of the campaign template on the corresponding platform */
    remoteId: Scalars['String'];
    /** System status of the campaign template */
    systemStatus: SystemStatus;
    /** Validation errors of the campaign template */
    errors?: Maybe<Array<Scalars['JSONObject']>>;
    /** Warnings of the campaign template */
    warnings?: Maybe<Array<Scalars['JSONObject']>>;
    /** The custom key performance indicator used to derive results data */
    kpi?: Maybe<Scalars['String']>;
    /** Marketplace the campaign template was created for */
    marketplace: Marketplace;
    /** Marketing campaigns that are using this campaign template */
    marketingCampaigns: MarketingCampaignConnection;
    /** Historical list of GCPX rates */
    GCPXHistory: GcpxConnection;
    /** The currently active GCPX for this template */
    currentGCPX?: Maybe<Gcpx>;
};

/**
 * Campaign templates contain targeting and creative information tailored to your
 * objectives specific to your goals and business needs
 */
export type CampaignTemplateMarketingCampaignsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    sort?: Maybe<SortInput>;
    filter?: Maybe<Scalars['FilterInput']>;
    showDeleted?: Maybe<Scalars['Boolean']>;
};

/**
 * Campaign templates contain targeting and creative information tailored to your
 * objectives specific to your goals and business needs
 */
export type CampaignTemplateGcpxHistoryArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    sort?: Maybe<SortInput>;
    filter?: Maybe<Scalars['FilterInput']>;
};

export type CampaignTemplateConnection = {
    /** Collection of this object */
    edges: Array<CampaignTemplateEdge>;
    /** Pagination information */
    pageInfo: PageInfo;
    /** Total count of this object */
    totalCount: Scalars['Int'];
};

export type CampaignTemplateEdge = {
    /** Record or data of this object */
    node: CampaignTemplate;
    /** Base64 encoded string to help with pagination */
    cursor: Scalars['String'];
};

/** Catalogs contain products linked to a specific platform and media channel */
export type Catalog = {
    /** Unique identifier */
    id: Scalars['ObjectId'];
    /** Date and time of creation */
    creationDate: Scalars['DateISO'];
    /** Date and time of last updated */
    lastChangeDate: Scalars['DateISO'];
    /** Name of the product catalog */
    name: Scalars['NonEmptyString'];
    /** Category of the products referenced by the product catalog */
    catalogType: CatalogType;
    /** Id of the product catalog on the related platform */
    remoteId?: Maybe<Scalars['String']>;
    /** System status of the product catalog */
    systemStatus: SystemStatus;
    /** Data related to the product catalog stored on the remote platform */
    remoteState: Scalars['JSONObject'];
    /** Facebook data feed id referenced by the product catalog */
    dataFeedId?: Maybe<Scalars['String']>;
    /** Facebook app and pixel ids associated to the product catalog */
    externalEventSourceIds: Array<Scalars['String']>;
    /** Source of the products for this catalog */
    productSource: Product_Source;
    /** Validation errors of the product catalog */
    errors?: Maybe<Array<Scalars['JSONObject']>>;
    /** Warnings of the product catalog */
    warnings?: Maybe<Array<Scalars['JSONObject']>>;
    /** Media channel related to the product catalog */
    mediaChannel: MediaChannel;
    /** Products referenced by the catalog */
    products: ProductConnection;
};

/** Catalogs contain products linked to a specific platform and media channel */
export type CatalogProductsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    sort?: Maybe<SortInput>;
    filter?: Maybe<Scalars['FilterInput']>;
    showDeleted?: Maybe<Scalars['Boolean']>;
};

export type CatalogConnection = {
    /** Collection of this object */
    edges: Array<CatalogEdge>;
    /** Pagination information */
    pageInfo: PageInfo;
    /** Total count of this object */
    totalCount: Scalars['Int'];
};

/** Product catalog creation input data */
export type CatalogCreateInput = {
    /** Name of the product catalog */
    name: Scalars['NonEmptyString'];
    /** Facebook app and pixel ids associated to the product catalog */
    externalEventSourceIds?: Maybe<Array<Scalars['String']>>;
    /** Media channel id referenced by the product catalog */
    mediaChannelId: Scalars['ObjectId'];
    /** Category of the products referenced by the catalog */
    catalogType: CatalogType;
};

export type CatalogEdge = {
    /** Record or data of this object */
    node: Catalog;
    /** Base64 encoded string to help with pagination */
    cursor: Scalars['String'];
};

/** Product catalog import input data */
export type CatalogImportInput = {
    /** Media channel id referenced by the product catalog */
    mediaChannelId: Scalars['ObjectId'];
    /** Id of the product catalog on the related platform */
    remoteId: Scalars['String'];
    /** Source of the products for this catalog */
    productSource?: Maybe<Product_Source>;
    /** Id of the vendor to associate with the imported products */
    vendorId?: Maybe<Scalars['ObjectId']>;
};

/** Product catalog sync input data */
export type CatalogSyncInput = {
    /** The desired state to modify during sync operation. */
    reconcileState?: Maybe<ReconcileStateEnum>;
};

/** Category of the products referenced by the product catalog */
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

/** Product catalog update input data */
export type CatalogUpdateInput = {
    /** Name of the product catalog */
    name?: Maybe<Scalars['NonEmptyString']>;
    /** Facebook app and pixel ids associated to the product catalog */
    externalEventSourceIds?: Maybe<Array<Scalars['String']>>;
};

/**
 * Creative font is a collection of font properties and parameters associated with
 * a specific marketplace used by [Adgo Creative Editor](https://adgogh.adgo.io/)
 * to modify the text that exists on a text layer
 */
export type CreativeFont = {
    /** Unique identifier */
    id: Scalars['ObjectId'];
    /** Date and time of creation */
    creationDate: Scalars['DateISO'];
    /** Date and time of last updated */
    lastChangeDate: Scalars['DateISO'];
    /** Name of the creative font */
    name: Scalars['NonEmptyString'];
    /** URL of the creative font */
    url: Scalars['NonEmptyString'];
    /** Properties of the creative font */
    properties: Scalars['JSONObject'];
    /** System status of the creative font */
    systemStatus: SystemStatus;
    /** Validation errors of the creative font */
    errors?: Maybe<Array<Scalars['JSONObject']>>;
    /** Warnings of the creative font */
    warnings?: Maybe<Array<Scalars['JSONObject']>>;
    /** Marketplace related to the creative font */
    marketplace: Marketplace;
};

export type CreativeFontConnection = {
    /** Collection of this object */
    edges: Array<CreativeFontEdge>;
    /** Pagination information */
    pageInfo: PageInfo;
    /** Total count of this object */
    totalCount: Scalars['Int'];
};

/** Creative font creation input data */
export type CreativeFontCreateInput = {
    /** Name of the creative font */
    name: Scalars['NonEmptyString'];
    /** URL of the creative font */
    url: Scalars['NonEmptyString'];
    /** Properties of the creative font */
    properties: Scalars['JSONObject'];
    /** Id of the marketplace related to the creative font */
    marketplaceId: Scalars['ObjectId'];
};

export type CreativeFontEdge = {
    /** Record or data of this object */
    node: CreativeFont;
    /** Base64 encoded string to help with pagination */
    cursor: Scalars['String'];
};

/** Creative font update input data */
export type CreativeFontUpdateInput = {
    /** Name of the creative font */
    name?: Maybe<Scalars['NonEmptyString']>;
    /** URL of the creative font */
    url?: Maybe<Scalars['NonEmptyString']>;
    /** Properties of the creative font */
    properties?: Maybe<Scalars['JSONObject']>;
};

/**
 * Creative image is a collection of image properties and parameters associated
 * with a specific marketplace used by [Adgo Creative
 * Editor](https://adgogh.adgo.io/) to modify the image that exists on an image layer
 */
export type CreativeImage = {
    /** Unique identifier */
    id: Scalars['ObjectId'];
    /** Date and time of creation */
    creationDate: Scalars['DateISO'];
    /** Date and time of last updated */
    lastChangeDate: Scalars['DateISO'];
    /** Name of the creative image */
    name: Scalars['NonEmptyString'];
    /** URL of the creative image */
    url: Scalars['NonEmptyString'];
    /** Properties of the creative image */
    properties: Scalars['JSONObject'];
    /** System status of the creative image */
    systemStatus: SystemStatus;
    /** Validation errors of the creative image */
    errors?: Maybe<Array<Scalars['JSONObject']>>;
    /** Warnings of the creative image */
    warnings?: Maybe<Array<Scalars['JSONObject']>>;
    /** Marketplace related to the creative image */
    marketplace: Marketplace;
};

export type CreativeImageConnection = {
    /** Collection of this object */
    edges: Array<CreativeImageEdge>;
    /** Pagination information */
    pageInfo: PageInfo;
    /** Total count of this object */
    totalCount: Scalars['Int'];
};

/** Creative image creation input data */
export type CreativeImageCreateInput = {
    /** Name of the creative image */
    name: Scalars['NonEmptyString'];
    /** URL of the creative image */
    url: Scalars['NonEmptyString'];
    /** Properties of the creative image */
    properties: Scalars['JSONObject'];
    /** Id of the marketplace referenced by the creative image */
    marketplaceId: Scalars['ObjectId'];
};

export type CreativeImageEdge = {
    /** Record or data of this object */
    node: CreativeImage;
    /** Base64 encoded string to help with pagination */
    cursor: Scalars['String'];
};

/** Creative image update input data */
export type CreativeImageUpdateInput = {
    /** Name of the creative image */
    name?: Maybe<Scalars['NonEmptyString']>;
    /** URL of the creative image */
    url?: Maybe<Scalars['NonEmptyString']>;
    /** Properties of the creative image */
    properties?: Maybe<Scalars['JSONObject']>;
};

/**
 * Creative layer is a collection of properties and parameters associated with a
 * specific creative template used by [Adgo Creative
 * Editor](https://adgogh.adgo.io/) to modify creative objects
 */
export type CreativeLayer = {
    /** Unique identifier */
    id: Scalars['ObjectId'];
    /** Date and time of creation */
    creationDate: Scalars['DateISO'];
    /** Date and time of last updated */
    lastChangeDate: Scalars['DateISO'];
    /** Name of the creative layer */
    name: Scalars['NonEmptyString'];
    /** Height of the creative layer */
    height: Scalars['Int'];
    /** Width of the creative layer */
    width: Scalars['Int'];
    /** X position of the creative layer */
    x: Scalars['Int'];
    /** Y position of the creative layer */
    y: Scalars['Int'];
    /** Order of the creative layer */
    order: Scalars['Int'];
    /** Type of the creative layer */
    type: CreativeLayerTypes;
    /** Creative template used by the creative layer */
    properties: Scalars['JSONObject'];
    /** System status of the creative layer */
    systemStatus: SystemStatus;
    /** Validation errors of the creative layer */
    errors?: Maybe<Array<Scalars['JSONObject']>>;
    /** Warnings of the creative layer */
    warnings?: Maybe<Array<Scalars['JSONObject']>>;
    /** Creative template used by the creative layer */
    creativeTemplate: CreativeTemplate;
};

export type CreativeLayerConnection = {
    /** Collection of this object */
    edges: Array<CreativeLayerEdge>;
    /** Pagination information */
    pageInfo: PageInfo;
    /** Total count of this object */
    totalCount: Scalars['Int'];
};

/** Creative layer creation input data */
export type CreativeLayerCreateInput = {
    /** Name of the creative layer */
    name: Scalars['NonEmptyString'];
    /** Height of the creative layer */
    height: Scalars['Int'];
    /** Width of the creative layer */
    width: Scalars['Int'];
    /** X position of the creative layer */
    x: Scalars['Int'];
    /** Y position of the creative layer */
    y: Scalars['Int'];
    /** Order of the creative layer */
    order: Scalars['Int'];
    /** Type of the creative layer */
    type: CreativeLayerTypes;
    /** Properties of the creative layer */
    properties: Scalars['JSONObject'];
    /** Creative template related to this creative layer */
    creativeTemplateId: Scalars['ObjectId'];
};

export type CreativeLayerEdge = {
    /** Record or data of this object */
    node: CreativeLayer;
    /** Base64 encoded string to help with pagination */
    cursor: Scalars['String'];
};

/** Types of creative layer */
export enum CreativeLayerTypes {
    CreativeTextLayer = 'CREATIVE_TEXT_LAYER',
    CreativeImageLayer = 'CREATIVE_IMAGE_LAYER',
}

/** Creative layer update input data */
export type CreativeLayerUpdateInput = {
    /** Name of the creative layer */
    name?: Maybe<Scalars['NonEmptyString']>;
    /** Height of the creative layer */
    height?: Maybe<Scalars['Int']>;
    /** Width of the creative layer */
    width?: Maybe<Scalars['Int']>;
    /** X position of the creative layer */
    x?: Maybe<Scalars['Int']>;
    /** Y position of the creative layer */
    y?: Maybe<Scalars['Int']>;
    /** Order of the creative layer */
    order?: Maybe<Scalars['Int']>;
    /** Type of creative layer */
    type?: Maybe<CreativeLayerTypes>;
    /** Properties of the creative layer */
    properties?: Maybe<Scalars['JSONObject']>;
};

/**
 * Creative template is the top level of a marketplace's creative objects
 * hierarchy. It is a collection of ad creative parameters used by [Adgo Creative
 * Editor](https://adgogh.adgo.io/)
 */
export type CreativeTemplate = {
    /** Unique identifier */
    id: Scalars['ObjectId'];
    /** Date and time of creation */
    creationDate: Scalars['DateISO'];
    /** Date and time of last updated */
    lastChangeDate: Scalars['DateISO'];
    /** Name of the creative template */
    name: Scalars['NonEmptyString'];
    /** Height of the creative template */
    height: Scalars['Int'];
    /** Width of the creative template */
    width: Scalars['Int'];
    /** System status of the creative template */
    systemStatus: SystemStatus;
    /** Validation errors of the creative template */
    errors?: Maybe<Array<Scalars['JSONObject']>>;
    /** Warnings of the creative template */
    warnings?: Maybe<Array<Scalars['JSONObject']>>;
    /** Marketplace related to the creative template */
    marketplace: Marketplace;
    /** Marketing campaigns used by the creative template */
    marketingCampaigns: MarketingCampaignConnection;
    /** Creative layers available for the creative template */
    creativeLayers: CreativeLayerConnection;
};

/**
 * Creative template is the top level of a marketplace's creative objects
 * hierarchy. It is a collection of ad creative parameters used by [Adgo Creative
 * Editor](https://adgogh.adgo.io/)
 */
export type CreativeTemplateMarketingCampaignsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    sort?: Maybe<SortInput>;
    filter?: Maybe<Scalars['FilterInput']>;
    showDeleted?: Maybe<Scalars['Boolean']>;
};

/**
 * Creative template is the top level of a marketplace's creative objects
 * hierarchy. It is a collection of ad creative parameters used by [Adgo Creative
 * Editor](https://adgogh.adgo.io/)
 */
export type CreativeTemplateCreativeLayersArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    sort?: Maybe<SortInput>;
    filter?: Maybe<Scalars['FilterInput']>;
    showDeleted?: Maybe<Scalars['Boolean']>;
};

export type CreativeTemplateConnection = {
    /** Collection of this object */
    edges: Array<CreativeTemplateEdge>;
    /** Pagination information */
    pageInfo: PageInfo;
    /** Total count of this object */
    totalCount: Scalars['Int'];
};

/** Creative template creation input data */
export type CreativeTemplateCreateInput = {
    /** Name of the creative template */
    name: Scalars['NonEmptyString'];
    /** Height of the creative template */
    height: Scalars['Int'];
    /** Width of the creative template */
    width: Scalars['Int'];
    /** Id of the marketplace referenced by the creative template */
    marketplaceId: Scalars['ObjectId'];
};

export type CreativeTemplateEdge = {
    /** Record or data of this object */
    node: CreativeTemplate;
    /** Base64 encoded string to help with pagination */
    cursor: Scalars['String'];
};

/** Creative template update input data */
export type CreativeTemplateUpdateInput = {
    /** Name of the creative template */
    name?: Maybe<Scalars['NonEmptyString']>;
    /** Height of the creative template */
    height?: Maybe<Scalars['Int']>;
    /** Width of the creative template */
    width?: Maybe<Scalars['Int']>;
};

/** Object deletion operation result */
export type Deletion = {
    /** Id of the deleted object */
    id: Scalars['String'];
};

/** A set of user permissions related to a resource */
export type Entitlement = {
    /** Unique identifier */
    id: Scalars['ObjectId'];
    /** Date and time of creation */
    creationDate: Scalars['DateISO'];
    /** Date and time of last updated */
    lastChangeDate: Scalars['DateISO'];
    /** Type of resource related to the entitlement */
    type: EntitlementResourceTypeEnum;
    /** Set of permissions granted to the related user */
    permissions: Array<AuthPermission>;
    /** User the permissions are granted to */
    user: User;
    /** Resource related to the entitlement */
    resource: EntitlementResource;
};

export type EntitlementConnection = {
    /** Collection of this object */
    edges: Array<EntitlementEdge>;
    /** Pagination information */
    pageInfo: PageInfo;
    /** Total count of this object */
    totalCount: Scalars['Int'];
};

export type EntitlementEdge = {
    /** Record or data of this object */
    node: Entitlement;
    /** Base64 encoded string to help with pagination */
    cursor: Scalars['String'];
};

/** Entitlement creation input data */
export type EntitlementInput = {
    /** Id of the resource related to the entitlement */
    resourceId: Scalars['ObjectId'];
    /** Id of the user the permissions are granted to */
    userId: Scalars['ObjectId'];
    /** Set of permissions granted to the related user */
    permissions: Array<AuthPermission>;
};

export type EntitlementResource = {
    /** Id of the resource */
    id: Scalars['ObjectId'];
    /** Date and time the resource was created */
    creationDate: Scalars['DateISO'];
    /** Date and time the resource was last updated */
    lastChangeDate: Scalars['DateISO'];
    /** Name of the resource */
    name: Scalars['NonEmptyString'];
    /** System status of the resource */
    systemStatus: SystemStatus;
    /** Validation errors of the resource */
    errors?: Maybe<Array<Scalars['JSONObject']>>;
    /** Warnings of the resource */
    warnings?: Maybe<Array<Scalars['JSONObject']>>;
};

/** Resource types that can be granted permissions to */
export enum EntitlementResourceTypeEnum {
    Organization = 'Organization',
    Marketplace = 'Marketplace',
    MediaChannel = 'MediaChannel',
}

/** Entitlement update input data */
export type EntitlementUpdateInput = {
    /** Set of permissions granted to the related user */
    permissions: Array<AuthPermission>;
};

/** Guarantied cost per KPI */
export type Gcpx = {
    /** Unique identifier */
    id: Scalars['ObjectId'];
    /** Date and time of creation */
    creationDate: Scalars['DateISO'];
    /** Date and time of last updated */
    lastChangeDate: Scalars['DateISO'];
    /** The KPI this GCPX guaranties the cost for */
    kpi: Scalars['String'];
    /** The price in the currency of the marketplace divided by the `currencyOffset` of the marketplace */
    price: Scalars['Int'];
    /** The date at which this GCPX becomes active */
    startDate: Scalars['DateISO'];
    /** The date at which this GCPX expires */
    endDate: Scalars['DateISO'];
    /** To use this GCPX, you have to order at least this many conversions */
    minConversions: Scalars['Int'];
    /** To use this GCPX, you have to order no more than this many conversions */
    maxConversions: Scalars['Int'];
    /** CampaignTemplate this GCPX belongs to */
    campaignTemplate: CampaignTemplate;
    /** Marketplace this GCPX belongs to */
    marketplace: Marketplace;
    /** Marketing campaigns that use this GCPX */
    marketingCampaigns: MarketingCampaignConnection;
};

/** Guarantied cost per KPI */
export type GcpxMarketingCampaignsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    sort?: Maybe<SortInput>;
    filter?: Maybe<Scalars['FilterInput']>;
    showDeleted?: Maybe<Scalars['Boolean']>;
};

export type GcpxConnection = {
    /** Collection of this object */
    edges: Array<GcpxEdge>;
    /** Pagination information */
    pageInfo: PageInfo;
    /** Total count of this object */
    totalCount: Scalars['Int'];
};

export type GcpxEdge = {
    /** Record or data of this object */
    node: Gcpx;
    /** Base64 encoded string to help with pagination */
    cursor: Scalars['String'];
};

/** Vendor login input data */
export type LoginVendorInput = {
    /** Id of the marketplace associated with the vendor login */
    marketplaceId: Scalars['ObjectId'];
    /** Email associated with the vendor login */
    email: Scalars['NonEmptyString'];
    /** Password associated with the vendor login */
    password: Scalars['NonEmptyString'];
};

/** Marketing ad represents a specific ad on a platform belonging to a marketing campaign and associated with a single vendor */
export type MarketingAd = ResultResource & {
    /** Unique identifier */
    id: Scalars['ObjectId'];
    /** Date and time of creation */
    creationDate: Scalars['DateISO'];
    /** Date and time of last updated */
    lastChangeDate: Scalars['DateISO'];
    /** The source of the analytics used to derive results data */
    resultsSource: Array<Scalars['NonEmptyString']>;
    /** The key performance indicator used to determine analytics results */
    kpi?: Maybe<Scalars['String']>;
    /** Vendor related to the marketing ad */
    vendor?: Maybe<Vendor>;
    /** System status of the marketing ad */
    systemStatus: SystemStatus;
    /** Validation errors of the marketing ad */
    errors?: Maybe<Array<Scalars['JSONObject']>>;
    /** Warnings of the marketing ad */
    warnings?: Maybe<Array<Scalars['JSONObject']>>;
    /** Id of the marketing ad on the related marketing campaign platform. */
    remoteId: Scalars['String'];
    /** Preview data of the marketing ad */
    preview: Scalars['String'];
    /** Images of the marketing ad as seen on the related marketing campaign platform */
    adPreviews: Array<AdPreview>;
    /** Results related to the marketing ad */
    results: ResultConnection;
    /** Marketing campaigns related to the marketing ad */
    marketingCampaign: MarketingCampaign;
};

/** Marketing ad represents a specific ad on a platform belonging to a marketing campaign and associated with a single vendor */
export type MarketingAdResultsArgs = {
    breakdown?: Maybe<ResultBreakdownTypeEnum>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    sort?: Maybe<SortInput>;
    filter?: Maybe<Scalars['FilterInput']>;
};

export type MarketingAdConnection = {
    /** Collection of this object */
    edges: Array<MarketingAdEdge>;
    /** Pagination information */
    pageInfo: PageInfo;
    /** Total count of this object */
    totalCount: Scalars['Int'];
};

export type MarketingAdEdge = {
    /** Record or data of this object */
    node: MarketingAd;
    /** Base64 encoded string to help with pagination */
    cursor: Scalars['String'];
};

/**
 * Marketing campaign is a collection of dynamic marketing ads utilizing a
 * specified campaign template, list of products, run time and creative
 * specifications that are launched on a provided media channel
 */
export type MarketingCampaign = ResultResource &
    NotificationResource & {
        /** Unique identifier */
        id: Scalars['ObjectId'];
        /** Date and time of creation */
        creationDate: Scalars['DateISO'];
        /** Date and time of last updated */
        lastChangeDate: Scalars['DateISO'];
        /** The source of the analytics used to derive results data */
        resultsSource: Array<Scalars['NonEmptyString']>;
        /** The key performance indicator used to determine analytics results */
        kpi?: Maybe<Scalars['String']>;
        /** Vendor related to the marketing campaign */
        vendor?: Maybe<Vendor>;
        /** System status of the marketing campaign */
        systemStatus: SystemStatus;
        /** Validation errors of the marketing campaign */
        errors?: Maybe<Array<Scalars['JSONObject']>>;
        /** Warnings of the marketing campaign */
        warnings?: Maybe<Array<Scalars['JSONObject']>>;
        /** Name of the marketing campaign */
        name: Scalars['NonEmptyString'];
        /** Delivering status of the marketing campaign */
        status: MarketingCampaignStatus;
        /** Marketing campaign creative data. [Creative Specification](https://docs.adgo.io/API/MarketingCampaign#marketingcampaign-creative-specification-creativespec) */
        creativeSpec: Scalars['JSONObject'];
        /** Marketing campaign scheduling data. [Run Time Specification](https://docs.adgo.io/API/MarketingCampaign#marketingcampaign-run-time-specification-runtimespec) */
        runTimeSpec?: Maybe<Scalars['JSONObject']>;
        /** Marketing campaign location data. [Location Specification](https://docs.adgo.io/API/MarketingCampaign#marketingcampaign-location-specification-locationspec) */
        locationSpec: Scalars['JSONObject'];
        /** Marketing campaign GCPX data. [Conversion Specification](https://docs.adgo.io/API/MarketingCampaign#marketingcampaign-conversion-specification-conversionspec) */
        conversionSpec?: Maybe<Scalars['JSONObject']>;
        /** Start date of the campaign */
        startDate: Scalars['DateISO'];
        /** End date of the campaign */
        endDate?: Maybe<Scalars['DateISO']>;
        /** Filter of the products advertised in the marketing campaign */
        productFilter?: Maybe<Array<Array<Scalars['JSONObject']>>>;
        /** The GCPX used for this campaign */
        GCPX?: Maybe<Gcpx>;
        /** Set to true if the marketing campaign is delivering any ads */
        delivering: Scalars['Boolean'];
        /** Marketing ads contained by the marketing campaign */
        marketingAds: MarketingAdConnection;
        /** Products referenced by the marketing campaign */
        products: ProductConnection;
        /** Catalog related to the marketing campaign */
        catalog: Catalog;
        /** Campaign template related to the marketing campaign */
        campaignTemplate?: Maybe<CampaignTemplate>;
        /** Media channel the marketing campaign is delivering to */
        mediaChannel: MediaChannel;
        /** Results referencing the marketing campaign */
        results: ResultConnection;
        /** Notifications for the marketing campaign */
        notifications: NotificationConnection;
    };

/**
 * Marketing campaign is a collection of dynamic marketing ads utilizing a
 * specified campaign template, list of products, run time and creative
 * specifications that are launched on a provided media channel
 */
export type MarketingCampaignMarketingAdsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    sort?: Maybe<SortInput>;
    filter?: Maybe<Scalars['FilterInput']>;
    showDeleted?: Maybe<Scalars['Boolean']>;
};

/**
 * Marketing campaign is a collection of dynamic marketing ads utilizing a
 * specified campaign template, list of products, run time and creative
 * specifications that are launched on a provided media channel
 */
export type MarketingCampaignProductsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    sort?: Maybe<SortInput>;
    filter?: Maybe<Scalars['FilterInput']>;
    showDeleted?: Maybe<Scalars['Boolean']>;
};

/**
 * Marketing campaign is a collection of dynamic marketing ads utilizing a
 * specified campaign template, list of products, run time and creative
 * specifications that are launched on a provided media channel
 */
export type MarketingCampaignResultsArgs = {
    breakdown?: Maybe<ResultBreakdownTypeEnum>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    sort?: Maybe<SortInput>;
    filter?: Maybe<Scalars['FilterInput']>;
};

/**
 * Marketing campaign is a collection of dynamic marketing ads utilizing a
 * specified campaign template, list of products, run time and creative
 * specifications that are launched on a provided media channel
 */
export type MarketingCampaignNotificationsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    sort?: Maybe<SortInput>;
    filter?: Maybe<Scalars['FilterInput']>;
};

export type MarketingCampaignConnection = {
    /** Collection of this object */
    edges: Array<MarketingCampaignEdge>;
    /** Pagination information */
    pageInfo: PageInfo;
    /** Total count of this object */
    totalCount: Scalars['Int'];
};

export type MarketingCampaignEdge = {
    /** Record or data of this object */
    node: MarketingCampaign;
    /** Base64 encoded string to help with pagination */
    cursor: Scalars['String'];
};

/** Marketing campaign creation input data */
export type MarketingCampaignInput = {
    /** Id of the campaign template referenced by the marketing campaign */
    campaignTemplateId: Scalars['ObjectId'];
    /** Marketing campaign creative data. [Creative Specification](https://docs.adgo.io/API/MarketingCampaign#marketingcampaign-creative-specification-creativespec) */
    creativeSpec: Scalars['JSONObject'];
    /** Marketing campaign scheduling data. [Run Time Specification](https://docs.adgo.io/API/MarketingCampaign#marketingcampaign-run-time-specification-runtimespec) */
    runTimeSpec?: Maybe<Scalars['JSONObject']>;
    /** Marketing campaign location data. [Location Specification](https://docs.adgo.io/API/MarketingCampaign#marketingcampaign-location-specification-locationspec) */
    locationSpec?: Maybe<Scalars['JSONObject']>;
    /** Marketing campaign GCPX data. [Conversion Specification](https://docs.adgo.io/API/MarketingCampaign#marketingcampaign-conversion-specification-conversionspec) */
    conversionSpec?: Maybe<Scalars['JSONObject']>;
    /** Ids of the products advertised in the marketing campaign */
    productIds?: Maybe<Array<Scalars['ObjectId']>>;
    /** Filter of the products advertised in the marketing campaign */
    productFilter?: Maybe<Scalars['FilterInput']>;
    /** Delivering status of the marketing campaign */
    status?: Maybe<MarketingCampaignStatus>;
    /** Name of the marketing campaign */
    name?: Maybe<Scalars['NonEmptyString']>;
};

export type MarketingCampaignSnapshot = {
    /** Unique identifier */
    id: Scalars['ObjectId'];
    /** Date and time of creation */
    creationDate: Scalars['DateISO'];
    /** Date and time of last updated */
    lastChangeDate: Scalars['DateISO'];
    /** Marketing campaigns related to the history */
    marketingCampaign: MarketingCampaign;
    /** Snapshot had no errors */
    successful: Scalars['Boolean'];
    /** Name of the marketing campaign */
    name: Scalars['String'];
    /** Delivering status of the marketing campaign */
    status: MarketingCampaignStatus;
    /** Marketing campaign creative data. [Creative Specification](https://docs.adgo.io/API/MarketingCampaign#marketingcampaign-creative-specification-creativespec) */
    creativeSpec: Scalars['JSONObject'];
    /** Marketing campaign scheduling data. [Run Time Specification](https://docs.adgo.io/API/MarketingCampaign#marketingcampaign-run-time-specification-runtimespec) */
    runTimeSpec?: Maybe<Scalars['JSONObject']>;
    /** Marketing campaign location data. [Location Specification](https://docs.adgo.io/API/MarketingCampaign#marketingcampaign-location-specification-locationspec) */
    locationSpec: Scalars['JSONObject'];
    /** The key performance indicator used to determine analytics results */
    kpi?: Maybe<Scalars['String']>;
    /** Product ids */
    productIds?: Maybe<Array<Scalars['ObjectId']>>;
};

export type MarketingCampaignSnapshotConnection = {
    /** Collection of this object */
    edges: Array<MarketingCampaignSnapshotEdge>;
    /** Pagination information */
    pageInfo: PageInfo;
    /** Total count of this object */
    totalCount: Scalars['Int'];
};

export type MarketingCampaignSnapshotEdge = {
    /** Record or data of this object */
    node: MarketingCampaignSnapshot;
    /** Base64 encoded string to help with pagination */
    cursor: Scalars['String'];
};

/** Delivering status a of a marketing campaign */
export enum MarketingCampaignStatus {
    Active = 'ACTIVE',
    Paused = 'PAUSED',
}

/** Marketing campaign sync input data */
export type MarketingCampaignSyncInput = {
    /** The desired state to modify during sync operation. */
    reconcileState?: Maybe<ReconcileStateEnum>;
};

/** Marketing campaign update input data */
export type MarketingCampaignUpdateInput = {
    /** Marketing campaign creative data. [Creative Specification](https://docs.adgo.io/API/MarketingCampaign#marketingcampaign-creative-specification-creativespec) */
    creativeSpec?: Maybe<Scalars['JSONObject']>;
    /** Marketing campaign scheduling data. [Run Time Specification](https://docs.adgo.io/API/MarketingCampaign#marketingcampaign-run-time-specification-runtimespec) */
    runTimeSpec?: Maybe<Scalars['JSONObject']>;
    /** Marketing campaign location data. [Location Specification](https://docs.adgo.io/API/MarketingCampaign#marketingcampaign-location-specification-locationspec) */
    locationSpec?: Maybe<Scalars['JSONObject']>;
    /** Ids of the products advertised in the marketing campaign */
    productIds?: Maybe<Array<Scalars['ObjectId']>>;
    /** Filter of the products advertised in the marketing campaign */
    productFilter?: Maybe<Scalars['FilterInput']>;
    /** Delivering status of the marketing campaign */
    status?: Maybe<MarketingCampaignStatus>;
    /** Name of the marketing campaign */
    name?: Maybe<Scalars['NonEmptyString']>;
};

/**
 * Marketplace represents a collection of media channels, campaign templates and
 * vendors. A marketplace belongs to a single organization
 */
export type Marketplace = EntitlementResource & {
    /** Unique identifier */
    id: Scalars['ObjectId'];
    /** Date and time of creation */
    creationDate: Scalars['DateISO'];
    /** Date and time of last updated */
    lastChangeDate: Scalars['DateISO'];
    /** Name of the marketplace */
    name: Scalars['NonEmptyString'];
    /** System status of the marketplace */
    systemStatus: SystemStatus;
    /** Validation errors of the marketplace */
    errors?: Maybe<Array<Scalars['JSONObject']>>;
    /** Warnings of the marketplace */
    warnings?: Maybe<Array<Scalars['JSONObject']>>;
    /** Currency code of the marketplace */
    currencyCode?: Maybe<Scalars['String']>;
    /** Currency symbol of the marketplace */
    currencySymbol?: Maybe<Scalars['String']>;
    /** Currency offset of the marketplace */
    currencyOffset?: Maybe<Scalars['Int']>;
    /** Organization related to the marketplace */
    organization?: Maybe<Organization>;
    /** Media channels related to the marketplace */
    mediaChannels: MediaChannelConnection;
    /** Campaign templates related to the marketplace */
    campaignTemplates: CampaignTemplateConnection;
    /** Vendors related to the marketplace */
    vendors: VendorConnection;
    /** Vendor tokens associated with the marketplace that can be used to access the api as a vendor */
    vendorTokens: VendorTokenConnection;
    /** Creative templates of the marketplace */
    creativeTemplates: CreativeTemplateConnection;
    /** Products of the marketplace */
    products: ProductConnection;
};

/**
 * Marketplace represents a collection of media channels, campaign templates and
 * vendors. A marketplace belongs to a single organization
 */
export type MarketplaceMediaChannelsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    sort?: Maybe<SortInput>;
    filter?: Maybe<Scalars['FilterInput']>;
    showDeleted?: Maybe<Scalars['Boolean']>;
};

/**
 * Marketplace represents a collection of media channels, campaign templates and
 * vendors. A marketplace belongs to a single organization
 */
export type MarketplaceCampaignTemplatesArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    sort?: Maybe<SortInput>;
    filter?: Maybe<Scalars['FilterInput']>;
    showDeleted?: Maybe<Scalars['Boolean']>;
};

/**
 * Marketplace represents a collection of media channels, campaign templates and
 * vendors. A marketplace belongs to a single organization
 */
export type MarketplaceVendorsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    sort?: Maybe<SortInput>;
    filter?: Maybe<Scalars['FilterInput']>;
    showDeleted?: Maybe<Scalars['Boolean']>;
};

/**
 * Marketplace represents a collection of media channels, campaign templates and
 * vendors. A marketplace belongs to a single organization
 */
export type MarketplaceVendorTokensArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    sort?: Maybe<SortInput>;
    filter?: Maybe<Scalars['FilterInput']>;
};

/**
 * Marketplace represents a collection of media channels, campaign templates and
 * vendors. A marketplace belongs to a single organization
 */
export type MarketplaceCreativeTemplatesArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    sort?: Maybe<SortInput>;
    filter?: Maybe<Scalars['FilterInput']>;
    showDeleted?: Maybe<Scalars['Boolean']>;
};

/**
 * Marketplace represents a collection of media channels, campaign templates and
 * vendors. A marketplace belongs to a single organization
 */
export type MarketplaceProductsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    sort?: Maybe<SortInput>;
    filter?: Maybe<Scalars['FilterInput']>;
    showDeleted?: Maybe<Scalars['Boolean']>;
};

export type MarketplaceConnection = {
    /** Collection of this object */
    edges: Array<MarketplaceEdge>;
    /** Pagination information */
    pageInfo: PageInfo;
    /** Total count of this object */
    totalCount: Scalars['Int'];
};

export type MarketplaceEdge = {
    /** Record or data of this object */
    node: Marketplace;
    /** Base64 encoded string to help with pagination */
    cursor: Scalars['String'];
};

/** Marketplace creation input */
export type MarketplaceInput = {
    /** Name of the marketplace */
    name: Scalars['NonEmptyString'];
    /** Id of the organization referenced by the marketplace */
    organizationId: Scalars['ObjectId'];
};

/** Marketplace update input */
export type MarketplaceUpdateInput = {
    /** Name of the marketplace */
    name?: Maybe<Scalars['NonEmptyString']>;
};

export type Me = {
    /** Id of the user making this query */
    id: Scalars['ObjectId'];
    /** Date and time of the user making this query was created */
    creationDate: Scalars['DateISO'];
    /** Date and time of the user making this query was last modified */
    lastChangeDate: Scalars['DateISO'];
};

/** Media channel represents an ad account on a specific platform */
export type MediaChannel = EntitlementResource & {
    /** Unique identifier */
    id: Scalars['ObjectId'];
    /** Date and time of creation */
    creationDate: Scalars['DateISO'];
    /** Date and time of last updated */
    lastChangeDate: Scalars['DateISO'];
    /** Name of the media channel */
    name: Scalars['NonEmptyString'];
    /** System status of the media channel */
    systemStatus: SystemStatus;
    /** Validation errors of the media channel */
    errors?: Maybe<Array<Scalars['JSONObject']>>;
    /** Warnings of the media channel */
    warnings?: Maybe<Array<Scalars['JSONObject']>>;
    /** Platform the media channel is available for */
    platform: Platform;
    /** Id of the media channel on the corresponding platform */
    remoteId?: Maybe<Scalars['String']>;
    /** Data related to the media channel stored on the remote platform */
    remoteState: Scalars['JSONObject'];
    /** Currency code of the media channel */
    currency?: Maybe<Scalars['NonEmptyString']>;
    /** Currency code of the media channel */
    currencyCode?: Maybe<Scalars['String']>;
    /** Currency symbol of the media channel */
    currencySymbol?: Maybe<Scalars['NonEmptyString']>;
    /** Currency offset of the media channel that must be applied to monetary analytics values */
    currencyOffset?: Maybe<Scalars['Int']>;
    /** Time zone of the media channel */
    timezone?: Maybe<Scalars['NonEmptyString']>;
    /** Status of the platform authentication token */
    tokenStatus: TokenStatus;
    /** Product catalogs referenced by the media channel */
    catalogs: CatalogConnection;
    /** Marketplace related to the media channel */
    marketplace?: Maybe<Marketplace>;
};

/** Media channel represents an ad account on a specific platform */
export type MediaChannelCatalogsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    sort?: Maybe<SortInput>;
    filter?: Maybe<Scalars['FilterInput']>;
    showDeleted?: Maybe<Scalars['Boolean']>;
};

export type MediaChannelConnection = {
    /** Collection of this object */
    edges: Array<MediaChannelEdge>;
    /** Pagination information */
    pageInfo: PageInfo;
    /** Total count of this object */
    totalCount: Scalars['Int'];
};

/** Media channel creation input data */
export type MediaChannelCreateInput = {
    /** Name of the media channel */
    name: Scalars['NonEmptyString'];
    /** Id of the marketplace referenced by the media channel */
    marketplaceId: Scalars['ObjectId'];
    /** Platform the media channel is available for */
    platform: Platform;
    /** Media channel platform authentication token */
    token: Scalars['NonEmptyString'];
};

export type MediaChannelEdge = {
    /** Record or data of this object */
    node: MediaChannel;
    /** Base64 encoded string to help with pagination */
    cursor: Scalars['String'];
};

/** Media channel import input data */
export type MediaChannelImportInput = {
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
export type MediaChannelUpdateInput = {
    /** Name of the media channel */
    name?: Maybe<Scalars['NonEmptyString']>;
    /** Media channel platform authentication token */
    token?: Maybe<Scalars['NonEmptyString']>;
};

export type Mutation = {
    /** Authenticates the user using login input data */
    login: Token;
    /** Refreshed the user authentication using refresh login input data */
    refreshLogin: Token;
    /** Creates a product catalog using input data */
    createCatalog: Catalog;
    /** Imports a product catalog using input data */
    importCatalog: Catalog;
    /** Updates a product catalog identified by an id using input data */
    updateCatalog: Catalog;
    /** Updates a collection of product catalogs */
    updateCatalogs: CatalogConnection;
    /** Attempt synchronization of the product catalog with mediaChannel platforms, removing all errors on success */
    syncCatalog: Catalog;
    /** Attempt synchronization of the products of the catalog with mediaChannel platforms, removing all errors on success */
    syncCatalogProducts: Catalog;
    /**
     * Marks a product catalog and all its associated products by the catalog's given
     * id as DELETED. The catalog resource will not be deleted on the remote platform
     */
    deleteCatalog: Deletion;
    /** Creates a creative font using input data */
    createCreativeFont: CreativeFont;
    /** Updates a creative font identified by an id using input data */
    updateCreativeFont: CreativeFont;
    /** Updates a collection of creative fonts */
    updateCreativeFonts: CreativeFontConnection;
    /** Marks a creative font identified by an id as DELETED */
    deleteCreativeFont: Deletion;
    /** Creates a creative image using input data */
    createCreativeImage: CreativeImage;
    /** Updates a creative image identified by an id using input data */
    updateCreativeImage: CreativeImage;
    /** Updates a collection of creative images */
    updateCreativeImages: CreativeImageConnection;
    /** Marks a creative image identified by an id as DELETED */
    deleteCreativeImage: Deletion;
    /** Creates a creative layer using input data */
    createCreativeLayer: CreativeLayer;
    /** Updates a creative layer identified by an id using input data */
    updateCreativeLayer: CreativeLayer;
    /** Updates a collection of creative layers */
    updateCreativeLayers: CreativeLayerConnection;
    /** Marks a creative layer identified by an id as DELETED */
    deleteCreativeLayer: Deletion;
    /** Creates a creative template using input data */
    createCreativeTemplate: CreativeTemplate;
    /** Updates a creative template identified by an id using input data */
    updateCreativeTemplate: CreativeTemplate;
    /** Updates a collection of creative templates */
    updateCreativeTemplates: CreativeTemplateConnection;
    /** Marks a creative template identified by an id as DELETED */
    deleteCreativeTemplate: Deletion;
    /** Creates an entitlement using input data */
    createEntitlement: Entitlement;
    /** Updates an entitlement identified by an id using input data */
    updateEntitlement: Entitlement;
    /** Updates a collection of entitlements */
    updateEntitlements: EntitlementConnection;
    /** Marks an entitlement identified by an id as DELETED */
    deleteEntitlement: Deletion;
    /** Creates a marketing campaign using input data */
    createMarketingCampaign: MarketingCampaign;
    /** Updates a marketing campaign identified by a given id using input data */
    updateMarketingCampaign: MarketingCampaign;
    /** Updates a collection of marketing campaigns */
    updateMarketingCampaigns: MarketingCampaignConnection;
    /** Attempt synchronization of marketingCampaign with mediaChannel platforms, removing all errors on success */
    syncMarketingCampaign: MarketingCampaign;
    /** Approves a marketing campaign in PENDING_APPROVAL systemStatus */
    approveMarketingCampaign: MarketingCampaign;
    /** Marks a marketing campaign identified by an id as DELETED */
    deleteMarketingCampaign: Deletion;
    /** Creates a marketplace using input data */
    createMarketplace: Marketplace;
    /** Updates a marketplace identified by a given id using input data */
    updateMarketplace: Marketplace;
    /** Updates a collection of marketplaces */
    updateMarketplaces: MarketplaceConnection;
    /**
     * Marks a marketplace identified by an id as DELETED. The associated product
     * catalogs of this marketplace will also be marked as DELETED
     */
    deleteMarketplace: Deletion;
    /** Creates a media channel using input data */
    createMediaChannel: MediaChannel;
    /** Imports a media channel using input data */
    importMediaChannel: MediaChannel;
    /** Updates a media channel identified by an id using input data */
    updateMediaChannel: MediaChannel;
    /** Updates a collection of media channels */
    updateMediaChannels: MediaChannelConnection;
    /**
     * Marks a media channel identified by an id as DELETED. The associated results,
     * products and marketing ads of this media channel will also be marked as DELETED
     */
    deleteMediaChannel: Deletion;
    /** Updates a notification identified by a given id using input data */
    updateNotification: Notification;
    /** Updates a collection of notifications */
    updateNotifications: NotificationConnection;
    /** Creates an organization using input data */
    createOrganization: Organization;
    /** Updates an organization identified by a given id using input data */
    updateOrganization: Organization;
    /** Updates a collection of organizations */
    updateOrganizations: OrganizationConnection;
    /** Marks an organization identified by a given id as DELETED */
    deleteOrganization: Deletion;
    /** Creates a product using input data */
    createProduct: Product;
    /** Updates a product identified by an id using input data */
    updateProduct: Product;
    /** Updates a collection of products */
    updateProducts: ProductConnection;
    /** Marks a product identified by a given id as DELETED */
    deleteProduct: Deletion;
    /** Request an email containing a token and link to reset password */
    requestResetPassword: RequestResult;
    /** Use the reset password token to update user password */
    resetPassword: User;
    /** Updates the user using update input data */
    updateUser: User;
    /** Creates a vendor using input data */
    createVendor: Vendor;
    /** Updates a vendor identified by a given id using input data */
    updateVendor: Vendor;
    /** Updates a collection of vendors */
    updateVendors: VendorConnection;
    /** Marks a vendor identified by a given id as DELETED. The associated products of this vendor be marked as DELETED */
    deleteVendor: Deletion;
    /** Creates a vendor token using input data */
    createVendorToken: VendorToken;
    /** Login as a vendor */
    loginVendor: VendorToken;
    /** Sets the password of a vendor token */
    setVendorPassword: VendorToken;
    /** Deletes a vendor token identified by a given id */
    deleteVendorToken: Deletion;
};

export type MutationLoginArgs = {
    input: UserLoginInput;
};

export type MutationRefreshLoginArgs = {
    input: RefreshTokenInput;
};

export type MutationCreateCatalogArgs = {
    input: CatalogCreateInput;
};

export type MutationImportCatalogArgs = {
    input: CatalogImportInput;
};

export type MutationUpdateCatalogArgs = {
    input: CatalogUpdateInput;
    id: Scalars['ObjectId'];
};

export type MutationUpdateCatalogsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    sort?: Maybe<SortInput>;
    filter?: Maybe<Scalars['FilterInput']>;
    showDeleted?: Maybe<Scalars['Boolean']>;
    input: CatalogUpdateInput;
};

export type MutationSyncCatalogArgs = {
    input?: Maybe<CatalogSyncInput>;
    id: Scalars['ObjectId'];
};

export type MutationSyncCatalogProductsArgs = {
    id: Scalars['ObjectId'];
};

export type MutationDeleteCatalogArgs = {
    id: Scalars['ObjectId'];
};

export type MutationCreateCreativeFontArgs = {
    input: CreativeFontCreateInput;
};

export type MutationUpdateCreativeFontArgs = {
    input: CreativeFontUpdateInput;
    id: Scalars['ObjectId'];
};

export type MutationUpdateCreativeFontsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    sort?: Maybe<SortInput>;
    filter?: Maybe<Scalars['FilterInput']>;
    showDeleted?: Maybe<Scalars['Boolean']>;
    input: CreativeFontUpdateInput;
};

export type MutationDeleteCreativeFontArgs = {
    id: Scalars['ObjectId'];
};

export type MutationCreateCreativeImageArgs = {
    input: CreativeImageCreateInput;
};

export type MutationUpdateCreativeImageArgs = {
    input: CreativeImageUpdateInput;
    id: Scalars['ObjectId'];
};

export type MutationUpdateCreativeImagesArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    sort?: Maybe<SortInput>;
    filter?: Maybe<Scalars['FilterInput']>;
    showDeleted?: Maybe<Scalars['Boolean']>;
    input: CreativeImageUpdateInput;
};

export type MutationDeleteCreativeImageArgs = {
    id: Scalars['ObjectId'];
};

export type MutationCreateCreativeLayerArgs = {
    input: CreativeLayerCreateInput;
};

export type MutationUpdateCreativeLayerArgs = {
    input: CreativeLayerUpdateInput;
    id: Scalars['ObjectId'];
};

export type MutationUpdateCreativeLayersArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    sort?: Maybe<SortInput>;
    filter?: Maybe<Scalars['FilterInput']>;
    showDeleted?: Maybe<Scalars['Boolean']>;
    input: CreativeLayerUpdateInput;
};

export type MutationDeleteCreativeLayerArgs = {
    id: Scalars['ObjectId'];
};

export type MutationCreateCreativeTemplateArgs = {
    input: CreativeTemplateCreateInput;
};

export type MutationUpdateCreativeTemplateArgs = {
    input: CreativeTemplateUpdateInput;
    id: Scalars['ObjectId'];
};

export type MutationUpdateCreativeTemplatesArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    sort?: Maybe<SortInput>;
    filter?: Maybe<Scalars['FilterInput']>;
    showDeleted?: Maybe<Scalars['Boolean']>;
    input: CreativeTemplateUpdateInput;
};

export type MutationDeleteCreativeTemplateArgs = {
    id: Scalars['ObjectId'];
};

export type MutationCreateEntitlementArgs = {
    input: EntitlementInput;
};

export type MutationUpdateEntitlementArgs = {
    input: EntitlementUpdateInput;
    id: Scalars['ObjectId'];
};

export type MutationUpdateEntitlementsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    sort?: Maybe<SortInput>;
    filter?: Maybe<Scalars['FilterInput']>;
    input: EntitlementUpdateInput;
};

export type MutationDeleteEntitlementArgs = {
    id: Scalars['ObjectId'];
};

export type MutationCreateMarketingCampaignArgs = {
    input: MarketingCampaignInput;
};

export type MutationUpdateMarketingCampaignArgs = {
    input: MarketingCampaignUpdateInput;
    id: Scalars['ObjectId'];
};

export type MutationUpdateMarketingCampaignsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    sort?: Maybe<SortInput>;
    filter?: Maybe<Scalars['FilterInput']>;
    showDeleted?: Maybe<Scalars['Boolean']>;
    input: MarketingCampaignUpdateInput;
};

export type MutationSyncMarketingCampaignArgs = {
    input?: Maybe<MarketingCampaignSyncInput>;
    id: Scalars['ObjectId'];
};

export type MutationApproveMarketingCampaignArgs = {
    lastChangeDate: Scalars['DateISO'];
    id: Scalars['ObjectId'];
};

export type MutationDeleteMarketingCampaignArgs = {
    id: Scalars['ObjectId'];
};

export type MutationCreateMarketplaceArgs = {
    input: MarketplaceInput;
};

export type MutationUpdateMarketplaceArgs = {
    input: MarketplaceUpdateInput;
    id: Scalars['ObjectId'];
};

export type MutationUpdateMarketplacesArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    sort?: Maybe<SortInput>;
    filter?: Maybe<Scalars['FilterInput']>;
    showDeleted?: Maybe<Scalars['Boolean']>;
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
    input: MediaChannelUpdateInput;
    id: Scalars['ObjectId'];
};

export type MutationUpdateMediaChannelsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    sort?: Maybe<SortInput>;
    filter?: Maybe<Scalars['FilterInput']>;
    showDeleted?: Maybe<Scalars['Boolean']>;
    input: MediaChannelUpdateInput;
};

export type MutationDeleteMediaChannelArgs = {
    id: Scalars['ObjectId'];
};

export type MutationUpdateNotificationArgs = {
    input: NotificationUpdateInput;
    id: Scalars['ObjectId'];
};

export type MutationUpdateNotificationsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    sort?: Maybe<SortInput>;
    filter?: Maybe<Scalars['FilterInput']>;
    input: NotificationUpdateInput;
};

export type MutationCreateOrganizationArgs = {
    input: OrganizationInput;
};

export type MutationUpdateOrganizationArgs = {
    input: OrganizationUpdateInput;
    id: Scalars['ObjectId'];
};

export type MutationUpdateOrganizationsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    sort?: Maybe<SortInput>;
    filter?: Maybe<Scalars['FilterInput']>;
    showDeleted?: Maybe<Scalars['Boolean']>;
    input: OrganizationUpdateInput;
};

export type MutationDeleteOrganizationArgs = {
    id: Scalars['ObjectId'];
};

export type MutationCreateProductArgs = {
    input: ProductInput;
};

export type MutationUpdateProductArgs = {
    input: ProductUpdateInput;
    id: Scalars['ObjectId'];
};

export type MutationUpdateProductsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    sort?: Maybe<SortInput>;
    filter?: Maybe<Scalars['FilterInput']>;
    showDeleted?: Maybe<Scalars['Boolean']>;
    input: ProductUpdateInput;
};

export type MutationDeleteProductArgs = {
    id: Scalars['ObjectId'];
};

export type MutationRequestResetPasswordArgs = {
    input: RequestResetPasswordInput;
};

export type MutationResetPasswordArgs = {
    input: ResetPasswordInput;
};

export type MutationUpdateUserArgs = {
    input: UserUpdateInput;
};

export type MutationCreateVendorArgs = {
    input: VendorInput;
};

export type MutationUpdateVendorArgs = {
    input: VendorUpdateInput;
    id: Scalars['ObjectId'];
};

export type MutationUpdateVendorsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    sort?: Maybe<SortInput>;
    filter?: Maybe<Scalars['FilterInput']>;
    showDeleted?: Maybe<Scalars['Boolean']>;
    input: VendorUpdateInput;
};

export type MutationDeleteVendorArgs = {
    id: Scalars['ObjectId'];
};

export type MutationCreateVendorTokenArgs = {
    input: VendorTokenInput;
};

export type MutationLoginVendorArgs = {
    input: LoginVendorInput;
};

export type MutationSetVendorPasswordArgs = {
    input: SetVendorPasswordInput;
};

export type MutationDeleteVendorTokenArgs = {
    id: Scalars['ObjectId'];
};

/** A notification */
export type Notification = {
    /** Unique identifier */
    id: Scalars['ObjectId'];
    /** Date and time of creation */
    creationDate: Scalars['DateISO'];
    /** Date and time of last updated */
    lastChangeDate: Scalars['DateISO'];
    /** A short description of the notification */
    title: Scalars['String'];
    /** The message of the notification */
    message: Scalars['String'];
    /** Status of the notification */
    status: Notification_Status;
    /** Severity of the notification */
    severity: Notification_Severity;
    /** Code of the notification */
    code: Notification_Code;
    /** The source of the notification */
    source: Scalars['String'];
    /** Resource related to the notification */
    resource: NotificationResource;
};

/** Notification code */
export enum Notification_Code {
    CampaignIssue = 'CAMPAIGN_ISSUE',
    CampaignPerformance = 'CAMPAIGN_PERFORMANCE',
    CampaignInfo = 'CAMPAIGN_INFO',
}

/** Notification severity */
export enum Notification_Severity {
    Low = 'LOW',
    Medium = 'MEDIUM',
    High = 'HIGH',
}

/** Notification status */
export enum Notification_Status {
    Unread = 'UNREAD',
    Read = 'READ',
}

export type NotificationConnection = {
    /** Collection of this object */
    edges: Array<NotificationEdge>;
    /** Pagination information */
    pageInfo: PageInfo;
    /** Total count of this object */
    totalCount: Scalars['Int'];
};

export type NotificationEdge = {
    /** Record or data of this object */
    node: Notification;
    /** Base64 encoded string to help with pagination */
    cursor: Scalars['String'];
};

/** Resource referenced by a notification */
export type NotificationResource = {
    /** Id of the resource */
    id: Scalars['ObjectId'];
    /** Date and time the resource was created */
    creationDate: Scalars['DateISO'];
    /** Date and time the resource was last modified */
    lastChangeDate: Scalars['DateISO'];
    /** System status of the resource */
    systemStatus: SystemStatus;
    /** Validation errors of the resource */
    errors?: Maybe<Array<Scalars['JSONObject']>>;
    /** Warnings of the resource */
    warnings?: Maybe<Array<Scalars['JSONObject']>>;
};

/** Notification update input data */
export type NotificationUpdateInput = {
    /** Status of the notification */
    status?: Maybe<Notification_Status>;
};

/** Organization is the top level of your resources hierarchy and links to all owned marketplaces */
export type Organization = EntitlementResource & {
    /** Unique identifier */
    id: Scalars['ObjectId'];
    /** Date and time of creation */
    creationDate: Scalars['DateISO'];
    /** Date and time of last updated */
    lastChangeDate: Scalars['DateISO'];
    /** Name of the organization */
    name: Scalars['NonEmptyString'];
    /** System status of the organization */
    systemStatus: SystemStatus;
    /** Validation errors of the organization */
    errors?: Maybe<Array<Scalars['JSONObject']>>;
    /** Warnings of the organization */
    warnings?: Maybe<Array<Scalars['JSONObject']>>;
    /** Tier type of the organization */
    tier: OrganizationTierEnum;
    /** Users that are members of this organization */
    users: UserConnection;
    /** Marketplaces that belong to this organization */
    marketplaces: MarketplaceConnection;
};

/** Organization is the top level of your resources hierarchy and links to all owned marketplaces */
export type OrganizationUsersArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    sort?: Maybe<SortInput>;
    filter?: Maybe<Scalars['FilterInput']>;
};

/** Organization is the top level of your resources hierarchy and links to all owned marketplaces */
export type OrganizationMarketplacesArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    sort?: Maybe<SortInput>;
    filter?: Maybe<Scalars['FilterInput']>;
    showDeleted?: Maybe<Scalars['Boolean']>;
};

export type OrganizationConnection = {
    /** Collection of this object */
    edges: Array<OrganizationEdge>;
    /** Pagination information */
    pageInfo: PageInfo;
    /** Total count of this object */
    totalCount: Scalars['Int'];
};

export type OrganizationEdge = {
    /** Record or data of this object */
    node: Organization;
    /** Base64 encoded string to help with pagination */
    cursor: Scalars['String'];
};

/** Organization creation input data */
export type OrganizationInput = {
    /** Name of the organization */
    name: Scalars['NonEmptyString'];
};

/** Organization tier type */
export enum OrganizationTierEnum {
    Standard = 'Standard',
    Developer = 'Developer',
}

/** Organization update input data */
export type OrganizationUpdateInput = {
    /** Name of the organization */
    name?: Maybe<Scalars['NonEmptyString']>;
};

/** Pagination information */
export type PageInfo = {
    /** Id of the last object contained on the page */
    endCursor?: Maybe<Scalars['String']>;
    /** Id of the first object contained on the page */
    startCursor?: Maybe<Scalars['String']>;
    /** Whether there's more pages to retrieve after this page */
    hasNextPage: Scalars['Boolean'];
    /** Whether there's more pages to retrieve before this page */
    hasPreviousPage: Scalars['Boolean'];
};

/** Marketing platform */
export enum Platform {
    Facebook = 'facebook',
    Sandbox = 'sandbox',
}

/**
 * Product is a collection of data representing a single product associated with a
 * specific catalog and vendor which can be used to generate dynamic ads via a
 * marketing campaign
 */
export type Product = ResultResource & {
    /** Unique identifier */
    id: Scalars['ObjectId'];
    /** Date and time of creation */
    creationDate: Scalars['DateISO'];
    /** Date and time of last updated */
    lastChangeDate: Scalars['DateISO'];
    /** The source of the analytics used to derive results data */
    resultsSource: Array<Scalars['NonEmptyString']>;
    /** The custom key performance indicator used to derive results data */
    kpi?: Maybe<Scalars['String']>;
    /** Vendor owning the product */
    vendor?: Maybe<Vendor>;
    /** System status of the product */
    systemStatus: SystemStatus;
    /** Validation errors of the product */
    errors?: Maybe<Array<Scalars['JSONObject']>>;
    /** Validation warnings */
    warnings?: Maybe<Array<Scalars['JSONObject']>>;
    /** Name of the product */
    name: Scalars['NonEmptyString'];
    /** Stock keeping unit of the product */
    sku: Scalars['NonEmptyString'];
    /** Data related to the product stored on the remote platform */
    remoteState?: Maybe<Scalars['JSONObject']>;
    /** Data related to the product. [Product Metadata](https://docs.adgo.io/API/ProductMetadata) */
    metadata: Scalars['JSONObject'];
    /** True if the product was created externally and imported */
    imported: Scalars['Boolean'];
    /** Results related to the product */
    results: ResultConnection;
    /** Marketing campaigns referenced by the product */
    marketingCampaigns: MarketingCampaignConnection;
    /** Product catalog containing the product */
    catalog: Catalog;
};

/**
 * Product is a collection of data representing a single product associated with a
 * specific catalog and vendor which can be used to generate dynamic ads via a
 * marketing campaign
 */
export type ProductResultsArgs = {
    breakdown?: Maybe<ResultBreakdownTypeEnum>;
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    sort?: Maybe<SortInput>;
    filter?: Maybe<Scalars['FilterInput']>;
};

/**
 * Product is a collection of data representing a single product associated with a
 * specific catalog and vendor which can be used to generate dynamic ads via a
 * marketing campaign
 */
export type ProductMarketingCampaignsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    sort?: Maybe<SortInput>;
    filter?: Maybe<Scalars['FilterInput']>;
    showDeleted?: Maybe<Scalars['Boolean']>;
};

/** Source of products for a catalog */
export enum Product_Source {
    Cinnamon = 'CINNAMON',
    External = 'EXTERNAL',
}

export type ProductConnection = {
    /** Collection of this object */
    edges: Array<ProductEdge>;
    /** Pagination information */
    pageInfo: PageInfo;
    /** Total count of this object */
    totalCount: Scalars['Int'];
};

export type ProductEdge = {
    /** Record or data of this object */
    node: Product;
    /** Base64 encoded string to help with pagination */
    cursor: Scalars['String'];
};

/** Product creation input */
export type ProductInput = {
    /** Id of the vendor that owns the product */
    vendorId: Scalars['ObjectId'];
    /** Id of the product catalog containing the product */
    catalogId: Scalars['ObjectId'];
    /** Data related to the product. [Product Metadata](https://docs.adgo.io/API/ProductMetadata) */
    metadata: Scalars['JSONObject'];
};

/** Product update input data */
export type ProductUpdateInput = {
    /** Data related to the product. [Product Metadata](https://docs.adgo.io/API/ProductMetadata) */
    metadata: Scalars['JSONObject'];
};

export type Query = {
    /** Returns a single campaign template identified by a given id */
    campaignTemplate: CampaignTemplate;
    /** Returns a collection of campaign templates */
    campaignTemplates: CampaignTemplateConnection;
    /** Returns a collection of campaign templates that have a current GCPX */
    campaignTemplatesWithCurrentGCPX: CampaignTemplateConnection;
    /** Returns a single product catalog identified by a given id */
    catalog: Catalog;
    /** Returns a collection of product catalogs */
    catalogs: CatalogConnection;
    /** Returns a single creative font identified by a given id */
    creativeFont: CreativeFont;
    /** Returns a collection of creative fonts */
    creativeFonts: CreativeFontConnection;
    /** Returns a single creative image identified by a given id */
    creativeImage: CreativeImage;
    /** Returns a collection of creative images */
    creativeImages: CreativeImageConnection;
    /** Returns a single creative layer identified by a given id */
    creativeLayer: CreativeLayer;
    /** Returns a collection of creative layers */
    creativeLayers: CreativeLayerConnection;
    /** Returns a single creative template identified by a given id */
    creativeTemplate: CreativeTemplate;
    /** Returns a collection of creative templates */
    creativeTemplates: CreativeTemplateConnection;
    /** Returns a single entitlement identified by a given id */
    entitlement: Entitlement;
    /** Returns a collection of entitlements */
    entitlements: EntitlementConnection;
    /** Returns a single marketing ad identified by a given id */
    marketingAd: MarketingAd;
    /** Returns a collection of marketing ads */
    marketingAds: MarketingAdConnection;
    /** Returns a single marketing campaign identified by a given id */
    marketingCampaign: MarketingCampaign;
    /** Returns a collection of marketing campaigns */
    marketingCampaigns: MarketingCampaignConnection;
    /** Returns a single marketplace identified by a given id */
    marketplace: Marketplace;
    /** Returns a collection of marketplaces */
    marketplaces: MarketplaceConnection;
    /** Returns the user or vendor making this query */
    me: Me;
    /** Returns a single media channel identified by a given id */
    mediaChannel: MediaChannel;
    /** Returns a collection of media channels */
    mediaChannels: MediaChannelConnection;
    /** Returns a single notification identified by a given id */
    notification: Notification;
    /** Returns a collection of notifications */
    notifications: NotificationConnection;
    /** Returns a single organization identified by a given id */
    organization: Organization;
    /** Returns a collection of organizations */
    organizations: OrganizationConnection;
    /** Returns a single product identified by a given id */
    product: Product;
    /** Returns a collection of products */
    products: ProductConnection;
    /** Returns a single result identified by a given id */
    result: Result;
    /** Returns a collection of results */
    results: ResultConnection;
    /** Returns a single vendor identified by a given id */
    vendor: Vendor;
    /** Returns a collection of vendors */
    vendors: VendorConnection;
    /** Returns a single vendor token identified by a given id */
    vendorToken: VendorToken;
    /** Returns a collection of vendor tokens */
    vendorTokens: VendorTokenConnection;
};

export type QueryCampaignTemplateArgs = {
    id: Scalars['ObjectId'];
};

export type QueryCampaignTemplatesArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    sort?: Maybe<SortInput>;
    filter?: Maybe<Scalars['FilterInput']>;
    showDeleted?: Maybe<Scalars['Boolean']>;
};

export type QueryCampaignTemplatesWithCurrentGcpxArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    sort?: Maybe<SortInput>;
    filter?: Maybe<Scalars['FilterInput']>;
    showDeleted?: Maybe<Scalars['Boolean']>;
};

export type QueryCatalogArgs = {
    id: Scalars['ObjectId'];
};

export type QueryCatalogsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    sort?: Maybe<SortInput>;
    filter?: Maybe<Scalars['FilterInput']>;
    showDeleted?: Maybe<Scalars['Boolean']>;
};

export type QueryCreativeFontArgs = {
    id: Scalars['ObjectId'];
};

export type QueryCreativeFontsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    sort?: Maybe<SortInput>;
    filter?: Maybe<Scalars['FilterInput']>;
    showDeleted?: Maybe<Scalars['Boolean']>;
};

export type QueryCreativeImageArgs = {
    id: Scalars['ObjectId'];
};

export type QueryCreativeImagesArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    sort?: Maybe<SortInput>;
    filter?: Maybe<Scalars['FilterInput']>;
    showDeleted?: Maybe<Scalars['Boolean']>;
};

export type QueryCreativeLayerArgs = {
    id: Scalars['ObjectId'];
};

export type QueryCreativeLayersArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    sort?: Maybe<SortInput>;
    filter?: Maybe<Scalars['FilterInput']>;
    showDeleted?: Maybe<Scalars['Boolean']>;
};

export type QueryCreativeTemplateArgs = {
    id: Scalars['ObjectId'];
};

export type QueryCreativeTemplatesArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    sort?: Maybe<SortInput>;
    filter?: Maybe<Scalars['FilterInput']>;
    showDeleted?: Maybe<Scalars['Boolean']>;
};

export type QueryEntitlementArgs = {
    id: Scalars['ObjectId'];
};

export type QueryEntitlementsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    sort?: Maybe<SortInput>;
    filter?: Maybe<Scalars['FilterInput']>;
};

export type QueryMarketingAdArgs = {
    id: Scalars['ObjectId'];
};

export type QueryMarketingAdsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    sort?: Maybe<SortInput>;
    filter?: Maybe<Scalars['FilterInput']>;
    showDeleted?: Maybe<Scalars['Boolean']>;
};

export type QueryMarketingCampaignArgs = {
    id: Scalars['ObjectId'];
};

export type QueryMarketingCampaignsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    sort?: Maybe<SortInput>;
    filter?: Maybe<Scalars['FilterInput']>;
    showDeleted?: Maybe<Scalars['Boolean']>;
};

export type QueryMarketplaceArgs = {
    id: Scalars['ObjectId'];
};

export type QueryMarketplacesArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    sort?: Maybe<SortInput>;
    filter?: Maybe<Scalars['FilterInput']>;
    showDeleted?: Maybe<Scalars['Boolean']>;
};

export type QueryMediaChannelArgs = {
    id: Scalars['ObjectId'];
};

export type QueryMediaChannelsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    sort?: Maybe<SortInput>;
    filter?: Maybe<Scalars['FilterInput']>;
    showDeleted?: Maybe<Scalars['Boolean']>;
};

export type QueryNotificationArgs = {
    id: Scalars['ObjectId'];
};

export type QueryNotificationsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    sort?: Maybe<SortInput>;
    filter?: Maybe<Scalars['FilterInput']>;
};

export type QueryOrganizationArgs = {
    id: Scalars['ObjectId'];
};

export type QueryOrganizationsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    sort?: Maybe<SortInput>;
    filter?: Maybe<Scalars['FilterInput']>;
    showDeleted?: Maybe<Scalars['Boolean']>;
};

export type QueryProductArgs = {
    id: Scalars['ObjectId'];
};

export type QueryProductsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    sort?: Maybe<SortInput>;
    filter?: Maybe<Scalars['FilterInput']>;
    showDeleted?: Maybe<Scalars['Boolean']>;
};

export type QueryResultArgs = {
    id: Scalars['ObjectId'];
};

export type QueryResultsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    sort?: Maybe<SortInput>;
    filter?: Maybe<Scalars['FilterInput']>;
};

export type QueryVendorArgs = {
    id: Scalars['ObjectId'];
};

export type QueryVendorsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    sort?: Maybe<SortInput>;
    filter?: Maybe<Scalars['FilterInput']>;
    showDeleted?: Maybe<Scalars['Boolean']>;
};

export type QueryVendorTokenArgs = {
    id: Scalars['ObjectId'];
};

export type QueryVendorTokensArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    sort?: Maybe<SortInput>;
    filter?: Maybe<Scalars['FilterInput']>;
};

/** The target state to modify during a sync operation */
export enum ReconcileStateEnum {
    Local = 'LOCAL',
    Remote = 'REMOTE',
}

/** Refresh login input data */
export type RefreshTokenInput = {
    /** Secondary token value */
    refreshToken: Scalars['String'];
};

/** Request reset password input data */
export type RequestResetPasswordInput = {
    /** Email for the user requesting password reset */
    email: Scalars['NonEmptyString'];
};

/** Request result message */
export type RequestResult = {
    /** Message stating the result status */
    result: Scalars['String'];
};

/** Reset password input data */
export type ResetPasswordInput = {
    /** Reset password token received via email */
    token: Scalars['NonEmptyString'];
    /** New password */
    password: Scalars['NonEmptyString'];
};

/** Result */
export type Result = {
    /** Unique identifier */
    id: Scalars['ObjectId'];
    /** Date and time of creation */
    creationDate: Scalars['DateISO'];
    /** Date and time of last updated */
    lastChangeDate: Scalars['DateISO'];
    /** Date and time the result data was generated */
    date: Scalars['DateISO'];
    /** Analytics data related to the result */
    analytics: ResultAnalytics;
    /** Resource type related to the result */
    type: ResultResourceTypeEnum;
    /** Breakdown resource type related to the result */
    breakdownType: ResultBreakdownTypeEnum;
    /** Resource related to the result */
    resource: ResultResource;
    /** Breakdown resource related to the result */
    breakdown: ResultResource;
    /** Vendor related to the result */
    vendor?: Maybe<Vendor>;
};

/** Analytics data referenced by a result */
export type ResultAnalytics = {
    /** Number of results */
    results?: Maybe<Scalars['Int']>;
    /** Number of impressions */
    impressions?: Maybe<Scalars['Int']>;
    /** Number of clicks */
    clicks?: Maybe<Scalars['Int']>;
    /** Amount spent */
    spend?: Maybe<Scalars['Float']>;
    /** Number of purchases */
    purchases?: Maybe<Scalars['Int']>;
    /** Amount of purchases value */
    purchasesValue?: Maybe<Scalars['Float']>;
};

/** Breakdown related to a result */
export enum ResultBreakdownTypeEnum {
    MarketingAd = 'MarketingAd',
    MarketingCampaign = 'MarketingCampaign',
    Product = 'Product',
}

export type ResultConnection = {
    /** Collection of this object */
    edges: Array<ResultEdge>;
    /** Pagination information */
    pageInfo: PageInfo;
    /** Total count of this object */
    totalCount: Scalars['Int'];
};

export type ResultEdge = {
    /** Record or data of this object */
    node: Result;
    /** Base64 encoded string to help with pagination */
    cursor: Scalars['String'];
};

/** Resource referenced by a result */
export type ResultResource = {
    /** Id of the result resource */
    id: Scalars['ObjectId'];
    /** Date and time the result resource was created */
    creationDate: Scalars['DateISO'];
    /** Date and time the result resource was last modified */
    lastChangeDate: Scalars['DateISO'];
    /** The source of the analytics used to derive results data */
    resultsSource: Array<Scalars['NonEmptyString']>;
    /** The custom key performance indicator used to derive results data */
    kpi?: Maybe<Scalars['String']>;
    /** Vendor related with the result resource */
    vendor?: Maybe<Vendor>;
    /** System status of the resource */
    systemStatus: SystemStatus;
    /** Validation errors of the resource */
    errors?: Maybe<Array<Scalars['JSONObject']>>;
    /** Warnings of the resource */
    warnings?: Maybe<Array<Scalars['JSONObject']>>;
};

/** Resource related to a result */
export enum ResultResourceTypeEnum {
    MarketingAd = 'MarketingAd',
    MarketingCampaign = 'MarketingCampaign',
    Product = 'Product',
}

/** Vendor reset password input data */
export type SetVendorPasswordInput = {
    /** Id of the marketplace associated with the vendor login */
    marketplaceId: Scalars['ObjectId'];
    /** Email associated with the vendor login */
    email: Scalars['NonEmptyString'];
    /** Password associated with the vendor login */
    password: Scalars['NonEmptyString'];
};

/** Token used for a single user update */
export type SingleUseToken = {
    /** Unique identifier */
    id: Scalars['ObjectId'];
    /** Date and time of creation */
    creationDate: Scalars['DateISO'];
    /** Date and time of last updated */
    lastChangeDate: Scalars['DateISO'];
    /** Token string */
    token: Scalars['NonEmptyString'];
    /** User associated with the token */
    user: User;
};

export type SingleUseTokenConnection = {
    /** Collection of this object */
    edges: Array<SingleUseTokenEdge>;
    /** Pagination information */
    pageInfo: PageInfo;
    /** Total count of this object */
    totalCount: Scalars['Int'];
};

export type SingleUseTokenEdge = {
    /** Record or data of this object */
    node: SingleUseToken;
    /** Base64 encoded string to help with pagination */
    cursor: Scalars['String'];
};

/** Sorting direction */
export enum Sort_Order {
    Asc = 'ASC',
    Desc = 'DESC',
}

/** Sort input data */
export type SortInput = {
    /** Field that will be sorted in the specified direction */
    field?: Maybe<Scalars['NonEmptyString']>;
    /** Sorting direction */
    order?: Maybe<Sort_Order>;
};

/** System status */
export enum SystemStatus {
    Pending = 'PENDING',
    PendingSync = 'PENDING_SYNC',
    PendingDeletion = 'PENDING_DELETION',
    PendingApproval = 'PENDING_APPROVAL',
    Processing = 'PROCESSING',
    ProcessingSync = 'PROCESSING_SYNC',
    ProcessingDeletion = 'PROCESSING_DELETION',
    Processed = 'PROCESSED',
    Error = 'ERROR',
    Deleted = 'DELETED',
}

/** Authentication token */
export type Token = {
    /** Token value */
    token: Scalars['String'];
    /** Secondary token used to refresh authentication */
    refreshToken: Scalars['String'];
    /** Date and time the token will expire */
    expiryDate: Scalars['DateISO'];
    /** User the token was created for */
    user: User;
};

/** Status of the platform authentication token */
export enum TokenStatus {
    Pending = 'PENDING',
    Missing = 'MISSING',
    Valid = 'VALID',
    Invalid = 'INVALID',
}

/** User of the system that is granted access to resources through entitlements */
export type User = Me & {
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
    organizations: OrganizationConnection;
    /** Entitlements granting permissions to the user */
    entitlements: EntitlementConnection;
    /** Set to true to receive urgent emails such as deprecation notices and new releases */
    noticeOptIn: Scalars['Boolean'];
    /** Set to true to receive marketing emails such as "tips and hints" */
    newsletterOptIn: Scalars['Boolean'];
};

/** User of the system that is granted access to resources through entitlements */
export type UserOrganizationsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    sort?: Maybe<SortInput>;
    filter?: Maybe<Scalars['FilterInput']>;
    showDeleted?: Maybe<Scalars['Boolean']>;
};

/** User of the system that is granted access to resources through entitlements */
export type UserEntitlementsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    sort?: Maybe<SortInput>;
    filter?: Maybe<Scalars['FilterInput']>;
};

export type UserConnection = {
    /** Collection of this object */
    edges: Array<UserEdge>;
    /** Pagination information */
    pageInfo: PageInfo;
    /** Total count of this object */
    totalCount: Scalars['Int'];
};

export type UserEdge = {
    /** Record or data of this object */
    node: User;
    /** Base64 encoded string to help with pagination */
    cursor: Scalars['String'];
};

/** User login input data */
export type UserLoginInput = {
    /** Email used for the login */
    email: Scalars['NonEmptyString'];
    /** Password used for the login */
    password: Scalars['NonEmptyString'];
};

/** User update input data */
export type UserUpdateInput = {
    /** Email of the user */
    email?: Maybe<Scalars['NonEmptyString']>;
    /** First name of the user */
    firstName?: Maybe<Scalars['NonEmptyString']>;
    /** Last name of the user */
    lastName?: Maybe<Scalars['NonEmptyString']>;
    /** Password of the user */
    password?: Maybe<Scalars['NonEmptyString']>;
    /** Subscription status of user to notices */
    noticeOptIn?: Maybe<Scalars['Boolean']>;
    /** Subscription status of user to newsletter */
    newsletterOptIn?: Maybe<Scalars['Boolean']>;
};

/** Vendor belongs to a marketplace and is granted access to specific products they can use to create a marketing campaign */
export type Vendor = Me & {
    /** Unique identifier */
    id: Scalars['ObjectId'];
    /** Date and time of creation */
    creationDate: Scalars['DateISO'];
    /** Date and time of last updated */
    lastChangeDate: Scalars['DateISO'];
    /** Name of the vendor */
    name: Scalars['NonEmptyString'];
    /** System status of the vendor */
    systemStatus: SystemStatus;
    /** Validation errors of the vendor */
    errors?: Maybe<Array<Scalars['JSONObject']>>;
    /** Warnings of the vendor */
    warnings?: Maybe<Array<Scalars['JSONObject']>>;
    /** Marketplace referenced by the vendor */
    marketplace: Marketplace;
    /** Vendor tokens associated with the vendor that can be used to access the api */
    vendorTokens: VendorTokenConnection;
    /** Products related to the vendor */
    products: ProductConnection;
};

/** Vendor belongs to a marketplace and is granted access to specific products they can use to create a marketing campaign */
export type VendorVendorTokensArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    sort?: Maybe<SortInput>;
    filter?: Maybe<Scalars['FilterInput']>;
};

/** Vendor belongs to a marketplace and is granted access to specific products they can use to create a marketing campaign */
export type VendorProductsArgs = {
    first?: Maybe<Scalars['Int']>;
    last?: Maybe<Scalars['Int']>;
    after?: Maybe<Scalars['String']>;
    before?: Maybe<Scalars['String']>;
    sort?: Maybe<SortInput>;
    filter?: Maybe<Scalars['FilterInput']>;
    showDeleted?: Maybe<Scalars['Boolean']>;
};

export type VendorConnection = {
    /** Collection of this object */
    edges: Array<VendorEdge>;
    /** Pagination information */
    pageInfo: PageInfo;
    /** Total count of this object */
    totalCount: Scalars['Int'];
};

export type VendorEdge = {
    /** Record or data of this object */
    node: Vendor;
    /** Base64 encoded string to help with pagination */
    cursor: Scalars['String'];
};

/** Vendor creation input data */
export type VendorInput = {
    /** Name of the vendor */
    name: Scalars['NonEmptyString'];
    /** Id of the marketplace referenced by the vendor */
    marketplaceId: Scalars['ObjectId'];
};

/** Vendor token is an API access token associated with a vendor and marketplace */
export type VendorToken = {
    /** Unique identifier */
    id: Scalars['ObjectId'];
    /** Date and time of creation */
    creationDate: Scalars['DateISO'];
    /** Date and time of last updated */
    lastChangeDate: Scalars['DateISO'];
    /** API access token associated with the vendor */
    token: Scalars['String'];
    /** Vendor associated with the vendor token */
    vendor: Vendor;
    /** Marketplace associated with the vendor token */
    marketplace: Marketplace;
    /** Email associated with the vendor token */
    email?: Maybe<Scalars['NonEmptyString']>;
};

export type VendorTokenConnection = {
    /** Collection of this object */
    edges: Array<VendorTokenEdge>;
    /** Pagination information */
    pageInfo: PageInfo;
    /** Total count of this object */
    totalCount: Scalars['Int'];
};

export type VendorTokenEdge = {
    /** Record or data of this object */
    node: VendorToken;
    /** Base64 encoded string to help with pagination */
    cursor: Scalars['String'];
};

/** Vendor token creation input data */
export type VendorTokenInput = {
    /** Id of the vendor associated with the vendor login */
    vendorId: Scalars['ObjectId'];
    /** Email to associate with the vendor login */
    email?: Maybe<Scalars['NonEmptyString']>;
    /** Password to associate with the vendor login */
    password?: Maybe<Scalars['NonEmptyString']>;
};

/** Vendor update input data */
export type VendorUpdateInput = {
    /** Name of the vendor */
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
    SystemStatus: SystemStatus;
    JSONObject: ResolverTypeWrapper<Scalars['JSONObject']>;
    Marketplace: ResolverTypeWrapper<Marketplace>;
    EntitlementResource: ResolverTypeWrapper<EntitlementResource>;
    Int: ResolverTypeWrapper<Scalars['Int']>;
    Organization: ResolverTypeWrapper<Organization>;
    OrganizationTierEnum: OrganizationTierEnum;
    SortInput: SortInput;
    SORT_ORDER: Sort_Order;
    FilterInput: ResolverTypeWrapper<Scalars['FilterInput']>;
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
    MediaChannelConnection: ResolverTypeWrapper<MediaChannelConnection>;
    MediaChannelEdge: ResolverTypeWrapper<MediaChannelEdge>;
    MediaChannel: ResolverTypeWrapper<MediaChannel>;
    TokenStatus: TokenStatus;
    CatalogConnection: ResolverTypeWrapper<CatalogConnection>;
    CatalogEdge: ResolverTypeWrapper<CatalogEdge>;
    Catalog: ResolverTypeWrapper<Catalog>;
    CatalogType: CatalogType;
    PRODUCT_SOURCE: Product_Source;
    ProductConnection: ResolverTypeWrapper<ProductConnection>;
    ProductEdge: ResolverTypeWrapper<ProductEdge>;
    Product: ResolverTypeWrapper<Product>;
    ResultResource: ResolverTypeWrapper<ResultResource>;
    Vendor: ResolverTypeWrapper<Vendor>;
    VendorTokenConnection: ResolverTypeWrapper<VendorTokenConnection>;
    VendorTokenEdge: ResolverTypeWrapper<VendorTokenEdge>;
    VendorToken: ResolverTypeWrapper<VendorToken>;
    ResultBreakdownTypeEnum: ResultBreakdownTypeEnum;
    ResultConnection: ResolverTypeWrapper<ResultConnection>;
    ResultEdge: ResolverTypeWrapper<ResultEdge>;
    Result: ResolverTypeWrapper<Result>;
    ResultAnalytics: ResolverTypeWrapper<ResultAnalytics>;
    Float: ResolverTypeWrapper<Scalars['Float']>;
    ResultResourceTypeEnum: ResultResourceTypeEnum;
    MarketingCampaignConnection: ResolverTypeWrapper<
        MarketingCampaignConnection
    >;
    MarketingCampaignEdge: ResolverTypeWrapper<MarketingCampaignEdge>;
    MarketingCampaign: ResolverTypeWrapper<MarketingCampaign>;
    NotificationResource: ResolverTypeWrapper<NotificationResource>;
    MarketingCampaignStatus: MarketingCampaignStatus;
    GCPX: ResolverTypeWrapper<Gcpx>;
    MarketingAdConnection: ResolverTypeWrapper<MarketingAdConnection>;
    MarketingAdEdge: ResolverTypeWrapper<MarketingAdEdge>;
    MarketingAd: ResolverTypeWrapper<MarketingAd>;
    AdPreview: ResolverTypeWrapper<AdPreview>;
    NotificationConnection: ResolverTypeWrapper<NotificationConnection>;
    NotificationEdge: ResolverTypeWrapper<NotificationEdge>;
    Notification: ResolverTypeWrapper<Notification>;
    NOTIFICATION_STATUS: Notification_Status;
    NOTIFICATION_SEVERITY: Notification_Severity;
    NOTIFICATION_CODE: Notification_Code;
    CampaignTemplateConnection: ResolverTypeWrapper<CampaignTemplateConnection>;
    CampaignTemplateEdge: ResolverTypeWrapper<CampaignTemplateEdge>;
    VendorConnection: ResolverTypeWrapper<VendorConnection>;
    VendorEdge: ResolverTypeWrapper<VendorEdge>;
    CreativeTemplateConnection: ResolverTypeWrapper<CreativeTemplateConnection>;
    CreativeTemplateEdge: ResolverTypeWrapper<CreativeTemplateEdge>;
    CreativeTemplate: ResolverTypeWrapper<CreativeTemplate>;
    CreativeLayerConnection: ResolverTypeWrapper<CreativeLayerConnection>;
    CreativeLayerEdge: ResolverTypeWrapper<CreativeLayerEdge>;
    CreativeLayer: ResolverTypeWrapper<CreativeLayer>;
    CreativeLayerTypes: CreativeLayerTypes;
    GCPXConnection: ResolverTypeWrapper<GcpxConnection>;
    GCPXEdge: ResolverTypeWrapper<GcpxEdge>;
    CreativeFont: ResolverTypeWrapper<CreativeFont>;
    CreativeFontConnection: ResolverTypeWrapper<CreativeFontConnection>;
    CreativeFontEdge: ResolverTypeWrapper<CreativeFontEdge>;
    CreativeImage: ResolverTypeWrapper<CreativeImage>;
    CreativeImageConnection: ResolverTypeWrapper<CreativeImageConnection>;
    CreativeImageEdge: ResolverTypeWrapper<CreativeImageEdge>;
    Mutation: ResolverTypeWrapper<{}>;
    UserLoginInput: UserLoginInput;
    Token: ResolverTypeWrapper<Token>;
    RefreshTokenInput: RefreshTokenInput;
    CatalogCreateInput: CatalogCreateInput;
    CatalogImportInput: CatalogImportInput;
    CatalogUpdateInput: CatalogUpdateInput;
    CatalogSyncInput: CatalogSyncInput;
    ReconcileStateEnum: ReconcileStateEnum;
    Deletion: ResolverTypeWrapper<Deletion>;
    CreativeFontCreateInput: CreativeFontCreateInput;
    CreativeFontUpdateInput: CreativeFontUpdateInput;
    CreativeImageCreateInput: CreativeImageCreateInput;
    CreativeImageUpdateInput: CreativeImageUpdateInput;
    CreativeLayerCreateInput: CreativeLayerCreateInput;
    CreativeLayerUpdateInput: CreativeLayerUpdateInput;
    CreativeTemplateCreateInput: CreativeTemplateCreateInput;
    CreativeTemplateUpdateInput: CreativeTemplateUpdateInput;
    EntitlementInput: EntitlementInput;
    EntitlementUpdateInput: EntitlementUpdateInput;
    MarketingCampaignInput: MarketingCampaignInput;
    MarketingCampaignUpdateInput: MarketingCampaignUpdateInput;
    MarketingCampaignSyncInput: MarketingCampaignSyncInput;
    MarketplaceInput: MarketplaceInput;
    MarketplaceUpdateInput: MarketplaceUpdateInput;
    MediaChannelCreateInput: MediaChannelCreateInput;
    MediaChannelImportInput: MediaChannelImportInput;
    MediaChannelUpdateInput: MediaChannelUpdateInput;
    NotificationUpdateInput: NotificationUpdateInput;
    OrganizationInput: OrganizationInput;
    OrganizationUpdateInput: OrganizationUpdateInput;
    ProductInput: ProductInput;
    ProductUpdateInput: ProductUpdateInput;
    RequestResetPasswordInput: RequestResetPasswordInput;
    RequestResult: ResolverTypeWrapper<RequestResult>;
    ResetPasswordInput: ResetPasswordInput;
    UserUpdateInput: UserUpdateInput;
    VendorInput: VendorInput;
    VendorUpdateInput: VendorUpdateInput;
    VendorTokenInput: VendorTokenInput;
    LoginVendorInput: LoginVendorInput;
    SetVendorPasswordInput: SetVendorPasswordInput;
    MarketingCampaignSnapshot: ResolverTypeWrapper<MarketingCampaignSnapshot>;
    MarketingCampaignSnapshotConnection: ResolverTypeWrapper<
        MarketingCampaignSnapshotConnection
    >;
    MarketingCampaignSnapshotEdge: ResolverTypeWrapper<
        MarketingCampaignSnapshotEdge
    >;
    SingleUseToken: ResolverTypeWrapper<SingleUseToken>;
    SingleUseTokenConnection: ResolverTypeWrapper<SingleUseTokenConnection>;
    SingleUseTokenEdge: ResolverTypeWrapper<SingleUseTokenEdge>;
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
    SystemStatus: SystemStatus;
    JSONObject: Scalars['JSONObject'];
    Marketplace: Marketplace;
    EntitlementResource: EntitlementResource;
    Int: Scalars['Int'];
    Organization: Organization;
    OrganizationTierEnum: OrganizationTierEnum;
    SortInput: SortInput;
    SORT_ORDER: Sort_Order;
    FilterInput: Scalars['FilterInput'];
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
    MediaChannelConnection: MediaChannelConnection;
    MediaChannelEdge: MediaChannelEdge;
    MediaChannel: MediaChannel;
    TokenStatus: TokenStatus;
    CatalogConnection: CatalogConnection;
    CatalogEdge: CatalogEdge;
    Catalog: Catalog;
    CatalogType: CatalogType;
    PRODUCT_SOURCE: Product_Source;
    ProductConnection: ProductConnection;
    ProductEdge: ProductEdge;
    Product: Product;
    ResultResource: ResultResource;
    Vendor: Vendor;
    VendorTokenConnection: VendorTokenConnection;
    VendorTokenEdge: VendorTokenEdge;
    VendorToken: VendorToken;
    ResultBreakdownTypeEnum: ResultBreakdownTypeEnum;
    ResultConnection: ResultConnection;
    ResultEdge: ResultEdge;
    Result: Result;
    ResultAnalytics: ResultAnalytics;
    Float: Scalars['Float'];
    ResultResourceTypeEnum: ResultResourceTypeEnum;
    MarketingCampaignConnection: MarketingCampaignConnection;
    MarketingCampaignEdge: MarketingCampaignEdge;
    MarketingCampaign: MarketingCampaign;
    NotificationResource: NotificationResource;
    MarketingCampaignStatus: MarketingCampaignStatus;
    GCPX: Gcpx;
    MarketingAdConnection: MarketingAdConnection;
    MarketingAdEdge: MarketingAdEdge;
    MarketingAd: MarketingAd;
    AdPreview: AdPreview;
    NotificationConnection: NotificationConnection;
    NotificationEdge: NotificationEdge;
    Notification: Notification;
    NOTIFICATION_STATUS: Notification_Status;
    NOTIFICATION_SEVERITY: Notification_Severity;
    NOTIFICATION_CODE: Notification_Code;
    CampaignTemplateConnection: CampaignTemplateConnection;
    CampaignTemplateEdge: CampaignTemplateEdge;
    VendorConnection: VendorConnection;
    VendorEdge: VendorEdge;
    CreativeTemplateConnection: CreativeTemplateConnection;
    CreativeTemplateEdge: CreativeTemplateEdge;
    CreativeTemplate: CreativeTemplate;
    CreativeLayerConnection: CreativeLayerConnection;
    CreativeLayerEdge: CreativeLayerEdge;
    CreativeLayer: CreativeLayer;
    CreativeLayerTypes: CreativeLayerTypes;
    GCPXConnection: GcpxConnection;
    GCPXEdge: GcpxEdge;
    CreativeFont: CreativeFont;
    CreativeFontConnection: CreativeFontConnection;
    CreativeFontEdge: CreativeFontEdge;
    CreativeImage: CreativeImage;
    CreativeImageConnection: CreativeImageConnection;
    CreativeImageEdge: CreativeImageEdge;
    Mutation: {};
    UserLoginInput: UserLoginInput;
    Token: Token;
    RefreshTokenInput: RefreshTokenInput;
    CatalogCreateInput: CatalogCreateInput;
    CatalogImportInput: CatalogImportInput;
    CatalogUpdateInput: CatalogUpdateInput;
    CatalogSyncInput: CatalogSyncInput;
    ReconcileStateEnum: ReconcileStateEnum;
    Deletion: Deletion;
    CreativeFontCreateInput: CreativeFontCreateInput;
    CreativeFontUpdateInput: CreativeFontUpdateInput;
    CreativeImageCreateInput: CreativeImageCreateInput;
    CreativeImageUpdateInput: CreativeImageUpdateInput;
    CreativeLayerCreateInput: CreativeLayerCreateInput;
    CreativeLayerUpdateInput: CreativeLayerUpdateInput;
    CreativeTemplateCreateInput: CreativeTemplateCreateInput;
    CreativeTemplateUpdateInput: CreativeTemplateUpdateInput;
    EntitlementInput: EntitlementInput;
    EntitlementUpdateInput: EntitlementUpdateInput;
    MarketingCampaignInput: MarketingCampaignInput;
    MarketingCampaignUpdateInput: MarketingCampaignUpdateInput;
    MarketingCampaignSyncInput: MarketingCampaignSyncInput;
    MarketplaceInput: MarketplaceInput;
    MarketplaceUpdateInput: MarketplaceUpdateInput;
    MediaChannelCreateInput: MediaChannelCreateInput;
    MediaChannelImportInput: MediaChannelImportInput;
    MediaChannelUpdateInput: MediaChannelUpdateInput;
    NotificationUpdateInput: NotificationUpdateInput;
    OrganizationInput: OrganizationInput;
    OrganizationUpdateInput: OrganizationUpdateInput;
    ProductInput: ProductInput;
    ProductUpdateInput: ProductUpdateInput;
    RequestResetPasswordInput: RequestResetPasswordInput;
    RequestResult: RequestResult;
    ResetPasswordInput: ResetPasswordInput;
    UserUpdateInput: UserUpdateInput;
    VendorInput: VendorInput;
    VendorUpdateInput: VendorUpdateInput;
    VendorTokenInput: VendorTokenInput;
    LoginVendorInput: LoginVendorInput;
    SetVendorPasswordInput: SetVendorPasswordInput;
    MarketingCampaignSnapshot: MarketingCampaignSnapshot;
    MarketingCampaignSnapshotConnection: MarketingCampaignSnapshotConnection;
    MarketingCampaignSnapshotEdge: MarketingCampaignSnapshotEdge;
    SingleUseToken: SingleUseToken;
    SingleUseTokenConnection: SingleUseTokenConnection;
    SingleUseTokenEdge: SingleUseTokenEdge;
};

export type AdPreviewResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['AdPreview'] = ResolversParentTypes['AdPreview']
> = {
    url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    dimensions?: Resolver<
        Array<ResolversTypes['Int']>,
        ParentType,
        ContextType
    >;
    placement?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

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
    kpi?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    marketplace?: Resolver<
        ResolversTypes['Marketplace'],
        ParentType,
        ContextType
    >;
    marketingCampaigns?: Resolver<
        ResolversTypes['MarketingCampaignConnection'],
        ParentType,
        ContextType,
        RequireFields<CampaignTemplateMarketingCampaignsArgs, 'showDeleted'>
    >;
    GCPXHistory?: Resolver<
        ResolversTypes['GCPXConnection'],
        ParentType,
        ContextType,
        CampaignTemplateGcpxHistoryArgs
    >;
    currentGCPX?: Resolver<
        Maybe<ResolversTypes['GCPX']>,
        ParentType,
        ContextType
    >;
};

export type CampaignTemplateConnectionResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['CampaignTemplateConnection'] = ResolversParentTypes['CampaignTemplateConnection']
> = {
    edges?: Resolver<
        Array<ResolversTypes['CampaignTemplateEdge']>,
        ParentType,
        ContextType
    >;
    pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
    totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type CampaignTemplateEdgeResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['CampaignTemplateEdge'] = ResolversParentTypes['CampaignTemplateEdge']
> = {
    node?: Resolver<
        ResolversTypes['CampaignTemplate'],
        ParentType,
        ContextType
    >;
    cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type CatalogResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['Catalog'] = ResolversParentTypes['Catalog']
> = {
    id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    creationDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    lastChangeDate?: Resolver<
        ResolversTypes['DateISO'],
        ParentType,
        ContextType
    >;
    name?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
    catalogType?: Resolver<
        ResolversTypes['CatalogType'],
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
    externalEventSourceIds?: Resolver<
        Array<ResolversTypes['String']>,
        ParentType,
        ContextType
    >;
    productSource?: Resolver<
        ResolversTypes['PRODUCT_SOURCE'],
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
    mediaChannel?: Resolver<
        ResolversTypes['MediaChannel'],
        ParentType,
        ContextType
    >;
    products?: Resolver<
        ResolversTypes['ProductConnection'],
        ParentType,
        ContextType,
        RequireFields<CatalogProductsArgs, 'showDeleted'>
    >;
};

export type CatalogConnectionResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['CatalogConnection'] = ResolversParentTypes['CatalogConnection']
> = {
    edges?: Resolver<
        Array<ResolversTypes['CatalogEdge']>,
        ParentType,
        ContextType
    >;
    pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
    totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type CatalogEdgeResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['CatalogEdge'] = ResolversParentTypes['CatalogEdge']
> = {
    node?: Resolver<ResolversTypes['Catalog'], ParentType, ContextType>;
    cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type CreativeFontResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['CreativeFont'] = ResolversParentTypes['CreativeFont']
> = {
    id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    creationDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    lastChangeDate?: Resolver<
        ResolversTypes['DateISO'],
        ParentType,
        ContextType
    >;
    name?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
    url?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
    properties?: Resolver<
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
    warnings?: Resolver<
        Maybe<Array<ResolversTypes['JSONObject']>>,
        ParentType,
        ContextType
    >;
    marketplace?: Resolver<
        ResolversTypes['Marketplace'],
        ParentType,
        ContextType
    >;
};

export type CreativeFontConnectionResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['CreativeFontConnection'] = ResolversParentTypes['CreativeFontConnection']
> = {
    edges?: Resolver<
        Array<ResolversTypes['CreativeFontEdge']>,
        ParentType,
        ContextType
    >;
    pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
    totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type CreativeFontEdgeResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['CreativeFontEdge'] = ResolversParentTypes['CreativeFontEdge']
> = {
    node?: Resolver<ResolversTypes['CreativeFont'], ParentType, ContextType>;
    cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type CreativeImageResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['CreativeImage'] = ResolversParentTypes['CreativeImage']
> = {
    id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    creationDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    lastChangeDate?: Resolver<
        ResolversTypes['DateISO'],
        ParentType,
        ContextType
    >;
    name?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
    url?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
    properties?: Resolver<
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
    warnings?: Resolver<
        Maybe<Array<ResolversTypes['JSONObject']>>,
        ParentType,
        ContextType
    >;
    marketplace?: Resolver<
        ResolversTypes['Marketplace'],
        ParentType,
        ContextType
    >;
};

export type CreativeImageConnectionResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['CreativeImageConnection'] = ResolversParentTypes['CreativeImageConnection']
> = {
    edges?: Resolver<
        Array<ResolversTypes['CreativeImageEdge']>,
        ParentType,
        ContextType
    >;
    pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
    totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type CreativeImageEdgeResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['CreativeImageEdge'] = ResolversParentTypes['CreativeImageEdge']
> = {
    node?: Resolver<ResolversTypes['CreativeImage'], ParentType, ContextType>;
    cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type CreativeLayerResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['CreativeLayer'] = ResolversParentTypes['CreativeLayer']
> = {
    id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    creationDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    lastChangeDate?: Resolver<
        ResolversTypes['DateISO'],
        ParentType,
        ContextType
    >;
    name?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
    height?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    width?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    x?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    y?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    order?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    type?: Resolver<
        ResolversTypes['CreativeLayerTypes'],
        ParentType,
        ContextType
    >;
    properties?: Resolver<
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
    warnings?: Resolver<
        Maybe<Array<ResolversTypes['JSONObject']>>,
        ParentType,
        ContextType
    >;
    creativeTemplate?: Resolver<
        ResolversTypes['CreativeTemplate'],
        ParentType,
        ContextType
    >;
};

export type CreativeLayerConnectionResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['CreativeLayerConnection'] = ResolversParentTypes['CreativeLayerConnection']
> = {
    edges?: Resolver<
        Array<ResolversTypes['CreativeLayerEdge']>,
        ParentType,
        ContextType
    >;
    pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
    totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type CreativeLayerEdgeResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['CreativeLayerEdge'] = ResolversParentTypes['CreativeLayerEdge']
> = {
    node?: Resolver<ResolversTypes['CreativeLayer'], ParentType, ContextType>;
    cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type CreativeTemplateResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['CreativeTemplate'] = ResolversParentTypes['CreativeTemplate']
> = {
    id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    creationDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    lastChangeDate?: Resolver<
        ResolversTypes['DateISO'],
        ParentType,
        ContextType
    >;
    name?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
    height?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    width?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
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
    marketplace?: Resolver<
        ResolversTypes['Marketplace'],
        ParentType,
        ContextType
    >;
    marketingCampaigns?: Resolver<
        ResolversTypes['MarketingCampaignConnection'],
        ParentType,
        ContextType,
        RequireFields<CreativeTemplateMarketingCampaignsArgs, 'showDeleted'>
    >;
    creativeLayers?: Resolver<
        ResolversTypes['CreativeLayerConnection'],
        ParentType,
        ContextType,
        RequireFields<CreativeTemplateCreativeLayersArgs, 'showDeleted'>
    >;
};

export type CreativeTemplateConnectionResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['CreativeTemplateConnection'] = ResolversParentTypes['CreativeTemplateConnection']
> = {
    edges?: Resolver<
        Array<ResolversTypes['CreativeTemplateEdge']>,
        ParentType,
        ContextType
    >;
    pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
    totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type CreativeTemplateEdgeResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['CreativeTemplateEdge'] = ResolversParentTypes['CreativeTemplateEdge']
> = {
    node?: Resolver<
        ResolversTypes['CreativeTemplate'],
        ParentType,
        ContextType
    >;
    cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
    type?: Resolver<
        ResolversTypes['EntitlementResourceTypeEnum'],
        ParentType,
        ContextType
    >;
    permissions?: Resolver<
        Array<ResolversTypes['AuthPermission']>,
        ParentType,
        ContextType
    >;
    user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
    resource?: Resolver<
        ResolversTypes['EntitlementResource'],
        ParentType,
        ContextType
    >;
};

export type EntitlementConnectionResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['EntitlementConnection'] = ResolversParentTypes['EntitlementConnection']
> = {
    edges?: Resolver<
        Array<ResolversTypes['EntitlementEdge']>,
        ParentType,
        ContextType
    >;
    pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
    totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type EntitlementEdgeResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['EntitlementEdge'] = ResolversParentTypes['EntitlementEdge']
> = {
    node?: Resolver<ResolversTypes['Entitlement'], ParentType, ContextType>;
    cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
    creationDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    lastChangeDate?: Resolver<
        ResolversTypes['DateISO'],
        ParentType,
        ContextType
    >;
    name?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
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

export interface FilterInputScalarConfig
    extends GraphQLScalarTypeConfig<ResolversTypes['FilterInput'], any> {
    name: 'FilterInput';
}

export type GcpxResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['GCPX'] = ResolversParentTypes['GCPX']
> = {
    id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    creationDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    lastChangeDate?: Resolver<
        ResolversTypes['DateISO'],
        ParentType,
        ContextType
    >;
    kpi?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    price?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    startDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    endDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    minConversions?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    maxConversions?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    campaignTemplate?: Resolver<
        ResolversTypes['CampaignTemplate'],
        ParentType,
        ContextType
    >;
    marketplace?: Resolver<
        ResolversTypes['Marketplace'],
        ParentType,
        ContextType
    >;
    marketingCampaigns?: Resolver<
        ResolversTypes['MarketingCampaignConnection'],
        ParentType,
        ContextType,
        RequireFields<GcpxMarketingCampaignsArgs, 'showDeleted'>
    >;
};

export type GcpxConnectionResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['GCPXConnection'] = ResolversParentTypes['GCPXConnection']
> = {
    edges?: Resolver<
        Array<ResolversTypes['GCPXEdge']>,
        ParentType,
        ContextType
    >;
    pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
    totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type GcpxEdgeResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['GCPXEdge'] = ResolversParentTypes['GCPXEdge']
> = {
    node?: Resolver<ResolversTypes['GCPX'], ParentType, ContextType>;
    cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
    resultsSource?: Resolver<
        Array<ResolversTypes['NonEmptyString']>,
        ParentType,
        ContextType
    >;
    kpi?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    vendor?: Resolver<Maybe<ResolversTypes['Vendor']>, ParentType, ContextType>;
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
    remoteId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    preview?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    adPreviews?: Resolver<
        Array<ResolversTypes['AdPreview']>,
        ParentType,
        ContextType
    >;
    results?: Resolver<
        ResolversTypes['ResultConnection'],
        ParentType,
        ContextType,
        RequireFields<MarketingAdResultsArgs, 'breakdown'>
    >;
    marketingCampaign?: Resolver<
        ResolversTypes['MarketingCampaign'],
        ParentType,
        ContextType
    >;
};

export type MarketingAdConnectionResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['MarketingAdConnection'] = ResolversParentTypes['MarketingAdConnection']
> = {
    edges?: Resolver<
        Array<ResolversTypes['MarketingAdEdge']>,
        ParentType,
        ContextType
    >;
    pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
    totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type MarketingAdEdgeResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['MarketingAdEdge'] = ResolversParentTypes['MarketingAdEdge']
> = {
    node?: Resolver<ResolversTypes['MarketingAd'], ParentType, ContextType>;
    cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
    resultsSource?: Resolver<
        Array<ResolversTypes['NonEmptyString']>,
        ParentType,
        ContextType
    >;
    kpi?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    vendor?: Resolver<Maybe<ResolversTypes['Vendor']>, ParentType, ContextType>;
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
    name?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
    status?: Resolver<
        ResolversTypes['MarketingCampaignStatus'],
        ParentType,
        ContextType
    >;
    creativeSpec?: Resolver<
        ResolversTypes['JSONObject'],
        ParentType,
        ContextType
    >;
    runTimeSpec?: Resolver<
        Maybe<ResolversTypes['JSONObject']>,
        ParentType,
        ContextType
    >;
    locationSpec?: Resolver<
        ResolversTypes['JSONObject'],
        ParentType,
        ContextType
    >;
    conversionSpec?: Resolver<
        Maybe<ResolversTypes['JSONObject']>,
        ParentType,
        ContextType
    >;
    startDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    endDate?: Resolver<
        Maybe<ResolversTypes['DateISO']>,
        ParentType,
        ContextType
    >;
    productFilter?: Resolver<
        Maybe<Array<Array<ResolversTypes['JSONObject']>>>,
        ParentType,
        ContextType
    >;
    GCPX?: Resolver<Maybe<ResolversTypes['GCPX']>, ParentType, ContextType>;
    delivering?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
    marketingAds?: Resolver<
        ResolversTypes['MarketingAdConnection'],
        ParentType,
        ContextType,
        RequireFields<MarketingCampaignMarketingAdsArgs, 'showDeleted'>
    >;
    products?: Resolver<
        ResolversTypes['ProductConnection'],
        ParentType,
        ContextType,
        RequireFields<MarketingCampaignProductsArgs, 'showDeleted'>
    >;
    catalog?: Resolver<ResolversTypes['Catalog'], ParentType, ContextType>;
    campaignTemplate?: Resolver<
        Maybe<ResolversTypes['CampaignTemplate']>,
        ParentType,
        ContextType
    >;
    mediaChannel?: Resolver<
        ResolversTypes['MediaChannel'],
        ParentType,
        ContextType
    >;
    results?: Resolver<
        ResolversTypes['ResultConnection'],
        ParentType,
        ContextType,
        RequireFields<MarketingCampaignResultsArgs, 'breakdown'>
    >;
    notifications?: Resolver<
        ResolversTypes['NotificationConnection'],
        ParentType,
        ContextType,
        MarketingCampaignNotificationsArgs
    >;
};

export type MarketingCampaignConnectionResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['MarketingCampaignConnection'] = ResolversParentTypes['MarketingCampaignConnection']
> = {
    edges?: Resolver<
        Array<ResolversTypes['MarketingCampaignEdge']>,
        ParentType,
        ContextType
    >;
    pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
    totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type MarketingCampaignEdgeResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['MarketingCampaignEdge'] = ResolversParentTypes['MarketingCampaignEdge']
> = {
    node?: Resolver<
        ResolversTypes['MarketingCampaign'],
        ParentType,
        ContextType
    >;
    cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type MarketingCampaignSnapshotResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['MarketingCampaignSnapshot'] = ResolversParentTypes['MarketingCampaignSnapshot']
> = {
    id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    creationDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    lastChangeDate?: Resolver<
        ResolversTypes['DateISO'],
        ParentType,
        ContextType
    >;
    marketingCampaign?: Resolver<
        ResolversTypes['MarketingCampaign'],
        ParentType,
        ContextType
    >;
    successful?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
    name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    status?: Resolver<
        ResolversTypes['MarketingCampaignStatus'],
        ParentType,
        ContextType
    >;
    creativeSpec?: Resolver<
        ResolversTypes['JSONObject'],
        ParentType,
        ContextType
    >;
    runTimeSpec?: Resolver<
        Maybe<ResolversTypes['JSONObject']>,
        ParentType,
        ContextType
    >;
    locationSpec?: Resolver<
        ResolversTypes['JSONObject'],
        ParentType,
        ContextType
    >;
    kpi?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    productIds?: Resolver<
        Maybe<Array<ResolversTypes['ObjectId']>>,
        ParentType,
        ContextType
    >;
};

export type MarketingCampaignSnapshotConnectionResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['MarketingCampaignSnapshotConnection'] = ResolversParentTypes['MarketingCampaignSnapshotConnection']
> = {
    edges?: Resolver<
        Array<ResolversTypes['MarketingCampaignSnapshotEdge']>,
        ParentType,
        ContextType
    >;
    pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
    totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type MarketingCampaignSnapshotEdgeResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['MarketingCampaignSnapshotEdge'] = ResolversParentTypes['MarketingCampaignSnapshotEdge']
> = {
    node?: Resolver<
        ResolversTypes['MarketingCampaignSnapshot'],
        ParentType,
        ContextType
    >;
    cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
    currencyCode?: Resolver<
        Maybe<ResolversTypes['String']>,
        ParentType,
        ContextType
    >;
    currencySymbol?: Resolver<
        Maybe<ResolversTypes['String']>,
        ParentType,
        ContextType
    >;
    currencyOffset?: Resolver<
        Maybe<ResolversTypes['Int']>,
        ParentType,
        ContextType
    >;
    organization?: Resolver<
        Maybe<ResolversTypes['Organization']>,
        ParentType,
        ContextType
    >;
    mediaChannels?: Resolver<
        ResolversTypes['MediaChannelConnection'],
        ParentType,
        ContextType,
        RequireFields<MarketplaceMediaChannelsArgs, 'showDeleted'>
    >;
    campaignTemplates?: Resolver<
        ResolversTypes['CampaignTemplateConnection'],
        ParentType,
        ContextType,
        RequireFields<MarketplaceCampaignTemplatesArgs, 'showDeleted'>
    >;
    vendors?: Resolver<
        ResolversTypes['VendorConnection'],
        ParentType,
        ContextType,
        RequireFields<MarketplaceVendorsArgs, 'showDeleted'>
    >;
    vendorTokens?: Resolver<
        ResolversTypes['VendorTokenConnection'],
        ParentType,
        ContextType,
        MarketplaceVendorTokensArgs
    >;
    creativeTemplates?: Resolver<
        ResolversTypes['CreativeTemplateConnection'],
        ParentType,
        ContextType,
        RequireFields<MarketplaceCreativeTemplatesArgs, 'showDeleted'>
    >;
    products?: Resolver<
        ResolversTypes['ProductConnection'],
        ParentType,
        ContextType,
        RequireFields<MarketplaceProductsArgs, 'showDeleted'>
    >;
};

export type MarketplaceConnectionResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['MarketplaceConnection'] = ResolversParentTypes['MarketplaceConnection']
> = {
    edges?: Resolver<
        Array<ResolversTypes['MarketplaceEdge']>,
        ParentType,
        ContextType
    >;
    pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
    totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type MarketplaceEdgeResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['MarketplaceEdge'] = ResolversParentTypes['MarketplaceEdge']
> = {
    node?: Resolver<ResolversTypes['Marketplace'], ParentType, ContextType>;
    cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type MeResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['Me'] = ResolversParentTypes['Me']
> = {
    __resolveType: TypeResolveFn<'User' | 'Vendor', ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    creationDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    lastChangeDate?: Resolver<
        ResolversTypes['DateISO'],
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
    currencyCode?: Resolver<
        Maybe<ResolversTypes['String']>,
        ParentType,
        ContextType
    >;
    currencySymbol?: Resolver<
        Maybe<ResolversTypes['NonEmptyString']>,
        ParentType,
        ContextType
    >;
    currencyOffset?: Resolver<
        Maybe<ResolversTypes['Int']>,
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
    catalogs?: Resolver<
        ResolversTypes['CatalogConnection'],
        ParentType,
        ContextType,
        RequireFields<MediaChannelCatalogsArgs, 'showDeleted'>
    >;
    marketplace?: Resolver<
        Maybe<ResolversTypes['Marketplace']>,
        ParentType,
        ContextType
    >;
};

export type MediaChannelConnectionResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['MediaChannelConnection'] = ResolversParentTypes['MediaChannelConnection']
> = {
    edges?: Resolver<
        Array<ResolversTypes['MediaChannelEdge']>,
        ParentType,
        ContextType
    >;
    pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
    totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type MediaChannelEdgeResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['MediaChannelEdge'] = ResolversParentTypes['MediaChannelEdge']
> = {
    node?: Resolver<ResolversTypes['MediaChannel'], ParentType, ContextType>;
    cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type MutationResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = {
    login?: Resolver<
        ResolversTypes['Token'],
        ParentType,
        ContextType,
        RequireFields<MutationLoginArgs, 'input'>
    >;
    refreshLogin?: Resolver<
        ResolversTypes['Token'],
        ParentType,
        ContextType,
        RequireFields<MutationRefreshLoginArgs, 'input'>
    >;
    createCatalog?: Resolver<
        ResolversTypes['Catalog'],
        ParentType,
        ContextType,
        RequireFields<MutationCreateCatalogArgs, 'input'>
    >;
    importCatalog?: Resolver<
        ResolversTypes['Catalog'],
        ParentType,
        ContextType,
        RequireFields<MutationImportCatalogArgs, 'input'>
    >;
    updateCatalog?: Resolver<
        ResolversTypes['Catalog'],
        ParentType,
        ContextType,
        RequireFields<MutationUpdateCatalogArgs, 'input' | 'id'>
    >;
    updateCatalogs?: Resolver<
        ResolversTypes['CatalogConnection'],
        ParentType,
        ContextType,
        RequireFields<MutationUpdateCatalogsArgs, 'showDeleted' | 'input'>
    >;
    syncCatalog?: Resolver<
        ResolversTypes['Catalog'],
        ParentType,
        ContextType,
        RequireFields<MutationSyncCatalogArgs, 'id'>
    >;
    syncCatalogProducts?: Resolver<
        ResolversTypes['Catalog'],
        ParentType,
        ContextType,
        RequireFields<MutationSyncCatalogProductsArgs, 'id'>
    >;
    deleteCatalog?: Resolver<
        ResolversTypes['Deletion'],
        ParentType,
        ContextType,
        RequireFields<MutationDeleteCatalogArgs, 'id'>
    >;
    createCreativeFont?: Resolver<
        ResolversTypes['CreativeFont'],
        ParentType,
        ContextType,
        RequireFields<MutationCreateCreativeFontArgs, 'input'>
    >;
    updateCreativeFont?: Resolver<
        ResolversTypes['CreativeFont'],
        ParentType,
        ContextType,
        RequireFields<MutationUpdateCreativeFontArgs, 'input' | 'id'>
    >;
    updateCreativeFonts?: Resolver<
        ResolversTypes['CreativeFontConnection'],
        ParentType,
        ContextType,
        RequireFields<MutationUpdateCreativeFontsArgs, 'showDeleted' | 'input'>
    >;
    deleteCreativeFont?: Resolver<
        ResolversTypes['Deletion'],
        ParentType,
        ContextType,
        RequireFields<MutationDeleteCreativeFontArgs, 'id'>
    >;
    createCreativeImage?: Resolver<
        ResolversTypes['CreativeImage'],
        ParentType,
        ContextType,
        RequireFields<MutationCreateCreativeImageArgs, 'input'>
    >;
    updateCreativeImage?: Resolver<
        ResolversTypes['CreativeImage'],
        ParentType,
        ContextType,
        RequireFields<MutationUpdateCreativeImageArgs, 'input' | 'id'>
    >;
    updateCreativeImages?: Resolver<
        ResolversTypes['CreativeImageConnection'],
        ParentType,
        ContextType,
        RequireFields<MutationUpdateCreativeImagesArgs, 'showDeleted' | 'input'>
    >;
    deleteCreativeImage?: Resolver<
        ResolversTypes['Deletion'],
        ParentType,
        ContextType,
        RequireFields<MutationDeleteCreativeImageArgs, 'id'>
    >;
    createCreativeLayer?: Resolver<
        ResolversTypes['CreativeLayer'],
        ParentType,
        ContextType,
        RequireFields<MutationCreateCreativeLayerArgs, 'input'>
    >;
    updateCreativeLayer?: Resolver<
        ResolversTypes['CreativeLayer'],
        ParentType,
        ContextType,
        RequireFields<MutationUpdateCreativeLayerArgs, 'input' | 'id'>
    >;
    updateCreativeLayers?: Resolver<
        ResolversTypes['CreativeLayerConnection'],
        ParentType,
        ContextType,
        RequireFields<MutationUpdateCreativeLayersArgs, 'showDeleted' | 'input'>
    >;
    deleteCreativeLayer?: Resolver<
        ResolversTypes['Deletion'],
        ParentType,
        ContextType,
        RequireFields<MutationDeleteCreativeLayerArgs, 'id'>
    >;
    createCreativeTemplate?: Resolver<
        ResolversTypes['CreativeTemplate'],
        ParentType,
        ContextType,
        RequireFields<MutationCreateCreativeTemplateArgs, 'input'>
    >;
    updateCreativeTemplate?: Resolver<
        ResolversTypes['CreativeTemplate'],
        ParentType,
        ContextType,
        RequireFields<MutationUpdateCreativeTemplateArgs, 'input' | 'id'>
    >;
    updateCreativeTemplates?: Resolver<
        ResolversTypes['CreativeTemplateConnection'],
        ParentType,
        ContextType,
        RequireFields<
            MutationUpdateCreativeTemplatesArgs,
            'showDeleted' | 'input'
        >
    >;
    deleteCreativeTemplate?: Resolver<
        ResolversTypes['Deletion'],
        ParentType,
        ContextType,
        RequireFields<MutationDeleteCreativeTemplateArgs, 'id'>
    >;
    createEntitlement?: Resolver<
        ResolversTypes['Entitlement'],
        ParentType,
        ContextType,
        RequireFields<MutationCreateEntitlementArgs, 'input'>
    >;
    updateEntitlement?: Resolver<
        ResolversTypes['Entitlement'],
        ParentType,
        ContextType,
        RequireFields<MutationUpdateEntitlementArgs, 'input' | 'id'>
    >;
    updateEntitlements?: Resolver<
        ResolversTypes['EntitlementConnection'],
        ParentType,
        ContextType,
        RequireFields<MutationUpdateEntitlementsArgs, 'input'>
    >;
    deleteEntitlement?: Resolver<
        ResolversTypes['Deletion'],
        ParentType,
        ContextType,
        RequireFields<MutationDeleteEntitlementArgs, 'id'>
    >;
    createMarketingCampaign?: Resolver<
        ResolversTypes['MarketingCampaign'],
        ParentType,
        ContextType,
        RequireFields<MutationCreateMarketingCampaignArgs, 'input'>
    >;
    updateMarketingCampaign?: Resolver<
        ResolversTypes['MarketingCampaign'],
        ParentType,
        ContextType,
        RequireFields<MutationUpdateMarketingCampaignArgs, 'input' | 'id'>
    >;
    updateMarketingCampaigns?: Resolver<
        ResolversTypes['MarketingCampaignConnection'],
        ParentType,
        ContextType,
        RequireFields<
            MutationUpdateMarketingCampaignsArgs,
            'showDeleted' | 'input'
        >
    >;
    syncMarketingCampaign?: Resolver<
        ResolversTypes['MarketingCampaign'],
        ParentType,
        ContextType,
        RequireFields<MutationSyncMarketingCampaignArgs, 'id'>
    >;
    approveMarketingCampaign?: Resolver<
        ResolversTypes['MarketingCampaign'],
        ParentType,
        ContextType,
        RequireFields<
            MutationApproveMarketingCampaignArgs,
            'lastChangeDate' | 'id'
        >
    >;
    deleteMarketingCampaign?: Resolver<
        ResolversTypes['Deletion'],
        ParentType,
        ContextType,
        RequireFields<MutationDeleteMarketingCampaignArgs, 'id'>
    >;
    createMarketplace?: Resolver<
        ResolversTypes['Marketplace'],
        ParentType,
        ContextType,
        RequireFields<MutationCreateMarketplaceArgs, 'input'>
    >;
    updateMarketplace?: Resolver<
        ResolversTypes['Marketplace'],
        ParentType,
        ContextType,
        RequireFields<MutationUpdateMarketplaceArgs, 'input' | 'id'>
    >;
    updateMarketplaces?: Resolver<
        ResolversTypes['MarketplaceConnection'],
        ParentType,
        ContextType,
        RequireFields<MutationUpdateMarketplacesArgs, 'showDeleted' | 'input'>
    >;
    deleteMarketplace?: Resolver<
        ResolversTypes['Deletion'],
        ParentType,
        ContextType,
        RequireFields<MutationDeleteMarketplaceArgs, 'id'>
    >;
    createMediaChannel?: Resolver<
        ResolversTypes['MediaChannel'],
        ParentType,
        ContextType,
        RequireFields<MutationCreateMediaChannelArgs, 'input'>
    >;
    importMediaChannel?: Resolver<
        ResolversTypes['MediaChannel'],
        ParentType,
        ContextType,
        RequireFields<MutationImportMediaChannelArgs, 'input'>
    >;
    updateMediaChannel?: Resolver<
        ResolversTypes['MediaChannel'],
        ParentType,
        ContextType,
        RequireFields<MutationUpdateMediaChannelArgs, 'input' | 'id'>
    >;
    updateMediaChannels?: Resolver<
        ResolversTypes['MediaChannelConnection'],
        ParentType,
        ContextType,
        RequireFields<MutationUpdateMediaChannelsArgs, 'showDeleted' | 'input'>
    >;
    deleteMediaChannel?: Resolver<
        ResolversTypes['Deletion'],
        ParentType,
        ContextType,
        RequireFields<MutationDeleteMediaChannelArgs, 'id'>
    >;
    updateNotification?: Resolver<
        ResolversTypes['Notification'],
        ParentType,
        ContextType,
        RequireFields<MutationUpdateNotificationArgs, 'input' | 'id'>
    >;
    updateNotifications?: Resolver<
        ResolversTypes['NotificationConnection'],
        ParentType,
        ContextType,
        RequireFields<MutationUpdateNotificationsArgs, 'input'>
    >;
    createOrganization?: Resolver<
        ResolversTypes['Organization'],
        ParentType,
        ContextType,
        RequireFields<MutationCreateOrganizationArgs, 'input'>
    >;
    updateOrganization?: Resolver<
        ResolversTypes['Organization'],
        ParentType,
        ContextType,
        RequireFields<MutationUpdateOrganizationArgs, 'input' | 'id'>
    >;
    updateOrganizations?: Resolver<
        ResolversTypes['OrganizationConnection'],
        ParentType,
        ContextType,
        RequireFields<MutationUpdateOrganizationsArgs, 'showDeleted' | 'input'>
    >;
    deleteOrganization?: Resolver<
        ResolversTypes['Deletion'],
        ParentType,
        ContextType,
        RequireFields<MutationDeleteOrganizationArgs, 'id'>
    >;
    createProduct?: Resolver<
        ResolversTypes['Product'],
        ParentType,
        ContextType,
        RequireFields<MutationCreateProductArgs, 'input'>
    >;
    updateProduct?: Resolver<
        ResolversTypes['Product'],
        ParentType,
        ContextType,
        RequireFields<MutationUpdateProductArgs, 'input' | 'id'>
    >;
    updateProducts?: Resolver<
        ResolversTypes['ProductConnection'],
        ParentType,
        ContextType,
        RequireFields<MutationUpdateProductsArgs, 'showDeleted' | 'input'>
    >;
    deleteProduct?: Resolver<
        ResolversTypes['Deletion'],
        ParentType,
        ContextType,
        RequireFields<MutationDeleteProductArgs, 'id'>
    >;
    requestResetPassword?: Resolver<
        ResolversTypes['RequestResult'],
        ParentType,
        ContextType,
        RequireFields<MutationRequestResetPasswordArgs, 'input'>
    >;
    resetPassword?: Resolver<
        ResolversTypes['User'],
        ParentType,
        ContextType,
        RequireFields<MutationResetPasswordArgs, 'input'>
    >;
    updateUser?: Resolver<
        ResolversTypes['User'],
        ParentType,
        ContextType,
        RequireFields<MutationUpdateUserArgs, 'input'>
    >;
    createVendor?: Resolver<
        ResolversTypes['Vendor'],
        ParentType,
        ContextType,
        RequireFields<MutationCreateVendorArgs, 'input'>
    >;
    updateVendor?: Resolver<
        ResolversTypes['Vendor'],
        ParentType,
        ContextType,
        RequireFields<MutationUpdateVendorArgs, 'input' | 'id'>
    >;
    updateVendors?: Resolver<
        ResolversTypes['VendorConnection'],
        ParentType,
        ContextType,
        RequireFields<MutationUpdateVendorsArgs, 'showDeleted' | 'input'>
    >;
    deleteVendor?: Resolver<
        ResolversTypes['Deletion'],
        ParentType,
        ContextType,
        RequireFields<MutationDeleteVendorArgs, 'id'>
    >;
    createVendorToken?: Resolver<
        ResolversTypes['VendorToken'],
        ParentType,
        ContextType,
        RequireFields<MutationCreateVendorTokenArgs, 'input'>
    >;
    loginVendor?: Resolver<
        ResolversTypes['VendorToken'],
        ParentType,
        ContextType,
        RequireFields<MutationLoginVendorArgs, 'input'>
    >;
    setVendorPassword?: Resolver<
        ResolversTypes['VendorToken'],
        ParentType,
        ContextType,
        RequireFields<MutationSetVendorPasswordArgs, 'input'>
    >;
    deleteVendorToken?: Resolver<
        ResolversTypes['Deletion'],
        ParentType,
        ContextType,
        RequireFields<MutationDeleteVendorTokenArgs, 'id'>
    >;
};

export interface NonEmptyStringScalarConfig
    extends GraphQLScalarTypeConfig<ResolversTypes['NonEmptyString'], any> {
    name: 'NonEmptyString';
}

export type NotificationResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['Notification'] = ResolversParentTypes['Notification']
> = {
    id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    creationDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    lastChangeDate?: Resolver<
        ResolversTypes['DateISO'],
        ParentType,
        ContextType
    >;
    title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    status?: Resolver<
        ResolversTypes['NOTIFICATION_STATUS'],
        ParentType,
        ContextType
    >;
    severity?: Resolver<
        ResolversTypes['NOTIFICATION_SEVERITY'],
        ParentType,
        ContextType
    >;
    code?: Resolver<
        ResolversTypes['NOTIFICATION_CODE'],
        ParentType,
        ContextType
    >;
    source?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    resource?: Resolver<
        ResolversTypes['NotificationResource'],
        ParentType,
        ContextType
    >;
};

export type NotificationConnectionResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['NotificationConnection'] = ResolversParentTypes['NotificationConnection']
> = {
    edges?: Resolver<
        Array<ResolversTypes['NotificationEdge']>,
        ParentType,
        ContextType
    >;
    pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
    totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type NotificationEdgeResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['NotificationEdge'] = ResolversParentTypes['NotificationEdge']
> = {
    node?: Resolver<ResolversTypes['Notification'], ParentType, ContextType>;
    cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type NotificationResourceResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['NotificationResource'] = ResolversParentTypes['NotificationResource']
> = {
    __resolveType: TypeResolveFn<'MarketingCampaign', ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    creationDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    lastChangeDate?: Resolver<
        ResolversTypes['DateISO'],
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
    warnings?: Resolver<
        Maybe<Array<ResolversTypes['JSONObject']>>,
        ParentType,
        ContextType
    >;
};

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
    name?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
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
    tier?: Resolver<
        ResolversTypes['OrganizationTierEnum'],
        ParentType,
        ContextType
    >;
    users?: Resolver<
        ResolversTypes['UserConnection'],
        ParentType,
        ContextType,
        OrganizationUsersArgs
    >;
    marketplaces?: Resolver<
        ResolversTypes['MarketplaceConnection'],
        ParentType,
        ContextType,
        RequireFields<OrganizationMarketplacesArgs, 'showDeleted'>
    >;
};

export type OrganizationConnectionResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['OrganizationConnection'] = ResolversParentTypes['OrganizationConnection']
> = {
    edges?: Resolver<
        Array<ResolversTypes['OrganizationEdge']>,
        ParentType,
        ContextType
    >;
    pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
    totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type OrganizationEdgeResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['OrganizationEdge'] = ResolversParentTypes['OrganizationEdge']
> = {
    node?: Resolver<ResolversTypes['Organization'], ParentType, ContextType>;
    cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PageInfoResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']
> = {
    endCursor?: Resolver<
        Maybe<ResolversTypes['String']>,
        ParentType,
        ContextType
    >;
    startCursor?: Resolver<
        Maybe<ResolversTypes['String']>,
        ParentType,
        ContextType
    >;
    hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
    hasPreviousPage?: Resolver<
        ResolversTypes['Boolean'],
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
    resultsSource?: Resolver<
        Array<ResolversTypes['NonEmptyString']>,
        ParentType,
        ContextType
    >;
    kpi?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    vendor?: Resolver<Maybe<ResolversTypes['Vendor']>, ParentType, ContextType>;
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
    name?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
    sku?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
    remoteState?: Resolver<
        Maybe<ResolversTypes['JSONObject']>,
        ParentType,
        ContextType
    >;
    metadata?: Resolver<ResolversTypes['JSONObject'], ParentType, ContextType>;
    imported?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
    results?: Resolver<
        ResolversTypes['ResultConnection'],
        ParentType,
        ContextType,
        RequireFields<ProductResultsArgs, 'breakdown'>
    >;
    marketingCampaigns?: Resolver<
        ResolversTypes['MarketingCampaignConnection'],
        ParentType,
        ContextType,
        RequireFields<ProductMarketingCampaignsArgs, 'showDeleted'>
    >;
    catalog?: Resolver<ResolversTypes['Catalog'], ParentType, ContextType>;
};

export type ProductConnectionResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['ProductConnection'] = ResolversParentTypes['ProductConnection']
> = {
    edges?: Resolver<
        Array<ResolversTypes['ProductEdge']>,
        ParentType,
        ContextType
    >;
    pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
    totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type ProductEdgeResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['ProductEdge'] = ResolversParentTypes['ProductEdge']
> = {
    node?: Resolver<ResolversTypes['Product'], ParentType, ContextType>;
    cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type QueryResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = {
    campaignTemplate?: Resolver<
        ResolversTypes['CampaignTemplate'],
        ParentType,
        ContextType,
        RequireFields<QueryCampaignTemplateArgs, 'id'>
    >;
    campaignTemplates?: Resolver<
        ResolversTypes['CampaignTemplateConnection'],
        ParentType,
        ContextType,
        RequireFields<QueryCampaignTemplatesArgs, 'showDeleted'>
    >;
    campaignTemplatesWithCurrentGCPX?: Resolver<
        ResolversTypes['CampaignTemplateConnection'],
        ParentType,
        ContextType,
        RequireFields<QueryCampaignTemplatesWithCurrentGcpxArgs, 'showDeleted'>
    >;
    catalog?: Resolver<
        ResolversTypes['Catalog'],
        ParentType,
        ContextType,
        RequireFields<QueryCatalogArgs, 'id'>
    >;
    catalogs?: Resolver<
        ResolversTypes['CatalogConnection'],
        ParentType,
        ContextType,
        RequireFields<QueryCatalogsArgs, 'showDeleted'>
    >;
    creativeFont?: Resolver<
        ResolversTypes['CreativeFont'],
        ParentType,
        ContextType,
        RequireFields<QueryCreativeFontArgs, 'id'>
    >;
    creativeFonts?: Resolver<
        ResolversTypes['CreativeFontConnection'],
        ParentType,
        ContextType,
        RequireFields<QueryCreativeFontsArgs, 'showDeleted'>
    >;
    creativeImage?: Resolver<
        ResolversTypes['CreativeImage'],
        ParentType,
        ContextType,
        RequireFields<QueryCreativeImageArgs, 'id'>
    >;
    creativeImages?: Resolver<
        ResolversTypes['CreativeImageConnection'],
        ParentType,
        ContextType,
        RequireFields<QueryCreativeImagesArgs, 'showDeleted'>
    >;
    creativeLayer?: Resolver<
        ResolversTypes['CreativeLayer'],
        ParentType,
        ContextType,
        RequireFields<QueryCreativeLayerArgs, 'id'>
    >;
    creativeLayers?: Resolver<
        ResolversTypes['CreativeLayerConnection'],
        ParentType,
        ContextType,
        RequireFields<QueryCreativeLayersArgs, 'showDeleted'>
    >;
    creativeTemplate?: Resolver<
        ResolversTypes['CreativeTemplate'],
        ParentType,
        ContextType,
        RequireFields<QueryCreativeTemplateArgs, 'id'>
    >;
    creativeTemplates?: Resolver<
        ResolversTypes['CreativeTemplateConnection'],
        ParentType,
        ContextType,
        RequireFields<QueryCreativeTemplatesArgs, 'showDeleted'>
    >;
    entitlement?: Resolver<
        ResolversTypes['Entitlement'],
        ParentType,
        ContextType,
        RequireFields<QueryEntitlementArgs, 'id'>
    >;
    entitlements?: Resolver<
        ResolversTypes['EntitlementConnection'],
        ParentType,
        ContextType,
        QueryEntitlementsArgs
    >;
    marketingAd?: Resolver<
        ResolversTypes['MarketingAd'],
        ParentType,
        ContextType,
        RequireFields<QueryMarketingAdArgs, 'id'>
    >;
    marketingAds?: Resolver<
        ResolversTypes['MarketingAdConnection'],
        ParentType,
        ContextType,
        RequireFields<QueryMarketingAdsArgs, 'showDeleted'>
    >;
    marketingCampaign?: Resolver<
        ResolversTypes['MarketingCampaign'],
        ParentType,
        ContextType,
        RequireFields<QueryMarketingCampaignArgs, 'id'>
    >;
    marketingCampaigns?: Resolver<
        ResolversTypes['MarketingCampaignConnection'],
        ParentType,
        ContextType,
        RequireFields<QueryMarketingCampaignsArgs, 'showDeleted'>
    >;
    marketplace?: Resolver<
        ResolversTypes['Marketplace'],
        ParentType,
        ContextType,
        RequireFields<QueryMarketplaceArgs, 'id'>
    >;
    marketplaces?: Resolver<
        ResolversTypes['MarketplaceConnection'],
        ParentType,
        ContextType,
        RequireFields<QueryMarketplacesArgs, 'showDeleted'>
    >;
    me?: Resolver<ResolversTypes['Me'], ParentType, ContextType>;
    mediaChannel?: Resolver<
        ResolversTypes['MediaChannel'],
        ParentType,
        ContextType,
        RequireFields<QueryMediaChannelArgs, 'id'>
    >;
    mediaChannels?: Resolver<
        ResolversTypes['MediaChannelConnection'],
        ParentType,
        ContextType,
        RequireFields<QueryMediaChannelsArgs, 'showDeleted'>
    >;
    notification?: Resolver<
        ResolversTypes['Notification'],
        ParentType,
        ContextType,
        RequireFields<QueryNotificationArgs, 'id'>
    >;
    notifications?: Resolver<
        ResolversTypes['NotificationConnection'],
        ParentType,
        ContextType,
        QueryNotificationsArgs
    >;
    organization?: Resolver<
        ResolversTypes['Organization'],
        ParentType,
        ContextType,
        RequireFields<QueryOrganizationArgs, 'id'>
    >;
    organizations?: Resolver<
        ResolversTypes['OrganizationConnection'],
        ParentType,
        ContextType,
        RequireFields<QueryOrganizationsArgs, 'showDeleted'>
    >;
    product?: Resolver<
        ResolversTypes['Product'],
        ParentType,
        ContextType,
        RequireFields<QueryProductArgs, 'id'>
    >;
    products?: Resolver<
        ResolversTypes['ProductConnection'],
        ParentType,
        ContextType,
        RequireFields<QueryProductsArgs, 'showDeleted'>
    >;
    result?: Resolver<
        ResolversTypes['Result'],
        ParentType,
        ContextType,
        RequireFields<QueryResultArgs, 'id'>
    >;
    results?: Resolver<
        ResolversTypes['ResultConnection'],
        ParentType,
        ContextType,
        QueryResultsArgs
    >;
    vendor?: Resolver<
        ResolversTypes['Vendor'],
        ParentType,
        ContextType,
        RequireFields<QueryVendorArgs, 'id'>
    >;
    vendors?: Resolver<
        ResolversTypes['VendorConnection'],
        ParentType,
        ContextType,
        RequireFields<QueryVendorsArgs, 'showDeleted'>
    >;
    vendorToken?: Resolver<
        ResolversTypes['VendorToken'],
        ParentType,
        ContextType,
        RequireFields<QueryVendorTokenArgs, 'id'>
    >;
    vendorTokens?: Resolver<
        ResolversTypes['VendorTokenConnection'],
        ParentType,
        ContextType,
        QueryVendorTokensArgs
    >;
};

export type RequestResultResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['RequestResult'] = ResolversParentTypes['RequestResult']
> = {
    result?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
    breakdownType?: Resolver<
        ResolversTypes['ResultBreakdownTypeEnum'],
        ParentType,
        ContextType
    >;
    resource?: Resolver<
        ResolversTypes['ResultResource'],
        ParentType,
        ContextType
    >;
    breakdown?: Resolver<
        ResolversTypes['ResultResource'],
        ParentType,
        ContextType
    >;
    vendor?: Resolver<Maybe<ResolversTypes['Vendor']>, ParentType, ContextType>;
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
    purchases?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    purchasesValue?: Resolver<
        Maybe<ResolversTypes['Float']>,
        ParentType,
        ContextType
    >;
};

export type ResultConnectionResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['ResultConnection'] = ResolversParentTypes['ResultConnection']
> = {
    edges?: Resolver<
        Array<ResolversTypes['ResultEdge']>,
        ParentType,
        ContextType
    >;
    pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
    totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type ResultEdgeResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['ResultEdge'] = ResolversParentTypes['ResultEdge']
> = {
    node?: Resolver<ResolversTypes['Result'], ParentType, ContextType>;
    cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ResultResourceResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['ResultResource'] = ResolversParentTypes['ResultResource']
> = {
    __resolveType: TypeResolveFn<
        'Product' | 'MarketingCampaign' | 'MarketingAd',
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
    resultsSource?: Resolver<
        Array<ResolversTypes['NonEmptyString']>,
        ParentType,
        ContextType
    >;
    kpi?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    vendor?: Resolver<Maybe<ResolversTypes['Vendor']>, ParentType, ContextType>;
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

export type SingleUseTokenResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['SingleUseToken'] = ResolversParentTypes['SingleUseToken']
> = {
    id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    creationDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    lastChangeDate?: Resolver<
        ResolversTypes['DateISO'],
        ParentType,
        ContextType
    >;
    token?: Resolver<ResolversTypes['NonEmptyString'], ParentType, ContextType>;
    user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
};

export type SingleUseTokenConnectionResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['SingleUseTokenConnection'] = ResolversParentTypes['SingleUseTokenConnection']
> = {
    edges?: Resolver<
        Array<ResolversTypes['SingleUseTokenEdge']>,
        ParentType,
        ContextType
    >;
    pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
    totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type SingleUseTokenEdgeResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['SingleUseTokenEdge'] = ResolversParentTypes['SingleUseTokenEdge']
> = {
    node?: Resolver<ResolversTypes['SingleUseToken'], ParentType, ContextType>;
    cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
        ResolversTypes['OrganizationConnection'],
        ParentType,
        ContextType,
        RequireFields<UserOrganizationsArgs, 'showDeleted'>
    >;
    entitlements?: Resolver<
        ResolversTypes['EntitlementConnection'],
        ParentType,
        ContextType,
        UserEntitlementsArgs
    >;
    noticeOptIn?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
    newsletterOptIn?: Resolver<
        ResolversTypes['Boolean'],
        ParentType,
        ContextType
    >;
};

export type UserConnectionResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['UserConnection'] = ResolversParentTypes['UserConnection']
> = {
    edges?: Resolver<
        Array<ResolversTypes['UserEdge']>,
        ParentType,
        ContextType
    >;
    pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
    totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type UserEdgeResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['UserEdge'] = ResolversParentTypes['UserEdge']
> = {
    node?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
    cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
    marketplace?: Resolver<
        ResolversTypes['Marketplace'],
        ParentType,
        ContextType
    >;
    vendorTokens?: Resolver<
        ResolversTypes['VendorTokenConnection'],
        ParentType,
        ContextType,
        VendorVendorTokensArgs
    >;
    products?: Resolver<
        ResolversTypes['ProductConnection'],
        ParentType,
        ContextType,
        RequireFields<VendorProductsArgs, 'showDeleted'>
    >;
};

export type VendorConnectionResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['VendorConnection'] = ResolversParentTypes['VendorConnection']
> = {
    edges?: Resolver<
        Array<ResolversTypes['VendorEdge']>,
        ParentType,
        ContextType
    >;
    pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
    totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type VendorEdgeResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['VendorEdge'] = ResolversParentTypes['VendorEdge']
> = {
    node?: Resolver<ResolversTypes['Vendor'], ParentType, ContextType>;
    cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type VendorTokenResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['VendorToken'] = ResolversParentTypes['VendorToken']
> = {
    id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
    creationDate?: Resolver<ResolversTypes['DateISO'], ParentType, ContextType>;
    lastChangeDate?: Resolver<
        ResolversTypes['DateISO'],
        ParentType,
        ContextType
    >;
    token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    vendor?: Resolver<ResolversTypes['Vendor'], ParentType, ContextType>;
    marketplace?: Resolver<
        ResolversTypes['Marketplace'],
        ParentType,
        ContextType
    >;
    email?: Resolver<
        Maybe<ResolversTypes['NonEmptyString']>,
        ParentType,
        ContextType
    >;
};

export type VendorTokenConnectionResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['VendorTokenConnection'] = ResolversParentTypes['VendorTokenConnection']
> = {
    edges?: Resolver<
        Array<ResolversTypes['VendorTokenEdge']>,
        ParentType,
        ContextType
    >;
    pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
    totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type VendorTokenEdgeResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['VendorTokenEdge'] = ResolversParentTypes['VendorTokenEdge']
> = {
    node?: Resolver<ResolversTypes['VendorToken'], ParentType, ContextType>;
    cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
    AdPreview?: AdPreviewResolvers<ContextType>;
    CampaignTemplate?: CampaignTemplateResolvers<ContextType>;
    CampaignTemplateConnection?: CampaignTemplateConnectionResolvers<
        ContextType
    >;
    CampaignTemplateEdge?: CampaignTemplateEdgeResolvers<ContextType>;
    Catalog?: CatalogResolvers<ContextType>;
    CatalogConnection?: CatalogConnectionResolvers<ContextType>;
    CatalogEdge?: CatalogEdgeResolvers<ContextType>;
    CreativeFont?: CreativeFontResolvers<ContextType>;
    CreativeFontConnection?: CreativeFontConnectionResolvers<ContextType>;
    CreativeFontEdge?: CreativeFontEdgeResolvers<ContextType>;
    CreativeImage?: CreativeImageResolvers<ContextType>;
    CreativeImageConnection?: CreativeImageConnectionResolvers<ContextType>;
    CreativeImageEdge?: CreativeImageEdgeResolvers<ContextType>;
    CreativeLayer?: CreativeLayerResolvers<ContextType>;
    CreativeLayerConnection?: CreativeLayerConnectionResolvers<ContextType>;
    CreativeLayerEdge?: CreativeLayerEdgeResolvers<ContextType>;
    CreativeTemplate?: CreativeTemplateResolvers<ContextType>;
    CreativeTemplateConnection?: CreativeTemplateConnectionResolvers<
        ContextType
    >;
    CreativeTemplateEdge?: CreativeTemplateEdgeResolvers<ContextType>;
    DateISO?: GraphQLScalarType;
    Deletion?: DeletionResolvers<ContextType>;
    Entitlement?: EntitlementResolvers<ContextType>;
    EntitlementConnection?: EntitlementConnectionResolvers<ContextType>;
    EntitlementEdge?: EntitlementEdgeResolvers<ContextType>;
    EntitlementResource?: EntitlementResourceResolvers;
    FilterInput?: GraphQLScalarType;
    GCPX?: GcpxResolvers<ContextType>;
    GCPXConnection?: GcpxConnectionResolvers<ContextType>;
    GCPXEdge?: GcpxEdgeResolvers<ContextType>;
    JSONObject?: GraphQLScalarType;
    MarketingAd?: MarketingAdResolvers<ContextType>;
    MarketingAdConnection?: MarketingAdConnectionResolvers<ContextType>;
    MarketingAdEdge?: MarketingAdEdgeResolvers<ContextType>;
    MarketingCampaign?: MarketingCampaignResolvers<ContextType>;
    MarketingCampaignConnection?: MarketingCampaignConnectionResolvers<
        ContextType
    >;
    MarketingCampaignEdge?: MarketingCampaignEdgeResolvers<ContextType>;
    MarketingCampaignSnapshot?: MarketingCampaignSnapshotResolvers<ContextType>;
    MarketingCampaignSnapshotConnection?: MarketingCampaignSnapshotConnectionResolvers<
        ContextType
    >;
    MarketingCampaignSnapshotEdge?: MarketingCampaignSnapshotEdgeResolvers<
        ContextType
    >;
    Marketplace?: MarketplaceResolvers<ContextType>;
    MarketplaceConnection?: MarketplaceConnectionResolvers<ContextType>;
    MarketplaceEdge?: MarketplaceEdgeResolvers<ContextType>;
    Me?: MeResolvers;
    MediaChannel?: MediaChannelResolvers<ContextType>;
    MediaChannelConnection?: MediaChannelConnectionResolvers<ContextType>;
    MediaChannelEdge?: MediaChannelEdgeResolvers<ContextType>;
    Mutation?: MutationResolvers<ContextType>;
    NonEmptyString?: GraphQLScalarType;
    Notification?: NotificationResolvers<ContextType>;
    NotificationConnection?: NotificationConnectionResolvers<ContextType>;
    NotificationEdge?: NotificationEdgeResolvers<ContextType>;
    NotificationResource?: NotificationResourceResolvers;
    ObjectId?: GraphQLScalarType;
    Organization?: OrganizationResolvers<ContextType>;
    OrganizationConnection?: OrganizationConnectionResolvers<ContextType>;
    OrganizationEdge?: OrganizationEdgeResolvers<ContextType>;
    PageInfo?: PageInfoResolvers<ContextType>;
    Product?: ProductResolvers<ContextType>;
    ProductConnection?: ProductConnectionResolvers<ContextType>;
    ProductEdge?: ProductEdgeResolvers<ContextType>;
    Query?: QueryResolvers<ContextType>;
    RequestResult?: RequestResultResolvers<ContextType>;
    Result?: ResultResolvers<ContextType>;
    ResultAnalytics?: ResultAnalyticsResolvers<ContextType>;
    ResultConnection?: ResultConnectionResolvers<ContextType>;
    ResultEdge?: ResultEdgeResolvers<ContextType>;
    ResultResource?: ResultResourceResolvers;
    SingleUseToken?: SingleUseTokenResolvers<ContextType>;
    SingleUseTokenConnection?: SingleUseTokenConnectionResolvers<ContextType>;
    SingleUseTokenEdge?: SingleUseTokenEdgeResolvers<ContextType>;
    Token?: TokenResolvers<ContextType>;
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
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
