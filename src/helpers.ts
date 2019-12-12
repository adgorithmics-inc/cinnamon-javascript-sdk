import { Query } from './generated/graphql';

export type Deep<T> = {
    0: T;
    1: Deep<T[keyof T]>;
}[T extends string ? 0 : 1];

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

export function pageQueryGenerator<T>(
    name: keyof Query,
    fields: Deep<T>[],
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
