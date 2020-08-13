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

export function deflateObject(object, propertyKeyReference = '', deflatedObject = {}) {                         // Deflate object literal but stack property key path
    if (!isObjectLiteral(object)) throw new TypeError('Cannot deflate the non-object value that was given');    // The provided value was found to be of invalid type

    for (const propertyKey in object) {                                                                         // Loop through the properties of the provided object
        const propertyValue = object[propertyKey];                                                              // Get the value associated with current property ket

        if (isObjectLiteral(propertyValue)) {                                                                   // The property value was found to be a filled object
            deflateObject(propertyValue, `${propertyKeyReference}${propertyKey}.`, deflatedObject);             // Deflate object literal but stack property key path
        } else deflatedObject[`${propertyKeyReference}${propertyKey}`] = propertyValue;                         // Populate property of the submitted deflated object
    }

    return deflatedObject;                                                                                      // Return the newly deflated object that was provided
}

export function isObject(value) {   //
    return value === Object(value); //
}

export function isFilledObject(value) {     //
    return isObjectLiteral(value) &&        //
        Object.entries(value).length > 0;   //
}

export function isEmptyObject(value) {      //
    return isObjectLiteral(value) &&        //
        Object.entries(value).length === 0; //
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

export function isString(value, minimumLength = 0, maximumLength = Number.POSITIVE_INFINITY) {  // The submitted value was found to be a valid string
    return isNumber(minimumLength, 0, maximumLength) &&                                         //
        isNumber(maximumLength, minimumLength) &&                                               //
        value != null &&                                                                        //
        value.constructor === String &&                                                         //
        value.length >= minimumLength &&                                                        //
        value.length <= maximumLength;                                                          //
}

export function isFilledString(value, maximumLength = Number.POSITIVE_INFINITY) {   // The provided value was found to be a filled string
    return isString(value, 1, maximumLength) && '' !== value.trim();                // The provided value was found to be a filled string
}

export function isEmptyString(value) {              // The provided value was found to be an empty string
    return isString(value) && '' === value.trim();  // The provided value was found to be an empty string
}

export function hasWhitespaceCount(value, minimumCount = 1, maximumCount = Number.POSITIVE_INFINITY) {  // The value was found to be a string with whitespace
    return isNumber(minimumCount, 0, maximumCount) &&                                                   //
        isNumber(maximumCount, minimumCount) &&                                                         //
        isString(value, minimumCount) &&                                                                //
        isArray(value.split(' '), minimumCount + 1, maximumCount + 1);                                  //
}

export function hasDigitCount(value, minimumCount = 1, maximumCount = Number.POSITIVE_INFINITY) {   //
    return isNumber(minimumCount, 0, maximumCount) &&                                               //
        isNumber(maximumCount, minimumCount) &&                                                     //
        isString(value, minimumCount) &&                                                            //
        isArray(value.match(/\d/g) || [], minimumCount, maximumCount);                              //
}


export function hasSpecialCharacterCount(value, minimumCount = 1, maximumCount = Number.POSITIVE_INFINITY) {    //
    return isNumber(minimumCount, 0, maximumCount) &&                                                           //
        isNumber(maximumCount, minimumCount) &&                                                                 //
        isString(value, minimumCount) &&                                                                        //
        isArray((value.match(/[^a-zß-öø-ÿA-ZÀ-ÖØ-ÞĀ-ſƀ0-9\s]/g) || []), minimumCount, maximumCount);            //
}

// ╔═╗      ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗
// ║ ║      ║ ╔═════╝╚══╗ ╔══╝╚══╗ ╔══╝║ ╔═════╝║ ╔═══╗ ║
// ║ ║      ║ ╚═════╗   ║ ║      ║ ║   ║ ╚═════╗║ ╚═══╝ ║
// ║ ║      ║ ╔═════╝   ║ ║      ║ ║   ║ ╔═════╝║ ╔═╗ ╔═╝
// ║ ╚═════╗║ ╚═════╗   ║ ║      ║ ║   ║ ╚═════╗║ ║ ║ ╚═╗
// ╚═══════╝╚═══════╝   ╚═╝      ╚═╝   ╚═══════╝╚═╝ ╚═══╝

export function isLetter(value, minimumLength = 1, maximumLength = 1) { //
    return isNumber(minimumLength, 1, maximumLength) &&                 //
        isNumber(maximumLength, minimumLength) &&                       //
        isString(value, minimumLength, maximumLength) &&                //
        isEmptyArray((value.match(/[^a-zA-Z]/g) || []));    //
}

export function hasLetters(value, minimumCount = 1, maximumCount = Number.POSITIVE_INFINITY) {  //
    return isNumber(minimumCount, 0, maximumCount) &&                                           //
        isNumber(maximumCount, minimumCount) &&                                                 //
        isString(value, minimumCount) &&                                                        //
        isArray((value.match(/[a-zA-Z]/g) || []), minimumCount, maximumCount);      //
}

export function hasLowercaseLetters(value, minimumCount = 1, maximumCount = Number.POSITIVE_INFINITY) { //
    return isNumber(minimumCount, 0, maximumCount) &&                                                   //
        isNumber(maximumCount, minimumCount) &&                                                         //
        isString(value, minimumCount) &&                                                                //
        isArray((value.match(/[a-z]/g) || []), minimumCount, maximumCount);                       //
}

export function hasUppercaseLetters(value, minimumCount = 1, maximumCount = Number.POSITIVE_INFINITY) { //
    return isNumber(minimumCount, 0, maximumCount) &&                                                   //
        isNumber(maximumCount, minimumCount) &&                                                         //
        isString(value, minimumCount) &&                                                                //
        isArray((value.match(/[A-Z]/g) || []), minimumCount, maximumCount);                             //
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

export function isBit(value) {          // The value was found to be a lone single bit number
    return value === 0 || value === 1;  // The value was found to be a lone single bit number
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
        Number.isNaN(value) ||      //
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

export function isEmptyArray(value) {   //
    return isArray(value, 0, 0);        //
}

// ╔═══════╗╔════╗╔═╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗
// ║ ╔═════╝╚══╗ ║║ ║║ ╔═══╗ ║║ ╔═══╗ ║║ ╔═══╗ ║╚══╗ ╔══╝
// ║ ╚═════╗╔══╝ ╚╝ ║║ ╚═══╝ ║║ ║   ║ ║║ ╚═══╝ ║   ║ ║
// ║ ╔═════╝║ ╔╗ ╔══╝║ ╔═════╝║ ║   ║ ║║ ╔═╗ ╔═╝   ║ ║
// ║ ╚═════╗║ ║║ ╚══╗║ ║      ║ ╚═══╝ ║║ ║ ║ ╚═╗   ║ ║
// ╚═══════╝╚═╝╚════╝╚═╝      ╚═══════╝╚═╝ ╚═══╝   ╚═╝

export default {
    isString,
    isFilledString,
    isEmptyString,
    hasDigitCount,
    hasWhitespaceCount,
    hasSpecialCharacterCount,

    hasLetters,
    hasLowercaseLetters,
    hasUppercaseLetters,

    isNumber,
    isPositiveNumber,
    isNegativeNumber,

    isInteger,
    isPositiveInteger,
    isNegativeInteger,
    isBit,

    isObject,
    isEmptyObject,
    isFilledObject,
    isObjectLiteral,
    deflateObject,

    isClass,
    isClassInstance,
    isSubclassOfSuperclass,
    isSuperclassOfSubclass,

    isFunction,

    isBoolean,
    isFalsy,

    isNull,
    isNullish,
    isUndefined,

    isArray,
    isEmptyArray,
    isFilledArray,
};
