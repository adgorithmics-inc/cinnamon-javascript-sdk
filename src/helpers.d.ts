import { Query } from './generated/graphql';
export declare type Deep<T> = {
    0: T;
    1: Deep<T[keyof T]>;
}[T extends string ? 0 : 1];
export declare function bind<T extends Function>(_target: object, propertyKey: string, descriptor: TypedPropertyDescriptor<T>): TypedPropertyDescriptor<T> | void;
export declare function pageQueryGenerator<T>(name: keyof Query, fields: Deep<T>[], hasShowDeleted?: boolean): string;
