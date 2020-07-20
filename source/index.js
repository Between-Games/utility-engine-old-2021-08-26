// ╔═══════╗╔════╗╔═╗╔═══════╗╔═══════╗╔════╗╔═╗   ╔═══════╗╔═══════╗
// ╚══╗ ╔══╝║ ╔╗ ║║ ║╚╗ ╔══╗ ║║ ╔═════╝╚══╗ ║║ ║   ╚═══╗ ╔═╝║ ╔═════╝
//    ║ ║   ║ ║║ ║║ ║ ║ ║  ║ ║║ ╚═════╗╔══╝ ╚╝ ║       ║ ║  ║ ╚═════╗
//    ║ ║   ║ ║║ ║║ ║ ║ ║  ║ ║║ ╔═════╝║ ╔╗ ╔══╝       ║ ║  ╚═════╗ ║
// ╔══╝ ╚══╗║ ║║ ╚╝ ║╔╝ ╚══╝ ║║ ╚═════╗║ ║║ ╚══╗╔═╗╔═══╝ ║  ╔═════╝ ║
// ╚═══════╝╚═╝╚════╝╚═══════╝╚═══════╝╚═╝╚════╝╚═╝╚═════╝  ╚═══════╝

'use strict';   // Extend JavaScript strict mode to the entire script

// ╔═══════╗╔══════╗ ╔═══════╗╔═══════╗╔═══════╗╔═══════╗
// ║ ╔═══╗ ║║ ╔══╗ ║ ╚═══╗ ╔═╝║ ╔═════╝║ ╔═════╝╚══╗ ╔══╝
// ║ ║   ║ ║║ ╚══╝ ╚╗    ║ ║  ║ ╚═════╗║ ║         ║ ║
// ║ ║   ║ ║║ ╔═══╗ ║    ║ ║  ║ ╔═════╝║ ║         ║ ║
// ║ ╚═══╝ ║║ ╚═══╝ ║╔═══╝ ║  ║ ╚═════╗║ ╚═════╗   ║ ║
// ╚═══════╝╚═══════╝╚═════╝  ╚═══════╝╚═══════╝   ╚═╝

export function isObject(value) {   //
    return value === Object(value); //
}

export function isObjectLiteral(value) {        //
    return isObject(value) &&                   //
        value.constructor.name === 'Object';    //
}

// ╔═══════╗╔═╗      ╔═══════╗╔═══════╗╔═══════╗
// ║ ╔═════╝║ ║      ║ ╔═══╗ ║║ ╔═════╝║ ╔═════╝
// ║ ║      ║ ║      ║ ╚═══╝ ║║ ╚═════╗║ ╚═════╗
// ║ ║      ║ ║      ║ ╔═══╗ ║╚═════╗ ║╚═════╗ ║
// ║ ╚═════╗║ ╚═════╗║ ║   ║ ║╔═════╝ ║╔═════╝ ║
// ╚═══════╝╚═══════╝╚═╝   ╚═╝╚═══════╝╚═══════╝

export function isClass(value, superclassValue) {                                           //
    return isObject(value) &&                                                               //
        isObject(value.prototype) &&                                                        //
        isObject(value.prototype.constructor) &&                                            //
        value.prototype.constructor.toString().substring(0, 5) === 'class' &&               //
        (isUndefined(superclassValue) || isSubclassOfSuperclass(value, superclassValue));   //
}

export function isClassInstance(value, superclassValue) {                                               //
    return isObject(value) &&                                                                           //
        value.constructor.toString().substring(0, 5) === 'class' &&                                     //
        (isUndefined(superclassValue) || isClass(superclassValue) && value instanceof superclassValue); //
}

export function isSuperclassOfSubclass(superclassValue, subclassValue) {    //
    return isClass(superclassValue) &&                                      //
        isClass(subclassValue) &&                                           //
        subclassValue.prototype instanceof superclassValue;                 //
}

export function isSubclassOfSuperclass(subclassValue, superclassValue) {    //
    return isSuperclassOfSubclass(superclassValue, subclassValue);          //
}

// ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔════╗╔═╗╔═══════╗
// ║ ╔═════╝╚══╗ ╔══╝║ ╔═══╗ ║╚══╗ ╔══╝║ ╔╗ ║║ ║║ ╔═════╝
// ║ ╚═════╗   ║ ║   ║ ╚═══╝ ║   ║ ║   ║ ║║ ║║ ║║ ║ ╔═══╗
// ╚═════╗ ║   ║ ║   ║ ╔═╗ ╔═╝   ║ ║   ║ ║║ ║║ ║║ ║ ╚═╗ ║
// ╔═════╝ ║   ║ ║   ║ ║ ║ ╚═╗╔══╝ ╚══╗║ ║║ ╚╝ ║║ ╚═══╝ ║
// ╚═══════╝   ╚═╝   ╚═╝ ╚═══╝╚═══════╝╚═╝╚════╝╚═══════╝

