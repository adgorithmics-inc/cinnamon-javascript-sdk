import { codes } from '@adgorithmics/graphql-errors';
import { AdgoError } from '@adgorithmics/adgo-errors';
import { Query } from './generated/graphql';
export declare function bind<T extends Function>(_target: object, propertyKey: string, descriptor: TypedPropertyDescriptor<T>): TypedPropertyDescriptor<T> | void;
export declare function pageQueryGenerator(name: keyof Query, fields?: Array<string>, hasShowDeleted?: boolean): string;
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
export declare const sleep: (time: number) => Promise<unknown>;
export declare type AugmentedRequired<T extends object, K extends keyof T = keyof T> = Omit<T, K> & Required<Pick<T, K>>;
export declare const NON_RETRYABLE_ERROR_CODES: codes[];
