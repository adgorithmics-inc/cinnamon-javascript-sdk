import { AdgoError } from '@adgorithmics/adgo-errors';
import { PageInfo, Scalars, Mutation, Query, SortInput, User, UserLoginInput, UserUpdateInput, RefreshTokenInput, Organization, OrganizationInput, OrganizationUpdateInput, Marketplace, MarketplaceInput, MarketplaceUpdateInput, MediaChannel, MediaChannelCreateInput, MediaChannelUpdateInput, MediaChannelImportInput, CampaignTemplate, Vendor, VendorInput, VendorUpdateInput, VendorToken, VendorTokenInput, SetVendorPasswordInput, LoginVendorInput, Catalog, CatalogCreateInput, CatalogImportInput, CatalogUpdateInput, CatalogSyncInput, Product, ProductInput, ProductUpdateInput, MarketingCampaign, MarketingCampaignInput, MarketingCampaignUpdateInput, MarketingCampaignSyncInput, MarketingAd, Result, Entitlement, EntitlementInput, EntitlementUpdateInput, CreativeFont, CreativeFontCreateInput, CreativeFontUpdateInput, CreativeImage, CreativeImageCreateInput, CreativeImageUpdateInput, CreativeLayer, CreativeLayerCreateInput, CreativeLayerUpdateInput, CreativeTemplate, CreativeTemplateCreateInput, CreativeTemplateUpdateInput, RequestResetPasswordInput, ResetPasswordInput, Notification, NotificationUpdateInput } from './generated/graphql';
import { OrganizationField, UserField, RequestResultField, MarketplaceField, MediaChannelField, CampaignTemplateField, VendorField, VendorTokenField, CatalogField, ProductField, MarketingCampaignField, MarketingAdField, ResultField, EntitlementField, CreativeFontField, CreativeImageField, CreativeLayerField, CreativeTemplateField, NotificationField } from './generated/fields';
export interface Config {
    url: string;
    retryHook?: (error: AdgoError, retryCount: number) => boolean | Promise<boolean>;
    maxRetry?: number;
    retrySleepTime?: number;
}
export interface Headers {
    [key: string]: string;
}
export declare type APIKey = keyof (Query & Mutation);
export declare type APIResult<T extends APIKey, U extends string = T> = {
    data: Record<U, NonNullable<(Query & Mutation)[T]>>;
};
export declare class Cinnamon {
    private config;
    private refreshToken;
    private token;
    private refreshTokenRequest;
    constructor({ maxRetry, retrySleepTime, ...config }: Config);
    private isVendorToken;
    api<T extends APIKey, U extends string = T>({ query, variables, headers, token, }: {
        query: string;
        variables?: object;
        headers?: Headers;
        token?: string;
    }, retryCount?: number): Promise<APIResult<T, U>>;
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
    setRefreshToken(refreshToken: string): void;
    me<T extends Vendor | User>({ fields, headers, token, }?: {
        fields?: UserField[] | VendorField[];
        headers?: Headers;
        token?: string;
    }): Promise<T>;
    updateUser({ input, fields, headers, token, }: {
        input: UserUpdateInput;
        fields?: UserField[];
        headers?: Headers;
        token?: string;
    }): Promise<User>;
    private defaultRequestResultFields;
    requestResetPassword({ input, fields, headers, token, }: {
        input: RequestResetPasswordInput;
        fields?: RequestResultField[];
        headers?: Headers;
        token?: string;
    }): Promise<import("./generated/graphql").RequestResult>;
    resetPassword({ input, fields, headers, token, }: {
        input: ResetPasswordInput;
        fields?: UserField[];
        headers?: Headers;
        token?: string;
    }): Promise<User>;
    private defaultOrganizationFields;
    organization({ id, fields, headers, token, }: {
        id: Scalars['ObjectId'];
        fields?: OrganizationField[];
        headers?: Headers;
        token?: string;
    }): Promise<Organization>;
    organizations({ filter, sort, first, last, after, before, fields, showDeleted, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        first?: number;
        last?: number;
        after?: PageInfo['endCursor'];
        before?: PageInfo['startCursor'];
        fields?: OrganizationField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }): Promise<import("./generated/graphql").OrganizationConnection>;
    organizationsAll({ filter, sort, fields, showDeleted, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: OrganizationField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }): Promise<Organization[]>;
    organizationsEach({ filter, sort, fields, showDeleted, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: OrganizationField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }): AsyncGenerator<Organization, void, unknown>;
    createOrganization({ input, fields, headers, token, }: {
        input: OrganizationInput;
        fields?: OrganizationField[];
        headers?: Headers;
        token?: string;
    }): Promise<Organization>;
    updateOrganization({ id, input, fields, headers, token, }: {
        id: Scalars['ObjectId'];
        input: OrganizationUpdateInput;
        fields?: OrganizationField[];
        headers?: Headers;
        token?: string;
    }): Promise<Organization>;
    updateOrganizations({ input, filter, sort, first, last, after, before, fields, showDeleted, headers, token, }: {
        input: OrganizationUpdateInput;
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        first?: number;
        last?: number;
        after?: PageInfo['endCursor'];
        before?: PageInfo['startCursor'];
        fields?: OrganizationField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }): Promise<import("./generated/graphql").OrganizationConnection>;
    updateOrganizationsAll({ input, filter, sort, fields, showDeleted, headers, token, }: {
        input: OrganizationUpdateInput;
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: OrganizationField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }): Promise<Organization[]>;
    updateOrganizationsEach({ input, filter, sort, fields, showDeleted, headers, token, }: {
        input: OrganizationUpdateInput;
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: OrganizationField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }): AsyncGenerator<Organization, void, unknown>;
    private defaultMarketplaceFields;
    marketplace({ id, fields, headers, token, }: {
        id: Scalars['ObjectId'];
        fields?: MarketplaceField[];
        headers?: Headers;
        token?: string;
    }): Promise<Marketplace>;
    marketplaces({ filter, sort, first, last, after, before, fields, showDeleted, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        first?: number;
        last?: number;
        after?: PageInfo['endCursor'];
        before?: PageInfo['startCursor'];
        fields?: MarketplaceField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }): Promise<import("./generated/graphql").MarketplaceConnection>;
    marketplacesAll({ filter, sort, fields, showDeleted, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: MarketplaceField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }): Promise<Marketplace[]>;
    marketplacesEach({ filter, sort, fields, showDeleted, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: MarketplaceField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }): AsyncGenerator<Marketplace, void, unknown>;
    createMarketplace({ input, fields, headers, token, }: {
        input: MarketplaceInput;
        fields?: MarketplaceField[];
        headers?: Headers;
        token?: string;
    }): Promise<Marketplace>;
    updateMarketplace({ id, input, fields, headers, token, }: {
        id: Scalars['ObjectId'];
        input: MarketplaceUpdateInput;
        fields?: MarketplaceField[];
        headers?: Headers;
        token?: string;
    }): Promise<Marketplace>;
    updateMarketplaces({ input, filter, sort, first, last, after, before, fields, showDeleted, headers, token, }: {
        input: MarketplaceUpdateInput;
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        first?: number;
        last?: number;
        after?: PageInfo['endCursor'];
        before?: PageInfo['startCursor'];
        fields?: MarketplaceField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }): Promise<import("./generated/graphql").MarketplaceConnection>;
    updateMarketplacesAll({ input, filter, sort, fields, showDeleted, headers, token, }: {
        input: MarketplaceUpdateInput;
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: MarketplaceField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }): Promise<Marketplace[]>;
    updateMarketplacesEach({ input, filter, sort, fields, showDeleted, headers, token, }: {
        input: MarketplaceUpdateInput;
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: MarketplaceField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }): AsyncGenerator<Marketplace, void, unknown>;
    deleteMarketplace({ id, headers, token, }: {
        id: Scalars['ObjectId'];
        headers?: Headers;
        token?: string;
    }): Promise<import("./generated/graphql").Deletion>;
    private defaultMediaChannelFields;
    mediaChannel({ id, fields, headers, token, }: {
        id: Scalars['ObjectId'];
        fields?: MediaChannelField[];
        headers?: Headers;
        token?: string;
    }): Promise<MediaChannel>;
    mediaChannels({ filter, sort, first, last, after, before, fields, showDeleted, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        first?: number;
        last?: number;
        after?: PageInfo['endCursor'];
        before?: PageInfo['startCursor'];
        fields?: MediaChannelField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }): Promise<import("./generated/graphql").MediaChannelConnection>;
    mediaChannelsAll({ filter, sort, fields, showDeleted, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: MediaChannelField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }): Promise<MediaChannel[]>;
    mediaChannelsEach({ filter, sort, fields, showDeleted, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: MediaChannelField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }): AsyncGenerator<MediaChannel, void, unknown>;
    createMediaChannel({ input, fields, headers, token, }: {
        input: MediaChannelCreateInput;
        fields?: MediaChannelField[];
        headers?: Headers;
        token?: string;
    }): Promise<MediaChannel>;
    importMediaChannel({ input, fields, headers, token, }: {
        input: MediaChannelImportInput;
        fields?: MediaChannelField[];
        headers?: Headers;
        token?: string;
    }): Promise<MediaChannel>;
    updateMediaChannel({ id, input, fields, headers, token, }: {
        id: Scalars['ObjectId'];
        input: MediaChannelUpdateInput;
        fields?: MediaChannelField[];
        headers?: Headers;
        token?: string;
    }): Promise<MediaChannel>;
    updateMediaChannels({ input, filter, sort, first, last, after, before, fields, showDeleted, headers, token, }: {
        input: MediaChannelUpdateInput;
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        first?: number;
        last?: number;
        after?: PageInfo['endCursor'];
        before?: PageInfo['startCursor'];
        fields?: MediaChannelField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }): Promise<import("./generated/graphql").MediaChannelConnection>;
    updateMediaChannelsAll({ input, filter, sort, fields, showDeleted, headers, token, }: {
        input: MediaChannelUpdateInput;
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: MediaChannelField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }): Promise<MediaChannel[]>;
    updateMediaChannelsEach({ input, filter, sort, fields, showDeleted, headers, token, }: {
        input: MediaChannelUpdateInput;
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: MediaChannelField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }): AsyncGenerator<MediaChannel, void, unknown>;
    deleteMediaChannel({ id, headers, token, }: {
        id: Scalars['ObjectId'];
        headers?: Headers;
        token?: string;
    }): Promise<import("./generated/graphql").Deletion>;
    private defaultCampaignTemplateFields;
    campaignTemplate({ id, fields, headers, token, }: {
        id: Scalars['ObjectId'];
        fields?: CampaignTemplateField[];
        headers?: Headers;
        token?: string;
    }): Promise<CampaignTemplate>;
    campaignTemplates({ filter, sort, first, last, after, before, fields, showDeleted, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        first?: number;
        last?: number;
        after?: PageInfo['endCursor'];
        before?: PageInfo['startCursor'];
        fields?: CampaignTemplateField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }): Promise<import("./generated/graphql").CampaignTemplateConnection>;
    campaignTemplatesAll({ filter, sort, fields, showDeleted, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: CampaignTemplateField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }): Promise<CampaignTemplate[]>;
    campaignTemplatesEach({ filter, sort, fields, showDeleted, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: CampaignTemplateField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }): AsyncGenerator<CampaignTemplate, void, unknown>;
    campaignTemplatesWithCurrentGCPX({ filter, sort, first, last, after, before, fields, showDeleted, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        first?: number;
        last?: number;
        after?: PageInfo['endCursor'];
        before?: PageInfo['startCursor'];
        fields?: CampaignTemplateField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }): Promise<import("./generated/graphql").CampaignTemplateConnection>;
    campaignTemplatesWithCurrentGCPXAll({ filter, sort, fields, showDeleted, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: CampaignTemplateField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }): Promise<CampaignTemplate[]>;
    campaignTemplatesWithCurrentGCPXEach({ filter, sort, fields, showDeleted, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: CampaignTemplateField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }): AsyncGenerator<CampaignTemplate, void, unknown>;
    private defaultVendorFields;
    vendor({ id, fields, headers, token, }: {
        id: Scalars['ObjectId'];
        fields?: VendorField[];
        headers?: Headers;
        token?: string;
    }): Promise<Vendor>;
    vendors({ filter, sort, first, last, after, before, fields, showDeleted, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        first?: number;
        last?: number;
        after?: PageInfo['endCursor'];
        before?: PageInfo['startCursor'];
        fields?: VendorField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }): Promise<import("./generated/graphql").VendorConnection>;
    vendorsAll({ filter, sort, fields, showDeleted, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: VendorField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }): Promise<Vendor[]>;
    vendorsEach({ filter, sort, fields, showDeleted, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: VendorField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }): AsyncGenerator<Vendor, void, unknown>;
    createVendor({ input, fields, headers, token, }: {
        input: VendorInput;
        fields?: VendorField[];
        headers?: Headers;
        token?: string;
    }): Promise<Vendor>;
    updateVendor({ id, input, fields, headers, token, }: {
        id: Scalars['ObjectId'];
        input: VendorUpdateInput;
        fields?: VendorField[];
        headers?: Headers;
        token?: string;
    }): Promise<Vendor>;
    updateVendors({ input, filter, sort, first, last, after, before, fields, showDeleted, headers, token, }: {
        input: VendorUpdateInput;
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        first?: number;
        last?: number;
        after?: PageInfo['endCursor'];
        before?: PageInfo['startCursor'];
        fields?: VendorField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }): Promise<import("./generated/graphql").VendorConnection>;
    updateVendorsAll({ input, filter, sort, fields, showDeleted, headers, token, }: {
        input: VendorUpdateInput;
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: VendorField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }): Promise<Vendor[]>;
    updateVendorsEach({ input, filter, sort, fields, showDeleted, headers, token, }: {
        input: VendorUpdateInput;
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: VendorField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }): AsyncGenerator<Vendor, void, unknown>;
    deleteVendor({ id, headers, token, }: {
        id: Scalars['ObjectId'];
        headers?: Headers;
        token?: string;
    }): Promise<import("./generated/graphql").Deletion>;
    private defaultVendorTokenFields;
    vendorToken({ id, fields, headers, token, }: {
        id: Scalars['ObjectId'];
        fields?: VendorTokenField[];
        headers?: Headers;
        token?: string;
    }): Promise<VendorToken>;
    vendorTokens({ filter, sort, first, last, after, before, fields, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        first?: number;
        last?: number;
        after?: PageInfo['endCursor'];
        before?: PageInfo['startCursor'];
        fields?: VendorTokenField[];
        headers?: Headers;
        token?: string;
    }): Promise<import("./generated/graphql").VendorTokenConnection>;
    vendorTokensAll({ filter, sort, fields, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: VendorTokenField[];
        headers?: Headers;
        token?: string;
    }): Promise<VendorToken[]>;
    vendorTokensEach({ filter, sort, fields, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: VendorTokenField[];
        headers?: Headers;
        token?: string;
    }): AsyncGenerator<VendorToken, void, unknown>;
    createVendorToken({ input, fields, headers, token, }: {
        input: VendorTokenInput;
        fields?: VendorTokenField[];
        headers?: Headers;
        token?: string;
    }): Promise<VendorToken>;
    loginVendor({ input, fields, headers, token, }: {
        input: LoginVendorInput;
        fields?: VendorTokenField[];
        headers?: Headers;
        token?: string;
    }): Promise<VendorToken>;
    setVendorPassword({ input, fields, headers, token, }: {
        input: SetVendorPasswordInput;
        fields?: VendorTokenField[];
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
        fields?: CatalogField[];
        headers?: Headers;
        token?: string;
    }): Promise<Catalog>;
    catalogs({ filter, sort, first, last, after, before, fields, showDeleted, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        first?: number;
        last?: number;
        after?: PageInfo['endCursor'];
        before?: PageInfo['startCursor'];
        fields?: CatalogField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }): Promise<import("./generated/graphql").CatalogConnection>;
    catalogsAll({ filter, sort, fields, showDeleted, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: CatalogField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }): Promise<Catalog[]>;
    catalogsEach({ filter, sort, fields, showDeleted, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: CatalogField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }): AsyncGenerator<Catalog, void, unknown>;
    createCatalog({ input, fields, headers, token, }: {
        input: CatalogCreateInput;
        fields?: CatalogField[];
        headers?: Headers;
        token?: string;
    }): Promise<Catalog>;
    importCatalog({ input, fields, headers, token, }: {
        input: CatalogImportInput;
        fields?: CatalogField[];
        headers?: Headers;
        token?: string;
    }): Promise<Catalog>;
    updateCatalog({ id, input, fields, headers, token, }: {
        id: Scalars['ObjectId'];
        input: CatalogUpdateInput;
        fields?: CatalogField[];
        headers?: Headers;
        token?: string;
    }): Promise<Catalog>;
    updateCatalogs({ input, filter, sort, first, last, after, before, fields, showDeleted, headers, token, }: {
        input: CatalogUpdateInput;
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        first?: number;
        last?: number;
        after?: PageInfo['endCursor'];
        before?: PageInfo['startCursor'];
        fields?: CatalogField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }): Promise<import("./generated/graphql").CatalogConnection>;
    updateCatalogsAll({ input, filter, sort, fields, showDeleted, headers, token, }: {
        input: CatalogUpdateInput;
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: CatalogField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }): Promise<Catalog[]>;
    updateCatalogsEach({ input, filter, sort, fields, showDeleted, headers, token, }: {
        input: CatalogUpdateInput;
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: CatalogField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }): AsyncGenerator<Catalog, void, unknown>;
    syncCatalog({ id, input, headers, token, }: {
        id: Scalars['ObjectId'];
        input: CatalogSyncInput;
        headers?: Headers;
        token?: string;
    }): Promise<Catalog>;
    syncCatalogProducts({ id, headers, token, }: {
        id: Scalars['ObjectId'];
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
        fields?: ProductField[];
        headers?: Headers;
        token?: string;
    }): Promise<Product>;
    products({ filter, sort, first, last, after, before, fields, showDeleted, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        first?: number;
        last?: number;
        after?: PageInfo['endCursor'];
        before?: PageInfo['startCursor'];
        fields?: ProductField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }): Promise<import("./generated/graphql").ProductConnection>;
    productsAll({ filter, sort, fields, showDeleted, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: ProductField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }): Promise<Product[]>;
    productsEach({ filter, sort, fields, showDeleted, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: ProductField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }): AsyncGenerator<Product, void, unknown>;
    createProduct({ input, fields, headers, token, }: {
        input: ProductInput;
        fields?: ProductField[];
        headers?: Headers;
        token?: string;
    }): Promise<Product>;
    updateProduct({ id, input, fields, headers, token, }: {
        id: Scalars['ObjectId'];
        input: ProductUpdateInput;
        fields?: ProductField[];
        headers?: Headers;
        token?: string;
    }): Promise<Product>;
    updateProducts({ input, filter, sort, first, last, after, before, fields, showDeleted, headers, token, }: {
        input: ProductUpdateInput;
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        first?: number;
        last?: number;
        after?: PageInfo['endCursor'];
        before?: PageInfo['startCursor'];
        fields?: ProductField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }): Promise<import("./generated/graphql").ProductConnection>;
    updateProductsAll({ input, filter, sort, fields, showDeleted, headers, token, }: {
        input: ProductUpdateInput;
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: ProductField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }): Promise<Product[]>;
    updateProductsEach({ input, filter, sort, fields, showDeleted, headers, token, }: {
        input: ProductUpdateInput;
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: ProductField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }): AsyncGenerator<Product, void, unknown>;
    deleteProduct({ id, headers, token, }: {
        id: Scalars['ObjectId'];
        headers?: Headers;
        token?: string;
    }): Promise<import("./generated/graphql").Deletion>;
    private defaultMarketingCampaignFields;
    marketingCampaign({ id, fields, headers, token, }: {
        id: Scalars['ObjectId'];
        fields?: MarketingCampaignField[];
        headers?: Headers;
        token?: string;
    }): Promise<MarketingCampaign>;
    marketingCampaigns({ filter, sort, first, last, after, before, fields, showDeleted, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        first?: number;
        last?: number;
        after?: PageInfo['endCursor'];
        before?: PageInfo['startCursor'];
        fields?: MarketingCampaignField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }): Promise<import("./generated/graphql").MarketingCampaignConnection>;
    marketingCampaignsAll({ filter, sort, fields, showDeleted, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: MarketingCampaignField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }): Promise<MarketingCampaign[]>;
    marketingCampaignsEach({ filter, sort, fields, showDeleted, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: MarketingCampaignField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }): AsyncGenerator<MarketingCampaign, void, unknown>;
    createMarketingCampaign({ input, fields, headers, token, }: {
        input: MarketingCampaignInput;
        fields?: MarketingCampaignField[];
        headers?: Headers;
        token?: string;
    }): Promise<MarketingCampaign>;
    updateMarketingCampaign({ id, input, fields, headers, token, }: {
        id: Scalars['ObjectId'];
        input: MarketingCampaignUpdateInput;
        fields?: MarketingCampaignField[];
        headers?: Headers;
        token?: string;
    }): Promise<MarketingCampaign>;
    updateMarketingCampaigns({ input, filter, sort, first, last, after, before, fields, showDeleted, headers, token, }: {
        input: MarketingCampaignUpdateInput;
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        first?: number;
        last?: number;
        after?: PageInfo['endCursor'];
        before?: PageInfo['startCursor'];
        fields?: MarketingCampaignField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }): Promise<import("./generated/graphql").MarketingCampaignConnection>;
    updateMarketingCampaignsAll({ input, filter, sort, fields, showDeleted, headers, token, }: {
        input: MarketingCampaignUpdateInput;
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: MarketingCampaignField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }): Promise<MarketingCampaign[]>;
    updateMarketingCampaignsEach({ input, filter, sort, fields, showDeleted, headers, token, }: {
        input: MarketingCampaignUpdateInput;
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: MarketingCampaignField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }): AsyncGenerator<MarketingCampaign, void, unknown>;
    approveMarketingCampaign({ id, lastChangeDate, fields, headers, token, }: {
        id: Scalars['ObjectId'];
        lastChangeDate: Scalars['DateISO'];
        fields?: MarketingCampaignField[];
        headers?: Headers;
        token?: string;
    }): Promise<MarketingCampaign>;
    syncMarketingCampaign({ id, input, headers, token, }: {
        id: Scalars['ObjectId'];
        input: MarketingCampaignSyncInput;
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
        fields?: MarketingAdField[];
        headers?: Headers;
        token?: string;
    }): Promise<MarketingAd>;
    marketingAds({ filter, sort, first, last, after, before, fields, showDeleted, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        first?: number;
        last?: number;
        after?: PageInfo['endCursor'];
        before?: PageInfo['startCursor'];
        fields?: MarketingAdField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }): Promise<import("./generated/graphql").MarketingAdConnection>;
    marketingAdsAll({ filter, sort, fields, showDeleted, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: MarketingAdField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }): Promise<MarketingAd[]>;
    marketingAdsEach({ filter, sort, fields, showDeleted, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: MarketingAdField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }): AsyncGenerator<MarketingAd, void, unknown>;
    private defaultResultFields;
    result({ id, fields, headers, token, }: {
        id: Scalars['ObjectId'];
        fields?: ResultField[];
        headers?: Headers;
        token?: string;
    }): Promise<Result>;
    results({ filter, sort, first, last, after, before, fields, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        first?: number;
        last?: number;
        after?: PageInfo['endCursor'];
        before?: PageInfo['startCursor'];
        fields?: ResultField[];
        headers?: Headers;
        token?: string;
    }): Promise<import("./generated/graphql").ResultConnection>;
    resultsAll({ filter, sort, fields, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: ResultField[];
        headers?: Headers;
        token?: string;
    }): Promise<Result[]>;
    resultsEach({ filter, sort, fields, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: ResultField[];
        headers?: Headers;
        token?: string;
    }): AsyncGenerator<Result, void, unknown>;
    private defaultEntitlementFields;
    entitlement({ id, fields, headers, token, }: {
        id: Scalars['ObjectId'];
        fields?: EntitlementField[];
        headers?: Headers;
        token?: string;
    }): Promise<Entitlement>;
    entitlements({ filter, sort, first, last, after, before, fields, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        first?: number;
        last?: number;
        after?: PageInfo['endCursor'];
        before?: PageInfo['startCursor'];
        fields?: EntitlementField[];
        headers?: Headers;
        token?: string;
    }): Promise<import("./generated/graphql").EntitlementConnection>;
    entitlementsAll({ filter, sort, fields, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: EntitlementField[];
        headers?: Headers;
        token?: string;
    }): Promise<Entitlement[]>;
    entitlementsEach({ filter, sort, fields, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: EntitlementField[];
        headers?: Headers;
        token?: string;
    }): AsyncGenerator<Entitlement, void, unknown>;
    createEntitlement({ input, fields, headers, token, }: {
        input: EntitlementInput;
        fields?: EntitlementField[];
        headers?: Headers;
        token?: string;
    }): Promise<Entitlement>;
    updateEntitlement({ id, input, fields, headers, token, }: {
        id: Scalars['ObjectId'];
        input: EntitlementUpdateInput;
        fields?: EntitlementField[];
        headers?: Headers;
        token?: string;
    }): Promise<Entitlement>;
    updateEntitlements({ input, filter, sort, first, last, after, before, fields, headers, token, }: {
        input: EntitlementUpdateInput;
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        first?: number;
        last?: number;
        after?: PageInfo['endCursor'];
        before?: PageInfo['startCursor'];
        fields?: EntitlementField[];
        headers?: Headers;
        token?: string;
    }): Promise<import("./generated/graphql").EntitlementConnection>;
    updateEntitlementsAll({ input, filter, sort, fields, headers, token, }: {
        input: EntitlementUpdateInput;
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: EntitlementField[];
        headers?: Headers;
        token?: string;
    }): Promise<Entitlement[]>;
    updateEntitlementsEach({ input, filter, sort, fields, headers, token, }: {
        input: EntitlementUpdateInput;
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: EntitlementField[];
        headers?: Headers;
        token?: string;
    }): AsyncGenerator<Entitlement, void, unknown>;
    deleteEntitlement({ id, headers, token, }: {
        id: Scalars['ObjectId'];
        headers?: Headers;
        token?: string;
    }): Promise<import("./generated/graphql").Deletion>;
    private defaultCreativeFontFields;
    creativeFont({ id, fields, headers, token, }: {
        id: Scalars['ObjectId'];
        fields?: CreativeFontField[];
        headers?: Headers;
        token?: string;
    }): Promise<CreativeFont>;
    creativeFonts({ filter, sort, first, last, after, before, fields, showDeleted, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        first?: number;
        last?: number;
        after?: PageInfo['endCursor'];
        before?: PageInfo['startCursor'];
        fields?: CreativeFontField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }): Promise<import("./generated/graphql").CreativeFontConnection>;
    creativeFontsAll({ filter, sort, fields, showDeleted, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: CreativeFontField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }): Promise<CreativeFont[]>;
    creativeFontsEach({ filter, sort, fields, showDeleted, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: CreativeFontField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }): AsyncGenerator<CreativeFont, void, unknown>;
    createCreativeFont({ input, fields, headers, token, }: {
        input: CreativeFontCreateInput;
        fields?: CreativeFontField[];
        headers?: Headers;
        token?: string;
    }): Promise<CreativeFont>;
    updateCreativeFont({ id, input, fields, headers, token, }: {
        id: Scalars['ObjectId'];
        input: CreativeFontUpdateInput;
        fields?: CreativeFontField[];
        headers?: Headers;
        token?: string;
    }): Promise<CreativeFont>;
    updateCreativeFonts({ input, filter, sort, first, last, after, before, fields, showDeleted, headers, token, }: {
        input: CreativeFontUpdateInput;
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        first?: number;
        last?: number;
        after?: PageInfo['endCursor'];
        before?: PageInfo['startCursor'];
        fields?: CreativeFontField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }): Promise<import("./generated/graphql").CreativeFontConnection>;
    updateCreativeFontsAll({ input, filter, sort, fields, showDeleted, headers, token, }: {
        input: CreativeFontUpdateInput;
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: CreativeFontField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }): Promise<CreativeFont[]>;
    updateCreativeFontsEach({ input, filter, sort, fields, showDeleted, headers, token, }: {
        input: CreativeFontUpdateInput;
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: CreativeFontField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }): AsyncGenerator<CreativeFont, void, unknown>;
    deleteCreativeFont({ id, headers, token, }: {
        id: Scalars['ObjectId'];
        headers?: Headers;
        token?: string;
    }): Promise<import("./generated/graphql").Deletion>;
    private defaultCreativeImageFields;
    creativeImage({ id, fields, headers, token, }: {
        id: Scalars['ObjectId'];
        fields?: CreativeImageField[];
        headers?: Headers;
        token?: string;
    }): Promise<CreativeImage>;
    creativeImages({ filter, sort, first, last, after, before, fields, showDeleted, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        first?: number;
        last?: number;
        after?: PageInfo['endCursor'];
        before?: PageInfo['startCursor'];
        fields?: CreativeImageField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }): Promise<import("./generated/graphql").CreativeImageConnection>;
    creativeImagesAll({ filter, sort, fields, showDeleted, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: CreativeImageField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }): Promise<CreativeImage[]>;
    creativeImagesEach({ filter, sort, fields, showDeleted, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: CreativeImageField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }): AsyncGenerator<CreativeImage, void, unknown>;
    createCreativeImage({ input, fields, headers, token, }: {
        input: CreativeImageCreateInput;
        fields?: CreativeImageField[];
        headers?: Headers;
        token?: string;
    }): Promise<CreativeImage>;
    updateCreativeImage({ id, input, fields, headers, token, }: {
        id: Scalars['ObjectId'];
        input: CreativeImageUpdateInput;
        fields?: CreativeImageField[];
        headers?: Headers;
        token?: string;
    }): Promise<CreativeImage>;
    updateCreativeImages({ input, filter, sort, first, last, after, before, fields, showDeleted, headers, token, }: {
        input: CreativeImageUpdateInput;
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        first?: number;
        last?: number;
        after?: PageInfo['endCursor'];
        before?: PageInfo['startCursor'];
        fields?: CreativeImageField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }): Promise<import("./generated/graphql").CreativeImageConnection>;
    updateCreativeImagesAll({ input, filter, sort, fields, showDeleted, headers, token, }: {
        input: CreativeImageUpdateInput;
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: CreativeImageField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }): Promise<CreativeImage[]>;
    updateCreativeImagesEach({ input, filter, sort, fields, showDeleted, headers, token, }: {
        input: CreativeImageUpdateInput;
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: CreativeImageField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }): AsyncGenerator<CreativeImage, void, unknown>;
    deleteCreativeImage({ id, headers, token, }: {
        id: Scalars['ObjectId'];
        headers?: Headers;
        token?: string;
    }): Promise<import("./generated/graphql").Deletion>;
    private defaultCreativeLayerFields;
    creativeLayer({ id, fields, headers, token, }: {
        id: Scalars['ObjectId'];
        fields?: CreativeLayerField[];
        headers?: Headers;
        token?: string;
    }): Promise<CreativeLayer>;
    creativeLayers({ filter, sort, first, last, after, before, fields, showDeleted, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        first?: number;
        last?: number;
        after?: PageInfo['endCursor'];
        before?: PageInfo['startCursor'];
        fields?: CreativeLayerField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }): Promise<import("./generated/graphql").CreativeLayerConnection>;
    creativeLayersAll({ filter, sort, fields, showDeleted, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: CreativeLayerField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }): Promise<CreativeLayer[]>;
    creativeLayersEach({ filter, sort, fields, showDeleted, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: CreativeLayerField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }): AsyncGenerator<CreativeLayer, void, unknown>;
    createCreativeLayer({ input, fields, headers, token, }: {
        input: CreativeLayerCreateInput;
        fields?: CreativeLayerField[];
        headers?: Headers;
        token?: string;
    }): Promise<CreativeLayer>;
    updateCreativeLayer({ id, input, fields, headers, token, }: {
        id: Scalars['ObjectId'];
        input: CreativeLayerUpdateInput;
        fields?: CreativeLayerField[];
        headers?: Headers;
        token?: string;
    }): Promise<CreativeLayer>;
    updateCreativeLayers({ input, filter, sort, first, last, after, before, fields, showDeleted, headers, token, }: {
        input: CreativeLayerUpdateInput;
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        first?: number;
        last?: number;
        after?: PageInfo['endCursor'];
        before?: PageInfo['startCursor'];
        fields?: CreativeLayerField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }): Promise<import("./generated/graphql").CreativeLayerConnection>;
    updateCreativeLayersAll({ input, filter, sort, fields, showDeleted, headers, token, }: {
        input: CreativeLayerUpdateInput;
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: CreativeLayerField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }): Promise<CreativeLayer[]>;
    updateCreativeLayersEach({ input, filter, sort, fields, showDeleted, headers, token, }: {
        input: CreativeLayerUpdateInput;
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: CreativeLayerField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }): AsyncGenerator<CreativeLayer, void, unknown>;
    deleteCreativeLayer({ id, headers, token, }: {
        id: Scalars['ObjectId'];
        headers?: Headers;
        token?: string;
    }): Promise<import("./generated/graphql").Deletion>;
    private defaultCreativeTemplateFields;
    creativeTemplate({ id, fields, headers, token, }: {
        id: Scalars['ObjectId'];
        fields?: CreativeTemplateField[];
        headers?: Headers;
        token?: string;
    }): Promise<CreativeTemplate>;
    creativeTemplates({ filter, sort, first, last, after, before, fields, showDeleted, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        first?: number;
        last?: number;
        after?: PageInfo['endCursor'];
        before?: PageInfo['startCursor'];
        fields?: CreativeTemplateField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }): Promise<import("./generated/graphql").CreativeTemplateConnection>;
    creativeTemplatesAll({ filter, sort, fields, showDeleted, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: CreativeTemplateField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }): Promise<CreativeTemplate[]>;
    creativeTemplatesEach({ filter, sort, fields, showDeleted, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: CreativeTemplateField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }): AsyncGenerator<CreativeTemplate, void, unknown>;
    createCreativeTemplate({ input, fields, headers, token, }: {
        input: CreativeTemplateCreateInput;
        fields?: CreativeTemplateField[];
        headers?: Headers;
        token?: string;
    }): Promise<CreativeTemplate>;
    updateCreativeTemplate({ id, input, fields, headers, token, }: {
        id: Scalars['ObjectId'];
        input: CreativeTemplateUpdateInput;
        fields?: CreativeTemplateField[];
        headers?: Headers;
        token?: string;
    }): Promise<CreativeTemplate>;
    updateCreativeTemplates({ input, filter, sort, first, last, after, before, fields, showDeleted, headers, token, }: {
        input: CreativeTemplateUpdateInput;
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        first?: number;
        last?: number;
        after?: PageInfo['endCursor'];
        before?: PageInfo['startCursor'];
        fields?: CreativeTemplateField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }): Promise<import("./generated/graphql").CreativeTemplateConnection>;
    updateCreativeTemplatesAll({ input, filter, sort, fields, showDeleted, headers, token, }: {
        input: CreativeTemplateUpdateInput;
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: CreativeTemplateField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }): Promise<CreativeTemplate[]>;
    updateCreativeTemplatesEach({ input, filter, sort, fields, showDeleted, headers, token, }: {
        input: CreativeTemplateUpdateInput;
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: CreativeTemplateField[];
        showDeleted?: boolean;
        headers?: Headers;
        token?: string;
    }): AsyncGenerator<CreativeTemplate, void, unknown>;
    deleteCreativeTemplate({ id, headers, token, }: {
        id: Scalars['ObjectId'];
        headers?: Headers;
        token?: string;
    }): Promise<import("./generated/graphql").Deletion>;
    private defaultNotificationFields;
    notification({ id, fields, headers, token, }: {
        id: Scalars['ObjectId'];
        fields?: NotificationField[];
        headers?: Headers;
        token?: string;
    }): Promise<Notification>;
    notifications({ filter, sort, first, last, after, before, fields, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        first?: number;
        last?: number;
        after?: PageInfo['endCursor'];
        before?: PageInfo['startCursor'];
        fields?: NotificationField[];
        headers?: Headers;
        token?: string;
    }): Promise<import("./generated/graphql").NotificationConnection>;
    notificationsAll({ filter, sort, fields, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: NotificationField[];
        headers?: Headers;
        token?: string;
    }): Promise<Notification[]>;
    notificationsEach({ filter, sort, fields, headers, token, }?: {
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: NotificationField[];
        headers?: Headers;
        token?: string;
    }): AsyncGenerator<Notification, void, unknown>;
    updateNotification({ id, input, fields, headers, token, }: {
        id: Scalars['ObjectId'];
        input: NotificationUpdateInput;
        fields?: NotificationField[];
        headers?: Headers;
        token?: string;
    }): Promise<Notification>;
    updateNotifications({ input, filter, sort, first, last, after, before, fields, headers, token, }: {
        input: NotificationUpdateInput;
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        first?: number;
        last?: number;
        after?: PageInfo['endCursor'];
        before?: PageInfo['startCursor'];
        fields?: NotificationField[];
        headers?: Headers;
        token?: string;
    }): Promise<import("./generated/graphql").NotificationConnection>;
    updateNotificationsAll({ input, filter, sort, fields, headers, token, }: {
        input: NotificationUpdateInput;
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: NotificationField[];
        headers?: Headers;
        token?: string;
    }): Promise<Notification[]>;
    updateNotificationsEach({ input, filter, sort, fields, headers, token, }: {
        input: NotificationUpdateInput;
        filter?: Scalars['FilterInput'];
        sort?: SortInput;
        fields?: NotificationField[];
        headers?: Headers;
        token?: string;
    }): AsyncGenerator<Notification, void, unknown>;
}
export * from './generated/graphql';
export * from './generated/fields';
export * from './helpers';
export { Operator } from './scalars';