export function isFilledString(value, maximumLength = Number.POSITIVE_INFINITY) {   // The provided value was found to be a filled string
    return isString(value, 1, maximumLength) && '' !== value.trim();                // The provided value was found to be a filled string
}

export function isEmptyString(value) {              // The provided value was found to be an empty string
    return isString(value) && '' === value.trim();  // The provided value was found to be an empty string
}

export function isString(value, minimumLength = 0, maximumLength = Number.POSITIVE_INFINITY) {  // The submitted value was found to be a valid string
    return isPositiveNumber(minimumLength) &&                                                   //
        isPositiveNumber(maximumLength) &&                                                      //
        maximumLength >= minimumLength &&                                                       //
        value != null &&                                                                        //
        value.constructor === String &&                                                         //
        value.length >= minimumLength &&                                                        //
        value.length <= maximumLength;                                                          //
}

// ╔════╗╔═╗╔═╗   ╔═╗╔═══════╗╔══════╗ ╔═══════╗╔═══════╗
// ║ ╔╗ ║║ ║║ ║   ║ ║║ ╔╗ ╔╗ ║║ ╔══╗ ║ ║ ╔═════╝║ ╔═══╗ ║
// ║ ║║ ║║ ║║ ║   ║ ║║ ║║ ║║ ║║ ╚══╝ ╚╗║ ╚═════╗║ ╚═══╝ ║
// ║ ║║ ║║ ║║ ║   ║ ║║ ║║ ║║ ║║ ╔═══╗ ║║ ╔═════╝║ ╔═╗ ╔═╝
// ║ ║║ ╚╝ ║║ ╚═══╝ ║║ ║║ ║║ ║║ ╚═══╝ ║║ ╚═════╗║ ║ ║ ╚═╗
// ╚═╝╚════╝╚═══════╝╚═╝╚═╝╚═╝╚═══════╝╚═══════╝╚═╝ ╚═══╝

export function isNumber(value, minimum = Number.NEGATIVE_INFINITY, maximum = Number.POSITIVE_INFINITY) {   // The submitted value was found to be a valid number
    if (typeof minimum !== 'number' || typeof maximum !== 'number' || minimum > maximum) return false;      // The given size parameters were found to be invalid

    return typeof value === 'number' && value >= minimum && value <= maximum;                               // The submitted value was found to be a valid number
}

export function isPositiveNumber(value, maximum = Number.POSITIVE_INFINITY) {   // The given value was found to be a positive number
    return isNumber(maximum, 0) && isNumber(value, 0, maximum);                 // The given value was found to be a positive number
}

export function isNegativeNumber(value, minimum = Number.NEGATIVE_INFINITY) {   // The given value was found to be a negative number
    return isNumber(minimum, undefined, 0) && isNumber(value, minimum, 0);      // The given value was found to be a negative number
}

// ╔═══════╗╔════╗╔═╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗
// ╚══╗ ╔══╝║ ╔╗ ║║ ║╚══╗ ╔══╝║ ╔═════╝║ ╔═════╝║ ╔═════╝║ ╔═══╗ ║
//    ║ ║   ║ ║║ ║║ ║   ║ ║   ║ ╚═════╗║ ║ ╔═══╗║ ╚═════╗║ ╚═══╝ ║
//    ║ ║   ║ ║║ ║║ ║   ║ ║   ║ ╔═════╝║ ║ ╚═╗ ║║ ╔═════╝║ ╔═╗ ╔═╝
// ╔══╝ ╚══╗║ ║║ ╚╝ ║   ║ ║   ║ ╚═════╗║ ╚═══╝ ║║ ╚═════╗║ ║ ║ ╚═╗
// ╚═══════╝╚═╝╚════╝   ╚═╝   ╚═══════╝╚═══════╝╚═══════╝╚═╝ ╚═══╝

export function isInteger(value, minimum = Number.NEGATIVE_INFINITY, maximum = Number.POSITIVE_INFINITY) {  // The provided value was found to be a valid integer
    if (!isNumber(minimum) || !isNumber(maximum) || minimum > maximum) return false;                        // The given size parameters were found to be invalid

    return Number.isInteger(value) && isNumber(value, minimum, maximum);                                    // The provided value was found to be a valid integer
}

export function isPositiveInteger(value, maximum = Number.POSITIVE_INFINITY) {  // The given value was found to be a positive integer
    return isPositiveNumber(maximum) && isInteger(value, 0, maximum);           // The given value was found to be a positive integer
}

export function isNegativeInteger(value, minimum = Number.NEGATIVE_INFINITY) {      // The given value was found to be a negative integer
    return isNegativeNumber(minimum, undefined, 0) && isInteger(value, minimum, 0); // The given value was found to be a negative integer
}

