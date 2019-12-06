export declare type CampaignTemplateFields = {
    id: string;
    creationDate: string;
    lastChangeDate: string;
    name: string;
    description: string;
    platform: string;
    remoteId: string;
    systemStatus: string;
    errors: string;
    marketplace: {
        id: string;
        creationDate: string;
        lastChangeDate: string;
        name: string;
        organization: {
            id: string;
            creationDate: string;
            lastChangeDate: string;
            users: {
                edges: {
                    cursor: string;
                };
                pageInfo: {
                    hasNextPage: string;
                    hasPreviousPage: string;
                    startCursor: string;
                    endCursor: string;
                };
            };
            marketplaces: {
                edges: {
                    cursor: string;
                };
                pageInfo: {
                    hasNextPage: string;
                    hasPreviousPage: string;
                    startCursor: string;
                    endCursor: string;
                };
            };
            name: string;
            tier: string;
            systemStatus: string;
            errors: string;
        };
        mediaChannels: {
            edges: {
                cursor: string;
                node: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    name: string;
                    platform: string;
                    remoteId: string;
                    remoteState: string;
                    currency: string;
                    currencySymbol: string;
                    currencyOffset: string;
                    timezone: string;
                    tokenStatus: string;
                    systemStatus: string;
                    errors: string;
                };
            };
            pageInfo: {
                hasNextPage: string;
                hasPreviousPage: string;
                startCursor: string;
                endCursor: string;
            };
        };
        campaignTemplates: {
            edges: {
                cursor: string;
                node: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    name: string;
                    description: string;
                    platform: string;
                    remoteId: string;
                    systemStatus: string;
                    errors: string;
                };
            };
            pageInfo: {
                hasNextPage: string;
                hasPreviousPage: string;
                startCursor: string;
                endCursor: string;
            };
        };
        vendors: {
            edges: {
                cursor: string;
                node: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    name: string;
                    systemStatus: string;
                    errors: string;
                };
            };
            pageInfo: {
                hasNextPage: string;
                hasPreviousPage: string;
                startCursor: string;
                endCursor: string;
            };
        };
        vendorTokens: {
            edges: {
                cursor: string;
                node: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    token: string;
                };
            };
            pageInfo: {
                hasNextPage: string;
                hasPreviousPage: string;
                startCursor: string;
                endCursor: string;
            };
        };
        systemStatus: string;
        errors: string;
        creativeTemplates: {
            edges: {
                cursor: string;
                node: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    name: string;
                    height: string;
                    width: string;
                    systemStatus: string;
                    errors: string;
                };
            };
            pageInfo: {
                hasNextPage: string;
                hasPreviousPage: string;
                startCursor: string;
                endCursor: string;
            };
        };
    };
    marketingCampaigns: {
        edges: {
            cursor: string;
            node: {
                id: string;
                creationDate: string;
                lastChangeDate: string;
                name: string;
                status: string;
                marketingAds: {};
                products: {};
                vendor: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    name: string;
                    systemStatus: string;
                    errors: string;
                };
                catalog: {
                    id: string;
                    name: string;
                    catalogType: string;
                    creationDate: string;
                    lastChangeDate: string;
                    remoteId: string;
                    systemStatus: string;
                    remoteState: string;
                    dataFeedId: string;
                    errors: string;
                };
                campaignTemplate: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    name: string;
                    description: string;
                    platform: string;
                    remoteId: string;
                    systemStatus: string;
                    errors: string;
                };
                mediaChannel: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    name: string;
                    platform: string;
                    remoteId: string;
                    remoteState: string;
                    currency: string;
                    currencySymbol: string;
                    currencyOffset: string;
                    timezone: string;
                    tokenStatus: string;
                    systemStatus: string;
                    errors: string;
                };
                results: {};
                creativeSpec: string;
                runTimeSpec: string;
                resultsSource: string;
                systemStatus: string;
                errors: string;
            };
        };
        pageInfo: {
            hasNextPage: string;
            hasPreviousPage: string;
            startCursor: string;
            endCursor: string;
        };
    };
};
export declare const CampaignTemplateFields: CampaignTemplateFields;
export declare type MarketplaceFields = {
    id: string;
    creationDate: string;
    lastChangeDate: string;
    name: string;
    organization: {
        id: string;
        creationDate: string;
        lastChangeDate: string;
        users: {
            edges: {
                cursor: string;
                node: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    email: string;
                    firstName: string;
                    lastName: string;
                };
            };
            pageInfo: {
                hasNextPage: string;
                hasPreviousPage: string;
                startCursor: string;
                endCursor: string;
            };
        };
        marketplaces: {
            edges: {
                cursor: string;
                node: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    name: string;
                    systemStatus: string;
                    errors: string;
                };
            };
            pageInfo: {
                hasNextPage: string;
                hasPreviousPage: string;
                startCursor: string;
                endCursor: string;
            };
        };
        name: string;
        tier: string;
        systemStatus: string;
        errors: string;
    };
    mediaChannels: {
        edges: {
            cursor: string;
            node: {
                id: string;
                creationDate: string;
                lastChangeDate: string;
                name: string;
                platform: string;
                remoteId: string;
                remoteState: string;
                currency: string;
                currencySymbol: string;
                currencyOffset: string;
                timezone: string;
                tokenStatus: string;
                systemStatus: string;
                errors: string;
                catalogs: {};
                marketplace: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    name: string;
                    systemStatus: string;
                    errors: string;
                };
            };
        };
        pageInfo: {
            hasNextPage: string;
            hasPreviousPage: string;
            startCursor: string;
            endCursor: string;
        };
    };
    campaignTemplates: {
        edges: {
            cursor: string;
            node: {
                id: string;
                creationDate: string;
                lastChangeDate: string;
                name: string;
                description: string;
                platform: string;
                remoteId: string;
                systemStatus: string;
                errors: string;
                marketplace: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    name: string;
                    systemStatus: string;
                    errors: string;
                };
                marketingCampaigns: {};
            };
        };
        pageInfo: {
            hasNextPage: string;
            hasPreviousPage: string;
            startCursor: string;
            endCursor: string;
        };
    };
    vendors: {
        edges: {
            cursor: string;
            node: {
                id: string;
                creationDate: string;
                lastChangeDate: string;
                name: string;
                marketplace: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    name: string;
                    systemStatus: string;
                    errors: string;
                };
                vendorTokens: {};
                products: {};
                systemStatus: string;
                errors: string;
            };
        };
        pageInfo: {
            hasNextPage: string;
            hasPreviousPage: string;
            startCursor: string;
            endCursor: string;
        };
    };
    vendorTokens: {
        edges: {
            cursor: string;
            node: {
                id: string;
                creationDate: string;
                lastChangeDate: string;
                marketplace: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    name: string;
                    systemStatus: string;
                    errors: string;
                };
                vendor: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    name: string;
                    systemStatus: string;
                    errors: string;
                };
                token: string;
            };
        };
        pageInfo: {
            hasNextPage: string;
            hasPreviousPage: string;
            startCursor: string;
            endCursor: string;
        };
    };
    systemStatus: string;
    errors: string;
    creativeTemplates: {
        edges: {
            cursor: string;
            node: {
                id: string;
                creationDate: string;
                lastChangeDate: string;
                name: string;
                height: string;
                width: string;
                marketplace: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    name: string;
                    systemStatus: string;
                    errors: string;
                };
                creativeLayers: {};
                systemStatus: string;
                errors: string;
            };
        };
        pageInfo: {
            hasNextPage: string;
            hasPreviousPage: string;
            startCursor: string;
            endCursor: string;
        };
    };
};
export declare const MarketplaceFields: MarketplaceFields;
export declare type OrganizationFields = {
    id: string;
    creationDate: string;
    lastChangeDate: string;
    users: {
        edges: {
            cursor: string;
            node: {
                id: string;
                creationDate: string;
                lastChangeDate: string;
                email: string;
                firstName: string;
                lastName: string;
                organizations: {};
                entitlements: {};
            };
        };
        pageInfo: {
            hasNextPage: string;
            hasPreviousPage: string;
            startCursor: string;
            endCursor: string;
        };
    };
    marketplaces: {
        edges: {
            cursor: string;
            node: {
                id: string;
                creationDate: string;
                lastChangeDate: string;
                name: string;
                organization: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    name: string;
                    tier: string;
                    systemStatus: string;
                    errors: string;
                };
                mediaChannels: {};
                campaignTemplates: {};
                vendors: {};
                vendorTokens: {};
                systemStatus: string;
                errors: string;
                creativeTemplates: {};
            };
        };
        pageInfo: {
            hasNextPage: string;
            hasPreviousPage: string;
            startCursor: string;
            endCursor: string;
        };
    };
    name: string;
    tier: string;
    systemStatus: string;
    errors: string;
};
export declare const OrganizationFields: OrganizationFields;
export declare type UserFields = {
    id: string;
    creationDate: string;
    lastChangeDate: string;
    email: string;
    firstName: string;
    lastName: string;
    organizations: {
        edges: {
            cursor: string;
            node: {
                id: string;
                creationDate: string;
                lastChangeDate: string;
                users: {};
                marketplaces: {};
                name: string;
                tier: string;
                systemStatus: string;
                errors: string;
            };
        };
        pageInfo: {
            hasNextPage: string;
            hasPreviousPage: string;
            startCursor: string;
            endCursor: string;
        };
    };
    entitlements: {
        edges: {
            cursor: string;
            node: {
                id: string;
                creationDate: string;
                lastChangeDate: string;
                user: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    email: string;
                    firstName: string;
                    lastName: string;
                };
                type: string;
                resource: {
                    id: string;
                    name: string;
                    systemStatus: string;
                    creationDate: string;
                    lastChangeDate: string;
                    errors: string;
                };
                permissions: string;
            };
        };
        pageInfo: {
            hasNextPage: string;
            hasPreviousPage: string;
            startCursor: string;
            endCursor: string;
        };
    };
};
export declare const UserFields: UserFields;
export declare type EntitlementFields = {
    id: string;
    creationDate: string;
    lastChangeDate: string;
    user: {
        id: string;
        creationDate: string;
        lastChangeDate: string;
        email: string;
        firstName: string;
        lastName: string;
        organizations: {
            edges: {
                cursor: string;
                node: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    name: string;
                    tier: string;
                    systemStatus: string;
                    errors: string;
                };
            };
            pageInfo: {
                hasNextPage: string;
                hasPreviousPage: string;
                startCursor: string;
                endCursor: string;
            };
        };
        entitlements: {
            edges: {
                cursor: string;
                node: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    type: string;
                    permissions: string;
                };
            };
            pageInfo: {
                hasNextPage: string;
                hasPreviousPage: string;
                startCursor: string;
                endCursor: string;
            };
        };
    };
    type: string;
    resource: {
        id: string;
        name: string;
        systemStatus: string;
        creationDate: string;
        lastChangeDate: string;
        errors: string;
    };
    permissions: string;
};
export declare const EntitlementFields: EntitlementFields;
export declare type MediaChannelFields = {
    id: string;
    creationDate: string;
    lastChangeDate: string;
    name: string;
    platform: string;
    remoteId: string;
    remoteState: string;
    currency: string;
    currencySymbol: string;
    currencyOffset: string;
    timezone: string;
    tokenStatus: string;
    systemStatus: string;
    errors: string;
    catalogs: {
        edges: {
            cursor: string;
            node: {
                id: string;
                name: string;
                catalogType: string;
                creationDate: string;
                lastChangeDate: string;
                remoteId: string;
                systemStatus: string;
                remoteState: string;
                dataFeedId: string;
                errors: string;
                mediaChannel: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    name: string;
                    platform: string;
                    remoteId: string;
                    remoteState: string;
                    currency: string;
                    currencySymbol: string;
                    currencyOffset: string;
                    timezone: string;
                    tokenStatus: string;
                    systemStatus: string;
                    errors: string;
                };
                products: {};
            };
        };
        pageInfo: {
            hasNextPage: string;
            hasPreviousPage: string;
            startCursor: string;
            endCursor: string;
        };
    };
    marketplace: {
        id: string;
        creationDate: string;
        lastChangeDate: string;
        name: string;
        organization: {
            id: string;
            creationDate: string;
            lastChangeDate: string;
            users: {
                edges: {
                    cursor: string;
                };
                pageInfo: {
                    hasNextPage: string;
                    hasPreviousPage: string;
                    startCursor: string;
                    endCursor: string;
                };
            };
            marketplaces: {
                edges: {
                    cursor: string;
                };
                pageInfo: {
                    hasNextPage: string;
                    hasPreviousPage: string;
                    startCursor: string;
                    endCursor: string;
                };
            };
            name: string;
            tier: string;
            systemStatus: string;
            errors: string;
        };
        mediaChannels: {
            edges: {
                cursor: string;
                node: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    name: string;
                    platform: string;
                    remoteId: string;
                    remoteState: string;
                    currency: string;
                    currencySymbol: string;
                    currencyOffset: string;
                    timezone: string;
                    tokenStatus: string;
                    systemStatus: string;
                    errors: string;
                };
            };
            pageInfo: {
                hasNextPage: string;
                hasPreviousPage: string;
                startCursor: string;
                endCursor: string;
            };
        };
        campaignTemplates: {
            edges: {
                cursor: string;
                node: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    name: string;
                    description: string;
                    platform: string;
                    remoteId: string;
                    systemStatus: string;
                    errors: string;
                };
            };
            pageInfo: {
                hasNextPage: string;
                hasPreviousPage: string;
                startCursor: string;
                endCursor: string;
            };
        };
        vendors: {
            edges: {
                cursor: string;
                node: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    name: string;
                    systemStatus: string;
                    errors: string;
                };
            };
            pageInfo: {
                hasNextPage: string;
                hasPreviousPage: string;
                startCursor: string;
                endCursor: string;
            };
        };
        vendorTokens: {
            edges: {
                cursor: string;
                node: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    token: string;
                };
            };
            pageInfo: {
                hasNextPage: string;
                hasPreviousPage: string;
                startCursor: string;
                endCursor: string;
            };
        };
        systemStatus: string;
        errors: string;
        creativeTemplates: {
            edges: {
                cursor: string;
                node: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    name: string;
                    height: string;
                    width: string;
                    systemStatus: string;
                    errors: string;
                };
            };
            pageInfo: {
                hasNextPage: string;
                hasPreviousPage: string;
                startCursor: string;
                endCursor: string;
            };
        };
    };
};
export declare const MediaChannelFields: MediaChannelFields;
export declare type CatalogFields = {
    id: string;
    name: string;
    catalogType: string;
    creationDate: string;
    lastChangeDate: string;
    remoteId: string;
    systemStatus: string;
    remoteState: string;
    dataFeedId: string;
    errors: string;
    mediaChannel: {
        id: string;
        creationDate: string;
        lastChangeDate: string;
        name: string;
        platform: string;
        remoteId: string;
        remoteState: string;
        currency: string;
        currencySymbol: string;
        currencyOffset: string;
        timezone: string;
        tokenStatus: string;
        systemStatus: string;
        errors: string;
        catalogs: {
            edges: {
                cursor: string;
                node: {
                    id: string;
                    name: string;
                    catalogType: string;
                    creationDate: string;
                    lastChangeDate: string;
                    remoteId: string;
                    systemStatus: string;
                    remoteState: string;
                    dataFeedId: string;
                    errors: string;
                };
            };
            pageInfo: {
                hasNextPage: string;
                hasPreviousPage: string;
                startCursor: string;
                endCursor: string;
            };
        };
        marketplace: {
            id: string;
            creationDate: string;
            lastChangeDate: string;
            name: string;
            organization: {
                id: string;
                creationDate: string;
                lastChangeDate: string;
                users: {};
                marketplaces: {};
                name: string;
                tier: string;
                systemStatus: string;
                errors: string;
            };
            mediaChannels: {
                edges: {
                    cursor: string;
                };
                pageInfo: {
                    hasNextPage: string;
                    hasPreviousPage: string;
                    startCursor: string;
                    endCursor: string;
                };
            };
            campaignTemplates: {
                edges: {
                    cursor: string;
                };
                pageInfo: {
                    hasNextPage: string;
                    hasPreviousPage: string;
                    startCursor: string;
                    endCursor: string;
                };
            };
            vendors: {
                edges: {
                    cursor: string;
                };
                pageInfo: {
                    hasNextPage: string;
                    hasPreviousPage: string;
                    startCursor: string;
                    endCursor: string;
                };
            };
            vendorTokens: {
                edges: {
                    cursor: string;
                };
                pageInfo: {
                    hasNextPage: string;
                    hasPreviousPage: string;
                    startCursor: string;
                    endCursor: string;
                };
            };
            systemStatus: string;
            errors: string;
            creativeTemplates: {
                edges: {
                    cursor: string;
                };
                pageInfo: {
                    hasNextPage: string;
                    hasPreviousPage: string;
                    startCursor: string;
                    endCursor: string;
                };
            };
        };
    };
    products: {
        edges: {
            cursor: string;
            node: {
                id: string;
                creationDate: string;
                lastChangeDate: string;
                name: string;
                sku: string;
                remoteState: string;
                marketingCampaigns: {};
                catalog: {
                    id: string;
                    name: string;
                    catalogType: string;
                    creationDate: string;
                    lastChangeDate: string;
                    remoteId: string;
                    systemStatus: string;
                    remoteState: string;
                    dataFeedId: string;
                    errors: string;
                };
                metadata: string;
                vendor: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    name: string;
                    systemStatus: string;
                    errors: string;
                };
                systemStatus: string;
                errors: string;
                warnings: string;
            };
        };
        pageInfo: {
            hasNextPage: string;
            hasPreviousPage: string;
            startCursor: string;
            endCursor: string;
        };
    };
};
export declare const CatalogFields: CatalogFields;
export declare type ProductFields = {
    id: string;
    creationDate: string;
    lastChangeDate: string;
    name: string;
    sku: string;
    remoteState: string;
    marketingCampaigns: {
        edges: {
            cursor: string;
            node: {
                id: string;
                creationDate: string;
                lastChangeDate: string;
                name: string;
                status: string;
                marketingAds: {};
                products: {};
                vendor: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    name: string;
                    systemStatus: string;
                    errors: string;
                };
                catalog: {
                    id: string;
                    name: string;
                    catalogType: string;
                    creationDate: string;
                    lastChangeDate: string;
                    remoteId: string;
                    systemStatus: string;
                    remoteState: string;
                    dataFeedId: string;
                    errors: string;
                };
                campaignTemplate: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    name: string;
                    description: string;
                    platform: string;
                    remoteId: string;
                    systemStatus: string;
                    errors: string;
                };
                mediaChannel: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    name: string;
                    platform: string;
                    remoteId: string;
                    remoteState: string;
                    currency: string;
                    currencySymbol: string;
                    currencyOffset: string;
                    timezone: string;
                    tokenStatus: string;
                    systemStatus: string;
                    errors: string;
                };
                results: {};
                creativeSpec: string;
                runTimeSpec: string;
                resultsSource: string;
                systemStatus: string;
                errors: string;
            };
        };
        pageInfo: {
            hasNextPage: string;
            hasPreviousPage: string;
            startCursor: string;
            endCursor: string;
        };
    };
    catalog: {
        id: string;
        name: string;
        catalogType: string;
        creationDate: string;
        lastChangeDate: string;
        remoteId: string;
        systemStatus: string;
        remoteState: string;
        dataFeedId: string;
        errors: string;
        mediaChannel: {
            id: string;
            creationDate: string;
            lastChangeDate: string;
            name: string;
            platform: string;
            remoteId: string;
            remoteState: string;
            currency: string;
            currencySymbol: string;
            currencyOffset: string;
            timezone: string;
            tokenStatus: string;
            systemStatus: string;
            errors: string;
            catalogs: {
                edges: {
                    cursor: string;
                };
                pageInfo: {
                    hasNextPage: string;
                    hasPreviousPage: string;
                    startCursor: string;
                    endCursor: string;
                };
            };
            marketplace: {
                id: string;
                creationDate: string;
                lastChangeDate: string;
                name: string;
                organization: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    name: string;
                    tier: string;
                    systemStatus: string;
                    errors: string;
                };
                mediaChannels: {};
                campaignTemplates: {};
                vendors: {};
                vendorTokens: {};
                systemStatus: string;
                errors: string;
                creativeTemplates: {};
            };
        };
        products: {
            edges: {
                cursor: string;
                node: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    name: string;
                    sku: string;
                    remoteState: string;
                    metadata: string;
                    systemStatus: string;
                    errors: string;
                    warnings: string;
                };
            };
            pageInfo: {
                hasNextPage: string;
                hasPreviousPage: string;
                startCursor: string;
                endCursor: string;
            };
        };
    };
    metadata: string;
    vendor: {
        id: string;
        creationDate: string;
        lastChangeDate: string;
        name: string;
        marketplace: {
            id: string;
            creationDate: string;
            lastChangeDate: string;
            name: string;
            organization: {
                id: string;
                creationDate: string;
                lastChangeDate: string;
                users: {};
                marketplaces: {};
                name: string;
                tier: string;
                systemStatus: string;
                errors: string;
            };
            mediaChannels: {
                edges: {
                    cursor: string;
                };
                pageInfo: {
                    hasNextPage: string;
                    hasPreviousPage: string;
                    startCursor: string;
                    endCursor: string;
                };
            };
            campaignTemplates: {
                edges: {
                    cursor: string;
                };
                pageInfo: {
                    hasNextPage: string;
                    hasPreviousPage: string;
                    startCursor: string;
                    endCursor: string;
                };
            };
            vendors: {
                edges: {
                    cursor: string;
                };
                pageInfo: {
                    hasNextPage: string;
                    hasPreviousPage: string;
                    startCursor: string;
                    endCursor: string;
                };
            };
            vendorTokens: {
                edges: {
                    cursor: string;
                };
                pageInfo: {
                    hasNextPage: string;
                    hasPreviousPage: string;
                    startCursor: string;
                    endCursor: string;
                };
            };
            systemStatus: string;
            errors: string;
            creativeTemplates: {
                edges: {
                    cursor: string;
                };
                pageInfo: {
                    hasNextPage: string;
                    hasPreviousPage: string;
                    startCursor: string;
                    endCursor: string;
                };
            };
        };
        vendorTokens: {
            edges: {
                cursor: string;
                node: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    token: string;
                };
            };
            pageInfo: {
                hasNextPage: string;
                hasPreviousPage: string;
                startCursor: string;
                endCursor: string;
            };
        };
        products: {
            edges: {
                cursor: string;
                node: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    name: string;
                    sku: string;
                    remoteState: string;
                    metadata: string;
                    systemStatus: string;
                    errors: string;
                    warnings: string;
                };
            };
            pageInfo: {
                hasNextPage: string;
                hasPreviousPage: string;
                startCursor: string;
                endCursor: string;
            };
        };
        systemStatus: string;
        errors: string;
    };
    systemStatus: string;
    errors: string;
    warnings: string;
};
export declare const ProductFields: ProductFields;
export declare type MarketingCampaignFields = {
    id: string;
    creationDate: string;
    lastChangeDate: string;
    name: string;
    status: string;
    marketingAds: {
        edges: {
            cursor: string;
            node: {
                id: string;
                creationDate: string;
                lastChangeDate: string;
                remoteId: string;
                systemStatus: string;
                errors: string;
                preview: string;
                resultsSource: string;
                results: {};
                marketingCampaign: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    name: string;
                    status: string;
                    creativeSpec: string;
                    runTimeSpec: string;
                    resultsSource: string;
                    systemStatus: string;
                    errors: string;
                };
                vendor: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    name: string;
                    systemStatus: string;
                    errors: string;
                };
            };
        };
        pageInfo: {
            hasNextPage: string;
            hasPreviousPage: string;
            startCursor: string;
            endCursor: string;
        };
    };
    products: {
        edges: {
            cursor: string;
            node: {
                id: string;
                creationDate: string;
                lastChangeDate: string;
                name: string;
                sku: string;
                remoteState: string;
                marketingCampaigns: {};
                catalog: {
                    id: string;
                    name: string;
                    catalogType: string;
                    creationDate: string;
                    lastChangeDate: string;
                    remoteId: string;
                    systemStatus: string;
                    remoteState: string;
                    dataFeedId: string;
                    errors: string;
                };
                metadata: string;
                vendor: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    name: string;
                    systemStatus: string;
                    errors: string;
                };
                systemStatus: string;
                errors: string;
                warnings: string;
            };
        };
        pageInfo: {
            hasNextPage: string;
            hasPreviousPage: string;
            startCursor: string;
            endCursor: string;
        };
    };
    vendor: {
        id: string;
        creationDate: string;
        lastChangeDate: string;
        name: string;
        marketplace: {
            id: string;
            creationDate: string;
            lastChangeDate: string;
            name: string;
            organization: {
                id: string;
                creationDate: string;
                lastChangeDate: string;
                users: {};
                marketplaces: {};
                name: string;
                tier: string;
                systemStatus: string;
                errors: string;
            };
            mediaChannels: {
                edges: {
                    cursor: string;
                };
                pageInfo: {
                    hasNextPage: string;
                    hasPreviousPage: string;
                    startCursor: string;
                    endCursor: string;
                };
            };
            campaignTemplates: {
                edges: {
                    cursor: string;
                };
                pageInfo: {
                    hasNextPage: string;
                    hasPreviousPage: string;
                    startCursor: string;
                    endCursor: string;
                };
            };
            vendors: {
                edges: {
                    cursor: string;
                };
                pageInfo: {
                    hasNextPage: string;
                    hasPreviousPage: string;
                    startCursor: string;
                    endCursor: string;
                };
            };
            vendorTokens: {
                edges: {
                    cursor: string;
                };
                pageInfo: {
                    hasNextPage: string;
                    hasPreviousPage: string;
                    startCursor: string;
                    endCursor: string;
                };
            };
            systemStatus: string;
            errors: string;
            creativeTemplates: {
                edges: {
                    cursor: string;
                };
                pageInfo: {
                    hasNextPage: string;
                    hasPreviousPage: string;
                    startCursor: string;
                    endCursor: string;
                };
            };
        };
        vendorTokens: {
            edges: {
                cursor: string;
                node: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    token: string;
                };
            };
            pageInfo: {
                hasNextPage: string;
                hasPreviousPage: string;
                startCursor: string;
                endCursor: string;
            };
        };
        products: {
            edges: {
                cursor: string;
                node: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    name: string;
                    sku: string;
                    remoteState: string;
                    metadata: string;
                    systemStatus: string;
                    errors: string;
                    warnings: string;
                };
            };
            pageInfo: {
                hasNextPage: string;
                hasPreviousPage: string;
                startCursor: string;
                endCursor: string;
            };
        };
        systemStatus: string;
        errors: string;
    };
    catalog: {
        id: string;
        name: string;
        catalogType: string;
        creationDate: string;
        lastChangeDate: string;
        remoteId: string;
        systemStatus: string;
        remoteState: string;
        dataFeedId: string;
        errors: string;
        mediaChannel: {
            id: string;
            creationDate: string;
            lastChangeDate: string;
            name: string;
            platform: string;
            remoteId: string;
            remoteState: string;
            currency: string;
            currencySymbol: string;
            currencyOffset: string;
            timezone: string;
            tokenStatus: string;
            systemStatus: string;
            errors: string;
            catalogs: {
                edges: {
                    cursor: string;
                };
                pageInfo: {
                    hasNextPage: string;
                    hasPreviousPage: string;
                    startCursor: string;
                    endCursor: string;
                };
            };
            marketplace: {
                id: string;
                creationDate: string;
                lastChangeDate: string;
                name: string;
                organization: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    name: string;
                    tier: string;
                    systemStatus: string;
                    errors: string;
                };
                mediaChannels: {};
                campaignTemplates: {};
                vendors: {};
                vendorTokens: {};
                systemStatus: string;
                errors: string;
                creativeTemplates: {};
            };
        };
        products: {
            edges: {
                cursor: string;
                node: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    name: string;
                    sku: string;
                    remoteState: string;
                    metadata: string;
                    systemStatus: string;
                    errors: string;
                    warnings: string;
                };
            };
            pageInfo: {
                hasNextPage: string;
                hasPreviousPage: string;
                startCursor: string;
                endCursor: string;
            };
        };
    };
    campaignTemplate: {
        id: string;
        creationDate: string;
        lastChangeDate: string;
        name: string;
        description: string;
        platform: string;
        remoteId: string;
        systemStatus: string;
        errors: string;
        marketplace: {
            id: string;
            creationDate: string;
            lastChangeDate: string;
            name: string;
            organization: {
                id: string;
                creationDate: string;
                lastChangeDate: string;
                users: {};
                marketplaces: {};
                name: string;
                tier: string;
                systemStatus: string;
                errors: string;
            };
            mediaChannels: {
                edges: {
                    cursor: string;
                };
                pageInfo: {
                    hasNextPage: string;
                    hasPreviousPage: string;
                    startCursor: string;
                    endCursor: string;
                };
            };
            campaignTemplates: {
                edges: {
                    cursor: string;
                };
                pageInfo: {
                    hasNextPage: string;
                    hasPreviousPage: string;
                    startCursor: string;
                    endCursor: string;
                };
            };
            vendors: {
                edges: {
                    cursor: string;
                };
                pageInfo: {
                    hasNextPage: string;
                    hasPreviousPage: string;
                    startCursor: string;
                    endCursor: string;
                };
            };
            vendorTokens: {
                edges: {
                    cursor: string;
                };
                pageInfo: {
                    hasNextPage: string;
                    hasPreviousPage: string;
                    startCursor: string;
                    endCursor: string;
                };
            };
            systemStatus: string;
            errors: string;
            creativeTemplates: {
                edges: {
                    cursor: string;
                };
                pageInfo: {
                    hasNextPage: string;
                    hasPreviousPage: string;
                    startCursor: string;
                    endCursor: string;
                };
            };
        };
        marketingCampaigns: {
            edges: {
                cursor: string;
                node: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    name: string;
                    status: string;
                    creativeSpec: string;
                    runTimeSpec: string;
                    resultsSource: string;
                    systemStatus: string;
                    errors: string;
                };
            };
            pageInfo: {
                hasNextPage: string;
                hasPreviousPage: string;
                startCursor: string;
                endCursor: string;
            };
        };
    };
    mediaChannel: {
        id: string;
        creationDate: string;
        lastChangeDate: string;
        name: string;
        platform: string;
        remoteId: string;
        remoteState: string;
        currency: string;
        currencySymbol: string;
        currencyOffset: string;
        timezone: string;
        tokenStatus: string;
        systemStatus: string;
        errors: string;
        catalogs: {
            edges: {
                cursor: string;
                node: {
                    id: string;
                    name: string;
                    catalogType: string;
                    creationDate: string;
                    lastChangeDate: string;
                    remoteId: string;
                    systemStatus: string;
                    remoteState: string;
                    dataFeedId: string;
                    errors: string;
                };
            };
            pageInfo: {
                hasNextPage: string;
                hasPreviousPage: string;
                startCursor: string;
                endCursor: string;
            };
        };
        marketplace: {
            id: string;
            creationDate: string;
            lastChangeDate: string;
            name: string;
            organization: {
                id: string;
                creationDate: string;
                lastChangeDate: string;
                users: {};
                marketplaces: {};
                name: string;
                tier: string;
                systemStatus: string;
                errors: string;
            };
            mediaChannels: {
                edges: {
                    cursor: string;
                };
                pageInfo: {
                    hasNextPage: string;
                    hasPreviousPage: string;
                    startCursor: string;
                    endCursor: string;
                };
            };
            campaignTemplates: {
                edges: {
                    cursor: string;
                };
                pageInfo: {
                    hasNextPage: string;
                    hasPreviousPage: string;
                    startCursor: string;
                    endCursor: string;
                };
            };
            vendors: {
                edges: {
                    cursor: string;
                };
                pageInfo: {
                    hasNextPage: string;
                    hasPreviousPage: string;
                    startCursor: string;
                    endCursor: string;
                };
            };
            vendorTokens: {
                edges: {
                    cursor: string;
                };
                pageInfo: {
                    hasNextPage: string;
                    hasPreviousPage: string;
                    startCursor: string;
                    endCursor: string;
                };
            };
            systemStatus: string;
            errors: string;
            creativeTemplates: {
                edges: {
                    cursor: string;
                };
                pageInfo: {
                    hasNextPage: string;
                    hasPreviousPage: string;
                    startCursor: string;
                    endCursor: string;
                };
            };
        };
    };
    results: {
        edges: {
            cursor: string;
            node: {
                id: string;
                creationDate: string;
                lastChangeDate: string;
                date: string;
                analytics: {
                    results: string;
                    impressions: string;
                    clicks: string;
                    spend: string;
                    purchases: string;
                    purchasesValue: string;
                };
                type: string;
                resource: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                };
                vendor: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    name: string;
                    systemStatus: string;
                    errors: string;
                };
            };
        };
        pageInfo: {
            hasNextPage: string;
            hasPreviousPage: string;
            startCursor: string;
            endCursor: string;
        };
    };
    creativeSpec: string;
    runTimeSpec: string;
    resultsSource: string;
    systemStatus: string;
    errors: string;
};
export declare const MarketingCampaignFields: MarketingCampaignFields;
export declare type VendorFields = {
    id: string;
    creationDate: string;
    lastChangeDate: string;
    name: string;
    marketplace: {
        id: string;
        creationDate: string;
        lastChangeDate: string;
        name: string;
        organization: {
            id: string;
            creationDate: string;
            lastChangeDate: string;
            users: {
                edges: {
                    cursor: string;
                };
                pageInfo: {
                    hasNextPage: string;
                    hasPreviousPage: string;
                    startCursor: string;
                    endCursor: string;
                };
            };
            marketplaces: {
                edges: {
                    cursor: string;
                };
                pageInfo: {
                    hasNextPage: string;
                    hasPreviousPage: string;
                    startCursor: string;
                    endCursor: string;
                };
            };
            name: string;
            tier: string;
            systemStatus: string;
            errors: string;
        };
        mediaChannels: {
            edges: {
                cursor: string;
                node: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    name: string;
                    platform: string;
                    remoteId: string;
                    remoteState: string;
                    currency: string;
                    currencySymbol: string;
                    currencyOffset: string;
                    timezone: string;
                    tokenStatus: string;
                    systemStatus: string;
                    errors: string;
                };
            };
            pageInfo: {
                hasNextPage: string;
                hasPreviousPage: string;
                startCursor: string;
                endCursor: string;
            };
        };
        campaignTemplates: {
            edges: {
                cursor: string;
                node: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    name: string;
                    description: string;
                    platform: string;
                    remoteId: string;
                    systemStatus: string;
                    errors: string;
                };
            };
            pageInfo: {
                hasNextPage: string;
                hasPreviousPage: string;
                startCursor: string;
                endCursor: string;
            };
        };
        vendors: {
            edges: {
                cursor: string;
                node: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    name: string;
                    systemStatus: string;
                    errors: string;
                };
            };
            pageInfo: {
                hasNextPage: string;
                hasPreviousPage: string;
                startCursor: string;
                endCursor: string;
            };
        };
        vendorTokens: {
            edges: {
                cursor: string;
                node: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    token: string;
                };
            };
            pageInfo: {
                hasNextPage: string;
                hasPreviousPage: string;
                startCursor: string;
                endCursor: string;
            };
        };
        systemStatus: string;
        errors: string;
        creativeTemplates: {
            edges: {
                cursor: string;
                node: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    name: string;
                    height: string;
                    width: string;
                    systemStatus: string;
                    errors: string;
                };
            };
            pageInfo: {
                hasNextPage: string;
                hasPreviousPage: string;
                startCursor: string;
                endCursor: string;
            };
        };
    };
    vendorTokens: {
        edges: {
            cursor: string;
            node: {
                id: string;
                creationDate: string;
                lastChangeDate: string;
                marketplace: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    name: string;
                    systemStatus: string;
                    errors: string;
                };
                vendor: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    name: string;
                    systemStatus: string;
                    errors: string;
                };
                token: string;
            };
        };
        pageInfo: {
            hasNextPage: string;
            hasPreviousPage: string;
            startCursor: string;
            endCursor: string;
        };
    };
    products: {
        edges: {
            cursor: string;
            node: {
                id: string;
                creationDate: string;
                lastChangeDate: string;
                name: string;
                sku: string;
                remoteState: string;
                marketingCampaigns: {};
                catalog: {
                    id: string;
                    name: string;
                    catalogType: string;
                    creationDate: string;
                    lastChangeDate: string;
                    remoteId: string;
                    systemStatus: string;
                    remoteState: string;
                    dataFeedId: string;
                    errors: string;
                };
                metadata: string;
                vendor: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    name: string;
                    systemStatus: string;
                    errors: string;
                };
                systemStatus: string;
                errors: string;
                warnings: string;
            };
        };
        pageInfo: {
            hasNextPage: string;
            hasPreviousPage: string;
            startCursor: string;
            endCursor: string;
        };
    };
    systemStatus: string;
    errors: string;
};
export declare const VendorFields: VendorFields;
export declare type VendorTokenFields = {
    id: string;
    creationDate: string;
    lastChangeDate: string;
    marketplace: {
        id: string;
        creationDate: string;
        lastChangeDate: string;
        name: string;
        organization: {
            id: string;
            creationDate: string;
            lastChangeDate: string;
            users: {
                edges: {
                    cursor: string;
                };
                pageInfo: {
                    hasNextPage: string;
                    hasPreviousPage: string;
                    startCursor: string;
                    endCursor: string;
                };
            };
            marketplaces: {
                edges: {
                    cursor: string;
                };
                pageInfo: {
                    hasNextPage: string;
                    hasPreviousPage: string;
                    startCursor: string;
                    endCursor: string;
                };
            };
            name: string;
            tier: string;
            systemStatus: string;
            errors: string;
        };
        mediaChannels: {
            edges: {
                cursor: string;
                node: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    name: string;
                    platform: string;
                    remoteId: string;
                    remoteState: string;
                    currency: string;
                    currencySymbol: string;
                    currencyOffset: string;
                    timezone: string;
                    tokenStatus: string;
                    systemStatus: string;
                    errors: string;
                };
            };
            pageInfo: {
                hasNextPage: string;
                hasPreviousPage: string;
                startCursor: string;
                endCursor: string;
            };
        };
        campaignTemplates: {
            edges: {
                cursor: string;
                node: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    name: string;
                    description: string;
                    platform: string;
                    remoteId: string;
                    systemStatus: string;
                    errors: string;
                };
            };
            pageInfo: {
                hasNextPage: string;
                hasPreviousPage: string;
                startCursor: string;
                endCursor: string;
            };
        };
        vendors: {
            edges: {
                cursor: string;
                node: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    name: string;
                    systemStatus: string;
                    errors: string;
                };
            };
            pageInfo: {
                hasNextPage: string;
                hasPreviousPage: string;
                startCursor: string;
                endCursor: string;
            };
        };
        vendorTokens: {
            edges: {
                cursor: string;
                node: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    token: string;
                };
            };
            pageInfo: {
                hasNextPage: string;
                hasPreviousPage: string;
                startCursor: string;
                endCursor: string;
            };
        };
        systemStatus: string;
        errors: string;
        creativeTemplates: {
            edges: {
                cursor: string;
                node: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    name: string;
                    height: string;
                    width: string;
                    systemStatus: string;
                    errors: string;
                };
            };
            pageInfo: {
                hasNextPage: string;
                hasPreviousPage: string;
                startCursor: string;
                endCursor: string;
            };
        };
    };
    vendor: {
        id: string;
        creationDate: string;
        lastChangeDate: string;
        name: string;
        marketplace: {
            id: string;
            creationDate: string;
            lastChangeDate: string;
            name: string;
            organization: {
                id: string;
                creationDate: string;
                lastChangeDate: string;
                users: {};
                marketplaces: {};
                name: string;
                tier: string;
                systemStatus: string;
                errors: string;
            };
            mediaChannels: {
                edges: {
                    cursor: string;
                };
                pageInfo: {
                    hasNextPage: string;
                    hasPreviousPage: string;
                    startCursor: string;
                    endCursor: string;
                };
            };
            campaignTemplates: {
                edges: {
                    cursor: string;
                };
                pageInfo: {
                    hasNextPage: string;
                    hasPreviousPage: string;
                    startCursor: string;
                    endCursor: string;
                };
            };
            vendors: {
                edges: {
                    cursor: string;
                };
                pageInfo: {
                    hasNextPage: string;
                    hasPreviousPage: string;
                    startCursor: string;
                    endCursor: string;
                };
            };
            vendorTokens: {
                edges: {
                    cursor: string;
                };
                pageInfo: {
                    hasNextPage: string;
                    hasPreviousPage: string;
                    startCursor: string;
                    endCursor: string;
                };
            };
            systemStatus: string;
            errors: string;
            creativeTemplates: {
                edges: {
                    cursor: string;
                };
                pageInfo: {
                    hasNextPage: string;
                    hasPreviousPage: string;
                    startCursor: string;
                    endCursor: string;
                };
            };
        };
        vendorTokens: {
            edges: {
                cursor: string;
                node: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    token: string;
                };
            };
            pageInfo: {
                hasNextPage: string;
                hasPreviousPage: string;
                startCursor: string;
                endCursor: string;
            };
        };
        products: {
            edges: {
                cursor: string;
                node: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    name: string;
                    sku: string;
                    remoteState: string;
                    metadata: string;
                    systemStatus: string;
                    errors: string;
                    warnings: string;
                };
            };
            pageInfo: {
                hasNextPage: string;
                hasPreviousPage: string;
                startCursor: string;
                endCursor: string;
            };
        };
        systemStatus: string;
        errors: string;
    };
    token: string;
};
export declare const VendorTokenFields: VendorTokenFields;
export declare type MarketingAdFields = {
    id: string;
    creationDate: string;
    lastChangeDate: string;
    remoteId: string;
    systemStatus: string;
    errors: string;
    preview: string;
    resultsSource: string;
    results: {
        edges: {
            cursor: string;
            node: {
                id: string;
                creationDate: string;
                lastChangeDate: string;
                date: string;
                analytics: {
                    results: string;
                    impressions: string;
                    clicks: string;
                    spend: string;
                    purchases: string;
                    purchasesValue: string;
                };
                type: string;
                resource: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                };
                vendor: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    name: string;
                    systemStatus: string;
                    errors: string;
                };
            };
        };
        pageInfo: {
            hasNextPage: string;
            hasPreviousPage: string;
            startCursor: string;
            endCursor: string;
        };
    };
    marketingCampaign: {
        id: string;
        creationDate: string;
        lastChangeDate: string;
        name: string;
        status: string;
        marketingAds: {
            edges: {
                cursor: string;
                node: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    remoteId: string;
                    systemStatus: string;
                    errors: string;
                    preview: string;
                    resultsSource: string;
                };
            };
            pageInfo: {
                hasNextPage: string;
                hasPreviousPage: string;
                startCursor: string;
                endCursor: string;
            };
        };
        products: {
            edges: {
                cursor: string;
                node: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    name: string;
                    sku: string;
                    remoteState: string;
                    metadata: string;
                    systemStatus: string;
                    errors: string;
                    warnings: string;
                };
            };
            pageInfo: {
                hasNextPage: string;
                hasPreviousPage: string;
                startCursor: string;
                endCursor: string;
            };
        };
        vendor: {
            id: string;
            creationDate: string;
            lastChangeDate: string;
            name: string;
            marketplace: {
                id: string;
                creationDate: string;
                lastChangeDate: string;
                name: string;
                organization: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    name: string;
                    tier: string;
                    systemStatus: string;
                    errors: string;
                };
                mediaChannels: {};
                campaignTemplates: {};
                vendors: {};
                vendorTokens: {};
                systemStatus: string;
                errors: string;
                creativeTemplates: {};
            };
            vendorTokens: {
                edges: {
                    cursor: string;
                };
                pageInfo: {
                    hasNextPage: string;
                    hasPreviousPage: string;
                    startCursor: string;
                    endCursor: string;
                };
            };
            products: {
                edges: {
                    cursor: string;
                };
                pageInfo: {
                    hasNextPage: string;
                    hasPreviousPage: string;
                    startCursor: string;
                    endCursor: string;
                };
            };
            systemStatus: string;
            errors: string;
        };
        catalog: {
            id: string;
            name: string;
            catalogType: string;
            creationDate: string;
            lastChangeDate: string;
            remoteId: string;
            systemStatus: string;
            remoteState: string;
            dataFeedId: string;
            errors: string;
            mediaChannel: {
                id: string;
                creationDate: string;
                lastChangeDate: string;
                name: string;
                platform: string;
                remoteId: string;
                remoteState: string;
                currency: string;
                currencySymbol: string;
                currencyOffset: string;
                timezone: string;
                tokenStatus: string;
                systemStatus: string;
                errors: string;
                catalogs: {};
                marketplace: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    name: string;
                    systemStatus: string;
                    errors: string;
                };
            };
            products: {
                edges: {
                    cursor: string;
                };
                pageInfo: {
                    hasNextPage: string;
                    hasPreviousPage: string;
                    startCursor: string;
                    endCursor: string;
                };
            };
        };
        campaignTemplate: {
            id: string;
            creationDate: string;
            lastChangeDate: string;
            name: string;
            description: string;
            platform: string;
            remoteId: string;
            systemStatus: string;
            errors: string;
            marketplace: {
                id: string;
                creationDate: string;
                lastChangeDate: string;
                name: string;
                organization: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    name: string;
                    tier: string;
                    systemStatus: string;
                    errors: string;
                };
                mediaChannels: {};
                campaignTemplates: {};
                vendors: {};
                vendorTokens: {};
                systemStatus: string;
                errors: string;
                creativeTemplates: {};
            };
            marketingCampaigns: {
                edges: {
                    cursor: string;
                };
                pageInfo: {
                    hasNextPage: string;
                    hasPreviousPage: string;
                    startCursor: string;
                    endCursor: string;
                };
            };
        };
        mediaChannel: {
            id: string;
            creationDate: string;
            lastChangeDate: string;
            name: string;
            platform: string;
            remoteId: string;
            remoteState: string;
            currency: string;
            currencySymbol: string;
            currencyOffset: string;
            timezone: string;
            tokenStatus: string;
            systemStatus: string;
            errors: string;
            catalogs: {
                edges: {
                    cursor: string;
                };
                pageInfo: {
                    hasNextPage: string;
                    hasPreviousPage: string;
                    startCursor: string;
                    endCursor: string;
                };
            };
            marketplace: {
                id: string;
                creationDate: string;
                lastChangeDate: string;
                name: string;
                organization: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    name: string;
                    tier: string;
                    systemStatus: string;
                    errors: string;
                };
                mediaChannels: {};
                campaignTemplates: {};
                vendors: {};
                vendorTokens: {};
                systemStatus: string;
                errors: string;
                creativeTemplates: {};
            };
        };
        results: {
            edges: {
                cursor: string;
                node: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    date: string;
                    type: string;
                };
            };
            pageInfo: {
                hasNextPage: string;
                hasPreviousPage: string;
                startCursor: string;
                endCursor: string;
            };
        };
        creativeSpec: string;
        runTimeSpec: string;
        resultsSource: string;
        systemStatus: string;
        errors: string;
    };
    vendor: {
        id: string;
        creationDate: string;
        lastChangeDate: string;
        name: string;
        marketplace: {
            id: string;
            creationDate: string;
            lastChangeDate: string;
            name: string;
            organization: {
                id: string;
                creationDate: string;
                lastChangeDate: string;
                users: {};
                marketplaces: {};
                name: string;
                tier: string;
                systemStatus: string;
                errors: string;
            };
            mediaChannels: {
                edges: {
                    cursor: string;
                };
                pageInfo: {
                    hasNextPage: string;
                    hasPreviousPage: string;
                    startCursor: string;
                    endCursor: string;
                };
            };
            campaignTemplates: {
                edges: {
                    cursor: string;
                };
                pageInfo: {
                    hasNextPage: string;
                    hasPreviousPage: string;
                    startCursor: string;
                    endCursor: string;
                };
            };
            vendors: {
                edges: {
                    cursor: string;
                };
                pageInfo: {
                    hasNextPage: string;
                    hasPreviousPage: string;
                    startCursor: string;
                    endCursor: string;
                };
            };
            vendorTokens: {
                edges: {
                    cursor: string;
                };
                pageInfo: {
                    hasNextPage: string;
                    hasPreviousPage: string;
                    startCursor: string;
                    endCursor: string;
                };
            };
            systemStatus: string;
            errors: string;
            creativeTemplates: {
                edges: {
                    cursor: string;
                };
                pageInfo: {
                    hasNextPage: string;
                    hasPreviousPage: string;
                    startCursor: string;
                    endCursor: string;
                };
            };
        };
        vendorTokens: {
            edges: {
                cursor: string;
                node: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    token: string;
                };
            };
            pageInfo: {
                hasNextPage: string;
                hasPreviousPage: string;
                startCursor: string;
                endCursor: string;
            };
        };
        products: {
            edges: {
                cursor: string;
                node: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    name: string;
                    sku: string;
                    remoteState: string;
                    metadata: string;
                    systemStatus: string;
                    errors: string;
                    warnings: string;
                };
            };
            pageInfo: {
                hasNextPage: string;
                hasPreviousPage: string;
                startCursor: string;
                endCursor: string;
            };
        };
        systemStatus: string;
        errors: string;
    };
};
export declare const MarketingAdFields: MarketingAdFields;
export declare type ResultFields = {
    id: string;
    creationDate: string;
    lastChangeDate: string;
    date: string;
    analytics: {
        results: string;
        impressions: string;
        clicks: string;
        spend: string;
        purchases: string;
        purchasesValue: string;
    };
    type: string;
    resource: {
        id: string;
        creationDate: string;
        lastChangeDate: string;
        vendor: {
            id: string;
            creationDate: string;
            lastChangeDate: string;
            name: string;
            marketplace: {
                id: string;
                creationDate: string;
                lastChangeDate: string;
                name: string;
                organization: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    name: string;
                    tier: string;
                    systemStatus: string;
                    errors: string;
                };
                mediaChannels: {};
                campaignTemplates: {};
                vendors: {};
                vendorTokens: {};
                systemStatus: string;
                errors: string;
                creativeTemplates: {};
            };
            vendorTokens: {
                edges: {
                    cursor: string;
                };
                pageInfo: {
                    hasNextPage: string;
                    hasPreviousPage: string;
                    startCursor: string;
                    endCursor: string;
                };
            };
            products: {
                edges: {
                    cursor: string;
                };
                pageInfo: {
                    hasNextPage: string;
                    hasPreviousPage: string;
                    startCursor: string;
                    endCursor: string;
                };
            };
            systemStatus: string;
            errors: string;
        };
    };
    vendor: {
        id: string;
        creationDate: string;
        lastChangeDate: string;
        name: string;
        marketplace: {
            id: string;
            creationDate: string;
            lastChangeDate: string;
            name: string;
            organization: {
                id: string;
                creationDate: string;
                lastChangeDate: string;
                users: {};
                marketplaces: {};
                name: string;
                tier: string;
                systemStatus: string;
                errors: string;
            };
            mediaChannels: {
                edges: {
                    cursor: string;
                };
                pageInfo: {
                    hasNextPage: string;
                    hasPreviousPage: string;
                    startCursor: string;
                    endCursor: string;
                };
            };
            campaignTemplates: {
                edges: {
                    cursor: string;
                };
                pageInfo: {
                    hasNextPage: string;
                    hasPreviousPage: string;
                    startCursor: string;
                    endCursor: string;
                };
            };
            vendors: {
                edges: {
                    cursor: string;
                };
                pageInfo: {
                    hasNextPage: string;
                    hasPreviousPage: string;
                    startCursor: string;
                    endCursor: string;
                };
            };
            vendorTokens: {
                edges: {
                    cursor: string;
                };
                pageInfo: {
                    hasNextPage: string;
                    hasPreviousPage: string;
                    startCursor: string;
                    endCursor: string;
                };
            };
            systemStatus: string;
            errors: string;
            creativeTemplates: {
                edges: {
                    cursor: string;
                };
                pageInfo: {
                    hasNextPage: string;
                    hasPreviousPage: string;
                    startCursor: string;
                    endCursor: string;
                };
            };
        };
        vendorTokens: {
            edges: {
                cursor: string;
                node: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    token: string;
                };
            };
            pageInfo: {
                hasNextPage: string;
                hasPreviousPage: string;
                startCursor: string;
                endCursor: string;
            };
        };
        products: {
            edges: {
                cursor: string;
                node: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    name: string;
                    sku: string;
                    remoteState: string;
                    metadata: string;
                    systemStatus: string;
                    errors: string;
                    warnings: string;
                };
            };
            pageInfo: {
                hasNextPage: string;
                hasPreviousPage: string;
                startCursor: string;
                endCursor: string;
            };
        };
        systemStatus: string;
        errors: string;
    };
};
export declare const ResultFields: ResultFields;
export declare type CreativeTemplateFields = {
    id: string;
    creationDate: string;
    lastChangeDate: string;
    name: string;
    height: string;
    width: string;
    marketplace: {
        id: string;
        creationDate: string;
        lastChangeDate: string;
        name: string;
        organization: {
            id: string;
            creationDate: string;
            lastChangeDate: string;
            users: {
                edges: {
                    cursor: string;
                };
                pageInfo: {
                    hasNextPage: string;
                    hasPreviousPage: string;
                    startCursor: string;
                    endCursor: string;
                };
            };
            marketplaces: {
                edges: {
                    cursor: string;
                };
                pageInfo: {
                    hasNextPage: string;
                    hasPreviousPage: string;
                    startCursor: string;
                    endCursor: string;
                };
            };
            name: string;
            tier: string;
            systemStatus: string;
            errors: string;
        };
        mediaChannels: {
            edges: {
                cursor: string;
                node: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    name: string;
                    platform: string;
                    remoteId: string;
                    remoteState: string;
                    currency: string;
                    currencySymbol: string;
                    currencyOffset: string;
                    timezone: string;
                    tokenStatus: string;
                    systemStatus: string;
                    errors: string;
                };
            };
            pageInfo: {
                hasNextPage: string;
                hasPreviousPage: string;
                startCursor: string;
                endCursor: string;
            };
        };
        campaignTemplates: {
            edges: {
                cursor: string;
                node: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    name: string;
                    description: string;
                    platform: string;
                    remoteId: string;
                    systemStatus: string;
                    errors: string;
                };
            };
            pageInfo: {
                hasNextPage: string;
                hasPreviousPage: string;
                startCursor: string;
                endCursor: string;
            };
        };
        vendors: {
            edges: {
                cursor: string;
                node: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    name: string;
                    systemStatus: string;
                    errors: string;
                };
            };
            pageInfo: {
                hasNextPage: string;
                hasPreviousPage: string;
                startCursor: string;
                endCursor: string;
            };
        };
        vendorTokens: {
            edges: {
                cursor: string;
                node: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    token: string;
                };
            };
            pageInfo: {
                hasNextPage: string;
                hasPreviousPage: string;
                startCursor: string;
                endCursor: string;
            };
        };
        systemStatus: string;
        errors: string;
        creativeTemplates: {
            edges: {
                cursor: string;
                node: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    name: string;
                    height: string;
                    width: string;
                    systemStatus: string;
                    errors: string;
                };
            };
            pageInfo: {
                hasNextPage: string;
                hasPreviousPage: string;
                startCursor: string;
                endCursor: string;
            };
        };
    };
    creativeLayers: {
        edges: {
            cursor: string;
            node: {
                id: string;
                creationDate: string;
                lastChangeDate: string;
                name: string;
                height: string;
                width: string;
                x: string;
                y: string;
                order: string;
                type: string;
                properties: string;
                creativeTemplate: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    name: string;
                    height: string;
                    width: string;
                    systemStatus: string;
                    errors: string;
                };
                systemStatus: string;
                errors: string;
            };
        };
        pageInfo: {
            hasNextPage: string;
            hasPreviousPage: string;
            startCursor: string;
            endCursor: string;
        };
    };
    systemStatus: string;
    errors: string;
};
export declare const CreativeTemplateFields: CreativeTemplateFields;
export declare type CreativeLayerFields = {
    id: string;
    creationDate: string;
    lastChangeDate: string;
    name: string;
    height: string;
    width: string;
    x: string;
    y: string;
    order: string;
    type: string;
    properties: string;
    creativeTemplate: {
        id: string;
        creationDate: string;
        lastChangeDate: string;
        name: string;
        height: string;
        width: string;
        marketplace: {
            id: string;
            creationDate: string;
            lastChangeDate: string;
            name: string;
            organization: {
                id: string;
                creationDate: string;
                lastChangeDate: string;
                users: {};
                marketplaces: {};
                name: string;
                tier: string;
                systemStatus: string;
                errors: string;
            };
            mediaChannels: {
                edges: {
                    cursor: string;
                };
                pageInfo: {
                    hasNextPage: string;
                    hasPreviousPage: string;
                    startCursor: string;
                    endCursor: string;
                };
            };
            campaignTemplates: {
                edges: {
                    cursor: string;
                };
                pageInfo: {
                    hasNextPage: string;
                    hasPreviousPage: string;
                    startCursor: string;
                    endCursor: string;
                };
            };
            vendors: {
                edges: {
                    cursor: string;
                };
                pageInfo: {
                    hasNextPage: string;
                    hasPreviousPage: string;
                    startCursor: string;
                    endCursor: string;
                };
            };
            vendorTokens: {
                edges: {
                    cursor: string;
                };
                pageInfo: {
                    hasNextPage: string;
                    hasPreviousPage: string;
                    startCursor: string;
                    endCursor: string;
                };
            };
            systemStatus: string;
            errors: string;
            creativeTemplates: {
                edges: {
                    cursor: string;
                };
                pageInfo: {
                    hasNextPage: string;
                    hasPreviousPage: string;
                    startCursor: string;
                    endCursor: string;
                };
            };
        };
        creativeLayers: {
            edges: {
                cursor: string;
                node: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    name: string;
                    height: string;
                    width: string;
                    x: string;
                    y: string;
                    order: string;
                    type: string;
                    properties: string;
                    systemStatus: string;
                    errors: string;
                };
            };
            pageInfo: {
                hasNextPage: string;
                hasPreviousPage: string;
                startCursor: string;
                endCursor: string;
            };
        };
        systemStatus: string;
        errors: string;
    };
    systemStatus: string;
    errors: string;
};
export declare const CreativeLayerFields: CreativeLayerFields;
export declare type CreativeFontFields = {
    id: string;
    creationDate: string;
    lastChangeDate: string;
    name: string;
    url: string;
    properties: string;
    marketplace: {
        id: string;
        creationDate: string;
        lastChangeDate: string;
        name: string;
        organization: {
            id: string;
            creationDate: string;
            lastChangeDate: string;
            users: {
                edges: {
                    cursor: string;
                };
                pageInfo: {
                    hasNextPage: string;
                    hasPreviousPage: string;
                    startCursor: string;
                    endCursor: string;
                };
            };
            marketplaces: {
                edges: {
                    cursor: string;
                };
                pageInfo: {
                    hasNextPage: string;
                    hasPreviousPage: string;
                    startCursor: string;
                    endCursor: string;
                };
            };
            name: string;
            tier: string;
            systemStatus: string;
            errors: string;
        };
        mediaChannels: {
            edges: {
                cursor: string;
                node: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    name: string;
                    platform: string;
                    remoteId: string;
                    remoteState: string;
                    currency: string;
                    currencySymbol: string;
                    currencyOffset: string;
                    timezone: string;
                    tokenStatus: string;
                    systemStatus: string;
                    errors: string;
                };
            };
            pageInfo: {
                hasNextPage: string;
                hasPreviousPage: string;
                startCursor: string;
                endCursor: string;
            };
        };
        campaignTemplates: {
            edges: {
                cursor: string;
                node: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    name: string;
                    description: string;
                    platform: string;
                    remoteId: string;
                    systemStatus: string;
                    errors: string;
                };
            };
            pageInfo: {
                hasNextPage: string;
                hasPreviousPage: string;
                startCursor: string;
                endCursor: string;
            };
        };
        vendors: {
            edges: {
                cursor: string;
                node: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    name: string;
                    systemStatus: string;
                    errors: string;
                };
            };
            pageInfo: {
                hasNextPage: string;
                hasPreviousPage: string;
                startCursor: string;
                endCursor: string;
            };
        };
        vendorTokens: {
            edges: {
                cursor: string;
                node: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    token: string;
                };
            };
            pageInfo: {
                hasNextPage: string;
                hasPreviousPage: string;
                startCursor: string;
                endCursor: string;
            };
        };
        systemStatus: string;
        errors: string;
        creativeTemplates: {
            edges: {
                cursor: string;
                node: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    name: string;
                    height: string;
                    width: string;
                    systemStatus: string;
                    errors: string;
                };
            };
            pageInfo: {
                hasNextPage: string;
                hasPreviousPage: string;
                startCursor: string;
                endCursor: string;
            };
        };
    };
    systemStatus: string;
    errors: string;
};
export declare const CreativeFontFields: CreativeFontFields;
export declare type CreativeImageFields = {
    id: string;
    creationDate: string;
    lastChangeDate: string;
    name: string;
    url: string;
    properties: string;
    marketplace: {
        id: string;
        creationDate: string;
        lastChangeDate: string;
        name: string;
        organization: {
            id: string;
            creationDate: string;
            lastChangeDate: string;
            users: {
                edges: {
                    cursor: string;
                };
                pageInfo: {
                    hasNextPage: string;
                    hasPreviousPage: string;
                    startCursor: string;
                    endCursor: string;
                };
            };
            marketplaces: {
                edges: {
                    cursor: string;
                };
                pageInfo: {
                    hasNextPage: string;
                    hasPreviousPage: string;
                    startCursor: string;
                    endCursor: string;
                };
            };
            name: string;
            tier: string;
            systemStatus: string;
            errors: string;
        };
        mediaChannels: {
            edges: {
                cursor: string;
                node: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    name: string;
                    platform: string;
                    remoteId: string;
                    remoteState: string;
                    currency: string;
                    currencySymbol: string;
                    currencyOffset: string;
                    timezone: string;
                    tokenStatus: string;
                    systemStatus: string;
                    errors: string;
                };
            };
            pageInfo: {
                hasNextPage: string;
                hasPreviousPage: string;
                startCursor: string;
                endCursor: string;
            };
        };
        campaignTemplates: {
            edges: {
                cursor: string;
                node: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    name: string;
                    description: string;
                    platform: string;
                    remoteId: string;
                    systemStatus: string;
                    errors: string;
                };
            };
            pageInfo: {
                hasNextPage: string;
                hasPreviousPage: string;
                startCursor: string;
                endCursor: string;
            };
        };
        vendors: {
            edges: {
                cursor: string;
                node: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    name: string;
                    systemStatus: string;
                    errors: string;
                };
            };
            pageInfo: {
                hasNextPage: string;
                hasPreviousPage: string;
                startCursor: string;
                endCursor: string;
            };
        };
        vendorTokens: {
            edges: {
                cursor: string;
                node: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    token: string;
                };
            };
            pageInfo: {
                hasNextPage: string;
                hasPreviousPage: string;
                startCursor: string;
                endCursor: string;
            };
        };
        systemStatus: string;
        errors: string;
        creativeTemplates: {
            edges: {
                cursor: string;
                node: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    name: string;
                    height: string;
                    width: string;
                    systemStatus: string;
                    errors: string;
                };
            };
            pageInfo: {
                hasNextPage: string;
                hasPreviousPage: string;
                startCursor: string;
                endCursor: string;
            };
        };
    };
    systemStatus: string;
    errors: string;
};
export declare const CreativeImageFields: CreativeImageFields;
export declare type TokenFields = {
    token: string;
    refreshToken: string;
    expiryDate: string;
    user: {
        id: string;
        creationDate: string;
        lastChangeDate: string;
        email: string;
        firstName: string;
        lastName: string;
        organizations: {
            edges: {
                cursor: string;
                node: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    name: string;
                    tier: string;
                    systemStatus: string;
                    errors: string;
                };
            };
            pageInfo: {
                hasNextPage: string;
                hasPreviousPage: string;
                startCursor: string;
                endCursor: string;
            };
        };
        entitlements: {
            edges: {
                cursor: string;
                node: {
                    id: string;
                    creationDate: string;
                    lastChangeDate: string;
                    type: string;
                    permissions: string;
                };
            };
            pageInfo: {
                hasNextPage: string;
                hasPreviousPage: string;
                startCursor: string;
                endCursor: string;
            };
        };
    };
};
export declare const TokenFields: TokenFields;
