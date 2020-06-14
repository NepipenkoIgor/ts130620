import 'reflect-metadata';

// export function CheckRuntime(target: object, key: string) {
//     const {name: type} = Reflect.getMetadata('design:type', target, key)
//     let value: any;
//     Object.defineProperty(target, key, {
//         get(): any {
//             return value;
//         },
//         set(newValue: any): void {
//             const realType = typeof newValue;
//             if (realType !== type.toLowerCase()) {
//                 throw new Error(`type of ${key} is not ${type}. You tried to set ${realType}`)
//             }
//             value = newValue;
//         }
//     })
// }


const RANGE_KEY = 'design:RANGE_KEY';

export function Range(min: number, max: number): ParameterDecorator {
    return (target: object, key: string | symbol, index: number) => {
        const existingRange = Reflect.getMetadata(RANGE_KEY, target, key) || {}
        existingRange[index] = [min, max]
        Reflect.defineMetadata(RANGE_KEY, existingRange, target, key)
    }
}

export function Validate(target: object, key: string, descriptor: PropertyDescriptor): void {
    const originalFn = descriptor.value;
    descriptor.value = (...args: any[]) => {
        const existingRange = Reflect.getMetadata(RANGE_KEY, target, key) || {}
        for (const [paramIndex, range] of Object.entries(existingRange)) {
            const [min, max] = range as [number, number];
            const paramValue = args[Number(paramIndex)] as number;
            if (paramValue < min || paramValue > max) {
                throw new Error(`Error in ${target.constructor.name} instance.
                Parameter of method ${key} on position ${Number(paramIndex) + 1} out of range [${[min, max]}].
                Current value is ${paramValue}
                `)
            }
        }
        return originalFn(...args);
    }
}
