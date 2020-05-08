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
    warnings: 'warnings';
    kpi: 'kpi';
    marketplace: {
        id: 'marketplace{id}';
        creationDate: 'marketplace{creationDate}';
        lastChangeDate: 'marketplace{lastChangeDate}';
        name: 'marketplace{name}';
        systemStatus: 'marketplace{systemStatus}';
        errors: 'marketplace{errors}';
        warnings: 'marketplace{warnings}';
        currencyCode: 'marketplace{currencyCode}';
        currencySymbol: 'marketplace{currencySymbol}';
        currencyOffset: 'marketplace{currencyOffset}';
        organization: {
            id: 'marketplace{organization{id}}';
            creationDate: 'marketplace{organization{creationDate}}';
            lastChangeDate: 'marketplace{organization{lastChangeDate}}';
            name: 'marketplace{organization{name}}';
            systemStatus: 'marketplace{organization{systemStatus}}';
            errors: 'marketplace{organization{errors}}';
            warnings: 'marketplace{organization{warnings}}';
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
                    warnings: 'marketplace{mediaChannels{edges{node{warnings}}}}';
                    platform: 'marketplace{mediaChannels{edges{node{platform}}}}';
                    remoteId: 'marketplace{mediaChannels{edges{node{remoteId}}}}';
                    remoteState: 'marketplace{mediaChannels{edges{node{remoteState}}}}';
                    currency: 'marketplace{mediaChannels{edges{node{currency}}}}';
                    currencyCode: 'marketplace{mediaChannels{edges{node{currencyCode}}}}';
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
                    warnings: 'marketplace{campaignTemplates{edges{node{warnings}}}}';
                    kpi: 'marketplace{campaignTemplates{edges{node{kpi}}}}';
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
                    warnings: 'marketplace{vendors{edges{node{warnings}}}}';
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
                    email: 'marketplace{vendorTokens{edges{node{email}}}}';
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
                    warnings: 'marketplace{creativeTemplates{edges{node{warnings}}}}';
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
        products: {
            edges: {
                node: {
                    id: 'marketplace{products{edges{node{id}}}}';
                    creationDate: 'marketplace{products{edges{node{creationDate}}}}';
                    lastChangeDate: 'marketplace{products{edges{node{lastChangeDate}}}}';
                    resultsSource: 'marketplace{products{edges{node{resultsSource}}}}';
                    kpi: 'marketplace{products{edges{node{kpi}}}}';
                    systemStatus: 'marketplace{products{edges{node{systemStatus}}}}';
                    errors: 'marketplace{products{edges{node{errors}}}}';
                    warnings: 'marketplace{products{edges{node{warnings}}}}';
                    name: 'marketplace{products{edges{node{name}}}}';
                    sku: 'marketplace{products{edges{node{sku}}}}';
                    remoteState: 'marketplace{products{edges{node{remoteState}}}}';
                    metadata: 'marketplace{products{edges{node{metadata}}}}';
                    imported: 'marketplace{products{edges{node{imported}}}}';
                };
                cursor: 'marketplace{products{edges{cursor}}}';
            };
            pageInfo: {
                endCursor: 'marketplace{products{pageInfo{endCursor}}}';
                startCursor: 'marketplace{products{pageInfo{startCursor}}}';
                hasNextPage: 'marketplace{products{pageInfo{hasNextPage}}}';
                hasPreviousPage: 'marketplace{products{pageInfo{hasPreviousPage}}}';
            };
            totalCount: 'marketplace{products{totalCount}}';
        };
    };
    marketingCampaigns: {
        edges: {
            node: {
                id: 'marketingCampaigns{edges{node{id}}}';
                creationDate: 'marketingCampaigns{edges{node{creationDate}}}';
                lastChangeDate: 'marketingCampaigns{edges{node{lastChangeDate}}}';
                resultsSource: 'marketingCampaigns{edges{node{resultsSource}}}';
                kpi: 'marketingCampaigns{edges{node{kpi}}}';
                vendor: {
                    id: 'marketingCampaigns{edges{node{vendor{id}}}}';
                    creationDate: 'marketingCampaigns{edges{node{vendor{creationDate}}}}';
                    lastChangeDate: 'marketingCampaigns{edges{node{vendor{lastChangeDate}}}}';
                    name: 'marketingCampaigns{edges{node{vendor{name}}}}';
                    systemStatus: 'marketingCampaigns{edges{node{vendor{systemStatus}}}}';
                    errors: 'marketingCampaigns{edges{node{vendor{errors}}}}';
                    warnings: 'marketingCampaigns{edges{node{vendor{warnings}}}}';
                };
                systemStatus: 'marketingCampaigns{edges{node{systemStatus}}}';
                errors: 'marketingCampaigns{edges{node{errors}}}';
                warnings: 'marketingCampaigns{edges{node{warnings}}}';
                name: 'marketingCampaigns{edges{node{name}}}';
                status: 'marketingCampaigns{edges{node{status}}}';
                creativeSpec: 'marketingCampaigns{edges{node{creativeSpec}}}';
                runTimeSpec: 'marketingCampaigns{edges{node{runTimeSpec}}}';
                locationSpec: 'marketingCampaigns{edges{node{locationSpec}}}';
                conversionSpec: 'marketingCampaigns{edges{node{conversionSpec}}}';
                startDate: 'marketingCampaigns{edges{node{startDate}}}';
                endDate: 'marketingCampaigns{edges{node{endDate}}}';
                productFilter: 'marketingCampaigns{edges{node{productFilter}}}';
                GCPX: {
                    id: 'marketingCampaigns{edges{node{GCPX{id}}}}';
                    creationDate: 'marketingCampaigns{edges{node{GCPX{creationDate}}}}';
                    lastChangeDate: 'marketingCampaigns{edges{node{GCPX{lastChangeDate}}}}';
                    kpi: 'marketingCampaigns{edges{node{GCPX{kpi}}}}';
                    price: 'marketingCampaigns{edges{node{GCPX{price}}}}';
                    startDate: 'marketingCampaigns{edges{node{GCPX{startDate}}}}';
                    endDate: 'marketingCampaigns{edges{node{GCPX{endDate}}}}';
                    minConversions: 'marketingCampaigns{edges{node{GCPX{minConversions}}}}';
                    maxConversions: 'marketingCampaigns{edges{node{GCPX{maxConversions}}}}';
                };
                delivering: 'marketingCampaigns{edges{node{delivering}}}';
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
                    externalEventSourceIds: 'marketingCampaigns{edges{node{catalog{externalEventSourceIds}}}}';
                    productSource: 'marketingCampaigns{edges{node{catalog{productSource}}}}';
                    errors: 'marketingCampaigns{edges{node{catalog{errors}}}}';
                    warnings: 'marketingCampaigns{edges{node{catalog{warnings}}}}';
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
                    warnings: 'marketingCampaigns{edges{node{campaignTemplate{warnings}}}}';
                    kpi: 'marketingCampaigns{edges{node{campaignTemplate{kpi}}}}';
                };
                mediaChannel: {
                    id: 'marketingCampaigns{edges{node{mediaChannel{id}}}}';
                    creationDate: 'marketingCampaigns{edges{node{mediaChannel{creationDate}}}}';
                    lastChangeDate: 'marketingCampaigns{edges{node{mediaChannel{lastChangeDate}}}}';
                    name: 'marketingCampaigns{edges{node{mediaChannel{name}}}}';
                    systemStatus: 'marketingCampaigns{edges{node{mediaChannel{systemStatus}}}}';
                    errors: 'marketingCampaigns{edges{node{mediaChannel{errors}}}}';
                    warnings: 'marketingCampaigns{edges{node{mediaChannel{warnings}}}}';
                    platform: 'marketingCampaigns{edges{node{mediaChannel{platform}}}}';
                    remoteId: 'marketingCampaigns{edges{node{mediaChannel{remoteId}}}}';
                    remoteState: 'marketingCampaigns{edges{node{mediaChannel{remoteState}}}}';
                    currency: 'marketingCampaigns{edges{node{mediaChannel{currency}}}}';
                    currencyCode: 'marketingCampaigns{edges{node{mediaChannel{currencyCode}}}}';
                    currencySymbol: 'marketingCampaigns{edges{node{mediaChannel{currencySymbol}}}}';
                    currencyOffset: 'marketingCampaigns{edges{node{mediaChannel{currencyOffset}}}}';
                    timezone: 'marketingCampaigns{edges{node{mediaChannel{timezone}}}}';
                    tokenStatus: 'marketingCampaigns{edges{node{mediaChannel{tokenStatus}}}}';
                };
                results: {
                    totalCount: 'marketingCampaigns{edges{node{results{totalCount}}}}';
                };
                notifications: {
                    totalCount: 'marketingCampaigns{edges{node{notifications{totalCount}}}}';
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
    GCPXHistory: {
        edges: {
            node: {
                id: 'GCPXHistory{edges{node{id}}}';
                creationDate: 'GCPXHistory{edges{node{creationDate}}}';
                lastChangeDate: 'GCPXHistory{edges{node{lastChangeDate}}}';
                kpi: 'GCPXHistory{edges{node{kpi}}}';
                price: 'GCPXHistory{edges{node{price}}}';
                startDate: 'GCPXHistory{edges{node{startDate}}}';
                endDate: 'GCPXHistory{edges{node{endDate}}}';
                minConversions: 'GCPXHistory{edges{node{minConversions}}}';
                maxConversions: 'GCPXHistory{edges{node{maxConversions}}}';
                campaignTemplate: {
                    id: 'GCPXHistory{edges{node{campaignTemplate{id}}}}';
                    creationDate: 'GCPXHistory{edges{node{campaignTemplate{creationDate}}}}';
                    lastChangeDate: 'GCPXHistory{edges{node{campaignTemplate{lastChangeDate}}}}';
                    name: 'GCPXHistory{edges{node{campaignTemplate{name}}}}';
                    description: 'GCPXHistory{edges{node{campaignTemplate{description}}}}';
                    platform: 'GCPXHistory{edges{node{campaignTemplate{platform}}}}';
                    remoteId: 'GCPXHistory{edges{node{campaignTemplate{remoteId}}}}';
                    systemStatus: 'GCPXHistory{edges{node{campaignTemplate{systemStatus}}}}';
                    errors: 'GCPXHistory{edges{node{campaignTemplate{errors}}}}';
                    warnings: 'GCPXHistory{edges{node{campaignTemplate{warnings}}}}';
                    kpi: 'GCPXHistory{edges{node{campaignTemplate{kpi}}}}';
                };
                marketplace: {
                    id: 'GCPXHistory{edges{node{marketplace{id}}}}';
                    creationDate: 'GCPXHistory{edges{node{marketplace{creationDate}}}}';
                    lastChangeDate: 'GCPXHistory{edges{node{marketplace{lastChangeDate}}}}';
                    name: 'GCPXHistory{edges{node{marketplace{name}}}}';
                    systemStatus: 'GCPXHistory{edges{node{marketplace{systemStatus}}}}';
                    errors: 'GCPXHistory{edges{node{marketplace{errors}}}}';
                    warnings: 'GCPXHistory{edges{node{marketplace{warnings}}}}';
                    currencyCode: 'GCPXHistory{edges{node{marketplace{currencyCode}}}}';
                    currencySymbol: 'GCPXHistory{edges{node{marketplace{currencySymbol}}}}';
                    currencyOffset: 'GCPXHistory{edges{node{marketplace{currencyOffset}}}}';
                };
                marketingCampaigns: {
                    totalCount: 'GCPXHistory{edges{node{marketingCampaigns{totalCount}}}}';
                };
            };
            cursor: 'GCPXHistory{edges{cursor}}';
        };
        pageInfo: {
            endCursor: 'GCPXHistory{pageInfo{endCursor}}';
            startCursor: 'GCPXHistory{pageInfo{startCursor}}';
            hasNextPage: 'GCPXHistory{pageInfo{hasNextPage}}';
            hasPreviousPage: 'GCPXHistory{pageInfo{hasPreviousPage}}';
        };
        totalCount: 'GCPXHistory{totalCount}';
    };
    currentGCPX: {
        id: 'currentGCPX{id}';
        creationDate: 'currentGCPX{creationDate}';
        lastChangeDate: 'currentGCPX{lastChangeDate}';
        kpi: 'currentGCPX{kpi}';
        price: 'currentGCPX{price}';
        startDate: 'currentGCPX{startDate}';
        endDate: 'currentGCPX{endDate}';
        minConversions: 'currentGCPX{minConversions}';
        maxConversions: 'currentGCPX{maxConversions}';
        campaignTemplate: {
            id: 'currentGCPX{campaignTemplate{id}}';
            creationDate: 'currentGCPX{campaignTemplate{creationDate}}';
            lastChangeDate: 'currentGCPX{campaignTemplate{lastChangeDate}}';
            name: 'currentGCPX{campaignTemplate{name}}';
            description: 'currentGCPX{campaignTemplate{description}}';
            platform: 'currentGCPX{campaignTemplate{platform}}';
            remoteId: 'currentGCPX{campaignTemplate{remoteId}}';
            systemStatus: 'currentGCPX{campaignTemplate{systemStatus}}';
            errors: 'currentGCPX{campaignTemplate{errors}}';
            warnings: 'currentGCPX{campaignTemplate{warnings}}';
            kpi: 'currentGCPX{campaignTemplate{kpi}}';
            marketplace: {
                id: 'currentGCPX{campaignTemplate{marketplace{id}}}';
                creationDate: 'currentGCPX{campaignTemplate{marketplace{creationDate}}}';
                lastChangeDate: 'currentGCPX{campaignTemplate{marketplace{lastChangeDate}}}';
                name: 'currentGCPX{campaignTemplate{marketplace{name}}}';
                systemStatus: 'currentGCPX{campaignTemplate{marketplace{systemStatus}}}';
                errors: 'currentGCPX{campaignTemplate{marketplace{errors}}}';
                warnings: 'currentGCPX{campaignTemplate{marketplace{warnings}}}';
                currencyCode: 'currentGCPX{campaignTemplate{marketplace{currencyCode}}}';
                currencySymbol: 'currentGCPX{campaignTemplate{marketplace{currencySymbol}}}';
                currencyOffset: 'currentGCPX{campaignTemplate{marketplace{currencyOffset}}}';
                organization: {
                    id: 'currentGCPX{campaignTemplate{marketplace{organization{id}}}}';
                    creationDate: 'currentGCPX{campaignTemplate{marketplace{organization{creationDate}}}}';
                    lastChangeDate: 'currentGCPX{campaignTemplate{marketplace{organization{lastChangeDate}}}}';
                    name: 'currentGCPX{campaignTemplate{marketplace{organization{name}}}}';
                    systemStatus: 'currentGCPX{campaignTemplate{marketplace{organization{systemStatus}}}}';
                    errors: 'currentGCPX{campaignTemplate{marketplace{organization{errors}}}}';
                    warnings: 'currentGCPX{campaignTemplate{marketplace{organization{warnings}}}}';
                    tier: 'currentGCPX{campaignTemplate{marketplace{organization{tier}}}}';
                };
                mediaChannels: {
                    totalCount: 'currentGCPX{campaignTemplate{marketplace{mediaChannels{totalCount}}}}';
                };
                campaignTemplates: {
                    totalCount: 'currentGCPX{campaignTemplate{marketplace{campaignTemplates{totalCount}}}}';
                };
                vendors: {
                    totalCount: 'currentGCPX{campaignTemplate{marketplace{vendors{totalCount}}}}';
                };
                vendorTokens: {
                    totalCount: 'currentGCPX{campaignTemplate{marketplace{vendorTokens{totalCount}}}}';
                };
                creativeTemplates: {
                    totalCount: 'currentGCPX{campaignTemplate{marketplace{creativeTemplates{totalCount}}}}';
                };
                products: {
                    totalCount: 'currentGCPX{campaignTemplate{marketplace{products{totalCount}}}}';
                };
            };
            marketingCampaigns: {
                edges: {
                    cursor: 'currentGCPX{campaignTemplate{marketingCampaigns{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'currentGCPX{campaignTemplate{marketingCampaigns{pageInfo{endCursor}}}}';
                    startCursor: 'currentGCPX{campaignTemplate{marketingCampaigns{pageInfo{startCursor}}}}';
                    hasNextPage: 'currentGCPX{campaignTemplate{marketingCampaigns{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'currentGCPX{campaignTemplate{marketingCampaigns{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'currentGCPX{campaignTemplate{marketingCampaigns{totalCount}}}';
            };
            GCPXHistory: {
                edges: {
                    cursor: 'currentGCPX{campaignTemplate{GCPXHistory{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'currentGCPX{campaignTemplate{GCPXHistory{pageInfo{endCursor}}}}';
                    startCursor: 'currentGCPX{campaignTemplate{GCPXHistory{pageInfo{startCursor}}}}';
                    hasNextPage: 'currentGCPX{campaignTemplate{GCPXHistory{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'currentGCPX{campaignTemplate{GCPXHistory{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'currentGCPX{campaignTemplate{GCPXHistory{totalCount}}}';
            };
            currentGCPX: {
                id: 'currentGCPX{campaignTemplate{currentGCPX{id}}}';
                creationDate: 'currentGCPX{campaignTemplate{currentGCPX{creationDate}}}';
                lastChangeDate: 'currentGCPX{campaignTemplate{currentGCPX{lastChangeDate}}}';
                kpi: 'currentGCPX{campaignTemplate{currentGCPX{kpi}}}';
                price: 'currentGCPX{campaignTemplate{currentGCPX{price}}}';
                startDate: 'currentGCPX{campaignTemplate{currentGCPX{startDate}}}';
                endDate: 'currentGCPX{campaignTemplate{currentGCPX{endDate}}}';
                minConversions: 'currentGCPX{campaignTemplate{currentGCPX{minConversions}}}';
                maxConversions: 'currentGCPX{campaignTemplate{currentGCPX{maxConversions}}}';
                campaignTemplate: {
                    id: 'currentGCPX{campaignTemplate{currentGCPX{campaignTemplate{id}}}}';
                    creationDate: 'currentGCPX{campaignTemplate{currentGCPX{campaignTemplate{creationDate}}}}';
                    lastChangeDate: 'currentGCPX{campaignTemplate{currentGCPX{campaignTemplate{lastChangeDate}}}}';
                    name: 'currentGCPX{campaignTemplate{currentGCPX{campaignTemplate{name}}}}';
                    description: 'currentGCPX{campaignTemplate{currentGCPX{campaignTemplate{description}}}}';
                    platform: 'currentGCPX{campaignTemplate{currentGCPX{campaignTemplate{platform}}}}';
                    remoteId: 'currentGCPX{campaignTemplate{currentGCPX{campaignTemplate{remoteId}}}}';
                    systemStatus: 'currentGCPX{campaignTemplate{currentGCPX{campaignTemplate{systemStatus}}}}';
                    errors: 'currentGCPX{campaignTemplate{currentGCPX{campaignTemplate{errors}}}}';
                    warnings: 'currentGCPX{campaignTemplate{currentGCPX{campaignTemplate{warnings}}}}';
                    kpi: 'currentGCPX{campaignTemplate{currentGCPX{campaignTemplate{kpi}}}}';
                };
                marketplace: {
                    id: 'currentGCPX{campaignTemplate{currentGCPX{marketplace{id}}}}';
                    creationDate: 'currentGCPX{campaignTemplate{currentGCPX{marketplace{creationDate}}}}';
                    lastChangeDate: 'currentGCPX{campaignTemplate{currentGCPX{marketplace{lastChangeDate}}}}';
                    name: 'currentGCPX{campaignTemplate{currentGCPX{marketplace{name}}}}';
                    systemStatus: 'currentGCPX{campaignTemplate{currentGCPX{marketplace{systemStatus}}}}';
                    errors: 'currentGCPX{campaignTemplate{currentGCPX{marketplace{errors}}}}';
                    warnings: 'currentGCPX{campaignTemplate{currentGCPX{marketplace{warnings}}}}';
                    currencyCode: 'currentGCPX{campaignTemplate{currentGCPX{marketplace{currencyCode}}}}';
                    currencySymbol: 'currentGCPX{campaignTemplate{currentGCPX{marketplace{currencySymbol}}}}';
                    currencyOffset: 'currentGCPX{campaignTemplate{currentGCPX{marketplace{currencyOffset}}}}';
                };
                marketingCampaigns: {
                    totalCount: 'currentGCPX{campaignTemplate{currentGCPX{marketingCampaigns{totalCount}}}}';
                };
            };
        };
        marketplace: {
            id: 'currentGCPX{marketplace{id}}';
            creationDate: 'currentGCPX{marketplace{creationDate}}';
            lastChangeDate: 'currentGCPX{marketplace{lastChangeDate}}';
            name: 'currentGCPX{marketplace{name}}';
            systemStatus: 'currentGCPX{marketplace{systemStatus}}';
            errors: 'currentGCPX{marketplace{errors}}';
            warnings: 'currentGCPX{marketplace{warnings}}';
            currencyCode: 'currentGCPX{marketplace{currencyCode}}';
            currencySymbol: 'currentGCPX{marketplace{currencySymbol}}';
            currencyOffset: 'currentGCPX{marketplace{currencyOffset}}';
            organization: {
                id: 'currentGCPX{marketplace{organization{id}}}';
                creationDate: 'currentGCPX{marketplace{organization{creationDate}}}';
                lastChangeDate: 'currentGCPX{marketplace{organization{lastChangeDate}}}';
                name: 'currentGCPX{marketplace{organization{name}}}';
                systemStatus: 'currentGCPX{marketplace{organization{systemStatus}}}';
                errors: 'currentGCPX{marketplace{organization{errors}}}';
                warnings: 'currentGCPX{marketplace{organization{warnings}}}';
                tier: 'currentGCPX{marketplace{organization{tier}}}';
                users: {
                    totalCount: 'currentGCPX{marketplace{organization{users{totalCount}}}}';
                };
                marketplaces: {
                    totalCount: 'currentGCPX{marketplace{organization{marketplaces{totalCount}}}}';
                };
            };
            mediaChannels: {
                edges: {
                    cursor: 'currentGCPX{marketplace{mediaChannels{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'currentGCPX{marketplace{mediaChannels{pageInfo{endCursor}}}}';
                    startCursor: 'currentGCPX{marketplace{mediaChannels{pageInfo{startCursor}}}}';
                    hasNextPage: 'currentGCPX{marketplace{mediaChannels{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'currentGCPX{marketplace{mediaChannels{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'currentGCPX{marketplace{mediaChannels{totalCount}}}';
            };
            campaignTemplates: {
                edges: {
                    cursor: 'currentGCPX{marketplace{campaignTemplates{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'currentGCPX{marketplace{campaignTemplates{pageInfo{endCursor}}}}';
                    startCursor: 'currentGCPX{marketplace{campaignTemplates{pageInfo{startCursor}}}}';
                    hasNextPage: 'currentGCPX{marketplace{campaignTemplates{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'currentGCPX{marketplace{campaignTemplates{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'currentGCPX{marketplace{campaignTemplates{totalCount}}}';
            };
            vendors: {
                edges: {
                    cursor: 'currentGCPX{marketplace{vendors{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'currentGCPX{marketplace{vendors{pageInfo{endCursor}}}}';
                    startCursor: 'currentGCPX{marketplace{vendors{pageInfo{startCursor}}}}';
                    hasNextPage: 'currentGCPX{marketplace{vendors{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'currentGCPX{marketplace{vendors{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'currentGCPX{marketplace{vendors{totalCount}}}';
            };
            vendorTokens: {
                edges: {
                    cursor: 'currentGCPX{marketplace{vendorTokens{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'currentGCPX{marketplace{vendorTokens{pageInfo{endCursor}}}}';
                    startCursor: 'currentGCPX{marketplace{vendorTokens{pageInfo{startCursor}}}}';
                    hasNextPage: 'currentGCPX{marketplace{vendorTokens{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'currentGCPX{marketplace{vendorTokens{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'currentGCPX{marketplace{vendorTokens{totalCount}}}';
            };
            creativeTemplates: {
                edges: {
                    cursor: 'currentGCPX{marketplace{creativeTemplates{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'currentGCPX{marketplace{creativeTemplates{pageInfo{endCursor}}}}';
                    startCursor: 'currentGCPX{marketplace{creativeTemplates{pageInfo{startCursor}}}}';
                    hasNextPage: 'currentGCPX{marketplace{creativeTemplates{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'currentGCPX{marketplace{creativeTemplates{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'currentGCPX{marketplace{creativeTemplates{totalCount}}}';
            };
            products: {
                edges: {
                    cursor: 'currentGCPX{marketplace{products{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'currentGCPX{marketplace{products{pageInfo{endCursor}}}}';
                    startCursor: 'currentGCPX{marketplace{products{pageInfo{startCursor}}}}';
                    hasNextPage: 'currentGCPX{marketplace{products{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'currentGCPX{marketplace{products{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'currentGCPX{marketplace{products{totalCount}}}';
            };
        };
        marketingCampaigns: {
            edges: {
                node: {
                    id: 'currentGCPX{marketingCampaigns{edges{node{id}}}}';
                    creationDate: 'currentGCPX{marketingCampaigns{edges{node{creationDate}}}}';
                    lastChangeDate: 'currentGCPX{marketingCampaigns{edges{node{lastChangeDate}}}}';
                    resultsSource: 'currentGCPX{marketingCampaigns{edges{node{resultsSource}}}}';
                    kpi: 'currentGCPX{marketingCampaigns{edges{node{kpi}}}}';
                    systemStatus: 'currentGCPX{marketingCampaigns{edges{node{systemStatus}}}}';
                    errors: 'currentGCPX{marketingCampaigns{edges{node{errors}}}}';
                    warnings: 'currentGCPX{marketingCampaigns{edges{node{warnings}}}}';
                    name: 'currentGCPX{marketingCampaigns{edges{node{name}}}}';
                    status: 'currentGCPX{marketingCampaigns{edges{node{status}}}}';
                    creativeSpec: 'currentGCPX{marketingCampaigns{edges{node{creativeSpec}}}}';
                    runTimeSpec: 'currentGCPX{marketingCampaigns{edges{node{runTimeSpec}}}}';
                    locationSpec: 'currentGCPX{marketingCampaigns{edges{node{locationSpec}}}}';
                    conversionSpec: 'currentGCPX{marketingCampaigns{edges{node{conversionSpec}}}}';
                    startDate: 'currentGCPX{marketingCampaigns{edges{node{startDate}}}}';
                    endDate: 'currentGCPX{marketingCampaigns{edges{node{endDate}}}}';
                    productFilter: 'currentGCPX{marketingCampaigns{edges{node{productFilter}}}}';
                    delivering: 'currentGCPX{marketingCampaigns{edges{node{delivering}}}}';
                };
                cursor: 'currentGCPX{marketingCampaigns{edges{cursor}}}';
            };
            pageInfo: {
                endCursor: 'currentGCPX{marketingCampaigns{pageInfo{endCursor}}}';
                startCursor: 'currentGCPX{marketingCampaigns{pageInfo{startCursor}}}';
                hasNextPage: 'currentGCPX{marketingCampaigns{pageInfo{hasNextPage}}}';
                hasPreviousPage: 'currentGCPX{marketingCampaigns{pageInfo{hasPreviousPage}}}';
            };
            totalCount: 'currentGCPX{marketingCampaigns{totalCount}}';
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
    warnings: 'warnings',
    kpi: 'kpi',
    marketplace: {
        id: 'marketplace{id}',
        creationDate: 'marketplace{creationDate}',
        lastChangeDate: 'marketplace{lastChangeDate}',
        name: 'marketplace{name}',
        systemStatus: 'marketplace{systemStatus}',
        errors: 'marketplace{errors}',
        warnings: 'marketplace{warnings}',
        currencyCode: 'marketplace{currencyCode}',
        currencySymbol: 'marketplace{currencySymbol}',
        currencyOffset: 'marketplace{currencyOffset}',
        organization: {
            id: 'marketplace{organization{id}}',
            creationDate: 'marketplace{organization{creationDate}}',
            lastChangeDate: 'marketplace{organization{lastChangeDate}}',
            name: 'marketplace{organization{name}}',
            systemStatus: 'marketplace{organization{systemStatus}}',
            errors: 'marketplace{organization{errors}}',
            warnings: 'marketplace{organization{warnings}}',
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
                    warnings:
                        'marketplace{mediaChannels{edges{node{warnings}}}}',
                    platform:
                        'marketplace{mediaChannels{edges{node{platform}}}}',
                    remoteId:
                        'marketplace{mediaChannels{edges{node{remoteId}}}}',
                    remoteState:
                        'marketplace{mediaChannels{edges{node{remoteState}}}}',
                    currency:
                        'marketplace{mediaChannels{edges{node{currency}}}}',
                    currencyCode:
                        'marketplace{mediaChannels{edges{node{currencyCode}}}}',
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
                    warnings:
                        'marketplace{campaignTemplates{edges{node{warnings}}}}',
                    kpi: 'marketplace{campaignTemplates{edges{node{kpi}}}}',
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
                    warnings: 'marketplace{vendors{edges{node{warnings}}}}',
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
                    email: 'marketplace{vendorTokens{edges{node{email}}}}',
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
                    warnings:
                        'marketplace{creativeTemplates{edges{node{warnings}}}}',
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
        products: {
            edges: {
                node: {
                    id: 'marketplace{products{edges{node{id}}}}',
                    creationDate:
                        'marketplace{products{edges{node{creationDate}}}}',
                    lastChangeDate:
                        'marketplace{products{edges{node{lastChangeDate}}}}',
                    resultsSource:
                        'marketplace{products{edges{node{resultsSource}}}}',
                    kpi: 'marketplace{products{edges{node{kpi}}}}',
                    systemStatus:
                        'marketplace{products{edges{node{systemStatus}}}}',
                    errors: 'marketplace{products{edges{node{errors}}}}',
                    warnings: 'marketplace{products{edges{node{warnings}}}}',
                    name: 'marketplace{products{edges{node{name}}}}',
                    sku: 'marketplace{products{edges{node{sku}}}}',
                    remoteState:
                        'marketplace{products{edges{node{remoteState}}}}',
                    metadata: 'marketplace{products{edges{node{metadata}}}}',
                    imported: 'marketplace{products{edges{node{imported}}}}',
                },
                cursor: 'marketplace{products{edges{cursor}}}',
            },
            pageInfo: {
                endCursor: 'marketplace{products{pageInfo{endCursor}}}',
                startCursor: 'marketplace{products{pageInfo{startCursor}}}',
                hasNextPage: 'marketplace{products{pageInfo{hasNextPage}}}',
                hasPreviousPage:
                    'marketplace{products{pageInfo{hasPreviousPage}}}',
            },
            totalCount: 'marketplace{products{totalCount}}',
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
                kpi: 'marketingCampaigns{edges{node{kpi}}}',
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
                    warnings:
                        'marketingCampaigns{edges{node{vendor{warnings}}}}',
                },
                systemStatus: 'marketingCampaigns{edges{node{systemStatus}}}',
                errors: 'marketingCampaigns{edges{node{errors}}}',
                warnings: 'marketingCampaigns{edges{node{warnings}}}',
                name: 'marketingCampaigns{edges{node{name}}}',
                status: 'marketingCampaigns{edges{node{status}}}',
                creativeSpec: 'marketingCampaigns{edges{node{creativeSpec}}}',
                runTimeSpec: 'marketingCampaigns{edges{node{runTimeSpec}}}',
                locationSpec: 'marketingCampaigns{edges{node{locationSpec}}}',
                conversionSpec:
                    'marketingCampaigns{edges{node{conversionSpec}}}',
                startDate: 'marketingCampaigns{edges{node{startDate}}}',
                endDate: 'marketingCampaigns{edges{node{endDate}}}',
                productFilter: 'marketingCampaigns{edges{node{productFilter}}}',
                GCPX: {
                    id: 'marketingCampaigns{edges{node{GCPX{id}}}}',
                    creationDate:
                        'marketingCampaigns{edges{node{GCPX{creationDate}}}}',
                    lastChangeDate:
                        'marketingCampaigns{edges{node{GCPX{lastChangeDate}}}}',
                    kpi: 'marketingCampaigns{edges{node{GCPX{kpi}}}}',
                    price: 'marketingCampaigns{edges{node{GCPX{price}}}}',
                    startDate:
                        'marketingCampaigns{edges{node{GCPX{startDate}}}}',
                    endDate: 'marketingCampaigns{edges{node{GCPX{endDate}}}}',
                    minConversions:
                        'marketingCampaigns{edges{node{GCPX{minConversions}}}}',
                    maxConversions:
                        'marketingCampaigns{edges{node{GCPX{maxConversions}}}}',
                },
                delivering: 'marketingCampaigns{edges{node{delivering}}}',
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
                    externalEventSourceIds:
                        'marketingCampaigns{edges{node{catalog{externalEventSourceIds}}}}',
                    productSource:
                        'marketingCampaigns{edges{node{catalog{productSource}}}}',
                    errors: 'marketingCampaigns{edges{node{catalog{errors}}}}',
                    warnings:
                        'marketingCampaigns{edges{node{catalog{warnings}}}}',
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
                    warnings:
                        'marketingCampaigns{edges{node{campaignTemplate{warnings}}}}',
                    kpi:
                        'marketingCampaigns{edges{node{campaignTemplate{kpi}}}}',
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
                    warnings:
                        'marketingCampaigns{edges{node{mediaChannel{warnings}}}}',
                    platform:
                        'marketingCampaigns{edges{node{mediaChannel{platform}}}}',
                    remoteId:
                        'marketingCampaigns{edges{node{mediaChannel{remoteId}}}}',
                    remoteState:
                        'marketingCampaigns{edges{node{mediaChannel{remoteState}}}}',
                    currency:
                        'marketingCampaigns{edges{node{mediaChannel{currency}}}}',
                    currencyCode:
                        'marketingCampaigns{edges{node{mediaChannel{currencyCode}}}}',
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
                notifications: {
                    totalCount:
                        'marketingCampaigns{edges{node{notifications{totalCount}}}}',
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
    GCPXHistory: {
        edges: {
            node: {
                id: 'GCPXHistory{edges{node{id}}}',
                creationDate: 'GCPXHistory{edges{node{creationDate}}}',
                lastChangeDate: 'GCPXHistory{edges{node{lastChangeDate}}}',
                kpi: 'GCPXHistory{edges{node{kpi}}}',
                price: 'GCPXHistory{edges{node{price}}}',
                startDate: 'GCPXHistory{edges{node{startDate}}}',
                endDate: 'GCPXHistory{edges{node{endDate}}}',
                minConversions: 'GCPXHistory{edges{node{minConversions}}}',
                maxConversions: 'GCPXHistory{edges{node{maxConversions}}}',
                campaignTemplate: {
                    id: 'GCPXHistory{edges{node{campaignTemplate{id}}}}',
                    creationDate:
                        'GCPXHistory{edges{node{campaignTemplate{creationDate}}}}',
                    lastChangeDate:
                        'GCPXHistory{edges{node{campaignTemplate{lastChangeDate}}}}',
                    name: 'GCPXHistory{edges{node{campaignTemplate{name}}}}',
                    description:
                        'GCPXHistory{edges{node{campaignTemplate{description}}}}',
                    platform:
                        'GCPXHistory{edges{node{campaignTemplate{platform}}}}',
                    remoteId:
                        'GCPXHistory{edges{node{campaignTemplate{remoteId}}}}',
                    systemStatus:
                        'GCPXHistory{edges{node{campaignTemplate{systemStatus}}}}',
                    errors:
                        'GCPXHistory{edges{node{campaignTemplate{errors}}}}',
                    warnings:
                        'GCPXHistory{edges{node{campaignTemplate{warnings}}}}',
                    kpi: 'GCPXHistory{edges{node{campaignTemplate{kpi}}}}',
                },
                marketplace: {
                    id: 'GCPXHistory{edges{node{marketplace{id}}}}',
                    creationDate:
                        'GCPXHistory{edges{node{marketplace{creationDate}}}}',
                    lastChangeDate:
                        'GCPXHistory{edges{node{marketplace{lastChangeDate}}}}',
                    name: 'GCPXHistory{edges{node{marketplace{name}}}}',
                    systemStatus:
                        'GCPXHistory{edges{node{marketplace{systemStatus}}}}',
                    errors: 'GCPXHistory{edges{node{marketplace{errors}}}}',
                    warnings: 'GCPXHistory{edges{node{marketplace{warnings}}}}',
                    currencyCode:
                        'GCPXHistory{edges{node{marketplace{currencyCode}}}}',
                    currencySymbol:
                        'GCPXHistory{edges{node{marketplace{currencySymbol}}}}',
                    currencyOffset:
                        'GCPXHistory{edges{node{marketplace{currencyOffset}}}}',
                },
                marketingCampaigns: {
                    totalCount:
                        'GCPXHistory{edges{node{marketingCampaigns{totalCount}}}}',
                },
            },
            cursor: 'GCPXHistory{edges{cursor}}',
        },
        pageInfo: {
            endCursor: 'GCPXHistory{pageInfo{endCursor}}',
            startCursor: 'GCPXHistory{pageInfo{startCursor}}',
            hasNextPage: 'GCPXHistory{pageInfo{hasNextPage}}',
            hasPreviousPage: 'GCPXHistory{pageInfo{hasPreviousPage}}',
        },
        totalCount: 'GCPXHistory{totalCount}',
    },
    currentGCPX: {
        id: 'currentGCPX{id}',
        creationDate: 'currentGCPX{creationDate}',
        lastChangeDate: 'currentGCPX{lastChangeDate}',
        kpi: 'currentGCPX{kpi}',
        price: 'currentGCPX{price}',
        startDate: 'currentGCPX{startDate}',
        endDate: 'currentGCPX{endDate}',
        minConversions: 'currentGCPX{minConversions}',
        maxConversions: 'currentGCPX{maxConversions}',
        campaignTemplate: {
            id: 'currentGCPX{campaignTemplate{id}}',
            creationDate: 'currentGCPX{campaignTemplate{creationDate}}',
            lastChangeDate: 'currentGCPX{campaignTemplate{lastChangeDate}}',
            name: 'currentGCPX{campaignTemplate{name}}',
            description: 'currentGCPX{campaignTemplate{description}}',
            platform: 'currentGCPX{campaignTemplate{platform}}',
            remoteId: 'currentGCPX{campaignTemplate{remoteId}}',
            systemStatus: 'currentGCPX{campaignTemplate{systemStatus}}',
            errors: 'currentGCPX{campaignTemplate{errors}}',
            warnings: 'currentGCPX{campaignTemplate{warnings}}',
            kpi: 'currentGCPX{campaignTemplate{kpi}}',
            marketplace: {
                id: 'currentGCPX{campaignTemplate{marketplace{id}}}',
                creationDate:
                    'currentGCPX{campaignTemplate{marketplace{creationDate}}}',
                lastChangeDate:
                    'currentGCPX{campaignTemplate{marketplace{lastChangeDate}}}',
                name: 'currentGCPX{campaignTemplate{marketplace{name}}}',
                systemStatus:
                    'currentGCPX{campaignTemplate{marketplace{systemStatus}}}',
                errors: 'currentGCPX{campaignTemplate{marketplace{errors}}}',
                warnings:
                    'currentGCPX{campaignTemplate{marketplace{warnings}}}',
                currencyCode:
                    'currentGCPX{campaignTemplate{marketplace{currencyCode}}}',
                currencySymbol:
                    'currentGCPX{campaignTemplate{marketplace{currencySymbol}}}',
                currencyOffset:
                    'currentGCPX{campaignTemplate{marketplace{currencyOffset}}}',
                organization: {
                    id:
                        'currentGCPX{campaignTemplate{marketplace{organization{id}}}}',
                    creationDate:
                        'currentGCPX{campaignTemplate{marketplace{organization{creationDate}}}}',
                    lastChangeDate:
                        'currentGCPX{campaignTemplate{marketplace{organization{lastChangeDate}}}}',
                    name:
                        'currentGCPX{campaignTemplate{marketplace{organization{name}}}}',
                    systemStatus:
                        'currentGCPX{campaignTemplate{marketplace{organization{systemStatus}}}}',
                    errors:
                        'currentGCPX{campaignTemplate{marketplace{organization{errors}}}}',
                    warnings:
                        'currentGCPX{campaignTemplate{marketplace{organization{warnings}}}}',
                    tier:
                        'currentGCPX{campaignTemplate{marketplace{organization{tier}}}}',
                },
                mediaChannels: {
                    totalCount:
                        'currentGCPX{campaignTemplate{marketplace{mediaChannels{totalCount}}}}',
                },
                campaignTemplates: {
                    totalCount:
                        'currentGCPX{campaignTemplate{marketplace{campaignTemplates{totalCount}}}}',
                },
                vendors: {
                    totalCount:
                        'currentGCPX{campaignTemplate{marketplace{vendors{totalCount}}}}',
                },
                vendorTokens: {
                    totalCount:
                        'currentGCPX{campaignTemplate{marketplace{vendorTokens{totalCount}}}}',
                },
                creativeTemplates: {
                    totalCount:
                        'currentGCPX{campaignTemplate{marketplace{creativeTemplates{totalCount}}}}',
                },
                products: {
                    totalCount:
                        'currentGCPX{campaignTemplate{marketplace{products{totalCount}}}}',
                },
            },
            marketingCampaigns: {
                edges: {
                    cursor:
                        'currentGCPX{campaignTemplate{marketingCampaigns{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'currentGCPX{campaignTemplate{marketingCampaigns{pageInfo{endCursor}}}}',
                    startCursor:
                        'currentGCPX{campaignTemplate{marketingCampaigns{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'currentGCPX{campaignTemplate{marketingCampaigns{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'currentGCPX{campaignTemplate{marketingCampaigns{pageInfo{hasPreviousPage}}}}',
                },
                totalCount:
                    'currentGCPX{campaignTemplate{marketingCampaigns{totalCount}}}',
            },
            GCPXHistory: {
                edges: {
                    cursor:
                        'currentGCPX{campaignTemplate{GCPXHistory{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'currentGCPX{campaignTemplate{GCPXHistory{pageInfo{endCursor}}}}',
                    startCursor:
                        'currentGCPX{campaignTemplate{GCPXHistory{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'currentGCPX{campaignTemplate{GCPXHistory{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'currentGCPX{campaignTemplate{GCPXHistory{pageInfo{hasPreviousPage}}}}',
                },
                totalCount:
                    'currentGCPX{campaignTemplate{GCPXHistory{totalCount}}}',
            },
            currentGCPX: {
                id: 'currentGCPX{campaignTemplate{currentGCPX{id}}}',
                creationDate:
                    'currentGCPX{campaignTemplate{currentGCPX{creationDate}}}',
                lastChangeDate:
                    'currentGCPX{campaignTemplate{currentGCPX{lastChangeDate}}}',
                kpi: 'currentGCPX{campaignTemplate{currentGCPX{kpi}}}',
                price: 'currentGCPX{campaignTemplate{currentGCPX{price}}}',
                startDate:
                    'currentGCPX{campaignTemplate{currentGCPX{startDate}}}',
                endDate: 'currentGCPX{campaignTemplate{currentGCPX{endDate}}}',
                minConversions:
                    'currentGCPX{campaignTemplate{currentGCPX{minConversions}}}',
                maxConversions:
                    'currentGCPX{campaignTemplate{currentGCPX{maxConversions}}}',
                campaignTemplate: {
                    id:
                        'currentGCPX{campaignTemplate{currentGCPX{campaignTemplate{id}}}}',
                    creationDate:
                        'currentGCPX{campaignTemplate{currentGCPX{campaignTemplate{creationDate}}}}',
                    lastChangeDate:
                        'currentGCPX{campaignTemplate{currentGCPX{campaignTemplate{lastChangeDate}}}}',
                    name:
                        'currentGCPX{campaignTemplate{currentGCPX{campaignTemplate{name}}}}',
                    description:
                        'currentGCPX{campaignTemplate{currentGCPX{campaignTemplate{description}}}}',
                    platform:
                        'currentGCPX{campaignTemplate{currentGCPX{campaignTemplate{platform}}}}',
                    remoteId:
                        'currentGCPX{campaignTemplate{currentGCPX{campaignTemplate{remoteId}}}}',
                    systemStatus:
                        'currentGCPX{campaignTemplate{currentGCPX{campaignTemplate{systemStatus}}}}',
                    errors:
                        'currentGCPX{campaignTemplate{currentGCPX{campaignTemplate{errors}}}}',
                    warnings:
                        'currentGCPX{campaignTemplate{currentGCPX{campaignTemplate{warnings}}}}',
                    kpi:
                        'currentGCPX{campaignTemplate{currentGCPX{campaignTemplate{kpi}}}}',
                },
                marketplace: {
                    id:
                        'currentGCPX{campaignTemplate{currentGCPX{marketplace{id}}}}',
                    creationDate:
                        'currentGCPX{campaignTemplate{currentGCPX{marketplace{creationDate}}}}',
                    lastChangeDate:
                        'currentGCPX{campaignTemplate{currentGCPX{marketplace{lastChangeDate}}}}',
                    name:
                        'currentGCPX{campaignTemplate{currentGCPX{marketplace{name}}}}',
                    systemStatus:
                        'currentGCPX{campaignTemplate{currentGCPX{marketplace{systemStatus}}}}',
                    errors:
                        'currentGCPX{campaignTemplate{currentGCPX{marketplace{errors}}}}',
                    warnings:
                        'currentGCPX{campaignTemplate{currentGCPX{marketplace{warnings}}}}',
                    currencyCode:
                        'currentGCPX{campaignTemplate{currentGCPX{marketplace{currencyCode}}}}',
                    currencySymbol:
                        'currentGCPX{campaignTemplate{currentGCPX{marketplace{currencySymbol}}}}',
                    currencyOffset:
                        'currentGCPX{campaignTemplate{currentGCPX{marketplace{currencyOffset}}}}',
                },
                marketingCampaigns: {
                    totalCount:
                        'currentGCPX{campaignTemplate{currentGCPX{marketingCampaigns{totalCount}}}}',
                },
            },
        },
        marketplace: {
            id: 'currentGCPX{marketplace{id}}',
            creationDate: 'currentGCPX{marketplace{creationDate}}',
            lastChangeDate: 'currentGCPX{marketplace{lastChangeDate}}',
            name: 'currentGCPX{marketplace{name}}',
            systemStatus: 'currentGCPX{marketplace{systemStatus}}',
            errors: 'currentGCPX{marketplace{errors}}',
            warnings: 'currentGCPX{marketplace{warnings}}',
            currencyCode: 'currentGCPX{marketplace{currencyCode}}',
            currencySymbol: 'currentGCPX{marketplace{currencySymbol}}',
            currencyOffset: 'currentGCPX{marketplace{currencyOffset}}',
            organization: {
                id: 'currentGCPX{marketplace{organization{id}}}',
                creationDate:
                    'currentGCPX{marketplace{organization{creationDate}}}',
                lastChangeDate:
                    'currentGCPX{marketplace{organization{lastChangeDate}}}',
                name: 'currentGCPX{marketplace{organization{name}}}',
                systemStatus:
                    'currentGCPX{marketplace{organization{systemStatus}}}',
                errors: 'currentGCPX{marketplace{organization{errors}}}',
                warnings: 'currentGCPX{marketplace{organization{warnings}}}',
                tier: 'currentGCPX{marketplace{organization{tier}}}',
                users: {
                    totalCount:
                        'currentGCPX{marketplace{organization{users{totalCount}}}}',
                },
                marketplaces: {
                    totalCount:
                        'currentGCPX{marketplace{organization{marketplaces{totalCount}}}}',
                },
            },
            mediaChannels: {
                edges: {
                    cursor:
                        'currentGCPX{marketplace{mediaChannels{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'currentGCPX{marketplace{mediaChannels{pageInfo{endCursor}}}}',
                    startCursor:
                        'currentGCPX{marketplace{mediaChannels{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'currentGCPX{marketplace{mediaChannels{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'currentGCPX{marketplace{mediaChannels{pageInfo{hasPreviousPage}}}}',
                },
                totalCount:
                    'currentGCPX{marketplace{mediaChannels{totalCount}}}',
            },
            campaignTemplates: {
                edges: {
                    cursor:
                        'currentGCPX{marketplace{campaignTemplates{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'currentGCPX{marketplace{campaignTemplates{pageInfo{endCursor}}}}',
                    startCursor:
                        'currentGCPX{marketplace{campaignTemplates{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'currentGCPX{marketplace{campaignTemplates{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'currentGCPX{marketplace{campaignTemplates{pageInfo{hasPreviousPage}}}}',
                },
                totalCount:
                    'currentGCPX{marketplace{campaignTemplates{totalCount}}}',
            },
            vendors: {
                edges: {
                    cursor: 'currentGCPX{marketplace{vendors{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'currentGCPX{marketplace{vendors{pageInfo{endCursor}}}}',
                    startCursor:
                        'currentGCPX{marketplace{vendors{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'currentGCPX{marketplace{vendors{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'currentGCPX{marketplace{vendors{pageInfo{hasPreviousPage}}}}',
                },
                totalCount: 'currentGCPX{marketplace{vendors{totalCount}}}',
            },
            vendorTokens: {
                edges: {
                    cursor:
                        'currentGCPX{marketplace{vendorTokens{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'currentGCPX{marketplace{vendorTokens{pageInfo{endCursor}}}}',
                    startCursor:
                        'currentGCPX{marketplace{vendorTokens{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'currentGCPX{marketplace{vendorTokens{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'currentGCPX{marketplace{vendorTokens{pageInfo{hasPreviousPage}}}}',
                },
                totalCount:
                    'currentGCPX{marketplace{vendorTokens{totalCount}}}',
            },
            creativeTemplates: {
                edges: {
                    cursor:
                        'currentGCPX{marketplace{creativeTemplates{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'currentGCPX{marketplace{creativeTemplates{pageInfo{endCursor}}}}',
                    startCursor:
                        'currentGCPX{marketplace{creativeTemplates{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'currentGCPX{marketplace{creativeTemplates{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'currentGCPX{marketplace{creativeTemplates{pageInfo{hasPreviousPage}}}}',
                },
                totalCount:
                    'currentGCPX{marketplace{creativeTemplates{totalCount}}}',
            },
            products: {
                edges: {
                    cursor: 'currentGCPX{marketplace{products{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'currentGCPX{marketplace{products{pageInfo{endCursor}}}}',
                    startCursor:
                        'currentGCPX{marketplace{products{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'currentGCPX{marketplace{products{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'currentGCPX{marketplace{products{pageInfo{hasPreviousPage}}}}',
                },
                totalCount: 'currentGCPX{marketplace{products{totalCount}}}',
            },
        },
        marketingCampaigns: {
            edges: {
                node: {
                    id: 'currentGCPX{marketingCampaigns{edges{node{id}}}}',
                    creationDate:
                        'currentGCPX{marketingCampaigns{edges{node{creationDate}}}}',
                    lastChangeDate:
                        'currentGCPX{marketingCampaigns{edges{node{lastChangeDate}}}}',
                    resultsSource:
                        'currentGCPX{marketingCampaigns{edges{node{resultsSource}}}}',
                    kpi: 'currentGCPX{marketingCampaigns{edges{node{kpi}}}}',
                    systemStatus:
                        'currentGCPX{marketingCampaigns{edges{node{systemStatus}}}}',
                    errors:
                        'currentGCPX{marketingCampaigns{edges{node{errors}}}}',
                    warnings:
                        'currentGCPX{marketingCampaigns{edges{node{warnings}}}}',
                    name: 'currentGCPX{marketingCampaigns{edges{node{name}}}}',
                    status:
                        'currentGCPX{marketingCampaigns{edges{node{status}}}}',
                    creativeSpec:
                        'currentGCPX{marketingCampaigns{edges{node{creativeSpec}}}}',
                    runTimeSpec:
                        'currentGCPX{marketingCampaigns{edges{node{runTimeSpec}}}}',
                    locationSpec:
                        'currentGCPX{marketingCampaigns{edges{node{locationSpec}}}}',
                    conversionSpec:
                        'currentGCPX{marketingCampaigns{edges{node{conversionSpec}}}}',
                    startDate:
                        'currentGCPX{marketingCampaigns{edges{node{startDate}}}}',
                    endDate:
                        'currentGCPX{marketingCampaigns{edges{node{endDate}}}}',
                    productFilter:
                        'currentGCPX{marketingCampaigns{edges{node{productFilter}}}}',
                    delivering:
                        'currentGCPX{marketingCampaigns{edges{node{delivering}}}}',
                },
                cursor: 'currentGCPX{marketingCampaigns{edges{cursor}}}',
            },
            pageInfo: {
                endCursor:
                    'currentGCPX{marketingCampaigns{pageInfo{endCursor}}}',
                startCursor:
                    'currentGCPX{marketingCampaigns{pageInfo{startCursor}}}',
                hasNextPage:
                    'currentGCPX{marketingCampaigns{pageInfo{hasNextPage}}}',
                hasPreviousPage:
                    'currentGCPX{marketingCampaigns{pageInfo{hasPreviousPage}}}',
            },
            totalCount: 'currentGCPX{marketingCampaigns{totalCount}}',
        },
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
    | 'warnings'
    | 'kpi'
    | 'marketplace{id}'
    | 'marketplace{creationDate}'
    | 'marketplace{lastChangeDate}'
    | 'marketplace{name}'
    | 'marketplace{systemStatus}'
    | 'marketplace{errors}'
    | 'marketplace{warnings}'
    | 'marketplace{currencyCode}'
    | 'marketplace{currencySymbol}'
    | 'marketplace{currencyOffset}'
    | 'marketplace{organization{id}}'
    | 'marketplace{organization{creationDate}}'
    | 'marketplace{organization{lastChangeDate}}'
    | 'marketplace{organization{name}}'
    | 'marketplace{organization{systemStatus}}'
    | 'marketplace{organization{errors}}'
    | 'marketplace{organization{warnings}}'
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
    | 'marketplace{mediaChannels{edges{node{warnings}}}}'
    | 'marketplace{mediaChannels{edges{node{platform}}}}'
    | 'marketplace{mediaChannels{edges{node{remoteId}}}}'
    | 'marketplace{mediaChannels{edges{node{remoteState}}}}'
    | 'marketplace{mediaChannels{edges{node{currency}}}}'
    | 'marketplace{mediaChannels{edges{node{currencyCode}}}}'
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
    | 'marketplace{campaignTemplates{edges{node{warnings}}}}'
    | 'marketplace{campaignTemplates{edges{node{kpi}}}}'
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
    | 'marketplace{vendors{edges{node{warnings}}}}'
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
    | 'marketplace{vendorTokens{edges{node{email}}}}'
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
    | 'marketplace{creativeTemplates{edges{node{warnings}}}}'
    | 'marketplace{creativeTemplates{edges{cursor}}}'
    | 'marketplace{creativeTemplates{pageInfo{endCursor}}}'
    | 'marketplace{creativeTemplates{pageInfo{startCursor}}}'
    | 'marketplace{creativeTemplates{pageInfo{hasNextPage}}}'
    | 'marketplace{creativeTemplates{pageInfo{hasPreviousPage}}}'
    | 'marketplace{creativeTemplates{totalCount}}'
    | 'marketplace{products{edges{node{id}}}}'
    | 'marketplace{products{edges{node{creationDate}}}}'
    | 'marketplace{products{edges{node{lastChangeDate}}}}'
    | 'marketplace{products{edges{node{resultsSource}}}}'
    | 'marketplace{products{edges{node{kpi}}}}'
    | 'marketplace{products{edges{node{systemStatus}}}}'
    | 'marketplace{products{edges{node{errors}}}}'
    | 'marketplace{products{edges{node{warnings}}}}'
    | 'marketplace{products{edges{node{name}}}}'
    | 'marketplace{products{edges{node{sku}}}}'
    | 'marketplace{products{edges{node{remoteState}}}}'
    | 'marketplace{products{edges{node{metadata}}}}'
    | 'marketplace{products{edges{node{imported}}}}'
    | 'marketplace{products{edges{cursor}}}'
    | 'marketplace{products{pageInfo{endCursor}}}'
    | 'marketplace{products{pageInfo{startCursor}}}'
    | 'marketplace{products{pageInfo{hasNextPage}}}'
    | 'marketplace{products{pageInfo{hasPreviousPage}}}'
    | 'marketplace{products{totalCount}}'
    | 'marketingCampaigns{edges{node{id}}}'
    | 'marketingCampaigns{edges{node{creationDate}}}'
    | 'marketingCampaigns{edges{node{lastChangeDate}}}'
    | 'marketingCampaigns{edges{node{resultsSource}}}'
    | 'marketingCampaigns{edges{node{kpi}}}'
    | 'marketingCampaigns{edges{node{vendor{id}}}}'
    | 'marketingCampaigns{edges{node{vendor{creationDate}}}}'
    | 'marketingCampaigns{edges{node{vendor{lastChangeDate}}}}'
    | 'marketingCampaigns{edges{node{vendor{name}}}}'
    | 'marketingCampaigns{edges{node{vendor{systemStatus}}}}'
    | 'marketingCampaigns{edges{node{vendor{errors}}}}'
    | 'marketingCampaigns{edges{node{vendor{warnings}}}}'
    | 'marketingCampaigns{edges{node{systemStatus}}}'
    | 'marketingCampaigns{edges{node{errors}}}'
    | 'marketingCampaigns{edges{node{warnings}}}'
    | 'marketingCampaigns{edges{node{name}}}'
    | 'marketingCampaigns{edges{node{status}}}'
    | 'marketingCampaigns{edges{node{creativeSpec}}}'
    | 'marketingCampaigns{edges{node{runTimeSpec}}}'
    | 'marketingCampaigns{edges{node{locationSpec}}}'
    | 'marketingCampaigns{edges{node{conversionSpec}}}'
    | 'marketingCampaigns{edges{node{startDate}}}'
    | 'marketingCampaigns{edges{node{endDate}}}'
    | 'marketingCampaigns{edges{node{productFilter}}}'
    | 'marketingCampaigns{edges{node{GCPX{id}}}}'
    | 'marketingCampaigns{edges{node{GCPX{creationDate}}}}'
    | 'marketingCampaigns{edges{node{GCPX{lastChangeDate}}}}'
    | 'marketingCampaigns{edges{node{GCPX{kpi}}}}'
    | 'marketingCampaigns{edges{node{GCPX{price}}}}'
    | 'marketingCampaigns{edges{node{GCPX{startDate}}}}'
    | 'marketingCampaigns{edges{node{GCPX{endDate}}}}'
    | 'marketingCampaigns{edges{node{GCPX{minConversions}}}}'
    | 'marketingCampaigns{edges{node{GCPX{maxConversions}}}}'
    | 'marketingCampaigns{edges{node{delivering}}}'
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
    | 'marketingCampaigns{edges{node{catalog{externalEventSourceIds}}}}'
    | 'marketingCampaigns{edges{node{catalog{productSource}}}}'
    | 'marketingCampaigns{edges{node{catalog{errors}}}}'
    | 'marketingCampaigns{edges{node{catalog{warnings}}}}'
    | 'marketingCampaigns{edges{node{campaignTemplate{id}}}}'
    | 'marketingCampaigns{edges{node{campaignTemplate{creationDate}}}}'
    | 'marketingCampaigns{edges{node{campaignTemplate{lastChangeDate}}}}'
    | 'marketingCampaigns{edges{node{campaignTemplate{name}}}}'
    | 'marketingCampaigns{edges{node{campaignTemplate{description}}}}'
    | 'marketingCampaigns{edges{node{campaignTemplate{platform}}}}'
    | 'marketingCampaigns{edges{node{campaignTemplate{remoteId}}}}'
    | 'marketingCampaigns{edges{node{campaignTemplate{systemStatus}}}}'
    | 'marketingCampaigns{edges{node{campaignTemplate{errors}}}}'
    | 'marketingCampaigns{edges{node{campaignTemplate{warnings}}}}'
    | 'marketingCampaigns{edges{node{campaignTemplate{kpi}}}}'
    | 'marketingCampaigns{edges{node{mediaChannel{id}}}}'
    | 'marketingCampaigns{edges{node{mediaChannel{creationDate}}}}'
    | 'marketingCampaigns{edges{node{mediaChannel{lastChangeDate}}}}'
    | 'marketingCampaigns{edges{node{mediaChannel{name}}}}'
    | 'marketingCampaigns{edges{node{mediaChannel{systemStatus}}}}'
    | 'marketingCampaigns{edges{node{mediaChannel{errors}}}}'
    | 'marketingCampaigns{edges{node{mediaChannel{warnings}}}}'
    | 'marketingCampaigns{edges{node{mediaChannel{platform}}}}'
    | 'marketingCampaigns{edges{node{mediaChannel{remoteId}}}}'
    | 'marketingCampaigns{edges{node{mediaChannel{remoteState}}}}'
    | 'marketingCampaigns{edges{node{mediaChannel{currency}}}}'
    | 'marketingCampaigns{edges{node{mediaChannel{currencyCode}}}}'
    | 'marketingCampaigns{edges{node{mediaChannel{currencySymbol}}}}'
    | 'marketingCampaigns{edges{node{mediaChannel{currencyOffset}}}}'
    | 'marketingCampaigns{edges{node{mediaChannel{timezone}}}}'
    | 'marketingCampaigns{edges{node{mediaChannel{tokenStatus}}}}'
    | 'marketingCampaigns{edges{node{results{totalCount}}}}'
    | 'marketingCampaigns{edges{node{notifications{totalCount}}}}'
    | 'marketingCampaigns{edges{cursor}}'
    | 'marketingCampaigns{pageInfo{endCursor}}'
    | 'marketingCampaigns{pageInfo{startCursor}}'
    | 'marketingCampaigns{pageInfo{hasNextPage}}'
    | 'marketingCampaigns{pageInfo{hasPreviousPage}}'
    | 'marketingCampaigns{totalCount}'
    | 'GCPXHistory{edges{node{id}}}'
    | 'GCPXHistory{edges{node{creationDate}}}'
    | 'GCPXHistory{edges{node{lastChangeDate}}}'
    | 'GCPXHistory{edges{node{kpi}}}'
    | 'GCPXHistory{edges{node{price}}}'
    | 'GCPXHistory{edges{node{startDate}}}'
    | 'GCPXHistory{edges{node{endDate}}}'
    | 'GCPXHistory{edges{node{minConversions}}}'
    | 'GCPXHistory{edges{node{maxConversions}}}'
    | 'GCPXHistory{edges{node{campaignTemplate{id}}}}'
    | 'GCPXHistory{edges{node{campaignTemplate{creationDate}}}}'
    | 'GCPXHistory{edges{node{campaignTemplate{lastChangeDate}}}}'
    | 'GCPXHistory{edges{node{campaignTemplate{name}}}}'
    | 'GCPXHistory{edges{node{campaignTemplate{description}}}}'
    | 'GCPXHistory{edges{node{campaignTemplate{platform}}}}'
    | 'GCPXHistory{edges{node{campaignTemplate{remoteId}}}}'
    | 'GCPXHistory{edges{node{campaignTemplate{systemStatus}}}}'
    | 'GCPXHistory{edges{node{campaignTemplate{errors}}}}'
    | 'GCPXHistory{edges{node{campaignTemplate{warnings}}}}'
    | 'GCPXHistory{edges{node{campaignTemplate{kpi}}}}'
    | 'GCPXHistory{edges{node{marketplace{id}}}}'
    | 'GCPXHistory{edges{node{marketplace{creationDate}}}}'
    | 'GCPXHistory{edges{node{marketplace{lastChangeDate}}}}'
    | 'GCPXHistory{edges{node{marketplace{name}}}}'
    | 'GCPXHistory{edges{node{marketplace{systemStatus}}}}'
    | 'GCPXHistory{edges{node{marketplace{errors}}}}'
    | 'GCPXHistory{edges{node{marketplace{warnings}}}}'
    | 'GCPXHistory{edges{node{marketplace{currencyCode}}}}'
    | 'GCPXHistory{edges{node{marketplace{currencySymbol}}}}'
    | 'GCPXHistory{edges{node{marketplace{currencyOffset}}}}'
    | 'GCPXHistory{edges{node{marketingCampaigns{totalCount}}}}'
    | 'GCPXHistory{edges{cursor}}'
    | 'GCPXHistory{pageInfo{endCursor}}'
    | 'GCPXHistory{pageInfo{startCursor}}'
    | 'GCPXHistory{pageInfo{hasNextPage}}'
    | 'GCPXHistory{pageInfo{hasPreviousPage}}'
    | 'GCPXHistory{totalCount}'
    | 'currentGCPX{id}'
    | 'currentGCPX{creationDate}'
    | 'currentGCPX{lastChangeDate}'
    | 'currentGCPX{kpi}'
    | 'currentGCPX{price}'
    | 'currentGCPX{startDate}'
    | 'currentGCPX{endDate}'
    | 'currentGCPX{minConversions}'
    | 'currentGCPX{maxConversions}'
    | 'currentGCPX{campaignTemplate{id}}'
    | 'currentGCPX{campaignTemplate{creationDate}}'
    | 'currentGCPX{campaignTemplate{lastChangeDate}}'
    | 'currentGCPX{campaignTemplate{name}}'
    | 'currentGCPX{campaignTemplate{description}}'
    | 'currentGCPX{campaignTemplate{platform}}'
    | 'currentGCPX{campaignTemplate{remoteId}}'
    | 'currentGCPX{campaignTemplate{systemStatus}}'
    | 'currentGCPX{campaignTemplate{errors}}'
    | 'currentGCPX{campaignTemplate{warnings}}'
    | 'currentGCPX{campaignTemplate{kpi}}'
    | 'currentGCPX{campaignTemplate{marketplace{id}}}'
    | 'currentGCPX{campaignTemplate{marketplace{creationDate}}}'
    | 'currentGCPX{campaignTemplate{marketplace{lastChangeDate}}}'
    | 'currentGCPX{campaignTemplate{marketplace{name}}}'
    | 'currentGCPX{campaignTemplate{marketplace{systemStatus}}}'
    | 'currentGCPX{campaignTemplate{marketplace{errors}}}'
    | 'currentGCPX{campaignTemplate{marketplace{warnings}}}'
    | 'currentGCPX{campaignTemplate{marketplace{currencyCode}}}'
    | 'currentGCPX{campaignTemplate{marketplace{currencySymbol}}}'
    | 'currentGCPX{campaignTemplate{marketplace{currencyOffset}}}'
    | 'currentGCPX{campaignTemplate{marketplace{organization{id}}}}'
    | 'currentGCPX{campaignTemplate{marketplace{organization{creationDate}}}}'
    | 'currentGCPX{campaignTemplate{marketplace{organization{lastChangeDate}}}}'
    | 'currentGCPX{campaignTemplate{marketplace{organization{name}}}}'
    | 'currentGCPX{campaignTemplate{marketplace{organization{systemStatus}}}}'
    | 'currentGCPX{campaignTemplate{marketplace{organization{errors}}}}'
    | 'currentGCPX{campaignTemplate{marketplace{organization{warnings}}}}'
    | 'currentGCPX{campaignTemplate{marketplace{organization{tier}}}}'
    | 'currentGCPX{campaignTemplate{marketplace{mediaChannels{totalCount}}}}'
    | 'currentGCPX{campaignTemplate{marketplace{campaignTemplates{totalCount}}}}'
    | 'currentGCPX{campaignTemplate{marketplace{vendors{totalCount}}}}'
    | 'currentGCPX{campaignTemplate{marketplace{vendorTokens{totalCount}}}}'
    | 'currentGCPX{campaignTemplate{marketplace{creativeTemplates{totalCount}}}}'
    | 'currentGCPX{campaignTemplate{marketplace{products{totalCount}}}}'
    | 'currentGCPX{campaignTemplate{marketingCampaigns{edges{cursor}}}}'
    | 'currentGCPX{campaignTemplate{marketingCampaigns{pageInfo{endCursor}}}}'
    | 'currentGCPX{campaignTemplate{marketingCampaigns{pageInfo{startCursor}}}}'
    | 'currentGCPX{campaignTemplate{marketingCampaigns{pageInfo{hasNextPage}}}}'
    | 'currentGCPX{campaignTemplate{marketingCampaigns{pageInfo{hasPreviousPage}}}}'
    | 'currentGCPX{campaignTemplate{marketingCampaigns{totalCount}}}'
    | 'currentGCPX{campaignTemplate{GCPXHistory{edges{cursor}}}}'
    | 'currentGCPX{campaignTemplate{GCPXHistory{pageInfo{endCursor}}}}'
    | 'currentGCPX{campaignTemplate{GCPXHistory{pageInfo{startCursor}}}}'
    | 'currentGCPX{campaignTemplate{GCPXHistory{pageInfo{hasNextPage}}}}'
    | 'currentGCPX{campaignTemplate{GCPXHistory{pageInfo{hasPreviousPage}}}}'
    | 'currentGCPX{campaignTemplate{GCPXHistory{totalCount}}}'
    | 'currentGCPX{campaignTemplate{currentGCPX{id}}}'
    | 'currentGCPX{campaignTemplate{currentGCPX{creationDate}}}'
    | 'currentGCPX{campaignTemplate{currentGCPX{lastChangeDate}}}'
    | 'currentGCPX{campaignTemplate{currentGCPX{kpi}}}'
    | 'currentGCPX{campaignTemplate{currentGCPX{price}}}'
    | 'currentGCPX{campaignTemplate{currentGCPX{startDate}}}'
    | 'currentGCPX{campaignTemplate{currentGCPX{endDate}}}'
    | 'currentGCPX{campaignTemplate{currentGCPX{minConversions}}}'
    | 'currentGCPX{campaignTemplate{currentGCPX{maxConversions}}}'
    | 'currentGCPX{campaignTemplate{currentGCPX{campaignTemplate{id}}}}'
    | 'currentGCPX{campaignTemplate{currentGCPX{campaignTemplate{creationDate}}}}'
    | 'currentGCPX{campaignTemplate{currentGCPX{campaignTemplate{lastChangeDate}}}}'
    | 'currentGCPX{campaignTemplate{currentGCPX{campaignTemplate{name}}}}'
    | 'currentGCPX{campaignTemplate{currentGCPX{campaignTemplate{description}}}}'
    | 'currentGCPX{campaignTemplate{currentGCPX{campaignTemplate{platform}}}}'
    | 'currentGCPX{campaignTemplate{currentGCPX{campaignTemplate{remoteId}}}}'
    | 'currentGCPX{campaignTemplate{currentGCPX{campaignTemplate{systemStatus}}}}'
    | 'currentGCPX{campaignTemplate{currentGCPX{campaignTemplate{errors}}}}'
    | 'currentGCPX{campaignTemplate{currentGCPX{campaignTemplate{warnings}}}}'
    | 'currentGCPX{campaignTemplate{currentGCPX{campaignTemplate{kpi}}}}'
    | 'currentGCPX{campaignTemplate{currentGCPX{marketplace{id}}}}'
    | 'currentGCPX{campaignTemplate{currentGCPX{marketplace{creationDate}}}}'
    | 'currentGCPX{campaignTemplate{currentGCPX{marketplace{lastChangeDate}}}}'
    | 'currentGCPX{campaignTemplate{currentGCPX{marketplace{name}}}}'
    | 'currentGCPX{campaignTemplate{currentGCPX{marketplace{systemStatus}}}}'
    | 'currentGCPX{campaignTemplate{currentGCPX{marketplace{errors}}}}'
    | 'currentGCPX{campaignTemplate{currentGCPX{marketplace{warnings}}}}'
    | 'currentGCPX{campaignTemplate{currentGCPX{marketplace{currencyCode}}}}'
    | 'currentGCPX{campaignTemplate{currentGCPX{marketplace{currencySymbol}}}}'
    | 'currentGCPX{campaignTemplate{currentGCPX{marketplace{currencyOffset}}}}'
    | 'currentGCPX{campaignTemplate{currentGCPX{marketingCampaigns{totalCount}}}}'
    | 'currentGCPX{marketplace{id}}'
    | 'currentGCPX{marketplace{creationDate}}'
    | 'currentGCPX{marketplace{lastChangeDate}}'
    | 'currentGCPX{marketplace{name}}'
    | 'currentGCPX{marketplace{systemStatus}}'
    | 'currentGCPX{marketplace{errors}}'
    | 'currentGCPX{marketplace{warnings}}'
    | 'currentGCPX{marketplace{currencyCode}}'
    | 'currentGCPX{marketplace{currencySymbol}}'
    | 'currentGCPX{marketplace{currencyOffset}}'
    | 'currentGCPX{marketplace{organization{id}}}'
    | 'currentGCPX{marketplace{organization{creationDate}}}'
    | 'currentGCPX{marketplace{organization{lastChangeDate}}}'
    | 'currentGCPX{marketplace{organization{name}}}'
    | 'currentGCPX{marketplace{organization{systemStatus}}}'
    | 'currentGCPX{marketplace{organization{errors}}}'
    | 'currentGCPX{marketplace{organization{warnings}}}'
    | 'currentGCPX{marketplace{organization{tier}}}'
    | 'currentGCPX{marketplace{organization{users{totalCount}}}}'
    | 'currentGCPX{marketplace{organization{marketplaces{totalCount}}}}'
    | 'currentGCPX{marketplace{mediaChannels{edges{cursor}}}}'
    | 'currentGCPX{marketplace{mediaChannels{pageInfo{endCursor}}}}'
    | 'currentGCPX{marketplace{mediaChannels{pageInfo{startCursor}}}}'
    | 'currentGCPX{marketplace{mediaChannels{pageInfo{hasNextPage}}}}'
    | 'currentGCPX{marketplace{mediaChannels{pageInfo{hasPreviousPage}}}}'
    | 'currentGCPX{marketplace{mediaChannels{totalCount}}}'
    | 'currentGCPX{marketplace{campaignTemplates{edges{cursor}}}}'
    | 'currentGCPX{marketplace{campaignTemplates{pageInfo{endCursor}}}}'
    | 'currentGCPX{marketplace{campaignTemplates{pageInfo{startCursor}}}}'
    | 'currentGCPX{marketplace{campaignTemplates{pageInfo{hasNextPage}}}}'
    | 'currentGCPX{marketplace{campaignTemplates{pageInfo{hasPreviousPage}}}}'
    | 'currentGCPX{marketplace{campaignTemplates{totalCount}}}'
    | 'currentGCPX{marketplace{vendors{edges{cursor}}}}'
    | 'currentGCPX{marketplace{vendors{pageInfo{endCursor}}}}'
    | 'currentGCPX{marketplace{vendors{pageInfo{startCursor}}}}'
    | 'currentGCPX{marketplace{vendors{pageInfo{hasNextPage}}}}'
    | 'currentGCPX{marketplace{vendors{pageInfo{hasPreviousPage}}}}'
    | 'currentGCPX{marketplace{vendors{totalCount}}}'
    | 'currentGCPX{marketplace{vendorTokens{edges{cursor}}}}'
    | 'currentGCPX{marketplace{vendorTokens{pageInfo{endCursor}}}}'
    | 'currentGCPX{marketplace{vendorTokens{pageInfo{startCursor}}}}'
    | 'currentGCPX{marketplace{vendorTokens{pageInfo{hasNextPage}}}}'
    | 'currentGCPX{marketplace{vendorTokens{pageInfo{hasPreviousPage}}}}'
    | 'currentGCPX{marketplace{vendorTokens{totalCount}}}'
    | 'currentGCPX{marketplace{creativeTemplates{edges{cursor}}}}'
    | 'currentGCPX{marketplace{creativeTemplates{pageInfo{endCursor}}}}'
    | 'currentGCPX{marketplace{creativeTemplates{pageInfo{startCursor}}}}'
    | 'currentGCPX{marketplace{creativeTemplates{pageInfo{hasNextPage}}}}'
    | 'currentGCPX{marketplace{creativeTemplates{pageInfo{hasPreviousPage}}}}'
    | 'currentGCPX{marketplace{creativeTemplates{totalCount}}}'
    | 'currentGCPX{marketplace{products{edges{cursor}}}}'
    | 'currentGCPX{marketplace{products{pageInfo{endCursor}}}}'
    | 'currentGCPX{marketplace{products{pageInfo{startCursor}}}}'
    | 'currentGCPX{marketplace{products{pageInfo{hasNextPage}}}}'
    | 'currentGCPX{marketplace{products{pageInfo{hasPreviousPage}}}}'
    | 'currentGCPX{marketplace{products{totalCount}}}'
    | 'currentGCPX{marketingCampaigns{edges{node{id}}}}'
    | 'currentGCPX{marketingCampaigns{edges{node{creationDate}}}}'
    | 'currentGCPX{marketingCampaigns{edges{node{lastChangeDate}}}}'
    | 'currentGCPX{marketingCampaigns{edges{node{resultsSource}}}}'
    | 'currentGCPX{marketingCampaigns{edges{node{kpi}}}}'
    | 'currentGCPX{marketingCampaigns{edges{node{systemStatus}}}}'
    | 'currentGCPX{marketingCampaigns{edges{node{errors}}}}'
    | 'currentGCPX{marketingCampaigns{edges{node{warnings}}}}'
    | 'currentGCPX{marketingCampaigns{edges{node{name}}}}'
    | 'currentGCPX{marketingCampaigns{edges{node{status}}}}'
    | 'currentGCPX{marketingCampaigns{edges{node{creativeSpec}}}}'
    | 'currentGCPX{marketingCampaigns{edges{node{runTimeSpec}}}}'
    | 'currentGCPX{marketingCampaigns{edges{node{locationSpec}}}}'
    | 'currentGCPX{marketingCampaigns{edges{node{conversionSpec}}}}'
    | 'currentGCPX{marketingCampaigns{edges{node{startDate}}}}'
    | 'currentGCPX{marketingCampaigns{edges{node{endDate}}}}'
    | 'currentGCPX{marketingCampaigns{edges{node{productFilter}}}}'
    | 'currentGCPX{marketingCampaigns{edges{node{delivering}}}}'
    | 'currentGCPX{marketingCampaigns{edges{cursor}}}'
    | 'currentGCPX{marketingCampaigns{pageInfo{endCursor}}}'
    | 'currentGCPX{marketingCampaigns{pageInfo{startCursor}}}'
    | 'currentGCPX{marketingCampaigns{pageInfo{hasNextPage}}}'
    | 'currentGCPX{marketingCampaigns{pageInfo{hasPreviousPage}}}'
    | 'currentGCPX{marketingCampaigns{totalCount}}';
export type MarketplaceFields = {
    id: 'id';
    creationDate: 'creationDate';
    lastChangeDate: 'lastChangeDate';
    name: 'name';
    systemStatus: 'systemStatus';
    errors: 'errors';
    warnings: 'warnings';
    currencyCode: 'currencyCode';
    currencySymbol: 'currencySymbol';
    currencyOffset: 'currencyOffset';
    organization: {
        id: 'organization{id}';
        creationDate: 'organization{creationDate}';
        lastChangeDate: 'organization{lastChangeDate}';
        name: 'organization{name}';
        systemStatus: 'organization{systemStatus}';
        errors: 'organization{errors}';
        warnings: 'organization{warnings}';
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
                    noticeOptIn: 'organization{users{edges{node{noticeOptIn}}}}';
                    newsletterOptIn: 'organization{users{edges{node{newsletterOptIn}}}}';
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
                    warnings: 'organization{marketplaces{edges{node{warnings}}}}';
                    currencyCode: 'organization{marketplaces{edges{node{currencyCode}}}}';
                    currencySymbol: 'organization{marketplaces{edges{node{currencySymbol}}}}';
                    currencyOffset: 'organization{marketplaces{edges{node{currencyOffset}}}}';
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
                warnings: 'mediaChannels{edges{node{warnings}}}';
                platform: 'mediaChannels{edges{node{platform}}}';
                remoteId: 'mediaChannels{edges{node{remoteId}}}';
                remoteState: 'mediaChannels{edges{node{remoteState}}}';
                currency: 'mediaChannels{edges{node{currency}}}';
                currencyCode: 'mediaChannels{edges{node{currencyCode}}}';
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
                    warnings: 'mediaChannels{edges{node{marketplace{warnings}}}}';
                    currencyCode: 'mediaChannels{edges{node{marketplace{currencyCode}}}}';
                    currencySymbol: 'mediaChannels{edges{node{marketplace{currencySymbol}}}}';
                    currencyOffset: 'mediaChannels{edges{node{marketplace{currencyOffset}}}}';
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
                warnings: 'campaignTemplates{edges{node{warnings}}}';
                kpi: 'campaignTemplates{edges{node{kpi}}}';
                marketplace: {
                    id: 'campaignTemplates{edges{node{marketplace{id}}}}';
                    creationDate: 'campaignTemplates{edges{node{marketplace{creationDate}}}}';
                    lastChangeDate: 'campaignTemplates{edges{node{marketplace{lastChangeDate}}}}';
                    name: 'campaignTemplates{edges{node{marketplace{name}}}}';
                    systemStatus: 'campaignTemplates{edges{node{marketplace{systemStatus}}}}';
                    errors: 'campaignTemplates{edges{node{marketplace{errors}}}}';
                    warnings: 'campaignTemplates{edges{node{marketplace{warnings}}}}';
                    currencyCode: 'campaignTemplates{edges{node{marketplace{currencyCode}}}}';
                    currencySymbol: 'campaignTemplates{edges{node{marketplace{currencySymbol}}}}';
                    currencyOffset: 'campaignTemplates{edges{node{marketplace{currencyOffset}}}}';
                };
                marketingCampaigns: {
                    totalCount: 'campaignTemplates{edges{node{marketingCampaigns{totalCount}}}}';
                };
                GCPXHistory: {
                    totalCount: 'campaignTemplates{edges{node{GCPXHistory{totalCount}}}}';
                };
                currentGCPX: {
                    id: 'campaignTemplates{edges{node{currentGCPX{id}}}}';
                    creationDate: 'campaignTemplates{edges{node{currentGCPX{creationDate}}}}';
                    lastChangeDate: 'campaignTemplates{edges{node{currentGCPX{lastChangeDate}}}}';
                    kpi: 'campaignTemplates{edges{node{currentGCPX{kpi}}}}';
                    price: 'campaignTemplates{edges{node{currentGCPX{price}}}}';
                    startDate: 'campaignTemplates{edges{node{currentGCPX{startDate}}}}';
                    endDate: 'campaignTemplates{edges{node{currentGCPX{endDate}}}}';
                    minConversions: 'campaignTemplates{edges{node{currentGCPX{minConversions}}}}';
                    maxConversions: 'campaignTemplates{edges{node{currentGCPX{maxConversions}}}}';
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
                warnings: 'vendors{edges{node{warnings}}}';
                marketplace: {
                    id: 'vendors{edges{node{marketplace{id}}}}';
                    creationDate: 'vendors{edges{node{marketplace{creationDate}}}}';
                    lastChangeDate: 'vendors{edges{node{marketplace{lastChangeDate}}}}';
                    name: 'vendors{edges{node{marketplace{name}}}}';
                    systemStatus: 'vendors{edges{node{marketplace{systemStatus}}}}';
                    errors: 'vendors{edges{node{marketplace{errors}}}}';
                    warnings: 'vendors{edges{node{marketplace{warnings}}}}';
                    currencyCode: 'vendors{edges{node{marketplace{currencyCode}}}}';
                    currencySymbol: 'vendors{edges{node{marketplace{currencySymbol}}}}';
                    currencyOffset: 'vendors{edges{node{marketplace{currencyOffset}}}}';
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
                    warnings: 'vendorTokens{edges{node{vendor{warnings}}}}';
                };
                marketplace: {
                    id: 'vendorTokens{edges{node{marketplace{id}}}}';
                    creationDate: 'vendorTokens{edges{node{marketplace{creationDate}}}}';
                    lastChangeDate: 'vendorTokens{edges{node{marketplace{lastChangeDate}}}}';
                    name: 'vendorTokens{edges{node{marketplace{name}}}}';
                    systemStatus: 'vendorTokens{edges{node{marketplace{systemStatus}}}}';
                    errors: 'vendorTokens{edges{node{marketplace{errors}}}}';
                    warnings: 'vendorTokens{edges{node{marketplace{warnings}}}}';
                    currencyCode: 'vendorTokens{edges{node{marketplace{currencyCode}}}}';
                    currencySymbol: 'vendorTokens{edges{node{marketplace{currencySymbol}}}}';
                    currencyOffset: 'vendorTokens{edges{node{marketplace{currencyOffset}}}}';
                };
                email: 'vendorTokens{edges{node{email}}}';
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
                warnings: 'creativeTemplates{edges{node{warnings}}}';
                marketplace: {
                    id: 'creativeTemplates{edges{node{marketplace{id}}}}';
                    creationDate: 'creativeTemplates{edges{node{marketplace{creationDate}}}}';
                    lastChangeDate: 'creativeTemplates{edges{node{marketplace{lastChangeDate}}}}';
                    name: 'creativeTemplates{edges{node{marketplace{name}}}}';
                    systemStatus: 'creativeTemplates{edges{node{marketplace{systemStatus}}}}';
                    errors: 'creativeTemplates{edges{node{marketplace{errors}}}}';
                    warnings: 'creativeTemplates{edges{node{marketplace{warnings}}}}';
                    currencyCode: 'creativeTemplates{edges{node{marketplace{currencyCode}}}}';
                    currencySymbol: 'creativeTemplates{edges{node{marketplace{currencySymbol}}}}';
                    currencyOffset: 'creativeTemplates{edges{node{marketplace{currencyOffset}}}}';
                };
                marketingCampaigns: {
                    totalCount: 'creativeTemplates{edges{node{marketingCampaigns{totalCount}}}}';
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
    products: {
        edges: {
            node: {
                id: 'products{edges{node{id}}}';
                creationDate: 'products{edges{node{creationDate}}}';
                lastChangeDate: 'products{edges{node{lastChangeDate}}}';
                resultsSource: 'products{edges{node{resultsSource}}}';
                kpi: 'products{edges{node{kpi}}}';
                vendor: {
                    id: 'products{edges{node{vendor{id}}}}';
                    creationDate: 'products{edges{node{vendor{creationDate}}}}';
                    lastChangeDate: 'products{edges{node{vendor{lastChangeDate}}}}';
                    name: 'products{edges{node{vendor{name}}}}';
                    systemStatus: 'products{edges{node{vendor{systemStatus}}}}';
                    errors: 'products{edges{node{vendor{errors}}}}';
                    warnings: 'products{edges{node{vendor{warnings}}}}';
                };
                systemStatus: 'products{edges{node{systemStatus}}}';
                errors: 'products{edges{node{errors}}}';
                warnings: 'products{edges{node{warnings}}}';
                name: 'products{edges{node{name}}}';
                sku: 'products{edges{node{sku}}}';
                remoteState: 'products{edges{node{remoteState}}}';
                metadata: 'products{edges{node{metadata}}}';
                imported: 'products{edges{node{imported}}}';
                results: {
                    totalCount: 'products{edges{node{results{totalCount}}}}';
                };
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
                    externalEventSourceIds: 'products{edges{node{catalog{externalEventSourceIds}}}}';
                    productSource: 'products{edges{node{catalog{productSource}}}}';
                    errors: 'products{edges{node{catalog{errors}}}}';
                    warnings: 'products{edges{node{catalog{warnings}}}}';
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
export const MarketplaceFields: MarketplaceFields = {
    id: 'id',
    creationDate: 'creationDate',
    lastChangeDate: 'lastChangeDate',
    name: 'name',
    systemStatus: 'systemStatus',
    errors: 'errors',
    warnings: 'warnings',
    currencyCode: 'currencyCode',
    currencySymbol: 'currencySymbol',
    currencyOffset: 'currencyOffset',
    organization: {
        id: 'organization{id}',
        creationDate: 'organization{creationDate}',
        lastChangeDate: 'organization{lastChangeDate}',
        name: 'organization{name}',
        systemStatus: 'organization{systemStatus}',
        errors: 'organization{errors}',
        warnings: 'organization{warnings}',
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
                    noticeOptIn:
                        'organization{users{edges{node{noticeOptIn}}}}',
                    newsletterOptIn:
                        'organization{users{edges{node{newsletterOptIn}}}}',
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
                    warnings:
                        'organization{marketplaces{edges{node{warnings}}}}',
                    currencyCode:
                        'organization{marketplaces{edges{node{currencyCode}}}}',
                    currencySymbol:
                        'organization{marketplaces{edges{node{currencySymbol}}}}',
                    currencyOffset:
                        'organization{marketplaces{edges{node{currencyOffset}}}}',
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
                warnings: 'mediaChannels{edges{node{warnings}}}',
                platform: 'mediaChannels{edges{node{platform}}}',
                remoteId: 'mediaChannels{edges{node{remoteId}}}',
                remoteState: 'mediaChannels{edges{node{remoteState}}}',
                currency: 'mediaChannels{edges{node{currency}}}',
                currencyCode: 'mediaChannels{edges{node{currencyCode}}}',
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
                    warnings:
                        'mediaChannels{edges{node{marketplace{warnings}}}}',
                    currencyCode:
                        'mediaChannels{edges{node{marketplace{currencyCode}}}}',
                    currencySymbol:
                        'mediaChannels{edges{node{marketplace{currencySymbol}}}}',
                    currencyOffset:
                        'mediaChannels{edges{node{marketplace{currencyOffset}}}}',
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
                warnings: 'campaignTemplates{edges{node{warnings}}}',
                kpi: 'campaignTemplates{edges{node{kpi}}}',
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
                    warnings:
                        'campaignTemplates{edges{node{marketplace{warnings}}}}',
                    currencyCode:
                        'campaignTemplates{edges{node{marketplace{currencyCode}}}}',
                    currencySymbol:
                        'campaignTemplates{edges{node{marketplace{currencySymbol}}}}',
                    currencyOffset:
                        'campaignTemplates{edges{node{marketplace{currencyOffset}}}}',
                },
                marketingCampaigns: {
                    totalCount:
                        'campaignTemplates{edges{node{marketingCampaigns{totalCount}}}}',
                },
                GCPXHistory: {
                    totalCount:
                        'campaignTemplates{edges{node{GCPXHistory{totalCount}}}}',
                },
                currentGCPX: {
                    id: 'campaignTemplates{edges{node{currentGCPX{id}}}}',
                    creationDate:
                        'campaignTemplates{edges{node{currentGCPX{creationDate}}}}',
                    lastChangeDate:
                        'campaignTemplates{edges{node{currentGCPX{lastChangeDate}}}}',
                    kpi: 'campaignTemplates{edges{node{currentGCPX{kpi}}}}',
                    price: 'campaignTemplates{edges{node{currentGCPX{price}}}}',
                    startDate:
                        'campaignTemplates{edges{node{currentGCPX{startDate}}}}',
                    endDate:
                        'campaignTemplates{edges{node{currentGCPX{endDate}}}}',
                    minConversions:
                        'campaignTemplates{edges{node{currentGCPX{minConversions}}}}',
                    maxConversions:
                        'campaignTemplates{edges{node{currentGCPX{maxConversions}}}}',
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
                warnings: 'vendors{edges{node{warnings}}}',
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
                    warnings: 'vendors{edges{node{marketplace{warnings}}}}',
                    currencyCode:
                        'vendors{edges{node{marketplace{currencyCode}}}}',
                    currencySymbol:
                        'vendors{edges{node{marketplace{currencySymbol}}}}',
                    currencyOffset:
                        'vendors{edges{node{marketplace{currencyOffset}}}}',
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
                    warnings: 'vendorTokens{edges{node{vendor{warnings}}}}',
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
                    warnings:
                        'vendorTokens{edges{node{marketplace{warnings}}}}',
                    currencyCode:
                        'vendorTokens{edges{node{marketplace{currencyCode}}}}',
                    currencySymbol:
                        'vendorTokens{edges{node{marketplace{currencySymbol}}}}',
                    currencyOffset:
                        'vendorTokens{edges{node{marketplace{currencyOffset}}}}',
                },
                email: 'vendorTokens{edges{node{email}}}',
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
                warnings: 'creativeTemplates{edges{node{warnings}}}',
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
                    warnings:
                        'creativeTemplates{edges{node{marketplace{warnings}}}}',
                    currencyCode:
                        'creativeTemplates{edges{node{marketplace{currencyCode}}}}',
                    currencySymbol:
                        'creativeTemplates{edges{node{marketplace{currencySymbol}}}}',
                    currencyOffset:
                        'creativeTemplates{edges{node{marketplace{currencyOffset}}}}',
                },
                marketingCampaigns: {
                    totalCount:
                        'creativeTemplates{edges{node{marketingCampaigns{totalCount}}}}',
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
    products: {
        edges: {
            node: {
                id: 'products{edges{node{id}}}',
                creationDate: 'products{edges{node{creationDate}}}',
                lastChangeDate: 'products{edges{node{lastChangeDate}}}',
                resultsSource: 'products{edges{node{resultsSource}}}',
                kpi: 'products{edges{node{kpi}}}',
                vendor: {
                    id: 'products{edges{node{vendor{id}}}}',
                    creationDate: 'products{edges{node{vendor{creationDate}}}}',
                    lastChangeDate:
                        'products{edges{node{vendor{lastChangeDate}}}}',
                    name: 'products{edges{node{vendor{name}}}}',
                    systemStatus: 'products{edges{node{vendor{systemStatus}}}}',
                    errors: 'products{edges{node{vendor{errors}}}}',
                    warnings: 'products{edges{node{vendor{warnings}}}}',
                },
                systemStatus: 'products{edges{node{systemStatus}}}',
                errors: 'products{edges{node{errors}}}',
                warnings: 'products{edges{node{warnings}}}',
                name: 'products{edges{node{name}}}',
                sku: 'products{edges{node{sku}}}',
                remoteState: 'products{edges{node{remoteState}}}',
                metadata: 'products{edges{node{metadata}}}',
                imported: 'products{edges{node{imported}}}',
                results: {
                    totalCount: 'products{edges{node{results{totalCount}}}}',
                },
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
                    externalEventSourceIds:
                        'products{edges{node{catalog{externalEventSourceIds}}}}',
                    productSource:
                        'products{edges{node{catalog{productSource}}}}',
                    errors: 'products{edges{node{catalog{errors}}}}',
                    warnings: 'products{edges{node{catalog{warnings}}}}',
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
export type MarketplaceField =
    | 'id'
    | 'creationDate'
    | 'lastChangeDate'
    | 'name'
    | 'systemStatus'
    | 'errors'
    | 'warnings'
    | 'currencyCode'
    | 'currencySymbol'
    | 'currencyOffset'
    | 'organization{id}'
    | 'organization{creationDate}'
    | 'organization{lastChangeDate}'
    | 'organization{name}'
    | 'organization{systemStatus}'
    | 'organization{errors}'
    | 'organization{warnings}'
    | 'organization{tier}'
    | 'organization{users{edges{node{id}}}}'
    | 'organization{users{edges{node{creationDate}}}}'
    | 'organization{users{edges{node{lastChangeDate}}}}'
    | 'organization{users{edges{node{email}}}}'
    | 'organization{users{edges{node{firstName}}}}'
    | 'organization{users{edges{node{lastName}}}}'
    | 'organization{users{edges{node{noticeOptIn}}}}'
    | 'organization{users{edges{node{newsletterOptIn}}}}'
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
    | 'organization{marketplaces{edges{node{warnings}}}}'
    | 'organization{marketplaces{edges{node{currencyCode}}}}'
    | 'organization{marketplaces{edges{node{currencySymbol}}}}'
    | 'organization{marketplaces{edges{node{currencyOffset}}}}'
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
    | 'mediaChannels{edges{node{warnings}}}'
    | 'mediaChannels{edges{node{platform}}}'
    | 'mediaChannels{edges{node{remoteId}}}'
    | 'mediaChannels{edges{node{remoteState}}}'
    | 'mediaChannels{edges{node{currency}}}'
    | 'mediaChannels{edges{node{currencyCode}}}'
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
    | 'mediaChannels{edges{node{marketplace{warnings}}}}'
    | 'mediaChannels{edges{node{marketplace{currencyCode}}}}'
    | 'mediaChannels{edges{node{marketplace{currencySymbol}}}}'
    | 'mediaChannels{edges{node{marketplace{currencyOffset}}}}'
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
    | 'campaignTemplates{edges{node{warnings}}}'
    | 'campaignTemplates{edges{node{kpi}}}'
    | 'campaignTemplates{edges{node{marketplace{id}}}}'
    | 'campaignTemplates{edges{node{marketplace{creationDate}}}}'
    | 'campaignTemplates{edges{node{marketplace{lastChangeDate}}}}'
    | 'campaignTemplates{edges{node{marketplace{name}}}}'
    | 'campaignTemplates{edges{node{marketplace{systemStatus}}}}'
    | 'campaignTemplates{edges{node{marketplace{errors}}}}'
    | 'campaignTemplates{edges{node{marketplace{warnings}}}}'
    | 'campaignTemplates{edges{node{marketplace{currencyCode}}}}'
    | 'campaignTemplates{edges{node{marketplace{currencySymbol}}}}'
    | 'campaignTemplates{edges{node{marketplace{currencyOffset}}}}'
    | 'campaignTemplates{edges{node{marketingCampaigns{totalCount}}}}'
    | 'campaignTemplates{edges{node{GCPXHistory{totalCount}}}}'
    | 'campaignTemplates{edges{node{currentGCPX{id}}}}'
    | 'campaignTemplates{edges{node{currentGCPX{creationDate}}}}'
    | 'campaignTemplates{edges{node{currentGCPX{lastChangeDate}}}}'
    | 'campaignTemplates{edges{node{currentGCPX{kpi}}}}'
    | 'campaignTemplates{edges{node{currentGCPX{price}}}}'
    | 'campaignTemplates{edges{node{currentGCPX{startDate}}}}'
    | 'campaignTemplates{edges{node{currentGCPX{endDate}}}}'
    | 'campaignTemplates{edges{node{currentGCPX{minConversions}}}}'
    | 'campaignTemplates{edges{node{currentGCPX{maxConversions}}}}'
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
    | 'vendors{edges{node{warnings}}}'
    | 'vendors{edges{node{marketplace{id}}}}'
    | 'vendors{edges{node{marketplace{creationDate}}}}'
    | 'vendors{edges{node{marketplace{lastChangeDate}}}}'
    | 'vendors{edges{node{marketplace{name}}}}'
    | 'vendors{edges{node{marketplace{systemStatus}}}}'
    | 'vendors{edges{node{marketplace{errors}}}}'
    | 'vendors{edges{node{marketplace{warnings}}}}'
    | 'vendors{edges{node{marketplace{currencyCode}}}}'
    | 'vendors{edges{node{marketplace{currencySymbol}}}}'
    | 'vendors{edges{node{marketplace{currencyOffset}}}}'
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
    | 'vendorTokens{edges{node{vendor{warnings}}}}'
    | 'vendorTokens{edges{node{marketplace{id}}}}'
    | 'vendorTokens{edges{node{marketplace{creationDate}}}}'
    | 'vendorTokens{edges{node{marketplace{lastChangeDate}}}}'
    | 'vendorTokens{edges{node{marketplace{name}}}}'
    | 'vendorTokens{edges{node{marketplace{systemStatus}}}}'
    | 'vendorTokens{edges{node{marketplace{errors}}}}'
    | 'vendorTokens{edges{node{marketplace{warnings}}}}'
    | 'vendorTokens{edges{node{marketplace{currencyCode}}}}'
    | 'vendorTokens{edges{node{marketplace{currencySymbol}}}}'
    | 'vendorTokens{edges{node{marketplace{currencyOffset}}}}'
    | 'vendorTokens{edges{node{email}}}'
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
    | 'creativeTemplates{edges{node{warnings}}}'
    | 'creativeTemplates{edges{node{marketplace{id}}}}'
    | 'creativeTemplates{edges{node{marketplace{creationDate}}}}'
    | 'creativeTemplates{edges{node{marketplace{lastChangeDate}}}}'
    | 'creativeTemplates{edges{node{marketplace{name}}}}'
    | 'creativeTemplates{edges{node{marketplace{systemStatus}}}}'
    | 'creativeTemplates{edges{node{marketplace{errors}}}}'
    | 'creativeTemplates{edges{node{marketplace{warnings}}}}'
    | 'creativeTemplates{edges{node{marketplace{currencyCode}}}}'
    | 'creativeTemplates{edges{node{marketplace{currencySymbol}}}}'
    | 'creativeTemplates{edges{node{marketplace{currencyOffset}}}}'
    | 'creativeTemplates{edges{node{marketingCampaigns{totalCount}}}}'
    | 'creativeTemplates{edges{node{creativeLayers{totalCount}}}}'
    | 'creativeTemplates{edges{cursor}}'
    | 'creativeTemplates{pageInfo{endCursor}}'
    | 'creativeTemplates{pageInfo{startCursor}}'
    | 'creativeTemplates{pageInfo{hasNextPage}}'
    | 'creativeTemplates{pageInfo{hasPreviousPage}}'
    | 'creativeTemplates{totalCount}'
    | 'products{edges{node{id}}}'
    | 'products{edges{node{creationDate}}}'
    | 'products{edges{node{lastChangeDate}}}'
    | 'products{edges{node{resultsSource}}}'
    | 'products{edges{node{kpi}}}'
    | 'products{edges{node{vendor{id}}}}'
    | 'products{edges{node{vendor{creationDate}}}}'
    | 'products{edges{node{vendor{lastChangeDate}}}}'
    | 'products{edges{node{vendor{name}}}}'
    | 'products{edges{node{vendor{systemStatus}}}}'
    | 'products{edges{node{vendor{errors}}}}'
    | 'products{edges{node{vendor{warnings}}}}'
    | 'products{edges{node{systemStatus}}}'
    | 'products{edges{node{errors}}}'
    | 'products{edges{node{warnings}}}'
    | 'products{edges{node{name}}}'
    | 'products{edges{node{sku}}}'
    | 'products{edges{node{remoteState}}}'
    | 'products{edges{node{metadata}}}'
    | 'products{edges{node{imported}}}'
    | 'products{edges{node{results{totalCount}}}}'
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
    | 'products{edges{node{catalog{externalEventSourceIds}}}}'
    | 'products{edges{node{catalog{productSource}}}}'
    | 'products{edges{node{catalog{errors}}}}'
    | 'products{edges{node{catalog{warnings}}}}'
    | 'products{edges{cursor}}'
    | 'products{pageInfo{endCursor}}'
    | 'products{pageInfo{startCursor}}'
    | 'products{pageInfo{hasNextPage}}'
    | 'products{pageInfo{hasPreviousPage}}'
    | 'products{totalCount}';
export type OrganizationFields = {
    id: 'id';
    creationDate: 'creationDate';
    lastChangeDate: 'lastChangeDate';
    name: 'name';
    systemStatus: 'systemStatus';
    errors: 'errors';
    warnings: 'warnings';
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
                noticeOptIn: 'users{edges{node{noticeOptIn}}}';
                newsletterOptIn: 'users{edges{node{newsletterOptIn}}}';
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
                warnings: 'marketplaces{edges{node{warnings}}}';
                currencyCode: 'marketplaces{edges{node{currencyCode}}}';
                currencySymbol: 'marketplaces{edges{node{currencySymbol}}}';
                currencyOffset: 'marketplaces{edges{node{currencyOffset}}}';
                organization: {
                    id: 'marketplaces{edges{node{organization{id}}}}';
                    creationDate: 'marketplaces{edges{node{organization{creationDate}}}}';
                    lastChangeDate: 'marketplaces{edges{node{organization{lastChangeDate}}}}';
                    name: 'marketplaces{edges{node{organization{name}}}}';
                    systemStatus: 'marketplaces{edges{node{organization{systemStatus}}}}';
                    errors: 'marketplaces{edges{node{organization{errors}}}}';
                    warnings: 'marketplaces{edges{node{organization{warnings}}}}';
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
                products: {
                    totalCount: 'marketplaces{edges{node{products{totalCount}}}}';
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
    warnings: 'warnings',
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
                noticeOptIn: 'users{edges{node{noticeOptIn}}}',
                newsletterOptIn: 'users{edges{node{newsletterOptIn}}}',
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
                warnings: 'marketplaces{edges{node{warnings}}}',
                currencyCode: 'marketplaces{edges{node{currencyCode}}}',
                currencySymbol: 'marketplaces{edges{node{currencySymbol}}}',
                currencyOffset: 'marketplaces{edges{node{currencyOffset}}}',
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
                    warnings:
                        'marketplaces{edges{node{organization{warnings}}}}',
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
                products: {
                    totalCount:
                        'marketplaces{edges{node{products{totalCount}}}}',
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
    | 'warnings'
    | 'tier'
    | 'users{edges{node{id}}}'
    | 'users{edges{node{creationDate}}}'
    | 'users{edges{node{lastChangeDate}}}'
    | 'users{edges{node{email}}}'
    | 'users{edges{node{firstName}}}'
    | 'users{edges{node{lastName}}}'
    | 'users{edges{node{organizations{totalCount}}}}'
    | 'users{edges{node{entitlements{totalCount}}}}'
    | 'users{edges{node{noticeOptIn}}}'
    | 'users{edges{node{newsletterOptIn}}}'
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
    | 'marketplaces{edges{node{warnings}}}'
    | 'marketplaces{edges{node{currencyCode}}}'
    | 'marketplaces{edges{node{currencySymbol}}}'
    | 'marketplaces{edges{node{currencyOffset}}}'
    | 'marketplaces{edges{node{organization{id}}}}'
    | 'marketplaces{edges{node{organization{creationDate}}}}'
    | 'marketplaces{edges{node{organization{lastChangeDate}}}}'
    | 'marketplaces{edges{node{organization{name}}}}'
    | 'marketplaces{edges{node{organization{systemStatus}}}}'
    | 'marketplaces{edges{node{organization{errors}}}}'
    | 'marketplaces{edges{node{organization{warnings}}}}'
    | 'marketplaces{edges{node{organization{tier}}}}'
    | 'marketplaces{edges{node{mediaChannels{totalCount}}}}'
    | 'marketplaces{edges{node{campaignTemplates{totalCount}}}}'
    | 'marketplaces{edges{node{vendors{totalCount}}}}'
    | 'marketplaces{edges{node{vendorTokens{totalCount}}}}'
    | 'marketplaces{edges{node{creativeTemplates{totalCount}}}}'
    | 'marketplaces{edges{node{products{totalCount}}}}'
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
                warnings: 'organizations{edges{node{warnings}}}';
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
                    noticeOptIn: 'entitlements{edges{node{user{noticeOptIn}}}}';
                    newsletterOptIn: 'entitlements{edges{node{user{newsletterOptIn}}}}';
                };
                resource: {
                    id: 'entitlements{edges{node{resource{id}}}}';
                    creationDate: 'entitlements{edges{node{resource{creationDate}}}}';
                    lastChangeDate: 'entitlements{edges{node{resource{lastChangeDate}}}}';
                    name: 'entitlements{edges{node{resource{name}}}}';
                    systemStatus: 'entitlements{edges{node{resource{systemStatus}}}}';
                    errors: 'entitlements{edges{node{resource{errors}}}}';
                    warnings: 'entitlements{edges{node{resource{warnings}}}}';
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
    noticeOptIn: 'noticeOptIn';
    newsletterOptIn: 'newsletterOptIn';
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
                warnings: 'organizations{edges{node{warnings}}}',
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
                    noticeOptIn: 'entitlements{edges{node{user{noticeOptIn}}}}',
                    newsletterOptIn:
                        'entitlements{edges{node{user{newsletterOptIn}}}}',
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
                    warnings: 'entitlements{edges{node{resource{warnings}}}}',
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
    noticeOptIn: 'noticeOptIn',
    newsletterOptIn: 'newsletterOptIn',
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
    | 'organizations{edges{node{warnings}}}'
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
    | 'entitlements{edges{node{user{noticeOptIn}}}}'
    | 'entitlements{edges{node{user{newsletterOptIn}}}}'
    | 'entitlements{edges{node{resource{id}}}}'
    | 'entitlements{edges{node{resource{creationDate}}}}'
    | 'entitlements{edges{node{resource{lastChangeDate}}}}'
    | 'entitlements{edges{node{resource{name}}}}'
    | 'entitlements{edges{node{resource{systemStatus}}}}'
    | 'entitlements{edges{node{resource{errors}}}}'
    | 'entitlements{edges{node{resource{warnings}}}}'
    | 'entitlements{edges{cursor}}'
    | 'entitlements{pageInfo{endCursor}}'
    | 'entitlements{pageInfo{startCursor}}'
    | 'entitlements{pageInfo{hasNextPage}}'
    | 'entitlements{pageInfo{hasPreviousPage}}'
    | 'entitlements{totalCount}'
    | 'noticeOptIn'
    | 'newsletterOptIn';
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
                    warnings: 'user{organizations{edges{node{warnings}}}}';
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
        noticeOptIn: 'user{noticeOptIn}';
        newsletterOptIn: 'user{newsletterOptIn}';
    };
    resource: {
        id: 'resource{id}';
        creationDate: 'resource{creationDate}';
        lastChangeDate: 'resource{lastChangeDate}';
        name: 'resource{name}';
        systemStatus: 'resource{systemStatus}';
        errors: 'resource{errors}';
        warnings: 'resource{warnings}';
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
                    warnings: 'user{organizations{edges{node{warnings}}}}',
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
        noticeOptIn: 'user{noticeOptIn}',
        newsletterOptIn: 'user{newsletterOptIn}',
    },
    resource: {
        id: 'resource{id}',
        creationDate: 'resource{creationDate}',
        lastChangeDate: 'resource{lastChangeDate}',
        name: 'resource{name}',
        systemStatus: 'resource{systemStatus}',
        errors: 'resource{errors}',
        warnings: 'resource{warnings}',
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
    | 'user{organizations{edges{node{warnings}}}}'
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
    | 'user{noticeOptIn}'
    | 'user{newsletterOptIn}'
    | 'resource{id}'
    | 'resource{creationDate}'
    | 'resource{lastChangeDate}'
    | 'resource{name}'
    | 'resource{systemStatus}'
    | 'resource{errors}'
    | 'resource{warnings}';
export type MediaChannelFields = {
    id: 'id';
    creationDate: 'creationDate';
    lastChangeDate: 'lastChangeDate';
    name: 'name';
    systemStatus: 'systemStatus';
    errors: 'errors';
    warnings: 'warnings';
    platform: 'platform';
    remoteId: 'remoteId';
    remoteState: 'remoteState';
    currency: 'currency';
    currencyCode: 'currencyCode';
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
                externalEventSourceIds: 'catalogs{edges{node{externalEventSourceIds}}}';
                productSource: 'catalogs{edges{node{productSource}}}';
                errors: 'catalogs{edges{node{errors}}}';
                warnings: 'catalogs{edges{node{warnings}}}';
                mediaChannel: {
                    id: 'catalogs{edges{node{mediaChannel{id}}}}';
                    creationDate: 'catalogs{edges{node{mediaChannel{creationDate}}}}';
                    lastChangeDate: 'catalogs{edges{node{mediaChannel{lastChangeDate}}}}';
                    name: 'catalogs{edges{node{mediaChannel{name}}}}';
                    systemStatus: 'catalogs{edges{node{mediaChannel{systemStatus}}}}';
                    errors: 'catalogs{edges{node{mediaChannel{errors}}}}';
                    warnings: 'catalogs{edges{node{mediaChannel{warnings}}}}';
                    platform: 'catalogs{edges{node{mediaChannel{platform}}}}';
                    remoteId: 'catalogs{edges{node{mediaChannel{remoteId}}}}';
                    remoteState: 'catalogs{edges{node{mediaChannel{remoteState}}}}';
                    currency: 'catalogs{edges{node{mediaChannel{currency}}}}';
                    currencyCode: 'catalogs{edges{node{mediaChannel{currencyCode}}}}';
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
        warnings: 'marketplace{warnings}';
        currencyCode: 'marketplace{currencyCode}';
        currencySymbol: 'marketplace{currencySymbol}';
        currencyOffset: 'marketplace{currencyOffset}';
        organization: {
            id: 'marketplace{organization{id}}';
            creationDate: 'marketplace{organization{creationDate}}';
            lastChangeDate: 'marketplace{organization{lastChangeDate}}';
            name: 'marketplace{organization{name}}';
            systemStatus: 'marketplace{organization{systemStatus}}';
            errors: 'marketplace{organization{errors}}';
            warnings: 'marketplace{organization{warnings}}';
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
                    warnings: 'marketplace{mediaChannels{edges{node{warnings}}}}';
                    platform: 'marketplace{mediaChannels{edges{node{platform}}}}';
                    remoteId: 'marketplace{mediaChannels{edges{node{remoteId}}}}';
                    remoteState: 'marketplace{mediaChannels{edges{node{remoteState}}}}';
                    currency: 'marketplace{mediaChannels{edges{node{currency}}}}';
                    currencyCode: 'marketplace{mediaChannels{edges{node{currencyCode}}}}';
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
                    warnings: 'marketplace{campaignTemplates{edges{node{warnings}}}}';
                    kpi: 'marketplace{campaignTemplates{edges{node{kpi}}}}';
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
                    warnings: 'marketplace{vendors{edges{node{warnings}}}}';
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
                    email: 'marketplace{vendorTokens{edges{node{email}}}}';
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
                    warnings: 'marketplace{creativeTemplates{edges{node{warnings}}}}';
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
        products: {
            edges: {
                node: {
                    id: 'marketplace{products{edges{node{id}}}}';
                    creationDate: 'marketplace{products{edges{node{creationDate}}}}';
                    lastChangeDate: 'marketplace{products{edges{node{lastChangeDate}}}}';
                    resultsSource: 'marketplace{products{edges{node{resultsSource}}}}';
                    kpi: 'marketplace{products{edges{node{kpi}}}}';
                    systemStatus: 'marketplace{products{edges{node{systemStatus}}}}';
                    errors: 'marketplace{products{edges{node{errors}}}}';
                    warnings: 'marketplace{products{edges{node{warnings}}}}';
                    name: 'marketplace{products{edges{node{name}}}}';
                    sku: 'marketplace{products{edges{node{sku}}}}';
                    remoteState: 'marketplace{products{edges{node{remoteState}}}}';
                    metadata: 'marketplace{products{edges{node{metadata}}}}';
                    imported: 'marketplace{products{edges{node{imported}}}}';
                };
                cursor: 'marketplace{products{edges{cursor}}}';
            };
            pageInfo: {
                endCursor: 'marketplace{products{pageInfo{endCursor}}}';
                startCursor: 'marketplace{products{pageInfo{startCursor}}}';
                hasNextPage: 'marketplace{products{pageInfo{hasNextPage}}}';
                hasPreviousPage: 'marketplace{products{pageInfo{hasPreviousPage}}}';
            };
            totalCount: 'marketplace{products{totalCount}}';
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
    warnings: 'warnings',
    platform: 'platform',
    remoteId: 'remoteId',
    remoteState: 'remoteState',
    currency: 'currency',
    currencyCode: 'currencyCode',
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
                externalEventSourceIds:
                    'catalogs{edges{node{externalEventSourceIds}}}',
                productSource: 'catalogs{edges{node{productSource}}}',
                errors: 'catalogs{edges{node{errors}}}',
                warnings: 'catalogs{edges{node{warnings}}}',
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
                    warnings: 'catalogs{edges{node{mediaChannel{warnings}}}}',
                    platform: 'catalogs{edges{node{mediaChannel{platform}}}}',
                    remoteId: 'catalogs{edges{node{mediaChannel{remoteId}}}}',
                    remoteState:
                        'catalogs{edges{node{mediaChannel{remoteState}}}}',
                    currency: 'catalogs{edges{node{mediaChannel{currency}}}}',
                    currencyCode:
                        'catalogs{edges{node{mediaChannel{currencyCode}}}}',
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
        warnings: 'marketplace{warnings}',
        currencyCode: 'marketplace{currencyCode}',
        currencySymbol: 'marketplace{currencySymbol}',
        currencyOffset: 'marketplace{currencyOffset}',
        organization: {
            id: 'marketplace{organization{id}}',
            creationDate: 'marketplace{organization{creationDate}}',
            lastChangeDate: 'marketplace{organization{lastChangeDate}}',
            name: 'marketplace{organization{name}}',
            systemStatus: 'marketplace{organization{systemStatus}}',
            errors: 'marketplace{organization{errors}}',
            warnings: 'marketplace{organization{warnings}}',
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
                    warnings:
                        'marketplace{mediaChannels{edges{node{warnings}}}}',
                    platform:
                        'marketplace{mediaChannels{edges{node{platform}}}}',
                    remoteId:
                        'marketplace{mediaChannels{edges{node{remoteId}}}}',
                    remoteState:
                        'marketplace{mediaChannels{edges{node{remoteState}}}}',
                    currency:
                        'marketplace{mediaChannels{edges{node{currency}}}}',
                    currencyCode:
                        'marketplace{mediaChannels{edges{node{currencyCode}}}}',
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
                    warnings:
                        'marketplace{campaignTemplates{edges{node{warnings}}}}',
                    kpi: 'marketplace{campaignTemplates{edges{node{kpi}}}}',
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
                    warnings: 'marketplace{vendors{edges{node{warnings}}}}',
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
                    email: 'marketplace{vendorTokens{edges{node{email}}}}',
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
                    warnings:
                        'marketplace{creativeTemplates{edges{node{warnings}}}}',
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
        products: {
            edges: {
                node: {
                    id: 'marketplace{products{edges{node{id}}}}',
                    creationDate:
                        'marketplace{products{edges{node{creationDate}}}}',
                    lastChangeDate:
                        'marketplace{products{edges{node{lastChangeDate}}}}',
                    resultsSource:
                        'marketplace{products{edges{node{resultsSource}}}}',
                    kpi: 'marketplace{products{edges{node{kpi}}}}',
                    systemStatus:
                        'marketplace{products{edges{node{systemStatus}}}}',
                    errors: 'marketplace{products{edges{node{errors}}}}',
                    warnings: 'marketplace{products{edges{node{warnings}}}}',
                    name: 'marketplace{products{edges{node{name}}}}',
                    sku: 'marketplace{products{edges{node{sku}}}}',
                    remoteState:
                        'marketplace{products{edges{node{remoteState}}}}',
                    metadata: 'marketplace{products{edges{node{metadata}}}}',
                    imported: 'marketplace{products{edges{node{imported}}}}',
                },
                cursor: 'marketplace{products{edges{cursor}}}',
            },
            pageInfo: {
                endCursor: 'marketplace{products{pageInfo{endCursor}}}',
                startCursor: 'marketplace{products{pageInfo{startCursor}}}',
                hasNextPage: 'marketplace{products{pageInfo{hasNextPage}}}',
                hasPreviousPage:
                    'marketplace{products{pageInfo{hasPreviousPage}}}',
            },
            totalCount: 'marketplace{products{totalCount}}',
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
    | 'warnings'
    | 'platform'
    | 'remoteId'
    | 'remoteState'
    | 'currency'
    | 'currencyCode'
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
    | 'catalogs{edges{node{externalEventSourceIds}}}'
    | 'catalogs{edges{node{productSource}}}'
    | 'catalogs{edges{node{errors}}}'
    | 'catalogs{edges{node{warnings}}}'
    | 'catalogs{edges{node{mediaChannel{id}}}}'
    | 'catalogs{edges{node{mediaChannel{creationDate}}}}'
    | 'catalogs{edges{node{mediaChannel{lastChangeDate}}}}'
    | 'catalogs{edges{node{mediaChannel{name}}}}'
    | 'catalogs{edges{node{mediaChannel{systemStatus}}}}'
    | 'catalogs{edges{node{mediaChannel{errors}}}}'
    | 'catalogs{edges{node{mediaChannel{warnings}}}}'
    | 'catalogs{edges{node{mediaChannel{platform}}}}'
    | 'catalogs{edges{node{mediaChannel{remoteId}}}}'
    | 'catalogs{edges{node{mediaChannel{remoteState}}}}'
    | 'catalogs{edges{node{mediaChannel{currency}}}}'
    | 'catalogs{edges{node{mediaChannel{currencyCode}}}}'
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
    | 'marketplace{warnings}'
    | 'marketplace{currencyCode}'
    | 'marketplace{currencySymbol}'
    | 'marketplace{currencyOffset}'
    | 'marketplace{organization{id}}'
    | 'marketplace{organization{creationDate}}'
    | 'marketplace{organization{lastChangeDate}}'
    | 'marketplace{organization{name}}'
    | 'marketplace{organization{systemStatus}}'
    | 'marketplace{organization{errors}}'
    | 'marketplace{organization{warnings}}'
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
    | 'marketplace{mediaChannels{edges{node{warnings}}}}'
    | 'marketplace{mediaChannels{edges{node{platform}}}}'
    | 'marketplace{mediaChannels{edges{node{remoteId}}}}'
    | 'marketplace{mediaChannels{edges{node{remoteState}}}}'
    | 'marketplace{mediaChannels{edges{node{currency}}}}'
    | 'marketplace{mediaChannels{edges{node{currencyCode}}}}'
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
    | 'marketplace{campaignTemplates{edges{node{warnings}}}}'
    | 'marketplace{campaignTemplates{edges{node{kpi}}}}'
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
    | 'marketplace{vendors{edges{node{warnings}}}}'
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
    | 'marketplace{vendorTokens{edges{node{email}}}}'
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
    | 'marketplace{creativeTemplates{edges{node{warnings}}}}'
    | 'marketplace{creativeTemplates{edges{cursor}}}'
    | 'marketplace{creativeTemplates{pageInfo{endCursor}}}'
    | 'marketplace{creativeTemplates{pageInfo{startCursor}}}'
    | 'marketplace{creativeTemplates{pageInfo{hasNextPage}}}'
    | 'marketplace{creativeTemplates{pageInfo{hasPreviousPage}}}'
    | 'marketplace{creativeTemplates{totalCount}}'
    | 'marketplace{products{edges{node{id}}}}'
    | 'marketplace{products{edges{node{creationDate}}}}'
    | 'marketplace{products{edges{node{lastChangeDate}}}}'
    | 'marketplace{products{edges{node{resultsSource}}}}'
    | 'marketplace{products{edges{node{kpi}}}}'
    | 'marketplace{products{edges{node{systemStatus}}}}'
    | 'marketplace{products{edges{node{errors}}}}'
    | 'marketplace{products{edges{node{warnings}}}}'
    | 'marketplace{products{edges{node{name}}}}'
    | 'marketplace{products{edges{node{sku}}}}'
    | 'marketplace{products{edges{node{remoteState}}}}'
    | 'marketplace{products{edges{node{metadata}}}}'
    | 'marketplace{products{edges{node{imported}}}}'
    | 'marketplace{products{edges{cursor}}}'
    | 'marketplace{products{pageInfo{endCursor}}}'
    | 'marketplace{products{pageInfo{startCursor}}}'
    | 'marketplace{products{pageInfo{hasNextPage}}}'
    | 'marketplace{products{pageInfo{hasPreviousPage}}}'
    | 'marketplace{products{totalCount}}';
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
    externalEventSourceIds: 'externalEventSourceIds';
    productSource: 'productSource';
    errors: 'errors';
    warnings: 'warnings';
    mediaChannel: {
        id: 'mediaChannel{id}';
        creationDate: 'mediaChannel{creationDate}';
        lastChangeDate: 'mediaChannel{lastChangeDate}';
        name: 'mediaChannel{name}';
        systemStatus: 'mediaChannel{systemStatus}';
        errors: 'mediaChannel{errors}';
        warnings: 'mediaChannel{warnings}';
        platform: 'mediaChannel{platform}';
        remoteId: 'mediaChannel{remoteId}';
        remoteState: 'mediaChannel{remoteState}';
        currency: 'mediaChannel{currency}';
        currencyCode: 'mediaChannel{currencyCode}';
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
                    externalEventSourceIds: 'mediaChannel{catalogs{edges{node{externalEventSourceIds}}}}';
                    productSource: 'mediaChannel{catalogs{edges{node{productSource}}}}';
                    errors: 'mediaChannel{catalogs{edges{node{errors}}}}';
                    warnings: 'mediaChannel{catalogs{edges{node{warnings}}}}';
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
            warnings: 'mediaChannel{marketplace{warnings}}';
            currencyCode: 'mediaChannel{marketplace{currencyCode}}';
            currencySymbol: 'mediaChannel{marketplace{currencySymbol}}';
            currencyOffset: 'mediaChannel{marketplace{currencyOffset}}';
            organization: {
                id: 'mediaChannel{marketplace{organization{id}}}';
                creationDate: 'mediaChannel{marketplace{organization{creationDate}}}';
                lastChangeDate: 'mediaChannel{marketplace{organization{lastChangeDate}}}';
                name: 'mediaChannel{marketplace{organization{name}}}';
                systemStatus: 'mediaChannel{marketplace{organization{systemStatus}}}';
                errors: 'mediaChannel{marketplace{organization{errors}}}';
                warnings: 'mediaChannel{marketplace{organization{warnings}}}';
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
            products: {
                edges: {
                    cursor: 'mediaChannel{marketplace{products{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'mediaChannel{marketplace{products{pageInfo{endCursor}}}}';
                    startCursor: 'mediaChannel{marketplace{products{pageInfo{startCursor}}}}';
                    hasNextPage: 'mediaChannel{marketplace{products{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'mediaChannel{marketplace{products{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'mediaChannel{marketplace{products{totalCount}}}';
            };
        };
    };
    products: {
        edges: {
            node: {
                id: 'products{edges{node{id}}}';
                creationDate: 'products{edges{node{creationDate}}}';
                lastChangeDate: 'products{edges{node{lastChangeDate}}}';
                resultsSource: 'products{edges{node{resultsSource}}}';
                kpi: 'products{edges{node{kpi}}}';
                vendor: {
                    id: 'products{edges{node{vendor{id}}}}';
                    creationDate: 'products{edges{node{vendor{creationDate}}}}';
                    lastChangeDate: 'products{edges{node{vendor{lastChangeDate}}}}';
                    name: 'products{edges{node{vendor{name}}}}';
                    systemStatus: 'products{edges{node{vendor{systemStatus}}}}';
                    errors: 'products{edges{node{vendor{errors}}}}';
                    warnings: 'products{edges{node{vendor{warnings}}}}';
                };
                systemStatus: 'products{edges{node{systemStatus}}}';
                errors: 'products{edges{node{errors}}}';
                warnings: 'products{edges{node{warnings}}}';
                name: 'products{edges{node{name}}}';
                sku: 'products{edges{node{sku}}}';
                remoteState: 'products{edges{node{remoteState}}}';
                metadata: 'products{edges{node{metadata}}}';
                imported: 'products{edges{node{imported}}}';
                results: {
                    totalCount: 'products{edges{node{results{totalCount}}}}';
                };
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
                    externalEventSourceIds: 'products{edges{node{catalog{externalEventSourceIds}}}}';
                    productSource: 'products{edges{node{catalog{productSource}}}}';
                    errors: 'products{edges{node{catalog{errors}}}}';
                    warnings: 'products{edges{node{catalog{warnings}}}}';
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
    externalEventSourceIds: 'externalEventSourceIds',
    productSource: 'productSource',
    errors: 'errors',
    warnings: 'warnings',
    mediaChannel: {
        id: 'mediaChannel{id}',
        creationDate: 'mediaChannel{creationDate}',
        lastChangeDate: 'mediaChannel{lastChangeDate}',
        name: 'mediaChannel{name}',
        systemStatus: 'mediaChannel{systemStatus}',
        errors: 'mediaChannel{errors}',
        warnings: 'mediaChannel{warnings}',
        platform: 'mediaChannel{platform}',
        remoteId: 'mediaChannel{remoteId}',
        remoteState: 'mediaChannel{remoteState}',
        currency: 'mediaChannel{currency}',
        currencyCode: 'mediaChannel{currencyCode}',
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
                    externalEventSourceIds:
                        'mediaChannel{catalogs{edges{node{externalEventSourceIds}}}}',
                    productSource:
                        'mediaChannel{catalogs{edges{node{productSource}}}}',
                    errors: 'mediaChannel{catalogs{edges{node{errors}}}}',
                    warnings: 'mediaChannel{catalogs{edges{node{warnings}}}}',
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
            warnings: 'mediaChannel{marketplace{warnings}}',
            currencyCode: 'mediaChannel{marketplace{currencyCode}}',
            currencySymbol: 'mediaChannel{marketplace{currencySymbol}}',
            currencyOffset: 'mediaChannel{marketplace{currencyOffset}}',
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
                warnings: 'mediaChannel{marketplace{organization{warnings}}}',
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
            products: {
                edges: {
                    cursor:
                        'mediaChannel{marketplace{products{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'mediaChannel{marketplace{products{pageInfo{endCursor}}}}',
                    startCursor:
                        'mediaChannel{marketplace{products{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'mediaChannel{marketplace{products{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'mediaChannel{marketplace{products{pageInfo{hasPreviousPage}}}}',
                },
                totalCount: 'mediaChannel{marketplace{products{totalCount}}}',
            },
        },
    },
    products: {
        edges: {
            node: {
                id: 'products{edges{node{id}}}',
                creationDate: 'products{edges{node{creationDate}}}',
                lastChangeDate: 'products{edges{node{lastChangeDate}}}',
                resultsSource: 'products{edges{node{resultsSource}}}',
                kpi: 'products{edges{node{kpi}}}',
                vendor: {
                    id: 'products{edges{node{vendor{id}}}}',
                    creationDate: 'products{edges{node{vendor{creationDate}}}}',
                    lastChangeDate:
                        'products{edges{node{vendor{lastChangeDate}}}}',
                    name: 'products{edges{node{vendor{name}}}}',
                    systemStatus: 'products{edges{node{vendor{systemStatus}}}}',
                    errors: 'products{edges{node{vendor{errors}}}}',
                    warnings: 'products{edges{node{vendor{warnings}}}}',
                },
                systemStatus: 'products{edges{node{systemStatus}}}',
                errors: 'products{edges{node{errors}}}',
                warnings: 'products{edges{node{warnings}}}',
                name: 'products{edges{node{name}}}',
                sku: 'products{edges{node{sku}}}',
                remoteState: 'products{edges{node{remoteState}}}',
                metadata: 'products{edges{node{metadata}}}',
                imported: 'products{edges{node{imported}}}',
                results: {
                    totalCount: 'products{edges{node{results{totalCount}}}}',
                },
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
                    externalEventSourceIds:
                        'products{edges{node{catalog{externalEventSourceIds}}}}',
                    productSource:
                        'products{edges{node{catalog{productSource}}}}',
                    errors: 'products{edges{node{catalog{errors}}}}',
                    warnings: 'products{edges{node{catalog{warnings}}}}',
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
    | 'externalEventSourceIds'
    | 'productSource'
    | 'errors'
    | 'warnings'
    | 'mediaChannel{id}'
    | 'mediaChannel{creationDate}'
    | 'mediaChannel{lastChangeDate}'
    | 'mediaChannel{name}'
    | 'mediaChannel{systemStatus}'
    | 'mediaChannel{errors}'
    | 'mediaChannel{warnings}'
    | 'mediaChannel{platform}'
    | 'mediaChannel{remoteId}'
    | 'mediaChannel{remoteState}'
    | 'mediaChannel{currency}'
    | 'mediaChannel{currencyCode}'
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
    | 'mediaChannel{catalogs{edges{node{externalEventSourceIds}}}}'
    | 'mediaChannel{catalogs{edges{node{productSource}}}}'
    | 'mediaChannel{catalogs{edges{node{errors}}}}'
    | 'mediaChannel{catalogs{edges{node{warnings}}}}'
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
    | 'mediaChannel{marketplace{warnings}}'
    | 'mediaChannel{marketplace{currencyCode}}'
    | 'mediaChannel{marketplace{currencySymbol}}'
    | 'mediaChannel{marketplace{currencyOffset}}'
    | 'mediaChannel{marketplace{organization{id}}}'
    | 'mediaChannel{marketplace{organization{creationDate}}}'
    | 'mediaChannel{marketplace{organization{lastChangeDate}}}'
    | 'mediaChannel{marketplace{organization{name}}}'
    | 'mediaChannel{marketplace{organization{systemStatus}}}'
    | 'mediaChannel{marketplace{organization{errors}}}'
    | 'mediaChannel{marketplace{organization{warnings}}}'
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
    | 'mediaChannel{marketplace{products{edges{cursor}}}}'
    | 'mediaChannel{marketplace{products{pageInfo{endCursor}}}}'
    | 'mediaChannel{marketplace{products{pageInfo{startCursor}}}}'
    | 'mediaChannel{marketplace{products{pageInfo{hasNextPage}}}}'
    | 'mediaChannel{marketplace{products{pageInfo{hasPreviousPage}}}}'
    | 'mediaChannel{marketplace{products{totalCount}}}'
    | 'products{edges{node{id}}}'
    | 'products{edges{node{creationDate}}}'
    | 'products{edges{node{lastChangeDate}}}'
    | 'products{edges{node{resultsSource}}}'
    | 'products{edges{node{kpi}}}'
    | 'products{edges{node{vendor{id}}}}'
    | 'products{edges{node{vendor{creationDate}}}}'
    | 'products{edges{node{vendor{lastChangeDate}}}}'
    | 'products{edges{node{vendor{name}}}}'
    | 'products{edges{node{vendor{systemStatus}}}}'
    | 'products{edges{node{vendor{errors}}}}'
    | 'products{edges{node{vendor{warnings}}}}'
    | 'products{edges{node{systemStatus}}}'
    | 'products{edges{node{errors}}}'
    | 'products{edges{node{warnings}}}'
    | 'products{edges{node{name}}}'
    | 'products{edges{node{sku}}}'
    | 'products{edges{node{remoteState}}}'
    | 'products{edges{node{metadata}}}'
    | 'products{edges{node{imported}}}'
    | 'products{edges{node{results{totalCount}}}}'
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
    | 'products{edges{node{catalog{externalEventSourceIds}}}}'
    | 'products{edges{node{catalog{productSource}}}}'
    | 'products{edges{node{catalog{errors}}}}'
    | 'products{edges{node{catalog{warnings}}}}'
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
    resultsSource: 'resultsSource';
    kpi: 'kpi';
    vendor: {
        id: 'vendor{id}';
        creationDate: 'vendor{creationDate}';
        lastChangeDate: 'vendor{lastChangeDate}';
        name: 'vendor{name}';
        systemStatus: 'vendor{systemStatus}';
        errors: 'vendor{errors}';
        warnings: 'vendor{warnings}';
        marketplace: {
            id: 'vendor{marketplace{id}}';
            creationDate: 'vendor{marketplace{creationDate}}';
            lastChangeDate: 'vendor{marketplace{lastChangeDate}}';
            name: 'vendor{marketplace{name}}';
            systemStatus: 'vendor{marketplace{systemStatus}}';
            errors: 'vendor{marketplace{errors}}';
            warnings: 'vendor{marketplace{warnings}}';
            currencyCode: 'vendor{marketplace{currencyCode}}';
            currencySymbol: 'vendor{marketplace{currencySymbol}}';
            currencyOffset: 'vendor{marketplace{currencyOffset}}';
            organization: {
                id: 'vendor{marketplace{organization{id}}}';
                creationDate: 'vendor{marketplace{organization{creationDate}}}';
                lastChangeDate: 'vendor{marketplace{organization{lastChangeDate}}}';
                name: 'vendor{marketplace{organization{name}}}';
                systemStatus: 'vendor{marketplace{organization{systemStatus}}}';
                errors: 'vendor{marketplace{organization{errors}}}';
                warnings: 'vendor{marketplace{organization{warnings}}}';
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
            products: {
                edges: {
                    cursor: 'vendor{marketplace{products{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'vendor{marketplace{products{pageInfo{endCursor}}}}';
                    startCursor: 'vendor{marketplace{products{pageInfo{startCursor}}}}';
                    hasNextPage: 'vendor{marketplace{products{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'vendor{marketplace{products{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'vendor{marketplace{products{totalCount}}}';
            };
        };
        vendorTokens: {
            edges: {
                node: {
                    id: 'vendor{vendorTokens{edges{node{id}}}}';
                    creationDate: 'vendor{vendorTokens{edges{node{creationDate}}}}';
                    lastChangeDate: 'vendor{vendorTokens{edges{node{lastChangeDate}}}}';
                    token: 'vendor{vendorTokens{edges{node{token}}}}';
                    email: 'vendor{vendorTokens{edges{node{email}}}}';
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
                    resultsSource: 'vendor{products{edges{node{resultsSource}}}}';
                    kpi: 'vendor{products{edges{node{kpi}}}}';
                    systemStatus: 'vendor{products{edges{node{systemStatus}}}}';
                    errors: 'vendor{products{edges{node{errors}}}}';
                    warnings: 'vendor{products{edges{node{warnings}}}}';
                    name: 'vendor{products{edges{node{name}}}}';
                    sku: 'vendor{products{edges{node{sku}}}}';
                    remoteState: 'vendor{products{edges{node{remoteState}}}}';
                    metadata: 'vendor{products{edges{node{metadata}}}}';
                    imported: 'vendor{products{edges{node{imported}}}}';
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
    warnings: 'warnings';
    name: 'name';
    sku: 'sku';
    remoteState: 'remoteState';
    metadata: 'metadata';
    imported: 'imported';
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
                breakdownType: 'results{edges{node{breakdownType}}}';
                resource: {
                    id: 'results{edges{node{resource{id}}}}';
                    creationDate: 'results{edges{node{resource{creationDate}}}}';
                    lastChangeDate: 'results{edges{node{resource{lastChangeDate}}}}';
                    resultsSource: 'results{edges{node{resource{resultsSource}}}}';
                    kpi: 'results{edges{node{resource{kpi}}}}';
                    systemStatus: 'results{edges{node{resource{systemStatus}}}}';
                    errors: 'results{edges{node{resource{errors}}}}';
                    warnings: 'results{edges{node{resource{warnings}}}}';
                };
                breakdown: {
                    id: 'results{edges{node{breakdown{id}}}}';
                    creationDate: 'results{edges{node{breakdown{creationDate}}}}';
                    lastChangeDate: 'results{edges{node{breakdown{lastChangeDate}}}}';
                    resultsSource: 'results{edges{node{breakdown{resultsSource}}}}';
                    kpi: 'results{edges{node{breakdown{kpi}}}}';
                    systemStatus: 'results{edges{node{breakdown{systemStatus}}}}';
                    errors: 'results{edges{node{breakdown{errors}}}}';
                    warnings: 'results{edges{node{breakdown{warnings}}}}';
                };
                vendor: {
                    id: 'results{edges{node{vendor{id}}}}';
                    creationDate: 'results{edges{node{vendor{creationDate}}}}';
                    lastChangeDate: 'results{edges{node{vendor{lastChangeDate}}}}';
                    name: 'results{edges{node{vendor{name}}}}';
                    systemStatus: 'results{edges{node{vendor{systemStatus}}}}';
                    errors: 'results{edges{node{vendor{errors}}}}';
                    warnings: 'results{edges{node{vendor{warnings}}}}';
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
    marketingCampaigns: {
        edges: {
            node: {
                id: 'marketingCampaigns{edges{node{id}}}';
                creationDate: 'marketingCampaigns{edges{node{creationDate}}}';
                lastChangeDate: 'marketingCampaigns{edges{node{lastChangeDate}}}';
                resultsSource: 'marketingCampaigns{edges{node{resultsSource}}}';
                kpi: 'marketingCampaigns{edges{node{kpi}}}';
                vendor: {
                    id: 'marketingCampaigns{edges{node{vendor{id}}}}';
                    creationDate: 'marketingCampaigns{edges{node{vendor{creationDate}}}}';
                    lastChangeDate: 'marketingCampaigns{edges{node{vendor{lastChangeDate}}}}';
                    name: 'marketingCampaigns{edges{node{vendor{name}}}}';
                    systemStatus: 'marketingCampaigns{edges{node{vendor{systemStatus}}}}';
                    errors: 'marketingCampaigns{edges{node{vendor{errors}}}}';
                    warnings: 'marketingCampaigns{edges{node{vendor{warnings}}}}';
                };
                systemStatus: 'marketingCampaigns{edges{node{systemStatus}}}';
                errors: 'marketingCampaigns{edges{node{errors}}}';
                warnings: 'marketingCampaigns{edges{node{warnings}}}';
                name: 'marketingCampaigns{edges{node{name}}}';
                status: 'marketingCampaigns{edges{node{status}}}';
                creativeSpec: 'marketingCampaigns{edges{node{creativeSpec}}}';
                runTimeSpec: 'marketingCampaigns{edges{node{runTimeSpec}}}';
                locationSpec: 'marketingCampaigns{edges{node{locationSpec}}}';
                conversionSpec: 'marketingCampaigns{edges{node{conversionSpec}}}';
                startDate: 'marketingCampaigns{edges{node{startDate}}}';
                endDate: 'marketingCampaigns{edges{node{endDate}}}';
                productFilter: 'marketingCampaigns{edges{node{productFilter}}}';
                GCPX: {
                    id: 'marketingCampaigns{edges{node{GCPX{id}}}}';
                    creationDate: 'marketingCampaigns{edges{node{GCPX{creationDate}}}}';
                    lastChangeDate: 'marketingCampaigns{edges{node{GCPX{lastChangeDate}}}}';
                    kpi: 'marketingCampaigns{edges{node{GCPX{kpi}}}}';
                    price: 'marketingCampaigns{edges{node{GCPX{price}}}}';
                    startDate: 'marketingCampaigns{edges{node{GCPX{startDate}}}}';
                    endDate: 'marketingCampaigns{edges{node{GCPX{endDate}}}}';
                    minConversions: 'marketingCampaigns{edges{node{GCPX{minConversions}}}}';
                    maxConversions: 'marketingCampaigns{edges{node{GCPX{maxConversions}}}}';
                };
                delivering: 'marketingCampaigns{edges{node{delivering}}}';
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
                    externalEventSourceIds: 'marketingCampaigns{edges{node{catalog{externalEventSourceIds}}}}';
                    productSource: 'marketingCampaigns{edges{node{catalog{productSource}}}}';
                    errors: 'marketingCampaigns{edges{node{catalog{errors}}}}';
                    warnings: 'marketingCampaigns{edges{node{catalog{warnings}}}}';
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
                    warnings: 'marketingCampaigns{edges{node{campaignTemplate{warnings}}}}';
                    kpi: 'marketingCampaigns{edges{node{campaignTemplate{kpi}}}}';
                };
                mediaChannel: {
                    id: 'marketingCampaigns{edges{node{mediaChannel{id}}}}';
                    creationDate: 'marketingCampaigns{edges{node{mediaChannel{creationDate}}}}';
                    lastChangeDate: 'marketingCampaigns{edges{node{mediaChannel{lastChangeDate}}}}';
                    name: 'marketingCampaigns{edges{node{mediaChannel{name}}}}';
                    systemStatus: 'marketingCampaigns{edges{node{mediaChannel{systemStatus}}}}';
                    errors: 'marketingCampaigns{edges{node{mediaChannel{errors}}}}';
                    warnings: 'marketingCampaigns{edges{node{mediaChannel{warnings}}}}';
                    platform: 'marketingCampaigns{edges{node{mediaChannel{platform}}}}';
                    remoteId: 'marketingCampaigns{edges{node{mediaChannel{remoteId}}}}';
                    remoteState: 'marketingCampaigns{edges{node{mediaChannel{remoteState}}}}';
                    currency: 'marketingCampaigns{edges{node{mediaChannel{currency}}}}';
                    currencyCode: 'marketingCampaigns{edges{node{mediaChannel{currencyCode}}}}';
                    currencySymbol: 'marketingCampaigns{edges{node{mediaChannel{currencySymbol}}}}';
                    currencyOffset: 'marketingCampaigns{edges{node{mediaChannel{currencyOffset}}}}';
                    timezone: 'marketingCampaigns{edges{node{mediaChannel{timezone}}}}';
                    tokenStatus: 'marketingCampaigns{edges{node{mediaChannel{tokenStatus}}}}';
                };
                results: {
                    totalCount: 'marketingCampaigns{edges{node{results{totalCount}}}}';
                };
                notifications: {
                    totalCount: 'marketingCampaigns{edges{node{notifications{totalCount}}}}';
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
        externalEventSourceIds: 'catalog{externalEventSourceIds}';
        productSource: 'catalog{productSource}';
        errors: 'catalog{errors}';
        warnings: 'catalog{warnings}';
        mediaChannel: {
            id: 'catalog{mediaChannel{id}}';
            creationDate: 'catalog{mediaChannel{creationDate}}';
            lastChangeDate: 'catalog{mediaChannel{lastChangeDate}}';
            name: 'catalog{mediaChannel{name}}';
            systemStatus: 'catalog{mediaChannel{systemStatus}}';
            errors: 'catalog{mediaChannel{errors}}';
            warnings: 'catalog{mediaChannel{warnings}}';
            platform: 'catalog{mediaChannel{platform}}';
            remoteId: 'catalog{mediaChannel{remoteId}}';
            remoteState: 'catalog{mediaChannel{remoteState}}';
            currency: 'catalog{mediaChannel{currency}}';
            currencyCode: 'catalog{mediaChannel{currencyCode}}';
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
                warnings: 'catalog{mediaChannel{marketplace{warnings}}}';
                currencyCode: 'catalog{mediaChannel{marketplace{currencyCode}}}';
                currencySymbol: 'catalog{mediaChannel{marketplace{currencySymbol}}}';
                currencyOffset: 'catalog{mediaChannel{marketplace{currencyOffset}}}';
                organization: {
                    id: 'catalog{mediaChannel{marketplace{organization{id}}}}';
                    creationDate: 'catalog{mediaChannel{marketplace{organization{creationDate}}}}';
                    lastChangeDate: 'catalog{mediaChannel{marketplace{organization{lastChangeDate}}}}';
                    name: 'catalog{mediaChannel{marketplace{organization{name}}}}';
                    systemStatus: 'catalog{mediaChannel{marketplace{organization{systemStatus}}}}';
                    errors: 'catalog{mediaChannel{marketplace{organization{errors}}}}';
                    warnings: 'catalog{mediaChannel{marketplace{organization{warnings}}}}';
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
                products: {
                    totalCount: 'catalog{mediaChannel{marketplace{products{totalCount}}}}';
                };
            };
        };
        products: {
            edges: {
                node: {
                    id: 'catalog{products{edges{node{id}}}}';
                    creationDate: 'catalog{products{edges{node{creationDate}}}}';
                    lastChangeDate: 'catalog{products{edges{node{lastChangeDate}}}}';
                    resultsSource: 'catalog{products{edges{node{resultsSource}}}}';
                    kpi: 'catalog{products{edges{node{kpi}}}}';
                    systemStatus: 'catalog{products{edges{node{systemStatus}}}}';
                    errors: 'catalog{products{edges{node{errors}}}}';
                    warnings: 'catalog{products{edges{node{warnings}}}}';
                    name: 'catalog{products{edges{node{name}}}}';
                    sku: 'catalog{products{edges{node{sku}}}}';
                    remoteState: 'catalog{products{edges{node{remoteState}}}}';
                    metadata: 'catalog{products{edges{node{metadata}}}}';
                    imported: 'catalog{products{edges{node{imported}}}}';
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
};
export const ProductFields: ProductFields = {
    id: 'id',
    creationDate: 'creationDate',
    lastChangeDate: 'lastChangeDate',
    resultsSource: 'resultsSource',
    kpi: 'kpi',
    vendor: {
        id: 'vendor{id}',
        creationDate: 'vendor{creationDate}',
        lastChangeDate: 'vendor{lastChangeDate}',
        name: 'vendor{name}',
        systemStatus: 'vendor{systemStatus}',
        errors: 'vendor{errors}',
        warnings: 'vendor{warnings}',
        marketplace: {
            id: 'vendor{marketplace{id}}',
            creationDate: 'vendor{marketplace{creationDate}}',
            lastChangeDate: 'vendor{marketplace{lastChangeDate}}',
            name: 'vendor{marketplace{name}}',
            systemStatus: 'vendor{marketplace{systemStatus}}',
            errors: 'vendor{marketplace{errors}}',
            warnings: 'vendor{marketplace{warnings}}',
            currencyCode: 'vendor{marketplace{currencyCode}}',
            currencySymbol: 'vendor{marketplace{currencySymbol}}',
            currencyOffset: 'vendor{marketplace{currencyOffset}}',
            organization: {
                id: 'vendor{marketplace{organization{id}}}',
                creationDate: 'vendor{marketplace{organization{creationDate}}}',
                lastChangeDate:
                    'vendor{marketplace{organization{lastChangeDate}}}',
                name: 'vendor{marketplace{organization{name}}}',
                systemStatus: 'vendor{marketplace{organization{systemStatus}}}',
                errors: 'vendor{marketplace{organization{errors}}}',
                warnings: 'vendor{marketplace{organization{warnings}}}',
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
            products: {
                edges: {
                    cursor: 'vendor{marketplace{products{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'vendor{marketplace{products{pageInfo{endCursor}}}}',
                    startCursor:
                        'vendor{marketplace{products{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'vendor{marketplace{products{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'vendor{marketplace{products{pageInfo{hasPreviousPage}}}}',
                },
                totalCount: 'vendor{marketplace{products{totalCount}}}',
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
                    email: 'vendor{vendorTokens{edges{node{email}}}}',
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
                    resultsSource:
                        'vendor{products{edges{node{resultsSource}}}}',
                    kpi: 'vendor{products{edges{node{kpi}}}}',
                    systemStatus: 'vendor{products{edges{node{systemStatus}}}}',
                    errors: 'vendor{products{edges{node{errors}}}}',
                    warnings: 'vendor{products{edges{node{warnings}}}}',
                    name: 'vendor{products{edges{node{name}}}}',
                    sku: 'vendor{products{edges{node{sku}}}}',
                    remoteState: 'vendor{products{edges{node{remoteState}}}}',
                    metadata: 'vendor{products{edges{node{metadata}}}}',
                    imported: 'vendor{products{edges{node{imported}}}}',
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
    warnings: 'warnings',
    name: 'name',
    sku: 'sku',
    remoteState: 'remoteState',
    metadata: 'metadata',
    imported: 'imported',
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
                breakdownType: 'results{edges{node{breakdownType}}}',
                resource: {
                    id: 'results{edges{node{resource{id}}}}',
                    creationDate:
                        'results{edges{node{resource{creationDate}}}}',
                    lastChangeDate:
                        'results{edges{node{resource{lastChangeDate}}}}',
                    resultsSource:
                        'results{edges{node{resource{resultsSource}}}}',
                    kpi: 'results{edges{node{resource{kpi}}}}',
                    systemStatus:
                        'results{edges{node{resource{systemStatus}}}}',
                    errors: 'results{edges{node{resource{errors}}}}',
                    warnings: 'results{edges{node{resource{warnings}}}}',
                },
                breakdown: {
                    id: 'results{edges{node{breakdown{id}}}}',
                    creationDate:
                        'results{edges{node{breakdown{creationDate}}}}',
                    lastChangeDate:
                        'results{edges{node{breakdown{lastChangeDate}}}}',
                    resultsSource:
                        'results{edges{node{breakdown{resultsSource}}}}',
                    kpi: 'results{edges{node{breakdown{kpi}}}}',
                    systemStatus:
                        'results{edges{node{breakdown{systemStatus}}}}',
                    errors: 'results{edges{node{breakdown{errors}}}}',
                    warnings: 'results{edges{node{breakdown{warnings}}}}',
                },
                vendor: {
                    id: 'results{edges{node{vendor{id}}}}',
                    creationDate: 'results{edges{node{vendor{creationDate}}}}',
                    lastChangeDate:
                        'results{edges{node{vendor{lastChangeDate}}}}',
                    name: 'results{edges{node{vendor{name}}}}',
                    systemStatus: 'results{edges{node{vendor{systemStatus}}}}',
                    errors: 'results{edges{node{vendor{errors}}}}',
                    warnings: 'results{edges{node{vendor{warnings}}}}',
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
    marketingCampaigns: {
        edges: {
            node: {
                id: 'marketingCampaigns{edges{node{id}}}',
                creationDate: 'marketingCampaigns{edges{node{creationDate}}}',
                lastChangeDate:
                    'marketingCampaigns{edges{node{lastChangeDate}}}',
                resultsSource: 'marketingCampaigns{edges{node{resultsSource}}}',
                kpi: 'marketingCampaigns{edges{node{kpi}}}',
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
                    warnings:
                        'marketingCampaigns{edges{node{vendor{warnings}}}}',
                },
                systemStatus: 'marketingCampaigns{edges{node{systemStatus}}}',
                errors: 'marketingCampaigns{edges{node{errors}}}',
                warnings: 'marketingCampaigns{edges{node{warnings}}}',
                name: 'marketingCampaigns{edges{node{name}}}',
                status: 'marketingCampaigns{edges{node{status}}}',
                creativeSpec: 'marketingCampaigns{edges{node{creativeSpec}}}',
                runTimeSpec: 'marketingCampaigns{edges{node{runTimeSpec}}}',
                locationSpec: 'marketingCampaigns{edges{node{locationSpec}}}',
                conversionSpec:
                    'marketingCampaigns{edges{node{conversionSpec}}}',
                startDate: 'marketingCampaigns{edges{node{startDate}}}',
                endDate: 'marketingCampaigns{edges{node{endDate}}}',
                productFilter: 'marketingCampaigns{edges{node{productFilter}}}',
                GCPX: {
                    id: 'marketingCampaigns{edges{node{GCPX{id}}}}',
                    creationDate:
                        'marketingCampaigns{edges{node{GCPX{creationDate}}}}',
                    lastChangeDate:
                        'marketingCampaigns{edges{node{GCPX{lastChangeDate}}}}',
                    kpi: 'marketingCampaigns{edges{node{GCPX{kpi}}}}',
                    price: 'marketingCampaigns{edges{node{GCPX{price}}}}',
                    startDate:
                        'marketingCampaigns{edges{node{GCPX{startDate}}}}',
                    endDate: 'marketingCampaigns{edges{node{GCPX{endDate}}}}',
                    minConversions:
                        'marketingCampaigns{edges{node{GCPX{minConversions}}}}',
                    maxConversions:
                        'marketingCampaigns{edges{node{GCPX{maxConversions}}}}',
                },
                delivering: 'marketingCampaigns{edges{node{delivering}}}',
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
                    externalEventSourceIds:
                        'marketingCampaigns{edges{node{catalog{externalEventSourceIds}}}}',
                    productSource:
                        'marketingCampaigns{edges{node{catalog{productSource}}}}',
                    errors: 'marketingCampaigns{edges{node{catalog{errors}}}}',
                    warnings:
                        'marketingCampaigns{edges{node{catalog{warnings}}}}',
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
                    warnings:
                        'marketingCampaigns{edges{node{campaignTemplate{warnings}}}}',
                    kpi:
                        'marketingCampaigns{edges{node{campaignTemplate{kpi}}}}',
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
                    warnings:
                        'marketingCampaigns{edges{node{mediaChannel{warnings}}}}',
                    platform:
                        'marketingCampaigns{edges{node{mediaChannel{platform}}}}',
                    remoteId:
                        'marketingCampaigns{edges{node{mediaChannel{remoteId}}}}',
                    remoteState:
                        'marketingCampaigns{edges{node{mediaChannel{remoteState}}}}',
                    currency:
                        'marketingCampaigns{edges{node{mediaChannel{currency}}}}',
                    currencyCode:
                        'marketingCampaigns{edges{node{mediaChannel{currencyCode}}}}',
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
                notifications: {
                    totalCount:
                        'marketingCampaigns{edges{node{notifications{totalCount}}}}',
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
        externalEventSourceIds: 'catalog{externalEventSourceIds}',
        productSource: 'catalog{productSource}',
        errors: 'catalog{errors}',
        warnings: 'catalog{warnings}',
        mediaChannel: {
            id: 'catalog{mediaChannel{id}}',
            creationDate: 'catalog{mediaChannel{creationDate}}',
            lastChangeDate: 'catalog{mediaChannel{lastChangeDate}}',
            name: 'catalog{mediaChannel{name}}',
            systemStatus: 'catalog{mediaChannel{systemStatus}}',
            errors: 'catalog{mediaChannel{errors}}',
            warnings: 'catalog{mediaChannel{warnings}}',
            platform: 'catalog{mediaChannel{platform}}',
            remoteId: 'catalog{mediaChannel{remoteId}}',
            remoteState: 'catalog{mediaChannel{remoteState}}',
            currency: 'catalog{mediaChannel{currency}}',
            currencyCode: 'catalog{mediaChannel{currencyCode}}',
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
                warnings: 'catalog{mediaChannel{marketplace{warnings}}}',
                currencyCode:
                    'catalog{mediaChannel{marketplace{currencyCode}}}',
                currencySymbol:
                    'catalog{mediaChannel{marketplace{currencySymbol}}}',
                currencyOffset:
                    'catalog{mediaChannel{marketplace{currencyOffset}}}',
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
                    warnings:
                        'catalog{mediaChannel{marketplace{organization{warnings}}}}',
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
                products: {
                    totalCount:
                        'catalog{mediaChannel{marketplace{products{totalCount}}}}',
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
                    resultsSource:
                        'catalog{products{edges{node{resultsSource}}}}',
                    kpi: 'catalog{products{edges{node{kpi}}}}',
                    systemStatus:
                        'catalog{products{edges{node{systemStatus}}}}',
                    errors: 'catalog{products{edges{node{errors}}}}',
                    warnings: 'catalog{products{edges{node{warnings}}}}',
                    name: 'catalog{products{edges{node{name}}}}',
                    sku: 'catalog{products{edges{node{sku}}}}',
                    remoteState: 'catalog{products{edges{node{remoteState}}}}',
                    metadata: 'catalog{products{edges{node{metadata}}}}',
                    imported: 'catalog{products{edges{node{imported}}}}',
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
};
export type ProductField =
    | 'id'
    | 'creationDate'
    | 'lastChangeDate'
    | 'resultsSource'
    | 'kpi'
    | 'vendor{id}'
    | 'vendor{creationDate}'
    | 'vendor{lastChangeDate}'
    | 'vendor{name}'
    | 'vendor{systemStatus}'
    | 'vendor{errors}'
    | 'vendor{warnings}'
    | 'vendor{marketplace{id}}'
    | 'vendor{marketplace{creationDate}}'
    | 'vendor{marketplace{lastChangeDate}}'
    | 'vendor{marketplace{name}}'
    | 'vendor{marketplace{systemStatus}}'
    | 'vendor{marketplace{errors}}'
    | 'vendor{marketplace{warnings}}'
    | 'vendor{marketplace{currencyCode}}'
    | 'vendor{marketplace{currencySymbol}}'
    | 'vendor{marketplace{currencyOffset}}'
    | 'vendor{marketplace{organization{id}}}'
    | 'vendor{marketplace{organization{creationDate}}}'
    | 'vendor{marketplace{organization{lastChangeDate}}}'
    | 'vendor{marketplace{organization{name}}}'
    | 'vendor{marketplace{organization{systemStatus}}}'
    | 'vendor{marketplace{organization{errors}}}'
    | 'vendor{marketplace{organization{warnings}}}'
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
    | 'vendor{marketplace{products{edges{cursor}}}}'
    | 'vendor{marketplace{products{pageInfo{endCursor}}}}'
    | 'vendor{marketplace{products{pageInfo{startCursor}}}}'
    | 'vendor{marketplace{products{pageInfo{hasNextPage}}}}'
    | 'vendor{marketplace{products{pageInfo{hasPreviousPage}}}}'
    | 'vendor{marketplace{products{totalCount}}}'
    | 'vendor{vendorTokens{edges{node{id}}}}'
    | 'vendor{vendorTokens{edges{node{creationDate}}}}'
    | 'vendor{vendorTokens{edges{node{lastChangeDate}}}}'
    | 'vendor{vendorTokens{edges{node{token}}}}'
    | 'vendor{vendorTokens{edges{node{email}}}}'
    | 'vendor{vendorTokens{edges{cursor}}}'
    | 'vendor{vendorTokens{pageInfo{endCursor}}}'
    | 'vendor{vendorTokens{pageInfo{startCursor}}}'
    | 'vendor{vendorTokens{pageInfo{hasNextPage}}}'
    | 'vendor{vendorTokens{pageInfo{hasPreviousPage}}}'
    | 'vendor{vendorTokens{totalCount}}'
    | 'vendor{products{edges{node{id}}}}'
    | 'vendor{products{edges{node{creationDate}}}}'
    | 'vendor{products{edges{node{lastChangeDate}}}}'
    | 'vendor{products{edges{node{resultsSource}}}}'
    | 'vendor{products{edges{node{kpi}}}}'
    | 'vendor{products{edges{node{systemStatus}}}}'
    | 'vendor{products{edges{node{errors}}}}'
    | 'vendor{products{edges{node{warnings}}}}'
    | 'vendor{products{edges{node{name}}}}'
    | 'vendor{products{edges{node{sku}}}}'
    | 'vendor{products{edges{node{remoteState}}}}'
    | 'vendor{products{edges{node{metadata}}}}'
    | 'vendor{products{edges{node{imported}}}}'
    | 'vendor{products{edges{cursor}}}'
    | 'vendor{products{pageInfo{endCursor}}}'
    | 'vendor{products{pageInfo{startCursor}}}'
    | 'vendor{products{pageInfo{hasNextPage}}}'
    | 'vendor{products{pageInfo{hasPreviousPage}}}'
    | 'vendor{products{totalCount}}'
    | 'systemStatus'
    | 'errors'
    | 'warnings'
    | 'name'
    | 'sku'
    | 'remoteState'
    | 'metadata'
    | 'imported'
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
    | 'results{edges{node{breakdownType}}}'
    | 'results{edges{node{resource{id}}}}'
    | 'results{edges{node{resource{creationDate}}}}'
    | 'results{edges{node{resource{lastChangeDate}}}}'
    | 'results{edges{node{resource{resultsSource}}}}'
    | 'results{edges{node{resource{kpi}}}}'
    | 'results{edges{node{resource{systemStatus}}}}'
    | 'results{edges{node{resource{errors}}}}'
    | 'results{edges{node{resource{warnings}}}}'
    | 'results{edges{node{breakdown{id}}}}'
    | 'results{edges{node{breakdown{creationDate}}}}'
    | 'results{edges{node{breakdown{lastChangeDate}}}}'
    | 'results{edges{node{breakdown{resultsSource}}}}'
    | 'results{edges{node{breakdown{kpi}}}}'
    | 'results{edges{node{breakdown{systemStatus}}}}'
    | 'results{edges{node{breakdown{errors}}}}'
    | 'results{edges{node{breakdown{warnings}}}}'
    | 'results{edges{node{vendor{id}}}}'
    | 'results{edges{node{vendor{creationDate}}}}'
    | 'results{edges{node{vendor{lastChangeDate}}}}'
    | 'results{edges{node{vendor{name}}}}'
    | 'results{edges{node{vendor{systemStatus}}}}'
    | 'results{edges{node{vendor{errors}}}}'
    | 'results{edges{node{vendor{warnings}}}}'
    | 'results{edges{cursor}}'
    | 'results{pageInfo{endCursor}}'
    | 'results{pageInfo{startCursor}}'
    | 'results{pageInfo{hasNextPage}}'
    | 'results{pageInfo{hasPreviousPage}}'
    | 'results{totalCount}'
    | 'marketingCampaigns{edges{node{id}}}'
    | 'marketingCampaigns{edges{node{creationDate}}}'
    | 'marketingCampaigns{edges{node{lastChangeDate}}}'
    | 'marketingCampaigns{edges{node{resultsSource}}}'
    | 'marketingCampaigns{edges{node{kpi}}}'
    | 'marketingCampaigns{edges{node{vendor{id}}}}'
    | 'marketingCampaigns{edges{node{vendor{creationDate}}}}'
    | 'marketingCampaigns{edges{node{vendor{lastChangeDate}}}}'
    | 'marketingCampaigns{edges{node{vendor{name}}}}'
    | 'marketingCampaigns{edges{node{vendor{systemStatus}}}}'
    | 'marketingCampaigns{edges{node{vendor{errors}}}}'
    | 'marketingCampaigns{edges{node{vendor{warnings}}}}'
    | 'marketingCampaigns{edges{node{systemStatus}}}'
    | 'marketingCampaigns{edges{node{errors}}}'
    | 'marketingCampaigns{edges{node{warnings}}}'
    | 'marketingCampaigns{edges{node{name}}}'
    | 'marketingCampaigns{edges{node{status}}}'
    | 'marketingCampaigns{edges{node{creativeSpec}}}'
    | 'marketingCampaigns{edges{node{runTimeSpec}}}'
    | 'marketingCampaigns{edges{node{locationSpec}}}'
    | 'marketingCampaigns{edges{node{conversionSpec}}}'
    | 'marketingCampaigns{edges{node{startDate}}}'
    | 'marketingCampaigns{edges{node{endDate}}}'
    | 'marketingCampaigns{edges{node{productFilter}}}'
    | 'marketingCampaigns{edges{node{GCPX{id}}}}'
    | 'marketingCampaigns{edges{node{GCPX{creationDate}}}}'
    | 'marketingCampaigns{edges{node{GCPX{lastChangeDate}}}}'
    | 'marketingCampaigns{edges{node{GCPX{kpi}}}}'
    | 'marketingCampaigns{edges{node{GCPX{price}}}}'
    | 'marketingCampaigns{edges{node{GCPX{startDate}}}}'
    | 'marketingCampaigns{edges{node{GCPX{endDate}}}}'
    | 'marketingCampaigns{edges{node{GCPX{minConversions}}}}'
    | 'marketingCampaigns{edges{node{GCPX{maxConversions}}}}'
    | 'marketingCampaigns{edges{node{delivering}}}'
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
    | 'marketingCampaigns{edges{node{catalog{externalEventSourceIds}}}}'
    | 'marketingCampaigns{edges{node{catalog{productSource}}}}'
    | 'marketingCampaigns{edges{node{catalog{errors}}}}'
    | 'marketingCampaigns{edges{node{catalog{warnings}}}}'
    | 'marketingCampaigns{edges{node{campaignTemplate{id}}}}'
    | 'marketingCampaigns{edges{node{campaignTemplate{creationDate}}}}'
    | 'marketingCampaigns{edges{node{campaignTemplate{lastChangeDate}}}}'
    | 'marketingCampaigns{edges{node{campaignTemplate{name}}}}'
    | 'marketingCampaigns{edges{node{campaignTemplate{description}}}}'
    | 'marketingCampaigns{edges{node{campaignTemplate{platform}}}}'
    | 'marketingCampaigns{edges{node{campaignTemplate{remoteId}}}}'
    | 'marketingCampaigns{edges{node{campaignTemplate{systemStatus}}}}'
    | 'marketingCampaigns{edges{node{campaignTemplate{errors}}}}'
    | 'marketingCampaigns{edges{node{campaignTemplate{warnings}}}}'
    | 'marketingCampaigns{edges{node{campaignTemplate{kpi}}}}'
    | 'marketingCampaigns{edges{node{mediaChannel{id}}}}'
    | 'marketingCampaigns{edges{node{mediaChannel{creationDate}}}}'
    | 'marketingCampaigns{edges{node{mediaChannel{lastChangeDate}}}}'
    | 'marketingCampaigns{edges{node{mediaChannel{name}}}}'
    | 'marketingCampaigns{edges{node{mediaChannel{systemStatus}}}}'
    | 'marketingCampaigns{edges{node{mediaChannel{errors}}}}'
    | 'marketingCampaigns{edges{node{mediaChannel{warnings}}}}'
    | 'marketingCampaigns{edges{node{mediaChannel{platform}}}}'
    | 'marketingCampaigns{edges{node{mediaChannel{remoteId}}}}'
    | 'marketingCampaigns{edges{node{mediaChannel{remoteState}}}}'
    | 'marketingCampaigns{edges{node{mediaChannel{currency}}}}'
    | 'marketingCampaigns{edges{node{mediaChannel{currencyCode}}}}'
    | 'marketingCampaigns{edges{node{mediaChannel{currencySymbol}}}}'
    | 'marketingCampaigns{edges{node{mediaChannel{currencyOffset}}}}'
    | 'marketingCampaigns{edges{node{mediaChannel{timezone}}}}'
    | 'marketingCampaigns{edges{node{mediaChannel{tokenStatus}}}}'
    | 'marketingCampaigns{edges{node{results{totalCount}}}}'
    | 'marketingCampaigns{edges{node{notifications{totalCount}}}}'
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
    | 'catalog{externalEventSourceIds}'
    | 'catalog{productSource}'
    | 'catalog{errors}'
    | 'catalog{warnings}'
    | 'catalog{mediaChannel{id}}'
    | 'catalog{mediaChannel{creationDate}}'
    | 'catalog{mediaChannel{lastChangeDate}}'
    | 'catalog{mediaChannel{name}}'
    | 'catalog{mediaChannel{systemStatus}}'
    | 'catalog{mediaChannel{errors}}'
    | 'catalog{mediaChannel{warnings}}'
    | 'catalog{mediaChannel{platform}}'
    | 'catalog{mediaChannel{remoteId}}'
    | 'catalog{mediaChannel{remoteState}}'
    | 'catalog{mediaChannel{currency}}'
    | 'catalog{mediaChannel{currencyCode}}'
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
    | 'catalog{mediaChannel{marketplace{warnings}}}'
    | 'catalog{mediaChannel{marketplace{currencyCode}}}'
    | 'catalog{mediaChannel{marketplace{currencySymbol}}}'
    | 'catalog{mediaChannel{marketplace{currencyOffset}}}'
    | 'catalog{mediaChannel{marketplace{organization{id}}}}'
    | 'catalog{mediaChannel{marketplace{organization{creationDate}}}}'
    | 'catalog{mediaChannel{marketplace{organization{lastChangeDate}}}}'
    | 'catalog{mediaChannel{marketplace{organization{name}}}}'
    | 'catalog{mediaChannel{marketplace{organization{systemStatus}}}}'
    | 'catalog{mediaChannel{marketplace{organization{errors}}}}'
    | 'catalog{mediaChannel{marketplace{organization{warnings}}}}'
    | 'catalog{mediaChannel{marketplace{organization{tier}}}}'
    | 'catalog{mediaChannel{marketplace{mediaChannels{totalCount}}}}'
    | 'catalog{mediaChannel{marketplace{campaignTemplates{totalCount}}}}'
    | 'catalog{mediaChannel{marketplace{vendors{totalCount}}}}'
    | 'catalog{mediaChannel{marketplace{vendorTokens{totalCount}}}}'
    | 'catalog{mediaChannel{marketplace{creativeTemplates{totalCount}}}}'
    | 'catalog{mediaChannel{marketplace{products{totalCount}}}}'
    | 'catalog{products{edges{node{id}}}}'
    | 'catalog{products{edges{node{creationDate}}}}'
    | 'catalog{products{edges{node{lastChangeDate}}}}'
    | 'catalog{products{edges{node{resultsSource}}}}'
    | 'catalog{products{edges{node{kpi}}}}'
    | 'catalog{products{edges{node{systemStatus}}}}'
    | 'catalog{products{edges{node{errors}}}}'
    | 'catalog{products{edges{node{warnings}}}}'
    | 'catalog{products{edges{node{name}}}}'
    | 'catalog{products{edges{node{sku}}}}'
    | 'catalog{products{edges{node{remoteState}}}}'
    | 'catalog{products{edges{node{metadata}}}}'
    | 'catalog{products{edges{node{imported}}}}'
    | 'catalog{products{edges{cursor}}}'
    | 'catalog{products{pageInfo{endCursor}}}'
    | 'catalog{products{pageInfo{startCursor}}}'
    | 'catalog{products{pageInfo{hasNextPage}}}'
    | 'catalog{products{pageInfo{hasPreviousPage}}}'
    | 'catalog{products{totalCount}}';
export type VendorFields = {
    id: 'id';
    creationDate: 'creationDate';
    lastChangeDate: 'lastChangeDate';
    name: 'name';
    systemStatus: 'systemStatus';
    errors: 'errors';
    warnings: 'warnings';
    marketplace: {
        id: 'marketplace{id}';
        creationDate: 'marketplace{creationDate}';
        lastChangeDate: 'marketplace{lastChangeDate}';
        name: 'marketplace{name}';
        systemStatus: 'marketplace{systemStatus}';
        errors: 'marketplace{errors}';
        warnings: 'marketplace{warnings}';
        currencyCode: 'marketplace{currencyCode}';
        currencySymbol: 'marketplace{currencySymbol}';
        currencyOffset: 'marketplace{currencyOffset}';
        organization: {
            id: 'marketplace{organization{id}}';
            creationDate: 'marketplace{organization{creationDate}}';
            lastChangeDate: 'marketplace{organization{lastChangeDate}}';
            name: 'marketplace{organization{name}}';
            systemStatus: 'marketplace{organization{systemStatus}}';
            errors: 'marketplace{organization{errors}}';
            warnings: 'marketplace{organization{warnings}}';
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
                    warnings: 'marketplace{mediaChannels{edges{node{warnings}}}}';
                    platform: 'marketplace{mediaChannels{edges{node{platform}}}}';
                    remoteId: 'marketplace{mediaChannels{edges{node{remoteId}}}}';
                    remoteState: 'marketplace{mediaChannels{edges{node{remoteState}}}}';
                    currency: 'marketplace{mediaChannels{edges{node{currency}}}}';
                    currencyCode: 'marketplace{mediaChannels{edges{node{currencyCode}}}}';
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
                    warnings: 'marketplace{campaignTemplates{edges{node{warnings}}}}';
                    kpi: 'marketplace{campaignTemplates{edges{node{kpi}}}}';
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
                    warnings: 'marketplace{vendors{edges{node{warnings}}}}';
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
                    email: 'marketplace{vendorTokens{edges{node{email}}}}';
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
                    warnings: 'marketplace{creativeTemplates{edges{node{warnings}}}}';
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
        products: {
            edges: {
                node: {
                    id: 'marketplace{products{edges{node{id}}}}';
                    creationDate: 'marketplace{products{edges{node{creationDate}}}}';
                    lastChangeDate: 'marketplace{products{edges{node{lastChangeDate}}}}';
                    resultsSource: 'marketplace{products{edges{node{resultsSource}}}}';
                    kpi: 'marketplace{products{edges{node{kpi}}}}';
                    systemStatus: 'marketplace{products{edges{node{systemStatus}}}}';
                    errors: 'marketplace{products{edges{node{errors}}}}';
                    warnings: 'marketplace{products{edges{node{warnings}}}}';
                    name: 'marketplace{products{edges{node{name}}}}';
                    sku: 'marketplace{products{edges{node{sku}}}}';
                    remoteState: 'marketplace{products{edges{node{remoteState}}}}';
                    metadata: 'marketplace{products{edges{node{metadata}}}}';
                    imported: 'marketplace{products{edges{node{imported}}}}';
                };
                cursor: 'marketplace{products{edges{cursor}}}';
            };
            pageInfo: {
                endCursor: 'marketplace{products{pageInfo{endCursor}}}';
                startCursor: 'marketplace{products{pageInfo{startCursor}}}';
                hasNextPage: 'marketplace{products{pageInfo{hasNextPage}}}';
                hasPreviousPage: 'marketplace{products{pageInfo{hasPreviousPage}}}';
            };
            totalCount: 'marketplace{products{totalCount}}';
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
                    warnings: 'vendorTokens{edges{node{vendor{warnings}}}}';
                };
                marketplace: {
                    id: 'vendorTokens{edges{node{marketplace{id}}}}';
                    creationDate: 'vendorTokens{edges{node{marketplace{creationDate}}}}';
                    lastChangeDate: 'vendorTokens{edges{node{marketplace{lastChangeDate}}}}';
                    name: 'vendorTokens{edges{node{marketplace{name}}}}';
                    systemStatus: 'vendorTokens{edges{node{marketplace{systemStatus}}}}';
                    errors: 'vendorTokens{edges{node{marketplace{errors}}}}';
                    warnings: 'vendorTokens{edges{node{marketplace{warnings}}}}';
                    currencyCode: 'vendorTokens{edges{node{marketplace{currencyCode}}}}';
                    currencySymbol: 'vendorTokens{edges{node{marketplace{currencySymbol}}}}';
                    currencyOffset: 'vendorTokens{edges{node{marketplace{currencyOffset}}}}';
                };
                email: 'vendorTokens{edges{node{email}}}';
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
                resultsSource: 'products{edges{node{resultsSource}}}';
                kpi: 'products{edges{node{kpi}}}';
                vendor: {
                    id: 'products{edges{node{vendor{id}}}}';
                    creationDate: 'products{edges{node{vendor{creationDate}}}}';
                    lastChangeDate: 'products{edges{node{vendor{lastChangeDate}}}}';
                    name: 'products{edges{node{vendor{name}}}}';
                    systemStatus: 'products{edges{node{vendor{systemStatus}}}}';
                    errors: 'products{edges{node{vendor{errors}}}}';
                    warnings: 'products{edges{node{vendor{warnings}}}}';
                };
                systemStatus: 'products{edges{node{systemStatus}}}';
                errors: 'products{edges{node{errors}}}';
                warnings: 'products{edges{node{warnings}}}';
                name: 'products{edges{node{name}}}';
                sku: 'products{edges{node{sku}}}';
                remoteState: 'products{edges{node{remoteState}}}';
                metadata: 'products{edges{node{metadata}}}';
                imported: 'products{edges{node{imported}}}';
                results: {
                    totalCount: 'products{edges{node{results{totalCount}}}}';
                };
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
                    externalEventSourceIds: 'products{edges{node{catalog{externalEventSourceIds}}}}';
                    productSource: 'products{edges{node{catalog{productSource}}}}';
                    errors: 'products{edges{node{catalog{errors}}}}';
                    warnings: 'products{edges{node{catalog{warnings}}}}';
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
    warnings: 'warnings',
    marketplace: {
        id: 'marketplace{id}',
        creationDate: 'marketplace{creationDate}',
        lastChangeDate: 'marketplace{lastChangeDate}',
        name: 'marketplace{name}',
        systemStatus: 'marketplace{systemStatus}',
        errors: 'marketplace{errors}',
        warnings: 'marketplace{warnings}',
        currencyCode: 'marketplace{currencyCode}',
        currencySymbol: 'marketplace{currencySymbol}',
        currencyOffset: 'marketplace{currencyOffset}',
        organization: {
            id: 'marketplace{organization{id}}',
            creationDate: 'marketplace{organization{creationDate}}',
            lastChangeDate: 'marketplace{organization{lastChangeDate}}',
            name: 'marketplace{organization{name}}',
            systemStatus: 'marketplace{organization{systemStatus}}',
            errors: 'marketplace{organization{errors}}',
            warnings: 'marketplace{organization{warnings}}',
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
                    warnings:
                        'marketplace{mediaChannels{edges{node{warnings}}}}',
                    platform:
                        'marketplace{mediaChannels{edges{node{platform}}}}',
                    remoteId:
                        'marketplace{mediaChannels{edges{node{remoteId}}}}',
                    remoteState:
                        'marketplace{mediaChannels{edges{node{remoteState}}}}',
                    currency:
                        'marketplace{mediaChannels{edges{node{currency}}}}',
                    currencyCode:
                        'marketplace{mediaChannels{edges{node{currencyCode}}}}',
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
                    warnings:
                        'marketplace{campaignTemplates{edges{node{warnings}}}}',
                    kpi: 'marketplace{campaignTemplates{edges{node{kpi}}}}',
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
                    warnings: 'marketplace{vendors{edges{node{warnings}}}}',
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
                    email: 'marketplace{vendorTokens{edges{node{email}}}}',
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
                    warnings:
                        'marketplace{creativeTemplates{edges{node{warnings}}}}',
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
        products: {
            edges: {
                node: {
                    id: 'marketplace{products{edges{node{id}}}}',
                    creationDate:
                        'marketplace{products{edges{node{creationDate}}}}',
                    lastChangeDate:
                        'marketplace{products{edges{node{lastChangeDate}}}}',
                    resultsSource:
                        'marketplace{products{edges{node{resultsSource}}}}',
                    kpi: 'marketplace{products{edges{node{kpi}}}}',
                    systemStatus:
                        'marketplace{products{edges{node{systemStatus}}}}',
                    errors: 'marketplace{products{edges{node{errors}}}}',
                    warnings: 'marketplace{products{edges{node{warnings}}}}',
                    name: 'marketplace{products{edges{node{name}}}}',
                    sku: 'marketplace{products{edges{node{sku}}}}',
                    remoteState:
                        'marketplace{products{edges{node{remoteState}}}}',
                    metadata: 'marketplace{products{edges{node{metadata}}}}',
                    imported: 'marketplace{products{edges{node{imported}}}}',
                },
                cursor: 'marketplace{products{edges{cursor}}}',
            },
            pageInfo: {
                endCursor: 'marketplace{products{pageInfo{endCursor}}}',
                startCursor: 'marketplace{products{pageInfo{startCursor}}}',
                hasNextPage: 'marketplace{products{pageInfo{hasNextPage}}}',
                hasPreviousPage:
                    'marketplace{products{pageInfo{hasPreviousPage}}}',
            },
            totalCount: 'marketplace{products{totalCount}}',
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
                    warnings: 'vendorTokens{edges{node{vendor{warnings}}}}',
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
                    warnings:
                        'vendorTokens{edges{node{marketplace{warnings}}}}',
                    currencyCode:
                        'vendorTokens{edges{node{marketplace{currencyCode}}}}',
                    currencySymbol:
                        'vendorTokens{edges{node{marketplace{currencySymbol}}}}',
                    currencyOffset:
                        'vendorTokens{edges{node{marketplace{currencyOffset}}}}',
                },
                email: 'vendorTokens{edges{node{email}}}',
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
                resultsSource: 'products{edges{node{resultsSource}}}',
                kpi: 'products{edges{node{kpi}}}',
                vendor: {
                    id: 'products{edges{node{vendor{id}}}}',
                    creationDate: 'products{edges{node{vendor{creationDate}}}}',
                    lastChangeDate:
                        'products{edges{node{vendor{lastChangeDate}}}}',
                    name: 'products{edges{node{vendor{name}}}}',
                    systemStatus: 'products{edges{node{vendor{systemStatus}}}}',
                    errors: 'products{edges{node{vendor{errors}}}}',
                    warnings: 'products{edges{node{vendor{warnings}}}}',
                },
                systemStatus: 'products{edges{node{systemStatus}}}',
                errors: 'products{edges{node{errors}}}',
                warnings: 'products{edges{node{warnings}}}',
                name: 'products{edges{node{name}}}',
                sku: 'products{edges{node{sku}}}',
                remoteState: 'products{edges{node{remoteState}}}',
                metadata: 'products{edges{node{metadata}}}',
                imported: 'products{edges{node{imported}}}',
                results: {
                    totalCount: 'products{edges{node{results{totalCount}}}}',
                },
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
                    externalEventSourceIds:
                        'products{edges{node{catalog{externalEventSourceIds}}}}',
                    productSource:
                        'products{edges{node{catalog{productSource}}}}',
                    errors: 'products{edges{node{catalog{errors}}}}',
                    warnings: 'products{edges{node{catalog{warnings}}}}',
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
    | 'warnings'
    | 'marketplace{id}'
    | 'marketplace{creationDate}'
    | 'marketplace{lastChangeDate}'
    | 'marketplace{name}'
    | 'marketplace{systemStatus}'
    | 'marketplace{errors}'
    | 'marketplace{warnings}'
    | 'marketplace{currencyCode}'
    | 'marketplace{currencySymbol}'
    | 'marketplace{currencyOffset}'
    | 'marketplace{organization{id}}'
    | 'marketplace{organization{creationDate}}'
    | 'marketplace{organization{lastChangeDate}}'
    | 'marketplace{organization{name}}'
    | 'marketplace{organization{systemStatus}}'
    | 'marketplace{organization{errors}}'
    | 'marketplace{organization{warnings}}'
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
    | 'marketplace{mediaChannels{edges{node{warnings}}}}'
    | 'marketplace{mediaChannels{edges{node{platform}}}}'
    | 'marketplace{mediaChannels{edges{node{remoteId}}}}'
    | 'marketplace{mediaChannels{edges{node{remoteState}}}}'
    | 'marketplace{mediaChannels{edges{node{currency}}}}'
    | 'marketplace{mediaChannels{edges{node{currencyCode}}}}'
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
    | 'marketplace{campaignTemplates{edges{node{warnings}}}}'
    | 'marketplace{campaignTemplates{edges{node{kpi}}}}'
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
    | 'marketplace{vendors{edges{node{warnings}}}}'
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
    | 'marketplace{vendorTokens{edges{node{email}}}}'
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
    | 'marketplace{creativeTemplates{edges{node{warnings}}}}'
    | 'marketplace{creativeTemplates{edges{cursor}}}'
    | 'marketplace{creativeTemplates{pageInfo{endCursor}}}'
    | 'marketplace{creativeTemplates{pageInfo{startCursor}}}'
    | 'marketplace{creativeTemplates{pageInfo{hasNextPage}}}'
    | 'marketplace{creativeTemplates{pageInfo{hasPreviousPage}}}'
    | 'marketplace{creativeTemplates{totalCount}}'
    | 'marketplace{products{edges{node{id}}}}'
    | 'marketplace{products{edges{node{creationDate}}}}'
    | 'marketplace{products{edges{node{lastChangeDate}}}}'
    | 'marketplace{products{edges{node{resultsSource}}}}'
    | 'marketplace{products{edges{node{kpi}}}}'
    | 'marketplace{products{edges{node{systemStatus}}}}'
    | 'marketplace{products{edges{node{errors}}}}'
    | 'marketplace{products{edges{node{warnings}}}}'
    | 'marketplace{products{edges{node{name}}}}'
    | 'marketplace{products{edges{node{sku}}}}'
    | 'marketplace{products{edges{node{remoteState}}}}'
    | 'marketplace{products{edges{node{metadata}}}}'
    | 'marketplace{products{edges{node{imported}}}}'
    | 'marketplace{products{edges{cursor}}}'
    | 'marketplace{products{pageInfo{endCursor}}}'
    | 'marketplace{products{pageInfo{startCursor}}}'
    | 'marketplace{products{pageInfo{hasNextPage}}}'
    | 'marketplace{products{pageInfo{hasPreviousPage}}}'
    | 'marketplace{products{totalCount}}'
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
    | 'vendorTokens{edges{node{vendor{warnings}}}}'
    | 'vendorTokens{edges{node{marketplace{id}}}}'
    | 'vendorTokens{edges{node{marketplace{creationDate}}}}'
    | 'vendorTokens{edges{node{marketplace{lastChangeDate}}}}'
    | 'vendorTokens{edges{node{marketplace{name}}}}'
    | 'vendorTokens{edges{node{marketplace{systemStatus}}}}'
    | 'vendorTokens{edges{node{marketplace{errors}}}}'
    | 'vendorTokens{edges{node{marketplace{warnings}}}}'
    | 'vendorTokens{edges{node{marketplace{currencyCode}}}}'
    | 'vendorTokens{edges{node{marketplace{currencySymbol}}}}'
    | 'vendorTokens{edges{node{marketplace{currencyOffset}}}}'
    | 'vendorTokens{edges{node{email}}}'
    | 'vendorTokens{edges{cursor}}'
    | 'vendorTokens{pageInfo{endCursor}}'
    | 'vendorTokens{pageInfo{startCursor}}'
    | 'vendorTokens{pageInfo{hasNextPage}}'
    | 'vendorTokens{pageInfo{hasPreviousPage}}'
    | 'vendorTokens{totalCount}'
    | 'products{edges{node{id}}}'
    | 'products{edges{node{creationDate}}}'
    | 'products{edges{node{lastChangeDate}}}'
    | 'products{edges{node{resultsSource}}}'
    | 'products{edges{node{kpi}}}'
    | 'products{edges{node{vendor{id}}}}'
    | 'products{edges{node{vendor{creationDate}}}}'
    | 'products{edges{node{vendor{lastChangeDate}}}}'
    | 'products{edges{node{vendor{name}}}}'
    | 'products{edges{node{vendor{systemStatus}}}}'
    | 'products{edges{node{vendor{errors}}}}'
    | 'products{edges{node{vendor{warnings}}}}'
    | 'products{edges{node{systemStatus}}}'
    | 'products{edges{node{errors}}}'
    | 'products{edges{node{warnings}}}'
    | 'products{edges{node{name}}}'
    | 'products{edges{node{sku}}}'
    | 'products{edges{node{remoteState}}}'
    | 'products{edges{node{metadata}}}'
    | 'products{edges{node{imported}}}'
    | 'products{edges{node{results{totalCount}}}}'
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
    | 'products{edges{node{catalog{externalEventSourceIds}}}}'
    | 'products{edges{node{catalog{productSource}}}}'
    | 'products{edges{node{catalog{errors}}}}'
    | 'products{edges{node{catalog{warnings}}}}'
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
        warnings: 'vendor{warnings}';
        marketplace: {
            id: 'vendor{marketplace{id}}';
            creationDate: 'vendor{marketplace{creationDate}}';
            lastChangeDate: 'vendor{marketplace{lastChangeDate}}';
            name: 'vendor{marketplace{name}}';
            systemStatus: 'vendor{marketplace{systemStatus}}';
            errors: 'vendor{marketplace{errors}}';
            warnings: 'vendor{marketplace{warnings}}';
            currencyCode: 'vendor{marketplace{currencyCode}}';
            currencySymbol: 'vendor{marketplace{currencySymbol}}';
            currencyOffset: 'vendor{marketplace{currencyOffset}}';
            organization: {
                id: 'vendor{marketplace{organization{id}}}';
                creationDate: 'vendor{marketplace{organization{creationDate}}}';
                lastChangeDate: 'vendor{marketplace{organization{lastChangeDate}}}';
                name: 'vendor{marketplace{organization{name}}}';
                systemStatus: 'vendor{marketplace{organization{systemStatus}}}';
                errors: 'vendor{marketplace{organization{errors}}}';
                warnings: 'vendor{marketplace{organization{warnings}}}';
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
            products: {
                edges: {
                    cursor: 'vendor{marketplace{products{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'vendor{marketplace{products{pageInfo{endCursor}}}}';
                    startCursor: 'vendor{marketplace{products{pageInfo{startCursor}}}}';
                    hasNextPage: 'vendor{marketplace{products{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'vendor{marketplace{products{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'vendor{marketplace{products{totalCount}}}';
            };
        };
        vendorTokens: {
            edges: {
                node: {
                    id: 'vendor{vendorTokens{edges{node{id}}}}';
                    creationDate: 'vendor{vendorTokens{edges{node{creationDate}}}}';
                    lastChangeDate: 'vendor{vendorTokens{edges{node{lastChangeDate}}}}';
                    token: 'vendor{vendorTokens{edges{node{token}}}}';
                    email: 'vendor{vendorTokens{edges{node{email}}}}';
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
                    resultsSource: 'vendor{products{edges{node{resultsSource}}}}';
                    kpi: 'vendor{products{edges{node{kpi}}}}';
                    systemStatus: 'vendor{products{edges{node{systemStatus}}}}';
                    errors: 'vendor{products{edges{node{errors}}}}';
                    warnings: 'vendor{products{edges{node{warnings}}}}';
                    name: 'vendor{products{edges{node{name}}}}';
                    sku: 'vendor{products{edges{node{sku}}}}';
                    remoteState: 'vendor{products{edges{node{remoteState}}}}';
                    metadata: 'vendor{products{edges{node{metadata}}}}';
                    imported: 'vendor{products{edges{node{imported}}}}';
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
        warnings: 'marketplace{warnings}';
        currencyCode: 'marketplace{currencyCode}';
        currencySymbol: 'marketplace{currencySymbol}';
        currencyOffset: 'marketplace{currencyOffset}';
        organization: {
            id: 'marketplace{organization{id}}';
            creationDate: 'marketplace{organization{creationDate}}';
            lastChangeDate: 'marketplace{organization{lastChangeDate}}';
            name: 'marketplace{organization{name}}';
            systemStatus: 'marketplace{organization{systemStatus}}';
            errors: 'marketplace{organization{errors}}';
            warnings: 'marketplace{organization{warnings}}';
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
                    warnings: 'marketplace{mediaChannels{edges{node{warnings}}}}';
                    platform: 'marketplace{mediaChannels{edges{node{platform}}}}';
                    remoteId: 'marketplace{mediaChannels{edges{node{remoteId}}}}';
                    remoteState: 'marketplace{mediaChannels{edges{node{remoteState}}}}';
                    currency: 'marketplace{mediaChannels{edges{node{currency}}}}';
                    currencyCode: 'marketplace{mediaChannels{edges{node{currencyCode}}}}';
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
                    warnings: 'marketplace{campaignTemplates{edges{node{warnings}}}}';
                    kpi: 'marketplace{campaignTemplates{edges{node{kpi}}}}';
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
                    warnings: 'marketplace{vendors{edges{node{warnings}}}}';
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
                    email: 'marketplace{vendorTokens{edges{node{email}}}}';
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
                    warnings: 'marketplace{creativeTemplates{edges{node{warnings}}}}';
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
        products: {
            edges: {
                node: {
                    id: 'marketplace{products{edges{node{id}}}}';
                    creationDate: 'marketplace{products{edges{node{creationDate}}}}';
                    lastChangeDate: 'marketplace{products{edges{node{lastChangeDate}}}}';
                    resultsSource: 'marketplace{products{edges{node{resultsSource}}}}';
                    kpi: 'marketplace{products{edges{node{kpi}}}}';
                    systemStatus: 'marketplace{products{edges{node{systemStatus}}}}';
                    errors: 'marketplace{products{edges{node{errors}}}}';
                    warnings: 'marketplace{products{edges{node{warnings}}}}';
                    name: 'marketplace{products{edges{node{name}}}}';
                    sku: 'marketplace{products{edges{node{sku}}}}';
                    remoteState: 'marketplace{products{edges{node{remoteState}}}}';
                    metadata: 'marketplace{products{edges{node{metadata}}}}';
                    imported: 'marketplace{products{edges{node{imported}}}}';
                };
                cursor: 'marketplace{products{edges{cursor}}}';
            };
            pageInfo: {
                endCursor: 'marketplace{products{pageInfo{endCursor}}}';
                startCursor: 'marketplace{products{pageInfo{startCursor}}}';
                hasNextPage: 'marketplace{products{pageInfo{hasNextPage}}}';
                hasPreviousPage: 'marketplace{products{pageInfo{hasPreviousPage}}}';
            };
            totalCount: 'marketplace{products{totalCount}}';
        };
    };
    email: 'email';
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
        warnings: 'vendor{warnings}',
        marketplace: {
            id: 'vendor{marketplace{id}}',
            creationDate: 'vendor{marketplace{creationDate}}',
            lastChangeDate: 'vendor{marketplace{lastChangeDate}}',
            name: 'vendor{marketplace{name}}',
            systemStatus: 'vendor{marketplace{systemStatus}}',
            errors: 'vendor{marketplace{errors}}',
            warnings: 'vendor{marketplace{warnings}}',
            currencyCode: 'vendor{marketplace{currencyCode}}',
            currencySymbol: 'vendor{marketplace{currencySymbol}}',
            currencyOffset: 'vendor{marketplace{currencyOffset}}',
            organization: {
                id: 'vendor{marketplace{organization{id}}}',
                creationDate: 'vendor{marketplace{organization{creationDate}}}',
                lastChangeDate:
                    'vendor{marketplace{organization{lastChangeDate}}}',
                name: 'vendor{marketplace{organization{name}}}',
                systemStatus: 'vendor{marketplace{organization{systemStatus}}}',
                errors: 'vendor{marketplace{organization{errors}}}',
                warnings: 'vendor{marketplace{organization{warnings}}}',
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
            products: {
                edges: {
                    cursor: 'vendor{marketplace{products{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'vendor{marketplace{products{pageInfo{endCursor}}}}',
                    startCursor:
                        'vendor{marketplace{products{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'vendor{marketplace{products{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'vendor{marketplace{products{pageInfo{hasPreviousPage}}}}',
                },
                totalCount: 'vendor{marketplace{products{totalCount}}}',
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
                    email: 'vendor{vendorTokens{edges{node{email}}}}',
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
                    resultsSource:
                        'vendor{products{edges{node{resultsSource}}}}',
                    kpi: 'vendor{products{edges{node{kpi}}}}',
                    systemStatus: 'vendor{products{edges{node{systemStatus}}}}',
                    errors: 'vendor{products{edges{node{errors}}}}',
                    warnings: 'vendor{products{edges{node{warnings}}}}',
                    name: 'vendor{products{edges{node{name}}}}',
                    sku: 'vendor{products{edges{node{sku}}}}',
                    remoteState: 'vendor{products{edges{node{remoteState}}}}',
                    metadata: 'vendor{products{edges{node{metadata}}}}',
                    imported: 'vendor{products{edges{node{imported}}}}',
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
        warnings: 'marketplace{warnings}',
        currencyCode: 'marketplace{currencyCode}',
        currencySymbol: 'marketplace{currencySymbol}',
        currencyOffset: 'marketplace{currencyOffset}',
        organization: {
            id: 'marketplace{organization{id}}',
            creationDate: 'marketplace{organization{creationDate}}',
            lastChangeDate: 'marketplace{organization{lastChangeDate}}',
            name: 'marketplace{organization{name}}',
            systemStatus: 'marketplace{organization{systemStatus}}',
            errors: 'marketplace{organization{errors}}',
            warnings: 'marketplace{organization{warnings}}',
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
                    warnings:
                        'marketplace{mediaChannels{edges{node{warnings}}}}',
                    platform:
                        'marketplace{mediaChannels{edges{node{platform}}}}',
                    remoteId:
                        'marketplace{mediaChannels{edges{node{remoteId}}}}',
                    remoteState:
                        'marketplace{mediaChannels{edges{node{remoteState}}}}',
                    currency:
                        'marketplace{mediaChannels{edges{node{currency}}}}',
                    currencyCode:
                        'marketplace{mediaChannels{edges{node{currencyCode}}}}',
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
                    warnings:
                        'marketplace{campaignTemplates{edges{node{warnings}}}}',
                    kpi: 'marketplace{campaignTemplates{edges{node{kpi}}}}',
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
                    warnings: 'marketplace{vendors{edges{node{warnings}}}}',
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
                    email: 'marketplace{vendorTokens{edges{node{email}}}}',
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
                    warnings:
                        'marketplace{creativeTemplates{edges{node{warnings}}}}',
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
        products: {
            edges: {
                node: {
                    id: 'marketplace{products{edges{node{id}}}}',
                    creationDate:
                        'marketplace{products{edges{node{creationDate}}}}',
                    lastChangeDate:
                        'marketplace{products{edges{node{lastChangeDate}}}}',
                    resultsSource:
                        'marketplace{products{edges{node{resultsSource}}}}',
                    kpi: 'marketplace{products{edges{node{kpi}}}}',
                    systemStatus:
                        'marketplace{products{edges{node{systemStatus}}}}',
                    errors: 'marketplace{products{edges{node{errors}}}}',
                    warnings: 'marketplace{products{edges{node{warnings}}}}',
                    name: 'marketplace{products{edges{node{name}}}}',
                    sku: 'marketplace{products{edges{node{sku}}}}',
                    remoteState:
                        'marketplace{products{edges{node{remoteState}}}}',
                    metadata: 'marketplace{products{edges{node{metadata}}}}',
                    imported: 'marketplace{products{edges{node{imported}}}}',
                },
                cursor: 'marketplace{products{edges{cursor}}}',
            },
            pageInfo: {
                endCursor: 'marketplace{products{pageInfo{endCursor}}}',
                startCursor: 'marketplace{products{pageInfo{startCursor}}}',
                hasNextPage: 'marketplace{products{pageInfo{hasNextPage}}}',
                hasPreviousPage:
                    'marketplace{products{pageInfo{hasPreviousPage}}}',
            },
            totalCount: 'marketplace{products{totalCount}}',
        },
    },
    email: 'email',
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
    | 'vendor{warnings}'
    | 'vendor{marketplace{id}}'
    | 'vendor{marketplace{creationDate}}'
    | 'vendor{marketplace{lastChangeDate}}'
    | 'vendor{marketplace{name}}'
    | 'vendor{marketplace{systemStatus}}'
    | 'vendor{marketplace{errors}}'
    | 'vendor{marketplace{warnings}}'
    | 'vendor{marketplace{currencyCode}}'
    | 'vendor{marketplace{currencySymbol}}'
    | 'vendor{marketplace{currencyOffset}}'
    | 'vendor{marketplace{organization{id}}}'
    | 'vendor{marketplace{organization{creationDate}}}'
    | 'vendor{marketplace{organization{lastChangeDate}}}'
    | 'vendor{marketplace{organization{name}}}'
    | 'vendor{marketplace{organization{systemStatus}}}'
    | 'vendor{marketplace{organization{errors}}}'
    | 'vendor{marketplace{organization{warnings}}}'
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
    | 'vendor{marketplace{products{edges{cursor}}}}'
    | 'vendor{marketplace{products{pageInfo{endCursor}}}}'
    | 'vendor{marketplace{products{pageInfo{startCursor}}}}'
    | 'vendor{marketplace{products{pageInfo{hasNextPage}}}}'
    | 'vendor{marketplace{products{pageInfo{hasPreviousPage}}}}'
    | 'vendor{marketplace{products{totalCount}}}'
    | 'vendor{vendorTokens{edges{node{id}}}}'
    | 'vendor{vendorTokens{edges{node{creationDate}}}}'
    | 'vendor{vendorTokens{edges{node{lastChangeDate}}}}'
    | 'vendor{vendorTokens{edges{node{token}}}}'
    | 'vendor{vendorTokens{edges{node{email}}}}'
    | 'vendor{vendorTokens{edges{cursor}}}'
    | 'vendor{vendorTokens{pageInfo{endCursor}}}'
    | 'vendor{vendorTokens{pageInfo{startCursor}}}'
    | 'vendor{vendorTokens{pageInfo{hasNextPage}}}'
    | 'vendor{vendorTokens{pageInfo{hasPreviousPage}}}'
    | 'vendor{vendorTokens{totalCount}}'
    | 'vendor{products{edges{node{id}}}}'
    | 'vendor{products{edges{node{creationDate}}}}'
    | 'vendor{products{edges{node{lastChangeDate}}}}'
    | 'vendor{products{edges{node{resultsSource}}}}'
    | 'vendor{products{edges{node{kpi}}}}'
    | 'vendor{products{edges{node{systemStatus}}}}'
    | 'vendor{products{edges{node{errors}}}}'
    | 'vendor{products{edges{node{warnings}}}}'
    | 'vendor{products{edges{node{name}}}}'
    | 'vendor{products{edges{node{sku}}}}'
    | 'vendor{products{edges{node{remoteState}}}}'
    | 'vendor{products{edges{node{metadata}}}}'
    | 'vendor{products{edges{node{imported}}}}'
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
    | 'marketplace{warnings}'
    | 'marketplace{currencyCode}'
    | 'marketplace{currencySymbol}'
    | 'marketplace{currencyOffset}'
    | 'marketplace{organization{id}}'
    | 'marketplace{organization{creationDate}}'
    | 'marketplace{organization{lastChangeDate}}'
    | 'marketplace{organization{name}}'
    | 'marketplace{organization{systemStatus}}'
    | 'marketplace{organization{errors}}'
    | 'marketplace{organization{warnings}}'
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
    | 'marketplace{mediaChannels{edges{node{warnings}}}}'
    | 'marketplace{mediaChannels{edges{node{platform}}}}'
    | 'marketplace{mediaChannels{edges{node{remoteId}}}}'
    | 'marketplace{mediaChannels{edges{node{remoteState}}}}'
    | 'marketplace{mediaChannels{edges{node{currency}}}}'
    | 'marketplace{mediaChannels{edges{node{currencyCode}}}}'
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
    | 'marketplace{campaignTemplates{edges{node{warnings}}}}'
    | 'marketplace{campaignTemplates{edges{node{kpi}}}}'
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
    | 'marketplace{vendors{edges{node{warnings}}}}'
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
    | 'marketplace{vendorTokens{edges{node{email}}}}'
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
    | 'marketplace{creativeTemplates{edges{node{warnings}}}}'
    | 'marketplace{creativeTemplates{edges{cursor}}}'
    | 'marketplace{creativeTemplates{pageInfo{endCursor}}}'
    | 'marketplace{creativeTemplates{pageInfo{startCursor}}}'
    | 'marketplace{creativeTemplates{pageInfo{hasNextPage}}}'
    | 'marketplace{creativeTemplates{pageInfo{hasPreviousPage}}}'
    | 'marketplace{creativeTemplates{totalCount}}'
    | 'marketplace{products{edges{node{id}}}}'
    | 'marketplace{products{edges{node{creationDate}}}}'
    | 'marketplace{products{edges{node{lastChangeDate}}}}'
    | 'marketplace{products{edges{node{resultsSource}}}}'
    | 'marketplace{products{edges{node{kpi}}}}'
    | 'marketplace{products{edges{node{systemStatus}}}}'
    | 'marketplace{products{edges{node{errors}}}}'
    | 'marketplace{products{edges{node{warnings}}}}'
    | 'marketplace{products{edges{node{name}}}}'
    | 'marketplace{products{edges{node{sku}}}}'
    | 'marketplace{products{edges{node{remoteState}}}}'
    | 'marketplace{products{edges{node{metadata}}}}'
    | 'marketplace{products{edges{node{imported}}}}'
    | 'marketplace{products{edges{cursor}}}'
    | 'marketplace{products{pageInfo{endCursor}}}'
    | 'marketplace{products{pageInfo{startCursor}}}'
    | 'marketplace{products{pageInfo{hasNextPage}}}'
    | 'marketplace{products{pageInfo{hasPreviousPage}}}'
    | 'marketplace{products{totalCount}}'
    | 'email';
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
    breakdownType: 'breakdownType';
    resource: {
        id: 'resource{id}';
        creationDate: 'resource{creationDate}';
        lastChangeDate: 'resource{lastChangeDate}';
        resultsSource: 'resource{resultsSource}';
        kpi: 'resource{kpi}';
        vendor: {
            id: 'resource{vendor{id}}';
            creationDate: 'resource{vendor{creationDate}}';
            lastChangeDate: 'resource{vendor{lastChangeDate}}';
            name: 'resource{vendor{name}}';
            systemStatus: 'resource{vendor{systemStatus}}';
            errors: 'resource{vendor{errors}}';
            warnings: 'resource{vendor{warnings}}';
            marketplace: {
                id: 'resource{vendor{marketplace{id}}}';
                creationDate: 'resource{vendor{marketplace{creationDate}}}';
                lastChangeDate: 'resource{vendor{marketplace{lastChangeDate}}}';
                name: 'resource{vendor{marketplace{name}}}';
                systemStatus: 'resource{vendor{marketplace{systemStatus}}}';
                errors: 'resource{vendor{marketplace{errors}}}';
                warnings: 'resource{vendor{marketplace{warnings}}}';
                currencyCode: 'resource{vendor{marketplace{currencyCode}}}';
                currencySymbol: 'resource{vendor{marketplace{currencySymbol}}}';
                currencyOffset: 'resource{vendor{marketplace{currencyOffset}}}';
                organization: {
                    id: 'resource{vendor{marketplace{organization{id}}}}';
                    creationDate: 'resource{vendor{marketplace{organization{creationDate}}}}';
                    lastChangeDate: 'resource{vendor{marketplace{organization{lastChangeDate}}}}';
                    name: 'resource{vendor{marketplace{organization{name}}}}';
                    systemStatus: 'resource{vendor{marketplace{organization{systemStatus}}}}';
                    errors: 'resource{vendor{marketplace{organization{errors}}}}';
                    warnings: 'resource{vendor{marketplace{organization{warnings}}}}';
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
                products: {
                    totalCount: 'resource{vendor{marketplace{products{totalCount}}}}';
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
        warnings: 'resource{warnings}';
    };
    breakdown: {
        id: 'breakdown{id}';
        creationDate: 'breakdown{creationDate}';
        lastChangeDate: 'breakdown{lastChangeDate}';
        resultsSource: 'breakdown{resultsSource}';
        kpi: 'breakdown{kpi}';
        vendor: {
            id: 'breakdown{vendor{id}}';
            creationDate: 'breakdown{vendor{creationDate}}';
            lastChangeDate: 'breakdown{vendor{lastChangeDate}}';
            name: 'breakdown{vendor{name}}';
            systemStatus: 'breakdown{vendor{systemStatus}}';
            errors: 'breakdown{vendor{errors}}';
            warnings: 'breakdown{vendor{warnings}}';
            marketplace: {
                id: 'breakdown{vendor{marketplace{id}}}';
                creationDate: 'breakdown{vendor{marketplace{creationDate}}}';
                lastChangeDate: 'breakdown{vendor{marketplace{lastChangeDate}}}';
                name: 'breakdown{vendor{marketplace{name}}}';
                systemStatus: 'breakdown{vendor{marketplace{systemStatus}}}';
                errors: 'breakdown{vendor{marketplace{errors}}}';
                warnings: 'breakdown{vendor{marketplace{warnings}}}';
                currencyCode: 'breakdown{vendor{marketplace{currencyCode}}}';
                currencySymbol: 'breakdown{vendor{marketplace{currencySymbol}}}';
                currencyOffset: 'breakdown{vendor{marketplace{currencyOffset}}}';
                organization: {
                    id: 'breakdown{vendor{marketplace{organization{id}}}}';
                    creationDate: 'breakdown{vendor{marketplace{organization{creationDate}}}}';
                    lastChangeDate: 'breakdown{vendor{marketplace{organization{lastChangeDate}}}}';
                    name: 'breakdown{vendor{marketplace{organization{name}}}}';
                    systemStatus: 'breakdown{vendor{marketplace{organization{systemStatus}}}}';
                    errors: 'breakdown{vendor{marketplace{organization{errors}}}}';
                    warnings: 'breakdown{vendor{marketplace{organization{warnings}}}}';
                    tier: 'breakdown{vendor{marketplace{organization{tier}}}}';
                };
                mediaChannels: {
                    totalCount: 'breakdown{vendor{marketplace{mediaChannels{totalCount}}}}';
                };
                campaignTemplates: {
                    totalCount: 'breakdown{vendor{marketplace{campaignTemplates{totalCount}}}}';
                };
                vendors: {
                    totalCount: 'breakdown{vendor{marketplace{vendors{totalCount}}}}';
                };
                vendorTokens: {
                    totalCount: 'breakdown{vendor{marketplace{vendorTokens{totalCount}}}}';
                };
                creativeTemplates: {
                    totalCount: 'breakdown{vendor{marketplace{creativeTemplates{totalCount}}}}';
                };
                products: {
                    totalCount: 'breakdown{vendor{marketplace{products{totalCount}}}}';
                };
            };
            vendorTokens: {
                edges: {
                    cursor: 'breakdown{vendor{vendorTokens{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'breakdown{vendor{vendorTokens{pageInfo{endCursor}}}}';
                    startCursor: 'breakdown{vendor{vendorTokens{pageInfo{startCursor}}}}';
                    hasNextPage: 'breakdown{vendor{vendorTokens{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'breakdown{vendor{vendorTokens{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'breakdown{vendor{vendorTokens{totalCount}}}';
            };
            products: {
                edges: {
                    cursor: 'breakdown{vendor{products{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'breakdown{vendor{products{pageInfo{endCursor}}}}';
                    startCursor: 'breakdown{vendor{products{pageInfo{startCursor}}}}';
                    hasNextPage: 'breakdown{vendor{products{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'breakdown{vendor{products{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'breakdown{vendor{products{totalCount}}}';
            };
        };
        systemStatus: 'breakdown{systemStatus}';
        errors: 'breakdown{errors}';
        warnings: 'breakdown{warnings}';
    };
    vendor: {
        id: 'vendor{id}';
        creationDate: 'vendor{creationDate}';
        lastChangeDate: 'vendor{lastChangeDate}';
        name: 'vendor{name}';
        systemStatus: 'vendor{systemStatus}';
        errors: 'vendor{errors}';
        warnings: 'vendor{warnings}';
        marketplace: {
            id: 'vendor{marketplace{id}}';
            creationDate: 'vendor{marketplace{creationDate}}';
            lastChangeDate: 'vendor{marketplace{lastChangeDate}}';
            name: 'vendor{marketplace{name}}';
            systemStatus: 'vendor{marketplace{systemStatus}}';
            errors: 'vendor{marketplace{errors}}';
            warnings: 'vendor{marketplace{warnings}}';
            currencyCode: 'vendor{marketplace{currencyCode}}';
            currencySymbol: 'vendor{marketplace{currencySymbol}}';
            currencyOffset: 'vendor{marketplace{currencyOffset}}';
            organization: {
                id: 'vendor{marketplace{organization{id}}}';
                creationDate: 'vendor{marketplace{organization{creationDate}}}';
                lastChangeDate: 'vendor{marketplace{organization{lastChangeDate}}}';
                name: 'vendor{marketplace{organization{name}}}';
                systemStatus: 'vendor{marketplace{organization{systemStatus}}}';
                errors: 'vendor{marketplace{organization{errors}}}';
                warnings: 'vendor{marketplace{organization{warnings}}}';
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
            products: {
                edges: {
                    cursor: 'vendor{marketplace{products{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'vendor{marketplace{products{pageInfo{endCursor}}}}';
                    startCursor: 'vendor{marketplace{products{pageInfo{startCursor}}}}';
                    hasNextPage: 'vendor{marketplace{products{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'vendor{marketplace{products{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'vendor{marketplace{products{totalCount}}}';
            };
        };
        vendorTokens: {
            edges: {
                node: {
                    id: 'vendor{vendorTokens{edges{node{id}}}}';
                    creationDate: 'vendor{vendorTokens{edges{node{creationDate}}}}';
                    lastChangeDate: 'vendor{vendorTokens{edges{node{lastChangeDate}}}}';
                    token: 'vendor{vendorTokens{edges{node{token}}}}';
                    email: 'vendor{vendorTokens{edges{node{email}}}}';
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
                    resultsSource: 'vendor{products{edges{node{resultsSource}}}}';
                    kpi: 'vendor{products{edges{node{kpi}}}}';
                    systemStatus: 'vendor{products{edges{node{systemStatus}}}}';
                    errors: 'vendor{products{edges{node{errors}}}}';
                    warnings: 'vendor{products{edges{node{warnings}}}}';
                    name: 'vendor{products{edges{node{name}}}}';
                    sku: 'vendor{products{edges{node{sku}}}}';
                    remoteState: 'vendor{products{edges{node{remoteState}}}}';
                    metadata: 'vendor{products{edges{node{metadata}}}}';
                    imported: 'vendor{products{edges{node{imported}}}}';
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
    breakdownType: 'breakdownType',
    resource: {
        id: 'resource{id}',
        creationDate: 'resource{creationDate}',
        lastChangeDate: 'resource{lastChangeDate}',
        resultsSource: 'resource{resultsSource}',
        kpi: 'resource{kpi}',
        vendor: {
            id: 'resource{vendor{id}}',
            creationDate: 'resource{vendor{creationDate}}',
            lastChangeDate: 'resource{vendor{lastChangeDate}}',
            name: 'resource{vendor{name}}',
            systemStatus: 'resource{vendor{systemStatus}}',
            errors: 'resource{vendor{errors}}',
            warnings: 'resource{vendor{warnings}}',
            marketplace: {
                id: 'resource{vendor{marketplace{id}}}',
                creationDate: 'resource{vendor{marketplace{creationDate}}}',
                lastChangeDate: 'resource{vendor{marketplace{lastChangeDate}}}',
                name: 'resource{vendor{marketplace{name}}}',
                systemStatus: 'resource{vendor{marketplace{systemStatus}}}',
                errors: 'resource{vendor{marketplace{errors}}}',
                warnings: 'resource{vendor{marketplace{warnings}}}',
                currencyCode: 'resource{vendor{marketplace{currencyCode}}}',
                currencySymbol: 'resource{vendor{marketplace{currencySymbol}}}',
                currencyOffset: 'resource{vendor{marketplace{currencyOffset}}}',
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
                    warnings:
                        'resource{vendor{marketplace{organization{warnings}}}}',
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
                products: {
                    totalCount:
                        'resource{vendor{marketplace{products{totalCount}}}}',
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
        warnings: 'resource{warnings}',
    },
    breakdown: {
        id: 'breakdown{id}',
        creationDate: 'breakdown{creationDate}',
        lastChangeDate: 'breakdown{lastChangeDate}',
        resultsSource: 'breakdown{resultsSource}',
        kpi: 'breakdown{kpi}',
        vendor: {
            id: 'breakdown{vendor{id}}',
            creationDate: 'breakdown{vendor{creationDate}}',
            lastChangeDate: 'breakdown{vendor{lastChangeDate}}',
            name: 'breakdown{vendor{name}}',
            systemStatus: 'breakdown{vendor{systemStatus}}',
            errors: 'breakdown{vendor{errors}}',
            warnings: 'breakdown{vendor{warnings}}',
            marketplace: {
                id: 'breakdown{vendor{marketplace{id}}}',
                creationDate: 'breakdown{vendor{marketplace{creationDate}}}',
                lastChangeDate:
                    'breakdown{vendor{marketplace{lastChangeDate}}}',
                name: 'breakdown{vendor{marketplace{name}}}',
                systemStatus: 'breakdown{vendor{marketplace{systemStatus}}}',
                errors: 'breakdown{vendor{marketplace{errors}}}',
                warnings: 'breakdown{vendor{marketplace{warnings}}}',
                currencyCode: 'breakdown{vendor{marketplace{currencyCode}}}',
                currencySymbol:
                    'breakdown{vendor{marketplace{currencySymbol}}}',
                currencyOffset:
                    'breakdown{vendor{marketplace{currencyOffset}}}',
                organization: {
                    id: 'breakdown{vendor{marketplace{organization{id}}}}',
                    creationDate:
                        'breakdown{vendor{marketplace{organization{creationDate}}}}',
                    lastChangeDate:
                        'breakdown{vendor{marketplace{organization{lastChangeDate}}}}',
                    name: 'breakdown{vendor{marketplace{organization{name}}}}',
                    systemStatus:
                        'breakdown{vendor{marketplace{organization{systemStatus}}}}',
                    errors:
                        'breakdown{vendor{marketplace{organization{errors}}}}',
                    warnings:
                        'breakdown{vendor{marketplace{organization{warnings}}}}',
                    tier: 'breakdown{vendor{marketplace{organization{tier}}}}',
                },
                mediaChannels: {
                    totalCount:
                        'breakdown{vendor{marketplace{mediaChannels{totalCount}}}}',
                },
                campaignTemplates: {
                    totalCount:
                        'breakdown{vendor{marketplace{campaignTemplates{totalCount}}}}',
                },
                vendors: {
                    totalCount:
                        'breakdown{vendor{marketplace{vendors{totalCount}}}}',
                },
                vendorTokens: {
                    totalCount:
                        'breakdown{vendor{marketplace{vendorTokens{totalCount}}}}',
                },
                creativeTemplates: {
                    totalCount:
                        'breakdown{vendor{marketplace{creativeTemplates{totalCount}}}}',
                },
                products: {
                    totalCount:
                        'breakdown{vendor{marketplace{products{totalCount}}}}',
                },
            },
            vendorTokens: {
                edges: {
                    cursor: 'breakdown{vendor{vendorTokens{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'breakdown{vendor{vendorTokens{pageInfo{endCursor}}}}',
                    startCursor:
                        'breakdown{vendor{vendorTokens{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'breakdown{vendor{vendorTokens{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'breakdown{vendor{vendorTokens{pageInfo{hasPreviousPage}}}}',
                },
                totalCount: 'breakdown{vendor{vendorTokens{totalCount}}}',
            },
            products: {
                edges: {
                    cursor: 'breakdown{vendor{products{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'breakdown{vendor{products{pageInfo{endCursor}}}}',
                    startCursor:
                        'breakdown{vendor{products{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'breakdown{vendor{products{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'breakdown{vendor{products{pageInfo{hasPreviousPage}}}}',
                },
                totalCount: 'breakdown{vendor{products{totalCount}}}',
            },
        },
        systemStatus: 'breakdown{systemStatus}',
        errors: 'breakdown{errors}',
        warnings: 'breakdown{warnings}',
    },
    vendor: {
        id: 'vendor{id}',
        creationDate: 'vendor{creationDate}',
        lastChangeDate: 'vendor{lastChangeDate}',
        name: 'vendor{name}',
        systemStatus: 'vendor{systemStatus}',
        errors: 'vendor{errors}',
        warnings: 'vendor{warnings}',
        marketplace: {
            id: 'vendor{marketplace{id}}',
            creationDate: 'vendor{marketplace{creationDate}}',
            lastChangeDate: 'vendor{marketplace{lastChangeDate}}',
            name: 'vendor{marketplace{name}}',
            systemStatus: 'vendor{marketplace{systemStatus}}',
            errors: 'vendor{marketplace{errors}}',
            warnings: 'vendor{marketplace{warnings}}',
            currencyCode: 'vendor{marketplace{currencyCode}}',
            currencySymbol: 'vendor{marketplace{currencySymbol}}',
            currencyOffset: 'vendor{marketplace{currencyOffset}}',
            organization: {
                id: 'vendor{marketplace{organization{id}}}',
                creationDate: 'vendor{marketplace{organization{creationDate}}}',
                lastChangeDate:
                    'vendor{marketplace{organization{lastChangeDate}}}',
                name: 'vendor{marketplace{organization{name}}}',
                systemStatus: 'vendor{marketplace{organization{systemStatus}}}',
                errors: 'vendor{marketplace{organization{errors}}}',
                warnings: 'vendor{marketplace{organization{warnings}}}',
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
            products: {
                edges: {
                    cursor: 'vendor{marketplace{products{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'vendor{marketplace{products{pageInfo{endCursor}}}}',
                    startCursor:
                        'vendor{marketplace{products{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'vendor{marketplace{products{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'vendor{marketplace{products{pageInfo{hasPreviousPage}}}}',
                },
                totalCount: 'vendor{marketplace{products{totalCount}}}',
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
                    email: 'vendor{vendorTokens{edges{node{email}}}}',
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
                    resultsSource:
                        'vendor{products{edges{node{resultsSource}}}}',
                    kpi: 'vendor{products{edges{node{kpi}}}}',
                    systemStatus: 'vendor{products{edges{node{systemStatus}}}}',
                    errors: 'vendor{products{edges{node{errors}}}}',
                    warnings: 'vendor{products{edges{node{warnings}}}}',
                    name: 'vendor{products{edges{node{name}}}}',
                    sku: 'vendor{products{edges{node{sku}}}}',
                    remoteState: 'vendor{products{edges{node{remoteState}}}}',
                    metadata: 'vendor{products{edges{node{metadata}}}}',
                    imported: 'vendor{products{edges{node{imported}}}}',
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
    | 'breakdownType'
    | 'resource{id}'
    | 'resource{creationDate}'
    | 'resource{lastChangeDate}'
    | 'resource{resultsSource}'
    | 'resource{kpi}'
    | 'resource{vendor{id}}'
    | 'resource{vendor{creationDate}}'
    | 'resource{vendor{lastChangeDate}}'
    | 'resource{vendor{name}}'
    | 'resource{vendor{systemStatus}}'
    | 'resource{vendor{errors}}'
    | 'resource{vendor{warnings}}'
    | 'resource{vendor{marketplace{id}}}'
    | 'resource{vendor{marketplace{creationDate}}}'
    | 'resource{vendor{marketplace{lastChangeDate}}}'
    | 'resource{vendor{marketplace{name}}}'
    | 'resource{vendor{marketplace{systemStatus}}}'
    | 'resource{vendor{marketplace{errors}}}'
    | 'resource{vendor{marketplace{warnings}}}'
    | 'resource{vendor{marketplace{currencyCode}}}'
    | 'resource{vendor{marketplace{currencySymbol}}}'
    | 'resource{vendor{marketplace{currencyOffset}}}'
    | 'resource{vendor{marketplace{organization{id}}}}'
    | 'resource{vendor{marketplace{organization{creationDate}}}}'
    | 'resource{vendor{marketplace{organization{lastChangeDate}}}}'
    | 'resource{vendor{marketplace{organization{name}}}}'
    | 'resource{vendor{marketplace{organization{systemStatus}}}}'
    | 'resource{vendor{marketplace{organization{errors}}}}'
    | 'resource{vendor{marketplace{organization{warnings}}}}'
    | 'resource{vendor{marketplace{organization{tier}}}}'
    | 'resource{vendor{marketplace{mediaChannels{totalCount}}}}'
    | 'resource{vendor{marketplace{campaignTemplates{totalCount}}}}'
    | 'resource{vendor{marketplace{vendors{totalCount}}}}'
    | 'resource{vendor{marketplace{vendorTokens{totalCount}}}}'
    | 'resource{vendor{marketplace{creativeTemplates{totalCount}}}}'
    | 'resource{vendor{marketplace{products{totalCount}}}}'
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
    | 'resource{warnings}'
    | 'breakdown{id}'
    | 'breakdown{creationDate}'
    | 'breakdown{lastChangeDate}'
    | 'breakdown{resultsSource}'
    | 'breakdown{kpi}'
    | 'breakdown{vendor{id}}'
    | 'breakdown{vendor{creationDate}}'
    | 'breakdown{vendor{lastChangeDate}}'
    | 'breakdown{vendor{name}}'
    | 'breakdown{vendor{systemStatus}}'
    | 'breakdown{vendor{errors}}'
    | 'breakdown{vendor{warnings}}'
    | 'breakdown{vendor{marketplace{id}}}'
    | 'breakdown{vendor{marketplace{creationDate}}}'
    | 'breakdown{vendor{marketplace{lastChangeDate}}}'
    | 'breakdown{vendor{marketplace{name}}}'
    | 'breakdown{vendor{marketplace{systemStatus}}}'
    | 'breakdown{vendor{marketplace{errors}}}'
    | 'breakdown{vendor{marketplace{warnings}}}'
    | 'breakdown{vendor{marketplace{currencyCode}}}'
    | 'breakdown{vendor{marketplace{currencySymbol}}}'
    | 'breakdown{vendor{marketplace{currencyOffset}}}'
    | 'breakdown{vendor{marketplace{organization{id}}}}'
    | 'breakdown{vendor{marketplace{organization{creationDate}}}}'
    | 'breakdown{vendor{marketplace{organization{lastChangeDate}}}}'
    | 'breakdown{vendor{marketplace{organization{name}}}}'
    | 'breakdown{vendor{marketplace{organization{systemStatus}}}}'
    | 'breakdown{vendor{marketplace{organization{errors}}}}'
    | 'breakdown{vendor{marketplace{organization{warnings}}}}'
    | 'breakdown{vendor{marketplace{organization{tier}}}}'
    | 'breakdown{vendor{marketplace{mediaChannels{totalCount}}}}'
    | 'breakdown{vendor{marketplace{campaignTemplates{totalCount}}}}'
    | 'breakdown{vendor{marketplace{vendors{totalCount}}}}'
    | 'breakdown{vendor{marketplace{vendorTokens{totalCount}}}}'
    | 'breakdown{vendor{marketplace{creativeTemplates{totalCount}}}}'
    | 'breakdown{vendor{marketplace{products{totalCount}}}}'
    | 'breakdown{vendor{vendorTokens{edges{cursor}}}}'
    | 'breakdown{vendor{vendorTokens{pageInfo{endCursor}}}}'
    | 'breakdown{vendor{vendorTokens{pageInfo{startCursor}}}}'
    | 'breakdown{vendor{vendorTokens{pageInfo{hasNextPage}}}}'
    | 'breakdown{vendor{vendorTokens{pageInfo{hasPreviousPage}}}}'
    | 'breakdown{vendor{vendorTokens{totalCount}}}'
    | 'breakdown{vendor{products{edges{cursor}}}}'
    | 'breakdown{vendor{products{pageInfo{endCursor}}}}'
    | 'breakdown{vendor{products{pageInfo{startCursor}}}}'
    | 'breakdown{vendor{products{pageInfo{hasNextPage}}}}'
    | 'breakdown{vendor{products{pageInfo{hasPreviousPage}}}}'
    | 'breakdown{vendor{products{totalCount}}}'
    | 'breakdown{systemStatus}'
    | 'breakdown{errors}'
    | 'breakdown{warnings}'
    | 'vendor{id}'
    | 'vendor{creationDate}'
    | 'vendor{lastChangeDate}'
    | 'vendor{name}'
    | 'vendor{systemStatus}'
    | 'vendor{errors}'
    | 'vendor{warnings}'
    | 'vendor{marketplace{id}}'
    | 'vendor{marketplace{creationDate}}'
    | 'vendor{marketplace{lastChangeDate}}'
    | 'vendor{marketplace{name}}'
    | 'vendor{marketplace{systemStatus}}'
    | 'vendor{marketplace{errors}}'
    | 'vendor{marketplace{warnings}}'
    | 'vendor{marketplace{currencyCode}}'
    | 'vendor{marketplace{currencySymbol}}'
    | 'vendor{marketplace{currencyOffset}}'
    | 'vendor{marketplace{organization{id}}}'
    | 'vendor{marketplace{organization{creationDate}}}'
    | 'vendor{marketplace{organization{lastChangeDate}}}'
    | 'vendor{marketplace{organization{name}}}'
    | 'vendor{marketplace{organization{systemStatus}}}'
    | 'vendor{marketplace{organization{errors}}}'
    | 'vendor{marketplace{organization{warnings}}}'
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
    | 'vendor{marketplace{products{edges{cursor}}}}'
    | 'vendor{marketplace{products{pageInfo{endCursor}}}}'
    | 'vendor{marketplace{products{pageInfo{startCursor}}}}'
    | 'vendor{marketplace{products{pageInfo{hasNextPage}}}}'
    | 'vendor{marketplace{products{pageInfo{hasPreviousPage}}}}'
    | 'vendor{marketplace{products{totalCount}}}'
    | 'vendor{vendorTokens{edges{node{id}}}}'
    | 'vendor{vendorTokens{edges{node{creationDate}}}}'
    | 'vendor{vendorTokens{edges{node{lastChangeDate}}}}'
    | 'vendor{vendorTokens{edges{node{token}}}}'
    | 'vendor{vendorTokens{edges{node{email}}}}'
    | 'vendor{vendorTokens{edges{cursor}}}'
    | 'vendor{vendorTokens{pageInfo{endCursor}}}'
    | 'vendor{vendorTokens{pageInfo{startCursor}}}'
    | 'vendor{vendorTokens{pageInfo{hasNextPage}}}'
    | 'vendor{vendorTokens{pageInfo{hasPreviousPage}}}'
    | 'vendor{vendorTokens{totalCount}}'
    | 'vendor{products{edges{node{id}}}}'
    | 'vendor{products{edges{node{creationDate}}}}'
    | 'vendor{products{edges{node{lastChangeDate}}}}'
    | 'vendor{products{edges{node{resultsSource}}}}'
    | 'vendor{products{edges{node{kpi}}}}'
    | 'vendor{products{edges{node{systemStatus}}}}'
    | 'vendor{products{edges{node{errors}}}}'
    | 'vendor{products{edges{node{warnings}}}}'
    | 'vendor{products{edges{node{name}}}}'
    | 'vendor{products{edges{node{sku}}}}'
    | 'vendor{products{edges{node{remoteState}}}}'
    | 'vendor{products{edges{node{metadata}}}}'
    | 'vendor{products{edges{node{imported}}}}'
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
    kpi: 'kpi';
    vendor: {
        id: 'vendor{id}';
        creationDate: 'vendor{creationDate}';
        lastChangeDate: 'vendor{lastChangeDate}';
        name: 'vendor{name}';
        systemStatus: 'vendor{systemStatus}';
        errors: 'vendor{errors}';
        warnings: 'vendor{warnings}';
        marketplace: {
            id: 'vendor{marketplace{id}}';
            creationDate: 'vendor{marketplace{creationDate}}';
            lastChangeDate: 'vendor{marketplace{lastChangeDate}}';
            name: 'vendor{marketplace{name}}';
            systemStatus: 'vendor{marketplace{systemStatus}}';
            errors: 'vendor{marketplace{errors}}';
            warnings: 'vendor{marketplace{warnings}}';
            currencyCode: 'vendor{marketplace{currencyCode}}';
            currencySymbol: 'vendor{marketplace{currencySymbol}}';
            currencyOffset: 'vendor{marketplace{currencyOffset}}';
            organization: {
                id: 'vendor{marketplace{organization{id}}}';
                creationDate: 'vendor{marketplace{organization{creationDate}}}';
                lastChangeDate: 'vendor{marketplace{organization{lastChangeDate}}}';
                name: 'vendor{marketplace{organization{name}}}';
                systemStatus: 'vendor{marketplace{organization{systemStatus}}}';
                errors: 'vendor{marketplace{organization{errors}}}';
                warnings: 'vendor{marketplace{organization{warnings}}}';
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
            products: {
                edges: {
                    cursor: 'vendor{marketplace{products{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'vendor{marketplace{products{pageInfo{endCursor}}}}';
                    startCursor: 'vendor{marketplace{products{pageInfo{startCursor}}}}';
                    hasNextPage: 'vendor{marketplace{products{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'vendor{marketplace{products{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'vendor{marketplace{products{totalCount}}}';
            };
        };
        vendorTokens: {
            edges: {
                node: {
                    id: 'vendor{vendorTokens{edges{node{id}}}}';
                    creationDate: 'vendor{vendorTokens{edges{node{creationDate}}}}';
                    lastChangeDate: 'vendor{vendorTokens{edges{node{lastChangeDate}}}}';
                    token: 'vendor{vendorTokens{edges{node{token}}}}';
                    email: 'vendor{vendorTokens{edges{node{email}}}}';
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
                    resultsSource: 'vendor{products{edges{node{resultsSource}}}}';
                    kpi: 'vendor{products{edges{node{kpi}}}}';
                    systemStatus: 'vendor{products{edges{node{systemStatus}}}}';
                    errors: 'vendor{products{edges{node{errors}}}}';
                    warnings: 'vendor{products{edges{node{warnings}}}}';
                    name: 'vendor{products{edges{node{name}}}}';
                    sku: 'vendor{products{edges{node{sku}}}}';
                    remoteState: 'vendor{products{edges{node{remoteState}}}}';
                    metadata: 'vendor{products{edges{node{metadata}}}}';
                    imported: 'vendor{products{edges{node{imported}}}}';
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
    warnings: 'warnings';
    name: 'name';
    status: 'status';
    creativeSpec: 'creativeSpec';
    runTimeSpec: 'runTimeSpec';
    locationSpec: 'locationSpec';
    conversionSpec: 'conversionSpec';
    startDate: 'startDate';
    endDate: 'endDate';
    productFilter: 'productFilter';
    GCPX: {
        id: 'GCPX{id}';
        creationDate: 'GCPX{creationDate}';
        lastChangeDate: 'GCPX{lastChangeDate}';
        kpi: 'GCPX{kpi}';
        price: 'GCPX{price}';
        startDate: 'GCPX{startDate}';
        endDate: 'GCPX{endDate}';
        minConversions: 'GCPX{minConversions}';
        maxConversions: 'GCPX{maxConversions}';
        campaignTemplate: {
            id: 'GCPX{campaignTemplate{id}}';
            creationDate: 'GCPX{campaignTemplate{creationDate}}';
            lastChangeDate: 'GCPX{campaignTemplate{lastChangeDate}}';
            name: 'GCPX{campaignTemplate{name}}';
            description: 'GCPX{campaignTemplate{description}}';
            platform: 'GCPX{campaignTemplate{platform}}';
            remoteId: 'GCPX{campaignTemplate{remoteId}}';
            systemStatus: 'GCPX{campaignTemplate{systemStatus}}';
            errors: 'GCPX{campaignTemplate{errors}}';
            warnings: 'GCPX{campaignTemplate{warnings}}';
            kpi: 'GCPX{campaignTemplate{kpi}}';
            marketplace: {
                id: 'GCPX{campaignTemplate{marketplace{id}}}';
                creationDate: 'GCPX{campaignTemplate{marketplace{creationDate}}}';
                lastChangeDate: 'GCPX{campaignTemplate{marketplace{lastChangeDate}}}';
                name: 'GCPX{campaignTemplate{marketplace{name}}}';
                systemStatus: 'GCPX{campaignTemplate{marketplace{systemStatus}}}';
                errors: 'GCPX{campaignTemplate{marketplace{errors}}}';
                warnings: 'GCPX{campaignTemplate{marketplace{warnings}}}';
                currencyCode: 'GCPX{campaignTemplate{marketplace{currencyCode}}}';
                currencySymbol: 'GCPX{campaignTemplate{marketplace{currencySymbol}}}';
                currencyOffset: 'GCPX{campaignTemplate{marketplace{currencyOffset}}}';
                organization: {
                    id: 'GCPX{campaignTemplate{marketplace{organization{id}}}}';
                    creationDate: 'GCPX{campaignTemplate{marketplace{organization{creationDate}}}}';
                    lastChangeDate: 'GCPX{campaignTemplate{marketplace{organization{lastChangeDate}}}}';
                    name: 'GCPX{campaignTemplate{marketplace{organization{name}}}}';
                    systemStatus: 'GCPX{campaignTemplate{marketplace{organization{systemStatus}}}}';
                    errors: 'GCPX{campaignTemplate{marketplace{organization{errors}}}}';
                    warnings: 'GCPX{campaignTemplate{marketplace{organization{warnings}}}}';
                    tier: 'GCPX{campaignTemplate{marketplace{organization{tier}}}}';
                };
                mediaChannels: {
                    totalCount: 'GCPX{campaignTemplate{marketplace{mediaChannels{totalCount}}}}';
                };
                campaignTemplates: {
                    totalCount: 'GCPX{campaignTemplate{marketplace{campaignTemplates{totalCount}}}}';
                };
                vendors: {
                    totalCount: 'GCPX{campaignTemplate{marketplace{vendors{totalCount}}}}';
                };
                vendorTokens: {
                    totalCount: 'GCPX{campaignTemplate{marketplace{vendorTokens{totalCount}}}}';
                };
                creativeTemplates: {
                    totalCount: 'GCPX{campaignTemplate{marketplace{creativeTemplates{totalCount}}}}';
                };
                products: {
                    totalCount: 'GCPX{campaignTemplate{marketplace{products{totalCount}}}}';
                };
            };
            marketingCampaigns: {
                edges: {
                    cursor: 'GCPX{campaignTemplate{marketingCampaigns{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'GCPX{campaignTemplate{marketingCampaigns{pageInfo{endCursor}}}}';
                    startCursor: 'GCPX{campaignTemplate{marketingCampaigns{pageInfo{startCursor}}}}';
                    hasNextPage: 'GCPX{campaignTemplate{marketingCampaigns{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'GCPX{campaignTemplate{marketingCampaigns{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'GCPX{campaignTemplate{marketingCampaigns{totalCount}}}';
            };
            GCPXHistory: {
                edges: {
                    cursor: 'GCPX{campaignTemplate{GCPXHistory{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'GCPX{campaignTemplate{GCPXHistory{pageInfo{endCursor}}}}';
                    startCursor: 'GCPX{campaignTemplate{GCPXHistory{pageInfo{startCursor}}}}';
                    hasNextPage: 'GCPX{campaignTemplate{GCPXHistory{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'GCPX{campaignTemplate{GCPXHistory{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'GCPX{campaignTemplate{GCPXHistory{totalCount}}}';
            };
            currentGCPX: {
                id: 'GCPX{campaignTemplate{currentGCPX{id}}}';
                creationDate: 'GCPX{campaignTemplate{currentGCPX{creationDate}}}';
                lastChangeDate: 'GCPX{campaignTemplate{currentGCPX{lastChangeDate}}}';
                kpi: 'GCPX{campaignTemplate{currentGCPX{kpi}}}';
                price: 'GCPX{campaignTemplate{currentGCPX{price}}}';
                startDate: 'GCPX{campaignTemplate{currentGCPX{startDate}}}';
                endDate: 'GCPX{campaignTemplate{currentGCPX{endDate}}}';
                minConversions: 'GCPX{campaignTemplate{currentGCPX{minConversions}}}';
                maxConversions: 'GCPX{campaignTemplate{currentGCPX{maxConversions}}}';
                campaignTemplate: {
                    id: 'GCPX{campaignTemplate{currentGCPX{campaignTemplate{id}}}}';
                    creationDate: 'GCPX{campaignTemplate{currentGCPX{campaignTemplate{creationDate}}}}';
                    lastChangeDate: 'GCPX{campaignTemplate{currentGCPX{campaignTemplate{lastChangeDate}}}}';
                    name: 'GCPX{campaignTemplate{currentGCPX{campaignTemplate{name}}}}';
                    description: 'GCPX{campaignTemplate{currentGCPX{campaignTemplate{description}}}}';
                    platform: 'GCPX{campaignTemplate{currentGCPX{campaignTemplate{platform}}}}';
                    remoteId: 'GCPX{campaignTemplate{currentGCPX{campaignTemplate{remoteId}}}}';
                    systemStatus: 'GCPX{campaignTemplate{currentGCPX{campaignTemplate{systemStatus}}}}';
                    errors: 'GCPX{campaignTemplate{currentGCPX{campaignTemplate{errors}}}}';
                    warnings: 'GCPX{campaignTemplate{currentGCPX{campaignTemplate{warnings}}}}';
                    kpi: 'GCPX{campaignTemplate{currentGCPX{campaignTemplate{kpi}}}}';
                };
                marketplace: {
                    id: 'GCPX{campaignTemplate{currentGCPX{marketplace{id}}}}';
                    creationDate: 'GCPX{campaignTemplate{currentGCPX{marketplace{creationDate}}}}';
                    lastChangeDate: 'GCPX{campaignTemplate{currentGCPX{marketplace{lastChangeDate}}}}';
                    name: 'GCPX{campaignTemplate{currentGCPX{marketplace{name}}}}';
                    systemStatus: 'GCPX{campaignTemplate{currentGCPX{marketplace{systemStatus}}}}';
                    errors: 'GCPX{campaignTemplate{currentGCPX{marketplace{errors}}}}';
                    warnings: 'GCPX{campaignTemplate{currentGCPX{marketplace{warnings}}}}';
                    currencyCode: 'GCPX{campaignTemplate{currentGCPX{marketplace{currencyCode}}}}';
                    currencySymbol: 'GCPX{campaignTemplate{currentGCPX{marketplace{currencySymbol}}}}';
                    currencyOffset: 'GCPX{campaignTemplate{currentGCPX{marketplace{currencyOffset}}}}';
                };
                marketingCampaigns: {
                    totalCount: 'GCPX{campaignTemplate{currentGCPX{marketingCampaigns{totalCount}}}}';
                };
            };
        };
        marketplace: {
            id: 'GCPX{marketplace{id}}';
            creationDate: 'GCPX{marketplace{creationDate}}';
            lastChangeDate: 'GCPX{marketplace{lastChangeDate}}';
            name: 'GCPX{marketplace{name}}';
            systemStatus: 'GCPX{marketplace{systemStatus}}';
            errors: 'GCPX{marketplace{errors}}';
            warnings: 'GCPX{marketplace{warnings}}';
            currencyCode: 'GCPX{marketplace{currencyCode}}';
            currencySymbol: 'GCPX{marketplace{currencySymbol}}';
            currencyOffset: 'GCPX{marketplace{currencyOffset}}';
            organization: {
                id: 'GCPX{marketplace{organization{id}}}';
                creationDate: 'GCPX{marketplace{organization{creationDate}}}';
                lastChangeDate: 'GCPX{marketplace{organization{lastChangeDate}}}';
                name: 'GCPX{marketplace{organization{name}}}';
                systemStatus: 'GCPX{marketplace{organization{systemStatus}}}';
                errors: 'GCPX{marketplace{organization{errors}}}';
                warnings: 'GCPX{marketplace{organization{warnings}}}';
                tier: 'GCPX{marketplace{organization{tier}}}';
                users: {
                    totalCount: 'GCPX{marketplace{organization{users{totalCount}}}}';
                };
                marketplaces: {
                    totalCount: 'GCPX{marketplace{organization{marketplaces{totalCount}}}}';
                };
            };
            mediaChannels: {
                edges: {
                    cursor: 'GCPX{marketplace{mediaChannels{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'GCPX{marketplace{mediaChannels{pageInfo{endCursor}}}}';
                    startCursor: 'GCPX{marketplace{mediaChannels{pageInfo{startCursor}}}}';
                    hasNextPage: 'GCPX{marketplace{mediaChannels{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'GCPX{marketplace{mediaChannels{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'GCPX{marketplace{mediaChannels{totalCount}}}';
            };
            campaignTemplates: {
                edges: {
                    cursor: 'GCPX{marketplace{campaignTemplates{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'GCPX{marketplace{campaignTemplates{pageInfo{endCursor}}}}';
                    startCursor: 'GCPX{marketplace{campaignTemplates{pageInfo{startCursor}}}}';
                    hasNextPage: 'GCPX{marketplace{campaignTemplates{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'GCPX{marketplace{campaignTemplates{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'GCPX{marketplace{campaignTemplates{totalCount}}}';
            };
            vendors: {
                edges: {
                    cursor: 'GCPX{marketplace{vendors{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'GCPX{marketplace{vendors{pageInfo{endCursor}}}}';
                    startCursor: 'GCPX{marketplace{vendors{pageInfo{startCursor}}}}';
                    hasNextPage: 'GCPX{marketplace{vendors{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'GCPX{marketplace{vendors{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'GCPX{marketplace{vendors{totalCount}}}';
            };
            vendorTokens: {
                edges: {
                    cursor: 'GCPX{marketplace{vendorTokens{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'GCPX{marketplace{vendorTokens{pageInfo{endCursor}}}}';
                    startCursor: 'GCPX{marketplace{vendorTokens{pageInfo{startCursor}}}}';
                    hasNextPage: 'GCPX{marketplace{vendorTokens{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'GCPX{marketplace{vendorTokens{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'GCPX{marketplace{vendorTokens{totalCount}}}';
            };
            creativeTemplates: {
                edges: {
                    cursor: 'GCPX{marketplace{creativeTemplates{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'GCPX{marketplace{creativeTemplates{pageInfo{endCursor}}}}';
                    startCursor: 'GCPX{marketplace{creativeTemplates{pageInfo{startCursor}}}}';
                    hasNextPage: 'GCPX{marketplace{creativeTemplates{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'GCPX{marketplace{creativeTemplates{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'GCPX{marketplace{creativeTemplates{totalCount}}}';
            };
            products: {
                edges: {
                    cursor: 'GCPX{marketplace{products{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'GCPX{marketplace{products{pageInfo{endCursor}}}}';
                    startCursor: 'GCPX{marketplace{products{pageInfo{startCursor}}}}';
                    hasNextPage: 'GCPX{marketplace{products{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'GCPX{marketplace{products{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'GCPX{marketplace{products{totalCount}}}';
            };
        };
        marketingCampaigns: {
            edges: {
                node: {
                    id: 'GCPX{marketingCampaigns{edges{node{id}}}}';
                    creationDate: 'GCPX{marketingCampaigns{edges{node{creationDate}}}}';
                    lastChangeDate: 'GCPX{marketingCampaigns{edges{node{lastChangeDate}}}}';
                    resultsSource: 'GCPX{marketingCampaigns{edges{node{resultsSource}}}}';
                    kpi: 'GCPX{marketingCampaigns{edges{node{kpi}}}}';
                    systemStatus: 'GCPX{marketingCampaigns{edges{node{systemStatus}}}}';
                    errors: 'GCPX{marketingCampaigns{edges{node{errors}}}}';
                    warnings: 'GCPX{marketingCampaigns{edges{node{warnings}}}}';
                    name: 'GCPX{marketingCampaigns{edges{node{name}}}}';
                    status: 'GCPX{marketingCampaigns{edges{node{status}}}}';
                    creativeSpec: 'GCPX{marketingCampaigns{edges{node{creativeSpec}}}}';
                    runTimeSpec: 'GCPX{marketingCampaigns{edges{node{runTimeSpec}}}}';
                    locationSpec: 'GCPX{marketingCampaigns{edges{node{locationSpec}}}}';
                    conversionSpec: 'GCPX{marketingCampaigns{edges{node{conversionSpec}}}}';
                    startDate: 'GCPX{marketingCampaigns{edges{node{startDate}}}}';
                    endDate: 'GCPX{marketingCampaigns{edges{node{endDate}}}}';
                    productFilter: 'GCPX{marketingCampaigns{edges{node{productFilter}}}}';
                    delivering: 'GCPX{marketingCampaigns{edges{node{delivering}}}}';
                };
                cursor: 'GCPX{marketingCampaigns{edges{cursor}}}';
            };
            pageInfo: {
                endCursor: 'GCPX{marketingCampaigns{pageInfo{endCursor}}}';
                startCursor: 'GCPX{marketingCampaigns{pageInfo{startCursor}}}';
                hasNextPage: 'GCPX{marketingCampaigns{pageInfo{hasNextPage}}}';
                hasPreviousPage: 'GCPX{marketingCampaigns{pageInfo{hasPreviousPage}}}';
            };
            totalCount: 'GCPX{marketingCampaigns{totalCount}}';
        };
    };
    delivering: 'delivering';
    marketingAds: {
        edges: {
            node: {
                id: 'marketingAds{edges{node{id}}}';
                creationDate: 'marketingAds{edges{node{creationDate}}}';
                lastChangeDate: 'marketingAds{edges{node{lastChangeDate}}}';
                resultsSource: 'marketingAds{edges{node{resultsSource}}}';
                kpi: 'marketingAds{edges{node{kpi}}}';
                vendor: {
                    id: 'marketingAds{edges{node{vendor{id}}}}';
                    creationDate: 'marketingAds{edges{node{vendor{creationDate}}}}';
                    lastChangeDate: 'marketingAds{edges{node{vendor{lastChangeDate}}}}';
                    name: 'marketingAds{edges{node{vendor{name}}}}';
                    systemStatus: 'marketingAds{edges{node{vendor{systemStatus}}}}';
                    errors: 'marketingAds{edges{node{vendor{errors}}}}';
                    warnings: 'marketingAds{edges{node{vendor{warnings}}}}';
                };
                systemStatus: 'marketingAds{edges{node{systemStatus}}}';
                errors: 'marketingAds{edges{node{errors}}}';
                warnings: 'marketingAds{edges{node{warnings}}}';
                remoteId: 'marketingAds{edges{node{remoteId}}}';
                preview: 'marketingAds{edges{node{preview}}}';
                adPreviews: {
                    url: 'marketingAds{edges{node{adPreviews{url}}}}';
                    dimensions: 'marketingAds{edges{node{adPreviews{dimensions}}}}';
                    placement: 'marketingAds{edges{node{adPreviews{placement}}}}';
                };
                results: {
                    totalCount: 'marketingAds{edges{node{results{totalCount}}}}';
                };
                marketingCampaign: {
                    id: 'marketingAds{edges{node{marketingCampaign{id}}}}';
                    creationDate: 'marketingAds{edges{node{marketingCampaign{creationDate}}}}';
                    lastChangeDate: 'marketingAds{edges{node{marketingCampaign{lastChangeDate}}}}';
                    resultsSource: 'marketingAds{edges{node{marketingCampaign{resultsSource}}}}';
                    kpi: 'marketingAds{edges{node{marketingCampaign{kpi}}}}';
                    systemStatus: 'marketingAds{edges{node{marketingCampaign{systemStatus}}}}';
                    errors: 'marketingAds{edges{node{marketingCampaign{errors}}}}';
                    warnings: 'marketingAds{edges{node{marketingCampaign{warnings}}}}';
                    name: 'marketingAds{edges{node{marketingCampaign{name}}}}';
                    status: 'marketingAds{edges{node{marketingCampaign{status}}}}';
                    creativeSpec: 'marketingAds{edges{node{marketingCampaign{creativeSpec}}}}';
                    runTimeSpec: 'marketingAds{edges{node{marketingCampaign{runTimeSpec}}}}';
                    locationSpec: 'marketingAds{edges{node{marketingCampaign{locationSpec}}}}';
                    conversionSpec: 'marketingAds{edges{node{marketingCampaign{conversionSpec}}}}';
                    startDate: 'marketingAds{edges{node{marketingCampaign{startDate}}}}';
                    endDate: 'marketingAds{edges{node{marketingCampaign{endDate}}}}';
                    productFilter: 'marketingAds{edges{node{marketingCampaign{productFilter}}}}';
                    delivering: 'marketingAds{edges{node{marketingCampaign{delivering}}}}';
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
                resultsSource: 'products{edges{node{resultsSource}}}';
                kpi: 'products{edges{node{kpi}}}';
                vendor: {
                    id: 'products{edges{node{vendor{id}}}}';
                    creationDate: 'products{edges{node{vendor{creationDate}}}}';
                    lastChangeDate: 'products{edges{node{vendor{lastChangeDate}}}}';
                    name: 'products{edges{node{vendor{name}}}}';
                    systemStatus: 'products{edges{node{vendor{systemStatus}}}}';
                    errors: 'products{edges{node{vendor{errors}}}}';
                    warnings: 'products{edges{node{vendor{warnings}}}}';
                };
                systemStatus: 'products{edges{node{systemStatus}}}';
                errors: 'products{edges{node{errors}}}';
                warnings: 'products{edges{node{warnings}}}';
                name: 'products{edges{node{name}}}';
                sku: 'products{edges{node{sku}}}';
                remoteState: 'products{edges{node{remoteState}}}';
                metadata: 'products{edges{node{metadata}}}';
                imported: 'products{edges{node{imported}}}';
                results: {
                    totalCount: 'products{edges{node{results{totalCount}}}}';
                };
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
                    externalEventSourceIds: 'products{edges{node{catalog{externalEventSourceIds}}}}';
                    productSource: 'products{edges{node{catalog{productSource}}}}';
                    errors: 'products{edges{node{catalog{errors}}}}';
                    warnings: 'products{edges{node{catalog{warnings}}}}';
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
        externalEventSourceIds: 'catalog{externalEventSourceIds}';
        productSource: 'catalog{productSource}';
        errors: 'catalog{errors}';
        warnings: 'catalog{warnings}';
        mediaChannel: {
            id: 'catalog{mediaChannel{id}}';
            creationDate: 'catalog{mediaChannel{creationDate}}';
            lastChangeDate: 'catalog{mediaChannel{lastChangeDate}}';
            name: 'catalog{mediaChannel{name}}';
            systemStatus: 'catalog{mediaChannel{systemStatus}}';
            errors: 'catalog{mediaChannel{errors}}';
            warnings: 'catalog{mediaChannel{warnings}}';
            platform: 'catalog{mediaChannel{platform}}';
            remoteId: 'catalog{mediaChannel{remoteId}}';
            remoteState: 'catalog{mediaChannel{remoteState}}';
            currency: 'catalog{mediaChannel{currency}}';
            currencyCode: 'catalog{mediaChannel{currencyCode}}';
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
                warnings: 'catalog{mediaChannel{marketplace{warnings}}}';
                currencyCode: 'catalog{mediaChannel{marketplace{currencyCode}}}';
                currencySymbol: 'catalog{mediaChannel{marketplace{currencySymbol}}}';
                currencyOffset: 'catalog{mediaChannel{marketplace{currencyOffset}}}';
                organization: {
                    id: 'catalog{mediaChannel{marketplace{organization{id}}}}';
                    creationDate: 'catalog{mediaChannel{marketplace{organization{creationDate}}}}';
                    lastChangeDate: 'catalog{mediaChannel{marketplace{organization{lastChangeDate}}}}';
                    name: 'catalog{mediaChannel{marketplace{organization{name}}}}';
                    systemStatus: 'catalog{mediaChannel{marketplace{organization{systemStatus}}}}';
                    errors: 'catalog{mediaChannel{marketplace{organization{errors}}}}';
                    warnings: 'catalog{mediaChannel{marketplace{organization{warnings}}}}';
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
                products: {
                    totalCount: 'catalog{mediaChannel{marketplace{products{totalCount}}}}';
                };
            };
        };
        products: {
            edges: {
                node: {
                    id: 'catalog{products{edges{node{id}}}}';
                    creationDate: 'catalog{products{edges{node{creationDate}}}}';
                    lastChangeDate: 'catalog{products{edges{node{lastChangeDate}}}}';
                    resultsSource: 'catalog{products{edges{node{resultsSource}}}}';
                    kpi: 'catalog{products{edges{node{kpi}}}}';
                    systemStatus: 'catalog{products{edges{node{systemStatus}}}}';
                    errors: 'catalog{products{edges{node{errors}}}}';
                    warnings: 'catalog{products{edges{node{warnings}}}}';
                    name: 'catalog{products{edges{node{name}}}}';
                    sku: 'catalog{products{edges{node{sku}}}}';
                    remoteState: 'catalog{products{edges{node{remoteState}}}}';
                    metadata: 'catalog{products{edges{node{metadata}}}}';
                    imported: 'catalog{products{edges{node{imported}}}}';
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
        warnings: 'campaignTemplate{warnings}';
        kpi: 'campaignTemplate{kpi}';
        marketplace: {
            id: 'campaignTemplate{marketplace{id}}';
            creationDate: 'campaignTemplate{marketplace{creationDate}}';
            lastChangeDate: 'campaignTemplate{marketplace{lastChangeDate}}';
            name: 'campaignTemplate{marketplace{name}}';
            systemStatus: 'campaignTemplate{marketplace{systemStatus}}';
            errors: 'campaignTemplate{marketplace{errors}}';
            warnings: 'campaignTemplate{marketplace{warnings}}';
            currencyCode: 'campaignTemplate{marketplace{currencyCode}}';
            currencySymbol: 'campaignTemplate{marketplace{currencySymbol}}';
            currencyOffset: 'campaignTemplate{marketplace{currencyOffset}}';
            organization: {
                id: 'campaignTemplate{marketplace{organization{id}}}';
                creationDate: 'campaignTemplate{marketplace{organization{creationDate}}}';
                lastChangeDate: 'campaignTemplate{marketplace{organization{lastChangeDate}}}';
                name: 'campaignTemplate{marketplace{organization{name}}}';
                systemStatus: 'campaignTemplate{marketplace{organization{systemStatus}}}';
                errors: 'campaignTemplate{marketplace{organization{errors}}}';
                warnings: 'campaignTemplate{marketplace{organization{warnings}}}';
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
            products: {
                edges: {
                    cursor: 'campaignTemplate{marketplace{products{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'campaignTemplate{marketplace{products{pageInfo{endCursor}}}}';
                    startCursor: 'campaignTemplate{marketplace{products{pageInfo{startCursor}}}}';
                    hasNextPage: 'campaignTemplate{marketplace{products{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'campaignTemplate{marketplace{products{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'campaignTemplate{marketplace{products{totalCount}}}';
            };
        };
        marketingCampaigns: {
            edges: {
                node: {
                    id: 'campaignTemplate{marketingCampaigns{edges{node{id}}}}';
                    creationDate: 'campaignTemplate{marketingCampaigns{edges{node{creationDate}}}}';
                    lastChangeDate: 'campaignTemplate{marketingCampaigns{edges{node{lastChangeDate}}}}';
                    resultsSource: 'campaignTemplate{marketingCampaigns{edges{node{resultsSource}}}}';
                    kpi: 'campaignTemplate{marketingCampaigns{edges{node{kpi}}}}';
                    systemStatus: 'campaignTemplate{marketingCampaigns{edges{node{systemStatus}}}}';
                    errors: 'campaignTemplate{marketingCampaigns{edges{node{errors}}}}';
                    warnings: 'campaignTemplate{marketingCampaigns{edges{node{warnings}}}}';
                    name: 'campaignTemplate{marketingCampaigns{edges{node{name}}}}';
                    status: 'campaignTemplate{marketingCampaigns{edges{node{status}}}}';
                    creativeSpec: 'campaignTemplate{marketingCampaigns{edges{node{creativeSpec}}}}';
                    runTimeSpec: 'campaignTemplate{marketingCampaigns{edges{node{runTimeSpec}}}}';
                    locationSpec: 'campaignTemplate{marketingCampaigns{edges{node{locationSpec}}}}';
                    conversionSpec: 'campaignTemplate{marketingCampaigns{edges{node{conversionSpec}}}}';
                    startDate: 'campaignTemplate{marketingCampaigns{edges{node{startDate}}}}';
                    endDate: 'campaignTemplate{marketingCampaigns{edges{node{endDate}}}}';
                    productFilter: 'campaignTemplate{marketingCampaigns{edges{node{productFilter}}}}';
                    delivering: 'campaignTemplate{marketingCampaigns{edges{node{delivering}}}}';
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
        GCPXHistory: {
            edges: {
                node: {
                    id: 'campaignTemplate{GCPXHistory{edges{node{id}}}}';
                    creationDate: 'campaignTemplate{GCPXHistory{edges{node{creationDate}}}}';
                    lastChangeDate: 'campaignTemplate{GCPXHistory{edges{node{lastChangeDate}}}}';
                    kpi: 'campaignTemplate{GCPXHistory{edges{node{kpi}}}}';
                    price: 'campaignTemplate{GCPXHistory{edges{node{price}}}}';
                    startDate: 'campaignTemplate{GCPXHistory{edges{node{startDate}}}}';
                    endDate: 'campaignTemplate{GCPXHistory{edges{node{endDate}}}}';
                    minConversions: 'campaignTemplate{GCPXHistory{edges{node{minConversions}}}}';
                    maxConversions: 'campaignTemplate{GCPXHistory{edges{node{maxConversions}}}}';
                };
                cursor: 'campaignTemplate{GCPXHistory{edges{cursor}}}';
            };
            pageInfo: {
                endCursor: 'campaignTemplate{GCPXHistory{pageInfo{endCursor}}}';
                startCursor: 'campaignTemplate{GCPXHistory{pageInfo{startCursor}}}';
                hasNextPage: 'campaignTemplate{GCPXHistory{pageInfo{hasNextPage}}}';
                hasPreviousPage: 'campaignTemplate{GCPXHistory{pageInfo{hasPreviousPage}}}';
            };
            totalCount: 'campaignTemplate{GCPXHistory{totalCount}}';
        };
        currentGCPX: {
            id: 'campaignTemplate{currentGCPX{id}}';
            creationDate: 'campaignTemplate{currentGCPX{creationDate}}';
            lastChangeDate: 'campaignTemplate{currentGCPX{lastChangeDate}}';
            kpi: 'campaignTemplate{currentGCPX{kpi}}';
            price: 'campaignTemplate{currentGCPX{price}}';
            startDate: 'campaignTemplate{currentGCPX{startDate}}';
            endDate: 'campaignTemplate{currentGCPX{endDate}}';
            minConversions: 'campaignTemplate{currentGCPX{minConversions}}';
            maxConversions: 'campaignTemplate{currentGCPX{maxConversions}}';
            campaignTemplate: {
                id: 'campaignTemplate{currentGCPX{campaignTemplate{id}}}';
                creationDate: 'campaignTemplate{currentGCPX{campaignTemplate{creationDate}}}';
                lastChangeDate: 'campaignTemplate{currentGCPX{campaignTemplate{lastChangeDate}}}';
                name: 'campaignTemplate{currentGCPX{campaignTemplate{name}}}';
                description: 'campaignTemplate{currentGCPX{campaignTemplate{description}}}';
                platform: 'campaignTemplate{currentGCPX{campaignTemplate{platform}}}';
                remoteId: 'campaignTemplate{currentGCPX{campaignTemplate{remoteId}}}';
                systemStatus: 'campaignTemplate{currentGCPX{campaignTemplate{systemStatus}}}';
                errors: 'campaignTemplate{currentGCPX{campaignTemplate{errors}}}';
                warnings: 'campaignTemplate{currentGCPX{campaignTemplate{warnings}}}';
                kpi: 'campaignTemplate{currentGCPX{campaignTemplate{kpi}}}';
                marketplace: {
                    id: 'campaignTemplate{currentGCPX{campaignTemplate{marketplace{id}}}}';
                    creationDate: 'campaignTemplate{currentGCPX{campaignTemplate{marketplace{creationDate}}}}';
                    lastChangeDate: 'campaignTemplate{currentGCPX{campaignTemplate{marketplace{lastChangeDate}}}}';
                    name: 'campaignTemplate{currentGCPX{campaignTemplate{marketplace{name}}}}';
                    systemStatus: 'campaignTemplate{currentGCPX{campaignTemplate{marketplace{systemStatus}}}}';
                    errors: 'campaignTemplate{currentGCPX{campaignTemplate{marketplace{errors}}}}';
                    warnings: 'campaignTemplate{currentGCPX{campaignTemplate{marketplace{warnings}}}}';
                    currencyCode: 'campaignTemplate{currentGCPX{campaignTemplate{marketplace{currencyCode}}}}';
                    currencySymbol: 'campaignTemplate{currentGCPX{campaignTemplate{marketplace{currencySymbol}}}}';
                    currencyOffset: 'campaignTemplate{currentGCPX{campaignTemplate{marketplace{currencyOffset}}}}';
                };
                marketingCampaigns: {
                    totalCount: 'campaignTemplate{currentGCPX{campaignTemplate{marketingCampaigns{totalCount}}}}';
                };
                GCPXHistory: {
                    totalCount: 'campaignTemplate{currentGCPX{campaignTemplate{GCPXHistory{totalCount}}}}';
                };
                currentGCPX: {
                    id: 'campaignTemplate{currentGCPX{campaignTemplate{currentGCPX{id}}}}';
                    creationDate: 'campaignTemplate{currentGCPX{campaignTemplate{currentGCPX{creationDate}}}}';
                    lastChangeDate: 'campaignTemplate{currentGCPX{campaignTemplate{currentGCPX{lastChangeDate}}}}';
                    kpi: 'campaignTemplate{currentGCPX{campaignTemplate{currentGCPX{kpi}}}}';
                    price: 'campaignTemplate{currentGCPX{campaignTemplate{currentGCPX{price}}}}';
                    startDate: 'campaignTemplate{currentGCPX{campaignTemplate{currentGCPX{startDate}}}}';
                    endDate: 'campaignTemplate{currentGCPX{campaignTemplate{currentGCPX{endDate}}}}';
                    minConversions: 'campaignTemplate{currentGCPX{campaignTemplate{currentGCPX{minConversions}}}}';
                    maxConversions: 'campaignTemplate{currentGCPX{campaignTemplate{currentGCPX{maxConversions}}}}';
                };
            };
            marketplace: {
                id: 'campaignTemplate{currentGCPX{marketplace{id}}}';
                creationDate: 'campaignTemplate{currentGCPX{marketplace{creationDate}}}';
                lastChangeDate: 'campaignTemplate{currentGCPX{marketplace{lastChangeDate}}}';
                name: 'campaignTemplate{currentGCPX{marketplace{name}}}';
                systemStatus: 'campaignTemplate{currentGCPX{marketplace{systemStatus}}}';
                errors: 'campaignTemplate{currentGCPX{marketplace{errors}}}';
                warnings: 'campaignTemplate{currentGCPX{marketplace{warnings}}}';
                currencyCode: 'campaignTemplate{currentGCPX{marketplace{currencyCode}}}';
                currencySymbol: 'campaignTemplate{currentGCPX{marketplace{currencySymbol}}}';
                currencyOffset: 'campaignTemplate{currentGCPX{marketplace{currencyOffset}}}';
                organization: {
                    id: 'campaignTemplate{currentGCPX{marketplace{organization{id}}}}';
                    creationDate: 'campaignTemplate{currentGCPX{marketplace{organization{creationDate}}}}';
                    lastChangeDate: 'campaignTemplate{currentGCPX{marketplace{organization{lastChangeDate}}}}';
                    name: 'campaignTemplate{currentGCPX{marketplace{organization{name}}}}';
                    systemStatus: 'campaignTemplate{currentGCPX{marketplace{organization{systemStatus}}}}';
                    errors: 'campaignTemplate{currentGCPX{marketplace{organization{errors}}}}';
                    warnings: 'campaignTemplate{currentGCPX{marketplace{organization{warnings}}}}';
                    tier: 'campaignTemplate{currentGCPX{marketplace{organization{tier}}}}';
                };
                mediaChannels: {
                    totalCount: 'campaignTemplate{currentGCPX{marketplace{mediaChannels{totalCount}}}}';
                };
                campaignTemplates: {
                    totalCount: 'campaignTemplate{currentGCPX{marketplace{campaignTemplates{totalCount}}}}';
                };
                vendors: {
                    totalCount: 'campaignTemplate{currentGCPX{marketplace{vendors{totalCount}}}}';
                };
                vendorTokens: {
                    totalCount: 'campaignTemplate{currentGCPX{marketplace{vendorTokens{totalCount}}}}';
                };
                creativeTemplates: {
                    totalCount: 'campaignTemplate{currentGCPX{marketplace{creativeTemplates{totalCount}}}}';
                };
                products: {
                    totalCount: 'campaignTemplate{currentGCPX{marketplace{products{totalCount}}}}';
                };
            };
            marketingCampaigns: {
                edges: {
                    cursor: 'campaignTemplate{currentGCPX{marketingCampaigns{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'campaignTemplate{currentGCPX{marketingCampaigns{pageInfo{endCursor}}}}';
                    startCursor: 'campaignTemplate{currentGCPX{marketingCampaigns{pageInfo{startCursor}}}}';
                    hasNextPage: 'campaignTemplate{currentGCPX{marketingCampaigns{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'campaignTemplate{currentGCPX{marketingCampaigns{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'campaignTemplate{currentGCPX{marketingCampaigns{totalCount}}}';
            };
        };
    };
    mediaChannel: {
        id: 'mediaChannel{id}';
        creationDate: 'mediaChannel{creationDate}';
        lastChangeDate: 'mediaChannel{lastChangeDate}';
        name: 'mediaChannel{name}';
        systemStatus: 'mediaChannel{systemStatus}';
        errors: 'mediaChannel{errors}';
        warnings: 'mediaChannel{warnings}';
        platform: 'mediaChannel{platform}';
        remoteId: 'mediaChannel{remoteId}';
        remoteState: 'mediaChannel{remoteState}';
        currency: 'mediaChannel{currency}';
        currencyCode: 'mediaChannel{currencyCode}';
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
                    externalEventSourceIds: 'mediaChannel{catalogs{edges{node{externalEventSourceIds}}}}';
                    productSource: 'mediaChannel{catalogs{edges{node{productSource}}}}';
                    errors: 'mediaChannel{catalogs{edges{node{errors}}}}';
                    warnings: 'mediaChannel{catalogs{edges{node{warnings}}}}';
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
            warnings: 'mediaChannel{marketplace{warnings}}';
            currencyCode: 'mediaChannel{marketplace{currencyCode}}';
            currencySymbol: 'mediaChannel{marketplace{currencySymbol}}';
            currencyOffset: 'mediaChannel{marketplace{currencyOffset}}';
            organization: {
                id: 'mediaChannel{marketplace{organization{id}}}';
                creationDate: 'mediaChannel{marketplace{organization{creationDate}}}';
                lastChangeDate: 'mediaChannel{marketplace{organization{lastChangeDate}}}';
                name: 'mediaChannel{marketplace{organization{name}}}';
                systemStatus: 'mediaChannel{marketplace{organization{systemStatus}}}';
                errors: 'mediaChannel{marketplace{organization{errors}}}';
                warnings: 'mediaChannel{marketplace{organization{warnings}}}';
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
            products: {
                edges: {
                    cursor: 'mediaChannel{marketplace{products{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'mediaChannel{marketplace{products{pageInfo{endCursor}}}}';
                    startCursor: 'mediaChannel{marketplace{products{pageInfo{startCursor}}}}';
                    hasNextPage: 'mediaChannel{marketplace{products{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'mediaChannel{marketplace{products{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'mediaChannel{marketplace{products{totalCount}}}';
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
                breakdownType: 'results{edges{node{breakdownType}}}';
                resource: {
                    id: 'results{edges{node{resource{id}}}}';
                    creationDate: 'results{edges{node{resource{creationDate}}}}';
                    lastChangeDate: 'results{edges{node{resource{lastChangeDate}}}}';
                    resultsSource: 'results{edges{node{resource{resultsSource}}}}';
                    kpi: 'results{edges{node{resource{kpi}}}}';
                    systemStatus: 'results{edges{node{resource{systemStatus}}}}';
                    errors: 'results{edges{node{resource{errors}}}}';
                    warnings: 'results{edges{node{resource{warnings}}}}';
                };
                breakdown: {
                    id: 'results{edges{node{breakdown{id}}}}';
                    creationDate: 'results{edges{node{breakdown{creationDate}}}}';
                    lastChangeDate: 'results{edges{node{breakdown{lastChangeDate}}}}';
                    resultsSource: 'results{edges{node{breakdown{resultsSource}}}}';
                    kpi: 'results{edges{node{breakdown{kpi}}}}';
                    systemStatus: 'results{edges{node{breakdown{systemStatus}}}}';
                    errors: 'results{edges{node{breakdown{errors}}}}';
                    warnings: 'results{edges{node{breakdown{warnings}}}}';
                };
                vendor: {
                    id: 'results{edges{node{vendor{id}}}}';
                    creationDate: 'results{edges{node{vendor{creationDate}}}}';
                    lastChangeDate: 'results{edges{node{vendor{lastChangeDate}}}}';
                    name: 'results{edges{node{vendor{name}}}}';
                    systemStatus: 'results{edges{node{vendor{systemStatus}}}}';
                    errors: 'results{edges{node{vendor{errors}}}}';
                    warnings: 'results{edges{node{vendor{warnings}}}}';
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
    notifications: {
        edges: {
            node: {
                id: 'notifications{edges{node{id}}}';
                creationDate: 'notifications{edges{node{creationDate}}}';
                lastChangeDate: 'notifications{edges{node{lastChangeDate}}}';
                title: 'notifications{edges{node{title}}}';
                message: 'notifications{edges{node{message}}}';
                status: 'notifications{edges{node{status}}}';
                severity: 'notifications{edges{node{severity}}}';
                code: 'notifications{edges{node{code}}}';
                source: 'notifications{edges{node{source}}}';
                resource: {
                    id: 'notifications{edges{node{resource{id}}}}';
                    creationDate: 'notifications{edges{node{resource{creationDate}}}}';
                    lastChangeDate: 'notifications{edges{node{resource{lastChangeDate}}}}';
                    systemStatus: 'notifications{edges{node{resource{systemStatus}}}}';
                    errors: 'notifications{edges{node{resource{errors}}}}';
                    warnings: 'notifications{edges{node{resource{warnings}}}}';
                };
            };
            cursor: 'notifications{edges{cursor}}';
        };
        pageInfo: {
            endCursor: 'notifications{pageInfo{endCursor}}';
            startCursor: 'notifications{pageInfo{startCursor}}';
            hasNextPage: 'notifications{pageInfo{hasNextPage}}';
            hasPreviousPage: 'notifications{pageInfo{hasPreviousPage}}';
        };
        totalCount: 'notifications{totalCount}';
    };
};
export const MarketingCampaignFields: MarketingCampaignFields = {
    id: 'id',
    creationDate: 'creationDate',
    lastChangeDate: 'lastChangeDate',
    resultsSource: 'resultsSource',
    kpi: 'kpi',
    vendor: {
        id: 'vendor{id}',
        creationDate: 'vendor{creationDate}',
        lastChangeDate: 'vendor{lastChangeDate}',
        name: 'vendor{name}',
        systemStatus: 'vendor{systemStatus}',
        errors: 'vendor{errors}',
        warnings: 'vendor{warnings}',
        marketplace: {
            id: 'vendor{marketplace{id}}',
            creationDate: 'vendor{marketplace{creationDate}}',
            lastChangeDate: 'vendor{marketplace{lastChangeDate}}',
            name: 'vendor{marketplace{name}}',
            systemStatus: 'vendor{marketplace{systemStatus}}',
            errors: 'vendor{marketplace{errors}}',
            warnings: 'vendor{marketplace{warnings}}',
            currencyCode: 'vendor{marketplace{currencyCode}}',
            currencySymbol: 'vendor{marketplace{currencySymbol}}',
            currencyOffset: 'vendor{marketplace{currencyOffset}}',
            organization: {
                id: 'vendor{marketplace{organization{id}}}',
                creationDate: 'vendor{marketplace{organization{creationDate}}}',
                lastChangeDate:
                    'vendor{marketplace{organization{lastChangeDate}}}',
                name: 'vendor{marketplace{organization{name}}}',
                systemStatus: 'vendor{marketplace{organization{systemStatus}}}',
                errors: 'vendor{marketplace{organization{errors}}}',
                warnings: 'vendor{marketplace{organization{warnings}}}',
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
            products: {
                edges: {
                    cursor: 'vendor{marketplace{products{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'vendor{marketplace{products{pageInfo{endCursor}}}}',
                    startCursor:
                        'vendor{marketplace{products{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'vendor{marketplace{products{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'vendor{marketplace{products{pageInfo{hasPreviousPage}}}}',
                },
                totalCount: 'vendor{marketplace{products{totalCount}}}',
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
                    email: 'vendor{vendorTokens{edges{node{email}}}}',
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
                    resultsSource:
                        'vendor{products{edges{node{resultsSource}}}}',
                    kpi: 'vendor{products{edges{node{kpi}}}}',
                    systemStatus: 'vendor{products{edges{node{systemStatus}}}}',
                    errors: 'vendor{products{edges{node{errors}}}}',
                    warnings: 'vendor{products{edges{node{warnings}}}}',
                    name: 'vendor{products{edges{node{name}}}}',
                    sku: 'vendor{products{edges{node{sku}}}}',
                    remoteState: 'vendor{products{edges{node{remoteState}}}}',
                    metadata: 'vendor{products{edges{node{metadata}}}}',
                    imported: 'vendor{products{edges{node{imported}}}}',
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
    warnings: 'warnings',
    name: 'name',
    status: 'status',
    creativeSpec: 'creativeSpec',
    runTimeSpec: 'runTimeSpec',
    locationSpec: 'locationSpec',
    conversionSpec: 'conversionSpec',
    startDate: 'startDate',
    endDate: 'endDate',
    productFilter: 'productFilter',
    GCPX: {
        id: 'GCPX{id}',
        creationDate: 'GCPX{creationDate}',
        lastChangeDate: 'GCPX{lastChangeDate}',
        kpi: 'GCPX{kpi}',
        price: 'GCPX{price}',
        startDate: 'GCPX{startDate}',
        endDate: 'GCPX{endDate}',
        minConversions: 'GCPX{minConversions}',
        maxConversions: 'GCPX{maxConversions}',
        campaignTemplate: {
            id: 'GCPX{campaignTemplate{id}}',
            creationDate: 'GCPX{campaignTemplate{creationDate}}',
            lastChangeDate: 'GCPX{campaignTemplate{lastChangeDate}}',
            name: 'GCPX{campaignTemplate{name}}',
            description: 'GCPX{campaignTemplate{description}}',
            platform: 'GCPX{campaignTemplate{platform}}',
            remoteId: 'GCPX{campaignTemplate{remoteId}}',
            systemStatus: 'GCPX{campaignTemplate{systemStatus}}',
            errors: 'GCPX{campaignTemplate{errors}}',
            warnings: 'GCPX{campaignTemplate{warnings}}',
            kpi: 'GCPX{campaignTemplate{kpi}}',
            marketplace: {
                id: 'GCPX{campaignTemplate{marketplace{id}}}',
                creationDate:
                    'GCPX{campaignTemplate{marketplace{creationDate}}}',
                lastChangeDate:
                    'GCPX{campaignTemplate{marketplace{lastChangeDate}}}',
                name: 'GCPX{campaignTemplate{marketplace{name}}}',
                systemStatus:
                    'GCPX{campaignTemplate{marketplace{systemStatus}}}',
                errors: 'GCPX{campaignTemplate{marketplace{errors}}}',
                warnings: 'GCPX{campaignTemplate{marketplace{warnings}}}',
                currencyCode:
                    'GCPX{campaignTemplate{marketplace{currencyCode}}}',
                currencySymbol:
                    'GCPX{campaignTemplate{marketplace{currencySymbol}}}',
                currencyOffset:
                    'GCPX{campaignTemplate{marketplace{currencyOffset}}}',
                organization: {
                    id: 'GCPX{campaignTemplate{marketplace{organization{id}}}}',
                    creationDate:
                        'GCPX{campaignTemplate{marketplace{organization{creationDate}}}}',
                    lastChangeDate:
                        'GCPX{campaignTemplate{marketplace{organization{lastChangeDate}}}}',
                    name:
                        'GCPX{campaignTemplate{marketplace{organization{name}}}}',
                    systemStatus:
                        'GCPX{campaignTemplate{marketplace{organization{systemStatus}}}}',
                    errors:
                        'GCPX{campaignTemplate{marketplace{organization{errors}}}}',
                    warnings:
                        'GCPX{campaignTemplate{marketplace{organization{warnings}}}}',
                    tier:
                        'GCPX{campaignTemplate{marketplace{organization{tier}}}}',
                },
                mediaChannels: {
                    totalCount:
                        'GCPX{campaignTemplate{marketplace{mediaChannels{totalCount}}}}',
                },
                campaignTemplates: {
                    totalCount:
                        'GCPX{campaignTemplate{marketplace{campaignTemplates{totalCount}}}}',
                },
                vendors: {
                    totalCount:
                        'GCPX{campaignTemplate{marketplace{vendors{totalCount}}}}',
                },
                vendorTokens: {
                    totalCount:
                        'GCPX{campaignTemplate{marketplace{vendorTokens{totalCount}}}}',
                },
                creativeTemplates: {
                    totalCount:
                        'GCPX{campaignTemplate{marketplace{creativeTemplates{totalCount}}}}',
                },
                products: {
                    totalCount:
                        'GCPX{campaignTemplate{marketplace{products{totalCount}}}}',
                },
            },
            marketingCampaigns: {
                edges: {
                    cursor:
                        'GCPX{campaignTemplate{marketingCampaigns{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'GCPX{campaignTemplate{marketingCampaigns{pageInfo{endCursor}}}}',
                    startCursor:
                        'GCPX{campaignTemplate{marketingCampaigns{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'GCPX{campaignTemplate{marketingCampaigns{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'GCPX{campaignTemplate{marketingCampaigns{pageInfo{hasPreviousPage}}}}',
                },
                totalCount:
                    'GCPX{campaignTemplate{marketingCampaigns{totalCount}}}',
            },
            GCPXHistory: {
                edges: {
                    cursor:
                        'GCPX{campaignTemplate{GCPXHistory{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'GCPX{campaignTemplate{GCPXHistory{pageInfo{endCursor}}}}',
                    startCursor:
                        'GCPX{campaignTemplate{GCPXHistory{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'GCPX{campaignTemplate{GCPXHistory{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'GCPX{campaignTemplate{GCPXHistory{pageInfo{hasPreviousPage}}}}',
                },
                totalCount: 'GCPX{campaignTemplate{GCPXHistory{totalCount}}}',
            },
            currentGCPX: {
                id: 'GCPX{campaignTemplate{currentGCPX{id}}}',
                creationDate:
                    'GCPX{campaignTemplate{currentGCPX{creationDate}}}',
                lastChangeDate:
                    'GCPX{campaignTemplate{currentGCPX{lastChangeDate}}}',
                kpi: 'GCPX{campaignTemplate{currentGCPX{kpi}}}',
                price: 'GCPX{campaignTemplate{currentGCPX{price}}}',
                startDate: 'GCPX{campaignTemplate{currentGCPX{startDate}}}',
                endDate: 'GCPX{campaignTemplate{currentGCPX{endDate}}}',
                minConversions:
                    'GCPX{campaignTemplate{currentGCPX{minConversions}}}',
                maxConversions:
                    'GCPX{campaignTemplate{currentGCPX{maxConversions}}}',
                campaignTemplate: {
                    id:
                        'GCPX{campaignTemplate{currentGCPX{campaignTemplate{id}}}}',
                    creationDate:
                        'GCPX{campaignTemplate{currentGCPX{campaignTemplate{creationDate}}}}',
                    lastChangeDate:
                        'GCPX{campaignTemplate{currentGCPX{campaignTemplate{lastChangeDate}}}}',
                    name:
                        'GCPX{campaignTemplate{currentGCPX{campaignTemplate{name}}}}',
                    description:
                        'GCPX{campaignTemplate{currentGCPX{campaignTemplate{description}}}}',
                    platform:
                        'GCPX{campaignTemplate{currentGCPX{campaignTemplate{platform}}}}',
                    remoteId:
                        'GCPX{campaignTemplate{currentGCPX{campaignTemplate{remoteId}}}}',
                    systemStatus:
                        'GCPX{campaignTemplate{currentGCPX{campaignTemplate{systemStatus}}}}',
                    errors:
                        'GCPX{campaignTemplate{currentGCPX{campaignTemplate{errors}}}}',
                    warnings:
                        'GCPX{campaignTemplate{currentGCPX{campaignTemplate{warnings}}}}',
                    kpi:
                        'GCPX{campaignTemplate{currentGCPX{campaignTemplate{kpi}}}}',
                },
                marketplace: {
                    id: 'GCPX{campaignTemplate{currentGCPX{marketplace{id}}}}',
                    creationDate:
                        'GCPX{campaignTemplate{currentGCPX{marketplace{creationDate}}}}',
                    lastChangeDate:
                        'GCPX{campaignTemplate{currentGCPX{marketplace{lastChangeDate}}}}',
                    name:
                        'GCPX{campaignTemplate{currentGCPX{marketplace{name}}}}',
                    systemStatus:
                        'GCPX{campaignTemplate{currentGCPX{marketplace{systemStatus}}}}',
                    errors:
                        'GCPX{campaignTemplate{currentGCPX{marketplace{errors}}}}',
                    warnings:
                        'GCPX{campaignTemplate{currentGCPX{marketplace{warnings}}}}',
                    currencyCode:
                        'GCPX{campaignTemplate{currentGCPX{marketplace{currencyCode}}}}',
                    currencySymbol:
                        'GCPX{campaignTemplate{currentGCPX{marketplace{currencySymbol}}}}',
                    currencyOffset:
                        'GCPX{campaignTemplate{currentGCPX{marketplace{currencyOffset}}}}',
                },
                marketingCampaigns: {
                    totalCount:
                        'GCPX{campaignTemplate{currentGCPX{marketingCampaigns{totalCount}}}}',
                },
            },
        },
        marketplace: {
            id: 'GCPX{marketplace{id}}',
            creationDate: 'GCPX{marketplace{creationDate}}',
            lastChangeDate: 'GCPX{marketplace{lastChangeDate}}',
            name: 'GCPX{marketplace{name}}',
            systemStatus: 'GCPX{marketplace{systemStatus}}',
            errors: 'GCPX{marketplace{errors}}',
            warnings: 'GCPX{marketplace{warnings}}',
            currencyCode: 'GCPX{marketplace{currencyCode}}',
            currencySymbol: 'GCPX{marketplace{currencySymbol}}',
            currencyOffset: 'GCPX{marketplace{currencyOffset}}',
            organization: {
                id: 'GCPX{marketplace{organization{id}}}',
                creationDate: 'GCPX{marketplace{organization{creationDate}}}',
                lastChangeDate:
                    'GCPX{marketplace{organization{lastChangeDate}}}',
                name: 'GCPX{marketplace{organization{name}}}',
                systemStatus: 'GCPX{marketplace{organization{systemStatus}}}',
                errors: 'GCPX{marketplace{organization{errors}}}',
                warnings: 'GCPX{marketplace{organization{warnings}}}',
                tier: 'GCPX{marketplace{organization{tier}}}',
                users: {
                    totalCount:
                        'GCPX{marketplace{organization{users{totalCount}}}}',
                },
                marketplaces: {
                    totalCount:
                        'GCPX{marketplace{organization{marketplaces{totalCount}}}}',
                },
            },
            mediaChannels: {
                edges: {
                    cursor: 'GCPX{marketplace{mediaChannels{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'GCPX{marketplace{mediaChannels{pageInfo{endCursor}}}}',
                    startCursor:
                        'GCPX{marketplace{mediaChannels{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'GCPX{marketplace{mediaChannels{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'GCPX{marketplace{mediaChannels{pageInfo{hasPreviousPage}}}}',
                },
                totalCount: 'GCPX{marketplace{mediaChannels{totalCount}}}',
            },
            campaignTemplates: {
                edges: {
                    cursor:
                        'GCPX{marketplace{campaignTemplates{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'GCPX{marketplace{campaignTemplates{pageInfo{endCursor}}}}',
                    startCursor:
                        'GCPX{marketplace{campaignTemplates{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'GCPX{marketplace{campaignTemplates{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'GCPX{marketplace{campaignTemplates{pageInfo{hasPreviousPage}}}}',
                },
                totalCount: 'GCPX{marketplace{campaignTemplates{totalCount}}}',
            },
            vendors: {
                edges: {
                    cursor: 'GCPX{marketplace{vendors{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'GCPX{marketplace{vendors{pageInfo{endCursor}}}}',
                    startCursor:
                        'GCPX{marketplace{vendors{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'GCPX{marketplace{vendors{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'GCPX{marketplace{vendors{pageInfo{hasPreviousPage}}}}',
                },
                totalCount: 'GCPX{marketplace{vendors{totalCount}}}',
            },
            vendorTokens: {
                edges: {
                    cursor: 'GCPX{marketplace{vendorTokens{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'GCPX{marketplace{vendorTokens{pageInfo{endCursor}}}}',
                    startCursor:
                        'GCPX{marketplace{vendorTokens{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'GCPX{marketplace{vendorTokens{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'GCPX{marketplace{vendorTokens{pageInfo{hasPreviousPage}}}}',
                },
                totalCount: 'GCPX{marketplace{vendorTokens{totalCount}}}',
            },
            creativeTemplates: {
                edges: {
                    cursor:
                        'GCPX{marketplace{creativeTemplates{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'GCPX{marketplace{creativeTemplates{pageInfo{endCursor}}}}',
                    startCursor:
                        'GCPX{marketplace{creativeTemplates{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'GCPX{marketplace{creativeTemplates{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'GCPX{marketplace{creativeTemplates{pageInfo{hasPreviousPage}}}}',
                },
                totalCount: 'GCPX{marketplace{creativeTemplates{totalCount}}}',
            },
            products: {
                edges: {
                    cursor: 'GCPX{marketplace{products{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'GCPX{marketplace{products{pageInfo{endCursor}}}}',
                    startCursor:
                        'GCPX{marketplace{products{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'GCPX{marketplace{products{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'GCPX{marketplace{products{pageInfo{hasPreviousPage}}}}',
                },
                totalCount: 'GCPX{marketplace{products{totalCount}}}',
            },
        },
        marketingCampaigns: {
            edges: {
                node: {
                    id: 'GCPX{marketingCampaigns{edges{node{id}}}}',
                    creationDate:
                        'GCPX{marketingCampaigns{edges{node{creationDate}}}}',
                    lastChangeDate:
                        'GCPX{marketingCampaigns{edges{node{lastChangeDate}}}}',
                    resultsSource:
                        'GCPX{marketingCampaigns{edges{node{resultsSource}}}}',
                    kpi: 'GCPX{marketingCampaigns{edges{node{kpi}}}}',
                    systemStatus:
                        'GCPX{marketingCampaigns{edges{node{systemStatus}}}}',
                    errors: 'GCPX{marketingCampaigns{edges{node{errors}}}}',
                    warnings: 'GCPX{marketingCampaigns{edges{node{warnings}}}}',
                    name: 'GCPX{marketingCampaigns{edges{node{name}}}}',
                    status: 'GCPX{marketingCampaigns{edges{node{status}}}}',
                    creativeSpec:
                        'GCPX{marketingCampaigns{edges{node{creativeSpec}}}}',
                    runTimeSpec:
                        'GCPX{marketingCampaigns{edges{node{runTimeSpec}}}}',
                    locationSpec:
                        'GCPX{marketingCampaigns{edges{node{locationSpec}}}}',
                    conversionSpec:
                        'GCPX{marketingCampaigns{edges{node{conversionSpec}}}}',
                    startDate:
                        'GCPX{marketingCampaigns{edges{node{startDate}}}}',
                    endDate: 'GCPX{marketingCampaigns{edges{node{endDate}}}}',
                    productFilter:
                        'GCPX{marketingCampaigns{edges{node{productFilter}}}}',
                    delivering:
                        'GCPX{marketingCampaigns{edges{node{delivering}}}}',
                },
                cursor: 'GCPX{marketingCampaigns{edges{cursor}}}',
            },
            pageInfo: {
                endCursor: 'GCPX{marketingCampaigns{pageInfo{endCursor}}}',
                startCursor: 'GCPX{marketingCampaigns{pageInfo{startCursor}}}',
                hasNextPage: 'GCPX{marketingCampaigns{pageInfo{hasNextPage}}}',
                hasPreviousPage:
                    'GCPX{marketingCampaigns{pageInfo{hasPreviousPage}}}',
            },
            totalCount: 'GCPX{marketingCampaigns{totalCount}}',
        },
    },
    delivering: 'delivering',
    marketingAds: {
        edges: {
            node: {
                id: 'marketingAds{edges{node{id}}}',
                creationDate: 'marketingAds{edges{node{creationDate}}}',
                lastChangeDate: 'marketingAds{edges{node{lastChangeDate}}}',
                resultsSource: 'marketingAds{edges{node{resultsSource}}}',
                kpi: 'marketingAds{edges{node{kpi}}}',
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
                    warnings: 'marketingAds{edges{node{vendor{warnings}}}}',
                },
                systemStatus: 'marketingAds{edges{node{systemStatus}}}',
                errors: 'marketingAds{edges{node{errors}}}',
                warnings: 'marketingAds{edges{node{warnings}}}',
                remoteId: 'marketingAds{edges{node{remoteId}}}',
                preview: 'marketingAds{edges{node{preview}}}',
                adPreviews: {
                    url: 'marketingAds{edges{node{adPreviews{url}}}}',
                    dimensions:
                        'marketingAds{edges{node{adPreviews{dimensions}}}}',
                    placement:
                        'marketingAds{edges{node{adPreviews{placement}}}}',
                },
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
                    kpi: 'marketingAds{edges{node{marketingCampaign{kpi}}}}',
                    systemStatus:
                        'marketingAds{edges{node{marketingCampaign{systemStatus}}}}',
                    errors:
                        'marketingAds{edges{node{marketingCampaign{errors}}}}',
                    warnings:
                        'marketingAds{edges{node{marketingCampaign{warnings}}}}',
                    name: 'marketingAds{edges{node{marketingCampaign{name}}}}',
                    status:
                        'marketingAds{edges{node{marketingCampaign{status}}}}',
                    creativeSpec:
                        'marketingAds{edges{node{marketingCampaign{creativeSpec}}}}',
                    runTimeSpec:
                        'marketingAds{edges{node{marketingCampaign{runTimeSpec}}}}',
                    locationSpec:
                        'marketingAds{edges{node{marketingCampaign{locationSpec}}}}',
                    conversionSpec:
                        'marketingAds{edges{node{marketingCampaign{conversionSpec}}}}',
                    startDate:
                        'marketingAds{edges{node{marketingCampaign{startDate}}}}',
                    endDate:
                        'marketingAds{edges{node{marketingCampaign{endDate}}}}',
                    productFilter:
                        'marketingAds{edges{node{marketingCampaign{productFilter}}}}',
                    delivering:
                        'marketingAds{edges{node{marketingCampaign{delivering}}}}',
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
                resultsSource: 'products{edges{node{resultsSource}}}',
                kpi: 'products{edges{node{kpi}}}',
                vendor: {
                    id: 'products{edges{node{vendor{id}}}}',
                    creationDate: 'products{edges{node{vendor{creationDate}}}}',
                    lastChangeDate:
                        'products{edges{node{vendor{lastChangeDate}}}}',
                    name: 'products{edges{node{vendor{name}}}}',
                    systemStatus: 'products{edges{node{vendor{systemStatus}}}}',
                    errors: 'products{edges{node{vendor{errors}}}}',
                    warnings: 'products{edges{node{vendor{warnings}}}}',
                },
                systemStatus: 'products{edges{node{systemStatus}}}',
                errors: 'products{edges{node{errors}}}',
                warnings: 'products{edges{node{warnings}}}',
                name: 'products{edges{node{name}}}',
                sku: 'products{edges{node{sku}}}',
                remoteState: 'products{edges{node{remoteState}}}',
                metadata: 'products{edges{node{metadata}}}',
                imported: 'products{edges{node{imported}}}',
                results: {
                    totalCount: 'products{edges{node{results{totalCount}}}}',
                },
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
                    externalEventSourceIds:
                        'products{edges{node{catalog{externalEventSourceIds}}}}',
                    productSource:
                        'products{edges{node{catalog{productSource}}}}',
                    errors: 'products{edges{node{catalog{errors}}}}',
                    warnings: 'products{edges{node{catalog{warnings}}}}',
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
        externalEventSourceIds: 'catalog{externalEventSourceIds}',
        productSource: 'catalog{productSource}',
        errors: 'catalog{errors}',
        warnings: 'catalog{warnings}',
        mediaChannel: {
            id: 'catalog{mediaChannel{id}}',
            creationDate: 'catalog{mediaChannel{creationDate}}',
            lastChangeDate: 'catalog{mediaChannel{lastChangeDate}}',
            name: 'catalog{mediaChannel{name}}',
            systemStatus: 'catalog{mediaChannel{systemStatus}}',
            errors: 'catalog{mediaChannel{errors}}',
            warnings: 'catalog{mediaChannel{warnings}}',
            platform: 'catalog{mediaChannel{platform}}',
            remoteId: 'catalog{mediaChannel{remoteId}}',
            remoteState: 'catalog{mediaChannel{remoteState}}',
            currency: 'catalog{mediaChannel{currency}}',
            currencyCode: 'catalog{mediaChannel{currencyCode}}',
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
                warnings: 'catalog{mediaChannel{marketplace{warnings}}}',
                currencyCode:
                    'catalog{mediaChannel{marketplace{currencyCode}}}',
                currencySymbol:
                    'catalog{mediaChannel{marketplace{currencySymbol}}}',
                currencyOffset:
                    'catalog{mediaChannel{marketplace{currencyOffset}}}',
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
                    warnings:
                        'catalog{mediaChannel{marketplace{organization{warnings}}}}',
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
                products: {
                    totalCount:
                        'catalog{mediaChannel{marketplace{products{totalCount}}}}',
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
                    resultsSource:
                        'catalog{products{edges{node{resultsSource}}}}',
                    kpi: 'catalog{products{edges{node{kpi}}}}',
                    systemStatus:
                        'catalog{products{edges{node{systemStatus}}}}',
                    errors: 'catalog{products{edges{node{errors}}}}',
                    warnings: 'catalog{products{edges{node{warnings}}}}',
                    name: 'catalog{products{edges{node{name}}}}',
                    sku: 'catalog{products{edges{node{sku}}}}',
                    remoteState: 'catalog{products{edges{node{remoteState}}}}',
                    metadata: 'catalog{products{edges{node{metadata}}}}',
                    imported: 'catalog{products{edges{node{imported}}}}',
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
        warnings: 'campaignTemplate{warnings}',
        kpi: 'campaignTemplate{kpi}',
        marketplace: {
            id: 'campaignTemplate{marketplace{id}}',
            creationDate: 'campaignTemplate{marketplace{creationDate}}',
            lastChangeDate: 'campaignTemplate{marketplace{lastChangeDate}}',
            name: 'campaignTemplate{marketplace{name}}',
            systemStatus: 'campaignTemplate{marketplace{systemStatus}}',
            errors: 'campaignTemplate{marketplace{errors}}',
            warnings: 'campaignTemplate{marketplace{warnings}}',
            currencyCode: 'campaignTemplate{marketplace{currencyCode}}',
            currencySymbol: 'campaignTemplate{marketplace{currencySymbol}}',
            currencyOffset: 'campaignTemplate{marketplace{currencyOffset}}',
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
                warnings:
                    'campaignTemplate{marketplace{organization{warnings}}}',
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
            products: {
                edges: {
                    cursor:
                        'campaignTemplate{marketplace{products{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'campaignTemplate{marketplace{products{pageInfo{endCursor}}}}',
                    startCursor:
                        'campaignTemplate{marketplace{products{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'campaignTemplate{marketplace{products{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'campaignTemplate{marketplace{products{pageInfo{hasPreviousPage}}}}',
                },
                totalCount:
                    'campaignTemplate{marketplace{products{totalCount}}}',
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
                    kpi:
                        'campaignTemplate{marketingCampaigns{edges{node{kpi}}}}',
                    systemStatus:
                        'campaignTemplate{marketingCampaigns{edges{node{systemStatus}}}}',
                    errors:
                        'campaignTemplate{marketingCampaigns{edges{node{errors}}}}',
                    warnings:
                        'campaignTemplate{marketingCampaigns{edges{node{warnings}}}}',
                    name:
                        'campaignTemplate{marketingCampaigns{edges{node{name}}}}',
                    status:
                        'campaignTemplate{marketingCampaigns{edges{node{status}}}}',
                    creativeSpec:
                        'campaignTemplate{marketingCampaigns{edges{node{creativeSpec}}}}',
                    runTimeSpec:
                        'campaignTemplate{marketingCampaigns{edges{node{runTimeSpec}}}}',
                    locationSpec:
                        'campaignTemplate{marketingCampaigns{edges{node{locationSpec}}}}',
                    conversionSpec:
                        'campaignTemplate{marketingCampaigns{edges{node{conversionSpec}}}}',
                    startDate:
                        'campaignTemplate{marketingCampaigns{edges{node{startDate}}}}',
                    endDate:
                        'campaignTemplate{marketingCampaigns{edges{node{endDate}}}}',
                    productFilter:
                        'campaignTemplate{marketingCampaigns{edges{node{productFilter}}}}',
                    delivering:
                        'campaignTemplate{marketingCampaigns{edges{node{delivering}}}}',
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
        GCPXHistory: {
            edges: {
                node: {
                    id: 'campaignTemplate{GCPXHistory{edges{node{id}}}}',
                    creationDate:
                        'campaignTemplate{GCPXHistory{edges{node{creationDate}}}}',
                    lastChangeDate:
                        'campaignTemplate{GCPXHistory{edges{node{lastChangeDate}}}}',
                    kpi: 'campaignTemplate{GCPXHistory{edges{node{kpi}}}}',
                    price: 'campaignTemplate{GCPXHistory{edges{node{price}}}}',
                    startDate:
                        'campaignTemplate{GCPXHistory{edges{node{startDate}}}}',
                    endDate:
                        'campaignTemplate{GCPXHistory{edges{node{endDate}}}}',
                    minConversions:
                        'campaignTemplate{GCPXHistory{edges{node{minConversions}}}}',
                    maxConversions:
                        'campaignTemplate{GCPXHistory{edges{node{maxConversions}}}}',
                },
                cursor: 'campaignTemplate{GCPXHistory{edges{cursor}}}',
            },
            pageInfo: {
                endCursor: 'campaignTemplate{GCPXHistory{pageInfo{endCursor}}}',
                startCursor:
                    'campaignTemplate{GCPXHistory{pageInfo{startCursor}}}',
                hasNextPage:
                    'campaignTemplate{GCPXHistory{pageInfo{hasNextPage}}}',
                hasPreviousPage:
                    'campaignTemplate{GCPXHistory{pageInfo{hasPreviousPage}}}',
            },
            totalCount: 'campaignTemplate{GCPXHistory{totalCount}}',
        },
        currentGCPX: {
            id: 'campaignTemplate{currentGCPX{id}}',
            creationDate: 'campaignTemplate{currentGCPX{creationDate}}',
            lastChangeDate: 'campaignTemplate{currentGCPX{lastChangeDate}}',
            kpi: 'campaignTemplate{currentGCPX{kpi}}',
            price: 'campaignTemplate{currentGCPX{price}}',
            startDate: 'campaignTemplate{currentGCPX{startDate}}',
            endDate: 'campaignTemplate{currentGCPX{endDate}}',
            minConversions: 'campaignTemplate{currentGCPX{minConversions}}',
            maxConversions: 'campaignTemplate{currentGCPX{maxConversions}}',
            campaignTemplate: {
                id: 'campaignTemplate{currentGCPX{campaignTemplate{id}}}',
                creationDate:
                    'campaignTemplate{currentGCPX{campaignTemplate{creationDate}}}',
                lastChangeDate:
                    'campaignTemplate{currentGCPX{campaignTemplate{lastChangeDate}}}',
                name: 'campaignTemplate{currentGCPX{campaignTemplate{name}}}',
                description:
                    'campaignTemplate{currentGCPX{campaignTemplate{description}}}',
                platform:
                    'campaignTemplate{currentGCPX{campaignTemplate{platform}}}',
                remoteId:
                    'campaignTemplate{currentGCPX{campaignTemplate{remoteId}}}',
                systemStatus:
                    'campaignTemplate{currentGCPX{campaignTemplate{systemStatus}}}',
                errors:
                    'campaignTemplate{currentGCPX{campaignTemplate{errors}}}',
                warnings:
                    'campaignTemplate{currentGCPX{campaignTemplate{warnings}}}',
                kpi: 'campaignTemplate{currentGCPX{campaignTemplate{kpi}}}',
                marketplace: {
                    id:
                        'campaignTemplate{currentGCPX{campaignTemplate{marketplace{id}}}}',
                    creationDate:
                        'campaignTemplate{currentGCPX{campaignTemplate{marketplace{creationDate}}}}',
                    lastChangeDate:
                        'campaignTemplate{currentGCPX{campaignTemplate{marketplace{lastChangeDate}}}}',
                    name:
                        'campaignTemplate{currentGCPX{campaignTemplate{marketplace{name}}}}',
                    systemStatus:
                        'campaignTemplate{currentGCPX{campaignTemplate{marketplace{systemStatus}}}}',
                    errors:
                        'campaignTemplate{currentGCPX{campaignTemplate{marketplace{errors}}}}',
                    warnings:
                        'campaignTemplate{currentGCPX{campaignTemplate{marketplace{warnings}}}}',
                    currencyCode:
                        'campaignTemplate{currentGCPX{campaignTemplate{marketplace{currencyCode}}}}',
                    currencySymbol:
                        'campaignTemplate{currentGCPX{campaignTemplate{marketplace{currencySymbol}}}}',
                    currencyOffset:
                        'campaignTemplate{currentGCPX{campaignTemplate{marketplace{currencyOffset}}}}',
                },
                marketingCampaigns: {
                    totalCount:
                        'campaignTemplate{currentGCPX{campaignTemplate{marketingCampaigns{totalCount}}}}',
                },
                GCPXHistory: {
                    totalCount:
                        'campaignTemplate{currentGCPX{campaignTemplate{GCPXHistory{totalCount}}}}',
                },
                currentGCPX: {
                    id:
                        'campaignTemplate{currentGCPX{campaignTemplate{currentGCPX{id}}}}',
                    creationDate:
                        'campaignTemplate{currentGCPX{campaignTemplate{currentGCPX{creationDate}}}}',
                    lastChangeDate:
                        'campaignTemplate{currentGCPX{campaignTemplate{currentGCPX{lastChangeDate}}}}',
                    kpi:
                        'campaignTemplate{currentGCPX{campaignTemplate{currentGCPX{kpi}}}}',
                    price:
                        'campaignTemplate{currentGCPX{campaignTemplate{currentGCPX{price}}}}',
                    startDate:
                        'campaignTemplate{currentGCPX{campaignTemplate{currentGCPX{startDate}}}}',
                    endDate:
                        'campaignTemplate{currentGCPX{campaignTemplate{currentGCPX{endDate}}}}',
                    minConversions:
                        'campaignTemplate{currentGCPX{campaignTemplate{currentGCPX{minConversions}}}}',
                    maxConversions:
                        'campaignTemplate{currentGCPX{campaignTemplate{currentGCPX{maxConversions}}}}',
                },
            },
            marketplace: {
                id: 'campaignTemplate{currentGCPX{marketplace{id}}}',
                creationDate:
                    'campaignTemplate{currentGCPX{marketplace{creationDate}}}',
                lastChangeDate:
                    'campaignTemplate{currentGCPX{marketplace{lastChangeDate}}}',
                name: 'campaignTemplate{currentGCPX{marketplace{name}}}',
                systemStatus:
                    'campaignTemplate{currentGCPX{marketplace{systemStatus}}}',
                errors: 'campaignTemplate{currentGCPX{marketplace{errors}}}',
                warnings:
                    'campaignTemplate{currentGCPX{marketplace{warnings}}}',
                currencyCode:
                    'campaignTemplate{currentGCPX{marketplace{currencyCode}}}',
                currencySymbol:
                    'campaignTemplate{currentGCPX{marketplace{currencySymbol}}}',
                currencyOffset:
                    'campaignTemplate{currentGCPX{marketplace{currencyOffset}}}',
                organization: {
                    id:
                        'campaignTemplate{currentGCPX{marketplace{organization{id}}}}',
                    creationDate:
                        'campaignTemplate{currentGCPX{marketplace{organization{creationDate}}}}',
                    lastChangeDate:
                        'campaignTemplate{currentGCPX{marketplace{organization{lastChangeDate}}}}',
                    name:
                        'campaignTemplate{currentGCPX{marketplace{organization{name}}}}',
                    systemStatus:
                        'campaignTemplate{currentGCPX{marketplace{organization{systemStatus}}}}',
                    errors:
                        'campaignTemplate{currentGCPX{marketplace{organization{errors}}}}',
                    warnings:
                        'campaignTemplate{currentGCPX{marketplace{organization{warnings}}}}',
                    tier:
                        'campaignTemplate{currentGCPX{marketplace{organization{tier}}}}',
                },
                mediaChannels: {
                    totalCount:
                        'campaignTemplate{currentGCPX{marketplace{mediaChannels{totalCount}}}}',
                },
                campaignTemplates: {
                    totalCount:
                        'campaignTemplate{currentGCPX{marketplace{campaignTemplates{totalCount}}}}',
                },
                vendors: {
                    totalCount:
                        'campaignTemplate{currentGCPX{marketplace{vendors{totalCount}}}}',
                },
                vendorTokens: {
                    totalCount:
                        'campaignTemplate{currentGCPX{marketplace{vendorTokens{totalCount}}}}',
                },
                creativeTemplates: {
                    totalCount:
                        'campaignTemplate{currentGCPX{marketplace{creativeTemplates{totalCount}}}}',
                },
                products: {
                    totalCount:
                        'campaignTemplate{currentGCPX{marketplace{products{totalCount}}}}',
                },
            },
            marketingCampaigns: {
                edges: {
                    cursor:
                        'campaignTemplate{currentGCPX{marketingCampaigns{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'campaignTemplate{currentGCPX{marketingCampaigns{pageInfo{endCursor}}}}',
                    startCursor:
                        'campaignTemplate{currentGCPX{marketingCampaigns{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'campaignTemplate{currentGCPX{marketingCampaigns{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'campaignTemplate{currentGCPX{marketingCampaigns{pageInfo{hasPreviousPage}}}}',
                },
                totalCount:
                    'campaignTemplate{currentGCPX{marketingCampaigns{totalCount}}}',
            },
        },
    },
    mediaChannel: {
        id: 'mediaChannel{id}',
        creationDate: 'mediaChannel{creationDate}',
        lastChangeDate: 'mediaChannel{lastChangeDate}',
        name: 'mediaChannel{name}',
        systemStatus: 'mediaChannel{systemStatus}',
        errors: 'mediaChannel{errors}',
        warnings: 'mediaChannel{warnings}',
        platform: 'mediaChannel{platform}',
        remoteId: 'mediaChannel{remoteId}',
        remoteState: 'mediaChannel{remoteState}',
        currency: 'mediaChannel{currency}',
        currencyCode: 'mediaChannel{currencyCode}',
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
                    externalEventSourceIds:
                        'mediaChannel{catalogs{edges{node{externalEventSourceIds}}}}',
                    productSource:
                        'mediaChannel{catalogs{edges{node{productSource}}}}',
                    errors: 'mediaChannel{catalogs{edges{node{errors}}}}',
                    warnings: 'mediaChannel{catalogs{edges{node{warnings}}}}',
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
            warnings: 'mediaChannel{marketplace{warnings}}',
            currencyCode: 'mediaChannel{marketplace{currencyCode}}',
            currencySymbol: 'mediaChannel{marketplace{currencySymbol}}',
            currencyOffset: 'mediaChannel{marketplace{currencyOffset}}',
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
                warnings: 'mediaChannel{marketplace{organization{warnings}}}',
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
            products: {
                edges: {
                    cursor:
                        'mediaChannel{marketplace{products{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'mediaChannel{marketplace{products{pageInfo{endCursor}}}}',
                    startCursor:
                        'mediaChannel{marketplace{products{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'mediaChannel{marketplace{products{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'mediaChannel{marketplace{products{pageInfo{hasPreviousPage}}}}',
                },
                totalCount: 'mediaChannel{marketplace{products{totalCount}}}',
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
                breakdownType: 'results{edges{node{breakdownType}}}',
                resource: {
                    id: 'results{edges{node{resource{id}}}}',
                    creationDate:
                        'results{edges{node{resource{creationDate}}}}',
                    lastChangeDate:
                        'results{edges{node{resource{lastChangeDate}}}}',
                    resultsSource:
                        'results{edges{node{resource{resultsSource}}}}',
                    kpi: 'results{edges{node{resource{kpi}}}}',
                    systemStatus:
                        'results{edges{node{resource{systemStatus}}}}',
                    errors: 'results{edges{node{resource{errors}}}}',
                    warnings: 'results{edges{node{resource{warnings}}}}',
                },
                breakdown: {
                    id: 'results{edges{node{breakdown{id}}}}',
                    creationDate:
                        'results{edges{node{breakdown{creationDate}}}}',
                    lastChangeDate:
                        'results{edges{node{breakdown{lastChangeDate}}}}',
                    resultsSource:
                        'results{edges{node{breakdown{resultsSource}}}}',
                    kpi: 'results{edges{node{breakdown{kpi}}}}',
                    systemStatus:
                        'results{edges{node{breakdown{systemStatus}}}}',
                    errors: 'results{edges{node{breakdown{errors}}}}',
                    warnings: 'results{edges{node{breakdown{warnings}}}}',
                },
                vendor: {
                    id: 'results{edges{node{vendor{id}}}}',
                    creationDate: 'results{edges{node{vendor{creationDate}}}}',
                    lastChangeDate:
                        'results{edges{node{vendor{lastChangeDate}}}}',
                    name: 'results{edges{node{vendor{name}}}}',
                    systemStatus: 'results{edges{node{vendor{systemStatus}}}}',
                    errors: 'results{edges{node{vendor{errors}}}}',
                    warnings: 'results{edges{node{vendor{warnings}}}}',
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
    notifications: {
        edges: {
            node: {
                id: 'notifications{edges{node{id}}}',
                creationDate: 'notifications{edges{node{creationDate}}}',
                lastChangeDate: 'notifications{edges{node{lastChangeDate}}}',
                title: 'notifications{edges{node{title}}}',
                message: 'notifications{edges{node{message}}}',
                status: 'notifications{edges{node{status}}}',
                severity: 'notifications{edges{node{severity}}}',
                code: 'notifications{edges{node{code}}}',
                source: 'notifications{edges{node{source}}}',
                resource: {
                    id: 'notifications{edges{node{resource{id}}}}',
                    creationDate:
                        'notifications{edges{node{resource{creationDate}}}}',
                    lastChangeDate:
                        'notifications{edges{node{resource{lastChangeDate}}}}',
                    systemStatus:
                        'notifications{edges{node{resource{systemStatus}}}}',
                    errors: 'notifications{edges{node{resource{errors}}}}',
                    warnings: 'notifications{edges{node{resource{warnings}}}}',
                },
            },
            cursor: 'notifications{edges{cursor}}',
        },
        pageInfo: {
            endCursor: 'notifications{pageInfo{endCursor}}',
            startCursor: 'notifications{pageInfo{startCursor}}',
            hasNextPage: 'notifications{pageInfo{hasNextPage}}',
            hasPreviousPage: 'notifications{pageInfo{hasPreviousPage}}',
        },
        totalCount: 'notifications{totalCount}',
    },
};
export type MarketingCampaignField =
    | 'id'
    | 'creationDate'
    | 'lastChangeDate'
    | 'resultsSource'
    | 'kpi'
    | 'vendor{id}'
    | 'vendor{creationDate}'
    | 'vendor{lastChangeDate}'
    | 'vendor{name}'
    | 'vendor{systemStatus}'
    | 'vendor{errors}'
    | 'vendor{warnings}'
    | 'vendor{marketplace{id}}'
    | 'vendor{marketplace{creationDate}}'
    | 'vendor{marketplace{lastChangeDate}}'
    | 'vendor{marketplace{name}}'
    | 'vendor{marketplace{systemStatus}}'
    | 'vendor{marketplace{errors}}'
    | 'vendor{marketplace{warnings}}'
    | 'vendor{marketplace{currencyCode}}'
    | 'vendor{marketplace{currencySymbol}}'
    | 'vendor{marketplace{currencyOffset}}'
    | 'vendor{marketplace{organization{id}}}'
    | 'vendor{marketplace{organization{creationDate}}}'
    | 'vendor{marketplace{organization{lastChangeDate}}}'
    | 'vendor{marketplace{organization{name}}}'
    | 'vendor{marketplace{organization{systemStatus}}}'
    | 'vendor{marketplace{organization{errors}}}'
    | 'vendor{marketplace{organization{warnings}}}'
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
    | 'vendor{marketplace{products{edges{cursor}}}}'
    | 'vendor{marketplace{products{pageInfo{endCursor}}}}'
    | 'vendor{marketplace{products{pageInfo{startCursor}}}}'
    | 'vendor{marketplace{products{pageInfo{hasNextPage}}}}'
    | 'vendor{marketplace{products{pageInfo{hasPreviousPage}}}}'
    | 'vendor{marketplace{products{totalCount}}}'
    | 'vendor{vendorTokens{edges{node{id}}}}'
    | 'vendor{vendorTokens{edges{node{creationDate}}}}'
    | 'vendor{vendorTokens{edges{node{lastChangeDate}}}}'
    | 'vendor{vendorTokens{edges{node{token}}}}'
    | 'vendor{vendorTokens{edges{node{email}}}}'
    | 'vendor{vendorTokens{edges{cursor}}}'
    | 'vendor{vendorTokens{pageInfo{endCursor}}}'
    | 'vendor{vendorTokens{pageInfo{startCursor}}}'
    | 'vendor{vendorTokens{pageInfo{hasNextPage}}}'
    | 'vendor{vendorTokens{pageInfo{hasPreviousPage}}}'
    | 'vendor{vendorTokens{totalCount}}'
    | 'vendor{products{edges{node{id}}}}'
    | 'vendor{products{edges{node{creationDate}}}}'
    | 'vendor{products{edges{node{lastChangeDate}}}}'
    | 'vendor{products{edges{node{resultsSource}}}}'
    | 'vendor{products{edges{node{kpi}}}}'
    | 'vendor{products{edges{node{systemStatus}}}}'
    | 'vendor{products{edges{node{errors}}}}'
    | 'vendor{products{edges{node{warnings}}}}'
    | 'vendor{products{edges{node{name}}}}'
    | 'vendor{products{edges{node{sku}}}}'
    | 'vendor{products{edges{node{remoteState}}}}'
    | 'vendor{products{edges{node{metadata}}}}'
    | 'vendor{products{edges{node{imported}}}}'
    | 'vendor{products{edges{cursor}}}'
    | 'vendor{products{pageInfo{endCursor}}}'
    | 'vendor{products{pageInfo{startCursor}}}'
    | 'vendor{products{pageInfo{hasNextPage}}}'
    | 'vendor{products{pageInfo{hasPreviousPage}}}'
    | 'vendor{products{totalCount}}'
    | 'systemStatus'
    | 'errors'
    | 'warnings'
    | 'name'
    | 'status'
    | 'creativeSpec'
    | 'runTimeSpec'
    | 'locationSpec'
    | 'conversionSpec'
    | 'startDate'
    | 'endDate'
    | 'productFilter'
    | 'GCPX{id}'
    | 'GCPX{creationDate}'
    | 'GCPX{lastChangeDate}'
    | 'GCPX{kpi}'
    | 'GCPX{price}'
    | 'GCPX{startDate}'
    | 'GCPX{endDate}'
    | 'GCPX{minConversions}'
    | 'GCPX{maxConversions}'
    | 'GCPX{campaignTemplate{id}}'
    | 'GCPX{campaignTemplate{creationDate}}'
    | 'GCPX{campaignTemplate{lastChangeDate}}'
    | 'GCPX{campaignTemplate{name}}'
    | 'GCPX{campaignTemplate{description}}'
    | 'GCPX{campaignTemplate{platform}}'
    | 'GCPX{campaignTemplate{remoteId}}'
    | 'GCPX{campaignTemplate{systemStatus}}'
    | 'GCPX{campaignTemplate{errors}}'
    | 'GCPX{campaignTemplate{warnings}}'
    | 'GCPX{campaignTemplate{kpi}}'
    | 'GCPX{campaignTemplate{marketplace{id}}}'
    | 'GCPX{campaignTemplate{marketplace{creationDate}}}'
    | 'GCPX{campaignTemplate{marketplace{lastChangeDate}}}'
    | 'GCPX{campaignTemplate{marketplace{name}}}'
    | 'GCPX{campaignTemplate{marketplace{systemStatus}}}'
    | 'GCPX{campaignTemplate{marketplace{errors}}}'
    | 'GCPX{campaignTemplate{marketplace{warnings}}}'
    | 'GCPX{campaignTemplate{marketplace{currencyCode}}}'
    | 'GCPX{campaignTemplate{marketplace{currencySymbol}}}'
    | 'GCPX{campaignTemplate{marketplace{currencyOffset}}}'
    | 'GCPX{campaignTemplate{marketplace{organization{id}}}}'
    | 'GCPX{campaignTemplate{marketplace{organization{creationDate}}}}'
    | 'GCPX{campaignTemplate{marketplace{organization{lastChangeDate}}}}'
    | 'GCPX{campaignTemplate{marketplace{organization{name}}}}'
    | 'GCPX{campaignTemplate{marketplace{organization{systemStatus}}}}'
    | 'GCPX{campaignTemplate{marketplace{organization{errors}}}}'
    | 'GCPX{campaignTemplate{marketplace{organization{warnings}}}}'
    | 'GCPX{campaignTemplate{marketplace{organization{tier}}}}'
    | 'GCPX{campaignTemplate{marketplace{mediaChannels{totalCount}}}}'
    | 'GCPX{campaignTemplate{marketplace{campaignTemplates{totalCount}}}}'
    | 'GCPX{campaignTemplate{marketplace{vendors{totalCount}}}}'
    | 'GCPX{campaignTemplate{marketplace{vendorTokens{totalCount}}}}'
    | 'GCPX{campaignTemplate{marketplace{creativeTemplates{totalCount}}}}'
    | 'GCPX{campaignTemplate{marketplace{products{totalCount}}}}'
    | 'GCPX{campaignTemplate{marketingCampaigns{edges{cursor}}}}'
    | 'GCPX{campaignTemplate{marketingCampaigns{pageInfo{endCursor}}}}'
    | 'GCPX{campaignTemplate{marketingCampaigns{pageInfo{startCursor}}}}'
    | 'GCPX{campaignTemplate{marketingCampaigns{pageInfo{hasNextPage}}}}'
    | 'GCPX{campaignTemplate{marketingCampaigns{pageInfo{hasPreviousPage}}}}'
    | 'GCPX{campaignTemplate{marketingCampaigns{totalCount}}}'
    | 'GCPX{campaignTemplate{GCPXHistory{edges{cursor}}}}'
    | 'GCPX{campaignTemplate{GCPXHistory{pageInfo{endCursor}}}}'
    | 'GCPX{campaignTemplate{GCPXHistory{pageInfo{startCursor}}}}'
    | 'GCPX{campaignTemplate{GCPXHistory{pageInfo{hasNextPage}}}}'
    | 'GCPX{campaignTemplate{GCPXHistory{pageInfo{hasPreviousPage}}}}'
    | 'GCPX{campaignTemplate{GCPXHistory{totalCount}}}'
    | 'GCPX{campaignTemplate{currentGCPX{id}}}'
    | 'GCPX{campaignTemplate{currentGCPX{creationDate}}}'
    | 'GCPX{campaignTemplate{currentGCPX{lastChangeDate}}}'
    | 'GCPX{campaignTemplate{currentGCPX{kpi}}}'
    | 'GCPX{campaignTemplate{currentGCPX{price}}}'
    | 'GCPX{campaignTemplate{currentGCPX{startDate}}}'
    | 'GCPX{campaignTemplate{currentGCPX{endDate}}}'
    | 'GCPX{campaignTemplate{currentGCPX{minConversions}}}'
    | 'GCPX{campaignTemplate{currentGCPX{maxConversions}}}'
    | 'GCPX{campaignTemplate{currentGCPX{campaignTemplate{id}}}}'
    | 'GCPX{campaignTemplate{currentGCPX{campaignTemplate{creationDate}}}}'
    | 'GCPX{campaignTemplate{currentGCPX{campaignTemplate{lastChangeDate}}}}'
    | 'GCPX{campaignTemplate{currentGCPX{campaignTemplate{name}}}}'
    | 'GCPX{campaignTemplate{currentGCPX{campaignTemplate{description}}}}'
    | 'GCPX{campaignTemplate{currentGCPX{campaignTemplate{platform}}}}'
    | 'GCPX{campaignTemplate{currentGCPX{campaignTemplate{remoteId}}}}'
    | 'GCPX{campaignTemplate{currentGCPX{campaignTemplate{systemStatus}}}}'
    | 'GCPX{campaignTemplate{currentGCPX{campaignTemplate{errors}}}}'
    | 'GCPX{campaignTemplate{currentGCPX{campaignTemplate{warnings}}}}'
    | 'GCPX{campaignTemplate{currentGCPX{campaignTemplate{kpi}}}}'
    | 'GCPX{campaignTemplate{currentGCPX{marketplace{id}}}}'
    | 'GCPX{campaignTemplate{currentGCPX{marketplace{creationDate}}}}'
    | 'GCPX{campaignTemplate{currentGCPX{marketplace{lastChangeDate}}}}'
    | 'GCPX{campaignTemplate{currentGCPX{marketplace{name}}}}'
    | 'GCPX{campaignTemplate{currentGCPX{marketplace{systemStatus}}}}'
    | 'GCPX{campaignTemplate{currentGCPX{marketplace{errors}}}}'
    | 'GCPX{campaignTemplate{currentGCPX{marketplace{warnings}}}}'
    | 'GCPX{campaignTemplate{currentGCPX{marketplace{currencyCode}}}}'
    | 'GCPX{campaignTemplate{currentGCPX{marketplace{currencySymbol}}}}'
    | 'GCPX{campaignTemplate{currentGCPX{marketplace{currencyOffset}}}}'
    | 'GCPX{campaignTemplate{currentGCPX{marketingCampaigns{totalCount}}}}'
    | 'GCPX{marketplace{id}}'
    | 'GCPX{marketplace{creationDate}}'
    | 'GCPX{marketplace{lastChangeDate}}'
    | 'GCPX{marketplace{name}}'
    | 'GCPX{marketplace{systemStatus}}'
    | 'GCPX{marketplace{errors}}'
    | 'GCPX{marketplace{warnings}}'
    | 'GCPX{marketplace{currencyCode}}'
    | 'GCPX{marketplace{currencySymbol}}'
    | 'GCPX{marketplace{currencyOffset}}'
    | 'GCPX{marketplace{organization{id}}}'
    | 'GCPX{marketplace{organization{creationDate}}}'
    | 'GCPX{marketplace{organization{lastChangeDate}}}'
    | 'GCPX{marketplace{organization{name}}}'
    | 'GCPX{marketplace{organization{systemStatus}}}'
    | 'GCPX{marketplace{organization{errors}}}'
    | 'GCPX{marketplace{organization{warnings}}}'
    | 'GCPX{marketplace{organization{tier}}}'
    | 'GCPX{marketplace{organization{users{totalCount}}}}'
    | 'GCPX{marketplace{organization{marketplaces{totalCount}}}}'
    | 'GCPX{marketplace{mediaChannels{edges{cursor}}}}'
    | 'GCPX{marketplace{mediaChannels{pageInfo{endCursor}}}}'
    | 'GCPX{marketplace{mediaChannels{pageInfo{startCursor}}}}'
    | 'GCPX{marketplace{mediaChannels{pageInfo{hasNextPage}}}}'
    | 'GCPX{marketplace{mediaChannels{pageInfo{hasPreviousPage}}}}'
    | 'GCPX{marketplace{mediaChannels{totalCount}}}'
    | 'GCPX{marketplace{campaignTemplates{edges{cursor}}}}'
    | 'GCPX{marketplace{campaignTemplates{pageInfo{endCursor}}}}'
    | 'GCPX{marketplace{campaignTemplates{pageInfo{startCursor}}}}'
    | 'GCPX{marketplace{campaignTemplates{pageInfo{hasNextPage}}}}'
    | 'GCPX{marketplace{campaignTemplates{pageInfo{hasPreviousPage}}}}'
    | 'GCPX{marketplace{campaignTemplates{totalCount}}}'
    | 'GCPX{marketplace{vendors{edges{cursor}}}}'
    | 'GCPX{marketplace{vendors{pageInfo{endCursor}}}}'
    | 'GCPX{marketplace{vendors{pageInfo{startCursor}}}}'
    | 'GCPX{marketplace{vendors{pageInfo{hasNextPage}}}}'
    | 'GCPX{marketplace{vendors{pageInfo{hasPreviousPage}}}}'
    | 'GCPX{marketplace{vendors{totalCount}}}'
    | 'GCPX{marketplace{vendorTokens{edges{cursor}}}}'
    | 'GCPX{marketplace{vendorTokens{pageInfo{endCursor}}}}'
    | 'GCPX{marketplace{vendorTokens{pageInfo{startCursor}}}}'
    | 'GCPX{marketplace{vendorTokens{pageInfo{hasNextPage}}}}'
    | 'GCPX{marketplace{vendorTokens{pageInfo{hasPreviousPage}}}}'
    | 'GCPX{marketplace{vendorTokens{totalCount}}}'
    | 'GCPX{marketplace{creativeTemplates{edges{cursor}}}}'
    | 'GCPX{marketplace{creativeTemplates{pageInfo{endCursor}}}}'
    | 'GCPX{marketplace{creativeTemplates{pageInfo{startCursor}}}}'
    | 'GCPX{marketplace{creativeTemplates{pageInfo{hasNextPage}}}}'
    | 'GCPX{marketplace{creativeTemplates{pageInfo{hasPreviousPage}}}}'
    | 'GCPX{marketplace{creativeTemplates{totalCount}}}'
    | 'GCPX{marketplace{products{edges{cursor}}}}'
    | 'GCPX{marketplace{products{pageInfo{endCursor}}}}'
    | 'GCPX{marketplace{products{pageInfo{startCursor}}}}'
    | 'GCPX{marketplace{products{pageInfo{hasNextPage}}}}'
    | 'GCPX{marketplace{products{pageInfo{hasPreviousPage}}}}'
    | 'GCPX{marketplace{products{totalCount}}}'
    | 'GCPX{marketingCampaigns{edges{node{id}}}}'
    | 'GCPX{marketingCampaigns{edges{node{creationDate}}}}'
    | 'GCPX{marketingCampaigns{edges{node{lastChangeDate}}}}'
    | 'GCPX{marketingCampaigns{edges{node{resultsSource}}}}'
    | 'GCPX{marketingCampaigns{edges{node{kpi}}}}'
    | 'GCPX{marketingCampaigns{edges{node{systemStatus}}}}'
    | 'GCPX{marketingCampaigns{edges{node{errors}}}}'
    | 'GCPX{marketingCampaigns{edges{node{warnings}}}}'
    | 'GCPX{marketingCampaigns{edges{node{name}}}}'
    | 'GCPX{marketingCampaigns{edges{node{status}}}}'
    | 'GCPX{marketingCampaigns{edges{node{creativeSpec}}}}'
    | 'GCPX{marketingCampaigns{edges{node{runTimeSpec}}}}'
    | 'GCPX{marketingCampaigns{edges{node{locationSpec}}}}'
    | 'GCPX{marketingCampaigns{edges{node{conversionSpec}}}}'
    | 'GCPX{marketingCampaigns{edges{node{startDate}}}}'
    | 'GCPX{marketingCampaigns{edges{node{endDate}}}}'
    | 'GCPX{marketingCampaigns{edges{node{productFilter}}}}'
    | 'GCPX{marketingCampaigns{edges{node{delivering}}}}'
    | 'GCPX{marketingCampaigns{edges{cursor}}}'
    | 'GCPX{marketingCampaigns{pageInfo{endCursor}}}'
    | 'GCPX{marketingCampaigns{pageInfo{startCursor}}}'
    | 'GCPX{marketingCampaigns{pageInfo{hasNextPage}}}'
    | 'GCPX{marketingCampaigns{pageInfo{hasPreviousPage}}}'
    | 'GCPX{marketingCampaigns{totalCount}}'
    | 'delivering'
    | 'marketingAds{edges{node{id}}}'
    | 'marketingAds{edges{node{creationDate}}}'
    | 'marketingAds{edges{node{lastChangeDate}}}'
    | 'marketingAds{edges{node{resultsSource}}}'
    | 'marketingAds{edges{node{kpi}}}'
    | 'marketingAds{edges{node{vendor{id}}}}'
    | 'marketingAds{edges{node{vendor{creationDate}}}}'
    | 'marketingAds{edges{node{vendor{lastChangeDate}}}}'
    | 'marketingAds{edges{node{vendor{name}}}}'
    | 'marketingAds{edges{node{vendor{systemStatus}}}}'
    | 'marketingAds{edges{node{vendor{errors}}}}'
    | 'marketingAds{edges{node{vendor{warnings}}}}'
    | 'marketingAds{edges{node{systemStatus}}}'
    | 'marketingAds{edges{node{errors}}}'
    | 'marketingAds{edges{node{warnings}}}'
    | 'marketingAds{edges{node{remoteId}}}'
    | 'marketingAds{edges{node{preview}}}'
    | 'marketingAds{edges{node{adPreviews{url}}}}'
    | 'marketingAds{edges{node{adPreviews{dimensions}}}}'
    | 'marketingAds{edges{node{adPreviews{placement}}}}'
    | 'marketingAds{edges{node{results{totalCount}}}}'
    | 'marketingAds{edges{node{marketingCampaign{id}}}}'
    | 'marketingAds{edges{node{marketingCampaign{creationDate}}}}'
    | 'marketingAds{edges{node{marketingCampaign{lastChangeDate}}}}'
    | 'marketingAds{edges{node{marketingCampaign{resultsSource}}}}'
    | 'marketingAds{edges{node{marketingCampaign{kpi}}}}'
    | 'marketingAds{edges{node{marketingCampaign{systemStatus}}}}'
    | 'marketingAds{edges{node{marketingCampaign{errors}}}}'
    | 'marketingAds{edges{node{marketingCampaign{warnings}}}}'
    | 'marketingAds{edges{node{marketingCampaign{name}}}}'
    | 'marketingAds{edges{node{marketingCampaign{status}}}}'
    | 'marketingAds{edges{node{marketingCampaign{creativeSpec}}}}'
    | 'marketingAds{edges{node{marketingCampaign{runTimeSpec}}}}'
    | 'marketingAds{edges{node{marketingCampaign{locationSpec}}}}'
    | 'marketingAds{edges{node{marketingCampaign{conversionSpec}}}}'
    | 'marketingAds{edges{node{marketingCampaign{startDate}}}}'
    | 'marketingAds{edges{node{marketingCampaign{endDate}}}}'
    | 'marketingAds{edges{node{marketingCampaign{productFilter}}}}'
    | 'marketingAds{edges{node{marketingCampaign{delivering}}}}'
    | 'marketingAds{edges{cursor}}'
    | 'marketingAds{pageInfo{endCursor}}'
    | 'marketingAds{pageInfo{startCursor}}'
    | 'marketingAds{pageInfo{hasNextPage}}'
    | 'marketingAds{pageInfo{hasPreviousPage}}'
    | 'marketingAds{totalCount}'
    | 'products{edges{node{id}}}'
    | 'products{edges{node{creationDate}}}'
    | 'products{edges{node{lastChangeDate}}}'
    | 'products{edges{node{resultsSource}}}'
    | 'products{edges{node{kpi}}}'
    | 'products{edges{node{vendor{id}}}}'
    | 'products{edges{node{vendor{creationDate}}}}'
    | 'products{edges{node{vendor{lastChangeDate}}}}'
    | 'products{edges{node{vendor{name}}}}'
    | 'products{edges{node{vendor{systemStatus}}}}'
    | 'products{edges{node{vendor{errors}}}}'
    | 'products{edges{node{vendor{warnings}}}}'
    | 'products{edges{node{systemStatus}}}'
    | 'products{edges{node{errors}}}'
    | 'products{edges{node{warnings}}}'
    | 'products{edges{node{name}}}'
    | 'products{edges{node{sku}}}'
    | 'products{edges{node{remoteState}}}'
    | 'products{edges{node{metadata}}}'
    | 'products{edges{node{imported}}}'
    | 'products{edges{node{results{totalCount}}}}'
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
    | 'products{edges{node{catalog{externalEventSourceIds}}}}'
    | 'products{edges{node{catalog{productSource}}}}'
    | 'products{edges{node{catalog{errors}}}}'
    | 'products{edges{node{catalog{warnings}}}}'
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
    | 'catalog{externalEventSourceIds}'
    | 'catalog{productSource}'
    | 'catalog{errors}'
    | 'catalog{warnings}'
    | 'catalog{mediaChannel{id}}'
    | 'catalog{mediaChannel{creationDate}}'
    | 'catalog{mediaChannel{lastChangeDate}}'
    | 'catalog{mediaChannel{name}}'
    | 'catalog{mediaChannel{systemStatus}}'
    | 'catalog{mediaChannel{errors}}'
    | 'catalog{mediaChannel{warnings}}'
    | 'catalog{mediaChannel{platform}}'
    | 'catalog{mediaChannel{remoteId}}'
    | 'catalog{mediaChannel{remoteState}}'
    | 'catalog{mediaChannel{currency}}'
    | 'catalog{mediaChannel{currencyCode}}'
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
    | 'catalog{mediaChannel{marketplace{warnings}}}'
    | 'catalog{mediaChannel{marketplace{currencyCode}}}'
    | 'catalog{mediaChannel{marketplace{currencySymbol}}}'
    | 'catalog{mediaChannel{marketplace{currencyOffset}}}'
    | 'catalog{mediaChannel{marketplace{organization{id}}}}'
    | 'catalog{mediaChannel{marketplace{organization{creationDate}}}}'
    | 'catalog{mediaChannel{marketplace{organization{lastChangeDate}}}}'
    | 'catalog{mediaChannel{marketplace{organization{name}}}}'
    | 'catalog{mediaChannel{marketplace{organization{systemStatus}}}}'
    | 'catalog{mediaChannel{marketplace{organization{errors}}}}'
    | 'catalog{mediaChannel{marketplace{organization{warnings}}}}'
    | 'catalog{mediaChannel{marketplace{organization{tier}}}}'
    | 'catalog{mediaChannel{marketplace{mediaChannels{totalCount}}}}'
    | 'catalog{mediaChannel{marketplace{campaignTemplates{totalCount}}}}'
    | 'catalog{mediaChannel{marketplace{vendors{totalCount}}}}'
    | 'catalog{mediaChannel{marketplace{vendorTokens{totalCount}}}}'
    | 'catalog{mediaChannel{marketplace{creativeTemplates{totalCount}}}}'
    | 'catalog{mediaChannel{marketplace{products{totalCount}}}}'
    | 'catalog{products{edges{node{id}}}}'
    | 'catalog{products{edges{node{creationDate}}}}'
    | 'catalog{products{edges{node{lastChangeDate}}}}'
    | 'catalog{products{edges{node{resultsSource}}}}'
    | 'catalog{products{edges{node{kpi}}}}'
    | 'catalog{products{edges{node{systemStatus}}}}'
    | 'catalog{products{edges{node{errors}}}}'
    | 'catalog{products{edges{node{warnings}}}}'
    | 'catalog{products{edges{node{name}}}}'
    | 'catalog{products{edges{node{sku}}}}'
    | 'catalog{products{edges{node{remoteState}}}}'
    | 'catalog{products{edges{node{metadata}}}}'
    | 'catalog{products{edges{node{imported}}}}'
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
    | 'campaignTemplate{warnings}'
    | 'campaignTemplate{kpi}'
    | 'campaignTemplate{marketplace{id}}'
    | 'campaignTemplate{marketplace{creationDate}}'
    | 'campaignTemplate{marketplace{lastChangeDate}}'
    | 'campaignTemplate{marketplace{name}}'
    | 'campaignTemplate{marketplace{systemStatus}}'
    | 'campaignTemplate{marketplace{errors}}'
    | 'campaignTemplate{marketplace{warnings}}'
    | 'campaignTemplate{marketplace{currencyCode}}'
    | 'campaignTemplate{marketplace{currencySymbol}}'
    | 'campaignTemplate{marketplace{currencyOffset}}'
    | 'campaignTemplate{marketplace{organization{id}}}'
    | 'campaignTemplate{marketplace{organization{creationDate}}}'
    | 'campaignTemplate{marketplace{organization{lastChangeDate}}}'
    | 'campaignTemplate{marketplace{organization{name}}}'
    | 'campaignTemplate{marketplace{organization{systemStatus}}}'
    | 'campaignTemplate{marketplace{organization{errors}}}'
    | 'campaignTemplate{marketplace{organization{warnings}}}'
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
    | 'campaignTemplate{marketplace{products{edges{cursor}}}}'
    | 'campaignTemplate{marketplace{products{pageInfo{endCursor}}}}'
    | 'campaignTemplate{marketplace{products{pageInfo{startCursor}}}}'
    | 'campaignTemplate{marketplace{products{pageInfo{hasNextPage}}}}'
    | 'campaignTemplate{marketplace{products{pageInfo{hasPreviousPage}}}}'
    | 'campaignTemplate{marketplace{products{totalCount}}}'
    | 'campaignTemplate{marketingCampaigns{edges{node{id}}}}'
    | 'campaignTemplate{marketingCampaigns{edges{node{creationDate}}}}'
    | 'campaignTemplate{marketingCampaigns{edges{node{lastChangeDate}}}}'
    | 'campaignTemplate{marketingCampaigns{edges{node{resultsSource}}}}'
    | 'campaignTemplate{marketingCampaigns{edges{node{kpi}}}}'
    | 'campaignTemplate{marketingCampaigns{edges{node{systemStatus}}}}'
    | 'campaignTemplate{marketingCampaigns{edges{node{errors}}}}'
    | 'campaignTemplate{marketingCampaigns{edges{node{warnings}}}}'
    | 'campaignTemplate{marketingCampaigns{edges{node{name}}}}'
    | 'campaignTemplate{marketingCampaigns{edges{node{status}}}}'
    | 'campaignTemplate{marketingCampaigns{edges{node{creativeSpec}}}}'
    | 'campaignTemplate{marketingCampaigns{edges{node{runTimeSpec}}}}'
    | 'campaignTemplate{marketingCampaigns{edges{node{locationSpec}}}}'
    | 'campaignTemplate{marketingCampaigns{edges{node{conversionSpec}}}}'
    | 'campaignTemplate{marketingCampaigns{edges{node{startDate}}}}'
    | 'campaignTemplate{marketingCampaigns{edges{node{endDate}}}}'
    | 'campaignTemplate{marketingCampaigns{edges{node{productFilter}}}}'
    | 'campaignTemplate{marketingCampaigns{edges{node{delivering}}}}'
    | 'campaignTemplate{marketingCampaigns{edges{cursor}}}'
    | 'campaignTemplate{marketingCampaigns{pageInfo{endCursor}}}'
    | 'campaignTemplate{marketingCampaigns{pageInfo{startCursor}}}'
    | 'campaignTemplate{marketingCampaigns{pageInfo{hasNextPage}}}'
    | 'campaignTemplate{marketingCampaigns{pageInfo{hasPreviousPage}}}'
    | 'campaignTemplate{marketingCampaigns{totalCount}}'
    | 'campaignTemplate{GCPXHistory{edges{node{id}}}}'
    | 'campaignTemplate{GCPXHistory{edges{node{creationDate}}}}'
    | 'campaignTemplate{GCPXHistory{edges{node{lastChangeDate}}}}'
    | 'campaignTemplate{GCPXHistory{edges{node{kpi}}}}'
    | 'campaignTemplate{GCPXHistory{edges{node{price}}}}'
    | 'campaignTemplate{GCPXHistory{edges{node{startDate}}}}'
    | 'campaignTemplate{GCPXHistory{edges{node{endDate}}}}'
    | 'campaignTemplate{GCPXHistory{edges{node{minConversions}}}}'
    | 'campaignTemplate{GCPXHistory{edges{node{maxConversions}}}}'
    | 'campaignTemplate{GCPXHistory{edges{cursor}}}'
    | 'campaignTemplate{GCPXHistory{pageInfo{endCursor}}}'
    | 'campaignTemplate{GCPXHistory{pageInfo{startCursor}}}'
    | 'campaignTemplate{GCPXHistory{pageInfo{hasNextPage}}}'
    | 'campaignTemplate{GCPXHistory{pageInfo{hasPreviousPage}}}'
    | 'campaignTemplate{GCPXHistory{totalCount}}'
    | 'campaignTemplate{currentGCPX{id}}'
    | 'campaignTemplate{currentGCPX{creationDate}}'
    | 'campaignTemplate{currentGCPX{lastChangeDate}}'
    | 'campaignTemplate{currentGCPX{kpi}}'
    | 'campaignTemplate{currentGCPX{price}}'
    | 'campaignTemplate{currentGCPX{startDate}}'
    | 'campaignTemplate{currentGCPX{endDate}}'
    | 'campaignTemplate{currentGCPX{minConversions}}'
    | 'campaignTemplate{currentGCPX{maxConversions}}'
    | 'campaignTemplate{currentGCPX{campaignTemplate{id}}}'
    | 'campaignTemplate{currentGCPX{campaignTemplate{creationDate}}}'
    | 'campaignTemplate{currentGCPX{campaignTemplate{lastChangeDate}}}'
    | 'campaignTemplate{currentGCPX{campaignTemplate{name}}}'
    | 'campaignTemplate{currentGCPX{campaignTemplate{description}}}'
    | 'campaignTemplate{currentGCPX{campaignTemplate{platform}}}'
    | 'campaignTemplate{currentGCPX{campaignTemplate{remoteId}}}'
    | 'campaignTemplate{currentGCPX{campaignTemplate{systemStatus}}}'
    | 'campaignTemplate{currentGCPX{campaignTemplate{errors}}}'
    | 'campaignTemplate{currentGCPX{campaignTemplate{warnings}}}'
    | 'campaignTemplate{currentGCPX{campaignTemplate{kpi}}}'
    | 'campaignTemplate{currentGCPX{campaignTemplate{marketplace{id}}}}'
    | 'campaignTemplate{currentGCPX{campaignTemplate{marketplace{creationDate}}}}'
    | 'campaignTemplate{currentGCPX{campaignTemplate{marketplace{lastChangeDate}}}}'
    | 'campaignTemplate{currentGCPX{campaignTemplate{marketplace{name}}}}'
    | 'campaignTemplate{currentGCPX{campaignTemplate{marketplace{systemStatus}}}}'
    | 'campaignTemplate{currentGCPX{campaignTemplate{marketplace{errors}}}}'
    | 'campaignTemplate{currentGCPX{campaignTemplate{marketplace{warnings}}}}'
    | 'campaignTemplate{currentGCPX{campaignTemplate{marketplace{currencyCode}}}}'
    | 'campaignTemplate{currentGCPX{campaignTemplate{marketplace{currencySymbol}}}}'
    | 'campaignTemplate{currentGCPX{campaignTemplate{marketplace{currencyOffset}}}}'
    | 'campaignTemplate{currentGCPX{campaignTemplate{marketingCampaigns{totalCount}}}}'
    | 'campaignTemplate{currentGCPX{campaignTemplate{GCPXHistory{totalCount}}}}'
    | 'campaignTemplate{currentGCPX{campaignTemplate{currentGCPX{id}}}}'
    | 'campaignTemplate{currentGCPX{campaignTemplate{currentGCPX{creationDate}}}}'
    | 'campaignTemplate{currentGCPX{campaignTemplate{currentGCPX{lastChangeDate}}}}'
    | 'campaignTemplate{currentGCPX{campaignTemplate{currentGCPX{kpi}}}}'
    | 'campaignTemplate{currentGCPX{campaignTemplate{currentGCPX{price}}}}'
    | 'campaignTemplate{currentGCPX{campaignTemplate{currentGCPX{startDate}}}}'
    | 'campaignTemplate{currentGCPX{campaignTemplate{currentGCPX{endDate}}}}'
    | 'campaignTemplate{currentGCPX{campaignTemplate{currentGCPX{minConversions}}}}'
    | 'campaignTemplate{currentGCPX{campaignTemplate{currentGCPX{maxConversions}}}}'
    | 'campaignTemplate{currentGCPX{marketplace{id}}}'
    | 'campaignTemplate{currentGCPX{marketplace{creationDate}}}'
    | 'campaignTemplate{currentGCPX{marketplace{lastChangeDate}}}'
    | 'campaignTemplate{currentGCPX{marketplace{name}}}'
    | 'campaignTemplate{currentGCPX{marketplace{systemStatus}}}'
    | 'campaignTemplate{currentGCPX{marketplace{errors}}}'
    | 'campaignTemplate{currentGCPX{marketplace{warnings}}}'
    | 'campaignTemplate{currentGCPX{marketplace{currencyCode}}}'
    | 'campaignTemplate{currentGCPX{marketplace{currencySymbol}}}'
    | 'campaignTemplate{currentGCPX{marketplace{currencyOffset}}}'
    | 'campaignTemplate{currentGCPX{marketplace{organization{id}}}}'
    | 'campaignTemplate{currentGCPX{marketplace{organization{creationDate}}}}'
    | 'campaignTemplate{currentGCPX{marketplace{organization{lastChangeDate}}}}'
    | 'campaignTemplate{currentGCPX{marketplace{organization{name}}}}'
    | 'campaignTemplate{currentGCPX{marketplace{organization{systemStatus}}}}'
    | 'campaignTemplate{currentGCPX{marketplace{organization{errors}}}}'
    | 'campaignTemplate{currentGCPX{marketplace{organization{warnings}}}}'
    | 'campaignTemplate{currentGCPX{marketplace{organization{tier}}}}'
    | 'campaignTemplate{currentGCPX{marketplace{mediaChannels{totalCount}}}}'
    | 'campaignTemplate{currentGCPX{marketplace{campaignTemplates{totalCount}}}}'
    | 'campaignTemplate{currentGCPX{marketplace{vendors{totalCount}}}}'
    | 'campaignTemplate{currentGCPX{marketplace{vendorTokens{totalCount}}}}'
    | 'campaignTemplate{currentGCPX{marketplace{creativeTemplates{totalCount}}}}'
    | 'campaignTemplate{currentGCPX{marketplace{products{totalCount}}}}'
    | 'campaignTemplate{currentGCPX{marketingCampaigns{edges{cursor}}}}'
    | 'campaignTemplate{currentGCPX{marketingCampaigns{pageInfo{endCursor}}}}'
    | 'campaignTemplate{currentGCPX{marketingCampaigns{pageInfo{startCursor}}}}'
    | 'campaignTemplate{currentGCPX{marketingCampaigns{pageInfo{hasNextPage}}}}'
    | 'campaignTemplate{currentGCPX{marketingCampaigns{pageInfo{hasPreviousPage}}}}'
    | 'campaignTemplate{currentGCPX{marketingCampaigns{totalCount}}}'
    | 'mediaChannel{id}'
    | 'mediaChannel{creationDate}'
    | 'mediaChannel{lastChangeDate}'
    | 'mediaChannel{name}'
    | 'mediaChannel{systemStatus}'
    | 'mediaChannel{errors}'
    | 'mediaChannel{warnings}'
    | 'mediaChannel{platform}'
    | 'mediaChannel{remoteId}'
    | 'mediaChannel{remoteState}'
    | 'mediaChannel{currency}'
    | 'mediaChannel{currencyCode}'
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
    | 'mediaChannel{catalogs{edges{node{externalEventSourceIds}}}}'
    | 'mediaChannel{catalogs{edges{node{productSource}}}}'
    | 'mediaChannel{catalogs{edges{node{errors}}}}'
    | 'mediaChannel{catalogs{edges{node{warnings}}}}'
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
    | 'mediaChannel{marketplace{warnings}}'
    | 'mediaChannel{marketplace{currencyCode}}'
    | 'mediaChannel{marketplace{currencySymbol}}'
    | 'mediaChannel{marketplace{currencyOffset}}'
    | 'mediaChannel{marketplace{organization{id}}}'
    | 'mediaChannel{marketplace{organization{creationDate}}}'
    | 'mediaChannel{marketplace{organization{lastChangeDate}}}'
    | 'mediaChannel{marketplace{organization{name}}}'
    | 'mediaChannel{marketplace{organization{systemStatus}}}'
    | 'mediaChannel{marketplace{organization{errors}}}'
    | 'mediaChannel{marketplace{organization{warnings}}}'
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
    | 'mediaChannel{marketplace{products{edges{cursor}}}}'
    | 'mediaChannel{marketplace{products{pageInfo{endCursor}}}}'
    | 'mediaChannel{marketplace{products{pageInfo{startCursor}}}}'
    | 'mediaChannel{marketplace{products{pageInfo{hasNextPage}}}}'
    | 'mediaChannel{marketplace{products{pageInfo{hasPreviousPage}}}}'
    | 'mediaChannel{marketplace{products{totalCount}}}'
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
    | 'results{edges{node{breakdownType}}}'
    | 'results{edges{node{resource{id}}}}'
    | 'results{edges{node{resource{creationDate}}}}'
    | 'results{edges{node{resource{lastChangeDate}}}}'
    | 'results{edges{node{resource{resultsSource}}}}'
    | 'results{edges{node{resource{kpi}}}}'
    | 'results{edges{node{resource{systemStatus}}}}'
    | 'results{edges{node{resource{errors}}}}'
    | 'results{edges{node{resource{warnings}}}}'
    | 'results{edges{node{breakdown{id}}}}'
    | 'results{edges{node{breakdown{creationDate}}}}'
    | 'results{edges{node{breakdown{lastChangeDate}}}}'
    | 'results{edges{node{breakdown{resultsSource}}}}'
    | 'results{edges{node{breakdown{kpi}}}}'
    | 'results{edges{node{breakdown{systemStatus}}}}'
    | 'results{edges{node{breakdown{errors}}}}'
    | 'results{edges{node{breakdown{warnings}}}}'
    | 'results{edges{node{vendor{id}}}}'
    | 'results{edges{node{vendor{creationDate}}}}'
    | 'results{edges{node{vendor{lastChangeDate}}}}'
    | 'results{edges{node{vendor{name}}}}'
    | 'results{edges{node{vendor{systemStatus}}}}'
    | 'results{edges{node{vendor{errors}}}}'
    | 'results{edges{node{vendor{warnings}}}}'
    | 'results{edges{cursor}}'
    | 'results{pageInfo{endCursor}}'
    | 'results{pageInfo{startCursor}}'
    | 'results{pageInfo{hasNextPage}}'
    | 'results{pageInfo{hasPreviousPage}}'
    | 'results{totalCount}'
    | 'notifications{edges{node{id}}}'
    | 'notifications{edges{node{creationDate}}}'
    | 'notifications{edges{node{lastChangeDate}}}'
    | 'notifications{edges{node{title}}}'
    | 'notifications{edges{node{message}}}'
    | 'notifications{edges{node{status}}}'
    | 'notifications{edges{node{severity}}}'
    | 'notifications{edges{node{code}}}'
    | 'notifications{edges{node{source}}}'
    | 'notifications{edges{node{resource{id}}}}'
    | 'notifications{edges{node{resource{creationDate}}}}'
    | 'notifications{edges{node{resource{lastChangeDate}}}}'
    | 'notifications{edges{node{resource{systemStatus}}}}'
    | 'notifications{edges{node{resource{errors}}}}'
    | 'notifications{edges{node{resource{warnings}}}}'
    | 'notifications{edges{cursor}}'
    | 'notifications{pageInfo{endCursor}}'
    | 'notifications{pageInfo{startCursor}}'
    | 'notifications{pageInfo{hasNextPage}}'
    | 'notifications{pageInfo{hasPreviousPage}}'
    | 'notifications{totalCount}';
export type MarketingAdFields = {
    id: 'id';
    creationDate: 'creationDate';
    lastChangeDate: 'lastChangeDate';
    resultsSource: 'resultsSource';
    kpi: 'kpi';
    vendor: {
        id: 'vendor{id}';
        creationDate: 'vendor{creationDate}';
        lastChangeDate: 'vendor{lastChangeDate}';
        name: 'vendor{name}';
        systemStatus: 'vendor{systemStatus}';
        errors: 'vendor{errors}';
        warnings: 'vendor{warnings}';
        marketplace: {
            id: 'vendor{marketplace{id}}';
            creationDate: 'vendor{marketplace{creationDate}}';
            lastChangeDate: 'vendor{marketplace{lastChangeDate}}';
            name: 'vendor{marketplace{name}}';
            systemStatus: 'vendor{marketplace{systemStatus}}';
            errors: 'vendor{marketplace{errors}}';
            warnings: 'vendor{marketplace{warnings}}';
            currencyCode: 'vendor{marketplace{currencyCode}}';
            currencySymbol: 'vendor{marketplace{currencySymbol}}';
            currencyOffset: 'vendor{marketplace{currencyOffset}}';
            organization: {
                id: 'vendor{marketplace{organization{id}}}';
                creationDate: 'vendor{marketplace{organization{creationDate}}}';
                lastChangeDate: 'vendor{marketplace{organization{lastChangeDate}}}';
                name: 'vendor{marketplace{organization{name}}}';
                systemStatus: 'vendor{marketplace{organization{systemStatus}}}';
                errors: 'vendor{marketplace{organization{errors}}}';
                warnings: 'vendor{marketplace{organization{warnings}}}';
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
            products: {
                edges: {
                    cursor: 'vendor{marketplace{products{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'vendor{marketplace{products{pageInfo{endCursor}}}}';
                    startCursor: 'vendor{marketplace{products{pageInfo{startCursor}}}}';
                    hasNextPage: 'vendor{marketplace{products{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'vendor{marketplace{products{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'vendor{marketplace{products{totalCount}}}';
            };
        };
        vendorTokens: {
            edges: {
                node: {
                    id: 'vendor{vendorTokens{edges{node{id}}}}';
                    creationDate: 'vendor{vendorTokens{edges{node{creationDate}}}}';
                    lastChangeDate: 'vendor{vendorTokens{edges{node{lastChangeDate}}}}';
                    token: 'vendor{vendorTokens{edges{node{token}}}}';
                    email: 'vendor{vendorTokens{edges{node{email}}}}';
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
                    resultsSource: 'vendor{products{edges{node{resultsSource}}}}';
                    kpi: 'vendor{products{edges{node{kpi}}}}';
                    systemStatus: 'vendor{products{edges{node{systemStatus}}}}';
                    errors: 'vendor{products{edges{node{errors}}}}';
                    warnings: 'vendor{products{edges{node{warnings}}}}';
                    name: 'vendor{products{edges{node{name}}}}';
                    sku: 'vendor{products{edges{node{sku}}}}';
                    remoteState: 'vendor{products{edges{node{remoteState}}}}';
                    metadata: 'vendor{products{edges{node{metadata}}}}';
                    imported: 'vendor{products{edges{node{imported}}}}';
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
    warnings: 'warnings';
    remoteId: 'remoteId';
    preview: 'preview';
    adPreviews: {
        url: 'adPreviews{url}';
        dimensions: 'adPreviews{dimensions}';
        placement: 'adPreviews{placement}';
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
                breakdownType: 'results{edges{node{breakdownType}}}';
                resource: {
                    id: 'results{edges{node{resource{id}}}}';
                    creationDate: 'results{edges{node{resource{creationDate}}}}';
                    lastChangeDate: 'results{edges{node{resource{lastChangeDate}}}}';
                    resultsSource: 'results{edges{node{resource{resultsSource}}}}';
                    kpi: 'results{edges{node{resource{kpi}}}}';
                    systemStatus: 'results{edges{node{resource{systemStatus}}}}';
                    errors: 'results{edges{node{resource{errors}}}}';
                    warnings: 'results{edges{node{resource{warnings}}}}';
                };
                breakdown: {
                    id: 'results{edges{node{breakdown{id}}}}';
                    creationDate: 'results{edges{node{breakdown{creationDate}}}}';
                    lastChangeDate: 'results{edges{node{breakdown{lastChangeDate}}}}';
                    resultsSource: 'results{edges{node{breakdown{resultsSource}}}}';
                    kpi: 'results{edges{node{breakdown{kpi}}}}';
                    systemStatus: 'results{edges{node{breakdown{systemStatus}}}}';
                    errors: 'results{edges{node{breakdown{errors}}}}';
                    warnings: 'results{edges{node{breakdown{warnings}}}}';
                };
                vendor: {
                    id: 'results{edges{node{vendor{id}}}}';
                    creationDate: 'results{edges{node{vendor{creationDate}}}}';
                    lastChangeDate: 'results{edges{node{vendor{lastChangeDate}}}}';
                    name: 'results{edges{node{vendor{name}}}}';
                    systemStatus: 'results{edges{node{vendor{systemStatus}}}}';
                    errors: 'results{edges{node{vendor{errors}}}}';
                    warnings: 'results{edges{node{vendor{warnings}}}}';
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
        kpi: 'marketingCampaign{kpi}';
        vendor: {
            id: 'marketingCampaign{vendor{id}}';
            creationDate: 'marketingCampaign{vendor{creationDate}}';
            lastChangeDate: 'marketingCampaign{vendor{lastChangeDate}}';
            name: 'marketingCampaign{vendor{name}}';
            systemStatus: 'marketingCampaign{vendor{systemStatus}}';
            errors: 'marketingCampaign{vendor{errors}}';
            warnings: 'marketingCampaign{vendor{warnings}}';
            marketplace: {
                id: 'marketingCampaign{vendor{marketplace{id}}}';
                creationDate: 'marketingCampaign{vendor{marketplace{creationDate}}}';
                lastChangeDate: 'marketingCampaign{vendor{marketplace{lastChangeDate}}}';
                name: 'marketingCampaign{vendor{marketplace{name}}}';
                systemStatus: 'marketingCampaign{vendor{marketplace{systemStatus}}}';
                errors: 'marketingCampaign{vendor{marketplace{errors}}}';
                warnings: 'marketingCampaign{vendor{marketplace{warnings}}}';
                currencyCode: 'marketingCampaign{vendor{marketplace{currencyCode}}}';
                currencySymbol: 'marketingCampaign{vendor{marketplace{currencySymbol}}}';
                currencyOffset: 'marketingCampaign{vendor{marketplace{currencyOffset}}}';
                organization: {
                    id: 'marketingCampaign{vendor{marketplace{organization{id}}}}';
                    creationDate: 'marketingCampaign{vendor{marketplace{organization{creationDate}}}}';
                    lastChangeDate: 'marketingCampaign{vendor{marketplace{organization{lastChangeDate}}}}';
                    name: 'marketingCampaign{vendor{marketplace{organization{name}}}}';
                    systemStatus: 'marketingCampaign{vendor{marketplace{organization{systemStatus}}}}';
                    errors: 'marketingCampaign{vendor{marketplace{organization{errors}}}}';
                    warnings: 'marketingCampaign{vendor{marketplace{organization{warnings}}}}';
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
                products: {
                    totalCount: 'marketingCampaign{vendor{marketplace{products{totalCount}}}}';
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
        warnings: 'marketingCampaign{warnings}';
        name: 'marketingCampaign{name}';
        status: 'marketingCampaign{status}';
        creativeSpec: 'marketingCampaign{creativeSpec}';
        runTimeSpec: 'marketingCampaign{runTimeSpec}';
        locationSpec: 'marketingCampaign{locationSpec}';
        conversionSpec: 'marketingCampaign{conversionSpec}';
        startDate: 'marketingCampaign{startDate}';
        endDate: 'marketingCampaign{endDate}';
        productFilter: 'marketingCampaign{productFilter}';
        GCPX: {
            id: 'marketingCampaign{GCPX{id}}';
            creationDate: 'marketingCampaign{GCPX{creationDate}}';
            lastChangeDate: 'marketingCampaign{GCPX{lastChangeDate}}';
            kpi: 'marketingCampaign{GCPX{kpi}}';
            price: 'marketingCampaign{GCPX{price}}';
            startDate: 'marketingCampaign{GCPX{startDate}}';
            endDate: 'marketingCampaign{GCPX{endDate}}';
            minConversions: 'marketingCampaign{GCPX{minConversions}}';
            maxConversions: 'marketingCampaign{GCPX{maxConversions}}';
            campaignTemplate: {
                id: 'marketingCampaign{GCPX{campaignTemplate{id}}}';
                creationDate: 'marketingCampaign{GCPX{campaignTemplate{creationDate}}}';
                lastChangeDate: 'marketingCampaign{GCPX{campaignTemplate{lastChangeDate}}}';
                name: 'marketingCampaign{GCPX{campaignTemplate{name}}}';
                description: 'marketingCampaign{GCPX{campaignTemplate{description}}}';
                platform: 'marketingCampaign{GCPX{campaignTemplate{platform}}}';
                remoteId: 'marketingCampaign{GCPX{campaignTemplate{remoteId}}}';
                systemStatus: 'marketingCampaign{GCPX{campaignTemplate{systemStatus}}}';
                errors: 'marketingCampaign{GCPX{campaignTemplate{errors}}}';
                warnings: 'marketingCampaign{GCPX{campaignTemplate{warnings}}}';
                kpi: 'marketingCampaign{GCPX{campaignTemplate{kpi}}}';
                marketplace: {
                    id: 'marketingCampaign{GCPX{campaignTemplate{marketplace{id}}}}';
                    creationDate: 'marketingCampaign{GCPX{campaignTemplate{marketplace{creationDate}}}}';
                    lastChangeDate: 'marketingCampaign{GCPX{campaignTemplate{marketplace{lastChangeDate}}}}';
                    name: 'marketingCampaign{GCPX{campaignTemplate{marketplace{name}}}}';
                    systemStatus: 'marketingCampaign{GCPX{campaignTemplate{marketplace{systemStatus}}}}';
                    errors: 'marketingCampaign{GCPX{campaignTemplate{marketplace{errors}}}}';
                    warnings: 'marketingCampaign{GCPX{campaignTemplate{marketplace{warnings}}}}';
                    currencyCode: 'marketingCampaign{GCPX{campaignTemplate{marketplace{currencyCode}}}}';
                    currencySymbol: 'marketingCampaign{GCPX{campaignTemplate{marketplace{currencySymbol}}}}';
                    currencyOffset: 'marketingCampaign{GCPX{campaignTemplate{marketplace{currencyOffset}}}}';
                };
                marketingCampaigns: {
                    totalCount: 'marketingCampaign{GCPX{campaignTemplate{marketingCampaigns{totalCount}}}}';
                };
                GCPXHistory: {
                    totalCount: 'marketingCampaign{GCPX{campaignTemplate{GCPXHistory{totalCount}}}}';
                };
                currentGCPX: {
                    id: 'marketingCampaign{GCPX{campaignTemplate{currentGCPX{id}}}}';
                    creationDate: 'marketingCampaign{GCPX{campaignTemplate{currentGCPX{creationDate}}}}';
                    lastChangeDate: 'marketingCampaign{GCPX{campaignTemplate{currentGCPX{lastChangeDate}}}}';
                    kpi: 'marketingCampaign{GCPX{campaignTemplate{currentGCPX{kpi}}}}';
                    price: 'marketingCampaign{GCPX{campaignTemplate{currentGCPX{price}}}}';
                    startDate: 'marketingCampaign{GCPX{campaignTemplate{currentGCPX{startDate}}}}';
                    endDate: 'marketingCampaign{GCPX{campaignTemplate{currentGCPX{endDate}}}}';
                    minConversions: 'marketingCampaign{GCPX{campaignTemplate{currentGCPX{minConversions}}}}';
                    maxConversions: 'marketingCampaign{GCPX{campaignTemplate{currentGCPX{maxConversions}}}}';
                };
            };
            marketplace: {
                id: 'marketingCampaign{GCPX{marketplace{id}}}';
                creationDate: 'marketingCampaign{GCPX{marketplace{creationDate}}}';
                lastChangeDate: 'marketingCampaign{GCPX{marketplace{lastChangeDate}}}';
                name: 'marketingCampaign{GCPX{marketplace{name}}}';
                systemStatus: 'marketingCampaign{GCPX{marketplace{systemStatus}}}';
                errors: 'marketingCampaign{GCPX{marketplace{errors}}}';
                warnings: 'marketingCampaign{GCPX{marketplace{warnings}}}';
                currencyCode: 'marketingCampaign{GCPX{marketplace{currencyCode}}}';
                currencySymbol: 'marketingCampaign{GCPX{marketplace{currencySymbol}}}';
                currencyOffset: 'marketingCampaign{GCPX{marketplace{currencyOffset}}}';
                organization: {
                    id: 'marketingCampaign{GCPX{marketplace{organization{id}}}}';
                    creationDate: 'marketingCampaign{GCPX{marketplace{organization{creationDate}}}}';
                    lastChangeDate: 'marketingCampaign{GCPX{marketplace{organization{lastChangeDate}}}}';
                    name: 'marketingCampaign{GCPX{marketplace{organization{name}}}}';
                    systemStatus: 'marketingCampaign{GCPX{marketplace{organization{systemStatus}}}}';
                    errors: 'marketingCampaign{GCPX{marketplace{organization{errors}}}}';
                    warnings: 'marketingCampaign{GCPX{marketplace{organization{warnings}}}}';
                    tier: 'marketingCampaign{GCPX{marketplace{organization{tier}}}}';
                };
                mediaChannels: {
                    totalCount: 'marketingCampaign{GCPX{marketplace{mediaChannels{totalCount}}}}';
                };
                campaignTemplates: {
                    totalCount: 'marketingCampaign{GCPX{marketplace{campaignTemplates{totalCount}}}}';
                };
                vendors: {
                    totalCount: 'marketingCampaign{GCPX{marketplace{vendors{totalCount}}}}';
                };
                vendorTokens: {
                    totalCount: 'marketingCampaign{GCPX{marketplace{vendorTokens{totalCount}}}}';
                };
                creativeTemplates: {
                    totalCount: 'marketingCampaign{GCPX{marketplace{creativeTemplates{totalCount}}}}';
                };
                products: {
                    totalCount: 'marketingCampaign{GCPX{marketplace{products{totalCount}}}}';
                };
            };
            marketingCampaigns: {
                edges: {
                    cursor: 'marketingCampaign{GCPX{marketingCampaigns{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'marketingCampaign{GCPX{marketingCampaigns{pageInfo{endCursor}}}}';
                    startCursor: 'marketingCampaign{GCPX{marketingCampaigns{pageInfo{startCursor}}}}';
                    hasNextPage: 'marketingCampaign{GCPX{marketingCampaigns{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'marketingCampaign{GCPX{marketingCampaigns{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'marketingCampaign{GCPX{marketingCampaigns{totalCount}}}';
            };
        };
        delivering: 'marketingCampaign{delivering}';
        marketingAds: {
            edges: {
                node: {
                    id: 'marketingCampaign{marketingAds{edges{node{id}}}}';
                    creationDate: 'marketingCampaign{marketingAds{edges{node{creationDate}}}}';
                    lastChangeDate: 'marketingCampaign{marketingAds{edges{node{lastChangeDate}}}}';
                    resultsSource: 'marketingCampaign{marketingAds{edges{node{resultsSource}}}}';
                    kpi: 'marketingCampaign{marketingAds{edges{node{kpi}}}}';
                    systemStatus: 'marketingCampaign{marketingAds{edges{node{systemStatus}}}}';
                    errors: 'marketingCampaign{marketingAds{edges{node{errors}}}}';
                    warnings: 'marketingCampaign{marketingAds{edges{node{warnings}}}}';
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
                    resultsSource: 'marketingCampaign{products{edges{node{resultsSource}}}}';
                    kpi: 'marketingCampaign{products{edges{node{kpi}}}}';
                    systemStatus: 'marketingCampaign{products{edges{node{systemStatus}}}}';
                    errors: 'marketingCampaign{products{edges{node{errors}}}}';
                    warnings: 'marketingCampaign{products{edges{node{warnings}}}}';
                    name: 'marketingCampaign{products{edges{node{name}}}}';
                    sku: 'marketingCampaign{products{edges{node{sku}}}}';
                    remoteState: 'marketingCampaign{products{edges{node{remoteState}}}}';
                    metadata: 'marketingCampaign{products{edges{node{metadata}}}}';
                    imported: 'marketingCampaign{products{edges{node{imported}}}}';
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
            externalEventSourceIds: 'marketingCampaign{catalog{externalEventSourceIds}}';
            productSource: 'marketingCampaign{catalog{productSource}}';
            errors: 'marketingCampaign{catalog{errors}}';
            warnings: 'marketingCampaign{catalog{warnings}}';
            mediaChannel: {
                id: 'marketingCampaign{catalog{mediaChannel{id}}}';
                creationDate: 'marketingCampaign{catalog{mediaChannel{creationDate}}}';
                lastChangeDate: 'marketingCampaign{catalog{mediaChannel{lastChangeDate}}}';
                name: 'marketingCampaign{catalog{mediaChannel{name}}}';
                systemStatus: 'marketingCampaign{catalog{mediaChannel{systemStatus}}}';
                errors: 'marketingCampaign{catalog{mediaChannel{errors}}}';
                warnings: 'marketingCampaign{catalog{mediaChannel{warnings}}}';
                platform: 'marketingCampaign{catalog{mediaChannel{platform}}}';
                remoteId: 'marketingCampaign{catalog{mediaChannel{remoteId}}}';
                remoteState: 'marketingCampaign{catalog{mediaChannel{remoteState}}}';
                currency: 'marketingCampaign{catalog{mediaChannel{currency}}}';
                currencyCode: 'marketingCampaign{catalog{mediaChannel{currencyCode}}}';
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
                    warnings: 'marketingCampaign{catalog{mediaChannel{marketplace{warnings}}}}';
                    currencyCode: 'marketingCampaign{catalog{mediaChannel{marketplace{currencyCode}}}}';
                    currencySymbol: 'marketingCampaign{catalog{mediaChannel{marketplace{currencySymbol}}}}';
                    currencyOffset: 'marketingCampaign{catalog{mediaChannel{marketplace{currencyOffset}}}}';
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
            warnings: 'marketingCampaign{campaignTemplate{warnings}}';
            kpi: 'marketingCampaign{campaignTemplate{kpi}}';
            marketplace: {
                id: 'marketingCampaign{campaignTemplate{marketplace{id}}}';
                creationDate: 'marketingCampaign{campaignTemplate{marketplace{creationDate}}}';
                lastChangeDate: 'marketingCampaign{campaignTemplate{marketplace{lastChangeDate}}}';
                name: 'marketingCampaign{campaignTemplate{marketplace{name}}}';
                systemStatus: 'marketingCampaign{campaignTemplate{marketplace{systemStatus}}}';
                errors: 'marketingCampaign{campaignTemplate{marketplace{errors}}}';
                warnings: 'marketingCampaign{campaignTemplate{marketplace{warnings}}}';
                currencyCode: 'marketingCampaign{campaignTemplate{marketplace{currencyCode}}}';
                currencySymbol: 'marketingCampaign{campaignTemplate{marketplace{currencySymbol}}}';
                currencyOffset: 'marketingCampaign{campaignTemplate{marketplace{currencyOffset}}}';
                organization: {
                    id: 'marketingCampaign{campaignTemplate{marketplace{organization{id}}}}';
                    creationDate: 'marketingCampaign{campaignTemplate{marketplace{organization{creationDate}}}}';
                    lastChangeDate: 'marketingCampaign{campaignTemplate{marketplace{organization{lastChangeDate}}}}';
                    name: 'marketingCampaign{campaignTemplate{marketplace{organization{name}}}}';
                    systemStatus: 'marketingCampaign{campaignTemplate{marketplace{organization{systemStatus}}}}';
                    errors: 'marketingCampaign{campaignTemplate{marketplace{organization{errors}}}}';
                    warnings: 'marketingCampaign{campaignTemplate{marketplace{organization{warnings}}}}';
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
                products: {
                    totalCount: 'marketingCampaign{campaignTemplate{marketplace{products{totalCount}}}}';
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
            GCPXHistory: {
                edges: {
                    cursor: 'marketingCampaign{campaignTemplate{GCPXHistory{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'marketingCampaign{campaignTemplate{GCPXHistory{pageInfo{endCursor}}}}';
                    startCursor: 'marketingCampaign{campaignTemplate{GCPXHistory{pageInfo{startCursor}}}}';
                    hasNextPage: 'marketingCampaign{campaignTemplate{GCPXHistory{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'marketingCampaign{campaignTemplate{GCPXHistory{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'marketingCampaign{campaignTemplate{GCPXHistory{totalCount}}}';
            };
            currentGCPX: {
                id: 'marketingCampaign{campaignTemplate{currentGCPX{id}}}';
                creationDate: 'marketingCampaign{campaignTemplate{currentGCPX{creationDate}}}';
                lastChangeDate: 'marketingCampaign{campaignTemplate{currentGCPX{lastChangeDate}}}';
                kpi: 'marketingCampaign{campaignTemplate{currentGCPX{kpi}}}';
                price: 'marketingCampaign{campaignTemplate{currentGCPX{price}}}';
                startDate: 'marketingCampaign{campaignTemplate{currentGCPX{startDate}}}';
                endDate: 'marketingCampaign{campaignTemplate{currentGCPX{endDate}}}';
                minConversions: 'marketingCampaign{campaignTemplate{currentGCPX{minConversions}}}';
                maxConversions: 'marketingCampaign{campaignTemplate{currentGCPX{maxConversions}}}';
                campaignTemplate: {
                    id: 'marketingCampaign{campaignTemplate{currentGCPX{campaignTemplate{id}}}}';
                    creationDate: 'marketingCampaign{campaignTemplate{currentGCPX{campaignTemplate{creationDate}}}}';
                    lastChangeDate: 'marketingCampaign{campaignTemplate{currentGCPX{campaignTemplate{lastChangeDate}}}}';
                    name: 'marketingCampaign{campaignTemplate{currentGCPX{campaignTemplate{name}}}}';
                    description: 'marketingCampaign{campaignTemplate{currentGCPX{campaignTemplate{description}}}}';
                    platform: 'marketingCampaign{campaignTemplate{currentGCPX{campaignTemplate{platform}}}}';
                    remoteId: 'marketingCampaign{campaignTemplate{currentGCPX{campaignTemplate{remoteId}}}}';
                    systemStatus: 'marketingCampaign{campaignTemplate{currentGCPX{campaignTemplate{systemStatus}}}}';
                    errors: 'marketingCampaign{campaignTemplate{currentGCPX{campaignTemplate{errors}}}}';
                    warnings: 'marketingCampaign{campaignTemplate{currentGCPX{campaignTemplate{warnings}}}}';
                    kpi: 'marketingCampaign{campaignTemplate{currentGCPX{campaignTemplate{kpi}}}}';
                };
                marketplace: {
                    id: 'marketingCampaign{campaignTemplate{currentGCPX{marketplace{id}}}}';
                    creationDate: 'marketingCampaign{campaignTemplate{currentGCPX{marketplace{creationDate}}}}';
                    lastChangeDate: 'marketingCampaign{campaignTemplate{currentGCPX{marketplace{lastChangeDate}}}}';
                    name: 'marketingCampaign{campaignTemplate{currentGCPX{marketplace{name}}}}';
                    systemStatus: 'marketingCampaign{campaignTemplate{currentGCPX{marketplace{systemStatus}}}}';
                    errors: 'marketingCampaign{campaignTemplate{currentGCPX{marketplace{errors}}}}';
                    warnings: 'marketingCampaign{campaignTemplate{currentGCPX{marketplace{warnings}}}}';
                    currencyCode: 'marketingCampaign{campaignTemplate{currentGCPX{marketplace{currencyCode}}}}';
                    currencySymbol: 'marketingCampaign{campaignTemplate{currentGCPX{marketplace{currencySymbol}}}}';
                    currencyOffset: 'marketingCampaign{campaignTemplate{currentGCPX{marketplace{currencyOffset}}}}';
                };
                marketingCampaigns: {
                    totalCount: 'marketingCampaign{campaignTemplate{currentGCPX{marketingCampaigns{totalCount}}}}';
                };
            };
        };
        mediaChannel: {
            id: 'marketingCampaign{mediaChannel{id}}';
            creationDate: 'marketingCampaign{mediaChannel{creationDate}}';
            lastChangeDate: 'marketingCampaign{mediaChannel{lastChangeDate}}';
            name: 'marketingCampaign{mediaChannel{name}}';
            systemStatus: 'marketingCampaign{mediaChannel{systemStatus}}';
            errors: 'marketingCampaign{mediaChannel{errors}}';
            warnings: 'marketingCampaign{mediaChannel{warnings}}';
            platform: 'marketingCampaign{mediaChannel{platform}}';
            remoteId: 'marketingCampaign{mediaChannel{remoteId}}';
            remoteState: 'marketingCampaign{mediaChannel{remoteState}}';
            currency: 'marketingCampaign{mediaChannel{currency}}';
            currencyCode: 'marketingCampaign{mediaChannel{currencyCode}}';
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
                warnings: 'marketingCampaign{mediaChannel{marketplace{warnings}}}';
                currencyCode: 'marketingCampaign{mediaChannel{marketplace{currencyCode}}}';
                currencySymbol: 'marketingCampaign{mediaChannel{marketplace{currencySymbol}}}';
                currencyOffset: 'marketingCampaign{mediaChannel{marketplace{currencyOffset}}}';
                organization: {
                    id: 'marketingCampaign{mediaChannel{marketplace{organization{id}}}}';
                    creationDate: 'marketingCampaign{mediaChannel{marketplace{organization{creationDate}}}}';
                    lastChangeDate: 'marketingCampaign{mediaChannel{marketplace{organization{lastChangeDate}}}}';
                    name: 'marketingCampaign{mediaChannel{marketplace{organization{name}}}}';
                    systemStatus: 'marketingCampaign{mediaChannel{marketplace{organization{systemStatus}}}}';
                    errors: 'marketingCampaign{mediaChannel{marketplace{organization{errors}}}}';
                    warnings: 'marketingCampaign{mediaChannel{marketplace{organization{warnings}}}}';
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
                products: {
                    totalCount: 'marketingCampaign{mediaChannel{marketplace{products{totalCount}}}}';
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
                    breakdownType: 'marketingCampaign{results{edges{node{breakdownType}}}}';
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
        notifications: {
            edges: {
                node: {
                    id: 'marketingCampaign{notifications{edges{node{id}}}}';
                    creationDate: 'marketingCampaign{notifications{edges{node{creationDate}}}}';
                    lastChangeDate: 'marketingCampaign{notifications{edges{node{lastChangeDate}}}}';
                    title: 'marketingCampaign{notifications{edges{node{title}}}}';
                    message: 'marketingCampaign{notifications{edges{node{message}}}}';
                    status: 'marketingCampaign{notifications{edges{node{status}}}}';
                    severity: 'marketingCampaign{notifications{edges{node{severity}}}}';
                    code: 'marketingCampaign{notifications{edges{node{code}}}}';
                    source: 'marketingCampaign{notifications{edges{node{source}}}}';
                };
                cursor: 'marketingCampaign{notifications{edges{cursor}}}';
            };
            pageInfo: {
                endCursor: 'marketingCampaign{notifications{pageInfo{endCursor}}}';
                startCursor: 'marketingCampaign{notifications{pageInfo{startCursor}}}';
                hasNextPage: 'marketingCampaign{notifications{pageInfo{hasNextPage}}}';
                hasPreviousPage: 'marketingCampaign{notifications{pageInfo{hasPreviousPage}}}';
            };
            totalCount: 'marketingCampaign{notifications{totalCount}}';
        };
    };
};
export const MarketingAdFields: MarketingAdFields = {
    id: 'id',
    creationDate: 'creationDate',
    lastChangeDate: 'lastChangeDate',
    resultsSource: 'resultsSource',
    kpi: 'kpi',
    vendor: {
        id: 'vendor{id}',
        creationDate: 'vendor{creationDate}',
        lastChangeDate: 'vendor{lastChangeDate}',
        name: 'vendor{name}',
        systemStatus: 'vendor{systemStatus}',
        errors: 'vendor{errors}',
        warnings: 'vendor{warnings}',
        marketplace: {
            id: 'vendor{marketplace{id}}',
            creationDate: 'vendor{marketplace{creationDate}}',
            lastChangeDate: 'vendor{marketplace{lastChangeDate}}',
            name: 'vendor{marketplace{name}}',
            systemStatus: 'vendor{marketplace{systemStatus}}',
            errors: 'vendor{marketplace{errors}}',
            warnings: 'vendor{marketplace{warnings}}',
            currencyCode: 'vendor{marketplace{currencyCode}}',
            currencySymbol: 'vendor{marketplace{currencySymbol}}',
            currencyOffset: 'vendor{marketplace{currencyOffset}}',
            organization: {
                id: 'vendor{marketplace{organization{id}}}',
                creationDate: 'vendor{marketplace{organization{creationDate}}}',
                lastChangeDate:
                    'vendor{marketplace{organization{lastChangeDate}}}',
                name: 'vendor{marketplace{organization{name}}}',
                systemStatus: 'vendor{marketplace{organization{systemStatus}}}',
                errors: 'vendor{marketplace{organization{errors}}}',
                warnings: 'vendor{marketplace{organization{warnings}}}',
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
            products: {
                edges: {
                    cursor: 'vendor{marketplace{products{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'vendor{marketplace{products{pageInfo{endCursor}}}}',
                    startCursor:
                        'vendor{marketplace{products{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'vendor{marketplace{products{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'vendor{marketplace{products{pageInfo{hasPreviousPage}}}}',
                },
                totalCount: 'vendor{marketplace{products{totalCount}}}',
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
                    email: 'vendor{vendorTokens{edges{node{email}}}}',
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
                    resultsSource:
                        'vendor{products{edges{node{resultsSource}}}}',
                    kpi: 'vendor{products{edges{node{kpi}}}}',
                    systemStatus: 'vendor{products{edges{node{systemStatus}}}}',
                    errors: 'vendor{products{edges{node{errors}}}}',
                    warnings: 'vendor{products{edges{node{warnings}}}}',
                    name: 'vendor{products{edges{node{name}}}}',
                    sku: 'vendor{products{edges{node{sku}}}}',
                    remoteState: 'vendor{products{edges{node{remoteState}}}}',
                    metadata: 'vendor{products{edges{node{metadata}}}}',
                    imported: 'vendor{products{edges{node{imported}}}}',
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
    warnings: 'warnings',
    remoteId: 'remoteId',
    preview: 'preview',
    adPreviews: {
        url: 'adPreviews{url}',
        dimensions: 'adPreviews{dimensions}',
        placement: 'adPreviews{placement}',
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
                breakdownType: 'results{edges{node{breakdownType}}}',
                resource: {
                    id: 'results{edges{node{resource{id}}}}',
                    creationDate:
                        'results{edges{node{resource{creationDate}}}}',
                    lastChangeDate:
                        'results{edges{node{resource{lastChangeDate}}}}',
                    resultsSource:
                        'results{edges{node{resource{resultsSource}}}}',
                    kpi: 'results{edges{node{resource{kpi}}}}',
                    systemStatus:
                        'results{edges{node{resource{systemStatus}}}}',
                    errors: 'results{edges{node{resource{errors}}}}',
                    warnings: 'results{edges{node{resource{warnings}}}}',
                },
                breakdown: {
                    id: 'results{edges{node{breakdown{id}}}}',
                    creationDate:
                        'results{edges{node{breakdown{creationDate}}}}',
                    lastChangeDate:
                        'results{edges{node{breakdown{lastChangeDate}}}}',
                    resultsSource:
                        'results{edges{node{breakdown{resultsSource}}}}',
                    kpi: 'results{edges{node{breakdown{kpi}}}}',
                    systemStatus:
                        'results{edges{node{breakdown{systemStatus}}}}',
                    errors: 'results{edges{node{breakdown{errors}}}}',
                    warnings: 'results{edges{node{breakdown{warnings}}}}',
                },
                vendor: {
                    id: 'results{edges{node{vendor{id}}}}',
                    creationDate: 'results{edges{node{vendor{creationDate}}}}',
                    lastChangeDate:
                        'results{edges{node{vendor{lastChangeDate}}}}',
                    name: 'results{edges{node{vendor{name}}}}',
                    systemStatus: 'results{edges{node{vendor{systemStatus}}}}',
                    errors: 'results{edges{node{vendor{errors}}}}',
                    warnings: 'results{edges{node{vendor{warnings}}}}',
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
        kpi: 'marketingCampaign{kpi}',
        vendor: {
            id: 'marketingCampaign{vendor{id}}',
            creationDate: 'marketingCampaign{vendor{creationDate}}',
            lastChangeDate: 'marketingCampaign{vendor{lastChangeDate}}',
            name: 'marketingCampaign{vendor{name}}',
            systemStatus: 'marketingCampaign{vendor{systemStatus}}',
            errors: 'marketingCampaign{vendor{errors}}',
            warnings: 'marketingCampaign{vendor{warnings}}',
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
                warnings: 'marketingCampaign{vendor{marketplace{warnings}}}',
                currencyCode:
                    'marketingCampaign{vendor{marketplace{currencyCode}}}',
                currencySymbol:
                    'marketingCampaign{vendor{marketplace{currencySymbol}}}',
                currencyOffset:
                    'marketingCampaign{vendor{marketplace{currencyOffset}}}',
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
                    warnings:
                        'marketingCampaign{vendor{marketplace{organization{warnings}}}}',
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
                products: {
                    totalCount:
                        'marketingCampaign{vendor{marketplace{products{totalCount}}}}',
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
        warnings: 'marketingCampaign{warnings}',
        name: 'marketingCampaign{name}',
        status: 'marketingCampaign{status}',
        creativeSpec: 'marketingCampaign{creativeSpec}',
        runTimeSpec: 'marketingCampaign{runTimeSpec}',
        locationSpec: 'marketingCampaign{locationSpec}',
        conversionSpec: 'marketingCampaign{conversionSpec}',
        startDate: 'marketingCampaign{startDate}',
        endDate: 'marketingCampaign{endDate}',
        productFilter: 'marketingCampaign{productFilter}',
        GCPX: {
            id: 'marketingCampaign{GCPX{id}}',
            creationDate: 'marketingCampaign{GCPX{creationDate}}',
            lastChangeDate: 'marketingCampaign{GCPX{lastChangeDate}}',
            kpi: 'marketingCampaign{GCPX{kpi}}',
            price: 'marketingCampaign{GCPX{price}}',
            startDate: 'marketingCampaign{GCPX{startDate}}',
            endDate: 'marketingCampaign{GCPX{endDate}}',
            minConversions: 'marketingCampaign{GCPX{minConversions}}',
            maxConversions: 'marketingCampaign{GCPX{maxConversions}}',
            campaignTemplate: {
                id: 'marketingCampaign{GCPX{campaignTemplate{id}}}',
                creationDate:
                    'marketingCampaign{GCPX{campaignTemplate{creationDate}}}',
                lastChangeDate:
                    'marketingCampaign{GCPX{campaignTemplate{lastChangeDate}}}',
                name: 'marketingCampaign{GCPX{campaignTemplate{name}}}',
                description:
                    'marketingCampaign{GCPX{campaignTemplate{description}}}',
                platform: 'marketingCampaign{GCPX{campaignTemplate{platform}}}',
                remoteId: 'marketingCampaign{GCPX{campaignTemplate{remoteId}}}',
                systemStatus:
                    'marketingCampaign{GCPX{campaignTemplate{systemStatus}}}',
                errors: 'marketingCampaign{GCPX{campaignTemplate{errors}}}',
                warnings: 'marketingCampaign{GCPX{campaignTemplate{warnings}}}',
                kpi: 'marketingCampaign{GCPX{campaignTemplate{kpi}}}',
                marketplace: {
                    id:
                        'marketingCampaign{GCPX{campaignTemplate{marketplace{id}}}}',
                    creationDate:
                        'marketingCampaign{GCPX{campaignTemplate{marketplace{creationDate}}}}',
                    lastChangeDate:
                        'marketingCampaign{GCPX{campaignTemplate{marketplace{lastChangeDate}}}}',
                    name:
                        'marketingCampaign{GCPX{campaignTemplate{marketplace{name}}}}',
                    systemStatus:
                        'marketingCampaign{GCPX{campaignTemplate{marketplace{systemStatus}}}}',
                    errors:
                        'marketingCampaign{GCPX{campaignTemplate{marketplace{errors}}}}',
                    warnings:
                        'marketingCampaign{GCPX{campaignTemplate{marketplace{warnings}}}}',
                    currencyCode:
                        'marketingCampaign{GCPX{campaignTemplate{marketplace{currencyCode}}}}',
                    currencySymbol:
                        'marketingCampaign{GCPX{campaignTemplate{marketplace{currencySymbol}}}}',
                    currencyOffset:
                        'marketingCampaign{GCPX{campaignTemplate{marketplace{currencyOffset}}}}',
                },
                marketingCampaigns: {
                    totalCount:
                        'marketingCampaign{GCPX{campaignTemplate{marketingCampaigns{totalCount}}}}',
                },
                GCPXHistory: {
                    totalCount:
                        'marketingCampaign{GCPX{campaignTemplate{GCPXHistory{totalCount}}}}',
                },
                currentGCPX: {
                    id:
                        'marketingCampaign{GCPX{campaignTemplate{currentGCPX{id}}}}',
                    creationDate:
                        'marketingCampaign{GCPX{campaignTemplate{currentGCPX{creationDate}}}}',
                    lastChangeDate:
                        'marketingCampaign{GCPX{campaignTemplate{currentGCPX{lastChangeDate}}}}',
                    kpi:
                        'marketingCampaign{GCPX{campaignTemplate{currentGCPX{kpi}}}}',
                    price:
                        'marketingCampaign{GCPX{campaignTemplate{currentGCPX{price}}}}',
                    startDate:
                        'marketingCampaign{GCPX{campaignTemplate{currentGCPX{startDate}}}}',
                    endDate:
                        'marketingCampaign{GCPX{campaignTemplate{currentGCPX{endDate}}}}',
                    minConversions:
                        'marketingCampaign{GCPX{campaignTemplate{currentGCPX{minConversions}}}}',
                    maxConversions:
                        'marketingCampaign{GCPX{campaignTemplate{currentGCPX{maxConversions}}}}',
                },
            },
            marketplace: {
                id: 'marketingCampaign{GCPX{marketplace{id}}}',
                creationDate:
                    'marketingCampaign{GCPX{marketplace{creationDate}}}',
                lastChangeDate:
                    'marketingCampaign{GCPX{marketplace{lastChangeDate}}}',
                name: 'marketingCampaign{GCPX{marketplace{name}}}',
                systemStatus:
                    'marketingCampaign{GCPX{marketplace{systemStatus}}}',
                errors: 'marketingCampaign{GCPX{marketplace{errors}}}',
                warnings: 'marketingCampaign{GCPX{marketplace{warnings}}}',
                currencyCode:
                    'marketingCampaign{GCPX{marketplace{currencyCode}}}',
                currencySymbol:
                    'marketingCampaign{GCPX{marketplace{currencySymbol}}}',
                currencyOffset:
                    'marketingCampaign{GCPX{marketplace{currencyOffset}}}',
                organization: {
                    id:
                        'marketingCampaign{GCPX{marketplace{organization{id}}}}',
                    creationDate:
                        'marketingCampaign{GCPX{marketplace{organization{creationDate}}}}',
                    lastChangeDate:
                        'marketingCampaign{GCPX{marketplace{organization{lastChangeDate}}}}',
                    name:
                        'marketingCampaign{GCPX{marketplace{organization{name}}}}',
                    systemStatus:
                        'marketingCampaign{GCPX{marketplace{organization{systemStatus}}}}',
                    errors:
                        'marketingCampaign{GCPX{marketplace{organization{errors}}}}',
                    warnings:
                        'marketingCampaign{GCPX{marketplace{organization{warnings}}}}',
                    tier:
                        'marketingCampaign{GCPX{marketplace{organization{tier}}}}',
                },
                mediaChannels: {
                    totalCount:
                        'marketingCampaign{GCPX{marketplace{mediaChannels{totalCount}}}}',
                },
                campaignTemplates: {
                    totalCount:
                        'marketingCampaign{GCPX{marketplace{campaignTemplates{totalCount}}}}',
                },
                vendors: {
                    totalCount:
                        'marketingCampaign{GCPX{marketplace{vendors{totalCount}}}}',
                },
                vendorTokens: {
                    totalCount:
                        'marketingCampaign{GCPX{marketplace{vendorTokens{totalCount}}}}',
                },
                creativeTemplates: {
                    totalCount:
                        'marketingCampaign{GCPX{marketplace{creativeTemplates{totalCount}}}}',
                },
                products: {
                    totalCount:
                        'marketingCampaign{GCPX{marketplace{products{totalCount}}}}',
                },
            },
            marketingCampaigns: {
                edges: {
                    cursor:
                        'marketingCampaign{GCPX{marketingCampaigns{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'marketingCampaign{GCPX{marketingCampaigns{pageInfo{endCursor}}}}',
                    startCursor:
                        'marketingCampaign{GCPX{marketingCampaigns{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'marketingCampaign{GCPX{marketingCampaigns{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'marketingCampaign{GCPX{marketingCampaigns{pageInfo{hasPreviousPage}}}}',
                },
                totalCount:
                    'marketingCampaign{GCPX{marketingCampaigns{totalCount}}}',
            },
        },
        delivering: 'marketingCampaign{delivering}',
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
                    kpi: 'marketingCampaign{marketingAds{edges{node{kpi}}}}',
                    systemStatus:
                        'marketingCampaign{marketingAds{edges{node{systemStatus}}}}',
                    errors:
                        'marketingCampaign{marketingAds{edges{node{errors}}}}',
                    warnings:
                        'marketingCampaign{marketingAds{edges{node{warnings}}}}',
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
                    resultsSource:
                        'marketingCampaign{products{edges{node{resultsSource}}}}',
                    kpi: 'marketingCampaign{products{edges{node{kpi}}}}',
                    systemStatus:
                        'marketingCampaign{products{edges{node{systemStatus}}}}',
                    errors: 'marketingCampaign{products{edges{node{errors}}}}',
                    warnings:
                        'marketingCampaign{products{edges{node{warnings}}}}',
                    name: 'marketingCampaign{products{edges{node{name}}}}',
                    sku: 'marketingCampaign{products{edges{node{sku}}}}',
                    remoteState:
                        'marketingCampaign{products{edges{node{remoteState}}}}',
                    metadata:
                        'marketingCampaign{products{edges{node{metadata}}}}',
                    imported:
                        'marketingCampaign{products{edges{node{imported}}}}',
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
            externalEventSourceIds:
                'marketingCampaign{catalog{externalEventSourceIds}}',
            productSource: 'marketingCampaign{catalog{productSource}}',
            errors: 'marketingCampaign{catalog{errors}}',
            warnings: 'marketingCampaign{catalog{warnings}}',
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
                warnings: 'marketingCampaign{catalog{mediaChannel{warnings}}}',
                platform: 'marketingCampaign{catalog{mediaChannel{platform}}}',
                remoteId: 'marketingCampaign{catalog{mediaChannel{remoteId}}}',
                remoteState:
                    'marketingCampaign{catalog{mediaChannel{remoteState}}}',
                currency: 'marketingCampaign{catalog{mediaChannel{currency}}}',
                currencyCode:
                    'marketingCampaign{catalog{mediaChannel{currencyCode}}}',
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
                    warnings:
                        'marketingCampaign{catalog{mediaChannel{marketplace{warnings}}}}',
                    currencyCode:
                        'marketingCampaign{catalog{mediaChannel{marketplace{currencyCode}}}}',
                    currencySymbol:
                        'marketingCampaign{catalog{mediaChannel{marketplace{currencySymbol}}}}',
                    currencyOffset:
                        'marketingCampaign{catalog{mediaChannel{marketplace{currencyOffset}}}}',
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
            warnings: 'marketingCampaign{campaignTemplate{warnings}}',
            kpi: 'marketingCampaign{campaignTemplate{kpi}}',
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
                warnings:
                    'marketingCampaign{campaignTemplate{marketplace{warnings}}}',
                currencyCode:
                    'marketingCampaign{campaignTemplate{marketplace{currencyCode}}}',
                currencySymbol:
                    'marketingCampaign{campaignTemplate{marketplace{currencySymbol}}}',
                currencyOffset:
                    'marketingCampaign{campaignTemplate{marketplace{currencyOffset}}}',
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
                    warnings:
                        'marketingCampaign{campaignTemplate{marketplace{organization{warnings}}}}',
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
                products: {
                    totalCount:
                        'marketingCampaign{campaignTemplate{marketplace{products{totalCount}}}}',
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
            GCPXHistory: {
                edges: {
                    cursor:
                        'marketingCampaign{campaignTemplate{GCPXHistory{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'marketingCampaign{campaignTemplate{GCPXHistory{pageInfo{endCursor}}}}',
                    startCursor:
                        'marketingCampaign{campaignTemplate{GCPXHistory{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'marketingCampaign{campaignTemplate{GCPXHistory{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'marketingCampaign{campaignTemplate{GCPXHistory{pageInfo{hasPreviousPage}}}}',
                },
                totalCount:
                    'marketingCampaign{campaignTemplate{GCPXHistory{totalCount}}}',
            },
            currentGCPX: {
                id: 'marketingCampaign{campaignTemplate{currentGCPX{id}}}',
                creationDate:
                    'marketingCampaign{campaignTemplate{currentGCPX{creationDate}}}',
                lastChangeDate:
                    'marketingCampaign{campaignTemplate{currentGCPX{lastChangeDate}}}',
                kpi: 'marketingCampaign{campaignTemplate{currentGCPX{kpi}}}',
                price:
                    'marketingCampaign{campaignTemplate{currentGCPX{price}}}',
                startDate:
                    'marketingCampaign{campaignTemplate{currentGCPX{startDate}}}',
                endDate:
                    'marketingCampaign{campaignTemplate{currentGCPX{endDate}}}',
                minConversions:
                    'marketingCampaign{campaignTemplate{currentGCPX{minConversions}}}',
                maxConversions:
                    'marketingCampaign{campaignTemplate{currentGCPX{maxConversions}}}',
                campaignTemplate: {
                    id:
                        'marketingCampaign{campaignTemplate{currentGCPX{campaignTemplate{id}}}}',
                    creationDate:
                        'marketingCampaign{campaignTemplate{currentGCPX{campaignTemplate{creationDate}}}}',
                    lastChangeDate:
                        'marketingCampaign{campaignTemplate{currentGCPX{campaignTemplate{lastChangeDate}}}}',
                    name:
                        'marketingCampaign{campaignTemplate{currentGCPX{campaignTemplate{name}}}}',
                    description:
                        'marketingCampaign{campaignTemplate{currentGCPX{campaignTemplate{description}}}}',
                    platform:
                        'marketingCampaign{campaignTemplate{currentGCPX{campaignTemplate{platform}}}}',
                    remoteId:
                        'marketingCampaign{campaignTemplate{currentGCPX{campaignTemplate{remoteId}}}}',
                    systemStatus:
                        'marketingCampaign{campaignTemplate{currentGCPX{campaignTemplate{systemStatus}}}}',
                    errors:
                        'marketingCampaign{campaignTemplate{currentGCPX{campaignTemplate{errors}}}}',
                    warnings:
                        'marketingCampaign{campaignTemplate{currentGCPX{campaignTemplate{warnings}}}}',
                    kpi:
                        'marketingCampaign{campaignTemplate{currentGCPX{campaignTemplate{kpi}}}}',
                },
                marketplace: {
                    id:
                        'marketingCampaign{campaignTemplate{currentGCPX{marketplace{id}}}}',
                    creationDate:
                        'marketingCampaign{campaignTemplate{currentGCPX{marketplace{creationDate}}}}',
                    lastChangeDate:
                        'marketingCampaign{campaignTemplate{currentGCPX{marketplace{lastChangeDate}}}}',
                    name:
                        'marketingCampaign{campaignTemplate{currentGCPX{marketplace{name}}}}',
                    systemStatus:
                        'marketingCampaign{campaignTemplate{currentGCPX{marketplace{systemStatus}}}}',
                    errors:
                        'marketingCampaign{campaignTemplate{currentGCPX{marketplace{errors}}}}',
                    warnings:
                        'marketingCampaign{campaignTemplate{currentGCPX{marketplace{warnings}}}}',
                    currencyCode:
                        'marketingCampaign{campaignTemplate{currentGCPX{marketplace{currencyCode}}}}',
                    currencySymbol:
                        'marketingCampaign{campaignTemplate{currentGCPX{marketplace{currencySymbol}}}}',
                    currencyOffset:
                        'marketingCampaign{campaignTemplate{currentGCPX{marketplace{currencyOffset}}}}',
                },
                marketingCampaigns: {
                    totalCount:
                        'marketingCampaign{campaignTemplate{currentGCPX{marketingCampaigns{totalCount}}}}',
                },
            },
        },
        mediaChannel: {
            id: 'marketingCampaign{mediaChannel{id}}',
            creationDate: 'marketingCampaign{mediaChannel{creationDate}}',
            lastChangeDate: 'marketingCampaign{mediaChannel{lastChangeDate}}',
            name: 'marketingCampaign{mediaChannel{name}}',
            systemStatus: 'marketingCampaign{mediaChannel{systemStatus}}',
            errors: 'marketingCampaign{mediaChannel{errors}}',
            warnings: 'marketingCampaign{mediaChannel{warnings}}',
            platform: 'marketingCampaign{mediaChannel{platform}}',
            remoteId: 'marketingCampaign{mediaChannel{remoteId}}',
            remoteState: 'marketingCampaign{mediaChannel{remoteState}}',
            currency: 'marketingCampaign{mediaChannel{currency}}',
            currencyCode: 'marketingCampaign{mediaChannel{currencyCode}}',
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
                warnings:
                    'marketingCampaign{mediaChannel{marketplace{warnings}}}',
                currencyCode:
                    'marketingCampaign{mediaChannel{marketplace{currencyCode}}}',
                currencySymbol:
                    'marketingCampaign{mediaChannel{marketplace{currencySymbol}}}',
                currencyOffset:
                    'marketingCampaign{mediaChannel{marketplace{currencyOffset}}}',
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
                    warnings:
                        'marketingCampaign{mediaChannel{marketplace{organization{warnings}}}}',
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
                products: {
                    totalCount:
                        'marketingCampaign{mediaChannel{marketplace{products{totalCount}}}}',
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
                    breakdownType:
                        'marketingCampaign{results{edges{node{breakdownType}}}}',
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
        notifications: {
            edges: {
                node: {
                    id: 'marketingCampaign{notifications{edges{node{id}}}}',
                    creationDate:
                        'marketingCampaign{notifications{edges{node{creationDate}}}}',
                    lastChangeDate:
                        'marketingCampaign{notifications{edges{node{lastChangeDate}}}}',
                    title:
                        'marketingCampaign{notifications{edges{node{title}}}}',
                    message:
                        'marketingCampaign{notifications{edges{node{message}}}}',
                    status:
                        'marketingCampaign{notifications{edges{node{status}}}}',
                    severity:
                        'marketingCampaign{notifications{edges{node{severity}}}}',
                    code: 'marketingCampaign{notifications{edges{node{code}}}}',
                    source:
                        'marketingCampaign{notifications{edges{node{source}}}}',
                },
                cursor: 'marketingCampaign{notifications{edges{cursor}}}',
            },
            pageInfo: {
                endCursor:
                    'marketingCampaign{notifications{pageInfo{endCursor}}}',
                startCursor:
                    'marketingCampaign{notifications{pageInfo{startCursor}}}',
                hasNextPage:
                    'marketingCampaign{notifications{pageInfo{hasNextPage}}}',
                hasPreviousPage:
                    'marketingCampaign{notifications{pageInfo{hasPreviousPage}}}',
            },
            totalCount: 'marketingCampaign{notifications{totalCount}}',
        },
    },
};
export type MarketingAdField =
    | 'id'
    | 'creationDate'
    | 'lastChangeDate'
    | 'resultsSource'
    | 'kpi'
    | 'vendor{id}'
    | 'vendor{creationDate}'
    | 'vendor{lastChangeDate}'
    | 'vendor{name}'
    | 'vendor{systemStatus}'
    | 'vendor{errors}'
    | 'vendor{warnings}'
    | 'vendor{marketplace{id}}'
    | 'vendor{marketplace{creationDate}}'
    | 'vendor{marketplace{lastChangeDate}}'
    | 'vendor{marketplace{name}}'
    | 'vendor{marketplace{systemStatus}}'
    | 'vendor{marketplace{errors}}'
    | 'vendor{marketplace{warnings}}'
    | 'vendor{marketplace{currencyCode}}'
    | 'vendor{marketplace{currencySymbol}}'
    | 'vendor{marketplace{currencyOffset}}'
    | 'vendor{marketplace{organization{id}}}'
    | 'vendor{marketplace{organization{creationDate}}}'
    | 'vendor{marketplace{organization{lastChangeDate}}}'
    | 'vendor{marketplace{organization{name}}}'
    | 'vendor{marketplace{organization{systemStatus}}}'
    | 'vendor{marketplace{organization{errors}}}'
    | 'vendor{marketplace{organization{warnings}}}'
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
    | 'vendor{marketplace{products{edges{cursor}}}}'
    | 'vendor{marketplace{products{pageInfo{endCursor}}}}'
    | 'vendor{marketplace{products{pageInfo{startCursor}}}}'
    | 'vendor{marketplace{products{pageInfo{hasNextPage}}}}'
    | 'vendor{marketplace{products{pageInfo{hasPreviousPage}}}}'
    | 'vendor{marketplace{products{totalCount}}}'
    | 'vendor{vendorTokens{edges{node{id}}}}'
    | 'vendor{vendorTokens{edges{node{creationDate}}}}'
    | 'vendor{vendorTokens{edges{node{lastChangeDate}}}}'
    | 'vendor{vendorTokens{edges{node{token}}}}'
    | 'vendor{vendorTokens{edges{node{email}}}}'
    | 'vendor{vendorTokens{edges{cursor}}}'
    | 'vendor{vendorTokens{pageInfo{endCursor}}}'
    | 'vendor{vendorTokens{pageInfo{startCursor}}}'
    | 'vendor{vendorTokens{pageInfo{hasNextPage}}}'
    | 'vendor{vendorTokens{pageInfo{hasPreviousPage}}}'
    | 'vendor{vendorTokens{totalCount}}'
    | 'vendor{products{edges{node{id}}}}'
    | 'vendor{products{edges{node{creationDate}}}}'
    | 'vendor{products{edges{node{lastChangeDate}}}}'
    | 'vendor{products{edges{node{resultsSource}}}}'
    | 'vendor{products{edges{node{kpi}}}}'
    | 'vendor{products{edges{node{systemStatus}}}}'
    | 'vendor{products{edges{node{errors}}}}'
    | 'vendor{products{edges{node{warnings}}}}'
    | 'vendor{products{edges{node{name}}}}'
    | 'vendor{products{edges{node{sku}}}}'
    | 'vendor{products{edges{node{remoteState}}}}'
    | 'vendor{products{edges{node{metadata}}}}'
    | 'vendor{products{edges{node{imported}}}}'
    | 'vendor{products{edges{cursor}}}'
    | 'vendor{products{pageInfo{endCursor}}}'
    | 'vendor{products{pageInfo{startCursor}}}'
    | 'vendor{products{pageInfo{hasNextPage}}}'
    | 'vendor{products{pageInfo{hasPreviousPage}}}'
    | 'vendor{products{totalCount}}'
    | 'systemStatus'
    | 'errors'
    | 'warnings'
    | 'remoteId'
    | 'preview'
    | 'adPreviews{url}'
    | 'adPreviews{dimensions}'
    | 'adPreviews{placement}'
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
    | 'results{edges{node{breakdownType}}}'
    | 'results{edges{node{resource{id}}}}'
    | 'results{edges{node{resource{creationDate}}}}'
    | 'results{edges{node{resource{lastChangeDate}}}}'
    | 'results{edges{node{resource{resultsSource}}}}'
    | 'results{edges{node{resource{kpi}}}}'
    | 'results{edges{node{resource{systemStatus}}}}'
    | 'results{edges{node{resource{errors}}}}'
    | 'results{edges{node{resource{warnings}}}}'
    | 'results{edges{node{breakdown{id}}}}'
    | 'results{edges{node{breakdown{creationDate}}}}'
    | 'results{edges{node{breakdown{lastChangeDate}}}}'
    | 'results{edges{node{breakdown{resultsSource}}}}'
    | 'results{edges{node{breakdown{kpi}}}}'
    | 'results{edges{node{breakdown{systemStatus}}}}'
    | 'results{edges{node{breakdown{errors}}}}'
    | 'results{edges{node{breakdown{warnings}}}}'
    | 'results{edges{node{vendor{id}}}}'
    | 'results{edges{node{vendor{creationDate}}}}'
    | 'results{edges{node{vendor{lastChangeDate}}}}'
    | 'results{edges{node{vendor{name}}}}'
    | 'results{edges{node{vendor{systemStatus}}}}'
    | 'results{edges{node{vendor{errors}}}}'
    | 'results{edges{node{vendor{warnings}}}}'
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
    | 'marketingCampaign{kpi}'
    | 'marketingCampaign{vendor{id}}'
    | 'marketingCampaign{vendor{creationDate}}'
    | 'marketingCampaign{vendor{lastChangeDate}}'
    | 'marketingCampaign{vendor{name}}'
    | 'marketingCampaign{vendor{systemStatus}}'
    | 'marketingCampaign{vendor{errors}}'
    | 'marketingCampaign{vendor{warnings}}'
    | 'marketingCampaign{vendor{marketplace{id}}}'
    | 'marketingCampaign{vendor{marketplace{creationDate}}}'
    | 'marketingCampaign{vendor{marketplace{lastChangeDate}}}'
    | 'marketingCampaign{vendor{marketplace{name}}}'
    | 'marketingCampaign{vendor{marketplace{systemStatus}}}'
    | 'marketingCampaign{vendor{marketplace{errors}}}'
    | 'marketingCampaign{vendor{marketplace{warnings}}}'
    | 'marketingCampaign{vendor{marketplace{currencyCode}}}'
    | 'marketingCampaign{vendor{marketplace{currencySymbol}}}'
    | 'marketingCampaign{vendor{marketplace{currencyOffset}}}'
    | 'marketingCampaign{vendor{marketplace{organization{id}}}}'
    | 'marketingCampaign{vendor{marketplace{organization{creationDate}}}}'
    | 'marketingCampaign{vendor{marketplace{organization{lastChangeDate}}}}'
    | 'marketingCampaign{vendor{marketplace{organization{name}}}}'
    | 'marketingCampaign{vendor{marketplace{organization{systemStatus}}}}'
    | 'marketingCampaign{vendor{marketplace{organization{errors}}}}'
    | 'marketingCampaign{vendor{marketplace{organization{warnings}}}}'
    | 'marketingCampaign{vendor{marketplace{organization{tier}}}}'
    | 'marketingCampaign{vendor{marketplace{mediaChannels{totalCount}}}}'
    | 'marketingCampaign{vendor{marketplace{campaignTemplates{totalCount}}}}'
    | 'marketingCampaign{vendor{marketplace{vendors{totalCount}}}}'
    | 'marketingCampaign{vendor{marketplace{vendorTokens{totalCount}}}}'
    | 'marketingCampaign{vendor{marketplace{creativeTemplates{totalCount}}}}'
    | 'marketingCampaign{vendor{marketplace{products{totalCount}}}}'
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
    | 'marketingCampaign{warnings}'
    | 'marketingCampaign{name}'
    | 'marketingCampaign{status}'
    | 'marketingCampaign{creativeSpec}'
    | 'marketingCampaign{runTimeSpec}'
    | 'marketingCampaign{locationSpec}'
    | 'marketingCampaign{conversionSpec}'
    | 'marketingCampaign{startDate}'
    | 'marketingCampaign{endDate}'
    | 'marketingCampaign{productFilter}'
    | 'marketingCampaign{GCPX{id}}'
    | 'marketingCampaign{GCPX{creationDate}}'
    | 'marketingCampaign{GCPX{lastChangeDate}}'
    | 'marketingCampaign{GCPX{kpi}}'
    | 'marketingCampaign{GCPX{price}}'
    | 'marketingCampaign{GCPX{startDate}}'
    | 'marketingCampaign{GCPX{endDate}}'
    | 'marketingCampaign{GCPX{minConversions}}'
    | 'marketingCampaign{GCPX{maxConversions}}'
    | 'marketingCampaign{GCPX{campaignTemplate{id}}}'
    | 'marketingCampaign{GCPX{campaignTemplate{creationDate}}}'
    | 'marketingCampaign{GCPX{campaignTemplate{lastChangeDate}}}'
    | 'marketingCampaign{GCPX{campaignTemplate{name}}}'
    | 'marketingCampaign{GCPX{campaignTemplate{description}}}'
    | 'marketingCampaign{GCPX{campaignTemplate{platform}}}'
    | 'marketingCampaign{GCPX{campaignTemplate{remoteId}}}'
    | 'marketingCampaign{GCPX{campaignTemplate{systemStatus}}}'
    | 'marketingCampaign{GCPX{campaignTemplate{errors}}}'
    | 'marketingCampaign{GCPX{campaignTemplate{warnings}}}'
    | 'marketingCampaign{GCPX{campaignTemplate{kpi}}}'
    | 'marketingCampaign{GCPX{campaignTemplate{marketplace{id}}}}'
    | 'marketingCampaign{GCPX{campaignTemplate{marketplace{creationDate}}}}'
    | 'marketingCampaign{GCPX{campaignTemplate{marketplace{lastChangeDate}}}}'
    | 'marketingCampaign{GCPX{campaignTemplate{marketplace{name}}}}'
    | 'marketingCampaign{GCPX{campaignTemplate{marketplace{systemStatus}}}}'
    | 'marketingCampaign{GCPX{campaignTemplate{marketplace{errors}}}}'
    | 'marketingCampaign{GCPX{campaignTemplate{marketplace{warnings}}}}'
    | 'marketingCampaign{GCPX{campaignTemplate{marketplace{currencyCode}}}}'
    | 'marketingCampaign{GCPX{campaignTemplate{marketplace{currencySymbol}}}}'
    | 'marketingCampaign{GCPX{campaignTemplate{marketplace{currencyOffset}}}}'
    | 'marketingCampaign{GCPX{campaignTemplate{marketingCampaigns{totalCount}}}}'
    | 'marketingCampaign{GCPX{campaignTemplate{GCPXHistory{totalCount}}}}'
    | 'marketingCampaign{GCPX{campaignTemplate{currentGCPX{id}}}}'
    | 'marketingCampaign{GCPX{campaignTemplate{currentGCPX{creationDate}}}}'
    | 'marketingCampaign{GCPX{campaignTemplate{currentGCPX{lastChangeDate}}}}'
    | 'marketingCampaign{GCPX{campaignTemplate{currentGCPX{kpi}}}}'
    | 'marketingCampaign{GCPX{campaignTemplate{currentGCPX{price}}}}'
    | 'marketingCampaign{GCPX{campaignTemplate{currentGCPX{startDate}}}}'
    | 'marketingCampaign{GCPX{campaignTemplate{currentGCPX{endDate}}}}'
    | 'marketingCampaign{GCPX{campaignTemplate{currentGCPX{minConversions}}}}'
    | 'marketingCampaign{GCPX{campaignTemplate{currentGCPX{maxConversions}}}}'
    | 'marketingCampaign{GCPX{marketplace{id}}}'
    | 'marketingCampaign{GCPX{marketplace{creationDate}}}'
    | 'marketingCampaign{GCPX{marketplace{lastChangeDate}}}'
    | 'marketingCampaign{GCPX{marketplace{name}}}'
    | 'marketingCampaign{GCPX{marketplace{systemStatus}}}'
    | 'marketingCampaign{GCPX{marketplace{errors}}}'
    | 'marketingCampaign{GCPX{marketplace{warnings}}}'
    | 'marketingCampaign{GCPX{marketplace{currencyCode}}}'
    | 'marketingCampaign{GCPX{marketplace{currencySymbol}}}'
    | 'marketingCampaign{GCPX{marketplace{currencyOffset}}}'
    | 'marketingCampaign{GCPX{marketplace{organization{id}}}}'
    | 'marketingCampaign{GCPX{marketplace{organization{creationDate}}}}'
    | 'marketingCampaign{GCPX{marketplace{organization{lastChangeDate}}}}'
    | 'marketingCampaign{GCPX{marketplace{organization{name}}}}'
    | 'marketingCampaign{GCPX{marketplace{organization{systemStatus}}}}'
    | 'marketingCampaign{GCPX{marketplace{organization{errors}}}}'
    | 'marketingCampaign{GCPX{marketplace{organization{warnings}}}}'
    | 'marketingCampaign{GCPX{marketplace{organization{tier}}}}'
    | 'marketingCampaign{GCPX{marketplace{mediaChannels{totalCount}}}}'
    | 'marketingCampaign{GCPX{marketplace{campaignTemplates{totalCount}}}}'
    | 'marketingCampaign{GCPX{marketplace{vendors{totalCount}}}}'
    | 'marketingCampaign{GCPX{marketplace{vendorTokens{totalCount}}}}'
    | 'marketingCampaign{GCPX{marketplace{creativeTemplates{totalCount}}}}'
    | 'marketingCampaign{GCPX{marketplace{products{totalCount}}}}'
    | 'marketingCampaign{GCPX{marketingCampaigns{edges{cursor}}}}'
    | 'marketingCampaign{GCPX{marketingCampaigns{pageInfo{endCursor}}}}'
    | 'marketingCampaign{GCPX{marketingCampaigns{pageInfo{startCursor}}}}'
    | 'marketingCampaign{GCPX{marketingCampaigns{pageInfo{hasNextPage}}}}'
    | 'marketingCampaign{GCPX{marketingCampaigns{pageInfo{hasPreviousPage}}}}'
    | 'marketingCampaign{GCPX{marketingCampaigns{totalCount}}}'
    | 'marketingCampaign{delivering}'
    | 'marketingCampaign{marketingAds{edges{node{id}}}}'
    | 'marketingCampaign{marketingAds{edges{node{creationDate}}}}'
    | 'marketingCampaign{marketingAds{edges{node{lastChangeDate}}}}'
    | 'marketingCampaign{marketingAds{edges{node{resultsSource}}}}'
    | 'marketingCampaign{marketingAds{edges{node{kpi}}}}'
    | 'marketingCampaign{marketingAds{edges{node{systemStatus}}}}'
    | 'marketingCampaign{marketingAds{edges{node{errors}}}}'
    | 'marketingCampaign{marketingAds{edges{node{warnings}}}}'
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
    | 'marketingCampaign{products{edges{node{resultsSource}}}}'
    | 'marketingCampaign{products{edges{node{kpi}}}}'
    | 'marketingCampaign{products{edges{node{systemStatus}}}}'
    | 'marketingCampaign{products{edges{node{errors}}}}'
    | 'marketingCampaign{products{edges{node{warnings}}}}'
    | 'marketingCampaign{products{edges{node{name}}}}'
    | 'marketingCampaign{products{edges{node{sku}}}}'
    | 'marketingCampaign{products{edges{node{remoteState}}}}'
    | 'marketingCampaign{products{edges{node{metadata}}}}'
    | 'marketingCampaign{products{edges{node{imported}}}}'
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
    | 'marketingCampaign{catalog{externalEventSourceIds}}'
    | 'marketingCampaign{catalog{productSource}}'
    | 'marketingCampaign{catalog{errors}}'
    | 'marketingCampaign{catalog{warnings}}'
    | 'marketingCampaign{catalog{mediaChannel{id}}}'
    | 'marketingCampaign{catalog{mediaChannel{creationDate}}}'
    | 'marketingCampaign{catalog{mediaChannel{lastChangeDate}}}'
    | 'marketingCampaign{catalog{mediaChannel{name}}}'
    | 'marketingCampaign{catalog{mediaChannel{systemStatus}}}'
    | 'marketingCampaign{catalog{mediaChannel{errors}}}'
    | 'marketingCampaign{catalog{mediaChannel{warnings}}}'
    | 'marketingCampaign{catalog{mediaChannel{platform}}}'
    | 'marketingCampaign{catalog{mediaChannel{remoteId}}}'
    | 'marketingCampaign{catalog{mediaChannel{remoteState}}}'
    | 'marketingCampaign{catalog{mediaChannel{currency}}}'
    | 'marketingCampaign{catalog{mediaChannel{currencyCode}}}'
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
    | 'marketingCampaign{catalog{mediaChannel{marketplace{warnings}}}}'
    | 'marketingCampaign{catalog{mediaChannel{marketplace{currencyCode}}}}'
    | 'marketingCampaign{catalog{mediaChannel{marketplace{currencySymbol}}}}'
    | 'marketingCampaign{catalog{mediaChannel{marketplace{currencyOffset}}}}'
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
    | 'marketingCampaign{campaignTemplate{warnings}}'
    | 'marketingCampaign{campaignTemplate{kpi}}'
    | 'marketingCampaign{campaignTemplate{marketplace{id}}}'
    | 'marketingCampaign{campaignTemplate{marketplace{creationDate}}}'
    | 'marketingCampaign{campaignTemplate{marketplace{lastChangeDate}}}'
    | 'marketingCampaign{campaignTemplate{marketplace{name}}}'
    | 'marketingCampaign{campaignTemplate{marketplace{systemStatus}}}'
    | 'marketingCampaign{campaignTemplate{marketplace{errors}}}'
    | 'marketingCampaign{campaignTemplate{marketplace{warnings}}}'
    | 'marketingCampaign{campaignTemplate{marketplace{currencyCode}}}'
    | 'marketingCampaign{campaignTemplate{marketplace{currencySymbol}}}'
    | 'marketingCampaign{campaignTemplate{marketplace{currencyOffset}}}'
    | 'marketingCampaign{campaignTemplate{marketplace{organization{id}}}}'
    | 'marketingCampaign{campaignTemplate{marketplace{organization{creationDate}}}}'
    | 'marketingCampaign{campaignTemplate{marketplace{organization{lastChangeDate}}}}'
    | 'marketingCampaign{campaignTemplate{marketplace{organization{name}}}}'
    | 'marketingCampaign{campaignTemplate{marketplace{organization{systemStatus}}}}'
    | 'marketingCampaign{campaignTemplate{marketplace{organization{errors}}}}'
    | 'marketingCampaign{campaignTemplate{marketplace{organization{warnings}}}}'
    | 'marketingCampaign{campaignTemplate{marketplace{organization{tier}}}}'
    | 'marketingCampaign{campaignTemplate{marketplace{mediaChannels{totalCount}}}}'
    | 'marketingCampaign{campaignTemplate{marketplace{campaignTemplates{totalCount}}}}'
    | 'marketingCampaign{campaignTemplate{marketplace{vendors{totalCount}}}}'
    | 'marketingCampaign{campaignTemplate{marketplace{vendorTokens{totalCount}}}}'
    | 'marketingCampaign{campaignTemplate{marketplace{creativeTemplates{totalCount}}}}'
    | 'marketingCampaign{campaignTemplate{marketplace{products{totalCount}}}}'
    | 'marketingCampaign{campaignTemplate{marketingCampaigns{edges{cursor}}}}'
    | 'marketingCampaign{campaignTemplate{marketingCampaigns{pageInfo{endCursor}}}}'
    | 'marketingCampaign{campaignTemplate{marketingCampaigns{pageInfo{startCursor}}}}'
    | 'marketingCampaign{campaignTemplate{marketingCampaigns{pageInfo{hasNextPage}}}}'
    | 'marketingCampaign{campaignTemplate{marketingCampaigns{pageInfo{hasPreviousPage}}}}'
    | 'marketingCampaign{campaignTemplate{marketingCampaigns{totalCount}}}'
    | 'marketingCampaign{campaignTemplate{GCPXHistory{edges{cursor}}}}'
    | 'marketingCampaign{campaignTemplate{GCPXHistory{pageInfo{endCursor}}}}'
    | 'marketingCampaign{campaignTemplate{GCPXHistory{pageInfo{startCursor}}}}'
    | 'marketingCampaign{campaignTemplate{GCPXHistory{pageInfo{hasNextPage}}}}'
    | 'marketingCampaign{campaignTemplate{GCPXHistory{pageInfo{hasPreviousPage}}}}'
    | 'marketingCampaign{campaignTemplate{GCPXHistory{totalCount}}}'
    | 'marketingCampaign{campaignTemplate{currentGCPX{id}}}'
    | 'marketingCampaign{campaignTemplate{currentGCPX{creationDate}}}'
    | 'marketingCampaign{campaignTemplate{currentGCPX{lastChangeDate}}}'
    | 'marketingCampaign{campaignTemplate{currentGCPX{kpi}}}'
    | 'marketingCampaign{campaignTemplate{currentGCPX{price}}}'
    | 'marketingCampaign{campaignTemplate{currentGCPX{startDate}}}'
    | 'marketingCampaign{campaignTemplate{currentGCPX{endDate}}}'
    | 'marketingCampaign{campaignTemplate{currentGCPX{minConversions}}}'
    | 'marketingCampaign{campaignTemplate{currentGCPX{maxConversions}}}'
    | 'marketingCampaign{campaignTemplate{currentGCPX{campaignTemplate{id}}}}'
    | 'marketingCampaign{campaignTemplate{currentGCPX{campaignTemplate{creationDate}}}}'
    | 'marketingCampaign{campaignTemplate{currentGCPX{campaignTemplate{lastChangeDate}}}}'
    | 'marketingCampaign{campaignTemplate{currentGCPX{campaignTemplate{name}}}}'
    | 'marketingCampaign{campaignTemplate{currentGCPX{campaignTemplate{description}}}}'
    | 'marketingCampaign{campaignTemplate{currentGCPX{campaignTemplate{platform}}}}'
    | 'marketingCampaign{campaignTemplate{currentGCPX{campaignTemplate{remoteId}}}}'
    | 'marketingCampaign{campaignTemplate{currentGCPX{campaignTemplate{systemStatus}}}}'
    | 'marketingCampaign{campaignTemplate{currentGCPX{campaignTemplate{errors}}}}'
    | 'marketingCampaign{campaignTemplate{currentGCPX{campaignTemplate{warnings}}}}'
    | 'marketingCampaign{campaignTemplate{currentGCPX{campaignTemplate{kpi}}}}'
    | 'marketingCampaign{campaignTemplate{currentGCPX{marketplace{id}}}}'
    | 'marketingCampaign{campaignTemplate{currentGCPX{marketplace{creationDate}}}}'
    | 'marketingCampaign{campaignTemplate{currentGCPX{marketplace{lastChangeDate}}}}'
    | 'marketingCampaign{campaignTemplate{currentGCPX{marketplace{name}}}}'
    | 'marketingCampaign{campaignTemplate{currentGCPX{marketplace{systemStatus}}}}'
    | 'marketingCampaign{campaignTemplate{currentGCPX{marketplace{errors}}}}'
    | 'marketingCampaign{campaignTemplate{currentGCPX{marketplace{warnings}}}}'
    | 'marketingCampaign{campaignTemplate{currentGCPX{marketplace{currencyCode}}}}'
    | 'marketingCampaign{campaignTemplate{currentGCPX{marketplace{currencySymbol}}}}'
    | 'marketingCampaign{campaignTemplate{currentGCPX{marketplace{currencyOffset}}}}'
    | 'marketingCampaign{campaignTemplate{currentGCPX{marketingCampaigns{totalCount}}}}'
    | 'marketingCampaign{mediaChannel{id}}'
    | 'marketingCampaign{mediaChannel{creationDate}}'
    | 'marketingCampaign{mediaChannel{lastChangeDate}}'
    | 'marketingCampaign{mediaChannel{name}}'
    | 'marketingCampaign{mediaChannel{systemStatus}}'
    | 'marketingCampaign{mediaChannel{errors}}'
    | 'marketingCampaign{mediaChannel{warnings}}'
    | 'marketingCampaign{mediaChannel{platform}}'
    | 'marketingCampaign{mediaChannel{remoteId}}'
    | 'marketingCampaign{mediaChannel{remoteState}}'
    | 'marketingCampaign{mediaChannel{currency}}'
    | 'marketingCampaign{mediaChannel{currencyCode}}'
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
    | 'marketingCampaign{mediaChannel{marketplace{warnings}}}'
    | 'marketingCampaign{mediaChannel{marketplace{currencyCode}}}'
    | 'marketingCampaign{mediaChannel{marketplace{currencySymbol}}}'
    | 'marketingCampaign{mediaChannel{marketplace{currencyOffset}}}'
    | 'marketingCampaign{mediaChannel{marketplace{organization{id}}}}'
    | 'marketingCampaign{mediaChannel{marketplace{organization{creationDate}}}}'
    | 'marketingCampaign{mediaChannel{marketplace{organization{lastChangeDate}}}}'
    | 'marketingCampaign{mediaChannel{marketplace{organization{name}}}}'
    | 'marketingCampaign{mediaChannel{marketplace{organization{systemStatus}}}}'
    | 'marketingCampaign{mediaChannel{marketplace{organization{errors}}}}'
    | 'marketingCampaign{mediaChannel{marketplace{organization{warnings}}}}'
    | 'marketingCampaign{mediaChannel{marketplace{organization{tier}}}}'
    | 'marketingCampaign{mediaChannel{marketplace{mediaChannels{totalCount}}}}'
    | 'marketingCampaign{mediaChannel{marketplace{campaignTemplates{totalCount}}}}'
    | 'marketingCampaign{mediaChannel{marketplace{vendors{totalCount}}}}'
    | 'marketingCampaign{mediaChannel{marketplace{vendorTokens{totalCount}}}}'
    | 'marketingCampaign{mediaChannel{marketplace{creativeTemplates{totalCount}}}}'
    | 'marketingCampaign{mediaChannel{marketplace{products{totalCount}}}}'
    | 'marketingCampaign{results{edges{node{id}}}}'
    | 'marketingCampaign{results{edges{node{creationDate}}}}'
    | 'marketingCampaign{results{edges{node{lastChangeDate}}}}'
    | 'marketingCampaign{results{edges{node{date}}}}'
    | 'marketingCampaign{results{edges{node{type}}}}'
    | 'marketingCampaign{results{edges{node{breakdownType}}}}'
    | 'marketingCampaign{results{edges{cursor}}}'
    | 'marketingCampaign{results{pageInfo{endCursor}}}'
    | 'marketingCampaign{results{pageInfo{startCursor}}}'
    | 'marketingCampaign{results{pageInfo{hasNextPage}}}'
    | 'marketingCampaign{results{pageInfo{hasPreviousPage}}}'
    | 'marketingCampaign{results{totalCount}}'
    | 'marketingCampaign{notifications{edges{node{id}}}}'
    | 'marketingCampaign{notifications{edges{node{creationDate}}}}'
    | 'marketingCampaign{notifications{edges{node{lastChangeDate}}}}'
    | 'marketingCampaign{notifications{edges{node{title}}}}'
    | 'marketingCampaign{notifications{edges{node{message}}}}'
    | 'marketingCampaign{notifications{edges{node{status}}}}'
    | 'marketingCampaign{notifications{edges{node{severity}}}}'
    | 'marketingCampaign{notifications{edges{node{code}}}}'
    | 'marketingCampaign{notifications{edges{node{source}}}}'
    | 'marketingCampaign{notifications{edges{cursor}}}'
    | 'marketingCampaign{notifications{pageInfo{endCursor}}}'
    | 'marketingCampaign{notifications{pageInfo{startCursor}}}'
    | 'marketingCampaign{notifications{pageInfo{hasNextPage}}}'
    | 'marketingCampaign{notifications{pageInfo{hasPreviousPage}}}'
    | 'marketingCampaign{notifications{totalCount}}';
export type NotificationFields = {
    id: 'id';
    creationDate: 'creationDate';
    lastChangeDate: 'lastChangeDate';
    title: 'title';
    message: 'message';
    status: 'status';
    severity: 'severity';
    code: 'code';
    source: 'source';
    resource: {
        id: 'resource{id}';
        creationDate: 'resource{creationDate}';
        lastChangeDate: 'resource{lastChangeDate}';
        systemStatus: 'resource{systemStatus}';
        errors: 'resource{errors}';
        warnings: 'resource{warnings}';
    };
};
export const NotificationFields: NotificationFields = {
    id: 'id',
    creationDate: 'creationDate',
    lastChangeDate: 'lastChangeDate',
    title: 'title',
    message: 'message',
    status: 'status',
    severity: 'severity',
    code: 'code',
    source: 'source',
    resource: {
        id: 'resource{id}',
        creationDate: 'resource{creationDate}',
        lastChangeDate: 'resource{lastChangeDate}',
        systemStatus: 'resource{systemStatus}',
        errors: 'resource{errors}',
        warnings: 'resource{warnings}',
    },
};
export type NotificationField =
    | 'id'
    | 'creationDate'
    | 'lastChangeDate'
    | 'title'
    | 'message'
    | 'status'
    | 'severity'
    | 'code'
    | 'source'
    | 'resource{id}'
    | 'resource{creationDate}'
    | 'resource{lastChangeDate}'
    | 'resource{systemStatus}'
    | 'resource{errors}'
    | 'resource{warnings}';
export type CreativeTemplateFields = {
    id: 'id';
    creationDate: 'creationDate';
    lastChangeDate: 'lastChangeDate';
    name: 'name';
    height: 'height';
    width: 'width';
    systemStatus: 'systemStatus';
    errors: 'errors';
    warnings: 'warnings';
    marketplace: {
        id: 'marketplace{id}';
        creationDate: 'marketplace{creationDate}';
        lastChangeDate: 'marketplace{lastChangeDate}';
        name: 'marketplace{name}';
        systemStatus: 'marketplace{systemStatus}';
        errors: 'marketplace{errors}';
        warnings: 'marketplace{warnings}';
        currencyCode: 'marketplace{currencyCode}';
        currencySymbol: 'marketplace{currencySymbol}';
        currencyOffset: 'marketplace{currencyOffset}';
        organization: {
            id: 'marketplace{organization{id}}';
            creationDate: 'marketplace{organization{creationDate}}';
            lastChangeDate: 'marketplace{organization{lastChangeDate}}';
            name: 'marketplace{organization{name}}';
            systemStatus: 'marketplace{organization{systemStatus}}';
            errors: 'marketplace{organization{errors}}';
            warnings: 'marketplace{organization{warnings}}';
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
                    warnings: 'marketplace{mediaChannels{edges{node{warnings}}}}';
                    platform: 'marketplace{mediaChannels{edges{node{platform}}}}';
                    remoteId: 'marketplace{mediaChannels{edges{node{remoteId}}}}';
                    remoteState: 'marketplace{mediaChannels{edges{node{remoteState}}}}';
                    currency: 'marketplace{mediaChannels{edges{node{currency}}}}';
                    currencyCode: 'marketplace{mediaChannels{edges{node{currencyCode}}}}';
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
                    warnings: 'marketplace{campaignTemplates{edges{node{warnings}}}}';
                    kpi: 'marketplace{campaignTemplates{edges{node{kpi}}}}';
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
                    warnings: 'marketplace{vendors{edges{node{warnings}}}}';
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
                    email: 'marketplace{vendorTokens{edges{node{email}}}}';
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
                    warnings: 'marketplace{creativeTemplates{edges{node{warnings}}}}';
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
        products: {
            edges: {
                node: {
                    id: 'marketplace{products{edges{node{id}}}}';
                    creationDate: 'marketplace{products{edges{node{creationDate}}}}';
                    lastChangeDate: 'marketplace{products{edges{node{lastChangeDate}}}}';
                    resultsSource: 'marketplace{products{edges{node{resultsSource}}}}';
                    kpi: 'marketplace{products{edges{node{kpi}}}}';
                    systemStatus: 'marketplace{products{edges{node{systemStatus}}}}';
                    errors: 'marketplace{products{edges{node{errors}}}}';
                    warnings: 'marketplace{products{edges{node{warnings}}}}';
                    name: 'marketplace{products{edges{node{name}}}}';
                    sku: 'marketplace{products{edges{node{sku}}}}';
                    remoteState: 'marketplace{products{edges{node{remoteState}}}}';
                    metadata: 'marketplace{products{edges{node{metadata}}}}';
                    imported: 'marketplace{products{edges{node{imported}}}}';
                };
                cursor: 'marketplace{products{edges{cursor}}}';
            };
            pageInfo: {
                endCursor: 'marketplace{products{pageInfo{endCursor}}}';
                startCursor: 'marketplace{products{pageInfo{startCursor}}}';
                hasNextPage: 'marketplace{products{pageInfo{hasNextPage}}}';
                hasPreviousPage: 'marketplace{products{pageInfo{hasPreviousPage}}}';
            };
            totalCount: 'marketplace{products{totalCount}}';
        };
    };
    marketingCampaigns: {
        edges: {
            node: {
                id: 'marketingCampaigns{edges{node{id}}}';
                creationDate: 'marketingCampaigns{edges{node{creationDate}}}';
                lastChangeDate: 'marketingCampaigns{edges{node{lastChangeDate}}}';
                resultsSource: 'marketingCampaigns{edges{node{resultsSource}}}';
                kpi: 'marketingCampaigns{edges{node{kpi}}}';
                vendor: {
                    id: 'marketingCampaigns{edges{node{vendor{id}}}}';
                    creationDate: 'marketingCampaigns{edges{node{vendor{creationDate}}}}';
                    lastChangeDate: 'marketingCampaigns{edges{node{vendor{lastChangeDate}}}}';
                    name: 'marketingCampaigns{edges{node{vendor{name}}}}';
                    systemStatus: 'marketingCampaigns{edges{node{vendor{systemStatus}}}}';
                    errors: 'marketingCampaigns{edges{node{vendor{errors}}}}';
                    warnings: 'marketingCampaigns{edges{node{vendor{warnings}}}}';
                };
                systemStatus: 'marketingCampaigns{edges{node{systemStatus}}}';
                errors: 'marketingCampaigns{edges{node{errors}}}';
                warnings: 'marketingCampaigns{edges{node{warnings}}}';
                name: 'marketingCampaigns{edges{node{name}}}';
                status: 'marketingCampaigns{edges{node{status}}}';
                creativeSpec: 'marketingCampaigns{edges{node{creativeSpec}}}';
                runTimeSpec: 'marketingCampaigns{edges{node{runTimeSpec}}}';
                locationSpec: 'marketingCampaigns{edges{node{locationSpec}}}';
                conversionSpec: 'marketingCampaigns{edges{node{conversionSpec}}}';
                startDate: 'marketingCampaigns{edges{node{startDate}}}';
                endDate: 'marketingCampaigns{edges{node{endDate}}}';
                productFilter: 'marketingCampaigns{edges{node{productFilter}}}';
                GCPX: {
                    id: 'marketingCampaigns{edges{node{GCPX{id}}}}';
                    creationDate: 'marketingCampaigns{edges{node{GCPX{creationDate}}}}';
                    lastChangeDate: 'marketingCampaigns{edges{node{GCPX{lastChangeDate}}}}';
                    kpi: 'marketingCampaigns{edges{node{GCPX{kpi}}}}';
                    price: 'marketingCampaigns{edges{node{GCPX{price}}}}';
                    startDate: 'marketingCampaigns{edges{node{GCPX{startDate}}}}';
                    endDate: 'marketingCampaigns{edges{node{GCPX{endDate}}}}';
                    minConversions: 'marketingCampaigns{edges{node{GCPX{minConversions}}}}';
                    maxConversions: 'marketingCampaigns{edges{node{GCPX{maxConversions}}}}';
                };
                delivering: 'marketingCampaigns{edges{node{delivering}}}';
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
                    externalEventSourceIds: 'marketingCampaigns{edges{node{catalog{externalEventSourceIds}}}}';
                    productSource: 'marketingCampaigns{edges{node{catalog{productSource}}}}';
                    errors: 'marketingCampaigns{edges{node{catalog{errors}}}}';
                    warnings: 'marketingCampaigns{edges{node{catalog{warnings}}}}';
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
                    warnings: 'marketingCampaigns{edges{node{campaignTemplate{warnings}}}}';
                    kpi: 'marketingCampaigns{edges{node{campaignTemplate{kpi}}}}';
                };
                mediaChannel: {
                    id: 'marketingCampaigns{edges{node{mediaChannel{id}}}}';
                    creationDate: 'marketingCampaigns{edges{node{mediaChannel{creationDate}}}}';
                    lastChangeDate: 'marketingCampaigns{edges{node{mediaChannel{lastChangeDate}}}}';
                    name: 'marketingCampaigns{edges{node{mediaChannel{name}}}}';
                    systemStatus: 'marketingCampaigns{edges{node{mediaChannel{systemStatus}}}}';
                    errors: 'marketingCampaigns{edges{node{mediaChannel{errors}}}}';
                    warnings: 'marketingCampaigns{edges{node{mediaChannel{warnings}}}}';
                    platform: 'marketingCampaigns{edges{node{mediaChannel{platform}}}}';
                    remoteId: 'marketingCampaigns{edges{node{mediaChannel{remoteId}}}}';
                    remoteState: 'marketingCampaigns{edges{node{mediaChannel{remoteState}}}}';
                    currency: 'marketingCampaigns{edges{node{mediaChannel{currency}}}}';
                    currencyCode: 'marketingCampaigns{edges{node{mediaChannel{currencyCode}}}}';
                    currencySymbol: 'marketingCampaigns{edges{node{mediaChannel{currencySymbol}}}}';
                    currencyOffset: 'marketingCampaigns{edges{node{mediaChannel{currencyOffset}}}}';
                    timezone: 'marketingCampaigns{edges{node{mediaChannel{timezone}}}}';
                    tokenStatus: 'marketingCampaigns{edges{node{mediaChannel{tokenStatus}}}}';
                };
                results: {
                    totalCount: 'marketingCampaigns{edges{node{results{totalCount}}}}';
                };
                notifications: {
                    totalCount: 'marketingCampaigns{edges{node{notifications{totalCount}}}}';
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
                warnings: 'creativeLayers{edges{node{warnings}}}';
                creativeTemplate: {
                    id: 'creativeLayers{edges{node{creativeTemplate{id}}}}';
                    creationDate: 'creativeLayers{edges{node{creativeTemplate{creationDate}}}}';
                    lastChangeDate: 'creativeLayers{edges{node{creativeTemplate{lastChangeDate}}}}';
                    name: 'creativeLayers{edges{node{creativeTemplate{name}}}}';
                    height: 'creativeLayers{edges{node{creativeTemplate{height}}}}';
                    width: 'creativeLayers{edges{node{creativeTemplate{width}}}}';
                    systemStatus: 'creativeLayers{edges{node{creativeTemplate{systemStatus}}}}';
                    errors: 'creativeLayers{edges{node{creativeTemplate{errors}}}}';
                    warnings: 'creativeLayers{edges{node{creativeTemplate{warnings}}}}';
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
    warnings: 'warnings',
    marketplace: {
        id: 'marketplace{id}',
        creationDate: 'marketplace{creationDate}',
        lastChangeDate: 'marketplace{lastChangeDate}',
        name: 'marketplace{name}',
        systemStatus: 'marketplace{systemStatus}',
        errors: 'marketplace{errors}',
        warnings: 'marketplace{warnings}',
        currencyCode: 'marketplace{currencyCode}',
        currencySymbol: 'marketplace{currencySymbol}',
        currencyOffset: 'marketplace{currencyOffset}',
        organization: {
            id: 'marketplace{organization{id}}',
            creationDate: 'marketplace{organization{creationDate}}',
            lastChangeDate: 'marketplace{organization{lastChangeDate}}',
            name: 'marketplace{organization{name}}',
            systemStatus: 'marketplace{organization{systemStatus}}',
            errors: 'marketplace{organization{errors}}',
            warnings: 'marketplace{organization{warnings}}',
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
                    warnings:
                        'marketplace{mediaChannels{edges{node{warnings}}}}',
                    platform:
                        'marketplace{mediaChannels{edges{node{platform}}}}',
                    remoteId:
                        'marketplace{mediaChannels{edges{node{remoteId}}}}',
                    remoteState:
                        'marketplace{mediaChannels{edges{node{remoteState}}}}',
                    currency:
                        'marketplace{mediaChannels{edges{node{currency}}}}',
                    currencyCode:
                        'marketplace{mediaChannels{edges{node{currencyCode}}}}',
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
                    warnings:
                        'marketplace{campaignTemplates{edges{node{warnings}}}}',
                    kpi: 'marketplace{campaignTemplates{edges{node{kpi}}}}',
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
                    warnings: 'marketplace{vendors{edges{node{warnings}}}}',
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
                    email: 'marketplace{vendorTokens{edges{node{email}}}}',
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
                    warnings:
                        'marketplace{creativeTemplates{edges{node{warnings}}}}',
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
        products: {
            edges: {
                node: {
                    id: 'marketplace{products{edges{node{id}}}}',
                    creationDate:
                        'marketplace{products{edges{node{creationDate}}}}',
                    lastChangeDate:
                        'marketplace{products{edges{node{lastChangeDate}}}}',
                    resultsSource:
                        'marketplace{products{edges{node{resultsSource}}}}',
                    kpi: 'marketplace{products{edges{node{kpi}}}}',
                    systemStatus:
                        'marketplace{products{edges{node{systemStatus}}}}',
                    errors: 'marketplace{products{edges{node{errors}}}}',
                    warnings: 'marketplace{products{edges{node{warnings}}}}',
                    name: 'marketplace{products{edges{node{name}}}}',
                    sku: 'marketplace{products{edges{node{sku}}}}',
                    remoteState:
                        'marketplace{products{edges{node{remoteState}}}}',
                    metadata: 'marketplace{products{edges{node{metadata}}}}',
                    imported: 'marketplace{products{edges{node{imported}}}}',
                },
                cursor: 'marketplace{products{edges{cursor}}}',
            },
            pageInfo: {
                endCursor: 'marketplace{products{pageInfo{endCursor}}}',
                startCursor: 'marketplace{products{pageInfo{startCursor}}}',
                hasNextPage: 'marketplace{products{pageInfo{hasNextPage}}}',
                hasPreviousPage:
                    'marketplace{products{pageInfo{hasPreviousPage}}}',
            },
            totalCount: 'marketplace{products{totalCount}}',
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
                kpi: 'marketingCampaigns{edges{node{kpi}}}',
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
                    warnings:
                        'marketingCampaigns{edges{node{vendor{warnings}}}}',
                },
                systemStatus: 'marketingCampaigns{edges{node{systemStatus}}}',
                errors: 'marketingCampaigns{edges{node{errors}}}',
                warnings: 'marketingCampaigns{edges{node{warnings}}}',
                name: 'marketingCampaigns{edges{node{name}}}',
                status: 'marketingCampaigns{edges{node{status}}}',
                creativeSpec: 'marketingCampaigns{edges{node{creativeSpec}}}',
                runTimeSpec: 'marketingCampaigns{edges{node{runTimeSpec}}}',
                locationSpec: 'marketingCampaigns{edges{node{locationSpec}}}',
                conversionSpec:
                    'marketingCampaigns{edges{node{conversionSpec}}}',
                startDate: 'marketingCampaigns{edges{node{startDate}}}',
                endDate: 'marketingCampaigns{edges{node{endDate}}}',
                productFilter: 'marketingCampaigns{edges{node{productFilter}}}',
                GCPX: {
                    id: 'marketingCampaigns{edges{node{GCPX{id}}}}',
                    creationDate:
                        'marketingCampaigns{edges{node{GCPX{creationDate}}}}',
                    lastChangeDate:
                        'marketingCampaigns{edges{node{GCPX{lastChangeDate}}}}',
                    kpi: 'marketingCampaigns{edges{node{GCPX{kpi}}}}',
                    price: 'marketingCampaigns{edges{node{GCPX{price}}}}',
                    startDate:
                        'marketingCampaigns{edges{node{GCPX{startDate}}}}',
                    endDate: 'marketingCampaigns{edges{node{GCPX{endDate}}}}',
                    minConversions:
                        'marketingCampaigns{edges{node{GCPX{minConversions}}}}',
                    maxConversions:
                        'marketingCampaigns{edges{node{GCPX{maxConversions}}}}',
                },
                delivering: 'marketingCampaigns{edges{node{delivering}}}',
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
                    externalEventSourceIds:
                        'marketingCampaigns{edges{node{catalog{externalEventSourceIds}}}}',
                    productSource:
                        'marketingCampaigns{edges{node{catalog{productSource}}}}',
                    errors: 'marketingCampaigns{edges{node{catalog{errors}}}}',
                    warnings:
                        'marketingCampaigns{edges{node{catalog{warnings}}}}',
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
                    warnings:
                        'marketingCampaigns{edges{node{campaignTemplate{warnings}}}}',
                    kpi:
                        'marketingCampaigns{edges{node{campaignTemplate{kpi}}}}',
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
                    warnings:
                        'marketingCampaigns{edges{node{mediaChannel{warnings}}}}',
                    platform:
                        'marketingCampaigns{edges{node{mediaChannel{platform}}}}',
                    remoteId:
                        'marketingCampaigns{edges{node{mediaChannel{remoteId}}}}',
                    remoteState:
                        'marketingCampaigns{edges{node{mediaChannel{remoteState}}}}',
                    currency:
                        'marketingCampaigns{edges{node{mediaChannel{currency}}}}',
                    currencyCode:
                        'marketingCampaigns{edges{node{mediaChannel{currencyCode}}}}',
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
                notifications: {
                    totalCount:
                        'marketingCampaigns{edges{node{notifications{totalCount}}}}',
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
                warnings: 'creativeLayers{edges{node{warnings}}}',
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
                    warnings:
                        'creativeLayers{edges{node{creativeTemplate{warnings}}}}',
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
    | 'warnings'
    | 'marketplace{id}'
    | 'marketplace{creationDate}'
    | 'marketplace{lastChangeDate}'
    | 'marketplace{name}'
    | 'marketplace{systemStatus}'
    | 'marketplace{errors}'
    | 'marketplace{warnings}'
    | 'marketplace{currencyCode}'
    | 'marketplace{currencySymbol}'
    | 'marketplace{currencyOffset}'
    | 'marketplace{organization{id}}'
    | 'marketplace{organization{creationDate}}'
    | 'marketplace{organization{lastChangeDate}}'
    | 'marketplace{organization{name}}'
    | 'marketplace{organization{systemStatus}}'
    | 'marketplace{organization{errors}}'
    | 'marketplace{organization{warnings}}'
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
    | 'marketplace{mediaChannels{edges{node{warnings}}}}'
    | 'marketplace{mediaChannels{edges{node{platform}}}}'
    | 'marketplace{mediaChannels{edges{node{remoteId}}}}'
    | 'marketplace{mediaChannels{edges{node{remoteState}}}}'
    | 'marketplace{mediaChannels{edges{node{currency}}}}'
    | 'marketplace{mediaChannels{edges{node{currencyCode}}}}'
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
    | 'marketplace{campaignTemplates{edges{node{warnings}}}}'
    | 'marketplace{campaignTemplates{edges{node{kpi}}}}'
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
    | 'marketplace{vendors{edges{node{warnings}}}}'
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
    | 'marketplace{vendorTokens{edges{node{email}}}}'
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
    | 'marketplace{creativeTemplates{edges{node{warnings}}}}'
    | 'marketplace{creativeTemplates{edges{cursor}}}'
    | 'marketplace{creativeTemplates{pageInfo{endCursor}}}'
    | 'marketplace{creativeTemplates{pageInfo{startCursor}}}'
    | 'marketplace{creativeTemplates{pageInfo{hasNextPage}}}'
    | 'marketplace{creativeTemplates{pageInfo{hasPreviousPage}}}'
    | 'marketplace{creativeTemplates{totalCount}}'
    | 'marketplace{products{edges{node{id}}}}'
    | 'marketplace{products{edges{node{creationDate}}}}'
    | 'marketplace{products{edges{node{lastChangeDate}}}}'
    | 'marketplace{products{edges{node{resultsSource}}}}'
    | 'marketplace{products{edges{node{kpi}}}}'
    | 'marketplace{products{edges{node{systemStatus}}}}'
    | 'marketplace{products{edges{node{errors}}}}'
    | 'marketplace{products{edges{node{warnings}}}}'
    | 'marketplace{products{edges{node{name}}}}'
    | 'marketplace{products{edges{node{sku}}}}'
    | 'marketplace{products{edges{node{remoteState}}}}'
    | 'marketplace{products{edges{node{metadata}}}}'
    | 'marketplace{products{edges{node{imported}}}}'
    | 'marketplace{products{edges{cursor}}}'
    | 'marketplace{products{pageInfo{endCursor}}}'
    | 'marketplace{products{pageInfo{startCursor}}}'
    | 'marketplace{products{pageInfo{hasNextPage}}}'
    | 'marketplace{products{pageInfo{hasPreviousPage}}}'
    | 'marketplace{products{totalCount}}'
    | 'marketingCampaigns{edges{node{id}}}'
    | 'marketingCampaigns{edges{node{creationDate}}}'
    | 'marketingCampaigns{edges{node{lastChangeDate}}}'
    | 'marketingCampaigns{edges{node{resultsSource}}}'
    | 'marketingCampaigns{edges{node{kpi}}}'
    | 'marketingCampaigns{edges{node{vendor{id}}}}'
    | 'marketingCampaigns{edges{node{vendor{creationDate}}}}'
    | 'marketingCampaigns{edges{node{vendor{lastChangeDate}}}}'
    | 'marketingCampaigns{edges{node{vendor{name}}}}'
    | 'marketingCampaigns{edges{node{vendor{systemStatus}}}}'
    | 'marketingCampaigns{edges{node{vendor{errors}}}}'
    | 'marketingCampaigns{edges{node{vendor{warnings}}}}'
    | 'marketingCampaigns{edges{node{systemStatus}}}'
    | 'marketingCampaigns{edges{node{errors}}}'
    | 'marketingCampaigns{edges{node{warnings}}}'
    | 'marketingCampaigns{edges{node{name}}}'
    | 'marketingCampaigns{edges{node{status}}}'
    | 'marketingCampaigns{edges{node{creativeSpec}}}'
    | 'marketingCampaigns{edges{node{runTimeSpec}}}'
    | 'marketingCampaigns{edges{node{locationSpec}}}'
    | 'marketingCampaigns{edges{node{conversionSpec}}}'
    | 'marketingCampaigns{edges{node{startDate}}}'
    | 'marketingCampaigns{edges{node{endDate}}}'
    | 'marketingCampaigns{edges{node{productFilter}}}'
    | 'marketingCampaigns{edges{node{GCPX{id}}}}'
    | 'marketingCampaigns{edges{node{GCPX{creationDate}}}}'
    | 'marketingCampaigns{edges{node{GCPX{lastChangeDate}}}}'
    | 'marketingCampaigns{edges{node{GCPX{kpi}}}}'
    | 'marketingCampaigns{edges{node{GCPX{price}}}}'
    | 'marketingCampaigns{edges{node{GCPX{startDate}}}}'
    | 'marketingCampaigns{edges{node{GCPX{endDate}}}}'
    | 'marketingCampaigns{edges{node{GCPX{minConversions}}}}'
    | 'marketingCampaigns{edges{node{GCPX{maxConversions}}}}'
    | 'marketingCampaigns{edges{node{delivering}}}'
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
    | 'marketingCampaigns{edges{node{catalog{externalEventSourceIds}}}}'
    | 'marketingCampaigns{edges{node{catalog{productSource}}}}'
    | 'marketingCampaigns{edges{node{catalog{errors}}}}'
    | 'marketingCampaigns{edges{node{catalog{warnings}}}}'
    | 'marketingCampaigns{edges{node{campaignTemplate{id}}}}'
    | 'marketingCampaigns{edges{node{campaignTemplate{creationDate}}}}'
    | 'marketingCampaigns{edges{node{campaignTemplate{lastChangeDate}}}}'
    | 'marketingCampaigns{edges{node{campaignTemplate{name}}}}'
    | 'marketingCampaigns{edges{node{campaignTemplate{description}}}}'
    | 'marketingCampaigns{edges{node{campaignTemplate{platform}}}}'
    | 'marketingCampaigns{edges{node{campaignTemplate{remoteId}}}}'
    | 'marketingCampaigns{edges{node{campaignTemplate{systemStatus}}}}'
    | 'marketingCampaigns{edges{node{campaignTemplate{errors}}}}'
    | 'marketingCampaigns{edges{node{campaignTemplate{warnings}}}}'
    | 'marketingCampaigns{edges{node{campaignTemplate{kpi}}}}'
    | 'marketingCampaigns{edges{node{mediaChannel{id}}}}'
    | 'marketingCampaigns{edges{node{mediaChannel{creationDate}}}}'
    | 'marketingCampaigns{edges{node{mediaChannel{lastChangeDate}}}}'
    | 'marketingCampaigns{edges{node{mediaChannel{name}}}}'
    | 'marketingCampaigns{edges{node{mediaChannel{systemStatus}}}}'
    | 'marketingCampaigns{edges{node{mediaChannel{errors}}}}'
    | 'marketingCampaigns{edges{node{mediaChannel{warnings}}}}'
    | 'marketingCampaigns{edges{node{mediaChannel{platform}}}}'
    | 'marketingCampaigns{edges{node{mediaChannel{remoteId}}}}'
    | 'marketingCampaigns{edges{node{mediaChannel{remoteState}}}}'
    | 'marketingCampaigns{edges{node{mediaChannel{currency}}}}'
    | 'marketingCampaigns{edges{node{mediaChannel{currencyCode}}}}'
    | 'marketingCampaigns{edges{node{mediaChannel{currencySymbol}}}}'
    | 'marketingCampaigns{edges{node{mediaChannel{currencyOffset}}}}'
    | 'marketingCampaigns{edges{node{mediaChannel{timezone}}}}'
    | 'marketingCampaigns{edges{node{mediaChannel{tokenStatus}}}}'
    | 'marketingCampaigns{edges{node{results{totalCount}}}}'
    | 'marketingCampaigns{edges{node{notifications{totalCount}}}}'
    | 'marketingCampaigns{edges{cursor}}'
    | 'marketingCampaigns{pageInfo{endCursor}}'
    | 'marketingCampaigns{pageInfo{startCursor}}'
    | 'marketingCampaigns{pageInfo{hasNextPage}}'
    | 'marketingCampaigns{pageInfo{hasPreviousPage}}'
    | 'marketingCampaigns{totalCount}'
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
    | 'creativeLayers{edges{node{warnings}}}'
    | 'creativeLayers{edges{node{creativeTemplate{id}}}}'
    | 'creativeLayers{edges{node{creativeTemplate{creationDate}}}}'
    | 'creativeLayers{edges{node{creativeTemplate{lastChangeDate}}}}'
    | 'creativeLayers{edges{node{creativeTemplate{name}}}}'
    | 'creativeLayers{edges{node{creativeTemplate{height}}}}'
    | 'creativeLayers{edges{node{creativeTemplate{width}}}}'
    | 'creativeLayers{edges{node{creativeTemplate{systemStatus}}}}'
    | 'creativeLayers{edges{node{creativeTemplate{errors}}}}'
    | 'creativeLayers{edges{node{creativeTemplate{warnings}}}}'
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
    warnings: 'warnings';
    creativeTemplate: {
        id: 'creativeTemplate{id}';
        creationDate: 'creativeTemplate{creationDate}';
        lastChangeDate: 'creativeTemplate{lastChangeDate}';
        name: 'creativeTemplate{name}';
        height: 'creativeTemplate{height}';
        width: 'creativeTemplate{width}';
        systemStatus: 'creativeTemplate{systemStatus}';
        errors: 'creativeTemplate{errors}';
        warnings: 'creativeTemplate{warnings}';
        marketplace: {
            id: 'creativeTemplate{marketplace{id}}';
            creationDate: 'creativeTemplate{marketplace{creationDate}}';
            lastChangeDate: 'creativeTemplate{marketplace{lastChangeDate}}';
            name: 'creativeTemplate{marketplace{name}}';
            systemStatus: 'creativeTemplate{marketplace{systemStatus}}';
            errors: 'creativeTemplate{marketplace{errors}}';
            warnings: 'creativeTemplate{marketplace{warnings}}';
            currencyCode: 'creativeTemplate{marketplace{currencyCode}}';
            currencySymbol: 'creativeTemplate{marketplace{currencySymbol}}';
            currencyOffset: 'creativeTemplate{marketplace{currencyOffset}}';
            organization: {
                id: 'creativeTemplate{marketplace{organization{id}}}';
                creationDate: 'creativeTemplate{marketplace{organization{creationDate}}}';
                lastChangeDate: 'creativeTemplate{marketplace{organization{lastChangeDate}}}';
                name: 'creativeTemplate{marketplace{organization{name}}}';
                systemStatus: 'creativeTemplate{marketplace{organization{systemStatus}}}';
                errors: 'creativeTemplate{marketplace{organization{errors}}}';
                warnings: 'creativeTemplate{marketplace{organization{warnings}}}';
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
            products: {
                edges: {
                    cursor: 'creativeTemplate{marketplace{products{edges{cursor}}}}';
                };
                pageInfo: {
                    endCursor: 'creativeTemplate{marketplace{products{pageInfo{endCursor}}}}';
                    startCursor: 'creativeTemplate{marketplace{products{pageInfo{startCursor}}}}';
                    hasNextPage: 'creativeTemplate{marketplace{products{pageInfo{hasNextPage}}}}';
                    hasPreviousPage: 'creativeTemplate{marketplace{products{pageInfo{hasPreviousPage}}}}';
                };
                totalCount: 'creativeTemplate{marketplace{products{totalCount}}}';
            };
        };
        marketingCampaigns: {
            edges: {
                node: {
                    id: 'creativeTemplate{marketingCampaigns{edges{node{id}}}}';
                    creationDate: 'creativeTemplate{marketingCampaigns{edges{node{creationDate}}}}';
                    lastChangeDate: 'creativeTemplate{marketingCampaigns{edges{node{lastChangeDate}}}}';
                    resultsSource: 'creativeTemplate{marketingCampaigns{edges{node{resultsSource}}}}';
                    kpi: 'creativeTemplate{marketingCampaigns{edges{node{kpi}}}}';
                    systemStatus: 'creativeTemplate{marketingCampaigns{edges{node{systemStatus}}}}';
                    errors: 'creativeTemplate{marketingCampaigns{edges{node{errors}}}}';
                    warnings: 'creativeTemplate{marketingCampaigns{edges{node{warnings}}}}';
                    name: 'creativeTemplate{marketingCampaigns{edges{node{name}}}}';
                    status: 'creativeTemplate{marketingCampaigns{edges{node{status}}}}';
                    creativeSpec: 'creativeTemplate{marketingCampaigns{edges{node{creativeSpec}}}}';
                    runTimeSpec: 'creativeTemplate{marketingCampaigns{edges{node{runTimeSpec}}}}';
                    locationSpec: 'creativeTemplate{marketingCampaigns{edges{node{locationSpec}}}}';
                    conversionSpec: 'creativeTemplate{marketingCampaigns{edges{node{conversionSpec}}}}';
                    startDate: 'creativeTemplate{marketingCampaigns{edges{node{startDate}}}}';
                    endDate: 'creativeTemplate{marketingCampaigns{edges{node{endDate}}}}';
                    productFilter: 'creativeTemplate{marketingCampaigns{edges{node{productFilter}}}}';
                    delivering: 'creativeTemplate{marketingCampaigns{edges{node{delivering}}}}';
                };
                cursor: 'creativeTemplate{marketingCampaigns{edges{cursor}}}';
            };
            pageInfo: {
                endCursor: 'creativeTemplate{marketingCampaigns{pageInfo{endCursor}}}';
                startCursor: 'creativeTemplate{marketingCampaigns{pageInfo{startCursor}}}';
                hasNextPage: 'creativeTemplate{marketingCampaigns{pageInfo{hasNextPage}}}';
                hasPreviousPage: 'creativeTemplate{marketingCampaigns{pageInfo{hasPreviousPage}}}';
            };
            totalCount: 'creativeTemplate{marketingCampaigns{totalCount}}';
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
                    warnings: 'creativeTemplate{creativeLayers{edges{node{warnings}}}}';
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
    warnings: 'warnings',
    creativeTemplate: {
        id: 'creativeTemplate{id}',
        creationDate: 'creativeTemplate{creationDate}',
        lastChangeDate: 'creativeTemplate{lastChangeDate}',
        name: 'creativeTemplate{name}',
        height: 'creativeTemplate{height}',
        width: 'creativeTemplate{width}',
        systemStatus: 'creativeTemplate{systemStatus}',
        errors: 'creativeTemplate{errors}',
        warnings: 'creativeTemplate{warnings}',
        marketplace: {
            id: 'creativeTemplate{marketplace{id}}',
            creationDate: 'creativeTemplate{marketplace{creationDate}}',
            lastChangeDate: 'creativeTemplate{marketplace{lastChangeDate}}',
            name: 'creativeTemplate{marketplace{name}}',
            systemStatus: 'creativeTemplate{marketplace{systemStatus}}',
            errors: 'creativeTemplate{marketplace{errors}}',
            warnings: 'creativeTemplate{marketplace{warnings}}',
            currencyCode: 'creativeTemplate{marketplace{currencyCode}}',
            currencySymbol: 'creativeTemplate{marketplace{currencySymbol}}',
            currencyOffset: 'creativeTemplate{marketplace{currencyOffset}}',
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
                warnings:
                    'creativeTemplate{marketplace{organization{warnings}}}',
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
            products: {
                edges: {
                    cursor:
                        'creativeTemplate{marketplace{products{edges{cursor}}}}',
                },
                pageInfo: {
                    endCursor:
                        'creativeTemplate{marketplace{products{pageInfo{endCursor}}}}',
                    startCursor:
                        'creativeTemplate{marketplace{products{pageInfo{startCursor}}}}',
                    hasNextPage:
                        'creativeTemplate{marketplace{products{pageInfo{hasNextPage}}}}',
                    hasPreviousPage:
                        'creativeTemplate{marketplace{products{pageInfo{hasPreviousPage}}}}',
                },
                totalCount:
                    'creativeTemplate{marketplace{products{totalCount}}}',
            },
        },
        marketingCampaigns: {
            edges: {
                node: {
                    id: 'creativeTemplate{marketingCampaigns{edges{node{id}}}}',
                    creationDate:
                        'creativeTemplate{marketingCampaigns{edges{node{creationDate}}}}',
                    lastChangeDate:
                        'creativeTemplate{marketingCampaigns{edges{node{lastChangeDate}}}}',
                    resultsSource:
                        'creativeTemplate{marketingCampaigns{edges{node{resultsSource}}}}',
                    kpi:
                        'creativeTemplate{marketingCampaigns{edges{node{kpi}}}}',
                    systemStatus:
                        'creativeTemplate{marketingCampaigns{edges{node{systemStatus}}}}',
                    errors:
                        'creativeTemplate{marketingCampaigns{edges{node{errors}}}}',
                    warnings:
                        'creativeTemplate{marketingCampaigns{edges{node{warnings}}}}',
                    name:
                        'creativeTemplate{marketingCampaigns{edges{node{name}}}}',
                    status:
                        'creativeTemplate{marketingCampaigns{edges{node{status}}}}',
                    creativeSpec:
                        'creativeTemplate{marketingCampaigns{edges{node{creativeSpec}}}}',
                    runTimeSpec:
                        'creativeTemplate{marketingCampaigns{edges{node{runTimeSpec}}}}',
                    locationSpec:
                        'creativeTemplate{marketingCampaigns{edges{node{locationSpec}}}}',
                    conversionSpec:
                        'creativeTemplate{marketingCampaigns{edges{node{conversionSpec}}}}',
                    startDate:
                        'creativeTemplate{marketingCampaigns{edges{node{startDate}}}}',
                    endDate:
                        'creativeTemplate{marketingCampaigns{edges{node{endDate}}}}',
                    productFilter:
                        'creativeTemplate{marketingCampaigns{edges{node{productFilter}}}}',
                    delivering:
                        'creativeTemplate{marketingCampaigns{edges{node{delivering}}}}',
                },
                cursor: 'creativeTemplate{marketingCampaigns{edges{cursor}}}',
            },
            pageInfo: {
                endCursor:
                    'creativeTemplate{marketingCampaigns{pageInfo{endCursor}}}',
                startCursor:
                    'creativeTemplate{marketingCampaigns{pageInfo{startCursor}}}',
                hasNextPage:
                    'creativeTemplate{marketingCampaigns{pageInfo{hasNextPage}}}',
                hasPreviousPage:
                    'creativeTemplate{marketingCampaigns{pageInfo{hasPreviousPage}}}',
            },
            totalCount: 'creativeTemplate{marketingCampaigns{totalCount}}',
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
                    warnings:
                        'creativeTemplate{creativeLayers{edges{node{warnings}}}}',
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
    | 'warnings'
    | 'creativeTemplate{id}'
    | 'creativeTemplate{creationDate}'
    | 'creativeTemplate{lastChangeDate}'
    | 'creativeTemplate{name}'
    | 'creativeTemplate{height}'
    | 'creativeTemplate{width}'
    | 'creativeTemplate{systemStatus}'
    | 'creativeTemplate{errors}'
    | 'creativeTemplate{warnings}'
    | 'creativeTemplate{marketplace{id}}'
    | 'creativeTemplate{marketplace{creationDate}}'
    | 'creativeTemplate{marketplace{lastChangeDate}}'
    | 'creativeTemplate{marketplace{name}}'
    | 'creativeTemplate{marketplace{systemStatus}}'
    | 'creativeTemplate{marketplace{errors}}'
    | 'creativeTemplate{marketplace{warnings}}'
    | 'creativeTemplate{marketplace{currencyCode}}'
    | 'creativeTemplate{marketplace{currencySymbol}}'
    | 'creativeTemplate{marketplace{currencyOffset}}'
    | 'creativeTemplate{marketplace{organization{id}}}'
    | 'creativeTemplate{marketplace{organization{creationDate}}}'
    | 'creativeTemplate{marketplace{organization{lastChangeDate}}}'
    | 'creativeTemplate{marketplace{organization{name}}}'
    | 'creativeTemplate{marketplace{organization{systemStatus}}}'
    | 'creativeTemplate{marketplace{organization{errors}}}'
    | 'creativeTemplate{marketplace{organization{warnings}}}'
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
    | 'creativeTemplate{marketplace{products{edges{cursor}}}}'
    | 'creativeTemplate{marketplace{products{pageInfo{endCursor}}}}'
    | 'creativeTemplate{marketplace{products{pageInfo{startCursor}}}}'
    | 'creativeTemplate{marketplace{products{pageInfo{hasNextPage}}}}'
    | 'creativeTemplate{marketplace{products{pageInfo{hasPreviousPage}}}}'
    | 'creativeTemplate{marketplace{products{totalCount}}}'
    | 'creativeTemplate{marketingCampaigns{edges{node{id}}}}'
    | 'creativeTemplate{marketingCampaigns{edges{node{creationDate}}}}'
    | 'creativeTemplate{marketingCampaigns{edges{node{lastChangeDate}}}}'
    | 'creativeTemplate{marketingCampaigns{edges{node{resultsSource}}}}'
    | 'creativeTemplate{marketingCampaigns{edges{node{kpi}}}}'
    | 'creativeTemplate{marketingCampaigns{edges{node{systemStatus}}}}'
    | 'creativeTemplate{marketingCampaigns{edges{node{errors}}}}'
    | 'creativeTemplate{marketingCampaigns{edges{node{warnings}}}}'
    | 'creativeTemplate{marketingCampaigns{edges{node{name}}}}'
    | 'creativeTemplate{marketingCampaigns{edges{node{status}}}}'
    | 'creativeTemplate{marketingCampaigns{edges{node{creativeSpec}}}}'
    | 'creativeTemplate{marketingCampaigns{edges{node{runTimeSpec}}}}'
    | 'creativeTemplate{marketingCampaigns{edges{node{locationSpec}}}}'
    | 'creativeTemplate{marketingCampaigns{edges{node{conversionSpec}}}}'
    | 'creativeTemplate{marketingCampaigns{edges{node{startDate}}}}'
    | 'creativeTemplate{marketingCampaigns{edges{node{endDate}}}}'
    | 'creativeTemplate{marketingCampaigns{edges{node{productFilter}}}}'
    | 'creativeTemplate{marketingCampaigns{edges{node{delivering}}}}'
    | 'creativeTemplate{marketingCampaigns{edges{cursor}}}'
    | 'creativeTemplate{marketingCampaigns{pageInfo{endCursor}}}'
    | 'creativeTemplate{marketingCampaigns{pageInfo{startCursor}}}'
    | 'creativeTemplate{marketingCampaigns{pageInfo{hasNextPage}}}'
    | 'creativeTemplate{marketingCampaigns{pageInfo{hasPreviousPage}}}'
    | 'creativeTemplate{marketingCampaigns{totalCount}}'
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
    | 'creativeTemplate{creativeLayers{edges{node{warnings}}}}'
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
    warnings: 'warnings';
    marketplace: {
        id: 'marketplace{id}';
        creationDate: 'marketplace{creationDate}';
        lastChangeDate: 'marketplace{lastChangeDate}';
        name: 'marketplace{name}';
        systemStatus: 'marketplace{systemStatus}';
        errors: 'marketplace{errors}';
        warnings: 'marketplace{warnings}';
        currencyCode: 'marketplace{currencyCode}';
        currencySymbol: 'marketplace{currencySymbol}';
        currencyOffset: 'marketplace{currencyOffset}';
        organization: {
            id: 'marketplace{organization{id}}';
            creationDate: 'marketplace{organization{creationDate}}';
            lastChangeDate: 'marketplace{organization{lastChangeDate}}';
            name: 'marketplace{organization{name}}';
            systemStatus: 'marketplace{organization{systemStatus}}';
            errors: 'marketplace{organization{errors}}';
            warnings: 'marketplace{organization{warnings}}';
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
                    warnings: 'marketplace{mediaChannels{edges{node{warnings}}}}';
                    platform: 'marketplace{mediaChannels{edges{node{platform}}}}';
                    remoteId: 'marketplace{mediaChannels{edges{node{remoteId}}}}';
                    remoteState: 'marketplace{mediaChannels{edges{node{remoteState}}}}';
                    currency: 'marketplace{mediaChannels{edges{node{currency}}}}';
                    currencyCode: 'marketplace{mediaChannels{edges{node{currencyCode}}}}';
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
                    warnings: 'marketplace{campaignTemplates{edges{node{warnings}}}}';
                    kpi: 'marketplace{campaignTemplates{edges{node{kpi}}}}';
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
                    warnings: 'marketplace{vendors{edges{node{warnings}}}}';
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
                    email: 'marketplace{vendorTokens{edges{node{email}}}}';
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
                    warnings: 'marketplace{creativeTemplates{edges{node{warnings}}}}';
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
        products: {
            edges: {
                node: {
                    id: 'marketplace{products{edges{node{id}}}}';
                    creationDate: 'marketplace{products{edges{node{creationDate}}}}';
                    lastChangeDate: 'marketplace{products{edges{node{lastChangeDate}}}}';
                    resultsSource: 'marketplace{products{edges{node{resultsSource}}}}';
                    kpi: 'marketplace{products{edges{node{kpi}}}}';
                    systemStatus: 'marketplace{products{edges{node{systemStatus}}}}';
                    errors: 'marketplace{products{edges{node{errors}}}}';
                    warnings: 'marketplace{products{edges{node{warnings}}}}';
                    name: 'marketplace{products{edges{node{name}}}}';
                    sku: 'marketplace{products{edges{node{sku}}}}';
                    remoteState: 'marketplace{products{edges{node{remoteState}}}}';
                    metadata: 'marketplace{products{edges{node{metadata}}}}';
                    imported: 'marketplace{products{edges{node{imported}}}}';
                };
                cursor: 'marketplace{products{edges{cursor}}}';
            };
            pageInfo: {
                endCursor: 'marketplace{products{pageInfo{endCursor}}}';
                startCursor: 'marketplace{products{pageInfo{startCursor}}}';
                hasNextPage: 'marketplace{products{pageInfo{hasNextPage}}}';
                hasPreviousPage: 'marketplace{products{pageInfo{hasPreviousPage}}}';
            };
            totalCount: 'marketplace{products{totalCount}}';
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
    warnings: 'warnings',
    marketplace: {
        id: 'marketplace{id}',
        creationDate: 'marketplace{creationDate}',
        lastChangeDate: 'marketplace{lastChangeDate}',
        name: 'marketplace{name}',
        systemStatus: 'marketplace{systemStatus}',
        errors: 'marketplace{errors}',
        warnings: 'marketplace{warnings}',
        currencyCode: 'marketplace{currencyCode}',
        currencySymbol: 'marketplace{currencySymbol}',
        currencyOffset: 'marketplace{currencyOffset}',
        organization: {
            id: 'marketplace{organization{id}}',
            creationDate: 'marketplace{organization{creationDate}}',
            lastChangeDate: 'marketplace{organization{lastChangeDate}}',
            name: 'marketplace{organization{name}}',
            systemStatus: 'marketplace{organization{systemStatus}}',
            errors: 'marketplace{organization{errors}}',
            warnings: 'marketplace{organization{warnings}}',
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
                    warnings:
                        'marketplace{mediaChannels{edges{node{warnings}}}}',
                    platform:
                        'marketplace{mediaChannels{edges{node{platform}}}}',
                    remoteId:
                        'marketplace{mediaChannels{edges{node{remoteId}}}}',
                    remoteState:
                        'marketplace{mediaChannels{edges{node{remoteState}}}}',
                    currency:
                        'marketplace{mediaChannels{edges{node{currency}}}}',
                    currencyCode:
                        'marketplace{mediaChannels{edges{node{currencyCode}}}}',
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
                    warnings:
                        'marketplace{campaignTemplates{edges{node{warnings}}}}',
                    kpi: 'marketplace{campaignTemplates{edges{node{kpi}}}}',
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
                    warnings: 'marketplace{vendors{edges{node{warnings}}}}',
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
                    email: 'marketplace{vendorTokens{edges{node{email}}}}',
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
                    warnings:
                        'marketplace{creativeTemplates{edges{node{warnings}}}}',
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
        products: {
            edges: {
                node: {
                    id: 'marketplace{products{edges{node{id}}}}',
                    creationDate:
                        'marketplace{products{edges{node{creationDate}}}}',
                    lastChangeDate:
                        'marketplace{products{edges{node{lastChangeDate}}}}',
                    resultsSource:
                        'marketplace{products{edges{node{resultsSource}}}}',
                    kpi: 'marketplace{products{edges{node{kpi}}}}',
                    systemStatus:
                        'marketplace{products{edges{node{systemStatus}}}}',
                    errors: 'marketplace{products{edges{node{errors}}}}',
                    warnings: 'marketplace{products{edges{node{warnings}}}}',
                    name: 'marketplace{products{edges{node{name}}}}',
                    sku: 'marketplace{products{edges{node{sku}}}}',
                    remoteState:
                        'marketplace{products{edges{node{remoteState}}}}',
                    metadata: 'marketplace{products{edges{node{metadata}}}}',
                    imported: 'marketplace{products{edges{node{imported}}}}',
                },
                cursor: 'marketplace{products{edges{cursor}}}',
            },
            pageInfo: {
                endCursor: 'marketplace{products{pageInfo{endCursor}}}',
                startCursor: 'marketplace{products{pageInfo{startCursor}}}',
                hasNextPage: 'marketplace{products{pageInfo{hasNextPage}}}',
                hasPreviousPage:
                    'marketplace{products{pageInfo{hasPreviousPage}}}',
            },
            totalCount: 'marketplace{products{totalCount}}',
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
    | 'warnings'
    | 'marketplace{id}'
    | 'marketplace{creationDate}'
    | 'marketplace{lastChangeDate}'
    | 'marketplace{name}'
    | 'marketplace{systemStatus}'
    | 'marketplace{errors}'
    | 'marketplace{warnings}'
    | 'marketplace{currencyCode}'
    | 'marketplace{currencySymbol}'
    | 'marketplace{currencyOffset}'
    | 'marketplace{organization{id}}'
    | 'marketplace{organization{creationDate}}'
    | 'marketplace{organization{lastChangeDate}}'
    | 'marketplace{organization{name}}'
    | 'marketplace{organization{systemStatus}}'
    | 'marketplace{organization{errors}}'
    | 'marketplace{organization{warnings}}'
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
    | 'marketplace{mediaChannels{edges{node{warnings}}}}'
    | 'marketplace{mediaChannels{edges{node{platform}}}}'
    | 'marketplace{mediaChannels{edges{node{remoteId}}}}'
    | 'marketplace{mediaChannels{edges{node{remoteState}}}}'
    | 'marketplace{mediaChannels{edges{node{currency}}}}'
    | 'marketplace{mediaChannels{edges{node{currencyCode}}}}'
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
    | 'marketplace{campaignTemplates{edges{node{warnings}}}}'
    | 'marketplace{campaignTemplates{edges{node{kpi}}}}'
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
    | 'marketplace{vendors{edges{node{warnings}}}}'
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
    | 'marketplace{vendorTokens{edges{node{email}}}}'
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
    | 'marketplace{creativeTemplates{edges{node{warnings}}}}'
    | 'marketplace{creativeTemplates{edges{cursor}}}'
    | 'marketplace{creativeTemplates{pageInfo{endCursor}}}'
    | 'marketplace{creativeTemplates{pageInfo{startCursor}}}'
    | 'marketplace{creativeTemplates{pageInfo{hasNextPage}}}'
    | 'marketplace{creativeTemplates{pageInfo{hasPreviousPage}}}'
    | 'marketplace{creativeTemplates{totalCount}}'
    | 'marketplace{products{edges{node{id}}}}'
    | 'marketplace{products{edges{node{creationDate}}}}'
    | 'marketplace{products{edges{node{lastChangeDate}}}}'
    | 'marketplace{products{edges{node{resultsSource}}}}'
    | 'marketplace{products{edges{node{kpi}}}}'
    | 'marketplace{products{edges{node{systemStatus}}}}'
    | 'marketplace{products{edges{node{errors}}}}'
    | 'marketplace{products{edges{node{warnings}}}}'
    | 'marketplace{products{edges{node{name}}}}'
    | 'marketplace{products{edges{node{sku}}}}'
    | 'marketplace{products{edges{node{remoteState}}}}'
    | 'marketplace{products{edges{node{metadata}}}}'
    | 'marketplace{products{edges{node{imported}}}}'
    | 'marketplace{products{edges{cursor}}}'
    | 'marketplace{products{pageInfo{endCursor}}}'
    | 'marketplace{products{pageInfo{startCursor}}}'
    | 'marketplace{products{pageInfo{hasNextPage}}}'
    | 'marketplace{products{pageInfo{hasPreviousPage}}}'
    | 'marketplace{products{totalCount}}';
export type CreativeImageFields = {
    id: 'id';
    creationDate: 'creationDate';
    lastChangeDate: 'lastChangeDate';
    name: 'name';
    url: 'url';
    properties: 'properties';
    systemStatus: 'systemStatus';
    errors: 'errors';
    warnings: 'warnings';
    marketplace: {
        id: 'marketplace{id}';
        creationDate: 'marketplace{creationDate}';
        lastChangeDate: 'marketplace{lastChangeDate}';
        name: 'marketplace{name}';
        systemStatus: 'marketplace{systemStatus}';
        errors: 'marketplace{errors}';
        warnings: 'marketplace{warnings}';
        currencyCode: 'marketplace{currencyCode}';
        currencySymbol: 'marketplace{currencySymbol}';
        currencyOffset: 'marketplace{currencyOffset}';
        organization: {
            id: 'marketplace{organization{id}}';
            creationDate: 'marketplace{organization{creationDate}}';
            lastChangeDate: 'marketplace{organization{lastChangeDate}}';
            name: 'marketplace{organization{name}}';
            systemStatus: 'marketplace{organization{systemStatus}}';
            errors: 'marketplace{organization{errors}}';
            warnings: 'marketplace{organization{warnings}}';
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
                    warnings: 'marketplace{mediaChannels{edges{node{warnings}}}}';
                    platform: 'marketplace{mediaChannels{edges{node{platform}}}}';
                    remoteId: 'marketplace{mediaChannels{edges{node{remoteId}}}}';
                    remoteState: 'marketplace{mediaChannels{edges{node{remoteState}}}}';
                    currency: 'marketplace{mediaChannels{edges{node{currency}}}}';
                    currencyCode: 'marketplace{mediaChannels{edges{node{currencyCode}}}}';
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
                    warnings: 'marketplace{campaignTemplates{edges{node{warnings}}}}';
                    kpi: 'marketplace{campaignTemplates{edges{node{kpi}}}}';
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
                    warnings: 'marketplace{vendors{edges{node{warnings}}}}';
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
                    email: 'marketplace{vendorTokens{edges{node{email}}}}';
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
                    warnings: 'marketplace{creativeTemplates{edges{node{warnings}}}}';
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
        products: {
            edges: {
                node: {
                    id: 'marketplace{products{edges{node{id}}}}';
                    creationDate: 'marketplace{products{edges{node{creationDate}}}}';
                    lastChangeDate: 'marketplace{products{edges{node{lastChangeDate}}}}';
                    resultsSource: 'marketplace{products{edges{node{resultsSource}}}}';
                    kpi: 'marketplace{products{edges{node{kpi}}}}';
                    systemStatus: 'marketplace{products{edges{node{systemStatus}}}}';
                    errors: 'marketplace{products{edges{node{errors}}}}';
                    warnings: 'marketplace{products{edges{node{warnings}}}}';
                    name: 'marketplace{products{edges{node{name}}}}';
                    sku: 'marketplace{products{edges{node{sku}}}}';
                    remoteState: 'marketplace{products{edges{node{remoteState}}}}';
                    metadata: 'marketplace{products{edges{node{metadata}}}}';
                    imported: 'marketplace{products{edges{node{imported}}}}';
                };
                cursor: 'marketplace{products{edges{cursor}}}';
            };
            pageInfo: {
                endCursor: 'marketplace{products{pageInfo{endCursor}}}';
                startCursor: 'marketplace{products{pageInfo{startCursor}}}';
                hasNextPage: 'marketplace{products{pageInfo{hasNextPage}}}';
                hasPreviousPage: 'marketplace{products{pageInfo{hasPreviousPage}}}';
            };
            totalCount: 'marketplace{products{totalCount}}';
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
    warnings: 'warnings',
    marketplace: {
        id: 'marketplace{id}',
        creationDate: 'marketplace{creationDate}',
        lastChangeDate: 'marketplace{lastChangeDate}',
        name: 'marketplace{name}',
        systemStatus: 'marketplace{systemStatus}',
        errors: 'marketplace{errors}',
        warnings: 'marketplace{warnings}',
        currencyCode: 'marketplace{currencyCode}',
        currencySymbol: 'marketplace{currencySymbol}',
        currencyOffset: 'marketplace{currencyOffset}',
        organization: {
            id: 'marketplace{organization{id}}',
            creationDate: 'marketplace{organization{creationDate}}',
            lastChangeDate: 'marketplace{organization{lastChangeDate}}',
            name: 'marketplace{organization{name}}',
            systemStatus: 'marketplace{organization{systemStatus}}',
            errors: 'marketplace{organization{errors}}',
            warnings: 'marketplace{organization{warnings}}',
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
                    warnings:
                        'marketplace{mediaChannels{edges{node{warnings}}}}',
                    platform:
                        'marketplace{mediaChannels{edges{node{platform}}}}',
                    remoteId:
                        'marketplace{mediaChannels{edges{node{remoteId}}}}',
                    remoteState:
                        'marketplace{mediaChannels{edges{node{remoteState}}}}',
                    currency:
                        'marketplace{mediaChannels{edges{node{currency}}}}',
                    currencyCode:
                        'marketplace{mediaChannels{edges{node{currencyCode}}}}',
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
                    warnings:
                        'marketplace{campaignTemplates{edges{node{warnings}}}}',
                    kpi: 'marketplace{campaignTemplates{edges{node{kpi}}}}',
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
                    warnings: 'marketplace{vendors{edges{node{warnings}}}}',
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
                    email: 'marketplace{vendorTokens{edges{node{email}}}}',
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
                    warnings:
                        'marketplace{creativeTemplates{edges{node{warnings}}}}',
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
        products: {
            edges: {
                node: {
                    id: 'marketplace{products{edges{node{id}}}}',
                    creationDate:
                        'marketplace{products{edges{node{creationDate}}}}',
                    lastChangeDate:
                        'marketplace{products{edges{node{lastChangeDate}}}}',
                    resultsSource:
                        'marketplace{products{edges{node{resultsSource}}}}',
                    kpi: 'marketplace{products{edges{node{kpi}}}}',
                    systemStatus:
                        'marketplace{products{edges{node{systemStatus}}}}',
                    errors: 'marketplace{products{edges{node{errors}}}}',
                    warnings: 'marketplace{products{edges{node{warnings}}}}',
                    name: 'marketplace{products{edges{node{name}}}}',
                    sku: 'marketplace{products{edges{node{sku}}}}',
                    remoteState:
                        'marketplace{products{edges{node{remoteState}}}}',
                    metadata: 'marketplace{products{edges{node{metadata}}}}',
                    imported: 'marketplace{products{edges{node{imported}}}}',
                },
                cursor: 'marketplace{products{edges{cursor}}}',
            },
            pageInfo: {
                endCursor: 'marketplace{products{pageInfo{endCursor}}}',
                startCursor: 'marketplace{products{pageInfo{startCursor}}}',
                hasNextPage: 'marketplace{products{pageInfo{hasNextPage}}}',
                hasPreviousPage:
                    'marketplace{products{pageInfo{hasPreviousPage}}}',
            },
            totalCount: 'marketplace{products{totalCount}}',
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
    | 'warnings'
    | 'marketplace{id}'
    | 'marketplace{creationDate}'
    | 'marketplace{lastChangeDate}'
    | 'marketplace{name}'
    | 'marketplace{systemStatus}'
    | 'marketplace{errors}'
    | 'marketplace{warnings}'
    | 'marketplace{currencyCode}'
    | 'marketplace{currencySymbol}'
    | 'marketplace{currencyOffset}'
    | 'marketplace{organization{id}}'
    | 'marketplace{organization{creationDate}}'
    | 'marketplace{organization{lastChangeDate}}'
    | 'marketplace{organization{name}}'
    | 'marketplace{organization{systemStatus}}'
    | 'marketplace{organization{errors}}'
    | 'marketplace{organization{warnings}}'
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
    | 'marketplace{mediaChannels{edges{node{warnings}}}}'
    | 'marketplace{mediaChannels{edges{node{platform}}}}'
    | 'marketplace{mediaChannels{edges{node{remoteId}}}}'
    | 'marketplace{mediaChannels{edges{node{remoteState}}}}'
    | 'marketplace{mediaChannels{edges{node{currency}}}}'
    | 'marketplace{mediaChannels{edges{node{currencyCode}}}}'
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
    | 'marketplace{campaignTemplates{edges{node{warnings}}}}'
    | 'marketplace{campaignTemplates{edges{node{kpi}}}}'
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
    | 'marketplace{vendors{edges{node{warnings}}}}'
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
    | 'marketplace{vendorTokens{edges{node{email}}}}'
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
    | 'marketplace{creativeTemplates{edges{node{warnings}}}}'
    | 'marketplace{creativeTemplates{edges{cursor}}}'
    | 'marketplace{creativeTemplates{pageInfo{endCursor}}}'
    | 'marketplace{creativeTemplates{pageInfo{startCursor}}}'
    | 'marketplace{creativeTemplates{pageInfo{hasNextPage}}}'
    | 'marketplace{creativeTemplates{pageInfo{hasPreviousPage}}}'
    | 'marketplace{creativeTemplates{totalCount}}'
    | 'marketplace{products{edges{node{id}}}}'
    | 'marketplace{products{edges{node{creationDate}}}}'
    | 'marketplace{products{edges{node{lastChangeDate}}}}'
    | 'marketplace{products{edges{node{resultsSource}}}}'
    | 'marketplace{products{edges{node{kpi}}}}'
    | 'marketplace{products{edges{node{systemStatus}}}}'
    | 'marketplace{products{edges{node{errors}}}}'
    | 'marketplace{products{edges{node{warnings}}}}'
    | 'marketplace{products{edges{node{name}}}}'
    | 'marketplace{products{edges{node{sku}}}}'
    | 'marketplace{products{edges{node{remoteState}}}}'
    | 'marketplace{products{edges{node{metadata}}}}'
    | 'marketplace{products{edges{node{imported}}}}'
    | 'marketplace{products{edges{cursor}}}'
    | 'marketplace{products{pageInfo{endCursor}}}'
    | 'marketplace{products{pageInfo{startCursor}}}'
    | 'marketplace{products{pageInfo{hasNextPage}}}'
    | 'marketplace{products{pageInfo{hasPreviousPage}}}'
    | 'marketplace{products{totalCount}}';
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
                    warnings: 'user{organizations{edges{node{warnings}}}}';
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
        noticeOptIn: 'user{noticeOptIn}';
        newsletterOptIn: 'user{newsletterOptIn}';
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
                    warnings: 'user{organizations{edges{node{warnings}}}}',
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
        noticeOptIn: 'user{noticeOptIn}',
        newsletterOptIn: 'user{newsletterOptIn}',
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
    | 'user{organizations{edges{node{warnings}}}}'
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
    | 'user{noticeOptIn}'
    | 'user{newsletterOptIn}';
export type RequestResultFields = {
    result: 'result';
};
export const RequestResultFields: RequestResultFields = {
    result: 'result',
};
export type RequestResultField = 'result';
