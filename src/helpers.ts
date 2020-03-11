import { codes } from '@adgorithmics/graphql-errors';
import { AdgoError } from '@adgorithmics/adgo-errors';
import { Query, Mutation, SystemStatus } from './generated/graphql';
import { Operator } from './scalars';

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

export function pageOperationGenerator(
    operation: 'query' | 'mutation',
    name: keyof Query | keyof Mutation,
    fields: Array<string> = [],
    variables: Record<string, string>,
) {
    return `
${operation}(
    $filter: FilterInput,
    $sort: SortInput,
    $first: Int,
    $last: Int,
    $after: String,
    $before: String,${Object.entries(variables)
        .map(([key, value]) => {
            return `
    $${key}: ${value},`;
        })
        .join('')}
) {
    ${name}(
        filter: $filter,
        sort: $sort,
        first: $first,
        last: $last,
        after: $after,
        before: $before,${Object.keys(variables)
            .map(key => {
                return `
        ${key}: $${key},`;
            })
            .join('')}
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

export function pageQueryGenerator(
    name: keyof Query,
    fields: Array<string> = [],
    variables: Record<string, string> = {},
) {
    return pageOperationGenerator('query', name, fields, variables);
}

export function pageMutationGenerator(
    name: keyof Mutation,
    fields: Array<string> = [],
    variables: Record<string, string>,
) {
    return pageOperationGenerator('mutation', name, fields, variables);
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

export const FILTERS = {
    MUTABLE_OBJECTS: {
        field: 'systemStatus',
        operator: Operator.NotIn,
        value: [
            SystemStatus.PendingSync,
            SystemStatus.PendingDeletion,
            SystemStatus.Processing,
            SystemStatus.ProcessingSync,
            SystemStatus.ProcessingDeletion,
            SystemStatus.Deleted,
        ],
    },
};
