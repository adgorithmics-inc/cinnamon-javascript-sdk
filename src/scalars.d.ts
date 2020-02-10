export declare type ObjectId = string;
export declare type NonEmptyString = string;
export declare type DateISO = Date | string;
export declare type JSONObject = Record<string, unknown>;
export declare enum Operator {
    Equals = "EQUALS",
    NotEquals = "NOT_EQUALS",
    Contains = "CONTAINS",
    Icontains = "ICONTAINS",
    NotContains = "NOT_CONTAINS",
    NotIcontains = "NOT_ICONTAINS",
    Gt = "GT",
    Gte = "GTE",
    Lt = "LT",
    Lte = "LTE",
    In = "IN",
    NotIn = "NOT_IN",
    IsNull = "IS_NULL",
    NotNull = "NOT_NULL"
}
interface SingleValueFilter {
    field: string;
    operator: 'EQUALS' | 'NOT_EQUALS' | 'CONTAINS' | 'ICONTAINS' | 'NOT_CONTAINS' | 'NOT_ICONTAINS' | 'GT' | 'GTE' | 'LT' | 'LTE';
    value: string;
}
interface ArrayValueFilter {
    field: string;
    operator: 'IN' | 'NOT_IN';
    value: string[];
}
interface ValuelessFilter {
    field: string;
    operator: 'IS_NULL' | 'NOT_NULL';
}
declare type Filter = SingleValueFilter | ArrayValueFilter | ValuelessFilter;
export declare type FilterInput = Filter | Filter[] | Filter[][];
export {};
