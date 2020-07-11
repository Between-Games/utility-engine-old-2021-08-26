declare module 'test-npm-engine-1' {
    export function isFilledString(value: any): boolean;
    export function isEmptyString(value: any): boolean;
    export function isString(value: any): boolean;

    export function isNumber(value: any, minimum: number, maximum: number): boolean;
    export function isPositiveNumber(value: any, maximum: number): boolean;
    export function isNegativeNumber(value: any, minimum: number): boolean;
}