export type CampaignTemplateFields = {
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
export const CampaignTemplateFields: CampaignTemplateFields = {
    id: 'id',
    creationDate: 'creationDate',
    lastChangeDate: 'lastChangeDate',
    name: 'name',
    description: 'description',
    platform: 'platform',
    remoteId: 'remoteId',
    systemStatus: 'systemStatus',
    errors: 'errors',
    marketplace: {
        id: 'marketplace {id}',
        creationDate: 'marketplace {creationDate}',
        lastChangeDate: 'marketplace {lastChangeDate}',
        name: 'marketplace {name}',
        organization: {
            id: 'marketplace {organization {id}}',
            creationDate: 'marketplace {organization {creationDate}}',
            lastChangeDate: 'marketplace {organization {lastChangeDate}}',
            users: {
                edges: {
                    cursor:
                        'marketplace {organization {users {edges {cursor}}}}',
                },
                pageInfo: {
                    hasNextPage:
                        'marketplace {organization {users {pageInfo {hasNextPage}}}}',
                    hasPreviousPage:
                        'marketplace {organization {users {pageInfo {hasPreviousPage}}}}',
                    startCursor:
                        'marketplace {organization {users {pageInfo {startCursor}}}}',
                    endCursor:
                        'marketplace {organization {users {pageInfo {endCursor}}}}',
                },
            },
            marketplaces: {
                edges: {
                    cursor:
                        'marketplace {organization {marketplaces {edges {cursor}}}}',
                },
                pageInfo: {
                    hasNextPage:
                        'marketplace {organization {marketplaces {pageInfo {hasNextPage}}}}',
                    hasPreviousPage:
                        'marketplace {organization {marketplaces {pageInfo {hasPreviousPage}}}}',
                    startCursor:
                        'marketplace {organization {marketplaces {pageInfo {startCursor}}}}',
                    endCursor:
                        'marketplace {organization {marketplaces {pageInfo {endCursor}}}}',
                },
            },
            name: 'marketplace {organization {name}}',
            tier: 'marketplace {organization {tier}}',
            systemStatus: 'marketplace {organization {systemStatus}}',
            errors: 'marketplace {organization {errors}}',
        },
        mediaChannels: {
            edges: {
                cursor: 'marketplace {mediaChannels {edges {cursor}}}',
                node: {
                    id: 'marketplace {mediaChannels {edges {node {id}}}}',
                    creationDate:
                        'marketplace {mediaChannels {edges {node {creationDate}}}}',
                    lastChangeDate:
                        'marketplace {mediaChannels {edges {node {lastChangeDate}}}}',
                    name: 'marketplace {mediaChannels {edges {node {name}}}}',
                    platform:
                        'marketplace {mediaChannels {edges {node {platform}}}}',
                    remoteId:
                        'marketplace {mediaChannels {edges {node {remoteId}}}}',
                    remoteState:
                        'marketplace {mediaChannels {edges {node {remoteState}}}}',
                    currency:
                        'marketplace {mediaChannels {edges {node {currency}}}}',
                    currencySymbol:
                        'marketplace {mediaChannels {edges {node {currencySymbol}}}}',
                    currencyOffset:
                        'marketplace {mediaChannels {edges {node {currencyOffset}}}}',
                    timezone:
                        'marketplace {mediaChannels {edges {node {timezone}}}}',
                    tokenStatus:
                        'marketplace {mediaChannels {edges {node {tokenStatus}}}}',
                    systemStatus:
                        'marketplace {mediaChannels {edges {node {systemStatus}}}}',
                    errors:
                        'marketplace {mediaChannels {edges {node {errors}}}}',
                },
            },
            pageInfo: {
                hasNextPage:
                    'marketplace {mediaChannels {pageInfo {hasNextPage}}}',
                hasPreviousPage:
                    'marketplace {mediaChannels {pageInfo {hasPreviousPage}}}',
                startCursor:
                    'marketplace {mediaChannels {pageInfo {startCursor}}}',
                endCursor: 'marketplace {mediaChannels {pageInfo {endCursor}}}',
            },
        },
        campaignTemplates: {
            edges: {
                cursor: 'marketplace {campaignTemplates {edges {cursor}}}',
                node: {
                    id: 'marketplace {campaignTemplates {edges {node {id}}}}',
                    creationDate:
                        'marketplace {campaignTemplates {edges {node {creationDate}}}}',
                    lastChangeDate:
                        'marketplace {campaignTemplates {edges {node {lastChangeDate}}}}',
                    name:
                        'marketplace {campaignTemplates {edges {node {name}}}}',
                    description:
                        'marketplace {campaignTemplates {edges {node {description}}}}',
                    platform:
                        'marketplace {campaignTemplates {edges {node {platform}}}}',
                    remoteId:
                        'marketplace {campaignTemplates {edges {node {remoteId}}}}',
                    systemStatus:
                        'marketplace {campaignTemplates {edges {node {systemStatus}}}}',
                    errors:
                        'marketplace {campaignTemplates {edges {node {errors}}}}',
                },
            },
            pageInfo: {
                hasNextPage:
                    'marketplace {campaignTemplates {pageInfo {hasNextPage}}}',
                hasPreviousPage:
                    'marketplace {campaignTemplates {pageInfo {hasPreviousPage}}}',
                startCursor:
                    'marketplace {campaignTemplates {pageInfo {startCursor}}}',
                endCursor:
                    'marketplace {campaignTemplates {pageInfo {endCursor}}}',
            },
        },
        vendors: {
            edges: {
                cursor: 'marketplace {vendors {edges {cursor}}}',
                node: {
                    id: 'marketplace {vendors {edges {node {id}}}}',
                    creationDate:
                        'marketplace {vendors {edges {node {creationDate}}}}',
                    lastChangeDate:
                        'marketplace {vendors {edges {node {lastChangeDate}}}}',
                    name: 'marketplace {vendors {edges {node {name}}}}',
                    systemStatus:
                        'marketplace {vendors {edges {node {systemStatus}}}}',
                    errors: 'marketplace {vendors {edges {node {errors}}}}',
                },
            },
            pageInfo: {
                hasNextPage: 'marketplace {vendors {pageInfo {hasNextPage}}}',
                hasPreviousPage:
                    'marketplace {vendors {pageInfo {hasPreviousPage}}}',
                startCursor: 'marketplace {vendors {pageInfo {startCursor}}}',
                endCursor: 'marketplace {vendors {pageInfo {endCursor}}}',
            },
        },
        vendorTokens: {
            edges: {
                cursor: 'marketplace {vendorTokens {edges {cursor}}}',
                node: {
                    id: 'marketplace {vendorTokens {edges {node {id}}}}',
                    creationDate:
                        'marketplace {vendorTokens {edges {node {creationDate}}}}',
                    lastChangeDate:
                        'marketplace {vendorTokens {edges {node {lastChangeDate}}}}',
                    token: 'marketplace {vendorTokens {edges {node {token}}}}',
                },
            },
            pageInfo: {
                hasNextPage:
                    'marketplace {vendorTokens {pageInfo {hasNextPage}}}',
                hasPreviousPage:
                    'marketplace {vendorTokens {pageInfo {hasPreviousPage}}}',
                startCursor:
                    'marketplace {vendorTokens {pageInfo {startCursor}}}',
                endCursor: 'marketplace {vendorTokens {pageInfo {endCursor}}}',
            },
        },
        systemStatus: 'marketplace {systemStatus}',
        errors: 'marketplace {errors}',
        creativeTemplates: {
            edges: {
                cursor: 'marketplace {creativeTemplates {edges {cursor}}}',
                node: {
                    id: 'marketplace {creativeTemplates {edges {node {id}}}}',
                    creationDate:
                        'marketplace {creativeTemplates {edges {node {creationDate}}}}',
                    lastChangeDate:
                        'marketplace {creativeTemplates {edges {node {lastChangeDate}}}}',
                    name:
                        'marketplace {creativeTemplates {edges {node {name}}}}',
                    height:
                        'marketplace {creativeTemplates {edges {node {height}}}}',
                    width:
                        'marketplace {creativeTemplates {edges {node {width}}}}',
                    systemStatus:
                        'marketplace {creativeTemplates {edges {node {systemStatus}}}}',
                    errors:
                        'marketplace {creativeTemplates {edges {node {errors}}}}',
                },
            },
            pageInfo: {
                hasNextPage:
                    'marketplace {creativeTemplates {pageInfo {hasNextPage}}}',
                hasPreviousPage:
                    'marketplace {creativeTemplates {pageInfo {hasPreviousPage}}}',
                startCursor:
                    'marketplace {creativeTemplates {pageInfo {startCursor}}}',
                endCursor:
                    'marketplace {creativeTemplates {pageInfo {endCursor}}}',
            },
        },
    },
    marketingCampaigns: {
        edges: {
            cursor: 'marketingCampaigns {edges {cursor}}',
            node: {
                id: 'marketingCampaigns {edges {node {id}}}',
                creationDate:
                    'marketingCampaigns {edges {node {creationDate}}}',
                lastChangeDate:
                    'marketingCampaigns {edges {node {lastChangeDate}}}',
                name: 'marketingCampaigns {edges {node {name}}}',
                status: 'marketingCampaigns {edges {node {status}}}',
                marketingAds: {},
                products: {},
                vendor: {
                    id: 'marketingCampaigns {edges {node {vendor {id}}}}',
                    creationDate:
                        'marketingCampaigns {edges {node {vendor {creationDate}}}}',
                    lastChangeDate:
                        'marketingCampaigns {edges {node {vendor {lastChangeDate}}}}',
                    name: 'marketingCampaigns {edges {node {vendor {name}}}}',
                    systemStatus:
                        'marketingCampaigns {edges {node {vendor {systemStatus}}}}',
                    errors:
                        'marketingCampaigns {edges {node {vendor {errors}}}}',
                },
                catalog: {
                    id: 'marketingCampaigns {edges {node {catalog {id}}}}',
                    name: 'marketingCampaigns {edges {node {catalog {name}}}}',
                    catalogType:
                        'marketingCampaigns {edges {node {catalog {catalogType}}}}',
                    creationDate:
                        'marketingCampaigns {edges {node {catalog {creationDate}}}}',
                    lastChangeDate:
                        'marketingCampaigns {edges {node {catalog {lastChangeDate}}}}',
                    remoteId:
                        'marketingCampaigns {edges {node {catalog {remoteId}}}}',
                    systemStatus:
                        'marketingCampaigns {edges {node {catalog {systemStatus}}}}',
                    remoteState:
                        'marketingCampaigns {edges {node {catalog {remoteState}}}}',
                    dataFeedId:
                        'marketingCampaigns {edges {node {catalog {dataFeedId}}}}',
                    errors:
                        'marketingCampaigns {edges {node {catalog {errors}}}}',
                },
                campaignTemplate: {
                    id:
                        'marketingCampaigns {edges {node {campaignTemplate {id}}}}',
                    creationDate:
                        'marketingCampaigns {edges {node {campaignTemplate {creationDate}}}}',
                    lastChangeDate:
                        'marketingCampaigns {edges {node {campaignTemplate {lastChangeDate}}}}',
                    name:
                        'marketingCampaigns {edges {node {campaignTemplate {name}}}}',
                    description:
                        'marketingCampaigns {edges {node {campaignTemplate {description}}}}',
                    platform:
                        'marketingCampaigns {edges {node {campaignTemplate {platform}}}}',
                    remoteId:
                        'marketingCampaigns {edges {node {campaignTemplate {remoteId}}}}',
                    systemStatus:
                        'marketingCampaigns {edges {node {campaignTemplate {systemStatus}}}}',
                    errors:
                        'marketingCampaigns {edges {node {campaignTemplate {errors}}}}',
                },
                mediaChannel: {
                    id: 'marketingCampaigns {edges {node {mediaChannel {id}}}}',
                    creationDate:
                        'marketingCampaigns {edges {node {mediaChannel {creationDate}}}}',
                    lastChangeDate:
                        'marketingCampaigns {edges {node {mediaChannel {lastChangeDate}}}}',
                    name:
                        'marketingCampaigns {edges {node {mediaChannel {name}}}}',
                    platform:
                        'marketingCampaigns {edges {node {mediaChannel {platform}}}}',
                    remoteId:
                        'marketingCampaigns {edges {node {mediaChannel {remoteId}}}}',
                    remoteState:
                        'marketingCampaigns {edges {node {mediaChannel {remoteState}}}}',
                    currency:
                        'marketingCampaigns {edges {node {mediaChannel {currency}}}}',
                    currencySymbol:
                        'marketingCampaigns {edges {node {mediaChannel {currencySymbol}}}}',
                    currencyOffset:
                        'marketingCampaigns {edges {node {mediaChannel {currencyOffset}}}}',
                    timezone:
                        'marketingCampaigns {edges {node {mediaChannel {timezone}}}}',
                    tokenStatus:
                        'marketingCampaigns {edges {node {mediaChannel {tokenStatus}}}}',
                    systemStatus:
                        'marketingCampaigns {edges {node {mediaChannel {systemStatus}}}}',
                    errors:
                        'marketingCampaigns {edges {node {mediaChannel {errors}}}}',
                },
                results: {},
                creativeSpec:
                    'marketingCampaigns {edges {node {creativeSpec}}}',
                runTimeSpec: 'marketingCampaigns {edges {node {runTimeSpec}}}',
                resultsSource:
                    'marketingCampaigns {edges {node {resultsSource}}}',
                systemStatus:
                    'marketingCampaigns {edges {node {systemStatus}}}',
                errors: 'marketingCampaigns {edges {node {errors}}}',
            },
        },
        pageInfo: {
            hasNextPage: 'marketingCampaigns {pageInfo {hasNextPage}}',
            hasPreviousPage: 'marketingCampaigns {pageInfo {hasPreviousPage}}',
            startCursor: 'marketingCampaigns {pageInfo {startCursor}}',
            endCursor: 'marketingCampaigns {pageInfo {endCursor}}',
        },
    },
};
export type MarketplaceFields = {
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
export const MarketplaceFields: MarketplaceFields = {
    id: 'id',
    creationDate: 'creationDate',
    lastChangeDate: 'lastChangeDate',
    name: 'name',
    organization: {
        id: 'organization {id}',
        creationDate: 'organization {creationDate}',
        lastChangeDate: 'organization {lastChangeDate}',
        users: {
            edges: {
                cursor: 'organization {users {edges {cursor}}}',
                node: {
                    id: 'organization {users {edges {node {id}}}}',
                    creationDate:
                        'organization {users {edges {node {creationDate}}}}',
                    lastChangeDate:
                        'organization {users {edges {node {lastChangeDate}}}}',
                    email: 'organization {users {edges {node {email}}}}',
                    firstName:
                        'organization {users {edges {node {firstName}}}}',
                    lastName: 'organization {users {edges {node {lastName}}}}',
                },
            },
            pageInfo: {
                hasNextPage: 'organization {users {pageInfo {hasNextPage}}}',
                hasPreviousPage:
                    'organization {users {pageInfo {hasPreviousPage}}}',
                startCursor: 'organization {users {pageInfo {startCursor}}}',
                endCursor: 'organization {users {pageInfo {endCursor}}}',
            },
        },
        marketplaces: {
            edges: {
                cursor: 'organization {marketplaces {edges {cursor}}}',
                node: {
                    id: 'organization {marketplaces {edges {node {id}}}}',
                    creationDate:
                        'organization {marketplaces {edges {node {creationDate}}}}',
                    lastChangeDate:
                        'organization {marketplaces {edges {node {lastChangeDate}}}}',
                    name: 'organization {marketplaces {edges {node {name}}}}',
                    systemStatus:
                        'organization {marketplaces {edges {node {systemStatus}}}}',
                    errors:
                        'organization {marketplaces {edges {node {errors}}}}',
                },
            },
            pageInfo: {
                hasNextPage:
                    'organization {marketplaces {pageInfo {hasNextPage}}}',
                hasPreviousPage:
                    'organization {marketplaces {pageInfo {hasPreviousPage}}}',
                startCursor:
                    'organization {marketplaces {pageInfo {startCursor}}}',
                endCursor: 'organization {marketplaces {pageInfo {endCursor}}}',
            },
        },
        name: 'organization {name}',
        tier: 'organization {tier}',
        systemStatus: 'organization {systemStatus}',
        errors: 'organization {errors}',
    },
    mediaChannels: {
        edges: {
            cursor: 'mediaChannels {edges {cursor}}',
            node: {
                id: 'mediaChannels {edges {node {id}}}',
                creationDate: 'mediaChannels {edges {node {creationDate}}}',
                lastChangeDate: 'mediaChannels {edges {node {lastChangeDate}}}',
                name: 'mediaChannels {edges {node {name}}}',
                platform: 'mediaChannels {edges {node {platform}}}',
                remoteId: 'mediaChannels {edges {node {remoteId}}}',
                remoteState: 'mediaChannels {edges {node {remoteState}}}',
                currency: 'mediaChannels {edges {node {currency}}}',
                currencySymbol: 'mediaChannels {edges {node {currencySymbol}}}',
                currencyOffset: 'mediaChannels {edges {node {currencyOffset}}}',
                timezone: 'mediaChannels {edges {node {timezone}}}',
                tokenStatus: 'mediaChannels {edges {node {tokenStatus}}}',
                systemStatus: 'mediaChannels {edges {node {systemStatus}}}',
                errors: 'mediaChannels {edges {node {errors}}}',
                catalogs: {},
                marketplace: {
                    id: 'mediaChannels {edges {node {marketplace {id}}}}',
                    creationDate:
                        'mediaChannels {edges {node {marketplace {creationDate}}}}',
                    lastChangeDate:
                        'mediaChannels {edges {node {marketplace {lastChangeDate}}}}',
                    name: 'mediaChannels {edges {node {marketplace {name}}}}',
                    systemStatus:
                        'mediaChannels {edges {node {marketplace {systemStatus}}}}',
                    errors:
                        'mediaChannels {edges {node {marketplace {errors}}}}',
                },
            },
        },
        pageInfo: {
            hasNextPage: 'mediaChannels {pageInfo {hasNextPage}}',
            hasPreviousPage: 'mediaChannels {pageInfo {hasPreviousPage}}',
            startCursor: 'mediaChannels {pageInfo {startCursor}}',
            endCursor: 'mediaChannels {pageInfo {endCursor}}',
        },
    },
    campaignTemplates: {
        edges: {
            cursor: 'campaignTemplates {edges {cursor}}',
            node: {
                id: 'campaignTemplates {edges {node {id}}}',
                creationDate: 'campaignTemplates {edges {node {creationDate}}}',
                lastChangeDate:
                    'campaignTemplates {edges {node {lastChangeDate}}}',
                name: 'campaignTemplates {edges {node {name}}}',
                description: 'campaignTemplates {edges {node {description}}}',
                platform: 'campaignTemplates {edges {node {platform}}}',
                remoteId: 'campaignTemplates {edges {node {remoteId}}}',
                systemStatus: 'campaignTemplates {edges {node {systemStatus}}}',
                errors: 'campaignTemplates {edges {node {errors}}}',
                marketplace: {
                    id: 'campaignTemplates {edges {node {marketplace {id}}}}',
                    creationDate:
                        'campaignTemplates {edges {node {marketplace {creationDate}}}}',
                    lastChangeDate:
                        'campaignTemplates {edges {node {marketplace {lastChangeDate}}}}',
                    name:
                        'campaignTemplates {edges {node {marketplace {name}}}}',
                    systemStatus:
                        'campaignTemplates {edges {node {marketplace {systemStatus}}}}',
                    errors:
                        'campaignTemplates {edges {node {marketplace {errors}}}}',
                },
                marketingCampaigns: {},
            },
        },
        pageInfo: {
            hasNextPage: 'campaignTemplates {pageInfo {hasNextPage}}',
            hasPreviousPage: 'campaignTemplates {pageInfo {hasPreviousPage}}',
            startCursor: 'campaignTemplates {pageInfo {startCursor}}',
            endCursor: 'campaignTemplates {pageInfo {endCursor}}',
        },
    },
    vendors: {
        edges: {
            cursor: 'vendors {edges {cursor}}',
            node: {
                id: 'vendors {edges {node {id}}}',
                creationDate: 'vendors {edges {node {creationDate}}}',
                lastChangeDate: 'vendors {edges {node {lastChangeDate}}}',
                name: 'vendors {edges {node {name}}}',
                marketplace: {
                    id: 'vendors {edges {node {marketplace {id}}}}',
                    creationDate:
                        'vendors {edges {node {marketplace {creationDate}}}}',
                    lastChangeDate:
                        'vendors {edges {node {marketplace {lastChangeDate}}}}',
                    name: 'vendors {edges {node {marketplace {name}}}}',
                    systemStatus:
                        'vendors {edges {node {marketplace {systemStatus}}}}',
                    errors: 'vendors {edges {node {marketplace {errors}}}}',
                },
                vendorTokens: {},
                products: {},
                systemStatus: 'vendors {edges {node {systemStatus}}}',
                errors: 'vendors {edges {node {errors}}}',
            },
        },
        pageInfo: {
            hasNextPage: 'vendors {pageInfo {hasNextPage}}',
            hasPreviousPage: 'vendors {pageInfo {hasPreviousPage}}',
            startCursor: 'vendors {pageInfo {startCursor}}',
            endCursor: 'vendors {pageInfo {endCursor}}',
        },
    },
    vendorTokens: {
        edges: {
            cursor: 'vendorTokens {edges {cursor}}',
            node: {
                id: 'vendorTokens {edges {node {id}}}',
                creationDate: 'vendorTokens {edges {node {creationDate}}}',
                lastChangeDate: 'vendorTokens {edges {node {lastChangeDate}}}',
                marketplace: {
                    id: 'vendorTokens {edges {node {marketplace {id}}}}',
                    creationDate:
                        'vendorTokens {edges {node {marketplace {creationDate}}}}',
                    lastChangeDate:
                        'vendorTokens {edges {node {marketplace {lastChangeDate}}}}',
                    name: 'vendorTokens {edges {node {marketplace {name}}}}',
                    systemStatus:
                        'vendorTokens {edges {node {marketplace {systemStatus}}}}',
                    errors:
                        'vendorTokens {edges {node {marketplace {errors}}}}',
                },
                vendor: {
                    id: 'vendorTokens {edges {node {vendor {id}}}}',
                    creationDate:
                        'vendorTokens {edges {node {vendor {creationDate}}}}',
                    lastChangeDate:
                        'vendorTokens {edges {node {vendor {lastChangeDate}}}}',
                    name: 'vendorTokens {edges {node {vendor {name}}}}',
                    systemStatus:
                        'vendorTokens {edges {node {vendor {systemStatus}}}}',
                    errors: 'vendorTokens {edges {node {vendor {errors}}}}',
                },
                token: 'vendorTokens {edges {node {token}}}',
            },
        },
        pageInfo: {
            hasNextPage: 'vendorTokens {pageInfo {hasNextPage}}',
            hasPreviousPage: 'vendorTokens {pageInfo {hasPreviousPage}}',
            startCursor: 'vendorTokens {pageInfo {startCursor}}',
            endCursor: 'vendorTokens {pageInfo {endCursor}}',
        },
    },
    systemStatus: 'systemStatus',
    errors: 'errors',
    creativeTemplates: {
        edges: {
            cursor: 'creativeTemplates {edges {cursor}}',
            node: {
                id: 'creativeTemplates {edges {node {id}}}',
                creationDate: 'creativeTemplates {edges {node {creationDate}}}',
                lastChangeDate:
                    'creativeTemplates {edges {node {lastChangeDate}}}',
                name: 'creativeTemplates {edges {node {name}}}',
                height: 'creativeTemplates {edges {node {height}}}',
                width: 'creativeTemplates {edges {node {width}}}',
                marketplace: {
                    id: 'creativeTemplates {edges {node {marketplace {id}}}}',
                    creationDate:
                        'creativeTemplates {edges {node {marketplace {creationDate}}}}',
                    lastChangeDate:
                        'creativeTemplates {edges {node {marketplace {lastChangeDate}}}}',
                    name:
                        'creativeTemplates {edges {node {marketplace {name}}}}',
                    systemStatus:
                        'creativeTemplates {edges {node {marketplace {systemStatus}}}}',
                    errors:
                        'creativeTemplates {edges {node {marketplace {errors}}}}',
                },
                creativeLayers: {},
                systemStatus: 'creativeTemplates {edges {node {systemStatus}}}',
                errors: 'creativeTemplates {edges {node {errors}}}',
            },
        },
        pageInfo: {
            hasNextPage: 'creativeTemplates {pageInfo {hasNextPage}}',
            hasPreviousPage: 'creativeTemplates {pageInfo {hasPreviousPage}}',
            startCursor: 'creativeTemplates {pageInfo {startCursor}}',
            endCursor: 'creativeTemplates {pageInfo {endCursor}}',
        },
    },
};
export type OrganizationFields = {
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
export const OrganizationFields: OrganizationFields = {
    id: 'id',
    creationDate: 'creationDate',
    lastChangeDate: 'lastChangeDate',
    users: {
        edges: {
            cursor: 'users {edges {cursor}}',
            node: {
                id: 'users {edges {node {id}}}',
                creationDate: 'users {edges {node {creationDate}}}',
                lastChangeDate: 'users {edges {node {lastChangeDate}}}',
                email: 'users {edges {node {email}}}',
                firstName: 'users {edges {node {firstName}}}',
                lastName: 'users {edges {node {lastName}}}',
                organizations: {},
                entitlements: {},
            },
        },
        pageInfo: {
            hasNextPage: 'users {pageInfo {hasNextPage}}',
            hasPreviousPage: 'users {pageInfo {hasPreviousPage}}',
            startCursor: 'users {pageInfo {startCursor}}',
            endCursor: 'users {pageInfo {endCursor}}',
        },
    },
    marketplaces: {
        edges: {
            cursor: 'marketplaces {edges {cursor}}',
            node: {
                id: 'marketplaces {edges {node {id}}}',
                creationDate: 'marketplaces {edges {node {creationDate}}}',
                lastChangeDate: 'marketplaces {edges {node {lastChangeDate}}}',
                name: 'marketplaces {edges {node {name}}}',
                organization: {
                    id: 'marketplaces {edges {node {organization {id}}}}',
                    creationDate:
                        'marketplaces {edges {node {organization {creationDate}}}}',
                    lastChangeDate:
                        'marketplaces {edges {node {organization {lastChangeDate}}}}',
                    name: 'marketplaces {edges {node {organization {name}}}}',
                    tier: 'marketplaces {edges {node {organization {tier}}}}',
                    systemStatus:
                        'marketplaces {edges {node {organization {systemStatus}}}}',
                    errors:
                        'marketplaces {edges {node {organization {errors}}}}',
                },
                mediaChannels: {},
                campaignTemplates: {},
                vendors: {},
                vendorTokens: {},
                systemStatus: 'marketplaces {edges {node {systemStatus}}}',
                errors: 'marketplaces {edges {node {errors}}}',
                creativeTemplates: {},
            },
        },
        pageInfo: {
            hasNextPage: 'marketplaces {pageInfo {hasNextPage}}',
            hasPreviousPage: 'marketplaces {pageInfo {hasPreviousPage}}',
            startCursor: 'marketplaces {pageInfo {startCursor}}',
            endCursor: 'marketplaces {pageInfo {endCursor}}',
        },
    },
    name: 'name',
    tier: 'tier',
    systemStatus: 'systemStatus',
    errors: 'errors',
};
export type UserFields = {
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
export const UserFields: UserFields = {
    id: 'id',
    creationDate: 'creationDate',
    lastChangeDate: 'lastChangeDate',
    email: 'email',
    firstName: 'firstName',
    lastName: 'lastName',
    organizations: {
        edges: {
            cursor: 'organizations {edges {cursor}}',
            node: {
                id: 'organizations {edges {node {id}}}',
                creationDate: 'organizations {edges {node {creationDate}}}',
                lastChangeDate: 'organizations {edges {node {lastChangeDate}}}',
                users: {},
                marketplaces: {},
                name: 'organizations {edges {node {name}}}',
                tier: 'organizations {edges {node {tier}}}',
                systemStatus: 'organizations {edges {node {systemStatus}}}',
                errors: 'organizations {edges {node {errors}}}',
            },
        },
        pageInfo: {
            hasNextPage: 'organizations {pageInfo {hasNextPage}}',
            hasPreviousPage: 'organizations {pageInfo {hasPreviousPage}}',
            startCursor: 'organizations {pageInfo {startCursor}}',
            endCursor: 'organizations {pageInfo {endCursor}}',
        },
    },
    entitlements: {
        edges: {
            cursor: 'entitlements {edges {cursor}}',
            node: {
                id: 'entitlements {edges {node {id}}}',
                creationDate: 'entitlements {edges {node {creationDate}}}',
                lastChangeDate: 'entitlements {edges {node {lastChangeDate}}}',
                user: {
                    id: 'entitlements {edges {node {user {id}}}}',
                    creationDate:
                        'entitlements {edges {node {user {creationDate}}}}',
                    lastChangeDate:
                        'entitlements {edges {node {user {lastChangeDate}}}}',
                    email: 'entitlements {edges {node {user {email}}}}',
                    firstName: 'entitlements {edges {node {user {firstName}}}}',
                    lastName: 'entitlements {edges {node {user {lastName}}}}',
                },
                type: 'entitlements {edges {node {type}}}',
                resource: {
                    id: 'entitlements {edges {node {resource {id}}}}',
                    name: 'entitlements {edges {node {resource {name}}}}',
                    systemStatus:
                        'entitlements {edges {node {resource {systemStatus}}}}',
                    creationDate:
                        'entitlements {edges {node {resource {creationDate}}}}',
                    lastChangeDate:
                        'entitlements {edges {node {resource {lastChangeDate}}}}',
                    errors: 'entitlements {edges {node {resource {errors}}}}',
                },
                permissions: 'entitlements {edges {node {permissions}}}',
            },
        },
        pageInfo: {
            hasNextPage: 'entitlements {pageInfo {hasNextPage}}',
            hasPreviousPage: 'entitlements {pageInfo {hasPreviousPage}}',
            startCursor: 'entitlements {pageInfo {startCursor}}',
            endCursor: 'entitlements {pageInfo {endCursor}}',
        },
    },
};
export type EntitlementFields = {
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
export const EntitlementFields: EntitlementFields = {
    id: 'id',
    creationDate: 'creationDate',
    lastChangeDate: 'lastChangeDate',
    user: {
        id: 'user {id}',
        creationDate: 'user {creationDate}',
        lastChangeDate: 'user {lastChangeDate}',
        email: 'user {email}',
        firstName: 'user {firstName}',
        lastName: 'user {lastName}',
        organizations: {
            edges: {
                cursor: 'user {organizations {edges {cursor}}}',
                node: {
                    id: 'user {organizations {edges {node {id}}}}',
                    creationDate:
                        'user {organizations {edges {node {creationDate}}}}',
                    lastChangeDate:
                        'user {organizations {edges {node {lastChangeDate}}}}',
                    name: 'user {organizations {edges {node {name}}}}',
                    tier: 'user {organizations {edges {node {tier}}}}',
                    systemStatus:
                        'user {organizations {edges {node {systemStatus}}}}',
                    errors: 'user {organizations {edges {node {errors}}}}',
                },
            },
            pageInfo: {
                hasNextPage: 'user {organizations {pageInfo {hasNextPage}}}',
                hasPreviousPage:
                    'user {organizations {pageInfo {hasPreviousPage}}}',
                startCursor: 'user {organizations {pageInfo {startCursor}}}',
                endCursor: 'user {organizations {pageInfo {endCursor}}}',
            },
        },
        entitlements: {
            edges: {
                cursor: 'user {entitlements {edges {cursor}}}',
                node: {
                    id: 'user {entitlements {edges {node {id}}}}',
                    creationDate:
                        'user {entitlements {edges {node {creationDate}}}}',
                    lastChangeDate:
                        'user {entitlements {edges {node {lastChangeDate}}}}',
                    type: 'user {entitlements {edges {node {type}}}}',
                    permissions:
                        'user {entitlements {edges {node {permissions}}}}',
                },
            },
            pageInfo: {
                hasNextPage: 'user {entitlements {pageInfo {hasNextPage}}}',
                hasPreviousPage:
                    'user {entitlements {pageInfo {hasPreviousPage}}}',
                startCursor: 'user {entitlements {pageInfo {startCursor}}}',
                endCursor: 'user {entitlements {pageInfo {endCursor}}}',
            },
        },
    },
    type: 'type',
    resource: {
        id: 'resource {id}',
        name: 'resource {name}',
        systemStatus: 'resource {systemStatus}',
        creationDate: 'resource {creationDate}',
        lastChangeDate: 'resource {lastChangeDate}',
        errors: 'resource {errors}',
    },
    permissions: 'permissions',
};
export type MediaChannelFields = {
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
export const MediaChannelFields: MediaChannelFields = {
    id: 'id',
    creationDate: 'creationDate',
    lastChangeDate: 'lastChangeDate',
    name: 'name',
    platform: 'platform',
    remoteId: 'remoteId',
    remoteState: 'remoteState',
    currency: 'currency',
    currencySymbol: 'currencySymbol',
    currencyOffset: 'currencyOffset',
    timezone: 'timezone',
    tokenStatus: 'tokenStatus',
    systemStatus: 'systemStatus',
    errors: 'errors',
    catalogs: {
        edges: {
            cursor: 'catalogs {edges {cursor}}',
            node: {
                id: 'catalogs {edges {node {id}}}',
                name: 'catalogs {edges {node {name}}}',
                catalogType: 'catalogs {edges {node {catalogType}}}',
                creationDate: 'catalogs {edges {node {creationDate}}}',
                lastChangeDate: 'catalogs {edges {node {lastChangeDate}}}',
                remoteId: 'catalogs {edges {node {remoteId}}}',
                systemStatus: 'catalogs {edges {node {systemStatus}}}',
                remoteState: 'catalogs {edges {node {remoteState}}}',
                dataFeedId: 'catalogs {edges {node {dataFeedId}}}',
                errors: 'catalogs {edges {node {errors}}}',
                mediaChannel: {
                    id: 'catalogs {edges {node {mediaChannel {id}}}}',
                    creationDate:
                        'catalogs {edges {node {mediaChannel {creationDate}}}}',
                    lastChangeDate:
                        'catalogs {edges {node {mediaChannel {lastChangeDate}}}}',
                    name: 'catalogs {edges {node {mediaChannel {name}}}}',
                    platform:
                        'catalogs {edges {node {mediaChannel {platform}}}}',
                    remoteId:
                        'catalogs {edges {node {mediaChannel {remoteId}}}}',
                    remoteState:
                        'catalogs {edges {node {mediaChannel {remoteState}}}}',
                    currency:
                        'catalogs {edges {node {mediaChannel {currency}}}}',
                    currencySymbol:
                        'catalogs {edges {node {mediaChannel {currencySymbol}}}}',
                    currencyOffset:
                        'catalogs {edges {node {mediaChannel {currencyOffset}}}}',
                    timezone:
                        'catalogs {edges {node {mediaChannel {timezone}}}}',
                    tokenStatus:
                        'catalogs {edges {node {mediaChannel {tokenStatus}}}}',
                    systemStatus:
                        'catalogs {edges {node {mediaChannel {systemStatus}}}}',
                    errors: 'catalogs {edges {node {mediaChannel {errors}}}}',
                },
                products: {},
            },
        },
        pageInfo: {
            hasNextPage: 'catalogs {pageInfo {hasNextPage}}',
            hasPreviousPage: 'catalogs {pageInfo {hasPreviousPage}}',
            startCursor: 'catalogs {pageInfo {startCursor}}',
            endCursor: 'catalogs {pageInfo {endCursor}}',
        },
    },
    marketplace: {
        id: 'marketplace {id}',
        creationDate: 'marketplace {creationDate}',
        lastChangeDate: 'marketplace {lastChangeDate}',
        name: 'marketplace {name}',
        organization: {
            id: 'marketplace {organization {id}}',
            creationDate: 'marketplace {organization {creationDate}}',
            lastChangeDate: 'marketplace {organization {lastChangeDate}}',
            users: {
                edges: {
                    cursor:
                        'marketplace {organization {users {edges {cursor}}}}',
                },
                pageInfo: {
                    hasNextPage:
                        'marketplace {organization {users {pageInfo {hasNextPage}}}}',
                    hasPreviousPage:
                        'marketplace {organization {users {pageInfo {hasPreviousPage}}}}',
                    startCursor:
                        'marketplace {organization {users {pageInfo {startCursor}}}}',
                    endCursor:
                        'marketplace {organization {users {pageInfo {endCursor}}}}',
                },
            },
            marketplaces: {
                edges: {
                    cursor:
                        'marketplace {organization {marketplaces {edges {cursor}}}}',
                },
                pageInfo: {
                    hasNextPage:
                        'marketplace {organization {marketplaces {pageInfo {hasNextPage}}}}',
                    hasPreviousPage:
                        'marketplace {organization {marketplaces {pageInfo {hasPreviousPage}}}}',
                    startCursor:
                        'marketplace {organization {marketplaces {pageInfo {startCursor}}}}',
                    endCursor:
                        'marketplace {organization {marketplaces {pageInfo {endCursor}}}}',
                },
            },
            name: 'marketplace {organization {name}}',
            tier: 'marketplace {organization {tier}}',
            systemStatus: 'marketplace {organization {systemStatus}}',
            errors: 'marketplace {organization {errors}}',
        },
        mediaChannels: {
            edges: {
                cursor: 'marketplace {mediaChannels {edges {cursor}}}',
                node: {
                    id: 'marketplace {mediaChannels {edges {node {id}}}}',
                    creationDate:
                        'marketplace {mediaChannels {edges {node {creationDate}}}}',
                    lastChangeDate:
                        'marketplace {mediaChannels {edges {node {lastChangeDate}}}}',
                    name: 'marketplace {mediaChannels {edges {node {name}}}}',
                    platform:
                        'marketplace {mediaChannels {edges {node {platform}}}}',
                    remoteId:
                        'marketplace {mediaChannels {edges {node {remoteId}}}}',
                    remoteState:
                        'marketplace {mediaChannels {edges {node {remoteState}}}}',
                    currency:
                        'marketplace {mediaChannels {edges {node {currency}}}}',
                    currencySymbol:
                        'marketplace {mediaChannels {edges {node {currencySymbol}}}}',
                    currencyOffset:
                        'marketplace {mediaChannels {edges {node {currencyOffset}}}}',
                    timezone:
                        'marketplace {mediaChannels {edges {node {timezone}}}}',
                    tokenStatus:
                        'marketplace {mediaChannels {edges {node {tokenStatus}}}}',
                    systemStatus:
                        'marketplace {mediaChannels {edges {node {systemStatus}}}}',
                    errors:
                        'marketplace {mediaChannels {edges {node {errors}}}}',
                },
            },
            pageInfo: {
                hasNextPage:
                    'marketplace {mediaChannels {pageInfo {hasNextPage}}}',
                hasPreviousPage:
                    'marketplace {mediaChannels {pageInfo {hasPreviousPage}}}',
                startCursor:
                    'marketplace {mediaChannels {pageInfo {startCursor}}}',
                endCursor: 'marketplace {mediaChannels {pageInfo {endCursor}}}',
            },
        },
        campaignTemplates: {
            edges: {
                cursor: 'marketplace {campaignTemplates {edges {cursor}}}',
                node: {
                    id: 'marketplace {campaignTemplates {edges {node {id}}}}',
                    creationDate:
                        'marketplace {campaignTemplates {edges {node {creationDate}}}}',
                    lastChangeDate:
                        'marketplace {campaignTemplates {edges {node {lastChangeDate}}}}',
                    name:
                        'marketplace {campaignTemplates {edges {node {name}}}}',
                    description:
                        'marketplace {campaignTemplates {edges {node {description}}}}',
                    platform:
                        'marketplace {campaignTemplates {edges {node {platform}}}}',
                    remoteId:
                        'marketplace {campaignTemplates {edges {node {remoteId}}}}',
                    systemStatus:
                        'marketplace {campaignTemplates {edges {node {systemStatus}}}}',
                    errors:
                        'marketplace {campaignTemplates {edges {node {errors}}}}',
                },
            },
            pageInfo: {
                hasNextPage:
                    'marketplace {campaignTemplates {pageInfo {hasNextPage}}}',
                hasPreviousPage:
                    'marketplace {campaignTemplates {pageInfo {hasPreviousPage}}}',
                startCursor:
                    'marketplace {campaignTemplates {pageInfo {startCursor}}}',
                endCursor:
                    'marketplace {campaignTemplates {pageInfo {endCursor}}}',
            },
        },
        vendors: {
            edges: {
                cursor: 'marketplace {vendors {edges {cursor}}}',
                node: {
                    id: 'marketplace {vendors {edges {node {id}}}}',
                    creationDate:
                        'marketplace {vendors {edges {node {creationDate}}}}',
                    lastChangeDate:
                        'marketplace {vendors {edges {node {lastChangeDate}}}}',
                    name: 'marketplace {vendors {edges {node {name}}}}',
                    systemStatus:
                        'marketplace {vendors {edges {node {systemStatus}}}}',
                    errors: 'marketplace {vendors {edges {node {errors}}}}',
                },
            },
            pageInfo: {
                hasNextPage: 'marketplace {vendors {pageInfo {hasNextPage}}}',
                hasPreviousPage:
                    'marketplace {vendors {pageInfo {hasPreviousPage}}}',
                startCursor: 'marketplace {vendors {pageInfo {startCursor}}}',
                endCursor: 'marketplace {vendors {pageInfo {endCursor}}}',
            },
        },
        vendorTokens: {
            edges: {
                cursor: 'marketplace {vendorTokens {edges {cursor}}}',
                node: {
                    id: 'marketplace {vendorTokens {edges {node {id}}}}',
                    creationDate:
                        'marketplace {vendorTokens {edges {node {creationDate}}}}',
                    lastChangeDate:
                        'marketplace {vendorTokens {edges {node {lastChangeDate}}}}',
                    token: 'marketplace {vendorTokens {edges {node {token}}}}',
                },
            },
            pageInfo: {
                hasNextPage:
                    'marketplace {vendorTokens {pageInfo {hasNextPage}}}',
                hasPreviousPage:
                    'marketplace {vendorTokens {pageInfo {hasPreviousPage}}}',
                startCursor:
                    'marketplace {vendorTokens {pageInfo {startCursor}}}',
                endCursor: 'marketplace {vendorTokens {pageInfo {endCursor}}}',
            },
        },
        systemStatus: 'marketplace {systemStatus}',
        errors: 'marketplace {errors}',
        creativeTemplates: {
            edges: {
                cursor: 'marketplace {creativeTemplates {edges {cursor}}}',
                node: {
                    id: 'marketplace {creativeTemplates {edges {node {id}}}}',
                    creationDate:
                        'marketplace {creativeTemplates {edges {node {creationDate}}}}',
                    lastChangeDate:
                        'marketplace {creativeTemplates {edges {node {lastChangeDate}}}}',
                    name:
                        'marketplace {creativeTemplates {edges {node {name}}}}',
                    height:
                        'marketplace {creativeTemplates {edges {node {height}}}}',
                    width:
                        'marketplace {creativeTemplates {edges {node {width}}}}',
                    systemStatus:
                        'marketplace {creativeTemplates {edges {node {systemStatus}}}}',
                    errors:
                        'marketplace {creativeTemplates {edges {node {errors}}}}',
                },
            },
            pageInfo: {
                hasNextPage:
                    'marketplace {creativeTemplates {pageInfo {hasNextPage}}}',
                hasPreviousPage:
                    'marketplace {creativeTemplates {pageInfo {hasPreviousPage}}}',
                startCursor:
                    'marketplace {creativeTemplates {pageInfo {startCursor}}}',
                endCursor:
                    'marketplace {creativeTemplates {pageInfo {endCursor}}}',
            },
        },
    },
};
export type CatalogFields = {
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
export const CatalogFields: CatalogFields = {
    id: 'id',
    name: 'name',
    catalogType: 'catalogType',
    creationDate: 'creationDate',
    lastChangeDate: 'lastChangeDate',
    remoteId: 'remoteId',
    systemStatus: 'systemStatus',
    remoteState: 'remoteState',
    dataFeedId: 'dataFeedId',
    errors: 'errors',
    mediaChannel: {
        id: 'mediaChannel {id}',
        creationDate: 'mediaChannel {creationDate}',
        lastChangeDate: 'mediaChannel {lastChangeDate}',
        name: 'mediaChannel {name}',
        platform: 'mediaChannel {platform}',
        remoteId: 'mediaChannel {remoteId}',
        remoteState: 'mediaChannel {remoteState}',
        currency: 'mediaChannel {currency}',
        currencySymbol: 'mediaChannel {currencySymbol}',
        currencyOffset: 'mediaChannel {currencyOffset}',
        timezone: 'mediaChannel {timezone}',
        tokenStatus: 'mediaChannel {tokenStatus}',
        systemStatus: 'mediaChannel {systemStatus}',
        errors: 'mediaChannel {errors}',
        catalogs: {
            edges: {
                cursor: 'mediaChannel {catalogs {edges {cursor}}}',
                node: {
                    id: 'mediaChannel {catalogs {edges {node {id}}}}',
                    name: 'mediaChannel {catalogs {edges {node {name}}}}',
                    catalogType:
                        'mediaChannel {catalogs {edges {node {catalogType}}}}',
                    creationDate:
                        'mediaChannel {catalogs {edges {node {creationDate}}}}',
                    lastChangeDate:
                        'mediaChannel {catalogs {edges {node {lastChangeDate}}}}',
                    remoteId:
                        'mediaChannel {catalogs {edges {node {remoteId}}}}',
                    systemStatus:
                        'mediaChannel {catalogs {edges {node {systemStatus}}}}',
                    remoteState:
                        'mediaChannel {catalogs {edges {node {remoteState}}}}',
                    dataFeedId:
                        'mediaChannel {catalogs {edges {node {dataFeedId}}}}',
                    errors: 'mediaChannel {catalogs {edges {node {errors}}}}',
                },
            },
            pageInfo: {
                hasNextPage: 'mediaChannel {catalogs {pageInfo {hasNextPage}}}',
                hasPreviousPage:
                    'mediaChannel {catalogs {pageInfo {hasPreviousPage}}}',
                startCursor: 'mediaChannel {catalogs {pageInfo {startCursor}}}',
                endCursor: 'mediaChannel {catalogs {pageInfo {endCursor}}}',
            },
        },
        marketplace: {
            id: 'mediaChannel {marketplace {id}}',
            creationDate: 'mediaChannel {marketplace {creationDate}}',
            lastChangeDate: 'mediaChannel {marketplace {lastChangeDate}}',
            name: 'mediaChannel {marketplace {name}}',
            organization: {
                id: 'mediaChannel {marketplace {organization {id}}}',
                creationDate:
                    'mediaChannel {marketplace {organization {creationDate}}}',
                lastChangeDate:
                    'mediaChannel {marketplace {organization {lastChangeDate}}}',
                users: {},
                marketplaces: {},
                name: 'mediaChannel {marketplace {organization {name}}}',
                tier: 'mediaChannel {marketplace {organization {tier}}}',
                systemStatus:
                    'mediaChannel {marketplace {organization {systemStatus}}}',
                errors: 'mediaChannel {marketplace {organization {errors}}}',
            },
            mediaChannels: {
                edges: {
                    cursor:
                        'mediaChannel {marketplace {mediaChannels {edges {cursor}}}}',
                },
                pageInfo: {
                    hasNextPage:
                        'mediaChannel {marketplace {mediaChannels {pageInfo {hasNextPage}}}}',
                    hasPreviousPage:
                        'mediaChannel {marketplace {mediaChannels {pageInfo {hasPreviousPage}}}}',
                    startCursor:
                        'mediaChannel {marketplace {mediaChannels {pageInfo {startCursor}}}}',
                    endCursor:
                        'mediaChannel {marketplace {mediaChannels {pageInfo {endCursor}}}}',
                },
            },
            campaignTemplates: {
                edges: {
                    cursor:
                        'mediaChannel {marketplace {campaignTemplates {edges {cursor}}}}',
                },
                pageInfo: {
                    hasNextPage:
                        'mediaChannel {marketplace {campaignTemplates {pageInfo {hasNextPage}}}}',
                    hasPreviousPage:
                        'mediaChannel {marketplace {campaignTemplates {pageInfo {hasPreviousPage}}}}',
                    startCursor:
                        'mediaChannel {marketplace {campaignTemplates {pageInfo {startCursor}}}}',
                    endCursor:
                        'mediaChannel {marketplace {campaignTemplates {pageInfo {endCursor}}}}',
                },
            },
            vendors: {
                edges: {
                    cursor:
                        'mediaChannel {marketplace {vendors {edges {cursor}}}}',
                },
                pageInfo: {
                    hasNextPage:
                        'mediaChannel {marketplace {vendors {pageInfo {hasNextPage}}}}',
                    hasPreviousPage:
                        'mediaChannel {marketplace {vendors {pageInfo {hasPreviousPage}}}}',
                    startCursor:
                        'mediaChannel {marketplace {vendors {pageInfo {startCursor}}}}',
                    endCursor:
                        'mediaChannel {marketplace {vendors {pageInfo {endCursor}}}}',
                },
            },
            vendorTokens: {
                edges: {
                    cursor:
                        'mediaChannel {marketplace {vendorTokens {edges {cursor}}}}',
                },
                pageInfo: {
                    hasNextPage:
                        'mediaChannel {marketplace {vendorTokens {pageInfo {hasNextPage}}}}',
                    hasPreviousPage:
                        'mediaChannel {marketplace {vendorTokens {pageInfo {hasPreviousPage}}}}',
                    startCursor:
                        'mediaChannel {marketplace {vendorTokens {pageInfo {startCursor}}}}',
                    endCursor:
                        'mediaChannel {marketplace {vendorTokens {pageInfo {endCursor}}}}',
                },
            },
            systemStatus: 'mediaChannel {marketplace {systemStatus}}',
            errors: 'mediaChannel {marketplace {errors}}',
            creativeTemplates: {
                edges: {
                    cursor:
                        'mediaChannel {marketplace {creativeTemplates {edges {cursor}}}}',
                },
                pageInfo: {
                    hasNextPage:
                        'mediaChannel {marketplace {creativeTemplates {pageInfo {hasNextPage}}}}',
                    hasPreviousPage:
                        'mediaChannel {marketplace {creativeTemplates {pageInfo {hasPreviousPage}}}}',
                    startCursor:
                        'mediaChannel {marketplace {creativeTemplates {pageInfo {startCursor}}}}',
                    endCursor:
                        'mediaChannel {marketplace {creativeTemplates {pageInfo {endCursor}}}}',
                },
            },
        },
    },
    products: {
        edges: {
            cursor: 'products {edges {cursor}}',
            node: {
                id: 'products {edges {node {id}}}',
                creationDate: 'products {edges {node {creationDate}}}',
                lastChangeDate: 'products {edges {node {lastChangeDate}}}',
                name: 'products {edges {node {name}}}',
                sku: 'products {edges {node {sku}}}',
                remoteState: 'products {edges {node {remoteState}}}',
                marketingCampaigns: {},
                catalog: {
                    id: 'products {edges {node {catalog {id}}}}',
                    name: 'products {edges {node {catalog {name}}}}',
                    catalogType:
                        'products {edges {node {catalog {catalogType}}}}',
                    creationDate:
                        'products {edges {node {catalog {creationDate}}}}',
                    lastChangeDate:
                        'products {edges {node {catalog {lastChangeDate}}}}',
                    remoteId: 'products {edges {node {catalog {remoteId}}}}',
                    systemStatus:
                        'products {edges {node {catalog {systemStatus}}}}',
                    remoteState:
                        'products {edges {node {catalog {remoteState}}}}',
                    dataFeedId:
                        'products {edges {node {catalog {dataFeedId}}}}',
                    errors: 'products {edges {node {catalog {errors}}}}',
                },
                metadata: 'products {edges {node {metadata}}}',
                vendor: {
                    id: 'products {edges {node {vendor {id}}}}',
                    creationDate:
                        'products {edges {node {vendor {creationDate}}}}',
                    lastChangeDate:
                        'products {edges {node {vendor {lastChangeDate}}}}',
                    name: 'products {edges {node {vendor {name}}}}',
                    systemStatus:
                        'products {edges {node {vendor {systemStatus}}}}',
                    errors: 'products {edges {node {vendor {errors}}}}',
                },
                systemStatus: 'products {edges {node {systemStatus}}}',
                errors: 'products {edges {node {errors}}}',
                warnings: 'products {edges {node {warnings}}}',
            },
        },
        pageInfo: {
            hasNextPage: 'products {pageInfo {hasNextPage}}',
            hasPreviousPage: 'products {pageInfo {hasPreviousPage}}',
            startCursor: 'products {pageInfo {startCursor}}',
            endCursor: 'products {pageInfo {endCursor}}',
        },
    },
};
export type ProductFields = {
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
export const ProductFields: ProductFields = {
    id: 'id',
    creationDate: 'creationDate',
    lastChangeDate: 'lastChangeDate',
    name: 'name',
    sku: 'sku',
    remoteState: 'remoteState',
    marketingCampaigns: {
        edges: {
            cursor: 'marketingCampaigns {edges {cursor}}',
            node: {
                id: 'marketingCampaigns {edges {node {id}}}',
                creationDate:
                    'marketingCampaigns {edges {node {creationDate}}}',
                lastChangeDate:
                    'marketingCampaigns {edges {node {lastChangeDate}}}',
                name: 'marketingCampaigns {edges {node {name}}}',
                status: 'marketingCampaigns {edges {node {status}}}',
                marketingAds: {},
                products: {},
                vendor: {
                    id: 'marketingCampaigns {edges {node {vendor {id}}}}',
                    creationDate:
                        'marketingCampaigns {edges {node {vendor {creationDate}}}}',
                    lastChangeDate:
                        'marketingCampaigns {edges {node {vendor {lastChangeDate}}}}',
                    name: 'marketingCampaigns {edges {node {vendor {name}}}}',
                    systemStatus:
                        'marketingCampaigns {edges {node {vendor {systemStatus}}}}',
                    errors:
                        'marketingCampaigns {edges {node {vendor {errors}}}}',
                },
                catalog: {
                    id: 'marketingCampaigns {edges {node {catalog {id}}}}',
                    name: 'marketingCampaigns {edges {node {catalog {name}}}}',
                    catalogType:
                        'marketingCampaigns {edges {node {catalog {catalogType}}}}',
                    creationDate:
                        'marketingCampaigns {edges {node {catalog {creationDate}}}}',
                    lastChangeDate:
                        'marketingCampaigns {edges {node {catalog {lastChangeDate}}}}',
                    remoteId:
                        'marketingCampaigns {edges {node {catalog {remoteId}}}}',
                    systemStatus:
                        'marketingCampaigns {edges {node {catalog {systemStatus}}}}',
                    remoteState:
                        'marketingCampaigns {edges {node {catalog {remoteState}}}}',
                    dataFeedId:
                        'marketingCampaigns {edges {node {catalog {dataFeedId}}}}',
                    errors:
                        'marketingCampaigns {edges {node {catalog {errors}}}}',
                },
                campaignTemplate: {
                    id:
                        'marketingCampaigns {edges {node {campaignTemplate {id}}}}',
                    creationDate:
                        'marketingCampaigns {edges {node {campaignTemplate {creationDate}}}}',
                    lastChangeDate:
                        'marketingCampaigns {edges {node {campaignTemplate {lastChangeDate}}}}',
                    name:
                        'marketingCampaigns {edges {node {campaignTemplate {name}}}}',
                    description:
                        'marketingCampaigns {edges {node {campaignTemplate {description}}}}',
                    platform:
                        'marketingCampaigns {edges {node {campaignTemplate {platform}}}}',
                    remoteId:
                        'marketingCampaigns {edges {node {campaignTemplate {remoteId}}}}',
                    systemStatus:
                        'marketingCampaigns {edges {node {campaignTemplate {systemStatus}}}}',
                    errors:
                        'marketingCampaigns {edges {node {campaignTemplate {errors}}}}',
                },
                mediaChannel: {
                    id: 'marketingCampaigns {edges {node {mediaChannel {id}}}}',
                    creationDate:
                        'marketingCampaigns {edges {node {mediaChannel {creationDate}}}}',
                    lastChangeDate:
                        'marketingCampaigns {edges {node {mediaChannel {lastChangeDate}}}}',
                    name:
                        'marketingCampaigns {edges {node {mediaChannel {name}}}}',
                    platform:
                        'marketingCampaigns {edges {node {mediaChannel {platform}}}}',
                    remoteId:
                        'marketingCampaigns {edges {node {mediaChannel {remoteId}}}}',
                    remoteState:
                        'marketingCampaigns {edges {node {mediaChannel {remoteState}}}}',
                    currency:
                        'marketingCampaigns {edges {node {mediaChannel {currency}}}}',
                    currencySymbol:
                        'marketingCampaigns {edges {node {mediaChannel {currencySymbol}}}}',
                    currencyOffset:
                        'marketingCampaigns {edges {node {mediaChannel {currencyOffset}}}}',
                    timezone:
                        'marketingCampaigns {edges {node {mediaChannel {timezone}}}}',
                    tokenStatus:
                        'marketingCampaigns {edges {node {mediaChannel {tokenStatus}}}}',
                    systemStatus:
                        'marketingCampaigns {edges {node {mediaChannel {systemStatus}}}}',
                    errors:
                        'marketingCampaigns {edges {node {mediaChannel {errors}}}}',
                },
                results: {},
                creativeSpec:
                    'marketingCampaigns {edges {node {creativeSpec}}}',
                runTimeSpec: 'marketingCampaigns {edges {node {runTimeSpec}}}',
                resultsSource:
                    'marketingCampaigns {edges {node {resultsSource}}}',
                systemStatus:
                    'marketingCampaigns {edges {node {systemStatus}}}',
                errors: 'marketingCampaigns {edges {node {errors}}}',
            },
        },
        pageInfo: {
            hasNextPage: 'marketingCampaigns {pageInfo {hasNextPage}}',
            hasPreviousPage: 'marketingCampaigns {pageInfo {hasPreviousPage}}',
            startCursor: 'marketingCampaigns {pageInfo {startCursor}}',
            endCursor: 'marketingCampaigns {pageInfo {endCursor}}',
        },
    },
    catalog: {
        id: 'catalog {id}',
        name: 'catalog {name}',
        catalogType: 'catalog {catalogType}',
        creationDate: 'catalog {creationDate}',
        lastChangeDate: 'catalog {lastChangeDate}',
        remoteId: 'catalog {remoteId}',
        systemStatus: 'catalog {systemStatus}',
        remoteState: 'catalog {remoteState}',
        dataFeedId: 'catalog {dataFeedId}',
        errors: 'catalog {errors}',
        mediaChannel: {
            id: 'catalog {mediaChannel {id}}',
            creationDate: 'catalog {mediaChannel {creationDate}}',
            lastChangeDate: 'catalog {mediaChannel {lastChangeDate}}',
            name: 'catalog {mediaChannel {name}}',
            platform: 'catalog {mediaChannel {platform}}',
            remoteId: 'catalog {mediaChannel {remoteId}}',
            remoteState: 'catalog {mediaChannel {remoteState}}',
            currency: 'catalog {mediaChannel {currency}}',
            currencySymbol: 'catalog {mediaChannel {currencySymbol}}',
            currencyOffset: 'catalog {mediaChannel {currencyOffset}}',
            timezone: 'catalog {mediaChannel {timezone}}',
            tokenStatus: 'catalog {mediaChannel {tokenStatus}}',
            systemStatus: 'catalog {mediaChannel {systemStatus}}',
            errors: 'catalog {mediaChannel {errors}}',
            catalogs: {
                edges: {
                    cursor:
                        'catalog {mediaChannel {catalogs {edges {cursor}}}}',
                },
                pageInfo: {
                    hasNextPage:
                        'catalog {mediaChannel {catalogs {pageInfo {hasNextPage}}}}',
                    hasPreviousPage:
                        'catalog {mediaChannel {catalogs {pageInfo {hasPreviousPage}}}}',
                    startCursor:
                        'catalog {mediaChannel {catalogs {pageInfo {startCursor}}}}',
                    endCursor:
                        'catalog {mediaChannel {catalogs {pageInfo {endCursor}}}}',
                },
            },
            marketplace: {
                id: 'catalog {mediaChannel {marketplace {id}}}',
                creationDate:
                    'catalog {mediaChannel {marketplace {creationDate}}}',
                lastChangeDate:
                    'catalog {mediaChannel {marketplace {lastChangeDate}}}',
                name: 'catalog {mediaChannel {marketplace {name}}}',
                organization: {
                    id:
                        'catalog {mediaChannel {marketplace {organization {id}}}}',
                    creationDate:
                        'catalog {mediaChannel {marketplace {organization {creationDate}}}}',
                    lastChangeDate:
                        'catalog {mediaChannel {marketplace {organization {lastChangeDate}}}}',
                    name:
                        'catalog {mediaChannel {marketplace {organization {name}}}}',
                    tier:
                        'catalog {mediaChannel {marketplace {organization {tier}}}}',
                    systemStatus:
                        'catalog {mediaChannel {marketplace {organization {systemStatus}}}}',
                    errors:
                        'catalog {mediaChannel {marketplace {organization {errors}}}}',
                },
                mediaChannels: {},
                campaignTemplates: {},
                vendors: {},
                vendorTokens: {},
                systemStatus:
                    'catalog {mediaChannel {marketplace {systemStatus}}}',
                errors: 'catalog {mediaChannel {marketplace {errors}}}',
                creativeTemplates: {},
            },
        },
        products: {
            edges: {
                cursor: 'catalog {products {edges {cursor}}}',
                node: {
                    id: 'catalog {products {edges {node {id}}}}',
                    creationDate:
                        'catalog {products {edges {node {creationDate}}}}',
                    lastChangeDate:
                        'catalog {products {edges {node {lastChangeDate}}}}',
                    name: 'catalog {products {edges {node {name}}}}',
                    sku: 'catalog {products {edges {node {sku}}}}',
                    remoteState:
                        'catalog {products {edges {node {remoteState}}}}',
                    metadata: 'catalog {products {edges {node {metadata}}}}',
                    systemStatus:
                        'catalog {products {edges {node {systemStatus}}}}',
                    errors: 'catalog {products {edges {node {errors}}}}',
                    warnings: 'catalog {products {edges {node {warnings}}}}',
                },
            },
            pageInfo: {
                hasNextPage: 'catalog {products {pageInfo {hasNextPage}}}',
                hasPreviousPage:
                    'catalog {products {pageInfo {hasPreviousPage}}}',
                startCursor: 'catalog {products {pageInfo {startCursor}}}',
                endCursor: 'catalog {products {pageInfo {endCursor}}}',
            },
        },
    },
    metadata: 'metadata',
    vendor: {
        id: 'vendor {id}',
        creationDate: 'vendor {creationDate}',
        lastChangeDate: 'vendor {lastChangeDate}',
        name: 'vendor {name}',
        marketplace: {
            id: 'vendor {marketplace {id}}',
            creationDate: 'vendor {marketplace {creationDate}}',
            lastChangeDate: 'vendor {marketplace {lastChangeDate}}',
            name: 'vendor {marketplace {name}}',
            organization: {
                id: 'vendor {marketplace {organization {id}}}',
                creationDate:
                    'vendor {marketplace {organization {creationDate}}}',
                lastChangeDate:
                    'vendor {marketplace {organization {lastChangeDate}}}',
                users: {},
                marketplaces: {},
                name: 'vendor {marketplace {organization {name}}}',
                tier: 'vendor {marketplace {organization {tier}}}',
                systemStatus:
                    'vendor {marketplace {organization {systemStatus}}}',
                errors: 'vendor {marketplace {organization {errors}}}',
            },
            mediaChannels: {
                edges: {
                    cursor:
                        'vendor {marketplace {mediaChannels {edges {cursor}}}}',
                },
                pageInfo: {
                    hasNextPage:
                        'vendor {marketplace {mediaChannels {pageInfo {hasNextPage}}}}',
                    hasPreviousPage:
                        'vendor {marketplace {mediaChannels {pageInfo {hasPreviousPage}}}}',
                    startCursor:
                        'vendor {marketplace {mediaChannels {pageInfo {startCursor}}}}',
                    endCursor:
                        'vendor {marketplace {mediaChannels {pageInfo {endCursor}}}}',
                },
            },
            campaignTemplates: {
                edges: {
                    cursor:
                        'vendor {marketplace {campaignTemplates {edges {cursor}}}}',
                },
                pageInfo: {
                    hasNextPage:
                        'vendor {marketplace {campaignTemplates {pageInfo {hasNextPage}}}}',
                    hasPreviousPage:
                        'vendor {marketplace {campaignTemplates {pageInfo {hasPreviousPage}}}}',
                    startCursor:
                        'vendor {marketplace {campaignTemplates {pageInfo {startCursor}}}}',
                    endCursor:
                        'vendor {marketplace {campaignTemplates {pageInfo {endCursor}}}}',
                },
            },
            vendors: {
                edges: {
                    cursor: 'vendor {marketplace {vendors {edges {cursor}}}}',
                },
                pageInfo: {
                    hasNextPage:
                        'vendor {marketplace {vendors {pageInfo {hasNextPage}}}}',
                    hasPreviousPage:
                        'vendor {marketplace {vendors {pageInfo {hasPreviousPage}}}}',
                    startCursor:
                        'vendor {marketplace {vendors {pageInfo {startCursor}}}}',
                    endCursor:
                        'vendor {marketplace {vendors {pageInfo {endCursor}}}}',
                },
            },
            vendorTokens: {
                edges: {
                    cursor:
                        'vendor {marketplace {vendorTokens {edges {cursor}}}}',
                },
                pageInfo: {
                    hasNextPage:
                        'vendor {marketplace {vendorTokens {pageInfo {hasNextPage}}}}',
                    hasPreviousPage:
                        'vendor {marketplace {vendorTokens {pageInfo {hasPreviousPage}}}}',
                    startCursor:
                        'vendor {marketplace {vendorTokens {pageInfo {startCursor}}}}',
                    endCursor:
                        'vendor {marketplace {vendorTokens {pageInfo {endCursor}}}}',
                },
            },
            systemStatus: 'vendor {marketplace {systemStatus}}',
            errors: 'vendor {marketplace {errors}}',
            creativeTemplates: {
                edges: {
                    cursor:
                        'vendor {marketplace {creativeTemplates {edges {cursor}}}}',
                },
                pageInfo: {
                    hasNextPage:
                        'vendor {marketplace {creativeTemplates {pageInfo {hasNextPage}}}}',
                    hasPreviousPage:
                        'vendor {marketplace {creativeTemplates {pageInfo {hasPreviousPage}}}}',
                    startCursor:
                        'vendor {marketplace {creativeTemplates {pageInfo {startCursor}}}}',
                    endCursor:
                        'vendor {marketplace {creativeTemplates {pageInfo {endCursor}}}}',
                },
            },
        },
        vendorTokens: {
            edges: {
                cursor: 'vendor {vendorTokens {edges {cursor}}}',
                node: {
                    id: 'vendor {vendorTokens {edges {node {id}}}}',
                    creationDate:
                        'vendor {vendorTokens {edges {node {creationDate}}}}',
                    lastChangeDate:
                        'vendor {vendorTokens {edges {node {lastChangeDate}}}}',
                    token: 'vendor {vendorTokens {edges {node {token}}}}',
                },
            },
            pageInfo: {
                hasNextPage: 'vendor {vendorTokens {pageInfo {hasNextPage}}}',
                hasPreviousPage:
                    'vendor {vendorTokens {pageInfo {hasPreviousPage}}}',
                startCursor: 'vendor {vendorTokens {pageInfo {startCursor}}}',
                endCursor: 'vendor {vendorTokens {pageInfo {endCursor}}}',
            },
        },
        products: {
            edges: {
                cursor: 'vendor {products {edges {cursor}}}',
                node: {
                    id: 'vendor {products {edges {node {id}}}}',
                    creationDate:
                        'vendor {products {edges {node {creationDate}}}}',
                    lastChangeDate:
                        'vendor {products {edges {node {lastChangeDate}}}}',
                    name: 'vendor {products {edges {node {name}}}}',
                    sku: 'vendor {products {edges {node {sku}}}}',
                    remoteState:
                        'vendor {products {edges {node {remoteState}}}}',
                    metadata: 'vendor {products {edges {node {metadata}}}}',
                    systemStatus:
                        'vendor {products {edges {node {systemStatus}}}}',
                    errors: 'vendor {products {edges {node {errors}}}}',
                    warnings: 'vendor {products {edges {node {warnings}}}}',
                },
            },
            pageInfo: {
                hasNextPage: 'vendor {products {pageInfo {hasNextPage}}}',
                hasPreviousPage:
                    'vendor {products {pageInfo {hasPreviousPage}}}',
                startCursor: 'vendor {products {pageInfo {startCursor}}}',
                endCursor: 'vendor {products {pageInfo {endCursor}}}',
            },
        },
        systemStatus: 'vendor {systemStatus}',
        errors: 'vendor {errors}',
    },
    systemStatus: 'systemStatus',
    errors: 'errors',
    warnings: 'warnings',
};
export type MarketingCampaignFields = {
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
export const MarketingCampaignFields: MarketingCampaignFields = {
    id: 'id',
    creationDate: 'creationDate',
    lastChangeDate: 'lastChangeDate',
    name: 'name',
    status: 'status',
    marketingAds: {
        edges: {
            cursor: 'marketingAds {edges {cursor}}',
            node: {
                id: 'marketingAds {edges {node {id}}}',
                creationDate: 'marketingAds {edges {node {creationDate}}}',
                lastChangeDate: 'marketingAds {edges {node {lastChangeDate}}}',
                remoteId: 'marketingAds {edges {node {remoteId}}}',
                systemStatus: 'marketingAds {edges {node {systemStatus}}}',
                errors: 'marketingAds {edges {node {errors}}}',
                preview: 'marketingAds {edges {node {preview}}}',
                resultsSource: 'marketingAds {edges {node {resultsSource}}}',
                results: {},
                marketingCampaign: {
                    id: 'marketingAds {edges {node {marketingCampaign {id}}}}',
                    creationDate:
                        'marketingAds {edges {node {marketingCampaign {creationDate}}}}',
                    lastChangeDate:
                        'marketingAds {edges {node {marketingCampaign {lastChangeDate}}}}',
                    name:
                        'marketingAds {edges {node {marketingCampaign {name}}}}',
                    status:
                        'marketingAds {edges {node {marketingCampaign {status}}}}',
                    creativeSpec:
                        'marketingAds {edges {node {marketingCampaign {creativeSpec}}}}',
                    runTimeSpec:
                        'marketingAds {edges {node {marketingCampaign {runTimeSpec}}}}',
                    resultsSource:
                        'marketingAds {edges {node {marketingCampaign {resultsSource}}}}',
                    systemStatus:
                        'marketingAds {edges {node {marketingCampaign {systemStatus}}}}',
                    errors:
                        'marketingAds {edges {node {marketingCampaign {errors}}}}',
                },
                vendor: {
                    id: 'marketingAds {edges {node {vendor {id}}}}',
                    creationDate:
                        'marketingAds {edges {node {vendor {creationDate}}}}',
                    lastChangeDate:
                        'marketingAds {edges {node {vendor {lastChangeDate}}}}',
                    name: 'marketingAds {edges {node {vendor {name}}}}',
                    systemStatus:
                        'marketingAds {edges {node {vendor {systemStatus}}}}',
                    errors: 'marketingAds {edges {node {vendor {errors}}}}',
                },
            },
        },
        pageInfo: {
            hasNextPage: 'marketingAds {pageInfo {hasNextPage}}',
            hasPreviousPage: 'marketingAds {pageInfo {hasPreviousPage}}',
            startCursor: 'marketingAds {pageInfo {startCursor}}',
            endCursor: 'marketingAds {pageInfo {endCursor}}',
        },
    },
    products: {
        edges: {
            cursor: 'products {edges {cursor}}',
            node: {
                id: 'products {edges {node {id}}}',
                creationDate: 'products {edges {node {creationDate}}}',
                lastChangeDate: 'products {edges {node {lastChangeDate}}}',
                name: 'products {edges {node {name}}}',
                sku: 'products {edges {node {sku}}}',
                remoteState: 'products {edges {node {remoteState}}}',
                marketingCampaigns: {},
                catalog: {
                    id: 'products {edges {node {catalog {id}}}}',
                    name: 'products {edges {node {catalog {name}}}}',
                    catalogType:
                        'products {edges {node {catalog {catalogType}}}}',
                    creationDate:
                        'products {edges {node {catalog {creationDate}}}}',
                    lastChangeDate:
                        'products {edges {node {catalog {lastChangeDate}}}}',
                    remoteId: 'products {edges {node {catalog {remoteId}}}}',
                    systemStatus:
                        'products {edges {node {catalog {systemStatus}}}}',
                    remoteState:
                        'products {edges {node {catalog {remoteState}}}}',
                    dataFeedId:
                        'products {edges {node {catalog {dataFeedId}}}}',
                    errors: 'products {edges {node {catalog {errors}}}}',
                },
                metadata: 'products {edges {node {metadata}}}',
                vendor: {
                    id: 'products {edges {node {vendor {id}}}}',
                    creationDate:
                        'products {edges {node {vendor {creationDate}}}}',
                    lastChangeDate:
                        'products {edges {node {vendor {lastChangeDate}}}}',
                    name: 'products {edges {node {vendor {name}}}}',
                    systemStatus:
                        'products {edges {node {vendor {systemStatus}}}}',
                    errors: 'products {edges {node {vendor {errors}}}}',
                },
                systemStatus: 'products {edges {node {systemStatus}}}',
                errors: 'products {edges {node {errors}}}',
                warnings: 'products {edges {node {warnings}}}',
            },
        },
        pageInfo: {
            hasNextPage: 'products {pageInfo {hasNextPage}}',
            hasPreviousPage: 'products {pageInfo {hasPreviousPage}}',
            startCursor: 'products {pageInfo {startCursor}}',
            endCursor: 'products {pageInfo {endCursor}}',
        },
    },
    vendor: {
        id: 'vendor {id}',
        creationDate: 'vendor {creationDate}',
        lastChangeDate: 'vendor {lastChangeDate}',
        name: 'vendor {name}',
        marketplace: {
            id: 'vendor {marketplace {id}}',
            creationDate: 'vendor {marketplace {creationDate}}',
            lastChangeDate: 'vendor {marketplace {lastChangeDate}}',
            name: 'vendor {marketplace {name}}',
            organization: {
                id: 'vendor {marketplace {organization {id}}}',
                creationDate:
                    'vendor {marketplace {organization {creationDate}}}',
                lastChangeDate:
                    'vendor {marketplace {organization {lastChangeDate}}}',
                users: {},
                marketplaces: {},
                name: 'vendor {marketplace {organization {name}}}',
                tier: 'vendor {marketplace {organization {tier}}}',
                systemStatus:
                    'vendor {marketplace {organization {systemStatus}}}',
                errors: 'vendor {marketplace {organization {errors}}}',
            },
            mediaChannels: {
                edges: {
                    cursor:
                        'vendor {marketplace {mediaChannels {edges {cursor}}}}',
                },
                pageInfo: {
                    hasNextPage:
                        'vendor {marketplace {mediaChannels {pageInfo {hasNextPage}}}}',
                    hasPreviousPage:
                        'vendor {marketplace {mediaChannels {pageInfo {hasPreviousPage}}}}',
                    startCursor:
                        'vendor {marketplace {mediaChannels {pageInfo {startCursor}}}}',
                    endCursor:
                        'vendor {marketplace {mediaChannels {pageInfo {endCursor}}}}',
                },
            },
            campaignTemplates: {
                edges: {
                    cursor:
                        'vendor {marketplace {campaignTemplates {edges {cursor}}}}',
                },
                pageInfo: {
                    hasNextPage:
                        'vendor {marketplace {campaignTemplates {pageInfo {hasNextPage}}}}',
                    hasPreviousPage:
                        'vendor {marketplace {campaignTemplates {pageInfo {hasPreviousPage}}}}',
                    startCursor:
                        'vendor {marketplace {campaignTemplates {pageInfo {startCursor}}}}',
                    endCursor:
                        'vendor {marketplace {campaignTemplates {pageInfo {endCursor}}}}',
                },
            },
            vendors: {
                edges: {
                    cursor: 'vendor {marketplace {vendors {edges {cursor}}}}',
                },
                pageInfo: {
                    hasNextPage:
                        'vendor {marketplace {vendors {pageInfo {hasNextPage}}}}',
                    hasPreviousPage:
                        'vendor {marketplace {vendors {pageInfo {hasPreviousPage}}}}',
                    startCursor:
                        'vendor {marketplace {vendors {pageInfo {startCursor}}}}',
                    endCursor:
                        'vendor {marketplace {vendors {pageInfo {endCursor}}}}',
                },
            },
            vendorTokens: {
                edges: {
                    cursor:
                        'vendor {marketplace {vendorTokens {edges {cursor}}}}',
                },
                pageInfo: {
                    hasNextPage:
                        'vendor {marketplace {vendorTokens {pageInfo {hasNextPage}}}}',
                    hasPreviousPage:
                        'vendor {marketplace {vendorTokens {pageInfo {hasPreviousPage}}}}',
                    startCursor:
                        'vendor {marketplace {vendorTokens {pageInfo {startCursor}}}}',
                    endCursor:
                        'vendor {marketplace {vendorTokens {pageInfo {endCursor}}}}',
                },
            },
            systemStatus: 'vendor {marketplace {systemStatus}}',
            errors: 'vendor {marketplace {errors}}',
            creativeTemplates: {
                edges: {
                    cursor:
                        'vendor {marketplace {creativeTemplates {edges {cursor}}}}',
                },
                pageInfo: {
                    hasNextPage:
                        'vendor {marketplace {creativeTemplates {pageInfo {hasNextPage}}}}',
                    hasPreviousPage:
                        'vendor {marketplace {creativeTemplates {pageInfo {hasPreviousPage}}}}',
                    startCursor:
                        'vendor {marketplace {creativeTemplates {pageInfo {startCursor}}}}',
                    endCursor:
                        'vendor {marketplace {creativeTemplates {pageInfo {endCursor}}}}',
                },
            },
        },
        vendorTokens: {
            edges: {
                cursor: 'vendor {vendorTokens {edges {cursor}}}',
                node: {
                    id: 'vendor {vendorTokens {edges {node {id}}}}',
                    creationDate:
                        'vendor {vendorTokens {edges {node {creationDate}}}}',
                    lastChangeDate:
                        'vendor {vendorTokens {edges {node {lastChangeDate}}}}',
                    token: 'vendor {vendorTokens {edges {node {token}}}}',
                },
            },
            pageInfo: {
                hasNextPage: 'vendor {vendorTokens {pageInfo {hasNextPage}}}',
                hasPreviousPage:
                    'vendor {vendorTokens {pageInfo {hasPreviousPage}}}',
                startCursor: 'vendor {vendorTokens {pageInfo {startCursor}}}',
                endCursor: 'vendor {vendorTokens {pageInfo {endCursor}}}',
            },
        },
        products: {
            edges: {
                cursor: 'vendor {products {edges {cursor}}}',
                node: {
                    id: 'vendor {products {edges {node {id}}}}',
                    creationDate:
                        'vendor {products {edges {node {creationDate}}}}',
                    lastChangeDate:
                        'vendor {products {edges {node {lastChangeDate}}}}',
                    name: 'vendor {products {edges {node {name}}}}',
                    sku: 'vendor {products {edges {node {sku}}}}',
                    remoteState:
                        'vendor {products {edges {node {remoteState}}}}',
                    metadata: 'vendor {products {edges {node {metadata}}}}',
                    systemStatus:
                        'vendor {products {edges {node {systemStatus}}}}',
                    errors: 'vendor {products {edges {node {errors}}}}',
                    warnings: 'vendor {products {edges {node {warnings}}}}',
                },
            },
            pageInfo: {
                hasNextPage: 'vendor {products {pageInfo {hasNextPage}}}',
                hasPreviousPage:
                    'vendor {products {pageInfo {hasPreviousPage}}}',
                startCursor: 'vendor {products {pageInfo {startCursor}}}',
                endCursor: 'vendor {products {pageInfo {endCursor}}}',
            },
        },
        systemStatus: 'vendor {systemStatus}',
        errors: 'vendor {errors}',
    },
    catalog: {
        id: 'catalog {id}',
        name: 'catalog {name}',
        catalogType: 'catalog {catalogType}',
        creationDate: 'catalog {creationDate}',
        lastChangeDate: 'catalog {lastChangeDate}',
        remoteId: 'catalog {remoteId}',
        systemStatus: 'catalog {systemStatus}',
        remoteState: 'catalog {remoteState}',
        dataFeedId: 'catalog {dataFeedId}',
        errors: 'catalog {errors}',
        mediaChannel: {
            id: 'catalog {mediaChannel {id}}',
            creationDate: 'catalog {mediaChannel {creationDate}}',
            lastChangeDate: 'catalog {mediaChannel {lastChangeDate}}',
            name: 'catalog {mediaChannel {name}}',
            platform: 'catalog {mediaChannel {platform}}',
            remoteId: 'catalog {mediaChannel {remoteId}}',
            remoteState: 'catalog {mediaChannel {remoteState}}',
            currency: 'catalog {mediaChannel {currency}}',
            currencySymbol: 'catalog {mediaChannel {currencySymbol}}',
            currencyOffset: 'catalog {mediaChannel {currencyOffset}}',
            timezone: 'catalog {mediaChannel {timezone}}',
            tokenStatus: 'catalog {mediaChannel {tokenStatus}}',
            systemStatus: 'catalog {mediaChannel {systemStatus}}',
            errors: 'catalog {mediaChannel {errors}}',
            catalogs: {
                edges: {
                    cursor:
                        'catalog {mediaChannel {catalogs {edges {cursor}}}}',
                },
                pageInfo: {
                    hasNextPage:
                        'catalog {mediaChannel {catalogs {pageInfo {hasNextPage}}}}',
                    hasPreviousPage:
                        'catalog {mediaChannel {catalogs {pageInfo {hasPreviousPage}}}}',
                    startCursor:
                        'catalog {mediaChannel {catalogs {pageInfo {startCursor}}}}',
                    endCursor:
                        'catalog {mediaChannel {catalogs {pageInfo {endCursor}}}}',
                },
            },
            marketplace: {
                id: 'catalog {mediaChannel {marketplace {id}}}',
                creationDate:
                    'catalog {mediaChannel {marketplace {creationDate}}}',
                lastChangeDate:
                    'catalog {mediaChannel {marketplace {lastChangeDate}}}',
                name: 'catalog {mediaChannel {marketplace {name}}}',
                organization: {
                    id:
                        'catalog {mediaChannel {marketplace {organization {id}}}}',
                    creationDate:
                        'catalog {mediaChannel {marketplace {organization {creationDate}}}}',
                    lastChangeDate:
                        'catalog {mediaChannel {marketplace {organization {lastChangeDate}}}}',
                    name:
                        'catalog {mediaChannel {marketplace {organization {name}}}}',
                    tier:
                        'catalog {mediaChannel {marketplace {organization {tier}}}}',
                    systemStatus:
                        'catalog {mediaChannel {marketplace {organization {systemStatus}}}}',
                    errors:
                        'catalog {mediaChannel {marketplace {organization {errors}}}}',
                },
                mediaChannels: {},
                campaignTemplates: {},
                vendors: {},
                vendorTokens: {},
                systemStatus:
                    'catalog {mediaChannel {marketplace {systemStatus}}}',
                errors: 'catalog {mediaChannel {marketplace {errors}}}',
                creativeTemplates: {},
            },
        },
        products: {
            edges: {
                cursor: 'catalog {products {edges {cursor}}}',
                node: {
                    id: 'catalog {products {edges {node {id}}}}',
                    creationDate:
                        'catalog {products {edges {node {creationDate}}}}',
                    lastChangeDate:
                        'catalog {products {edges {node {lastChangeDate}}}}',
                    name: 'catalog {products {edges {node {name}}}}',
                    sku: 'catalog {products {edges {node {sku}}}}',
                    remoteState:
                        'catalog {products {edges {node {remoteState}}}}',
                    metadata: 'catalog {products {edges {node {metadata}}}}',
                    systemStatus:
                        'catalog {products {edges {node {systemStatus}}}}',
                    errors: 'catalog {products {edges {node {errors}}}}',
                    warnings: 'catalog {products {edges {node {warnings}}}}',
                },
            },
            pageInfo: {
                hasNextPage: 'catalog {products {pageInfo {hasNextPage}}}',
                hasPreviousPage:
                    'catalog {products {pageInfo {hasPreviousPage}}}',
                startCursor: 'catalog {products {pageInfo {startCursor}}}',
                endCursor: 'catalog {products {pageInfo {endCursor}}}',
            },
        },
    },
    campaignTemplate: {
        id: 'campaignTemplate {id}',
        creationDate: 'campaignTemplate {creationDate}',
        lastChangeDate: 'campaignTemplate {lastChangeDate}',
        name: 'campaignTemplate {name}',
        description: 'campaignTemplate {description}',
        platform: 'campaignTemplate {platform}',
        remoteId: 'campaignTemplate {remoteId}',
        systemStatus: 'campaignTemplate {systemStatus}',
        errors: 'campaignTemplate {errors}',
        marketplace: {
            id: 'campaignTemplate {marketplace {id}}',
            creationDate: 'campaignTemplate {marketplace {creationDate}}',
            lastChangeDate: 'campaignTemplate {marketplace {lastChangeDate}}',
            name: 'campaignTemplate {marketplace {name}}',
            organization: {
                id: 'campaignTemplate {marketplace {organization {id}}}',
                creationDate:
                    'campaignTemplate {marketplace {organization {creationDate}}}',
                lastChangeDate:
                    'campaignTemplate {marketplace {organization {lastChangeDate}}}',
                users: {},
                marketplaces: {},
                name: 'campaignTemplate {marketplace {organization {name}}}',
                tier: 'campaignTemplate {marketplace {organization {tier}}}',
                systemStatus:
                    'campaignTemplate {marketplace {organization {systemStatus}}}',
                errors:
                    'campaignTemplate {marketplace {organization {errors}}}',
            },
            mediaChannels: {
                edges: {
                    cursor:
                        'campaignTemplate {marketplace {mediaChannels {edges {cursor}}}}',
                },
                pageInfo: {
                    hasNextPage:
                        'campaignTemplate {marketplace {mediaChannels {pageInfo {hasNextPage}}}}',
                    hasPreviousPage:
                        'campaignTemplate {marketplace {mediaChannels {pageInfo {hasPreviousPage}}}}',
                    startCursor:
                        'campaignTemplate {marketplace {mediaChannels {pageInfo {startCursor}}}}',
                    endCursor:
                        'campaignTemplate {marketplace {mediaChannels {pageInfo {endCursor}}}}',
                },
            },
            campaignTemplates: {
                edges: {
                    cursor:
                        'campaignTemplate {marketplace {campaignTemplates {edges {cursor}}}}',
                },
                pageInfo: {
                    hasNextPage:
                        'campaignTemplate {marketplace {campaignTemplates {pageInfo {hasNextPage}}}}',
                    hasPreviousPage:
                        'campaignTemplate {marketplace {campaignTemplates {pageInfo {hasPreviousPage}}}}',
                    startCursor:
                        'campaignTemplate {marketplace {campaignTemplates {pageInfo {startCursor}}}}',
                    endCursor:
                        'campaignTemplate {marketplace {campaignTemplates {pageInfo {endCursor}}}}',
                },
            },
            vendors: {
                edges: {
                    cursor:
                        'campaignTemplate {marketplace {vendors {edges {cursor}}}}',
                },
                pageInfo: {
                    hasNextPage:
                        'campaignTemplate {marketplace {vendors {pageInfo {hasNextPage}}}}',
                    hasPreviousPage:
                        'campaignTemplate {marketplace {vendors {pageInfo {hasPreviousPage}}}}',
                    startCursor:
                        'campaignTemplate {marketplace {vendors {pageInfo {startCursor}}}}',
                    endCursor:
                        'campaignTemplate {marketplace {vendors {pageInfo {endCursor}}}}',
                },
            },
            vendorTokens: {
                edges: {
                    cursor:
                        'campaignTemplate {marketplace {vendorTokens {edges {cursor}}}}',
                },
                pageInfo: {
                    hasNextPage:
                        'campaignTemplate {marketplace {vendorTokens {pageInfo {hasNextPage}}}}',
                    hasPreviousPage:
                        'campaignTemplate {marketplace {vendorTokens {pageInfo {hasPreviousPage}}}}',
                    startCursor:
                        'campaignTemplate {marketplace {vendorTokens {pageInfo {startCursor}}}}',
                    endCursor:
                        'campaignTemplate {marketplace {vendorTokens {pageInfo {endCursor}}}}',
                },
            },
            systemStatus: 'campaignTemplate {marketplace {systemStatus}}',
            errors: 'campaignTemplate {marketplace {errors}}',
            creativeTemplates: {
                edges: {
                    cursor:
                        'campaignTemplate {marketplace {creativeTemplates {edges {cursor}}}}',
                },
                pageInfo: {
                    hasNextPage:
                        'campaignTemplate {marketplace {creativeTemplates {pageInfo {hasNextPage}}}}',
                    hasPreviousPage:
                        'campaignTemplate {marketplace {creativeTemplates {pageInfo {hasPreviousPage}}}}',
                    startCursor:
                        'campaignTemplate {marketplace {creativeTemplates {pageInfo {startCursor}}}}',
                    endCursor:
                        'campaignTemplate {marketplace {creativeTemplates {pageInfo {endCursor}}}}',
                },
            },
        },
        marketingCampaigns: {
            edges: {
                cursor:
                    'campaignTemplate {marketingCampaigns {edges {cursor}}}',
                node: {
                    id:
                        'campaignTemplate {marketingCampaigns {edges {node {id}}}}',
                    creationDate:
                        'campaignTemplate {marketingCampaigns {edges {node {creationDate}}}}',
                    lastChangeDate:
                        'campaignTemplate {marketingCampaigns {edges {node {lastChangeDate}}}}',
                    name:
                        'campaignTemplate {marketingCampaigns {edges {node {name}}}}',
                    status:
                        'campaignTemplate {marketingCampaigns {edges {node {status}}}}',
                    creativeSpec:
                        'campaignTemplate {marketingCampaigns {edges {node {creativeSpec}}}}',
                    runTimeSpec:
                        'campaignTemplate {marketingCampaigns {edges {node {runTimeSpec}}}}',
                    resultsSource:
                        'campaignTemplate {marketingCampaigns {edges {node {resultsSource}}}}',
                    systemStatus:
                        'campaignTemplate {marketingCampaigns {edges {node {systemStatus}}}}',
                    errors:
                        'campaignTemplate {marketingCampaigns {edges {node {errors}}}}',
                },
            },
            pageInfo: {
                hasNextPage:
                    'campaignTemplate {marketingCampaigns {pageInfo {hasNextPage}}}',
                hasPreviousPage:
                    'campaignTemplate {marketingCampaigns {pageInfo {hasPreviousPage}}}',
                startCursor:
                    'campaignTemplate {marketingCampaigns {pageInfo {startCursor}}}',
                endCursor:
                    'campaignTemplate {marketingCampaigns {pageInfo {endCursor}}}',
            },
        },
    },
    mediaChannel: {
        id: 'mediaChannel {id}',
        creationDate: 'mediaChannel {creationDate}',
        lastChangeDate: 'mediaChannel {lastChangeDate}',
        name: 'mediaChannel {name}',
        platform: 'mediaChannel {platform}',
        remoteId: 'mediaChannel {remoteId}',
        remoteState: 'mediaChannel {remoteState}',
        currency: 'mediaChannel {currency}',
        currencySymbol: 'mediaChannel {currencySymbol}',
        currencyOffset: 'mediaChannel {currencyOffset}',
        timezone: 'mediaChannel {timezone}',
        tokenStatus: 'mediaChannel {tokenStatus}',
        systemStatus: 'mediaChannel {systemStatus}',
        errors: 'mediaChannel {errors}',
        catalogs: {
            edges: {
                cursor: 'mediaChannel {catalogs {edges {cursor}}}',
                node: {
                    id: 'mediaChannel {catalogs {edges {node {id}}}}',
                    name: 'mediaChannel {catalogs {edges {node {name}}}}',
                    catalogType:
                        'mediaChannel {catalogs {edges {node {catalogType}}}}',
                    creationDate:
                        'mediaChannel {catalogs {edges {node {creationDate}}}}',
                    lastChangeDate:
                        'mediaChannel {catalogs {edges {node {lastChangeDate}}}}',
                    remoteId:
                        'mediaChannel {catalogs {edges {node {remoteId}}}}',
                    systemStatus:
                        'mediaChannel {catalogs {edges {node {systemStatus}}}}',
                    remoteState:
                        'mediaChannel {catalogs {edges {node {remoteState}}}}',
                    dataFeedId:
                        'mediaChannel {catalogs {edges {node {dataFeedId}}}}',
                    errors: 'mediaChannel {catalogs {edges {node {errors}}}}',
                },
            },
            pageInfo: {
                hasNextPage: 'mediaChannel {catalogs {pageInfo {hasNextPage}}}',
                hasPreviousPage:
                    'mediaChannel {catalogs {pageInfo {hasPreviousPage}}}',
                startCursor: 'mediaChannel {catalogs {pageInfo {startCursor}}}',
                endCursor: 'mediaChannel {catalogs {pageInfo {endCursor}}}',
            },
        },
        marketplace: {
            id: 'mediaChannel {marketplace {id}}',
            creationDate: 'mediaChannel {marketplace {creationDate}}',
            lastChangeDate: 'mediaChannel {marketplace {lastChangeDate}}',
            name: 'mediaChannel {marketplace {name}}',
            organization: {
                id: 'mediaChannel {marketplace {organization {id}}}',
                creationDate:
                    'mediaChannel {marketplace {organization {creationDate}}}',
                lastChangeDate:
                    'mediaChannel {marketplace {organization {lastChangeDate}}}',
                users: {},
                marketplaces: {},
                name: 'mediaChannel {marketplace {organization {name}}}',
                tier: 'mediaChannel {marketplace {organization {tier}}}',
                systemStatus:
                    'mediaChannel {marketplace {organization {systemStatus}}}',
                errors: 'mediaChannel {marketplace {organization {errors}}}',
            },
            mediaChannels: {
                edges: {
                    cursor:
                        'mediaChannel {marketplace {mediaChannels {edges {cursor}}}}',
                },
                pageInfo: {
                    hasNextPage:
                        'mediaChannel {marketplace {mediaChannels {pageInfo {hasNextPage}}}}',
                    hasPreviousPage:
                        'mediaChannel {marketplace {mediaChannels {pageInfo {hasPreviousPage}}}}',
                    startCursor:
                        'mediaChannel {marketplace {mediaChannels {pageInfo {startCursor}}}}',
                    endCursor:
                        'mediaChannel {marketplace {mediaChannels {pageInfo {endCursor}}}}',
                },
            },
            campaignTemplates: {
                edges: {
                    cursor:
                        'mediaChannel {marketplace {campaignTemplates {edges {cursor}}}}',
                },
                pageInfo: {
                    hasNextPage:
                        'mediaChannel {marketplace {campaignTemplates {pageInfo {hasNextPage}}}}',
                    hasPreviousPage:
                        'mediaChannel {marketplace {campaignTemplates {pageInfo {hasPreviousPage}}}}',
                    startCursor:
                        'mediaChannel {marketplace {campaignTemplates {pageInfo {startCursor}}}}',
                    endCursor:
                        'mediaChannel {marketplace {campaignTemplates {pageInfo {endCursor}}}}',
                },
            },
            vendors: {
                edges: {
                    cursor:
                        'mediaChannel {marketplace {vendors {edges {cursor}}}}',
                },
                pageInfo: {
                    hasNextPage:
                        'mediaChannel {marketplace {vendors {pageInfo {hasNextPage}}}}',
                    hasPreviousPage:
                        'mediaChannel {marketplace {vendors {pageInfo {hasPreviousPage}}}}',
                    startCursor:
                        'mediaChannel {marketplace {vendors {pageInfo {startCursor}}}}',
                    endCursor:
                        'mediaChannel {marketplace {vendors {pageInfo {endCursor}}}}',
                },
            },
            vendorTokens: {
                edges: {
                    cursor:
                        'mediaChannel {marketplace {vendorTokens {edges {cursor}}}}',
                },
                pageInfo: {
                    hasNextPage:
                        'mediaChannel {marketplace {vendorTokens {pageInfo {hasNextPage}}}}',
                    hasPreviousPage:
                        'mediaChannel {marketplace {vendorTokens {pageInfo {hasPreviousPage}}}}',
                    startCursor:
                        'mediaChannel {marketplace {vendorTokens {pageInfo {startCursor}}}}',
                    endCursor:
                        'mediaChannel {marketplace {vendorTokens {pageInfo {endCursor}}}}',
                },
            },
            systemStatus: 'mediaChannel {marketplace {systemStatus}}',
            errors: 'mediaChannel {marketplace {errors}}',
            creativeTemplates: {
                edges: {
                    cursor:
                        'mediaChannel {marketplace {creativeTemplates {edges {cursor}}}}',
                },
                pageInfo: {
                    hasNextPage:
                        'mediaChannel {marketplace {creativeTemplates {pageInfo {hasNextPage}}}}',
                    hasPreviousPage:
                        'mediaChannel {marketplace {creativeTemplates {pageInfo {hasPreviousPage}}}}',
                    startCursor:
                        'mediaChannel {marketplace {creativeTemplates {pageInfo {startCursor}}}}',
                    endCursor:
                        'mediaChannel {marketplace {creativeTemplates {pageInfo {endCursor}}}}',
                },
            },
        },
    },
    results: {
        edges: {
            cursor: 'results {edges {cursor}}',
            node: {
                id: 'results {edges {node {id}}}',
                creationDate: 'results {edges {node {creationDate}}}',
                lastChangeDate: 'results {edges {node {lastChangeDate}}}',
                date: 'results {edges {node {date}}}',
                analytics: {
                    results: 'results {edges {node {analytics {results}}}}',
                    impressions:
                        'results {edges {node {analytics {impressions}}}}',
                    clicks: 'results {edges {node {analytics {clicks}}}}',
                    spend: 'results {edges {node {analytics {spend}}}}',
                    purchases: 'results {edges {node {analytics {purchases}}}}',
                    purchasesValue:
                        'results {edges {node {analytics {purchasesValue}}}}',
                },
                type: 'results {edges {node {type}}}',
                resource: {
                    id: 'results {edges {node {resource {id}}}}',
                    creationDate:
                        'results {edges {node {resource {creationDate}}}}',
                    lastChangeDate:
                        'results {edges {node {resource {lastChangeDate}}}}',
                },
                vendor: {
                    id: 'results {edges {node {vendor {id}}}}',
                    creationDate:
                        'results {edges {node {vendor {creationDate}}}}',
                    lastChangeDate:
                        'results {edges {node {vendor {lastChangeDate}}}}',
                    name: 'results {edges {node {vendor {name}}}}',
                    systemStatus:
                        'results {edges {node {vendor {systemStatus}}}}',
                    errors: 'results {edges {node {vendor {errors}}}}',
                },
            },
        },
        pageInfo: {
            hasNextPage: 'results {pageInfo {hasNextPage}}',
            hasPreviousPage: 'results {pageInfo {hasPreviousPage}}',
            startCursor: 'results {pageInfo {startCursor}}',
            endCursor: 'results {pageInfo {endCursor}}',
        },
    },
    creativeSpec: 'creativeSpec',
    runTimeSpec: 'runTimeSpec',
    resultsSource: 'resultsSource',
    systemStatus: 'systemStatus',
    errors: 'errors',
};
export type VendorFields = {
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
export const VendorFields: VendorFields = {
    id: 'id',
    creationDate: 'creationDate',
    lastChangeDate: 'lastChangeDate',
    name: 'name',
    marketplace: {
        id: 'marketplace {id}',
        creationDate: 'marketplace {creationDate}',
        lastChangeDate: 'marketplace {lastChangeDate}',
        name: 'marketplace {name}',
        organization: {
            id: 'marketplace {organization {id}}',
            creationDate: 'marketplace {organization {creationDate}}',
            lastChangeDate: 'marketplace {organization {lastChangeDate}}',
            users: {
                edges: {
                    cursor:
                        'marketplace {organization {users {edges {cursor}}}}',
                },
                pageInfo: {
                    hasNextPage:
                        'marketplace {organization {users {pageInfo {hasNextPage}}}}',
                    hasPreviousPage:
                        'marketplace {organization {users {pageInfo {hasPreviousPage}}}}',
                    startCursor:
                        'marketplace {organization {users {pageInfo {startCursor}}}}',
                    endCursor:
                        'marketplace {organization {users {pageInfo {endCursor}}}}',
                },
            },
            marketplaces: {
                edges: {
                    cursor:
                        'marketplace {organization {marketplaces {edges {cursor}}}}',
                },
                pageInfo: {
                    hasNextPage:
                        'marketplace {organization {marketplaces {pageInfo {hasNextPage}}}}',
                    hasPreviousPage:
                        'marketplace {organization {marketplaces {pageInfo {hasPreviousPage}}}}',
                    startCursor:
                        'marketplace {organization {marketplaces {pageInfo {startCursor}}}}',
                    endCursor:
                        'marketplace {organization {marketplaces {pageInfo {endCursor}}}}',
                },
            },
            name: 'marketplace {organization {name}}',
            tier: 'marketplace {organization {tier}}',
            systemStatus: 'marketplace {organization {systemStatus}}',
            errors: 'marketplace {organization {errors}}',
        },
        mediaChannels: {
            edges: {
                cursor: 'marketplace {mediaChannels {edges {cursor}}}',
                node: {
                    id: 'marketplace {mediaChannels {edges {node {id}}}}',
                    creationDate:
                        'marketplace {mediaChannels {edges {node {creationDate}}}}',
                    lastChangeDate:
                        'marketplace {mediaChannels {edges {node {lastChangeDate}}}}',
                    name: 'marketplace {mediaChannels {edges {node {name}}}}',
                    platform:
                        'marketplace {mediaChannels {edges {node {platform}}}}',
                    remoteId:
                        'marketplace {mediaChannels {edges {node {remoteId}}}}',
                    remoteState:
                        'marketplace {mediaChannels {edges {node {remoteState}}}}',
                    currency:
                        'marketplace {mediaChannels {edges {node {currency}}}}',
                    currencySymbol:
                        'marketplace {mediaChannels {edges {node {currencySymbol}}}}',
                    currencyOffset:
                        'marketplace {mediaChannels {edges {node {currencyOffset}}}}',
                    timezone:
                        'marketplace {mediaChannels {edges {node {timezone}}}}',
                    tokenStatus:
                        'marketplace {mediaChannels {edges {node {tokenStatus}}}}',
                    systemStatus:
                        'marketplace {mediaChannels {edges {node {systemStatus}}}}',
                    errors:
                        'marketplace {mediaChannels {edges {node {errors}}}}',
                },
            },
            pageInfo: {
                hasNextPage:
                    'marketplace {mediaChannels {pageInfo {hasNextPage}}}',
                hasPreviousPage:
                    'marketplace {mediaChannels {pageInfo {hasPreviousPage}}}',
                startCursor:
                    'marketplace {mediaChannels {pageInfo {startCursor}}}',
                endCursor: 'marketplace {mediaChannels {pageInfo {endCursor}}}',
            },
        },
        campaignTemplates: {
            edges: {
                cursor: 'marketplace {campaignTemplates {edges {cursor}}}',
                node: {
                    id: 'marketplace {campaignTemplates {edges {node {id}}}}',
                    creationDate:
                        'marketplace {campaignTemplates {edges {node {creationDate}}}}',
                    lastChangeDate:
                        'marketplace {campaignTemplates {edges {node {lastChangeDate}}}}',
                    name:
                        'marketplace {campaignTemplates {edges {node {name}}}}',
                    description:
                        'marketplace {campaignTemplates {edges {node {description}}}}',
                    platform:
                        'marketplace {campaignTemplates {edges {node {platform}}}}',
                    remoteId:
                        'marketplace {campaignTemplates {edges {node {remoteId}}}}',
                    systemStatus:
                        'marketplace {campaignTemplates {edges {node {systemStatus}}}}',
                    errors:
                        'marketplace {campaignTemplates {edges {node {errors}}}}',
                },
            },
            pageInfo: {
                hasNextPage:
                    'marketplace {campaignTemplates {pageInfo {hasNextPage}}}',
                hasPreviousPage:
                    'marketplace {campaignTemplates {pageInfo {hasPreviousPage}}}',
                startCursor:
                    'marketplace {campaignTemplates {pageInfo {startCursor}}}',
                endCursor:
                    'marketplace {campaignTemplates {pageInfo {endCursor}}}',
            },
        },
        vendors: {
            edges: {
                cursor: 'marketplace {vendors {edges {cursor}}}',
                node: {
                    id: 'marketplace {vendors {edges {node {id}}}}',
                    creationDate:
                        'marketplace {vendors {edges {node {creationDate}}}}',
                    lastChangeDate:
                        'marketplace {vendors {edges {node {lastChangeDate}}}}',
                    name: 'marketplace {vendors {edges {node {name}}}}',
                    systemStatus:
                        'marketplace {vendors {edges {node {systemStatus}}}}',
                    errors: 'marketplace {vendors {edges {node {errors}}}}',
                },
            },
            pageInfo: {
                hasNextPage: 'marketplace {vendors {pageInfo {hasNextPage}}}',
                hasPreviousPage:
                    'marketplace {vendors {pageInfo {hasPreviousPage}}}',
                startCursor: 'marketplace {vendors {pageInfo {startCursor}}}',
                endCursor: 'marketplace {vendors {pageInfo {endCursor}}}',
            },
        },
        vendorTokens: {
            edges: {
                cursor: 'marketplace {vendorTokens {edges {cursor}}}',
                node: {
                    id: 'marketplace {vendorTokens {edges {node {id}}}}',
                    creationDate:
                        'marketplace {vendorTokens {edges {node {creationDate}}}}',
                    lastChangeDate:
                        'marketplace {vendorTokens {edges {node {lastChangeDate}}}}',
                    token: 'marketplace {vendorTokens {edges {node {token}}}}',
                },
            },
            pageInfo: {
                hasNextPage:
                    'marketplace {vendorTokens {pageInfo {hasNextPage}}}',
                hasPreviousPage:
                    'marketplace {vendorTokens {pageInfo {hasPreviousPage}}}',
                startCursor:
                    'marketplace {vendorTokens {pageInfo {startCursor}}}',
                endCursor: 'marketplace {vendorTokens {pageInfo {endCursor}}}',
            },
        },
        systemStatus: 'marketplace {systemStatus}',
        errors: 'marketplace {errors}',
        creativeTemplates: {
            edges: {
                cursor: 'marketplace {creativeTemplates {edges {cursor}}}',
                node: {
                    id: 'marketplace {creativeTemplates {edges {node {id}}}}',
                    creationDate:
                        'marketplace {creativeTemplates {edges {node {creationDate}}}}',
                    lastChangeDate:
                        'marketplace {creativeTemplates {edges {node {lastChangeDate}}}}',
                    name:
                        'marketplace {creativeTemplates {edges {node {name}}}}',
                    height:
                        'marketplace {creativeTemplates {edges {node {height}}}}',
                    width:
                        'marketplace {creativeTemplates {edges {node {width}}}}',
                    systemStatus:
                        'marketplace {creativeTemplates {edges {node {systemStatus}}}}',
                    errors:
                        'marketplace {creativeTemplates {edges {node {errors}}}}',
                },
            },
            pageInfo: {
                hasNextPage:
                    'marketplace {creativeTemplates {pageInfo {hasNextPage}}}',
                hasPreviousPage:
                    'marketplace {creativeTemplates {pageInfo {hasPreviousPage}}}',
                startCursor:
                    'marketplace {creativeTemplates {pageInfo {startCursor}}}',
                endCursor:
                    'marketplace {creativeTemplates {pageInfo {endCursor}}}',
            },
        },
    },
    vendorTokens: {
        edges: {
            cursor: 'vendorTokens {edges {cursor}}',
            node: {
                id: 'vendorTokens {edges {node {id}}}',
                creationDate: 'vendorTokens {edges {node {creationDate}}}',
                lastChangeDate: 'vendorTokens {edges {node {lastChangeDate}}}',
                marketplace: {
                    id: 'vendorTokens {edges {node {marketplace {id}}}}',
                    creationDate:
                        'vendorTokens {edges {node {marketplace {creationDate}}}}',
                    lastChangeDate:
                        'vendorTokens {edges {node {marketplace {lastChangeDate}}}}',
                    name: 'vendorTokens {edges {node {marketplace {name}}}}',
                    systemStatus:
                        'vendorTokens {edges {node {marketplace {systemStatus}}}}',
                    errors:
                        'vendorTokens {edges {node {marketplace {errors}}}}',
                },
                vendor: {
                    id: 'vendorTokens {edges {node {vendor {id}}}}',
                    creationDate:
                        'vendorTokens {edges {node {vendor {creationDate}}}}',
                    lastChangeDate:
                        'vendorTokens {edges {node {vendor {lastChangeDate}}}}',
                    name: 'vendorTokens {edges {node {vendor {name}}}}',
                    systemStatus:
                        'vendorTokens {edges {node {vendor {systemStatus}}}}',
                    errors: 'vendorTokens {edges {node {vendor {errors}}}}',
                },
                token: 'vendorTokens {edges {node {token}}}',
            },
        },
        pageInfo: {
            hasNextPage: 'vendorTokens {pageInfo {hasNextPage}}',
            hasPreviousPage: 'vendorTokens {pageInfo {hasPreviousPage}}',
            startCursor: 'vendorTokens {pageInfo {startCursor}}',
            endCursor: 'vendorTokens {pageInfo {endCursor}}',
        },
    },
    products: {
        edges: {
            cursor: 'products {edges {cursor}}',
            node: {
                id: 'products {edges {node {id}}}',
                creationDate: 'products {edges {node {creationDate}}}',
                lastChangeDate: 'products {edges {node {lastChangeDate}}}',
                name: 'products {edges {node {name}}}',
                sku: 'products {edges {node {sku}}}',
                remoteState: 'products {edges {node {remoteState}}}',
                marketingCampaigns: {},
                catalog: {
                    id: 'products {edges {node {catalog {id}}}}',
                    name: 'products {edges {node {catalog {name}}}}',
                    catalogType:
                        'products {edges {node {catalog {catalogType}}}}',
                    creationDate:
                        'products {edges {node {catalog {creationDate}}}}',
                    lastChangeDate:
                        'products {edges {node {catalog {lastChangeDate}}}}',
                    remoteId: 'products {edges {node {catalog {remoteId}}}}',
                    systemStatus:
                        'products {edges {node {catalog {systemStatus}}}}',
                    remoteState:
                        'products {edges {node {catalog {remoteState}}}}',
                    dataFeedId:
                        'products {edges {node {catalog {dataFeedId}}}}',
                    errors: 'products {edges {node {catalog {errors}}}}',
                },
                metadata: 'products {edges {node {metadata}}}',
                vendor: {
                    id: 'products {edges {node {vendor {id}}}}',
                    creationDate:
                        'products {edges {node {vendor {creationDate}}}}',
                    lastChangeDate:
                        'products {edges {node {vendor {lastChangeDate}}}}',
                    name: 'products {edges {node {vendor {name}}}}',
                    systemStatus:
                        'products {edges {node {vendor {systemStatus}}}}',
                    errors: 'products {edges {node {vendor {errors}}}}',
                },
                systemStatus: 'products {edges {node {systemStatus}}}',
                errors: 'products {edges {node {errors}}}',
                warnings: 'products {edges {node {warnings}}}',
            },
        },
        pageInfo: {
            hasNextPage: 'products {pageInfo {hasNextPage}}',
            hasPreviousPage: 'products {pageInfo {hasPreviousPage}}',
            startCursor: 'products {pageInfo {startCursor}}',
            endCursor: 'products {pageInfo {endCursor}}',
        },
    },
    systemStatus: 'systemStatus',
    errors: 'errors',
};
export type VendorTokenFields = {
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
export const VendorTokenFields: VendorTokenFields = {
    id: 'id',
    creationDate: 'creationDate',
    lastChangeDate: 'lastChangeDate',
    marketplace: {
        id: 'marketplace {id}',
        creationDate: 'marketplace {creationDate}',
        lastChangeDate: 'marketplace {lastChangeDate}',
        name: 'marketplace {name}',
        organization: {
            id: 'marketplace {organization {id}}',
            creationDate: 'marketplace {organization {creationDate}}',
            lastChangeDate: 'marketplace {organization {lastChangeDate}}',
            users: {
                edges: {
                    cursor:
                        'marketplace {organization {users {edges {cursor}}}}',
                },
                pageInfo: {
                    hasNextPage:
                        'marketplace {organization {users {pageInfo {hasNextPage}}}}',
                    hasPreviousPage:
                        'marketplace {organization {users {pageInfo {hasPreviousPage}}}}',
                    startCursor:
                        'marketplace {organization {users {pageInfo {startCursor}}}}',
                    endCursor:
                        'marketplace {organization {users {pageInfo {endCursor}}}}',
                },
            },
            marketplaces: {
                edges: {
                    cursor:
                        'marketplace {organization {marketplaces {edges {cursor}}}}',
                },
                pageInfo: {
                    hasNextPage:
                        'marketplace {organization {marketplaces {pageInfo {hasNextPage}}}}',
                    hasPreviousPage:
                        'marketplace {organization {marketplaces {pageInfo {hasPreviousPage}}}}',
                    startCursor:
                        'marketplace {organization {marketplaces {pageInfo {startCursor}}}}',
                    endCursor:
                        'marketplace {organization {marketplaces {pageInfo {endCursor}}}}',
                },
            },
            name: 'marketplace {organization {name}}',
            tier: 'marketplace {organization {tier}}',
            systemStatus: 'marketplace {organization {systemStatus}}',
            errors: 'marketplace {organization {errors}}',
        },
        mediaChannels: {
            edges: {
                cursor: 'marketplace {mediaChannels {edges {cursor}}}',
                node: {
                    id: 'marketplace {mediaChannels {edges {node {id}}}}',
                    creationDate:
                        'marketplace {mediaChannels {edges {node {creationDate}}}}',
                    lastChangeDate:
                        'marketplace {mediaChannels {edges {node {lastChangeDate}}}}',
                    name: 'marketplace {mediaChannels {edges {node {name}}}}',
                    platform:
                        'marketplace {mediaChannels {edges {node {platform}}}}',
                    remoteId:
                        'marketplace {mediaChannels {edges {node {remoteId}}}}',
                    remoteState:
                        'marketplace {mediaChannels {edges {node {remoteState}}}}',
                    currency:
                        'marketplace {mediaChannels {edges {node {currency}}}}',
                    currencySymbol:
                        'marketplace {mediaChannels {edges {node {currencySymbol}}}}',
                    currencyOffset:
                        'marketplace {mediaChannels {edges {node {currencyOffset}}}}',
                    timezone:
                        'marketplace {mediaChannels {edges {node {timezone}}}}',
                    tokenStatus:
                        'marketplace {mediaChannels {edges {node {tokenStatus}}}}',
                    systemStatus:
                        'marketplace {mediaChannels {edges {node {systemStatus}}}}',
                    errors:
                        'marketplace {mediaChannels {edges {node {errors}}}}',
                },
            },
            pageInfo: {
                hasNextPage:
                    'marketplace {mediaChannels {pageInfo {hasNextPage}}}',
                hasPreviousPage:
                    'marketplace {mediaChannels {pageInfo {hasPreviousPage}}}',
                startCursor:
                    'marketplace {mediaChannels {pageInfo {startCursor}}}',
                endCursor: 'marketplace {mediaChannels {pageInfo {endCursor}}}',
            },
        },
        campaignTemplates: {
            edges: {
                cursor: 'marketplace {campaignTemplates {edges {cursor}}}',
                node: {
                    id: 'marketplace {campaignTemplates {edges {node {id}}}}',
                    creationDate:
                        'marketplace {campaignTemplates {edges {node {creationDate}}}}',
                    lastChangeDate:
                        'marketplace {campaignTemplates {edges {node {lastChangeDate}}}}',
                    name:
                        'marketplace {campaignTemplates {edges {node {name}}}}',
                    description:
                        'marketplace {campaignTemplates {edges {node {description}}}}',
                    platform:
                        'marketplace {campaignTemplates {edges {node {platform}}}}',
                    remoteId:
                        'marketplace {campaignTemplates {edges {node {remoteId}}}}',
                    systemStatus:
                        'marketplace {campaignTemplates {edges {node {systemStatus}}}}',
                    errors:
                        'marketplace {campaignTemplates {edges {node {errors}}}}',
                },
            },
            pageInfo: {
                hasNextPage:
                    'marketplace {campaignTemplates {pageInfo {hasNextPage}}}',
                hasPreviousPage:
                    'marketplace {campaignTemplates {pageInfo {hasPreviousPage}}}',
                startCursor:
                    'marketplace {campaignTemplates {pageInfo {startCursor}}}',
                endCursor:
                    'marketplace {campaignTemplates {pageInfo {endCursor}}}',
            },
        },
        vendors: {
            edges: {
                cursor: 'marketplace {vendors {edges {cursor}}}',
                node: {
                    id: 'marketplace {vendors {edges {node {id}}}}',
                    creationDate:
                        'marketplace {vendors {edges {node {creationDate}}}}',
                    lastChangeDate:
                        'marketplace {vendors {edges {node {lastChangeDate}}}}',
                    name: 'marketplace {vendors {edges {node {name}}}}',
                    systemStatus:
                        'marketplace {vendors {edges {node {systemStatus}}}}',
                    errors: 'marketplace {vendors {edges {node {errors}}}}',
                },
            },
            pageInfo: {
                hasNextPage: 'marketplace {vendors {pageInfo {hasNextPage}}}',
                hasPreviousPage:
                    'marketplace {vendors {pageInfo {hasPreviousPage}}}',
                startCursor: 'marketplace {vendors {pageInfo {startCursor}}}',
                endCursor: 'marketplace {vendors {pageInfo {endCursor}}}',
            },
        },
        vendorTokens: {
            edges: {
                cursor: 'marketplace {vendorTokens {edges {cursor}}}',
                node: {
                    id: 'marketplace {vendorTokens {edges {node {id}}}}',
                    creationDate:
                        'marketplace {vendorTokens {edges {node {creationDate}}}}',
                    lastChangeDate:
                        'marketplace {vendorTokens {edges {node {lastChangeDate}}}}',
                    token: 'marketplace {vendorTokens {edges {node {token}}}}',
                },
            },
            pageInfo: {
                hasNextPage:
                    'marketplace {vendorTokens {pageInfo {hasNextPage}}}',
                hasPreviousPage:
                    'marketplace {vendorTokens {pageInfo {hasPreviousPage}}}',
                startCursor:
                    'marketplace {vendorTokens {pageInfo {startCursor}}}',
                endCursor: 'marketplace {vendorTokens {pageInfo {endCursor}}}',
            },
        },
        systemStatus: 'marketplace {systemStatus}',
        errors: 'marketplace {errors}',
        creativeTemplates: {
            edges: {
                cursor: 'marketplace {creativeTemplates {edges {cursor}}}',
                node: {
                    id: 'marketplace {creativeTemplates {edges {node {id}}}}',
                    creationDate:
                        'marketplace {creativeTemplates {edges {node {creationDate}}}}',
                    lastChangeDate:
                        'marketplace {creativeTemplates {edges {node {lastChangeDate}}}}',
                    name:
                        'marketplace {creativeTemplates {edges {node {name}}}}',
                    height:
                        'marketplace {creativeTemplates {edges {node {height}}}}',
                    width:
                        'marketplace {creativeTemplates {edges {node {width}}}}',
                    systemStatus:
                        'marketplace {creativeTemplates {edges {node {systemStatus}}}}',
                    errors:
                        'marketplace {creativeTemplates {edges {node {errors}}}}',
                },
            },
            pageInfo: {
                hasNextPage:
                    'marketplace {creativeTemplates {pageInfo {hasNextPage}}}',
                hasPreviousPage:
                    'marketplace {creativeTemplates {pageInfo {hasPreviousPage}}}',
                startCursor:
                    'marketplace {creativeTemplates {pageInfo {startCursor}}}',
                endCursor:
                    'marketplace {creativeTemplates {pageInfo {endCursor}}}',
            },
        },
    },
    vendor: {
        id: 'vendor {id}',
        creationDate: 'vendor {creationDate}',
        lastChangeDate: 'vendor {lastChangeDate}',
        name: 'vendor {name}',
        marketplace: {
            id: 'vendor {marketplace {id}}',
            creationDate: 'vendor {marketplace {creationDate}}',
            lastChangeDate: 'vendor {marketplace {lastChangeDate}}',
            name: 'vendor {marketplace {name}}',
            organization: {
                id: 'vendor {marketplace {organization {id}}}',
                creationDate:
                    'vendor {marketplace {organization {creationDate}}}',
                lastChangeDate:
                    'vendor {marketplace {organization {lastChangeDate}}}',
                users: {},
                marketplaces: {},
                name: 'vendor {marketplace {organization {name}}}',
                tier: 'vendor {marketplace {organization {tier}}}',
                systemStatus:
                    'vendor {marketplace {organization {systemStatus}}}',
                errors: 'vendor {marketplace {organization {errors}}}',
            },
            mediaChannels: {
                edges: {
                    cursor:
                        'vendor {marketplace {mediaChannels {edges {cursor}}}}',
                },
                pageInfo: {
                    hasNextPage:
                        'vendor {marketplace {mediaChannels {pageInfo {hasNextPage}}}}',
                    hasPreviousPage:
                        'vendor {marketplace {mediaChannels {pageInfo {hasPreviousPage}}}}',
                    startCursor:
                        'vendor {marketplace {mediaChannels {pageInfo {startCursor}}}}',
                    endCursor:
                        'vendor {marketplace {mediaChannels {pageInfo {endCursor}}}}',
                },
            },
            campaignTemplates: {
                edges: {
                    cursor:
                        'vendor {marketplace {campaignTemplates {edges {cursor}}}}',
                },
                pageInfo: {
                    hasNextPage:
                        'vendor {marketplace {campaignTemplates {pageInfo {hasNextPage}}}}',
                    hasPreviousPage:
                        'vendor {marketplace {campaignTemplates {pageInfo {hasPreviousPage}}}}',
                    startCursor:
                        'vendor {marketplace {campaignTemplates {pageInfo {startCursor}}}}',
                    endCursor:
                        'vendor {marketplace {campaignTemplates {pageInfo {endCursor}}}}',
                },
            },
            vendors: {
                edges: {
                    cursor: 'vendor {marketplace {vendors {edges {cursor}}}}',
                },
                pageInfo: {
                    hasNextPage:
                        'vendor {marketplace {vendors {pageInfo {hasNextPage}}}}',
                    hasPreviousPage:
                        'vendor {marketplace {vendors {pageInfo {hasPreviousPage}}}}',
                    startCursor:
                        'vendor {marketplace {vendors {pageInfo {startCursor}}}}',
                    endCursor:
                        'vendor {marketplace {vendors {pageInfo {endCursor}}}}',
                },
            },
            vendorTokens: {
                edges: {
                    cursor:
                        'vendor {marketplace {vendorTokens {edges {cursor}}}}',
                },
                pageInfo: {
                    hasNextPage:
                        'vendor {marketplace {vendorTokens {pageInfo {hasNextPage}}}}',
                    hasPreviousPage:
                        'vendor {marketplace {vendorTokens {pageInfo {hasPreviousPage}}}}',
                    startCursor:
                        'vendor {marketplace {vendorTokens {pageInfo {startCursor}}}}',
                    endCursor:
                        'vendor {marketplace {vendorTokens {pageInfo {endCursor}}}}',
                },
            },
            systemStatus: 'vendor {marketplace {systemStatus}}',
            errors: 'vendor {marketplace {errors}}',
            creativeTemplates: {
                edges: {
                    cursor:
                        'vendor {marketplace {creativeTemplates {edges {cursor}}}}',
                },
                pageInfo: {
                    hasNextPage:
                        'vendor {marketplace {creativeTemplates {pageInfo {hasNextPage}}}}',
                    hasPreviousPage:
                        'vendor {marketplace {creativeTemplates {pageInfo {hasPreviousPage}}}}',
                    startCursor:
                        'vendor {marketplace {creativeTemplates {pageInfo {startCursor}}}}',
                    endCursor:
                        'vendor {marketplace {creativeTemplates {pageInfo {endCursor}}}}',
                },
            },
        },
        vendorTokens: {
            edges: {
                cursor: 'vendor {vendorTokens {edges {cursor}}}',
                node: {
                    id: 'vendor {vendorTokens {edges {node {id}}}}',
                    creationDate:
                        'vendor {vendorTokens {edges {node {creationDate}}}}',
                    lastChangeDate:
                        'vendor {vendorTokens {edges {node {lastChangeDate}}}}',
                    token: 'vendor {vendorTokens {edges {node {token}}}}',
                },
            },
            pageInfo: {
                hasNextPage: 'vendor {vendorTokens {pageInfo {hasNextPage}}}',
                hasPreviousPage:
                    'vendor {vendorTokens {pageInfo {hasPreviousPage}}}',
                startCursor: 'vendor {vendorTokens {pageInfo {startCursor}}}',
                endCursor: 'vendor {vendorTokens {pageInfo {endCursor}}}',
            },
        },
        products: {
            edges: {
                cursor: 'vendor {products {edges {cursor}}}',
                node: {
                    id: 'vendor {products {edges {node {id}}}}',
                    creationDate:
                        'vendor {products {edges {node {creationDate}}}}',
                    lastChangeDate:
                        'vendor {products {edges {node {lastChangeDate}}}}',
                    name: 'vendor {products {edges {node {name}}}}',
                    sku: 'vendor {products {edges {node {sku}}}}',
                    remoteState:
                        'vendor {products {edges {node {remoteState}}}}',
                    metadata: 'vendor {products {edges {node {metadata}}}}',
                    systemStatus:
                        'vendor {products {edges {node {systemStatus}}}}',
                    errors: 'vendor {products {edges {node {errors}}}}',
                    warnings: 'vendor {products {edges {node {warnings}}}}',
                },
            },
            pageInfo: {
                hasNextPage: 'vendor {products {pageInfo {hasNextPage}}}',
                hasPreviousPage:
                    'vendor {products {pageInfo {hasPreviousPage}}}',
                startCursor: 'vendor {products {pageInfo {startCursor}}}',
                endCursor: 'vendor {products {pageInfo {endCursor}}}',
            },
        },
        systemStatus: 'vendor {systemStatus}',
        errors: 'vendor {errors}',
    },
    token: 'token',
};
export type MarketingAdFields = {
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
export const MarketingAdFields: MarketingAdFields = {
    id: 'id',
    creationDate: 'creationDate',
    lastChangeDate: 'lastChangeDate',
    remoteId: 'remoteId',
    systemStatus: 'systemStatus',
    errors: 'errors',
    preview: 'preview',
    resultsSource: 'resultsSource',
    results: {
        edges: {
            cursor: 'results {edges {cursor}}',
            node: {
                id: 'results {edges {node {id}}}',
                creationDate: 'results {edges {node {creationDate}}}',
                lastChangeDate: 'results {edges {node {lastChangeDate}}}',
                date: 'results {edges {node {date}}}',
                analytics: {
                    results: 'results {edges {node {analytics {results}}}}',
                    impressions:
                        'results {edges {node {analytics {impressions}}}}',
                    clicks: 'results {edges {node {analytics {clicks}}}}',
                    spend: 'results {edges {node {analytics {spend}}}}',
                    purchases: 'results {edges {node {analytics {purchases}}}}',
                    purchasesValue:
                        'results {edges {node {analytics {purchasesValue}}}}',
                },
                type: 'results {edges {node {type}}}',
                resource: {
                    id: 'results {edges {node {resource {id}}}}',
                    creationDate:
                        'results {edges {node {resource {creationDate}}}}',
                    lastChangeDate:
                        'results {edges {node {resource {lastChangeDate}}}}',
                },
                vendor: {
                    id: 'results {edges {node {vendor {id}}}}',
                    creationDate:
                        'results {edges {node {vendor {creationDate}}}}',
                    lastChangeDate:
                        'results {edges {node {vendor {lastChangeDate}}}}',
                    name: 'results {edges {node {vendor {name}}}}',
                    systemStatus:
                        'results {edges {node {vendor {systemStatus}}}}',
                    errors: 'results {edges {node {vendor {errors}}}}',
                },
            },
        },
        pageInfo: {
            hasNextPage: 'results {pageInfo {hasNextPage}}',
            hasPreviousPage: 'results {pageInfo {hasPreviousPage}}',
            startCursor: 'results {pageInfo {startCursor}}',
            endCursor: 'results {pageInfo {endCursor}}',
        },
    },
    marketingCampaign: {
        id: 'marketingCampaign {id}',
        creationDate: 'marketingCampaign {creationDate}',
        lastChangeDate: 'marketingCampaign {lastChangeDate}',
        name: 'marketingCampaign {name}',
        status: 'marketingCampaign {status}',
        marketingAds: {
            edges: {
                cursor: 'marketingCampaign {marketingAds {edges {cursor}}}',
                node: {
                    id: 'marketingCampaign {marketingAds {edges {node {id}}}}',
                    creationDate:
                        'marketingCampaign {marketingAds {edges {node {creationDate}}}}',
                    lastChangeDate:
                        'marketingCampaign {marketingAds {edges {node {lastChangeDate}}}}',
                    remoteId:
                        'marketingCampaign {marketingAds {edges {node {remoteId}}}}',
                    systemStatus:
                        'marketingCampaign {marketingAds {edges {node {systemStatus}}}}',
                    errors:
                        'marketingCampaign {marketingAds {edges {node {errors}}}}',
                    preview:
                        'marketingCampaign {marketingAds {edges {node {preview}}}}',
                    resultsSource:
                        'marketingCampaign {marketingAds {edges {node {resultsSource}}}}',
                },
            },
            pageInfo: {
                hasNextPage:
                    'marketingCampaign {marketingAds {pageInfo {hasNextPage}}}',
                hasPreviousPage:
                    'marketingCampaign {marketingAds {pageInfo {hasPreviousPage}}}',
                startCursor:
                    'marketingCampaign {marketingAds {pageInfo {startCursor}}}',
                endCursor:
                    'marketingCampaign {marketingAds {pageInfo {endCursor}}}',
            },
        },
        products: {
            edges: {
                cursor: 'marketingCampaign {products {edges {cursor}}}',
                node: {
                    id: 'marketingCampaign {products {edges {node {id}}}}',
                    creationDate:
                        'marketingCampaign {products {edges {node {creationDate}}}}',
                    lastChangeDate:
                        'marketingCampaign {products {edges {node {lastChangeDate}}}}',
                    name: 'marketingCampaign {products {edges {node {name}}}}',
                    sku: 'marketingCampaign {products {edges {node {sku}}}}',
                    remoteState:
                        'marketingCampaign {products {edges {node {remoteState}}}}',
                    metadata:
                        'marketingCampaign {products {edges {node {metadata}}}}',
                    systemStatus:
                        'marketingCampaign {products {edges {node {systemStatus}}}}',
                    errors:
                        'marketingCampaign {products {edges {node {errors}}}}',
                    warnings:
                        'marketingCampaign {products {edges {node {warnings}}}}',
                },
            },
            pageInfo: {
                hasNextPage:
                    'marketingCampaign {products {pageInfo {hasNextPage}}}',
                hasPreviousPage:
                    'marketingCampaign {products {pageInfo {hasPreviousPage}}}',
                startCursor:
                    'marketingCampaign {products {pageInfo {startCursor}}}',
                endCursor:
                    'marketingCampaign {products {pageInfo {endCursor}}}',
            },
        },
        vendor: {
            id: 'marketingCampaign {vendor {id}}',
            creationDate: 'marketingCampaign {vendor {creationDate}}',
            lastChangeDate: 'marketingCampaign {vendor {lastChangeDate}}',
            name: 'marketingCampaign {vendor {name}}',
            marketplace: {
                id: 'marketingCampaign {vendor {marketplace {id}}}',
                creationDate:
                    'marketingCampaign {vendor {marketplace {creationDate}}}',
                lastChangeDate:
                    'marketingCampaign {vendor {marketplace {lastChangeDate}}}',
                name: 'marketingCampaign {vendor {marketplace {name}}}',
                organization: {
                    id:
                        'marketingCampaign {vendor {marketplace {organization {id}}}}',
                    creationDate:
                        'marketingCampaign {vendor {marketplace {organization {creationDate}}}}',
                    lastChangeDate:
                        'marketingCampaign {vendor {marketplace {organization {lastChangeDate}}}}',
                    name:
                        'marketingCampaign {vendor {marketplace {organization {name}}}}',
                    tier:
                        'marketingCampaign {vendor {marketplace {organization {tier}}}}',
                    systemStatus:
                        'marketingCampaign {vendor {marketplace {organization {systemStatus}}}}',
                    errors:
                        'marketingCampaign {vendor {marketplace {organization {errors}}}}',
                },
                mediaChannels: {},
                campaignTemplates: {},
                vendors: {},
                vendorTokens: {},
                systemStatus:
                    'marketingCampaign {vendor {marketplace {systemStatus}}}',
                errors: 'marketingCampaign {vendor {marketplace {errors}}}',
                creativeTemplates: {},
            },
            vendorTokens: {
                edges: {
                    cursor:
                        'marketingCampaign {vendor {vendorTokens {edges {cursor}}}}',
                },
                pageInfo: {
                    hasNextPage:
                        'marketingCampaign {vendor {vendorTokens {pageInfo {hasNextPage}}}}',
                    hasPreviousPage:
                        'marketingCampaign {vendor {vendorTokens {pageInfo {hasPreviousPage}}}}',
                    startCursor:
                        'marketingCampaign {vendor {vendorTokens {pageInfo {startCursor}}}}',
                    endCursor:
                        'marketingCampaign {vendor {vendorTokens {pageInfo {endCursor}}}}',
                },
            },
            products: {
                edges: {
                    cursor:
                        'marketingCampaign {vendor {products {edges {cursor}}}}',
                },
                pageInfo: {
                    hasNextPage:
                        'marketingCampaign {vendor {products {pageInfo {hasNextPage}}}}',
                    hasPreviousPage:
                        'marketingCampaign {vendor {products {pageInfo {hasPreviousPage}}}}',
                    startCursor:
                        'marketingCampaign {vendor {products {pageInfo {startCursor}}}}',
                    endCursor:
                        'marketingCampaign {vendor {products {pageInfo {endCursor}}}}',
                },
            },
            systemStatus: 'marketingCampaign {vendor {systemStatus}}',
            errors: 'marketingCampaign {vendor {errors}}',
        },
        catalog: {
            id: 'marketingCampaign {catalog {id}}',
            name: 'marketingCampaign {catalog {name}}',
            catalogType: 'marketingCampaign {catalog {catalogType}}',
            creationDate: 'marketingCampaign {catalog {creationDate}}',
            lastChangeDate: 'marketingCampaign {catalog {lastChangeDate}}',
            remoteId: 'marketingCampaign {catalog {remoteId}}',
            systemStatus: 'marketingCampaign {catalog {systemStatus}}',
            remoteState: 'marketingCampaign {catalog {remoteState}}',
            dataFeedId: 'marketingCampaign {catalog {dataFeedId}}',
            errors: 'marketingCampaign {catalog {errors}}',
            mediaChannel: {
                id: 'marketingCampaign {catalog {mediaChannel {id}}}',
                creationDate:
                    'marketingCampaign {catalog {mediaChannel {creationDate}}}',
                lastChangeDate:
                    'marketingCampaign {catalog {mediaChannel {lastChangeDate}}}',
                name: 'marketingCampaign {catalog {mediaChannel {name}}}',
                platform:
                    'marketingCampaign {catalog {mediaChannel {platform}}}',
                remoteId:
                    'marketingCampaign {catalog {mediaChannel {remoteId}}}',
                remoteState:
                    'marketingCampaign {catalog {mediaChannel {remoteState}}}',
                currency:
                    'marketingCampaign {catalog {mediaChannel {currency}}}',
                currencySymbol:
                    'marketingCampaign {catalog {mediaChannel {currencySymbol}}}',
                currencyOffset:
                    'marketingCampaign {catalog {mediaChannel {currencyOffset}}}',
                timezone:
                    'marketingCampaign {catalog {mediaChannel {timezone}}}',
                tokenStatus:
                    'marketingCampaign {catalog {mediaChannel {tokenStatus}}}',
                systemStatus:
                    'marketingCampaign {catalog {mediaChannel {systemStatus}}}',
                errors: 'marketingCampaign {catalog {mediaChannel {errors}}}',
                catalogs: {},
                marketplace: {
                    id:
                        'marketingCampaign {catalog {mediaChannel {marketplace {id}}}}',
                    creationDate:
                        'marketingCampaign {catalog {mediaChannel {marketplace {creationDate}}}}',
                    lastChangeDate:
                        'marketingCampaign {catalog {mediaChannel {marketplace {lastChangeDate}}}}',
                    name:
                        'marketingCampaign {catalog {mediaChannel {marketplace {name}}}}',
                    systemStatus:
                        'marketingCampaign {catalog {mediaChannel {marketplace {systemStatus}}}}',
                    errors:
                        'marketingCampaign {catalog {mediaChannel {marketplace {errors}}}}',
                },
            },
            products: {
                edges: {
                    cursor:
                        'marketingCampaign {catalog {products {edges {cursor}}}}',
                },
                pageInfo: {
                    hasNextPage:
                        'marketingCampaign {catalog {products {pageInfo {hasNextPage}}}}',
                    hasPreviousPage:
                        'marketingCampaign {catalog {products {pageInfo {hasPreviousPage}}}}',
                    startCursor:
                        'marketingCampaign {catalog {products {pageInfo {startCursor}}}}',
                    endCursor:
                        'marketingCampaign {catalog {products {pageInfo {endCursor}}}}',
                },
            },
        },
        campaignTemplate: {
            id: 'marketingCampaign {campaignTemplate {id}}',
            creationDate: 'marketingCampaign {campaignTemplate {creationDate}}',
            lastChangeDate:
                'marketingCampaign {campaignTemplate {lastChangeDate}}',
            name: 'marketingCampaign {campaignTemplate {name}}',
            description: 'marketingCampaign {campaignTemplate {description}}',
            platform: 'marketingCampaign {campaignTemplate {platform}}',
            remoteId: 'marketingCampaign {campaignTemplate {remoteId}}',
            systemStatus: 'marketingCampaign {campaignTemplate {systemStatus}}',
            errors: 'marketingCampaign {campaignTemplate {errors}}',
            marketplace: {
                id: 'marketingCampaign {campaignTemplate {marketplace {id}}}',
                creationDate:
                    'marketingCampaign {campaignTemplate {marketplace {creationDate}}}',
                lastChangeDate:
                    'marketingCampaign {campaignTemplate {marketplace {lastChangeDate}}}',
                name:
                    'marketingCampaign {campaignTemplate {marketplace {name}}}',
                organization: {
                    id:
                        'marketingCampaign {campaignTemplate {marketplace {organization {id}}}}',
                    creationDate:
                        'marketingCampaign {campaignTemplate {marketplace {organization {creationDate}}}}',
                    lastChangeDate:
                        'marketingCampaign {campaignTemplate {marketplace {organization {lastChangeDate}}}}',
                    name:
                        'marketingCampaign {campaignTemplate {marketplace {organization {name}}}}',
                    tier:
                        'marketingCampaign {campaignTemplate {marketplace {organization {tier}}}}',
                    systemStatus:
                        'marketingCampaign {campaignTemplate {marketplace {organization {systemStatus}}}}',
                    errors:
                        'marketingCampaign {campaignTemplate {marketplace {organization {errors}}}}',
                },
                mediaChannels: {},
                campaignTemplates: {},
                vendors: {},
                vendorTokens: {},
                systemStatus:
                    'marketingCampaign {campaignTemplate {marketplace {systemStatus}}}',
                errors:
                    'marketingCampaign {campaignTemplate {marketplace {errors}}}',
                creativeTemplates: {},
            },
            marketingCampaigns: {
                edges: {
                    cursor:
                        'marketingCampaign {campaignTemplate {marketingCampaigns {edges {cursor}}}}',
                },
                pageInfo: {
                    hasNextPage:
                        'marketingCampaign {campaignTemplate {marketingCampaigns {pageInfo {hasNextPage}}}}',
                    hasPreviousPage:
                        'marketingCampaign {campaignTemplate {marketingCampaigns {pageInfo {hasPreviousPage}}}}',
                    startCursor:
                        'marketingCampaign {campaignTemplate {marketingCampaigns {pageInfo {startCursor}}}}',
                    endCursor:
                        'marketingCampaign {campaignTemplate {marketingCampaigns {pageInfo {endCursor}}}}',
                },
            },
        },
        mediaChannel: {
            id: 'marketingCampaign {mediaChannel {id}}',
            creationDate: 'marketingCampaign {mediaChannel {creationDate}}',
            lastChangeDate: 'marketingCampaign {mediaChannel {lastChangeDate}}',
            name: 'marketingCampaign {mediaChannel {name}}',
            platform: 'marketingCampaign {mediaChannel {platform}}',
            remoteId: 'marketingCampaign {mediaChannel {remoteId}}',
            remoteState: 'marketingCampaign {mediaChannel {remoteState}}',
            currency: 'marketingCampaign {mediaChannel {currency}}',
            currencySymbol: 'marketingCampaign {mediaChannel {currencySymbol}}',
            currencyOffset: 'marketingCampaign {mediaChannel {currencyOffset}}',
            timezone: 'marketingCampaign {mediaChannel {timezone}}',
            tokenStatus: 'marketingCampaign {mediaChannel {tokenStatus}}',
            systemStatus: 'marketingCampaign {mediaChannel {systemStatus}}',
            errors: 'marketingCampaign {mediaChannel {errors}}',
            catalogs: {
                edges: {
                    cursor:
                        'marketingCampaign {mediaChannel {catalogs {edges {cursor}}}}',
                },
                pageInfo: {
                    hasNextPage:
                        'marketingCampaign {mediaChannel {catalogs {pageInfo {hasNextPage}}}}',
                    hasPreviousPage:
                        'marketingCampaign {mediaChannel {catalogs {pageInfo {hasPreviousPage}}}}',
                    startCursor:
                        'marketingCampaign {mediaChannel {catalogs {pageInfo {startCursor}}}}',
                    endCursor:
                        'marketingCampaign {mediaChannel {catalogs {pageInfo {endCursor}}}}',
                },
            },
            marketplace: {
                id: 'marketingCampaign {mediaChannel {marketplace {id}}}',
                creationDate:
                    'marketingCampaign {mediaChannel {marketplace {creationDate}}}',
                lastChangeDate:
                    'marketingCampaign {mediaChannel {marketplace {lastChangeDate}}}',
                name: 'marketingCampaign {mediaChannel {marketplace {name}}}',
                organization: {
                    id:
                        'marketingCampaign {mediaChannel {marketplace {organization {id}}}}',
                    creationDate:
                        'marketingCampaign {mediaChannel {marketplace {organization {creationDate}}}}',
                    lastChangeDate:
                        'marketingCampaign {mediaChannel {marketplace {organization {lastChangeDate}}}}',
                    name:
                        'marketingCampaign {mediaChannel {marketplace {organization {name}}}}',
                    tier:
                        'marketingCampaign {mediaChannel {marketplace {organization {tier}}}}',
                    systemStatus:
                        'marketingCampaign {mediaChannel {marketplace {organization {systemStatus}}}}',
                    errors:
                        'marketingCampaign {mediaChannel {marketplace {organization {errors}}}}',
                },
                mediaChannels: {},
                campaignTemplates: {},
                vendors: {},
                vendorTokens: {},
                systemStatus:
                    'marketingCampaign {mediaChannel {marketplace {systemStatus}}}',
                errors:
                    'marketingCampaign {mediaChannel {marketplace {errors}}}',
                creativeTemplates: {},
            },
        },
        results: {
            edges: {
                cursor: 'marketingCampaign {results {edges {cursor}}}',
                node: {
                    id: 'marketingCampaign {results {edges {node {id}}}}',
                    creationDate:
                        'marketingCampaign {results {edges {node {creationDate}}}}',
                    lastChangeDate:
                        'marketingCampaign {results {edges {node {lastChangeDate}}}}',
                    date: 'marketingCampaign {results {edges {node {date}}}}',
                    type: 'marketingCampaign {results {edges {node {type}}}}',
                },
            },
            pageInfo: {
                hasNextPage:
                    'marketingCampaign {results {pageInfo {hasNextPage}}}',
                hasPreviousPage:
                    'marketingCampaign {results {pageInfo {hasPreviousPage}}}',
                startCursor:
                    'marketingCampaign {results {pageInfo {startCursor}}}',
                endCursor: 'marketingCampaign {results {pageInfo {endCursor}}}',
            },
        },
        creativeSpec: 'marketingCampaign {creativeSpec}',
        runTimeSpec: 'marketingCampaign {runTimeSpec}',
        resultsSource: 'marketingCampaign {resultsSource}',
        systemStatus: 'marketingCampaign {systemStatus}',
        errors: 'marketingCampaign {errors}',
    },
    vendor: {
        id: 'vendor {id}',
        creationDate: 'vendor {creationDate}',
        lastChangeDate: 'vendor {lastChangeDate}',
        name: 'vendor {name}',
        marketplace: {
            id: 'vendor {marketplace {id}}',
            creationDate: 'vendor {marketplace {creationDate}}',
            lastChangeDate: 'vendor {marketplace {lastChangeDate}}',
            name: 'vendor {marketplace {name}}',
            organization: {
                id: 'vendor {marketplace {organization {id}}}',
                creationDate:
                    'vendor {marketplace {organization {creationDate}}}',
                lastChangeDate:
                    'vendor {marketplace {organization {lastChangeDate}}}',
                users: {},
                marketplaces: {},
                name: 'vendor {marketplace {organization {name}}}',
                tier: 'vendor {marketplace {organization {tier}}}',
                systemStatus:
                    'vendor {marketplace {organization {systemStatus}}}',
                errors: 'vendor {marketplace {organization {errors}}}',
            },
            mediaChannels: {
                edges: {
                    cursor:
                        'vendor {marketplace {mediaChannels {edges {cursor}}}}',
                },
                pageInfo: {
                    hasNextPage:
                        'vendor {marketplace {mediaChannels {pageInfo {hasNextPage}}}}',
                    hasPreviousPage:
                        'vendor {marketplace {mediaChannels {pageInfo {hasPreviousPage}}}}',
                    startCursor:
                        'vendor {marketplace {mediaChannels {pageInfo {startCursor}}}}',
                    endCursor:
                        'vendor {marketplace {mediaChannels {pageInfo {endCursor}}}}',
                },
            },
            campaignTemplates: {
                edges: {
                    cursor:
                        'vendor {marketplace {campaignTemplates {edges {cursor}}}}',
                },
                pageInfo: {
                    hasNextPage:
                        'vendor {marketplace {campaignTemplates {pageInfo {hasNextPage}}}}',
                    hasPreviousPage:
                        'vendor {marketplace {campaignTemplates {pageInfo {hasPreviousPage}}}}',
                    startCursor:
                        'vendor {marketplace {campaignTemplates {pageInfo {startCursor}}}}',
                    endCursor:
                        'vendor {marketplace {campaignTemplates {pageInfo {endCursor}}}}',
                },
            },
            vendors: {
                edges: {
                    cursor: 'vendor {marketplace {vendors {edges {cursor}}}}',
                },
                pageInfo: {
                    hasNextPage:
                        'vendor {marketplace {vendors {pageInfo {hasNextPage}}}}',
                    hasPreviousPage:
                        'vendor {marketplace {vendors {pageInfo {hasPreviousPage}}}}',
                    startCursor:
                        'vendor {marketplace {vendors {pageInfo {startCursor}}}}',
                    endCursor:
                        'vendor {marketplace {vendors {pageInfo {endCursor}}}}',
                },
            },
            vendorTokens: {
                edges: {
                    cursor:
                        'vendor {marketplace {vendorTokens {edges {cursor}}}}',
                },
                pageInfo: {
                    hasNextPage:
                        'vendor {marketplace {vendorTokens {pageInfo {hasNextPage}}}}',
                    hasPreviousPage:
                        'vendor {marketplace {vendorTokens {pageInfo {hasPreviousPage}}}}',
                    startCursor:
                        'vendor {marketplace {vendorTokens {pageInfo {startCursor}}}}',
                    endCursor:
                        'vendor {marketplace {vendorTokens {pageInfo {endCursor}}}}',
                },
            },
            systemStatus: 'vendor {marketplace {systemStatus}}',
            errors: 'vendor {marketplace {errors}}',
            creativeTemplates: {
                edges: {
                    cursor:
                        'vendor {marketplace {creativeTemplates {edges {cursor}}}}',
                },
                pageInfo: {
                    hasNextPage:
                        'vendor {marketplace {creativeTemplates {pageInfo {hasNextPage}}}}',
                    hasPreviousPage:
                        'vendor {marketplace {creativeTemplates {pageInfo {hasPreviousPage}}}}',
                    startCursor:
                        'vendor {marketplace {creativeTemplates {pageInfo {startCursor}}}}',
                    endCursor:
                        'vendor {marketplace {creativeTemplates {pageInfo {endCursor}}}}',
                },
            },
        },
        vendorTokens: {
            edges: {
                cursor: 'vendor {vendorTokens {edges {cursor}}}',
                node: {
                    id: 'vendor {vendorTokens {edges {node {id}}}}',
                    creationDate:
                        'vendor {vendorTokens {edges {node {creationDate}}}}',
                    lastChangeDate:
                        'vendor {vendorTokens {edges {node {lastChangeDate}}}}',
                    token: 'vendor {vendorTokens {edges {node {token}}}}',
                },
            },
            pageInfo: {
                hasNextPage: 'vendor {vendorTokens {pageInfo {hasNextPage}}}',
                hasPreviousPage:
                    'vendor {vendorTokens {pageInfo {hasPreviousPage}}}',
                startCursor: 'vendor {vendorTokens {pageInfo {startCursor}}}',
                endCursor: 'vendor {vendorTokens {pageInfo {endCursor}}}',
            },
        },
        products: {
            edges: {
                cursor: 'vendor {products {edges {cursor}}}',
                node: {
                    id: 'vendor {products {edges {node {id}}}}',
                    creationDate:
                        'vendor {products {edges {node {creationDate}}}}',
                    lastChangeDate:
                        'vendor {products {edges {node {lastChangeDate}}}}',
                    name: 'vendor {products {edges {node {name}}}}',
                    sku: 'vendor {products {edges {node {sku}}}}',
                    remoteState:
                        'vendor {products {edges {node {remoteState}}}}',
                    metadata: 'vendor {products {edges {node {metadata}}}}',
                    systemStatus:
                        'vendor {products {edges {node {systemStatus}}}}',
                    errors: 'vendor {products {edges {node {errors}}}}',
                    warnings: 'vendor {products {edges {node {warnings}}}}',
                },
            },
            pageInfo: {
                hasNextPage: 'vendor {products {pageInfo {hasNextPage}}}',
                hasPreviousPage:
                    'vendor {products {pageInfo {hasPreviousPage}}}',
                startCursor: 'vendor {products {pageInfo {startCursor}}}',
                endCursor: 'vendor {products {pageInfo {endCursor}}}',
            },
        },
        systemStatus: 'vendor {systemStatus}',
        errors: 'vendor {errors}',
    },
};
export type ResultFields = {
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
export const ResultFields: ResultFields = {
    id: 'id',
    creationDate: 'creationDate',
    lastChangeDate: 'lastChangeDate',
    date: 'date',
    analytics: {
        results: 'analytics {results}',
        impressions: 'analytics {impressions}',
        clicks: 'analytics {clicks}',
        spend: 'analytics {spend}',
        purchases: 'analytics {purchases}',
        purchasesValue: 'analytics {purchasesValue}',
    },
    type: 'type',
    resource: {
        id: 'resource {id}',
        creationDate: 'resource {creationDate}',
        lastChangeDate: 'resource {lastChangeDate}',
        vendor: {
            id: 'resource {vendor {id}}',
            creationDate: 'resource {vendor {creationDate}}',
            lastChangeDate: 'resource {vendor {lastChangeDate}}',
            name: 'resource {vendor {name}}',
            marketplace: {
                id: 'resource {vendor {marketplace {id}}}',
                creationDate: 'resource {vendor {marketplace {creationDate}}}',
                lastChangeDate:
                    'resource {vendor {marketplace {lastChangeDate}}}',
                name: 'resource {vendor {marketplace {name}}}',
                organization: {
                    id: 'resource {vendor {marketplace {organization {id}}}}',
                    creationDate:
                        'resource {vendor {marketplace {organization {creationDate}}}}',
                    lastChangeDate:
                        'resource {vendor {marketplace {organization {lastChangeDate}}}}',
                    name:
                        'resource {vendor {marketplace {organization {name}}}}',
                    tier:
                        'resource {vendor {marketplace {organization {tier}}}}',
                    systemStatus:
                        'resource {vendor {marketplace {organization {systemStatus}}}}',
                    errors:
                        'resource {vendor {marketplace {organization {errors}}}}',
                },
                mediaChannels: {},
                campaignTemplates: {},
                vendors: {},
                vendorTokens: {},
                systemStatus: 'resource {vendor {marketplace {systemStatus}}}',
                errors: 'resource {vendor {marketplace {errors}}}',
                creativeTemplates: {},
            },
            vendorTokens: {
                edges: {
                    cursor: 'resource {vendor {vendorTokens {edges {cursor}}}}',
                },
                pageInfo: {
                    hasNextPage:
                        'resource {vendor {vendorTokens {pageInfo {hasNextPage}}}}',
                    hasPreviousPage:
                        'resource {vendor {vendorTokens {pageInfo {hasPreviousPage}}}}',
                    startCursor:
                        'resource {vendor {vendorTokens {pageInfo {startCursor}}}}',
                    endCursor:
                        'resource {vendor {vendorTokens {pageInfo {endCursor}}}}',
                },
            },
            products: {
                edges: {
                    cursor: 'resource {vendor {products {edges {cursor}}}}',
                },
                pageInfo: {
                    hasNextPage:
                        'resource {vendor {products {pageInfo {hasNextPage}}}}',
                    hasPreviousPage:
                        'resource {vendor {products {pageInfo {hasPreviousPage}}}}',
                    startCursor:
                        'resource {vendor {products {pageInfo {startCursor}}}}',
                    endCursor:
                        'resource {vendor {products {pageInfo {endCursor}}}}',
                },
            },
            systemStatus: 'resource {vendor {systemStatus}}',
            errors: 'resource {vendor {errors}}',
        },
    },
    vendor: {
        id: 'vendor {id}',
        creationDate: 'vendor {creationDate}',
        lastChangeDate: 'vendor {lastChangeDate}',
        name: 'vendor {name}',
        marketplace: {
            id: 'vendor {marketplace {id}}',
            creationDate: 'vendor {marketplace {creationDate}}',
            lastChangeDate: 'vendor {marketplace {lastChangeDate}}',
            name: 'vendor {marketplace {name}}',
            organization: {
                id: 'vendor {marketplace {organization {id}}}',
                creationDate:
                    'vendor {marketplace {organization {creationDate}}}',
                lastChangeDate:
                    'vendor {marketplace {organization {lastChangeDate}}}',
                users: {},
                marketplaces: {},
                name: 'vendor {marketplace {organization {name}}}',
                tier: 'vendor {marketplace {organization {tier}}}',
                systemStatus:
                    'vendor {marketplace {organization {systemStatus}}}',
                errors: 'vendor {marketplace {organization {errors}}}',
            },
            mediaChannels: {
                edges: {
                    cursor:
                        'vendor {marketplace {mediaChannels {edges {cursor}}}}',
                },
                pageInfo: {
                    hasNextPage:
                        'vendor {marketplace {mediaChannels {pageInfo {hasNextPage}}}}',
                    hasPreviousPage:
                        'vendor {marketplace {mediaChannels {pageInfo {hasPreviousPage}}}}',
                    startCursor:
                        'vendor {marketplace {mediaChannels {pageInfo {startCursor}}}}',
                    endCursor:
                        'vendor {marketplace {mediaChannels {pageInfo {endCursor}}}}',
                },
            },
            campaignTemplates: {
                edges: {
                    cursor:
                        'vendor {marketplace {campaignTemplates {edges {cursor}}}}',
                },
                pageInfo: {
                    hasNextPage:
                        'vendor {marketplace {campaignTemplates {pageInfo {hasNextPage}}}}',
                    hasPreviousPage:
                        'vendor {marketplace {campaignTemplates {pageInfo {hasPreviousPage}}}}',
                    startCursor:
                        'vendor {marketplace {campaignTemplates {pageInfo {startCursor}}}}',
                    endCursor:
                        'vendor {marketplace {campaignTemplates {pageInfo {endCursor}}}}',
                },
            },
            vendors: {
                edges: {
                    cursor: 'vendor {marketplace {vendors {edges {cursor}}}}',
                },
                pageInfo: {
                    hasNextPage:
                        'vendor {marketplace {vendors {pageInfo {hasNextPage}}}}',
                    hasPreviousPage:
                        'vendor {marketplace {vendors {pageInfo {hasPreviousPage}}}}',
                    startCursor:
                        'vendor {marketplace {vendors {pageInfo {startCursor}}}}',
                    endCursor:
                        'vendor {marketplace {vendors {pageInfo {endCursor}}}}',
                },
            },
            vendorTokens: {
                edges: {
                    cursor:
                        'vendor {marketplace {vendorTokens {edges {cursor}}}}',
                },
                pageInfo: {
                    hasNextPage:
                        'vendor {marketplace {vendorTokens {pageInfo {hasNextPage}}}}',
                    hasPreviousPage:
                        'vendor {marketplace {vendorTokens {pageInfo {hasPreviousPage}}}}',
                    startCursor:
                        'vendor {marketplace {vendorTokens {pageInfo {startCursor}}}}',
                    endCursor:
                        'vendor {marketplace {vendorTokens {pageInfo {endCursor}}}}',
                },
            },
            systemStatus: 'vendor {marketplace {systemStatus}}',
            errors: 'vendor {marketplace {errors}}',
            creativeTemplates: {
                edges: {
                    cursor:
                        'vendor {marketplace {creativeTemplates {edges {cursor}}}}',
                },
                pageInfo: {
                    hasNextPage:
                        'vendor {marketplace {creativeTemplates {pageInfo {hasNextPage}}}}',
                    hasPreviousPage:
                        'vendor {marketplace {creativeTemplates {pageInfo {hasPreviousPage}}}}',
                    startCursor:
                        'vendor {marketplace {creativeTemplates {pageInfo {startCursor}}}}',
                    endCursor:
                        'vendor {marketplace {creativeTemplates {pageInfo {endCursor}}}}',
                },
            },
        },
        vendorTokens: {
            edges: {
                cursor: 'vendor {vendorTokens {edges {cursor}}}',
                node: {
                    id: 'vendor {vendorTokens {edges {node {id}}}}',
                    creationDate:
                        'vendor {vendorTokens {edges {node {creationDate}}}}',
                    lastChangeDate:
                        'vendor {vendorTokens {edges {node {lastChangeDate}}}}',
                    token: 'vendor {vendorTokens {edges {node {token}}}}',
                },
            },
            pageInfo: {
                hasNextPage: 'vendor {vendorTokens {pageInfo {hasNextPage}}}',
                hasPreviousPage:
                    'vendor {vendorTokens {pageInfo {hasPreviousPage}}}',
                startCursor: 'vendor {vendorTokens {pageInfo {startCursor}}}',
                endCursor: 'vendor {vendorTokens {pageInfo {endCursor}}}',
            },
        },
        products: {
            edges: {
                cursor: 'vendor {products {edges {cursor}}}',
                node: {
                    id: 'vendor {products {edges {node {id}}}}',
                    creationDate:
                        'vendor {products {edges {node {creationDate}}}}',
                    lastChangeDate:
                        'vendor {products {edges {node {lastChangeDate}}}}',
                    name: 'vendor {products {edges {node {name}}}}',
                    sku: 'vendor {products {edges {node {sku}}}}',
                    remoteState:
                        'vendor {products {edges {node {remoteState}}}}',
                    metadata: 'vendor {products {edges {node {metadata}}}}',
                    systemStatus:
                        'vendor {products {edges {node {systemStatus}}}}',
                    errors: 'vendor {products {edges {node {errors}}}}',
                    warnings: 'vendor {products {edges {node {warnings}}}}',
                },
            },
            pageInfo: {
                hasNextPage: 'vendor {products {pageInfo {hasNextPage}}}',
                hasPreviousPage:
                    'vendor {products {pageInfo {hasPreviousPage}}}',
                startCursor: 'vendor {products {pageInfo {startCursor}}}',
                endCursor: 'vendor {products {pageInfo {endCursor}}}',
            },
        },
        systemStatus: 'vendor {systemStatus}',
        errors: 'vendor {errors}',
    },
};
export type CreativeTemplateFields = {
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
export const CreativeTemplateFields: CreativeTemplateFields = {
    id: 'id',
    creationDate: 'creationDate',
    lastChangeDate: 'lastChangeDate',
    name: 'name',
    height: 'height',
    width: 'width',
    marketplace: {
        id: 'marketplace {id}',
        creationDate: 'marketplace {creationDate}',
        lastChangeDate: 'marketplace {lastChangeDate}',
        name: 'marketplace {name}',
        organization: {
            id: 'marketplace {organization {id}}',
            creationDate: 'marketplace {organization {creationDate}}',
            lastChangeDate: 'marketplace {organization {lastChangeDate}}',
            users: {
                edges: {
                    cursor:
                        'marketplace {organization {users {edges {cursor}}}}',
                },
                pageInfo: {
                    hasNextPage:
                        'marketplace {organization {users {pageInfo {hasNextPage}}}}',
                    hasPreviousPage:
                        'marketplace {organization {users {pageInfo {hasPreviousPage}}}}',
                    startCursor:
                        'marketplace {organization {users {pageInfo {startCursor}}}}',
                    endCursor:
                        'marketplace {organization {users {pageInfo {endCursor}}}}',
                },
            },
            marketplaces: {
                edges: {
                    cursor:
                        'marketplace {organization {marketplaces {edges {cursor}}}}',
                },
                pageInfo: {
                    hasNextPage:
                        'marketplace {organization {marketplaces {pageInfo {hasNextPage}}}}',
                    hasPreviousPage:
                        'marketplace {organization {marketplaces {pageInfo {hasPreviousPage}}}}',
                    startCursor:
                        'marketplace {organization {marketplaces {pageInfo {startCursor}}}}',
                    endCursor:
                        'marketplace {organization {marketplaces {pageInfo {endCursor}}}}',
                },
            },
            name: 'marketplace {organization {name}}',
            tier: 'marketplace {organization {tier}}',
            systemStatus: 'marketplace {organization {systemStatus}}',
            errors: 'marketplace {organization {errors}}',
        },
        mediaChannels: {
            edges: {
                cursor: 'marketplace {mediaChannels {edges {cursor}}}',
                node: {
                    id: 'marketplace {mediaChannels {edges {node {id}}}}',
                    creationDate:
                        'marketplace {mediaChannels {edges {node {creationDate}}}}',
                    lastChangeDate:
                        'marketplace {mediaChannels {edges {node {lastChangeDate}}}}',
                    name: 'marketplace {mediaChannels {edges {node {name}}}}',
                    platform:
                        'marketplace {mediaChannels {edges {node {platform}}}}',
                    remoteId:
                        'marketplace {mediaChannels {edges {node {remoteId}}}}',
                    remoteState:
                        'marketplace {mediaChannels {edges {node {remoteState}}}}',
                    currency:
                        'marketplace {mediaChannels {edges {node {currency}}}}',
                    currencySymbol:
                        'marketplace {mediaChannels {edges {node {currencySymbol}}}}',
                    currencyOffset:
                        'marketplace {mediaChannels {edges {node {currencyOffset}}}}',
                    timezone:
                        'marketplace {mediaChannels {edges {node {timezone}}}}',
                    tokenStatus:
                        'marketplace {mediaChannels {edges {node {tokenStatus}}}}',
                    systemStatus:
                        'marketplace {mediaChannels {edges {node {systemStatus}}}}',
                    errors:
                        'marketplace {mediaChannels {edges {node {errors}}}}',
                },
            },
            pageInfo: {
                hasNextPage:
                    'marketplace {mediaChannels {pageInfo {hasNextPage}}}',
                hasPreviousPage:
                    'marketplace {mediaChannels {pageInfo {hasPreviousPage}}}',
                startCursor:
                    'marketplace {mediaChannels {pageInfo {startCursor}}}',
                endCursor: 'marketplace {mediaChannels {pageInfo {endCursor}}}',
            },
        },
        campaignTemplates: {
            edges: {
                cursor: 'marketplace {campaignTemplates {edges {cursor}}}',
                node: {
                    id: 'marketplace {campaignTemplates {edges {node {id}}}}',
                    creationDate:
                        'marketplace {campaignTemplates {edges {node {creationDate}}}}',
                    lastChangeDate:
                        'marketplace {campaignTemplates {edges {node {lastChangeDate}}}}',
                    name:
                        'marketplace {campaignTemplates {edges {node {name}}}}',
                    description:
                        'marketplace {campaignTemplates {edges {node {description}}}}',
                    platform:
                        'marketplace {campaignTemplates {edges {node {platform}}}}',
                    remoteId:
                        'marketplace {campaignTemplates {edges {node {remoteId}}}}',
                    systemStatus:
                        'marketplace {campaignTemplates {edges {node {systemStatus}}}}',
                    errors:
                        'marketplace {campaignTemplates {edges {node {errors}}}}',
                },
            },
            pageInfo: {
                hasNextPage:
                    'marketplace {campaignTemplates {pageInfo {hasNextPage}}}',
                hasPreviousPage:
                    'marketplace {campaignTemplates {pageInfo {hasPreviousPage}}}',
                startCursor:
                    'marketplace {campaignTemplates {pageInfo {startCursor}}}',
                endCursor:
                    'marketplace {campaignTemplates {pageInfo {endCursor}}}',
            },
        },
        vendors: {
            edges: {
                cursor: 'marketplace {vendors {edges {cursor}}}',
                node: {
                    id: 'marketplace {vendors {edges {node {id}}}}',
                    creationDate:
                        'marketplace {vendors {edges {node {creationDate}}}}',
                    lastChangeDate:
                        'marketplace {vendors {edges {node {lastChangeDate}}}}',
                    name: 'marketplace {vendors {edges {node {name}}}}',
                    systemStatus:
                        'marketplace {vendors {edges {node {systemStatus}}}}',
                    errors: 'marketplace {vendors {edges {node {errors}}}}',
                },
            },
            pageInfo: {
                hasNextPage: 'marketplace {vendors {pageInfo {hasNextPage}}}',
                hasPreviousPage:
                    'marketplace {vendors {pageInfo {hasPreviousPage}}}',
                startCursor: 'marketplace {vendors {pageInfo {startCursor}}}',
                endCursor: 'marketplace {vendors {pageInfo {endCursor}}}',
            },
        },
        vendorTokens: {
            edges: {
                cursor: 'marketplace {vendorTokens {edges {cursor}}}',
                node: {
                    id: 'marketplace {vendorTokens {edges {node {id}}}}',
                    creationDate:
                        'marketplace {vendorTokens {edges {node {creationDate}}}}',
                    lastChangeDate:
                        'marketplace {vendorTokens {edges {node {lastChangeDate}}}}',
                    token: 'marketplace {vendorTokens {edges {node {token}}}}',
                },
            },
            pageInfo: {
                hasNextPage:
                    'marketplace {vendorTokens {pageInfo {hasNextPage}}}',
                hasPreviousPage:
                    'marketplace {vendorTokens {pageInfo {hasPreviousPage}}}',
                startCursor:
                    'marketplace {vendorTokens {pageInfo {startCursor}}}',
                endCursor: 'marketplace {vendorTokens {pageInfo {endCursor}}}',
            },
        },
        systemStatus: 'marketplace {systemStatus}',
        errors: 'marketplace {errors}',
        creativeTemplates: {
            edges: {
                cursor: 'marketplace {creativeTemplates {edges {cursor}}}',
                node: {
                    id: 'marketplace {creativeTemplates {edges {node {id}}}}',
                    creationDate:
                        'marketplace {creativeTemplates {edges {node {creationDate}}}}',
                    lastChangeDate:
                        'marketplace {creativeTemplates {edges {node {lastChangeDate}}}}',
                    name:
                        'marketplace {creativeTemplates {edges {node {name}}}}',
                    height:
                        'marketplace {creativeTemplates {edges {node {height}}}}',
                    width:
                        'marketplace {creativeTemplates {edges {node {width}}}}',
                    systemStatus:
                        'marketplace {creativeTemplates {edges {node {systemStatus}}}}',
                    errors:
                        'marketplace {creativeTemplates {edges {node {errors}}}}',
                },
            },
            pageInfo: {
                hasNextPage:
                    'marketplace {creativeTemplates {pageInfo {hasNextPage}}}',
                hasPreviousPage:
                    'marketplace {creativeTemplates {pageInfo {hasPreviousPage}}}',
                startCursor:
                    'marketplace {creativeTemplates {pageInfo {startCursor}}}',
                endCursor:
                    'marketplace {creativeTemplates {pageInfo {endCursor}}}',
            },
        },
    },
    creativeLayers: {
        edges: {
            cursor: 'creativeLayers {edges {cursor}}',
            node: {
                id: 'creativeLayers {edges {node {id}}}',
                creationDate: 'creativeLayers {edges {node {creationDate}}}',
                lastChangeDate:
                    'creativeLayers {edges {node {lastChangeDate}}}',
                name: 'creativeLayers {edges {node {name}}}',
                height: 'creativeLayers {edges {node {height}}}',
                width: 'creativeLayers {edges {node {width}}}',
                x: 'creativeLayers {edges {node {x}}}',
                y: 'creativeLayers {edges {node {y}}}',
                order: 'creativeLayers {edges {node {order}}}',
                type: 'creativeLayers {edges {node {type}}}',
                properties: 'creativeLayers {edges {node {properties}}}',
                creativeTemplate: {
                    id: 'creativeLayers {edges {node {creativeTemplate {id}}}}',
                    creationDate:
                        'creativeLayers {edges {node {creativeTemplate {creationDate}}}}',
                    lastChangeDate:
                        'creativeLayers {edges {node {creativeTemplate {lastChangeDate}}}}',
                    name:
                        'creativeLayers {edges {node {creativeTemplate {name}}}}',
                    height:
                        'creativeLayers {edges {node {creativeTemplate {height}}}}',
                    width:
                        'creativeLayers {edges {node {creativeTemplate {width}}}}',
                    systemStatus:
                        'creativeLayers {edges {node {creativeTemplate {systemStatus}}}}',
                    errors:
                        'creativeLayers {edges {node {creativeTemplate {errors}}}}',
                },
                systemStatus: 'creativeLayers {edges {node {systemStatus}}}',
                errors: 'creativeLayers {edges {node {errors}}}',
            },
        },
        pageInfo: {
            hasNextPage: 'creativeLayers {pageInfo {hasNextPage}}',
            hasPreviousPage: 'creativeLayers {pageInfo {hasPreviousPage}}',
            startCursor: 'creativeLayers {pageInfo {startCursor}}',
            endCursor: 'creativeLayers {pageInfo {endCursor}}',
        },
    },
    systemStatus: 'systemStatus',
    errors: 'errors',
};
export type CreativeLayerFields = {
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
export const CreativeLayerFields: CreativeLayerFields = {
    id: 'id',
    creationDate: 'creationDate',
    lastChangeDate: 'lastChangeDate',
    name: 'name',
    height: 'height',
    width: 'width',
    x: 'x',
    y: 'y',
    order: 'order',
    type: 'type',
    properties: 'properties',
    creativeTemplate: {
        id: 'creativeTemplate {id}',
        creationDate: 'creativeTemplate {creationDate}',
        lastChangeDate: 'creativeTemplate {lastChangeDate}',
        name: 'creativeTemplate {name}',
        height: 'creativeTemplate {height}',
        width: 'creativeTemplate {width}',
        marketplace: {
            id: 'creativeTemplate {marketplace {id}}',
            creationDate: 'creativeTemplate {marketplace {creationDate}}',
            lastChangeDate: 'creativeTemplate {marketplace {lastChangeDate}}',
            name: 'creativeTemplate {marketplace {name}}',
            organization: {
                id: 'creativeTemplate {marketplace {organization {id}}}',
                creationDate:
                    'creativeTemplate {marketplace {organization {creationDate}}}',
                lastChangeDate:
                    'creativeTemplate {marketplace {organization {lastChangeDate}}}',
                users: {},
                marketplaces: {},
                name: 'creativeTemplate {marketplace {organization {name}}}',
                tier: 'creativeTemplate {marketplace {organization {tier}}}',
                systemStatus:
                    'creativeTemplate {marketplace {organization {systemStatus}}}',
                errors:
                    'creativeTemplate {marketplace {organization {errors}}}',
            },
            mediaChannels: {
                edges: {
                    cursor:
                        'creativeTemplate {marketplace {mediaChannels {edges {cursor}}}}',
                },
                pageInfo: {
                    hasNextPage:
                        'creativeTemplate {marketplace {mediaChannels {pageInfo {hasNextPage}}}}',
                    hasPreviousPage:
                        'creativeTemplate {marketplace {mediaChannels {pageInfo {hasPreviousPage}}}}',
                    startCursor:
                        'creativeTemplate {marketplace {mediaChannels {pageInfo {startCursor}}}}',
                    endCursor:
                        'creativeTemplate {marketplace {mediaChannels {pageInfo {endCursor}}}}',
                },
            },
            campaignTemplates: {
                edges: {
                    cursor:
                        'creativeTemplate {marketplace {campaignTemplates {edges {cursor}}}}',
                },
                pageInfo: {
                    hasNextPage:
                        'creativeTemplate {marketplace {campaignTemplates {pageInfo {hasNextPage}}}}',
                    hasPreviousPage:
                        'creativeTemplate {marketplace {campaignTemplates {pageInfo {hasPreviousPage}}}}',
                    startCursor:
                        'creativeTemplate {marketplace {campaignTemplates {pageInfo {startCursor}}}}',
                    endCursor:
                        'creativeTemplate {marketplace {campaignTemplates {pageInfo {endCursor}}}}',
                },
            },
            vendors: {
                edges: {
                    cursor:
                        'creativeTemplate {marketplace {vendors {edges {cursor}}}}',
                },
                pageInfo: {
                    hasNextPage:
                        'creativeTemplate {marketplace {vendors {pageInfo {hasNextPage}}}}',
                    hasPreviousPage:
                        'creativeTemplate {marketplace {vendors {pageInfo {hasPreviousPage}}}}',
                    startCursor:
                        'creativeTemplate {marketplace {vendors {pageInfo {startCursor}}}}',
                    endCursor:
                        'creativeTemplate {marketplace {vendors {pageInfo {endCursor}}}}',
                },
            },
            vendorTokens: {
                edges: {
                    cursor:
                        'creativeTemplate {marketplace {vendorTokens {edges {cursor}}}}',
                },
                pageInfo: {
                    hasNextPage:
                        'creativeTemplate {marketplace {vendorTokens {pageInfo {hasNextPage}}}}',
                    hasPreviousPage:
                        'creativeTemplate {marketplace {vendorTokens {pageInfo {hasPreviousPage}}}}',
                    startCursor:
                        'creativeTemplate {marketplace {vendorTokens {pageInfo {startCursor}}}}',
                    endCursor:
                        'creativeTemplate {marketplace {vendorTokens {pageInfo {endCursor}}}}',
                },
            },
            systemStatus: 'creativeTemplate {marketplace {systemStatus}}',
            errors: 'creativeTemplate {marketplace {errors}}',
            creativeTemplates: {
                edges: {
                    cursor:
                        'creativeTemplate {marketplace {creativeTemplates {edges {cursor}}}}',
                },
                pageInfo: {
                    hasNextPage:
                        'creativeTemplate {marketplace {creativeTemplates {pageInfo {hasNextPage}}}}',
                    hasPreviousPage:
                        'creativeTemplate {marketplace {creativeTemplates {pageInfo {hasPreviousPage}}}}',
                    startCursor:
                        'creativeTemplate {marketplace {creativeTemplates {pageInfo {startCursor}}}}',
                    endCursor:
                        'creativeTemplate {marketplace {creativeTemplates {pageInfo {endCursor}}}}',
                },
            },
        },
        creativeLayers: {
            edges: {
                cursor: 'creativeTemplate {creativeLayers {edges {cursor}}}',
                node: {
                    id: 'creativeTemplate {creativeLayers {edges {node {id}}}}',
                    creationDate:
                        'creativeTemplate {creativeLayers {edges {node {creationDate}}}}',
                    lastChangeDate:
                        'creativeTemplate {creativeLayers {edges {node {lastChangeDate}}}}',
                    name:
                        'creativeTemplate {creativeLayers {edges {node {name}}}}',
                    height:
                        'creativeTemplate {creativeLayers {edges {node {height}}}}',
                    width:
                        'creativeTemplate {creativeLayers {edges {node {width}}}}',
                    x: 'creativeTemplate {creativeLayers {edges {node {x}}}}',
                    y: 'creativeTemplate {creativeLayers {edges {node {y}}}}',
                    order:
                        'creativeTemplate {creativeLayers {edges {node {order}}}}',
                    type:
                        'creativeTemplate {creativeLayers {edges {node {type}}}}',
                    properties:
                        'creativeTemplate {creativeLayers {edges {node {properties}}}}',
                    systemStatus:
                        'creativeTemplate {creativeLayers {edges {node {systemStatus}}}}',
                    errors:
                        'creativeTemplate {creativeLayers {edges {node {errors}}}}',
                },
            },
            pageInfo: {
                hasNextPage:
                    'creativeTemplate {creativeLayers {pageInfo {hasNextPage}}}',
                hasPreviousPage:
                    'creativeTemplate {creativeLayers {pageInfo {hasPreviousPage}}}',
                startCursor:
                    'creativeTemplate {creativeLayers {pageInfo {startCursor}}}',
                endCursor:
                    'creativeTemplate {creativeLayers {pageInfo {endCursor}}}',
            },
        },
        systemStatus: 'creativeTemplate {systemStatus}',
        errors: 'creativeTemplate {errors}',
    },
    systemStatus: 'systemStatus',
    errors: 'errors',
};
export type CreativeFontFields = {
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
export const CreativeFontFields: CreativeFontFields = {
    id: 'id',
    creationDate: 'creationDate',
    lastChangeDate: 'lastChangeDate',
    name: 'name',
    url: 'url',
    properties: 'properties',
    marketplace: {
        id: 'marketplace {id}',
        creationDate: 'marketplace {creationDate}',
        lastChangeDate: 'marketplace {lastChangeDate}',
        name: 'marketplace {name}',
        organization: {
            id: 'marketplace {organization {id}}',
            creationDate: 'marketplace {organization {creationDate}}',
            lastChangeDate: 'marketplace {organization {lastChangeDate}}',
            users: {
                edges: {
                    cursor:
                        'marketplace {organization {users {edges {cursor}}}}',
                },
                pageInfo: {
                    hasNextPage:
                        'marketplace {organization {users {pageInfo {hasNextPage}}}}',
                    hasPreviousPage:
                        'marketplace {organization {users {pageInfo {hasPreviousPage}}}}',
                    startCursor:
                        'marketplace {organization {users {pageInfo {startCursor}}}}',
                    endCursor:
                        'marketplace {organization {users {pageInfo {endCursor}}}}',
                },
            },
            marketplaces: {
                edges: {
                    cursor:
                        'marketplace {organization {marketplaces {edges {cursor}}}}',
                },
                pageInfo: {
                    hasNextPage:
                        'marketplace {organization {marketplaces {pageInfo {hasNextPage}}}}',
                    hasPreviousPage:
                        'marketplace {organization {marketplaces {pageInfo {hasPreviousPage}}}}',
                    startCursor:
                        'marketplace {organization {marketplaces {pageInfo {startCursor}}}}',
                    endCursor:
                        'marketplace {organization {marketplaces {pageInfo {endCursor}}}}',
                },
            },
            name: 'marketplace {organization {name}}',
            tier: 'marketplace {organization {tier}}',
            systemStatus: 'marketplace {organization {systemStatus}}',
            errors: 'marketplace {organization {errors}}',
        },
        mediaChannels: {
            edges: {
                cursor: 'marketplace {mediaChannels {edges {cursor}}}',
                node: {
                    id: 'marketplace {mediaChannels {edges {node {id}}}}',
                    creationDate:
                        'marketplace {mediaChannels {edges {node {creationDate}}}}',
                    lastChangeDate:
                        'marketplace {mediaChannels {edges {node {lastChangeDate}}}}',
                    name: 'marketplace {mediaChannels {edges {node {name}}}}',
                    platform:
                        'marketplace {mediaChannels {edges {node {platform}}}}',
                    remoteId:
                        'marketplace {mediaChannels {edges {node {remoteId}}}}',
                    remoteState:
                        'marketplace {mediaChannels {edges {node {remoteState}}}}',
                    currency:
                        'marketplace {mediaChannels {edges {node {currency}}}}',
                    currencySymbol:
                        'marketplace {mediaChannels {edges {node {currencySymbol}}}}',
                    currencyOffset:
                        'marketplace {mediaChannels {edges {node {currencyOffset}}}}',
                    timezone:
                        'marketplace {mediaChannels {edges {node {timezone}}}}',
                    tokenStatus:
                        'marketplace {mediaChannels {edges {node {tokenStatus}}}}',
                    systemStatus:
                        'marketplace {mediaChannels {edges {node {systemStatus}}}}',
                    errors:
                        'marketplace {mediaChannels {edges {node {errors}}}}',
                },
            },
            pageInfo: {
                hasNextPage:
                    'marketplace {mediaChannels {pageInfo {hasNextPage}}}',
                hasPreviousPage:
                    'marketplace {mediaChannels {pageInfo {hasPreviousPage}}}',
                startCursor:
                    'marketplace {mediaChannels {pageInfo {startCursor}}}',
                endCursor: 'marketplace {mediaChannels {pageInfo {endCursor}}}',
            },
        },
        campaignTemplates: {
            edges: {
                cursor: 'marketplace {campaignTemplates {edges {cursor}}}',
                node: {
                    id: 'marketplace {campaignTemplates {edges {node {id}}}}',
                    creationDate:
                        'marketplace {campaignTemplates {edges {node {creationDate}}}}',
                    lastChangeDate:
                        'marketplace {campaignTemplates {edges {node {lastChangeDate}}}}',
                    name:
                        'marketplace {campaignTemplates {edges {node {name}}}}',
                    description:
                        'marketplace {campaignTemplates {edges {node {description}}}}',
                    platform:
                        'marketplace {campaignTemplates {edges {node {platform}}}}',
                    remoteId:
                        'marketplace {campaignTemplates {edges {node {remoteId}}}}',
                    systemStatus:
                        'marketplace {campaignTemplates {edges {node {systemStatus}}}}',
                    errors:
                        'marketplace {campaignTemplates {edges {node {errors}}}}',
                },
            },
            pageInfo: {
                hasNextPage:
                    'marketplace {campaignTemplates {pageInfo {hasNextPage}}}',
                hasPreviousPage:
                    'marketplace {campaignTemplates {pageInfo {hasPreviousPage}}}',
                startCursor:
                    'marketplace {campaignTemplates {pageInfo {startCursor}}}',
                endCursor:
                    'marketplace {campaignTemplates {pageInfo {endCursor}}}',
            },
        },
        vendors: {
            edges: {
                cursor: 'marketplace {vendors {edges {cursor}}}',
                node: {
                    id: 'marketplace {vendors {edges {node {id}}}}',
                    creationDate:
                        'marketplace {vendors {edges {node {creationDate}}}}',
                    lastChangeDate:
                        'marketplace {vendors {edges {node {lastChangeDate}}}}',
                    name: 'marketplace {vendors {edges {node {name}}}}',
                    systemStatus:
                        'marketplace {vendors {edges {node {systemStatus}}}}',
                    errors: 'marketplace {vendors {edges {node {errors}}}}',
                },
            },
            pageInfo: {
                hasNextPage: 'marketplace {vendors {pageInfo {hasNextPage}}}',
                hasPreviousPage:
                    'marketplace {vendors {pageInfo {hasPreviousPage}}}',
                startCursor: 'marketplace {vendors {pageInfo {startCursor}}}',
                endCursor: 'marketplace {vendors {pageInfo {endCursor}}}',
            },
        },
        vendorTokens: {
            edges: {
                cursor: 'marketplace {vendorTokens {edges {cursor}}}',
                node: {
                    id: 'marketplace {vendorTokens {edges {node {id}}}}',
                    creationDate:
                        'marketplace {vendorTokens {edges {node {creationDate}}}}',
                    lastChangeDate:
                        'marketplace {vendorTokens {edges {node {lastChangeDate}}}}',
                    token: 'marketplace {vendorTokens {edges {node {token}}}}',
                },
            },
            pageInfo: {
                hasNextPage:
                    'marketplace {vendorTokens {pageInfo {hasNextPage}}}',
                hasPreviousPage:
                    'marketplace {vendorTokens {pageInfo {hasPreviousPage}}}',
                startCursor:
                    'marketplace {vendorTokens {pageInfo {startCursor}}}',
                endCursor: 'marketplace {vendorTokens {pageInfo {endCursor}}}',
            },
        },
        systemStatus: 'marketplace {systemStatus}',
        errors: 'marketplace {errors}',
        creativeTemplates: {
            edges: {
                cursor: 'marketplace {creativeTemplates {edges {cursor}}}',
                node: {
                    id: 'marketplace {creativeTemplates {edges {node {id}}}}',
                    creationDate:
                        'marketplace {creativeTemplates {edges {node {creationDate}}}}',
                    lastChangeDate:
                        'marketplace {creativeTemplates {edges {node {lastChangeDate}}}}',
                    name:
                        'marketplace {creativeTemplates {edges {node {name}}}}',
                    height:
                        'marketplace {creativeTemplates {edges {node {height}}}}',
                    width:
                        'marketplace {creativeTemplates {edges {node {width}}}}',
                    systemStatus:
                        'marketplace {creativeTemplates {edges {node {systemStatus}}}}',
                    errors:
                        'marketplace {creativeTemplates {edges {node {errors}}}}',
                },
            },
            pageInfo: {
                hasNextPage:
                    'marketplace {creativeTemplates {pageInfo {hasNextPage}}}',
                hasPreviousPage:
                    'marketplace {creativeTemplates {pageInfo {hasPreviousPage}}}',
                startCursor:
                    'marketplace {creativeTemplates {pageInfo {startCursor}}}',
                endCursor:
                    'marketplace {creativeTemplates {pageInfo {endCursor}}}',
            },
        },
    },
    systemStatus: 'systemStatus',
    errors: 'errors',
};
export type CreativeImageFields = {
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
export const CreativeImageFields: CreativeImageFields = {
    id: 'id',
    creationDate: 'creationDate',
    lastChangeDate: 'lastChangeDate',
    name: 'name',
    url: 'url',
    properties: 'properties',
    marketplace: {
        id: 'marketplace {id}',
        creationDate: 'marketplace {creationDate}',
        lastChangeDate: 'marketplace {lastChangeDate}',
        name: 'marketplace {name}',
        organization: {
            id: 'marketplace {organization {id}}',
            creationDate: 'marketplace {organization {creationDate}}',
            lastChangeDate: 'marketplace {organization {lastChangeDate}}',
            users: {
                edges: {
                    cursor:
                        'marketplace {organization {users {edges {cursor}}}}',
                },
                pageInfo: {
                    hasNextPage:
                        'marketplace {organization {users {pageInfo {hasNextPage}}}}',
                    hasPreviousPage:
                        'marketplace {organization {users {pageInfo {hasPreviousPage}}}}',
                    startCursor:
                        'marketplace {organization {users {pageInfo {startCursor}}}}',
                    endCursor:
                        'marketplace {organization {users {pageInfo {endCursor}}}}',
                },
            },
            marketplaces: {
                edges: {
                    cursor:
                        'marketplace {organization {marketplaces {edges {cursor}}}}',
                },
                pageInfo: {
                    hasNextPage:
                        'marketplace {organization {marketplaces {pageInfo {hasNextPage}}}}',
                    hasPreviousPage:
                        'marketplace {organization {marketplaces {pageInfo {hasPreviousPage}}}}',
                    startCursor:
                        'marketplace {organization {marketplaces {pageInfo {startCursor}}}}',
                    endCursor:
                        'marketplace {organization {marketplaces {pageInfo {endCursor}}}}',
                },
            },
            name: 'marketplace {organization {name}}',
            tier: 'marketplace {organization {tier}}',
            systemStatus: 'marketplace {organization {systemStatus}}',
            errors: 'marketplace {organization {errors}}',
        },
        mediaChannels: {
            edges: {
                cursor: 'marketplace {mediaChannels {edges {cursor}}}',
                node: {
                    id: 'marketplace {mediaChannels {edges {node {id}}}}',
                    creationDate:
                        'marketplace {mediaChannels {edges {node {creationDate}}}}',
                    lastChangeDate:
                        'marketplace {mediaChannels {edges {node {lastChangeDate}}}}',
                    name: 'marketplace {mediaChannels {edges {node {name}}}}',
                    platform:
                        'marketplace {mediaChannels {edges {node {platform}}}}',
                    remoteId:
                        'marketplace {mediaChannels {edges {node {remoteId}}}}',
                    remoteState:
                        'marketplace {mediaChannels {edges {node {remoteState}}}}',
                    currency:
                        'marketplace {mediaChannels {edges {node {currency}}}}',
                    currencySymbol:
                        'marketplace {mediaChannels {edges {node {currencySymbol}}}}',
                    currencyOffset:
                        'marketplace {mediaChannels {edges {node {currencyOffset}}}}',
                    timezone:
                        'marketplace {mediaChannels {edges {node {timezone}}}}',
                    tokenStatus:
                        'marketplace {mediaChannels {edges {node {tokenStatus}}}}',
                    systemStatus:
                        'marketplace {mediaChannels {edges {node {systemStatus}}}}',
                    errors:
                        'marketplace {mediaChannels {edges {node {errors}}}}',
                },
            },
            pageInfo: {
                hasNextPage:
                    'marketplace {mediaChannels {pageInfo {hasNextPage}}}',
                hasPreviousPage:
                    'marketplace {mediaChannels {pageInfo {hasPreviousPage}}}',
                startCursor:
                    'marketplace {mediaChannels {pageInfo {startCursor}}}',
                endCursor: 'marketplace {mediaChannels {pageInfo {endCursor}}}',
            },
        },
        campaignTemplates: {
            edges: {
                cursor: 'marketplace {campaignTemplates {edges {cursor}}}',
                node: {
                    id: 'marketplace {campaignTemplates {edges {node {id}}}}',
                    creationDate:
                        'marketplace {campaignTemplates {edges {node {creationDate}}}}',
                    lastChangeDate:
                        'marketplace {campaignTemplates {edges {node {lastChangeDate}}}}',
                    name:
                        'marketplace {campaignTemplates {edges {node {name}}}}',
                    description:
                        'marketplace {campaignTemplates {edges {node {description}}}}',
                    platform:
                        'marketplace {campaignTemplates {edges {node {platform}}}}',
                    remoteId:
                        'marketplace {campaignTemplates {edges {node {remoteId}}}}',
                    systemStatus:
                        'marketplace {campaignTemplates {edges {node {systemStatus}}}}',
                    errors:
                        'marketplace {campaignTemplates {edges {node {errors}}}}',
                },
            },
            pageInfo: {
                hasNextPage:
                    'marketplace {campaignTemplates {pageInfo {hasNextPage}}}',
                hasPreviousPage:
                    'marketplace {campaignTemplates {pageInfo {hasPreviousPage}}}',
                startCursor:
                    'marketplace {campaignTemplates {pageInfo {startCursor}}}',
                endCursor:
                    'marketplace {campaignTemplates {pageInfo {endCursor}}}',
            },
        },
        vendors: {
            edges: {
                cursor: 'marketplace {vendors {edges {cursor}}}',
                node: {
                    id: 'marketplace {vendors {edges {node {id}}}}',
                    creationDate:
                        'marketplace {vendors {edges {node {creationDate}}}}',
                    lastChangeDate:
                        'marketplace {vendors {edges {node {lastChangeDate}}}}',
                    name: 'marketplace {vendors {edges {node {name}}}}',
                    systemStatus:
                        'marketplace {vendors {edges {node {systemStatus}}}}',
                    errors: 'marketplace {vendors {edges {node {errors}}}}',
                },
            },
            pageInfo: {
                hasNextPage: 'marketplace {vendors {pageInfo {hasNextPage}}}',
                hasPreviousPage:
                    'marketplace {vendors {pageInfo {hasPreviousPage}}}',
                startCursor: 'marketplace {vendors {pageInfo {startCursor}}}',
                endCursor: 'marketplace {vendors {pageInfo {endCursor}}}',
            },
        },
        vendorTokens: {
            edges: {
                cursor: 'marketplace {vendorTokens {edges {cursor}}}',
                node: {
                    id: 'marketplace {vendorTokens {edges {node {id}}}}',
                    creationDate:
                        'marketplace {vendorTokens {edges {node {creationDate}}}}',
                    lastChangeDate:
                        'marketplace {vendorTokens {edges {node {lastChangeDate}}}}',
                    token: 'marketplace {vendorTokens {edges {node {token}}}}',
                },
            },
            pageInfo: {
                hasNextPage:
                    'marketplace {vendorTokens {pageInfo {hasNextPage}}}',
                hasPreviousPage:
                    'marketplace {vendorTokens {pageInfo {hasPreviousPage}}}',
                startCursor:
                    'marketplace {vendorTokens {pageInfo {startCursor}}}',
                endCursor: 'marketplace {vendorTokens {pageInfo {endCursor}}}',
            },
        },
        systemStatus: 'marketplace {systemStatus}',
        errors: 'marketplace {errors}',
        creativeTemplates: {
            edges: {
                cursor: 'marketplace {creativeTemplates {edges {cursor}}}',
                node: {
                    id: 'marketplace {creativeTemplates {edges {node {id}}}}',
                    creationDate:
                        'marketplace {creativeTemplates {edges {node {creationDate}}}}',
                    lastChangeDate:
                        'marketplace {creativeTemplates {edges {node {lastChangeDate}}}}',
                    name:
                        'marketplace {creativeTemplates {edges {node {name}}}}',
                    height:
                        'marketplace {creativeTemplates {edges {node {height}}}}',
                    width:
                        'marketplace {creativeTemplates {edges {node {width}}}}',
                    systemStatus:
                        'marketplace {creativeTemplates {edges {node {systemStatus}}}}',
                    errors:
                        'marketplace {creativeTemplates {edges {node {errors}}}}',
                },
            },
            pageInfo: {
                hasNextPage:
                    'marketplace {creativeTemplates {pageInfo {hasNextPage}}}',
                hasPreviousPage:
                    'marketplace {creativeTemplates {pageInfo {hasPreviousPage}}}',
                startCursor:
                    'marketplace {creativeTemplates {pageInfo {startCursor}}}',
                endCursor:
                    'marketplace {creativeTemplates {pageInfo {endCursor}}}',
            },
        },
    },
    systemStatus: 'systemStatus',
    errors: 'errors',
};
export type TokenFields = {
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
export const TokenFields: TokenFields = {
    token: 'token',
    refreshToken: 'refreshToken',
    expiryDate: 'expiryDate',
    user: {
        id: 'user {id}',
        creationDate: 'user {creationDate}',
        lastChangeDate: 'user {lastChangeDate}',
        email: 'user {email}',
        firstName: 'user {firstName}',
        lastName: 'user {lastName}',
        organizations: {
            edges: {
                cursor: 'user {organizations {edges {cursor}}}',
                node: {
                    id: 'user {organizations {edges {node {id}}}}',
                    creationDate:
                        'user {organizations {edges {node {creationDate}}}}',
                    lastChangeDate:
                        'user {organizations {edges {node {lastChangeDate}}}}',
                    name: 'user {organizations {edges {node {name}}}}',
                    tier: 'user {organizations {edges {node {tier}}}}',
                    systemStatus:
                        'user {organizations {edges {node {systemStatus}}}}',
                    errors: 'user {organizations {edges {node {errors}}}}',
                },
            },
            pageInfo: {
                hasNextPage: 'user {organizations {pageInfo {hasNextPage}}}',
                hasPreviousPage:
                    'user {organizations {pageInfo {hasPreviousPage}}}',
                startCursor: 'user {organizations {pageInfo {startCursor}}}',
                endCursor: 'user {organizations {pageInfo {endCursor}}}',
            },
        },
        entitlements: {
            edges: {
                cursor: 'user {entitlements {edges {cursor}}}',
                node: {
                    id: 'user {entitlements {edges {node {id}}}}',
                    creationDate:
                        'user {entitlements {edges {node {creationDate}}}}',
                    lastChangeDate:
                        'user {entitlements {edges {node {lastChangeDate}}}}',
                    type: 'user {entitlements {edges {node {type}}}}',
                    permissions:
                        'user {entitlements {edges {node {permissions}}}}',
                },
            },
            pageInfo: {
                hasNextPage: 'user {entitlements {pageInfo {hasNextPage}}}',
                hasPreviousPage:
                    'user {entitlements {pageInfo {hasPreviousPage}}}',
                startCursor: 'user {entitlements {pageInfo {startCursor}}}',
                endCursor: 'user {entitlements {pageInfo {endCursor}}}',
            },
        },
    },
};
