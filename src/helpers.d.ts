import { codes } from '@adgorithmics/graphql-errors';
import { AdgoError } from '@adgorithmics/adgo-errors';
import { Query, Mutation, SystemStatus } from './generated/graphql';
import { Operator } from './scalars';
export declare function bind<T extends Function>(_target: object, propertyKey: string, descriptor: TypedPropertyDescriptor<T>): TypedPropertyDescriptor<T> | void;
export declare function pageOperationGenerator(operation: 'query' | 'mutation', name: keyof Query | keyof Mutation, fields: string[] | undefined, variables: Record<string, string>): string;
export declare function pageQueryGenerator(name: keyof Query, fields?: Array<string>, variables?: Record<string, string>): string;
export declare function pageMutationGenerator(name: keyof Mutation, fields: string[] | undefined, variables: Record<string, string>): string;
export interface APIError {
    message?: string;
    extentions?: {
        code?: codes;
    };
}
export declare class CinnamonError extends AdgoError {
    raw?: {
        data?: unknown;
        errors?: Array<APIError>;
    };
    constructor(error: AdgoError | Error | string, raw?: {
        data?: unknown;
        errors?: Array<APIError>;
    });
}
export declare const FILTERS: {
    MUTABLE_OBJECTS: {
        field: string;
        operator: Operator;
        value: SystemStatus[];
    };
};
