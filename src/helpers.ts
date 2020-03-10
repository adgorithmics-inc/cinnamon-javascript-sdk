import { codes } from '@adgorithmics/graphql-errors';
import { AdgoError } from '@adgorithmics/adgo-errors';
import { Query } from './generated/graphql';

// stripped down version of https://github.com/NoHomey/bind-decorator
export function bind<T extends Function>(
    _target: object,
    propertyKey: string,
    descriptor: TypedPropertyDescriptor<T>,
): TypedPropertyDescriptor<T> | void {
    return {
        configurable: true,
        get(this: T): T {
            const bound: T = descriptor.value?.bind(this);
            Object.defineProperty(this, propertyKey, {
                value: bound,
                configurable: true,
                writable: true,
            });
            return bound;
        },
    };
}

export function pageQueryGenerator(
    name: keyof Query,
    fields: Array<string> = [],
    hasShowDeleted = false,
) {
    return `
query(
    $filter: FilterInput,
    $sort: SortInput,
    $first: Int,
    $last: Int,
    $after: String,
    $before: String,
    ${hasShowDeleted ? '$showDeleted: Boolean,' : ''}
) {
    ${name}(
        filter: $filter,
        sort: $sort,
        first: $first,
        last: $last,
        after: $after,
        before: $before,
        ${hasShowDeleted ? 'showDeleted: $showDeleted,' : ''}
    ) {
        totalCount
        pageInfo {
            hasNextPage
            hasPreviousPage
            endCursor
            startCursor
        }
        edges {
            node {
                ${fields.join(' ')}
            }
        }
    }
}`;
}

export interface APIError {
    message?: string;
    extentions?: { code?: codes };
}

export class CinnamonError extends AdgoError {
    raw?: { data?: unknown; errors?: Array<APIError> };

    constructor(
        error: AdgoError | Error | string,
        raw?: { data?: unknown; errors?: Array<APIError> },
    ) {
        super(error, { raw }, 'cinnamon_error');
        this.raw = raw;
        this.name = 'CinnamonError';
    }
}

export const sleep = (time: number) =>
    new Promise(resolve => setTimeout(() => resolve(), time));

export type AugmentedRequired<
    T extends object,
    K extends keyof T = keyof T
> = Omit<T, K> & Required<Pick<T, K>>;

export const NON_RETRYABLE_ERROR_CODES = [
    codes.OBJECT_DUPLICATE,
    codes.OBJECT_NOT_FOUND,
    codes.OBJECT_IMMUTABLE,
    codes.TOKEN_EXPIRED,
    codes.TOKEN_MALFORMED,
    codes.INVALID_REFRESH_TOKEN,
    codes.TOKEN_MISSING,
    codes.ACCESS_DENIED,
    codes.INVALID_CREDENTIALS,
    codes.QUERY_DEPTH_EXCEEDED,
    codes.QUERY_COMPLEXITY_EXCEEDED,
    codes.QUERY_BREADTH_EXCEEDED,
    codes.INPUT_LIST_EMPTY,
    codes.INPUT_LIST_MIN,
    codes.INPUT_LIST_MAX,
    codes.INPUT_INVALID,
    codes.MAX_PAYLOAD_EXCEEDED,
];
