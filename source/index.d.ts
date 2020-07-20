declare module 'utility-engine' {
    export function isFilledString(value: any, maximumLength?: number): boolean;
    export function isEmptyString(value: any): boolean;
    export function isString(value: any, minimumLength?: number, maximumLength?: number): boolean;

    export function isNumber(value: any, minimum?: number, maximum?: number): boolean;
    export function isPositiveNumber(value: any, maximum?: number): boolean;
    export function isNegativeNumber(value: any, minimum?: number): boolean;

    export function isInteger(value: any, minimum?: number, maximum?: number): boolean;
    export function isPositiveInteger(value: number, maximum?: number): boolean;
    export function isNegativeInteger(value: number, minimum?: number): boolean;

    export function isObject(value: any): boolean;
    export function isObjectLiteral(value: any): boolean;

    export function isClass(value: any, superclassValue?: any): boolean;
    export function isClassInstance(value: any, superclassValue?: any): boolean;
    export function isSubclassOfSuperclass(subclassValue: any, superclassValue: any): boolean;
    export function isSuperclassOfSubclass(superclassValue: any, subclassValue: any): boolean;

    export function isFunction(value: any): boolean;

    export function isBoolean(value: any): boolean;
    export function isFalsy(value: any): boolean;

    export function isNull(value: any): boolean;
    export function isNullish(value: any): boolean;
    export function isUndefined(value: any): boolean;

    export function isArray(value: any, minimumLength?: number, maximumLength?: number): boolean;
    export function isFilledArray(value: any, maximumLength?: number): boolean;
}