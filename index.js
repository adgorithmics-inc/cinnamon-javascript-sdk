'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var fetch = _interopDefault(require('cross-fetch'));
var get = _interopDefault(require('lodash.get'));
var graphqlErrors = require('@adgorithmics/graphql-errors');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
};

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var fields = function (keys) {
    return keys.reduce(function (keys, key) {
        var _a;
        return (__assign({}, keys, (_a = {}, _a[key] = key, _a)));
    }, {});
};
var TokenFields = fields(["token", "refreshToken", "expiryDate", "user"]);
var OrganizationFields = fields(["id", "creationDate", "lastChangeDate", "users", "marketplaces", "name", "tier"]);
var UserFields = fields(["id", "creationDate", "lastChangeDate", "email", "firstName", "lastName", "organizations", "entitlements"]);
var MarketplaceFields = fields(["id", "creationDate", "lastChangeDate", "name", "organization", "mediaChannels", "campaignTemplates", "vendors"]);
var MediaChannelFields = fields(["id", "creationDate", "lastChangeDate", "name", "platform", "remoteId", "catalogs", "marketplace"]);
var CampaignTemplateFields = fields(["id", "creationDate", "lastChangeDate", "name", "description", "platform", "remoteId", "marketplace", "marketingCampaigns"]);
var VendorFields = fields(["id", "creationDate", "lastChangeDate", "name", "marketplace", "products"]);
var CatalogFields = fields(["id", "creationDate", "lastChangeDate", "name", "mediaChannel", "remoteId", "products"]);
var ProductFields = fields(["id", "creationDate", "lastChangeDate", "name", "sku", "remoteState", "marketingCampaigns", "catalog", "metadata", "vendor"]);
var MarketingCampaignFields = fields(["id", "creationDate", "lastChangeDate", "status", "marketingAds", "products", "vendor", "campaignTemplate", "mediaChannel", "results", "creativeSpec", "runTimeSpec"]);
var MarketingAdFields = fields(["id", "creationDate", "lastChangeDate", "remoteId", "preview", "results", "marketingCampaign", "vendor"]);
var ResultFields = fields(["id", "creationDate", "lastChangeDate", "date", "impressions", "results", "type", "resource", "vendor"]);
var EntitlementFields = fields(["id", "creationDate", "lastChangeDate", "user", "type", "resource", "permissions"]);

(function (AuthField) {
    AuthField["Id"] = "id";
    AuthField["UserId"] = "userId";
    AuthField["VendorId"] = "vendorId";
    AuthField["OrganizationId"] = "organizationId";
    AuthField["MarketplaceId"] = "marketplaceId";
    AuthField["MediaChannelId"] = "mediaChannelId";
    AuthField["CampaignTemplateId"] = "campaignTemplateId";
    AuthField["ResourceId"] = "resourceId";
    AuthField["CatalogId"] = "catalogId";
    AuthField["ProductIds"] = "productIds";
})(exports.AuthField || (exports.AuthField = {}));
(function (AuthLocation) {
    AuthLocation["Arg"] = "ARG";
    AuthLocation["Input"] = "INPUT";
    AuthLocation["Parent"] = "PARENT";
    AuthLocation["Catalog"] = "CATALOG";
    AuthLocation["Entitlement"] = "ENTITLEMENT";
    AuthLocation["MarketingAd"] = "MARKETING_AD";
    AuthLocation["MarketingCampaign"] = "MARKETING_CAMPAIGN";
    AuthLocation["CampaignTemplate"] = "CAMPAIGN_TEMPLATE";
    AuthLocation["MediaChannel"] = "MEDIA_CHANNEL";
    AuthLocation["Product"] = "PRODUCT";
    AuthLocation["Result"] = "RESULT";
    AuthLocation["Vendor"] = "VENDOR";
})(exports.AuthLocation || (exports.AuthLocation = {}));
(function (AuthPermission) {
    AuthPermission["Read"] = "READ";
    AuthPermission["Write"] = "WRITE";
    AuthPermission["Delete"] = "DELETE";
    AuthPermission["ManageEntitlements"] = "MANAGE_ENTITLEMENTS";
})(exports.AuthPermission || (exports.AuthPermission = {}));
(function (AuthType) {
    AuthType["Entitlement"] = "ENTITLEMENT";
    AuthType["Vendor"] = "VENDOR";
    AuthType["Product"] = "PRODUCT";
})(exports.AuthType || (exports.AuthType = {}));
(function (CacheControlScope) {
    CacheControlScope["Public"] = "PUBLIC";
    CacheControlScope["Private"] = "PRIVATE";
})(exports.CacheControlScope || (exports.CacheControlScope = {}));
(function (EntitlementResourceTypeEnum) {
    EntitlementResourceTypeEnum["Marketplace"] = "Marketplace";
    EntitlementResourceTypeEnum["Organization"] = "Organization";
    EntitlementResourceTypeEnum["MediaChannel"] = "MediaChannel";
})(exports.EntitlementResourceTypeEnum || (exports.EntitlementResourceTypeEnum = {}));
(function (MarketingCampaignStatus) {
    MarketingCampaignStatus["Active"] = "ACTIVE";
    MarketingCampaignStatus["Paused"] = "PAUSED";
})(exports.MarketingCampaignStatus || (exports.MarketingCampaignStatus = {}));
(function (OrganizationTierEnum) {
    OrganizationTierEnum["Standard"] = "Standard";
    OrganizationTierEnum["Developer"] = "Developer";
})(exports.OrganizationTierEnum || (exports.OrganizationTierEnum = {}));
(function (Platform) {
    Platform["Facebook"] = "facebook";
})(exports.Platform || (exports.Platform = {}));
(function (ResultResourceTypeEnum) {
    ResultResourceTypeEnum["MarketingAd"] = "MarketingAd";
    ResultResourceTypeEnum["MarketingCampaign"] = "MarketingCampaign";
})(exports.ResultResourceTypeEnum || (exports.ResultResourceTypeEnum = {}));

