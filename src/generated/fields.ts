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
    id: '0',
    creationDate: '1',
    lastChangeDate: '2',
    name: '3',
    description: '4',
    platform: '5',
    remoteId: '6',
    systemStatus: '7',
    errors: '8',
    marketplace: {
        id: '9,0',
        creationDate: '9,1',
        lastChangeDate: '9,2',
        name: '9,3',
        organization: {
            id: '9,10,0',
            creationDate: '9,10,1',
            lastChangeDate: '9,10,2',
            users: {
                edges: {
                    cursor: '9,10,11,12,13',
                },
                pageInfo: {
                    hasNextPage: '9,10,11,14,15',
                    hasPreviousPage: '9,10,11,14,16',
                    startCursor: '9,10,11,14,17',
                    endCursor: '9,10,11,14,18',
                },
            },
            marketplaces: {
                edges: {
                    cursor: '9,10,19,12,13',
                },
                pageInfo: {
                    hasNextPage: '9,10,19,14,15',
                    hasPreviousPage: '9,10,19,14,16',
                    startCursor: '9,10,19,14,17',
                    endCursor: '9,10,19,14,18',
                },
            },
            name: '9,10,3',
            tier: '9,10,20',
            systemStatus: '9,10,7',
            errors: '9,10,8',
        },
        mediaChannels: {
            edges: {
                cursor: '9,21,12,13',
                node: {
                    id: '9,21,12,22,0',
                    creationDate: '9,21,12,22,1',
                    lastChangeDate: '9,21,12,22,2',
                    name: '9,21,12,22,3',
                    platform: '9,21,12,22,5',
                    remoteId: '9,21,12,22,6',
                    remoteState: '9,21,12,22,23',
                    currency: '9,21,12,22,24',
                    currencySymbol: '9,21,12,22,25',
                    currencyOffset: '9,21,12,22,26',
                    timezone: '9,21,12,22,27',
                    tokenStatus: '9,21,12,22,28',
                    systemStatus: '9,21,12,22,7',
                    errors: '9,21,12,22,8',
                },
            },
            pageInfo: {
                hasNextPage: '9,21,14,15',
                hasPreviousPage: '9,21,14,16',
                startCursor: '9,21,14,17',
                endCursor: '9,21,14,18',
            },
        },
        campaignTemplates: {
            edges: {
                cursor: '9,29,12,13',
                node: {
                    id: '9,29,12,22,0',
                    creationDate: '9,29,12,22,1',
                    lastChangeDate: '9,29,12,22,2',
                    name: '9,29,12,22,3',
                    description: '9,29,12,22,4',
                    platform: '9,29,12,22,5',
                    remoteId: '9,29,12,22,6',
                    systemStatus: '9,29,12,22,7',
                    errors: '9,29,12,22,8',
                },
            },
            pageInfo: {
                hasNextPage: '9,29,14,15',
                hasPreviousPage: '9,29,14,16',
                startCursor: '9,29,14,17',
                endCursor: '9,29,14,18',
            },
        },
        vendors: {
            edges: {
                cursor: '9,30,12,13',
                node: {
                    id: '9,30,12,22,0',
                    creationDate: '9,30,12,22,1',
                    lastChangeDate: '9,30,12,22,2',
                    name: '9,30,12,22,3',
                    systemStatus: '9,30,12,22,7',
                    errors: '9,30,12,22,8',
                },
            },
            pageInfo: {
                hasNextPage: '9,30,14,15',
                hasPreviousPage: '9,30,14,16',
                startCursor: '9,30,14,17',
                endCursor: '9,30,14,18',
            },
        },
        vendorTokens: {
            edges: {
                cursor: '9,31,12,13',
                node: {
                    id: '9,31,12,22,0',
                    creationDate: '9,31,12,22,1',
                    lastChangeDate: '9,31,12,22,2',
                    token: '9,31,12,22,32',
                },
            },
            pageInfo: {
                hasNextPage: '9,31,14,15',
                hasPreviousPage: '9,31,14,16',
                startCursor: '9,31,14,17',
                endCursor: '9,31,14,18',
            },
        },
        systemStatus: '9,7',
        errors: '9,8',
        creativeTemplates: {
            edges: {
                cursor: '9,33,12,13',
                node: {
                    id: '9,33,12,22,0',
                    creationDate: '9,33,12,22,1',
                    lastChangeDate: '9,33,12,22,2',
                    name: '9,33,12,22,3',
                    height: '9,33,12,22,34',
                    width: '9,33,12,22,35',
                    systemStatus: '9,33,12,22,7',
                    errors: '9,33,12,22,8',
                },
            },
            pageInfo: {
                hasNextPage: '9,33,14,15',
                hasPreviousPage: '9,33,14,16',
                startCursor: '9,33,14,17',
                endCursor: '9,33,14,18',
            },
        },
    },
    marketingCampaigns: {
        edges: {
            cursor: '36,12,13',
            node: {
                id: '36,12,22,0',
                creationDate: '36,12,22,1',
                lastChangeDate: '36,12,22,2',
                name: '36,12,22,3',
                status: '36,12,22,37',
                marketingAds: {},
                products: {},
                vendor: {
                    id: '36,12,22,38,0',
                    creationDate: '36,12,22,38,1',
                    lastChangeDate: '36,12,22,38,2',
                    name: '36,12,22,38,3',
                    systemStatus: '36,12,22,38,7',
                    errors: '36,12,22,38,8',
                },
                catalog: {
                    id: '36,12,22,39,0',
                    name: '36,12,22,39,3',
                    catalogType: '36,12,22,39,40',
                    creationDate: '36,12,22,39,1',
                    lastChangeDate: '36,12,22,39,2',
                    remoteId: '36,12,22,39,6',
                    systemStatus: '36,12,22,39,7',
                    remoteState: '36,12,22,39,23',
                    dataFeedId: '36,12,22,39,41',
                    errors: '36,12,22,39,8',
                },
                campaignTemplate: {
                    id: '36,12,22,42,0',
                    creationDate: '36,12,22,42,1',
                    lastChangeDate: '36,12,22,42,2',
                    name: '36,12,22,42,3',
                    description: '36,12,22,42,4',
                    platform: '36,12,22,42,5',
                    remoteId: '36,12,22,42,6',
                    systemStatus: '36,12,22,42,7',
                    errors: '36,12,22,42,8',
                },
                mediaChannel: {
                    id: '36,12,22,43,0',
                    creationDate: '36,12,22,43,1',
                    lastChangeDate: '36,12,22,43,2',
                    name: '36,12,22,43,3',
                    platform: '36,12,22,43,5',
                    remoteId: '36,12,22,43,6',
                    remoteState: '36,12,22,43,23',
                    currency: '36,12,22,43,24',
                    currencySymbol: '36,12,22,43,25',
                    currencyOffset: '36,12,22,43,26',
                    timezone: '36,12,22,43,27',
                    tokenStatus: '36,12,22,43,28',
                    systemStatus: '36,12,22,43,7',
                    errors: '36,12,22,43,8',
                },
                results: {},
                creativeSpec: '36,12,22,44',
                runTimeSpec: '36,12,22,45',
                resultsSource: '36,12,22,46',
                systemStatus: '36,12,22,7',
                errors: '36,12,22,8',
            },
        },
        pageInfo: {
            hasNextPage: '36,14,15',
            hasPreviousPage: '36,14,16',
            startCursor: '36,14,17',
            endCursor: '36,14,18',
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
    id: '0',
    creationDate: '1',
    lastChangeDate: '2',
    name: '3',
    organization: {
        id: '10,0',
        creationDate: '10,1',
        lastChangeDate: '10,2',
        users: {
            edges: {
                cursor: '10,11,12,13',
                node: {
                    id: '10,11,12,22,0',
                    creationDate: '10,11,12,22,1',
                    lastChangeDate: '10,11,12,22,2',
                    email: '10,11,12,22,47',
                    firstName: '10,11,12,22,48',
                    lastName: '10,11,12,22,49',
                },
            },
            pageInfo: {
                hasNextPage: '10,11,14,15',
                hasPreviousPage: '10,11,14,16',
                startCursor: '10,11,14,17',
                endCursor: '10,11,14,18',
            },
        },
        marketplaces: {
            edges: {
                cursor: '10,19,12,13',
                node: {
                    id: '10,19,12,22,0',
                    creationDate: '10,19,12,22,1',
                    lastChangeDate: '10,19,12,22,2',
                    name: '10,19,12,22,3',
                    systemStatus: '10,19,12,22,7',
                    errors: '10,19,12,22,8',
                },
            },
            pageInfo: {
                hasNextPage: '10,19,14,15',
                hasPreviousPage: '10,19,14,16',
                startCursor: '10,19,14,17',
                endCursor: '10,19,14,18',
            },
        },
        name: '10,3',
        tier: '10,20',
        systemStatus: '10,7',
        errors: '10,8',
    },
    mediaChannels: {
        edges: {
            cursor: '21,12,13',
            node: {
                id: '21,12,22,0',
                creationDate: '21,12,22,1',
                lastChangeDate: '21,12,22,2',
                name: '21,12,22,3',
                platform: '21,12,22,5',
                remoteId: '21,12,22,6',
                remoteState: '21,12,22,23',
                currency: '21,12,22,24',
                currencySymbol: '21,12,22,25',
                currencyOffset: '21,12,22,26',
                timezone: '21,12,22,27',
                tokenStatus: '21,12,22,28',
                systemStatus: '21,12,22,7',
                errors: '21,12,22,8',
                catalogs: {},
                marketplace: {
                    id: '21,12,22,9,0',
                    creationDate: '21,12,22,9,1',
                    lastChangeDate: '21,12,22,9,2',
                    name: '21,12,22,9,3',
                    systemStatus: '21,12,22,9,7',
                    errors: '21,12,22,9,8',
                },
            },
        },
        pageInfo: {
            hasNextPage: '21,14,15',
            hasPreviousPage: '21,14,16',
            startCursor: '21,14,17',
            endCursor: '21,14,18',
        },
    },
    campaignTemplates: {
        edges: {
            cursor: '29,12,13',
            node: {
                id: '29,12,22,0',
                creationDate: '29,12,22,1',
                lastChangeDate: '29,12,22,2',
                name: '29,12,22,3',
                description: '29,12,22,4',
                platform: '29,12,22,5',
                remoteId: '29,12,22,6',
                systemStatus: '29,12,22,7',
                errors: '29,12,22,8',
                marketplace: {
                    id: '29,12,22,9,0',
                    creationDate: '29,12,22,9,1',
                    lastChangeDate: '29,12,22,9,2',
                    name: '29,12,22,9,3',
                    systemStatus: '29,12,22,9,7',
                    errors: '29,12,22,9,8',
                },
                marketingCampaigns: {},
            },
        },
        pageInfo: {
            hasNextPage: '29,14,15',
            hasPreviousPage: '29,14,16',
            startCursor: '29,14,17',
            endCursor: '29,14,18',
        },
    },
    vendors: {
        edges: {
            cursor: '30,12,13',
            node: {
                id: '30,12,22,0',
                creationDate: '30,12,22,1',
                lastChangeDate: '30,12,22,2',
                name: '30,12,22,3',
                marketplace: {
                    id: '30,12,22,9,0',
                    creationDate: '30,12,22,9,1',
                    lastChangeDate: '30,12,22,9,2',
                    name: '30,12,22,9,3',
                    systemStatus: '30,12,22,9,7',
                    errors: '30,12,22,9,8',
                },
                vendorTokens: {},
                products: {},
                systemStatus: '30,12,22,7',
                errors: '30,12,22,8',
            },
        },
        pageInfo: {
            hasNextPage: '30,14,15',
            hasPreviousPage: '30,14,16',
            startCursor: '30,14,17',
            endCursor: '30,14,18',
        },
    },
    vendorTokens: {
        edges: {
            cursor: '31,12,13',
            node: {
                id: '31,12,22,0',
                creationDate: '31,12,22,1',
                lastChangeDate: '31,12,22,2',
                marketplace: {
                    id: '31,12,22,9,0',
                    creationDate: '31,12,22,9,1',
                    lastChangeDate: '31,12,22,9,2',
                    name: '31,12,22,9,3',
                    systemStatus: '31,12,22,9,7',
                    errors: '31,12,22,9,8',
                },
                vendor: {
                    id: '31,12,22,38,0',
                    creationDate: '31,12,22,38,1',
                    lastChangeDate: '31,12,22,38,2',
                    name: '31,12,22,38,3',
                    systemStatus: '31,12,22,38,7',
                    errors: '31,12,22,38,8',
                },
                token: '31,12,22,32',
            },
        },
        pageInfo: {
            hasNextPage: '31,14,15',
            hasPreviousPage: '31,14,16',
            startCursor: '31,14,17',
            endCursor: '31,14,18',
        },
    },
    systemStatus: '7',
    errors: '8',
    creativeTemplates: {
        edges: {
            cursor: '33,12,13',
            node: {
                id: '33,12,22,0',
                creationDate: '33,12,22,1',
                lastChangeDate: '33,12,22,2',
                name: '33,12,22,3',
                height: '33,12,22,34',
                width: '33,12,22,35',
                marketplace: {
                    id: '33,12,22,9,0',
                    creationDate: '33,12,22,9,1',
                    lastChangeDate: '33,12,22,9,2',
                    name: '33,12,22,9,3',
                    systemStatus: '33,12,22,9,7',
                    errors: '33,12,22,9,8',
                },
                creativeLayers: {},
                systemStatus: '33,12,22,7',
                errors: '33,12,22,8',
            },
        },
        pageInfo: {
            hasNextPage: '33,14,15',
            hasPreviousPage: '33,14,16',
            startCursor: '33,14,17',
            endCursor: '33,14,18',
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
    id: '0',
    creationDate: '1',
    lastChangeDate: '2',
    users: {
        edges: {
            cursor: '11,12,13',
            node: {
                id: '11,12,22,0',
                creationDate: '11,12,22,1',
                lastChangeDate: '11,12,22,2',
                email: '11,12,22,47',
                firstName: '11,12,22,48',
                lastName: '11,12,22,49',
                organizations: {},
                entitlements: {},
            },
        },
        pageInfo: {
            hasNextPage: '11,14,15',
            hasPreviousPage: '11,14,16',
            startCursor: '11,14,17',
            endCursor: '11,14,18',
        },
    },
    marketplaces: {
        edges: {
            cursor: '19,12,13',
            node: {
                id: '19,12,22,0',
                creationDate: '19,12,22,1',
                lastChangeDate: '19,12,22,2',
                name: '19,12,22,3',
                organization: {
                    id: '19,12,22,10,0',
                    creationDate: '19,12,22,10,1',
                    lastChangeDate: '19,12,22,10,2',
                    name: '19,12,22,10,3',
                    tier: '19,12,22,10,20',
                    systemStatus: '19,12,22,10,7',
                    errors: '19,12,22,10,8',
                },
                mediaChannels: {},
                campaignTemplates: {},
                vendors: {},
                vendorTokens: {},
                systemStatus: '19,12,22,7',
                errors: '19,12,22,8',
                creativeTemplates: {},
            },
        },
        pageInfo: {
            hasNextPage: '19,14,15',
            hasPreviousPage: '19,14,16',
            startCursor: '19,14,17',
            endCursor: '19,14,18',
        },
    },
    name: '3',
    tier: '20',
    systemStatus: '7',
    errors: '8',
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
    id: '0',
    creationDate: '1',
    lastChangeDate: '2',
    email: '47',
    firstName: '48',
    lastName: '49',
    organizations: {
        edges: {
            cursor: '50,12,13',
            node: {
                id: '50,12,22,0',
                creationDate: '50,12,22,1',
                lastChangeDate: '50,12,22,2',
                users: {},
                marketplaces: {},
                name: '50,12,22,3',
                tier: '50,12,22,20',
                systemStatus: '50,12,22,7',
                errors: '50,12,22,8',
            },
        },
        pageInfo: {
            hasNextPage: '50,14,15',
            hasPreviousPage: '50,14,16',
            startCursor: '50,14,17',
            endCursor: '50,14,18',
        },
    },
    entitlements: {
        edges: {
            cursor: '51,12,13',
            node: {
                id: '51,12,22,0',
                creationDate: '51,12,22,1',
                lastChangeDate: '51,12,22,2',
                user: {
                    id: '51,12,22,52,0',
                    creationDate: '51,12,22,52,1',
                    lastChangeDate: '51,12,22,52,2',
                    email: '51,12,22,52,47',
                    firstName: '51,12,22,52,48',
                    lastName: '51,12,22,52,49',
                },
                type: '51,12,22,53',
                resource: {
                    id: '51,12,22,54,0',
                    name: '51,12,22,54,3',
                    systemStatus: '51,12,22,54,7',
                    creationDate: '51,12,22,54,1',
                    lastChangeDate: '51,12,22,54,2',
                    errors: '51,12,22,54,8',
                },
                permissions: '51,12,22,55',
            },
        },
        pageInfo: {
            hasNextPage: '51,14,15',
            hasPreviousPage: '51,14,16',
            startCursor: '51,14,17',
            endCursor: '51,14,18',
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
    id: '0',
    creationDate: '1',
    lastChangeDate: '2',
    user: {
        id: '52,0',
        creationDate: '52,1',
        lastChangeDate: '52,2',
        email: '52,47',
        firstName: '52,48',
        lastName: '52,49',
        organizations: {
            edges: {
                cursor: '52,50,12,13',
                node: {
                    id: '52,50,12,22,0',
                    creationDate: '52,50,12,22,1',
                    lastChangeDate: '52,50,12,22,2',
                    name: '52,50,12,22,3',
                    tier: '52,50,12,22,20',
                    systemStatus: '52,50,12,22,7',
                    errors: '52,50,12,22,8',
                },
            },
            pageInfo: {
                hasNextPage: '52,50,14,15',
                hasPreviousPage: '52,50,14,16',
                startCursor: '52,50,14,17',
                endCursor: '52,50,14,18',
            },
        },
        entitlements: {
            edges: {
                cursor: '52,51,12,13',
                node: {
                    id: '52,51,12,22,0',
                    creationDate: '52,51,12,22,1',
                    lastChangeDate: '52,51,12,22,2',
                    type: '52,51,12,22,53',
                    permissions: '52,51,12,22,55',
                },
            },
            pageInfo: {
                hasNextPage: '52,51,14,15',
                hasPreviousPage: '52,51,14,16',
                startCursor: '52,51,14,17',
                endCursor: '52,51,14,18',
            },
        },
    },
    type: '53',
    resource: {
        id: '54,0',
        name: '54,3',
        systemStatus: '54,7',
        creationDate: '54,1',
        lastChangeDate: '54,2',
        errors: '54,8',
    },
    permissions: '55',
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
    id: '0',
    creationDate: '1',
    lastChangeDate: '2',
    name: '3',
    platform: '5',
    remoteId: '6',
    remoteState: '23',
    currency: '24',
    currencySymbol: '25',
    currencyOffset: '26',
    timezone: '27',
    tokenStatus: '28',
    systemStatus: '7',
    errors: '8',
    catalogs: {
        edges: {
            cursor: '56,12,13',
            node: {
                id: '56,12,22,0',
                name: '56,12,22,3',
                catalogType: '56,12,22,40',
                creationDate: '56,12,22,1',
                lastChangeDate: '56,12,22,2',
                remoteId: '56,12,22,6',
                systemStatus: '56,12,22,7',
                remoteState: '56,12,22,23',
                dataFeedId: '56,12,22,41',
                errors: '56,12,22,8',
                mediaChannel: {
                    id: '56,12,22,43,0',
                    creationDate: '56,12,22,43,1',
                    lastChangeDate: '56,12,22,43,2',
                    name: '56,12,22,43,3',
                    platform: '56,12,22,43,5',
                    remoteId: '56,12,22,43,6',
                    remoteState: '56,12,22,43,23',
                    currency: '56,12,22,43,24',
                    currencySymbol: '56,12,22,43,25',
                    currencyOffset: '56,12,22,43,26',
                    timezone: '56,12,22,43,27',
                    tokenStatus: '56,12,22,43,28',
                    systemStatus: '56,12,22,43,7',
                    errors: '56,12,22,43,8',
                },
                products: {},
            },
        },
        pageInfo: {
            hasNextPage: '56,14,15',
            hasPreviousPage: '56,14,16',
            startCursor: '56,14,17',
            endCursor: '56,14,18',
        },
    },
    marketplace: {
        id: '9,0',
        creationDate: '9,1',
        lastChangeDate: '9,2',
        name: '9,3',
        organization: {
            id: '9,10,0',
            creationDate: '9,10,1',
            lastChangeDate: '9,10,2',
            users: {
                edges: {
                    cursor: '9,10,11,12,13',
                },
                pageInfo: {
                    hasNextPage: '9,10,11,14,15',
                    hasPreviousPage: '9,10,11,14,16',
                    startCursor: '9,10,11,14,17',
                    endCursor: '9,10,11,14,18',
                },
            },
            marketplaces: {
                edges: {
                    cursor: '9,10,19,12,13',
                },
                pageInfo: {
                    hasNextPage: '9,10,19,14,15',
                    hasPreviousPage: '9,10,19,14,16',
                    startCursor: '9,10,19,14,17',
                    endCursor: '9,10,19,14,18',
                },
            },
            name: '9,10,3',
            tier: '9,10,20',
            systemStatus: '9,10,7',
            errors: '9,10,8',
        },
        mediaChannels: {
            edges: {
                cursor: '9,21,12,13',
                node: {
                    id: '9,21,12,22,0',
                    creationDate: '9,21,12,22,1',
                    lastChangeDate: '9,21,12,22,2',
                    name: '9,21,12,22,3',
                    platform: '9,21,12,22,5',
                    remoteId: '9,21,12,22,6',
                    remoteState: '9,21,12,22,23',
                    currency: '9,21,12,22,24',
                    currencySymbol: '9,21,12,22,25',
                    currencyOffset: '9,21,12,22,26',
                    timezone: '9,21,12,22,27',
                    tokenStatus: '9,21,12,22,28',
                    systemStatus: '9,21,12,22,7',
                    errors: '9,21,12,22,8',
                },
            },
            pageInfo: {
                hasNextPage: '9,21,14,15',
                hasPreviousPage: '9,21,14,16',
                startCursor: '9,21,14,17',
                endCursor: '9,21,14,18',
            },
        },
        campaignTemplates: {
            edges: {
                cursor: '9,29,12,13',
                node: {
                    id: '9,29,12,22,0',
                    creationDate: '9,29,12,22,1',
                    lastChangeDate: '9,29,12,22,2',
                    name: '9,29,12,22,3',
                    description: '9,29,12,22,4',
                    platform: '9,29,12,22,5',
                    remoteId: '9,29,12,22,6',
                    systemStatus: '9,29,12,22,7',
                    errors: '9,29,12,22,8',
                },
            },
            pageInfo: {
                hasNextPage: '9,29,14,15',
                hasPreviousPage: '9,29,14,16',
                startCursor: '9,29,14,17',
                endCursor: '9,29,14,18',
            },
        },
        vendors: {
            edges: {
                cursor: '9,30,12,13',
                node: {
                    id: '9,30,12,22,0',
                    creationDate: '9,30,12,22,1',
                    lastChangeDate: '9,30,12,22,2',
                    name: '9,30,12,22,3',
                    systemStatus: '9,30,12,22,7',
                    errors: '9,30,12,22,8',
                },
            },
            pageInfo: {
                hasNextPage: '9,30,14,15',
                hasPreviousPage: '9,30,14,16',
                startCursor: '9,30,14,17',
                endCursor: '9,30,14,18',
            },
        },
        vendorTokens: {
            edges: {
                cursor: '9,31,12,13',
                node: {
                    id: '9,31,12,22,0',
                    creationDate: '9,31,12,22,1',
                    lastChangeDate: '9,31,12,22,2',
                    token: '9,31,12,22,32',
                },
            },
            pageInfo: {
                hasNextPage: '9,31,14,15',
                hasPreviousPage: '9,31,14,16',
                startCursor: '9,31,14,17',
                endCursor: '9,31,14,18',
            },
        },
        systemStatus: '9,7',
        errors: '9,8',
        creativeTemplates: {
            edges: {
                cursor: '9,33,12,13',
                node: {
                    id: '9,33,12,22,0',
                    creationDate: '9,33,12,22,1',
                    lastChangeDate: '9,33,12,22,2',
                    name: '9,33,12,22,3',
                    height: '9,33,12,22,34',
                    width: '9,33,12,22,35',
                    systemStatus: '9,33,12,22,7',
                    errors: '9,33,12,22,8',
                },
            },
            pageInfo: {
                hasNextPage: '9,33,14,15',
                hasPreviousPage: '9,33,14,16',
                startCursor: '9,33,14,17',
                endCursor: '9,33,14,18',
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
    id: '0',
    name: '3',
    catalogType: '40',
    creationDate: '1',
    lastChangeDate: '2',
    remoteId: '6',
    systemStatus: '7',
    remoteState: '23',
    dataFeedId: '41',
    errors: '8',
    mediaChannel: {
        id: '43,0',
        creationDate: '43,1',
        lastChangeDate: '43,2',
        name: '43,3',
        platform: '43,5',
        remoteId: '43,6',
        remoteState: '43,23',
        currency: '43,24',
        currencySymbol: '43,25',
        currencyOffset: '43,26',
        timezone: '43,27',
        tokenStatus: '43,28',
        systemStatus: '43,7',
        errors: '43,8',
        catalogs: {
            edges: {
                cursor: '43,56,12,13',
                node: {
                    id: '43,56,12,22,0',
                    name: '43,56,12,22,3',
                    catalogType: '43,56,12,22,40',
                    creationDate: '43,56,12,22,1',
                    lastChangeDate: '43,56,12,22,2',
                    remoteId: '43,56,12,22,6',
                    systemStatus: '43,56,12,22,7',
                    remoteState: '43,56,12,22,23',
                    dataFeedId: '43,56,12,22,41',
                    errors: '43,56,12,22,8',
                },
            },
            pageInfo: {
                hasNextPage: '43,56,14,15',
                hasPreviousPage: '43,56,14,16',
                startCursor: '43,56,14,17',
                endCursor: '43,56,14,18',
            },
        },
        marketplace: {
            id: '43,9,0',
            creationDate: '43,9,1',
            lastChangeDate: '43,9,2',
            name: '43,9,3',
            organization: {
                id: '43,9,10,0',
                creationDate: '43,9,10,1',
                lastChangeDate: '43,9,10,2',
                users: {},
                marketplaces: {},
                name: '43,9,10,3',
                tier: '43,9,10,20',
                systemStatus: '43,9,10,7',
                errors: '43,9,10,8',
            },
            mediaChannels: {
                edges: {
                    cursor: '43,9,21,12,13',
                },
                pageInfo: {
                    hasNextPage: '43,9,21,14,15',
                    hasPreviousPage: '43,9,21,14,16',
                    startCursor: '43,9,21,14,17',
                    endCursor: '43,9,21,14,18',
                },
            },
            campaignTemplates: {
                edges: {
                    cursor: '43,9,29,12,13',
                },
                pageInfo: {
                    hasNextPage: '43,9,29,14,15',
                    hasPreviousPage: '43,9,29,14,16',
                    startCursor: '43,9,29,14,17',
                    endCursor: '43,9,29,14,18',
                },
            },
            vendors: {
                edges: {
                    cursor: '43,9,30,12,13',
                },
                pageInfo: {
                    hasNextPage: '43,9,30,14,15',
                    hasPreviousPage: '43,9,30,14,16',
                    startCursor: '43,9,30,14,17',
                    endCursor: '43,9,30,14,18',
                },
            },
            vendorTokens: {
                edges: {
                    cursor: '43,9,31,12,13',
                },
                pageInfo: {
                    hasNextPage: '43,9,31,14,15',
                    hasPreviousPage: '43,9,31,14,16',
                    startCursor: '43,9,31,14,17',
                    endCursor: '43,9,31,14,18',
                },
            },
            systemStatus: '43,9,7',
            errors: '43,9,8',
            creativeTemplates: {
                edges: {
                    cursor: '43,9,33,12,13',
                },
                pageInfo: {
                    hasNextPage: '43,9,33,14,15',
                    hasPreviousPage: '43,9,33,14,16',
                    startCursor: '43,9,33,14,17',
                    endCursor: '43,9,33,14,18',
                },
            },
        },
    },
    products: {
        edges: {
            cursor: '57,12,13',
            node: {
                id: '57,12,22,0',
                creationDate: '57,12,22,1',
                lastChangeDate: '57,12,22,2',
                name: '57,12,22,3',
                sku: '57,12,22,58',
                remoteState: '57,12,22,23',
                marketingCampaigns: {},
                catalog: {
                    id: '57,12,22,39,0',
                    name: '57,12,22,39,3',
                    catalogType: '57,12,22,39,40',
                    creationDate: '57,12,22,39,1',
                    lastChangeDate: '57,12,22,39,2',
                    remoteId: '57,12,22,39,6',
                    systemStatus: '57,12,22,39,7',
                    remoteState: '57,12,22,39,23',
                    dataFeedId: '57,12,22,39,41',
                    errors: '57,12,22,39,8',
                },
                metadata: '57,12,22,59',
                vendor: {
                    id: '57,12,22,38,0',
                    creationDate: '57,12,22,38,1',
                    lastChangeDate: '57,12,22,38,2',
                    name: '57,12,22,38,3',
                    systemStatus: '57,12,22,38,7',
                    errors: '57,12,22,38,8',
                },
                systemStatus: '57,12,22,7',
                errors: '57,12,22,8',
                warnings: '57,12,22,60',
            },
        },
        pageInfo: {
            hasNextPage: '57,14,15',
            hasPreviousPage: '57,14,16',
            startCursor: '57,14,17',
            endCursor: '57,14,18',
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
    id: '0',
    creationDate: '1',
    lastChangeDate: '2',
    name: '3',
    sku: '58',
    remoteState: '23',
    marketingCampaigns: {
        edges: {
            cursor: '36,12,13',
            node: {
                id: '36,12,22,0',
                creationDate: '36,12,22,1',
                lastChangeDate: '36,12,22,2',
                name: '36,12,22,3',
                status: '36,12,22,37',
                marketingAds: {},
                products: {},
                vendor: {
                    id: '36,12,22,38,0',
                    creationDate: '36,12,22,38,1',
                    lastChangeDate: '36,12,22,38,2',
                    name: '36,12,22,38,3',
                    systemStatus: '36,12,22,38,7',
                    errors: '36,12,22,38,8',
                },
                catalog: {
                    id: '36,12,22,39,0',
                    name: '36,12,22,39,3',
                    catalogType: '36,12,22,39,40',
                    creationDate: '36,12,22,39,1',
                    lastChangeDate: '36,12,22,39,2',
                    remoteId: '36,12,22,39,6',
                    systemStatus: '36,12,22,39,7',
                    remoteState: '36,12,22,39,23',
                    dataFeedId: '36,12,22,39,41',
                    errors: '36,12,22,39,8',
                },
                campaignTemplate: {
                    id: '36,12,22,42,0',
                    creationDate: '36,12,22,42,1',
                    lastChangeDate: '36,12,22,42,2',
                    name: '36,12,22,42,3',
                    description: '36,12,22,42,4',
                    platform: '36,12,22,42,5',
                    remoteId: '36,12,22,42,6',
                    systemStatus: '36,12,22,42,7',
                    errors: '36,12,22,42,8',
                },
                mediaChannel: {
                    id: '36,12,22,43,0',
                    creationDate: '36,12,22,43,1',
                    lastChangeDate: '36,12,22,43,2',
                    name: '36,12,22,43,3',
                    platform: '36,12,22,43,5',
                    remoteId: '36,12,22,43,6',
                    remoteState: '36,12,22,43,23',
                    currency: '36,12,22,43,24',
                    currencySymbol: '36,12,22,43,25',
                    currencyOffset: '36,12,22,43,26',
                    timezone: '36,12,22,43,27',
                    tokenStatus: '36,12,22,43,28',
                    systemStatus: '36,12,22,43,7',
                    errors: '36,12,22,43,8',
                },
                results: {},
                creativeSpec: '36,12,22,44',
                runTimeSpec: '36,12,22,45',
                resultsSource: '36,12,22,46',
                systemStatus: '36,12,22,7',
                errors: '36,12,22,8',
            },
        },
        pageInfo: {
            hasNextPage: '36,14,15',
            hasPreviousPage: '36,14,16',
            startCursor: '36,14,17',
            endCursor: '36,14,18',
        },
    },
    catalog: {
        id: '39,0',
        name: '39,3',
        catalogType: '39,40',
        creationDate: '39,1',
        lastChangeDate: '39,2',
        remoteId: '39,6',
        systemStatus: '39,7',
        remoteState: '39,23',
        dataFeedId: '39,41',
        errors: '39,8',
        mediaChannel: {
            id: '39,43,0',
            creationDate: '39,43,1',
            lastChangeDate: '39,43,2',
            name: '39,43,3',
            platform: '39,43,5',
            remoteId: '39,43,6',
            remoteState: '39,43,23',
            currency: '39,43,24',
            currencySymbol: '39,43,25',
            currencyOffset: '39,43,26',
            timezone: '39,43,27',
            tokenStatus: '39,43,28',
            systemStatus: '39,43,7',
            errors: '39,43,8',
            catalogs: {
                edges: {
                    cursor: '39,43,56,12,13',
                },
                pageInfo: {
                    hasNextPage: '39,43,56,14,15',
                    hasPreviousPage: '39,43,56,14,16',
                    startCursor: '39,43,56,14,17',
                    endCursor: '39,43,56,14,18',
                },
            },
            marketplace: {
                id: '39,43,9,0',
                creationDate: '39,43,9,1',
                lastChangeDate: '39,43,9,2',
                name: '39,43,9,3',
                organization: {
                    id: '39,43,9,10,0',
                    creationDate: '39,43,9,10,1',
                    lastChangeDate: '39,43,9,10,2',
                    name: '39,43,9,10,3',
                    tier: '39,43,9,10,20',
                    systemStatus: '39,43,9,10,7',
                    errors: '39,43,9,10,8',
                },
                mediaChannels: {},
                campaignTemplates: {},
                vendors: {},
                vendorTokens: {},
                systemStatus: '39,43,9,7',
                errors: '39,43,9,8',
                creativeTemplates: {},
            },
        },
        products: {
            edges: {
                cursor: '39,57,12,13',
                node: {
                    id: '39,57,12,22,0',
                    creationDate: '39,57,12,22,1',
                    lastChangeDate: '39,57,12,22,2',
                    name: '39,57,12,22,3',
                    sku: '39,57,12,22,58',
                    remoteState: '39,57,12,22,23',
                    metadata: '39,57,12,22,59',
                    systemStatus: '39,57,12,22,7',
                    errors: '39,57,12,22,8',
                    warnings: '39,57,12,22,60',
                },
            },
            pageInfo: {
                hasNextPage: '39,57,14,15',
                hasPreviousPage: '39,57,14,16',
                startCursor: '39,57,14,17',
                endCursor: '39,57,14,18',
            },
        },
    },
    metadata: '59',
    vendor: {
        id: '38,0',
        creationDate: '38,1',
        lastChangeDate: '38,2',
        name: '38,3',
        marketplace: {
            id: '38,9,0',
            creationDate: '38,9,1',
            lastChangeDate: '38,9,2',
            name: '38,9,3',
            organization: {
                id: '38,9,10,0',
                creationDate: '38,9,10,1',
                lastChangeDate: '38,9,10,2',
                users: {},
                marketplaces: {},
                name: '38,9,10,3',
                tier: '38,9,10,20',
                systemStatus: '38,9,10,7',
                errors: '38,9,10,8',
            },
            mediaChannels: {
                edges: {
                    cursor: '38,9,21,12,13',
                },
                pageInfo: {
                    hasNextPage: '38,9,21,14,15',
                    hasPreviousPage: '38,9,21,14,16',
                    startCursor: '38,9,21,14,17',
                    endCursor: '38,9,21,14,18',
                },
            },
            campaignTemplates: {
                edges: {
                    cursor: '38,9,29,12,13',
                },
                pageInfo: {
                    hasNextPage: '38,9,29,14,15',
                    hasPreviousPage: '38,9,29,14,16',
                    startCursor: '38,9,29,14,17',
                    endCursor: '38,9,29,14,18',
                },
            },
            vendors: {
                edges: {
                    cursor: '38,9,30,12,13',
                },
                pageInfo: {
                    hasNextPage: '38,9,30,14,15',
                    hasPreviousPage: '38,9,30,14,16',
                    startCursor: '38,9,30,14,17',
                    endCursor: '38,9,30,14,18',
                },
            },
            vendorTokens: {
                edges: {
                    cursor: '38,9,31,12,13',
                },
                pageInfo: {
                    hasNextPage: '38,9,31,14,15',
                    hasPreviousPage: '38,9,31,14,16',
                    startCursor: '38,9,31,14,17',
                    endCursor: '38,9,31,14,18',
                },
            },
            systemStatus: '38,9,7',
            errors: '38,9,8',
            creativeTemplates: {
                edges: {
                    cursor: '38,9,33,12,13',
                },
                pageInfo: {
                    hasNextPage: '38,9,33,14,15',
                    hasPreviousPage: '38,9,33,14,16',
                    startCursor: '38,9,33,14,17',
                    endCursor: '38,9,33,14,18',
                },
            },
        },
        vendorTokens: {
            edges: {
                cursor: '38,31,12,13',
                node: {
                    id: '38,31,12,22,0',
                    creationDate: '38,31,12,22,1',
                    lastChangeDate: '38,31,12,22,2',
                    token: '38,31,12,22,32',
                },
            },
            pageInfo: {
                hasNextPage: '38,31,14,15',
                hasPreviousPage: '38,31,14,16',
                startCursor: '38,31,14,17',
                endCursor: '38,31,14,18',
            },
        },
        products: {
            edges: {
                cursor: '38,57,12,13',
                node: {
                    id: '38,57,12,22,0',
                    creationDate: '38,57,12,22,1',
                    lastChangeDate: '38,57,12,22,2',
                    name: '38,57,12,22,3',
                    sku: '38,57,12,22,58',
                    remoteState: '38,57,12,22,23',
                    metadata: '38,57,12,22,59',
                    systemStatus: '38,57,12,22,7',
                    errors: '38,57,12,22,8',
                    warnings: '38,57,12,22,60',
                },
            },
            pageInfo: {
                hasNextPage: '38,57,14,15',
                hasPreviousPage: '38,57,14,16',
                startCursor: '38,57,14,17',
                endCursor: '38,57,14,18',
            },
        },
        systemStatus: '38,7',
        errors: '38,8',
    },
    systemStatus: '7',
    errors: '8',
    warnings: '60',
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
    id: '0',
    creationDate: '1',
    lastChangeDate: '2',
    name: '3',
    status: '37',
    marketingAds: {
        edges: {
            cursor: '61,12,13',
            node: {
                id: '61,12,22,0',
                creationDate: '61,12,22,1',
                lastChangeDate: '61,12,22,2',
                remoteId: '61,12,22,6',
                systemStatus: '61,12,22,7',
                errors: '61,12,22,8',
                preview: '61,12,22,62',
                resultsSource: '61,12,22,46',
                results: {},
                marketingCampaign: {
                    id: '61,12,22,63,0',
                    creationDate: '61,12,22,63,1',
                    lastChangeDate: '61,12,22,63,2',
                    name: '61,12,22,63,3',
                    status: '61,12,22,63,37',
                    creativeSpec: '61,12,22,63,44',
                    runTimeSpec: '61,12,22,63,45',
                    resultsSource: '61,12,22,63,46',
                    systemStatus: '61,12,22,63,7',
                    errors: '61,12,22,63,8',
                },
                vendor: {
                    id: '61,12,22,38,0',
                    creationDate: '61,12,22,38,1',
                    lastChangeDate: '61,12,22,38,2',
                    name: '61,12,22,38,3',
                    systemStatus: '61,12,22,38,7',
                    errors: '61,12,22,38,8',
                },
            },
        },
        pageInfo: {
            hasNextPage: '61,14,15',
            hasPreviousPage: '61,14,16',
            startCursor: '61,14,17',
            endCursor: '61,14,18',
        },
    },
    products: {
        edges: {
            cursor: '57,12,13',
            node: {
                id: '57,12,22,0',
                creationDate: '57,12,22,1',
                lastChangeDate: '57,12,22,2',
                name: '57,12,22,3',
                sku: '57,12,22,58',
                remoteState: '57,12,22,23',
                marketingCampaigns: {},
                catalog: {
                    id: '57,12,22,39,0',
                    name: '57,12,22,39,3',
                    catalogType: '57,12,22,39,40',
                    creationDate: '57,12,22,39,1',
                    lastChangeDate: '57,12,22,39,2',
                    remoteId: '57,12,22,39,6',
                    systemStatus: '57,12,22,39,7',
                    remoteState: '57,12,22,39,23',
                    dataFeedId: '57,12,22,39,41',
                    errors: '57,12,22,39,8',
                },
                metadata: '57,12,22,59',
                vendor: {
                    id: '57,12,22,38,0',
                    creationDate: '57,12,22,38,1',
                    lastChangeDate: '57,12,22,38,2',
                    name: '57,12,22,38,3',
                    systemStatus: '57,12,22,38,7',
                    errors: '57,12,22,38,8',
                },
                systemStatus: '57,12,22,7',
                errors: '57,12,22,8',
                warnings: '57,12,22,60',
            },
        },
        pageInfo: {
            hasNextPage: '57,14,15',
            hasPreviousPage: '57,14,16',
            startCursor: '57,14,17',
            endCursor: '57,14,18',
        },
    },
    vendor: {
        id: '38,0',
        creationDate: '38,1',
        lastChangeDate: '38,2',
        name: '38,3',
        marketplace: {
            id: '38,9,0',
            creationDate: '38,9,1',
            lastChangeDate: '38,9,2',
            name: '38,9,3',
            organization: {
                id: '38,9,10,0',
                creationDate: '38,9,10,1',
                lastChangeDate: '38,9,10,2',
                users: {},
                marketplaces: {},
                name: '38,9,10,3',
                tier: '38,9,10,20',
                systemStatus: '38,9,10,7',
                errors: '38,9,10,8',
            },
            mediaChannels: {
                edges: {
                    cursor: '38,9,21,12,13',
                },
                pageInfo: {
                    hasNextPage: '38,9,21,14,15',
                    hasPreviousPage: '38,9,21,14,16',
                    startCursor: '38,9,21,14,17',
                    endCursor: '38,9,21,14,18',
                },
            },
            campaignTemplates: {
                edges: {
                    cursor: '38,9,29,12,13',
                },
                pageInfo: {
                    hasNextPage: '38,9,29,14,15',
                    hasPreviousPage: '38,9,29,14,16',
                    startCursor: '38,9,29,14,17',
                    endCursor: '38,9,29,14,18',
                },
            },
            vendors: {
                edges: {
                    cursor: '38,9,30,12,13',
                },
                pageInfo: {
                    hasNextPage: '38,9,30,14,15',
                    hasPreviousPage: '38,9,30,14,16',
                    startCursor: '38,9,30,14,17',
                    endCursor: '38,9,30,14,18',
                },
            },
            vendorTokens: {
                edges: {
                    cursor: '38,9,31,12,13',
                },
                pageInfo: {
                    hasNextPage: '38,9,31,14,15',
                    hasPreviousPage: '38,9,31,14,16',
                    startCursor: '38,9,31,14,17',
                    endCursor: '38,9,31,14,18',
                },
            },
            systemStatus: '38,9,7',
            errors: '38,9,8',
            creativeTemplates: {
                edges: {
                    cursor: '38,9,33,12,13',
                },
                pageInfo: {
                    hasNextPage: '38,9,33,14,15',
                    hasPreviousPage: '38,9,33,14,16',
                    startCursor: '38,9,33,14,17',
                    endCursor: '38,9,33,14,18',
                },
            },
        },
        vendorTokens: {
            edges: {
                cursor: '38,31,12,13',
                node: {
                    id: '38,31,12,22,0',
                    creationDate: '38,31,12,22,1',
                    lastChangeDate: '38,31,12,22,2',
                    token: '38,31,12,22,32',
                },
            },
            pageInfo: {
                hasNextPage: '38,31,14,15',
                hasPreviousPage: '38,31,14,16',
                startCursor: '38,31,14,17',
                endCursor: '38,31,14,18',
            },
        },
        products: {
            edges: {
                cursor: '38,57,12,13',
                node: {
                    id: '38,57,12,22,0',
                    creationDate: '38,57,12,22,1',
                    lastChangeDate: '38,57,12,22,2',
                    name: '38,57,12,22,3',
                    sku: '38,57,12,22,58',
                    remoteState: '38,57,12,22,23',
                    metadata: '38,57,12,22,59',
                    systemStatus: '38,57,12,22,7',
                    errors: '38,57,12,22,8',
                    warnings: '38,57,12,22,60',
                },
            },
            pageInfo: {
                hasNextPage: '38,57,14,15',
                hasPreviousPage: '38,57,14,16',
                startCursor: '38,57,14,17',
                endCursor: '38,57,14,18',
            },
        },
        systemStatus: '38,7',
        errors: '38,8',
    },
    catalog: {
        id: '39,0',
        name: '39,3',
        catalogType: '39,40',
        creationDate: '39,1',
        lastChangeDate: '39,2',
        remoteId: '39,6',
        systemStatus: '39,7',
        remoteState: '39,23',
        dataFeedId: '39,41',
        errors: '39,8',
        mediaChannel: {
            id: '39,43,0',
            creationDate: '39,43,1',
            lastChangeDate: '39,43,2',
            name: '39,43,3',
            platform: '39,43,5',
            remoteId: '39,43,6',
            remoteState: '39,43,23',
            currency: '39,43,24',
            currencySymbol: '39,43,25',
            currencyOffset: '39,43,26',
            timezone: '39,43,27',
            tokenStatus: '39,43,28',
            systemStatus: '39,43,7',
            errors: '39,43,8',
            catalogs: {
                edges: {
                    cursor: '39,43,56,12,13',
                },
                pageInfo: {
                    hasNextPage: '39,43,56,14,15',
                    hasPreviousPage: '39,43,56,14,16',
                    startCursor: '39,43,56,14,17',
                    endCursor: '39,43,56,14,18',
                },
            },
            marketplace: {
                id: '39,43,9,0',
                creationDate: '39,43,9,1',
                lastChangeDate: '39,43,9,2',
                name: '39,43,9,3',
                organization: {
                    id: '39,43,9,10,0',
                    creationDate: '39,43,9,10,1',
                    lastChangeDate: '39,43,9,10,2',
                    name: '39,43,9,10,3',
                    tier: '39,43,9,10,20',
                    systemStatus: '39,43,9,10,7',
                    errors: '39,43,9,10,8',
                },
                mediaChannels: {},
                campaignTemplates: {},
                vendors: {},
                vendorTokens: {},
                systemStatus: '39,43,9,7',
                errors: '39,43,9,8',
                creativeTemplates: {},
            },
        },
        products: {
            edges: {
                cursor: '39,57,12,13',
                node: {
                    id: '39,57,12,22,0',
                    creationDate: '39,57,12,22,1',
                    lastChangeDate: '39,57,12,22,2',
                    name: '39,57,12,22,3',
                    sku: '39,57,12,22,58',
                    remoteState: '39,57,12,22,23',
                    metadata: '39,57,12,22,59',
                    systemStatus: '39,57,12,22,7',
                    errors: '39,57,12,22,8',
                    warnings: '39,57,12,22,60',
                },
            },
            pageInfo: {
                hasNextPage: '39,57,14,15',
                hasPreviousPage: '39,57,14,16',
                startCursor: '39,57,14,17',
                endCursor: '39,57,14,18',
            },
        },
    },
    campaignTemplate: {
        id: '42,0',
        creationDate: '42,1',
        lastChangeDate: '42,2',
        name: '42,3',
        description: '42,4',
        platform: '42,5',
        remoteId: '42,6',
        systemStatus: '42,7',
        errors: '42,8',
        marketplace: {
            id: '42,9,0',
            creationDate: '42,9,1',
            lastChangeDate: '42,9,2',
            name: '42,9,3',
            organization: {
                id: '42,9,10,0',
                creationDate: '42,9,10,1',
                lastChangeDate: '42,9,10,2',
                users: {},
                marketplaces: {},
                name: '42,9,10,3',
                tier: '42,9,10,20',
                systemStatus: '42,9,10,7',
                errors: '42,9,10,8',
            },
            mediaChannels: {
                edges: {
                    cursor: '42,9,21,12,13',
                },
                pageInfo: {
                    hasNextPage: '42,9,21,14,15',
                    hasPreviousPage: '42,9,21,14,16',
                    startCursor: '42,9,21,14,17',
                    endCursor: '42,9,21,14,18',
                },
            },
            campaignTemplates: {
                edges: {
                    cursor: '42,9,29,12,13',
                },
                pageInfo: {
                    hasNextPage: '42,9,29,14,15',
                    hasPreviousPage: '42,9,29,14,16',
                    startCursor: '42,9,29,14,17',
                    endCursor: '42,9,29,14,18',
                },
            },
            vendors: {
                edges: {
                    cursor: '42,9,30,12,13',
                },
                pageInfo: {
                    hasNextPage: '42,9,30,14,15',
                    hasPreviousPage: '42,9,30,14,16',
                    startCursor: '42,9,30,14,17',
                    endCursor: '42,9,30,14,18',
                },
            },
            vendorTokens: {
                edges: {
                    cursor: '42,9,31,12,13',
                },
                pageInfo: {
                    hasNextPage: '42,9,31,14,15',
                    hasPreviousPage: '42,9,31,14,16',
                    startCursor: '42,9,31,14,17',
                    endCursor: '42,9,31,14,18',
                },
            },
            systemStatus: '42,9,7',
            errors: '42,9,8',
            creativeTemplates: {
                edges: {
                    cursor: '42,9,33,12,13',
                },
                pageInfo: {
                    hasNextPage: '42,9,33,14,15',
                    hasPreviousPage: '42,9,33,14,16',
                    startCursor: '42,9,33,14,17',
                    endCursor: '42,9,33,14,18',
                },
            },
        },
        marketingCampaigns: {
            edges: {
                cursor: '42,36,12,13',
                node: {
                    id: '42,36,12,22,0',
                    creationDate: '42,36,12,22,1',
                    lastChangeDate: '42,36,12,22,2',
                    name: '42,36,12,22,3',
                    status: '42,36,12,22,37',
                    creativeSpec: '42,36,12,22,44',
                    runTimeSpec: '42,36,12,22,45',
                    resultsSource: '42,36,12,22,46',
                    systemStatus: '42,36,12,22,7',
                    errors: '42,36,12,22,8',
                },
            },
            pageInfo: {
                hasNextPage: '42,36,14,15',
                hasPreviousPage: '42,36,14,16',
                startCursor: '42,36,14,17',
                endCursor: '42,36,14,18',
            },
        },
    },
    mediaChannel: {
        id: '43,0',
        creationDate: '43,1',
        lastChangeDate: '43,2',
        name: '43,3',
        platform: '43,5',
        remoteId: '43,6',
        remoteState: '43,23',
        currency: '43,24',
        currencySymbol: '43,25',
        currencyOffset: '43,26',
        timezone: '43,27',
        tokenStatus: '43,28',
        systemStatus: '43,7',
        errors: '43,8',
        catalogs: {
            edges: {
                cursor: '43,56,12,13',
                node: {
                    id: '43,56,12,22,0',
                    name: '43,56,12,22,3',
                    catalogType: '43,56,12,22,40',
                    creationDate: '43,56,12,22,1',
                    lastChangeDate: '43,56,12,22,2',
                    remoteId: '43,56,12,22,6',
                    systemStatus: '43,56,12,22,7',
                    remoteState: '43,56,12,22,23',
                    dataFeedId: '43,56,12,22,41',
                    errors: '43,56,12,22,8',
                },
            },
            pageInfo: {
                hasNextPage: '43,56,14,15',
                hasPreviousPage: '43,56,14,16',
                startCursor: '43,56,14,17',
                endCursor: '43,56,14,18',
            },
        },
        marketplace: {
            id: '43,9,0',
            creationDate: '43,9,1',
            lastChangeDate: '43,9,2',
            name: '43,9,3',
            organization: {
                id: '43,9,10,0',
                creationDate: '43,9,10,1',
                lastChangeDate: '43,9,10,2',
                users: {},
                marketplaces: {},
                name: '43,9,10,3',
                tier: '43,9,10,20',
                systemStatus: '43,9,10,7',
                errors: '43,9,10,8',
            },
            mediaChannels: {
                edges: {
                    cursor: '43,9,21,12,13',
                },
                pageInfo: {
                    hasNextPage: '43,9,21,14,15',
                    hasPreviousPage: '43,9,21,14,16',
                    startCursor: '43,9,21,14,17',
                    endCursor: '43,9,21,14,18',
                },
            },
            campaignTemplates: {
                edges: {
                    cursor: '43,9,29,12,13',
                },
                pageInfo: {
                    hasNextPage: '43,9,29,14,15',
                    hasPreviousPage: '43,9,29,14,16',
                    startCursor: '43,9,29,14,17',
                    endCursor: '43,9,29,14,18',
                },
            },
            vendors: {
                edges: {
                    cursor: '43,9,30,12,13',
                },
                pageInfo: {
                    hasNextPage: '43,9,30,14,15',
                    hasPreviousPage: '43,9,30,14,16',
                    startCursor: '43,9,30,14,17',
                    endCursor: '43,9,30,14,18',
                },
            },
            vendorTokens: {
                edges: {
                    cursor: '43,9,31,12,13',
                },
                pageInfo: {
                    hasNextPage: '43,9,31,14,15',
                    hasPreviousPage: '43,9,31,14,16',
                    startCursor: '43,9,31,14,17',
                    endCursor: '43,9,31,14,18',
                },
            },
            systemStatus: '43,9,7',
            errors: '43,9,8',
            creativeTemplates: {
                edges: {
                    cursor: '43,9,33,12,13',
                },
                pageInfo: {
                    hasNextPage: '43,9,33,14,15',
                    hasPreviousPage: '43,9,33,14,16',
                    startCursor: '43,9,33,14,17',
                    endCursor: '43,9,33,14,18',
                },
            },
        },
    },
    results: {
        edges: {
            cursor: '64,12,13',
            node: {
                id: '64,12,22,0',
                creationDate: '64,12,22,1',
                lastChangeDate: '64,12,22,2',
                date: '64,12,22,65',
                analytics: {
                    results: '64,12,22,66,64',
                    impressions: '64,12,22,66,67',
                    clicks: '64,12,22,66,68',
                    spend: '64,12,22,66,69',
                    purchases: '64,12,22,66,70',
                    purchasesValue: '64,12,22,66,71',
                },
                type: '64,12,22,53',
                resource: {
                    id: '64,12,22,54,0',
                    creationDate: '64,12,22,54,1',
                    lastChangeDate: '64,12,22,54,2',
                },
                vendor: {
                    id: '64,12,22,38,0',
                    creationDate: '64,12,22,38,1',
                    lastChangeDate: '64,12,22,38,2',
                    name: '64,12,22,38,3',
                    systemStatus: '64,12,22,38,7',
                    errors: '64,12,22,38,8',
                },
            },
        },
        pageInfo: {
            hasNextPage: '64,14,15',
            hasPreviousPage: '64,14,16',
            startCursor: '64,14,17',
            endCursor: '64,14,18',
        },
    },
    creativeSpec: '44',
    runTimeSpec: '45',
    resultsSource: '46',
    systemStatus: '7',
    errors: '8',
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
    id: '0',
    creationDate: '1',
    lastChangeDate: '2',
    name: '3',
    marketplace: {
        id: '9,0',
        creationDate: '9,1',
        lastChangeDate: '9,2',
        name: '9,3',
        organization: {
            id: '9,10,0',
            creationDate: '9,10,1',
            lastChangeDate: '9,10,2',
            users: {
                edges: {
                    cursor: '9,10,11,12,13',
                },
                pageInfo: {
                    hasNextPage: '9,10,11,14,15',
                    hasPreviousPage: '9,10,11,14,16',
                    startCursor: '9,10,11,14,17',
                    endCursor: '9,10,11,14,18',
                },
            },
            marketplaces: {
                edges: {
                    cursor: '9,10,19,12,13',
                },
                pageInfo: {
                    hasNextPage: '9,10,19,14,15',
                    hasPreviousPage: '9,10,19,14,16',
                    startCursor: '9,10,19,14,17',
                    endCursor: '9,10,19,14,18',
                },
            },
            name: '9,10,3',
            tier: '9,10,20',
            systemStatus: '9,10,7',
            errors: '9,10,8',
        },
        mediaChannels: {
            edges: {
                cursor: '9,21,12,13',
                node: {
                    id: '9,21,12,22,0',
                    creationDate: '9,21,12,22,1',
                    lastChangeDate: '9,21,12,22,2',
                    name: '9,21,12,22,3',
                    platform: '9,21,12,22,5',
                    remoteId: '9,21,12,22,6',
                    remoteState: '9,21,12,22,23',
                    currency: '9,21,12,22,24',
                    currencySymbol: '9,21,12,22,25',
                    currencyOffset: '9,21,12,22,26',
                    timezone: '9,21,12,22,27',
                    tokenStatus: '9,21,12,22,28',
                    systemStatus: '9,21,12,22,7',
                    errors: '9,21,12,22,8',
                },
            },
            pageInfo: {
                hasNextPage: '9,21,14,15',
                hasPreviousPage: '9,21,14,16',
                startCursor: '9,21,14,17',
                endCursor: '9,21,14,18',
            },
        },
        campaignTemplates: {
            edges: {
                cursor: '9,29,12,13',
                node: {
                    id: '9,29,12,22,0',
                    creationDate: '9,29,12,22,1',
                    lastChangeDate: '9,29,12,22,2',
                    name: '9,29,12,22,3',
                    description: '9,29,12,22,4',
                    platform: '9,29,12,22,5',
                    remoteId: '9,29,12,22,6',
                    systemStatus: '9,29,12,22,7',
                    errors: '9,29,12,22,8',
                },
            },
            pageInfo: {
                hasNextPage: '9,29,14,15',
                hasPreviousPage: '9,29,14,16',
                startCursor: '9,29,14,17',
                endCursor: '9,29,14,18',
            },
        },
        vendors: {
            edges: {
                cursor: '9,30,12,13',
                node: {
                    id: '9,30,12,22,0',
                    creationDate: '9,30,12,22,1',
                    lastChangeDate: '9,30,12,22,2',
                    name: '9,30,12,22,3',
                    systemStatus: '9,30,12,22,7',
                    errors: '9,30,12,22,8',
                },
            },
            pageInfo: {
                hasNextPage: '9,30,14,15',
                hasPreviousPage: '9,30,14,16',
                startCursor: '9,30,14,17',
                endCursor: '9,30,14,18',
            },
        },
        vendorTokens: {
            edges: {
                cursor: '9,31,12,13',
                node: {
                    id: '9,31,12,22,0',
                    creationDate: '9,31,12,22,1',
                    lastChangeDate: '9,31,12,22,2',
                    token: '9,31,12,22,32',
                },
            },
            pageInfo: {
                hasNextPage: '9,31,14,15',
                hasPreviousPage: '9,31,14,16',
                startCursor: '9,31,14,17',
                endCursor: '9,31,14,18',
            },
        },
        systemStatus: '9,7',
        errors: '9,8',
        creativeTemplates: {
            edges: {
                cursor: '9,33,12,13',
                node: {
                    id: '9,33,12,22,0',
                    creationDate: '9,33,12,22,1',
                    lastChangeDate: '9,33,12,22,2',
                    name: '9,33,12,22,3',
                    height: '9,33,12,22,34',
                    width: '9,33,12,22,35',
                    systemStatus: '9,33,12,22,7',
                    errors: '9,33,12,22,8',
                },
            },
            pageInfo: {
                hasNextPage: '9,33,14,15',
                hasPreviousPage: '9,33,14,16',
                startCursor: '9,33,14,17',
                endCursor: '9,33,14,18',
            },
        },
    },
    vendorTokens: {
        edges: {
            cursor: '31,12,13',
            node: {
                id: '31,12,22,0',
                creationDate: '31,12,22,1',
                lastChangeDate: '31,12,22,2',
                marketplace: {
                    id: '31,12,22,9,0',
                    creationDate: '31,12,22,9,1',
                    lastChangeDate: '31,12,22,9,2',
                    name: '31,12,22,9,3',
                    systemStatus: '31,12,22,9,7',
                    errors: '31,12,22,9,8',
                },
                vendor: {
                    id: '31,12,22,38,0',
                    creationDate: '31,12,22,38,1',
                    lastChangeDate: '31,12,22,38,2',
                    name: '31,12,22,38,3',
                    systemStatus: '31,12,22,38,7',
                    errors: '31,12,22,38,8',
                },
                token: '31,12,22,32',
            },
        },
        pageInfo: {
            hasNextPage: '31,14,15',
            hasPreviousPage: '31,14,16',
            startCursor: '31,14,17',
            endCursor: '31,14,18',
        },
    },
    products: {
        edges: {
            cursor: '57,12,13',
            node: {
                id: '57,12,22,0',
                creationDate: '57,12,22,1',
                lastChangeDate: '57,12,22,2',
                name: '57,12,22,3',
                sku: '57,12,22,58',
                remoteState: '57,12,22,23',
                marketingCampaigns: {},
                catalog: {
                    id: '57,12,22,39,0',
                    name: '57,12,22,39,3',
                    catalogType: '57,12,22,39,40',
                    creationDate: '57,12,22,39,1',
                    lastChangeDate: '57,12,22,39,2',
                    remoteId: '57,12,22,39,6',
                    systemStatus: '57,12,22,39,7',
                    remoteState: '57,12,22,39,23',
                    dataFeedId: '57,12,22,39,41',
                    errors: '57,12,22,39,8',
                },
                metadata: '57,12,22,59',
                vendor: {
                    id: '57,12,22,38,0',
                    creationDate: '57,12,22,38,1',
                    lastChangeDate: '57,12,22,38,2',
                    name: '57,12,22,38,3',
                    systemStatus: '57,12,22,38,7',
                    errors: '57,12,22,38,8',
                },
                systemStatus: '57,12,22,7',
                errors: '57,12,22,8',
                warnings: '57,12,22,60',
            },
        },
        pageInfo: {
            hasNextPage: '57,14,15',
            hasPreviousPage: '57,14,16',
            startCursor: '57,14,17',
            endCursor: '57,14,18',
        },
    },
    systemStatus: '7',
    errors: '8',
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
    id: '0',
    creationDate: '1',
    lastChangeDate: '2',
    marketplace: {
        id: '9,0',
        creationDate: '9,1',
        lastChangeDate: '9,2',
        name: '9,3',
        organization: {
            id: '9,10,0',
            creationDate: '9,10,1',
            lastChangeDate: '9,10,2',
            users: {
                edges: {
                    cursor: '9,10,11,12,13',
                },
                pageInfo: {
                    hasNextPage: '9,10,11,14,15',
                    hasPreviousPage: '9,10,11,14,16',
                    startCursor: '9,10,11,14,17',
                    endCursor: '9,10,11,14,18',
                },
            },
            marketplaces: {
                edges: {
                    cursor: '9,10,19,12,13',
                },
                pageInfo: {
                    hasNextPage: '9,10,19,14,15',
                    hasPreviousPage: '9,10,19,14,16',
                    startCursor: '9,10,19,14,17',
                    endCursor: '9,10,19,14,18',
                },
            },
            name: '9,10,3',
            tier: '9,10,20',
            systemStatus: '9,10,7',
            errors: '9,10,8',
        },
        mediaChannels: {
            edges: {
                cursor: '9,21,12,13',
                node: {
                    id: '9,21,12,22,0',
                    creationDate: '9,21,12,22,1',
                    lastChangeDate: '9,21,12,22,2',
                    name: '9,21,12,22,3',
                    platform: '9,21,12,22,5',
                    remoteId: '9,21,12,22,6',
                    remoteState: '9,21,12,22,23',
                    currency: '9,21,12,22,24',
                    currencySymbol: '9,21,12,22,25',
                    currencyOffset: '9,21,12,22,26',
                    timezone: '9,21,12,22,27',
                    tokenStatus: '9,21,12,22,28',
                    systemStatus: '9,21,12,22,7',
                    errors: '9,21,12,22,8',
                },
            },
            pageInfo: {
                hasNextPage: '9,21,14,15',
                hasPreviousPage: '9,21,14,16',
                startCursor: '9,21,14,17',
                endCursor: '9,21,14,18',
            },
        },
        campaignTemplates: {
            edges: {
                cursor: '9,29,12,13',
                node: {
                    id: '9,29,12,22,0',
                    creationDate: '9,29,12,22,1',
                    lastChangeDate: '9,29,12,22,2',
                    name: '9,29,12,22,3',
                    description: '9,29,12,22,4',
                    platform: '9,29,12,22,5',
                    remoteId: '9,29,12,22,6',
                    systemStatus: '9,29,12,22,7',
                    errors: '9,29,12,22,8',
                },
            },
            pageInfo: {
                hasNextPage: '9,29,14,15',
                hasPreviousPage: '9,29,14,16',
                startCursor: '9,29,14,17',
                endCursor: '9,29,14,18',
            },
        },
        vendors: {
            edges: {
                cursor: '9,30,12,13',
                node: {
                    id: '9,30,12,22,0',
                    creationDate: '9,30,12,22,1',
                    lastChangeDate: '9,30,12,22,2',
                    name: '9,30,12,22,3',
                    systemStatus: '9,30,12,22,7',
                    errors: '9,30,12,22,8',
                },
            },
            pageInfo: {
                hasNextPage: '9,30,14,15',
                hasPreviousPage: '9,30,14,16',
                startCursor: '9,30,14,17',
                endCursor: '9,30,14,18',
            },
        },
        vendorTokens: {
            edges: {
                cursor: '9,31,12,13',
                node: {
                    id: '9,31,12,22,0',
                    creationDate: '9,31,12,22,1',
                    lastChangeDate: '9,31,12,22,2',
                    token: '9,31,12,22,32',
                },
            },
            pageInfo: {
                hasNextPage: '9,31,14,15',
                hasPreviousPage: '9,31,14,16',
                startCursor: '9,31,14,17',
                endCursor: '9,31,14,18',
            },
        },
        systemStatus: '9,7',
        errors: '9,8',
        creativeTemplates: {
            edges: {
                cursor: '9,33,12,13',
                node: {
                    id: '9,33,12,22,0',
                    creationDate: '9,33,12,22,1',
                    lastChangeDate: '9,33,12,22,2',
                    name: '9,33,12,22,3',
                    height: '9,33,12,22,34',
                    width: '9,33,12,22,35',
                    systemStatus: '9,33,12,22,7',
                    errors: '9,33,12,22,8',
                },
            },
            pageInfo: {
                hasNextPage: '9,33,14,15',
                hasPreviousPage: '9,33,14,16',
                startCursor: '9,33,14,17',
                endCursor: '9,33,14,18',
            },
        },
    },
    vendor: {
        id: '38,0',
        creationDate: '38,1',
        lastChangeDate: '38,2',
        name: '38,3',
        marketplace: {
            id: '38,9,0',
            creationDate: '38,9,1',
            lastChangeDate: '38,9,2',
            name: '38,9,3',
            organization: {
                id: '38,9,10,0',
                creationDate: '38,9,10,1',
                lastChangeDate: '38,9,10,2',
                users: {},
                marketplaces: {},
                name: '38,9,10,3',
                tier: '38,9,10,20',
                systemStatus: '38,9,10,7',
                errors: '38,9,10,8',
            },
            mediaChannels: {
                edges: {
                    cursor: '38,9,21,12,13',
                },
                pageInfo: {
                    hasNextPage: '38,9,21,14,15',
                    hasPreviousPage: '38,9,21,14,16',
                    startCursor: '38,9,21,14,17',
                    endCursor: '38,9,21,14,18',
                },
            },
            campaignTemplates: {
                edges: {
                    cursor: '38,9,29,12,13',
                },
                pageInfo: {
                    hasNextPage: '38,9,29,14,15',
                    hasPreviousPage: '38,9,29,14,16',
                    startCursor: '38,9,29,14,17',
                    endCursor: '38,9,29,14,18',
                },
            },
            vendors: {
                edges: {
                    cursor: '38,9,30,12,13',
                },
                pageInfo: {
                    hasNextPage: '38,9,30,14,15',
                    hasPreviousPage: '38,9,30,14,16',
                    startCursor: '38,9,30,14,17',
                    endCursor: '38,9,30,14,18',
                },
            },
            vendorTokens: {
                edges: {
                    cursor: '38,9,31,12,13',
                },
                pageInfo: {
                    hasNextPage: '38,9,31,14,15',
                    hasPreviousPage: '38,9,31,14,16',
                    startCursor: '38,9,31,14,17',
                    endCursor: '38,9,31,14,18',
                },
            },
            systemStatus: '38,9,7',
            errors: '38,9,8',
            creativeTemplates: {
                edges: {
                    cursor: '38,9,33,12,13',
                },
                pageInfo: {
                    hasNextPage: '38,9,33,14,15',
                    hasPreviousPage: '38,9,33,14,16',
                    startCursor: '38,9,33,14,17',
                    endCursor: '38,9,33,14,18',
                },
            },
        },
        vendorTokens: {
            edges: {
                cursor: '38,31,12,13',
                node: {
                    id: '38,31,12,22,0',
                    creationDate: '38,31,12,22,1',
                    lastChangeDate: '38,31,12,22,2',
                    token: '38,31,12,22,32',
                },
            },
            pageInfo: {
                hasNextPage: '38,31,14,15',
                hasPreviousPage: '38,31,14,16',
                startCursor: '38,31,14,17',
                endCursor: '38,31,14,18',
            },
        },
        products: {
            edges: {
                cursor: '38,57,12,13',
                node: {
                    id: '38,57,12,22,0',
                    creationDate: '38,57,12,22,1',
                    lastChangeDate: '38,57,12,22,2',
                    name: '38,57,12,22,3',
                    sku: '38,57,12,22,58',
                    remoteState: '38,57,12,22,23',
                    metadata: '38,57,12,22,59',
                    systemStatus: '38,57,12,22,7',
                    errors: '38,57,12,22,8',
                    warnings: '38,57,12,22,60',
                },
            },
            pageInfo: {
                hasNextPage: '38,57,14,15',
                hasPreviousPage: '38,57,14,16',
                startCursor: '38,57,14,17',
                endCursor: '38,57,14,18',
            },
        },
        systemStatus: '38,7',
        errors: '38,8',
    },
    token: '32',
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
    id: '0',
    creationDate: '1',
    lastChangeDate: '2',
    remoteId: '6',
    systemStatus: '7',
    errors: '8',
    preview: '62',
    resultsSource: '46',
    results: {
        edges: {
            cursor: '64,12,13',
            node: {
                id: '64,12,22,0',
                creationDate: '64,12,22,1',
                lastChangeDate: '64,12,22,2',
                date: '64,12,22,65',
                analytics: {
                    results: '64,12,22,66,64',
                    impressions: '64,12,22,66,67',
                    clicks: '64,12,22,66,68',
                    spend: '64,12,22,66,69',
                    purchases: '64,12,22,66,70',
                    purchasesValue: '64,12,22,66,71',
                },
                type: '64,12,22,53',
                resource: {
                    id: '64,12,22,54,0',
                    creationDate: '64,12,22,54,1',
                    lastChangeDate: '64,12,22,54,2',
                },
                vendor: {
                    id: '64,12,22,38,0',
                    creationDate: '64,12,22,38,1',
                    lastChangeDate: '64,12,22,38,2',
                    name: '64,12,22,38,3',
                    systemStatus: '64,12,22,38,7',
                    errors: '64,12,22,38,8',
                },
            },
        },
        pageInfo: {
            hasNextPage: '64,14,15',
            hasPreviousPage: '64,14,16',
            startCursor: '64,14,17',
            endCursor: '64,14,18',
        },
    },
    marketingCampaign: {
        id: '63,0',
        creationDate: '63,1',
        lastChangeDate: '63,2',
        name: '63,3',
        status: '63,37',
        marketingAds: {
            edges: {
                cursor: '63,61,12,13',
                node: {
                    id: '63,61,12,22,0',
                    creationDate: '63,61,12,22,1',
                    lastChangeDate: '63,61,12,22,2',
                    remoteId: '63,61,12,22,6',
                    systemStatus: '63,61,12,22,7',
                    errors: '63,61,12,22,8',
                    preview: '63,61,12,22,62',
                    resultsSource: '63,61,12,22,46',
                },
            },
            pageInfo: {
                hasNextPage: '63,61,14,15',
                hasPreviousPage: '63,61,14,16',
                startCursor: '63,61,14,17',
                endCursor: '63,61,14,18',
            },
        },
        products: {
            edges: {
                cursor: '63,57,12,13',
                node: {
                    id: '63,57,12,22,0',
                    creationDate: '63,57,12,22,1',
                    lastChangeDate: '63,57,12,22,2',
                    name: '63,57,12,22,3',
                    sku: '63,57,12,22,58',
                    remoteState: '63,57,12,22,23',
                    metadata: '63,57,12,22,59',
                    systemStatus: '63,57,12,22,7',
                    errors: '63,57,12,22,8',
                    warnings: '63,57,12,22,60',
                },
            },
            pageInfo: {
                hasNextPage: '63,57,14,15',
                hasPreviousPage: '63,57,14,16',
                startCursor: '63,57,14,17',
                endCursor: '63,57,14,18',
            },
        },
        vendor: {
            id: '63,38,0',
            creationDate: '63,38,1',
            lastChangeDate: '63,38,2',
            name: '63,38,3',
            marketplace: {
                id: '63,38,9,0',
                creationDate: '63,38,9,1',
                lastChangeDate: '63,38,9,2',
                name: '63,38,9,3',
                organization: {
                    id: '63,38,9,10,0',
                    creationDate: '63,38,9,10,1',
                    lastChangeDate: '63,38,9,10,2',
                    name: '63,38,9,10,3',
                    tier: '63,38,9,10,20',
                    systemStatus: '63,38,9,10,7',
                    errors: '63,38,9,10,8',
                },
                mediaChannels: {},
                campaignTemplates: {},
                vendors: {},
                vendorTokens: {},
                systemStatus: '63,38,9,7',
                errors: '63,38,9,8',
                creativeTemplates: {},
            },
            vendorTokens: {
                edges: {
                    cursor: '63,38,31,12,13',
                },
                pageInfo: {
                    hasNextPage: '63,38,31,14,15',
                    hasPreviousPage: '63,38,31,14,16',
                    startCursor: '63,38,31,14,17',
                    endCursor: '63,38,31,14,18',
                },
            },
            products: {
                edges: {
                    cursor: '63,38,57,12,13',
                },
                pageInfo: {
                    hasNextPage: '63,38,57,14,15',
                    hasPreviousPage: '63,38,57,14,16',
                    startCursor: '63,38,57,14,17',
                    endCursor: '63,38,57,14,18',
                },
            },
            systemStatus: '63,38,7',
            errors: '63,38,8',
        },
        catalog: {
            id: '63,39,0',
            name: '63,39,3',
            catalogType: '63,39,40',
            creationDate: '63,39,1',
            lastChangeDate: '63,39,2',
            remoteId: '63,39,6',
            systemStatus: '63,39,7',
            remoteState: '63,39,23',
            dataFeedId: '63,39,41',
            errors: '63,39,8',
            mediaChannel: {
                id: '63,39,43,0',
                creationDate: '63,39,43,1',
                lastChangeDate: '63,39,43,2',
                name: '63,39,43,3',
                platform: '63,39,43,5',
                remoteId: '63,39,43,6',
                remoteState: '63,39,43,23',
                currency: '63,39,43,24',
                currencySymbol: '63,39,43,25',
                currencyOffset: '63,39,43,26',
                timezone: '63,39,43,27',
                tokenStatus: '63,39,43,28',
                systemStatus: '63,39,43,7',
                errors: '63,39,43,8',
                catalogs: {},
                marketplace: {
                    id: '63,39,43,9,0',
                    creationDate: '63,39,43,9,1',
                    lastChangeDate: '63,39,43,9,2',
                    name: '63,39,43,9,3',
                    systemStatus: '63,39,43,9,7',
                    errors: '63,39,43,9,8',
                },
            },
            products: {
                edges: {
                    cursor: '63,39,57,12,13',
                },
                pageInfo: {
                    hasNextPage: '63,39,57,14,15',
                    hasPreviousPage: '63,39,57,14,16',
                    startCursor: '63,39,57,14,17',
                    endCursor: '63,39,57,14,18',
                },
            },
        },
        campaignTemplate: {
            id: '63,42,0',
            creationDate: '63,42,1',
            lastChangeDate: '63,42,2',
            name: '63,42,3',
            description: '63,42,4',
            platform: '63,42,5',
            remoteId: '63,42,6',
            systemStatus: '63,42,7',
            errors: '63,42,8',
            marketplace: {
                id: '63,42,9,0',
                creationDate: '63,42,9,1',
                lastChangeDate: '63,42,9,2',
                name: '63,42,9,3',
                organization: {
                    id: '63,42,9,10,0',
                    creationDate: '63,42,9,10,1',
                    lastChangeDate: '63,42,9,10,2',
                    name: '63,42,9,10,3',
                    tier: '63,42,9,10,20',
                    systemStatus: '63,42,9,10,7',
                    errors: '63,42,9,10,8',
                },
                mediaChannels: {},
                campaignTemplates: {},
                vendors: {},
                vendorTokens: {},
                systemStatus: '63,42,9,7',
                errors: '63,42,9,8',
                creativeTemplates: {},
            },
            marketingCampaigns: {
                edges: {
                    cursor: '63,42,36,12,13',
                },
                pageInfo: {
                    hasNextPage: '63,42,36,14,15',
                    hasPreviousPage: '63,42,36,14,16',
                    startCursor: '63,42,36,14,17',
                    endCursor: '63,42,36,14,18',
                },
            },
        },
        mediaChannel: {
            id: '63,43,0',
            creationDate: '63,43,1',
            lastChangeDate: '63,43,2',
            name: '63,43,3',
            platform: '63,43,5',
            remoteId: '63,43,6',
            remoteState: '63,43,23',
            currency: '63,43,24',
            currencySymbol: '63,43,25',
            currencyOffset: '63,43,26',
            timezone: '63,43,27',
            tokenStatus: '63,43,28',
            systemStatus: '63,43,7',
            errors: '63,43,8',
            catalogs: {
                edges: {
                    cursor: '63,43,56,12,13',
                },
                pageInfo: {
                    hasNextPage: '63,43,56,14,15',
                    hasPreviousPage: '63,43,56,14,16',
                    startCursor: '63,43,56,14,17',
                    endCursor: '63,43,56,14,18',
                },
            },
            marketplace: {
                id: '63,43,9,0',
                creationDate: '63,43,9,1',
                lastChangeDate: '63,43,9,2',
                name: '63,43,9,3',
                organization: {
                    id: '63,43,9,10,0',
                    creationDate: '63,43,9,10,1',
                    lastChangeDate: '63,43,9,10,2',
                    name: '63,43,9,10,3',
                    tier: '63,43,9,10,20',
                    systemStatus: '63,43,9,10,7',
                    errors: '63,43,9,10,8',
                },
                mediaChannels: {},
                campaignTemplates: {},
                vendors: {},
                vendorTokens: {},
                systemStatus: '63,43,9,7',
                errors: '63,43,9,8',
                creativeTemplates: {},
            },
        },
        results: {
            edges: {
                cursor: '63,64,12,13',
                node: {
                    id: '63,64,12,22,0',
                    creationDate: '63,64,12,22,1',
                    lastChangeDate: '63,64,12,22,2',
                    date: '63,64,12,22,65',
                    type: '63,64,12,22,53',
                },
            },
            pageInfo: {
                hasNextPage: '63,64,14,15',
                hasPreviousPage: '63,64,14,16',
                startCursor: '63,64,14,17',
                endCursor: '63,64,14,18',
            },
        },
        creativeSpec: '63,44',
        runTimeSpec: '63,45',
        resultsSource: '63,46',
        systemStatus: '63,7',
        errors: '63,8',
    },
    vendor: {
        id: '38,0',
        creationDate: '38,1',
        lastChangeDate: '38,2',
        name: '38,3',
        marketplace: {
            id: '38,9,0',
            creationDate: '38,9,1',
            lastChangeDate: '38,9,2',
            name: '38,9,3',
            organization: {
                id: '38,9,10,0',
                creationDate: '38,9,10,1',
                lastChangeDate: '38,9,10,2',
                users: {},
                marketplaces: {},
                name: '38,9,10,3',
                tier: '38,9,10,20',
                systemStatus: '38,9,10,7',
                errors: '38,9,10,8',
            },
            mediaChannels: {
                edges: {
                    cursor: '38,9,21,12,13',
                },
                pageInfo: {
                    hasNextPage: '38,9,21,14,15',
                    hasPreviousPage: '38,9,21,14,16',
                    startCursor: '38,9,21,14,17',
                    endCursor: '38,9,21,14,18',
                },
            },
            campaignTemplates: {
                edges: {
                    cursor: '38,9,29,12,13',
                },
                pageInfo: {
                    hasNextPage: '38,9,29,14,15',
                    hasPreviousPage: '38,9,29,14,16',
                    startCursor: '38,9,29,14,17',
                    endCursor: '38,9,29,14,18',
                },
            },
            vendors: {
                edges: {
                    cursor: '38,9,30,12,13',
                },
                pageInfo: {
                    hasNextPage: '38,9,30,14,15',
                    hasPreviousPage: '38,9,30,14,16',
                    startCursor: '38,9,30,14,17',
                    endCursor: '38,9,30,14,18',
                },
            },
            vendorTokens: {
                edges: {
                    cursor: '38,9,31,12,13',
                },
                pageInfo: {
                    hasNextPage: '38,9,31,14,15',
                    hasPreviousPage: '38,9,31,14,16',
                    startCursor: '38,9,31,14,17',
                    endCursor: '38,9,31,14,18',
                },
            },
            systemStatus: '38,9,7',
            errors: '38,9,8',
            creativeTemplates: {
                edges: {
                    cursor: '38,9,33,12,13',
                },
                pageInfo: {
                    hasNextPage: '38,9,33,14,15',
                    hasPreviousPage: '38,9,33,14,16',
                    startCursor: '38,9,33,14,17',
                    endCursor: '38,9,33,14,18',
                },
            },
        },
        vendorTokens: {
            edges: {
                cursor: '38,31,12,13',
                node: {
                    id: '38,31,12,22,0',
                    creationDate: '38,31,12,22,1',
                    lastChangeDate: '38,31,12,22,2',
                    token: '38,31,12,22,32',
                },
            },
            pageInfo: {
                hasNextPage: '38,31,14,15',
                hasPreviousPage: '38,31,14,16',
                startCursor: '38,31,14,17',
                endCursor: '38,31,14,18',
            },
        },
        products: {
            edges: {
                cursor: '38,57,12,13',
                node: {
                    id: '38,57,12,22,0',
                    creationDate: '38,57,12,22,1',
                    lastChangeDate: '38,57,12,22,2',
                    name: '38,57,12,22,3',
                    sku: '38,57,12,22,58',
                    remoteState: '38,57,12,22,23',
                    metadata: '38,57,12,22,59',
                    systemStatus: '38,57,12,22,7',
                    errors: '38,57,12,22,8',
                    warnings: '38,57,12,22,60',
                },
            },
            pageInfo: {
                hasNextPage: '38,57,14,15',
                hasPreviousPage: '38,57,14,16',
                startCursor: '38,57,14,17',
                endCursor: '38,57,14,18',
            },
        },
        systemStatus: '38,7',
        errors: '38,8',
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
    id: '0',
    creationDate: '1',
    lastChangeDate: '2',
    date: '65',
    analytics: {
        results: '66,64',
        impressions: '66,67',
        clicks: '66,68',
        spend: '66,69',
        purchases: '66,70',
        purchasesValue: '66,71',
    },
    type: '53',
    resource: {
        id: '54,0',
        creationDate: '54,1',
        lastChangeDate: '54,2',
        vendor: {
            id: '54,38,0',
            creationDate: '54,38,1',
            lastChangeDate: '54,38,2',
            name: '54,38,3',
            marketplace: {
                id: '54,38,9,0',
                creationDate: '54,38,9,1',
                lastChangeDate: '54,38,9,2',
                name: '54,38,9,3',
                organization: {
                    id: '54,38,9,10,0',
                    creationDate: '54,38,9,10,1',
                    lastChangeDate: '54,38,9,10,2',
                    name: '54,38,9,10,3',
                    tier: '54,38,9,10,20',
                    systemStatus: '54,38,9,10,7',
                    errors: '54,38,9,10,8',
                },
                mediaChannels: {},
                campaignTemplates: {},
                vendors: {},
                vendorTokens: {},
                systemStatus: '54,38,9,7',
                errors: '54,38,9,8',
                creativeTemplates: {},
            },
            vendorTokens: {
                edges: {
                    cursor: '54,38,31,12,13',
                },
                pageInfo: {
                    hasNextPage: '54,38,31,14,15',
                    hasPreviousPage: '54,38,31,14,16',
                    startCursor: '54,38,31,14,17',
                    endCursor: '54,38,31,14,18',
                },
            },
            products: {
                edges: {
                    cursor: '54,38,57,12,13',
                },
                pageInfo: {
                    hasNextPage: '54,38,57,14,15',
                    hasPreviousPage: '54,38,57,14,16',
                    startCursor: '54,38,57,14,17',
                    endCursor: '54,38,57,14,18',
                },
            },
            systemStatus: '54,38,7',
            errors: '54,38,8',
        },
    },
    vendor: {
        id: '38,0',
        creationDate: '38,1',
        lastChangeDate: '38,2',
        name: '38,3',
        marketplace: {
            id: '38,9,0',
            creationDate: '38,9,1',
            lastChangeDate: '38,9,2',
            name: '38,9,3',
            organization: {
                id: '38,9,10,0',
                creationDate: '38,9,10,1',
                lastChangeDate: '38,9,10,2',
                users: {},
                marketplaces: {},
                name: '38,9,10,3',
                tier: '38,9,10,20',
                systemStatus: '38,9,10,7',
                errors: '38,9,10,8',
            },
            mediaChannels: {
                edges: {
                    cursor: '38,9,21,12,13',
                },
                pageInfo: {
                    hasNextPage: '38,9,21,14,15',
                    hasPreviousPage: '38,9,21,14,16',
                    startCursor: '38,9,21,14,17',
                    endCursor: '38,9,21,14,18',
                },
            },
            campaignTemplates: {
                edges: {
                    cursor: '38,9,29,12,13',
                },
                pageInfo: {
                    hasNextPage: '38,9,29,14,15',
                    hasPreviousPage: '38,9,29,14,16',
                    startCursor: '38,9,29,14,17',
                    endCursor: '38,9,29,14,18',
                },
            },
            vendors: {
                edges: {
                    cursor: '38,9,30,12,13',
                },
                pageInfo: {
                    hasNextPage: '38,9,30,14,15',
                    hasPreviousPage: '38,9,30,14,16',
                    startCursor: '38,9,30,14,17',
                    endCursor: '38,9,30,14,18',
                },
            },
            vendorTokens: {
                edges: {
                    cursor: '38,9,31,12,13',
                },
                pageInfo: {
                    hasNextPage: '38,9,31,14,15',
                    hasPreviousPage: '38,9,31,14,16',
                    startCursor: '38,9,31,14,17',
                    endCursor: '38,9,31,14,18',
                },
            },
            systemStatus: '38,9,7',
            errors: '38,9,8',
            creativeTemplates: {
                edges: {
                    cursor: '38,9,33,12,13',
                },
                pageInfo: {
                    hasNextPage: '38,9,33,14,15',
                    hasPreviousPage: '38,9,33,14,16',
                    startCursor: '38,9,33,14,17',
                    endCursor: '38,9,33,14,18',
                },
            },
        },
        vendorTokens: {
            edges: {
                cursor: '38,31,12,13',
                node: {
                    id: '38,31,12,22,0',
                    creationDate: '38,31,12,22,1',
                    lastChangeDate: '38,31,12,22,2',
                    token: '38,31,12,22,32',
                },
            },
            pageInfo: {
                hasNextPage: '38,31,14,15',
                hasPreviousPage: '38,31,14,16',
                startCursor: '38,31,14,17',
                endCursor: '38,31,14,18',
            },
        },
        products: {
            edges: {
                cursor: '38,57,12,13',
                node: {
                    id: '38,57,12,22,0',
                    creationDate: '38,57,12,22,1',
                    lastChangeDate: '38,57,12,22,2',
                    name: '38,57,12,22,3',
                    sku: '38,57,12,22,58',
                    remoteState: '38,57,12,22,23',
                    metadata: '38,57,12,22,59',
                    systemStatus: '38,57,12,22,7',
                    errors: '38,57,12,22,8',
                    warnings: '38,57,12,22,60',
                },
            },
            pageInfo: {
                hasNextPage: '38,57,14,15',
                hasPreviousPage: '38,57,14,16',
                startCursor: '38,57,14,17',
                endCursor: '38,57,14,18',
            },
        },
        systemStatus: '38,7',
        errors: '38,8',
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
    id: '0',
    creationDate: '1',
    lastChangeDate: '2',
    name: '3',
    height: '34',
    width: '35',
    marketplace: {
        id: '9,0',
        creationDate: '9,1',
        lastChangeDate: '9,2',
        name: '9,3',
        organization: {
            id: '9,10,0',
            creationDate: '9,10,1',
            lastChangeDate: '9,10,2',
            users: {
                edges: {
                    cursor: '9,10,11,12,13',
                },
                pageInfo: {
                    hasNextPage: '9,10,11,14,15',
                    hasPreviousPage: '9,10,11,14,16',
                    startCursor: '9,10,11,14,17',
                    endCursor: '9,10,11,14,18',
                },
            },
            marketplaces: {
                edges: {
                    cursor: '9,10,19,12,13',
                },
                pageInfo: {
                    hasNextPage: '9,10,19,14,15',
                    hasPreviousPage: '9,10,19,14,16',
                    startCursor: '9,10,19,14,17',
                    endCursor: '9,10,19,14,18',
                },
            },
            name: '9,10,3',
            tier: '9,10,20',
            systemStatus: '9,10,7',
            errors: '9,10,8',
        },
        mediaChannels: {
            edges: {
                cursor: '9,21,12,13',
                node: {
                    id: '9,21,12,22,0',
                    creationDate: '9,21,12,22,1',
                    lastChangeDate: '9,21,12,22,2',
                    name: '9,21,12,22,3',
                    platform: '9,21,12,22,5',
                    remoteId: '9,21,12,22,6',
                    remoteState: '9,21,12,22,23',
                    currency: '9,21,12,22,24',
                    currencySymbol: '9,21,12,22,25',
                    currencyOffset: '9,21,12,22,26',
                    timezone: '9,21,12,22,27',
                    tokenStatus: '9,21,12,22,28',
                    systemStatus: '9,21,12,22,7',
                    errors: '9,21,12,22,8',
                },
            },
            pageInfo: {
                hasNextPage: '9,21,14,15',
                hasPreviousPage: '9,21,14,16',
                startCursor: '9,21,14,17',
                endCursor: '9,21,14,18',
            },
        },
        campaignTemplates: {
            edges: {
                cursor: '9,29,12,13',
                node: {
                    id: '9,29,12,22,0',
                    creationDate: '9,29,12,22,1',
                    lastChangeDate: '9,29,12,22,2',
                    name: '9,29,12,22,3',
                    description: '9,29,12,22,4',
                    platform: '9,29,12,22,5',
                    remoteId: '9,29,12,22,6',
                    systemStatus: '9,29,12,22,7',
                    errors: '9,29,12,22,8',
                },
            },
            pageInfo: {
                hasNextPage: '9,29,14,15',
                hasPreviousPage: '9,29,14,16',
                startCursor: '9,29,14,17',
                endCursor: '9,29,14,18',
            },
        },
        vendors: {
            edges: {
                cursor: '9,30,12,13',
                node: {
                    id: '9,30,12,22,0',
                    creationDate: '9,30,12,22,1',
                    lastChangeDate: '9,30,12,22,2',
                    name: '9,30,12,22,3',
                    systemStatus: '9,30,12,22,7',
                    errors: '9,30,12,22,8',
                },
            },
            pageInfo: {
                hasNextPage: '9,30,14,15',
                hasPreviousPage: '9,30,14,16',
                startCursor: '9,30,14,17',
                endCursor: '9,30,14,18',
            },
        },
        vendorTokens: {
            edges: {
                cursor: '9,31,12,13',
                node: {
                    id: '9,31,12,22,0',
                    creationDate: '9,31,12,22,1',
                    lastChangeDate: '9,31,12,22,2',
                    token: '9,31,12,22,32',
                },
            },
            pageInfo: {
                hasNextPage: '9,31,14,15',
                hasPreviousPage: '9,31,14,16',
                startCursor: '9,31,14,17',
                endCursor: '9,31,14,18',
            },
        },
        systemStatus: '9,7',
        errors: '9,8',
        creativeTemplates: {
            edges: {
                cursor: '9,33,12,13',
                node: {
                    id: '9,33,12,22,0',
                    creationDate: '9,33,12,22,1',
                    lastChangeDate: '9,33,12,22,2',
                    name: '9,33,12,22,3',
                    height: '9,33,12,22,34',
                    width: '9,33,12,22,35',
                    systemStatus: '9,33,12,22,7',
                    errors: '9,33,12,22,8',
                },
            },
            pageInfo: {
                hasNextPage: '9,33,14,15',
                hasPreviousPage: '9,33,14,16',
                startCursor: '9,33,14,17',
                endCursor: '9,33,14,18',
            },
        },
    },
    creativeLayers: {
        edges: {
            cursor: '72,12,13',
            node: {
                id: '72,12,22,0',
                creationDate: '72,12,22,1',
                lastChangeDate: '72,12,22,2',
                name: '72,12,22,3',
                height: '72,12,22,34',
                width: '72,12,22,35',
                x: '72,12,22,73',
                y: '72,12,22,74',
                order: '72,12,22,75',
                type: '72,12,22,53',
                properties: '72,12,22,76',
                creativeTemplate: {
                    id: '72,12,22,77,0',
                    creationDate: '72,12,22,77,1',
                    lastChangeDate: '72,12,22,77,2',
                    name: '72,12,22,77,3',
                    height: '72,12,22,77,34',
                    width: '72,12,22,77,35',
                    systemStatus: '72,12,22,77,7',
                    errors: '72,12,22,77,8',
                },
                systemStatus: '72,12,22,7',
                errors: '72,12,22,8',
            },
        },
        pageInfo: {
            hasNextPage: '72,14,15',
            hasPreviousPage: '72,14,16',
            startCursor: '72,14,17',
            endCursor: '72,14,18',
        },
    },
    systemStatus: '7',
    errors: '8',
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
    id: '0',
    creationDate: '1',
    lastChangeDate: '2',
    name: '3',
    height: '34',
    width: '35',
    x: '73',
    y: '74',
    order: '75',
    type: '53',
    properties: '76',
    creativeTemplate: {
        id: '77,0',
        creationDate: '77,1',
        lastChangeDate: '77,2',
        name: '77,3',
        height: '77,34',
        width: '77,35',
        marketplace: {
            id: '77,9,0',
            creationDate: '77,9,1',
            lastChangeDate: '77,9,2',
            name: '77,9,3',
            organization: {
                id: '77,9,10,0',
                creationDate: '77,9,10,1',
                lastChangeDate: '77,9,10,2',
                users: {},
                marketplaces: {},
                name: '77,9,10,3',
                tier: '77,9,10,20',
                systemStatus: '77,9,10,7',
                errors: '77,9,10,8',
            },
            mediaChannels: {
                edges: {
                    cursor: '77,9,21,12,13',
                },
                pageInfo: {
                    hasNextPage: '77,9,21,14,15',
                    hasPreviousPage: '77,9,21,14,16',
                    startCursor: '77,9,21,14,17',
                    endCursor: '77,9,21,14,18',
                },
            },
            campaignTemplates: {
                edges: {
                    cursor: '77,9,29,12,13',
                },
                pageInfo: {
                    hasNextPage: '77,9,29,14,15',
                    hasPreviousPage: '77,9,29,14,16',
                    startCursor: '77,9,29,14,17',
                    endCursor: '77,9,29,14,18',
                },
            },
            vendors: {
                edges: {
                    cursor: '77,9,30,12,13',
                },
                pageInfo: {
                    hasNextPage: '77,9,30,14,15',
                    hasPreviousPage: '77,9,30,14,16',
                    startCursor: '77,9,30,14,17',
                    endCursor: '77,9,30,14,18',
                },
            },
            vendorTokens: {
                edges: {
                    cursor: '77,9,31,12,13',
                },
                pageInfo: {
                    hasNextPage: '77,9,31,14,15',
                    hasPreviousPage: '77,9,31,14,16',
                    startCursor: '77,9,31,14,17',
                    endCursor: '77,9,31,14,18',
                },
            },
            systemStatus: '77,9,7',
            errors: '77,9,8',
            creativeTemplates: {
                edges: {
                    cursor: '77,9,33,12,13',
                },
                pageInfo: {
                    hasNextPage: '77,9,33,14,15',
                    hasPreviousPage: '77,9,33,14,16',
                    startCursor: '77,9,33,14,17',
                    endCursor: '77,9,33,14,18',
                },
            },
        },
        creativeLayers: {
            edges: {
                cursor: '77,72,12,13',
                node: {
                    id: '77,72,12,22,0',
                    creationDate: '77,72,12,22,1',
                    lastChangeDate: '77,72,12,22,2',
                    name: '77,72,12,22,3',
                    height: '77,72,12,22,34',
                    width: '77,72,12,22,35',
                    x: '77,72,12,22,73',
                    y: '77,72,12,22,74',
                    order: '77,72,12,22,75',
                    type: '77,72,12,22,53',
                    properties: '77,72,12,22,76',
                    systemStatus: '77,72,12,22,7',
                    errors: '77,72,12,22,8',
                },
            },
            pageInfo: {
                hasNextPage: '77,72,14,15',
                hasPreviousPage: '77,72,14,16',
                startCursor: '77,72,14,17',
                endCursor: '77,72,14,18',
            },
        },
        systemStatus: '77,7',
        errors: '77,8',
    },
    systemStatus: '7',
    errors: '8',
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
    id: '0',
    creationDate: '1',
    lastChangeDate: '2',
    name: '3',
    url: '78',
    properties: '76',
    marketplace: {
        id: '9,0',
        creationDate: '9,1',
        lastChangeDate: '9,2',
        name: '9,3',
        organization: {
            id: '9,10,0',
            creationDate: '9,10,1',
            lastChangeDate: '9,10,2',
            users: {
                edges: {
                    cursor: '9,10,11,12,13',
                },
                pageInfo: {
                    hasNextPage: '9,10,11,14,15',
                    hasPreviousPage: '9,10,11,14,16',
                    startCursor: '9,10,11,14,17',
                    endCursor: '9,10,11,14,18',
                },
            },
            marketplaces: {
                edges: {
                    cursor: '9,10,19,12,13',
                },
                pageInfo: {
                    hasNextPage: '9,10,19,14,15',
                    hasPreviousPage: '9,10,19,14,16',
                    startCursor: '9,10,19,14,17',
                    endCursor: '9,10,19,14,18',
                },
            },
            name: '9,10,3',
            tier: '9,10,20',
            systemStatus: '9,10,7',
            errors: '9,10,8',
        },
        mediaChannels: {
            edges: {
                cursor: '9,21,12,13',
                node: {
                    id: '9,21,12,22,0',
                    creationDate: '9,21,12,22,1',
                    lastChangeDate: '9,21,12,22,2',
                    name: '9,21,12,22,3',
                    platform: '9,21,12,22,5',
                    remoteId: '9,21,12,22,6',
                    remoteState: '9,21,12,22,23',
                    currency: '9,21,12,22,24',
                    currencySymbol: '9,21,12,22,25',
                    currencyOffset: '9,21,12,22,26',
                    timezone: '9,21,12,22,27',
                    tokenStatus: '9,21,12,22,28',
                    systemStatus: '9,21,12,22,7',
                    errors: '9,21,12,22,8',
                },
            },
            pageInfo: {
                hasNextPage: '9,21,14,15',
                hasPreviousPage: '9,21,14,16',
                startCursor: '9,21,14,17',
                endCursor: '9,21,14,18',
            },
        },
        campaignTemplates: {
            edges: {
                cursor: '9,29,12,13',
                node: {
                    id: '9,29,12,22,0',
                    creationDate: '9,29,12,22,1',
                    lastChangeDate: '9,29,12,22,2',
                    name: '9,29,12,22,3',
                    description: '9,29,12,22,4',
                    platform: '9,29,12,22,5',
                    remoteId: '9,29,12,22,6',
                    systemStatus: '9,29,12,22,7',
                    errors: '9,29,12,22,8',
                },
            },
            pageInfo: {
                hasNextPage: '9,29,14,15',
                hasPreviousPage: '9,29,14,16',
                startCursor: '9,29,14,17',
                endCursor: '9,29,14,18',
            },
        },
        vendors: {
            edges: {
                cursor: '9,30,12,13',
                node: {
                    id: '9,30,12,22,0',
                    creationDate: '9,30,12,22,1',
                    lastChangeDate: '9,30,12,22,2',
                    name: '9,30,12,22,3',
                    systemStatus: '9,30,12,22,7',
                    errors: '9,30,12,22,8',
                },
            },
            pageInfo: {
                hasNextPage: '9,30,14,15',
                hasPreviousPage: '9,30,14,16',
                startCursor: '9,30,14,17',
                endCursor: '9,30,14,18',
            },
        },
        vendorTokens: {
            edges: {
                cursor: '9,31,12,13',
                node: {
                    id: '9,31,12,22,0',
                    creationDate: '9,31,12,22,1',
                    lastChangeDate: '9,31,12,22,2',
                    token: '9,31,12,22,32',
                },
            },
            pageInfo: {
                hasNextPage: '9,31,14,15',
                hasPreviousPage: '9,31,14,16',
                startCursor: '9,31,14,17',
                endCursor: '9,31,14,18',
            },
        },
        systemStatus: '9,7',
        errors: '9,8',
        creativeTemplates: {
            edges: {
                cursor: '9,33,12,13',
                node: {
                    id: '9,33,12,22,0',
                    creationDate: '9,33,12,22,1',
                    lastChangeDate: '9,33,12,22,2',
                    name: '9,33,12,22,3',
                    height: '9,33,12,22,34',
                    width: '9,33,12,22,35',
                    systemStatus: '9,33,12,22,7',
                    errors: '9,33,12,22,8',
                },
            },
            pageInfo: {
                hasNextPage: '9,33,14,15',
                hasPreviousPage: '9,33,14,16',
                startCursor: '9,33,14,17',
                endCursor: '9,33,14,18',
            },
        },
    },
    systemStatus: '7',
    errors: '8',
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
    id: '0',
    creationDate: '1',
    lastChangeDate: '2',
    name: '3',
    url: '78',
    properties: '76',
    marketplace: {
        id: '9,0',
        creationDate: '9,1',
        lastChangeDate: '9,2',
        name: '9,3',
        organization: {
            id: '9,10,0',
            creationDate: '9,10,1',
            lastChangeDate: '9,10,2',
            users: {
                edges: {
                    cursor: '9,10,11,12,13',
                },
                pageInfo: {
                    hasNextPage: '9,10,11,14,15',
                    hasPreviousPage: '9,10,11,14,16',
                    startCursor: '9,10,11,14,17',
                    endCursor: '9,10,11,14,18',
                },
            },
            marketplaces: {
                edges: {
                    cursor: '9,10,19,12,13',
                },
                pageInfo: {
                    hasNextPage: '9,10,19,14,15',
                    hasPreviousPage: '9,10,19,14,16',
                    startCursor: '9,10,19,14,17',
                    endCursor: '9,10,19,14,18',
                },
            },
            name: '9,10,3',
            tier: '9,10,20',
            systemStatus: '9,10,7',
            errors: '9,10,8',
        },
        mediaChannels: {
            edges: {
                cursor: '9,21,12,13',
                node: {
                    id: '9,21,12,22,0',
                    creationDate: '9,21,12,22,1',
                    lastChangeDate: '9,21,12,22,2',
                    name: '9,21,12,22,3',
                    platform: '9,21,12,22,5',
                    remoteId: '9,21,12,22,6',
                    remoteState: '9,21,12,22,23',
                    currency: '9,21,12,22,24',
                    currencySymbol: '9,21,12,22,25',
                    currencyOffset: '9,21,12,22,26',
                    timezone: '9,21,12,22,27',
                    tokenStatus: '9,21,12,22,28',
                    systemStatus: '9,21,12,22,7',
                    errors: '9,21,12,22,8',
                },
            },
            pageInfo: {
                hasNextPage: '9,21,14,15',
                hasPreviousPage: '9,21,14,16',
                startCursor: '9,21,14,17',
                endCursor: '9,21,14,18',
            },
        },
        campaignTemplates: {
            edges: {
                cursor: '9,29,12,13',
                node: {
                    id: '9,29,12,22,0',
                    creationDate: '9,29,12,22,1',
                    lastChangeDate: '9,29,12,22,2',
                    name: '9,29,12,22,3',
                    description: '9,29,12,22,4',
                    platform: '9,29,12,22,5',
                    remoteId: '9,29,12,22,6',
                    systemStatus: '9,29,12,22,7',
                    errors: '9,29,12,22,8',
                },
            },
            pageInfo: {
                hasNextPage: '9,29,14,15',
                hasPreviousPage: '9,29,14,16',
                startCursor: '9,29,14,17',
                endCursor: '9,29,14,18',
            },
        },
        vendors: {
            edges: {
                cursor: '9,30,12,13',
                node: {
                    id: '9,30,12,22,0',
                    creationDate: '9,30,12,22,1',
                    lastChangeDate: '9,30,12,22,2',
                    name: '9,30,12,22,3',
                    systemStatus: '9,30,12,22,7',
                    errors: '9,30,12,22,8',
                },
            },
            pageInfo: {
                hasNextPage: '9,30,14,15',
                hasPreviousPage: '9,30,14,16',
                startCursor: '9,30,14,17',
                endCursor: '9,30,14,18',
            },
        },
        vendorTokens: {
            edges: {
                cursor: '9,31,12,13',
                node: {
                    id: '9,31,12,22,0',
                    creationDate: '9,31,12,22,1',
                    lastChangeDate: '9,31,12,22,2',
                    token: '9,31,12,22,32',
                },
            },
            pageInfo: {
                hasNextPage: '9,31,14,15',
                hasPreviousPage: '9,31,14,16',
                startCursor: '9,31,14,17',
                endCursor: '9,31,14,18',
            },
        },
        systemStatus: '9,7',
        errors: '9,8',
        creativeTemplates: {
            edges: {
                cursor: '9,33,12,13',
                node: {
                    id: '9,33,12,22,0',
                    creationDate: '9,33,12,22,1',
                    lastChangeDate: '9,33,12,22,2',
                    name: '9,33,12,22,3',
                    height: '9,33,12,22,34',
                    width: '9,33,12,22,35',
                    systemStatus: '9,33,12,22,7',
                    errors: '9,33,12,22,8',
                },
            },
            pageInfo: {
                hasNextPage: '9,33,14,15',
                hasPreviousPage: '9,33,14,16',
                startCursor: '9,33,14,17',
                endCursor: '9,33,14,18',
            },
        },
    },
    systemStatus: '7',
    errors: '8',
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
    token: '32',
    refreshToken: '79',
    expiryDate: '80',
    user: {
        id: '52,0',
        creationDate: '52,1',
        lastChangeDate: '52,2',
        email: '52,47',
        firstName: '52,48',
        lastName: '52,49',
        organizations: {
            edges: {
                cursor: '52,50,12,13',
                node: {
                    id: '52,50,12,22,0',
                    creationDate: '52,50,12,22,1',
                    lastChangeDate: '52,50,12,22,2',
                    name: '52,50,12,22,3',
                    tier: '52,50,12,22,20',
                    systemStatus: '52,50,12,22,7',
                    errors: '52,50,12,22,8',
                },
            },
            pageInfo: {
                hasNextPage: '52,50,14,15',
                hasPreviousPage: '52,50,14,16',
                startCursor: '52,50,14,17',
                endCursor: '52,50,14,18',
            },
        },
        entitlements: {
            edges: {
                cursor: '52,51,12,13',
                node: {
                    id: '52,51,12,22,0',
                    creationDate: '52,51,12,22,1',
                    lastChangeDate: '52,51,12,22,2',
                    type: '52,51,12,22,53',
                    permissions: '52,51,12,22,55',
                },
            },
            pageInfo: {
                hasNextPage: '52,51,14,15',
                hasPreviousPage: '52,51,14,16',
                startCursor: '52,51,14,17',
                endCursor: '52,51,14,18',
            },
        },
    },
};
export const nameMap = {
    '0': 'id',
    '1': 'creationDate',
    '2': 'lastChangeDate',
    '3': 'name',
    '4': 'description',
    '5': 'platform',
    '6': 'remoteId',
    '7': 'systemStatus',
    '8': 'errors',
    '9': 'marketplace',
    '10': 'organization',
    '11': 'users',
    '12': 'edges',
    '13': 'cursor',
    '14': 'pageInfo',
    '15': 'hasNextPage',
    '16': 'hasPreviousPage',
    '17': 'startCursor',
    '18': 'endCursor',
    '19': 'marketplaces',
    '20': 'tier',
    '21': 'mediaChannels',
    '22': 'node',
    '23': 'remoteState',
    '24': 'currency',
    '25': 'currencySymbol',
    '26': 'currencyOffset',
    '27': 'timezone',
    '28': 'tokenStatus',
    '29': 'campaignTemplates',
    '30': 'vendors',
    '31': 'vendorTokens',
    '32': 'token',
    '33': 'creativeTemplates',
    '34': 'height',
    '35': 'width',
    '36': 'marketingCampaigns',
    '37': 'status',
    '38': 'vendor',
    '39': 'catalog',
    '40': 'catalogType',
    '41': 'dataFeedId',
    '42': 'campaignTemplate',
    '43': 'mediaChannel',
    '44': 'creativeSpec',
    '45': 'runTimeSpec',
    '46': 'resultsSource',
    '47': 'email',
    '48': 'firstName',
    '49': 'lastName',
    '50': 'organizations',
    '51': 'entitlements',
    '52': 'user',
    '53': 'type',
    '54': 'resource',
    '55': 'permissions',
    '56': 'catalogs',
    '57': 'products',
    '58': 'sku',
    '59': 'metadata',
    '60': 'warnings',
    '61': 'marketingAds',
    '62': 'preview',
    '63': 'marketingCampaign',
    '64': 'results',
    '65': 'date',
    '66': 'analytics',
    '67': 'impressions',
    '68': 'clicks',
    '69': 'spend',
    '70': 'purchases',
    '71': 'purchasesValue',
    '72': 'creativeLayers',
    '73': 'x',
    '74': 'y',
    '75': 'order',
    '76': 'properties',
    '77': 'creativeTemplate',
    '78': 'url',
    '79': 'refreshToken',
    '80': 'expiryDate',
};
