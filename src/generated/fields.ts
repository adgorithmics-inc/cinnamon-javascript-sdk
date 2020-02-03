export type CampaignTemplateFields = {
    id: 'id';
    creationDate: 'creationDate';
    lastChangeDate: 'lastChangeDate';
    name: 'name';
    description: 'description';
    platform: 'platform';
    remoteId: 'remoteId';
    systemStatus: 'systemStatus';
    errors: 'errors';
    marketplace: {
        id: 'marketplace{id}';
        creationDate: 'marketplace{creationDate}';
        lastChangeDate: 'marketplace{lastChangeDate}';
        name: 'marketplace{name}';
        systemStatus: 'marketplace{systemStatus}';
        errors: 'marketplace{errors}';
        organization: {
            id: 'marketplace{organization{id}}';
            creationDate: 'marketplace{organization{creationDate}}';
            lastChangeDate: 'marketplace{organization{lastChangeDate}}';
            name: 'marketplace{organization{name}}';
            systemStatus: 'marketplace{organization{systemStatus}}';
            errors: 'marketplace{organization{errors}}';
            tier: 'marketplace{organization{tier}}';
            users: {
                edges: {
                    cursor: 'marketplace{organization{users{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'marketplace{organization{users{pageInfo{endCursor}}}}';
                    startCursor: 'marketplace{organization{users{pageInfo{startCursor}}}}';
                    hasNextPage: 'marketplace{organization{users{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'marketplace{organization{users{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'marketplace{organization{users{totalCount}}}';
            };
            marketplaces: {
                edges: {
                    cursor: 'marketplace{organization{marketplaces{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'marketplace{organization{marketplaces{pageInfo{endCursor}}}}';
                    startCursor: 'marketplace{organization{marketplaces{pageInfo{startCursor}}}}';
                    hasNextPage: 'marketplace{organization{marketplaces{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'marketplace{organization{marketplaces{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'marketplace{organization{marketplaces{totalCount}}}';
            };
        };
        mediaChannels: {
            edges: {
                node: {
                    id: 'marketplace{mediaChannels{edges{node{id}}}}';
                    creationDate: 'marketplace{mediaChannels{edges{node{creationDate}}}}';
                    lastChangeDate: 'marketplace{mediaChannels{edges{node{lastChangeDate}}}}';
                    name: 'marketplace{mediaChannels{edges{node{name}}}}';
                    systemStatus: 'marketplace{mediaChannels{edges{node{systemStatus}}}}';
                    errors: 'marketplace{mediaChannels{edges{node{errors}}}}';
                    platform: 'marketplace{mediaChannels{edges{node{platform}}}}';
                    remoteId: 'marketplace{mediaChannels{edges{node{remoteId}}}}';
                    remoteState: 'marketplace{mediaChannels{edges{node{remoteState}}}}';
                    currency: 'marketplace{mediaChannels{edges{node{currency}}}}';
                    currencySymbol: 'marketplace{mediaChannels{edges{node{currencySymbol}}}}';
                    currencyOffset: 'marketplace{mediaChannels{edges{node{currencyOffset}}}}';
                    timezone: 'marketplace{mediaChannels{edges{node{timezone}}}}';
                    tokenStatus: 'marketplace{mediaChannels{edges{node{tokenStatus}}}}';
                };
                cursor: 'marketplace{mediaChannels{edges{cursor}}}';
            };
            pageInfo: {
                endCursor: 'marketplace{mediaChannels{pageInfo{endCursor}}}';
                startCursor: 'marketplace{mediaChannels{pageInfo{startCursor}}}';
                hasNextPage: 'marketplace{mediaChannels{pageInfo{hasNextPage}}}';
                hasPreviousPage: 'marketplace{mediaChannels{pageInfo{hasPreviousPage}}}';
            };
            totalCount: 'marketplace{mediaChannels{totalCount}}';
        };
        campaignTemplates: {
            edges: {
                node: {
                    id: 'marketplace{campaignTemplates{edges{node{id}}}}';
                    creationDate: 'marketplace{campaignTemplates{edges{node{creationDate}}}}';
                    lastChangeDate: 'marketplace{campaignTemplates{edges{node{lastChangeDate}}}}';
                    name: 'marketplace{campaignTemplates{edges{node{name}}}}';
                    description: 'marketplace{campaignTemplates{edges{node{description}}}}';
                    platform: 'marketplace{campaignTemplates{edges{node{platform}}}}';
                    remoteId: 'marketplace{campaignTemplates{edges{node{remoteId}}}}';
                    systemStatus: 'marketplace{campaignTemplates{edges{node{systemStatus}}}}';
                    errors: 'marketplace{campaignTemplates{edges{node{errors}}}}';
                };
                cursor: 'marketplace{campaignTemplates{edges{cursor}}}';
            };
            pageInfo: {
                endCursor: 'marketplace{campaignTemplates{pageInfo{endCursor}}}';
                startCursor: 'marketplace{campaignTemplates{pageInfo{startCursor}}}';
                hasNextPage: 'marketplace{campaignTemplates{pageInfo{hasNextPage}}}';
                hasPreviousPage: 'marketplace{campaignTemplates{pageInfo{hasPreviousPage}}}';
            };
            totalCount: 'marketplace{campaignTemplates{totalCount}}';
        };
        vendors: {
            edges: {
                node: {
                    id: 'marketplace{vendors{edges{node{id}}}}';
                    creationDate: 'marketplace{vendors{edges{node{creationDate}}}}';
                    lastChangeDate: 'marketplace{vendors{edges{node{lastChangeDate}}}}';
                    name: 'marketplace{vendors{edges{node{name}}}}';
                    systemStatus: 'marketplace{vendors{edges{node{systemStatus}}}}';
                    errors: 'marketplace{vendors{edges{node{errors}}}}';
                };
                cursor: 'marketplace{vendors{edges{cursor}}}';
            };
            pageInfo: {
                endCursor: 'marketplace{vendors{pageInfo{endCursor}}}';
                startCursor: 'marketplace{vendors{pageInfo{startCursor}}}';
                hasNextPage: 'marketplace{vendors{pageInfo{hasNextPage}}}';
                hasPreviousPage: 'marketplace{vendors{pageInfo{hasPreviousPage}}}';
            };
            totalCount: 'marketplace{vendors{totalCount}}';
        };
        vendorTokens: {
            edges: {
                node: {
                    id: 'marketplace{vendorTokens{edges{node{id}}}}';
                    creationDate: 'marketplace{vendorTokens{edges{node{creationDate}}}}';
                    lastChangeDate: 'marketplace{vendorTokens{edges{node{lastChangeDate}}}}';
                    token: 'marketplace{vendorTokens{edges{node{token}}}}';
                };
                cursor: 'marketplace{vendorTokens{edges{cursor}}}';
            };
            pageInfo: {
                endCursor: 'marketplace{vendorTokens{pageInfo{endCursor}}}';
                startCursor: 'marketplace{vendorTokens{pageInfo{startCursor}}}';
                hasNextPage: 'marketplace{vendorTokens{pageInfo{hasNextPage}}}';
                hasPreviousPage: 'marketplace{vendorTokens{pageInfo{hasPreviousPage}}}';
            };
            totalCount: 'marketplace{vendorTokens{totalCount}}';
        };
        creativeTemplates: {
            edges: {
                node: {
                    id: 'marketplace{creativeTemplates{edges{node{id}}}}';
                    creationDate: 'marketplace{creativeTemplates{edges{node{creationDate}}}}';
                    lastChangeDate: 'marketplace{creativeTemplates{edges{node{lastChangeDate}}}}';
                    name: 'marketplace{creativeTemplates{edges{node{name}}}}';
                    height: 'marketplace{creativeTemplates{edges{node{height}}}}';
                    width: 'marketplace{creativeTemplates{edges{node{width}}}}';
                    systemStatus: 'marketplace{creativeTemplates{edges{node{systemStatus}}}}';
                    errors: 'marketplace{creativeTemplates{edges{node{errors}}}}';
                };
                cursor: 'marketplace{creativeTemplates{edges{cursor}}}';
            };
            pageInfo: {
                endCursor: 'marketplace{creativeTemplates{pageInfo{endCursor}}}';
                startCursor: 'marketplace{creativeTemplates{pageInfo{startCursor}}}';
                hasNextPage: 'marketplace{creativeTemplates{pageInfo{hasNextPage}}}';
                hasPreviousPage: 'marketplace{creativeTemplates{pageInfo{hasPreviousPage}}}';
            };
            totalCount: 'marketplace{creativeTemplates{totalCount}}';
        };
    };
    marketingCampaigns: {
        edges: {
            node: {
                id: 'marketingCampaigns{edges{node{id}}}';
                creationDate: 'marketingCampaigns{edges{node{creationDate}}}';
                lastChangeDate: 'marketingCampaigns{edges{node{lastChangeDate}}}';
                resultsSource: 'marketingCampaigns{edges{node{resultsSource}}}';
                vendor: {
                    id: 'marketingCampaigns{edges{node{vendor{id}}}}';
                    creationDate: 'marketingCampaigns{edges{node{vendor{creationDate}}}}';
                    lastChangeDate: 'marketingCampaigns{edges{node{vendor{lastChangeDate}}}}';
                    name: 'marketingCampaigns{edges{node{vendor{name}}}}';
                    systemStatus: 'marketingCampaigns{edges{node{vendor{systemStatus}}}}';
                    errors: 'marketingCampaigns{edges{node{vendor{errors}}}}';
                };
                systemStatus: 'marketingCampaigns{edges{node{systemStatus}}}';
                errors: 'marketingCampaigns{edges{node{errors}}}';
                name: 'marketingCampaigns{edges{node{name}}}';
                status: 'marketingCampaigns{edges{node{status}}}';
                creativeSpec: 'marketingCampaigns{edges{node{creativeSpec}}}';
                runTimeSpec: 'marketingCampaigns{edges{node{runTimeSpec}}}';
                marketingAds: {
                    totalCount: 'marketingCampaigns{edges{node{marketingAds{totalCount}}}}';
                };
                products: {
                    totalCount: 'marketingCampaigns{edges{node{products{totalCount}}}}';
                };
                catalog: {
                    id: 'marketingCampaigns{edges{node{catalog{id}}}}';
                    creationDate: 'marketingCampaigns{edges{node{catalog{creationDate}}}}';
                    lastChangeDate: 'marketingCampaigns{edges{node{catalog{lastChangeDate}}}}';
                    name: 'marketingCampaigns{edges{node{catalog{name}}}}';
                    catalogType: 'marketingCampaigns{edges{node{catalog{catalogType}}}}';
                    remoteId: 'marketingCampaigns{edges{node{catalog{remoteId}}}}';
                    systemStatus: 'marketingCampaigns{edges{node{catalog{systemStatus}}}}';
                    remoteState: 'marketingCampaigns{edges{node{catalog{remoteState}}}}';
                    dataFeedId: 'marketingCampaigns{edges{node{catalog{dataFeedId}}}}';
                    errors: 'marketingCampaigns{edges{node{catalog{errors}}}}';
                };
                campaignTemplate: {
                    id: 'marketingCampaigns{edges{node{campaignTemplate{id}}}}';
                    creationDate: 'marketingCampaigns{edges{node{campaignTemplate{creationDate}}}}';
                    lastChangeDate: 'marketingCampaigns{edges{node{campaignTemplate{lastChangeDate}}}}';
                    name: 'marketingCampaigns{edges{node{campaignTemplate{name}}}}';
                    description: 'marketingCampaigns{edges{node{campaignTemplate{description}}}}';
                    platform: 'marketingCampaigns{edges{node{campaignTemplate{platform}}}}';
                    remoteId: 'marketingCampaigns{edges{node{campaignTemplate{remoteId}}}}';
                    systemStatus: 'marketingCampaigns{edges{node{campaignTemplate{systemStatus}}}}';
                    errors: 'marketingCampaigns{edges{node{campaignTemplate{errors}}}}';
                };
                mediaChannel: {
                    id: 'marketingCampaigns{edges{node{mediaChannel{id}}}}';
                    creationDate: 'marketingCampaigns{edges{node{mediaChannel{creationDate}}}}';
                    lastChangeDate: 'marketingCampaigns{edges{node{mediaChannel{lastChangeDate}}}}';
                    name: 'marketingCampaigns{edges{node{mediaChannel{name}}}}';
                    systemStatus: 'marketingCampaigns{edges{node{mediaChannel{systemStatus}}}}';
                    errors: 'marketingCampaigns{edges{node{mediaChannel{errors}}}}';
                    platform: 'marketingCampaigns{edges{node{mediaChannel{platform}}}}';
                    remoteId: 'marketingCampaigns{edges{node{mediaChannel{remoteId}}}}';
                    remoteState: 'marketingCampaigns{edges{node{mediaChannel{remoteState}}}}';
                    currency: 'marketingCampaigns{edges{node{mediaChannel{currency}}}}';
                    currencySymbol: 'marketingCampaigns{edges{node{mediaChannel{currencySymbol}}}}';
                    currencyOffset: 'marketingCampaigns{edges{node{mediaChannel{currencyOffset}}}}';
                    timezone: 'marketingCampaigns{edges{node{mediaChannel{timezone}}}}';
                    tokenStatus: 'marketingCampaigns{edges{node{mediaChannel{tokenStatus}}}}';
                };
                results: {
                    totalCount: 'marketingCampaigns{edges{node{results{totalCount}}}}';
                };
            };
            cursor: 'marketingCampaigns{edges{cursor}}';
        };
        pageInfo: {
            endCursor: 'marketingCampaigns{pageInfo{endCursor}}';
            startCursor: 'marketingCampaigns{pageInfo{startCursor}}';
            hasNextPage: 'marketingCampaigns{pageInfo{hasNextPage}}';
            hasPreviousPage: 'marketingCampaigns{pageInfo{hasPreviousPage}}';
        };
        totalCount: 'marketingCampaigns{totalCount}';
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
        id: 'marketplace{id}',
        creationDate: 'marketplace{creationDate}',
        lastChangeDate: 'marketplace{lastChangeDate}',
        name: 'marketplace{name}',
        systemStatus: 'marketplace{systemStatus}',
        errors: 'marketplace{errors}',
        organization: {
            id: 'marketplace{organization{id}}',
            creationDate: 'marketplace{organization{creationDate}}',
            lastChangeDate: 'marketplace{organization{lastChangeDate}}',
            name: 'marketplace{organization{name}}',
            systemStatus: 'marketplace{organization{systemStatus}}',
            errors: 'marketplace{organization{errors}}',
            tier: 'marketplace{organization{tier}}',
            users: {
                edges: {
                    cursor: 'marketplace{organization{users{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'marketplace{organization{users{pageInfo{endCursor}}}}',
                    startCursor:
                        'marketplace{organization{users{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'marketplace{organization{users{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'marketplace{organization{users{pageInfo{hasPreviousPage}}}}',
                },
                totalCount: 'marketplace{organization{users{totalCount}}}',
            },
            marketplaces: {
                edges: {
                    cursor:
                        'marketplace{organization{marketplaces{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'marketplace{organization{marketplaces{pageInfo{endCursor}}}}',
                    startCursor:
                        'marketplace{organization{marketplaces{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'marketplace{organization{marketplaces{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'marketplace{organization{marketplaces{pageInfo{hasPreviousPage}}}}',
                },
                totalCount:
                    'marketplace{organization{marketplaces{totalCount}}}',
            },
        },
        mediaChannels: {
            edges: {
                node: {
                    id: 'marketplace{mediaChannels{edges{node{id}}}}',
                    creationDate:
                        'marketplace{mediaChannels{edges{node{creationDate}}}}',
                    lastChangeDate:
                        'marketplace{mediaChannels{edges{node{lastChangeDate}}}}',
                    name: 'marketplace{mediaChannels{edges{node{name}}}}',
                    systemStatus:
                        'marketplace{mediaChannels{edges{node{systemStatus}}}}',
                    errors: 'marketplace{mediaChannels{edges{node{errors}}}}',
                    platform:
                        'marketplace{mediaChannels{edges{node{platform}}}}',
                    remoteId:
                        'marketplace{mediaChannels{edges{node{remoteId}}}}',
                    remoteState:
                        'marketplace{mediaChannels{edges{node{remoteState}}}}',
                    currency:
                        'marketplace{mediaChannels{edges{node{currency}}}}',
                    currencySymbol:
                        'marketplace{mediaChannels{edges{node{currencySymbol}}}}',
                    currencyOffset:
                        'marketplace{mediaChannels{edges{node{currencyOffset}}}}',
                    timezone:
                        'marketplace{mediaChannels{edges{node{timezone}}}}',
                    tokenStatus:
                        'marketplace{mediaChannels{edges{node{tokenStatus}}}}',
                },
                cursor: 'marketplace{mediaChannels{edges{cursor}}}',
            },
            pageInfo: {
                endCursor: 'marketplace{mediaChannels{pageInfo{endCursor}}}',
                startCursor:
                    'marketplace{mediaChannels{pageInfo{startCursor}}}',
                hasNextPage:
                    'marketplace{mediaChannels{pageInfo{hasNextPage}}}',
                hasPreviousPage:
                    'marketplace{mediaChannels{pageInfo{hasPreviousPage}}}',
            },
            totalCount: 'marketplace{mediaChannels{totalCount}}',
        },
        campaignTemplates: {
            edges: {
                node: {
                    id: 'marketplace{campaignTemplates{edges{node{id}}}}',
                    creationDate:
                        'marketplace{campaignTemplates{edges{node{creationDate}}}}',
                    lastChangeDate:
                        'marketplace{campaignTemplates{edges{node{lastChangeDate}}}}',
                    name: 'marketplace{campaignTemplates{edges{node{name}}}}',
                    description:
                        'marketplace{campaignTemplates{edges{node{description}}}}',
                    platform:
                        'marketplace{campaignTemplates{edges{node{platform}}}}',
                    remoteId:
                        'marketplace{campaignTemplates{edges{node{remoteId}}}}',
                    systemStatus:
                        'marketplace{campaignTemplates{edges{node{systemStatus}}}}',
                    errors:
                        'marketplace{campaignTemplates{edges{node{errors}}}}',
                },
                cursor: 'marketplace{campaignTemplates{edges{cursor}}}',
            },
            pageInfo: {
                endCursor:
                    'marketplace{campaignTemplates{pageInfo{endCursor}}}',
                startCursor:
                    'marketplace{campaignTemplates{pageInfo{startCursor}}}',
                hasNextPage:
                    'marketplace{campaignTemplates{pageInfo{hasNextPage}}}',
                hasPreviousPage:
                    'marketplace{campaignTemplates{pageInfo{hasPreviousPage}}}',
            },
            totalCount: 'marketplace{campaignTemplates{totalCount}}',
        },
        vendors: {
            edges: {
                node: {
                    id: 'marketplace{vendors{edges{node{id}}}}',
                    creationDate:
                        'marketplace{vendors{edges{node{creationDate}}}}',
                    lastChangeDate:
                        'marketplace{vendors{edges{node{lastChangeDate}}}}',
                    name: 'marketplace{vendors{edges{node{name}}}}',
                    systemStatus:
                        'marketplace{vendors{edges{node{systemStatus}}}}',
                    errors: 'marketplace{vendors{edges{node{errors}}}}',
                },
                cursor: 'marketplace{vendors{edges{cursor}}}',
            },
            pageInfo: {
                endCursor: 'marketplace{vendors{pageInfo{endCursor}}}',
                startCursor: 'marketplace{vendors{pageInfo{startCursor}}}',
                hasNextPage: 'marketplace{vendors{pageInfo{hasNextPage}}}',
                hasPreviousPage:
                    'marketplace{vendors{pageInfo{hasPreviousPage}}}',
            },
            totalCount: 'marketplace{vendors{totalCount}}',
        },
        vendorTokens: {
            edges: {
                node: {
                    id: 'marketplace{vendorTokens{edges{node{id}}}}',
                    creationDate:
                        'marketplace{vendorTokens{edges{node{creationDate}}}}',
                    lastChangeDate:
                        'marketplace{vendorTokens{edges{node{lastChangeDate}}}}',
                    token: 'marketplace{vendorTokens{edges{node{token}}}}',
                },
                cursor: 'marketplace{vendorTokens{edges{cursor}}}',
            },
            pageInfo: {
                endCursor: 'marketplace{vendorTokens{pageInfo{endCursor}}}',
                startCursor: 'marketplace{vendorTokens{pageInfo{startCursor}}}',
                hasNextPage: 'marketplace{vendorTokens{pageInfo{hasNextPage}}}',
                hasPreviousPage:
                    'marketplace{vendorTokens{pageInfo{hasPreviousPage}}}',
            },
            totalCount: 'marketplace{vendorTokens{totalCount}}',
        },
        creativeTemplates: {
            edges: {
                node: {
                    id: 'marketplace{creativeTemplates{edges{node{id}}}}',
                    creationDate:
                        'marketplace{creativeTemplates{edges{node{creationDate}}}}',
                    lastChangeDate:
                        'marketplace{creativeTemplates{edges{node{lastChangeDate}}}}',
                    name: 'marketplace{creativeTemplates{edges{node{name}}}}',
                    height:
                        'marketplace{creativeTemplates{edges{node{height}}}}',
                    width: 'marketplace{creativeTemplates{edges{node{width}}}}',
                    systemStatus:
                        'marketplace{creativeTemplates{edges{node{systemStatus}}}}',
                    errors:
                        'marketplace{creativeTemplates{edges{node{errors}}}}',
                },
                cursor: 'marketplace{creativeTemplates{edges{cursor}}}',
            },
            pageInfo: {
                endCursor:
                    'marketplace{creativeTemplates{pageInfo{endCursor}}}',
                startCursor:
                    'marketplace{creativeTemplates{pageInfo{startCursor}}}',
                hasNextPage:
                    'marketplace{creativeTemplates{pageInfo{hasNextPage}}}',
                hasPreviousPage:
                    'marketplace{creativeTemplates{pageInfo{hasPreviousPage}}}',
            },
            totalCount: 'marketplace{creativeTemplates{totalCount}}',
        },
    },
    marketingCampaigns: {
        edges: {
            node: {
                id: 'marketingCampaigns{edges{node{id}}}',
                creationDate: 'marketingCampaigns{edges{node{creationDate}}}',
                lastChangeDate:
                    'marketingCampaigns{edges{node{lastChangeDate}}}',
                resultsSource: 'marketingCampaigns{edges{node{resultsSource}}}',
                vendor: {
                    id: 'marketingCampaigns{edges{node{vendor{id}}}}',
                    creationDate:
                        'marketingCampaigns{edges{node{vendor{creationDate}}}}',
                    lastChangeDate:
                        'marketingCampaigns{edges{node{vendor{lastChangeDate}}}}',
                    name: 'marketingCampaigns{edges{node{vendor{name}}}}',
                    systemStatus:
                        'marketingCampaigns{edges{node{vendor{systemStatus}}}}',
                    errors: 'marketingCampaigns{edges{node{vendor{errors}}}}',
                },
                systemStatus: 'marketingCampaigns{edges{node{systemStatus}}}',
                errors: 'marketingCampaigns{edges{node{errors}}}',
                name: 'marketingCampaigns{edges{node{name}}}',
                status: 'marketingCampaigns{edges{node{status}}}',
                creativeSpec: 'marketingCampaigns{edges{node{creativeSpec}}}',
                runTimeSpec: 'marketingCampaigns{edges{node{runTimeSpec}}}',
                marketingAds: {
                    totalCount:
                        'marketingCampaigns{edges{node{marketingAds{totalCount}}}}',
                },
                products: {
                    totalCount:
                        'marketingCampaigns{edges{node{products{totalCount}}}}',
                },
                catalog: {
                    id: 'marketingCampaigns{edges{node{catalog{id}}}}',
                    creationDate:
                        'marketingCampaigns{edges{node{catalog{creationDate}}}}',
                    lastChangeDate:
                        'marketingCampaigns{edges{node{catalog{lastChangeDate}}}}',
                    name: 'marketingCampaigns{edges{node{catalog{name}}}}',
                    catalogType:
                        'marketingCampaigns{edges{node{catalog{catalogType}}}}',
                    remoteId:
                        'marketingCampaigns{edges{node{catalog{remoteId}}}}',
                    systemStatus:
                        'marketingCampaigns{edges{node{catalog{systemStatus}}}}',
                    remoteState:
                        'marketingCampaigns{edges{node{catalog{remoteState}}}}',
                    dataFeedId:
                        'marketingCampaigns{edges{node{catalog{dataFeedId}}}}',
                    errors: 'marketingCampaigns{edges{node{catalog{errors}}}}',
                },
                campaignTemplate: {
                    id: 'marketingCampaigns{edges{node{campaignTemplate{id}}}}',
                    creationDate:
                        'marketingCampaigns{edges{node{campaignTemplate{creationDate}}}}',
                    lastChangeDate:
                        'marketingCampaigns{edges{node{campaignTemplate{lastChangeDate}}}}',
                    name:
                        'marketingCampaigns{edges{node{campaignTemplate{name}}}}',
                    description:
                        'marketingCampaigns{edges{node{campaignTemplate{description}}}}',
                    platform:
                        'marketingCampaigns{edges{node{campaignTemplate{platform}}}}',
                    remoteId:
                        'marketingCampaigns{edges{node{campaignTemplate{remoteId}}}}',
                    systemStatus:
                        'marketingCampaigns{edges{node{campaignTemplate{systemStatus}}}}',
                    errors:
                        'marketingCampaigns{edges{node{campaignTemplate{errors}}}}',
                },
                mediaChannel: {
                    id: 'marketingCampaigns{edges{node{mediaChannel{id}}}}',
                    creationDate:
                        'marketingCampaigns{edges{node{mediaChannel{creationDate}}}}',
                    lastChangeDate:
                        'marketingCampaigns{edges{node{mediaChannel{lastChangeDate}}}}',
                    name: 'marketingCampaigns{edges{node{mediaChannel{name}}}}',
                    systemStatus:
                        'marketingCampaigns{edges{node{mediaChannel{systemStatus}}}}',
                    errors:
                        'marketingCampaigns{edges{node{mediaChannel{errors}}}}',
                    platform:
                        'marketingCampaigns{edges{node{mediaChannel{platform}}}}',
                    remoteId:
                        'marketingCampaigns{edges{node{mediaChannel{remoteId}}}}',
                    remoteState:
                        'marketingCampaigns{edges{node{mediaChannel{remoteState}}}}',
                    currency:
                        'marketingCampaigns{edges{node{mediaChannel{currency}}}}',
                    currencySymbol:
                        'marketingCampaigns{edges{node{mediaChannel{currencySymbol}}}}',
                    currencyOffset:
                        'marketingCampaigns{edges{node{mediaChannel{currencyOffset}}}}',
                    timezone:
                        'marketingCampaigns{edges{node{mediaChannel{timezone}}}}',
                    tokenStatus:
                        'marketingCampaigns{edges{node{mediaChannel{tokenStatus}}}}',
                },
                results: {
                    totalCount:
                        'marketingCampaigns{edges{node{results{totalCount}}}}',
                },
            },
            cursor: 'marketingCampaigns{edges{cursor}}',
        },
        pageInfo: {
            endCursor: 'marketingCampaigns{pageInfo{endCursor}}',
            startCursor: 'marketingCampaigns{pageInfo{startCursor}}',
            hasNextPage: 'marketingCampaigns{pageInfo{hasNextPage}}',
            hasPreviousPage: 'marketingCampaigns{pageInfo{hasPreviousPage}}',
        },
        totalCount: 'marketingCampaigns{totalCount}',
    },
};
export type CampaignTemplateField =
    | 'id'
    | 'creationDate'
    | 'lastChangeDate'
    | 'name'
    | 'description'
    | 'platform'
    | 'remoteId'
    | 'systemStatus'
    | 'errors'
    | 'marketplace{id}'
    | 'marketplace{creationDate}'
    | 'marketplace{lastChangeDate}'
    | 'marketplace{name}'
    | 'marketplace{systemStatus}'
    | 'marketplace{errors}'
    | 'marketplace{organization{id}}'
    | 'marketplace{organization{creationDate}}'
    | 'marketplace{organization{lastChangeDate}}'
    | 'marketplace{organization{name}}'
    | 'marketplace{organization{systemStatus}}'
    | 'marketplace{organization{errors}}'
    | 'marketplace{organization{tier}}'
    | 'marketplace{organization{users{edges{cursor}}}}'
    | 'marketplace{organization{users{pageInfo{endCursor}}}}'
    | 'marketplace{organization{users{pageInfo{startCursor}}}}'
    | 'marketplace{organization{users{pageInfo{hasNextPage}}}}'
    | 'marketplace{organization{users{pageInfo{hasPreviousPage}}}}'
    | 'marketplace{organization{users{totalCount}}}'
    | 'marketplace{organization{marketplaces{edges{cursor}}}}'
    | 'marketplace{organization{marketplaces{pageInfo{endCursor}}}}'
    | 'marketplace{organization{marketplaces{pageInfo{startCursor}}}}'
    | 'marketplace{organization{marketplaces{pageInfo{hasNextPage}}}}'
    | 'marketplace{organization{marketplaces{pageInfo{hasPreviousPage}}}}'
    | 'marketplace{organization{marketplaces{totalCount}}}'
    | 'marketplace{mediaChannels{edges{node{id}}}}'
    | 'marketplace{mediaChannels{edges{node{creationDate}}}}'
    | 'marketplace{mediaChannels{edges{node{lastChangeDate}}}}'
    | 'marketplace{mediaChannels{edges{node{name}}}}'
    | 'marketplace{mediaChannels{edges{node{systemStatus}}}}'
    | 'marketplace{mediaChannels{edges{node{errors}}}}'
    | 'marketplace{mediaChannels{edges{node{platform}}}}'
    | 'marketplace{mediaChannels{edges{node{remoteId}}}}'
    | 'marketplace{mediaChannels{edges{node{remoteState}}}}'
    | 'marketplace{mediaChannels{edges{node{currency}}}}'
    | 'marketplace{mediaChannels{edges{node{currencySymbol}}}}'
    | 'marketplace{mediaChannels{edges{node{currencyOffset}}}}'
    | 'marketplace{mediaChannels{edges{node{timezone}}}}'
    | 'marketplace{mediaChannels{edges{node{tokenStatus}}}}'
    | 'marketplace{mediaChannels{edges{cursor}}}'
    | 'marketplace{mediaChannels{pageInfo{endCursor}}}'
    | 'marketplace{mediaChannels{pageInfo{startCursor}}}'
    | 'marketplace{mediaChannels{pageInfo{hasNextPage}}}'
    | 'marketplace{mediaChannels{pageInfo{hasPreviousPage}}}'
    | 'marketplace{mediaChannels{totalCount}}'
    | 'marketplace{campaignTemplates{edges{node{id}}}}'
    | 'marketplace{campaignTemplates{edges{node{creationDate}}}}'
    | 'marketplace{campaignTemplates{edges{node{lastChangeDate}}}}'
    | 'marketplace{campaignTemplates{edges{node{name}}}}'
    | 'marketplace{campaignTemplates{edges{node{description}}}}'
    | 'marketplace{campaignTemplates{edges{node{platform}}}}'
    | 'marketplace{campaignTemplates{edges{node{remoteId}}}}'
    | 'marketplace{campaignTemplates{edges{node{systemStatus}}}}'
    | 'marketplace{campaignTemplates{edges{node{errors}}}}'
    | 'marketplace{campaignTemplates{edges{cursor}}}'
    | 'marketplace{campaignTemplates{pageInfo{endCursor}}}'
    | 'marketplace{campaignTemplates{pageInfo{startCursor}}}'
    | 'marketplace{campaignTemplates{pageInfo{hasNextPage}}}'
    | 'marketplace{campaignTemplates{pageInfo{hasPreviousPage}}}'
    | 'marketplace{campaignTemplates{totalCount}}'
    | 'marketplace{vendors{edges{node{id}}}}'
    | 'marketplace{vendors{edges{node{creationDate}}}}'
    | 'marketplace{vendors{edges{node{lastChangeDate}}}}'
    | 'marketplace{vendors{edges{node{name}}}}'
    | 'marketplace{vendors{edges{node{systemStatus}}}}'
    | 'marketplace{vendors{edges{node{errors}}}}'
    | 'marketplace{vendors{edges{cursor}}}'
    | 'marketplace{vendors{pageInfo{endCursor}}}'
    | 'marketplace{vendors{pageInfo{startCursor}}}'
    | 'marketplace{vendors{pageInfo{hasNextPage}}}'
    | 'marketplace{vendors{pageInfo{hasPreviousPage}}}'
    | 'marketplace{vendors{totalCount}}'
    | 'marketplace{vendorTokens{edges{node{id}}}}'
    | 'marketplace{vendorTokens{edges{node{creationDate}}}}'
    | 'marketplace{vendorTokens{edges{node{lastChangeDate}}}}'
    | 'marketplace{vendorTokens{edges{node{token}}}}'
    | 'marketplace{vendorTokens{edges{cursor}}}'
    | 'marketplace{vendorTokens{pageInfo{endCursor}}}'
    | 'marketplace{vendorTokens{pageInfo{startCursor}}}'
    | 'marketplace{vendorTokens{pageInfo{hasNextPage}}}'
    | 'marketplace{vendorTokens{pageInfo{hasPreviousPage}}}'
    | 'marketplace{vendorTokens{totalCount}}'
    | 'marketplace{creativeTemplates{edges{node{id}}}}'
    | 'marketplace{creativeTemplates{edges{node{creationDate}}}}'
    | 'marketplace{creativeTemplates{edges{node{lastChangeDate}}}}'
    | 'marketplace{creativeTemplates{edges{node{name}}}}'
    | 'marketplace{creativeTemplates{edges{node{height}}}}'
    | 'marketplace{creativeTemplates{edges{node{width}}}}'
    | 'marketplace{creativeTemplates{edges{node{systemStatus}}}}'
    | 'marketplace{creativeTemplates{edges{node{errors}}}}'
    | 'marketplace{creativeTemplates{edges{cursor}}}'
    | 'marketplace{creativeTemplates{pageInfo{endCursor}}}'
    | 'marketplace{creativeTemplates{pageInfo{startCursor}}}'
    | 'marketplace{creativeTemplates{pageInfo{hasNextPage}}}'
    | 'marketplace{creativeTemplates{pageInfo{hasPreviousPage}}}'
    | 'marketplace{creativeTemplates{totalCount}}'
    | 'marketingCampaigns{edges{node{id}}}'
    | 'marketingCampaigns{edges{node{creationDate}}}'
    | 'marketingCampaigns{edges{node{lastChangeDate}}}'
    | 'marketingCampaigns{edges{node{resultsSource}}}'
    | 'marketingCampaigns{edges{node{vendor{id}}}}'
    | 'marketingCampaigns{edges{node{vendor{creationDate}}}}'
    | 'marketingCampaigns{edges{node{vendor{lastChangeDate}}}}'
    | 'marketingCampaigns{edges{node{vendor{name}}}}'
    | 'marketingCampaigns{edges{node{vendor{systemStatus}}}}'
    | 'marketingCampaigns{edges{node{vendor{errors}}}}'
    | 'marketingCampaigns{edges{node{systemStatus}}}'
    | 'marketingCampaigns{edges{node{errors}}}'
    | 'marketingCampaigns{edges{node{name}}}'
    | 'marketingCampaigns{edges{node{status}}}'
    | 'marketingCampaigns{edges{node{creativeSpec}}}'
    | 'marketingCampaigns{edges{node{runTimeSpec}}}'
    | 'marketingCampaigns{edges{node{marketingAds{totalCount}}}}'
    | 'marketingCampaigns{edges{node{products{totalCount}}}}'
    | 'marketingCampaigns{edges{node{catalog{id}}}}'
    | 'marketingCampaigns{edges{node{catalog{creationDate}}}}'
    | 'marketingCampaigns{edges{node{catalog{lastChangeDate}}}}'
    | 'marketingCampaigns{edges{node{catalog{name}}}}'
    | 'marketingCampaigns{edges{node{catalog{catalogType}}}}'
    | 'marketingCampaigns{edges{node{catalog{remoteId}}}}'
    | 'marketingCampaigns{edges{node{catalog{systemStatus}}}}'
    | 'marketingCampaigns{edges{node{catalog{remoteState}}}}'
    | 'marketingCampaigns{edges{node{catalog{dataFeedId}}}}'
    | 'marketingCampaigns{edges{node{catalog{errors}}}}'
    | 'marketingCampaigns{edges{node{campaignTemplate{id}}}}'
    | 'marketingCampaigns{edges{node{campaignTemplate{creationDate}}}}'
    | 'marketingCampaigns{edges{node{campaignTemplate{lastChangeDate}}}}'
    | 'marketingCampaigns{edges{node{campaignTemplate{name}}}}'
    | 'marketingCampaigns{edges{node{campaignTemplate{description}}}}'
    | 'marketingCampaigns{edges{node{campaignTemplate{platform}}}}'
    | 'marketingCampaigns{edges{node{campaignTemplate{remoteId}}}}'
    | 'marketingCampaigns{edges{node{campaignTemplate{systemStatus}}}}'
    | 'marketingCampaigns{edges{node{campaignTemplate{errors}}}}'
    | 'marketingCampaigns{edges{node{mediaChannel{id}}}}'
    | 'marketingCampaigns{edges{node{mediaChannel{creationDate}}}}'
    | 'marketingCampaigns{edges{node{mediaChannel{lastChangeDate}}}}'
    | 'marketingCampaigns{edges{node{mediaChannel{name}}}}'
    | 'marketingCampaigns{edges{node{mediaChannel{systemStatus}}}}'
    | 'marketingCampaigns{edges{node{mediaChannel{errors}}}}'
    | 'marketingCampaigns{edges{node{mediaChannel{platform}}}}'
    | 'marketingCampaigns{edges{node{mediaChannel{remoteId}}}}'
    | 'marketingCampaigns{edges{node{mediaChannel{remoteState}}}}'
    | 'marketingCampaigns{edges{node{mediaChannel{currency}}}}'
    | 'marketingCampaigns{edges{node{mediaChannel{currencySymbol}}}}'
    | 'marketingCampaigns{edges{node{mediaChannel{currencyOffset}}}}'
    | 'marketingCampaigns{edges{node{mediaChannel{timezone}}}}'
    | 'marketingCampaigns{edges{node{mediaChannel{tokenStatus}}}}'
    | 'marketingCampaigns{edges{node{results{totalCount}}}}'
    | 'marketingCampaigns{edges{cursor}}'
    | 'marketingCampaigns{pageInfo{endCursor}}'
    | 'marketingCampaigns{pageInfo{startCursor}}'
    | 'marketingCampaigns{pageInfo{hasNextPage}}'
    | 'marketingCampaigns{pageInfo{hasPreviousPage}}'
    | 'marketingCampaigns{totalCount}';
export type MarketplaceFields = {
    id: 'id';
    creationDate: 'creationDate';
    lastChangeDate: 'lastChangeDate';
    name: 'name';
    systemStatus: 'systemStatus';
    errors: 'errors';
    organization: {
        id: 'organization{id}';
        creationDate: 'organization{creationDate}';
        lastChangeDate: 'organization{lastChangeDate}';
        name: 'organization{name}';
        systemStatus: 'organization{systemStatus}';
        errors: 'organization{errors}';
        tier: 'organization{tier}';
        users: {
            edges: {
                node: {
                    id: 'organization{users{edges{node{id}}}}';
                    creationDate: 'organization{users{edges{node{creationDate}}}}';
                    lastChangeDate: 'organization{users{edges{node{lastChangeDate}}}}';
                    email: 'organization{users{edges{node{email}}}}';
                    firstName: 'organization{users{edges{node{firstName}}}}';
                    lastName: 'organization{users{edges{node{lastName}}}}';
                };
                cursor: 'organization{users{edges{cursor}}}';
            };
            pageInfo: {
                endCursor: 'organization{users{pageInfo{endCursor}}}';
                startCursor: 'organization{users{pageInfo{startCursor}}}';
                hasNextPage: 'organization{users{pageInfo{hasNextPage}}}';
                hasPreviousPage: 'organization{users{pageInfo{hasPreviousPage}}}';
            };
            totalCount: 'organization{users{totalCount}}';
        };
        marketplaces: {
            edges: {
                node: {
                    id: 'organization{marketplaces{edges{node{id}}}}';
                    creationDate: 'organization{marketplaces{edges{node{creationDate}}}}';
                    lastChangeDate: 'organization{marketplaces{edges{node{lastChangeDate}}}}';
                    name: 'organization{marketplaces{edges{node{name}}}}';
                    systemStatus: 'organization{marketplaces{edges{node{systemStatus}}}}';
                    errors: 'organization{marketplaces{edges{node{errors}}}}';
                };
                cursor: 'organization{marketplaces{edges{cursor}}}';
            };
            pageInfo: {
                endCursor: 'organization{marketplaces{pageInfo{endCursor}}}';
                startCursor: 'organization{marketplaces{pageInfo{startCursor}}}';
                hasNextPage: 'organization{marketplaces{pageInfo{hasNextPage}}}';
                hasPreviousPage: 'organization{marketplaces{pageInfo{hasPreviousPage}}}';
            };
            totalCount: 'organization{marketplaces{totalCount}}';
        };
    };
    mediaChannels: {
        edges: {
            node: {
                id: 'mediaChannels{edges{node{id}}}';
                creationDate: 'mediaChannels{edges{node{creationDate}}}';
                lastChangeDate: 'mediaChannels{edges{node{lastChangeDate}}}';
                name: 'mediaChannels{edges{node{name}}}';
                systemStatus: 'mediaChannels{edges{node{systemStatus}}}';
                errors: 'mediaChannels{edges{node{errors}}}';
                platform: 'mediaChannels{edges{node{platform}}}';
                remoteId: 'mediaChannels{edges{node{remoteId}}}';
                remoteState: 'mediaChannels{edges{node{remoteState}}}';
                currency: 'mediaChannels{edges{node{currency}}}';
                currencySymbol: 'mediaChannels{edges{node{currencySymbol}}}';
                currencyOffset: 'mediaChannels{edges{node{currencyOffset}}}';
                timezone: 'mediaChannels{edges{node{timezone}}}';
                tokenStatus: 'mediaChannels{edges{node{tokenStatus}}}';
                catalogs: {
                    totalCount: 'mediaChannels{edges{node{catalogs{totalCount}}}}';
                };
                marketplace: {
                    id: 'mediaChannels{edges{node{marketplace{id}}}}';
                    creationDate: 'mediaChannels{edges{node{marketplace{creationDate}}}}';
                    lastChangeDate: 'mediaChannels{edges{node{marketplace{lastChangeDate}}}}';
                    name: 'mediaChannels{edges{node{marketplace{name}}}}';
                    systemStatus: 'mediaChannels{edges{node{marketplace{systemStatus}}}}';
                    errors: 'mediaChannels{edges{node{marketplace{errors}}}}';
                };
            };
            cursor: 'mediaChannels{edges{cursor}}';
        };
        pageInfo: {
            endCursor: 'mediaChannels{pageInfo{endCursor}}';
            startCursor: 'mediaChannels{pageInfo{startCursor}}';
            hasNextPage: 'mediaChannels{pageInfo{hasNextPage}}';
            hasPreviousPage: 'mediaChannels{pageInfo{hasPreviousPage}}';
        };
        totalCount: 'mediaChannels{totalCount}';
    };
    campaignTemplates: {
        edges: {
            node: {
                id: 'campaignTemplates{edges{node{id}}}';
                creationDate: 'campaignTemplates{edges{node{creationDate}}}';
                lastChangeDate: 'campaignTemplates{edges{node{lastChangeDate}}}';
                name: 'campaignTemplates{edges{node{name}}}';
                description: 'campaignTemplates{edges{node{description}}}';
                platform: 'campaignTemplates{edges{node{platform}}}';
                remoteId: 'campaignTemplates{edges{node{remoteId}}}';
                systemStatus: 'campaignTemplates{edges{node{systemStatus}}}';
                errors: 'campaignTemplates{edges{node{errors}}}';
                marketplace: {
                    id: 'campaignTemplates{edges{node{marketplace{id}}}}';
                    creationDate: 'campaignTemplates{edges{node{marketplace{creationDate}}}}';
                    lastChangeDate: 'campaignTemplates{edges{node{marketplace{lastChangeDate}}}}';
                    name: 'campaignTemplates{edges{node{marketplace{name}}}}';
                    systemStatus: 'campaignTemplates{edges{node{marketplace{systemStatus}}}}';
                    errors: 'campaignTemplates{edges{node{marketplace{errors}}}}';
                };
                marketingCampaigns: {
                    totalCount: 'campaignTemplates{edges{node{marketingCampaigns{totalCount}}}}';
                };
            };
            cursor: 'campaignTemplates{edges{cursor}}';
        };
        pageInfo: {
            endCursor: 'campaignTemplates{pageInfo{endCursor}}';
            startCursor: 'campaignTemplates{pageInfo{startCursor}}';
            hasNextPage: 'campaignTemplates{pageInfo{hasNextPage}}';
            hasPreviousPage: 'campaignTemplates{pageInfo{hasPreviousPage}}';
        };
        totalCount: 'campaignTemplates{totalCount}';
    };
    vendors: {
        edges: {
            node: {
                id: 'vendors{edges{node{id}}}';
                creationDate: 'vendors{edges{node{creationDate}}}';
                lastChangeDate: 'vendors{edges{node{lastChangeDate}}}';
                name: 'vendors{edges{node{name}}}';
                systemStatus: 'vendors{edges{node{systemStatus}}}';
                errors: 'vendors{edges{node{errors}}}';
                marketplace: {
                    id: 'vendors{edges{node{marketplace{id}}}}';
                    creationDate: 'vendors{edges{node{marketplace{creationDate}}}}';
                    lastChangeDate: 'vendors{edges{node{marketplace{lastChangeDate}}}}';
                    name: 'vendors{edges{node{marketplace{name}}}}';
                    systemStatus: 'vendors{edges{node{marketplace{systemStatus}}}}';
                    errors: 'vendors{edges{node{marketplace{errors}}}}';
                };
                vendorTokens: {
                    totalCount: 'vendors{edges{node{vendorTokens{totalCount}}}}';
                };
                products: {
                    totalCount: 'vendors{edges{node{products{totalCount}}}}';
                };
            };
            cursor: 'vendors{edges{cursor}}';
        };
        pageInfo: {
            endCursor: 'vendors{pageInfo{endCursor}}';
            startCursor: 'vendors{pageInfo{startCursor}}';
            hasNextPage: 'vendors{pageInfo{hasNextPage}}';
            hasPreviousPage: 'vendors{pageInfo{hasPreviousPage}}';
        };
        totalCount: 'vendors{totalCount}';
    };
    vendorTokens: {
        edges: {
            node: {
                id: 'vendorTokens{edges{node{id}}}';
                creationDate: 'vendorTokens{edges{node{creationDate}}}';
                lastChangeDate: 'vendorTokens{edges{node{lastChangeDate}}}';
                token: 'vendorTokens{edges{node{token}}}';
                vendor: {
                    id: 'vendorTokens{edges{node{vendor{id}}}}';
                    creationDate: 'vendorTokens{edges{node{vendor{creationDate}}}}';
                    lastChangeDate: 'vendorTokens{edges{node{vendor{lastChangeDate}}}}';
                    name: 'vendorTokens{edges{node{vendor{name}}}}';
                    systemStatus: 'vendorTokens{edges{node{vendor{systemStatus}}}}';
                    errors: 'vendorTokens{edges{node{vendor{errors}}}}';
                };
                marketplace: {
                    id: 'vendorTokens{edges{node{marketplace{id}}}}';
                    creationDate: 'vendorTokens{edges{node{marketplace{creationDate}}}}';
                    lastChangeDate: 'vendorTokens{edges{node{marketplace{lastChangeDate}}}}';
                    name: 'vendorTokens{edges{node{marketplace{name}}}}';
                    systemStatus: 'vendorTokens{edges{node{marketplace{systemStatus}}}}';
                    errors: 'vendorTokens{edges{node{marketplace{errors}}}}';
                };
            };
            cursor: 'vendorTokens{edges{cursor}}';
        };
        pageInfo: {
            endCursor: 'vendorTokens{pageInfo{endCursor}}';
            startCursor: 'vendorTokens{pageInfo{startCursor}}';
            hasNextPage: 'vendorTokens{pageInfo{hasNextPage}}';
            hasPreviousPage: 'vendorTokens{pageInfo{hasPreviousPage}}';
        };
        totalCount: 'vendorTokens{totalCount}';
    };
    creativeTemplates: {
        edges: {
            node: {
                id: 'creativeTemplates{edges{node{id}}}';
                creationDate: 'creativeTemplates{edges{node{creationDate}}}';
                lastChangeDate: 'creativeTemplates{edges{node{lastChangeDate}}}';
                name: 'creativeTemplates{edges{node{name}}}';
                height: 'creativeTemplates{edges{node{height}}}';
                width: 'creativeTemplates{edges{node{width}}}';
                systemStatus: 'creativeTemplates{edges{node{systemStatus}}}';
                errors: 'creativeTemplates{edges{node{errors}}}';
                marketplace: {
                    id: 'creativeTemplates{edges{node{marketplace{id}}}}';
                    creationDate: 'creativeTemplates{edges{node{marketplace{creationDate}}}}';
                    lastChangeDate: 'creativeTemplates{edges{node{marketplace{lastChangeDate}}}}';
                    name: 'creativeTemplates{edges{node{marketplace{name}}}}';
                    systemStatus: 'creativeTemplates{edges{node{marketplace{systemStatus}}}}';
                    errors: 'creativeTemplates{edges{node{marketplace{errors}}}}';
                };
                creativeLayers: {
                    totalCount: 'creativeTemplates{edges{node{creativeLayers{totalCount}}}}';
                };
            };
            cursor: 'creativeTemplates{edges{cursor}}';
        };
        pageInfo: {
            endCursor: 'creativeTemplates{pageInfo{endCursor}}';
            startCursor: 'creativeTemplates{pageInfo{startCursor}}';
            hasNextPage: 'creativeTemplates{pageInfo{hasNextPage}}';
            hasPreviousPage: 'creativeTemplates{pageInfo{hasPreviousPage}}';
        };
        totalCount: 'creativeTemplates{totalCount}';
    };
};
export const MarketplaceFields: MarketplaceFields = {
    id: 'id',
    creationDate: 'creationDate',
    lastChangeDate: 'lastChangeDate',
    name: 'name',
    systemStatus: 'systemStatus',
    errors: 'errors',
    organization: {
        id: 'organization{id}',
        creationDate: 'organization{creationDate}',
        lastChangeDate: 'organization{lastChangeDate}',
        name: 'organization{name}',
        systemStatus: 'organization{systemStatus}',
        errors: 'organization{errors}',
        tier: 'organization{tier}',
        users: {
            edges: {
                node: {
                    id: 'organization{users{edges{node{id}}}}',
                    creationDate:
                        'organization{users{edges{node{creationDate}}}}',
                    lastChangeDate:
                        'organization{users{edges{node{lastChangeDate}}}}',
                    email: 'organization{users{edges{node{email}}}}',
                    firstName: 'organization{users{edges{node{firstName}}}}',
                    lastName: 'organization{users{edges{node{lastName}}}}',
                },
                cursor: 'organization{users{edges{cursor}}}',
            },
            pageInfo: {
                endCursor: 'organization{users{pageInfo{endCursor}}}',
                startCursor: 'organization{users{pageInfo{startCursor}}}',
                hasNextPage: 'organization{users{pageInfo{hasNextPage}}}',
                hasPreviousPage:
                    'organization{users{pageInfo{hasPreviousPage}}}',
            },
            totalCount: 'organization{users{totalCount}}',
        },
        marketplaces: {
            edges: {
                node: {
                    id: 'organization{marketplaces{edges{node{id}}}}',
                    creationDate:
                        'organization{marketplaces{edges{node{creationDate}}}}',
                    lastChangeDate:
                        'organization{marketplaces{edges{node{lastChangeDate}}}}',
                    name: 'organization{marketplaces{edges{node{name}}}}',
                    systemStatus:
                        'organization{marketplaces{edges{node{systemStatus}}}}',
                    errors: 'organization{marketplaces{edges{node{errors}}}}',
                },
                cursor: 'organization{marketplaces{edges{cursor}}}',
            },
            pageInfo: {
                endCursor: 'organization{marketplaces{pageInfo{endCursor}}}',
                startCursor:
                    'organization{marketplaces{pageInfo{startCursor}}}',
                hasNextPage:
                    'organization{marketplaces{pageInfo{hasNextPage}}}',
                hasPreviousPage:
                    'organization{marketplaces{pageInfo{hasPreviousPage}}}',
            },
            totalCount: 'organization{marketplaces{totalCount}}',
        },
    },
    mediaChannels: {
        edges: {
            node: {
                id: 'mediaChannels{edges{node{id}}}',
                creationDate: 'mediaChannels{edges{node{creationDate}}}',
                lastChangeDate: 'mediaChannels{edges{node{lastChangeDate}}}',
                name: 'mediaChannels{edges{node{name}}}',
                systemStatus: 'mediaChannels{edges{node{systemStatus}}}',
                errors: 'mediaChannels{edges{node{errors}}}',
                platform: 'mediaChannels{edges{node{platform}}}',
                remoteId: 'mediaChannels{edges{node{remoteId}}}',
                remoteState: 'mediaChannels{edges{node{remoteState}}}',
                currency: 'mediaChannels{edges{node{currency}}}',
                currencySymbol: 'mediaChannels{edges{node{currencySymbol}}}',
                currencyOffset: 'mediaChannels{edges{node{currencyOffset}}}',
                timezone: 'mediaChannels{edges{node{timezone}}}',
                tokenStatus: 'mediaChannels{edges{node{tokenStatus}}}',
                catalogs: {
                    totalCount:
                        'mediaChannels{edges{node{catalogs{totalCount}}}}',
                },
                marketplace: {
                    id: 'mediaChannels{edges{node{marketplace{id}}}}',
                    creationDate:
                        'mediaChannels{edges{node{marketplace{creationDate}}}}',
                    lastChangeDate:
                        'mediaChannels{edges{node{marketplace{lastChangeDate}}}}',
                    name: 'mediaChannels{edges{node{marketplace{name}}}}',
                    systemStatus:
                        'mediaChannels{edges{node{marketplace{systemStatus}}}}',
                    errors: 'mediaChannels{edges{node{marketplace{errors}}}}',
                },
            },
            cursor: 'mediaChannels{edges{cursor}}',
        },
        pageInfo: {
            endCursor: 'mediaChannels{pageInfo{endCursor}}',
            startCursor: 'mediaChannels{pageInfo{startCursor}}',
            hasNextPage: 'mediaChannels{pageInfo{hasNextPage}}',
            hasPreviousPage: 'mediaChannels{pageInfo{hasPreviousPage}}',
        },
        totalCount: 'mediaChannels{totalCount}',
    },
    campaignTemplates: {
        edges: {
            node: {
                id: 'campaignTemplates{edges{node{id}}}',
                creationDate: 'campaignTemplates{edges{node{creationDate}}}',
                lastChangeDate:
                    'campaignTemplates{edges{node{lastChangeDate}}}',
                name: 'campaignTemplates{edges{node{name}}}',
                description: 'campaignTemplates{edges{node{description}}}',
                platform: 'campaignTemplates{edges{node{platform}}}',
                remoteId: 'campaignTemplates{edges{node{remoteId}}}',
                systemStatus: 'campaignTemplates{edges{node{systemStatus}}}',
                errors: 'campaignTemplates{edges{node{errors}}}',
                marketplace: {
                    id: 'campaignTemplates{edges{node{marketplace{id}}}}',
                    creationDate:
                        'campaignTemplates{edges{node{marketplace{creationDate}}}}',
                    lastChangeDate:
                        'campaignTemplates{edges{node{marketplace{lastChangeDate}}}}',
                    name: 'campaignTemplates{edges{node{marketplace{name}}}}',
                    systemStatus:
                        'campaignTemplates{edges{node{marketplace{systemStatus}}}}',
                    errors:
                        'campaignTemplates{edges{node{marketplace{errors}}}}',
                },
                marketingCampaigns: {
                    totalCount:
                        'campaignTemplates{edges{node{marketingCampaigns{totalCount}}}}',
                },
            },
            cursor: 'campaignTemplates{edges{cursor}}',
        },
        pageInfo: {
            endCursor: 'campaignTemplates{pageInfo{endCursor}}',
            startCursor: 'campaignTemplates{pageInfo{startCursor}}',
            hasNextPage: 'campaignTemplates{pageInfo{hasNextPage}}',
            hasPreviousPage: 'campaignTemplates{pageInfo{hasPreviousPage}}',
        },
        totalCount: 'campaignTemplates{totalCount}',
    },
    vendors: {
        edges: {
            node: {
                id: 'vendors{edges{node{id}}}',
                creationDate: 'vendors{edges{node{creationDate}}}',
                lastChangeDate: 'vendors{edges{node{lastChangeDate}}}',
                name: 'vendors{edges{node{name}}}',
                systemStatus: 'vendors{edges{node{systemStatus}}}',
                errors: 'vendors{edges{node{errors}}}',
                marketplace: {
                    id: 'vendors{edges{node{marketplace{id}}}}',
                    creationDate:
                        'vendors{edges{node{marketplace{creationDate}}}}',
                    lastChangeDate:
                        'vendors{edges{node{marketplace{lastChangeDate}}}}',
                    name: 'vendors{edges{node{marketplace{name}}}}',
                    systemStatus:
                        'vendors{edges{node{marketplace{systemStatus}}}}',
                    errors: 'vendors{edges{node{marketplace{errors}}}}',
                },
                vendorTokens: {
                    totalCount:
                        'vendors{edges{node{vendorTokens{totalCount}}}}',
                },
                products: {
                    totalCount: 'vendors{edges{node{products{totalCount}}}}',
                },
            },
            cursor: 'vendors{edges{cursor}}',
        },
        pageInfo: {
            endCursor: 'vendors{pageInfo{endCursor}}',
            startCursor: 'vendors{pageInfo{startCursor}}',
            hasNextPage: 'vendors{pageInfo{hasNextPage}}',
            hasPreviousPage: 'vendors{pageInfo{hasPreviousPage}}',
        },
        totalCount: 'vendors{totalCount}',
    },
    vendorTokens: {
        edges: {
            node: {
                id: 'vendorTokens{edges{node{id}}}',
                creationDate: 'vendorTokens{edges{node{creationDate}}}',
                lastChangeDate: 'vendorTokens{edges{node{lastChangeDate}}}',
                token: 'vendorTokens{edges{node{token}}}',
                vendor: {
                    id: 'vendorTokens{edges{node{vendor{id}}}}',
                    creationDate:
                        'vendorTokens{edges{node{vendor{creationDate}}}}',
                    lastChangeDate:
                        'vendorTokens{edges{node{vendor{lastChangeDate}}}}',
                    name: 'vendorTokens{edges{node{vendor{name}}}}',
                    systemStatus:
                        'vendorTokens{edges{node{vendor{systemStatus}}}}',
                    errors: 'vendorTokens{edges{node{vendor{errors}}}}',
                },
                marketplace: {
                    id: 'vendorTokens{edges{node{marketplace{id}}}}',
                    creationDate:
                        'vendorTokens{edges{node{marketplace{creationDate}}}}',
                    lastChangeDate:
                        'vendorTokens{edges{node{marketplace{lastChangeDate}}}}',
                    name: 'vendorTokens{edges{node{marketplace{name}}}}',
                    systemStatus:
                        'vendorTokens{edges{node{marketplace{systemStatus}}}}',
                    errors: 'vendorTokens{edges{node{marketplace{errors}}}}',
                },
            },
            cursor: 'vendorTokens{edges{cursor}}',
        },
        pageInfo: {
            endCursor: 'vendorTokens{pageInfo{endCursor}}',
            startCursor: 'vendorTokens{pageInfo{startCursor}}',
            hasNextPage: 'vendorTokens{pageInfo{hasNextPage}}',
            hasPreviousPage: 'vendorTokens{pageInfo{hasPreviousPage}}',
        },
        totalCount: 'vendorTokens{totalCount}',
    },
    creativeTemplates: {
        edges: {
            node: {
                id: 'creativeTemplates{edges{node{id}}}',
                creationDate: 'creativeTemplates{edges{node{creationDate}}}',
                lastChangeDate:
                    'creativeTemplates{edges{node{lastChangeDate}}}',
                name: 'creativeTemplates{edges{node{name}}}',
                height: 'creativeTemplates{edges{node{height}}}',
                width: 'creativeTemplates{edges{node{width}}}',
                systemStatus: 'creativeTemplates{edges{node{systemStatus}}}',
                errors: 'creativeTemplates{edges{node{errors}}}',
                marketplace: {
                    id: 'creativeTemplates{edges{node{marketplace{id}}}}',
                    creationDate:
                        'creativeTemplates{edges{node{marketplace{creationDate}}}}',
                    lastChangeDate:
                        'creativeTemplates{edges{node{marketplace{lastChangeDate}}}}',
                    name: 'creativeTemplates{edges{node{marketplace{name}}}}',
                    systemStatus:
                        'creativeTemplates{edges{node{marketplace{systemStatus}}}}',
                    errors:
                        'creativeTemplates{edges{node{marketplace{errors}}}}',
                },
                creativeLayers: {
                    totalCount:
                        'creativeTemplates{edges{node{creativeLayers{totalCount}}}}',
                },
            },
            cursor: 'creativeTemplates{edges{cursor}}',
        },
        pageInfo: {
            endCursor: 'creativeTemplates{pageInfo{endCursor}}',
            startCursor: 'creativeTemplates{pageInfo{startCursor}}',
            hasNextPage: 'creativeTemplates{pageInfo{hasNextPage}}',
            hasPreviousPage: 'creativeTemplates{pageInfo{hasPreviousPage}}',
        },
        totalCount: 'creativeTemplates{totalCount}',
    },
};
export type MarketplaceField =
    | 'id'
    | 'creationDate'
    | 'lastChangeDate'
    | 'name'
    | 'systemStatus'
    | 'errors'
    | 'organization{id}'
    | 'organization{creationDate}'
    | 'organization{lastChangeDate}'
    | 'organization{name}'
    | 'organization{systemStatus}'
    | 'organization{errors}'
    | 'organization{tier}'
    | 'organization{users{edges{node{id}}}}'
    | 'organization{users{edges{node{creationDate}}}}'
    | 'organization{users{edges{node{lastChangeDate}}}}'
    | 'organization{users{edges{node{email}}}}'
    | 'organization{users{edges{node{firstName}}}}'
    | 'organization{users{edges{node{lastName}}}}'
    | 'organization{users{edges{cursor}}}'
    | 'organization{users{pageInfo{endCursor}}}'
    | 'organization{users{pageInfo{startCursor}}}'
    | 'organization{users{pageInfo{hasNextPage}}}'
    | 'organization{users{pageInfo{hasPreviousPage}}}'
    | 'organization{users{totalCount}}'
    | 'organization{marketplaces{edges{node{id}}}}'
    | 'organization{marketplaces{edges{node{creationDate}}}}'
    | 'organization{marketplaces{edges{node{lastChangeDate}}}}'
    | 'organization{marketplaces{edges{node{name}}}}'
    | 'organization{marketplaces{edges{node{systemStatus}}}}'
    | 'organization{marketplaces{edges{node{errors}}}}'
    | 'organization{marketplaces{edges{cursor}}}'
    | 'organization{marketplaces{pageInfo{endCursor}}}'
    | 'organization{marketplaces{pageInfo{startCursor}}}'
    | 'organization{marketplaces{pageInfo{hasNextPage}}}'
    | 'organization{marketplaces{pageInfo{hasPreviousPage}}}'
    | 'organization{marketplaces{totalCount}}'
    | 'mediaChannels{edges{node{id}}}'
    | 'mediaChannels{edges{node{creationDate}}}'
    | 'mediaChannels{edges{node{lastChangeDate}}}'
    | 'mediaChannels{edges{node{name}}}'
    | 'mediaChannels{edges{node{systemStatus}}}'
    | 'mediaChannels{edges{node{errors}}}'
    | 'mediaChannels{edges{node{platform}}}'
    | 'mediaChannels{edges{node{remoteId}}}'
    | 'mediaChannels{edges{node{remoteState}}}'
    | 'mediaChannels{edges{node{currency}}}'
    | 'mediaChannels{edges{node{currencySymbol}}}'
    | 'mediaChannels{edges{node{currencyOffset}}}'
    | 'mediaChannels{edges{node{timezone}}}'
    | 'mediaChannels{edges{node{tokenStatus}}}'
    | 'mediaChannels{edges{node{catalogs{totalCount}}}}'
    | 'mediaChannels{edges{node{marketplace{id}}}}'
    | 'mediaChannels{edges{node{marketplace{creationDate}}}}'
    | 'mediaChannels{edges{node{marketplace{lastChangeDate}}}}'
    | 'mediaChannels{edges{node{marketplace{name}}}}'
    | 'mediaChannels{edges{node{marketplace{systemStatus}}}}'
    | 'mediaChannels{edges{node{marketplace{errors}}}}'
    | 'mediaChannels{edges{cursor}}'
    | 'mediaChannels{pageInfo{endCursor}}'
    | 'mediaChannels{pageInfo{startCursor}}'
    | 'mediaChannels{pageInfo{hasNextPage}}'
    | 'mediaChannels{pageInfo{hasPreviousPage}}'
    | 'mediaChannels{totalCount}'
    | 'campaignTemplates{edges{node{id}}}'
    | 'campaignTemplates{edges{node{creationDate}}}'
    | 'campaignTemplates{edges{node{lastChangeDate}}}'
    | 'campaignTemplates{edges{node{name}}}'
    | 'campaignTemplates{edges{node{description}}}'
    | 'campaignTemplates{edges{node{platform}}}'
    | 'campaignTemplates{edges{node{remoteId}}}'
    | 'campaignTemplates{edges{node{systemStatus}}}'
    | 'campaignTemplates{edges{node{errors}}}'
    | 'campaignTemplates{edges{node{marketplace{id}}}}'
    | 'campaignTemplates{edges{node{marketplace{creationDate}}}}'
    | 'campaignTemplates{edges{node{marketplace{lastChangeDate}}}}'
    | 'campaignTemplates{edges{node{marketplace{name}}}}'
    | 'campaignTemplates{edges{node{marketplace{systemStatus}}}}'
    | 'campaignTemplates{edges{node{marketplace{errors}}}}'
    | 'campaignTemplates{edges{node{marketingCampaigns{totalCount}}}}'
    | 'campaignTemplates{edges{cursor}}'
    | 'campaignTemplates{pageInfo{endCursor}}'
    | 'campaignTemplates{pageInfo{startCursor}}'
    | 'campaignTemplates{pageInfo{hasNextPage}}'
    | 'campaignTemplates{pageInfo{hasPreviousPage}}'
    | 'campaignTemplates{totalCount}'
    | 'vendors{edges{node{id}}}'
    | 'vendors{edges{node{creationDate}}}'
    | 'vendors{edges{node{lastChangeDate}}}'
    | 'vendors{edges{node{name}}}'
    | 'vendors{edges{node{systemStatus}}}'
    | 'vendors{edges{node{errors}}}'
    | 'vendors{edges{node{marketplace{id}}}}'
    | 'vendors{edges{node{marketplace{creationDate}}}}'
    | 'vendors{edges{node{marketplace{lastChangeDate}}}}'
    | 'vendors{edges{node{marketplace{name}}}}'
    | 'vendors{edges{node{marketplace{systemStatus}}}}'
    | 'vendors{edges{node{marketplace{errors}}}}'
    | 'vendors{edges{node{vendorTokens{totalCount}}}}'
    | 'vendors{edges{node{products{totalCount}}}}'
    | 'vendors{edges{cursor}}'
    | 'vendors{pageInfo{endCursor}}'
    | 'vendors{pageInfo{startCursor}}'
    | 'vendors{pageInfo{hasNextPage}}'
    | 'vendors{pageInfo{hasPreviousPage}}'
    | 'vendors{totalCount}'
    | 'vendorTokens{edges{node{id}}}'
    | 'vendorTokens{edges{node{creationDate}}}'
    | 'vendorTokens{edges{node{lastChangeDate}}}'
    | 'vendorTokens{edges{node{token}}}'
    | 'vendorTokens{edges{node{vendor{id}}}}'
    | 'vendorTokens{edges{node{vendor{creationDate}}}}'
    | 'vendorTokens{edges{node{vendor{lastChangeDate}}}}'
    | 'vendorTokens{edges{node{vendor{name}}}}'
    | 'vendorTokens{edges{node{vendor{systemStatus}}}}'
    | 'vendorTokens{edges{node{vendor{errors}}}}'
    | 'vendorTokens{edges{node{marketplace{id}}}}'
    | 'vendorTokens{edges{node{marketplace{creationDate}}}}'
    | 'vendorTokens{edges{node{marketplace{lastChangeDate}}}}'
    | 'vendorTokens{edges{node{marketplace{name}}}}'
    | 'vendorTokens{edges{node{marketplace{systemStatus}}}}'
    | 'vendorTokens{edges{node{marketplace{errors}}}}'
    | 'vendorTokens{edges{cursor}}'
    | 'vendorTokens{pageInfo{endCursor}}'
    | 'vendorTokens{pageInfo{startCursor}}'
    | 'vendorTokens{pageInfo{hasNextPage}}'
    | 'vendorTokens{pageInfo{hasPreviousPage}}'
    | 'vendorTokens{totalCount}'
    | 'creativeTemplates{edges{node{id}}}'
    | 'creativeTemplates{edges{node{creationDate}}}'
    | 'creativeTemplates{edges{node{lastChangeDate}}}'
    | 'creativeTemplates{edges{node{name}}}'
    | 'creativeTemplates{edges{node{height}}}'
    | 'creativeTemplates{edges{node{width}}}'
    | 'creativeTemplates{edges{node{systemStatus}}}'
    | 'creativeTemplates{edges{node{errors}}}'
    | 'creativeTemplates{edges{node{marketplace{id}}}}'
    | 'creativeTemplates{edges{node{marketplace{creationDate}}}}'
    | 'creativeTemplates{edges{node{marketplace{lastChangeDate}}}}'
    | 'creativeTemplates{edges{node{marketplace{name}}}}'
    | 'creativeTemplates{edges{node{marketplace{systemStatus}}}}'
    | 'creativeTemplates{edges{node{marketplace{errors}}}}'
    | 'creativeTemplates{edges{node{creativeLayers{totalCount}}}}'
    | 'creativeTemplates{edges{cursor}}'
    | 'creativeTemplates{pageInfo{endCursor}}'
    | 'creativeTemplates{pageInfo{startCursor}}'
    | 'creativeTemplates{pageInfo{hasNextPage}}'
    | 'creativeTemplates{pageInfo{hasPreviousPage}}'
    | 'creativeTemplates{totalCount}';
export type OrganizationFields = {
    id: 'id';
    creationDate: 'creationDate';
    lastChangeDate: 'lastChangeDate';
    name: 'name';
    systemStatus: 'systemStatus';
    errors: 'errors';
    tier: 'tier';
    users: {
        edges: {
            node: {
                id: 'users{edges{node{id}}}';
                creationDate: 'users{edges{node{creationDate}}}';
                lastChangeDate: 'users{edges{node{lastChangeDate}}}';
                email: 'users{edges{node{email}}}';
                firstName: 'users{edges{node{firstName}}}';
                lastName: 'users{edges{node{lastName}}}';
                organizations: {
                    totalCount: 'users{edges{node{organizations{totalCount}}}}';
                };
                entitlements: {
                    totalCount: 'users{edges{node{entitlements{totalCount}}}}';
                };
            };
            cursor: 'users{edges{cursor}}';
        };
        pageInfo: {
            endCursor: 'users{pageInfo{endCursor}}';
            startCursor: 'users{pageInfo{startCursor}}';
            hasNextPage: 'users{pageInfo{hasNextPage}}';
            hasPreviousPage: 'users{pageInfo{hasPreviousPage}}';
        };
        totalCount: 'users{totalCount}';
    };
    marketplaces: {
        edges: {
            node: {
                id: 'marketplaces{edges{node{id}}}';
                creationDate: 'marketplaces{edges{node{creationDate}}}';
                lastChangeDate: 'marketplaces{edges{node{lastChangeDate}}}';
                name: 'marketplaces{edges{node{name}}}';
                systemStatus: 'marketplaces{edges{node{systemStatus}}}';
                errors: 'marketplaces{edges{node{errors}}}';
                organization: {
                    id: 'marketplaces{edges{node{organization{id}}}}';
                    creationDate: 'marketplaces{edges{node{organization{creationDate}}}}';
                    lastChangeDate: 'marketplaces{edges{node{organization{lastChangeDate}}}}';
                    name: 'marketplaces{edges{node{organization{name}}}}';
                    systemStatus: 'marketplaces{edges{node{organization{systemStatus}}}}';
                    errors: 'marketplaces{edges{node{organization{errors}}}}';
                    tier: 'marketplaces{edges{node{organization{tier}}}}';
                };
                mediaChannels: {
                    totalCount: 'marketplaces{edges{node{mediaChannels{totalCount}}}}';
                };
                campaignTemplates: {
                    totalCount: 'marketplaces{edges{node{campaignTemplates{totalCount}}}}';
                };
                vendors: {
                    totalCount: 'marketplaces{edges{node{vendors{totalCount}}}}';
                };
                vendorTokens: {
                    totalCount: 'marketplaces{edges{node{vendorTokens{totalCount}}}}';
                };
                creativeTemplates: {
                    totalCount: 'marketplaces{edges{node{creativeTemplates{totalCount}}}}';
                };
            };
            cursor: 'marketplaces{edges{cursor}}';
        };
        pageInfo: {
            endCursor: 'marketplaces{pageInfo{endCursor}}';
            startCursor: 'marketplaces{pageInfo{startCursor}}';
            hasNextPage: 'marketplaces{pageInfo{hasNextPage}}';
            hasPreviousPage: 'marketplaces{pageInfo{hasPreviousPage}}';
        };
        totalCount: 'marketplaces{totalCount}';
    };
};
export const OrganizationFields: OrganizationFields = {
    id: 'id',
    creationDate: 'creationDate',
    lastChangeDate: 'lastChangeDate',
    name: 'name',
    systemStatus: 'systemStatus',
    errors: 'errors',
    tier: 'tier',
    users: {
        edges: {
            node: {
                id: 'users{edges{node{id}}}',
                creationDate: 'users{edges{node{creationDate}}}',
                lastChangeDate: 'users{edges{node{lastChangeDate}}}',
                email: 'users{edges{node{email}}}',
                firstName: 'users{edges{node{firstName}}}',
                lastName: 'users{edges{node{lastName}}}',
                organizations: {
                    totalCount: 'users{edges{node{organizations{totalCount}}}}',
                },
                entitlements: {
                    totalCount: 'users{edges{node{entitlements{totalCount}}}}',
                },
            },
            cursor: 'users{edges{cursor}}',
        },
        pageInfo: {
            endCursor: 'users{pageInfo{endCursor}}',
            startCursor: 'users{pageInfo{startCursor}}',
            hasNextPage: 'users{pageInfo{hasNextPage}}',
            hasPreviousPage: 'users{pageInfo{hasPreviousPage}}',
        },
        totalCount: 'users{totalCount}',
    },
    marketplaces: {
        edges: {
            node: {
                id: 'marketplaces{edges{node{id}}}',
                creationDate: 'marketplaces{edges{node{creationDate}}}',
                lastChangeDate: 'marketplaces{edges{node{lastChangeDate}}}',
                name: 'marketplaces{edges{node{name}}}',
                systemStatus: 'marketplaces{edges{node{systemStatus}}}',
                errors: 'marketplaces{edges{node{errors}}}',
                organization: {
                    id: 'marketplaces{edges{node{organization{id}}}}',
                    creationDate:
                        'marketplaces{edges{node{organization{creationDate}}}}',
                    lastChangeDate:
                        'marketplaces{edges{node{organization{lastChangeDate}}}}',
                    name: 'marketplaces{edges{node{organization{name}}}}',
                    systemStatus:
                        'marketplaces{edges{node{organization{systemStatus}}}}',
                    errors: 'marketplaces{edges{node{organization{errors}}}}',
                    tier: 'marketplaces{edges{node{organization{tier}}}}',
                },
                mediaChannels: {
                    totalCount:
                        'marketplaces{edges{node{mediaChannels{totalCount}}}}',
                },
                campaignTemplates: {
                    totalCount:
                        'marketplaces{edges{node{campaignTemplates{totalCount}}}}',
                },
                vendors: {
                    totalCount:
                        'marketplaces{edges{node{vendors{totalCount}}}}',
                },
                vendorTokens: {
                    totalCount:
                        'marketplaces{edges{node{vendorTokens{totalCount}}}}',
                },
                creativeTemplates: {
                    totalCount:
                        'marketplaces{edges{node{creativeTemplates{totalCount}}}}',
                },
            },
            cursor: 'marketplaces{edges{cursor}}',
        },
        pageInfo: {
            endCursor: 'marketplaces{pageInfo{endCursor}}',
            startCursor: 'marketplaces{pageInfo{startCursor}}',
            hasNextPage: 'marketplaces{pageInfo{hasNextPage}}',
            hasPreviousPage: 'marketplaces{pageInfo{hasPreviousPage}}',
        },
        totalCount: 'marketplaces{totalCount}',
    },
};
export type OrganizationField =
    | 'id'
    | 'creationDate'
    | 'lastChangeDate'
    | 'name'
    | 'systemStatus'
    | 'errors'
    | 'tier'
    | 'users{edges{node{id}}}'
    | 'users{edges{node{creationDate}}}'
    | 'users{edges{node{lastChangeDate}}}'
    | 'users{edges{node{email}}}'
    | 'users{edges{node{firstName}}}'
    | 'users{edges{node{lastName}}}'
    | 'users{edges{node{organizations{totalCount}}}}'
    | 'users{edges{node{entitlements{totalCount}}}}'
    | 'users{edges{cursor}}'
    | 'users{pageInfo{endCursor}}'
    | 'users{pageInfo{startCursor}}'
    | 'users{pageInfo{hasNextPage}}'
    | 'users{pageInfo{hasPreviousPage}}'
    | 'users{totalCount}'
    | 'marketplaces{edges{node{id}}}'
    | 'marketplaces{edges{node{creationDate}}}'
    | 'marketplaces{edges{node{lastChangeDate}}}'
    | 'marketplaces{edges{node{name}}}'
    | 'marketplaces{edges{node{systemStatus}}}'
    | 'marketplaces{edges{node{errors}}}'
    | 'marketplaces{edges{node{organization{id}}}}'
    | 'marketplaces{edges{node{organization{creationDate}}}}'
    | 'marketplaces{edges{node{organization{lastChangeDate}}}}'
    | 'marketplaces{edges{node{organization{name}}}}'
    | 'marketplaces{edges{node{organization{systemStatus}}}}'
    | 'marketplaces{edges{node{organization{errors}}}}'
    | 'marketplaces{edges{node{organization{tier}}}}'
    | 'marketplaces{edges{node{mediaChannels{totalCount}}}}'
    | 'marketplaces{edges{node{campaignTemplates{totalCount}}}}'
    | 'marketplaces{edges{node{vendors{totalCount}}}}'
    | 'marketplaces{edges{node{vendorTokens{totalCount}}}}'
    | 'marketplaces{edges{node{creativeTemplates{totalCount}}}}'
    | 'marketplaces{edges{cursor}}'
    | 'marketplaces{pageInfo{endCursor}}'
    | 'marketplaces{pageInfo{startCursor}}'
    | 'marketplaces{pageInfo{hasNextPage}}'
    | 'marketplaces{pageInfo{hasPreviousPage}}'
    | 'marketplaces{totalCount}';
export type UserFields = {
    id: 'id';
    creationDate: 'creationDate';
    lastChangeDate: 'lastChangeDate';
    email: 'email';
    firstName: 'firstName';
    lastName: 'lastName';
    organizations: {
        edges: {
            node: {
                id: 'organizations{edges{node{id}}}';
                creationDate: 'organizations{edges{node{creationDate}}}';
                lastChangeDate: 'organizations{edges{node{lastChangeDate}}}';
                name: 'organizations{edges{node{name}}}';
                systemStatus: 'organizations{edges{node{systemStatus}}}';
                errors: 'organizations{edges{node{errors}}}';
                tier: 'organizations{edges{node{tier}}}';
                users: {
                    totalCount: 'organizations{edges{node{users{totalCount}}}}';
                };
                marketplaces: {
                    totalCount: 'organizations{edges{node{marketplaces{totalCount}}}}';
                };
            };
            cursor: 'organizations{edges{cursor}}';
        };
        pageInfo: {
            endCursor: 'organizations{pageInfo{endCursor}}';
            startCursor: 'organizations{pageInfo{startCursor}}';
            hasNextPage: 'organizations{pageInfo{hasNextPage}}';
            hasPreviousPage: 'organizations{pageInfo{hasPreviousPage}}';
        };
        totalCount: 'organizations{totalCount}';
    };
    entitlements: {
        edges: {
            node: {
                id: 'entitlements{edges{node{id}}}';
                creationDate: 'entitlements{edges{node{creationDate}}}';
                lastChangeDate: 'entitlements{edges{node{lastChangeDate}}}';
                type: 'entitlements{edges{node{type}}}';
                permissions: 'entitlements{edges{node{permissions}}}';
                user: {
                    id: 'entitlements{edges{node{user{id}}}}';
                    creationDate: 'entitlements{edges{node{user{creationDate}}}}';
                    lastChangeDate: 'entitlements{edges{node{user{lastChangeDate}}}}';
                    email: 'entitlements{edges{node{user{email}}}}';
                    firstName: 'entitlements{edges{node{user{firstName}}}}';
                    lastName: 'entitlements{edges{node{user{lastName}}}}';
                };
                resource: {
                    id: 'entitlements{edges{node{resource{id}}}}';
                    creationDate: 'entitlements{edges{node{resource{creationDate}}}}';
                    lastChangeDate: 'entitlements{edges{node{resource{lastChangeDate}}}}';
                    name: 'entitlements{edges{node{resource{name}}}}';
                    systemStatus: 'entitlements{edges{node{resource{systemStatus}}}}';
                    errors: 'entitlements{edges{node{resource{errors}}}}';
                };
            };
            cursor: 'entitlements{edges{cursor}}';
        };
        pageInfo: {
            endCursor: 'entitlements{pageInfo{endCursor}}';
            startCursor: 'entitlements{pageInfo{startCursor}}';
            hasNextPage: 'entitlements{pageInfo{hasNextPage}}';
            hasPreviousPage: 'entitlements{pageInfo{hasPreviousPage}}';
        };
        totalCount: 'entitlements{totalCount}';
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
            node: {
                id: 'organizations{edges{node{id}}}',
                creationDate: 'organizations{edges{node{creationDate}}}',
                lastChangeDate: 'organizations{edges{node{lastChangeDate}}}',
                name: 'organizations{edges{node{name}}}',
                systemStatus: 'organizations{edges{node{systemStatus}}}',
                errors: 'organizations{edges{node{errors}}}',
                tier: 'organizations{edges{node{tier}}}',
                users: {
                    totalCount: 'organizations{edges{node{users{totalCount}}}}',
                },
                marketplaces: {
                    totalCount:
                        'organizations{edges{node{marketplaces{totalCount}}}}',
                },
            },
            cursor: 'organizations{edges{cursor}}',
        },
        pageInfo: {
            endCursor: 'organizations{pageInfo{endCursor}}',
            startCursor: 'organizations{pageInfo{startCursor}}',
            hasNextPage: 'organizations{pageInfo{hasNextPage}}',
            hasPreviousPage: 'organizations{pageInfo{hasPreviousPage}}',
        },
        totalCount: 'organizations{totalCount}',
    },
    entitlements: {
        edges: {
            node: {
                id: 'entitlements{edges{node{id}}}',
                creationDate: 'entitlements{edges{node{creationDate}}}',
                lastChangeDate: 'entitlements{edges{node{lastChangeDate}}}',
                type: 'entitlements{edges{node{type}}}',
                permissions: 'entitlements{edges{node{permissions}}}',
                user: {
                    id: 'entitlements{edges{node{user{id}}}}',
                    creationDate:
                        'entitlements{edges{node{user{creationDate}}}}',
                    lastChangeDate:
                        'entitlements{edges{node{user{lastChangeDate}}}}',
                    email: 'entitlements{edges{node{user{email}}}}',
                    firstName: 'entitlements{edges{node{user{firstName}}}}',
                    lastName: 'entitlements{edges{node{user{lastName}}}}',
                },
                resource: {
                    id: 'entitlements{edges{node{resource{id}}}}',
                    creationDate:
                        'entitlements{edges{node{resource{creationDate}}}}',
                    lastChangeDate:
                        'entitlements{edges{node{resource{lastChangeDate}}}}',
                    name: 'entitlements{edges{node{resource{name}}}}',
                    systemStatus:
                        'entitlements{edges{node{resource{systemStatus}}}}',
                    errors: 'entitlements{edges{node{resource{errors}}}}',
                },
            },
            cursor: 'entitlements{edges{cursor}}',
        },
        pageInfo: {
            endCursor: 'entitlements{pageInfo{endCursor}}',
            startCursor: 'entitlements{pageInfo{startCursor}}',
            hasNextPage: 'entitlements{pageInfo{hasNextPage}}',
            hasPreviousPage: 'entitlements{pageInfo{hasPreviousPage}}',
        },
        totalCount: 'entitlements{totalCount}',
    },
};
export type UserField =
    | 'id'
    | 'creationDate'
    | 'lastChangeDate'
    | 'email'
    | 'firstName'
    | 'lastName'
    | 'organizations{edges{node{id}}}'
    | 'organizations{edges{node{creationDate}}}'
    | 'organizations{edges{node{lastChangeDate}}}'
    | 'organizations{edges{node{name}}}'
    | 'organizations{edges{node{systemStatus}}}'
    | 'organizations{edges{node{errors}}}'
    | 'organizations{edges{node{tier}}}'
    | 'organizations{edges{node{users{totalCount}}}}'
    | 'organizations{edges{node{marketplaces{totalCount}}}}'
    | 'organizations{edges{cursor}}'
    | 'organizations{pageInfo{endCursor}}'
    | 'organizations{pageInfo{startCursor}}'
    | 'organizations{pageInfo{hasNextPage}}'
    | 'organizations{pageInfo{hasPreviousPage}}'
    | 'organizations{totalCount}'
    | 'entitlements{edges{node{id}}}'
    | 'entitlements{edges{node{creationDate}}}'
    | 'entitlements{edges{node{lastChangeDate}}}'
    | 'entitlements{edges{node{type}}}'
    | 'entitlements{edges{node{permissions}}}'
    | 'entitlements{edges{node{user{id}}}}'
    | 'entitlements{edges{node{user{creationDate}}}}'
    | 'entitlements{edges{node{user{lastChangeDate}}}}'
    | 'entitlements{edges{node{user{email}}}}'
    | 'entitlements{edges{node{user{firstName}}}}'
    | 'entitlements{edges{node{user{lastName}}}}'
    | 'entitlements{edges{node{resource{id}}}}'
    | 'entitlements{edges{node{resource{creationDate}}}}'
    | 'entitlements{edges{node{resource{lastChangeDate}}}}'
    | 'entitlements{edges{node{resource{name}}}}'
    | 'entitlements{edges{node{resource{systemStatus}}}}'
    | 'entitlements{edges{node{resource{errors}}}}'
    | 'entitlements{edges{cursor}}'
    | 'entitlements{pageInfo{endCursor}}'
    | 'entitlements{pageInfo{startCursor}}'
    | 'entitlements{pageInfo{hasNextPage}}'
    | 'entitlements{pageInfo{hasPreviousPage}}'
    | 'entitlements{totalCount}';
export type EntitlementFields = {
    id: 'id';
    creationDate: 'creationDate';
    lastChangeDate: 'lastChangeDate';
    type: 'type';
    permissions: 'permissions';
    user: {
        id: 'user{id}';
        creationDate: 'user{creationDate}';
        lastChangeDate: 'user{lastChangeDate}';
        email: 'user{email}';
        firstName: 'user{firstName}';
        lastName: 'user{lastName}';
        organizations: {
            edges: {
                node: {
                    id: 'user{organizations{edges{node{id}}}}';
                    creationDate: 'user{organizations{edges{node{creationDate}}}}';
                    lastChangeDate: 'user{organizations{edges{node{lastChangeDate}}}}';
                    name: 'user{organizations{edges{node{name}}}}';
                    systemStatus: 'user{organizations{edges{node{systemStatus}}}}';
                    errors: 'user{organizations{edges{node{errors}}}}';
                    tier: 'user{organizations{edges{node{tier}}}}';
                };
                cursor: 'user{organizations{edges{cursor}}}';
            };
            pageInfo: {
                endCursor: 'user{organizations{pageInfo{endCursor}}}';
                startCursor: 'user{organizations{pageInfo{startCursor}}}';
                hasNextPage: 'user{organizations{pageInfo{hasNextPage}}}';
                hasPreviousPage: 'user{organizations{pageInfo{hasPreviousPage}}}';
            };
            totalCount: 'user{organizations{totalCount}}';
        };
        entitlements: {
            edges: {
                node: {
                    id: 'user{entitlements{edges{node{id}}}}';
                    creationDate: 'user{entitlements{edges{node{creationDate}}}}';
                    lastChangeDate: 'user{entitlements{edges{node{lastChangeDate}}}}';
                    type: 'user{entitlements{edges{node{type}}}}';
                    permissions: 'user{entitlements{edges{node{permissions}}}}';
                };
                cursor: 'user{entitlements{edges{cursor}}}';
            };
            pageInfo: {
                endCursor: 'user{entitlements{pageInfo{endCursor}}}';
                startCursor: 'user{entitlements{pageInfo{startCursor}}}';
                hasNextPage: 'user{entitlements{pageInfo{hasNextPage}}}';
                hasPreviousPage: 'user{entitlements{pageInfo{hasPreviousPage}}}';
            };
            totalCount: 'user{entitlements{totalCount}}';
        };
    };
    resource: {
        id: 'resource{id}';
        creationDate: 'resource{creationDate}';
        lastChangeDate: 'resource{lastChangeDate}';
        name: 'resource{name}';
        systemStatus: 'resource{systemStatus}';
        errors: 'resource{errors}';
    };
};
export const EntitlementFields: EntitlementFields = {
    id: 'id',
    creationDate: 'creationDate',
    lastChangeDate: 'lastChangeDate',
    type: 'type',
    permissions: 'permissions',
    user: {
        id: 'user{id}',
        creationDate: 'user{creationDate}',
        lastChangeDate: 'user{lastChangeDate}',
        email: 'user{email}',
        firstName: 'user{firstName}',
        lastName: 'user{lastName}',
        organizations: {
            edges: {
                node: {
                    id: 'user{organizations{edges{node{id}}}}',
                    creationDate:
                        'user{organizations{edges{node{creationDate}}}}',
                    lastChangeDate:
                        'user{organizations{edges{node{lastChangeDate}}}}',
                    name: 'user{organizations{edges{node{name}}}}',
                    systemStatus:
                        'user{organizations{edges{node{systemStatus}}}}',
                    errors: 'user{organizations{edges{node{errors}}}}',
                    tier: 'user{organizations{edges{node{tier}}}}',
                },
                cursor: 'user{organizations{edges{cursor}}}',
            },
            pageInfo: {
                endCursor: 'user{organizations{pageInfo{endCursor}}}',
                startCursor: 'user{organizations{pageInfo{startCursor}}}',
                hasNextPage: 'user{organizations{pageInfo{hasNextPage}}}',
                hasPreviousPage:
                    'user{organizations{pageInfo{hasPreviousPage}}}',
            },
            totalCount: 'user{organizations{totalCount}}',
        },
        entitlements: {
            edges: {
                node: {
                    id: 'user{entitlements{edges{node{id}}}}',
                    creationDate:
                        'user{entitlements{edges{node{creationDate}}}}',
                    lastChangeDate:
                        'user{entitlements{edges{node{lastChangeDate}}}}',
                    type: 'user{entitlements{edges{node{type}}}}',
                    permissions: 'user{entitlements{edges{node{permissions}}}}',
                },
                cursor: 'user{entitlements{edges{cursor}}}',
            },
            pageInfo: {
                endCursor: 'user{entitlements{pageInfo{endCursor}}}',
                startCursor: 'user{entitlements{pageInfo{startCursor}}}',
                hasNextPage: 'user{entitlements{pageInfo{hasNextPage}}}',
                hasPreviousPage:
                    'user{entitlements{pageInfo{hasPreviousPage}}}',
            },
            totalCount: 'user{entitlements{totalCount}}',
        },
    },
    resource: {
        id: 'resource{id}',
        creationDate: 'resource{creationDate}',
        lastChangeDate: 'resource{lastChangeDate}',
        name: 'resource{name}',
        systemStatus: 'resource{systemStatus}',
        errors: 'resource{errors}',
    },
};
export type EntitlementField =
    | 'id'
    | 'creationDate'
    | 'lastChangeDate'
    | 'type'
    | 'permissions'
    | 'user{id}'
    | 'user{creationDate}'
    | 'user{lastChangeDate}'
    | 'user{email}'
    | 'user{firstName}'
    | 'user{lastName}'
    | 'user{organizations{edges{node{id}}}}'
    | 'user{organizations{edges{node{creationDate}}}}'
    | 'user{organizations{edges{node{lastChangeDate}}}}'
    | 'user{organizations{edges{node{name}}}}'
    | 'user{organizations{edges{node{systemStatus}}}}'
    | 'user{organizations{edges{node{errors}}}}'
    | 'user{organizations{edges{node{tier}}}}'
    | 'user{organizations{edges{cursor}}}'
    | 'user{organizations{pageInfo{endCursor}}}'
    | 'user{organizations{pageInfo{startCursor}}}'
    | 'user{organizations{pageInfo{hasNextPage}}}'
    | 'user{organizations{pageInfo{hasPreviousPage}}}'
    | 'user{organizations{totalCount}}'
    | 'user{entitlements{edges{node{id}}}}'
    | 'user{entitlements{edges{node{creationDate}}}}'
    | 'user{entitlements{edges{node{lastChangeDate}}}}'
    | 'user{entitlements{edges{node{type}}}}'
    | 'user{entitlements{edges{node{permissions}}}}'
    | 'user{entitlements{edges{cursor}}}'
    | 'user{entitlements{pageInfo{endCursor}}}'
    | 'user{entitlements{pageInfo{startCursor}}}'
    | 'user{entitlements{pageInfo{hasNextPage}}}'
    | 'user{entitlements{pageInfo{hasPreviousPage}}}'
    | 'user{entitlements{totalCount}}'
    | 'resource{id}'
    | 'resource{creationDate}'
    | 'resource{lastChangeDate}'
    | 'resource{name}'
    | 'resource{systemStatus}'
    | 'resource{errors}';
export type MediaChannelFields = {
    id: 'id';
    creationDate: 'creationDate';
    lastChangeDate: 'lastChangeDate';
    name: 'name';
    systemStatus: 'systemStatus';
    errors: 'errors';
    platform: 'platform';
    remoteId: 'remoteId';
    remoteState: 'remoteState';
    currency: 'currency';
    currencySymbol: 'currencySymbol';
    currencyOffset: 'currencyOffset';
    timezone: 'timezone';
    tokenStatus: 'tokenStatus';
    catalogs: {
        edges: {
            node: {
                id: 'catalogs{edges{node{id}}}';
                creationDate: 'catalogs{edges{node{creationDate}}}';
                lastChangeDate: 'catalogs{edges{node{lastChangeDate}}}';
                name: 'catalogs{edges{node{name}}}';
                catalogType: 'catalogs{edges{node{catalogType}}}';
                remoteId: 'catalogs{edges{node{remoteId}}}';
                systemStatus: 'catalogs{edges{node{systemStatus}}}';
                remoteState: 'catalogs{edges{node{remoteState}}}';
                dataFeedId: 'catalogs{edges{node{dataFeedId}}}';
                errors: 'catalogs{edges{node{errors}}}';
                mediaChannel: {
                    id: 'catalogs{edges{node{mediaChannel{id}}}}';
                    creationDate: 'catalogs{edges{node{mediaChannel{creationDate}}}}';
                    lastChangeDate: 'catalogs{edges{node{mediaChannel{lastChangeDate}}}}';
                    name: 'catalogs{edges{node{mediaChannel{name}}}}';
                    systemStatus: 'catalogs{edges{node{mediaChannel{systemStatus}}}}';
                    errors: 'catalogs{edges{node{mediaChannel{errors}}}}';
                    platform: 'catalogs{edges{node{mediaChannel{platform}}}}';
                    remoteId: 'catalogs{edges{node{mediaChannel{remoteId}}}}';
                    remoteState: 'catalogs{edges{node{mediaChannel{remoteState}}}}';
                    currency: 'catalogs{edges{node{mediaChannel{currency}}}}';
                    currencySymbol: 'catalogs{edges{node{mediaChannel{currencySymbol}}}}';
                    currencyOffset: 'catalogs{edges{node{mediaChannel{currencyOffset}}}}';
                    timezone: 'catalogs{edges{node{mediaChannel{timezone}}}}';
                    tokenStatus: 'catalogs{edges{node{mediaChannel{tokenStatus}}}}';
                };
                products: {
                    totalCount: 'catalogs{edges{node{products{totalCount}}}}';
                };
            };
            cursor: 'catalogs{edges{cursor}}';
        };
        pageInfo: {
            endCursor: 'catalogs{pageInfo{endCursor}}';
            startCursor: 'catalogs{pageInfo{startCursor}}';
            hasNextPage: 'catalogs{pageInfo{hasNextPage}}';
            hasPreviousPage: 'catalogs{pageInfo{hasPreviousPage}}';
        };
        totalCount: 'catalogs{totalCount}';
    };
    marketplace: {
        id: 'marketplace{id}';
        creationDate: 'marketplace{creationDate}';
        lastChangeDate: 'marketplace{lastChangeDate}';
        name: 'marketplace{name}';
        systemStatus: 'marketplace{systemStatus}';
        errors: 'marketplace{errors}';
        organization: {
            id: 'marketplace{organization{id}}';
            creationDate: 'marketplace{organization{creationDate}}';
            lastChangeDate: 'marketplace{organization{lastChangeDate}}';
            name: 'marketplace{organization{name}}';
            systemStatus: 'marketplace{organization{systemStatus}}';
            errors: 'marketplace{organization{errors}}';
            tier: 'marketplace{organization{tier}}';
            users: {
                edges: {
                    cursor: 'marketplace{organization{users{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'marketplace{organization{users{pageInfo{endCursor}}}}';
                    startCursor: 'marketplace{organization{users{pageInfo{startCursor}}}}';
                    hasNextPage: 'marketplace{organization{users{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'marketplace{organization{users{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'marketplace{organization{users{totalCount}}}';
            };
            marketplaces: {
                edges: {
                    cursor: 'marketplace{organization{marketplaces{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'marketplace{organization{marketplaces{pageInfo{endCursor}}}}';
                    startCursor: 'marketplace{organization{marketplaces{pageInfo{startCursor}}}}';
                    hasNextPage: 'marketplace{organization{marketplaces{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'marketplace{organization{marketplaces{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'marketplace{organization{marketplaces{totalCount}}}';
            };
        };
        mediaChannels: {
            edges: {
                node: {
                    id: 'marketplace{mediaChannels{edges{node{id}}}}';
                    creationDate: 'marketplace{mediaChannels{edges{node{creationDate}}}}';
                    lastChangeDate: 'marketplace{mediaChannels{edges{node{lastChangeDate}}}}';
                    name: 'marketplace{mediaChannels{edges{node{name}}}}';
                    systemStatus: 'marketplace{mediaChannels{edges{node{systemStatus}}}}';
                    errors: 'marketplace{mediaChannels{edges{node{errors}}}}';
                    platform: 'marketplace{mediaChannels{edges{node{platform}}}}';
                    remoteId: 'marketplace{mediaChannels{edges{node{remoteId}}}}';
                    remoteState: 'marketplace{mediaChannels{edges{node{remoteState}}}}';
                    currency: 'marketplace{mediaChannels{edges{node{currency}}}}';
                    currencySymbol: 'marketplace{mediaChannels{edges{node{currencySymbol}}}}';
                    currencyOffset: 'marketplace{mediaChannels{edges{node{currencyOffset}}}}';
                    timezone: 'marketplace{mediaChannels{edges{node{timezone}}}}';
                    tokenStatus: 'marketplace{mediaChannels{edges{node{tokenStatus}}}}';
                };
                cursor: 'marketplace{mediaChannels{edges{cursor}}}';
            };
            pageInfo: {
                endCursor: 'marketplace{mediaChannels{pageInfo{endCursor}}}';
                startCursor: 'marketplace{mediaChannels{pageInfo{startCursor}}}';
                hasNextPage: 'marketplace{mediaChannels{pageInfo{hasNextPage}}}';
                hasPreviousPage: 'marketplace{mediaChannels{pageInfo{hasPreviousPage}}}';
            };
            totalCount: 'marketplace{mediaChannels{totalCount}}';
        };
        campaignTemplates: {
            edges: {
                node: {
                    id: 'marketplace{campaignTemplates{edges{node{id}}}}';
                    creationDate: 'marketplace{campaignTemplates{edges{node{creationDate}}}}';
                    lastChangeDate: 'marketplace{campaignTemplates{edges{node{lastChangeDate}}}}';
                    name: 'marketplace{campaignTemplates{edges{node{name}}}}';
                    description: 'marketplace{campaignTemplates{edges{node{description}}}}';
                    platform: 'marketplace{campaignTemplates{edges{node{platform}}}}';
                    remoteId: 'marketplace{campaignTemplates{edges{node{remoteId}}}}';
                    systemStatus: 'marketplace{campaignTemplates{edges{node{systemStatus}}}}';
                    errors: 'marketplace{campaignTemplates{edges{node{errors}}}}';
                };
                cursor: 'marketplace{campaignTemplates{edges{cursor}}}';
            };
            pageInfo: {
                endCursor: 'marketplace{campaignTemplates{pageInfo{endCursor}}}';
                startCursor: 'marketplace{campaignTemplates{pageInfo{startCursor}}}';
                hasNextPage: 'marketplace{campaignTemplates{pageInfo{hasNextPage}}}';
                hasPreviousPage: 'marketplace{campaignTemplates{pageInfo{hasPreviousPage}}}';
            };
            totalCount: 'marketplace{campaignTemplates{totalCount}}';
        };
        vendors: {
            edges: {
                node: {
                    id: 'marketplace{vendors{edges{node{id}}}}';
                    creationDate: 'marketplace{vendors{edges{node{creationDate}}}}';
                    lastChangeDate: 'marketplace{vendors{edges{node{lastChangeDate}}}}';
                    name: 'marketplace{vendors{edges{node{name}}}}';
                    systemStatus: 'marketplace{vendors{edges{node{systemStatus}}}}';
                    errors: 'marketplace{vendors{edges{node{errors}}}}';
                };
                cursor: 'marketplace{vendors{edges{cursor}}}';
            };
            pageInfo: {
                endCursor: 'marketplace{vendors{pageInfo{endCursor}}}';
                startCursor: 'marketplace{vendors{pageInfo{startCursor}}}';
                hasNextPage: 'marketplace{vendors{pageInfo{hasNextPage}}}';
                hasPreviousPage: 'marketplace{vendors{pageInfo{hasPreviousPage}}}';
            };
            totalCount: 'marketplace{vendors{totalCount}}';
        };
        vendorTokens: {
            edges: {
                node: {
                    id: 'marketplace{vendorTokens{edges{node{id}}}}';
                    creationDate: 'marketplace{vendorTokens{edges{node{creationDate}}}}';
                    lastChangeDate: 'marketplace{vendorTokens{edges{node{lastChangeDate}}}}';
                    token: 'marketplace{vendorTokens{edges{node{token}}}}';
                };
                cursor: 'marketplace{vendorTokens{edges{cursor}}}';
            };
            pageInfo: {
                endCursor: 'marketplace{vendorTokens{pageInfo{endCursor}}}';
                startCursor: 'marketplace{vendorTokens{pageInfo{startCursor}}}';
                hasNextPage: 'marketplace{vendorTokens{pageInfo{hasNextPage}}}';
                hasPreviousPage: 'marketplace{vendorTokens{pageInfo{hasPreviousPage}}}';
            };
            totalCount: 'marketplace{vendorTokens{totalCount}}';
        };
        creativeTemplates: {
            edges: {
                node: {
                    id: 'marketplace{creativeTemplates{edges{node{id}}}}';
                    creationDate: 'marketplace{creativeTemplates{edges{node{creationDate}}}}';
                    lastChangeDate: 'marketplace{creativeTemplates{edges{node{lastChangeDate}}}}';
                    name: 'marketplace{creativeTemplates{edges{node{name}}}}';
                    height: 'marketplace{creativeTemplates{edges{node{height}}}}';
                    width: 'marketplace{creativeTemplates{edges{node{width}}}}';
                    systemStatus: 'marketplace{creativeTemplates{edges{node{systemStatus}}}}';
                    errors: 'marketplace{creativeTemplates{edges{node{errors}}}}';
                };
                cursor: 'marketplace{creativeTemplates{edges{cursor}}}';
            };
            pageInfo: {
                endCursor: 'marketplace{creativeTemplates{pageInfo{endCursor}}}';
                startCursor: 'marketplace{creativeTemplates{pageInfo{startCursor}}}';
                hasNextPage: 'marketplace{creativeTemplates{pageInfo{hasNextPage}}}';
                hasPreviousPage: 'marketplace{creativeTemplates{pageInfo{hasPreviousPage}}}';
            };
            totalCount: 'marketplace{creativeTemplates{totalCount}}';
        };
    };
};
export const MediaChannelFields: MediaChannelFields = {
    id: 'id',
    creationDate: 'creationDate',
    lastChangeDate: 'lastChangeDate',
    name: 'name',
    systemStatus: 'systemStatus',
    errors: 'errors',
    platform: 'platform',
    remoteId: 'remoteId',
    remoteState: 'remoteState',
    currency: 'currency',
    currencySymbol: 'currencySymbol',
    currencyOffset: 'currencyOffset',
    timezone: 'timezone',
    tokenStatus: 'tokenStatus',
    catalogs: {
        edges: {
            node: {
                id: 'catalogs{edges{node{id}}}',
                creationDate: 'catalogs{edges{node{creationDate}}}',
                lastChangeDate: 'catalogs{edges{node{lastChangeDate}}}',
                name: 'catalogs{edges{node{name}}}',
                catalogType: 'catalogs{edges{node{catalogType}}}',
                remoteId: 'catalogs{edges{node{remoteId}}}',
                systemStatus: 'catalogs{edges{node{systemStatus}}}',
                remoteState: 'catalogs{edges{node{remoteState}}}',
                dataFeedId: 'catalogs{edges{node{dataFeedId}}}',
                errors: 'catalogs{edges{node{errors}}}',
                mediaChannel: {
                    id: 'catalogs{edges{node{mediaChannel{id}}}}',
                    creationDate:
                        'catalogs{edges{node{mediaChannel{creationDate}}}}',
                    lastChangeDate:
                        'catalogs{edges{node{mediaChannel{lastChangeDate}}}}',
                    name: 'catalogs{edges{node{mediaChannel{name}}}}',
                    systemStatus:
                        'catalogs{edges{node{mediaChannel{systemStatus}}}}',
                    errors: 'catalogs{edges{node{mediaChannel{errors}}}}',
                    platform: 'catalogs{edges{node{mediaChannel{platform}}}}',
                    remoteId: 'catalogs{edges{node{mediaChannel{remoteId}}}}',
                    remoteState:
                        'catalogs{edges{node{mediaChannel{remoteState}}}}',
                    currency: 'catalogs{edges{node{mediaChannel{currency}}}}',
                    currencySymbol:
                        'catalogs{edges{node{mediaChannel{currencySymbol}}}}',
                    currencyOffset:
                        'catalogs{edges{node{mediaChannel{currencyOffset}}}}',
                    timezone: 'catalogs{edges{node{mediaChannel{timezone}}}}',
                    tokenStatus:
                        'catalogs{edges{node{mediaChannel{tokenStatus}}}}',
                },
                products: {
                    totalCount: 'catalogs{edges{node{products{totalCount}}}}',
                },
            },
            cursor: 'catalogs{edges{cursor}}',
        },
        pageInfo: {
            endCursor: 'catalogs{pageInfo{endCursor}}',
            startCursor: 'catalogs{pageInfo{startCursor}}',
            hasNextPage: 'catalogs{pageInfo{hasNextPage}}',
            hasPreviousPage: 'catalogs{pageInfo{hasPreviousPage}}',
        },
        totalCount: 'catalogs{totalCount}',
    },
    marketplace: {
        id: 'marketplace{id}',
        creationDate: 'marketplace{creationDate}',
        lastChangeDate: 'marketplace{lastChangeDate}',
        name: 'marketplace{name}',
        systemStatus: 'marketplace{systemStatus}',
        errors: 'marketplace{errors}',
        organization: {
            id: 'marketplace{organization{id}}',
            creationDate: 'marketplace{organization{creationDate}}',
            lastChangeDate: 'marketplace{organization{lastChangeDate}}',
            name: 'marketplace{organization{name}}',
            systemStatus: 'marketplace{organization{systemStatus}}',
            errors: 'marketplace{organization{errors}}',
            tier: 'marketplace{organization{tier}}',
            users: {
                edges: {
                    cursor: 'marketplace{organization{users{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'marketplace{organization{users{pageInfo{endCursor}}}}',
                    startCursor:
                        'marketplace{organization{users{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'marketplace{organization{users{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'marketplace{organization{users{pageInfo{hasPreviousPage}}}}',
                },
                totalCount: 'marketplace{organization{users{totalCount}}}',
            },
            marketplaces: {
                edges: {
                    cursor:
                        'marketplace{organization{marketplaces{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'marketplace{organization{marketplaces{pageInfo{endCursor}}}}',
                    startCursor:
                        'marketplace{organization{marketplaces{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'marketplace{organization{marketplaces{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'marketplace{organization{marketplaces{pageInfo{hasPreviousPage}}}}',
                },
                totalCount:
                    'marketplace{organization{marketplaces{totalCount}}}',
            },
        },
        mediaChannels: {
            edges: {
                node: {
                    id: 'marketplace{mediaChannels{edges{node{id}}}}',
                    creationDate:
                        'marketplace{mediaChannels{edges{node{creationDate}}}}',
                    lastChangeDate:
                        'marketplace{mediaChannels{edges{node{lastChangeDate}}}}',
                    name: 'marketplace{mediaChannels{edges{node{name}}}}',
                    systemStatus:
                        'marketplace{mediaChannels{edges{node{systemStatus}}}}',
                    errors: 'marketplace{mediaChannels{edges{node{errors}}}}',
                    platform:
                        'marketplace{mediaChannels{edges{node{platform}}}}',
                    remoteId:
                        'marketplace{mediaChannels{edges{node{remoteId}}}}',
                    remoteState:
                        'marketplace{mediaChannels{edges{node{remoteState}}}}',
                    currency:
                        'marketplace{mediaChannels{edges{node{currency}}}}',
                    currencySymbol:
                        'marketplace{mediaChannels{edges{node{currencySymbol}}}}',
                    currencyOffset:
                        'marketplace{mediaChannels{edges{node{currencyOffset}}}}',
                    timezone:
                        'marketplace{mediaChannels{edges{node{timezone}}}}',
                    tokenStatus:
                        'marketplace{mediaChannels{edges{node{tokenStatus}}}}',
                },
                cursor: 'marketplace{mediaChannels{edges{cursor}}}',
            },
            pageInfo: {
                endCursor: 'marketplace{mediaChannels{pageInfo{endCursor}}}',
                startCursor:
                    'marketplace{mediaChannels{pageInfo{startCursor}}}',
                hasNextPage:
                    'marketplace{mediaChannels{pageInfo{hasNextPage}}}',
                hasPreviousPage:
                    'marketplace{mediaChannels{pageInfo{hasPreviousPage}}}',
            },
            totalCount: 'marketplace{mediaChannels{totalCount}}',
        },
        campaignTemplates: {
            edges: {
                node: {
                    id: 'marketplace{campaignTemplates{edges{node{id}}}}',
                    creationDate:
                        'marketplace{campaignTemplates{edges{node{creationDate}}}}',
                    lastChangeDate:
                        'marketplace{campaignTemplates{edges{node{lastChangeDate}}}}',
                    name: 'marketplace{campaignTemplates{edges{node{name}}}}',
                    description:
                        'marketplace{campaignTemplates{edges{node{description}}}}',
                    platform:
                        'marketplace{campaignTemplates{edges{node{platform}}}}',
                    remoteId:
                        'marketplace{campaignTemplates{edges{node{remoteId}}}}',
                    systemStatus:
                        'marketplace{campaignTemplates{edges{node{systemStatus}}}}',
                    errors:
                        'marketplace{campaignTemplates{edges{node{errors}}}}',
                },
                cursor: 'marketplace{campaignTemplates{edges{cursor}}}',
            },
            pageInfo: {
                endCursor:
                    'marketplace{campaignTemplates{pageInfo{endCursor}}}',
                startCursor:
                    'marketplace{campaignTemplates{pageInfo{startCursor}}}',
                hasNextPage:
                    'marketplace{campaignTemplates{pageInfo{hasNextPage}}}',
                hasPreviousPage:
                    'marketplace{campaignTemplates{pageInfo{hasPreviousPage}}}',
            },
            totalCount: 'marketplace{campaignTemplates{totalCount}}',
        },
        vendors: {
            edges: {
                node: {
                    id: 'marketplace{vendors{edges{node{id}}}}',
                    creationDate:
                        'marketplace{vendors{edges{node{creationDate}}}}',
                    lastChangeDate:
                        'marketplace{vendors{edges{node{lastChangeDate}}}}',
                    name: 'marketplace{vendors{edges{node{name}}}}',
                    systemStatus:
                        'marketplace{vendors{edges{node{systemStatus}}}}',
                    errors: 'marketplace{vendors{edges{node{errors}}}}',
                },
                cursor: 'marketplace{vendors{edges{cursor}}}',
            },
            pageInfo: {
                endCursor: 'marketplace{vendors{pageInfo{endCursor}}}',
                startCursor: 'marketplace{vendors{pageInfo{startCursor}}}',
                hasNextPage: 'marketplace{vendors{pageInfo{hasNextPage}}}',
                hasPreviousPage:
                    'marketplace{vendors{pageInfo{hasPreviousPage}}}',
            },
            totalCount: 'marketplace{vendors{totalCount}}',
        },
        vendorTokens: {
            edges: {
                node: {
                    id: 'marketplace{vendorTokens{edges{node{id}}}}',
                    creationDate:
                        'marketplace{vendorTokens{edges{node{creationDate}}}}',
                    lastChangeDate:
                        'marketplace{vendorTokens{edges{node{lastChangeDate}}}}',
                    token: 'marketplace{vendorTokens{edges{node{token}}}}',
                },
                cursor: 'marketplace{vendorTokens{edges{cursor}}}',
            },
            pageInfo: {
                endCursor: 'marketplace{vendorTokens{pageInfo{endCursor}}}',
                startCursor: 'marketplace{vendorTokens{pageInfo{startCursor}}}',
                hasNextPage: 'marketplace{vendorTokens{pageInfo{hasNextPage}}}',
                hasPreviousPage:
                    'marketplace{vendorTokens{pageInfo{hasPreviousPage}}}',
            },
            totalCount: 'marketplace{vendorTokens{totalCount}}',
        },
        creativeTemplates: {
            edges: {
                node: {
                    id: 'marketplace{creativeTemplates{edges{node{id}}}}',
                    creationDate:
                        'marketplace{creativeTemplates{edges{node{creationDate}}}}',
                    lastChangeDate:
                        'marketplace{creativeTemplates{edges{node{lastChangeDate}}}}',
                    name: 'marketplace{creativeTemplates{edges{node{name}}}}',
                    height:
                        'marketplace{creativeTemplates{edges{node{height}}}}',
                    width: 'marketplace{creativeTemplates{edges{node{width}}}}',
                    systemStatus:
                        'marketplace{creativeTemplates{edges{node{systemStatus}}}}',
                    errors:
                        'marketplace{creativeTemplates{edges{node{errors}}}}',
                },
                cursor: 'marketplace{creativeTemplates{edges{cursor}}}',
            },
            pageInfo: {
                endCursor:
                    'marketplace{creativeTemplates{pageInfo{endCursor}}}',
                startCursor:
                    'marketplace{creativeTemplates{pageInfo{startCursor}}}',
                hasNextPage:
                    'marketplace{creativeTemplates{pageInfo{hasNextPage}}}',
                hasPreviousPage:
                    'marketplace{creativeTemplates{pageInfo{hasPreviousPage}}}',
            },
            totalCount: 'marketplace{creativeTemplates{totalCount}}',
        },
    },
};
export type MediaChannelField =
    | 'id'
    | 'creationDate'
    | 'lastChangeDate'
    | 'name'
    | 'systemStatus'
    | 'errors'
    | 'platform'
    | 'remoteId'
    | 'remoteState'
    | 'currency'
    | 'currencySymbol'
    | 'currencyOffset'
    | 'timezone'
    | 'tokenStatus'
    | 'catalogs{edges{node{id}}}'
    | 'catalogs{edges{node{creationDate}}}'
    | 'catalogs{edges{node{lastChangeDate}}}'
    | 'catalogs{edges{node{name}}}'
    | 'catalogs{edges{node{catalogType}}}'
    | 'catalogs{edges{node{remoteId}}}'
    | 'catalogs{edges{node{systemStatus}}}'
    | 'catalogs{edges{node{remoteState}}}'
    | 'catalogs{edges{node{dataFeedId}}}'
    | 'catalogs{edges{node{errors}}}'
    | 'catalogs{edges{node{mediaChannel{id}}}}'
    | 'catalogs{edges{node{mediaChannel{creationDate}}}}'
    | 'catalogs{edges{node{mediaChannel{lastChangeDate}}}}'
    | 'catalogs{edges{node{mediaChannel{name}}}}'
    | 'catalogs{edges{node{mediaChannel{systemStatus}}}}'
    | 'catalogs{edges{node{mediaChannel{errors}}}}'
    | 'catalogs{edges{node{mediaChannel{platform}}}}'
    | 'catalogs{edges{node{mediaChannel{remoteId}}}}'
    | 'catalogs{edges{node{mediaChannel{remoteState}}}}'
    | 'catalogs{edges{node{mediaChannel{currency}}}}'
    | 'catalogs{edges{node{mediaChannel{currencySymbol}}}}'
    | 'catalogs{edges{node{mediaChannel{currencyOffset}}}}'
    | 'catalogs{edges{node{mediaChannel{timezone}}}}'
    | 'catalogs{edges{node{mediaChannel{tokenStatus}}}}'
    | 'catalogs{edges{node{products{totalCount}}}}'
    | 'catalogs{edges{cursor}}'
    | 'catalogs{pageInfo{endCursor}}'
    | 'catalogs{pageInfo{startCursor}}'
    | 'catalogs{pageInfo{hasNextPage}}'
    | 'catalogs{pageInfo{hasPreviousPage}}'
    | 'catalogs{totalCount}'
    | 'marketplace{id}'
    | 'marketplace{creationDate}'
    | 'marketplace{lastChangeDate}'
    | 'marketplace{name}'
    | 'marketplace{systemStatus}'
    | 'marketplace{errors}'
    | 'marketplace{organization{id}}'
    | 'marketplace{organization{creationDate}}'
    | 'marketplace{organization{lastChangeDate}}'
    | 'marketplace{organization{name}}'
    | 'marketplace{organization{systemStatus}}'
    | 'marketplace{organization{errors}}'
    | 'marketplace{organization{tier}}'
    | 'marketplace{organization{users{edges{cursor}}}}'
    | 'marketplace{organization{users{pageInfo{endCursor}}}}'
    | 'marketplace{organization{users{pageInfo{startCursor}}}}'
    | 'marketplace{organization{users{pageInfo{hasNextPage}}}}'
    | 'marketplace{organization{users{pageInfo{hasPreviousPage}}}}'
    | 'marketplace{organization{users{totalCount}}}'
    | 'marketplace{organization{marketplaces{edges{cursor}}}}'
    | 'marketplace{organization{marketplaces{pageInfo{endCursor}}}}'
    | 'marketplace{organization{marketplaces{pageInfo{startCursor}}}}'
    | 'marketplace{organization{marketplaces{pageInfo{hasNextPage}}}}'
    | 'marketplace{organization{marketplaces{pageInfo{hasPreviousPage}}}}'
    | 'marketplace{organization{marketplaces{totalCount}}}'
    | 'marketplace{mediaChannels{edges{node{id}}}}'
    | 'marketplace{mediaChannels{edges{node{creationDate}}}}'
    | 'marketplace{mediaChannels{edges{node{lastChangeDate}}}}'
    | 'marketplace{mediaChannels{edges{node{name}}}}'
    | 'marketplace{mediaChannels{edges{node{systemStatus}}}}'
    | 'marketplace{mediaChannels{edges{node{errors}}}}'
    | 'marketplace{mediaChannels{edges{node{platform}}}}'
    | 'marketplace{mediaChannels{edges{node{remoteId}}}}'
    | 'marketplace{mediaChannels{edges{node{remoteState}}}}'
    | 'marketplace{mediaChannels{edges{node{currency}}}}'
    | 'marketplace{mediaChannels{edges{node{currencySymbol}}}}'
    | 'marketplace{mediaChannels{edges{node{currencyOffset}}}}'
    | 'marketplace{mediaChannels{edges{node{timezone}}}}'
    | 'marketplace{mediaChannels{edges{node{tokenStatus}}}}'
    | 'marketplace{mediaChannels{edges{cursor}}}'
    | 'marketplace{mediaChannels{pageInfo{endCursor}}}'
    | 'marketplace{mediaChannels{pageInfo{startCursor}}}'
    | 'marketplace{mediaChannels{pageInfo{hasNextPage}}}'
    | 'marketplace{mediaChannels{pageInfo{hasPreviousPage}}}'
    | 'marketplace{mediaChannels{totalCount}}'
    | 'marketplace{campaignTemplates{edges{node{id}}}}'
    | 'marketplace{campaignTemplates{edges{node{creationDate}}}}'
    | 'marketplace{campaignTemplates{edges{node{lastChangeDate}}}}'
    | 'marketplace{campaignTemplates{edges{node{name}}}}'
    | 'marketplace{campaignTemplates{edges{node{description}}}}'
    | 'marketplace{campaignTemplates{edges{node{platform}}}}'
    | 'marketplace{campaignTemplates{edges{node{remoteId}}}}'
    | 'marketplace{campaignTemplates{edges{node{systemStatus}}}}'
    | 'marketplace{campaignTemplates{edges{node{errors}}}}'
    | 'marketplace{campaignTemplates{edges{cursor}}}'
    | 'marketplace{campaignTemplates{pageInfo{endCursor}}}'
    | 'marketplace{campaignTemplates{pageInfo{startCursor}}}'
    | 'marketplace{campaignTemplates{pageInfo{hasNextPage}}}'
    | 'marketplace{campaignTemplates{pageInfo{hasPreviousPage}}}'
    | 'marketplace{campaignTemplates{totalCount}}'
    | 'marketplace{vendors{edges{node{id}}}}'
    | 'marketplace{vendors{edges{node{creationDate}}}}'
    | 'marketplace{vendors{edges{node{lastChangeDate}}}}'
    | 'marketplace{vendors{edges{node{name}}}}'
    | 'marketplace{vendors{edges{node{systemStatus}}}}'
    | 'marketplace{vendors{edges{node{errors}}}}'
    | 'marketplace{vendors{edges{cursor}}}'
    | 'marketplace{vendors{pageInfo{endCursor}}}'
    | 'marketplace{vendors{pageInfo{startCursor}}}'
    | 'marketplace{vendors{pageInfo{hasNextPage}}}'
    | 'marketplace{vendors{pageInfo{hasPreviousPage}}}'
    | 'marketplace{vendors{totalCount}}'
    | 'marketplace{vendorTokens{edges{node{id}}}}'
    | 'marketplace{vendorTokens{edges{node{creationDate}}}}'
    | 'marketplace{vendorTokens{edges{node{lastChangeDate}}}}'
    | 'marketplace{vendorTokens{edges{node{token}}}}'
    | 'marketplace{vendorTokens{edges{cursor}}}'
    | 'marketplace{vendorTokens{pageInfo{endCursor}}}'
    | 'marketplace{vendorTokens{pageInfo{startCursor}}}'
    | 'marketplace{vendorTokens{pageInfo{hasNextPage}}}'
    | 'marketplace{vendorTokens{pageInfo{hasPreviousPage}}}'
    | 'marketplace{vendorTokens{totalCount}}'
    | 'marketplace{creativeTemplates{edges{node{id}}}}'
    | 'marketplace{creativeTemplates{edges{node{creationDate}}}}'
    | 'marketplace{creativeTemplates{edges{node{lastChangeDate}}}}'
    | 'marketplace{creativeTemplates{edges{node{name}}}}'
    | 'marketplace{creativeTemplates{edges{node{height}}}}'
    | 'marketplace{creativeTemplates{edges{node{width}}}}'
    | 'marketplace{creativeTemplates{edges{node{systemStatus}}}}'
    | 'marketplace{creativeTemplates{edges{node{errors}}}}'
    | 'marketplace{creativeTemplates{edges{cursor}}}'
    | 'marketplace{creativeTemplates{pageInfo{endCursor}}}'
    | 'marketplace{creativeTemplates{pageInfo{startCursor}}}'
    | 'marketplace{creativeTemplates{pageInfo{hasNextPage}}}'
    | 'marketplace{creativeTemplates{pageInfo{hasPreviousPage}}}'
    | 'marketplace{creativeTemplates{totalCount}}';
export type CatalogFields = {
    id: 'id';
    creationDate: 'creationDate';
    lastChangeDate: 'lastChangeDate';
    name: 'name';
    catalogType: 'catalogType';
    remoteId: 'remoteId';
    systemStatus: 'systemStatus';
    remoteState: 'remoteState';
    dataFeedId: 'dataFeedId';
    errors: 'errors';
    mediaChannel: {
        id: 'mediaChannel{id}';
        creationDate: 'mediaChannel{creationDate}';
        lastChangeDate: 'mediaChannel{lastChangeDate}';
        name: 'mediaChannel{name}';
        systemStatus: 'mediaChannel{systemStatus}';
        errors: 'mediaChannel{errors}';
        platform: 'mediaChannel{platform}';
        remoteId: 'mediaChannel{remoteId}';
        remoteState: 'mediaChannel{remoteState}';
        currency: 'mediaChannel{currency}';
        currencySymbol: 'mediaChannel{currencySymbol}';
        currencyOffset: 'mediaChannel{currencyOffset}';
        timezone: 'mediaChannel{timezone}';
        tokenStatus: 'mediaChannel{tokenStatus}';
        catalogs: {
            edges: {
                node: {
                    id: 'mediaChannel{catalogs{edges{node{id}}}}';
                    creationDate: 'mediaChannel{catalogs{edges{node{creationDate}}}}';
                    lastChangeDate: 'mediaChannel{catalogs{edges{node{lastChangeDate}}}}';
                    name: 'mediaChannel{catalogs{edges{node{name}}}}';
                    catalogType: 'mediaChannel{catalogs{edges{node{catalogType}}}}';
                    remoteId: 'mediaChannel{catalogs{edges{node{remoteId}}}}';
                    systemStatus: 'mediaChannel{catalogs{edges{node{systemStatus}}}}';
                    remoteState: 'mediaChannel{catalogs{edges{node{remoteState}}}}';
                    dataFeedId: 'mediaChannel{catalogs{edges{node{dataFeedId}}}}';
                    errors: 'mediaChannel{catalogs{edges{node{errors}}}}';
                };
                cursor: 'mediaChannel{catalogs{edges{cursor}}}';
            };
            pageInfo: {
                endCursor: 'mediaChannel{catalogs{pageInfo{endCursor}}}';
                startCursor: 'mediaChannel{catalogs{pageInfo{startCursor}}}';
                hasNextPage: 'mediaChannel{catalogs{pageInfo{hasNextPage}}}';
                hasPreviousPage: 'mediaChannel{catalogs{pageInfo{hasPreviousPage}}}';
            };
            totalCount: 'mediaChannel{catalogs{totalCount}}';
        };
        marketplace: {
            id: 'mediaChannel{marketplace{id}}';
            creationDate: 'mediaChannel{marketplace{creationDate}}';
            lastChangeDate: 'mediaChannel{marketplace{lastChangeDate}}';
            name: 'mediaChannel{marketplace{name}}';
            systemStatus: 'mediaChannel{marketplace{systemStatus}}';
            errors: 'mediaChannel{marketplace{errors}}';
            organization: {
                id: 'mediaChannel{marketplace{organization{id}}}';
                creationDate: 'mediaChannel{marketplace{organization{creationDate}}}';
                lastChangeDate: 'mediaChannel{marketplace{organization{lastChangeDate}}}';
                name: 'mediaChannel{marketplace{organization{name}}}';
                systemStatus: 'mediaChannel{marketplace{organization{systemStatus}}}';
                errors: 'mediaChannel{marketplace{organization{errors}}}';
                tier: 'mediaChannel{marketplace{organization{tier}}}';
                users: {
                    totalCount: 'mediaChannel{marketplace{organization{users{totalCount}}}}';
                };
                marketplaces: {
                    totalCount: 'mediaChannel{marketplace{organization{marketplaces{totalCount}}}}';
                };
            };
            mediaChannels: {
                edges: {
                    cursor: 'mediaChannel{marketplace{mediaChannels{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'mediaChannel{marketplace{mediaChannels{pageInfo{endCursor}}}}';
                    startCursor: 'mediaChannel{marketplace{mediaChannels{pageInfo{startCursor}}}}';
                    hasNextPage: 'mediaChannel{marketplace{mediaChannels{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'mediaChannel{marketplace{mediaChannels{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'mediaChannel{marketplace{mediaChannels{totalCount}}}';
            };
            campaignTemplates: {
                edges: {
                    cursor: 'mediaChannel{marketplace{campaignTemplates{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'mediaChannel{marketplace{campaignTemplates{pageInfo{endCursor}}}}';
                    startCursor: 'mediaChannel{marketplace{campaignTemplates{pageInfo{startCursor}}}}';
                    hasNextPage: 'mediaChannel{marketplace{campaignTemplates{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'mediaChannel{marketplace{campaignTemplates{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'mediaChannel{marketplace{campaignTemplates{totalCount}}}';
            };
            vendors: {
                edges: {
                    cursor: 'mediaChannel{marketplace{vendors{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'mediaChannel{marketplace{vendors{pageInfo{endCursor}}}}';
                    startCursor: 'mediaChannel{marketplace{vendors{pageInfo{startCursor}}}}';
                    hasNextPage: 'mediaChannel{marketplace{vendors{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'mediaChannel{marketplace{vendors{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'mediaChannel{marketplace{vendors{totalCount}}}';
            };
            vendorTokens: {
                edges: {
                    cursor: 'mediaChannel{marketplace{vendorTokens{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'mediaChannel{marketplace{vendorTokens{pageInfo{endCursor}}}}';
                    startCursor: 'mediaChannel{marketplace{vendorTokens{pageInfo{startCursor}}}}';
                    hasNextPage: 'mediaChannel{marketplace{vendorTokens{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'mediaChannel{marketplace{vendorTokens{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'mediaChannel{marketplace{vendorTokens{totalCount}}}';
            };
            creativeTemplates: {
                edges: {
                    cursor: 'mediaChannel{marketplace{creativeTemplates{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'mediaChannel{marketplace{creativeTemplates{pageInfo{endCursor}}}}';
                    startCursor: 'mediaChannel{marketplace{creativeTemplates{pageInfo{startCursor}}}}';
                    hasNextPage: 'mediaChannel{marketplace{creativeTemplates{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'mediaChannel{marketplace{creativeTemplates{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'mediaChannel{marketplace{creativeTemplates{totalCount}}}';
            };
        };
    };
    products: {
        edges: {
            node: {
                id: 'products{edges{node{id}}}';
                creationDate: 'products{edges{node{creationDate}}}';
                lastChangeDate: 'products{edges{node{lastChangeDate}}}';
                name: 'products{edges{node{name}}}';
                sku: 'products{edges{node{sku}}}';
                remoteState: 'products{edges{node{remoteState}}}';
                metadata: 'products{edges{node{metadata}}}';
                systemStatus: 'products{edges{node{systemStatus}}}';
                errors: 'products{edges{node{errors}}}';
                warnings: 'products{edges{node{warnings}}}';
                marketingCampaigns: {
                    totalCount: 'products{edges{node{marketingCampaigns{totalCount}}}}';
                };
                catalog: {
                    id: 'products{edges{node{catalog{id}}}}';
                    creationDate: 'products{edges{node{catalog{creationDate}}}}';
                    lastChangeDate: 'products{edges{node{catalog{lastChangeDate}}}}';
                    name: 'products{edges{node{catalog{name}}}}';
                    catalogType: 'products{edges{node{catalog{catalogType}}}}';
                    remoteId: 'products{edges{node{catalog{remoteId}}}}';
                    systemStatus: 'products{edges{node{catalog{systemStatus}}}}';
                    remoteState: 'products{edges{node{catalog{remoteState}}}}';
                    dataFeedId: 'products{edges{node{catalog{dataFeedId}}}}';
                    errors: 'products{edges{node{catalog{errors}}}}';
                };
                vendor: {
                    id: 'products{edges{node{vendor{id}}}}';
                    creationDate: 'products{edges{node{vendor{creationDate}}}}';
                    lastChangeDate: 'products{edges{node{vendor{lastChangeDate}}}}';
                    name: 'products{edges{node{vendor{name}}}}';
                    systemStatus: 'products{edges{node{vendor{systemStatus}}}}';
                    errors: 'products{edges{node{vendor{errors}}}}';
                };
            };
            cursor: 'products{edges{cursor}}';
        };
        pageInfo: {
            endCursor: 'products{pageInfo{endCursor}}';
            startCursor: 'products{pageInfo{startCursor}}';
            hasNextPage: 'products{pageInfo{hasNextPage}}';
            hasPreviousPage: 'products{pageInfo{hasPreviousPage}}';
        };
        totalCount: 'products{totalCount}';
    };
};
export const CatalogFields: CatalogFields = {
    id: 'id',
    creationDate: 'creationDate',
    lastChangeDate: 'lastChangeDate',
    name: 'name',
    catalogType: 'catalogType',
    remoteId: 'remoteId',
    systemStatus: 'systemStatus',
    remoteState: 'remoteState',
    dataFeedId: 'dataFeedId',
    errors: 'errors',
    mediaChannel: {
        id: 'mediaChannel{id}',
        creationDate: 'mediaChannel{creationDate}',
        lastChangeDate: 'mediaChannel{lastChangeDate}',
        name: 'mediaChannel{name}',
        systemStatus: 'mediaChannel{systemStatus}',
        errors: 'mediaChannel{errors}',
        platform: 'mediaChannel{platform}',
        remoteId: 'mediaChannel{remoteId}',
        remoteState: 'mediaChannel{remoteState}',
        currency: 'mediaChannel{currency}',
        currencySymbol: 'mediaChannel{currencySymbol}',
        currencyOffset: 'mediaChannel{currencyOffset}',
        timezone: 'mediaChannel{timezone}',
        tokenStatus: 'mediaChannel{tokenStatus}',
        catalogs: {
            edges: {
                node: {
                    id: 'mediaChannel{catalogs{edges{node{id}}}}',
                    creationDate:
                        'mediaChannel{catalogs{edges{node{creationDate}}}}',
                    lastChangeDate:
                        'mediaChannel{catalogs{edges{node{lastChangeDate}}}}',
                    name: 'mediaChannel{catalogs{edges{node{name}}}}',
                    catalogType:
                        'mediaChannel{catalogs{edges{node{catalogType}}}}',
                    remoteId: 'mediaChannel{catalogs{edges{node{remoteId}}}}',
                    systemStatus:
                        'mediaChannel{catalogs{edges{node{systemStatus}}}}',
                    remoteState:
                        'mediaChannel{catalogs{edges{node{remoteState}}}}',
                    dataFeedId:
                        'mediaChannel{catalogs{edges{node{dataFeedId}}}}',
                    errors: 'mediaChannel{catalogs{edges{node{errors}}}}',
                },
                cursor: 'mediaChannel{catalogs{edges{cursor}}}',
            },
            pageInfo: {
                endCursor: 'mediaChannel{catalogs{pageInfo{endCursor}}}',
                startCursor: 'mediaChannel{catalogs{pageInfo{startCursor}}}',
                hasNextPage: 'mediaChannel{catalogs{pageInfo{hasNextPage}}}',
                hasPreviousPage:
                    'mediaChannel{catalogs{pageInfo{hasPreviousPage}}}',
            },
            totalCount: 'mediaChannel{catalogs{totalCount}}',
        },
        marketplace: {
            id: 'mediaChannel{marketplace{id}}',
            creationDate: 'mediaChannel{marketplace{creationDate}}',
            lastChangeDate: 'mediaChannel{marketplace{lastChangeDate}}',
            name: 'mediaChannel{marketplace{name}}',
            systemStatus: 'mediaChannel{marketplace{systemStatus}}',
            errors: 'mediaChannel{marketplace{errors}}',
            organization: {
                id: 'mediaChannel{marketplace{organization{id}}}',
                creationDate:
                    'mediaChannel{marketplace{organization{creationDate}}}',
                lastChangeDate:
                    'mediaChannel{marketplace{organization{lastChangeDate}}}',
                name: 'mediaChannel{marketplace{organization{name}}}',
                systemStatus:
                    'mediaChannel{marketplace{organization{systemStatus}}}',
                errors: 'mediaChannel{marketplace{organization{errors}}}',
                tier: 'mediaChannel{marketplace{organization{tier}}}',
                users: {
                    totalCount:
                        'mediaChannel{marketplace{organization{users{totalCount}}}}',
                },
                marketplaces: {
                    totalCount:
                        'mediaChannel{marketplace{organization{marketplaces{totalCount}}}}',
                },
            },
            mediaChannels: {
                edges: {
                    cursor:
                        'mediaChannel{marketplace{mediaChannels{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'mediaChannel{marketplace{mediaChannels{pageInfo{endCursor}}}}',
                    startCursor:
                        'mediaChannel{marketplace{mediaChannels{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'mediaChannel{marketplace{mediaChannels{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'mediaChannel{marketplace{mediaChannels{pageInfo{hasPreviousPage}}}}',
                },
                totalCount:
                    'mediaChannel{marketplace{mediaChannels{totalCount}}}',
            },
            campaignTemplates: {
                edges: {
                    cursor:
                        'mediaChannel{marketplace{campaignTemplates{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'mediaChannel{marketplace{campaignTemplates{pageInfo{endCursor}}}}',
                    startCursor:
                        'mediaChannel{marketplace{campaignTemplates{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'mediaChannel{marketplace{campaignTemplates{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'mediaChannel{marketplace{campaignTemplates{pageInfo{hasPreviousPage}}}}',
                },
                totalCount:
                    'mediaChannel{marketplace{campaignTemplates{totalCount}}}',
            },
            vendors: {
                edges: {
                    cursor: 'mediaChannel{marketplace{vendors{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'mediaChannel{marketplace{vendors{pageInfo{endCursor}}}}',
                    startCursor:
                        'mediaChannel{marketplace{vendors{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'mediaChannel{marketplace{vendors{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'mediaChannel{marketplace{vendors{pageInfo{hasPreviousPage}}}}',
                },
                totalCount: 'mediaChannel{marketplace{vendors{totalCount}}}',
            },
            vendorTokens: {
                edges: {
                    cursor:
                        'mediaChannel{marketplace{vendorTokens{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'mediaChannel{marketplace{vendorTokens{pageInfo{endCursor}}}}',
                    startCursor:
                        'mediaChannel{marketplace{vendorTokens{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'mediaChannel{marketplace{vendorTokens{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'mediaChannel{marketplace{vendorTokens{pageInfo{hasPreviousPage}}}}',
                },
                totalCount:
                    'mediaChannel{marketplace{vendorTokens{totalCount}}}',
            },
            creativeTemplates: {
                edges: {
                    cursor:
                        'mediaChannel{marketplace{creativeTemplates{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'mediaChannel{marketplace{creativeTemplates{pageInfo{endCursor}}}}',
                    startCursor:
                        'mediaChannel{marketplace{creativeTemplates{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'mediaChannel{marketplace{creativeTemplates{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'mediaChannel{marketplace{creativeTemplates{pageInfo{hasPreviousPage}}}}',
                },
                totalCount:
                    'mediaChannel{marketplace{creativeTemplates{totalCount}}}',
            },
        },
    },
    products: {
        edges: {
            node: {
                id: 'products{edges{node{id}}}',
                creationDate: 'products{edges{node{creationDate}}}',
                lastChangeDate: 'products{edges{node{lastChangeDate}}}',
                name: 'products{edges{node{name}}}',
                sku: 'products{edges{node{sku}}}',
                remoteState: 'products{edges{node{remoteState}}}',
                metadata: 'products{edges{node{metadata}}}',
                systemStatus: 'products{edges{node{systemStatus}}}',
                errors: 'products{edges{node{errors}}}',
                warnings: 'products{edges{node{warnings}}}',
                marketingCampaigns: {
                    totalCount:
                        'products{edges{node{marketingCampaigns{totalCount}}}}',
                },
                catalog: {
                    id: 'products{edges{node{catalog{id}}}}',
                    creationDate:
                        'products{edges{node{catalog{creationDate}}}}',
                    lastChangeDate:
                        'products{edges{node{catalog{lastChangeDate}}}}',
                    name: 'products{edges{node{catalog{name}}}}',
                    catalogType: 'products{edges{node{catalog{catalogType}}}}',
                    remoteId: 'products{edges{node{catalog{remoteId}}}}',
                    systemStatus:
                        'products{edges{node{catalog{systemStatus}}}}',
                    remoteState: 'products{edges{node{catalog{remoteState}}}}',
                    dataFeedId: 'products{edges{node{catalog{dataFeedId}}}}',
                    errors: 'products{edges{node{catalog{errors}}}}',
                },
                vendor: {
                    id: 'products{edges{node{vendor{id}}}}',
                    creationDate: 'products{edges{node{vendor{creationDate}}}}',
                    lastChangeDate:
                        'products{edges{node{vendor{lastChangeDate}}}}',
                    name: 'products{edges{node{vendor{name}}}}',
                    systemStatus: 'products{edges{node{vendor{systemStatus}}}}',
                    errors: 'products{edges{node{vendor{errors}}}}',
                },
            },
            cursor: 'products{edges{cursor}}',
        },
        pageInfo: {
            endCursor: 'products{pageInfo{endCursor}}',
            startCursor: 'products{pageInfo{startCursor}}',
            hasNextPage: 'products{pageInfo{hasNextPage}}',
            hasPreviousPage: 'products{pageInfo{hasPreviousPage}}',
        },
        totalCount: 'products{totalCount}',
    },
};
export type CatalogField =
    | 'id'
    | 'creationDate'
    | 'lastChangeDate'
    | 'name'
    | 'catalogType'
    | 'remoteId'
    | 'systemStatus'
    | 'remoteState'
    | 'dataFeedId'
    | 'errors'
    | 'mediaChannel{id}'
    | 'mediaChannel{creationDate}'
    | 'mediaChannel{lastChangeDate}'
    | 'mediaChannel{name}'
    | 'mediaChannel{systemStatus}'
    | 'mediaChannel{errors}'
    | 'mediaChannel{platform}'
    | 'mediaChannel{remoteId}'
    | 'mediaChannel{remoteState}'
    | 'mediaChannel{currency}'
    | 'mediaChannel{currencySymbol}'
    | 'mediaChannel{currencyOffset}'
    | 'mediaChannel{timezone}'
    | 'mediaChannel{tokenStatus}'
    | 'mediaChannel{catalogs{edges{node{id}}}}'
    | 'mediaChannel{catalogs{edges{node{creationDate}}}}'
    | 'mediaChannel{catalogs{edges{node{lastChangeDate}}}}'
    | 'mediaChannel{catalogs{edges{node{name}}}}'
    | 'mediaChannel{catalogs{edges{node{catalogType}}}}'
    | 'mediaChannel{catalogs{edges{node{remoteId}}}}'
    | 'mediaChannel{catalogs{edges{node{systemStatus}}}}'
    | 'mediaChannel{catalogs{edges{node{remoteState}}}}'
    | 'mediaChannel{catalogs{edges{node{dataFeedId}}}}'
    | 'mediaChannel{catalogs{edges{node{errors}}}}'
    | 'mediaChannel{catalogs{edges{cursor}}}'
    | 'mediaChannel{catalogs{pageInfo{endCursor}}}'
    | 'mediaChannel{catalogs{pageInfo{startCursor}}}'
    | 'mediaChannel{catalogs{pageInfo{hasNextPage}}}'
    | 'mediaChannel{catalogs{pageInfo{hasPreviousPage}}}'
    | 'mediaChannel{catalogs{totalCount}}'
    | 'mediaChannel{marketplace{id}}'
    | 'mediaChannel{marketplace{creationDate}}'
    | 'mediaChannel{marketplace{lastChangeDate}}'
    | 'mediaChannel{marketplace{name}}'
    | 'mediaChannel{marketplace{systemStatus}}'
    | 'mediaChannel{marketplace{errors}}'
    | 'mediaChannel{marketplace{organization{id}}}'
    | 'mediaChannel{marketplace{organization{creationDate}}}'
    | 'mediaChannel{marketplace{organization{lastChangeDate}}}'
    | 'mediaChannel{marketplace{organization{name}}}'
    | 'mediaChannel{marketplace{organization{systemStatus}}}'
    | 'mediaChannel{marketplace{organization{errors}}}'
    | 'mediaChannel{marketplace{organization{tier}}}'
    | 'mediaChannel{marketplace{organization{users{totalCount}}}}'
    | 'mediaChannel{marketplace{organization{marketplaces{totalCount}}}}'
    | 'mediaChannel{marketplace{mediaChannels{edges{cursor}}}}'
    | 'mediaChannel{marketplace{mediaChannels{pageInfo{endCursor}}}}'
    | 'mediaChannel{marketplace{mediaChannels{pageInfo{startCursor}}}}'
    | 'mediaChannel{marketplace{mediaChannels{pageInfo{hasNextPage}}}}'
    | 'mediaChannel{marketplace{mediaChannels{pageInfo{hasPreviousPage}}}}'
    | 'mediaChannel{marketplace{mediaChannels{totalCount}}}'
    | 'mediaChannel{marketplace{campaignTemplates{edges{cursor}}}}'
    | 'mediaChannel{marketplace{campaignTemplates{pageInfo{endCursor}}}}'
    | 'mediaChannel{marketplace{campaignTemplates{pageInfo{startCursor}}}}'
    | 'mediaChannel{marketplace{campaignTemplates{pageInfo{hasNextPage}}}}'
    | 'mediaChannel{marketplace{campaignTemplates{pageInfo{hasPreviousPage}}}}'
    | 'mediaChannel{marketplace{campaignTemplates{totalCount}}}'
    | 'mediaChannel{marketplace{vendors{edges{cursor}}}}'
    | 'mediaChannel{marketplace{vendors{pageInfo{endCursor}}}}'
    | 'mediaChannel{marketplace{vendors{pageInfo{startCursor}}}}'
    | 'mediaChannel{marketplace{vendors{pageInfo{hasNextPage}}}}'
    | 'mediaChannel{marketplace{vendors{pageInfo{hasPreviousPage}}}}'
    | 'mediaChannel{marketplace{vendors{totalCount}}}'
    | 'mediaChannel{marketplace{vendorTokens{edges{cursor}}}}'
    | 'mediaChannel{marketplace{vendorTokens{pageInfo{endCursor}}}}'
    | 'mediaChannel{marketplace{vendorTokens{pageInfo{startCursor}}}}'
    | 'mediaChannel{marketplace{vendorTokens{pageInfo{hasNextPage}}}}'
    | 'mediaChannel{marketplace{vendorTokens{pageInfo{hasPreviousPage}}}}'
    | 'mediaChannel{marketplace{vendorTokens{totalCount}}}'
    | 'mediaChannel{marketplace{creativeTemplates{edges{cursor}}}}'
    | 'mediaChannel{marketplace{creativeTemplates{pageInfo{endCursor}}}}'
    | 'mediaChannel{marketplace{creativeTemplates{pageInfo{startCursor}}}}'
    | 'mediaChannel{marketplace{creativeTemplates{pageInfo{hasNextPage}}}}'
    | 'mediaChannel{marketplace{creativeTemplates{pageInfo{hasPreviousPage}}}}'
    | 'mediaChannel{marketplace{creativeTemplates{totalCount}}}'
    | 'products{edges{node{id}}}'
    | 'products{edges{node{creationDate}}}'
    | 'products{edges{node{lastChangeDate}}}'
    | 'products{edges{node{name}}}'
    | 'products{edges{node{sku}}}'
    | 'products{edges{node{remoteState}}}'
    | 'products{edges{node{metadata}}}'
    | 'products{edges{node{systemStatus}}}'
    | 'products{edges{node{errors}}}'
    | 'products{edges{node{warnings}}}'
    | 'products{edges{node{marketingCampaigns{totalCount}}}}'
    | 'products{edges{node{catalog{id}}}}'
    | 'products{edges{node{catalog{creationDate}}}}'
    | 'products{edges{node{catalog{lastChangeDate}}}}'
    | 'products{edges{node{catalog{name}}}}'
    | 'products{edges{node{catalog{catalogType}}}}'
    | 'products{edges{node{catalog{remoteId}}}}'
    | 'products{edges{node{catalog{systemStatus}}}}'
    | 'products{edges{node{catalog{remoteState}}}}'
    | 'products{edges{node{catalog{dataFeedId}}}}'
    | 'products{edges{node{catalog{errors}}}}'
    | 'products{edges{node{vendor{id}}}}'
    | 'products{edges{node{vendor{creationDate}}}}'
    | 'products{edges{node{vendor{lastChangeDate}}}}'
    | 'products{edges{node{vendor{name}}}}'
    | 'products{edges{node{vendor{systemStatus}}}}'
    | 'products{edges{node{vendor{errors}}}}'
    | 'products{edges{cursor}}'
    | 'products{pageInfo{endCursor}}'
    | 'products{pageInfo{startCursor}}'
    | 'products{pageInfo{hasNextPage}}'
    | 'products{pageInfo{hasPreviousPage}}'
    | 'products{totalCount}';
export type ProductFields = {
    id: 'id';
    creationDate: 'creationDate';
    lastChangeDate: 'lastChangeDate';
    name: 'name';
    sku: 'sku';
    remoteState: 'remoteState';
    metadata: 'metadata';
    systemStatus: 'systemStatus';
    errors: 'errors';
    warnings: 'warnings';
    marketingCampaigns: {
        edges: {
            node: {
                id: 'marketingCampaigns{edges{node{id}}}';
                creationDate: 'marketingCampaigns{edges{node{creationDate}}}';
                lastChangeDate: 'marketingCampaigns{edges{node{lastChangeDate}}}';
                resultsSource: 'marketingCampaigns{edges{node{resultsSource}}}';
                vendor: {
                    id: 'marketingCampaigns{edges{node{vendor{id}}}}';
                    creationDate: 'marketingCampaigns{edges{node{vendor{creationDate}}}}';
                    lastChangeDate: 'marketingCampaigns{edges{node{vendor{lastChangeDate}}}}';
                    name: 'marketingCampaigns{edges{node{vendor{name}}}}';
                    systemStatus: 'marketingCampaigns{edges{node{vendor{systemStatus}}}}';
                    errors: 'marketingCampaigns{edges{node{vendor{errors}}}}';
                };
                systemStatus: 'marketingCampaigns{edges{node{systemStatus}}}';
                errors: 'marketingCampaigns{edges{node{errors}}}';
                name: 'marketingCampaigns{edges{node{name}}}';
                status: 'marketingCampaigns{edges{node{status}}}';
                creativeSpec: 'marketingCampaigns{edges{node{creativeSpec}}}';
                runTimeSpec: 'marketingCampaigns{edges{node{runTimeSpec}}}';
                marketingAds: {
                    totalCount: 'marketingCampaigns{edges{node{marketingAds{totalCount}}}}';
                };
                products: {
                    totalCount: 'marketingCampaigns{edges{node{products{totalCount}}}}';
                };
                catalog: {
                    id: 'marketingCampaigns{edges{node{catalog{id}}}}';
                    creationDate: 'marketingCampaigns{edges{node{catalog{creationDate}}}}';
                    lastChangeDate: 'marketingCampaigns{edges{node{catalog{lastChangeDate}}}}';
                    name: 'marketingCampaigns{edges{node{catalog{name}}}}';
                    catalogType: 'marketingCampaigns{edges{node{catalog{catalogType}}}}';
                    remoteId: 'marketingCampaigns{edges{node{catalog{remoteId}}}}';
                    systemStatus: 'marketingCampaigns{edges{node{catalog{systemStatus}}}}';
                    remoteState: 'marketingCampaigns{edges{node{catalog{remoteState}}}}';
                    dataFeedId: 'marketingCampaigns{edges{node{catalog{dataFeedId}}}}';
                    errors: 'marketingCampaigns{edges{node{catalog{errors}}}}';
                };
                campaignTemplate: {
                    id: 'marketingCampaigns{edges{node{campaignTemplate{id}}}}';
                    creationDate: 'marketingCampaigns{edges{node{campaignTemplate{creationDate}}}}';
                    lastChangeDate: 'marketingCampaigns{edges{node{campaignTemplate{lastChangeDate}}}}';
                    name: 'marketingCampaigns{edges{node{campaignTemplate{name}}}}';
                    description: 'marketingCampaigns{edges{node{campaignTemplate{description}}}}';
                    platform: 'marketingCampaigns{edges{node{campaignTemplate{platform}}}}';
                    remoteId: 'marketingCampaigns{edges{node{campaignTemplate{remoteId}}}}';
                    systemStatus: 'marketingCampaigns{edges{node{campaignTemplate{systemStatus}}}}';
                    errors: 'marketingCampaigns{edges{node{campaignTemplate{errors}}}}';
                };
                mediaChannel: {
                    id: 'marketingCampaigns{edges{node{mediaChannel{id}}}}';
                    creationDate: 'marketingCampaigns{edges{node{mediaChannel{creationDate}}}}';
                    lastChangeDate: 'marketingCampaigns{edges{node{mediaChannel{lastChangeDate}}}}';
                    name: 'marketingCampaigns{edges{node{mediaChannel{name}}}}';
                    systemStatus: 'marketingCampaigns{edges{node{mediaChannel{systemStatus}}}}';
                    errors: 'marketingCampaigns{edges{node{mediaChannel{errors}}}}';
                    platform: 'marketingCampaigns{edges{node{mediaChannel{platform}}}}';
                    remoteId: 'marketingCampaigns{edges{node{mediaChannel{remoteId}}}}';
                    remoteState: 'marketingCampaigns{edges{node{mediaChannel{remoteState}}}}';
                    currency: 'marketingCampaigns{edges{node{mediaChannel{currency}}}}';
                    currencySymbol: 'marketingCampaigns{edges{node{mediaChannel{currencySymbol}}}}';
                    currencyOffset: 'marketingCampaigns{edges{node{mediaChannel{currencyOffset}}}}';
                    timezone: 'marketingCampaigns{edges{node{mediaChannel{timezone}}}}';
                    tokenStatus: 'marketingCampaigns{edges{node{mediaChannel{tokenStatus}}}}';
                };
                results: {
                    totalCount: 'marketingCampaigns{edges{node{results{totalCount}}}}';
                };
            };
            cursor: 'marketingCampaigns{edges{cursor}}';
        };
        pageInfo: {
            endCursor: 'marketingCampaigns{pageInfo{endCursor}}';
            startCursor: 'marketingCampaigns{pageInfo{startCursor}}';
            hasNextPage: 'marketingCampaigns{pageInfo{hasNextPage}}';
            hasPreviousPage: 'marketingCampaigns{pageInfo{hasPreviousPage}}';
        };
        totalCount: 'marketingCampaigns{totalCount}';
    };
    catalog: {
        id: 'catalog{id}';
        creationDate: 'catalog{creationDate}';
        lastChangeDate: 'catalog{lastChangeDate}';
        name: 'catalog{name}';
        catalogType: 'catalog{catalogType}';
        remoteId: 'catalog{remoteId}';
        systemStatus: 'catalog{systemStatus}';
        remoteState: 'catalog{remoteState}';
        dataFeedId: 'catalog{dataFeedId}';
        errors: 'catalog{errors}';
        mediaChannel: {
            id: 'catalog{mediaChannel{id}}';
            creationDate: 'catalog{mediaChannel{creationDate}}';
            lastChangeDate: 'catalog{mediaChannel{lastChangeDate}}';
            name: 'catalog{mediaChannel{name}}';
            systemStatus: 'catalog{mediaChannel{systemStatus}}';
            errors: 'catalog{mediaChannel{errors}}';
            platform: 'catalog{mediaChannel{platform}}';
            remoteId: 'catalog{mediaChannel{remoteId}}';
            remoteState: 'catalog{mediaChannel{remoteState}}';
            currency: 'catalog{mediaChannel{currency}}';
            currencySymbol: 'catalog{mediaChannel{currencySymbol}}';
            currencyOffset: 'catalog{mediaChannel{currencyOffset}}';
            timezone: 'catalog{mediaChannel{timezone}}';
            tokenStatus: 'catalog{mediaChannel{tokenStatus}}';
            catalogs: {
                edges: {
                    cursor: 'catalog{mediaChannel{catalogs{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'catalog{mediaChannel{catalogs{pageInfo{endCursor}}}}';
                    startCursor: 'catalog{mediaChannel{catalogs{pageInfo{startCursor}}}}';
                    hasNextPage: 'catalog{mediaChannel{catalogs{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'catalog{mediaChannel{catalogs{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'catalog{mediaChannel{catalogs{totalCount}}}';
            };
            marketplace: {
                id: 'catalog{mediaChannel{marketplace{id}}}';
                creationDate: 'catalog{mediaChannel{marketplace{creationDate}}}';
                lastChangeDate: 'catalog{mediaChannel{marketplace{lastChangeDate}}}';
                name: 'catalog{mediaChannel{marketplace{name}}}';
                systemStatus: 'catalog{mediaChannel{marketplace{systemStatus}}}';
                errors: 'catalog{mediaChannel{marketplace{errors}}}';
                organization: {
                    id: 'catalog{mediaChannel{marketplace{organization{id}}}}';
                    creationDate: 'catalog{mediaChannel{marketplace{organization{creationDate}}}}';
                    lastChangeDate: 'catalog{mediaChannel{marketplace{organization{lastChangeDate}}}}';
                    name: 'catalog{mediaChannel{marketplace{organization{name}}}}';
                    systemStatus: 'catalog{mediaChannel{marketplace{organization{systemStatus}}}}';
                    errors: 'catalog{mediaChannel{marketplace{organization{errors}}}}';
                    tier: 'catalog{mediaChannel{marketplace{organization{tier}}}}';
                };
                mediaChannels: {
                    totalCount: 'catalog{mediaChannel{marketplace{mediaChannels{totalCount}}}}';
                };
                campaignTemplates: {
                    totalCount: 'catalog{mediaChannel{marketplace{campaignTemplates{totalCount}}}}';
                };
                vendors: {
                    totalCount: 'catalog{mediaChannel{marketplace{vendors{totalCount}}}}';
                };
                vendorTokens: {
                    totalCount: 'catalog{mediaChannel{marketplace{vendorTokens{totalCount}}}}';
                };
                creativeTemplates: {
                    totalCount: 'catalog{mediaChannel{marketplace{creativeTemplates{totalCount}}}}';
                };
            };
        };
        products: {
            edges: {
                node: {
                    id: 'catalog{products{edges{node{id}}}}';
                    creationDate: 'catalog{products{edges{node{creationDate}}}}';
                    lastChangeDate: 'catalog{products{edges{node{lastChangeDate}}}}';
                    name: 'catalog{products{edges{node{name}}}}';
                    sku: 'catalog{products{edges{node{sku}}}}';
                    remoteState: 'catalog{products{edges{node{remoteState}}}}';
                    metadata: 'catalog{products{edges{node{metadata}}}}';
                    systemStatus: 'catalog{products{edges{node{systemStatus}}}}';
                    errors: 'catalog{products{edges{node{errors}}}}';
                    warnings: 'catalog{products{edges{node{warnings}}}}';
                };
                cursor: 'catalog{products{edges{cursor}}}';
            };
            pageInfo: {
                endCursor: 'catalog{products{pageInfo{endCursor}}}';
                startCursor: 'catalog{products{pageInfo{startCursor}}}';
                hasNextPage: 'catalog{products{pageInfo{hasNextPage}}}';
                hasPreviousPage: 'catalog{products{pageInfo{hasPreviousPage}}}';
            };
            totalCount: 'catalog{products{totalCount}}';
        };
    };
    vendor: {
        id: 'vendor{id}';
        creationDate: 'vendor{creationDate}';
        lastChangeDate: 'vendor{lastChangeDate}';
        name: 'vendor{name}';
        systemStatus: 'vendor{systemStatus}';
        errors: 'vendor{errors}';
        marketplace: {
            id: 'vendor{marketplace{id}}';
            creationDate: 'vendor{marketplace{creationDate}}';
            lastChangeDate: 'vendor{marketplace{lastChangeDate}}';
            name: 'vendor{marketplace{name}}';
            systemStatus: 'vendor{marketplace{systemStatus}}';
            errors: 'vendor{marketplace{errors}}';
            organization: {
                id: 'vendor{marketplace{organization{id}}}';
                creationDate: 'vendor{marketplace{organization{creationDate}}}';
                lastChangeDate: 'vendor{marketplace{organization{lastChangeDate}}}';
                name: 'vendor{marketplace{organization{name}}}';
                systemStatus: 'vendor{marketplace{organization{systemStatus}}}';
                errors: 'vendor{marketplace{organization{errors}}}';
                tier: 'vendor{marketplace{organization{tier}}}';
                users: {
                    totalCount: 'vendor{marketplace{organization{users{totalCount}}}}';
                };
                marketplaces: {
                    totalCount: 'vendor{marketplace{organization{marketplaces{totalCount}}}}';
                };
            };
            mediaChannels: {
                edges: {
                    cursor: 'vendor{marketplace{mediaChannels{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'vendor{marketplace{mediaChannels{pageInfo{endCursor}}}}';
                    startCursor: 'vendor{marketplace{mediaChannels{pageInfo{startCursor}}}}';
                    hasNextPage: 'vendor{marketplace{mediaChannels{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'vendor{marketplace{mediaChannels{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'vendor{marketplace{mediaChannels{totalCount}}}';
            };
            campaignTemplates: {
                edges: {
                    cursor: 'vendor{marketplace{campaignTemplates{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'vendor{marketplace{campaignTemplates{pageInfo{endCursor}}}}';
                    startCursor: 'vendor{marketplace{campaignTemplates{pageInfo{startCursor}}}}';
                    hasNextPage: 'vendor{marketplace{campaignTemplates{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'vendor{marketplace{campaignTemplates{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'vendor{marketplace{campaignTemplates{totalCount}}}';
            };
            vendors: {
                edges: {
                    cursor: 'vendor{marketplace{vendors{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'vendor{marketplace{vendors{pageInfo{endCursor}}}}';
                    startCursor: 'vendor{marketplace{vendors{pageInfo{startCursor}}}}';
                    hasNextPage: 'vendor{marketplace{vendors{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'vendor{marketplace{vendors{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'vendor{marketplace{vendors{totalCount}}}';
            };
            vendorTokens: {
                edges: {
                    cursor: 'vendor{marketplace{vendorTokens{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'vendor{marketplace{vendorTokens{pageInfo{endCursor}}}}';
                    startCursor: 'vendor{marketplace{vendorTokens{pageInfo{startCursor}}}}';
                    hasNextPage: 'vendor{marketplace{vendorTokens{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'vendor{marketplace{vendorTokens{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'vendor{marketplace{vendorTokens{totalCount}}}';
            };
            creativeTemplates: {
                edges: {
                    cursor: 'vendor{marketplace{creativeTemplates{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'vendor{marketplace{creativeTemplates{pageInfo{endCursor}}}}';
                    startCursor: 'vendor{marketplace{creativeTemplates{pageInfo{startCursor}}}}';
                    hasNextPage: 'vendor{marketplace{creativeTemplates{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'vendor{marketplace{creativeTemplates{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'vendor{marketplace{creativeTemplates{totalCount}}}';
            };
        };
        vendorTokens: {
            edges: {
                node: {
                    id: 'vendor{vendorTokens{edges{node{id}}}}';
                    creationDate: 'vendor{vendorTokens{edges{node{creationDate}}}}';
                    lastChangeDate: 'vendor{vendorTokens{edges{node{lastChangeDate}}}}';
                    token: 'vendor{vendorTokens{edges{node{token}}}}';
                };
                cursor: 'vendor{vendorTokens{edges{cursor}}}';
            };
            pageInfo: {
                endCursor: 'vendor{vendorTokens{pageInfo{endCursor}}}';
                startCursor: 'vendor{vendorTokens{pageInfo{startCursor}}}';
                hasNextPage: 'vendor{vendorTokens{pageInfo{hasNextPage}}}';
                hasPreviousPage: 'vendor{vendorTokens{pageInfo{hasPreviousPage}}}';
            };
            totalCount: 'vendor{vendorTokens{totalCount}}';
        };
        products: {
            edges: {
                node: {
                    id: 'vendor{products{edges{node{id}}}}';
                    creationDate: 'vendor{products{edges{node{creationDate}}}}';
                    lastChangeDate: 'vendor{products{edges{node{lastChangeDate}}}}';
                    name: 'vendor{products{edges{node{name}}}}';
                    sku: 'vendor{products{edges{node{sku}}}}';
                    remoteState: 'vendor{products{edges{node{remoteState}}}}';
                    metadata: 'vendor{products{edges{node{metadata}}}}';
                    systemStatus: 'vendor{products{edges{node{systemStatus}}}}';
                    errors: 'vendor{products{edges{node{errors}}}}';
                    warnings: 'vendor{products{edges{node{warnings}}}}';
                };
                cursor: 'vendor{products{edges{cursor}}}';
            };
            pageInfo: {
                endCursor: 'vendor{products{pageInfo{endCursor}}}';
                startCursor: 'vendor{products{pageInfo{startCursor}}}';
                hasNextPage: 'vendor{products{pageInfo{hasNextPage}}}';
                hasPreviousPage: 'vendor{products{pageInfo{hasPreviousPage}}}';
            };
            totalCount: 'vendor{products{totalCount}}';
        };
    };
};
export const ProductFields: ProductFields = {
    id: 'id',
    creationDate: 'creationDate',
    lastChangeDate: 'lastChangeDate',
    name: 'name',
    sku: 'sku',
    remoteState: 'remoteState',
    metadata: 'metadata',
    systemStatus: 'systemStatus',
    errors: 'errors',
    warnings: 'warnings',
    marketingCampaigns: {
        edges: {
            node: {
                id: 'marketingCampaigns{edges{node{id}}}',
                creationDate: 'marketingCampaigns{edges{node{creationDate}}}',
                lastChangeDate:
                    'marketingCampaigns{edges{node{lastChangeDate}}}',
                resultsSource: 'marketingCampaigns{edges{node{resultsSource}}}',
                vendor: {
                    id: 'marketingCampaigns{edges{node{vendor{id}}}}',
                    creationDate:
                        'marketingCampaigns{edges{node{vendor{creationDate}}}}',
                    lastChangeDate:
                        'marketingCampaigns{edges{node{vendor{lastChangeDate}}}}',
                    name: 'marketingCampaigns{edges{node{vendor{name}}}}',
                    systemStatus:
                        'marketingCampaigns{edges{node{vendor{systemStatus}}}}',
                    errors: 'marketingCampaigns{edges{node{vendor{errors}}}}',
                },
                systemStatus: 'marketingCampaigns{edges{node{systemStatus}}}',
                errors: 'marketingCampaigns{edges{node{errors}}}',
                name: 'marketingCampaigns{edges{node{name}}}',
                status: 'marketingCampaigns{edges{node{status}}}',
                creativeSpec: 'marketingCampaigns{edges{node{creativeSpec}}}',
                runTimeSpec: 'marketingCampaigns{edges{node{runTimeSpec}}}',
                marketingAds: {
                    totalCount:
                        'marketingCampaigns{edges{node{marketingAds{totalCount}}}}',
                },
                products: {
                    totalCount:
                        'marketingCampaigns{edges{node{products{totalCount}}}}',
                },
                catalog: {
                    id: 'marketingCampaigns{edges{node{catalog{id}}}}',
                    creationDate:
                        'marketingCampaigns{edges{node{catalog{creationDate}}}}',
                    lastChangeDate:
                        'marketingCampaigns{edges{node{catalog{lastChangeDate}}}}',
                    name: 'marketingCampaigns{edges{node{catalog{name}}}}',
                    catalogType:
                        'marketingCampaigns{edges{node{catalog{catalogType}}}}',
                    remoteId:
                        'marketingCampaigns{edges{node{catalog{remoteId}}}}',
                    systemStatus:
                        'marketingCampaigns{edges{node{catalog{systemStatus}}}}',
                    remoteState:
                        'marketingCampaigns{edges{node{catalog{remoteState}}}}',
                    dataFeedId:
                        'marketingCampaigns{edges{node{catalog{dataFeedId}}}}',
                    errors: 'marketingCampaigns{edges{node{catalog{errors}}}}',
                },
                campaignTemplate: {
                    id: 'marketingCampaigns{edges{node{campaignTemplate{id}}}}',
                    creationDate:
                        'marketingCampaigns{edges{node{campaignTemplate{creationDate}}}}',
                    lastChangeDate:
                        'marketingCampaigns{edges{node{campaignTemplate{lastChangeDate}}}}',
                    name:
                        'marketingCampaigns{edges{node{campaignTemplate{name}}}}',
                    description:
                        'marketingCampaigns{edges{node{campaignTemplate{description}}}}',
                    platform:
                        'marketingCampaigns{edges{node{campaignTemplate{platform}}}}',
                    remoteId:
                        'marketingCampaigns{edges{node{campaignTemplate{remoteId}}}}',
                    systemStatus:
                        'marketingCampaigns{edges{node{campaignTemplate{systemStatus}}}}',
                    errors:
                        'marketingCampaigns{edges{node{campaignTemplate{errors}}}}',
                },
                mediaChannel: {
                    id: 'marketingCampaigns{edges{node{mediaChannel{id}}}}',
                    creationDate:
                        'marketingCampaigns{edges{node{mediaChannel{creationDate}}}}',
                    lastChangeDate:
                        'marketingCampaigns{edges{node{mediaChannel{lastChangeDate}}}}',
                    name: 'marketingCampaigns{edges{node{mediaChannel{name}}}}',
                    systemStatus:
                        'marketingCampaigns{edges{node{mediaChannel{systemStatus}}}}',
                    errors:
                        'marketingCampaigns{edges{node{mediaChannel{errors}}}}',
                    platform:
                        'marketingCampaigns{edges{node{mediaChannel{platform}}}}',
                    remoteId:
                        'marketingCampaigns{edges{node{mediaChannel{remoteId}}}}',
                    remoteState:
                        'marketingCampaigns{edges{node{mediaChannel{remoteState}}}}',
                    currency:
                        'marketingCampaigns{edges{node{mediaChannel{currency}}}}',
                    currencySymbol:
                        'marketingCampaigns{edges{node{mediaChannel{currencySymbol}}}}',
                    currencyOffset:
                        'marketingCampaigns{edges{node{mediaChannel{currencyOffset}}}}',
                    timezone:
                        'marketingCampaigns{edges{node{mediaChannel{timezone}}}}',
                    tokenStatus:
                        'marketingCampaigns{edges{node{mediaChannel{tokenStatus}}}}',
                },
                results: {
                    totalCount:
                        'marketingCampaigns{edges{node{results{totalCount}}}}',
                },
            },
            cursor: 'marketingCampaigns{edges{cursor}}',
        },
        pageInfo: {
            endCursor: 'marketingCampaigns{pageInfo{endCursor}}',
            startCursor: 'marketingCampaigns{pageInfo{startCursor}}',
            hasNextPage: 'marketingCampaigns{pageInfo{hasNextPage}}',
            hasPreviousPage: 'marketingCampaigns{pageInfo{hasPreviousPage}}',
        },
        totalCount: 'marketingCampaigns{totalCount}',
    },
    catalog: {
        id: 'catalog{id}',
        creationDate: 'catalog{creationDate}',
        lastChangeDate: 'catalog{lastChangeDate}',
        name: 'catalog{name}',
        catalogType: 'catalog{catalogType}',
        remoteId: 'catalog{remoteId}',
        systemStatus: 'catalog{systemStatus}',
        remoteState: 'catalog{remoteState}',
        dataFeedId: 'catalog{dataFeedId}',
        errors: 'catalog{errors}',
        mediaChannel: {
            id: 'catalog{mediaChannel{id}}',
            creationDate: 'catalog{mediaChannel{creationDate}}',
            lastChangeDate: 'catalog{mediaChannel{lastChangeDate}}',
            name: 'catalog{mediaChannel{name}}',
            systemStatus: 'catalog{mediaChannel{systemStatus}}',
            errors: 'catalog{mediaChannel{errors}}',
            platform: 'catalog{mediaChannel{platform}}',
            remoteId: 'catalog{mediaChannel{remoteId}}',
            remoteState: 'catalog{mediaChannel{remoteState}}',
            currency: 'catalog{mediaChannel{currency}}',
            currencySymbol: 'catalog{mediaChannel{currencySymbol}}',
            currencyOffset: 'catalog{mediaChannel{currencyOffset}}',
            timezone: 'catalog{mediaChannel{timezone}}',
            tokenStatus: 'catalog{mediaChannel{tokenStatus}}',
            catalogs: {
                edges: {
                    cursor: 'catalog{mediaChannel{catalogs{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'catalog{mediaChannel{catalogs{pageInfo{endCursor}}}}',
                    startCursor:
                        'catalog{mediaChannel{catalogs{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'catalog{mediaChannel{catalogs{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'catalog{mediaChannel{catalogs{pageInfo{hasPreviousPage}}}}',
                },
                totalCount: 'catalog{mediaChannel{catalogs{totalCount}}}',
            },
            marketplace: {
                id: 'catalog{mediaChannel{marketplace{id}}}',
                creationDate:
                    'catalog{mediaChannel{marketplace{creationDate}}}',
                lastChangeDate:
                    'catalog{mediaChannel{marketplace{lastChangeDate}}}',
                name: 'catalog{mediaChannel{marketplace{name}}}',
                systemStatus:
                    'catalog{mediaChannel{marketplace{systemStatus}}}',
                errors: 'catalog{mediaChannel{marketplace{errors}}}',
                organization: {
                    id: 'catalog{mediaChannel{marketplace{organization{id}}}}',
                    creationDate:
                        'catalog{mediaChannel{marketplace{organization{creationDate}}}}',
                    lastChangeDate:
                        'catalog{mediaChannel{marketplace{organization{lastChangeDate}}}}',
                    name:
                        'catalog{mediaChannel{marketplace{organization{name}}}}',
                    systemStatus:
                        'catalog{mediaChannel{marketplace{organization{systemStatus}}}}',
                    errors:
                        'catalog{mediaChannel{marketplace{organization{errors}}}}',
                    tier:
                        'catalog{mediaChannel{marketplace{organization{tier}}}}',
                },
                mediaChannels: {
                    totalCount:
                        'catalog{mediaChannel{marketplace{mediaChannels{totalCount}}}}',
                },
                campaignTemplates: {
                    totalCount:
                        'catalog{mediaChannel{marketplace{campaignTemplates{totalCount}}}}',
                },
                vendors: {
                    totalCount:
                        'catalog{mediaChannel{marketplace{vendors{totalCount}}}}',
                },
                vendorTokens: {
                    totalCount:
                        'catalog{mediaChannel{marketplace{vendorTokens{totalCount}}}}',
                },
                creativeTemplates: {
                    totalCount:
                        'catalog{mediaChannel{marketplace{creativeTemplates{totalCount}}}}',
                },
            },
        },
        products: {
            edges: {
                node: {
                    id: 'catalog{products{edges{node{id}}}}',
                    creationDate:
                        'catalog{products{edges{node{creationDate}}}}',
                    lastChangeDate:
                        'catalog{products{edges{node{lastChangeDate}}}}',
                    name: 'catalog{products{edges{node{name}}}}',
                    sku: 'catalog{products{edges{node{sku}}}}',
                    remoteState: 'catalog{products{edges{node{remoteState}}}}',
                    metadata: 'catalog{products{edges{node{metadata}}}}',
                    systemStatus:
                        'catalog{products{edges{node{systemStatus}}}}',
                    errors: 'catalog{products{edges{node{errors}}}}',
                    warnings: 'catalog{products{edges{node{warnings}}}}',
                },
                cursor: 'catalog{products{edges{cursor}}}',
            },
            pageInfo: {
                endCursor: 'catalog{products{pageInfo{endCursor}}}',
                startCursor: 'catalog{products{pageInfo{startCursor}}}',
                hasNextPage: 'catalog{products{pageInfo{hasNextPage}}}',
                hasPreviousPage: 'catalog{products{pageInfo{hasPreviousPage}}}',
            },
            totalCount: 'catalog{products{totalCount}}',
        },
    },
    vendor: {
        id: 'vendor{id}',
        creationDate: 'vendor{creationDate}',
        lastChangeDate: 'vendor{lastChangeDate}',
        name: 'vendor{name}',
        systemStatus: 'vendor{systemStatus}',
        errors: 'vendor{errors}',
        marketplace: {
            id: 'vendor{marketplace{id}}',
            creationDate: 'vendor{marketplace{creationDate}}',
            lastChangeDate: 'vendor{marketplace{lastChangeDate}}',
            name: 'vendor{marketplace{name}}',
            systemStatus: 'vendor{marketplace{systemStatus}}',
            errors: 'vendor{marketplace{errors}}',
            organization: {
                id: 'vendor{marketplace{organization{id}}}',
                creationDate: 'vendor{marketplace{organization{creationDate}}}',
                lastChangeDate:
                    'vendor{marketplace{organization{lastChangeDate}}}',
                name: 'vendor{marketplace{organization{name}}}',
                systemStatus: 'vendor{marketplace{organization{systemStatus}}}',
                errors: 'vendor{marketplace{organization{errors}}}',
                tier: 'vendor{marketplace{organization{tier}}}',
                users: {
                    totalCount:
                        'vendor{marketplace{organization{users{totalCount}}}}',
                },
                marketplaces: {
                    totalCount:
                        'vendor{marketplace{organization{marketplaces{totalCount}}}}',
                },
            },
            mediaChannels: {
                edges: {
                    cursor: 'vendor{marketplace{mediaChannels{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'vendor{marketplace{mediaChannels{pageInfo{endCursor}}}}',
                    startCursor:
                        'vendor{marketplace{mediaChannels{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'vendor{marketplace{mediaChannels{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'vendor{marketplace{mediaChannels{pageInfo{hasPreviousPage}}}}',
                },
                totalCount: 'vendor{marketplace{mediaChannels{totalCount}}}',
            },
            campaignTemplates: {
                edges: {
                    cursor:
                        'vendor{marketplace{campaignTemplates{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'vendor{marketplace{campaignTemplates{pageInfo{endCursor}}}}',
                    startCursor:
                        'vendor{marketplace{campaignTemplates{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'vendor{marketplace{campaignTemplates{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'vendor{marketplace{campaignTemplates{pageInfo{hasPreviousPage}}}}',
                },
                totalCount:
                    'vendor{marketplace{campaignTemplates{totalCount}}}',
            },
            vendors: {
                edges: {
                    cursor: 'vendor{marketplace{vendors{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'vendor{marketplace{vendors{pageInfo{endCursor}}}}',
                    startCursor:
                        'vendor{marketplace{vendors{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'vendor{marketplace{vendors{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'vendor{marketplace{vendors{pageInfo{hasPreviousPage}}}}',
                },
                totalCount: 'vendor{marketplace{vendors{totalCount}}}',
            },
            vendorTokens: {
                edges: {
                    cursor: 'vendor{marketplace{vendorTokens{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'vendor{marketplace{vendorTokens{pageInfo{endCursor}}}}',
                    startCursor:
                        'vendor{marketplace{vendorTokens{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'vendor{marketplace{vendorTokens{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'vendor{marketplace{vendorTokens{pageInfo{hasPreviousPage}}}}',
                },
                totalCount: 'vendor{marketplace{vendorTokens{totalCount}}}',
            },
            creativeTemplates: {
                edges: {
                    cursor:
                        'vendor{marketplace{creativeTemplates{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'vendor{marketplace{creativeTemplates{pageInfo{endCursor}}}}',
                    startCursor:
                        'vendor{marketplace{creativeTemplates{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'vendor{marketplace{creativeTemplates{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'vendor{marketplace{creativeTemplates{pageInfo{hasPreviousPage}}}}',
                },
                totalCount:
                    'vendor{marketplace{creativeTemplates{totalCount}}}',
            },
        },
        vendorTokens: {
            edges: {
                node: {
                    id: 'vendor{vendorTokens{edges{node{id}}}}',
                    creationDate:
                        'vendor{vendorTokens{edges{node{creationDate}}}}',
                    lastChangeDate:
                        'vendor{vendorTokens{edges{node{lastChangeDate}}}}',
                    token: 'vendor{vendorTokens{edges{node{token}}}}',
                },
                cursor: 'vendor{vendorTokens{edges{cursor}}}',
            },
            pageInfo: {
                endCursor: 'vendor{vendorTokens{pageInfo{endCursor}}}',
                startCursor: 'vendor{vendorTokens{pageInfo{startCursor}}}',
                hasNextPage: 'vendor{vendorTokens{pageInfo{hasNextPage}}}',
                hasPreviousPage:
                    'vendor{vendorTokens{pageInfo{hasPreviousPage}}}',
            },
            totalCount: 'vendor{vendorTokens{totalCount}}',
        },
        products: {
            edges: {
                node: {
                    id: 'vendor{products{edges{node{id}}}}',
                    creationDate: 'vendor{products{edges{node{creationDate}}}}',
                    lastChangeDate:
                        'vendor{products{edges{node{lastChangeDate}}}}',
                    name: 'vendor{products{edges{node{name}}}}',
                    sku: 'vendor{products{edges{node{sku}}}}',
                    remoteState: 'vendor{products{edges{node{remoteState}}}}',
                    metadata: 'vendor{products{edges{node{metadata}}}}',
                    systemStatus: 'vendor{products{edges{node{systemStatus}}}}',
                    errors: 'vendor{products{edges{node{errors}}}}',
                    warnings: 'vendor{products{edges{node{warnings}}}}',
                },
                cursor: 'vendor{products{edges{cursor}}}',
            },
            pageInfo: {
                endCursor: 'vendor{products{pageInfo{endCursor}}}',
                startCursor: 'vendor{products{pageInfo{startCursor}}}',
                hasNextPage: 'vendor{products{pageInfo{hasNextPage}}}',
                hasPreviousPage: 'vendor{products{pageInfo{hasPreviousPage}}}',
            },
            totalCount: 'vendor{products{totalCount}}',
        },
    },
};
export type ProductField =
    | 'id'
    | 'creationDate'
    | 'lastChangeDate'
    | 'name'
    | 'sku'
    | 'remoteState'
    | 'metadata'
    | 'systemStatus'
    | 'errors'
    | 'warnings'
    | 'marketingCampaigns{edges{node{id}}}'
    | 'marketingCampaigns{edges{node{creationDate}}}'
    | 'marketingCampaigns{edges{node{lastChangeDate}}}'
    | 'marketingCampaigns{edges{node{resultsSource}}}'
    | 'marketingCampaigns{edges{node{vendor{id}}}}'
    | 'marketingCampaigns{edges{node{vendor{creationDate}}}}'
    | 'marketingCampaigns{edges{node{vendor{lastChangeDate}}}}'
    | 'marketingCampaigns{edges{node{vendor{name}}}}'
    | 'marketingCampaigns{edges{node{vendor{systemStatus}}}}'
    | 'marketingCampaigns{edges{node{vendor{errors}}}}'
    | 'marketingCampaigns{edges{node{systemStatus}}}'
    | 'marketingCampaigns{edges{node{errors}}}'
    | 'marketingCampaigns{edges{node{name}}}'
    | 'marketingCampaigns{edges{node{status}}}'
    | 'marketingCampaigns{edges{node{creativeSpec}}}'
    | 'marketingCampaigns{edges{node{runTimeSpec}}}'
    | 'marketingCampaigns{edges{node{marketingAds{totalCount}}}}'
    | 'marketingCampaigns{edges{node{products{totalCount}}}}'
    | 'marketingCampaigns{edges{node{catalog{id}}}}'
    | 'marketingCampaigns{edges{node{catalog{creationDate}}}}'
    | 'marketingCampaigns{edges{node{catalog{lastChangeDate}}}}'
    | 'marketingCampaigns{edges{node{catalog{name}}}}'
    | 'marketingCampaigns{edges{node{catalog{catalogType}}}}'
    | 'marketingCampaigns{edges{node{catalog{remoteId}}}}'
    | 'marketingCampaigns{edges{node{catalog{systemStatus}}}}'
    | 'marketingCampaigns{edges{node{catalog{remoteState}}}}'
    | 'marketingCampaigns{edges{node{catalog{dataFeedId}}}}'
    | 'marketingCampaigns{edges{node{catalog{errors}}}}'
    | 'marketingCampaigns{edges{node{campaignTemplate{id}}}}'
    | 'marketingCampaigns{edges{node{campaignTemplate{creationDate}}}}'
    | 'marketingCampaigns{edges{node{campaignTemplate{lastChangeDate}}}}'
    | 'marketingCampaigns{edges{node{campaignTemplate{name}}}}'
    | 'marketingCampaigns{edges{node{campaignTemplate{description}}}}'
    | 'marketingCampaigns{edges{node{campaignTemplate{platform}}}}'
    | 'marketingCampaigns{edges{node{campaignTemplate{remoteId}}}}'
    | 'marketingCampaigns{edges{node{campaignTemplate{systemStatus}}}}'
    | 'marketingCampaigns{edges{node{campaignTemplate{errors}}}}'
    | 'marketingCampaigns{edges{node{mediaChannel{id}}}}'
    | 'marketingCampaigns{edges{node{mediaChannel{creationDate}}}}'
    | 'marketingCampaigns{edges{node{mediaChannel{lastChangeDate}}}}'
    | 'marketingCampaigns{edges{node{mediaChannel{name}}}}'
    | 'marketingCampaigns{edges{node{mediaChannel{systemStatus}}}}'
    | 'marketingCampaigns{edges{node{mediaChannel{errors}}}}'
    | 'marketingCampaigns{edges{node{mediaChannel{platform}}}}'
    | 'marketingCampaigns{edges{node{mediaChannel{remoteId}}}}'
    | 'marketingCampaigns{edges{node{mediaChannel{remoteState}}}}'
    | 'marketingCampaigns{edges{node{mediaChannel{currency}}}}'
    | 'marketingCampaigns{edges{node{mediaChannel{currencySymbol}}}}'
    | 'marketingCampaigns{edges{node{mediaChannel{currencyOffset}}}}'
    | 'marketingCampaigns{edges{node{mediaChannel{timezone}}}}'
    | 'marketingCampaigns{edges{node{mediaChannel{tokenStatus}}}}'
    | 'marketingCampaigns{edges{node{results{totalCount}}}}'
    | 'marketingCampaigns{edges{cursor}}'
    | 'marketingCampaigns{pageInfo{endCursor}}'
    | 'marketingCampaigns{pageInfo{startCursor}}'
    | 'marketingCampaigns{pageInfo{hasNextPage}}'
    | 'marketingCampaigns{pageInfo{hasPreviousPage}}'
    | 'marketingCampaigns{totalCount}'
    | 'catalog{id}'
    | 'catalog{creationDate}'
    | 'catalog{lastChangeDate}'
    | 'catalog{name}'
    | 'catalog{catalogType}'
    | 'catalog{remoteId}'
    | 'catalog{systemStatus}'
    | 'catalog{remoteState}'
    | 'catalog{dataFeedId}'
    | 'catalog{errors}'
    | 'catalog{mediaChannel{id}}'
    | 'catalog{mediaChannel{creationDate}}'
    | 'catalog{mediaChannel{lastChangeDate}}'
    | 'catalog{mediaChannel{name}}'
    | 'catalog{mediaChannel{systemStatus}}'
    | 'catalog{mediaChannel{errors}}'
    | 'catalog{mediaChannel{platform}}'
    | 'catalog{mediaChannel{remoteId}}'
    | 'catalog{mediaChannel{remoteState}}'
    | 'catalog{mediaChannel{currency}}'
    | 'catalog{mediaChannel{currencySymbol}}'
    | 'catalog{mediaChannel{currencyOffset}}'
    | 'catalog{mediaChannel{timezone}}'
    | 'catalog{mediaChannel{tokenStatus}}'
    | 'catalog{mediaChannel{catalogs{edges{cursor}}}}'
    | 'catalog{mediaChannel{catalogs{pageInfo{endCursor}}}}'
    | 'catalog{mediaChannel{catalogs{pageInfo{startCursor}}}}'
    | 'catalog{mediaChannel{catalogs{pageInfo{hasNextPage}}}}'
    | 'catalog{mediaChannel{catalogs{pageInfo{hasPreviousPage}}}}'
    | 'catalog{mediaChannel{catalogs{totalCount}}}'
    | 'catalog{mediaChannel{marketplace{id}}}'
    | 'catalog{mediaChannel{marketplace{creationDate}}}'
    | 'catalog{mediaChannel{marketplace{lastChangeDate}}}'
    | 'catalog{mediaChannel{marketplace{name}}}'
    | 'catalog{mediaChannel{marketplace{systemStatus}}}'
    | 'catalog{mediaChannel{marketplace{errors}}}'
    | 'catalog{mediaChannel{marketplace{organization{id}}}}'
    | 'catalog{mediaChannel{marketplace{organization{creationDate}}}}'
    | 'catalog{mediaChannel{marketplace{organization{lastChangeDate}}}}'
    | 'catalog{mediaChannel{marketplace{organization{name}}}}'
    | 'catalog{mediaChannel{marketplace{organization{systemStatus}}}}'
    | 'catalog{mediaChannel{marketplace{organization{errors}}}}'
    | 'catalog{mediaChannel{marketplace{organization{tier}}}}'
    | 'catalog{mediaChannel{marketplace{mediaChannels{totalCount}}}}'
    | 'catalog{mediaChannel{marketplace{campaignTemplates{totalCount}}}}'
    | 'catalog{mediaChannel{marketplace{vendors{totalCount}}}}'
    | 'catalog{mediaChannel{marketplace{vendorTokens{totalCount}}}}'
    | 'catalog{mediaChannel{marketplace{creativeTemplates{totalCount}}}}'
    | 'catalog{products{edges{node{id}}}}'
    | 'catalog{products{edges{node{creationDate}}}}'
    | 'catalog{products{edges{node{lastChangeDate}}}}'
    | 'catalog{products{edges{node{name}}}}'
    | 'catalog{products{edges{node{sku}}}}'
    | 'catalog{products{edges{node{remoteState}}}}'
    | 'catalog{products{edges{node{metadata}}}}'
    | 'catalog{products{edges{node{systemStatus}}}}'
    | 'catalog{products{edges{node{errors}}}}'
    | 'catalog{products{edges{node{warnings}}}}'
    | 'catalog{products{edges{cursor}}}'
    | 'catalog{products{pageInfo{endCursor}}}'
    | 'catalog{products{pageInfo{startCursor}}}'
    | 'catalog{products{pageInfo{hasNextPage}}}'
    | 'catalog{products{pageInfo{hasPreviousPage}}}'
    | 'catalog{products{totalCount}}'
    | 'vendor{id}'
    | 'vendor{creationDate}'
    | 'vendor{lastChangeDate}'
    | 'vendor{name}'
    | 'vendor{systemStatus}'
    | 'vendor{errors}'
    | 'vendor{marketplace{id}}'
    | 'vendor{marketplace{creationDate}}'
    | 'vendor{marketplace{lastChangeDate}}'
    | 'vendor{marketplace{name}}'
    | 'vendor{marketplace{systemStatus}}'
    | 'vendor{marketplace{errors}}'
    | 'vendor{marketplace{organization{id}}}'
    | 'vendor{marketplace{organization{creationDate}}}'
    | 'vendor{marketplace{organization{lastChangeDate}}}'
    | 'vendor{marketplace{organization{name}}}'
    | 'vendor{marketplace{organization{systemStatus}}}'
    | 'vendor{marketplace{organization{errors}}}'
    | 'vendor{marketplace{organization{tier}}}'
    | 'vendor{marketplace{organization{users{totalCount}}}}'
    | 'vendor{marketplace{organization{marketplaces{totalCount}}}}'
    | 'vendor{marketplace{mediaChannels{edges{cursor}}}}'
    | 'vendor{marketplace{mediaChannels{pageInfo{endCursor}}}}'
    | 'vendor{marketplace{mediaChannels{pageInfo{startCursor}}}}'
    | 'vendor{marketplace{mediaChannels{pageInfo{hasNextPage}}}}'
    | 'vendor{marketplace{mediaChannels{pageInfo{hasPreviousPage}}}}'
    | 'vendor{marketplace{mediaChannels{totalCount}}}'
    | 'vendor{marketplace{campaignTemplates{edges{cursor}}}}'
    | 'vendor{marketplace{campaignTemplates{pageInfo{endCursor}}}}'
    | 'vendor{marketplace{campaignTemplates{pageInfo{startCursor}}}}'
    | 'vendor{marketplace{campaignTemplates{pageInfo{hasNextPage}}}}'
    | 'vendor{marketplace{campaignTemplates{pageInfo{hasPreviousPage}}}}'
    | 'vendor{marketplace{campaignTemplates{totalCount}}}'
    | 'vendor{marketplace{vendors{edges{cursor}}}}'
    | 'vendor{marketplace{vendors{pageInfo{endCursor}}}}'
    | 'vendor{marketplace{vendors{pageInfo{startCursor}}}}'
    | 'vendor{marketplace{vendors{pageInfo{hasNextPage}}}}'
    | 'vendor{marketplace{vendors{pageInfo{hasPreviousPage}}}}'
    | 'vendor{marketplace{vendors{totalCount}}}'
    | 'vendor{marketplace{vendorTokens{edges{cursor}}}}'
    | 'vendor{marketplace{vendorTokens{pageInfo{endCursor}}}}'
    | 'vendor{marketplace{vendorTokens{pageInfo{startCursor}}}}'
    | 'vendor{marketplace{vendorTokens{pageInfo{hasNextPage}}}}'
    | 'vendor{marketplace{vendorTokens{pageInfo{hasPreviousPage}}}}'
    | 'vendor{marketplace{vendorTokens{totalCount}}}'
    | 'vendor{marketplace{creativeTemplates{edges{cursor}}}}'
    | 'vendor{marketplace{creativeTemplates{pageInfo{endCursor}}}}'
    | 'vendor{marketplace{creativeTemplates{pageInfo{startCursor}}}}'
    | 'vendor{marketplace{creativeTemplates{pageInfo{hasNextPage}}}}'
    | 'vendor{marketplace{creativeTemplates{pageInfo{hasPreviousPage}}}}'
    | 'vendor{marketplace{creativeTemplates{totalCount}}}'
    | 'vendor{vendorTokens{edges{node{id}}}}'
    | 'vendor{vendorTokens{edges{node{creationDate}}}}'
    | 'vendor{vendorTokens{edges{node{lastChangeDate}}}}'
    | 'vendor{vendorTokens{edges{node{token}}}}'
    | 'vendor{vendorTokens{edges{cursor}}}'
    | 'vendor{vendorTokens{pageInfo{endCursor}}}'
    | 'vendor{vendorTokens{pageInfo{startCursor}}}'
    | 'vendor{vendorTokens{pageInfo{hasNextPage}}}'
    | 'vendor{vendorTokens{pageInfo{hasPreviousPage}}}'
    | 'vendor{vendorTokens{totalCount}}'
    | 'vendor{products{edges{node{id}}}}'
    | 'vendor{products{edges{node{creationDate}}}}'
    | 'vendor{products{edges{node{lastChangeDate}}}}'
    | 'vendor{products{edges{node{name}}}}'
    | 'vendor{products{edges{node{sku}}}}'
    | 'vendor{products{edges{node{remoteState}}}}'
    | 'vendor{products{edges{node{metadata}}}}'
    | 'vendor{products{edges{node{systemStatus}}}}'
    | 'vendor{products{edges{node{errors}}}}'
    | 'vendor{products{edges{node{warnings}}}}'
    | 'vendor{products{edges{cursor}}}'
    | 'vendor{products{pageInfo{endCursor}}}'
    | 'vendor{products{pageInfo{startCursor}}}'
    | 'vendor{products{pageInfo{hasNextPage}}}'
    | 'vendor{products{pageInfo{hasPreviousPage}}}'
    | 'vendor{products{totalCount}}';
export type MarketingCampaignFields = {
    id: 'id';
    creationDate: 'creationDate';
    lastChangeDate: 'lastChangeDate';
    resultsSource: 'resultsSource';
    vendor: {
        id: 'vendor{id}';
        creationDate: 'vendor{creationDate}';
        lastChangeDate: 'vendor{lastChangeDate}';
        name: 'vendor{name}';
        systemStatus: 'vendor{systemStatus}';
        errors: 'vendor{errors}';
        marketplace: {
            id: 'vendor{marketplace{id}}';
            creationDate: 'vendor{marketplace{creationDate}}';
            lastChangeDate: 'vendor{marketplace{lastChangeDate}}';
            name: 'vendor{marketplace{name}}';
            systemStatus: 'vendor{marketplace{systemStatus}}';
            errors: 'vendor{marketplace{errors}}';
            organization: {
                id: 'vendor{marketplace{organization{id}}}';
                creationDate: 'vendor{marketplace{organization{creationDate}}}';
                lastChangeDate: 'vendor{marketplace{organization{lastChangeDate}}}';
                name: 'vendor{marketplace{organization{name}}}';
                systemStatus: 'vendor{marketplace{organization{systemStatus}}}';
                errors: 'vendor{marketplace{organization{errors}}}';
                tier: 'vendor{marketplace{organization{tier}}}';
                users: {
                    totalCount: 'vendor{marketplace{organization{users{totalCount}}}}';
                };
                marketplaces: {
                    totalCount: 'vendor{marketplace{organization{marketplaces{totalCount}}}}';
                };
            };
            mediaChannels: {
                edges: {
                    cursor: 'vendor{marketplace{mediaChannels{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'vendor{marketplace{mediaChannels{pageInfo{endCursor}}}}';
                    startCursor: 'vendor{marketplace{mediaChannels{pageInfo{startCursor}}}}';
                    hasNextPage: 'vendor{marketplace{mediaChannels{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'vendor{marketplace{mediaChannels{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'vendor{marketplace{mediaChannels{totalCount}}}';
            };
            campaignTemplates: {
                edges: {
                    cursor: 'vendor{marketplace{campaignTemplates{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'vendor{marketplace{campaignTemplates{pageInfo{endCursor}}}}';
                    startCursor: 'vendor{marketplace{campaignTemplates{pageInfo{startCursor}}}}';
                    hasNextPage: 'vendor{marketplace{campaignTemplates{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'vendor{marketplace{campaignTemplates{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'vendor{marketplace{campaignTemplates{totalCount}}}';
            };
            vendors: {
                edges: {
                    cursor: 'vendor{marketplace{vendors{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'vendor{marketplace{vendors{pageInfo{endCursor}}}}';
                    startCursor: 'vendor{marketplace{vendors{pageInfo{startCursor}}}}';
                    hasNextPage: 'vendor{marketplace{vendors{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'vendor{marketplace{vendors{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'vendor{marketplace{vendors{totalCount}}}';
            };
            vendorTokens: {
                edges: {
                    cursor: 'vendor{marketplace{vendorTokens{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'vendor{marketplace{vendorTokens{pageInfo{endCursor}}}}';
                    startCursor: 'vendor{marketplace{vendorTokens{pageInfo{startCursor}}}}';
                    hasNextPage: 'vendor{marketplace{vendorTokens{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'vendor{marketplace{vendorTokens{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'vendor{marketplace{vendorTokens{totalCount}}}';
            };
            creativeTemplates: {
                edges: {
                    cursor: 'vendor{marketplace{creativeTemplates{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'vendor{marketplace{creativeTemplates{pageInfo{endCursor}}}}';
                    startCursor: 'vendor{marketplace{creativeTemplates{pageInfo{startCursor}}}}';
                    hasNextPage: 'vendor{marketplace{creativeTemplates{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'vendor{marketplace{creativeTemplates{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'vendor{marketplace{creativeTemplates{totalCount}}}';
            };
        };
        vendorTokens: {
            edges: {
                node: {
                    id: 'vendor{vendorTokens{edges{node{id}}}}';
                    creationDate: 'vendor{vendorTokens{edges{node{creationDate}}}}';
                    lastChangeDate: 'vendor{vendorTokens{edges{node{lastChangeDate}}}}';
                    token: 'vendor{vendorTokens{edges{node{token}}}}';
                };
                cursor: 'vendor{vendorTokens{edges{cursor}}}';
            };
            pageInfo: {
                endCursor: 'vendor{vendorTokens{pageInfo{endCursor}}}';
                startCursor: 'vendor{vendorTokens{pageInfo{startCursor}}}';
                hasNextPage: 'vendor{vendorTokens{pageInfo{hasNextPage}}}';
                hasPreviousPage: 'vendor{vendorTokens{pageInfo{hasPreviousPage}}}';
            };
            totalCount: 'vendor{vendorTokens{totalCount}}';
        };
        products: {
            edges: {
                node: {
                    id: 'vendor{products{edges{node{id}}}}';
                    creationDate: 'vendor{products{edges{node{creationDate}}}}';
                    lastChangeDate: 'vendor{products{edges{node{lastChangeDate}}}}';
                    name: 'vendor{products{edges{node{name}}}}';
                    sku: 'vendor{products{edges{node{sku}}}}';
                    remoteState: 'vendor{products{edges{node{remoteState}}}}';
                    metadata: 'vendor{products{edges{node{metadata}}}}';
                    systemStatus: 'vendor{products{edges{node{systemStatus}}}}';
                    errors: 'vendor{products{edges{node{errors}}}}';
                    warnings: 'vendor{products{edges{node{warnings}}}}';
                };
                cursor: 'vendor{products{edges{cursor}}}';
            };
            pageInfo: {
                endCursor: 'vendor{products{pageInfo{endCursor}}}';
                startCursor: 'vendor{products{pageInfo{startCursor}}}';
                hasNextPage: 'vendor{products{pageInfo{hasNextPage}}}';
                hasPreviousPage: 'vendor{products{pageInfo{hasPreviousPage}}}';
            };
            totalCount: 'vendor{products{totalCount}}';
        };
    };
    systemStatus: 'systemStatus';
    errors: 'errors';
    name: 'name';
    status: 'status';
    creativeSpec: 'creativeSpec';
    runTimeSpec: 'runTimeSpec';
    marketingAds: {
        edges: {
            node: {
                id: 'marketingAds{edges{node{id}}}';
                creationDate: 'marketingAds{edges{node{creationDate}}}';
                lastChangeDate: 'marketingAds{edges{node{lastChangeDate}}}';
                resultsSource: 'marketingAds{edges{node{resultsSource}}}';
                vendor: {
                    id: 'marketingAds{edges{node{vendor{id}}}}';
                    creationDate: 'marketingAds{edges{node{vendor{creationDate}}}}';
                    lastChangeDate: 'marketingAds{edges{node{vendor{lastChangeDate}}}}';
                    name: 'marketingAds{edges{node{vendor{name}}}}';
                    systemStatus: 'marketingAds{edges{node{vendor{systemStatus}}}}';
                    errors: 'marketingAds{edges{node{vendor{errors}}}}';
                };
                systemStatus: 'marketingAds{edges{node{systemStatus}}}';
                errors: 'marketingAds{edges{node{errors}}}';
                remoteId: 'marketingAds{edges{node{remoteId}}}';
                preview: 'marketingAds{edges{node{preview}}}';
                results: {
                    totalCount: 'marketingAds{edges{node{results{totalCount}}}}';
                };
                marketingCampaign: {
                    id: 'marketingAds{edges{node{marketingCampaign{id}}}}';
                    creationDate: 'marketingAds{edges{node{marketingCampaign{creationDate}}}}';
                    lastChangeDate: 'marketingAds{edges{node{marketingCampaign{lastChangeDate}}}}';
                    resultsSource: 'marketingAds{edges{node{marketingCampaign{resultsSource}}}}';
                    systemStatus: 'marketingAds{edges{node{marketingCampaign{systemStatus}}}}';
                    errors: 'marketingAds{edges{node{marketingCampaign{errors}}}}';
                    name: 'marketingAds{edges{node{marketingCampaign{name}}}}';
                    status: 'marketingAds{edges{node{marketingCampaign{status}}}}';
                    creativeSpec: 'marketingAds{edges{node{marketingCampaign{creativeSpec}}}}';
                    runTimeSpec: 'marketingAds{edges{node{marketingCampaign{runTimeSpec}}}}';
                };
            };
            cursor: 'marketingAds{edges{cursor}}';
        };
        pageInfo: {
            endCursor: 'marketingAds{pageInfo{endCursor}}';
            startCursor: 'marketingAds{pageInfo{startCursor}}';
            hasNextPage: 'marketingAds{pageInfo{hasNextPage}}';
            hasPreviousPage: 'marketingAds{pageInfo{hasPreviousPage}}';
        };
        totalCount: 'marketingAds{totalCount}';
    };
    products: {
        edges: {
            node: {
                id: 'products{edges{node{id}}}';
                creationDate: 'products{edges{node{creationDate}}}';
                lastChangeDate: 'products{edges{node{lastChangeDate}}}';
                name: 'products{edges{node{name}}}';
                sku: 'products{edges{node{sku}}}';
                remoteState: 'products{edges{node{remoteState}}}';
                metadata: 'products{edges{node{metadata}}}';
                systemStatus: 'products{edges{node{systemStatus}}}';
                errors: 'products{edges{node{errors}}}';
                warnings: 'products{edges{node{warnings}}}';
                marketingCampaigns: {
                    totalCount: 'products{edges{node{marketingCampaigns{totalCount}}}}';
                };
                catalog: {
                    id: 'products{edges{node{catalog{id}}}}';
                    creationDate: 'products{edges{node{catalog{creationDate}}}}';
                    lastChangeDate: 'products{edges{node{catalog{lastChangeDate}}}}';
                    name: 'products{edges{node{catalog{name}}}}';
                    catalogType: 'products{edges{node{catalog{catalogType}}}}';
                    remoteId: 'products{edges{node{catalog{remoteId}}}}';
                    systemStatus: 'products{edges{node{catalog{systemStatus}}}}';
                    remoteState: 'products{edges{node{catalog{remoteState}}}}';
                    dataFeedId: 'products{edges{node{catalog{dataFeedId}}}}';
                    errors: 'products{edges{node{catalog{errors}}}}';
                };
                vendor: {
                    id: 'products{edges{node{vendor{id}}}}';
                    creationDate: 'products{edges{node{vendor{creationDate}}}}';
                    lastChangeDate: 'products{edges{node{vendor{lastChangeDate}}}}';
                    name: 'products{edges{node{vendor{name}}}}';
                    systemStatus: 'products{edges{node{vendor{systemStatus}}}}';
                    errors: 'products{edges{node{vendor{errors}}}}';
                };
            };
            cursor: 'products{edges{cursor}}';
        };
        pageInfo: {
            endCursor: 'products{pageInfo{endCursor}}';
            startCursor: 'products{pageInfo{startCursor}}';
            hasNextPage: 'products{pageInfo{hasNextPage}}';
            hasPreviousPage: 'products{pageInfo{hasPreviousPage}}';
        };
        totalCount: 'products{totalCount}';
    };
    catalog: {
        id: 'catalog{id}';
        creationDate: 'catalog{creationDate}';
        lastChangeDate: 'catalog{lastChangeDate}';
        name: 'catalog{name}';
        catalogType: 'catalog{catalogType}';
        remoteId: 'catalog{remoteId}';
        systemStatus: 'catalog{systemStatus}';
        remoteState: 'catalog{remoteState}';
        dataFeedId: 'catalog{dataFeedId}';
        errors: 'catalog{errors}';
        mediaChannel: {
            id: 'catalog{mediaChannel{id}}';
            creationDate: 'catalog{mediaChannel{creationDate}}';
            lastChangeDate: 'catalog{mediaChannel{lastChangeDate}}';
            name: 'catalog{mediaChannel{name}}';
            systemStatus: 'catalog{mediaChannel{systemStatus}}';
            errors: 'catalog{mediaChannel{errors}}';
            platform: 'catalog{mediaChannel{platform}}';
            remoteId: 'catalog{mediaChannel{remoteId}}';
            remoteState: 'catalog{mediaChannel{remoteState}}';
            currency: 'catalog{mediaChannel{currency}}';
            currencySymbol: 'catalog{mediaChannel{currencySymbol}}';
            currencyOffset: 'catalog{mediaChannel{currencyOffset}}';
            timezone: 'catalog{mediaChannel{timezone}}';
            tokenStatus: 'catalog{mediaChannel{tokenStatus}}';
            catalogs: {
                edges: {
                    cursor: 'catalog{mediaChannel{catalogs{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'catalog{mediaChannel{catalogs{pageInfo{endCursor}}}}';
                    startCursor: 'catalog{mediaChannel{catalogs{pageInfo{startCursor}}}}';
                    hasNextPage: 'catalog{mediaChannel{catalogs{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'catalog{mediaChannel{catalogs{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'catalog{mediaChannel{catalogs{totalCount}}}';
            };
            marketplace: {
                id: 'catalog{mediaChannel{marketplace{id}}}';
                creationDate: 'catalog{mediaChannel{marketplace{creationDate}}}';
                lastChangeDate: 'catalog{mediaChannel{marketplace{lastChangeDate}}}';
                name: 'catalog{mediaChannel{marketplace{name}}}';
                systemStatus: 'catalog{mediaChannel{marketplace{systemStatus}}}';
                errors: 'catalog{mediaChannel{marketplace{errors}}}';
                organization: {
                    id: 'catalog{mediaChannel{marketplace{organization{id}}}}';
                    creationDate: 'catalog{mediaChannel{marketplace{organization{creationDate}}}}';
                    lastChangeDate: 'catalog{mediaChannel{marketplace{organization{lastChangeDate}}}}';
                    name: 'catalog{mediaChannel{marketplace{organization{name}}}}';
                    systemStatus: 'catalog{mediaChannel{marketplace{organization{systemStatus}}}}';
                    errors: 'catalog{mediaChannel{marketplace{organization{errors}}}}';
                    tier: 'catalog{mediaChannel{marketplace{organization{tier}}}}';
                };
                mediaChannels: {
                    totalCount: 'catalog{mediaChannel{marketplace{mediaChannels{totalCount}}}}';
                };
                campaignTemplates: {
                    totalCount: 'catalog{mediaChannel{marketplace{campaignTemplates{totalCount}}}}';
                };
                vendors: {
                    totalCount: 'catalog{mediaChannel{marketplace{vendors{totalCount}}}}';
                };
                vendorTokens: {
                    totalCount: 'catalog{mediaChannel{marketplace{vendorTokens{totalCount}}}}';
                };
                creativeTemplates: {
                    totalCount: 'catalog{mediaChannel{marketplace{creativeTemplates{totalCount}}}}';
                };
            };
        };
        products: {
            edges: {
                node: {
                    id: 'catalog{products{edges{node{id}}}}';
                    creationDate: 'catalog{products{edges{node{creationDate}}}}';
                    lastChangeDate: 'catalog{products{edges{node{lastChangeDate}}}}';
                    name: 'catalog{products{edges{node{name}}}}';
                    sku: 'catalog{products{edges{node{sku}}}}';
                    remoteState: 'catalog{products{edges{node{remoteState}}}}';
                    metadata: 'catalog{products{edges{node{metadata}}}}';
                    systemStatus: 'catalog{products{edges{node{systemStatus}}}}';
                    errors: 'catalog{products{edges{node{errors}}}}';
                    warnings: 'catalog{products{edges{node{warnings}}}}';
                };
                cursor: 'catalog{products{edges{cursor}}}';
            };
            pageInfo: {
                endCursor: 'catalog{products{pageInfo{endCursor}}}';
                startCursor: 'catalog{products{pageInfo{startCursor}}}';
                hasNextPage: 'catalog{products{pageInfo{hasNextPage}}}';
                hasPreviousPage: 'catalog{products{pageInfo{hasPreviousPage}}}';
            };
            totalCount: 'catalog{products{totalCount}}';
        };
    };
    campaignTemplate: {
        id: 'campaignTemplate{id}';
        creationDate: 'campaignTemplate{creationDate}';
        lastChangeDate: 'campaignTemplate{lastChangeDate}';
        name: 'campaignTemplate{name}';
        description: 'campaignTemplate{description}';
        platform: 'campaignTemplate{platform}';
        remoteId: 'campaignTemplate{remoteId}';
        systemStatus: 'campaignTemplate{systemStatus}';
        errors: 'campaignTemplate{errors}';
        marketplace: {
            id: 'campaignTemplate{marketplace{id}}';
            creationDate: 'campaignTemplate{marketplace{creationDate}}';
            lastChangeDate: 'campaignTemplate{marketplace{lastChangeDate}}';
            name: 'campaignTemplate{marketplace{name}}';
            systemStatus: 'campaignTemplate{marketplace{systemStatus}}';
            errors: 'campaignTemplate{marketplace{errors}}';
            organization: {
                id: 'campaignTemplate{marketplace{organization{id}}}';
                creationDate: 'campaignTemplate{marketplace{organization{creationDate}}}';
                lastChangeDate: 'campaignTemplate{marketplace{organization{lastChangeDate}}}';
                name: 'campaignTemplate{marketplace{organization{name}}}';
                systemStatus: 'campaignTemplate{marketplace{organization{systemStatus}}}';
                errors: 'campaignTemplate{marketplace{organization{errors}}}';
                tier: 'campaignTemplate{marketplace{organization{tier}}}';
                users: {
                    totalCount: 'campaignTemplate{marketplace{organization{users{totalCount}}}}';
                };
                marketplaces: {
                    totalCount: 'campaignTemplate{marketplace{organization{marketplaces{totalCount}}}}';
                };
            };
            mediaChannels: {
                edges: {
                    cursor: 'campaignTemplate{marketplace{mediaChannels{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'campaignTemplate{marketplace{mediaChannels{pageInfo{endCursor}}}}';
                    startCursor: 'campaignTemplate{marketplace{mediaChannels{pageInfo{startCursor}}}}';
                    hasNextPage: 'campaignTemplate{marketplace{mediaChannels{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'campaignTemplate{marketplace{mediaChannels{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'campaignTemplate{marketplace{mediaChannels{totalCount}}}';
            };
            campaignTemplates: {
                edges: {
                    cursor: 'campaignTemplate{marketplace{campaignTemplates{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'campaignTemplate{marketplace{campaignTemplates{pageInfo{endCursor}}}}';
                    startCursor: 'campaignTemplate{marketplace{campaignTemplates{pageInfo{startCursor}}}}';
                    hasNextPage: 'campaignTemplate{marketplace{campaignTemplates{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'campaignTemplate{marketplace{campaignTemplates{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'campaignTemplate{marketplace{campaignTemplates{totalCount}}}';
            };
            vendors: {
                edges: {
                    cursor: 'campaignTemplate{marketplace{vendors{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'campaignTemplate{marketplace{vendors{pageInfo{endCursor}}}}';
                    startCursor: 'campaignTemplate{marketplace{vendors{pageInfo{startCursor}}}}';
                    hasNextPage: 'campaignTemplate{marketplace{vendors{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'campaignTemplate{marketplace{vendors{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'campaignTemplate{marketplace{vendors{totalCount}}}';
            };
            vendorTokens: {
                edges: {
                    cursor: 'campaignTemplate{marketplace{vendorTokens{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'campaignTemplate{marketplace{vendorTokens{pageInfo{endCursor}}}}';
                    startCursor: 'campaignTemplate{marketplace{vendorTokens{pageInfo{startCursor}}}}';
                    hasNextPage: 'campaignTemplate{marketplace{vendorTokens{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'campaignTemplate{marketplace{vendorTokens{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'campaignTemplate{marketplace{vendorTokens{totalCount}}}';
            };
            creativeTemplates: {
                edges: {
                    cursor: 'campaignTemplate{marketplace{creativeTemplates{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'campaignTemplate{marketplace{creativeTemplates{pageInfo{endCursor}}}}';
                    startCursor: 'campaignTemplate{marketplace{creativeTemplates{pageInfo{startCursor}}}}';
                    hasNextPage: 'campaignTemplate{marketplace{creativeTemplates{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'campaignTemplate{marketplace{creativeTemplates{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'campaignTemplate{marketplace{creativeTemplates{totalCount}}}';
            };
        };
        marketingCampaigns: {
            edges: {
                node: {
                    id: 'campaignTemplate{marketingCampaigns{edges{node{id}}}}';
                    creationDate: 'campaignTemplate{marketingCampaigns{edges{node{creationDate}}}}';
                    lastChangeDate: 'campaignTemplate{marketingCampaigns{edges{node{lastChangeDate}}}}';
                    resultsSource: 'campaignTemplate{marketingCampaigns{edges{node{resultsSource}}}}';
                    systemStatus: 'campaignTemplate{marketingCampaigns{edges{node{systemStatus}}}}';
                    errors: 'campaignTemplate{marketingCampaigns{edges{node{errors}}}}';
                    name: 'campaignTemplate{marketingCampaigns{edges{node{name}}}}';
                    status: 'campaignTemplate{marketingCampaigns{edges{node{status}}}}';
                    creativeSpec: 'campaignTemplate{marketingCampaigns{edges{node{creativeSpec}}}}';
                    runTimeSpec: 'campaignTemplate{marketingCampaigns{edges{node{runTimeSpec}}}}';
                };
                cursor: 'campaignTemplate{marketingCampaigns{edges{cursor}}}';
            };
            pageInfo: {
                endCursor: 'campaignTemplate{marketingCampaigns{pageInfo{endCursor}}}';
                startCursor: 'campaignTemplate{marketingCampaigns{pageInfo{startCursor}}}';
                hasNextPage: 'campaignTemplate{marketingCampaigns{pageInfo{hasNextPage}}}';
                hasPreviousPage: 'campaignTemplate{marketingCampaigns{pageInfo{hasPreviousPage}}}';
            };
            totalCount: 'campaignTemplate{marketingCampaigns{totalCount}}';
        };
    };
    mediaChannel: {
        id: 'mediaChannel{id}';
        creationDate: 'mediaChannel{creationDate}';
        lastChangeDate: 'mediaChannel{lastChangeDate}';
        name: 'mediaChannel{name}';
        systemStatus: 'mediaChannel{systemStatus}';
        errors: 'mediaChannel{errors}';
        platform: 'mediaChannel{platform}';
        remoteId: 'mediaChannel{remoteId}';
        remoteState: 'mediaChannel{remoteState}';
        currency: 'mediaChannel{currency}';
        currencySymbol: 'mediaChannel{currencySymbol}';
        currencyOffset: 'mediaChannel{currencyOffset}';
        timezone: 'mediaChannel{timezone}';
        tokenStatus: 'mediaChannel{tokenStatus}';
        catalogs: {
            edges: {
                node: {
                    id: 'mediaChannel{catalogs{edges{node{id}}}}';
                    creationDate: 'mediaChannel{catalogs{edges{node{creationDate}}}}';
                    lastChangeDate: 'mediaChannel{catalogs{edges{node{lastChangeDate}}}}';
                    name: 'mediaChannel{catalogs{edges{node{name}}}}';
                    catalogType: 'mediaChannel{catalogs{edges{node{catalogType}}}}';
                    remoteId: 'mediaChannel{catalogs{edges{node{remoteId}}}}';
                    systemStatus: 'mediaChannel{catalogs{edges{node{systemStatus}}}}';
                    remoteState: 'mediaChannel{catalogs{edges{node{remoteState}}}}';
                    dataFeedId: 'mediaChannel{catalogs{edges{node{dataFeedId}}}}';
                    errors: 'mediaChannel{catalogs{edges{node{errors}}}}';
                };
                cursor: 'mediaChannel{catalogs{edges{cursor}}}';
            };
            pageInfo: {
                endCursor: 'mediaChannel{catalogs{pageInfo{endCursor}}}';
                startCursor: 'mediaChannel{catalogs{pageInfo{startCursor}}}';
                hasNextPage: 'mediaChannel{catalogs{pageInfo{hasNextPage}}}';
                hasPreviousPage: 'mediaChannel{catalogs{pageInfo{hasPreviousPage}}}';
            };
            totalCount: 'mediaChannel{catalogs{totalCount}}';
        };
        marketplace: {
            id: 'mediaChannel{marketplace{id}}';
            creationDate: 'mediaChannel{marketplace{creationDate}}';
            lastChangeDate: 'mediaChannel{marketplace{lastChangeDate}}';
            name: 'mediaChannel{marketplace{name}}';
            systemStatus: 'mediaChannel{marketplace{systemStatus}}';
            errors: 'mediaChannel{marketplace{errors}}';
            organization: {
                id: 'mediaChannel{marketplace{organization{id}}}';
                creationDate: 'mediaChannel{marketplace{organization{creationDate}}}';
                lastChangeDate: 'mediaChannel{marketplace{organization{lastChangeDate}}}';
                name: 'mediaChannel{marketplace{organization{name}}}';
                systemStatus: 'mediaChannel{marketplace{organization{systemStatus}}}';
                errors: 'mediaChannel{marketplace{organization{errors}}}';
                tier: 'mediaChannel{marketplace{organization{tier}}}';
                users: {
                    totalCount: 'mediaChannel{marketplace{organization{users{totalCount}}}}';
                };
                marketplaces: {
                    totalCount: 'mediaChannel{marketplace{organization{marketplaces{totalCount}}}}';
                };
            };
            mediaChannels: {
                edges: {
                    cursor: 'mediaChannel{marketplace{mediaChannels{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'mediaChannel{marketplace{mediaChannels{pageInfo{endCursor}}}}';
                    startCursor: 'mediaChannel{marketplace{mediaChannels{pageInfo{startCursor}}}}';
                    hasNextPage: 'mediaChannel{marketplace{mediaChannels{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'mediaChannel{marketplace{mediaChannels{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'mediaChannel{marketplace{mediaChannels{totalCount}}}';
            };
            campaignTemplates: {
                edges: {
                    cursor: 'mediaChannel{marketplace{campaignTemplates{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'mediaChannel{marketplace{campaignTemplates{pageInfo{endCursor}}}}';
                    startCursor: 'mediaChannel{marketplace{campaignTemplates{pageInfo{startCursor}}}}';
                    hasNextPage: 'mediaChannel{marketplace{campaignTemplates{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'mediaChannel{marketplace{campaignTemplates{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'mediaChannel{marketplace{campaignTemplates{totalCount}}}';
            };
            vendors: {
                edges: {
                    cursor: 'mediaChannel{marketplace{vendors{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'mediaChannel{marketplace{vendors{pageInfo{endCursor}}}}';
                    startCursor: 'mediaChannel{marketplace{vendors{pageInfo{startCursor}}}}';
                    hasNextPage: 'mediaChannel{marketplace{vendors{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'mediaChannel{marketplace{vendors{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'mediaChannel{marketplace{vendors{totalCount}}}';
            };
            vendorTokens: {
                edges: {
                    cursor: 'mediaChannel{marketplace{vendorTokens{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'mediaChannel{marketplace{vendorTokens{pageInfo{endCursor}}}}';
                    startCursor: 'mediaChannel{marketplace{vendorTokens{pageInfo{startCursor}}}}';
                    hasNextPage: 'mediaChannel{marketplace{vendorTokens{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'mediaChannel{marketplace{vendorTokens{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'mediaChannel{marketplace{vendorTokens{totalCount}}}';
            };
            creativeTemplates: {
                edges: {
                    cursor: 'mediaChannel{marketplace{creativeTemplates{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'mediaChannel{marketplace{creativeTemplates{pageInfo{endCursor}}}}';
                    startCursor: 'mediaChannel{marketplace{creativeTemplates{pageInfo{startCursor}}}}';
                    hasNextPage: 'mediaChannel{marketplace{creativeTemplates{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'mediaChannel{marketplace{creativeTemplates{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'mediaChannel{marketplace{creativeTemplates{totalCount}}}';
            };
        };
    };
    results: {
        edges: {
            node: {
                id: 'results{edges{node{id}}}';
                creationDate: 'results{edges{node{creationDate}}}';
                lastChangeDate: 'results{edges{node{lastChangeDate}}}';
                date: 'results{edges{node{date}}}';
                analytics: {
                    results: 'results{edges{node{analytics{results}}}}';
                    impressions: 'results{edges{node{analytics{impressions}}}}';
                    clicks: 'results{edges{node{analytics{clicks}}}}';
                    spend: 'results{edges{node{analytics{spend}}}}';
                    purchases: 'results{edges{node{analytics{purchases}}}}';
                    purchasesValue: 'results{edges{node{analytics{purchasesValue}}}}';
                };
                type: 'results{edges{node{type}}}';
                resource: {
                    id: 'results{edges{node{resource{id}}}}';
                    creationDate: 'results{edges{node{resource{creationDate}}}}';
                    lastChangeDate: 'results{edges{node{resource{lastChangeDate}}}}';
                    resultsSource: 'results{edges{node{resource{resultsSource}}}}';
                    systemStatus: 'results{edges{node{resource{systemStatus}}}}';
                    errors: 'results{edges{node{resource{errors}}}}';
                };
                vendor: {
                    id: 'results{edges{node{vendor{id}}}}';
                    creationDate: 'results{edges{node{vendor{creationDate}}}}';
                    lastChangeDate: 'results{edges{node{vendor{lastChangeDate}}}}';
                    name: 'results{edges{node{vendor{name}}}}';
                    systemStatus: 'results{edges{node{vendor{systemStatus}}}}';
                    errors: 'results{edges{node{vendor{errors}}}}';
                };
            };
            cursor: 'results{edges{cursor}}';
        };
        pageInfo: {
            endCursor: 'results{pageInfo{endCursor}}';
            startCursor: 'results{pageInfo{startCursor}}';
            hasNextPage: 'results{pageInfo{hasNextPage}}';
            hasPreviousPage: 'results{pageInfo{hasPreviousPage}}';
        };
        totalCount: 'results{totalCount}';
    };
};
export const MarketingCampaignFields: MarketingCampaignFields = {
    id: 'id',
    creationDate: 'creationDate',
    lastChangeDate: 'lastChangeDate',
    resultsSource: 'resultsSource',
    vendor: {
        id: 'vendor{id}',
        creationDate: 'vendor{creationDate}',
        lastChangeDate: 'vendor{lastChangeDate}',
        name: 'vendor{name}',
        systemStatus: 'vendor{systemStatus}',
        errors: 'vendor{errors}',
        marketplace: {
            id: 'vendor{marketplace{id}}',
            creationDate: 'vendor{marketplace{creationDate}}',
            lastChangeDate: 'vendor{marketplace{lastChangeDate}}',
            name: 'vendor{marketplace{name}}',
            systemStatus: 'vendor{marketplace{systemStatus}}',
            errors: 'vendor{marketplace{errors}}',
            organization: {
                id: 'vendor{marketplace{organization{id}}}',
                creationDate: 'vendor{marketplace{organization{creationDate}}}',
                lastChangeDate:
                    'vendor{marketplace{organization{lastChangeDate}}}',
                name: 'vendor{marketplace{organization{name}}}',
                systemStatus: 'vendor{marketplace{organization{systemStatus}}}',
                errors: 'vendor{marketplace{organization{errors}}}',
                tier: 'vendor{marketplace{organization{tier}}}',
                users: {
                    totalCount:
                        'vendor{marketplace{organization{users{totalCount}}}}',
                },
                marketplaces: {
                    totalCount:
                        'vendor{marketplace{organization{marketplaces{totalCount}}}}',
                },
            },
            mediaChannels: {
                edges: {
                    cursor: 'vendor{marketplace{mediaChannels{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'vendor{marketplace{mediaChannels{pageInfo{endCursor}}}}',
                    startCursor:
                        'vendor{marketplace{mediaChannels{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'vendor{marketplace{mediaChannels{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'vendor{marketplace{mediaChannels{pageInfo{hasPreviousPage}}}}',
                },
                totalCount: 'vendor{marketplace{mediaChannels{totalCount}}}',
            },
            campaignTemplates: {
                edges: {
                    cursor:
                        'vendor{marketplace{campaignTemplates{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'vendor{marketplace{campaignTemplates{pageInfo{endCursor}}}}',
                    startCursor:
                        'vendor{marketplace{campaignTemplates{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'vendor{marketplace{campaignTemplates{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'vendor{marketplace{campaignTemplates{pageInfo{hasPreviousPage}}}}',
                },
                totalCount:
                    'vendor{marketplace{campaignTemplates{totalCount}}}',
            },
            vendors: {
                edges: {
                    cursor: 'vendor{marketplace{vendors{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'vendor{marketplace{vendors{pageInfo{endCursor}}}}',
                    startCursor:
                        'vendor{marketplace{vendors{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'vendor{marketplace{vendors{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'vendor{marketplace{vendors{pageInfo{hasPreviousPage}}}}',
                },
                totalCount: 'vendor{marketplace{vendors{totalCount}}}',
            },
            vendorTokens: {
                edges: {
                    cursor: 'vendor{marketplace{vendorTokens{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'vendor{marketplace{vendorTokens{pageInfo{endCursor}}}}',
                    startCursor:
                        'vendor{marketplace{vendorTokens{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'vendor{marketplace{vendorTokens{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'vendor{marketplace{vendorTokens{pageInfo{hasPreviousPage}}}}',
                },
                totalCount: 'vendor{marketplace{vendorTokens{totalCount}}}',
            },
            creativeTemplates: {
                edges: {
                    cursor:
                        'vendor{marketplace{creativeTemplates{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'vendor{marketplace{creativeTemplates{pageInfo{endCursor}}}}',
                    startCursor:
                        'vendor{marketplace{creativeTemplates{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'vendor{marketplace{creativeTemplates{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'vendor{marketplace{creativeTemplates{pageInfo{hasPreviousPage}}}}',
                },
                totalCount:
                    'vendor{marketplace{creativeTemplates{totalCount}}}',
            },
        },
        vendorTokens: {
            edges: {
                node: {
                    id: 'vendor{vendorTokens{edges{node{id}}}}',
                    creationDate:
                        'vendor{vendorTokens{edges{node{creationDate}}}}',
                    lastChangeDate:
                        'vendor{vendorTokens{edges{node{lastChangeDate}}}}',
                    token: 'vendor{vendorTokens{edges{node{token}}}}',
                },
                cursor: 'vendor{vendorTokens{edges{cursor}}}',
            },
            pageInfo: {
                endCursor: 'vendor{vendorTokens{pageInfo{endCursor}}}',
                startCursor: 'vendor{vendorTokens{pageInfo{startCursor}}}',
                hasNextPage: 'vendor{vendorTokens{pageInfo{hasNextPage}}}',
                hasPreviousPage:
                    'vendor{vendorTokens{pageInfo{hasPreviousPage}}}',
            },
            totalCount: 'vendor{vendorTokens{totalCount}}',
        },
        products: {
            edges: {
                node: {
                    id: 'vendor{products{edges{node{id}}}}',
                    creationDate: 'vendor{products{edges{node{creationDate}}}}',
                    lastChangeDate:
                        'vendor{products{edges{node{lastChangeDate}}}}',
                    name: 'vendor{products{edges{node{name}}}}',
                    sku: 'vendor{products{edges{node{sku}}}}',
                    remoteState: 'vendor{products{edges{node{remoteState}}}}',
                    metadata: 'vendor{products{edges{node{metadata}}}}',
                    systemStatus: 'vendor{products{edges{node{systemStatus}}}}',
                    errors: 'vendor{products{edges{node{errors}}}}',
                    warnings: 'vendor{products{edges{node{warnings}}}}',
                },
                cursor: 'vendor{products{edges{cursor}}}',
            },
            pageInfo: {
                endCursor: 'vendor{products{pageInfo{endCursor}}}',
                startCursor: 'vendor{products{pageInfo{startCursor}}}',
                hasNextPage: 'vendor{products{pageInfo{hasNextPage}}}',
                hasPreviousPage: 'vendor{products{pageInfo{hasPreviousPage}}}',
            },
            totalCount: 'vendor{products{totalCount}}',
        },
    },
    systemStatus: 'systemStatus',
    errors: 'errors',
    name: 'name',
    status: 'status',
    creativeSpec: 'creativeSpec',
    runTimeSpec: 'runTimeSpec',
    marketingAds: {
        edges: {
            node: {
                id: 'marketingAds{edges{node{id}}}',
                creationDate: 'marketingAds{edges{node{creationDate}}}',
                lastChangeDate: 'marketingAds{edges{node{lastChangeDate}}}',
                resultsSource: 'marketingAds{edges{node{resultsSource}}}',
                vendor: {
                    id: 'marketingAds{edges{node{vendor{id}}}}',
                    creationDate:
                        'marketingAds{edges{node{vendor{creationDate}}}}',
                    lastChangeDate:
                        'marketingAds{edges{node{vendor{lastChangeDate}}}}',
                    name: 'marketingAds{edges{node{vendor{name}}}}',
                    systemStatus:
                        'marketingAds{edges{node{vendor{systemStatus}}}}',
                    errors: 'marketingAds{edges{node{vendor{errors}}}}',
                },
                systemStatus: 'marketingAds{edges{node{systemStatus}}}',
                errors: 'marketingAds{edges{node{errors}}}',
                remoteId: 'marketingAds{edges{node{remoteId}}}',
                preview: 'marketingAds{edges{node{preview}}}',
                results: {
                    totalCount:
                        'marketingAds{edges{node{results{totalCount}}}}',
                },
                marketingCampaign: {
                    id: 'marketingAds{edges{node{marketingCampaign{id}}}}',
                    creationDate:
                        'marketingAds{edges{node{marketingCampaign{creationDate}}}}',
                    lastChangeDate:
                        'marketingAds{edges{node{marketingCampaign{lastChangeDate}}}}',
                    resultsSource:
                        'marketingAds{edges{node{marketingCampaign{resultsSource}}}}',
                    systemStatus:
                        'marketingAds{edges{node{marketingCampaign{systemStatus}}}}',
                    errors:
                        'marketingAds{edges{node{marketingCampaign{errors}}}}',
                    name: 'marketingAds{edges{node{marketingCampaign{name}}}}',
                    status:
                        'marketingAds{edges{node{marketingCampaign{status}}}}',
                    creativeSpec:
                        'marketingAds{edges{node{marketingCampaign{creativeSpec}}}}',
                    runTimeSpec:
                        'marketingAds{edges{node{marketingCampaign{runTimeSpec}}}}',
                },
            },
            cursor: 'marketingAds{edges{cursor}}',
        },
        pageInfo: {
            endCursor: 'marketingAds{pageInfo{endCursor}}',
            startCursor: 'marketingAds{pageInfo{startCursor}}',
            hasNextPage: 'marketingAds{pageInfo{hasNextPage}}',
            hasPreviousPage: 'marketingAds{pageInfo{hasPreviousPage}}',
        },
        totalCount: 'marketingAds{totalCount}',
    },
    products: {
        edges: {
            node: {
                id: 'products{edges{node{id}}}',
                creationDate: 'products{edges{node{creationDate}}}',
                lastChangeDate: 'products{edges{node{lastChangeDate}}}',
                name: 'products{edges{node{name}}}',
                sku: 'products{edges{node{sku}}}',
                remoteState: 'products{edges{node{remoteState}}}',
                metadata: 'products{edges{node{metadata}}}',
                systemStatus: 'products{edges{node{systemStatus}}}',
                errors: 'products{edges{node{errors}}}',
                warnings: 'products{edges{node{warnings}}}',
                marketingCampaigns: {
                    totalCount:
                        'products{edges{node{marketingCampaigns{totalCount}}}}',
                },
                catalog: {
                    id: 'products{edges{node{catalog{id}}}}',
                    creationDate:
                        'products{edges{node{catalog{creationDate}}}}',
                    lastChangeDate:
                        'products{edges{node{catalog{lastChangeDate}}}}',
                    name: 'products{edges{node{catalog{name}}}}',
                    catalogType: 'products{edges{node{catalog{catalogType}}}}',
                    remoteId: 'products{edges{node{catalog{remoteId}}}}',
                    systemStatus:
                        'products{edges{node{catalog{systemStatus}}}}',
                    remoteState: 'products{edges{node{catalog{remoteState}}}}',
                    dataFeedId: 'products{edges{node{catalog{dataFeedId}}}}',
                    errors: 'products{edges{node{catalog{errors}}}}',
                },
                vendor: {
                    id: 'products{edges{node{vendor{id}}}}',
                    creationDate: 'products{edges{node{vendor{creationDate}}}}',
                    lastChangeDate:
                        'products{edges{node{vendor{lastChangeDate}}}}',
                    name: 'products{edges{node{vendor{name}}}}',
                    systemStatus: 'products{edges{node{vendor{systemStatus}}}}',
                    errors: 'products{edges{node{vendor{errors}}}}',
                },
            },
            cursor: 'products{edges{cursor}}',
        },
        pageInfo: {
            endCursor: 'products{pageInfo{endCursor}}',
            startCursor: 'products{pageInfo{startCursor}}',
            hasNextPage: 'products{pageInfo{hasNextPage}}',
            hasPreviousPage: 'products{pageInfo{hasPreviousPage}}',
        },
        totalCount: 'products{totalCount}',
    },
    catalog: {
        id: 'catalog{id}',
        creationDate: 'catalog{creationDate}',
        lastChangeDate: 'catalog{lastChangeDate}',
        name: 'catalog{name}',
        catalogType: 'catalog{catalogType}',
        remoteId: 'catalog{remoteId}',
        systemStatus: 'catalog{systemStatus}',
        remoteState: 'catalog{remoteState}',
        dataFeedId: 'catalog{dataFeedId}',
        errors: 'catalog{errors}',
        mediaChannel: {
            id: 'catalog{mediaChannel{id}}',
            creationDate: 'catalog{mediaChannel{creationDate}}',
            lastChangeDate: 'catalog{mediaChannel{lastChangeDate}}',
            name: 'catalog{mediaChannel{name}}',
            systemStatus: 'catalog{mediaChannel{systemStatus}}',
            errors: 'catalog{mediaChannel{errors}}',
            platform: 'catalog{mediaChannel{platform}}',
            remoteId: 'catalog{mediaChannel{remoteId}}',
            remoteState: 'catalog{mediaChannel{remoteState}}',
            currency: 'catalog{mediaChannel{currency}}',
            currencySymbol: 'catalog{mediaChannel{currencySymbol}}',
            currencyOffset: 'catalog{mediaChannel{currencyOffset}}',
            timezone: 'catalog{mediaChannel{timezone}}',
            tokenStatus: 'catalog{mediaChannel{tokenStatus}}',
            catalogs: {
                edges: {
                    cursor: 'catalog{mediaChannel{catalogs{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'catalog{mediaChannel{catalogs{pageInfo{endCursor}}}}',
                    startCursor:
                        'catalog{mediaChannel{catalogs{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'catalog{mediaChannel{catalogs{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'catalog{mediaChannel{catalogs{pageInfo{hasPreviousPage}}}}',
                },
                totalCount: 'catalog{mediaChannel{catalogs{totalCount}}}',
            },
            marketplace: {
                id: 'catalog{mediaChannel{marketplace{id}}}',
                creationDate:
                    'catalog{mediaChannel{marketplace{creationDate}}}',
                lastChangeDate:
                    'catalog{mediaChannel{marketplace{lastChangeDate}}}',
                name: 'catalog{mediaChannel{marketplace{name}}}',
                systemStatus:
                    'catalog{mediaChannel{marketplace{systemStatus}}}',
                errors: 'catalog{mediaChannel{marketplace{errors}}}',
                organization: {
                    id: 'catalog{mediaChannel{marketplace{organization{id}}}}',
                    creationDate:
                        'catalog{mediaChannel{marketplace{organization{creationDate}}}}',
                    lastChangeDate:
                        'catalog{mediaChannel{marketplace{organization{lastChangeDate}}}}',
                    name:
                        'catalog{mediaChannel{marketplace{organization{name}}}}',
                    systemStatus:
                        'catalog{mediaChannel{marketplace{organization{systemStatus}}}}',
                    errors:
                        'catalog{mediaChannel{marketplace{organization{errors}}}}',
                    tier:
                        'catalog{mediaChannel{marketplace{organization{tier}}}}',
                },
                mediaChannels: {
                    totalCount:
                        'catalog{mediaChannel{marketplace{mediaChannels{totalCount}}}}',
                },
                campaignTemplates: {
                    totalCount:
                        'catalog{mediaChannel{marketplace{campaignTemplates{totalCount}}}}',
                },
                vendors: {
                    totalCount:
                        'catalog{mediaChannel{marketplace{vendors{totalCount}}}}',
                },
                vendorTokens: {
                    totalCount:
                        'catalog{mediaChannel{marketplace{vendorTokens{totalCount}}}}',
                },
                creativeTemplates: {
                    totalCount:
                        'catalog{mediaChannel{marketplace{creativeTemplates{totalCount}}}}',
                },
            },
        },
        products: {
            edges: {
                node: {
                    id: 'catalog{products{edges{node{id}}}}',
                    creationDate:
                        'catalog{products{edges{node{creationDate}}}}',
                    lastChangeDate:
                        'catalog{products{edges{node{lastChangeDate}}}}',
                    name: 'catalog{products{edges{node{name}}}}',
                    sku: 'catalog{products{edges{node{sku}}}}',
                    remoteState: 'catalog{products{edges{node{remoteState}}}}',
                    metadata: 'catalog{products{edges{node{metadata}}}}',
                    systemStatus:
                        'catalog{products{edges{node{systemStatus}}}}',
                    errors: 'catalog{products{edges{node{errors}}}}',
                    warnings: 'catalog{products{edges{node{warnings}}}}',
                },
                cursor: 'catalog{products{edges{cursor}}}',
            },
            pageInfo: {
                endCursor: 'catalog{products{pageInfo{endCursor}}}',
                startCursor: 'catalog{products{pageInfo{startCursor}}}',
                hasNextPage: 'catalog{products{pageInfo{hasNextPage}}}',
                hasPreviousPage: 'catalog{products{pageInfo{hasPreviousPage}}}',
            },
            totalCount: 'catalog{products{totalCount}}',
        },
    },
    campaignTemplate: {
        id: 'campaignTemplate{id}',
        creationDate: 'campaignTemplate{creationDate}',
        lastChangeDate: 'campaignTemplate{lastChangeDate}',
        name: 'campaignTemplate{name}',
        description: 'campaignTemplate{description}',
        platform: 'campaignTemplate{platform}',
        remoteId: 'campaignTemplate{remoteId}',
        systemStatus: 'campaignTemplate{systemStatus}',
        errors: 'campaignTemplate{errors}',
        marketplace: {
            id: 'campaignTemplate{marketplace{id}}',
            creationDate: 'campaignTemplate{marketplace{creationDate}}',
            lastChangeDate: 'campaignTemplate{marketplace{lastChangeDate}}',
            name: 'campaignTemplate{marketplace{name}}',
            systemStatus: 'campaignTemplate{marketplace{systemStatus}}',
            errors: 'campaignTemplate{marketplace{errors}}',
            organization: {
                id: 'campaignTemplate{marketplace{organization{id}}}',
                creationDate:
                    'campaignTemplate{marketplace{organization{creationDate}}}',
                lastChangeDate:
                    'campaignTemplate{marketplace{organization{lastChangeDate}}}',
                name: 'campaignTemplate{marketplace{organization{name}}}',
                systemStatus:
                    'campaignTemplate{marketplace{organization{systemStatus}}}',
                errors: 'campaignTemplate{marketplace{organization{errors}}}',
                tier: 'campaignTemplate{marketplace{organization{tier}}}',
                users: {
                    totalCount:
                        'campaignTemplate{marketplace{organization{users{totalCount}}}}',
                },
                marketplaces: {
                    totalCount:
                        'campaignTemplate{marketplace{organization{marketplaces{totalCount}}}}',
                },
            },
            mediaChannels: {
                edges: {
                    cursor:
                        'campaignTemplate{marketplace{mediaChannels{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'campaignTemplate{marketplace{mediaChannels{pageInfo{endCursor}}}}',
                    startCursor:
                        'campaignTemplate{marketplace{mediaChannels{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'campaignTemplate{marketplace{mediaChannels{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'campaignTemplate{marketplace{mediaChannels{pageInfo{hasPreviousPage}}}}',
                },
                totalCount:
                    'campaignTemplate{marketplace{mediaChannels{totalCount}}}',
            },
            campaignTemplates: {
                edges: {
                    cursor:
                        'campaignTemplate{marketplace{campaignTemplates{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'campaignTemplate{marketplace{campaignTemplates{pageInfo{endCursor}}}}',
                    startCursor:
                        'campaignTemplate{marketplace{campaignTemplates{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'campaignTemplate{marketplace{campaignTemplates{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'campaignTemplate{marketplace{campaignTemplates{pageInfo{hasPreviousPage}}}}',
                },
                totalCount:
                    'campaignTemplate{marketplace{campaignTemplates{totalCount}}}',
            },
            vendors: {
                edges: {
                    cursor:
                        'campaignTemplate{marketplace{vendors{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'campaignTemplate{marketplace{vendors{pageInfo{endCursor}}}}',
                    startCursor:
                        'campaignTemplate{marketplace{vendors{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'campaignTemplate{marketplace{vendors{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'campaignTemplate{marketplace{vendors{pageInfo{hasPreviousPage}}}}',
                },
                totalCount:
                    'campaignTemplate{marketplace{vendors{totalCount}}}',
            },
            vendorTokens: {
                edges: {
                    cursor:
                        'campaignTemplate{marketplace{vendorTokens{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'campaignTemplate{marketplace{vendorTokens{pageInfo{endCursor}}}}',
                    startCursor:
                        'campaignTemplate{marketplace{vendorTokens{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'campaignTemplate{marketplace{vendorTokens{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'campaignTemplate{marketplace{vendorTokens{pageInfo{hasPreviousPage}}}}',
                },
                totalCount:
                    'campaignTemplate{marketplace{vendorTokens{totalCount}}}',
            },
            creativeTemplates: {
                edges: {
                    cursor:
                        'campaignTemplate{marketplace{creativeTemplates{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'campaignTemplate{marketplace{creativeTemplates{pageInfo{endCursor}}}}',
                    startCursor:
                        'campaignTemplate{marketplace{creativeTemplates{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'campaignTemplate{marketplace{creativeTemplates{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'campaignTemplate{marketplace{creativeTemplates{pageInfo{hasPreviousPage}}}}',
                },
                totalCount:
                    'campaignTemplate{marketplace{creativeTemplates{totalCount}}}',
            },
        },
        marketingCampaigns: {
            edges: {
                node: {
                    id: 'campaignTemplate{marketingCampaigns{edges{node{id}}}}',
                    creationDate:
                        'campaignTemplate{marketingCampaigns{edges{node{creationDate}}}}',
                    lastChangeDate:
                        'campaignTemplate{marketingCampaigns{edges{node{lastChangeDate}}}}',
                    resultsSource:
                        'campaignTemplate{marketingCampaigns{edges{node{resultsSource}}}}',
                    systemStatus:
                        'campaignTemplate{marketingCampaigns{edges{node{systemStatus}}}}',
                    errors:
                        'campaignTemplate{marketingCampaigns{edges{node{errors}}}}',
                    name:
                        'campaignTemplate{marketingCampaigns{edges{node{name}}}}',
                    status:
                        'campaignTemplate{marketingCampaigns{edges{node{status}}}}',
                    creativeSpec:
                        'campaignTemplate{marketingCampaigns{edges{node{creativeSpec}}}}',
                    runTimeSpec:
                        'campaignTemplate{marketingCampaigns{edges{node{runTimeSpec}}}}',
                },
                cursor: 'campaignTemplate{marketingCampaigns{edges{cursor}}}',
            },
            pageInfo: {
                endCursor:
                    'campaignTemplate{marketingCampaigns{pageInfo{endCursor}}}',
                startCursor:
                    'campaignTemplate{marketingCampaigns{pageInfo{startCursor}}}',
                hasNextPage:
                    'campaignTemplate{marketingCampaigns{pageInfo{hasNextPage}}}',
                hasPreviousPage:
                    'campaignTemplate{marketingCampaigns{pageInfo{hasPreviousPage}}}',
            },
            totalCount: 'campaignTemplate{marketingCampaigns{totalCount}}',
        },
    },
    mediaChannel: {
        id: 'mediaChannel{id}',
        creationDate: 'mediaChannel{creationDate}',
        lastChangeDate: 'mediaChannel{lastChangeDate}',
        name: 'mediaChannel{name}',
        systemStatus: 'mediaChannel{systemStatus}',
        errors: 'mediaChannel{errors}',
        platform: 'mediaChannel{platform}',
        remoteId: 'mediaChannel{remoteId}',
        remoteState: 'mediaChannel{remoteState}',
        currency: 'mediaChannel{currency}',
        currencySymbol: 'mediaChannel{currencySymbol}',
        currencyOffset: 'mediaChannel{currencyOffset}',
        timezone: 'mediaChannel{timezone}',
        tokenStatus: 'mediaChannel{tokenStatus}',
        catalogs: {
            edges: {
                node: {
                    id: 'mediaChannel{catalogs{edges{node{id}}}}',
                    creationDate:
                        'mediaChannel{catalogs{edges{node{creationDate}}}}',
                    lastChangeDate:
                        'mediaChannel{catalogs{edges{node{lastChangeDate}}}}',
                    name: 'mediaChannel{catalogs{edges{node{name}}}}',
                    catalogType:
                        'mediaChannel{catalogs{edges{node{catalogType}}}}',
                    remoteId: 'mediaChannel{catalogs{edges{node{remoteId}}}}',
                    systemStatus:
                        'mediaChannel{catalogs{edges{node{systemStatus}}}}',
                    remoteState:
                        'mediaChannel{catalogs{edges{node{remoteState}}}}',
                    dataFeedId:
                        'mediaChannel{catalogs{edges{node{dataFeedId}}}}',
                    errors: 'mediaChannel{catalogs{edges{node{errors}}}}',
                },
                cursor: 'mediaChannel{catalogs{edges{cursor}}}',
            },
            pageInfo: {
                endCursor: 'mediaChannel{catalogs{pageInfo{endCursor}}}',
                startCursor: 'mediaChannel{catalogs{pageInfo{startCursor}}}',
                hasNextPage: 'mediaChannel{catalogs{pageInfo{hasNextPage}}}',
                hasPreviousPage:
                    'mediaChannel{catalogs{pageInfo{hasPreviousPage}}}',
            },
            totalCount: 'mediaChannel{catalogs{totalCount}}',
        },
        marketplace: {
            id: 'mediaChannel{marketplace{id}}',
            creationDate: 'mediaChannel{marketplace{creationDate}}',
            lastChangeDate: 'mediaChannel{marketplace{lastChangeDate}}',
            name: 'mediaChannel{marketplace{name}}',
            systemStatus: 'mediaChannel{marketplace{systemStatus}}',
            errors: 'mediaChannel{marketplace{errors}}',
            organization: {
                id: 'mediaChannel{marketplace{organization{id}}}',
                creationDate:
                    'mediaChannel{marketplace{organization{creationDate}}}',
                lastChangeDate:
                    'mediaChannel{marketplace{organization{lastChangeDate}}}',
                name: 'mediaChannel{marketplace{organization{name}}}',
                systemStatus:
                    'mediaChannel{marketplace{organization{systemStatus}}}',
                errors: 'mediaChannel{marketplace{organization{errors}}}',
                tier: 'mediaChannel{marketplace{organization{tier}}}',
                users: {
                    totalCount:
                        'mediaChannel{marketplace{organization{users{totalCount}}}}',
                },
                marketplaces: {
                    totalCount:
                        'mediaChannel{marketplace{organization{marketplaces{totalCount}}}}',
                },
            },
            mediaChannels: {
                edges: {
                    cursor:
                        'mediaChannel{marketplace{mediaChannels{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'mediaChannel{marketplace{mediaChannels{pageInfo{endCursor}}}}',
                    startCursor:
                        'mediaChannel{marketplace{mediaChannels{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'mediaChannel{marketplace{mediaChannels{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'mediaChannel{marketplace{mediaChannels{pageInfo{hasPreviousPage}}}}',
                },
                totalCount:
                    'mediaChannel{marketplace{mediaChannels{totalCount}}}',
            },
            campaignTemplates: {
                edges: {
                    cursor:
                        'mediaChannel{marketplace{campaignTemplates{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'mediaChannel{marketplace{campaignTemplates{pageInfo{endCursor}}}}',
                    startCursor:
                        'mediaChannel{marketplace{campaignTemplates{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'mediaChannel{marketplace{campaignTemplates{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'mediaChannel{marketplace{campaignTemplates{pageInfo{hasPreviousPage}}}}',
                },
                totalCount:
                    'mediaChannel{marketplace{campaignTemplates{totalCount}}}',
            },
            vendors: {
                edges: {
                    cursor: 'mediaChannel{marketplace{vendors{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'mediaChannel{marketplace{vendors{pageInfo{endCursor}}}}',
                    startCursor:
                        'mediaChannel{marketplace{vendors{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'mediaChannel{marketplace{vendors{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'mediaChannel{marketplace{vendors{pageInfo{hasPreviousPage}}}}',
                },
                totalCount: 'mediaChannel{marketplace{vendors{totalCount}}}',
            },
            vendorTokens: {
                edges: {
                    cursor:
                        'mediaChannel{marketplace{vendorTokens{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'mediaChannel{marketplace{vendorTokens{pageInfo{endCursor}}}}',
                    startCursor:
                        'mediaChannel{marketplace{vendorTokens{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'mediaChannel{marketplace{vendorTokens{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'mediaChannel{marketplace{vendorTokens{pageInfo{hasPreviousPage}}}}',
                },
                totalCount:
                    'mediaChannel{marketplace{vendorTokens{totalCount}}}',
            },
            creativeTemplates: {
                edges: {
                    cursor:
                        'mediaChannel{marketplace{creativeTemplates{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'mediaChannel{marketplace{creativeTemplates{pageInfo{endCursor}}}}',
                    startCursor:
                        'mediaChannel{marketplace{creativeTemplates{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'mediaChannel{marketplace{creativeTemplates{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'mediaChannel{marketplace{creativeTemplates{pageInfo{hasPreviousPage}}}}',
                },
                totalCount:
                    'mediaChannel{marketplace{creativeTemplates{totalCount}}}',
            },
        },
    },
    results: {
        edges: {
            node: {
                id: 'results{edges{node{id}}}',
                creationDate: 'results{edges{node{creationDate}}}',
                lastChangeDate: 'results{edges{node{lastChangeDate}}}',
                date: 'results{edges{node{date}}}',
                analytics: {
                    results: 'results{edges{node{analytics{results}}}}',
                    impressions: 'results{edges{node{analytics{impressions}}}}',
                    clicks: 'results{edges{node{analytics{clicks}}}}',
                    spend: 'results{edges{node{analytics{spend}}}}',
                    purchases: 'results{edges{node{analytics{purchases}}}}',
                    purchasesValue:
                        'results{edges{node{analytics{purchasesValue}}}}',
                },
                type: 'results{edges{node{type}}}',
                resource: {
                    id: 'results{edges{node{resource{id}}}}',
                    creationDate:
                        'results{edges{node{resource{creationDate}}}}',
                    lastChangeDate:
                        'results{edges{node{resource{lastChangeDate}}}}',
                    resultsSource:
                        'results{edges{node{resource{resultsSource}}}}',
                    systemStatus:
                        'results{edges{node{resource{systemStatus}}}}',
                    errors: 'results{edges{node{resource{errors}}}}',
                },
                vendor: {
                    id: 'results{edges{node{vendor{id}}}}',
                    creationDate: 'results{edges{node{vendor{creationDate}}}}',
                    lastChangeDate:
                        'results{edges{node{vendor{lastChangeDate}}}}',
                    name: 'results{edges{node{vendor{name}}}}',
                    systemStatus: 'results{edges{node{vendor{systemStatus}}}}',
                    errors: 'results{edges{node{vendor{errors}}}}',
                },
            },
            cursor: 'results{edges{cursor}}',
        },
        pageInfo: {
            endCursor: 'results{pageInfo{endCursor}}',
            startCursor: 'results{pageInfo{startCursor}}',
            hasNextPage: 'results{pageInfo{hasNextPage}}',
            hasPreviousPage: 'results{pageInfo{hasPreviousPage}}',
        },
        totalCount: 'results{totalCount}',
    },
};
export type MarketingCampaignField =
    | 'id'
    | 'creationDate'
    | 'lastChangeDate'
    | 'resultsSource'
    | 'vendor{id}'
    | 'vendor{creationDate}'
    | 'vendor{lastChangeDate}'
    | 'vendor{name}'
    | 'vendor{systemStatus}'
    | 'vendor{errors}'
    | 'vendor{marketplace{id}}'
    | 'vendor{marketplace{creationDate}}'
    | 'vendor{marketplace{lastChangeDate}}'
    | 'vendor{marketplace{name}}'
    | 'vendor{marketplace{systemStatus}}'
    | 'vendor{marketplace{errors}}'
    | 'vendor{marketplace{organization{id}}}'
    | 'vendor{marketplace{organization{creationDate}}}'
    | 'vendor{marketplace{organization{lastChangeDate}}}'
    | 'vendor{marketplace{organization{name}}}'
    | 'vendor{marketplace{organization{systemStatus}}}'
    | 'vendor{marketplace{organization{errors}}}'
    | 'vendor{marketplace{organization{tier}}}'
    | 'vendor{marketplace{organization{users{totalCount}}}}'
    | 'vendor{marketplace{organization{marketplaces{totalCount}}}}'
    | 'vendor{marketplace{mediaChannels{edges{cursor}}}}'
    | 'vendor{marketplace{mediaChannels{pageInfo{endCursor}}}}'
    | 'vendor{marketplace{mediaChannels{pageInfo{startCursor}}}}'
    | 'vendor{marketplace{mediaChannels{pageInfo{hasNextPage}}}}'
    | 'vendor{marketplace{mediaChannels{pageInfo{hasPreviousPage}}}}'
    | 'vendor{marketplace{mediaChannels{totalCount}}}'
    | 'vendor{marketplace{campaignTemplates{edges{cursor}}}}'
    | 'vendor{marketplace{campaignTemplates{pageInfo{endCursor}}}}'
    | 'vendor{marketplace{campaignTemplates{pageInfo{startCursor}}}}'
    | 'vendor{marketplace{campaignTemplates{pageInfo{hasNextPage}}}}'
    | 'vendor{marketplace{campaignTemplates{pageInfo{hasPreviousPage}}}}'
    | 'vendor{marketplace{campaignTemplates{totalCount}}}'
    | 'vendor{marketplace{vendors{edges{cursor}}}}'
    | 'vendor{marketplace{vendors{pageInfo{endCursor}}}}'
    | 'vendor{marketplace{vendors{pageInfo{startCursor}}}}'
    | 'vendor{marketplace{vendors{pageInfo{hasNextPage}}}}'
    | 'vendor{marketplace{vendors{pageInfo{hasPreviousPage}}}}'
    | 'vendor{marketplace{vendors{totalCount}}}'
    | 'vendor{marketplace{vendorTokens{edges{cursor}}}}'
    | 'vendor{marketplace{vendorTokens{pageInfo{endCursor}}}}'
    | 'vendor{marketplace{vendorTokens{pageInfo{startCursor}}}}'
    | 'vendor{marketplace{vendorTokens{pageInfo{hasNextPage}}}}'
    | 'vendor{marketplace{vendorTokens{pageInfo{hasPreviousPage}}}}'
    | 'vendor{marketplace{vendorTokens{totalCount}}}'
    | 'vendor{marketplace{creativeTemplates{edges{cursor}}}}'
    | 'vendor{marketplace{creativeTemplates{pageInfo{endCursor}}}}'
    | 'vendor{marketplace{creativeTemplates{pageInfo{startCursor}}}}'
    | 'vendor{marketplace{creativeTemplates{pageInfo{hasNextPage}}}}'
    | 'vendor{marketplace{creativeTemplates{pageInfo{hasPreviousPage}}}}'
    | 'vendor{marketplace{creativeTemplates{totalCount}}}'
    | 'vendor{vendorTokens{edges{node{id}}}}'
    | 'vendor{vendorTokens{edges{node{creationDate}}}}'
    | 'vendor{vendorTokens{edges{node{lastChangeDate}}}}'
    | 'vendor{vendorTokens{edges{node{token}}}}'
    | 'vendor{vendorTokens{edges{cursor}}}'
    | 'vendor{vendorTokens{pageInfo{endCursor}}}'
    | 'vendor{vendorTokens{pageInfo{startCursor}}}'
    | 'vendor{vendorTokens{pageInfo{hasNextPage}}}'
    | 'vendor{vendorTokens{pageInfo{hasPreviousPage}}}'
    | 'vendor{vendorTokens{totalCount}}'
    | 'vendor{products{edges{node{id}}}}'
    | 'vendor{products{edges{node{creationDate}}}}'
    | 'vendor{products{edges{node{lastChangeDate}}}}'
    | 'vendor{products{edges{node{name}}}}'
    | 'vendor{products{edges{node{sku}}}}'
    | 'vendor{products{edges{node{remoteState}}}}'
    | 'vendor{products{edges{node{metadata}}}}'
    | 'vendor{products{edges{node{systemStatus}}}}'
    | 'vendor{products{edges{node{errors}}}}'
    | 'vendor{products{edges{node{warnings}}}}'
    | 'vendor{products{edges{cursor}}}'
    | 'vendor{products{pageInfo{endCursor}}}'
    | 'vendor{products{pageInfo{startCursor}}}'
    | 'vendor{products{pageInfo{hasNextPage}}}'
    | 'vendor{products{pageInfo{hasPreviousPage}}}'
    | 'vendor{products{totalCount}}'
    | 'systemStatus'
    | 'errors'
    | 'name'
    | 'status'
    | 'creativeSpec'
    | 'runTimeSpec'
    | 'marketingAds{edges{node{id}}}'
    | 'marketingAds{edges{node{creationDate}}}'
    | 'marketingAds{edges{node{lastChangeDate}}}'
    | 'marketingAds{edges{node{resultsSource}}}'
    | 'marketingAds{edges{node{vendor{id}}}}'
    | 'marketingAds{edges{node{vendor{creationDate}}}}'
    | 'marketingAds{edges{node{vendor{lastChangeDate}}}}'
    | 'marketingAds{edges{node{vendor{name}}}}'
    | 'marketingAds{edges{node{vendor{systemStatus}}}}'
    | 'marketingAds{edges{node{vendor{errors}}}}'
    | 'marketingAds{edges{node{systemStatus}}}'
    | 'marketingAds{edges{node{errors}}}'
    | 'marketingAds{edges{node{remoteId}}}'
    | 'marketingAds{edges{node{preview}}}'
    | 'marketingAds{edges{node{results{totalCount}}}}'
    | 'marketingAds{edges{node{marketingCampaign{id}}}}'
    | 'marketingAds{edges{node{marketingCampaign{creationDate}}}}'
    | 'marketingAds{edges{node{marketingCampaign{lastChangeDate}}}}'
    | 'marketingAds{edges{node{marketingCampaign{resultsSource}}}}'
    | 'marketingAds{edges{node{marketingCampaign{systemStatus}}}}'
    | 'marketingAds{edges{node{marketingCampaign{errors}}}}'
    | 'marketingAds{edges{node{marketingCampaign{name}}}}'
    | 'marketingAds{edges{node{marketingCampaign{status}}}}'
    | 'marketingAds{edges{node{marketingCampaign{creativeSpec}}}}'
    | 'marketingAds{edges{node{marketingCampaign{runTimeSpec}}}}'
    | 'marketingAds{edges{cursor}}'
    | 'marketingAds{pageInfo{endCursor}}'
    | 'marketingAds{pageInfo{startCursor}}'
    | 'marketingAds{pageInfo{hasNextPage}}'
    | 'marketingAds{pageInfo{hasPreviousPage}}'
    | 'marketingAds{totalCount}'
    | 'products{edges{node{id}}}'
    | 'products{edges{node{creationDate}}}'
    | 'products{edges{node{lastChangeDate}}}'
    | 'products{edges{node{name}}}'
    | 'products{edges{node{sku}}}'
    | 'products{edges{node{remoteState}}}'
    | 'products{edges{node{metadata}}}'
    | 'products{edges{node{systemStatus}}}'
    | 'products{edges{node{errors}}}'
    | 'products{edges{node{warnings}}}'
    | 'products{edges{node{marketingCampaigns{totalCount}}}}'
    | 'products{edges{node{catalog{id}}}}'
    | 'products{edges{node{catalog{creationDate}}}}'
    | 'products{edges{node{catalog{lastChangeDate}}}}'
    | 'products{edges{node{catalog{name}}}}'
    | 'products{edges{node{catalog{catalogType}}}}'
    | 'products{edges{node{catalog{remoteId}}}}'
    | 'products{edges{node{catalog{systemStatus}}}}'
    | 'products{edges{node{catalog{remoteState}}}}'
    | 'products{edges{node{catalog{dataFeedId}}}}'
    | 'products{edges{node{catalog{errors}}}}'
    | 'products{edges{node{vendor{id}}}}'
    | 'products{edges{node{vendor{creationDate}}}}'
    | 'products{edges{node{vendor{lastChangeDate}}}}'
    | 'products{edges{node{vendor{name}}}}'
    | 'products{edges{node{vendor{systemStatus}}}}'
    | 'products{edges{node{vendor{errors}}}}'
    | 'products{edges{cursor}}'
    | 'products{pageInfo{endCursor}}'
    | 'products{pageInfo{startCursor}}'
    | 'products{pageInfo{hasNextPage}}'
    | 'products{pageInfo{hasPreviousPage}}'
    | 'products{totalCount}'
    | 'catalog{id}'
    | 'catalog{creationDate}'
    | 'catalog{lastChangeDate}'
    | 'catalog{name}'
    | 'catalog{catalogType}'
    | 'catalog{remoteId}'
    | 'catalog{systemStatus}'
    | 'catalog{remoteState}'
    | 'catalog{dataFeedId}'
    | 'catalog{errors}'
    | 'catalog{mediaChannel{id}}'
    | 'catalog{mediaChannel{creationDate}}'
    | 'catalog{mediaChannel{lastChangeDate}}'
    | 'catalog{mediaChannel{name}}'
    | 'catalog{mediaChannel{systemStatus}}'
    | 'catalog{mediaChannel{errors}}'
    | 'catalog{mediaChannel{platform}}'
    | 'catalog{mediaChannel{remoteId}}'
    | 'catalog{mediaChannel{remoteState}}'
    | 'catalog{mediaChannel{currency}}'
    | 'catalog{mediaChannel{currencySymbol}}'
    | 'catalog{mediaChannel{currencyOffset}}'
    | 'catalog{mediaChannel{timezone}}'
    | 'catalog{mediaChannel{tokenStatus}}'
    | 'catalog{mediaChannel{catalogs{edges{cursor}}}}'
    | 'catalog{mediaChannel{catalogs{pageInfo{endCursor}}}}'
    | 'catalog{mediaChannel{catalogs{pageInfo{startCursor}}}}'
    | 'catalog{mediaChannel{catalogs{pageInfo{hasNextPage}}}}'
    | 'catalog{mediaChannel{catalogs{pageInfo{hasPreviousPage}}}}'
    | 'catalog{mediaChannel{catalogs{totalCount}}}'
    | 'catalog{mediaChannel{marketplace{id}}}'
    | 'catalog{mediaChannel{marketplace{creationDate}}}'
    | 'catalog{mediaChannel{marketplace{lastChangeDate}}}'
    | 'catalog{mediaChannel{marketplace{name}}}'
    | 'catalog{mediaChannel{marketplace{systemStatus}}}'
    | 'catalog{mediaChannel{marketplace{errors}}}'
    | 'catalog{mediaChannel{marketplace{organization{id}}}}'
    | 'catalog{mediaChannel{marketplace{organization{creationDate}}}}'
    | 'catalog{mediaChannel{marketplace{organization{lastChangeDate}}}}'
    | 'catalog{mediaChannel{marketplace{organization{name}}}}'
    | 'catalog{mediaChannel{marketplace{organization{systemStatus}}}}'
    | 'catalog{mediaChannel{marketplace{organization{errors}}}}'
    | 'catalog{mediaChannel{marketplace{organization{tier}}}}'
    | 'catalog{mediaChannel{marketplace{mediaChannels{totalCount}}}}'
    | 'catalog{mediaChannel{marketplace{campaignTemplates{totalCount}}}}'
    | 'catalog{mediaChannel{marketplace{vendors{totalCount}}}}'
    | 'catalog{mediaChannel{marketplace{vendorTokens{totalCount}}}}'
    | 'catalog{mediaChannel{marketplace{creativeTemplates{totalCount}}}}'
    | 'catalog{products{edges{node{id}}}}'
    | 'catalog{products{edges{node{creationDate}}}}'
    | 'catalog{products{edges{node{lastChangeDate}}}}'
    | 'catalog{products{edges{node{name}}}}'
    | 'catalog{products{edges{node{sku}}}}'
    | 'catalog{products{edges{node{remoteState}}}}'
    | 'catalog{products{edges{node{metadata}}}}'
    | 'catalog{products{edges{node{systemStatus}}}}'
    | 'catalog{products{edges{node{errors}}}}'
    | 'catalog{products{edges{node{warnings}}}}'
    | 'catalog{products{edges{cursor}}}'
    | 'catalog{products{pageInfo{endCursor}}}'
    | 'catalog{products{pageInfo{startCursor}}}'
    | 'catalog{products{pageInfo{hasNextPage}}}'
    | 'catalog{products{pageInfo{hasPreviousPage}}}'
    | 'catalog{products{totalCount}}'
    | 'campaignTemplate{id}'
    | 'campaignTemplate{creationDate}'
    | 'campaignTemplate{lastChangeDate}'
    | 'campaignTemplate{name}'
    | 'campaignTemplate{description}'
    | 'campaignTemplate{platform}'
    | 'campaignTemplate{remoteId}'
    | 'campaignTemplate{systemStatus}'
    | 'campaignTemplate{errors}'
    | 'campaignTemplate{marketplace{id}}'
    | 'campaignTemplate{marketplace{creationDate}}'
    | 'campaignTemplate{marketplace{lastChangeDate}}'
    | 'campaignTemplate{marketplace{name}}'
    | 'campaignTemplate{marketplace{systemStatus}}'
    | 'campaignTemplate{marketplace{errors}}'
    | 'campaignTemplate{marketplace{organization{id}}}'
    | 'campaignTemplate{marketplace{organization{creationDate}}}'
    | 'campaignTemplate{marketplace{organization{lastChangeDate}}}'
    | 'campaignTemplate{marketplace{organization{name}}}'
    | 'campaignTemplate{marketplace{organization{systemStatus}}}'
    | 'campaignTemplate{marketplace{organization{errors}}}'
    | 'campaignTemplate{marketplace{organization{tier}}}'
    | 'campaignTemplate{marketplace{organization{users{totalCount}}}}'
    | 'campaignTemplate{marketplace{organization{marketplaces{totalCount}}}}'
    | 'campaignTemplate{marketplace{mediaChannels{edges{cursor}}}}'
    | 'campaignTemplate{marketplace{mediaChannels{pageInfo{endCursor}}}}'
    | 'campaignTemplate{marketplace{mediaChannels{pageInfo{startCursor}}}}'
    | 'campaignTemplate{marketplace{mediaChannels{pageInfo{hasNextPage}}}}'
    | 'campaignTemplate{marketplace{mediaChannels{pageInfo{hasPreviousPage}}}}'
    | 'campaignTemplate{marketplace{mediaChannels{totalCount}}}'
    | 'campaignTemplate{marketplace{campaignTemplates{edges{cursor}}}}'
    | 'campaignTemplate{marketplace{campaignTemplates{pageInfo{endCursor}}}}'
    | 'campaignTemplate{marketplace{campaignTemplates{pageInfo{startCursor}}}}'
    | 'campaignTemplate{marketplace{campaignTemplates{pageInfo{hasNextPage}}}}'
    | 'campaignTemplate{marketplace{campaignTemplates{pageInfo{hasPreviousPage}}}}'
    | 'campaignTemplate{marketplace{campaignTemplates{totalCount}}}'
    | 'campaignTemplate{marketplace{vendors{edges{cursor}}}}'
    | 'campaignTemplate{marketplace{vendors{pageInfo{endCursor}}}}'
    | 'campaignTemplate{marketplace{vendors{pageInfo{startCursor}}}}'
    | 'campaignTemplate{marketplace{vendors{pageInfo{hasNextPage}}}}'
    | 'campaignTemplate{marketplace{vendors{pageInfo{hasPreviousPage}}}}'
    | 'campaignTemplate{marketplace{vendors{totalCount}}}'
    | 'campaignTemplate{marketplace{vendorTokens{edges{cursor}}}}'
    | 'campaignTemplate{marketplace{vendorTokens{pageInfo{endCursor}}}}'
    | 'campaignTemplate{marketplace{vendorTokens{pageInfo{startCursor}}}}'
    | 'campaignTemplate{marketplace{vendorTokens{pageInfo{hasNextPage}}}}'
    | 'campaignTemplate{marketplace{vendorTokens{pageInfo{hasPreviousPage}}}}'
    | 'campaignTemplate{marketplace{vendorTokens{totalCount}}}'
    | 'campaignTemplate{marketplace{creativeTemplates{edges{cursor}}}}'
    | 'campaignTemplate{marketplace{creativeTemplates{pageInfo{endCursor}}}}'
    | 'campaignTemplate{marketplace{creativeTemplates{pageInfo{startCursor}}}}'
    | 'campaignTemplate{marketplace{creativeTemplates{pageInfo{hasNextPage}}}}'
    | 'campaignTemplate{marketplace{creativeTemplates{pageInfo{hasPreviousPage}}}}'
    | 'campaignTemplate{marketplace{creativeTemplates{totalCount}}}'
    | 'campaignTemplate{marketingCampaigns{edges{node{id}}}}'
    | 'campaignTemplate{marketingCampaigns{edges{node{creationDate}}}}'
    | 'campaignTemplate{marketingCampaigns{edges{node{lastChangeDate}}}}'
    | 'campaignTemplate{marketingCampaigns{edges{node{resultsSource}}}}'
    | 'campaignTemplate{marketingCampaigns{edges{node{systemStatus}}}}'
    | 'campaignTemplate{marketingCampaigns{edges{node{errors}}}}'
    | 'campaignTemplate{marketingCampaigns{edges{node{name}}}}'
    | 'campaignTemplate{marketingCampaigns{edges{node{status}}}}'
    | 'campaignTemplate{marketingCampaigns{edges{node{creativeSpec}}}}'
    | 'campaignTemplate{marketingCampaigns{edges{node{runTimeSpec}}}}'
    | 'campaignTemplate{marketingCampaigns{edges{cursor}}}'
    | 'campaignTemplate{marketingCampaigns{pageInfo{endCursor}}}'
    | 'campaignTemplate{marketingCampaigns{pageInfo{startCursor}}}'
    | 'campaignTemplate{marketingCampaigns{pageInfo{hasNextPage}}}'
    | 'campaignTemplate{marketingCampaigns{pageInfo{hasPreviousPage}}}'
    | 'campaignTemplate{marketingCampaigns{totalCount}}'
    | 'mediaChannel{id}'
    | 'mediaChannel{creationDate}'
    | 'mediaChannel{lastChangeDate}'
    | 'mediaChannel{name}'
    | 'mediaChannel{systemStatus}'
    | 'mediaChannel{errors}'
    | 'mediaChannel{platform}'
    | 'mediaChannel{remoteId}'
    | 'mediaChannel{remoteState}'
    | 'mediaChannel{currency}'
    | 'mediaChannel{currencySymbol}'
    | 'mediaChannel{currencyOffset}'
    | 'mediaChannel{timezone}'
    | 'mediaChannel{tokenStatus}'
    | 'mediaChannel{catalogs{edges{node{id}}}}'
    | 'mediaChannel{catalogs{edges{node{creationDate}}}}'
    | 'mediaChannel{catalogs{edges{node{lastChangeDate}}}}'
    | 'mediaChannel{catalogs{edges{node{name}}}}'
    | 'mediaChannel{catalogs{edges{node{catalogType}}}}'
    | 'mediaChannel{catalogs{edges{node{remoteId}}}}'
    | 'mediaChannel{catalogs{edges{node{systemStatus}}}}'
    | 'mediaChannel{catalogs{edges{node{remoteState}}}}'
    | 'mediaChannel{catalogs{edges{node{dataFeedId}}}}'
    | 'mediaChannel{catalogs{edges{node{errors}}}}'
    | 'mediaChannel{catalogs{edges{cursor}}}'
    | 'mediaChannel{catalogs{pageInfo{endCursor}}}'
    | 'mediaChannel{catalogs{pageInfo{startCursor}}}'
    | 'mediaChannel{catalogs{pageInfo{hasNextPage}}}'
    | 'mediaChannel{catalogs{pageInfo{hasPreviousPage}}}'
    | 'mediaChannel{catalogs{totalCount}}'
    | 'mediaChannel{marketplace{id}}'
    | 'mediaChannel{marketplace{creationDate}}'
    | 'mediaChannel{marketplace{lastChangeDate}}'
    | 'mediaChannel{marketplace{name}}'
    | 'mediaChannel{marketplace{systemStatus}}'
    | 'mediaChannel{marketplace{errors}}'
    | 'mediaChannel{marketplace{organization{id}}}'
    | 'mediaChannel{marketplace{organization{creationDate}}}'
    | 'mediaChannel{marketplace{organization{lastChangeDate}}}'
    | 'mediaChannel{marketplace{organization{name}}}'
    | 'mediaChannel{marketplace{organization{systemStatus}}}'
    | 'mediaChannel{marketplace{organization{errors}}}'
    | 'mediaChannel{marketplace{organization{tier}}}'
    | 'mediaChannel{marketplace{organization{users{totalCount}}}}'
    | 'mediaChannel{marketplace{organization{marketplaces{totalCount}}}}'
    | 'mediaChannel{marketplace{mediaChannels{edges{cursor}}}}'
    | 'mediaChannel{marketplace{mediaChannels{pageInfo{endCursor}}}}'
    | 'mediaChannel{marketplace{mediaChannels{pageInfo{startCursor}}}}'
    | 'mediaChannel{marketplace{mediaChannels{pageInfo{hasNextPage}}}}'
    | 'mediaChannel{marketplace{mediaChannels{pageInfo{hasPreviousPage}}}}'
    | 'mediaChannel{marketplace{mediaChannels{totalCount}}}'
    | 'mediaChannel{marketplace{campaignTemplates{edges{cursor}}}}'
    | 'mediaChannel{marketplace{campaignTemplates{pageInfo{endCursor}}}}'
    | 'mediaChannel{marketplace{campaignTemplates{pageInfo{startCursor}}}}'
    | 'mediaChannel{marketplace{campaignTemplates{pageInfo{hasNextPage}}}}'
    | 'mediaChannel{marketplace{campaignTemplates{pageInfo{hasPreviousPage}}}}'
    | 'mediaChannel{marketplace{campaignTemplates{totalCount}}}'
    | 'mediaChannel{marketplace{vendors{edges{cursor}}}}'
    | 'mediaChannel{marketplace{vendors{pageInfo{endCursor}}}}'
    | 'mediaChannel{marketplace{vendors{pageInfo{startCursor}}}}'
    | 'mediaChannel{marketplace{vendors{pageInfo{hasNextPage}}}}'
    | 'mediaChannel{marketplace{vendors{pageInfo{hasPreviousPage}}}}'
    | 'mediaChannel{marketplace{vendors{totalCount}}}'
    | 'mediaChannel{marketplace{vendorTokens{edges{cursor}}}}'
    | 'mediaChannel{marketplace{vendorTokens{pageInfo{endCursor}}}}'
    | 'mediaChannel{marketplace{vendorTokens{pageInfo{startCursor}}}}'
    | 'mediaChannel{marketplace{vendorTokens{pageInfo{hasNextPage}}}}'
    | 'mediaChannel{marketplace{vendorTokens{pageInfo{hasPreviousPage}}}}'
    | 'mediaChannel{marketplace{vendorTokens{totalCount}}}'
    | 'mediaChannel{marketplace{creativeTemplates{edges{cursor}}}}'
    | 'mediaChannel{marketplace{creativeTemplates{pageInfo{endCursor}}}}'
    | 'mediaChannel{marketplace{creativeTemplates{pageInfo{startCursor}}}}'
    | 'mediaChannel{marketplace{creativeTemplates{pageInfo{hasNextPage}}}}'
    | 'mediaChannel{marketplace{creativeTemplates{pageInfo{hasPreviousPage}}}}'
    | 'mediaChannel{marketplace{creativeTemplates{totalCount}}}'
    | 'results{edges{node{id}}}'
    | 'results{edges{node{creationDate}}}'
    | 'results{edges{node{lastChangeDate}}}'
    | 'results{edges{node{date}}}'
    | 'results{edges{node{analytics{results}}}}'
    | 'results{edges{node{analytics{impressions}}}}'
    | 'results{edges{node{analytics{clicks}}}}'
    | 'results{edges{node{analytics{spend}}}}'
    | 'results{edges{node{analytics{purchases}}}}'
    | 'results{edges{node{analytics{purchasesValue}}}}'
    | 'results{edges{node{type}}}'
    | 'results{edges{node{resource{id}}}}'
    | 'results{edges{node{resource{creationDate}}}}'
    | 'results{edges{node{resource{lastChangeDate}}}}'
    | 'results{edges{node{resource{resultsSource}}}}'
    | 'results{edges{node{resource{systemStatus}}}}'
    | 'results{edges{node{resource{errors}}}}'
    | 'results{edges{node{vendor{id}}}}'
    | 'results{edges{node{vendor{creationDate}}}}'
    | 'results{edges{node{vendor{lastChangeDate}}}}'
    | 'results{edges{node{vendor{name}}}}'
    | 'results{edges{node{vendor{systemStatus}}}}'
    | 'results{edges{node{vendor{errors}}}}'
    | 'results{edges{cursor}}'
    | 'results{pageInfo{endCursor}}'
    | 'results{pageInfo{startCursor}}'
    | 'results{pageInfo{hasNextPage}}'
    | 'results{pageInfo{hasPreviousPage}}'
    | 'results{totalCount}';
export type VendorFields = {
    id: 'id';
    creationDate: 'creationDate';
    lastChangeDate: 'lastChangeDate';
    name: 'name';
    systemStatus: 'systemStatus';
    errors: 'errors';
    marketplace: {
        id: 'marketplace{id}';
        creationDate: 'marketplace{creationDate}';
        lastChangeDate: 'marketplace{lastChangeDate}';
        name: 'marketplace{name}';
        systemStatus: 'marketplace{systemStatus}';
        errors: 'marketplace{errors}';
        organization: {
            id: 'marketplace{organization{id}}';
            creationDate: 'marketplace{organization{creationDate}}';
            lastChangeDate: 'marketplace{organization{lastChangeDate}}';
            name: 'marketplace{organization{name}}';
            systemStatus: 'marketplace{organization{systemStatus}}';
            errors: 'marketplace{organization{errors}}';
            tier: 'marketplace{organization{tier}}';
            users: {
                edges: {
                    cursor: 'marketplace{organization{users{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'marketplace{organization{users{pageInfo{endCursor}}}}';
                    startCursor: 'marketplace{organization{users{pageInfo{startCursor}}}}';
                    hasNextPage: 'marketplace{organization{users{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'marketplace{organization{users{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'marketplace{organization{users{totalCount}}}';
            };
            marketplaces: {
                edges: {
                    cursor: 'marketplace{organization{marketplaces{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'marketplace{organization{marketplaces{pageInfo{endCursor}}}}';
                    startCursor: 'marketplace{organization{marketplaces{pageInfo{startCursor}}}}';
                    hasNextPage: 'marketplace{organization{marketplaces{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'marketplace{organization{marketplaces{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'marketplace{organization{marketplaces{totalCount}}}';
            };
        };
        mediaChannels: {
            edges: {
                node: {
                    id: 'marketplace{mediaChannels{edges{node{id}}}}';
                    creationDate: 'marketplace{mediaChannels{edges{node{creationDate}}}}';
                    lastChangeDate: 'marketplace{mediaChannels{edges{node{lastChangeDate}}}}';
                    name: 'marketplace{mediaChannels{edges{node{name}}}}';
                    systemStatus: 'marketplace{mediaChannels{edges{node{systemStatus}}}}';
                    errors: 'marketplace{mediaChannels{edges{node{errors}}}}';
                    platform: 'marketplace{mediaChannels{edges{node{platform}}}}';
                    remoteId: 'marketplace{mediaChannels{edges{node{remoteId}}}}';
                    remoteState: 'marketplace{mediaChannels{edges{node{remoteState}}}}';
                    currency: 'marketplace{mediaChannels{edges{node{currency}}}}';
                    currencySymbol: 'marketplace{mediaChannels{edges{node{currencySymbol}}}}';
                    currencyOffset: 'marketplace{mediaChannels{edges{node{currencyOffset}}}}';
                    timezone: 'marketplace{mediaChannels{edges{node{timezone}}}}';
                    tokenStatus: 'marketplace{mediaChannels{edges{node{tokenStatus}}}}';
                };
                cursor: 'marketplace{mediaChannels{edges{cursor}}}';
            };
            pageInfo: {
                endCursor: 'marketplace{mediaChannels{pageInfo{endCursor}}}';
                startCursor: 'marketplace{mediaChannels{pageInfo{startCursor}}}';
                hasNextPage: 'marketplace{mediaChannels{pageInfo{hasNextPage}}}';
                hasPreviousPage: 'marketplace{mediaChannels{pageInfo{hasPreviousPage}}}';
            };
            totalCount: 'marketplace{mediaChannels{totalCount}}';
        };
        campaignTemplates: {
            edges: {
                node: {
                    id: 'marketplace{campaignTemplates{edges{node{id}}}}';
                    creationDate: 'marketplace{campaignTemplates{edges{node{creationDate}}}}';
                    lastChangeDate: 'marketplace{campaignTemplates{edges{node{lastChangeDate}}}}';
                    name: 'marketplace{campaignTemplates{edges{node{name}}}}';
                    description: 'marketplace{campaignTemplates{edges{node{description}}}}';
                    platform: 'marketplace{campaignTemplates{edges{node{platform}}}}';
                    remoteId: 'marketplace{campaignTemplates{edges{node{remoteId}}}}';
                    systemStatus: 'marketplace{campaignTemplates{edges{node{systemStatus}}}}';
                    errors: 'marketplace{campaignTemplates{edges{node{errors}}}}';
                };
                cursor: 'marketplace{campaignTemplates{edges{cursor}}}';
            };
            pageInfo: {
                endCursor: 'marketplace{campaignTemplates{pageInfo{endCursor}}}';
                startCursor: 'marketplace{campaignTemplates{pageInfo{startCursor}}}';
                hasNextPage: 'marketplace{campaignTemplates{pageInfo{hasNextPage}}}';
                hasPreviousPage: 'marketplace{campaignTemplates{pageInfo{hasPreviousPage}}}';
            };
            totalCount: 'marketplace{campaignTemplates{totalCount}}';
        };
        vendors: {
            edges: {
                node: {
                    id: 'marketplace{vendors{edges{node{id}}}}';
                    creationDate: 'marketplace{vendors{edges{node{creationDate}}}}';
                    lastChangeDate: 'marketplace{vendors{edges{node{lastChangeDate}}}}';
                    name: 'marketplace{vendors{edges{node{name}}}}';
                    systemStatus: 'marketplace{vendors{edges{node{systemStatus}}}}';
                    errors: 'marketplace{vendors{edges{node{errors}}}}';
                };
                cursor: 'marketplace{vendors{edges{cursor}}}';
            };
            pageInfo: {
                endCursor: 'marketplace{vendors{pageInfo{endCursor}}}';
                startCursor: 'marketplace{vendors{pageInfo{startCursor}}}';
                hasNextPage: 'marketplace{vendors{pageInfo{hasNextPage}}}';
                hasPreviousPage: 'marketplace{vendors{pageInfo{hasPreviousPage}}}';
            };
            totalCount: 'marketplace{vendors{totalCount}}';
        };
        vendorTokens: {
            edges: {
                node: {
                    id: 'marketplace{vendorTokens{edges{node{id}}}}';
                    creationDate: 'marketplace{vendorTokens{edges{node{creationDate}}}}';
                    lastChangeDate: 'marketplace{vendorTokens{edges{node{lastChangeDate}}}}';
                    token: 'marketplace{vendorTokens{edges{node{token}}}}';
                };
                cursor: 'marketplace{vendorTokens{edges{cursor}}}';
            };
            pageInfo: {
                endCursor: 'marketplace{vendorTokens{pageInfo{endCursor}}}';
                startCursor: 'marketplace{vendorTokens{pageInfo{startCursor}}}';
                hasNextPage: 'marketplace{vendorTokens{pageInfo{hasNextPage}}}';
                hasPreviousPage: 'marketplace{vendorTokens{pageInfo{hasPreviousPage}}}';
            };
            totalCount: 'marketplace{vendorTokens{totalCount}}';
        };
        creativeTemplates: {
            edges: {
                node: {
                    id: 'marketplace{creativeTemplates{edges{node{id}}}}';
                    creationDate: 'marketplace{creativeTemplates{edges{node{creationDate}}}}';
                    lastChangeDate: 'marketplace{creativeTemplates{edges{node{lastChangeDate}}}}';
                    name: 'marketplace{creativeTemplates{edges{node{name}}}}';
                    height: 'marketplace{creativeTemplates{edges{node{height}}}}';
                    width: 'marketplace{creativeTemplates{edges{node{width}}}}';
                    systemStatus: 'marketplace{creativeTemplates{edges{node{systemStatus}}}}';
                    errors: 'marketplace{creativeTemplates{edges{node{errors}}}}';
                };
                cursor: 'marketplace{creativeTemplates{edges{cursor}}}';
            };
            pageInfo: {
                endCursor: 'marketplace{creativeTemplates{pageInfo{endCursor}}}';
                startCursor: 'marketplace{creativeTemplates{pageInfo{startCursor}}}';
                hasNextPage: 'marketplace{creativeTemplates{pageInfo{hasNextPage}}}';
                hasPreviousPage: 'marketplace{creativeTemplates{pageInfo{hasPreviousPage}}}';
            };
            totalCount: 'marketplace{creativeTemplates{totalCount}}';
        };
    };
    vendorTokens: {
        edges: {
            node: {
                id: 'vendorTokens{edges{node{id}}}';
                creationDate: 'vendorTokens{edges{node{creationDate}}}';
                lastChangeDate: 'vendorTokens{edges{node{lastChangeDate}}}';
                token: 'vendorTokens{edges{node{token}}}';
                vendor: {
                    id: 'vendorTokens{edges{node{vendor{id}}}}';
                    creationDate: 'vendorTokens{edges{node{vendor{creationDate}}}}';
                    lastChangeDate: 'vendorTokens{edges{node{vendor{lastChangeDate}}}}';
                    name: 'vendorTokens{edges{node{vendor{name}}}}';
                    systemStatus: 'vendorTokens{edges{node{vendor{systemStatus}}}}';
                    errors: 'vendorTokens{edges{node{vendor{errors}}}}';
                };
                marketplace: {
                    id: 'vendorTokens{edges{node{marketplace{id}}}}';
                    creationDate: 'vendorTokens{edges{node{marketplace{creationDate}}}}';
                    lastChangeDate: 'vendorTokens{edges{node{marketplace{lastChangeDate}}}}';
                    name: 'vendorTokens{edges{node{marketplace{name}}}}';
                    systemStatus: 'vendorTokens{edges{node{marketplace{systemStatus}}}}';
                    errors: 'vendorTokens{edges{node{marketplace{errors}}}}';
                };
            };
            cursor: 'vendorTokens{edges{cursor}}';
        };
        pageInfo: {
            endCursor: 'vendorTokens{pageInfo{endCursor}}';
            startCursor: 'vendorTokens{pageInfo{startCursor}}';
            hasNextPage: 'vendorTokens{pageInfo{hasNextPage}}';
            hasPreviousPage: 'vendorTokens{pageInfo{hasPreviousPage}}';
        };
        totalCount: 'vendorTokens{totalCount}';
    };
    products: {
        edges: {
            node: {
                id: 'products{edges{node{id}}}';
                creationDate: 'products{edges{node{creationDate}}}';
                lastChangeDate: 'products{edges{node{lastChangeDate}}}';
                name: 'products{edges{node{name}}}';
                sku: 'products{edges{node{sku}}}';
                remoteState: 'products{edges{node{remoteState}}}';
                metadata: 'products{edges{node{metadata}}}';
                systemStatus: 'products{edges{node{systemStatus}}}';
                errors: 'products{edges{node{errors}}}';
                warnings: 'products{edges{node{warnings}}}';
                marketingCampaigns: {
                    totalCount: 'products{edges{node{marketingCampaigns{totalCount}}}}';
                };
                catalog: {
                    id: 'products{edges{node{catalog{id}}}}';
                    creationDate: 'products{edges{node{catalog{creationDate}}}}';
                    lastChangeDate: 'products{edges{node{catalog{lastChangeDate}}}}';
                    name: 'products{edges{node{catalog{name}}}}';
                    catalogType: 'products{edges{node{catalog{catalogType}}}}';
                    remoteId: 'products{edges{node{catalog{remoteId}}}}';
                    systemStatus: 'products{edges{node{catalog{systemStatus}}}}';
                    remoteState: 'products{edges{node{catalog{remoteState}}}}';
                    dataFeedId: 'products{edges{node{catalog{dataFeedId}}}}';
                    errors: 'products{edges{node{catalog{errors}}}}';
                };
                vendor: {
                    id: 'products{edges{node{vendor{id}}}}';
                    creationDate: 'products{edges{node{vendor{creationDate}}}}';
                    lastChangeDate: 'products{edges{node{vendor{lastChangeDate}}}}';
                    name: 'products{edges{node{vendor{name}}}}';
                    systemStatus: 'products{edges{node{vendor{systemStatus}}}}';
                    errors: 'products{edges{node{vendor{errors}}}}';
                };
            };
            cursor: 'products{edges{cursor}}';
        };
        pageInfo: {
            endCursor: 'products{pageInfo{endCursor}}';
            startCursor: 'products{pageInfo{startCursor}}';
            hasNextPage: 'products{pageInfo{hasNextPage}}';
            hasPreviousPage: 'products{pageInfo{hasPreviousPage}}';
        };
        totalCount: 'products{totalCount}';
    };
};
export const VendorFields: VendorFields = {
    id: 'id',
    creationDate: 'creationDate',
    lastChangeDate: 'lastChangeDate',
    name: 'name',
    systemStatus: 'systemStatus',
    errors: 'errors',
    marketplace: {
        id: 'marketplace{id}',
        creationDate: 'marketplace{creationDate}',
        lastChangeDate: 'marketplace{lastChangeDate}',
        name: 'marketplace{name}',
        systemStatus: 'marketplace{systemStatus}',
        errors: 'marketplace{errors}',
        organization: {
            id: 'marketplace{organization{id}}',
            creationDate: 'marketplace{organization{creationDate}}',
            lastChangeDate: 'marketplace{organization{lastChangeDate}}',
            name: 'marketplace{organization{name}}',
            systemStatus: 'marketplace{organization{systemStatus}}',
            errors: 'marketplace{organization{errors}}',
            tier: 'marketplace{organization{tier}}',
            users: {
                edges: {
                    cursor: 'marketplace{organization{users{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'marketplace{organization{users{pageInfo{endCursor}}}}',
                    startCursor:
                        'marketplace{organization{users{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'marketplace{organization{users{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'marketplace{organization{users{pageInfo{hasPreviousPage}}}}',
                },
                totalCount: 'marketplace{organization{users{totalCount}}}',
            },
            marketplaces: {
                edges: {
                    cursor:
                        'marketplace{organization{marketplaces{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'marketplace{organization{marketplaces{pageInfo{endCursor}}}}',
                    startCursor:
                        'marketplace{organization{marketplaces{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'marketplace{organization{marketplaces{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'marketplace{organization{marketplaces{pageInfo{hasPreviousPage}}}}',
                },
                totalCount:
                    'marketplace{organization{marketplaces{totalCount}}}',
            },
        },
        mediaChannels: {
            edges: {
                node: {
                    id: 'marketplace{mediaChannels{edges{node{id}}}}',
                    creationDate:
                        'marketplace{mediaChannels{edges{node{creationDate}}}}',
                    lastChangeDate:
                        'marketplace{mediaChannels{edges{node{lastChangeDate}}}}',
                    name: 'marketplace{mediaChannels{edges{node{name}}}}',
                    systemStatus:
                        'marketplace{mediaChannels{edges{node{systemStatus}}}}',
                    errors: 'marketplace{mediaChannels{edges{node{errors}}}}',
                    platform:
                        'marketplace{mediaChannels{edges{node{platform}}}}',
                    remoteId:
                        'marketplace{mediaChannels{edges{node{remoteId}}}}',
                    remoteState:
                        'marketplace{mediaChannels{edges{node{remoteState}}}}',
                    currency:
                        'marketplace{mediaChannels{edges{node{currency}}}}',
                    currencySymbol:
                        'marketplace{mediaChannels{edges{node{currencySymbol}}}}',
                    currencyOffset:
                        'marketplace{mediaChannels{edges{node{currencyOffset}}}}',
                    timezone:
                        'marketplace{mediaChannels{edges{node{timezone}}}}',
                    tokenStatus:
                        'marketplace{mediaChannels{edges{node{tokenStatus}}}}',
                },
                cursor: 'marketplace{mediaChannels{edges{cursor}}}',
            },
            pageInfo: {
                endCursor: 'marketplace{mediaChannels{pageInfo{endCursor}}}',
                startCursor:
                    'marketplace{mediaChannels{pageInfo{startCursor}}}',
                hasNextPage:
                    'marketplace{mediaChannels{pageInfo{hasNextPage}}}',
                hasPreviousPage:
                    'marketplace{mediaChannels{pageInfo{hasPreviousPage}}}',
            },
            totalCount: 'marketplace{mediaChannels{totalCount}}',
        },
        campaignTemplates: {
            edges: {
                node: {
                    id: 'marketplace{campaignTemplates{edges{node{id}}}}',
                    creationDate:
                        'marketplace{campaignTemplates{edges{node{creationDate}}}}',
                    lastChangeDate:
                        'marketplace{campaignTemplates{edges{node{lastChangeDate}}}}',
                    name: 'marketplace{campaignTemplates{edges{node{name}}}}',
                    description:
                        'marketplace{campaignTemplates{edges{node{description}}}}',
                    platform:
                        'marketplace{campaignTemplates{edges{node{platform}}}}',
                    remoteId:
                        'marketplace{campaignTemplates{edges{node{remoteId}}}}',
                    systemStatus:
                        'marketplace{campaignTemplates{edges{node{systemStatus}}}}',
                    errors:
                        'marketplace{campaignTemplates{edges{node{errors}}}}',
                },
                cursor: 'marketplace{campaignTemplates{edges{cursor}}}',
            },
            pageInfo: {
                endCursor:
                    'marketplace{campaignTemplates{pageInfo{endCursor}}}',
                startCursor:
                    'marketplace{campaignTemplates{pageInfo{startCursor}}}',
                hasNextPage:
                    'marketplace{campaignTemplates{pageInfo{hasNextPage}}}',
                hasPreviousPage:
                    'marketplace{campaignTemplates{pageInfo{hasPreviousPage}}}',
            },
            totalCount: 'marketplace{campaignTemplates{totalCount}}',
        },
        vendors: {
            edges: {
                node: {
                    id: 'marketplace{vendors{edges{node{id}}}}',
                    creationDate:
                        'marketplace{vendors{edges{node{creationDate}}}}',
                    lastChangeDate:
                        'marketplace{vendors{edges{node{lastChangeDate}}}}',
                    name: 'marketplace{vendors{edges{node{name}}}}',
                    systemStatus:
                        'marketplace{vendors{edges{node{systemStatus}}}}',
                    errors: 'marketplace{vendors{edges{node{errors}}}}',
                },
                cursor: 'marketplace{vendors{edges{cursor}}}',
            },
            pageInfo: {
                endCursor: 'marketplace{vendors{pageInfo{endCursor}}}',
                startCursor: 'marketplace{vendors{pageInfo{startCursor}}}',
                hasNextPage: 'marketplace{vendors{pageInfo{hasNextPage}}}',
                hasPreviousPage:
                    'marketplace{vendors{pageInfo{hasPreviousPage}}}',
            },
            totalCount: 'marketplace{vendors{totalCount}}',
        },
        vendorTokens: {
            edges: {
                node: {
                    id: 'marketplace{vendorTokens{edges{node{id}}}}',
                    creationDate:
                        'marketplace{vendorTokens{edges{node{creationDate}}}}',
                    lastChangeDate:
                        'marketplace{vendorTokens{edges{node{lastChangeDate}}}}',
                    token: 'marketplace{vendorTokens{edges{node{token}}}}',
                },
                cursor: 'marketplace{vendorTokens{edges{cursor}}}',
            },
            pageInfo: {
                endCursor: 'marketplace{vendorTokens{pageInfo{endCursor}}}',
                startCursor: 'marketplace{vendorTokens{pageInfo{startCursor}}}',
                hasNextPage: 'marketplace{vendorTokens{pageInfo{hasNextPage}}}',
                hasPreviousPage:
                    'marketplace{vendorTokens{pageInfo{hasPreviousPage}}}',
            },
            totalCount: 'marketplace{vendorTokens{totalCount}}',
        },
        creativeTemplates: {
            edges: {
                node: {
                    id: 'marketplace{creativeTemplates{edges{node{id}}}}',
                    creationDate:
                        'marketplace{creativeTemplates{edges{node{creationDate}}}}',
                    lastChangeDate:
                        'marketplace{creativeTemplates{edges{node{lastChangeDate}}}}',
                    name: 'marketplace{creativeTemplates{edges{node{name}}}}',
                    height:
                        'marketplace{creativeTemplates{edges{node{height}}}}',
                    width: 'marketplace{creativeTemplates{edges{node{width}}}}',
                    systemStatus:
                        'marketplace{creativeTemplates{edges{node{systemStatus}}}}',
                    errors:
                        'marketplace{creativeTemplates{edges{node{errors}}}}',
                },
                cursor: 'marketplace{creativeTemplates{edges{cursor}}}',
            },
            pageInfo: {
                endCursor:
                    'marketplace{creativeTemplates{pageInfo{endCursor}}}',
                startCursor:
                    'marketplace{creativeTemplates{pageInfo{startCursor}}}',
                hasNextPage:
                    'marketplace{creativeTemplates{pageInfo{hasNextPage}}}',
                hasPreviousPage:
                    'marketplace{creativeTemplates{pageInfo{hasPreviousPage}}}',
            },
            totalCount: 'marketplace{creativeTemplates{totalCount}}',
        },
    },
    vendorTokens: {
        edges: {
            node: {
                id: 'vendorTokens{edges{node{id}}}',
                creationDate: 'vendorTokens{edges{node{creationDate}}}',
                lastChangeDate: 'vendorTokens{edges{node{lastChangeDate}}}',
                token: 'vendorTokens{edges{node{token}}}',
                vendor: {
                    id: 'vendorTokens{edges{node{vendor{id}}}}',
                    creationDate:
                        'vendorTokens{edges{node{vendor{creationDate}}}}',
                    lastChangeDate:
                        'vendorTokens{edges{node{vendor{lastChangeDate}}}}',
                    name: 'vendorTokens{edges{node{vendor{name}}}}',
                    systemStatus:
                        'vendorTokens{edges{node{vendor{systemStatus}}}}',
                    errors: 'vendorTokens{edges{node{vendor{errors}}}}',
                },
                marketplace: {
                    id: 'vendorTokens{edges{node{marketplace{id}}}}',
                    creationDate:
                        'vendorTokens{edges{node{marketplace{creationDate}}}}',
                    lastChangeDate:
                        'vendorTokens{edges{node{marketplace{lastChangeDate}}}}',
                    name: 'vendorTokens{edges{node{marketplace{name}}}}',
                    systemStatus:
                        'vendorTokens{edges{node{marketplace{systemStatus}}}}',
                    errors: 'vendorTokens{edges{node{marketplace{errors}}}}',
                },
            },
            cursor: 'vendorTokens{edges{cursor}}',
        },
        pageInfo: {
            endCursor: 'vendorTokens{pageInfo{endCursor}}',
            startCursor: 'vendorTokens{pageInfo{startCursor}}',
            hasNextPage: 'vendorTokens{pageInfo{hasNextPage}}',
            hasPreviousPage: 'vendorTokens{pageInfo{hasPreviousPage}}',
        },
        totalCount: 'vendorTokens{totalCount}',
    },
    products: {
        edges: {
            node: {
                id: 'products{edges{node{id}}}',
                creationDate: 'products{edges{node{creationDate}}}',
                lastChangeDate: 'products{edges{node{lastChangeDate}}}',
                name: 'products{edges{node{name}}}',
                sku: 'products{edges{node{sku}}}',
                remoteState: 'products{edges{node{remoteState}}}',
                metadata: 'products{edges{node{metadata}}}',
                systemStatus: 'products{edges{node{systemStatus}}}',
                errors: 'products{edges{node{errors}}}',
                warnings: 'products{edges{node{warnings}}}',
                marketingCampaigns: {
                    totalCount:
                        'products{edges{node{marketingCampaigns{totalCount}}}}',
                },
                catalog: {
                    id: 'products{edges{node{catalog{id}}}}',
                    creationDate:
                        'products{edges{node{catalog{creationDate}}}}',
                    lastChangeDate:
                        'products{edges{node{catalog{lastChangeDate}}}}',
                    name: 'products{edges{node{catalog{name}}}}',
                    catalogType: 'products{edges{node{catalog{catalogType}}}}',
                    remoteId: 'products{edges{node{catalog{remoteId}}}}',
                    systemStatus:
                        'products{edges{node{catalog{systemStatus}}}}',
                    remoteState: 'products{edges{node{catalog{remoteState}}}}',
                    dataFeedId: 'products{edges{node{catalog{dataFeedId}}}}',
                    errors: 'products{edges{node{catalog{errors}}}}',
                },
                vendor: {
                    id: 'products{edges{node{vendor{id}}}}',
                    creationDate: 'products{edges{node{vendor{creationDate}}}}',
                    lastChangeDate:
                        'products{edges{node{vendor{lastChangeDate}}}}',
                    name: 'products{edges{node{vendor{name}}}}',
                    systemStatus: 'products{edges{node{vendor{systemStatus}}}}',
                    errors: 'products{edges{node{vendor{errors}}}}',
                },
            },
            cursor: 'products{edges{cursor}}',
        },
        pageInfo: {
            endCursor: 'products{pageInfo{endCursor}}',
            startCursor: 'products{pageInfo{startCursor}}',
            hasNextPage: 'products{pageInfo{hasNextPage}}',
            hasPreviousPage: 'products{pageInfo{hasPreviousPage}}',
        },
        totalCount: 'products{totalCount}',
    },
};
export type VendorField =
    | 'id'
    | 'creationDate'
    | 'lastChangeDate'
    | 'name'
    | 'systemStatus'
    | 'errors'
    | 'marketplace{id}'
    | 'marketplace{creationDate}'
    | 'marketplace{lastChangeDate}'
    | 'marketplace{name}'
    | 'marketplace{systemStatus}'
    | 'marketplace{errors}'
    | 'marketplace{organization{id}}'
    | 'marketplace{organization{creationDate}}'
    | 'marketplace{organization{lastChangeDate}}'
    | 'marketplace{organization{name}}'
    | 'marketplace{organization{systemStatus}}'
    | 'marketplace{organization{errors}}'
    | 'marketplace{organization{tier}}'
    | 'marketplace{organization{users{edges{cursor}}}}'
    | 'marketplace{organization{users{pageInfo{endCursor}}}}'
    | 'marketplace{organization{users{pageInfo{startCursor}}}}'
    | 'marketplace{organization{users{pageInfo{hasNextPage}}}}'
    | 'marketplace{organization{users{pageInfo{hasPreviousPage}}}}'
    | 'marketplace{organization{users{totalCount}}}'
    | 'marketplace{organization{marketplaces{edges{cursor}}}}'
    | 'marketplace{organization{marketplaces{pageInfo{endCursor}}}}'
    | 'marketplace{organization{marketplaces{pageInfo{startCursor}}}}'
    | 'marketplace{organization{marketplaces{pageInfo{hasNextPage}}}}'
    | 'marketplace{organization{marketplaces{pageInfo{hasPreviousPage}}}}'
    | 'marketplace{organization{marketplaces{totalCount}}}'
    | 'marketplace{mediaChannels{edges{node{id}}}}'
    | 'marketplace{mediaChannels{edges{node{creationDate}}}}'
    | 'marketplace{mediaChannels{edges{node{lastChangeDate}}}}'
    | 'marketplace{mediaChannels{edges{node{name}}}}'
    | 'marketplace{mediaChannels{edges{node{systemStatus}}}}'
    | 'marketplace{mediaChannels{edges{node{errors}}}}'
    | 'marketplace{mediaChannels{edges{node{platform}}}}'
    | 'marketplace{mediaChannels{edges{node{remoteId}}}}'
    | 'marketplace{mediaChannels{edges{node{remoteState}}}}'
    | 'marketplace{mediaChannels{edges{node{currency}}}}'
    | 'marketplace{mediaChannels{edges{node{currencySymbol}}}}'
    | 'marketplace{mediaChannels{edges{node{currencyOffset}}}}'
    | 'marketplace{mediaChannels{edges{node{timezone}}}}'
    | 'marketplace{mediaChannels{edges{node{tokenStatus}}}}'
    | 'marketplace{mediaChannels{edges{cursor}}}'
    | 'marketplace{mediaChannels{pageInfo{endCursor}}}'
    | 'marketplace{mediaChannels{pageInfo{startCursor}}}'
    | 'marketplace{mediaChannels{pageInfo{hasNextPage}}}'
    | 'marketplace{mediaChannels{pageInfo{hasPreviousPage}}}'
    | 'marketplace{mediaChannels{totalCount}}'
    | 'marketplace{campaignTemplates{edges{node{id}}}}'
    | 'marketplace{campaignTemplates{edges{node{creationDate}}}}'
    | 'marketplace{campaignTemplates{edges{node{lastChangeDate}}}}'
    | 'marketplace{campaignTemplates{edges{node{name}}}}'
    | 'marketplace{campaignTemplates{edges{node{description}}}}'
    | 'marketplace{campaignTemplates{edges{node{platform}}}}'
    | 'marketplace{campaignTemplates{edges{node{remoteId}}}}'
    | 'marketplace{campaignTemplates{edges{node{systemStatus}}}}'
    | 'marketplace{campaignTemplates{edges{node{errors}}}}'
    | 'marketplace{campaignTemplates{edges{cursor}}}'
    | 'marketplace{campaignTemplates{pageInfo{endCursor}}}'
    | 'marketplace{campaignTemplates{pageInfo{startCursor}}}'
    | 'marketplace{campaignTemplates{pageInfo{hasNextPage}}}'
    | 'marketplace{campaignTemplates{pageInfo{hasPreviousPage}}}'
    | 'marketplace{campaignTemplates{totalCount}}'
    | 'marketplace{vendors{edges{node{id}}}}'
    | 'marketplace{vendors{edges{node{creationDate}}}}'
    | 'marketplace{vendors{edges{node{lastChangeDate}}}}'
    | 'marketplace{vendors{edges{node{name}}}}'
    | 'marketplace{vendors{edges{node{systemStatus}}}}'
    | 'marketplace{vendors{edges{node{errors}}}}'
    | 'marketplace{vendors{edges{cursor}}}'
    | 'marketplace{vendors{pageInfo{endCursor}}}'
    | 'marketplace{vendors{pageInfo{startCursor}}}'
    | 'marketplace{vendors{pageInfo{hasNextPage}}}'
    | 'marketplace{vendors{pageInfo{hasPreviousPage}}}'
    | 'marketplace{vendors{totalCount}}'
    | 'marketplace{vendorTokens{edges{node{id}}}}'
    | 'marketplace{vendorTokens{edges{node{creationDate}}}}'
    | 'marketplace{vendorTokens{edges{node{lastChangeDate}}}}'
    | 'marketplace{vendorTokens{edges{node{token}}}}'
    | 'marketplace{vendorTokens{edges{cursor}}}'
    | 'marketplace{vendorTokens{pageInfo{endCursor}}}'
    | 'marketplace{vendorTokens{pageInfo{startCursor}}}'
    | 'marketplace{vendorTokens{pageInfo{hasNextPage}}}'
    | 'marketplace{vendorTokens{pageInfo{hasPreviousPage}}}'
    | 'marketplace{vendorTokens{totalCount}}'
    | 'marketplace{creativeTemplates{edges{node{id}}}}'
    | 'marketplace{creativeTemplates{edges{node{creationDate}}}}'
    | 'marketplace{creativeTemplates{edges{node{lastChangeDate}}}}'
    | 'marketplace{creativeTemplates{edges{node{name}}}}'
    | 'marketplace{creativeTemplates{edges{node{height}}}}'
    | 'marketplace{creativeTemplates{edges{node{width}}}}'
    | 'marketplace{creativeTemplates{edges{node{systemStatus}}}}'
    | 'marketplace{creativeTemplates{edges{node{errors}}}}'
    | 'marketplace{creativeTemplates{edges{cursor}}}'
    | 'marketplace{creativeTemplates{pageInfo{endCursor}}}'
    | 'marketplace{creativeTemplates{pageInfo{startCursor}}}'
    | 'marketplace{creativeTemplates{pageInfo{hasNextPage}}}'
    | 'marketplace{creativeTemplates{pageInfo{hasPreviousPage}}}'
    | 'marketplace{creativeTemplates{totalCount}}'
    | 'vendorTokens{edges{node{id}}}'
    | 'vendorTokens{edges{node{creationDate}}}'
    | 'vendorTokens{edges{node{lastChangeDate}}}'
    | 'vendorTokens{edges{node{token}}}'
    | 'vendorTokens{edges{node{vendor{id}}}}'
    | 'vendorTokens{edges{node{vendor{creationDate}}}}'
    | 'vendorTokens{edges{node{vendor{lastChangeDate}}}}'
    | 'vendorTokens{edges{node{vendor{name}}}}'
    | 'vendorTokens{edges{node{vendor{systemStatus}}}}'
    | 'vendorTokens{edges{node{vendor{errors}}}}'
    | 'vendorTokens{edges{node{marketplace{id}}}}'
    | 'vendorTokens{edges{node{marketplace{creationDate}}}}'
    | 'vendorTokens{edges{node{marketplace{lastChangeDate}}}}'
    | 'vendorTokens{edges{node{marketplace{name}}}}'
    | 'vendorTokens{edges{node{marketplace{systemStatus}}}}'
    | 'vendorTokens{edges{node{marketplace{errors}}}}'
    | 'vendorTokens{edges{cursor}}'
    | 'vendorTokens{pageInfo{endCursor}}'
    | 'vendorTokens{pageInfo{startCursor}}'
    | 'vendorTokens{pageInfo{hasNextPage}}'
    | 'vendorTokens{pageInfo{hasPreviousPage}}'
    | 'vendorTokens{totalCount}'
    | 'products{edges{node{id}}}'
    | 'products{edges{node{creationDate}}}'
    | 'products{edges{node{lastChangeDate}}}'
    | 'products{edges{node{name}}}'
    | 'products{edges{node{sku}}}'
    | 'products{edges{node{remoteState}}}'
    | 'products{edges{node{metadata}}}'
    | 'products{edges{node{systemStatus}}}'
    | 'products{edges{node{errors}}}'
    | 'products{edges{node{warnings}}}'
    | 'products{edges{node{marketingCampaigns{totalCount}}}}'
    | 'products{edges{node{catalog{id}}}}'
    | 'products{edges{node{catalog{creationDate}}}}'
    | 'products{edges{node{catalog{lastChangeDate}}}}'
    | 'products{edges{node{catalog{name}}}}'
    | 'products{edges{node{catalog{catalogType}}}}'
    | 'products{edges{node{catalog{remoteId}}}}'
    | 'products{edges{node{catalog{systemStatus}}}}'
    | 'products{edges{node{catalog{remoteState}}}}'
    | 'products{edges{node{catalog{dataFeedId}}}}'
    | 'products{edges{node{catalog{errors}}}}'
    | 'products{edges{node{vendor{id}}}}'
    | 'products{edges{node{vendor{creationDate}}}}'
    | 'products{edges{node{vendor{lastChangeDate}}}}'
    | 'products{edges{node{vendor{name}}}}'
    | 'products{edges{node{vendor{systemStatus}}}}'
    | 'products{edges{node{vendor{errors}}}}'
    | 'products{edges{cursor}}'
    | 'products{pageInfo{endCursor}}'
    | 'products{pageInfo{startCursor}}'
    | 'products{pageInfo{hasNextPage}}'
    | 'products{pageInfo{hasPreviousPage}}'
    | 'products{totalCount}';
export type VendorTokenFields = {
    id: 'id';
    creationDate: 'creationDate';
    lastChangeDate: 'lastChangeDate';
    token: 'token';
    vendor: {
        id: 'vendor{id}';
        creationDate: 'vendor{creationDate}';
        lastChangeDate: 'vendor{lastChangeDate}';
        name: 'vendor{name}';
        systemStatus: 'vendor{systemStatus}';
        errors: 'vendor{errors}';
        marketplace: {
            id: 'vendor{marketplace{id}}';
            creationDate: 'vendor{marketplace{creationDate}}';
            lastChangeDate: 'vendor{marketplace{lastChangeDate}}';
            name: 'vendor{marketplace{name}}';
            systemStatus: 'vendor{marketplace{systemStatus}}';
            errors: 'vendor{marketplace{errors}}';
            organization: {
                id: 'vendor{marketplace{organization{id}}}';
                creationDate: 'vendor{marketplace{organization{creationDate}}}';
                lastChangeDate: 'vendor{marketplace{organization{lastChangeDate}}}';
                name: 'vendor{marketplace{organization{name}}}';
                systemStatus: 'vendor{marketplace{organization{systemStatus}}}';
                errors: 'vendor{marketplace{organization{errors}}}';
                tier: 'vendor{marketplace{organization{tier}}}';
                users: {
                    totalCount: 'vendor{marketplace{organization{users{totalCount}}}}';
                };
                marketplaces: {
                    totalCount: 'vendor{marketplace{organization{marketplaces{totalCount}}}}';
                };
            };
            mediaChannels: {
                edges: {
                    cursor: 'vendor{marketplace{mediaChannels{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'vendor{marketplace{mediaChannels{pageInfo{endCursor}}}}';
                    startCursor: 'vendor{marketplace{mediaChannels{pageInfo{startCursor}}}}';
                    hasNextPage: 'vendor{marketplace{mediaChannels{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'vendor{marketplace{mediaChannels{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'vendor{marketplace{mediaChannels{totalCount}}}';
            };
            campaignTemplates: {
                edges: {
                    cursor: 'vendor{marketplace{campaignTemplates{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'vendor{marketplace{campaignTemplates{pageInfo{endCursor}}}}';
                    startCursor: 'vendor{marketplace{campaignTemplates{pageInfo{startCursor}}}}';
                    hasNextPage: 'vendor{marketplace{campaignTemplates{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'vendor{marketplace{campaignTemplates{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'vendor{marketplace{campaignTemplates{totalCount}}}';
            };
            vendors: {
                edges: {
                    cursor: 'vendor{marketplace{vendors{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'vendor{marketplace{vendors{pageInfo{endCursor}}}}';
                    startCursor: 'vendor{marketplace{vendors{pageInfo{startCursor}}}}';
                    hasNextPage: 'vendor{marketplace{vendors{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'vendor{marketplace{vendors{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'vendor{marketplace{vendors{totalCount}}}';
            };
            vendorTokens: {
                edges: {
                    cursor: 'vendor{marketplace{vendorTokens{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'vendor{marketplace{vendorTokens{pageInfo{endCursor}}}}';
                    startCursor: 'vendor{marketplace{vendorTokens{pageInfo{startCursor}}}}';
                    hasNextPage: 'vendor{marketplace{vendorTokens{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'vendor{marketplace{vendorTokens{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'vendor{marketplace{vendorTokens{totalCount}}}';
            };
            creativeTemplates: {
                edges: {
                    cursor: 'vendor{marketplace{creativeTemplates{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'vendor{marketplace{creativeTemplates{pageInfo{endCursor}}}}';
                    startCursor: 'vendor{marketplace{creativeTemplates{pageInfo{startCursor}}}}';
                    hasNextPage: 'vendor{marketplace{creativeTemplates{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'vendor{marketplace{creativeTemplates{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'vendor{marketplace{creativeTemplates{totalCount}}}';
            };
        };
        vendorTokens: {
            edges: {
                node: {
                    id: 'vendor{vendorTokens{edges{node{id}}}}';
                    creationDate: 'vendor{vendorTokens{edges{node{creationDate}}}}';
                    lastChangeDate: 'vendor{vendorTokens{edges{node{lastChangeDate}}}}';
                    token: 'vendor{vendorTokens{edges{node{token}}}}';
                };
                cursor: 'vendor{vendorTokens{edges{cursor}}}';
            };
            pageInfo: {
                endCursor: 'vendor{vendorTokens{pageInfo{endCursor}}}';
                startCursor: 'vendor{vendorTokens{pageInfo{startCursor}}}';
                hasNextPage: 'vendor{vendorTokens{pageInfo{hasNextPage}}}';
                hasPreviousPage: 'vendor{vendorTokens{pageInfo{hasPreviousPage}}}';
            };
            totalCount: 'vendor{vendorTokens{totalCount}}';
        };
        products: {
            edges: {
                node: {
                    id: 'vendor{products{edges{node{id}}}}';
                    creationDate: 'vendor{products{edges{node{creationDate}}}}';
                    lastChangeDate: 'vendor{products{edges{node{lastChangeDate}}}}';
                    name: 'vendor{products{edges{node{name}}}}';
                    sku: 'vendor{products{edges{node{sku}}}}';
                    remoteState: 'vendor{products{edges{node{remoteState}}}}';
                    metadata: 'vendor{products{edges{node{metadata}}}}';
                    systemStatus: 'vendor{products{edges{node{systemStatus}}}}';
                    errors: 'vendor{products{edges{node{errors}}}}';
                    warnings: 'vendor{products{edges{node{warnings}}}}';
                };
                cursor: 'vendor{products{edges{cursor}}}';
            };
            pageInfo: {
                endCursor: 'vendor{products{pageInfo{endCursor}}}';
                startCursor: 'vendor{products{pageInfo{startCursor}}}';
                hasNextPage: 'vendor{products{pageInfo{hasNextPage}}}';
                hasPreviousPage: 'vendor{products{pageInfo{hasPreviousPage}}}';
            };
            totalCount: 'vendor{products{totalCount}}';
        };
    };
    marketplace: {
        id: 'marketplace{id}';
        creationDate: 'marketplace{creationDate}';
        lastChangeDate: 'marketplace{lastChangeDate}';
        name: 'marketplace{name}';
        systemStatus: 'marketplace{systemStatus}';
        errors: 'marketplace{errors}';
        organization: {
            id: 'marketplace{organization{id}}';
            creationDate: 'marketplace{organization{creationDate}}';
            lastChangeDate: 'marketplace{organization{lastChangeDate}}';
            name: 'marketplace{organization{name}}';
            systemStatus: 'marketplace{organization{systemStatus}}';
            errors: 'marketplace{organization{errors}}';
            tier: 'marketplace{organization{tier}}';
            users: {
                edges: {
                    cursor: 'marketplace{organization{users{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'marketplace{organization{users{pageInfo{endCursor}}}}';
                    startCursor: 'marketplace{organization{users{pageInfo{startCursor}}}}';
                    hasNextPage: 'marketplace{organization{users{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'marketplace{organization{users{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'marketplace{organization{users{totalCount}}}';
            };
            marketplaces: {
                edges: {
                    cursor: 'marketplace{organization{marketplaces{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'marketplace{organization{marketplaces{pageInfo{endCursor}}}}';
                    startCursor: 'marketplace{organization{marketplaces{pageInfo{startCursor}}}}';
                    hasNextPage: 'marketplace{organization{marketplaces{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'marketplace{organization{marketplaces{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'marketplace{organization{marketplaces{totalCount}}}';
            };
        };
        mediaChannels: {
            edges: {
                node: {
                    id: 'marketplace{mediaChannels{edges{node{id}}}}';
                    creationDate: 'marketplace{mediaChannels{edges{node{creationDate}}}}';
                    lastChangeDate: 'marketplace{mediaChannels{edges{node{lastChangeDate}}}}';
                    name: 'marketplace{mediaChannels{edges{node{name}}}}';
                    systemStatus: 'marketplace{mediaChannels{edges{node{systemStatus}}}}';
                    errors: 'marketplace{mediaChannels{edges{node{errors}}}}';
                    platform: 'marketplace{mediaChannels{edges{node{platform}}}}';
                    remoteId: 'marketplace{mediaChannels{edges{node{remoteId}}}}';
                    remoteState: 'marketplace{mediaChannels{edges{node{remoteState}}}}';
                    currency: 'marketplace{mediaChannels{edges{node{currency}}}}';
                    currencySymbol: 'marketplace{mediaChannels{edges{node{currencySymbol}}}}';
                    currencyOffset: 'marketplace{mediaChannels{edges{node{currencyOffset}}}}';
                    timezone: 'marketplace{mediaChannels{edges{node{timezone}}}}';
                    tokenStatus: 'marketplace{mediaChannels{edges{node{tokenStatus}}}}';
                };
                cursor: 'marketplace{mediaChannels{edges{cursor}}}';
            };
            pageInfo: {
                endCursor: 'marketplace{mediaChannels{pageInfo{endCursor}}}';
                startCursor: 'marketplace{mediaChannels{pageInfo{startCursor}}}';
                hasNextPage: 'marketplace{mediaChannels{pageInfo{hasNextPage}}}';
                hasPreviousPage: 'marketplace{mediaChannels{pageInfo{hasPreviousPage}}}';
            };
            totalCount: 'marketplace{mediaChannels{totalCount}}';
        };
        campaignTemplates: {
            edges: {
                node: {
                    id: 'marketplace{campaignTemplates{edges{node{id}}}}';
                    creationDate: 'marketplace{campaignTemplates{edges{node{creationDate}}}}';
                    lastChangeDate: 'marketplace{campaignTemplates{edges{node{lastChangeDate}}}}';
                    name: 'marketplace{campaignTemplates{edges{node{name}}}}';
                    description: 'marketplace{campaignTemplates{edges{node{description}}}}';
                    platform: 'marketplace{campaignTemplates{edges{node{platform}}}}';
                    remoteId: 'marketplace{campaignTemplates{edges{node{remoteId}}}}';
                    systemStatus: 'marketplace{campaignTemplates{edges{node{systemStatus}}}}';
                    errors: 'marketplace{campaignTemplates{edges{node{errors}}}}';
                };
                cursor: 'marketplace{campaignTemplates{edges{cursor}}}';
            };
            pageInfo: {
                endCursor: 'marketplace{campaignTemplates{pageInfo{endCursor}}}';
                startCursor: 'marketplace{campaignTemplates{pageInfo{startCursor}}}';
                hasNextPage: 'marketplace{campaignTemplates{pageInfo{hasNextPage}}}';
                hasPreviousPage: 'marketplace{campaignTemplates{pageInfo{hasPreviousPage}}}';
            };
            totalCount: 'marketplace{campaignTemplates{totalCount}}';
        };
        vendors: {
            edges: {
                node: {
                    id: 'marketplace{vendors{edges{node{id}}}}';
                    creationDate: 'marketplace{vendors{edges{node{creationDate}}}}';
                    lastChangeDate: 'marketplace{vendors{edges{node{lastChangeDate}}}}';
                    name: 'marketplace{vendors{edges{node{name}}}}';
                    systemStatus: 'marketplace{vendors{edges{node{systemStatus}}}}';
                    errors: 'marketplace{vendors{edges{node{errors}}}}';
                };
                cursor: 'marketplace{vendors{edges{cursor}}}';
            };
            pageInfo: {
                endCursor: 'marketplace{vendors{pageInfo{endCursor}}}';
                startCursor: 'marketplace{vendors{pageInfo{startCursor}}}';
                hasNextPage: 'marketplace{vendors{pageInfo{hasNextPage}}}';
                hasPreviousPage: 'marketplace{vendors{pageInfo{hasPreviousPage}}}';
            };
            totalCount: 'marketplace{vendors{totalCount}}';
        };
        vendorTokens: {
            edges: {
                node: {
                    id: 'marketplace{vendorTokens{edges{node{id}}}}';
                    creationDate: 'marketplace{vendorTokens{edges{node{creationDate}}}}';
                    lastChangeDate: 'marketplace{vendorTokens{edges{node{lastChangeDate}}}}';
                    token: 'marketplace{vendorTokens{edges{node{token}}}}';
                };
                cursor: 'marketplace{vendorTokens{edges{cursor}}}';
            };
            pageInfo: {
                endCursor: 'marketplace{vendorTokens{pageInfo{endCursor}}}';
                startCursor: 'marketplace{vendorTokens{pageInfo{startCursor}}}';
                hasNextPage: 'marketplace{vendorTokens{pageInfo{hasNextPage}}}';
                hasPreviousPage: 'marketplace{vendorTokens{pageInfo{hasPreviousPage}}}';
            };
            totalCount: 'marketplace{vendorTokens{totalCount}}';
        };
        creativeTemplates: {
            edges: {
                node: {
                    id: 'marketplace{creativeTemplates{edges{node{id}}}}';
                    creationDate: 'marketplace{creativeTemplates{edges{node{creationDate}}}}';
                    lastChangeDate: 'marketplace{creativeTemplates{edges{node{lastChangeDate}}}}';
                    name: 'marketplace{creativeTemplates{edges{node{name}}}}';
                    height: 'marketplace{creativeTemplates{edges{node{height}}}}';
                    width: 'marketplace{creativeTemplates{edges{node{width}}}}';
                    systemStatus: 'marketplace{creativeTemplates{edges{node{systemStatus}}}}';
                    errors: 'marketplace{creativeTemplates{edges{node{errors}}}}';
                };
                cursor: 'marketplace{creativeTemplates{edges{cursor}}}';
            };
            pageInfo: {
                endCursor: 'marketplace{creativeTemplates{pageInfo{endCursor}}}';
                startCursor: 'marketplace{creativeTemplates{pageInfo{startCursor}}}';
                hasNextPage: 'marketplace{creativeTemplates{pageInfo{hasNextPage}}}';
                hasPreviousPage: 'marketplace{creativeTemplates{pageInfo{hasPreviousPage}}}';
            };
            totalCount: 'marketplace{creativeTemplates{totalCount}}';
        };
    };
};
export const VendorTokenFields: VendorTokenFields = {
    id: 'id',
    creationDate: 'creationDate',
    lastChangeDate: 'lastChangeDate',
    token: 'token',
    vendor: {
        id: 'vendor{id}',
        creationDate: 'vendor{creationDate}',
        lastChangeDate: 'vendor{lastChangeDate}',
        name: 'vendor{name}',
        systemStatus: 'vendor{systemStatus}',
        errors: 'vendor{errors}',
        marketplace: {
            id: 'vendor{marketplace{id}}',
            creationDate: 'vendor{marketplace{creationDate}}',
            lastChangeDate: 'vendor{marketplace{lastChangeDate}}',
            name: 'vendor{marketplace{name}}',
            systemStatus: 'vendor{marketplace{systemStatus}}',
            errors: 'vendor{marketplace{errors}}',
            organization: {
                id: 'vendor{marketplace{organization{id}}}',
                creationDate: 'vendor{marketplace{organization{creationDate}}}',
                lastChangeDate:
                    'vendor{marketplace{organization{lastChangeDate}}}',
                name: 'vendor{marketplace{organization{name}}}',
                systemStatus: 'vendor{marketplace{organization{systemStatus}}}',
                errors: 'vendor{marketplace{organization{errors}}}',
                tier: 'vendor{marketplace{organization{tier}}}',
                users: {
                    totalCount:
                        'vendor{marketplace{organization{users{totalCount}}}}',
                },
                marketplaces: {
                    totalCount:
                        'vendor{marketplace{organization{marketplaces{totalCount}}}}',
                },
            },
            mediaChannels: {
                edges: {
                    cursor: 'vendor{marketplace{mediaChannels{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'vendor{marketplace{mediaChannels{pageInfo{endCursor}}}}',
                    startCursor:
                        'vendor{marketplace{mediaChannels{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'vendor{marketplace{mediaChannels{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'vendor{marketplace{mediaChannels{pageInfo{hasPreviousPage}}}}',
                },
                totalCount: 'vendor{marketplace{mediaChannels{totalCount}}}',
            },
            campaignTemplates: {
                edges: {
                    cursor:
                        'vendor{marketplace{campaignTemplates{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'vendor{marketplace{campaignTemplates{pageInfo{endCursor}}}}',
                    startCursor:
                        'vendor{marketplace{campaignTemplates{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'vendor{marketplace{campaignTemplates{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'vendor{marketplace{campaignTemplates{pageInfo{hasPreviousPage}}}}',
                },
                totalCount:
                    'vendor{marketplace{campaignTemplates{totalCount}}}',
            },
            vendors: {
                edges: {
                    cursor: 'vendor{marketplace{vendors{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'vendor{marketplace{vendors{pageInfo{endCursor}}}}',
                    startCursor:
                        'vendor{marketplace{vendors{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'vendor{marketplace{vendors{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'vendor{marketplace{vendors{pageInfo{hasPreviousPage}}}}',
                },
                totalCount: 'vendor{marketplace{vendors{totalCount}}}',
            },
            vendorTokens: {
                edges: {
                    cursor: 'vendor{marketplace{vendorTokens{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'vendor{marketplace{vendorTokens{pageInfo{endCursor}}}}',
                    startCursor:
                        'vendor{marketplace{vendorTokens{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'vendor{marketplace{vendorTokens{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'vendor{marketplace{vendorTokens{pageInfo{hasPreviousPage}}}}',
                },
                totalCount: 'vendor{marketplace{vendorTokens{totalCount}}}',
            },
            creativeTemplates: {
                edges: {
                    cursor:
                        'vendor{marketplace{creativeTemplates{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'vendor{marketplace{creativeTemplates{pageInfo{endCursor}}}}',
                    startCursor:
                        'vendor{marketplace{creativeTemplates{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'vendor{marketplace{creativeTemplates{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'vendor{marketplace{creativeTemplates{pageInfo{hasPreviousPage}}}}',
                },
                totalCount:
                    'vendor{marketplace{creativeTemplates{totalCount}}}',
            },
        },
        vendorTokens: {
            edges: {
                node: {
                    id: 'vendor{vendorTokens{edges{node{id}}}}',
                    creationDate:
                        'vendor{vendorTokens{edges{node{creationDate}}}}',
                    lastChangeDate:
                        'vendor{vendorTokens{edges{node{lastChangeDate}}}}',
                    token: 'vendor{vendorTokens{edges{node{token}}}}',
                },
                cursor: 'vendor{vendorTokens{edges{cursor}}}',
            },
            pageInfo: {
                endCursor: 'vendor{vendorTokens{pageInfo{endCursor}}}',
                startCursor: 'vendor{vendorTokens{pageInfo{startCursor}}}',
                hasNextPage: 'vendor{vendorTokens{pageInfo{hasNextPage}}}',
                hasPreviousPage:
                    'vendor{vendorTokens{pageInfo{hasPreviousPage}}}',
            },
            totalCount: 'vendor{vendorTokens{totalCount}}',
        },
        products: {
            edges: {
                node: {
                    id: 'vendor{products{edges{node{id}}}}',
                    creationDate: 'vendor{products{edges{node{creationDate}}}}',
                    lastChangeDate:
                        'vendor{products{edges{node{lastChangeDate}}}}',
                    name: 'vendor{products{edges{node{name}}}}',
                    sku: 'vendor{products{edges{node{sku}}}}',
                    remoteState: 'vendor{products{edges{node{remoteState}}}}',
                    metadata: 'vendor{products{edges{node{metadata}}}}',
                    systemStatus: 'vendor{products{edges{node{systemStatus}}}}',
                    errors: 'vendor{products{edges{node{errors}}}}',
                    warnings: 'vendor{products{edges{node{warnings}}}}',
                },
                cursor: 'vendor{products{edges{cursor}}}',
            },
            pageInfo: {
                endCursor: 'vendor{products{pageInfo{endCursor}}}',
                startCursor: 'vendor{products{pageInfo{startCursor}}}',
                hasNextPage: 'vendor{products{pageInfo{hasNextPage}}}',
                hasPreviousPage: 'vendor{products{pageInfo{hasPreviousPage}}}',
            },
            totalCount: 'vendor{products{totalCount}}',
        },
    },
    marketplace: {
        id: 'marketplace{id}',
        creationDate: 'marketplace{creationDate}',
        lastChangeDate: 'marketplace{lastChangeDate}',
        name: 'marketplace{name}',
        systemStatus: 'marketplace{systemStatus}',
        errors: 'marketplace{errors}',
        organization: {
            id: 'marketplace{organization{id}}',
            creationDate: 'marketplace{organization{creationDate}}',
            lastChangeDate: 'marketplace{organization{lastChangeDate}}',
            name: 'marketplace{organization{name}}',
            systemStatus: 'marketplace{organization{systemStatus}}',
            errors: 'marketplace{organization{errors}}',
            tier: 'marketplace{organization{tier}}',
            users: {
                edges: {
                    cursor: 'marketplace{organization{users{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'marketplace{organization{users{pageInfo{endCursor}}}}',
                    startCursor:
                        'marketplace{organization{users{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'marketplace{organization{users{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'marketplace{organization{users{pageInfo{hasPreviousPage}}}}',
                },
                totalCount: 'marketplace{organization{users{totalCount}}}',
            },
            marketplaces: {
                edges: {
                    cursor:
                        'marketplace{organization{marketplaces{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'marketplace{organization{marketplaces{pageInfo{endCursor}}}}',
                    startCursor:
                        'marketplace{organization{marketplaces{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'marketplace{organization{marketplaces{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'marketplace{organization{marketplaces{pageInfo{hasPreviousPage}}}}',
                },
                totalCount:
                    'marketplace{organization{marketplaces{totalCount}}}',
            },
        },
        mediaChannels: {
            edges: {
                node: {
                    id: 'marketplace{mediaChannels{edges{node{id}}}}',
                    creationDate:
                        'marketplace{mediaChannels{edges{node{creationDate}}}}',
                    lastChangeDate:
                        'marketplace{mediaChannels{edges{node{lastChangeDate}}}}',
                    name: 'marketplace{mediaChannels{edges{node{name}}}}',
                    systemStatus:
                        'marketplace{mediaChannels{edges{node{systemStatus}}}}',
                    errors: 'marketplace{mediaChannels{edges{node{errors}}}}',
                    platform:
                        'marketplace{mediaChannels{edges{node{platform}}}}',
                    remoteId:
                        'marketplace{mediaChannels{edges{node{remoteId}}}}',
                    remoteState:
                        'marketplace{mediaChannels{edges{node{remoteState}}}}',
                    currency:
                        'marketplace{mediaChannels{edges{node{currency}}}}',
                    currencySymbol:
                        'marketplace{mediaChannels{edges{node{currencySymbol}}}}',
                    currencyOffset:
                        'marketplace{mediaChannels{edges{node{currencyOffset}}}}',
                    timezone:
                        'marketplace{mediaChannels{edges{node{timezone}}}}',
                    tokenStatus:
                        'marketplace{mediaChannels{edges{node{tokenStatus}}}}',
                },
                cursor: 'marketplace{mediaChannels{edges{cursor}}}',
            },
            pageInfo: {
                endCursor: 'marketplace{mediaChannels{pageInfo{endCursor}}}',
                startCursor:
                    'marketplace{mediaChannels{pageInfo{startCursor}}}',
                hasNextPage:
                    'marketplace{mediaChannels{pageInfo{hasNextPage}}}',
                hasPreviousPage:
                    'marketplace{mediaChannels{pageInfo{hasPreviousPage}}}',
            },
            totalCount: 'marketplace{mediaChannels{totalCount}}',
        },
        campaignTemplates: {
            edges: {
                node: {
                    id: 'marketplace{campaignTemplates{edges{node{id}}}}',
                    creationDate:
                        'marketplace{campaignTemplates{edges{node{creationDate}}}}',
                    lastChangeDate:
                        'marketplace{campaignTemplates{edges{node{lastChangeDate}}}}',
                    name: 'marketplace{campaignTemplates{edges{node{name}}}}',
                    description:
                        'marketplace{campaignTemplates{edges{node{description}}}}',
                    platform:
                        'marketplace{campaignTemplates{edges{node{platform}}}}',
                    remoteId:
                        'marketplace{campaignTemplates{edges{node{remoteId}}}}',
                    systemStatus:
                        'marketplace{campaignTemplates{edges{node{systemStatus}}}}',
                    errors:
                        'marketplace{campaignTemplates{edges{node{errors}}}}',
                },
                cursor: 'marketplace{campaignTemplates{edges{cursor}}}',
            },
            pageInfo: {
                endCursor:
                    'marketplace{campaignTemplates{pageInfo{endCursor}}}',
                startCursor:
                    'marketplace{campaignTemplates{pageInfo{startCursor}}}',
                hasNextPage:
                    'marketplace{campaignTemplates{pageInfo{hasNextPage}}}',
                hasPreviousPage:
                    'marketplace{campaignTemplates{pageInfo{hasPreviousPage}}}',
            },
            totalCount: 'marketplace{campaignTemplates{totalCount}}',
        },
        vendors: {
            edges: {
                node: {
                    id: 'marketplace{vendors{edges{node{id}}}}',
                    creationDate:
                        'marketplace{vendors{edges{node{creationDate}}}}',
                    lastChangeDate:
                        'marketplace{vendors{edges{node{lastChangeDate}}}}',
                    name: 'marketplace{vendors{edges{node{name}}}}',
                    systemStatus:
                        'marketplace{vendors{edges{node{systemStatus}}}}',
                    errors: 'marketplace{vendors{edges{node{errors}}}}',
                },
                cursor: 'marketplace{vendors{edges{cursor}}}',
            },
            pageInfo: {
                endCursor: 'marketplace{vendors{pageInfo{endCursor}}}',
                startCursor: 'marketplace{vendors{pageInfo{startCursor}}}',
                hasNextPage: 'marketplace{vendors{pageInfo{hasNextPage}}}',
                hasPreviousPage:
                    'marketplace{vendors{pageInfo{hasPreviousPage}}}',
            },
            totalCount: 'marketplace{vendors{totalCount}}',
        },
        vendorTokens: {
            edges: {
                node: {
                    id: 'marketplace{vendorTokens{edges{node{id}}}}',
                    creationDate:
                        'marketplace{vendorTokens{edges{node{creationDate}}}}',
                    lastChangeDate:
                        'marketplace{vendorTokens{edges{node{lastChangeDate}}}}',
                    token: 'marketplace{vendorTokens{edges{node{token}}}}',
                },
                cursor: 'marketplace{vendorTokens{edges{cursor}}}',
            },
            pageInfo: {
                endCursor: 'marketplace{vendorTokens{pageInfo{endCursor}}}',
                startCursor: 'marketplace{vendorTokens{pageInfo{startCursor}}}',
                hasNextPage: 'marketplace{vendorTokens{pageInfo{hasNextPage}}}',
                hasPreviousPage:
                    'marketplace{vendorTokens{pageInfo{hasPreviousPage}}}',
            },
            totalCount: 'marketplace{vendorTokens{totalCount}}',
        },
        creativeTemplates: {
            edges: {
                node: {
                    id: 'marketplace{creativeTemplates{edges{node{id}}}}',
                    creationDate:
                        'marketplace{creativeTemplates{edges{node{creationDate}}}}',
                    lastChangeDate:
                        'marketplace{creativeTemplates{edges{node{lastChangeDate}}}}',
                    name: 'marketplace{creativeTemplates{edges{node{name}}}}',
                    height:
                        'marketplace{creativeTemplates{edges{node{height}}}}',
                    width: 'marketplace{creativeTemplates{edges{node{width}}}}',
                    systemStatus:
                        'marketplace{creativeTemplates{edges{node{systemStatus}}}}',
                    errors:
                        'marketplace{creativeTemplates{edges{node{errors}}}}',
                },
                cursor: 'marketplace{creativeTemplates{edges{cursor}}}',
            },
            pageInfo: {
                endCursor:
                    'marketplace{creativeTemplates{pageInfo{endCursor}}}',
                startCursor:
                    'marketplace{creativeTemplates{pageInfo{startCursor}}}',
                hasNextPage:
                    'marketplace{creativeTemplates{pageInfo{hasNextPage}}}',
                hasPreviousPage:
                    'marketplace{creativeTemplates{pageInfo{hasPreviousPage}}}',
            },
            totalCount: 'marketplace{creativeTemplates{totalCount}}',
        },
    },
};
export type VendorTokenField =
    | 'id'
    | 'creationDate'
    | 'lastChangeDate'
    | 'token'
    | 'vendor{id}'
    | 'vendor{creationDate}'
    | 'vendor{lastChangeDate}'
    | 'vendor{name}'
    | 'vendor{systemStatus}'
    | 'vendor{errors}'
    | 'vendor{marketplace{id}}'
    | 'vendor{marketplace{creationDate}}'
    | 'vendor{marketplace{lastChangeDate}}'
    | 'vendor{marketplace{name}}'
    | 'vendor{marketplace{systemStatus}}'
    | 'vendor{marketplace{errors}}'
    | 'vendor{marketplace{organization{id}}}'
    | 'vendor{marketplace{organization{creationDate}}}'
    | 'vendor{marketplace{organization{lastChangeDate}}}'
    | 'vendor{marketplace{organization{name}}}'
    | 'vendor{marketplace{organization{systemStatus}}}'
    | 'vendor{marketplace{organization{errors}}}'
    | 'vendor{marketplace{organization{tier}}}'
    | 'vendor{marketplace{organization{users{totalCount}}}}'
    | 'vendor{marketplace{organization{marketplaces{totalCount}}}}'
    | 'vendor{marketplace{mediaChannels{edges{cursor}}}}'
    | 'vendor{marketplace{mediaChannels{pageInfo{endCursor}}}}'
    | 'vendor{marketplace{mediaChannels{pageInfo{startCursor}}}}'
    | 'vendor{marketplace{mediaChannels{pageInfo{hasNextPage}}}}'
    | 'vendor{marketplace{mediaChannels{pageInfo{hasPreviousPage}}}}'
    | 'vendor{marketplace{mediaChannels{totalCount}}}'
    | 'vendor{marketplace{campaignTemplates{edges{cursor}}}}'
    | 'vendor{marketplace{campaignTemplates{pageInfo{endCursor}}}}'
    | 'vendor{marketplace{campaignTemplates{pageInfo{startCursor}}}}'
    | 'vendor{marketplace{campaignTemplates{pageInfo{hasNextPage}}}}'
    | 'vendor{marketplace{campaignTemplates{pageInfo{hasPreviousPage}}}}'
    | 'vendor{marketplace{campaignTemplates{totalCount}}}'
    | 'vendor{marketplace{vendors{edges{cursor}}}}'
    | 'vendor{marketplace{vendors{pageInfo{endCursor}}}}'
    | 'vendor{marketplace{vendors{pageInfo{startCursor}}}}'
    | 'vendor{marketplace{vendors{pageInfo{hasNextPage}}}}'
    | 'vendor{marketplace{vendors{pageInfo{hasPreviousPage}}}}'
    | 'vendor{marketplace{vendors{totalCount}}}'
    | 'vendor{marketplace{vendorTokens{edges{cursor}}}}'
    | 'vendor{marketplace{vendorTokens{pageInfo{endCursor}}}}'
    | 'vendor{marketplace{vendorTokens{pageInfo{startCursor}}}}'
    | 'vendor{marketplace{vendorTokens{pageInfo{hasNextPage}}}}'
    | 'vendor{marketplace{vendorTokens{pageInfo{hasPreviousPage}}}}'
    | 'vendor{marketplace{vendorTokens{totalCount}}}'
    | 'vendor{marketplace{creativeTemplates{edges{cursor}}}}'
    | 'vendor{marketplace{creativeTemplates{pageInfo{endCursor}}}}'
    | 'vendor{marketplace{creativeTemplates{pageInfo{startCursor}}}}'
    | 'vendor{marketplace{creativeTemplates{pageInfo{hasNextPage}}}}'
    | 'vendor{marketplace{creativeTemplates{pageInfo{hasPreviousPage}}}}'
    | 'vendor{marketplace{creativeTemplates{totalCount}}}'
    | 'vendor{vendorTokens{edges{node{id}}}}'
    | 'vendor{vendorTokens{edges{node{creationDate}}}}'
    | 'vendor{vendorTokens{edges{node{lastChangeDate}}}}'
    | 'vendor{vendorTokens{edges{node{token}}}}'
    | 'vendor{vendorTokens{edges{cursor}}}'
    | 'vendor{vendorTokens{pageInfo{endCursor}}}'
    | 'vendor{vendorTokens{pageInfo{startCursor}}}'
    | 'vendor{vendorTokens{pageInfo{hasNextPage}}}'
    | 'vendor{vendorTokens{pageInfo{hasPreviousPage}}}'
    | 'vendor{vendorTokens{totalCount}}'
    | 'vendor{products{edges{node{id}}}}'
    | 'vendor{products{edges{node{creationDate}}}}'
    | 'vendor{products{edges{node{lastChangeDate}}}}'
    | 'vendor{products{edges{node{name}}}}'
    | 'vendor{products{edges{node{sku}}}}'
    | 'vendor{products{edges{node{remoteState}}}}'
    | 'vendor{products{edges{node{metadata}}}}'
    | 'vendor{products{edges{node{systemStatus}}}}'
    | 'vendor{products{edges{node{errors}}}}'
    | 'vendor{products{edges{node{warnings}}}}'
    | 'vendor{products{edges{cursor}}}'
    | 'vendor{products{pageInfo{endCursor}}}'
    | 'vendor{products{pageInfo{startCursor}}}'
    | 'vendor{products{pageInfo{hasNextPage}}}'
    | 'vendor{products{pageInfo{hasPreviousPage}}}'
    | 'vendor{products{totalCount}}'
    | 'marketplace{id}'
    | 'marketplace{creationDate}'
    | 'marketplace{lastChangeDate}'
    | 'marketplace{name}'
    | 'marketplace{systemStatus}'
    | 'marketplace{errors}'
    | 'marketplace{organization{id}}'
    | 'marketplace{organization{creationDate}}'
    | 'marketplace{organization{lastChangeDate}}'
    | 'marketplace{organization{name}}'
    | 'marketplace{organization{systemStatus}}'
    | 'marketplace{organization{errors}}'
    | 'marketplace{organization{tier}}'
    | 'marketplace{organization{users{edges{cursor}}}}'
    | 'marketplace{organization{users{pageInfo{endCursor}}}}'
    | 'marketplace{organization{users{pageInfo{startCursor}}}}'
    | 'marketplace{organization{users{pageInfo{hasNextPage}}}}'
    | 'marketplace{organization{users{pageInfo{hasPreviousPage}}}}'
    | 'marketplace{organization{users{totalCount}}}'
    | 'marketplace{organization{marketplaces{edges{cursor}}}}'
    | 'marketplace{organization{marketplaces{pageInfo{endCursor}}}}'
    | 'marketplace{organization{marketplaces{pageInfo{startCursor}}}}'
    | 'marketplace{organization{marketplaces{pageInfo{hasNextPage}}}}'
    | 'marketplace{organization{marketplaces{pageInfo{hasPreviousPage}}}}'
    | 'marketplace{organization{marketplaces{totalCount}}}'
    | 'marketplace{mediaChannels{edges{node{id}}}}'
    | 'marketplace{mediaChannels{edges{node{creationDate}}}}'
    | 'marketplace{mediaChannels{edges{node{lastChangeDate}}}}'
    | 'marketplace{mediaChannels{edges{node{name}}}}'
    | 'marketplace{mediaChannels{edges{node{systemStatus}}}}'
    | 'marketplace{mediaChannels{edges{node{errors}}}}'
    | 'marketplace{mediaChannels{edges{node{platform}}}}'
    | 'marketplace{mediaChannels{edges{node{remoteId}}}}'
    | 'marketplace{mediaChannels{edges{node{remoteState}}}}'
    | 'marketplace{mediaChannels{edges{node{currency}}}}'
    | 'marketplace{mediaChannels{edges{node{currencySymbol}}}}'
    | 'marketplace{mediaChannels{edges{node{currencyOffset}}}}'
    | 'marketplace{mediaChannels{edges{node{timezone}}}}'
    | 'marketplace{mediaChannels{edges{node{tokenStatus}}}}'
    | 'marketplace{mediaChannels{edges{cursor}}}'
    | 'marketplace{mediaChannels{pageInfo{endCursor}}}'
    | 'marketplace{mediaChannels{pageInfo{startCursor}}}'
    | 'marketplace{mediaChannels{pageInfo{hasNextPage}}}'
    | 'marketplace{mediaChannels{pageInfo{hasPreviousPage}}}'
    | 'marketplace{mediaChannels{totalCount}}'
    | 'marketplace{campaignTemplates{edges{node{id}}}}'
    | 'marketplace{campaignTemplates{edges{node{creationDate}}}}'
    | 'marketplace{campaignTemplates{edges{node{lastChangeDate}}}}'
    | 'marketplace{campaignTemplates{edges{node{name}}}}'
    | 'marketplace{campaignTemplates{edges{node{description}}}}'
    | 'marketplace{campaignTemplates{edges{node{platform}}}}'
    | 'marketplace{campaignTemplates{edges{node{remoteId}}}}'
    | 'marketplace{campaignTemplates{edges{node{systemStatus}}}}'
    | 'marketplace{campaignTemplates{edges{node{errors}}}}'
    | 'marketplace{campaignTemplates{edges{cursor}}}'
    | 'marketplace{campaignTemplates{pageInfo{endCursor}}}'
    | 'marketplace{campaignTemplates{pageInfo{startCursor}}}'
    | 'marketplace{campaignTemplates{pageInfo{hasNextPage}}}'
    | 'marketplace{campaignTemplates{pageInfo{hasPreviousPage}}}'
    | 'marketplace{campaignTemplates{totalCount}}'
    | 'marketplace{vendors{edges{node{id}}}}'
    | 'marketplace{vendors{edges{node{creationDate}}}}'
    | 'marketplace{vendors{edges{node{lastChangeDate}}}}'
    | 'marketplace{vendors{edges{node{name}}}}'
    | 'marketplace{vendors{edges{node{systemStatus}}}}'
    | 'marketplace{vendors{edges{node{errors}}}}'
    | 'marketplace{vendors{edges{cursor}}}'
    | 'marketplace{vendors{pageInfo{endCursor}}}'
    | 'marketplace{vendors{pageInfo{startCursor}}}'
    | 'marketplace{vendors{pageInfo{hasNextPage}}}'
    | 'marketplace{vendors{pageInfo{hasPreviousPage}}}'
    | 'marketplace{vendors{totalCount}}'
    | 'marketplace{vendorTokens{edges{node{id}}}}'
    | 'marketplace{vendorTokens{edges{node{creationDate}}}}'
    | 'marketplace{vendorTokens{edges{node{lastChangeDate}}}}'
    | 'marketplace{vendorTokens{edges{node{token}}}}'
    | 'marketplace{vendorTokens{edges{cursor}}}'
    | 'marketplace{vendorTokens{pageInfo{endCursor}}}'
    | 'marketplace{vendorTokens{pageInfo{startCursor}}}'
    | 'marketplace{vendorTokens{pageInfo{hasNextPage}}}'
    | 'marketplace{vendorTokens{pageInfo{hasPreviousPage}}}'
    | 'marketplace{vendorTokens{totalCount}}'
    | 'marketplace{creativeTemplates{edges{node{id}}}}'
    | 'marketplace{creativeTemplates{edges{node{creationDate}}}}'
    | 'marketplace{creativeTemplates{edges{node{lastChangeDate}}}}'
    | 'marketplace{creativeTemplates{edges{node{name}}}}'
    | 'marketplace{creativeTemplates{edges{node{height}}}}'
    | 'marketplace{creativeTemplates{edges{node{width}}}}'
    | 'marketplace{creativeTemplates{edges{node{systemStatus}}}}'
    | 'marketplace{creativeTemplates{edges{node{errors}}}}'
    | 'marketplace{creativeTemplates{edges{cursor}}}'
    | 'marketplace{creativeTemplates{pageInfo{endCursor}}}'
    | 'marketplace{creativeTemplates{pageInfo{startCursor}}}'
    | 'marketplace{creativeTemplates{pageInfo{hasNextPage}}}'
    | 'marketplace{creativeTemplates{pageInfo{hasPreviousPage}}}'
    | 'marketplace{creativeTemplates{totalCount}}';
export type MarketingAdFields = {
    id: 'id';
    creationDate: 'creationDate';
    lastChangeDate: 'lastChangeDate';
    resultsSource: 'resultsSource';
    vendor: {
        id: 'vendor{id}';
        creationDate: 'vendor{creationDate}';
        lastChangeDate: 'vendor{lastChangeDate}';
        name: 'vendor{name}';
        systemStatus: 'vendor{systemStatus}';
        errors: 'vendor{errors}';
        marketplace: {
            id: 'vendor{marketplace{id}}';
            creationDate: 'vendor{marketplace{creationDate}}';
            lastChangeDate: 'vendor{marketplace{lastChangeDate}}';
            name: 'vendor{marketplace{name}}';
            systemStatus: 'vendor{marketplace{systemStatus}}';
            errors: 'vendor{marketplace{errors}}';
            organization: {
                id: 'vendor{marketplace{organization{id}}}';
                creationDate: 'vendor{marketplace{organization{creationDate}}}';
                lastChangeDate: 'vendor{marketplace{organization{lastChangeDate}}}';
                name: 'vendor{marketplace{organization{name}}}';
                systemStatus: 'vendor{marketplace{organization{systemStatus}}}';
                errors: 'vendor{marketplace{organization{errors}}}';
                tier: 'vendor{marketplace{organization{tier}}}';
                users: {
                    totalCount: 'vendor{marketplace{organization{users{totalCount}}}}';
                };
                marketplaces: {
                    totalCount: 'vendor{marketplace{organization{marketplaces{totalCount}}}}';
                };
            };
            mediaChannels: {
                edges: {
                    cursor: 'vendor{marketplace{mediaChannels{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'vendor{marketplace{mediaChannels{pageInfo{endCursor}}}}';
                    startCursor: 'vendor{marketplace{mediaChannels{pageInfo{startCursor}}}}';
                    hasNextPage: 'vendor{marketplace{mediaChannels{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'vendor{marketplace{mediaChannels{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'vendor{marketplace{mediaChannels{totalCount}}}';
            };
            campaignTemplates: {
                edges: {
                    cursor: 'vendor{marketplace{campaignTemplates{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'vendor{marketplace{campaignTemplates{pageInfo{endCursor}}}}';
                    startCursor: 'vendor{marketplace{campaignTemplates{pageInfo{startCursor}}}}';
                    hasNextPage: 'vendor{marketplace{campaignTemplates{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'vendor{marketplace{campaignTemplates{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'vendor{marketplace{campaignTemplates{totalCount}}}';
            };
            vendors: {
                edges: {
                    cursor: 'vendor{marketplace{vendors{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'vendor{marketplace{vendors{pageInfo{endCursor}}}}';
                    startCursor: 'vendor{marketplace{vendors{pageInfo{startCursor}}}}';
                    hasNextPage: 'vendor{marketplace{vendors{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'vendor{marketplace{vendors{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'vendor{marketplace{vendors{totalCount}}}';
            };
            vendorTokens: {
                edges: {
                    cursor: 'vendor{marketplace{vendorTokens{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'vendor{marketplace{vendorTokens{pageInfo{endCursor}}}}';
                    startCursor: 'vendor{marketplace{vendorTokens{pageInfo{startCursor}}}}';
                    hasNextPage: 'vendor{marketplace{vendorTokens{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'vendor{marketplace{vendorTokens{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'vendor{marketplace{vendorTokens{totalCount}}}';
            };
            creativeTemplates: {
                edges: {
                    cursor: 'vendor{marketplace{creativeTemplates{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'vendor{marketplace{creativeTemplates{pageInfo{endCursor}}}}';
                    startCursor: 'vendor{marketplace{creativeTemplates{pageInfo{startCursor}}}}';
                    hasNextPage: 'vendor{marketplace{creativeTemplates{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'vendor{marketplace{creativeTemplates{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'vendor{marketplace{creativeTemplates{totalCount}}}';
            };
        };
        vendorTokens: {
            edges: {
                node: {
                    id: 'vendor{vendorTokens{edges{node{id}}}}';
                    creationDate: 'vendor{vendorTokens{edges{node{creationDate}}}}';
                    lastChangeDate: 'vendor{vendorTokens{edges{node{lastChangeDate}}}}';
                    token: 'vendor{vendorTokens{edges{node{token}}}}';
                };
                cursor: 'vendor{vendorTokens{edges{cursor}}}';
            };
            pageInfo: {
                endCursor: 'vendor{vendorTokens{pageInfo{endCursor}}}';
                startCursor: 'vendor{vendorTokens{pageInfo{startCursor}}}';
                hasNextPage: 'vendor{vendorTokens{pageInfo{hasNextPage}}}';
                hasPreviousPage: 'vendor{vendorTokens{pageInfo{hasPreviousPage}}}';
            };
            totalCount: 'vendor{vendorTokens{totalCount}}';
        };
        products: {
            edges: {
                node: {
                    id: 'vendor{products{edges{node{id}}}}';
                    creationDate: 'vendor{products{edges{node{creationDate}}}}';
                    lastChangeDate: 'vendor{products{edges{node{lastChangeDate}}}}';
                    name: 'vendor{products{edges{node{name}}}}';
                    sku: 'vendor{products{edges{node{sku}}}}';
                    remoteState: 'vendor{products{edges{node{remoteState}}}}';
                    metadata: 'vendor{products{edges{node{metadata}}}}';
                    systemStatus: 'vendor{products{edges{node{systemStatus}}}}';
                    errors: 'vendor{products{edges{node{errors}}}}';
                    warnings: 'vendor{products{edges{node{warnings}}}}';
                };
                cursor: 'vendor{products{edges{cursor}}}';
            };
            pageInfo: {
                endCursor: 'vendor{products{pageInfo{endCursor}}}';
                startCursor: 'vendor{products{pageInfo{startCursor}}}';
                hasNextPage: 'vendor{products{pageInfo{hasNextPage}}}';
                hasPreviousPage: 'vendor{products{pageInfo{hasPreviousPage}}}';
            };
            totalCount: 'vendor{products{totalCount}}';
        };
    };
    systemStatus: 'systemStatus';
    errors: 'errors';
    remoteId: 'remoteId';
    preview: 'preview';
    results: {
        edges: {
            node: {
                id: 'results{edges{node{id}}}';
                creationDate: 'results{edges{node{creationDate}}}';
                lastChangeDate: 'results{edges{node{lastChangeDate}}}';
                date: 'results{edges{node{date}}}';
                analytics: {
                    results: 'results{edges{node{analytics{results}}}}';
                    impressions: 'results{edges{node{analytics{impressions}}}}';
                    clicks: 'results{edges{node{analytics{clicks}}}}';
                    spend: 'results{edges{node{analytics{spend}}}}';
                    purchases: 'results{edges{node{analytics{purchases}}}}';
                    purchasesValue: 'results{edges{node{analytics{purchasesValue}}}}';
                };
                type: 'results{edges{node{type}}}';
                resource: {
                    id: 'results{edges{node{resource{id}}}}';
                    creationDate: 'results{edges{node{resource{creationDate}}}}';
                    lastChangeDate: 'results{edges{node{resource{lastChangeDate}}}}';
                    resultsSource: 'results{edges{node{resource{resultsSource}}}}';
                    systemStatus: 'results{edges{node{resource{systemStatus}}}}';
                    errors: 'results{edges{node{resource{errors}}}}';
                };
                vendor: {
                    id: 'results{edges{node{vendor{id}}}}';
                    creationDate: 'results{edges{node{vendor{creationDate}}}}';
                    lastChangeDate: 'results{edges{node{vendor{lastChangeDate}}}}';
                    name: 'results{edges{node{vendor{name}}}}';
                    systemStatus: 'results{edges{node{vendor{systemStatus}}}}';
                    errors: 'results{edges{node{vendor{errors}}}}';
                };
            };
            cursor: 'results{edges{cursor}}';
        };
        pageInfo: {
            endCursor: 'results{pageInfo{endCursor}}';
            startCursor: 'results{pageInfo{startCursor}}';
            hasNextPage: 'results{pageInfo{hasNextPage}}';
            hasPreviousPage: 'results{pageInfo{hasPreviousPage}}';
        };
        totalCount: 'results{totalCount}';
    };
    marketingCampaign: {
        id: 'marketingCampaign{id}';
        creationDate: 'marketingCampaign{creationDate}';
        lastChangeDate: 'marketingCampaign{lastChangeDate}';
        resultsSource: 'marketingCampaign{resultsSource}';
        vendor: {
            id: 'marketingCampaign{vendor{id}}';
            creationDate: 'marketingCampaign{vendor{creationDate}}';
            lastChangeDate: 'marketingCampaign{vendor{lastChangeDate}}';
            name: 'marketingCampaign{vendor{name}}';
            systemStatus: 'marketingCampaign{vendor{systemStatus}}';
            errors: 'marketingCampaign{vendor{errors}}';
            marketplace: {
                id: 'marketingCampaign{vendor{marketplace{id}}}';
                creationDate: 'marketingCampaign{vendor{marketplace{creationDate}}}';
                lastChangeDate: 'marketingCampaign{vendor{marketplace{lastChangeDate}}}';
                name: 'marketingCampaign{vendor{marketplace{name}}}';
                systemStatus: 'marketingCampaign{vendor{marketplace{systemStatus}}}';
                errors: 'marketingCampaign{vendor{marketplace{errors}}}';
                organization: {
                    id: 'marketingCampaign{vendor{marketplace{organization{id}}}}';
                    creationDate: 'marketingCampaign{vendor{marketplace{organization{creationDate}}}}';
                    lastChangeDate: 'marketingCampaign{vendor{marketplace{organization{lastChangeDate}}}}';
                    name: 'marketingCampaign{vendor{marketplace{organization{name}}}}';
                    systemStatus: 'marketingCampaign{vendor{marketplace{organization{systemStatus}}}}';
                    errors: 'marketingCampaign{vendor{marketplace{organization{errors}}}}';
                    tier: 'marketingCampaign{vendor{marketplace{organization{tier}}}}';
                };
                mediaChannels: {
                    totalCount: 'marketingCampaign{vendor{marketplace{mediaChannels{totalCount}}}}';
                };
                campaignTemplates: {
                    totalCount: 'marketingCampaign{vendor{marketplace{campaignTemplates{totalCount}}}}';
                };
                vendors: {
                    totalCount: 'marketingCampaign{vendor{marketplace{vendors{totalCount}}}}';
                };
                vendorTokens: {
                    totalCount: 'marketingCampaign{vendor{marketplace{vendorTokens{totalCount}}}}';
                };
                creativeTemplates: {
                    totalCount: 'marketingCampaign{vendor{marketplace{creativeTemplates{totalCount}}}}';
                };
            };
            vendorTokens: {
                edges: {
                    cursor: 'marketingCampaign{vendor{vendorTokens{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'marketingCampaign{vendor{vendorTokens{pageInfo{endCursor}}}}';
                    startCursor: 'marketingCampaign{vendor{vendorTokens{pageInfo{startCursor}}}}';
                    hasNextPage: 'marketingCampaign{vendor{vendorTokens{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'marketingCampaign{vendor{vendorTokens{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'marketingCampaign{vendor{vendorTokens{totalCount}}}';
            };
            products: {
                edges: {
                    cursor: 'marketingCampaign{vendor{products{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'marketingCampaign{vendor{products{pageInfo{endCursor}}}}';
                    startCursor: 'marketingCampaign{vendor{products{pageInfo{startCursor}}}}';
                    hasNextPage: 'marketingCampaign{vendor{products{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'marketingCampaign{vendor{products{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'marketingCampaign{vendor{products{totalCount}}}';
            };
        };
        systemStatus: 'marketingCampaign{systemStatus}';
        errors: 'marketingCampaign{errors}';
        name: 'marketingCampaign{name}';
        status: 'marketingCampaign{status}';
        creativeSpec: 'marketingCampaign{creativeSpec}';
        runTimeSpec: 'marketingCampaign{runTimeSpec}';
        marketingAds: {
            edges: {
                node: {
                    id: 'marketingCampaign{marketingAds{edges{node{id}}}}';
                    creationDate: 'marketingCampaign{marketingAds{edges{node{creationDate}}}}';
                    lastChangeDate: 'marketingCampaign{marketingAds{edges{node{lastChangeDate}}}}';
                    resultsSource: 'marketingCampaign{marketingAds{edges{node{resultsSource}}}}';
                    systemStatus: 'marketingCampaign{marketingAds{edges{node{systemStatus}}}}';
                    errors: 'marketingCampaign{marketingAds{edges{node{errors}}}}';
                    remoteId: 'marketingCampaign{marketingAds{edges{node{remoteId}}}}';
                    preview: 'marketingCampaign{marketingAds{edges{node{preview}}}}';
                };
                cursor: 'marketingCampaign{marketingAds{edges{cursor}}}';
            };
            pageInfo: {
                endCursor: 'marketingCampaign{marketingAds{pageInfo{endCursor}}}';
                startCursor: 'marketingCampaign{marketingAds{pageInfo{startCursor}}}';
                hasNextPage: 'marketingCampaign{marketingAds{pageInfo{hasNextPage}}}';
                hasPreviousPage: 'marketingCampaign{marketingAds{pageInfo{hasPreviousPage}}}';
            };
            totalCount: 'marketingCampaign{marketingAds{totalCount}}';
        };
        products: {
            edges: {
                node: {
                    id: 'marketingCampaign{products{edges{node{id}}}}';
                    creationDate: 'marketingCampaign{products{edges{node{creationDate}}}}';
                    lastChangeDate: 'marketingCampaign{products{edges{node{lastChangeDate}}}}';
                    name: 'marketingCampaign{products{edges{node{name}}}}';
                    sku: 'marketingCampaign{products{edges{node{sku}}}}';
                    remoteState: 'marketingCampaign{products{edges{node{remoteState}}}}';
                    metadata: 'marketingCampaign{products{edges{node{metadata}}}}';
                    systemStatus: 'marketingCampaign{products{edges{node{systemStatus}}}}';
                    errors: 'marketingCampaign{products{edges{node{errors}}}}';
                    warnings: 'marketingCampaign{products{edges{node{warnings}}}}';
                };
                cursor: 'marketingCampaign{products{edges{cursor}}}';
            };
            pageInfo: {
                endCursor: 'marketingCampaign{products{pageInfo{endCursor}}}';
                startCursor: 'marketingCampaign{products{pageInfo{startCursor}}}';
                hasNextPage: 'marketingCampaign{products{pageInfo{hasNextPage}}}';
                hasPreviousPage: 'marketingCampaign{products{pageInfo{hasPreviousPage}}}';
            };
            totalCount: 'marketingCampaign{products{totalCount}}';
        };
        catalog: {
            id: 'marketingCampaign{catalog{id}}';
            creationDate: 'marketingCampaign{catalog{creationDate}}';
            lastChangeDate: 'marketingCampaign{catalog{lastChangeDate}}';
            name: 'marketingCampaign{catalog{name}}';
            catalogType: 'marketingCampaign{catalog{catalogType}}';
            remoteId: 'marketingCampaign{catalog{remoteId}}';
            systemStatus: 'marketingCampaign{catalog{systemStatus}}';
            remoteState: 'marketingCampaign{catalog{remoteState}}';
            dataFeedId: 'marketingCampaign{catalog{dataFeedId}}';
            errors: 'marketingCampaign{catalog{errors}}';
            mediaChannel: {
                id: 'marketingCampaign{catalog{mediaChannel{id}}}';
                creationDate: 'marketingCampaign{catalog{mediaChannel{creationDate}}}';
                lastChangeDate: 'marketingCampaign{catalog{mediaChannel{lastChangeDate}}}';
                name: 'marketingCampaign{catalog{mediaChannel{name}}}';
                systemStatus: 'marketingCampaign{catalog{mediaChannel{systemStatus}}}';
                errors: 'marketingCampaign{catalog{mediaChannel{errors}}}';
                platform: 'marketingCampaign{catalog{mediaChannel{platform}}}';
                remoteId: 'marketingCampaign{catalog{mediaChannel{remoteId}}}';
                remoteState: 'marketingCampaign{catalog{mediaChannel{remoteState}}}';
                currency: 'marketingCampaign{catalog{mediaChannel{currency}}}';
                currencySymbol: 'marketingCampaign{catalog{mediaChannel{currencySymbol}}}';
                currencyOffset: 'marketingCampaign{catalog{mediaChannel{currencyOffset}}}';
                timezone: 'marketingCampaign{catalog{mediaChannel{timezone}}}';
                tokenStatus: 'marketingCampaign{catalog{mediaChannel{tokenStatus}}}';
                catalogs: {
                    totalCount: 'marketingCampaign{catalog{mediaChannel{catalogs{totalCount}}}}';
                };
                marketplace: {
                    id: 'marketingCampaign{catalog{mediaChannel{marketplace{id}}}}';
                    creationDate: 'marketingCampaign{catalog{mediaChannel{marketplace{creationDate}}}}';
                    lastChangeDate: 'marketingCampaign{catalog{mediaChannel{marketplace{lastChangeDate}}}}';
                    name: 'marketingCampaign{catalog{mediaChannel{marketplace{name}}}}';
                    systemStatus: 'marketingCampaign{catalog{mediaChannel{marketplace{systemStatus}}}}';
                    errors: 'marketingCampaign{catalog{mediaChannel{marketplace{errors}}}}';
                };
            };
            products: {
                edges: {
                    cursor: 'marketingCampaign{catalog{products{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'marketingCampaign{catalog{products{pageInfo{endCursor}}}}';
                    startCursor: 'marketingCampaign{catalog{products{pageInfo{startCursor}}}}';
                    hasNextPage: 'marketingCampaign{catalog{products{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'marketingCampaign{catalog{products{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'marketingCampaign{catalog{products{totalCount}}}';
            };
        };
        campaignTemplate: {
            id: 'marketingCampaign{campaignTemplate{id}}';
            creationDate: 'marketingCampaign{campaignTemplate{creationDate}}';
            lastChangeDate: 'marketingCampaign{campaignTemplate{lastChangeDate}}';
            name: 'marketingCampaign{campaignTemplate{name}}';
            description: 'marketingCampaign{campaignTemplate{description}}';
            platform: 'marketingCampaign{campaignTemplate{platform}}';
            remoteId: 'marketingCampaign{campaignTemplate{remoteId}}';
            systemStatus: 'marketingCampaign{campaignTemplate{systemStatus}}';
            errors: 'marketingCampaign{campaignTemplate{errors}}';
            marketplace: {
                id: 'marketingCampaign{campaignTemplate{marketplace{id}}}';
                creationDate: 'marketingCampaign{campaignTemplate{marketplace{creationDate}}}';
                lastChangeDate: 'marketingCampaign{campaignTemplate{marketplace{lastChangeDate}}}';
                name: 'marketingCampaign{campaignTemplate{marketplace{name}}}';
                systemStatus: 'marketingCampaign{campaignTemplate{marketplace{systemStatus}}}';
                errors: 'marketingCampaign{campaignTemplate{marketplace{errors}}}';
                organization: {
                    id: 'marketingCampaign{campaignTemplate{marketplace{organization{id}}}}';
                    creationDate: 'marketingCampaign{campaignTemplate{marketplace{organization{creationDate}}}}';
                    lastChangeDate: 'marketingCampaign{campaignTemplate{marketplace{organization{lastChangeDate}}}}';
                    name: 'marketingCampaign{campaignTemplate{marketplace{organization{name}}}}';
                    systemStatus: 'marketingCampaign{campaignTemplate{marketplace{organization{systemStatus}}}}';
                    errors: 'marketingCampaign{campaignTemplate{marketplace{organization{errors}}}}';
                    tier: 'marketingCampaign{campaignTemplate{marketplace{organization{tier}}}}';
                };
                mediaChannels: {
                    totalCount: 'marketingCampaign{campaignTemplate{marketplace{mediaChannels{totalCount}}}}';
                };
                campaignTemplates: {
                    totalCount: 'marketingCampaign{campaignTemplate{marketplace{campaignTemplates{totalCount}}}}';
                };
                vendors: {
                    totalCount: 'marketingCampaign{campaignTemplate{marketplace{vendors{totalCount}}}}';
                };
                vendorTokens: {
                    totalCount: 'marketingCampaign{campaignTemplate{marketplace{vendorTokens{totalCount}}}}';
                };
                creativeTemplates: {
                    totalCount: 'marketingCampaign{campaignTemplate{marketplace{creativeTemplates{totalCount}}}}';
                };
            };
            marketingCampaigns: {
                edges: {
                    cursor: 'marketingCampaign{campaignTemplate{marketingCampaigns{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'marketingCampaign{campaignTemplate{marketingCampaigns{pageInfo{endCursor}}}}';
                    startCursor: 'marketingCampaign{campaignTemplate{marketingCampaigns{pageInfo{startCursor}}}}';
                    hasNextPage: 'marketingCampaign{campaignTemplate{marketingCampaigns{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'marketingCampaign{campaignTemplate{marketingCampaigns{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'marketingCampaign{campaignTemplate{marketingCampaigns{totalCount}}}';
            };
        };
        mediaChannel: {
            id: 'marketingCampaign{mediaChannel{id}}';
            creationDate: 'marketingCampaign{mediaChannel{creationDate}}';
            lastChangeDate: 'marketingCampaign{mediaChannel{lastChangeDate}}';
            name: 'marketingCampaign{mediaChannel{name}}';
            systemStatus: 'marketingCampaign{mediaChannel{systemStatus}}';
            errors: 'marketingCampaign{mediaChannel{errors}}';
            platform: 'marketingCampaign{mediaChannel{platform}}';
            remoteId: 'marketingCampaign{mediaChannel{remoteId}}';
            remoteState: 'marketingCampaign{mediaChannel{remoteState}}';
            currency: 'marketingCampaign{mediaChannel{currency}}';
            currencySymbol: 'marketingCampaign{mediaChannel{currencySymbol}}';
            currencyOffset: 'marketingCampaign{mediaChannel{currencyOffset}}';
            timezone: 'marketingCampaign{mediaChannel{timezone}}';
            tokenStatus: 'marketingCampaign{mediaChannel{tokenStatus}}';
            catalogs: {
                edges: {
                    cursor: 'marketingCampaign{mediaChannel{catalogs{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'marketingCampaign{mediaChannel{catalogs{pageInfo{endCursor}}}}';
                    startCursor: 'marketingCampaign{mediaChannel{catalogs{pageInfo{startCursor}}}}';
                    hasNextPage: 'marketingCampaign{mediaChannel{catalogs{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'marketingCampaign{mediaChannel{catalogs{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'marketingCampaign{mediaChannel{catalogs{totalCount}}}';
            };
            marketplace: {
                id: 'marketingCampaign{mediaChannel{marketplace{id}}}';
                creationDate: 'marketingCampaign{mediaChannel{marketplace{creationDate}}}';
                lastChangeDate: 'marketingCampaign{mediaChannel{marketplace{lastChangeDate}}}';
                name: 'marketingCampaign{mediaChannel{marketplace{name}}}';
                systemStatus: 'marketingCampaign{mediaChannel{marketplace{systemStatus}}}';
                errors: 'marketingCampaign{mediaChannel{marketplace{errors}}}';
                organization: {
                    id: 'marketingCampaign{mediaChannel{marketplace{organization{id}}}}';
                    creationDate: 'marketingCampaign{mediaChannel{marketplace{organization{creationDate}}}}';
                    lastChangeDate: 'marketingCampaign{mediaChannel{marketplace{organization{lastChangeDate}}}}';
                    name: 'marketingCampaign{mediaChannel{marketplace{organization{name}}}}';
                    systemStatus: 'marketingCampaign{mediaChannel{marketplace{organization{systemStatus}}}}';
                    errors: 'marketingCampaign{mediaChannel{marketplace{organization{errors}}}}';
                    tier: 'marketingCampaign{mediaChannel{marketplace{organization{tier}}}}';
                };
                mediaChannels: {
                    totalCount: 'marketingCampaign{mediaChannel{marketplace{mediaChannels{totalCount}}}}';
                };
                campaignTemplates: {
                    totalCount: 'marketingCampaign{mediaChannel{marketplace{campaignTemplates{totalCount}}}}';
                };
                vendors: {
                    totalCount: 'marketingCampaign{mediaChannel{marketplace{vendors{totalCount}}}}';
                };
                vendorTokens: {
                    totalCount: 'marketingCampaign{mediaChannel{marketplace{vendorTokens{totalCount}}}}';
                };
                creativeTemplates: {
                    totalCount: 'marketingCampaign{mediaChannel{marketplace{creativeTemplates{totalCount}}}}';
                };
            };
        };
        results: {
            edges: {
                node: {
                    id: 'marketingCampaign{results{edges{node{id}}}}';
                    creationDate: 'marketingCampaign{results{edges{node{creationDate}}}}';
                    lastChangeDate: 'marketingCampaign{results{edges{node{lastChangeDate}}}}';
                    date: 'marketingCampaign{results{edges{node{date}}}}';
                    type: 'marketingCampaign{results{edges{node{type}}}}';
                };
                cursor: 'marketingCampaign{results{edges{cursor}}}';
            };
            pageInfo: {
                endCursor: 'marketingCampaign{results{pageInfo{endCursor}}}';
                startCursor: 'marketingCampaign{results{pageInfo{startCursor}}}';
                hasNextPage: 'marketingCampaign{results{pageInfo{hasNextPage}}}';
                hasPreviousPage: 'marketingCampaign{results{pageInfo{hasPreviousPage}}}';
            };
            totalCount: 'marketingCampaign{results{totalCount}}';
        };
    };
};
export const MarketingAdFields: MarketingAdFields = {
    id: 'id',
    creationDate: 'creationDate',
    lastChangeDate: 'lastChangeDate',
    resultsSource: 'resultsSource',
    vendor: {
        id: 'vendor{id}',
        creationDate: 'vendor{creationDate}',
        lastChangeDate: 'vendor{lastChangeDate}',
        name: 'vendor{name}',
        systemStatus: 'vendor{systemStatus}',
        errors: 'vendor{errors}',
        marketplace: {
            id: 'vendor{marketplace{id}}',
            creationDate: 'vendor{marketplace{creationDate}}',
            lastChangeDate: 'vendor{marketplace{lastChangeDate}}',
            name: 'vendor{marketplace{name}}',
            systemStatus: 'vendor{marketplace{systemStatus}}',
            errors: 'vendor{marketplace{errors}}',
            organization: {
                id: 'vendor{marketplace{organization{id}}}',
                creationDate: 'vendor{marketplace{organization{creationDate}}}',
                lastChangeDate:
                    'vendor{marketplace{organization{lastChangeDate}}}',
                name: 'vendor{marketplace{organization{name}}}',
                systemStatus: 'vendor{marketplace{organization{systemStatus}}}',
                errors: 'vendor{marketplace{organization{errors}}}',
                tier: 'vendor{marketplace{organization{tier}}}',
                users: {
                    totalCount:
                        'vendor{marketplace{organization{users{totalCount}}}}',
                },
                marketplaces: {
                    totalCount:
                        'vendor{marketplace{organization{marketplaces{totalCount}}}}',
                },
            },
            mediaChannels: {
                edges: {
                    cursor: 'vendor{marketplace{mediaChannels{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'vendor{marketplace{mediaChannels{pageInfo{endCursor}}}}',
                    startCursor:
                        'vendor{marketplace{mediaChannels{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'vendor{marketplace{mediaChannels{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'vendor{marketplace{mediaChannels{pageInfo{hasPreviousPage}}}}',
                },
                totalCount: 'vendor{marketplace{mediaChannels{totalCount}}}',
            },
            campaignTemplates: {
                edges: {
                    cursor:
                        'vendor{marketplace{campaignTemplates{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'vendor{marketplace{campaignTemplates{pageInfo{endCursor}}}}',
                    startCursor:
                        'vendor{marketplace{campaignTemplates{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'vendor{marketplace{campaignTemplates{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'vendor{marketplace{campaignTemplates{pageInfo{hasPreviousPage}}}}',
                },
                totalCount:
                    'vendor{marketplace{campaignTemplates{totalCount}}}',
            },
            vendors: {
                edges: {
                    cursor: 'vendor{marketplace{vendors{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'vendor{marketplace{vendors{pageInfo{endCursor}}}}',
                    startCursor:
                        'vendor{marketplace{vendors{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'vendor{marketplace{vendors{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'vendor{marketplace{vendors{pageInfo{hasPreviousPage}}}}',
                },
                totalCount: 'vendor{marketplace{vendors{totalCount}}}',
            },
            vendorTokens: {
                edges: {
                    cursor: 'vendor{marketplace{vendorTokens{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'vendor{marketplace{vendorTokens{pageInfo{endCursor}}}}',
                    startCursor:
                        'vendor{marketplace{vendorTokens{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'vendor{marketplace{vendorTokens{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'vendor{marketplace{vendorTokens{pageInfo{hasPreviousPage}}}}',
                },
                totalCount: 'vendor{marketplace{vendorTokens{totalCount}}}',
            },
            creativeTemplates: {
                edges: {
                    cursor:
                        'vendor{marketplace{creativeTemplates{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'vendor{marketplace{creativeTemplates{pageInfo{endCursor}}}}',
                    startCursor:
                        'vendor{marketplace{creativeTemplates{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'vendor{marketplace{creativeTemplates{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'vendor{marketplace{creativeTemplates{pageInfo{hasPreviousPage}}}}',
                },
                totalCount:
                    'vendor{marketplace{creativeTemplates{totalCount}}}',
            },
        },
        vendorTokens: {
            edges: {
                node: {
                    id: 'vendor{vendorTokens{edges{node{id}}}}',
                    creationDate:
                        'vendor{vendorTokens{edges{node{creationDate}}}}',
                    lastChangeDate:
                        'vendor{vendorTokens{edges{node{lastChangeDate}}}}',
                    token: 'vendor{vendorTokens{edges{node{token}}}}',
                },
                cursor: 'vendor{vendorTokens{edges{cursor}}}',
            },
            pageInfo: {
                endCursor: 'vendor{vendorTokens{pageInfo{endCursor}}}',
                startCursor: 'vendor{vendorTokens{pageInfo{startCursor}}}',
                hasNextPage: 'vendor{vendorTokens{pageInfo{hasNextPage}}}',
                hasPreviousPage:
                    'vendor{vendorTokens{pageInfo{hasPreviousPage}}}',
            },
            totalCount: 'vendor{vendorTokens{totalCount}}',
        },
        products: {
            edges: {
                node: {
                    id: 'vendor{products{edges{node{id}}}}',
                    creationDate: 'vendor{products{edges{node{creationDate}}}}',
                    lastChangeDate:
                        'vendor{products{edges{node{lastChangeDate}}}}',
                    name: 'vendor{products{edges{node{name}}}}',
                    sku: 'vendor{products{edges{node{sku}}}}',
                    remoteState: 'vendor{products{edges{node{remoteState}}}}',
                    metadata: 'vendor{products{edges{node{metadata}}}}',
                    systemStatus: 'vendor{products{edges{node{systemStatus}}}}',
                    errors: 'vendor{products{edges{node{errors}}}}',
                    warnings: 'vendor{products{edges{node{warnings}}}}',
                },
                cursor: 'vendor{products{edges{cursor}}}',
            },
            pageInfo: {
                endCursor: 'vendor{products{pageInfo{endCursor}}}',
                startCursor: 'vendor{products{pageInfo{startCursor}}}',
                hasNextPage: 'vendor{products{pageInfo{hasNextPage}}}',
                hasPreviousPage: 'vendor{products{pageInfo{hasPreviousPage}}}',
            },
            totalCount: 'vendor{products{totalCount}}',
        },
    },
    systemStatus: 'systemStatus',
    errors: 'errors',
    remoteId: 'remoteId',
    preview: 'preview',
    results: {
        edges: {
            node: {
                id: 'results{edges{node{id}}}',
                creationDate: 'results{edges{node{creationDate}}}',
                lastChangeDate: 'results{edges{node{lastChangeDate}}}',
                date: 'results{edges{node{date}}}',
                analytics: {
                    results: 'results{edges{node{analytics{results}}}}',
                    impressions: 'results{edges{node{analytics{impressions}}}}',
                    clicks: 'results{edges{node{analytics{clicks}}}}',
                    spend: 'results{edges{node{analytics{spend}}}}',
                    purchases: 'results{edges{node{analytics{purchases}}}}',
                    purchasesValue:
                        'results{edges{node{analytics{purchasesValue}}}}',
                },
                type: 'results{edges{node{type}}}',
                resource: {
                    id: 'results{edges{node{resource{id}}}}',
                    creationDate:
                        'results{edges{node{resource{creationDate}}}}',
                    lastChangeDate:
                        'results{edges{node{resource{lastChangeDate}}}}',
                    resultsSource:
                        'results{edges{node{resource{resultsSource}}}}',
                    systemStatus:
                        'results{edges{node{resource{systemStatus}}}}',
                    errors: 'results{edges{node{resource{errors}}}}',
                },
                vendor: {
                    id: 'results{edges{node{vendor{id}}}}',
                    creationDate: 'results{edges{node{vendor{creationDate}}}}',
                    lastChangeDate:
                        'results{edges{node{vendor{lastChangeDate}}}}',
                    name: 'results{edges{node{vendor{name}}}}',
                    systemStatus: 'results{edges{node{vendor{systemStatus}}}}',
                    errors: 'results{edges{node{vendor{errors}}}}',
                },
            },
            cursor: 'results{edges{cursor}}',
        },
        pageInfo: {
            endCursor: 'results{pageInfo{endCursor}}',
            startCursor: 'results{pageInfo{startCursor}}',
            hasNextPage: 'results{pageInfo{hasNextPage}}',
            hasPreviousPage: 'results{pageInfo{hasPreviousPage}}',
        },
        totalCount: 'results{totalCount}',
    },
    marketingCampaign: {
        id: 'marketingCampaign{id}',
        creationDate: 'marketingCampaign{creationDate}',
        lastChangeDate: 'marketingCampaign{lastChangeDate}',
        resultsSource: 'marketingCampaign{resultsSource}',
        vendor: {
            id: 'marketingCampaign{vendor{id}}',
            creationDate: 'marketingCampaign{vendor{creationDate}}',
            lastChangeDate: 'marketingCampaign{vendor{lastChangeDate}}',
            name: 'marketingCampaign{vendor{name}}',
            systemStatus: 'marketingCampaign{vendor{systemStatus}}',
            errors: 'marketingCampaign{vendor{errors}}',
            marketplace: {
                id: 'marketingCampaign{vendor{marketplace{id}}}',
                creationDate:
                    'marketingCampaign{vendor{marketplace{creationDate}}}',
                lastChangeDate:
                    'marketingCampaign{vendor{marketplace{lastChangeDate}}}',
                name: 'marketingCampaign{vendor{marketplace{name}}}',
                systemStatus:
                    'marketingCampaign{vendor{marketplace{systemStatus}}}',
                errors: 'marketingCampaign{vendor{marketplace{errors}}}',
                organization: {
                    id:
                        'marketingCampaign{vendor{marketplace{organization{id}}}}',
                    creationDate:
                        'marketingCampaign{vendor{marketplace{organization{creationDate}}}}',
                    lastChangeDate:
                        'marketingCampaign{vendor{marketplace{organization{lastChangeDate}}}}',
                    name:
                        'marketingCampaign{vendor{marketplace{organization{name}}}}',
                    systemStatus:
                        'marketingCampaign{vendor{marketplace{organization{systemStatus}}}}',
                    errors:
                        'marketingCampaign{vendor{marketplace{organization{errors}}}}',
                    tier:
                        'marketingCampaign{vendor{marketplace{organization{tier}}}}',
                },
                mediaChannels: {
                    totalCount:
                        'marketingCampaign{vendor{marketplace{mediaChannels{totalCount}}}}',
                },
                campaignTemplates: {
                    totalCount:
                        'marketingCampaign{vendor{marketplace{campaignTemplates{totalCount}}}}',
                },
                vendors: {
                    totalCount:
                        'marketingCampaign{vendor{marketplace{vendors{totalCount}}}}',
                },
                vendorTokens: {
                    totalCount:
                        'marketingCampaign{vendor{marketplace{vendorTokens{totalCount}}}}',
                },
                creativeTemplates: {
                    totalCount:
                        'marketingCampaign{vendor{marketplace{creativeTemplates{totalCount}}}}',
                },
            },
            vendorTokens: {
                edges: {
                    cursor:
                        'marketingCampaign{vendor{vendorTokens{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'marketingCampaign{vendor{vendorTokens{pageInfo{endCursor}}}}',
                    startCursor:
                        'marketingCampaign{vendor{vendorTokens{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'marketingCampaign{vendor{vendorTokens{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'marketingCampaign{vendor{vendorTokens{pageInfo{hasPreviousPage}}}}',
                },
                totalCount:
                    'marketingCampaign{vendor{vendorTokens{totalCount}}}',
            },
            products: {
                edges: {
                    cursor:
                        'marketingCampaign{vendor{products{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'marketingCampaign{vendor{products{pageInfo{endCursor}}}}',
                    startCursor:
                        'marketingCampaign{vendor{products{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'marketingCampaign{vendor{products{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'marketingCampaign{vendor{products{pageInfo{hasPreviousPage}}}}',
                },
                totalCount: 'marketingCampaign{vendor{products{totalCount}}}',
            },
        },
        systemStatus: 'marketingCampaign{systemStatus}',
        errors: 'marketingCampaign{errors}',
        name: 'marketingCampaign{name}',
        status: 'marketingCampaign{status}',
        creativeSpec: 'marketingCampaign{creativeSpec}',
        runTimeSpec: 'marketingCampaign{runTimeSpec}',
        marketingAds: {
            edges: {
                node: {
                    id: 'marketingCampaign{marketingAds{edges{node{id}}}}',
                    creationDate:
                        'marketingCampaign{marketingAds{edges{node{creationDate}}}}',
                    lastChangeDate:
                        'marketingCampaign{marketingAds{edges{node{lastChangeDate}}}}',
                    resultsSource:
                        'marketingCampaign{marketingAds{edges{node{resultsSource}}}}',
                    systemStatus:
                        'marketingCampaign{marketingAds{edges{node{systemStatus}}}}',
                    errors:
                        'marketingCampaign{marketingAds{edges{node{errors}}}}',
                    remoteId:
                        'marketingCampaign{marketingAds{edges{node{remoteId}}}}',
                    preview:
                        'marketingCampaign{marketingAds{edges{node{preview}}}}',
                },
                cursor: 'marketingCampaign{marketingAds{edges{cursor}}}',
            },
            pageInfo: {
                endCursor:
                    'marketingCampaign{marketingAds{pageInfo{endCursor}}}',
                startCursor:
                    'marketingCampaign{marketingAds{pageInfo{startCursor}}}',
                hasNextPage:
                    'marketingCampaign{marketingAds{pageInfo{hasNextPage}}}',
                hasPreviousPage:
                    'marketingCampaign{marketingAds{pageInfo{hasPreviousPage}}}',
            },
            totalCount: 'marketingCampaign{marketingAds{totalCount}}',
        },
        products: {
            edges: {
                node: {
                    id: 'marketingCampaign{products{edges{node{id}}}}',
                    creationDate:
                        'marketingCampaign{products{edges{node{creationDate}}}}',
                    lastChangeDate:
                        'marketingCampaign{products{edges{node{lastChangeDate}}}}',
                    name: 'marketingCampaign{products{edges{node{name}}}}',
                    sku: 'marketingCampaign{products{edges{node{sku}}}}',
                    remoteState:
                        'marketingCampaign{products{edges{node{remoteState}}}}',
                    metadata:
                        'marketingCampaign{products{edges{node{metadata}}}}',
                    systemStatus:
                        'marketingCampaign{products{edges{node{systemStatus}}}}',
                    errors: 'marketingCampaign{products{edges{node{errors}}}}',
                    warnings:
                        'marketingCampaign{products{edges{node{warnings}}}}',
                },
                cursor: 'marketingCampaign{products{edges{cursor}}}',
            },
            pageInfo: {
                endCursor: 'marketingCampaign{products{pageInfo{endCursor}}}',
                startCursor:
                    'marketingCampaign{products{pageInfo{startCursor}}}',
                hasNextPage:
                    'marketingCampaign{products{pageInfo{hasNextPage}}}',
                hasPreviousPage:
                    'marketingCampaign{products{pageInfo{hasPreviousPage}}}',
            },
            totalCount: 'marketingCampaign{products{totalCount}}',
        },
        catalog: {
            id: 'marketingCampaign{catalog{id}}',
            creationDate: 'marketingCampaign{catalog{creationDate}}',
            lastChangeDate: 'marketingCampaign{catalog{lastChangeDate}}',
            name: 'marketingCampaign{catalog{name}}',
            catalogType: 'marketingCampaign{catalog{catalogType}}',
            remoteId: 'marketingCampaign{catalog{remoteId}}',
            systemStatus: 'marketingCampaign{catalog{systemStatus}}',
            remoteState: 'marketingCampaign{catalog{remoteState}}',
            dataFeedId: 'marketingCampaign{catalog{dataFeedId}}',
            errors: 'marketingCampaign{catalog{errors}}',
            mediaChannel: {
                id: 'marketingCampaign{catalog{mediaChannel{id}}}',
                creationDate:
                    'marketingCampaign{catalog{mediaChannel{creationDate}}}',
                lastChangeDate:
                    'marketingCampaign{catalog{mediaChannel{lastChangeDate}}}',
                name: 'marketingCampaign{catalog{mediaChannel{name}}}',
                systemStatus:
                    'marketingCampaign{catalog{mediaChannel{systemStatus}}}',
                errors: 'marketingCampaign{catalog{mediaChannel{errors}}}',
                platform: 'marketingCampaign{catalog{mediaChannel{platform}}}',
                remoteId: 'marketingCampaign{catalog{mediaChannel{remoteId}}}',
                remoteState:
                    'marketingCampaign{catalog{mediaChannel{remoteState}}}',
                currency: 'marketingCampaign{catalog{mediaChannel{currency}}}',
                currencySymbol:
                    'marketingCampaign{catalog{mediaChannel{currencySymbol}}}',
                currencyOffset:
                    'marketingCampaign{catalog{mediaChannel{currencyOffset}}}',
                timezone: 'marketingCampaign{catalog{mediaChannel{timezone}}}',
                tokenStatus:
                    'marketingCampaign{catalog{mediaChannel{tokenStatus}}}',
                catalogs: {
                    totalCount:
                        'marketingCampaign{catalog{mediaChannel{catalogs{totalCount}}}}',
                },
                marketplace: {
                    id:
                        'marketingCampaign{catalog{mediaChannel{marketplace{id}}}}',
                    creationDate:
                        'marketingCampaign{catalog{mediaChannel{marketplace{creationDate}}}}',
                    lastChangeDate:
                        'marketingCampaign{catalog{mediaChannel{marketplace{lastChangeDate}}}}',
                    name:
                        'marketingCampaign{catalog{mediaChannel{marketplace{name}}}}',
                    systemStatus:
                        'marketingCampaign{catalog{mediaChannel{marketplace{systemStatus}}}}',
                    errors:
                        'marketingCampaign{catalog{mediaChannel{marketplace{errors}}}}',
                },
            },
            products: {
                edges: {
                    cursor:
                        'marketingCampaign{catalog{products{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'marketingCampaign{catalog{products{pageInfo{endCursor}}}}',
                    startCursor:
                        'marketingCampaign{catalog{products{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'marketingCampaign{catalog{products{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'marketingCampaign{catalog{products{pageInfo{hasPreviousPage}}}}',
                },
                totalCount: 'marketingCampaign{catalog{products{totalCount}}}',
            },
        },
        campaignTemplate: {
            id: 'marketingCampaign{campaignTemplate{id}}',
            creationDate: 'marketingCampaign{campaignTemplate{creationDate}}',
            lastChangeDate:
                'marketingCampaign{campaignTemplate{lastChangeDate}}',
            name: 'marketingCampaign{campaignTemplate{name}}',
            description: 'marketingCampaign{campaignTemplate{description}}',
            platform: 'marketingCampaign{campaignTemplate{platform}}',
            remoteId: 'marketingCampaign{campaignTemplate{remoteId}}',
            systemStatus: 'marketingCampaign{campaignTemplate{systemStatus}}',
            errors: 'marketingCampaign{campaignTemplate{errors}}',
            marketplace: {
                id: 'marketingCampaign{campaignTemplate{marketplace{id}}}',
                creationDate:
                    'marketingCampaign{campaignTemplate{marketplace{creationDate}}}',
                lastChangeDate:
                    'marketingCampaign{campaignTemplate{marketplace{lastChangeDate}}}',
                name: 'marketingCampaign{campaignTemplate{marketplace{name}}}',
                systemStatus:
                    'marketingCampaign{campaignTemplate{marketplace{systemStatus}}}',
                errors:
                    'marketingCampaign{campaignTemplate{marketplace{errors}}}',
                organization: {
                    id:
                        'marketingCampaign{campaignTemplate{marketplace{organization{id}}}}',
                    creationDate:
                        'marketingCampaign{campaignTemplate{marketplace{organization{creationDate}}}}',
                    lastChangeDate:
                        'marketingCampaign{campaignTemplate{marketplace{organization{lastChangeDate}}}}',
                    name:
                        'marketingCampaign{campaignTemplate{marketplace{organization{name}}}}',
                    systemStatus:
                        'marketingCampaign{campaignTemplate{marketplace{organization{systemStatus}}}}',
                    errors:
                        'marketingCampaign{campaignTemplate{marketplace{organization{errors}}}}',
                    tier:
                        'marketingCampaign{campaignTemplate{marketplace{organization{tier}}}}',
                },
                mediaChannels: {
                    totalCount:
                        'marketingCampaign{campaignTemplate{marketplace{mediaChannels{totalCount}}}}',
                },
                campaignTemplates: {
                    totalCount:
                        'marketingCampaign{campaignTemplate{marketplace{campaignTemplates{totalCount}}}}',
                },
                vendors: {
                    totalCount:
                        'marketingCampaign{campaignTemplate{marketplace{vendors{totalCount}}}}',
                },
                vendorTokens: {
                    totalCount:
                        'marketingCampaign{campaignTemplate{marketplace{vendorTokens{totalCount}}}}',
                },
                creativeTemplates: {
                    totalCount:
                        'marketingCampaign{campaignTemplate{marketplace{creativeTemplates{totalCount}}}}',
                },
            },
            marketingCampaigns: {
                edges: {
                    cursor:
                        'marketingCampaign{campaignTemplate{marketingCampaigns{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'marketingCampaign{campaignTemplate{marketingCampaigns{pageInfo{endCursor}}}}',
                    startCursor:
                        'marketingCampaign{campaignTemplate{marketingCampaigns{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'marketingCampaign{campaignTemplate{marketingCampaigns{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'marketingCampaign{campaignTemplate{marketingCampaigns{pageInfo{hasPreviousPage}}}}',
                },
                totalCount:
                    'marketingCampaign{campaignTemplate{marketingCampaigns{totalCount}}}',
            },
        },
        mediaChannel: {
            id: 'marketingCampaign{mediaChannel{id}}',
            creationDate: 'marketingCampaign{mediaChannel{creationDate}}',
            lastChangeDate: 'marketingCampaign{mediaChannel{lastChangeDate}}',
            name: 'marketingCampaign{mediaChannel{name}}',
            systemStatus: 'marketingCampaign{mediaChannel{systemStatus}}',
            errors: 'marketingCampaign{mediaChannel{errors}}',
            platform: 'marketingCampaign{mediaChannel{platform}}',
            remoteId: 'marketingCampaign{mediaChannel{remoteId}}',
            remoteState: 'marketingCampaign{mediaChannel{remoteState}}',
            currency: 'marketingCampaign{mediaChannel{currency}}',
            currencySymbol: 'marketingCampaign{mediaChannel{currencySymbol}}',
            currencyOffset: 'marketingCampaign{mediaChannel{currencyOffset}}',
            timezone: 'marketingCampaign{mediaChannel{timezone}}',
            tokenStatus: 'marketingCampaign{mediaChannel{tokenStatus}}',
            catalogs: {
                edges: {
                    cursor:
                        'marketingCampaign{mediaChannel{catalogs{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'marketingCampaign{mediaChannel{catalogs{pageInfo{endCursor}}}}',
                    startCursor:
                        'marketingCampaign{mediaChannel{catalogs{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'marketingCampaign{mediaChannel{catalogs{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'marketingCampaign{mediaChannel{catalogs{pageInfo{hasPreviousPage}}}}',
                },
                totalCount:
                    'marketingCampaign{mediaChannel{catalogs{totalCount}}}',
            },
            marketplace: {
                id: 'marketingCampaign{mediaChannel{marketplace{id}}}',
                creationDate:
                    'marketingCampaign{mediaChannel{marketplace{creationDate}}}',
                lastChangeDate:
                    'marketingCampaign{mediaChannel{marketplace{lastChangeDate}}}',
                name: 'marketingCampaign{mediaChannel{marketplace{name}}}',
                systemStatus:
                    'marketingCampaign{mediaChannel{marketplace{systemStatus}}}',
                errors: 'marketingCampaign{mediaChannel{marketplace{errors}}}',
                organization: {
                    id:
                        'marketingCampaign{mediaChannel{marketplace{organization{id}}}}',
                    creationDate:
                        'marketingCampaign{mediaChannel{marketplace{organization{creationDate}}}}',
                    lastChangeDate:
                        'marketingCampaign{mediaChannel{marketplace{organization{lastChangeDate}}}}',
                    name:
                        'marketingCampaign{mediaChannel{marketplace{organization{name}}}}',
                    systemStatus:
                        'marketingCampaign{mediaChannel{marketplace{organization{systemStatus}}}}',
                    errors:
                        'marketingCampaign{mediaChannel{marketplace{organization{errors}}}}',
                    tier:
                        'marketingCampaign{mediaChannel{marketplace{organization{tier}}}}',
                },
                mediaChannels: {
                    totalCount:
                        'marketingCampaign{mediaChannel{marketplace{mediaChannels{totalCount}}}}',
                },
                campaignTemplates: {
                    totalCount:
                        'marketingCampaign{mediaChannel{marketplace{campaignTemplates{totalCount}}}}',
                },
                vendors: {
                    totalCount:
                        'marketingCampaign{mediaChannel{marketplace{vendors{totalCount}}}}',
                },
                vendorTokens: {
                    totalCount:
                        'marketingCampaign{mediaChannel{marketplace{vendorTokens{totalCount}}}}',
                },
                creativeTemplates: {
                    totalCount:
                        'marketingCampaign{mediaChannel{marketplace{creativeTemplates{totalCount}}}}',
                },
            },
        },
        results: {
            edges: {
                node: {
                    id: 'marketingCampaign{results{edges{node{id}}}}',
                    creationDate:
                        'marketingCampaign{results{edges{node{creationDate}}}}',
                    lastChangeDate:
                        'marketingCampaign{results{edges{node{lastChangeDate}}}}',
                    date: 'marketingCampaign{results{edges{node{date}}}}',
                    type: 'marketingCampaign{results{edges{node{type}}}}',
                },
                cursor: 'marketingCampaign{results{edges{cursor}}}',
            },
            pageInfo: {
                endCursor: 'marketingCampaign{results{pageInfo{endCursor}}}',
                startCursor:
                    'marketingCampaign{results{pageInfo{startCursor}}}',
                hasNextPage:
                    'marketingCampaign{results{pageInfo{hasNextPage}}}',
                hasPreviousPage:
                    'marketingCampaign{results{pageInfo{hasPreviousPage}}}',
            },
            totalCount: 'marketingCampaign{results{totalCount}}',
        },
    },
};
export type MarketingAdField =
    | 'id'
    | 'creationDate'
    | 'lastChangeDate'
    | 'resultsSource'
    | 'vendor{id}'
    | 'vendor{creationDate}'
    | 'vendor{lastChangeDate}'
    | 'vendor{name}'
    | 'vendor{systemStatus}'
    | 'vendor{errors}'
    | 'vendor{marketplace{id}}'
    | 'vendor{marketplace{creationDate}}'
    | 'vendor{marketplace{lastChangeDate}}'
    | 'vendor{marketplace{name}}'
    | 'vendor{marketplace{systemStatus}}'
    | 'vendor{marketplace{errors}}'
    | 'vendor{marketplace{organization{id}}}'
    | 'vendor{marketplace{organization{creationDate}}}'
    | 'vendor{marketplace{organization{lastChangeDate}}}'
    | 'vendor{marketplace{organization{name}}}'
    | 'vendor{marketplace{organization{systemStatus}}}'
    | 'vendor{marketplace{organization{errors}}}'
    | 'vendor{marketplace{organization{tier}}}'
    | 'vendor{marketplace{organization{users{totalCount}}}}'
    | 'vendor{marketplace{organization{marketplaces{totalCount}}}}'
    | 'vendor{marketplace{mediaChannels{edges{cursor}}}}'
    | 'vendor{marketplace{mediaChannels{pageInfo{endCursor}}}}'
    | 'vendor{marketplace{mediaChannels{pageInfo{startCursor}}}}'
    | 'vendor{marketplace{mediaChannels{pageInfo{hasNextPage}}}}'
    | 'vendor{marketplace{mediaChannels{pageInfo{hasPreviousPage}}}}'
    | 'vendor{marketplace{mediaChannels{totalCount}}}'
    | 'vendor{marketplace{campaignTemplates{edges{cursor}}}}'
    | 'vendor{marketplace{campaignTemplates{pageInfo{endCursor}}}}'
    | 'vendor{marketplace{campaignTemplates{pageInfo{startCursor}}}}'
    | 'vendor{marketplace{campaignTemplates{pageInfo{hasNextPage}}}}'
    | 'vendor{marketplace{campaignTemplates{pageInfo{hasPreviousPage}}}}'
    | 'vendor{marketplace{campaignTemplates{totalCount}}}'
    | 'vendor{marketplace{vendors{edges{cursor}}}}'
    | 'vendor{marketplace{vendors{pageInfo{endCursor}}}}'
    | 'vendor{marketplace{vendors{pageInfo{startCursor}}}}'
    | 'vendor{marketplace{vendors{pageInfo{hasNextPage}}}}'
    | 'vendor{marketplace{vendors{pageInfo{hasPreviousPage}}}}'
    | 'vendor{marketplace{vendors{totalCount}}}'
    | 'vendor{marketplace{vendorTokens{edges{cursor}}}}'
    | 'vendor{marketplace{vendorTokens{pageInfo{endCursor}}}}'
    | 'vendor{marketplace{vendorTokens{pageInfo{startCursor}}}}'
    | 'vendor{marketplace{vendorTokens{pageInfo{hasNextPage}}}}'
    | 'vendor{marketplace{vendorTokens{pageInfo{hasPreviousPage}}}}'
    | 'vendor{marketplace{vendorTokens{totalCount}}}'
    | 'vendor{marketplace{creativeTemplates{edges{cursor}}}}'
    | 'vendor{marketplace{creativeTemplates{pageInfo{endCursor}}}}'
    | 'vendor{marketplace{creativeTemplates{pageInfo{startCursor}}}}'
    | 'vendor{marketplace{creativeTemplates{pageInfo{hasNextPage}}}}'
    | 'vendor{marketplace{creativeTemplates{pageInfo{hasPreviousPage}}}}'
    | 'vendor{marketplace{creativeTemplates{totalCount}}}'
    | 'vendor{vendorTokens{edges{node{id}}}}'
    | 'vendor{vendorTokens{edges{node{creationDate}}}}'
    | 'vendor{vendorTokens{edges{node{lastChangeDate}}}}'
    | 'vendor{vendorTokens{edges{node{token}}}}'
    | 'vendor{vendorTokens{edges{cursor}}}'
    | 'vendor{vendorTokens{pageInfo{endCursor}}}'
    | 'vendor{vendorTokens{pageInfo{startCursor}}}'
    | 'vendor{vendorTokens{pageInfo{hasNextPage}}}'
    | 'vendor{vendorTokens{pageInfo{hasPreviousPage}}}'
    | 'vendor{vendorTokens{totalCount}}'
    | 'vendor{products{edges{node{id}}}}'
    | 'vendor{products{edges{node{creationDate}}}}'
    | 'vendor{products{edges{node{lastChangeDate}}}}'
    | 'vendor{products{edges{node{name}}}}'
    | 'vendor{products{edges{node{sku}}}}'
    | 'vendor{products{edges{node{remoteState}}}}'
    | 'vendor{products{edges{node{metadata}}}}'
    | 'vendor{products{edges{node{systemStatus}}}}'
    | 'vendor{products{edges{node{errors}}}}'
    | 'vendor{products{edges{node{warnings}}}}'
    | 'vendor{products{edges{cursor}}}'
    | 'vendor{products{pageInfo{endCursor}}}'
    | 'vendor{products{pageInfo{startCursor}}}'
    | 'vendor{products{pageInfo{hasNextPage}}}'
    | 'vendor{products{pageInfo{hasPreviousPage}}}'
    | 'vendor{products{totalCount}}'
    | 'systemStatus'
    | 'errors'
    | 'remoteId'
    | 'preview'
    | 'results{edges{node{id}}}'
    | 'results{edges{node{creationDate}}}'
    | 'results{edges{node{lastChangeDate}}}'
    | 'results{edges{node{date}}}'
    | 'results{edges{node{analytics{results}}}}'
    | 'results{edges{node{analytics{impressions}}}}'
    | 'results{edges{node{analytics{clicks}}}}'
    | 'results{edges{node{analytics{spend}}}}'
    | 'results{edges{node{analytics{purchases}}}}'
    | 'results{edges{node{analytics{purchasesValue}}}}'
    | 'results{edges{node{type}}}'
    | 'results{edges{node{resource{id}}}}'
    | 'results{edges{node{resource{creationDate}}}}'
    | 'results{edges{node{resource{lastChangeDate}}}}'
    | 'results{edges{node{resource{resultsSource}}}}'
    | 'results{edges{node{resource{systemStatus}}}}'
    | 'results{edges{node{resource{errors}}}}'
    | 'results{edges{node{vendor{id}}}}'
    | 'results{edges{node{vendor{creationDate}}}}'
    | 'results{edges{node{vendor{lastChangeDate}}}}'
    | 'results{edges{node{vendor{name}}}}'
    | 'results{edges{node{vendor{systemStatus}}}}'
    | 'results{edges{node{vendor{errors}}}}'
    | 'results{edges{cursor}}'
    | 'results{pageInfo{endCursor}}'
    | 'results{pageInfo{startCursor}}'
    | 'results{pageInfo{hasNextPage}}'
    | 'results{pageInfo{hasPreviousPage}}'
    | 'results{totalCount}'
    | 'marketingCampaign{id}'
    | 'marketingCampaign{creationDate}'
    | 'marketingCampaign{lastChangeDate}'
    | 'marketingCampaign{resultsSource}'
    | 'marketingCampaign{vendor{id}}'
    | 'marketingCampaign{vendor{creationDate}}'
    | 'marketingCampaign{vendor{lastChangeDate}}'
    | 'marketingCampaign{vendor{name}}'
    | 'marketingCampaign{vendor{systemStatus}}'
    | 'marketingCampaign{vendor{errors}}'
    | 'marketingCampaign{vendor{marketplace{id}}}'
    | 'marketingCampaign{vendor{marketplace{creationDate}}}'
    | 'marketingCampaign{vendor{marketplace{lastChangeDate}}}'
    | 'marketingCampaign{vendor{marketplace{name}}}'
    | 'marketingCampaign{vendor{marketplace{systemStatus}}}'
    | 'marketingCampaign{vendor{marketplace{errors}}}'
    | 'marketingCampaign{vendor{marketplace{organization{id}}}}'
    | 'marketingCampaign{vendor{marketplace{organization{creationDate}}}}'
    | 'marketingCampaign{vendor{marketplace{organization{lastChangeDate}}}}'
    | 'marketingCampaign{vendor{marketplace{organization{name}}}}'
    | 'marketingCampaign{vendor{marketplace{organization{systemStatus}}}}'
    | 'marketingCampaign{vendor{marketplace{organization{errors}}}}'
    | 'marketingCampaign{vendor{marketplace{organization{tier}}}}'
    | 'marketingCampaign{vendor{marketplace{mediaChannels{totalCount}}}}'
    | 'marketingCampaign{vendor{marketplace{campaignTemplates{totalCount}}}}'
    | 'marketingCampaign{vendor{marketplace{vendors{totalCount}}}}'
    | 'marketingCampaign{vendor{marketplace{vendorTokens{totalCount}}}}'
    | 'marketingCampaign{vendor{marketplace{creativeTemplates{totalCount}}}}'
    | 'marketingCampaign{vendor{vendorTokens{edges{cursor}}}}'
    | 'marketingCampaign{vendor{vendorTokens{pageInfo{endCursor}}}}'
    | 'marketingCampaign{vendor{vendorTokens{pageInfo{startCursor}}}}'
    | 'marketingCampaign{vendor{vendorTokens{pageInfo{hasNextPage}}}}'
    | 'marketingCampaign{vendor{vendorTokens{pageInfo{hasPreviousPage}}}}'
    | 'marketingCampaign{vendor{vendorTokens{totalCount}}}'
    | 'marketingCampaign{vendor{products{edges{cursor}}}}'
    | 'marketingCampaign{vendor{products{pageInfo{endCursor}}}}'
    | 'marketingCampaign{vendor{products{pageInfo{startCursor}}}}'
    | 'marketingCampaign{vendor{products{pageInfo{hasNextPage}}}}'
    | 'marketingCampaign{vendor{products{pageInfo{hasPreviousPage}}}}'
    | 'marketingCampaign{vendor{products{totalCount}}}'
    | 'marketingCampaign{systemStatus}'
    | 'marketingCampaign{errors}'
    | 'marketingCampaign{name}'
    | 'marketingCampaign{status}'
    | 'marketingCampaign{creativeSpec}'
    | 'marketingCampaign{runTimeSpec}'
    | 'marketingCampaign{marketingAds{edges{node{id}}}}'
    | 'marketingCampaign{marketingAds{edges{node{creationDate}}}}'
    | 'marketingCampaign{marketingAds{edges{node{lastChangeDate}}}}'
    | 'marketingCampaign{marketingAds{edges{node{resultsSource}}}}'
    | 'marketingCampaign{marketingAds{edges{node{systemStatus}}}}'
    | 'marketingCampaign{marketingAds{edges{node{errors}}}}'
    | 'marketingCampaign{marketingAds{edges{node{remoteId}}}}'
    | 'marketingCampaign{marketingAds{edges{node{preview}}}}'
    | 'marketingCampaign{marketingAds{edges{cursor}}}'
    | 'marketingCampaign{marketingAds{pageInfo{endCursor}}}'
    | 'marketingCampaign{marketingAds{pageInfo{startCursor}}}'
    | 'marketingCampaign{marketingAds{pageInfo{hasNextPage}}}'
    | 'marketingCampaign{marketingAds{pageInfo{hasPreviousPage}}}'
    | 'marketingCampaign{marketingAds{totalCount}}'
    | 'marketingCampaign{products{edges{node{id}}}}'
    | 'marketingCampaign{products{edges{node{creationDate}}}}'
    | 'marketingCampaign{products{edges{node{lastChangeDate}}}}'
    | 'marketingCampaign{products{edges{node{name}}}}'
    | 'marketingCampaign{products{edges{node{sku}}}}'
    | 'marketingCampaign{products{edges{node{remoteState}}}}'
    | 'marketingCampaign{products{edges{node{metadata}}}}'
    | 'marketingCampaign{products{edges{node{systemStatus}}}}'
    | 'marketingCampaign{products{edges{node{errors}}}}'
    | 'marketingCampaign{products{edges{node{warnings}}}}'
    | 'marketingCampaign{products{edges{cursor}}}'
    | 'marketingCampaign{products{pageInfo{endCursor}}}'
    | 'marketingCampaign{products{pageInfo{startCursor}}}'
    | 'marketingCampaign{products{pageInfo{hasNextPage}}}'
    | 'marketingCampaign{products{pageInfo{hasPreviousPage}}}'
    | 'marketingCampaign{products{totalCount}}'
    | 'marketingCampaign{catalog{id}}'
    | 'marketingCampaign{catalog{creationDate}}'
    | 'marketingCampaign{catalog{lastChangeDate}}'
    | 'marketingCampaign{catalog{name}}'
    | 'marketingCampaign{catalog{catalogType}}'
    | 'marketingCampaign{catalog{remoteId}}'
    | 'marketingCampaign{catalog{systemStatus}}'
    | 'marketingCampaign{catalog{remoteState}}'
    | 'marketingCampaign{catalog{dataFeedId}}'
    | 'marketingCampaign{catalog{errors}}'
    | 'marketingCampaign{catalog{mediaChannel{id}}}'
    | 'marketingCampaign{catalog{mediaChannel{creationDate}}}'
    | 'marketingCampaign{catalog{mediaChannel{lastChangeDate}}}'
    | 'marketingCampaign{catalog{mediaChannel{name}}}'
    | 'marketingCampaign{catalog{mediaChannel{systemStatus}}}'
    | 'marketingCampaign{catalog{mediaChannel{errors}}}'
    | 'marketingCampaign{catalog{mediaChannel{platform}}}'
    | 'marketingCampaign{catalog{mediaChannel{remoteId}}}'
    | 'marketingCampaign{catalog{mediaChannel{remoteState}}}'
    | 'marketingCampaign{catalog{mediaChannel{currency}}}'
    | 'marketingCampaign{catalog{mediaChannel{currencySymbol}}}'
    | 'marketingCampaign{catalog{mediaChannel{currencyOffset}}}'
    | 'marketingCampaign{catalog{mediaChannel{timezone}}}'
    | 'marketingCampaign{catalog{mediaChannel{tokenStatus}}}'
    | 'marketingCampaign{catalog{mediaChannel{catalogs{totalCount}}}}'
    | 'marketingCampaign{catalog{mediaChannel{marketplace{id}}}}'
    | 'marketingCampaign{catalog{mediaChannel{marketplace{creationDate}}}}'
    | 'marketingCampaign{catalog{mediaChannel{marketplace{lastChangeDate}}}}'
    | 'marketingCampaign{catalog{mediaChannel{marketplace{name}}}}'
    | 'marketingCampaign{catalog{mediaChannel{marketplace{systemStatus}}}}'
    | 'marketingCampaign{catalog{mediaChannel{marketplace{errors}}}}'
    | 'marketingCampaign{catalog{products{edges{cursor}}}}'
    | 'marketingCampaign{catalog{products{pageInfo{endCursor}}}}'
    | 'marketingCampaign{catalog{products{pageInfo{startCursor}}}}'
    | 'marketingCampaign{catalog{products{pageInfo{hasNextPage}}}}'
    | 'marketingCampaign{catalog{products{pageInfo{hasPreviousPage}}}}'
    | 'marketingCampaign{catalog{products{totalCount}}}'
    | 'marketingCampaign{campaignTemplate{id}}'
    | 'marketingCampaign{campaignTemplate{creationDate}}'
    | 'marketingCampaign{campaignTemplate{lastChangeDate}}'
    | 'marketingCampaign{campaignTemplate{name}}'
    | 'marketingCampaign{campaignTemplate{description}}'
    | 'marketingCampaign{campaignTemplate{platform}}'
    | 'marketingCampaign{campaignTemplate{remoteId}}'
    | 'marketingCampaign{campaignTemplate{systemStatus}}'
    | 'marketingCampaign{campaignTemplate{errors}}'
    | 'marketingCampaign{campaignTemplate{marketplace{id}}}'
    | 'marketingCampaign{campaignTemplate{marketplace{creationDate}}}'
    | 'marketingCampaign{campaignTemplate{marketplace{lastChangeDate}}}'
    | 'marketingCampaign{campaignTemplate{marketplace{name}}}'
    | 'marketingCampaign{campaignTemplate{marketplace{systemStatus}}}'
    | 'marketingCampaign{campaignTemplate{marketplace{errors}}}'
    | 'marketingCampaign{campaignTemplate{marketplace{organization{id}}}}'
    | 'marketingCampaign{campaignTemplate{marketplace{organization{creationDate}}}}'
    | 'marketingCampaign{campaignTemplate{marketplace{organization{lastChangeDate}}}}'
    | 'marketingCampaign{campaignTemplate{marketplace{organization{name}}}}'
    | 'marketingCampaign{campaignTemplate{marketplace{organization{systemStatus}}}}'
    | 'marketingCampaign{campaignTemplate{marketplace{organization{errors}}}}'
    | 'marketingCampaign{campaignTemplate{marketplace{organization{tier}}}}'
    | 'marketingCampaign{campaignTemplate{marketplace{mediaChannels{totalCount}}}}'
    | 'marketingCampaign{campaignTemplate{marketplace{campaignTemplates{totalCount}}}}'
    | 'marketingCampaign{campaignTemplate{marketplace{vendors{totalCount}}}}'
    | 'marketingCampaign{campaignTemplate{marketplace{vendorTokens{totalCount}}}}'
    | 'marketingCampaign{campaignTemplate{marketplace{creativeTemplates{totalCount}}}}'
    | 'marketingCampaign{campaignTemplate{marketingCampaigns{edges{cursor}}}}'
    | 'marketingCampaign{campaignTemplate{marketingCampaigns{pageInfo{endCursor}}}}'
    | 'marketingCampaign{campaignTemplate{marketingCampaigns{pageInfo{startCursor}}}}'
    | 'marketingCampaign{campaignTemplate{marketingCampaigns{pageInfo{hasNextPage}}}}'
    | 'marketingCampaign{campaignTemplate{marketingCampaigns{pageInfo{hasPreviousPage}}}}'
    | 'marketingCampaign{campaignTemplate{marketingCampaigns{totalCount}}}'
    | 'marketingCampaign{mediaChannel{id}}'
    | 'marketingCampaign{mediaChannel{creationDate}}'
    | 'marketingCampaign{mediaChannel{lastChangeDate}}'
    | 'marketingCampaign{mediaChannel{name}}'
    | 'marketingCampaign{mediaChannel{systemStatus}}'
    | 'marketingCampaign{mediaChannel{errors}}'
    | 'marketingCampaign{mediaChannel{platform}}'
    | 'marketingCampaign{mediaChannel{remoteId}}'
    | 'marketingCampaign{mediaChannel{remoteState}}'
    | 'marketingCampaign{mediaChannel{currency}}'
    | 'marketingCampaign{mediaChannel{currencySymbol}}'
    | 'marketingCampaign{mediaChannel{currencyOffset}}'
    | 'marketingCampaign{mediaChannel{timezone}}'
    | 'marketingCampaign{mediaChannel{tokenStatus}}'
    | 'marketingCampaign{mediaChannel{catalogs{edges{cursor}}}}'
    | 'marketingCampaign{mediaChannel{catalogs{pageInfo{endCursor}}}}'
    | 'marketingCampaign{mediaChannel{catalogs{pageInfo{startCursor}}}}'
    | 'marketingCampaign{mediaChannel{catalogs{pageInfo{hasNextPage}}}}'
    | 'marketingCampaign{mediaChannel{catalogs{pageInfo{hasPreviousPage}}}}'
    | 'marketingCampaign{mediaChannel{catalogs{totalCount}}}'
    | 'marketingCampaign{mediaChannel{marketplace{id}}}'
    | 'marketingCampaign{mediaChannel{marketplace{creationDate}}}'
    | 'marketingCampaign{mediaChannel{marketplace{lastChangeDate}}}'
    | 'marketingCampaign{mediaChannel{marketplace{name}}}'
    | 'marketingCampaign{mediaChannel{marketplace{systemStatus}}}'
    | 'marketingCampaign{mediaChannel{marketplace{errors}}}'
    | 'marketingCampaign{mediaChannel{marketplace{organization{id}}}}'
    | 'marketingCampaign{mediaChannel{marketplace{organization{creationDate}}}}'
    | 'marketingCampaign{mediaChannel{marketplace{organization{lastChangeDate}}}}'
    | 'marketingCampaign{mediaChannel{marketplace{organization{name}}}}'
    | 'marketingCampaign{mediaChannel{marketplace{organization{systemStatus}}}}'
    | 'marketingCampaign{mediaChannel{marketplace{organization{errors}}}}'
    | 'marketingCampaign{mediaChannel{marketplace{organization{tier}}}}'
    | 'marketingCampaign{mediaChannel{marketplace{mediaChannels{totalCount}}}}'
    | 'marketingCampaign{mediaChannel{marketplace{campaignTemplates{totalCount}}}}'
    | 'marketingCampaign{mediaChannel{marketplace{vendors{totalCount}}}}'
    | 'marketingCampaign{mediaChannel{marketplace{vendorTokens{totalCount}}}}'
    | 'marketingCampaign{mediaChannel{marketplace{creativeTemplates{totalCount}}}}'
    | 'marketingCampaign{results{edges{node{id}}}}'
    | 'marketingCampaign{results{edges{node{creationDate}}}}'
    | 'marketingCampaign{results{edges{node{lastChangeDate}}}}'
    | 'marketingCampaign{results{edges{node{date}}}}'
    | 'marketingCampaign{results{edges{node{type}}}}'
    | 'marketingCampaign{results{edges{cursor}}}'
    | 'marketingCampaign{results{pageInfo{endCursor}}}'
    | 'marketingCampaign{results{pageInfo{startCursor}}}'
    | 'marketingCampaign{results{pageInfo{hasNextPage}}}'
    | 'marketingCampaign{results{pageInfo{hasPreviousPage}}}'
    | 'marketingCampaign{results{totalCount}}';
export type ResultFields = {
    id: 'id';
    creationDate: 'creationDate';
    lastChangeDate: 'lastChangeDate';
    date: 'date';
    analytics: {
        results: 'analytics{results}';
        impressions: 'analytics{impressions}';
        clicks: 'analytics{clicks}';
        spend: 'analytics{spend}';
        purchases: 'analytics{purchases}';
        purchasesValue: 'analytics{purchasesValue}';
    };
    type: 'type';
    resource: {
        id: 'resource{id}';
        creationDate: 'resource{creationDate}';
        lastChangeDate: 'resource{lastChangeDate}';
        resultsSource: 'resource{resultsSource}';
        vendor: {
            id: 'resource{vendor{id}}';
            creationDate: 'resource{vendor{creationDate}}';
            lastChangeDate: 'resource{vendor{lastChangeDate}}';
            name: 'resource{vendor{name}}';
            systemStatus: 'resource{vendor{systemStatus}}';
            errors: 'resource{vendor{errors}}';
            marketplace: {
                id: 'resource{vendor{marketplace{id}}}';
                creationDate: 'resource{vendor{marketplace{creationDate}}}';
                lastChangeDate: 'resource{vendor{marketplace{lastChangeDate}}}';
                name: 'resource{vendor{marketplace{name}}}';
                systemStatus: 'resource{vendor{marketplace{systemStatus}}}';
                errors: 'resource{vendor{marketplace{errors}}}';
                organization: {
                    id: 'resource{vendor{marketplace{organization{id}}}}';
                    creationDate: 'resource{vendor{marketplace{organization{creationDate}}}}';
                    lastChangeDate: 'resource{vendor{marketplace{organization{lastChangeDate}}}}';
                    name: 'resource{vendor{marketplace{organization{name}}}}';
                    systemStatus: 'resource{vendor{marketplace{organization{systemStatus}}}}';
                    errors: 'resource{vendor{marketplace{organization{errors}}}}';
                    tier: 'resource{vendor{marketplace{organization{tier}}}}';
                };
                mediaChannels: {
                    totalCount: 'resource{vendor{marketplace{mediaChannels{totalCount}}}}';
                };
                campaignTemplates: {
                    totalCount: 'resource{vendor{marketplace{campaignTemplates{totalCount}}}}';
                };
                vendors: {
                    totalCount: 'resource{vendor{marketplace{vendors{totalCount}}}}';
                };
                vendorTokens: {
                    totalCount: 'resource{vendor{marketplace{vendorTokens{totalCount}}}}';
                };
                creativeTemplates: {
                    totalCount: 'resource{vendor{marketplace{creativeTemplates{totalCount}}}}';
                };
            };
            vendorTokens: {
                edges: {
                    cursor: 'resource{vendor{vendorTokens{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'resource{vendor{vendorTokens{pageInfo{endCursor}}}}';
                    startCursor: 'resource{vendor{vendorTokens{pageInfo{startCursor}}}}';
                    hasNextPage: 'resource{vendor{vendorTokens{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'resource{vendor{vendorTokens{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'resource{vendor{vendorTokens{totalCount}}}';
            };
            products: {
                edges: {
                    cursor: 'resource{vendor{products{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'resource{vendor{products{pageInfo{endCursor}}}}';
                    startCursor: 'resource{vendor{products{pageInfo{startCursor}}}}';
                    hasNextPage: 'resource{vendor{products{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'resource{vendor{products{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'resource{vendor{products{totalCount}}}';
            };
        };
        systemStatus: 'resource{systemStatus}';
        errors: 'resource{errors}';
    };
    vendor: {
        id: 'vendor{id}';
        creationDate: 'vendor{creationDate}';
        lastChangeDate: 'vendor{lastChangeDate}';
        name: 'vendor{name}';
        systemStatus: 'vendor{systemStatus}';
        errors: 'vendor{errors}';
        marketplace: {
            id: 'vendor{marketplace{id}}';
            creationDate: 'vendor{marketplace{creationDate}}';
            lastChangeDate: 'vendor{marketplace{lastChangeDate}}';
            name: 'vendor{marketplace{name}}';
            systemStatus: 'vendor{marketplace{systemStatus}}';
            errors: 'vendor{marketplace{errors}}';
            organization: {
                id: 'vendor{marketplace{organization{id}}}';
                creationDate: 'vendor{marketplace{organization{creationDate}}}';
                lastChangeDate: 'vendor{marketplace{organization{lastChangeDate}}}';
                name: 'vendor{marketplace{organization{name}}}';
                systemStatus: 'vendor{marketplace{organization{systemStatus}}}';
                errors: 'vendor{marketplace{organization{errors}}}';
                tier: 'vendor{marketplace{organization{tier}}}';
                users: {
                    totalCount: 'vendor{marketplace{organization{users{totalCount}}}}';
                };
                marketplaces: {
                    totalCount: 'vendor{marketplace{organization{marketplaces{totalCount}}}}';
                };
            };
            mediaChannels: {
                edges: {
                    cursor: 'vendor{marketplace{mediaChannels{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'vendor{marketplace{mediaChannels{pageInfo{endCursor}}}}';
                    startCursor: 'vendor{marketplace{mediaChannels{pageInfo{startCursor}}}}';
                    hasNextPage: 'vendor{marketplace{mediaChannels{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'vendor{marketplace{mediaChannels{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'vendor{marketplace{mediaChannels{totalCount}}}';
            };
            campaignTemplates: {
                edges: {
                    cursor: 'vendor{marketplace{campaignTemplates{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'vendor{marketplace{campaignTemplates{pageInfo{endCursor}}}}';
                    startCursor: 'vendor{marketplace{campaignTemplates{pageInfo{startCursor}}}}';
                    hasNextPage: 'vendor{marketplace{campaignTemplates{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'vendor{marketplace{campaignTemplates{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'vendor{marketplace{campaignTemplates{totalCount}}}';
            };
            vendors: {
                edges: {
                    cursor: 'vendor{marketplace{vendors{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'vendor{marketplace{vendors{pageInfo{endCursor}}}}';
                    startCursor: 'vendor{marketplace{vendors{pageInfo{startCursor}}}}';
                    hasNextPage: 'vendor{marketplace{vendors{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'vendor{marketplace{vendors{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'vendor{marketplace{vendors{totalCount}}}';
            };
            vendorTokens: {
                edges: {
                    cursor: 'vendor{marketplace{vendorTokens{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'vendor{marketplace{vendorTokens{pageInfo{endCursor}}}}';
                    startCursor: 'vendor{marketplace{vendorTokens{pageInfo{startCursor}}}}';
                    hasNextPage: 'vendor{marketplace{vendorTokens{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'vendor{marketplace{vendorTokens{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'vendor{marketplace{vendorTokens{totalCount}}}';
            };
            creativeTemplates: {
                edges: {
                    cursor: 'vendor{marketplace{creativeTemplates{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'vendor{marketplace{creativeTemplates{pageInfo{endCursor}}}}';
                    startCursor: 'vendor{marketplace{creativeTemplates{pageInfo{startCursor}}}}';
                    hasNextPage: 'vendor{marketplace{creativeTemplates{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'vendor{marketplace{creativeTemplates{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'vendor{marketplace{creativeTemplates{totalCount}}}';
            };
        };
        vendorTokens: {
            edges: {
                node: {
                    id: 'vendor{vendorTokens{edges{node{id}}}}';
                    creationDate: 'vendor{vendorTokens{edges{node{creationDate}}}}';
                    lastChangeDate: 'vendor{vendorTokens{edges{node{lastChangeDate}}}}';
                    token: 'vendor{vendorTokens{edges{node{token}}}}';
                };
                cursor: 'vendor{vendorTokens{edges{cursor}}}';
            };
            pageInfo: {
                endCursor: 'vendor{vendorTokens{pageInfo{endCursor}}}';
                startCursor: 'vendor{vendorTokens{pageInfo{startCursor}}}';
                hasNextPage: 'vendor{vendorTokens{pageInfo{hasNextPage}}}';
                hasPreviousPage: 'vendor{vendorTokens{pageInfo{hasPreviousPage}}}';
            };
            totalCount: 'vendor{vendorTokens{totalCount}}';
        };
        products: {
            edges: {
                node: {
                    id: 'vendor{products{edges{node{id}}}}';
                    creationDate: 'vendor{products{edges{node{creationDate}}}}';
                    lastChangeDate: 'vendor{products{edges{node{lastChangeDate}}}}';
                    name: 'vendor{products{edges{node{name}}}}';
                    sku: 'vendor{products{edges{node{sku}}}}';
                    remoteState: 'vendor{products{edges{node{remoteState}}}}';
                    metadata: 'vendor{products{edges{node{metadata}}}}';
                    systemStatus: 'vendor{products{edges{node{systemStatus}}}}';
                    errors: 'vendor{products{edges{node{errors}}}}';
                    warnings: 'vendor{products{edges{node{warnings}}}}';
                };
                cursor: 'vendor{products{edges{cursor}}}';
            };
            pageInfo: {
                endCursor: 'vendor{products{pageInfo{endCursor}}}';
                startCursor: 'vendor{products{pageInfo{startCursor}}}';
                hasNextPage: 'vendor{products{pageInfo{hasNextPage}}}';
                hasPreviousPage: 'vendor{products{pageInfo{hasPreviousPage}}}';
            };
            totalCount: 'vendor{products{totalCount}}';
        };
    };
};
export const ResultFields: ResultFields = {
    id: 'id',
    creationDate: 'creationDate',
    lastChangeDate: 'lastChangeDate',
    date: 'date',
    analytics: {
        results: 'analytics{results}',
        impressions: 'analytics{impressions}',
        clicks: 'analytics{clicks}',
        spend: 'analytics{spend}',
        purchases: 'analytics{purchases}',
        purchasesValue: 'analytics{purchasesValue}',
    },
    type: 'type',
    resource: {
        id: 'resource{id}',
        creationDate: 'resource{creationDate}',
        lastChangeDate: 'resource{lastChangeDate}',
        resultsSource: 'resource{resultsSource}',
        vendor: {
            id: 'resource{vendor{id}}',
            creationDate: 'resource{vendor{creationDate}}',
            lastChangeDate: 'resource{vendor{lastChangeDate}}',
            name: 'resource{vendor{name}}',
            systemStatus: 'resource{vendor{systemStatus}}',
            errors: 'resource{vendor{errors}}',
            marketplace: {
                id: 'resource{vendor{marketplace{id}}}',
                creationDate: 'resource{vendor{marketplace{creationDate}}}',
                lastChangeDate: 'resource{vendor{marketplace{lastChangeDate}}}',
                name: 'resource{vendor{marketplace{name}}}',
                systemStatus: 'resource{vendor{marketplace{systemStatus}}}',
                errors: 'resource{vendor{marketplace{errors}}}',
                organization: {
                    id: 'resource{vendor{marketplace{organization{id}}}}',
                    creationDate:
                        'resource{vendor{marketplace{organization{creationDate}}}}',
                    lastChangeDate:
                        'resource{vendor{marketplace{organization{lastChangeDate}}}}',
                    name: 'resource{vendor{marketplace{organization{name}}}}',
                    systemStatus:
                        'resource{vendor{marketplace{organization{systemStatus}}}}',
                    errors:
                        'resource{vendor{marketplace{organization{errors}}}}',
                    tier: 'resource{vendor{marketplace{organization{tier}}}}',
                },
                mediaChannels: {
                    totalCount:
                        'resource{vendor{marketplace{mediaChannels{totalCount}}}}',
                },
                campaignTemplates: {
                    totalCount:
                        'resource{vendor{marketplace{campaignTemplates{totalCount}}}}',
                },
                vendors: {
                    totalCount:
                        'resource{vendor{marketplace{vendors{totalCount}}}}',
                },
                vendorTokens: {
                    totalCount:
                        'resource{vendor{marketplace{vendorTokens{totalCount}}}}',
                },
                creativeTemplates: {
                    totalCount:
                        'resource{vendor{marketplace{creativeTemplates{totalCount}}}}',
                },
            },
            vendorTokens: {
                edges: {
                    cursor: 'resource{vendor{vendorTokens{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'resource{vendor{vendorTokens{pageInfo{endCursor}}}}',
                    startCursor:
                        'resource{vendor{vendorTokens{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'resource{vendor{vendorTokens{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'resource{vendor{vendorTokens{pageInfo{hasPreviousPage}}}}',
                },
                totalCount: 'resource{vendor{vendorTokens{totalCount}}}',
            },
            products: {
                edges: {
                    cursor: 'resource{vendor{products{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'resource{vendor{products{pageInfo{endCursor}}}}',
                    startCursor:
                        'resource{vendor{products{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'resource{vendor{products{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'resource{vendor{products{pageInfo{hasPreviousPage}}}}',
                },
                totalCount: 'resource{vendor{products{totalCount}}}',
            },
        },
        systemStatus: 'resource{systemStatus}',
        errors: 'resource{errors}',
    },
    vendor: {
        id: 'vendor{id}',
        creationDate: 'vendor{creationDate}',
        lastChangeDate: 'vendor{lastChangeDate}',
        name: 'vendor{name}',
        systemStatus: 'vendor{systemStatus}',
        errors: 'vendor{errors}',
        marketplace: {
            id: 'vendor{marketplace{id}}',
            creationDate: 'vendor{marketplace{creationDate}}',
            lastChangeDate: 'vendor{marketplace{lastChangeDate}}',
            name: 'vendor{marketplace{name}}',
            systemStatus: 'vendor{marketplace{systemStatus}}',
            errors: 'vendor{marketplace{errors}}',
            organization: {
                id: 'vendor{marketplace{organization{id}}}',
                creationDate: 'vendor{marketplace{organization{creationDate}}}',
                lastChangeDate:
                    'vendor{marketplace{organization{lastChangeDate}}}',
                name: 'vendor{marketplace{organization{name}}}',
                systemStatus: 'vendor{marketplace{organization{systemStatus}}}',
                errors: 'vendor{marketplace{organization{errors}}}',
                tier: 'vendor{marketplace{organization{tier}}}',
                users: {
                    totalCount:
                        'vendor{marketplace{organization{users{totalCount}}}}',
                },
                marketplaces: {
                    totalCount:
                        'vendor{marketplace{organization{marketplaces{totalCount}}}}',
                },
            },
            mediaChannels: {
                edges: {
                    cursor: 'vendor{marketplace{mediaChannels{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'vendor{marketplace{mediaChannels{pageInfo{endCursor}}}}',
                    startCursor:
                        'vendor{marketplace{mediaChannels{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'vendor{marketplace{mediaChannels{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'vendor{marketplace{mediaChannels{pageInfo{hasPreviousPage}}}}',
                },
                totalCount: 'vendor{marketplace{mediaChannels{totalCount}}}',
            },
            campaignTemplates: {
                edges: {
                    cursor:
                        'vendor{marketplace{campaignTemplates{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'vendor{marketplace{campaignTemplates{pageInfo{endCursor}}}}',
                    startCursor:
                        'vendor{marketplace{campaignTemplates{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'vendor{marketplace{campaignTemplates{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'vendor{marketplace{campaignTemplates{pageInfo{hasPreviousPage}}}}',
                },
                totalCount:
                    'vendor{marketplace{campaignTemplates{totalCount}}}',
            },
            vendors: {
                edges: {
                    cursor: 'vendor{marketplace{vendors{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'vendor{marketplace{vendors{pageInfo{endCursor}}}}',
                    startCursor:
                        'vendor{marketplace{vendors{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'vendor{marketplace{vendors{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'vendor{marketplace{vendors{pageInfo{hasPreviousPage}}}}',
                },
                totalCount: 'vendor{marketplace{vendors{totalCount}}}',
            },
            vendorTokens: {
                edges: {
                    cursor: 'vendor{marketplace{vendorTokens{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'vendor{marketplace{vendorTokens{pageInfo{endCursor}}}}',
                    startCursor:
                        'vendor{marketplace{vendorTokens{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'vendor{marketplace{vendorTokens{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'vendor{marketplace{vendorTokens{pageInfo{hasPreviousPage}}}}',
                },
                totalCount: 'vendor{marketplace{vendorTokens{totalCount}}}',
            },
            creativeTemplates: {
                edges: {
                    cursor:
                        'vendor{marketplace{creativeTemplates{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'vendor{marketplace{creativeTemplates{pageInfo{endCursor}}}}',
                    startCursor:
                        'vendor{marketplace{creativeTemplates{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'vendor{marketplace{creativeTemplates{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'vendor{marketplace{creativeTemplates{pageInfo{hasPreviousPage}}}}',
                },
                totalCount:
                    'vendor{marketplace{creativeTemplates{totalCount}}}',
            },
        },
        vendorTokens: {
            edges: {
                node: {
                    id: 'vendor{vendorTokens{edges{node{id}}}}',
                    creationDate:
                        'vendor{vendorTokens{edges{node{creationDate}}}}',
                    lastChangeDate:
                        'vendor{vendorTokens{edges{node{lastChangeDate}}}}',
                    token: 'vendor{vendorTokens{edges{node{token}}}}',
                },
                cursor: 'vendor{vendorTokens{edges{cursor}}}',
            },
            pageInfo: {
                endCursor: 'vendor{vendorTokens{pageInfo{endCursor}}}',
                startCursor: 'vendor{vendorTokens{pageInfo{startCursor}}}',
                hasNextPage: 'vendor{vendorTokens{pageInfo{hasNextPage}}}',
                hasPreviousPage:
                    'vendor{vendorTokens{pageInfo{hasPreviousPage}}}',
            },
            totalCount: 'vendor{vendorTokens{totalCount}}',
        },
        products: {
            edges: {
                node: {
                    id: 'vendor{products{edges{node{id}}}}',
                    creationDate: 'vendor{products{edges{node{creationDate}}}}',
                    lastChangeDate:
                        'vendor{products{edges{node{lastChangeDate}}}}',
                    name: 'vendor{products{edges{node{name}}}}',
                    sku: 'vendor{products{edges{node{sku}}}}',
                    remoteState: 'vendor{products{edges{node{remoteState}}}}',
                    metadata: 'vendor{products{edges{node{metadata}}}}',
                    systemStatus: 'vendor{products{edges{node{systemStatus}}}}',
                    errors: 'vendor{products{edges{node{errors}}}}',
                    warnings: 'vendor{products{edges{node{warnings}}}}',
                },
                cursor: 'vendor{products{edges{cursor}}}',
            },
            pageInfo: {
                endCursor: 'vendor{products{pageInfo{endCursor}}}',
                startCursor: 'vendor{products{pageInfo{startCursor}}}',
                hasNextPage: 'vendor{products{pageInfo{hasNextPage}}}',
                hasPreviousPage: 'vendor{products{pageInfo{hasPreviousPage}}}',
            },
            totalCount: 'vendor{products{totalCount}}',
        },
    },
};
export type ResultField =
    | 'id'
    | 'creationDate'
    | 'lastChangeDate'
    | 'date'
    | 'analytics{results}'
    | 'analytics{impressions}'
    | 'analytics{clicks}'
    | 'analytics{spend}'
    | 'analytics{purchases}'
    | 'analytics{purchasesValue}'
    | 'type'
    | 'resource{id}'
    | 'resource{creationDate}'
    | 'resource{lastChangeDate}'
    | 'resource{resultsSource}'
    | 'resource{vendor{id}}'
    | 'resource{vendor{creationDate}}'
    | 'resource{vendor{lastChangeDate}}'
    | 'resource{vendor{name}}'
    | 'resource{vendor{systemStatus}}'
    | 'resource{vendor{errors}}'
    | 'resource{vendor{marketplace{id}}}'
    | 'resource{vendor{marketplace{creationDate}}}'
    | 'resource{vendor{marketplace{lastChangeDate}}}'
    | 'resource{vendor{marketplace{name}}}'
    | 'resource{vendor{marketplace{systemStatus}}}'
    | 'resource{vendor{marketplace{errors}}}'
    | 'resource{vendor{marketplace{organization{id}}}}'
    | 'resource{vendor{marketplace{organization{creationDate}}}}'
    | 'resource{vendor{marketplace{organization{lastChangeDate}}}}'
    | 'resource{vendor{marketplace{organization{name}}}}'
    | 'resource{vendor{marketplace{organization{systemStatus}}}}'
    | 'resource{vendor{marketplace{organization{errors}}}}'
    | 'resource{vendor{marketplace{organization{tier}}}}'
    | 'resource{vendor{marketplace{mediaChannels{totalCount}}}}'
    | 'resource{vendor{marketplace{campaignTemplates{totalCount}}}}'
    | 'resource{vendor{marketplace{vendors{totalCount}}}}'
    | 'resource{vendor{marketplace{vendorTokens{totalCount}}}}'
    | 'resource{vendor{marketplace{creativeTemplates{totalCount}}}}'
    | 'resource{vendor{vendorTokens{edges{cursor}}}}'
    | 'resource{vendor{vendorTokens{pageInfo{endCursor}}}}'
    | 'resource{vendor{vendorTokens{pageInfo{startCursor}}}}'
    | 'resource{vendor{vendorTokens{pageInfo{hasNextPage}}}}'
    | 'resource{vendor{vendorTokens{pageInfo{hasPreviousPage}}}}'
    | 'resource{vendor{vendorTokens{totalCount}}}'
    | 'resource{vendor{products{edges{cursor}}}}'
    | 'resource{vendor{products{pageInfo{endCursor}}}}'
    | 'resource{vendor{products{pageInfo{startCursor}}}}'
    | 'resource{vendor{products{pageInfo{hasNextPage}}}}'
    | 'resource{vendor{products{pageInfo{hasPreviousPage}}}}'
    | 'resource{vendor{products{totalCount}}}'
    | 'resource{systemStatus}'
    | 'resource{errors}'
    | 'vendor{id}'
    | 'vendor{creationDate}'
    | 'vendor{lastChangeDate}'
    | 'vendor{name}'
    | 'vendor{systemStatus}'
    | 'vendor{errors}'
    | 'vendor{marketplace{id}}'
    | 'vendor{marketplace{creationDate}}'
    | 'vendor{marketplace{lastChangeDate}}'
    | 'vendor{marketplace{name}}'
    | 'vendor{marketplace{systemStatus}}'
    | 'vendor{marketplace{errors}}'
    | 'vendor{marketplace{organization{id}}}'
    | 'vendor{marketplace{organization{creationDate}}}'
    | 'vendor{marketplace{organization{lastChangeDate}}}'
    | 'vendor{marketplace{organization{name}}}'
    | 'vendor{marketplace{organization{systemStatus}}}'
    | 'vendor{marketplace{organization{errors}}}'
    | 'vendor{marketplace{organization{tier}}}'
    | 'vendor{marketplace{organization{users{totalCount}}}}'
    | 'vendor{marketplace{organization{marketplaces{totalCount}}}}'
    | 'vendor{marketplace{mediaChannels{edges{cursor}}}}'
    | 'vendor{marketplace{mediaChannels{pageInfo{endCursor}}}}'
    | 'vendor{marketplace{mediaChannels{pageInfo{startCursor}}}}'
    | 'vendor{marketplace{mediaChannels{pageInfo{hasNextPage}}}}'
    | 'vendor{marketplace{mediaChannels{pageInfo{hasPreviousPage}}}}'
    | 'vendor{marketplace{mediaChannels{totalCount}}}'
    | 'vendor{marketplace{campaignTemplates{edges{cursor}}}}'
    | 'vendor{marketplace{campaignTemplates{pageInfo{endCursor}}}}'
    | 'vendor{marketplace{campaignTemplates{pageInfo{startCursor}}}}'
    | 'vendor{marketplace{campaignTemplates{pageInfo{hasNextPage}}}}'
    | 'vendor{marketplace{campaignTemplates{pageInfo{hasPreviousPage}}}}'
    | 'vendor{marketplace{campaignTemplates{totalCount}}}'
    | 'vendor{marketplace{vendors{edges{cursor}}}}'
    | 'vendor{marketplace{vendors{pageInfo{endCursor}}}}'
    | 'vendor{marketplace{vendors{pageInfo{startCursor}}}}'
    | 'vendor{marketplace{vendors{pageInfo{hasNextPage}}}}'
    | 'vendor{marketplace{vendors{pageInfo{hasPreviousPage}}}}'
    | 'vendor{marketplace{vendors{totalCount}}}'
    | 'vendor{marketplace{vendorTokens{edges{cursor}}}}'
    | 'vendor{marketplace{vendorTokens{pageInfo{endCursor}}}}'
    | 'vendor{marketplace{vendorTokens{pageInfo{startCursor}}}}'
    | 'vendor{marketplace{vendorTokens{pageInfo{hasNextPage}}}}'
    | 'vendor{marketplace{vendorTokens{pageInfo{hasPreviousPage}}}}'
    | 'vendor{marketplace{vendorTokens{totalCount}}}'
    | 'vendor{marketplace{creativeTemplates{edges{cursor}}}}'
    | 'vendor{marketplace{creativeTemplates{pageInfo{endCursor}}}}'
    | 'vendor{marketplace{creativeTemplates{pageInfo{startCursor}}}}'
    | 'vendor{marketplace{creativeTemplates{pageInfo{hasNextPage}}}}'
    | 'vendor{marketplace{creativeTemplates{pageInfo{hasPreviousPage}}}}'
    | 'vendor{marketplace{creativeTemplates{totalCount}}}'
    | 'vendor{vendorTokens{edges{node{id}}}}'
    | 'vendor{vendorTokens{edges{node{creationDate}}}}'
    | 'vendor{vendorTokens{edges{node{lastChangeDate}}}}'
    | 'vendor{vendorTokens{edges{node{token}}}}'
    | 'vendor{vendorTokens{edges{cursor}}}'
    | 'vendor{vendorTokens{pageInfo{endCursor}}}'
    | 'vendor{vendorTokens{pageInfo{startCursor}}}'
    | 'vendor{vendorTokens{pageInfo{hasNextPage}}}'
    | 'vendor{vendorTokens{pageInfo{hasPreviousPage}}}'
    | 'vendor{vendorTokens{totalCount}}'
    | 'vendor{products{edges{node{id}}}}'
    | 'vendor{products{edges{node{creationDate}}}}'
    | 'vendor{products{edges{node{lastChangeDate}}}}'
    | 'vendor{products{edges{node{name}}}}'
    | 'vendor{products{edges{node{sku}}}}'
    | 'vendor{products{edges{node{remoteState}}}}'
    | 'vendor{products{edges{node{metadata}}}}'
    | 'vendor{products{edges{node{systemStatus}}}}'
    | 'vendor{products{edges{node{errors}}}}'
    | 'vendor{products{edges{node{warnings}}}}'
    | 'vendor{products{edges{cursor}}}'
    | 'vendor{products{pageInfo{endCursor}}}'
    | 'vendor{products{pageInfo{startCursor}}}'
    | 'vendor{products{pageInfo{hasNextPage}}}'
    | 'vendor{products{pageInfo{hasPreviousPage}}}'
    | 'vendor{products{totalCount}}';
export type CreativeTemplateFields = {
    id: 'id';
    creationDate: 'creationDate';
    lastChangeDate: 'lastChangeDate';
    name: 'name';
    height: 'height';
    width: 'width';
    systemStatus: 'systemStatus';
    errors: 'errors';
    marketplace: {
        id: 'marketplace{id}';
        creationDate: 'marketplace{creationDate}';
        lastChangeDate: 'marketplace{lastChangeDate}';
        name: 'marketplace{name}';
        systemStatus: 'marketplace{systemStatus}';
        errors: 'marketplace{errors}';
        organization: {
            id: 'marketplace{organization{id}}';
            creationDate: 'marketplace{organization{creationDate}}';
            lastChangeDate: 'marketplace{organization{lastChangeDate}}';
            name: 'marketplace{organization{name}}';
            systemStatus: 'marketplace{organization{systemStatus}}';
            errors: 'marketplace{organization{errors}}';
            tier: 'marketplace{organization{tier}}';
            users: {
                edges: {
                    cursor: 'marketplace{organization{users{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'marketplace{organization{users{pageInfo{endCursor}}}}';
                    startCursor: 'marketplace{organization{users{pageInfo{startCursor}}}}';
                    hasNextPage: 'marketplace{organization{users{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'marketplace{organization{users{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'marketplace{organization{users{totalCount}}}';
            };
            marketplaces: {
                edges: {
                    cursor: 'marketplace{organization{marketplaces{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'marketplace{organization{marketplaces{pageInfo{endCursor}}}}';
                    startCursor: 'marketplace{organization{marketplaces{pageInfo{startCursor}}}}';
                    hasNextPage: 'marketplace{organization{marketplaces{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'marketplace{organization{marketplaces{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'marketplace{organization{marketplaces{totalCount}}}';
            };
        };
        mediaChannels: {
            edges: {
                node: {
                    id: 'marketplace{mediaChannels{edges{node{id}}}}';
                    creationDate: 'marketplace{mediaChannels{edges{node{creationDate}}}}';
                    lastChangeDate: 'marketplace{mediaChannels{edges{node{lastChangeDate}}}}';
                    name: 'marketplace{mediaChannels{edges{node{name}}}}';
                    systemStatus: 'marketplace{mediaChannels{edges{node{systemStatus}}}}';
                    errors: 'marketplace{mediaChannels{edges{node{errors}}}}';
                    platform: 'marketplace{mediaChannels{edges{node{platform}}}}';
                    remoteId: 'marketplace{mediaChannels{edges{node{remoteId}}}}';
                    remoteState: 'marketplace{mediaChannels{edges{node{remoteState}}}}';
                    currency: 'marketplace{mediaChannels{edges{node{currency}}}}';
                    currencySymbol: 'marketplace{mediaChannels{edges{node{currencySymbol}}}}';
                    currencyOffset: 'marketplace{mediaChannels{edges{node{currencyOffset}}}}';
                    timezone: 'marketplace{mediaChannels{edges{node{timezone}}}}';
                    tokenStatus: 'marketplace{mediaChannels{edges{node{tokenStatus}}}}';
                };
                cursor: 'marketplace{mediaChannels{edges{cursor}}}';
            };
            pageInfo: {
                endCursor: 'marketplace{mediaChannels{pageInfo{endCursor}}}';
                startCursor: 'marketplace{mediaChannels{pageInfo{startCursor}}}';
                hasNextPage: 'marketplace{mediaChannels{pageInfo{hasNextPage}}}';
                hasPreviousPage: 'marketplace{mediaChannels{pageInfo{hasPreviousPage}}}';
            };
            totalCount: 'marketplace{mediaChannels{totalCount}}';
        };
        campaignTemplates: {
            edges: {
                node: {
                    id: 'marketplace{campaignTemplates{edges{node{id}}}}';
                    creationDate: 'marketplace{campaignTemplates{edges{node{creationDate}}}}';
                    lastChangeDate: 'marketplace{campaignTemplates{edges{node{lastChangeDate}}}}';
                    name: 'marketplace{campaignTemplates{edges{node{name}}}}';
                    description: 'marketplace{campaignTemplates{edges{node{description}}}}';
                    platform: 'marketplace{campaignTemplates{edges{node{platform}}}}';
                    remoteId: 'marketplace{campaignTemplates{edges{node{remoteId}}}}';
                    systemStatus: 'marketplace{campaignTemplates{edges{node{systemStatus}}}}';
                    errors: 'marketplace{campaignTemplates{edges{node{errors}}}}';
                };
                cursor: 'marketplace{campaignTemplates{edges{cursor}}}';
            };
            pageInfo: {
                endCursor: 'marketplace{campaignTemplates{pageInfo{endCursor}}}';
                startCursor: 'marketplace{campaignTemplates{pageInfo{startCursor}}}';
                hasNextPage: 'marketplace{campaignTemplates{pageInfo{hasNextPage}}}';
                hasPreviousPage: 'marketplace{campaignTemplates{pageInfo{hasPreviousPage}}}';
            };
            totalCount: 'marketplace{campaignTemplates{totalCount}}';
        };
        vendors: {
            edges: {
                node: {
                    id: 'marketplace{vendors{edges{node{id}}}}';
                    creationDate: 'marketplace{vendors{edges{node{creationDate}}}}';
                    lastChangeDate: 'marketplace{vendors{edges{node{lastChangeDate}}}}';
                    name: 'marketplace{vendors{edges{node{name}}}}';
                    systemStatus: 'marketplace{vendors{edges{node{systemStatus}}}}';
                    errors: 'marketplace{vendors{edges{node{errors}}}}';
                };
                cursor: 'marketplace{vendors{edges{cursor}}}';
            };
            pageInfo: {
                endCursor: 'marketplace{vendors{pageInfo{endCursor}}}';
                startCursor: 'marketplace{vendors{pageInfo{startCursor}}}';
                hasNextPage: 'marketplace{vendors{pageInfo{hasNextPage}}}';
                hasPreviousPage: 'marketplace{vendors{pageInfo{hasPreviousPage}}}';
            };
            totalCount: 'marketplace{vendors{totalCount}}';
        };
        vendorTokens: {
            edges: {
                node: {
                    id: 'marketplace{vendorTokens{edges{node{id}}}}';
                    creationDate: 'marketplace{vendorTokens{edges{node{creationDate}}}}';
                    lastChangeDate: 'marketplace{vendorTokens{edges{node{lastChangeDate}}}}';
                    token: 'marketplace{vendorTokens{edges{node{token}}}}';
                };
                cursor: 'marketplace{vendorTokens{edges{cursor}}}';
            };
            pageInfo: {
                endCursor: 'marketplace{vendorTokens{pageInfo{endCursor}}}';
                startCursor: 'marketplace{vendorTokens{pageInfo{startCursor}}}';
                hasNextPage: 'marketplace{vendorTokens{pageInfo{hasNextPage}}}';
                hasPreviousPage: 'marketplace{vendorTokens{pageInfo{hasPreviousPage}}}';
            };
            totalCount: 'marketplace{vendorTokens{totalCount}}';
        };
        creativeTemplates: {
            edges: {
                node: {
                    id: 'marketplace{creativeTemplates{edges{node{id}}}}';
                    creationDate: 'marketplace{creativeTemplates{edges{node{creationDate}}}}';
                    lastChangeDate: 'marketplace{creativeTemplates{edges{node{lastChangeDate}}}}';
                    name: 'marketplace{creativeTemplates{edges{node{name}}}}';
                    height: 'marketplace{creativeTemplates{edges{node{height}}}}';
                    width: 'marketplace{creativeTemplates{edges{node{width}}}}';
                    systemStatus: 'marketplace{creativeTemplates{edges{node{systemStatus}}}}';
                    errors: 'marketplace{creativeTemplates{edges{node{errors}}}}';
                };
                cursor: 'marketplace{creativeTemplates{edges{cursor}}}';
            };
            pageInfo: {
                endCursor: 'marketplace{creativeTemplates{pageInfo{endCursor}}}';
                startCursor: 'marketplace{creativeTemplates{pageInfo{startCursor}}}';
                hasNextPage: 'marketplace{creativeTemplates{pageInfo{hasNextPage}}}';
                hasPreviousPage: 'marketplace{creativeTemplates{pageInfo{hasPreviousPage}}}';
            };
            totalCount: 'marketplace{creativeTemplates{totalCount}}';
        };
    };
    creativeLayers: {
        edges: {
            node: {
                id: 'creativeLayers{edges{node{id}}}';
                creationDate: 'creativeLayers{edges{node{creationDate}}}';
                lastChangeDate: 'creativeLayers{edges{node{lastChangeDate}}}';
                name: 'creativeLayers{edges{node{name}}}';
                height: 'creativeLayers{edges{node{height}}}';
                width: 'creativeLayers{edges{node{width}}}';
                x: 'creativeLayers{edges{node{x}}}';
                y: 'creativeLayers{edges{node{y}}}';
                order: 'creativeLayers{edges{node{order}}}';
                type: 'creativeLayers{edges{node{type}}}';
                properties: 'creativeLayers{edges{node{properties}}}';
                systemStatus: 'creativeLayers{edges{node{systemStatus}}}';
                errors: 'creativeLayers{edges{node{errors}}}';
                creativeTemplate: {
                    id: 'creativeLayers{edges{node{creativeTemplate{id}}}}';
                    creationDate: 'creativeLayers{edges{node{creativeTemplate{creationDate}}}}';
                    lastChangeDate: 'creativeLayers{edges{node{creativeTemplate{lastChangeDate}}}}';
                    name: 'creativeLayers{edges{node{creativeTemplate{name}}}}';
                    height: 'creativeLayers{edges{node{creativeTemplate{height}}}}';
                    width: 'creativeLayers{edges{node{creativeTemplate{width}}}}';
                    systemStatus: 'creativeLayers{edges{node{creativeTemplate{systemStatus}}}}';
                    errors: 'creativeLayers{edges{node{creativeTemplate{errors}}}}';
                };
            };
            cursor: 'creativeLayers{edges{cursor}}';
        };
        pageInfo: {
            endCursor: 'creativeLayers{pageInfo{endCursor}}';
            startCursor: 'creativeLayers{pageInfo{startCursor}}';
            hasNextPage: 'creativeLayers{pageInfo{hasNextPage}}';
            hasPreviousPage: 'creativeLayers{pageInfo{hasPreviousPage}}';
        };
        totalCount: 'creativeLayers{totalCount}';
    };
};
export const CreativeTemplateFields: CreativeTemplateFields = {
    id: 'id',
    creationDate: 'creationDate',
    lastChangeDate: 'lastChangeDate',
    name: 'name',
    height: 'height',
    width: 'width',
    systemStatus: 'systemStatus',
    errors: 'errors',
    marketplace: {
        id: 'marketplace{id}',
        creationDate: 'marketplace{creationDate}',
        lastChangeDate: 'marketplace{lastChangeDate}',
        name: 'marketplace{name}',
        systemStatus: 'marketplace{systemStatus}',
        errors: 'marketplace{errors}',
        organization: {
            id: 'marketplace{organization{id}}',
            creationDate: 'marketplace{organization{creationDate}}',
            lastChangeDate: 'marketplace{organization{lastChangeDate}}',
            name: 'marketplace{organization{name}}',
            systemStatus: 'marketplace{organization{systemStatus}}',
            errors: 'marketplace{organization{errors}}',
            tier: 'marketplace{organization{tier}}',
            users: {
                edges: {
                    cursor: 'marketplace{organization{users{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'marketplace{organization{users{pageInfo{endCursor}}}}',
                    startCursor:
                        'marketplace{organization{users{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'marketplace{organization{users{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'marketplace{organization{users{pageInfo{hasPreviousPage}}}}',
                },
                totalCount: 'marketplace{organization{users{totalCount}}}',
            },
            marketplaces: {
                edges: {
                    cursor:
                        'marketplace{organization{marketplaces{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'marketplace{organization{marketplaces{pageInfo{endCursor}}}}',
                    startCursor:
                        'marketplace{organization{marketplaces{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'marketplace{organization{marketplaces{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'marketplace{organization{marketplaces{pageInfo{hasPreviousPage}}}}',
                },
                totalCount:
                    'marketplace{organization{marketplaces{totalCount}}}',
            },
        },
        mediaChannels: {
            edges: {
                node: {
                    id: 'marketplace{mediaChannels{edges{node{id}}}}',
                    creationDate:
                        'marketplace{mediaChannels{edges{node{creationDate}}}}',
                    lastChangeDate:
                        'marketplace{mediaChannels{edges{node{lastChangeDate}}}}',
                    name: 'marketplace{mediaChannels{edges{node{name}}}}',
                    systemStatus:
                        'marketplace{mediaChannels{edges{node{systemStatus}}}}',
                    errors: 'marketplace{mediaChannels{edges{node{errors}}}}',
                    platform:
                        'marketplace{mediaChannels{edges{node{platform}}}}',
                    remoteId:
                        'marketplace{mediaChannels{edges{node{remoteId}}}}',
                    remoteState:
                        'marketplace{mediaChannels{edges{node{remoteState}}}}',
                    currency:
                        'marketplace{mediaChannels{edges{node{currency}}}}',
                    currencySymbol:
                        'marketplace{mediaChannels{edges{node{currencySymbol}}}}',
                    currencyOffset:
                        'marketplace{mediaChannels{edges{node{currencyOffset}}}}',
                    timezone:
                        'marketplace{mediaChannels{edges{node{timezone}}}}',
                    tokenStatus:
                        'marketplace{mediaChannels{edges{node{tokenStatus}}}}',
                },
                cursor: 'marketplace{mediaChannels{edges{cursor}}}',
            },
            pageInfo: {
                endCursor: 'marketplace{mediaChannels{pageInfo{endCursor}}}',
                startCursor:
                    'marketplace{mediaChannels{pageInfo{startCursor}}}',
                hasNextPage:
                    'marketplace{mediaChannels{pageInfo{hasNextPage}}}',
                hasPreviousPage:
                    'marketplace{mediaChannels{pageInfo{hasPreviousPage}}}',
            },
            totalCount: 'marketplace{mediaChannels{totalCount}}',
        },
        campaignTemplates: {
            edges: {
                node: {
                    id: 'marketplace{campaignTemplates{edges{node{id}}}}',
                    creationDate:
                        'marketplace{campaignTemplates{edges{node{creationDate}}}}',
                    lastChangeDate:
                        'marketplace{campaignTemplates{edges{node{lastChangeDate}}}}',
                    name: 'marketplace{campaignTemplates{edges{node{name}}}}',
                    description:
                        'marketplace{campaignTemplates{edges{node{description}}}}',
                    platform:
                        'marketplace{campaignTemplates{edges{node{platform}}}}',
                    remoteId:
                        'marketplace{campaignTemplates{edges{node{remoteId}}}}',
                    systemStatus:
                        'marketplace{campaignTemplates{edges{node{systemStatus}}}}',
                    errors:
                        'marketplace{campaignTemplates{edges{node{errors}}}}',
                },
                cursor: 'marketplace{campaignTemplates{edges{cursor}}}',
            },
            pageInfo: {
                endCursor:
                    'marketplace{campaignTemplates{pageInfo{endCursor}}}',
                startCursor:
                    'marketplace{campaignTemplates{pageInfo{startCursor}}}',
                hasNextPage:
                    'marketplace{campaignTemplates{pageInfo{hasNextPage}}}',
                hasPreviousPage:
                    'marketplace{campaignTemplates{pageInfo{hasPreviousPage}}}',
            },
            totalCount: 'marketplace{campaignTemplates{totalCount}}',
        },
        vendors: {
            edges: {
                node: {
                    id: 'marketplace{vendors{edges{node{id}}}}',
                    creationDate:
                        'marketplace{vendors{edges{node{creationDate}}}}',
                    lastChangeDate:
                        'marketplace{vendors{edges{node{lastChangeDate}}}}',
                    name: 'marketplace{vendors{edges{node{name}}}}',
                    systemStatus:
                        'marketplace{vendors{edges{node{systemStatus}}}}',
                    errors: 'marketplace{vendors{edges{node{errors}}}}',
                },
                cursor: 'marketplace{vendors{edges{cursor}}}',
            },
            pageInfo: {
                endCursor: 'marketplace{vendors{pageInfo{endCursor}}}',
                startCursor: 'marketplace{vendors{pageInfo{startCursor}}}',
                hasNextPage: 'marketplace{vendors{pageInfo{hasNextPage}}}',
                hasPreviousPage:
                    'marketplace{vendors{pageInfo{hasPreviousPage}}}',
            },
            totalCount: 'marketplace{vendors{totalCount}}',
        },
        vendorTokens: {
            edges: {
                node: {
                    id: 'marketplace{vendorTokens{edges{node{id}}}}',
                    creationDate:
                        'marketplace{vendorTokens{edges{node{creationDate}}}}',
                    lastChangeDate:
                        'marketplace{vendorTokens{edges{node{lastChangeDate}}}}',
                    token: 'marketplace{vendorTokens{edges{node{token}}}}',
                },
                cursor: 'marketplace{vendorTokens{edges{cursor}}}',
            },
            pageInfo: {
                endCursor: 'marketplace{vendorTokens{pageInfo{endCursor}}}',
                startCursor: 'marketplace{vendorTokens{pageInfo{startCursor}}}',
                hasNextPage: 'marketplace{vendorTokens{pageInfo{hasNextPage}}}',
                hasPreviousPage:
                    'marketplace{vendorTokens{pageInfo{hasPreviousPage}}}',
            },
            totalCount: 'marketplace{vendorTokens{totalCount}}',
        },
        creativeTemplates: {
            edges: {
                node: {
                    id: 'marketplace{creativeTemplates{edges{node{id}}}}',
                    creationDate:
                        'marketplace{creativeTemplates{edges{node{creationDate}}}}',
                    lastChangeDate:
                        'marketplace{creativeTemplates{edges{node{lastChangeDate}}}}',
                    name: 'marketplace{creativeTemplates{edges{node{name}}}}',
                    height:
                        'marketplace{creativeTemplates{edges{node{height}}}}',
                    width: 'marketplace{creativeTemplates{edges{node{width}}}}',
                    systemStatus:
                        'marketplace{creativeTemplates{edges{node{systemStatus}}}}',
                    errors:
                        'marketplace{creativeTemplates{edges{node{errors}}}}',
                },
                cursor: 'marketplace{creativeTemplates{edges{cursor}}}',
            },
            pageInfo: {
                endCursor:
                    'marketplace{creativeTemplates{pageInfo{endCursor}}}',
                startCursor:
                    'marketplace{creativeTemplates{pageInfo{startCursor}}}',
                hasNextPage:
                    'marketplace{creativeTemplates{pageInfo{hasNextPage}}}',
                hasPreviousPage:
                    'marketplace{creativeTemplates{pageInfo{hasPreviousPage}}}',
            },
            totalCount: 'marketplace{creativeTemplates{totalCount}}',
        },
    },
    creativeLayers: {
        edges: {
            node: {
                id: 'creativeLayers{edges{node{id}}}',
                creationDate: 'creativeLayers{edges{node{creationDate}}}',
                lastChangeDate: 'creativeLayers{edges{node{lastChangeDate}}}',
                name: 'creativeLayers{edges{node{name}}}',
                height: 'creativeLayers{edges{node{height}}}',
                width: 'creativeLayers{edges{node{width}}}',
                x: 'creativeLayers{edges{node{x}}}',
                y: 'creativeLayers{edges{node{y}}}',
                order: 'creativeLayers{edges{node{order}}}',
                type: 'creativeLayers{edges{node{type}}}',
                properties: 'creativeLayers{edges{node{properties}}}',
                systemStatus: 'creativeLayers{edges{node{systemStatus}}}',
                errors: 'creativeLayers{edges{node{errors}}}',
                creativeTemplate: {
                    id: 'creativeLayers{edges{node{creativeTemplate{id}}}}',
                    creationDate:
                        'creativeLayers{edges{node{creativeTemplate{creationDate}}}}',
                    lastChangeDate:
                        'creativeLayers{edges{node{creativeTemplate{lastChangeDate}}}}',
                    name: 'creativeLayers{edges{node{creativeTemplate{name}}}}',
                    height:
                        'creativeLayers{edges{node{creativeTemplate{height}}}}',
                    width:
                        'creativeLayers{edges{node{creativeTemplate{width}}}}',
                    systemStatus:
                        'creativeLayers{edges{node{creativeTemplate{systemStatus}}}}',
                    errors:
                        'creativeLayers{edges{node{creativeTemplate{errors}}}}',
                },
            },
            cursor: 'creativeLayers{edges{cursor}}',
        },
        pageInfo: {
            endCursor: 'creativeLayers{pageInfo{endCursor}}',
            startCursor: 'creativeLayers{pageInfo{startCursor}}',
            hasNextPage: 'creativeLayers{pageInfo{hasNextPage}}',
            hasPreviousPage: 'creativeLayers{pageInfo{hasPreviousPage}}',
        },
        totalCount: 'creativeLayers{totalCount}',
    },
};
export type CreativeTemplateField =
    | 'id'
    | 'creationDate'
    | 'lastChangeDate'
    | 'name'
    | 'height'
    | 'width'
    | 'systemStatus'
    | 'errors'
    | 'marketplace{id}'
    | 'marketplace{creationDate}'
    | 'marketplace{lastChangeDate}'
    | 'marketplace{name}'
    | 'marketplace{systemStatus}'
    | 'marketplace{errors}'
    | 'marketplace{organization{id}}'
    | 'marketplace{organization{creationDate}}'
    | 'marketplace{organization{lastChangeDate}}'
    | 'marketplace{organization{name}}'
    | 'marketplace{organization{systemStatus}}'
    | 'marketplace{organization{errors}}'
    | 'marketplace{organization{tier}}'
    | 'marketplace{organization{users{edges{cursor}}}}'
    | 'marketplace{organization{users{pageInfo{endCursor}}}}'
    | 'marketplace{organization{users{pageInfo{startCursor}}}}'
    | 'marketplace{organization{users{pageInfo{hasNextPage}}}}'
    | 'marketplace{organization{users{pageInfo{hasPreviousPage}}}}'
    | 'marketplace{organization{users{totalCount}}}'
    | 'marketplace{organization{marketplaces{edges{cursor}}}}'
    | 'marketplace{organization{marketplaces{pageInfo{endCursor}}}}'
    | 'marketplace{organization{marketplaces{pageInfo{startCursor}}}}'
    | 'marketplace{organization{marketplaces{pageInfo{hasNextPage}}}}'
    | 'marketplace{organization{marketplaces{pageInfo{hasPreviousPage}}}}'
    | 'marketplace{organization{marketplaces{totalCount}}}'
    | 'marketplace{mediaChannels{edges{node{id}}}}'
    | 'marketplace{mediaChannels{edges{node{creationDate}}}}'
    | 'marketplace{mediaChannels{edges{node{lastChangeDate}}}}'
    | 'marketplace{mediaChannels{edges{node{name}}}}'
    | 'marketplace{mediaChannels{edges{node{systemStatus}}}}'
    | 'marketplace{mediaChannels{edges{node{errors}}}}'
    | 'marketplace{mediaChannels{edges{node{platform}}}}'
    | 'marketplace{mediaChannels{edges{node{remoteId}}}}'
    | 'marketplace{mediaChannels{edges{node{remoteState}}}}'
    | 'marketplace{mediaChannels{edges{node{currency}}}}'
    | 'marketplace{mediaChannels{edges{node{currencySymbol}}}}'
    | 'marketplace{mediaChannels{edges{node{currencyOffset}}}}'
    | 'marketplace{mediaChannels{edges{node{timezone}}}}'
    | 'marketplace{mediaChannels{edges{node{tokenStatus}}}}'
    | 'marketplace{mediaChannels{edges{cursor}}}'
    | 'marketplace{mediaChannels{pageInfo{endCursor}}}'
    | 'marketplace{mediaChannels{pageInfo{startCursor}}}'
    | 'marketplace{mediaChannels{pageInfo{hasNextPage}}}'
    | 'marketplace{mediaChannels{pageInfo{hasPreviousPage}}}'
    | 'marketplace{mediaChannels{totalCount}}'
    | 'marketplace{campaignTemplates{edges{node{id}}}}'
    | 'marketplace{campaignTemplates{edges{node{creationDate}}}}'
    | 'marketplace{campaignTemplates{edges{node{lastChangeDate}}}}'
    | 'marketplace{campaignTemplates{edges{node{name}}}}'
    | 'marketplace{campaignTemplates{edges{node{description}}}}'
    | 'marketplace{campaignTemplates{edges{node{platform}}}}'
    | 'marketplace{campaignTemplates{edges{node{remoteId}}}}'
    | 'marketplace{campaignTemplates{edges{node{systemStatus}}}}'
    | 'marketplace{campaignTemplates{edges{node{errors}}}}'
    | 'marketplace{campaignTemplates{edges{cursor}}}'
    | 'marketplace{campaignTemplates{pageInfo{endCursor}}}'
    | 'marketplace{campaignTemplates{pageInfo{startCursor}}}'
    | 'marketplace{campaignTemplates{pageInfo{hasNextPage}}}'
    | 'marketplace{campaignTemplates{pageInfo{hasPreviousPage}}}'
    | 'marketplace{campaignTemplates{totalCount}}'
    | 'marketplace{vendors{edges{node{id}}}}'
    | 'marketplace{vendors{edges{node{creationDate}}}}'
    | 'marketplace{vendors{edges{node{lastChangeDate}}}}'
    | 'marketplace{vendors{edges{node{name}}}}'
    | 'marketplace{vendors{edges{node{systemStatus}}}}'
    | 'marketplace{vendors{edges{node{errors}}}}'
    | 'marketplace{vendors{edges{cursor}}}'
    | 'marketplace{vendors{pageInfo{endCursor}}}'
    | 'marketplace{vendors{pageInfo{startCursor}}}'
    | 'marketplace{vendors{pageInfo{hasNextPage}}}'
    | 'marketplace{vendors{pageInfo{hasPreviousPage}}}'
    | 'marketplace{vendors{totalCount}}'
    | 'marketplace{vendorTokens{edges{node{id}}}}'
    | 'marketplace{vendorTokens{edges{node{creationDate}}}}'
    | 'marketplace{vendorTokens{edges{node{lastChangeDate}}}}'
    | 'marketplace{vendorTokens{edges{node{token}}}}'
    | 'marketplace{vendorTokens{edges{cursor}}}'
    | 'marketplace{vendorTokens{pageInfo{endCursor}}}'
    | 'marketplace{vendorTokens{pageInfo{startCursor}}}'
    | 'marketplace{vendorTokens{pageInfo{hasNextPage}}}'
    | 'marketplace{vendorTokens{pageInfo{hasPreviousPage}}}'
    | 'marketplace{vendorTokens{totalCount}}'
    | 'marketplace{creativeTemplates{edges{node{id}}}}'
    | 'marketplace{creativeTemplates{edges{node{creationDate}}}}'
    | 'marketplace{creativeTemplates{edges{node{lastChangeDate}}}}'
    | 'marketplace{creativeTemplates{edges{node{name}}}}'
    | 'marketplace{creativeTemplates{edges{node{height}}}}'
    | 'marketplace{creativeTemplates{edges{node{width}}}}'
    | 'marketplace{creativeTemplates{edges{node{systemStatus}}}}'
    | 'marketplace{creativeTemplates{edges{node{errors}}}}'
    | 'marketplace{creativeTemplates{edges{cursor}}}'
    | 'marketplace{creativeTemplates{pageInfo{endCursor}}}'
    | 'marketplace{creativeTemplates{pageInfo{startCursor}}}'
    | 'marketplace{creativeTemplates{pageInfo{hasNextPage}}}'
    | 'marketplace{creativeTemplates{pageInfo{hasPreviousPage}}}'
    | 'marketplace{creativeTemplates{totalCount}}'
    | 'creativeLayers{edges{node{id}}}'
    | 'creativeLayers{edges{node{creationDate}}}'
    | 'creativeLayers{edges{node{lastChangeDate}}}'
    | 'creativeLayers{edges{node{name}}}'
    | 'creativeLayers{edges{node{height}}}'
    | 'creativeLayers{edges{node{width}}}'
    | 'creativeLayers{edges{node{x}}}'
    | 'creativeLayers{edges{node{y}}}'
    | 'creativeLayers{edges{node{order}}}'
    | 'creativeLayers{edges{node{type}}}'
    | 'creativeLayers{edges{node{properties}}}'
    | 'creativeLayers{edges{node{systemStatus}}}'
    | 'creativeLayers{edges{node{errors}}}'
    | 'creativeLayers{edges{node{creativeTemplate{id}}}}'
    | 'creativeLayers{edges{node{creativeTemplate{creationDate}}}}'
    | 'creativeLayers{edges{node{creativeTemplate{lastChangeDate}}}}'
    | 'creativeLayers{edges{node{creativeTemplate{name}}}}'
    | 'creativeLayers{edges{node{creativeTemplate{height}}}}'
    | 'creativeLayers{edges{node{creativeTemplate{width}}}}'
    | 'creativeLayers{edges{node{creativeTemplate{systemStatus}}}}'
    | 'creativeLayers{edges{node{creativeTemplate{errors}}}}'
    | 'creativeLayers{edges{cursor}}'
    | 'creativeLayers{pageInfo{endCursor}}'
    | 'creativeLayers{pageInfo{startCursor}}'
    | 'creativeLayers{pageInfo{hasNextPage}}'
    | 'creativeLayers{pageInfo{hasPreviousPage}}'
    | 'creativeLayers{totalCount}';
export type CreativeLayerFields = {
    id: 'id';
    creationDate: 'creationDate';
    lastChangeDate: 'lastChangeDate';
    name: 'name';
    height: 'height';
    width: 'width';
    x: 'x';
    y: 'y';
    order: 'order';
    type: 'type';
    properties: 'properties';
    systemStatus: 'systemStatus';
    errors: 'errors';
    creativeTemplate: {
        id: 'creativeTemplate{id}';
        creationDate: 'creativeTemplate{creationDate}';
        lastChangeDate: 'creativeTemplate{lastChangeDate}';
        name: 'creativeTemplate{name}';
        height: 'creativeTemplate{height}';
        width: 'creativeTemplate{width}';
        systemStatus: 'creativeTemplate{systemStatus}';
        errors: 'creativeTemplate{errors}';
        marketplace: {
            id: 'creativeTemplate{marketplace{id}}';
            creationDate: 'creativeTemplate{marketplace{creationDate}}';
            lastChangeDate: 'creativeTemplate{marketplace{lastChangeDate}}';
            name: 'creativeTemplate{marketplace{name}}';
            systemStatus: 'creativeTemplate{marketplace{systemStatus}}';
            errors: 'creativeTemplate{marketplace{errors}}';
            organization: {
                id: 'creativeTemplate{marketplace{organization{id}}}';
                creationDate: 'creativeTemplate{marketplace{organization{creationDate}}}';
                lastChangeDate: 'creativeTemplate{marketplace{organization{lastChangeDate}}}';
                name: 'creativeTemplate{marketplace{organization{name}}}';
                systemStatus: 'creativeTemplate{marketplace{organization{systemStatus}}}';
                errors: 'creativeTemplate{marketplace{organization{errors}}}';
                tier: 'creativeTemplate{marketplace{organization{tier}}}';
                users: {
                    totalCount: 'creativeTemplate{marketplace{organization{users{totalCount}}}}';
                };
                marketplaces: {
                    totalCount: 'creativeTemplate{marketplace{organization{marketplaces{totalCount}}}}';
                };
            };
            mediaChannels: {
                edges: {
                    cursor: 'creativeTemplate{marketplace{mediaChannels{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'creativeTemplate{marketplace{mediaChannels{pageInfo{endCursor}}}}';
                    startCursor: 'creativeTemplate{marketplace{mediaChannels{pageInfo{startCursor}}}}';
                    hasNextPage: 'creativeTemplate{marketplace{mediaChannels{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'creativeTemplate{marketplace{mediaChannels{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'creativeTemplate{marketplace{mediaChannels{totalCount}}}';
            };
            campaignTemplates: {
                edges: {
                    cursor: 'creativeTemplate{marketplace{campaignTemplates{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'creativeTemplate{marketplace{campaignTemplates{pageInfo{endCursor}}}}';
                    startCursor: 'creativeTemplate{marketplace{campaignTemplates{pageInfo{startCursor}}}}';
                    hasNextPage: 'creativeTemplate{marketplace{campaignTemplates{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'creativeTemplate{marketplace{campaignTemplates{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'creativeTemplate{marketplace{campaignTemplates{totalCount}}}';
            };
            vendors: {
                edges: {
                    cursor: 'creativeTemplate{marketplace{vendors{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'creativeTemplate{marketplace{vendors{pageInfo{endCursor}}}}';
                    startCursor: 'creativeTemplate{marketplace{vendors{pageInfo{startCursor}}}}';
                    hasNextPage: 'creativeTemplate{marketplace{vendors{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'creativeTemplate{marketplace{vendors{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'creativeTemplate{marketplace{vendors{totalCount}}}';
            };
            vendorTokens: {
                edges: {
                    cursor: 'creativeTemplate{marketplace{vendorTokens{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'creativeTemplate{marketplace{vendorTokens{pageInfo{endCursor}}}}';
                    startCursor: 'creativeTemplate{marketplace{vendorTokens{pageInfo{startCursor}}}}';
                    hasNextPage: 'creativeTemplate{marketplace{vendorTokens{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'creativeTemplate{marketplace{vendorTokens{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'creativeTemplate{marketplace{vendorTokens{totalCount}}}';
            };
            creativeTemplates: {
                edges: {
                    cursor: 'creativeTemplate{marketplace{creativeTemplates{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'creativeTemplate{marketplace{creativeTemplates{pageInfo{endCursor}}}}';
                    startCursor: 'creativeTemplate{marketplace{creativeTemplates{pageInfo{startCursor}}}}';
                    hasNextPage: 'creativeTemplate{marketplace{creativeTemplates{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'creativeTemplate{marketplace{creativeTemplates{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'creativeTemplate{marketplace{creativeTemplates{totalCount}}}';
            };
        };
        creativeLayers: {
            edges: {
                node: {
                    id: 'creativeTemplate{creativeLayers{edges{node{id}}}}';
                    creationDate: 'creativeTemplate{creativeLayers{edges{node{creationDate}}}}';
                    lastChangeDate: 'creativeTemplate{creativeLayers{edges{node{lastChangeDate}}}}';
                    name: 'creativeTemplate{creativeLayers{edges{node{name}}}}';
                    height: 'creativeTemplate{creativeLayers{edges{node{height}}}}';
                    width: 'creativeTemplate{creativeLayers{edges{node{width}}}}';
                    x: 'creativeTemplate{creativeLayers{edges{node{x}}}}';
                    y: 'creativeTemplate{creativeLayers{edges{node{y}}}}';
                    order: 'creativeTemplate{creativeLayers{edges{node{order}}}}';
                    type: 'creativeTemplate{creativeLayers{edges{node{type}}}}';
                    properties: 'creativeTemplate{creativeLayers{edges{node{properties}}}}';
                    systemStatus: 'creativeTemplate{creativeLayers{edges{node{systemStatus}}}}';
                    errors: 'creativeTemplate{creativeLayers{edges{node{errors}}}}';
                };
                cursor: 'creativeTemplate{creativeLayers{edges{cursor}}}';
            };
            pageInfo: {
                endCursor: 'creativeTemplate{creativeLayers{pageInfo{endCursor}}}';
                startCursor: 'creativeTemplate{creativeLayers{pageInfo{startCursor}}}';
                hasNextPage: 'creativeTemplate{creativeLayers{pageInfo{hasNextPage}}}';
                hasPreviousPage: 'creativeTemplate{creativeLayers{pageInfo{hasPreviousPage}}}';
            };
            totalCount: 'creativeTemplate{creativeLayers{totalCount}}';
        };
    };
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
    systemStatus: 'systemStatus',
    errors: 'errors',
    creativeTemplate: {
        id: 'creativeTemplate{id}',
        creationDate: 'creativeTemplate{creationDate}',
        lastChangeDate: 'creativeTemplate{lastChangeDate}',
        name: 'creativeTemplate{name}',
        height: 'creativeTemplate{height}',
        width: 'creativeTemplate{width}',
        systemStatus: 'creativeTemplate{systemStatus}',
        errors: 'creativeTemplate{errors}',
        marketplace: {
            id: 'creativeTemplate{marketplace{id}}',
            creationDate: 'creativeTemplate{marketplace{creationDate}}',
            lastChangeDate: 'creativeTemplate{marketplace{lastChangeDate}}',
            name: 'creativeTemplate{marketplace{name}}',
            systemStatus: 'creativeTemplate{marketplace{systemStatus}}',
            errors: 'creativeTemplate{marketplace{errors}}',
            organization: {
                id: 'creativeTemplate{marketplace{organization{id}}}',
                creationDate:
                    'creativeTemplate{marketplace{organization{creationDate}}}',
                lastChangeDate:
                    'creativeTemplate{marketplace{organization{lastChangeDate}}}',
                name: 'creativeTemplate{marketplace{organization{name}}}',
                systemStatus:
                    'creativeTemplate{marketplace{organization{systemStatus}}}',
                errors: 'creativeTemplate{marketplace{organization{errors}}}',
                tier: 'creativeTemplate{marketplace{organization{tier}}}',
                users: {
                    totalCount:
                        'creativeTemplate{marketplace{organization{users{totalCount}}}}',
                },
                marketplaces: {
                    totalCount:
                        'creativeTemplate{marketplace{organization{marketplaces{totalCount}}}}',
                },
            },
            mediaChannels: {
                edges: {
                    cursor:
                        'creativeTemplate{marketplace{mediaChannels{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'creativeTemplate{marketplace{mediaChannels{pageInfo{endCursor}}}}',
                    startCursor:
                        'creativeTemplate{marketplace{mediaChannels{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'creativeTemplate{marketplace{mediaChannels{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'creativeTemplate{marketplace{mediaChannels{pageInfo{hasPreviousPage}}}}',
                },
                totalCount:
                    'creativeTemplate{marketplace{mediaChannels{totalCount}}}',
            },
            campaignTemplates: {
                edges: {
                    cursor:
                        'creativeTemplate{marketplace{campaignTemplates{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'creativeTemplate{marketplace{campaignTemplates{pageInfo{endCursor}}}}',
                    startCursor:
                        'creativeTemplate{marketplace{campaignTemplates{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'creativeTemplate{marketplace{campaignTemplates{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'creativeTemplate{marketplace{campaignTemplates{pageInfo{hasPreviousPage}}}}',
                },
                totalCount:
                    'creativeTemplate{marketplace{campaignTemplates{totalCount}}}',
            },
            vendors: {
                edges: {
                    cursor:
                        'creativeTemplate{marketplace{vendors{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'creativeTemplate{marketplace{vendors{pageInfo{endCursor}}}}',
                    startCursor:
                        'creativeTemplate{marketplace{vendors{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'creativeTemplate{marketplace{vendors{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'creativeTemplate{marketplace{vendors{pageInfo{hasPreviousPage}}}}',
                },
                totalCount:
                    'creativeTemplate{marketplace{vendors{totalCount}}}',
            },
            vendorTokens: {
                edges: {
                    cursor:
                        'creativeTemplate{marketplace{vendorTokens{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'creativeTemplate{marketplace{vendorTokens{pageInfo{endCursor}}}}',
                    startCursor:
                        'creativeTemplate{marketplace{vendorTokens{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'creativeTemplate{marketplace{vendorTokens{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'creativeTemplate{marketplace{vendorTokens{pageInfo{hasPreviousPage}}}}',
                },
                totalCount:
                    'creativeTemplate{marketplace{vendorTokens{totalCount}}}',
            },
            creativeTemplates: {
                edges: {
                    cursor:
                        'creativeTemplate{marketplace{creativeTemplates{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'creativeTemplate{marketplace{creativeTemplates{pageInfo{endCursor}}}}',
                    startCursor:
                        'creativeTemplate{marketplace{creativeTemplates{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'creativeTemplate{marketplace{creativeTemplates{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'creativeTemplate{marketplace{creativeTemplates{pageInfo{hasPreviousPage}}}}',
                },
                totalCount:
                    'creativeTemplate{marketplace{creativeTemplates{totalCount}}}',
            },
        },
        creativeLayers: {
            edges: {
                node: {
                    id: 'creativeTemplate{creativeLayers{edges{node{id}}}}',
                    creationDate:
                        'creativeTemplate{creativeLayers{edges{node{creationDate}}}}',
                    lastChangeDate:
                        'creativeTemplate{creativeLayers{edges{node{lastChangeDate}}}}',
                    name: 'creativeTemplate{creativeLayers{edges{node{name}}}}',
                    height:
                        'creativeTemplate{creativeLayers{edges{node{height}}}}',
                    width:
                        'creativeTemplate{creativeLayers{edges{node{width}}}}',
                    x: 'creativeTemplate{creativeLayers{edges{node{x}}}}',
                    y: 'creativeTemplate{creativeLayers{edges{node{y}}}}',
                    order:
                        'creativeTemplate{creativeLayers{edges{node{order}}}}',
                    type: 'creativeTemplate{creativeLayers{edges{node{type}}}}',
                    properties:
                        'creativeTemplate{creativeLayers{edges{node{properties}}}}',
                    systemStatus:
                        'creativeTemplate{creativeLayers{edges{node{systemStatus}}}}',
                    errors:
                        'creativeTemplate{creativeLayers{edges{node{errors}}}}',
                },
                cursor: 'creativeTemplate{creativeLayers{edges{cursor}}}',
            },
            pageInfo: {
                endCursor:
                    'creativeTemplate{creativeLayers{pageInfo{endCursor}}}',
                startCursor:
                    'creativeTemplate{creativeLayers{pageInfo{startCursor}}}',
                hasNextPage:
                    'creativeTemplate{creativeLayers{pageInfo{hasNextPage}}}',
                hasPreviousPage:
                    'creativeTemplate{creativeLayers{pageInfo{hasPreviousPage}}}',
            },
            totalCount: 'creativeTemplate{creativeLayers{totalCount}}',
        },
    },
};
export type CreativeLayerField =
    | 'id'
    | 'creationDate'
    | 'lastChangeDate'
    | 'name'
    | 'height'
    | 'width'
    | 'x'
    | 'y'
    | 'order'
    | 'type'
    | 'properties'
    | 'systemStatus'
    | 'errors'
    | 'creativeTemplate{id}'
    | 'creativeTemplate{creationDate}'
    | 'creativeTemplate{lastChangeDate}'
    | 'creativeTemplate{name}'
    | 'creativeTemplate{height}'
    | 'creativeTemplate{width}'
    | 'creativeTemplate{systemStatus}'
    | 'creativeTemplate{errors}'
    | 'creativeTemplate{marketplace{id}}'
    | 'creativeTemplate{marketplace{creationDate}}'
    | 'creativeTemplate{marketplace{lastChangeDate}}'
    | 'creativeTemplate{marketplace{name}}'
    | 'creativeTemplate{marketplace{systemStatus}}'
    | 'creativeTemplate{marketplace{errors}}'
    | 'creativeTemplate{marketplace{organization{id}}}'
    | 'creativeTemplate{marketplace{organization{creationDate}}}'
    | 'creativeTemplate{marketplace{organization{lastChangeDate}}}'
    | 'creativeTemplate{marketplace{organization{name}}}'
    | 'creativeTemplate{marketplace{organization{systemStatus}}}'
    | 'creativeTemplate{marketplace{organization{errors}}}'
    | 'creativeTemplate{marketplace{organization{tier}}}'
    | 'creativeTemplate{marketplace{organization{users{totalCount}}}}'
    | 'creativeTemplate{marketplace{organization{marketplaces{totalCount}}}}'
    | 'creativeTemplate{marketplace{mediaChannels{edges{cursor}}}}'
    | 'creativeTemplate{marketplace{mediaChannels{pageInfo{endCursor}}}}'
    | 'creativeTemplate{marketplace{mediaChannels{pageInfo{startCursor}}}}'
    | 'creativeTemplate{marketplace{mediaChannels{pageInfo{hasNextPage}}}}'
    | 'creativeTemplate{marketplace{mediaChannels{pageInfo{hasPreviousPage}}}}'
    | 'creativeTemplate{marketplace{mediaChannels{totalCount}}}'
    | 'creativeTemplate{marketplace{campaignTemplates{edges{cursor}}}}'
    | 'creativeTemplate{marketplace{campaignTemplates{pageInfo{endCursor}}}}'
    | 'creativeTemplate{marketplace{campaignTemplates{pageInfo{startCursor}}}}'
    | 'creativeTemplate{marketplace{campaignTemplates{pageInfo{hasNextPage}}}}'
    | 'creativeTemplate{marketplace{campaignTemplates{pageInfo{hasPreviousPage}}}}'
    | 'creativeTemplate{marketplace{campaignTemplates{totalCount}}}'
    | 'creativeTemplate{marketplace{vendors{edges{cursor}}}}'
    | 'creativeTemplate{marketplace{vendors{pageInfo{endCursor}}}}'
    | 'creativeTemplate{marketplace{vendors{pageInfo{startCursor}}}}'
    | 'creativeTemplate{marketplace{vendors{pageInfo{hasNextPage}}}}'
    | 'creativeTemplate{marketplace{vendors{pageInfo{hasPreviousPage}}}}'
    | 'creativeTemplate{marketplace{vendors{totalCount}}}'
    | 'creativeTemplate{marketplace{vendorTokens{edges{cursor}}}}'
    | 'creativeTemplate{marketplace{vendorTokens{pageInfo{endCursor}}}}'
    | 'creativeTemplate{marketplace{vendorTokens{pageInfo{startCursor}}}}'
    | 'creativeTemplate{marketplace{vendorTokens{pageInfo{hasNextPage}}}}'
    | 'creativeTemplate{marketplace{vendorTokens{pageInfo{hasPreviousPage}}}}'
    | 'creativeTemplate{marketplace{vendorTokens{totalCount}}}'
    | 'creativeTemplate{marketplace{creativeTemplates{edges{cursor}}}}'
    | 'creativeTemplate{marketplace{creativeTemplates{pageInfo{endCursor}}}}'
    | 'creativeTemplate{marketplace{creativeTemplates{pageInfo{startCursor}}}}'
    | 'creativeTemplate{marketplace{creativeTemplates{pageInfo{hasNextPage}}}}'
    | 'creativeTemplate{marketplace{creativeTemplates{pageInfo{hasPreviousPage}}}}'
    | 'creativeTemplate{marketplace{creativeTemplates{totalCount}}}'
    | 'creativeTemplate{creativeLayers{edges{node{id}}}}'
    | 'creativeTemplate{creativeLayers{edges{node{creationDate}}}}'
    | 'creativeTemplate{creativeLayers{edges{node{lastChangeDate}}}}'
    | 'creativeTemplate{creativeLayers{edges{node{name}}}}'
    | 'creativeTemplate{creativeLayers{edges{node{height}}}}'
    | 'creativeTemplate{creativeLayers{edges{node{width}}}}'
    | 'creativeTemplate{creativeLayers{edges{node{x}}}}'
    | 'creativeTemplate{creativeLayers{edges{node{y}}}}'
    | 'creativeTemplate{creativeLayers{edges{node{order}}}}'
    | 'creativeTemplate{creativeLayers{edges{node{type}}}}'
    | 'creativeTemplate{creativeLayers{edges{node{properties}}}}'
    | 'creativeTemplate{creativeLayers{edges{node{systemStatus}}}}'
    | 'creativeTemplate{creativeLayers{edges{node{errors}}}}'
    | 'creativeTemplate{creativeLayers{edges{cursor}}}'
    | 'creativeTemplate{creativeLayers{pageInfo{endCursor}}}'
    | 'creativeTemplate{creativeLayers{pageInfo{startCursor}}}'
    | 'creativeTemplate{creativeLayers{pageInfo{hasNextPage}}}'
    | 'creativeTemplate{creativeLayers{pageInfo{hasPreviousPage}}}'
    | 'creativeTemplate{creativeLayers{totalCount}}';
export type CreativeFontFields = {
    id: 'id';
    creationDate: 'creationDate';
    lastChangeDate: 'lastChangeDate';
    name: 'name';
    url: 'url';
    properties: 'properties';
    systemStatus: 'systemStatus';
    errors: 'errors';
    marketplace: {
        id: 'marketplace{id}';
        creationDate: 'marketplace{creationDate}';
        lastChangeDate: 'marketplace{lastChangeDate}';
        name: 'marketplace{name}';
        systemStatus: 'marketplace{systemStatus}';
        errors: 'marketplace{errors}';
        organization: {
            id: 'marketplace{organization{id}}';
            creationDate: 'marketplace{organization{creationDate}}';
            lastChangeDate: 'marketplace{organization{lastChangeDate}}';
            name: 'marketplace{organization{name}}';
            systemStatus: 'marketplace{organization{systemStatus}}';
            errors: 'marketplace{organization{errors}}';
            tier: 'marketplace{organization{tier}}';
            users: {
                edges: {
                    cursor: 'marketplace{organization{users{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'marketplace{organization{users{pageInfo{endCursor}}}}';
                    startCursor: 'marketplace{organization{users{pageInfo{startCursor}}}}';
                    hasNextPage: 'marketplace{organization{users{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'marketplace{organization{users{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'marketplace{organization{users{totalCount}}}';
            };
            marketplaces: {
                edges: {
                    cursor: 'marketplace{organization{marketplaces{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'marketplace{organization{marketplaces{pageInfo{endCursor}}}}';
                    startCursor: 'marketplace{organization{marketplaces{pageInfo{startCursor}}}}';
                    hasNextPage: 'marketplace{organization{marketplaces{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'marketplace{organization{marketplaces{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'marketplace{organization{marketplaces{totalCount}}}';
            };
        };
        mediaChannels: {
            edges: {
                node: {
                    id: 'marketplace{mediaChannels{edges{node{id}}}}';
                    creationDate: 'marketplace{mediaChannels{edges{node{creationDate}}}}';
                    lastChangeDate: 'marketplace{mediaChannels{edges{node{lastChangeDate}}}}';
                    name: 'marketplace{mediaChannels{edges{node{name}}}}';
                    systemStatus: 'marketplace{mediaChannels{edges{node{systemStatus}}}}';
                    errors: 'marketplace{mediaChannels{edges{node{errors}}}}';
                    platform: 'marketplace{mediaChannels{edges{node{platform}}}}';
                    remoteId: 'marketplace{mediaChannels{edges{node{remoteId}}}}';
                    remoteState: 'marketplace{mediaChannels{edges{node{remoteState}}}}';
                    currency: 'marketplace{mediaChannels{edges{node{currency}}}}';
                    currencySymbol: 'marketplace{mediaChannels{edges{node{currencySymbol}}}}';
                    currencyOffset: 'marketplace{mediaChannels{edges{node{currencyOffset}}}}';
                    timezone: 'marketplace{mediaChannels{edges{node{timezone}}}}';
                    tokenStatus: 'marketplace{mediaChannels{edges{node{tokenStatus}}}}';
                };
                cursor: 'marketplace{mediaChannels{edges{cursor}}}';
            };
            pageInfo: {
                endCursor: 'marketplace{mediaChannels{pageInfo{endCursor}}}';
                startCursor: 'marketplace{mediaChannels{pageInfo{startCursor}}}';
                hasNextPage: 'marketplace{mediaChannels{pageInfo{hasNextPage}}}';
                hasPreviousPage: 'marketplace{mediaChannels{pageInfo{hasPreviousPage}}}';
            };
            totalCount: 'marketplace{mediaChannels{totalCount}}';
        };
        campaignTemplates: {
            edges: {
                node: {
                    id: 'marketplace{campaignTemplates{edges{node{id}}}}';
                    creationDate: 'marketplace{campaignTemplates{edges{node{creationDate}}}}';
                    lastChangeDate: 'marketplace{campaignTemplates{edges{node{lastChangeDate}}}}';
                    name: 'marketplace{campaignTemplates{edges{node{name}}}}';
                    description: 'marketplace{campaignTemplates{edges{node{description}}}}';
                    platform: 'marketplace{campaignTemplates{edges{node{platform}}}}';
                    remoteId: 'marketplace{campaignTemplates{edges{node{remoteId}}}}';
                    systemStatus: 'marketplace{campaignTemplates{edges{node{systemStatus}}}}';
                    errors: 'marketplace{campaignTemplates{edges{node{errors}}}}';
                };
                cursor: 'marketplace{campaignTemplates{edges{cursor}}}';
            };
            pageInfo: {
                endCursor: 'marketplace{campaignTemplates{pageInfo{endCursor}}}';
                startCursor: 'marketplace{campaignTemplates{pageInfo{startCursor}}}';
                hasNextPage: 'marketplace{campaignTemplates{pageInfo{hasNextPage}}}';
                hasPreviousPage: 'marketplace{campaignTemplates{pageInfo{hasPreviousPage}}}';
            };
            totalCount: 'marketplace{campaignTemplates{totalCount}}';
        };
        vendors: {
            edges: {
                node: {
                    id: 'marketplace{vendors{edges{node{id}}}}';
                    creationDate: 'marketplace{vendors{edges{node{creationDate}}}}';
                    lastChangeDate: 'marketplace{vendors{edges{node{lastChangeDate}}}}';
                    name: 'marketplace{vendors{edges{node{name}}}}';
                    systemStatus: 'marketplace{vendors{edges{node{systemStatus}}}}';
                    errors: 'marketplace{vendors{edges{node{errors}}}}';
                };
                cursor: 'marketplace{vendors{edges{cursor}}}';
            };
            pageInfo: {
                endCursor: 'marketplace{vendors{pageInfo{endCursor}}}';
                startCursor: 'marketplace{vendors{pageInfo{startCursor}}}';
                hasNextPage: 'marketplace{vendors{pageInfo{hasNextPage}}}';
                hasPreviousPage: 'marketplace{vendors{pageInfo{hasPreviousPage}}}';
            };
            totalCount: 'marketplace{vendors{totalCount}}';
        };
        vendorTokens: {
            edges: {
                node: {
                    id: 'marketplace{vendorTokens{edges{node{id}}}}';
                    creationDate: 'marketplace{vendorTokens{edges{node{creationDate}}}}';
                    lastChangeDate: 'marketplace{vendorTokens{edges{node{lastChangeDate}}}}';
                    token: 'marketplace{vendorTokens{edges{node{token}}}}';
                };
                cursor: 'marketplace{vendorTokens{edges{cursor}}}';
            };
            pageInfo: {
                endCursor: 'marketplace{vendorTokens{pageInfo{endCursor}}}';
                startCursor: 'marketplace{vendorTokens{pageInfo{startCursor}}}';
                hasNextPage: 'marketplace{vendorTokens{pageInfo{hasNextPage}}}';
                hasPreviousPage: 'marketplace{vendorTokens{pageInfo{hasPreviousPage}}}';
            };
            totalCount: 'marketplace{vendorTokens{totalCount}}';
        };
        creativeTemplates: {
            edges: {
                node: {
                    id: 'marketplace{creativeTemplates{edges{node{id}}}}';
                    creationDate: 'marketplace{creativeTemplates{edges{node{creationDate}}}}';
                    lastChangeDate: 'marketplace{creativeTemplates{edges{node{lastChangeDate}}}}';
                    name: 'marketplace{creativeTemplates{edges{node{name}}}}';
                    height: 'marketplace{creativeTemplates{edges{node{height}}}}';
                    width: 'marketplace{creativeTemplates{edges{node{width}}}}';
                    systemStatus: 'marketplace{creativeTemplates{edges{node{systemStatus}}}}';
                    errors: 'marketplace{creativeTemplates{edges{node{errors}}}}';
                };
                cursor: 'marketplace{creativeTemplates{edges{cursor}}}';
            };
            pageInfo: {
                endCursor: 'marketplace{creativeTemplates{pageInfo{endCursor}}}';
                startCursor: 'marketplace{creativeTemplates{pageInfo{startCursor}}}';
                hasNextPage: 'marketplace{creativeTemplates{pageInfo{hasNextPage}}}';
                hasPreviousPage: 'marketplace{creativeTemplates{pageInfo{hasPreviousPage}}}';
            };
            totalCount: 'marketplace{creativeTemplates{totalCount}}';
        };
    };
};
export const CreativeFontFields: CreativeFontFields = {
    id: 'id',
    creationDate: 'creationDate',
    lastChangeDate: 'lastChangeDate',
    name: 'name',
    url: 'url',
    properties: 'properties',
    systemStatus: 'systemStatus',
    errors: 'errors',
    marketplace: {
        id: 'marketplace{id}',
        creationDate: 'marketplace{creationDate}',
        lastChangeDate: 'marketplace{lastChangeDate}',
        name: 'marketplace{name}',
        systemStatus: 'marketplace{systemStatus}',
        errors: 'marketplace{errors}',
        organization: {
            id: 'marketplace{organization{id}}',
            creationDate: 'marketplace{organization{creationDate}}',
            lastChangeDate: 'marketplace{organization{lastChangeDate}}',
            name: 'marketplace{organization{name}}',
            systemStatus: 'marketplace{organization{systemStatus}}',
            errors: 'marketplace{organization{errors}}',
            tier: 'marketplace{organization{tier}}',
            users: {
                edges: {
                    cursor: 'marketplace{organization{users{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'marketplace{organization{users{pageInfo{endCursor}}}}',
                    startCursor:
                        'marketplace{organization{users{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'marketplace{organization{users{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'marketplace{organization{users{pageInfo{hasPreviousPage}}}}',
                },
                totalCount: 'marketplace{organization{users{totalCount}}}',
            },
            marketplaces: {
                edges: {
                    cursor:
                        'marketplace{organization{marketplaces{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'marketplace{organization{marketplaces{pageInfo{endCursor}}}}',
                    startCursor:
                        'marketplace{organization{marketplaces{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'marketplace{organization{marketplaces{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'marketplace{organization{marketplaces{pageInfo{hasPreviousPage}}}}',
                },
                totalCount:
                    'marketplace{organization{marketplaces{totalCount}}}',
            },
        },
        mediaChannels: {
            edges: {
                node: {
                    id: 'marketplace{mediaChannels{edges{node{id}}}}',
                    creationDate:
                        'marketplace{mediaChannels{edges{node{creationDate}}}}',
                    lastChangeDate:
                        'marketplace{mediaChannels{edges{node{lastChangeDate}}}}',
                    name: 'marketplace{mediaChannels{edges{node{name}}}}',
                    systemStatus:
                        'marketplace{mediaChannels{edges{node{systemStatus}}}}',
                    errors: 'marketplace{mediaChannels{edges{node{errors}}}}',
                    platform:
                        'marketplace{mediaChannels{edges{node{platform}}}}',
                    remoteId:
                        'marketplace{mediaChannels{edges{node{remoteId}}}}',
                    remoteState:
                        'marketplace{mediaChannels{edges{node{remoteState}}}}',
                    currency:
                        'marketplace{mediaChannels{edges{node{currency}}}}',
                    currencySymbol:
                        'marketplace{mediaChannels{edges{node{currencySymbol}}}}',
                    currencyOffset:
                        'marketplace{mediaChannels{edges{node{currencyOffset}}}}',
                    timezone:
                        'marketplace{mediaChannels{edges{node{timezone}}}}',
                    tokenStatus:
                        'marketplace{mediaChannels{edges{node{tokenStatus}}}}',
                },
                cursor: 'marketplace{mediaChannels{edges{cursor}}}',
            },
            pageInfo: {
                endCursor: 'marketplace{mediaChannels{pageInfo{endCursor}}}',
                startCursor:
                    'marketplace{mediaChannels{pageInfo{startCursor}}}',
                hasNextPage:
                    'marketplace{mediaChannels{pageInfo{hasNextPage}}}',
                hasPreviousPage:
                    'marketplace{mediaChannels{pageInfo{hasPreviousPage}}}',
            },
            totalCount: 'marketplace{mediaChannels{totalCount}}',
        },
        campaignTemplates: {
            edges: {
                node: {
                    id: 'marketplace{campaignTemplates{edges{node{id}}}}',
                    creationDate:
                        'marketplace{campaignTemplates{edges{node{creationDate}}}}',
                    lastChangeDate:
                        'marketplace{campaignTemplates{edges{node{lastChangeDate}}}}',
                    name: 'marketplace{campaignTemplates{edges{node{name}}}}',
                    description:
                        'marketplace{campaignTemplates{edges{node{description}}}}',
                    platform:
                        'marketplace{campaignTemplates{edges{node{platform}}}}',
                    remoteId:
                        'marketplace{campaignTemplates{edges{node{remoteId}}}}',
                    systemStatus:
                        'marketplace{campaignTemplates{edges{node{systemStatus}}}}',
                    errors:
                        'marketplace{campaignTemplates{edges{node{errors}}}}',
                },
                cursor: 'marketplace{campaignTemplates{edges{cursor}}}',
            },
            pageInfo: {
                endCursor:
                    'marketplace{campaignTemplates{pageInfo{endCursor}}}',
                startCursor:
                    'marketplace{campaignTemplates{pageInfo{startCursor}}}',
                hasNextPage:
                    'marketplace{campaignTemplates{pageInfo{hasNextPage}}}',
                hasPreviousPage:
                    'marketplace{campaignTemplates{pageInfo{hasPreviousPage}}}',
            },
            totalCount: 'marketplace{campaignTemplates{totalCount}}',
        },
        vendors: {
            edges: {
                node: {
                    id: 'marketplace{vendors{edges{node{id}}}}',
                    creationDate:
                        'marketplace{vendors{edges{node{creationDate}}}}',
                    lastChangeDate:
                        'marketplace{vendors{edges{node{lastChangeDate}}}}',
                    name: 'marketplace{vendors{edges{node{name}}}}',
                    systemStatus:
                        'marketplace{vendors{edges{node{systemStatus}}}}',
                    errors: 'marketplace{vendors{edges{node{errors}}}}',
                },
                cursor: 'marketplace{vendors{edges{cursor}}}',
            },
            pageInfo: {
                endCursor: 'marketplace{vendors{pageInfo{endCursor}}}',
                startCursor: 'marketplace{vendors{pageInfo{startCursor}}}',
                hasNextPage: 'marketplace{vendors{pageInfo{hasNextPage}}}',
                hasPreviousPage:
                    'marketplace{vendors{pageInfo{hasPreviousPage}}}',
            },
            totalCount: 'marketplace{vendors{totalCount}}',
        },
        vendorTokens: {
            edges: {
                node: {
                    id: 'marketplace{vendorTokens{edges{node{id}}}}',
                    creationDate:
                        'marketplace{vendorTokens{edges{node{creationDate}}}}',
                    lastChangeDate:
                        'marketplace{vendorTokens{edges{node{lastChangeDate}}}}',
                    token: 'marketplace{vendorTokens{edges{node{token}}}}',
                },
                cursor: 'marketplace{vendorTokens{edges{cursor}}}',
            },
            pageInfo: {
                endCursor: 'marketplace{vendorTokens{pageInfo{endCursor}}}',
                startCursor: 'marketplace{vendorTokens{pageInfo{startCursor}}}',
                hasNextPage: 'marketplace{vendorTokens{pageInfo{hasNextPage}}}',
                hasPreviousPage:
                    'marketplace{vendorTokens{pageInfo{hasPreviousPage}}}',
            },
            totalCount: 'marketplace{vendorTokens{totalCount}}',
        },
        creativeTemplates: {
            edges: {
                node: {
                    id: 'marketplace{creativeTemplates{edges{node{id}}}}',
                    creationDate:
                        'marketplace{creativeTemplates{edges{node{creationDate}}}}',
                    lastChangeDate:
                        'marketplace{creativeTemplates{edges{node{lastChangeDate}}}}',
                    name: 'marketplace{creativeTemplates{edges{node{name}}}}',
                    height:
                        'marketplace{creativeTemplates{edges{node{height}}}}',
                    width: 'marketplace{creativeTemplates{edges{node{width}}}}',
                    systemStatus:
                        'marketplace{creativeTemplates{edges{node{systemStatus}}}}',
                    errors:
                        'marketplace{creativeTemplates{edges{node{errors}}}}',
                },
                cursor: 'marketplace{creativeTemplates{edges{cursor}}}',
            },
            pageInfo: {
                endCursor:
                    'marketplace{creativeTemplates{pageInfo{endCursor}}}',
                startCursor:
                    'marketplace{creativeTemplates{pageInfo{startCursor}}}',
                hasNextPage:
                    'marketplace{creativeTemplates{pageInfo{hasNextPage}}}',
                hasPreviousPage:
                    'marketplace{creativeTemplates{pageInfo{hasPreviousPage}}}',
            },
            totalCount: 'marketplace{creativeTemplates{totalCount}}',
        },
    },
};
export type CreativeFontField =
    | 'id'
    | 'creationDate'
    | 'lastChangeDate'
    | 'name'
    | 'url'
    | 'properties'
    | 'systemStatus'
    | 'errors'
    | 'marketplace{id}'
    | 'marketplace{creationDate}'
    | 'marketplace{lastChangeDate}'
    | 'marketplace{name}'
    | 'marketplace{systemStatus}'
    | 'marketplace{errors}'
    | 'marketplace{organization{id}}'
    | 'marketplace{organization{creationDate}}'
    | 'marketplace{organization{lastChangeDate}}'
    | 'marketplace{organization{name}}'
    | 'marketplace{organization{systemStatus}}'
    | 'marketplace{organization{errors}}'
    | 'marketplace{organization{tier}}'
    | 'marketplace{organization{users{edges{cursor}}}}'
    | 'marketplace{organization{users{pageInfo{endCursor}}}}'
    | 'marketplace{organization{users{pageInfo{startCursor}}}}'
    | 'marketplace{organization{users{pageInfo{hasNextPage}}}}'
    | 'marketplace{organization{users{pageInfo{hasPreviousPage}}}}'
    | 'marketplace{organization{users{totalCount}}}'
    | 'marketplace{organization{marketplaces{edges{cursor}}}}'
    | 'marketplace{organization{marketplaces{pageInfo{endCursor}}}}'
    | 'marketplace{organization{marketplaces{pageInfo{startCursor}}}}'
    | 'marketplace{organization{marketplaces{pageInfo{hasNextPage}}}}'
    | 'marketplace{organization{marketplaces{pageInfo{hasPreviousPage}}}}'
    | 'marketplace{organization{marketplaces{totalCount}}}'
    | 'marketplace{mediaChannels{edges{node{id}}}}'
    | 'marketplace{mediaChannels{edges{node{creationDate}}}}'
    | 'marketplace{mediaChannels{edges{node{lastChangeDate}}}}'
    | 'marketplace{mediaChannels{edges{node{name}}}}'
    | 'marketplace{mediaChannels{edges{node{systemStatus}}}}'
    | 'marketplace{mediaChannels{edges{node{errors}}}}'
    | 'marketplace{mediaChannels{edges{node{platform}}}}'
    | 'marketplace{mediaChannels{edges{node{remoteId}}}}'
    | 'marketplace{mediaChannels{edges{node{remoteState}}}}'
    | 'marketplace{mediaChannels{edges{node{currency}}}}'
    | 'marketplace{mediaChannels{edges{node{currencySymbol}}}}'
    | 'marketplace{mediaChannels{edges{node{currencyOffset}}}}'
    | 'marketplace{mediaChannels{edges{node{timezone}}}}'
    | 'marketplace{mediaChannels{edges{node{tokenStatus}}}}'
    | 'marketplace{mediaChannels{edges{cursor}}}'
    | 'marketplace{mediaChannels{pageInfo{endCursor}}}'
    | 'marketplace{mediaChannels{pageInfo{startCursor}}}'
    | 'marketplace{mediaChannels{pageInfo{hasNextPage}}}'
    | 'marketplace{mediaChannels{pageInfo{hasPreviousPage}}}'
    | 'marketplace{mediaChannels{totalCount}}'
    | 'marketplace{campaignTemplates{edges{node{id}}}}'
    | 'marketplace{campaignTemplates{edges{node{creationDate}}}}'
    | 'marketplace{campaignTemplates{edges{node{lastChangeDate}}}}'
    | 'marketplace{campaignTemplates{edges{node{name}}}}'
    | 'marketplace{campaignTemplates{edges{node{description}}}}'
    | 'marketplace{campaignTemplates{edges{node{platform}}}}'
    | 'marketplace{campaignTemplates{edges{node{remoteId}}}}'
    | 'marketplace{campaignTemplates{edges{node{systemStatus}}}}'
    | 'marketplace{campaignTemplates{edges{node{errors}}}}'
    | 'marketplace{campaignTemplates{edges{cursor}}}'
    | 'marketplace{campaignTemplates{pageInfo{endCursor}}}'
    | 'marketplace{campaignTemplates{pageInfo{startCursor}}}'
    | 'marketplace{campaignTemplates{pageInfo{hasNextPage}}}'
    | 'marketplace{campaignTemplates{pageInfo{hasPreviousPage}}}'
    | 'marketplace{campaignTemplates{totalCount}}'
    | 'marketplace{vendors{edges{node{id}}}}'
    | 'marketplace{vendors{edges{node{creationDate}}}}'
    | 'marketplace{vendors{edges{node{lastChangeDate}}}}'
    | 'marketplace{vendors{edges{node{name}}}}'
    | 'marketplace{vendors{edges{node{systemStatus}}}}'
    | 'marketplace{vendors{edges{node{errors}}}}'
    | 'marketplace{vendors{edges{cursor}}}'
    | 'marketplace{vendors{pageInfo{endCursor}}}'
    | 'marketplace{vendors{pageInfo{startCursor}}}'
    | 'marketplace{vendors{pageInfo{hasNextPage}}}'
    | 'marketplace{vendors{pageInfo{hasPreviousPage}}}'
    | 'marketplace{vendors{totalCount}}'
    | 'marketplace{vendorTokens{edges{node{id}}}}'
    | 'marketplace{vendorTokens{edges{node{creationDate}}}}'
    | 'marketplace{vendorTokens{edges{node{lastChangeDate}}}}'
    | 'marketplace{vendorTokens{edges{node{token}}}}'
    | 'marketplace{vendorTokens{edges{cursor}}}'
    | 'marketplace{vendorTokens{pageInfo{endCursor}}}'
    | 'marketplace{vendorTokens{pageInfo{startCursor}}}'
    | 'marketplace{vendorTokens{pageInfo{hasNextPage}}}'
    | 'marketplace{vendorTokens{pageInfo{hasPreviousPage}}}'
    | 'marketplace{vendorTokens{totalCount}}'
    | 'marketplace{creativeTemplates{edges{node{id}}}}'
    | 'marketplace{creativeTemplates{edges{node{creationDate}}}}'
    | 'marketplace{creativeTemplates{edges{node{lastChangeDate}}}}'
    | 'marketplace{creativeTemplates{edges{node{name}}}}'
    | 'marketplace{creativeTemplates{edges{node{height}}}}'
    | 'marketplace{creativeTemplates{edges{node{width}}}}'
    | 'marketplace{creativeTemplates{edges{node{systemStatus}}}}'
    | 'marketplace{creativeTemplates{edges{node{errors}}}}'
    | 'marketplace{creativeTemplates{edges{cursor}}}'
    | 'marketplace{creativeTemplates{pageInfo{endCursor}}}'
    | 'marketplace{creativeTemplates{pageInfo{startCursor}}}'
    | 'marketplace{creativeTemplates{pageInfo{hasNextPage}}}'
    | 'marketplace{creativeTemplates{pageInfo{hasPreviousPage}}}'
    | 'marketplace{creativeTemplates{totalCount}}';
export type CreativeImageFields = {
    id: 'id';
    creationDate: 'creationDate';
    lastChangeDate: 'lastChangeDate';
    name: 'name';
    url: 'url';
    properties: 'properties';
    systemStatus: 'systemStatus';
    errors: 'errors';
    marketplace: {
        id: 'marketplace{id}';
        creationDate: 'marketplace{creationDate}';
        lastChangeDate: 'marketplace{lastChangeDate}';
        name: 'marketplace{name}';
        systemStatus: 'marketplace{systemStatus}';
        errors: 'marketplace{errors}';
        organization: {
            id: 'marketplace{organization{id}}';
            creationDate: 'marketplace{organization{creationDate}}';
            lastChangeDate: 'marketplace{organization{lastChangeDate}}';
            name: 'marketplace{organization{name}}';
            systemStatus: 'marketplace{organization{systemStatus}}';
            errors: 'marketplace{organization{errors}}';
            tier: 'marketplace{organization{tier}}';
            users: {
                edges: {
                    cursor: 'marketplace{organization{users{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'marketplace{organization{users{pageInfo{endCursor}}}}';
                    startCursor: 'marketplace{organization{users{pageInfo{startCursor}}}}';
                    hasNextPage: 'marketplace{organization{users{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'marketplace{organization{users{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'marketplace{organization{users{totalCount}}}';
            };
            marketplaces: {
                edges: {
                    cursor: 'marketplace{organization{marketplaces{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'marketplace{organization{marketplaces{pageInfo{endCursor}}}}';
                    startCursor: 'marketplace{organization{marketplaces{pageInfo{startCursor}}}}';
                    hasNextPage: 'marketplace{organization{marketplaces{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'marketplace{organization{marketplaces{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'marketplace{organization{marketplaces{totalCount}}}';
            };
        };
        mediaChannels: {
            edges: {
                node: {
                    id: 'marketplace{mediaChannels{edges{node{id}}}}';
                    creationDate: 'marketplace{mediaChannels{edges{node{creationDate}}}}';
                    lastChangeDate: 'marketplace{mediaChannels{edges{node{lastChangeDate}}}}';
                    name: 'marketplace{mediaChannels{edges{node{name}}}}';
                    systemStatus: 'marketplace{mediaChannels{edges{node{systemStatus}}}}';
                    errors: 'marketplace{mediaChannels{edges{node{errors}}}}';
                    platform: 'marketplace{mediaChannels{edges{node{platform}}}}';
                    remoteId: 'marketplace{mediaChannels{edges{node{remoteId}}}}';
                    remoteState: 'marketplace{mediaChannels{edges{node{remoteState}}}}';
                    currency: 'marketplace{mediaChannels{edges{node{currency}}}}';
                    currencySymbol: 'marketplace{mediaChannels{edges{node{currencySymbol}}}}';
                    currencyOffset: 'marketplace{mediaChannels{edges{node{currencyOffset}}}}';
                    timezone: 'marketplace{mediaChannels{edges{node{timezone}}}}';
                    tokenStatus: 'marketplace{mediaChannels{edges{node{tokenStatus}}}}';
                };
                cursor: 'marketplace{mediaChannels{edges{cursor}}}';
            };
            pageInfo: {
                endCursor: 'marketplace{mediaChannels{pageInfo{endCursor}}}';
                startCursor: 'marketplace{mediaChannels{pageInfo{startCursor}}}';
                hasNextPage: 'marketplace{mediaChannels{pageInfo{hasNextPage}}}';
                hasPreviousPage: 'marketplace{mediaChannels{pageInfo{hasPreviousPage}}}';
            };
            totalCount: 'marketplace{mediaChannels{totalCount}}';
        };
        campaignTemplates: {
            edges: {
                node: {
                    id: 'marketplace{campaignTemplates{edges{node{id}}}}';
                    creationDate: 'marketplace{campaignTemplates{edges{node{creationDate}}}}';
                    lastChangeDate: 'marketplace{campaignTemplates{edges{node{lastChangeDate}}}}';
                    name: 'marketplace{campaignTemplates{edges{node{name}}}}';
                    description: 'marketplace{campaignTemplates{edges{node{description}}}}';
                    platform: 'marketplace{campaignTemplates{edges{node{platform}}}}';
                    remoteId: 'marketplace{campaignTemplates{edges{node{remoteId}}}}';
                    systemStatus: 'marketplace{campaignTemplates{edges{node{systemStatus}}}}';
                    errors: 'marketplace{campaignTemplates{edges{node{errors}}}}';
                };
                cursor: 'marketplace{campaignTemplates{edges{cursor}}}';
            };
            pageInfo: {
                endCursor: 'marketplace{campaignTemplates{pageInfo{endCursor}}}';
                startCursor: 'marketplace{campaignTemplates{pageInfo{startCursor}}}';
                hasNextPage: 'marketplace{campaignTemplates{pageInfo{hasNextPage}}}';
                hasPreviousPage: 'marketplace{campaignTemplates{pageInfo{hasPreviousPage}}}';
            };
            totalCount: 'marketplace{campaignTemplates{totalCount}}';
        };
        vendors: {
            edges: {
                node: {
                    id: 'marketplace{vendors{edges{node{id}}}}';
                    creationDate: 'marketplace{vendors{edges{node{creationDate}}}}';
                    lastChangeDate: 'marketplace{vendors{edges{node{lastChangeDate}}}}';
                    name: 'marketplace{vendors{edges{node{name}}}}';
                    systemStatus: 'marketplace{vendors{edges{node{systemStatus}}}}';
                    errors: 'marketplace{vendors{edges{node{errors}}}}';
                };
                cursor: 'marketplace{vendors{edges{cursor}}}';
            };
            pageInfo: {
                endCursor: 'marketplace{vendors{pageInfo{endCursor}}}';
                startCursor: 'marketplace{vendors{pageInfo{startCursor}}}';
                hasNextPage: 'marketplace{vendors{pageInfo{hasNextPage}}}';
                hasPreviousPage: 'marketplace{vendors{pageInfo{hasPreviousPage}}}';
            };
            totalCount: 'marketplace{vendors{totalCount}}';
        };
        vendorTokens: {
            edges: {
                node: {
                    id: 'marketplace{vendorTokens{edges{node{id}}}}';
                    creationDate: 'marketplace{vendorTokens{edges{node{creationDate}}}}';
                    lastChangeDate: 'marketplace{vendorTokens{edges{node{lastChangeDate}}}}';
                    token: 'marketplace{vendorTokens{edges{node{token}}}}';
                };
                cursor: 'marketplace{vendorTokens{edges{cursor}}}';
            };
            pageInfo: {
                endCursor: 'marketplace{vendorTokens{pageInfo{endCursor}}}';
                startCursor: 'marketplace{vendorTokens{pageInfo{startCursor}}}';
                hasNextPage: 'marketplace{vendorTokens{pageInfo{hasNextPage}}}';
                hasPreviousPage: 'marketplace{vendorTokens{pageInfo{hasPreviousPage}}}';
            };
            totalCount: 'marketplace{vendorTokens{totalCount}}';
        };
        creativeTemplates: {
            edges: {
                node: {
                    id: 'marketplace{creativeTemplates{edges{node{id}}}}';
                    creationDate: 'marketplace{creativeTemplates{edges{node{creationDate}}}}';
                    lastChangeDate: 'marketplace{creativeTemplates{edges{node{lastChangeDate}}}}';
                    name: 'marketplace{creativeTemplates{edges{node{name}}}}';
                    height: 'marketplace{creativeTemplates{edges{node{height}}}}';
                    width: 'marketplace{creativeTemplates{edges{node{width}}}}';
                    systemStatus: 'marketplace{creativeTemplates{edges{node{systemStatus}}}}';
                    errors: 'marketplace{creativeTemplates{edges{node{errors}}}}';
                };
                cursor: 'marketplace{creativeTemplates{edges{cursor}}}';
            };
            pageInfo: {
                endCursor: 'marketplace{creativeTemplates{pageInfo{endCursor}}}';
                startCursor: 'marketplace{creativeTemplates{pageInfo{startCursor}}}';
                hasNextPage: 'marketplace{creativeTemplates{pageInfo{hasNextPage}}}';
                hasPreviousPage: 'marketplace{creativeTemplates{pageInfo{hasPreviousPage}}}';
            };
            totalCount: 'marketplace{creativeTemplates{totalCount}}';
        };
    };
};
export const CreativeImageFields: CreativeImageFields = {
    id: 'id',
    creationDate: 'creationDate',
    lastChangeDate: 'lastChangeDate',
    name: 'name',
    url: 'url',
    properties: 'properties',
    systemStatus: 'systemStatus',
    errors: 'errors',
    marketplace: {
        id: 'marketplace{id}',
        creationDate: 'marketplace{creationDate}',
        lastChangeDate: 'marketplace{lastChangeDate}',
        name: 'marketplace{name}',
        systemStatus: 'marketplace{systemStatus}',
        errors: 'marketplace{errors}',
        organization: {
            id: 'marketplace{organization{id}}',
            creationDate: 'marketplace{organization{creationDate}}',
            lastChangeDate: 'marketplace{organization{lastChangeDate}}',
            name: 'marketplace{organization{name}}',
            systemStatus: 'marketplace{organization{systemStatus}}',
            errors: 'marketplace{organization{errors}}',
            tier: 'marketplace{organization{tier}}',
            users: {
                edges: {
                    cursor: 'marketplace{organization{users{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'marketplace{organization{users{pageInfo{endCursor}}}}',
                    startCursor:
                        'marketplace{organization{users{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'marketplace{organization{users{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'marketplace{organization{users{pageInfo{hasPreviousPage}}}}',
                },
                totalCount: 'marketplace{organization{users{totalCount}}}',
            },
            marketplaces: {
                edges: {
                    cursor:
                        'marketplace{organization{marketplaces{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'marketplace{organization{marketplaces{pageInfo{endCursor}}}}',
                    startCursor:
                        'marketplace{organization{marketplaces{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'marketplace{organization{marketplaces{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'marketplace{organization{marketplaces{pageInfo{hasPreviousPage}}}}',
                },
                totalCount:
                    'marketplace{organization{marketplaces{totalCount}}}',
            },
        },
        mediaChannels: {
            edges: {
                node: {
                    id: 'marketplace{mediaChannels{edges{node{id}}}}',
                    creationDate:
                        'marketplace{mediaChannels{edges{node{creationDate}}}}',
                    lastChangeDate:
                        'marketplace{mediaChannels{edges{node{lastChangeDate}}}}',
                    name: 'marketplace{mediaChannels{edges{node{name}}}}',
                    systemStatus:
                        'marketplace{mediaChannels{edges{node{systemStatus}}}}',
                    errors: 'marketplace{mediaChannels{edges{node{errors}}}}',
                    platform:
                        'marketplace{mediaChannels{edges{node{platform}}}}',
                    remoteId:
                        'marketplace{mediaChannels{edges{node{remoteId}}}}',
                    remoteState:
                        'marketplace{mediaChannels{edges{node{remoteState}}}}',
                    currency:
                        'marketplace{mediaChannels{edges{node{currency}}}}',
                    currencySymbol:
                        'marketplace{mediaChannels{edges{node{currencySymbol}}}}',
                    currencyOffset:
                        'marketplace{mediaChannels{edges{node{currencyOffset}}}}',
                    timezone:
                        'marketplace{mediaChannels{edges{node{timezone}}}}',
                    tokenStatus:
                        'marketplace{mediaChannels{edges{node{tokenStatus}}}}',
                },
                cursor: 'marketplace{mediaChannels{edges{cursor}}}',
            },
            pageInfo: {
                endCursor: 'marketplace{mediaChannels{pageInfo{endCursor}}}',
                startCursor:
                    'marketplace{mediaChannels{pageInfo{startCursor}}}',
                hasNextPage:
                    'marketplace{mediaChannels{pageInfo{hasNextPage}}}',
                hasPreviousPage:
                    'marketplace{mediaChannels{pageInfo{hasPreviousPage}}}',
            },
            totalCount: 'marketplace{mediaChannels{totalCount}}',
        },
        campaignTemplates: {
            edges: {
                node: {
                    id: 'marketplace{campaignTemplates{edges{node{id}}}}',
                    creationDate:
                        'marketplace{campaignTemplates{edges{node{creationDate}}}}',
                    lastChangeDate:
                        'marketplace{campaignTemplates{edges{node{lastChangeDate}}}}',
                    name: 'marketplace{campaignTemplates{edges{node{name}}}}',
                    description:
                        'marketplace{campaignTemplates{edges{node{description}}}}',
                    platform:
                        'marketplace{campaignTemplates{edges{node{platform}}}}',
                    remoteId:
                        'marketplace{campaignTemplates{edges{node{remoteId}}}}',
                    systemStatus:
                        'marketplace{campaignTemplates{edges{node{systemStatus}}}}',
                    errors:
                        'marketplace{campaignTemplates{edges{node{errors}}}}',
                },
                cursor: 'marketplace{campaignTemplates{edges{cursor}}}',
            },
            pageInfo: {
                endCursor:
                    'marketplace{campaignTemplates{pageInfo{endCursor}}}',
                startCursor:
                    'marketplace{campaignTemplates{pageInfo{startCursor}}}',
                hasNextPage:
                    'marketplace{campaignTemplates{pageInfo{hasNextPage}}}',
                hasPreviousPage:
                    'marketplace{campaignTemplates{pageInfo{hasPreviousPage}}}',
            },
            totalCount: 'marketplace{campaignTemplates{totalCount}}',
        },
        vendors: {
            edges: {
                node: {
                    id: 'marketplace{vendors{edges{node{id}}}}',
                    creationDate:
                        'marketplace{vendors{edges{node{creationDate}}}}',
                    lastChangeDate:
                        'marketplace{vendors{edges{node{lastChangeDate}}}}',
                    name: 'marketplace{vendors{edges{node{name}}}}',
                    systemStatus:
                        'marketplace{vendors{edges{node{systemStatus}}}}',
                    errors: 'marketplace{vendors{edges{node{errors}}}}',
                },
                cursor: 'marketplace{vendors{edges{cursor}}}',
            },
            pageInfo: {
                endCursor: 'marketplace{vendors{pageInfo{endCursor}}}',
                startCursor: 'marketplace{vendors{pageInfo{startCursor}}}',
                hasNextPage: 'marketplace{vendors{pageInfo{hasNextPage}}}',
                hasPreviousPage:
                    'marketplace{vendors{pageInfo{hasPreviousPage}}}',
            },
            totalCount: 'marketplace{vendors{totalCount}}',
        },
        vendorTokens: {
            edges: {
                node: {
                    id: 'marketplace{vendorTokens{edges{node{id}}}}',
                    creationDate:
                        'marketplace{vendorTokens{edges{node{creationDate}}}}',
                    lastChangeDate:
                        'marketplace{vendorTokens{edges{node{lastChangeDate}}}}',
                    token: 'marketplace{vendorTokens{edges{node{token}}}}',
                },
                cursor: 'marketplace{vendorTokens{edges{cursor}}}',
            },
            pageInfo: {
                endCursor: 'marketplace{vendorTokens{pageInfo{endCursor}}}',
                startCursor: 'marketplace{vendorTokens{pageInfo{startCursor}}}',
                hasNextPage: 'marketplace{vendorTokens{pageInfo{hasNextPage}}}',
                hasPreviousPage:
                    'marketplace{vendorTokens{pageInfo{hasPreviousPage}}}',
            },
            totalCount: 'marketplace{vendorTokens{totalCount}}',
        },
        creativeTemplates: {
            edges: {
                node: {
                    id: 'marketplace{creativeTemplates{edges{node{id}}}}',
                    creationDate:
                        'marketplace{creativeTemplates{edges{node{creationDate}}}}',
                    lastChangeDate:
                        'marketplace{creativeTemplates{edges{node{lastChangeDate}}}}',
                    name: 'marketplace{creativeTemplates{edges{node{name}}}}',
                    height:
                        'marketplace{creativeTemplates{edges{node{height}}}}',
                    width: 'marketplace{creativeTemplates{edges{node{width}}}}',
                    systemStatus:
                        'marketplace{creativeTemplates{edges{node{systemStatus}}}}',
                    errors:
                        'marketplace{creativeTemplates{edges{node{errors}}}}',
                },
                cursor: 'marketplace{creativeTemplates{edges{cursor}}}',
            },
            pageInfo: {
                endCursor:
                    'marketplace{creativeTemplates{pageInfo{endCursor}}}',
                startCursor:
                    'marketplace{creativeTemplates{pageInfo{startCursor}}}',
                hasNextPage:
                    'marketplace{creativeTemplates{pageInfo{hasNextPage}}}',
                hasPreviousPage:
                    'marketplace{creativeTemplates{pageInfo{hasPreviousPage}}}',
            },
            totalCount: 'marketplace{creativeTemplates{totalCount}}',
        },
    },
};
export type CreativeImageField =
    | 'id'
    | 'creationDate'
    | 'lastChangeDate'
    | 'name'
    | 'url'
    | 'properties'
    | 'systemStatus'
    | 'errors'
    | 'marketplace{id}'
    | 'marketplace{creationDate}'
    | 'marketplace{lastChangeDate}'
    | 'marketplace{name}'
    | 'marketplace{systemStatus}'
    | 'marketplace{errors}'
    | 'marketplace{organization{id}}'
    | 'marketplace{organization{creationDate}}'
    | 'marketplace{organization{lastChangeDate}}'
    | 'marketplace{organization{name}}'
    | 'marketplace{organization{systemStatus}}'
    | 'marketplace{organization{errors}}'
    | 'marketplace{organization{tier}}'
    | 'marketplace{organization{users{edges{cursor}}}}'
    | 'marketplace{organization{users{pageInfo{endCursor}}}}'
    | 'marketplace{organization{users{pageInfo{startCursor}}}}'
    | 'marketplace{organization{users{pageInfo{hasNextPage}}}}'
    | 'marketplace{organization{users{pageInfo{hasPreviousPage}}}}'
    | 'marketplace{organization{users{totalCount}}}'
    | 'marketplace{organization{marketplaces{edges{cursor}}}}'
    | 'marketplace{organization{marketplaces{pageInfo{endCursor}}}}'
    | 'marketplace{organization{marketplaces{pageInfo{startCursor}}}}'
    | 'marketplace{organization{marketplaces{pageInfo{hasNextPage}}}}'
    | 'marketplace{organization{marketplaces{pageInfo{hasPreviousPage}}}}'
    | 'marketplace{organization{marketplaces{totalCount}}}'
    | 'marketplace{mediaChannels{edges{node{id}}}}'
    | 'marketplace{mediaChannels{edges{node{creationDate}}}}'
    | 'marketplace{mediaChannels{edges{node{lastChangeDate}}}}'
    | 'marketplace{mediaChannels{edges{node{name}}}}'
    | 'marketplace{mediaChannels{edges{node{systemStatus}}}}'
    | 'marketplace{mediaChannels{edges{node{errors}}}}'
    | 'marketplace{mediaChannels{edges{node{platform}}}}'
    | 'marketplace{mediaChannels{edges{node{remoteId}}}}'
    | 'marketplace{mediaChannels{edges{node{remoteState}}}}'
    | 'marketplace{mediaChannels{edges{node{currency}}}}'
    | 'marketplace{mediaChannels{edges{node{currencySymbol}}}}'
    | 'marketplace{mediaChannels{edges{node{currencyOffset}}}}'
    | 'marketplace{mediaChannels{edges{node{timezone}}}}'
    | 'marketplace{mediaChannels{edges{node{tokenStatus}}}}'
    | 'marketplace{mediaChannels{edges{cursor}}}'
    | 'marketplace{mediaChannels{pageInfo{endCursor}}}'
    | 'marketplace{mediaChannels{pageInfo{startCursor}}}'
    | 'marketplace{mediaChannels{pageInfo{hasNextPage}}}'
    | 'marketplace{mediaChannels{pageInfo{hasPreviousPage}}}'
    | 'marketplace{mediaChannels{totalCount}}'
    | 'marketplace{campaignTemplates{edges{node{id}}}}'
    | 'marketplace{campaignTemplates{edges{node{creationDate}}}}'
    | 'marketplace{campaignTemplates{edges{node{lastChangeDate}}}}'
    | 'marketplace{campaignTemplates{edges{node{name}}}}'
    | 'marketplace{campaignTemplates{edges{node{description}}}}'
    | 'marketplace{campaignTemplates{edges{node{platform}}}}'
    | 'marketplace{campaignTemplates{edges{node{remoteId}}}}'
    | 'marketplace{campaignTemplates{edges{node{systemStatus}}}}'
    | 'marketplace{campaignTemplates{edges{node{errors}}}}'
    | 'marketplace{campaignTemplates{edges{cursor}}}'
    | 'marketplace{campaignTemplates{pageInfo{endCursor}}}'
    | 'marketplace{campaignTemplates{pageInfo{startCursor}}}'
    | 'marketplace{campaignTemplates{pageInfo{hasNextPage}}}'
    | 'marketplace{campaignTemplates{pageInfo{hasPreviousPage}}}'
    | 'marketplace{campaignTemplates{totalCount}}'
    | 'marketplace{vendors{edges{node{id}}}}'
    | 'marketplace{vendors{edges{node{creationDate}}}}'
    | 'marketplace{vendors{edges{node{lastChangeDate}}}}'
    | 'marketplace{vendors{edges{node{name}}}}'
    | 'marketplace{vendors{edges{node{systemStatus}}}}'
    | 'marketplace{vendors{edges{node{errors}}}}'
    | 'marketplace{vendors{edges{cursor}}}'
    | 'marketplace{vendors{pageInfo{endCursor}}}'
    | 'marketplace{vendors{pageInfo{startCursor}}}'
    | 'marketplace{vendors{pageInfo{hasNextPage}}}'
    | 'marketplace{vendors{pageInfo{hasPreviousPage}}}'
    | 'marketplace{vendors{totalCount}}'
    | 'marketplace{vendorTokens{edges{node{id}}}}'
    | 'marketplace{vendorTokens{edges{node{creationDate}}}}'
    | 'marketplace{vendorTokens{edges{node{lastChangeDate}}}}'
    | 'marketplace{vendorTokens{edges{node{token}}}}'
    | 'marketplace{vendorTokens{edges{cursor}}}'
    | 'marketplace{vendorTokens{pageInfo{endCursor}}}'
    | 'marketplace{vendorTokens{pageInfo{startCursor}}}'
    | 'marketplace{vendorTokens{pageInfo{hasNextPage}}}'
    | 'marketplace{vendorTokens{pageInfo{hasPreviousPage}}}'
    | 'marketplace{vendorTokens{totalCount}}'
    | 'marketplace{creativeTemplates{edges{node{id}}}}'
    | 'marketplace{creativeTemplates{edges{node{creationDate}}}}'
    | 'marketplace{creativeTemplates{edges{node{lastChangeDate}}}}'
    | 'marketplace{creativeTemplates{edges{node{name}}}}'
    | 'marketplace{creativeTemplates{edges{node{height}}}}'
    | 'marketplace{creativeTemplates{edges{node{width}}}}'
    | 'marketplace{creativeTemplates{edges{node{systemStatus}}}}'
    | 'marketplace{creativeTemplates{edges{node{errors}}}}'
    | 'marketplace{creativeTemplates{edges{cursor}}}'
    | 'marketplace{creativeTemplates{pageInfo{endCursor}}}'
    | 'marketplace{creativeTemplates{pageInfo{startCursor}}}'
    | 'marketplace{creativeTemplates{pageInfo{hasNextPage}}}'
    | 'marketplace{creativeTemplates{pageInfo{hasPreviousPage}}}'
    | 'marketplace{creativeTemplates{totalCount}}';
export type TokenFields = {
    token: 'token';
    refreshToken: 'refreshToken';
    expiryDate: 'expiryDate';
    user: {
        id: 'user{id}';
        creationDate: 'user{creationDate}';
        lastChangeDate: 'user{lastChangeDate}';
        email: 'user{email}';
        firstName: 'user{firstName}';
        lastName: 'user{lastName}';
        organizations: {
            edges: {
                node: {
                    id: 'user{organizations{edges{node{id}}}}';
                    creationDate: 'user{organizations{edges{node{creationDate}}}}';
                    lastChangeDate: 'user{organizations{edges{node{lastChangeDate}}}}';
                    name: 'user{organizations{edges{node{name}}}}';
                    systemStatus: 'user{organizations{edges{node{systemStatus}}}}';
                    errors: 'user{organizations{edges{node{errors}}}}';
                    tier: 'user{organizations{edges{node{tier}}}}';
                };
                cursor: 'user{organizations{edges{cursor}}}';
            };
            pageInfo: {
                endCursor: 'user{organizations{pageInfo{endCursor}}}';
                startCursor: 'user{organizations{pageInfo{startCursor}}}';
                hasNextPage: 'user{organizations{pageInfo{hasNextPage}}}';
                hasPreviousPage: 'user{organizations{pageInfo{hasPreviousPage}}}';
            };
            totalCount: 'user{organizations{totalCount}}';
        };
        entitlements: {
            edges: {
                node: {
                    id: 'user{entitlements{edges{node{id}}}}';
                    creationDate: 'user{entitlements{edges{node{creationDate}}}}';
                    lastChangeDate: 'user{entitlements{edges{node{lastChangeDate}}}}';
                    type: 'user{entitlements{edges{node{type}}}}';
                    permissions: 'user{entitlements{edges{node{permissions}}}}';
                };
                cursor: 'user{entitlements{edges{cursor}}}';
            };
            pageInfo: {
                endCursor: 'user{entitlements{pageInfo{endCursor}}}';
                startCursor: 'user{entitlements{pageInfo{startCursor}}}';
                hasNextPage: 'user{entitlements{pageInfo{hasNextPage}}}';
                hasPreviousPage: 'user{entitlements{pageInfo{hasPreviousPage}}}';
            };
            totalCount: 'user{entitlements{totalCount}}';
        };
    };
};
export const TokenFields: TokenFields = {
    token: 'token',
    refreshToken: 'refreshToken',
    expiryDate: 'expiryDate',
    user: {
        id: 'user{id}',
        creationDate: 'user{creationDate}',
        lastChangeDate: 'user{lastChangeDate}',
        email: 'user{email}',
        firstName: 'user{firstName}',
        lastName: 'user{lastName}',
        organizations: {
            edges: {
                node: {
                    id: 'user{organizations{edges{node{id}}}}',
                    creationDate:
                        'user{organizations{edges{node{creationDate}}}}',
                    lastChangeDate:
                        'user{organizations{edges{node{lastChangeDate}}}}',
                    name: 'user{organizations{edges{node{name}}}}',
                    systemStatus:
                        'user{organizations{edges{node{systemStatus}}}}',
                    errors: 'user{organizations{edges{node{errors}}}}',
                    tier: 'user{organizations{edges{node{tier}}}}',
                },
                cursor: 'user{organizations{edges{cursor}}}',
            },
            pageInfo: {
                endCursor: 'user{organizations{pageInfo{endCursor}}}',
                startCursor: 'user{organizations{pageInfo{startCursor}}}',
                hasNextPage: 'user{organizations{pageInfo{hasNextPage}}}',
                hasPreviousPage:
                    'user{organizations{pageInfo{hasPreviousPage}}}',
            },
            totalCount: 'user{organizations{totalCount}}',
        },
        entitlements: {
            edges: {
                node: {
                    id: 'user{entitlements{edges{node{id}}}}',
                    creationDate:
                        'user{entitlements{edges{node{creationDate}}}}',
                    lastChangeDate:
                        'user{entitlements{edges{node{lastChangeDate}}}}',
                    type: 'user{entitlements{edges{node{type}}}}',
                    permissions: 'user{entitlements{edges{node{permissions}}}}',
                },
                cursor: 'user{entitlements{edges{cursor}}}',
            },
            pageInfo: {
                endCursor: 'user{entitlements{pageInfo{endCursor}}}',
                startCursor: 'user{entitlements{pageInfo{startCursor}}}',
                hasNextPage: 'user{entitlements{pageInfo{hasNextPage}}}',
                hasPreviousPage:
                    'user{entitlements{pageInfo{hasPreviousPage}}}',
            },
            totalCount: 'user{entitlements{totalCount}}',
        },
    },
};
export type TokenField =
    | 'token'
    | 'refreshToken'
    | 'expiryDate'
    | 'user{id}'
    | 'user{creationDate}'
    | 'user{lastChangeDate}'
    | 'user{email}'
    | 'user{firstName}'
    | 'user{lastName}'
    | 'user{organizations{edges{node{id}}}}'
    | 'user{organizations{edges{node{creationDate}}}}'
    | 'user{organizations{edges{node{lastChangeDate}}}}'
    | 'user{organizations{edges{node{name}}}}'
    | 'user{organizations{edges{node{systemStatus}}}}'
    | 'user{organizations{edges{node{errors}}}}'
    | 'user{organizations{edges{node{tier}}}}'
    | 'user{organizations{edges{cursor}}}'
    | 'user{organizations{pageInfo{endCursor}}}'
    | 'user{organizations{pageInfo{startCursor}}}'
    | 'user{organizations{pageInfo{hasNextPage}}}'
    | 'user{organizations{pageInfo{hasPreviousPage}}}'
    | 'user{organizations{totalCount}}'
    | 'user{entitlements{edges{node{id}}}}'
    | 'user{entitlements{edges{node{creationDate}}}}'
    | 'user{entitlements{edges{node{lastChangeDate}}}}'
    | 'user{entitlements{edges{node{type}}}}'
    | 'user{entitlements{edges{node{permissions}}}}'
    | 'user{entitlements{edges{cursor}}}'
    | 'user{entitlements{pageInfo{endCursor}}}'
    | 'user{entitlements{pageInfo{startCursor}}}'
    | 'user{entitlements{pageInfo{hasNextPage}}}'
    | 'user{entitlements{pageInfo{hasPreviousPage}}}'
    | 'user{entitlements{totalCount}}';
export type RequestResultFields = {
    result: 'result';
};
export const RequestResultFields: RequestResultFields = {
    result: 'result',
};
export type RequestResultField = 'result';
