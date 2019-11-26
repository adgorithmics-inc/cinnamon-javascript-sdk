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
