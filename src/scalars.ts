export type ObjectId = string;
export type NonEmptyString = string;
export type DateISO = Date | string;
export type JSONObject = object;

interface SingleValueFilter {
    field: string;
    operator:
        | 'EQUALS'
        | 'NOT_EQUALS'
        | 'CONTAINS'
        | 'ICONTAINS'
        | 'GT'
        | 'GTE'
        | 'LT'
        | 'LTE';
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

type Filter = SingleValueFilter | ArrayValueFilter | ValuelessFilter;

export type FilterInput = Filter | Filter[] | Filter[][];
