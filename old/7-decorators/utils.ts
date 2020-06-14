// declare type MethodDecorator = <T>(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>) => TypedPropertyDescriptor<T> | void;

export function Log(_target: object, _key: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const originalFn = descriptor.value;
    return {
        ...descriptor,
        value: (...args: unknown[]) => {
            console.log(`class ${_target.constructor.name} for method ${_key} value is ====>`, ...args);
            originalFn(...args);
        }
    }
}

export function Pluck(...keys: string[]) {
    return function fn(_target: object, _key: string, descriptor: PropertyDescriptor): PropertyDescriptor {
        const originalFn = descriptor.value;
        return {
            ...descriptor,
            value: function fn1(arg: any) {
                const value = keys.reduce((acc, key) => {
                    return acc[key];
                }, arg);
                originalFn.call(this, value);
            }
        }
    }
}


export function LogToSentry(_target: object, _key: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const originalFn = descriptor.value;
    return {
        ...descriptor,
        value: function fn(...args: unknown[]) {
            try {
                originalFn.call(this, ...args);
            } catch (err) {
                console.log(err);
                // sent error to sentry;
            }

        }
    }
}


export function Debounce(ms: number) {
    let timeId: number | null;
    return (_target: object, _key: string, descriptor: PropertyDescriptor): PropertyDescriptor => {
        const originalFn = descriptor.value;
        return {
            ...descriptor,
            value: function fn(...args: any[]) {
                if (timeId) {
                    clearTimeout(timeId)
                }
                timeId = setTimeout(() => {
                    originalFn.call(this, ...args)
                }, ms)
            }
        }
    }
}

export function SavePersistence(target: object, key: string) {
    const localKey = `${target.constructor.name}_${key}`;

    const getter = () => {
        return localStorage.getItem(localKey);
    }

    const setter = (newValue: string) => {
        localStorage.setItem(localKey, newValue);
    }

    Object.defineProperty(target, key, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
    })
}