// ╔═══════╗╔═╗   ╔═╗╔════╗╔═╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔════╗╔═╗
// ║ ╔═════╝║ ║   ║ ║║ ╔╗ ║║ ║║ ╔═════╝╚══╗ ╔══╝╚══╗ ╔══╝║ ╔═══╗ ║║ ╔╗ ║║ ║
// ║ ╚═════╗║ ║   ║ ║║ ║║ ║║ ║║ ║         ║ ║      ║ ║   ║ ║   ║ ║║ ║║ ║║ ║
// ║ ╔═════╝║ ║   ║ ║║ ║║ ║║ ║║ ║         ║ ║      ║ ║   ║ ║   ║ ║║ ║║ ║║ ║
// ║ ║      ║ ╚═══╝ ║║ ║║ ╚╝ ║║ ╚═════╗   ║ ║   ╔══╝ ╚══╗║ ╚═══╝ ║║ ║║ ╚╝ ║
// ╚═╝      ╚═══════╝╚═╝╚════╝╚═══════╝   ╚═╝   ╚═══════╝╚═══════╝╚═╝╚════╝

export function isFunction(value) {         //
    return typeof(value) === 'function';    //
}

// ╔══════╗ ╔═══════╗╔═══════╗╔═╗      ╔═══════╗╔═══════╗╔════╗╔═╗
// ║ ╔══╗ ║ ║ ╔═══╗ ║║ ╔═══╗ ║║ ║      ║ ╔═════╝║ ╔═══╗ ║║ ╔╗ ║║ ║
// ║ ╚══╝ ╚╗║ ║   ║ ║║ ║   ║ ║║ ║      ║ ╚═════╗║ ╚═══╝ ║║ ║║ ║║ ║
// ║ ╔═══╗ ║║ ║   ║ ║║ ║   ║ ║║ ║      ║ ╔═════╝║ ╔═══╗ ║║ ║║ ║║ ║
// ║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═════╗║ ╚═════╗║ ║   ║ ║║ ║║ ╚╝ ║
// ╚═══════╝╚═══════╝╚═══════╝╚═══════╝╚═══════╝╚═╝   ╚═╝╚═╝╚════╝

export function isBoolean(value) {              //
    return value === true || value === false;   //
}

export function isFalsy(value) {    //
    return value === 0 ||           //
        value === 0n ||             //
        value === null ||           //
        value === undefined ||      //
        Number.isNaN(value) ||        //
        value === false ||          //
        value === '';               //
}

// ╔════╗╔═╗╔═╗   ╔═╗╔═╗      ╔═╗      ╔═══════╗╔═══════╗╔═╗   ╔═╗
// ║ ╔╗ ║║ ║║ ║   ║ ║║ ║      ║ ║      ╚══╗ ╔══╝║ ╔═════╝║ ║   ║ ║
// ║ ║║ ║║ ║║ ║   ║ ║║ ║      ║ ║         ║ ║   ║ ╚═════╗║ ╚═══╝ ║
// ║ ║║ ║║ ║║ ║   ║ ║║ ║      ║ ║         ║ ║   ╚═════╗ ║║ ╔═══╗ ║
// ║ ║║ ╚╝ ║║ ╚═══╝ ║║ ╚═════╗║ ╚═════╗╔══╝ ╚══╗╔═════╝ ║║ ║   ║ ║
// ╚═╝╚════╝╚═══════╝╚═══════╝╚═══════╝╚═══════╝╚═══════╝╚═╝   ╚═╝

export function isUndefined(value) { //
    return value === undefined;      //
}

export function isNullish(value) {  //
    return value == null;           //
}

export function isNull(value) { //
    return value === null;      //
}

// ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═╗   ╔═╗
// ║ ╔═══╗ ║║ ╔═══╗ ║║ ╔═══╗ ║║ ╔═══╗ ║║ ║   ║ ║
// ║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═══╝ ║
// ║ ╔═══╗ ║║ ╔═╗ ╔═╝║ ╔═╗ ╔═╝║ ╔═══╗ ║╚═════╗ ║
// ║ ║   ║ ║║ ║ ║ ╚═╗║ ║ ║ ╚═╗║ ║   ║ ║╔═════╝ ║
// ╚═╝   ╚═╝╚═╝ ╚═══╝╚═╝ ╚═══╝╚═╝   ╚═╝╚═══════╝

export function isArray(value, minimumLength = 0, maximumLength = Number.POSITIVE_INFINITY) {   //
    return isPositiveNumber(minimumLength) &&                                                   //
        isPositiveNumber(maximumLength) &&                                                      //
        maximumLength >= minimumLength &&                                                       //
        Array.isArray(value) &&                                                                 //
        value.length >= minimumLength &&                                                        //
        value.length <= maximumLength;                                                          //
}

export function isFilledArray(value, maximumLength = Number.POSITIVE_INFINITY) {    //
    return isArray(value, 1, maximumLength);                                        //
}
