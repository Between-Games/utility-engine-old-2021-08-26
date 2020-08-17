export function isString(value: any, minimumLength?: number, maximumLength?: number): boolean;
export function isFilledString(value: any, maximumLength?: number): boolean;
export function isEmptyString(value: any): boolean;

export function isDigit(value: any, minimumLength?: number, maximumLength?: number): boolean;
export function hasDigits(value: any, minimumCount?: number, maximumCount?: number): boolean;

export function isWhitespace(value: any, minimumLength?: number, maximumLength?: number): boolean;
export function hasWhitespaces(value: any, minimumCount?: number, maximumCount?: number): boolean;

export function isSymbol(value: any, minimumLength?: number, maximumLength?: number): boolean;
export function hasSymbols(value: any, minimumCount?: number, maximumCount?: number): boolean;

export function isLetter(value: any, minimumLength?: number, maximumLength?: number): boolean;
export function isLowercaseLetter(value: any, minimumLength?: number, maximumLength?: number): boolean;
export function isUppercaseLetter(value: any, minimumLength?: number, maximumLength?: number): boolean;
export function hasLetters(value: any, minimumCount?: number, maximumCount?: number): boolean;
export function hasLowercaseLetters(value: any, minimumCount?: number, maximumCount?: number): boolean;
export function hasUppercaseLetters(value: any, minimumCount?: number, maximumCount?: number): boolean;

export function isExtendedLetter(value: any, minimumLength?: number, maximumLength?: number): boolean;
export function isExtendedLowercaseLetter(value: any, minimumLength?: number, maximumLength?: number): boolean;
export function isExtendedUppercaseLetter(value: any, minimumLength?: number, maximumLength?: number): boolean;
export function hasExtendedLetters(value: any, minimumCount?: number, maximumCount?: number): boolean;
export function hasExtendedLowercaseLetters(value: any, minimumCount?: number, maximumCount?: number): boolean;
export function hasExtendedUppercaseLetters(value: any, minimumCount?: number, maximumCount?: number): boolean;

export function isNumber(value: any, minimum?: number, maximum?: number): boolean;
export function isPositiveNumber(value: any, maximum?: number): boolean;
export function isNegativeNumber(value: any, minimum?: number): boolean;
export function isBit(value: any): boolean;

export function isInteger(value: any, minimum?: number, maximum?: number): boolean;
export function isPositiveInteger(value: number, maximum?: number): boolean;
export function isNegativeInteger(value: number, minimum?: number): boolean;

export function isObject(value: any): boolean;
export function isEmptyObject(value: any): boolean;
export function isFilledObject(value: any): boolean;
export function isObjectLiteral(value: any): boolean;
export function deflateObject(value: object): boolean;

export function isClass(value: any, superclassValue?: any): boolean;
export function isClassInstance(value: any, superclassValue?: any): boolean;
export function isSubclassOfSuperclass(subclassValue: any, superclassValue: any): boolean;
export function isSuperclassOfSubclass(superclassValue: any, subclassValue: any): boolean;

export function isFunction(value: any): boolean;

export function isBoolean(value: any): boolean;
export function isTruthy(value: any): boolean;
export function isFalsy(value: any): boolean;

export function isNull(value: any): boolean;
export function isNullish(value: any): boolean;
export function isUndefined(value: any): boolean;

export function isArray(value: any, minimumLength?: number, maximumLength?: number): boolean;
export function isFilledArray(value: any, maximumLength?: number): boolean;
export function isEmptyArray(value: any): boolean;

declare module 'UtilityEngine' {
    export function isString(value: any, minimumLength?: number, maximumLength?: number): boolean;
    export function isFilledString(value: any, maximumLength?: number): boolean;
    export function isEmptyString(value: any): boolean;

    export function isDigit(value: any, minimumLength?: number, maximumLength?: number): boolean;
    export function hasDigits(value: any, minimumCount?: number, maximumCount?: number): boolean;

    export function isWhitespace(value: any, minimumLength?: number, maximumLength?: number): boolean;
    export function hasWhitespaces(value: any, minimumCount?: number, maximumCount?: number): boolean;

    export function isSymbol(value: any, minimumLength?: number, maximumLength?: number): boolean;
    export function hasSymbols(value: any, minimumCount?: number, maximumCount?: number): boolean;

    export function isLetter(value: any, minimumLength?: number, maximumLength?: number): boolean;
    export function isLowercaseLetter(value: any, minimumLength?: number, maximumLength?: number): boolean;
    export function isUppercaseLetter(value: any, minimumLength?: number, maximumLength?: number): boolean;
    export function hasLetters(value: any, minimumCount?: number, maximumCount?: number): boolean;
    export function hasLowercaseLetters(value: any, minimumCount?: number, maximumCount?: number): boolean;
    export function hasUppercaseLetters(value: any, minimumCount?: number, maximumCount?: number): boolean;

    export function isExtendedLetter(value: any, minimumLength?: number, maximumLength?: number): boolean;
    export function isExtendedLowercaseLetter(value: any, minimumLength?: number, maximumLength?: number): boolean;
    export function isExtendedUppercaseLetter(value: any, minimumLength?: number, maximumLength?: number): boolean;
    export function hasExtendedLetters(value: any, minimumCount?: number, maximumCount?: number): boolean;
    export function hasExtendedLowercaseLetters(value: any, minimumCount?: number, maximumCount?: number): boolean;
    export function hasExtendedUppercaseLetters(value: any, minimumCount?: number, maximumCount?: number): boolean;

    export function isNumber(value: any, minimum?: number, maximum?: number): boolean;
    export function isPositiveNumber(value: any, maximum?: number): boolean;
    export function isNegativeNumber(value: any, minimum?: number): boolean;
    export function isBit(value: any): boolean;

    export function isInteger(value: any, minimum?: number, maximum?: number): boolean;
    export function isPositiveInteger(value: number, maximum?: number): boolean;
    export function isNegativeInteger(value: number, minimum?: number): boolean;

    export function isObject(value: any): boolean;
    export function isEmptyObject(value: any): boolean;
    export function isFilledObject(value: any): boolean;
    export function isObjectLiteral(value: any): boolean;
    export function deflateObject(value: object): boolean;

    export function isClass(value: any, superclassValue?: any): boolean;
    export function isClassInstance(value: any, superclassValue?: any): boolean;
    export function isSubclassOfSuperclass(subclassValue: any, superclassValue: any): boolean;
    export function isSuperclassOfSubclass(superclassValue: any, subclassValue: any): boolean;

    export function isFunction(value: any): boolean;

    export function isBoolean(value: any): boolean;
    export function isTruthy(value: any): boolean;
    export function isFalsy(value: any): boolean;

    export function isNull(value: any): boolean;
    export function isNullish(value: any): boolean;
    export function isUndefined(value: any): boolean;

    export function isArray(value: any, minimumLength?: number, maximumLength?: number): boolean;
    export function isFilledArray(value: any, maximumLength?: number): boolean;
    export function isEmptyArray(value: any): boolean;

}