var Cinnamon = /** @class */ (function () {
    function Cinnamon(config) {
        this.refreshToken = '';
        this.token = '';
        this.config = config;
    }
    Cinnamon.prototype.api = function (query, variables, headers, token) {
        if (variables === void 0) { variables = {}; }
        if (headers === void 0) { headers = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var response, json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(this.config.url, {
                            method: 'POST',
                            headers: __assign({ authorization: "Bearer " + (token || this.token), accept: 'application/json', 'content-type': 'application/json' }, headers),
                            body: JSON.stringify({ query: query, variables: variables }),
                        })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        json = _a.sent();
                        if (!json.errors) return [3 /*break*/, 5];
                        if (!(json.errors.some(function (error) {
                            return get(error, 'extentions.code') === graphqlErrors.codes.TOKEN_EXPIRED;
                        }) &&
                            !token)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.refreshLogin({ refreshToken: this.refreshToken })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, this.api(query, variables, headers, token)];
                    case 4: throw new Error(json.errors.map(function (error) { return error.message; }).join('\n'));
                    case 5: return [2 /*return*/, json];
                }
            });
        });
    };
    Cinnamon.prototype.apiPaging = function (query, variables, headers, token) {
        if (variables === void 0) { variables = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var result, getPage;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        result = [];
                        getPage = function (after) {
                            if (after === void 0) { after = ''; }
                            return __awaiter(_this, void 0, void 0, function () {
                                var data, _a, edges, pageInfo;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0: return [4 /*yield*/, this.api(query, __assign({}, variables, { after: after }), headers, token)];
                                        case 1:
                                            data = (_b.sent()).data;
                                            _a = Object.values(data)[0], edges = _a.edges, pageInfo = _a.pageInfo;
                                            result.push.apply(result, edges.map(function (_a) {
                                                var node = _a.node;
                                                return node;
                                            }));
                                            if (!pageInfo.hasNextPage) return [3 /*break*/, 3];
                                            return [4 /*yield*/, getPage(pageInfo.endCursor)];
                                        case 2:
                                            _b.sent();
                                            _b.label = 3;
                                        case 3: return [2 /*return*/];
                                    }
                                });
                            });
                        };
                        return [4 /*yield*/, getPage()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    // ####################################
    // User
    // ####################################
    Cinnamon.prototype.login = function (input) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api("mutation($input: UserLoginInput!) {\n                login(input: $input) {\n                    " + [
                            TokenFields.expiryDate,
                            TokenFields.token,
                            TokenFields.refreshToken,
                        ].join(' ') + "\n                }\n            }", { input: input })];
                    case 1:
                        result = (_a.sent()).data.login;
                        if (result.token && result.refreshToken) {
                            this.token = result.token;
                            this.refreshToken = result.refreshToken;
                        }
                        return [2 /*return*/, result];
                }
            });
        });
    };
    Cinnamon.prototype.refreshLogin = function (input) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api("mutation($input: RefreshTokenInput!) {\n                refreshLogin(input: $input) {\n                    " + [
                            TokenFields.expiryDate,
                            TokenFields.token,
                            TokenFields.refreshToken,
                        ].join(' ') + "\n                }\n            }", { input: input })];
                    case 1:
                        result = (_a.sent()).data.refreshLogin;
                        if (result.token && result.refreshToken) {
                            this.token = result.token;
                            this.refreshToken = result.refreshToken;
                        }
                        return [2 /*return*/, result];
                }
            });
        });
    };
    Cinnamon.prototype.me = function (fields, headers, token) {
        if (fields === void 0) { fields = [UserFields.id, UserFields.email]; }
        if (headers === void 0) { headers = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api("query {\n                me {\n                    " + fields.join(' ') + "\n                }\n            }", {}, headers, token)];
                    case 1: return [2 /*return*/, (_a.sent()).data.me];
                }
            });
        });
    };
    Cinnamon.prototype.updateUser = function (input, fields, headers, token) {
        if (fields === void 0) { fields = [UserFields.id, UserFields.email]; }
        if (headers === void 0) { headers = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api("mutation($input: UserUpdateInput!) {\n                updateUser(input: $input) {\n                    " + fields.join(' ') + "\n                }\n            }", { input: input }, headers, token)];
                    case 1: return [2 /*return*/, (_a.sent()).data.updateUser];
                }
            });
        });
    };
    // ####################################
    // Organization
    // ####################################
    Cinnamon.prototype.organization = function (id, fields, headers, token) {
        if (fields === void 0) { fields = [
            OrganizationFields.id,
            OrganizationFields.name,
        ]; }
        if (headers === void 0) { headers = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api("query($id: ID!) {\n                organization(id: $id) {\n                    " + fields.join(' ') + "\n                }\n            }", { id: id }, headers, token)];
                    case 1: return [2 /*return*/, (_a.sent()).data.organization];
                }
            });
        });
    };
    Cinnamon.prototype.createOrganization = function (input, fields, headers, token) {
        if (fields === void 0) { fields = [
            OrganizationFields.id,
            OrganizationFields.name,
        ]; }
        if (headers === void 0) { headers = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api("mutation($input: OrganizationInput!) {\n                createOrganization(input: $input) {\n                    " + fields.join(' ') + "\n                }\n            }", { input: input }, headers, token)];
                    case 1: return [2 /*return*/, (_a.sent()).data.createOrganization];
                }
            });
        });
    };
    Cinnamon.prototype.updateOrganization = function (id, input, fields, headers, token) {
        if (fields === void 0) { fields = [
            OrganizationFields.id,
            OrganizationFields.name,
        ]; }
        if (headers === void 0) { headers = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api("mutation($id: ID!, $input: OrganizationUpdateInput!) {\n                updateOrganization(id: $id, input: $input) {\n                    " + fields.join(' ') + "\n                }\n            }", { id: id, input: input }, headers, token)];
                    case 1: return [2 /*return*/, (_a.sent()).data.updateOrganization];
                }
            });
        });
    };
    // ####################################
    // Marketplace
    // ####################################
    Cinnamon.prototype.marketplace = function (id, fields, headers, token) {
        if (fields === void 0) { fields = [
            MarketplaceFields.id,
            MarketplaceFields.name,
        ]; }
        if (headers === void 0) { headers = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api("query($id: ID!) {\n                marketplace(id: $id) {\n                    " + fields.join(' ') + "\n                }\n            }", { id: id }, headers, token)];
                    case 1: return [2 /*return*/, (_a.sent()).data.marketplace];
                }
            });
        });
    };
    Cinnamon.prototype.createMarketplace = function (input, fields, headers, token) {
        if (fields === void 0) { fields = [
            MarketplaceFields.id,
            MarketplaceFields.name,
        ]; }
        if (headers === void 0) { headers = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api("mutation($input: MarketplaceInput!) {\n                createMarketplace(input: $input) {\n                    " + fields.join(' ') + "\n                }\n            }", { input: input }, headers, token)];
                    case 1: return [2 /*return*/, (_a.sent()).data.createMarketplace];
                }
            });
        });
    };
    Cinnamon.prototype.updateMarketplace = function (id, input, fields, headers, token) {
        if (fields === void 0) { fields = [
            MarketplaceFields.id,
            MarketplaceFields.name,
        ]; }
        if (headers === void 0) { headers = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api("mutation($id: ID!, $input: MarketplaceUpdateInput!) {\n                updateMarketplace(id: $id, input: $input) {\n                    " + fields.join(' ') + "\n                }\n            }", { id: id, input: input }, headers, token)];
                    case 1: return [2 /*return*/, (_a.sent()).data.updateMarketplace];
                }
            });
        });
    };
    Cinnamon.prototype.deleteMarketplace = function (id, headers, token) {
        if (headers === void 0) { headers = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api("mutation($id: ID!) {\n                deleteMarketplace(id: $id) {\n                    id\n                }\n            }", { id: id }, headers, token)];
                    case 1: return [2 /*return*/, (_a.sent()).data.deleteMarketplace];
                }
            });
        });
    };
    // ####################################
    // MediaChannel
    // ####################################
    Cinnamon.prototype.mediaChannel = function (id, fields, headers, token) {
        if (fields === void 0) { fields = [
            MediaChannelFields.id,
            MediaChannelFields.name,
        ]; }
        if (headers === void 0) { headers = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api("query($id: ID!) {\n                mediaChannel(id: $id) {\n                    " + fields.join(' ') + "\n                }\n            }", { id: id }, headers, token)];
                    case 1: return [2 /*return*/, (_a.sent()).data.mediaChannel];
                }
            });
        });
    };
    Cinnamon.prototype.createMediaChannel = function (input, fields, headers, token) {
        if (fields === void 0) { fields = [
            MediaChannelFields.id,
            MediaChannelFields.name,
        ]; }
        if (headers === void 0) { headers = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api("mutation($input: MediaChannelInput!) {\n                createMediaChannel(input: $input) {\n                    " + fields.join(' ') + "\n                }\n            }", { input: input }, headers, token)];
                    case 1: return [2 /*return*/, (_a.sent()).data.createMediaChannel];
                }
            });
        });
    };
    Cinnamon.prototype.updateMediaChannel = function (id, input, fields, headers, token) {
        if (fields === void 0) { fields = [
            MediaChannelFields.id,
            MediaChannelFields.name,
        ]; }
        if (headers === void 0) { headers = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api("mutation($id: ID!, $input: MediaChannelUpdateInput!) {\n                updateMediaChannel(id: $id, input: $input) {\n                    " + fields.join(' ') + "\n                }\n            }", { id: id, input: input }, headers, token)];
                    case 1: return [2 /*return*/, (_a.sent()).data.updateMediaChannel];
                }
            });
        });
    };
    Cinnamon.prototype.deleteMediaChannel = function (id, headers, token) {
        if (headers === void 0) { headers = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api("mutation($id: ID!) {\n                deleteMediaChannel(id: $id) {\n                    id\n                }\n            }", { id: id }, headers, token)];
                    case 1: return [2 /*return*/, (_a.sent()).data.deleteMediaChannel];
                }
            });
        });
    };
    // ####################################
    // CampaignTemplate
    // ####################################
    Cinnamon.prototype.campaignTemplate = function (id, fields, headers, token) {
        if (fields === void 0) { fields = [
            CampaignTemplateFields.id,
            CampaignTemplateFields.name,
        ]; }
        if (headers === void 0) { headers = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api("query($id: ID!) {\n                campaignTemplate(id: $id) {\n                    " + fields.join(' ') + "\n                }\n            }", { id: id }, headers, token)];
                    case 1: return [2 /*return*/, (_a.sent()).data.campaignTemplate];
                }
            });
        });
    };
    Cinnamon.prototype.campaignTemplates = function (fields, headers, token) {
        if (fields === void 0) { fields = [
            CampaignTemplateFields.id,
            CampaignTemplateFields.name,
        ]; }
        if (headers === void 0) { headers = {}; }
        return this.apiPaging("query($after: ID!) {\n                campaignTemplates(after: $after) {\n                    pageInfo {\n                        hasNextPage\n                        endCursor\n                    }\n                    edges {\n                        node {\n                            " + fields.join(' ') + "\n                        }\n                    }\n                }\n            }", {}, headers, token);
    };
    // ####################################
    // Vendor
    // ####################################
    Cinnamon.prototype.vendor = function (id, fields, headers, token) {
        if (fields === void 0) { fields = [
            VendorFields.id,
            VendorFields.name,
        ]; }
        if (headers === void 0) { headers = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api("query($id: ID!) {\n                vendor(id: $id) {\n                    " + fields.join(' ') + "\n                }\n            }", { id: id }, headers, token)];
                    case 1: return [2 /*return*/, (_a.sent()).data.vendor];
                }
            });
        });
    };
    Cinnamon.prototype.createVendor = function (input, fields, headers, token) {
        if (fields === void 0) { fields = [
            VendorFields.id,
            VendorFields.name,
        ]; }
        if (headers === void 0) { headers = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api("mutation($input: VendorInput!) {\n                createVendor(input: $input) {\n                    " + fields.join(' ') + "\n                }\n            }", { input: input }, headers, token)];
                    case 1: return [2 /*return*/, (_a.sent()).data.createVendor];
                }
            });
        });
    };
    Cinnamon.prototype.updateVendor = function (id, input, fields, headers, token) {
        if (fields === void 0) { fields = [
            VendorFields.id,
            VendorFields.name,
        ]; }
        if (headers === void 0) { headers = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api("mutation($id: ID!, $input: VendorUpdateInput!) {\n                updateVendor(id: $id, input: $input) {\n                    " + fields.join(' ') + "\n                }\n            }", { id: id, input: input }, headers, token)];
                    case 1: return [2 /*return*/, (_a.sent()).data.updateVendor];
                }
            });
        });
    };
    Cinnamon.prototype.deleteVendor = function (id, headers, token) {
        if (headers === void 0) { headers = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api("mutation($id: ID!) {\n                deleteVendor(id: $id) {\n                    id\n                }\n            }", { id: id }, headers, token)];
                    case 1: return [2 /*return*/, (_a.sent()).data.deleteVendor];
                }
            });
        });
    };
    // ####################################
    // Catalog
    // ####################################
    Cinnamon.prototype.catalog = function (id, fields, headers, token) {
        if (fields === void 0) { fields = [
            CatalogFields.id,
            CatalogFields.name,
        ]; }
        if (headers === void 0) { headers = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api("query($id: ID!) {\n                catalog(id: $id) {\n                    " + fields.join(' ') + "\n                }\n            }", { id: id }, headers, token)];
                    case 1: return [2 /*return*/, (_a.sent()).data.catalog];
                }
            });
        });
    };
    Cinnamon.prototype.createCatalog = function (input, fields, headers, token) {
        if (fields === void 0) { fields = [
            CatalogFields.id,
            CatalogFields.name,
        ]; }
        if (headers === void 0) { headers = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api("mutation($input: CatalogInput!) {\n                createCatalog(input: $input) {\n                    " + fields.join(' ') + "\n                }\n            }", { input: input }, headers, token)];
                    case 1: return [2 /*return*/, (_a.sent()).data.createCatalog];
                }
            });
        });
    };
    Cinnamon.prototype.updateCatalog = function (id, input, fields, headers, token) {
        if (fields === void 0) { fields = [
            CatalogFields.id,
            CatalogFields.name,
        ]; }
        if (headers === void 0) { headers = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api("mutation($id: ID!, $input: CatalogUpdateInput!) {\n                updateCatalog(id: $id, input: $input) {\n                    " + fields.join(' ') + "\n                }\n            }", { id: id, input: input }, headers, token)];
                    case 1: return [2 /*return*/, (_a.sent()).data.updateCatalog];
                }
            });
        });
    };
    Cinnamon.prototype.deleteCatalog = function (id, headers, token) {
        if (headers === void 0) { headers = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api("mutation($id: ID!) {\n                deleteCatalog(id: $id) {\n                    id\n                }\n            }", { id: id }, headers, token)];
                    case 1: return [2 /*return*/, (_a.sent()).data.deleteCatalog];
                }
            });
        });
    };
    // ####################################
    // Product
    // ####################################
    Cinnamon.prototype.product = function (id, fields, headers, token) {
        if (fields === void 0) { fields = [
            ProductFields.id,
            ProductFields.name,
        ]; }
        if (headers === void 0) { headers = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api("query($id: ID!) {\n                product(id: $id) {\n                    " + fields.join(' ') + "\n                }\n            }", { id: id }, headers, token)];
                    case 1: return [2 /*return*/, (_a.sent()).data.product];
                }
            });
        });
    };
    Cinnamon.prototype.createProduct = function (input, fields, headers, token) {
        if (fields === void 0) { fields = [
            ProductFields.id,
            ProductFields.name,
        ]; }
        if (headers === void 0) { headers = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api("mutation($input: ProductInput!) {\n                createProduct(input: $input) {\n                    " + fields.join(' ') + "\n                }\n            }", { input: input }, headers, token)];
                    case 1: return [2 /*return*/, (_a.sent()).data.createProduct];
                }
            });
        });
    };
    Cinnamon.prototype.updateProduct = function (id, input, fields, headers, token) {
        if (fields === void 0) { fields = [
            ProductFields.id,
            ProductFields.name,
        ]; }
        if (headers === void 0) { headers = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api("mutation($id: ID!, $input: ProductUpdateInput!) {\n                updateProduct(id: $id, input: $input) {\n                    " + fields.join(' ') + "\n                }\n            }", { id: id, input: input }, headers, token)];
                    case 1: return [2 /*return*/, (_a.sent()).data.updateProduct];
                }
            });
        });
    };
    Cinnamon.prototype.deleteProduct = function (id, headers, token) {
        if (headers === void 0) { headers = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api("mutation($id: ID!) {\n                deleteProduct(id: $id) {\n                    id\n                }\n            }", { id: id }, headers, token)];
                    case 1: return [2 /*return*/, (_a.sent()).data.deleteProduct];
                }
            });
        });
    };
    // ####################################
    // MarketingCampaign
    // ####################################
    Cinnamon.prototype.marketingCampaign = function (id, fields, headers, token) {
        if (fields === void 0) { fields = [
            MarketingCampaignFields.id,
            MarketingCampaignFields.status,
        ]; }
        if (headers === void 0) { headers = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api("query($id: ID!) {\n                marketingCampaign(id: $id) {\n                    " + fields.join(' ') + "\n                }\n            }", { id: id }, headers, token)];
                    case 1: return [2 /*return*/, (_a.sent()).data.marketingCampaign];
                }
            });
        });
    };
    Cinnamon.prototype.createMarketingCampaign = function (input, fields, headers, token) {
        if (fields === void 0) { fields = [
            MarketingCampaignFields.id,
            MarketingCampaignFields.status,
        ]; }
        if (headers === void 0) { headers = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api("mutation($input: MarketingCampaignInput!) {\n                createMarketingCampaign(input: $input) {\n                    " + fields.join(' ') + "\n                }\n            }", { input: input }, headers, token)];
                    case 1: return [2 /*return*/, (_a.sent()).data.createMarketingCampaign];
                }
            });
        });
    };
    Cinnamon.prototype.updateMarketingCampaign = function (id, input, fields, headers, token) {
        if (fields === void 0) { fields = [
            MarketingCampaignFields.id,
            MarketingCampaignFields.status,
        ]; }
        if (headers === void 0) { headers = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api("mutation($id: ID!, $input: MarketingCampaignUpdateInput!) {\n                updateMarketingCampaign(id: $id, input: $input) {\n                    " + fields.join(' ') + "\n                }\n            }", { id: id, input: input }, headers, token)];
                    case 1: return [2 /*return*/, (_a.sent()).data.updateMarketingCampaign];
                }
            });
        });
    };
    Cinnamon.prototype.deleteMarketingCampaign = function (id, headers, token) {
        if (headers === void 0) { headers = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api("mutation($id: ID!) {\n                deleteMarketingCampaign(id: $id) {\n                    id\n                }\n            }", { id: id }, headers, token)];
                    case 1: return [2 /*return*/, (_a.sent()).data.deleteMarketingCampaign];
                }
            });
        });
    };
    // ####################################
    // MarketingAd
    // ####################################
    Cinnamon.prototype.marketingAd = function (id, fields, headers, token) {
        if (fields === void 0) { fields = [
            MarketingAdFields.id,
            MarketingAdFields.remoteId,
        ]; }
        if (headers === void 0) { headers = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api("query($id: ID!) {\n                marketingAd(id: $id) {\n                    " + fields.join(' ') + "\n                }\n            }", { id: id }, headers, token)];
                    case 1: return [2 /*return*/, (_a.sent()).data.marketingAd];
                }
            });
        });
    };
    // ####################################
    // Result
    // ####################################
    Cinnamon.prototype.result = function (id, fields, headers, token) {
        if (fields === void 0) { fields = [
            ResultFields.id,
            ResultFields.results,
        ]; }
        if (headers === void 0) { headers = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api("query($id: ID!) {\n                result(id: $id) {\n                    " + fields.join(' ') + "\n                }\n            }", { id: id }, headers, token)];
                    case 1: return [2 /*return*/, (_a.sent()).data.result];
                }
            });
        });
    };
    // ####################################
    // Entitlement
    // ####################################
    Cinnamon.prototype.entitlement = function (id, fields, headers, token) {
        if (fields === void 0) { fields = [
            EntitlementFields.id,
            EntitlementFields.permissions,
        ]; }
        if (headers === void 0) { headers = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api("query($id: ID!) {\n                entitlement(id: $id) {\n                    " + fields.join(' ') + "\n                }\n            }", { id: id }, headers, token)];
                    case 1: return [2 /*return*/, (_a.sent()).data.entitlement];
                }
            });
        });
    };
    Cinnamon.prototype.createEntitlement = function (input, fields, headers, token) {
        if (fields === void 0) { fields = [
            EntitlementFields.id,
            EntitlementFields.permissions,
        ]; }
        if (headers === void 0) { headers = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api("mutation($input: EntitlementInput!) {\n                createEntitlement(input: $input) {\n                    " + fields.join(' ') + "\n                }\n            }", { input: input }, headers, token)];
                    case 1: return [2 /*return*/, (_a.sent()).data.createEntitlement];
                }
            });
        });
    };
    Cinnamon.prototype.updateEntitlement = function (id, input, fields, headers, token) {
        if (fields === void 0) { fields = [
            EntitlementFields.id,
            EntitlementFields.permissions,
        ]; }
        if (headers === void 0) { headers = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api("mutation($id: ID!, $input: EntitlementUpdateInput!) {\n                updateEntitlement(id: $id, input: $input) {\n                    " + fields.join(' ') + "\n                }\n            }", { id: id, input: input }, headers, token)];
                    case 1: return [2 /*return*/, (_a.sent()).data.updateEntitlement];
                }
            });
        });
    };
    Cinnamon.prototype.deleteEntitlement = function (id, headers, token) {
        if (headers === void 0) { headers = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api("mutation($id: ID!) {\n                deleteEntitlement(id: $id) {\n                    id\n                }\n            }", { id: id }, headers, token)];
                    case 1: return [2 /*return*/, (_a.sent()).data.deleteEntitlement];
                }
            });
        });
    };
    return Cinnamon;
}());

exports.Cinnamon = Cinnamon;
exports.TokenFields = TokenFields;
exports.OrganizationFields = OrganizationFields;
exports.UserFields = UserFields;
exports.MarketplaceFields = MarketplaceFields;
exports.MediaChannelFields = MediaChannelFields;
exports.CampaignTemplateFields = CampaignTemplateFields;
exports.VendorFields = VendorFields;
exports.CatalogFields = CatalogFields;
exports.ProductFields = ProductFields;
exports.MarketingCampaignFields = MarketingCampaignFields;
exports.MarketingAdFields = MarketingAdFields;
exports.ResultFields = ResultFields;
exports.EntitlementFields = EntitlementFields;
