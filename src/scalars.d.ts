export declare type ObjectId = string;
export declare type NonEmptyString = string;
export declare type DateISO = Date | string;
export declare type JSONObject = object;
interface SingleValueFilter {
    field: string;
    operator: 'EQUALS' | 'NOT_EQUALS' | 'CONTAINS' | 'ICONTAINS' | 'GT' | 'GTE' | 'LT' | 'LTE';
    value: string;
}
interface ArrayValueFilter {
    field: string;
    operator: 'IN';
    value: string[];
}
interface ValuelessFilter {
    field: string;
    operator: 'IS_NULL';
}
declare type Filter = SingleValueFilter | ArrayValueFilter | ValuelessFilter;
export declare type FilterInput = Filter | Filter[] | Filter[][];
export {};
