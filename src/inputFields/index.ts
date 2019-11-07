import { keys } from 'ts-transformer-keys';
import {
    Token,
    Organization,
    User,
    Marketplace,
    MediaChannel,
    CampaignTemplate,
    Vendor,
    VendorToken,
    Catalog,
    Product,
    MarketingCampaign,
    MarketingAd,
    Result,
    Entitlement,
} from '../generated/graphql';

const fields = (keys: string[]): object =>
    keys.reduce((keys, key) => ({ ...keys, [key]: key }), {});

type Fields<T> = { [key in NonNullable<keyof T>]: key };

export type TokenFields = Fields<Token>;
export const TokenFields = fields(keys<Token>()) as TokenFields;

export type OrganizationFields = Fields<Organization>;
export const OrganizationFields = fields(
    keys<Organization>(),
) as OrganizationFields;

export type UserFields = Fields<User>;
export const UserFields = fields(keys<User>()) as UserFields;

export type MarketplaceFields = Fields<Marketplace>;
export const MarketplaceFields = fields(
    keys<Marketplace>(),
) as MarketplaceFields;

export type MediaChannelFields = Fields<MediaChannel>;
export const MediaChannelFields = fields(
    keys<MediaChannel>(),
) as MediaChannelFields;

export type CampaignTemplateFields = Fields<CampaignTemplate>;
export const CampaignTemplateFields = fields(
    keys<CampaignTemplate>(),
) as CampaignTemplateFields;

export type VendorFields = Fields<Vendor>;
export const VendorFields = fields(keys<Vendor>()) as VendorFields;

export type VendorTokenFields = Fields<VendorToken>;
export const VendorTokenFields = fields(
    keys<VendorToken>(),
) as VendorTokenFields;

export type CatalogFields = Fields<Catalog>;
export const CatalogFields = fields(keys<Catalog>()) as CatalogFields;

export type ProductFields = Fields<Product>;
export const ProductFields = fields(keys<Product>()) as ProductFields;

export type MarketingCampaignFields = Fields<MarketingCampaign>;
export const MarketingCampaignFields = fields(
    keys<MarketingCampaign>(),
) as MarketingCampaignFields;

export type MarketingAdFields = Fields<MarketingAd>;
export const MarketingAdFields = fields(
    keys<MarketingAd>(),
) as MarketingAdFields;

export type ResultFields = Fields<Result>;
export const ResultFields = fields(keys<Result>()) as ResultFields;

export type EntitlementFields = Fields<Entitlement>;
export const EntitlementFields = fields(
    keys<Entitlement>(),
) as EntitlementFields;
