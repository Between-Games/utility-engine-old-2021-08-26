// ╔═══════╗╔════╗╔═╗╔═══════╗╔═══════╗╔════╗╔═╗   ╔═══════╗╔═══════╗
// ╚══╗ ╔══╝║ ╔╗ ║║ ║╚╗ ╔══╗ ║║ ╔═════╝╚══╗ ║║ ║   ╚═══╗ ╔═╝║ ╔═════╝
//    ║ ║   ║ ║║ ║║ ║ ║ ║  ║ ║║ ╚═════╗╔══╝ ╚╝ ║       ║ ║  ║ ╚═════╗
//    ║ ║   ║ ║║ ║║ ║ ║ ║  ║ ║║ ╔═════╝║ ╔╗ ╔══╝       ║ ║  ╚═════╗ ║
// ╔══╝ ╚══╗║ ║║ ╚╝ ║╔╝ ╚══╝ ║║ ╚═════╗║ ║║ ╚══╗╔═╗╔═══╝ ║  ╔═════╝ ║
// ╚═══════╝╚═╝╚════╝╚═══════╝╚═══════╝╚═╝╚════╝╚═╝╚═════╝  ╚═══════╝

'use strict';   // Extend JavaScript strict mode to the entire script

// ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔════╗╔═╗╔═══════╗
// ║ ╔═════╝╚══╗ ╔══╝║ ╔═══╗ ║╚══╗ ╔══╝║ ╔╗ ║║ ║║ ╔═════╝
// ║ ╚═════╗   ║ ║   ║ ╚═══╝ ║   ║ ║   ║ ║║ ║║ ║║ ║ ╔═══╗
// ╚═════╗ ║   ║ ║   ║ ╔═╗ ╔═╝   ║ ║   ║ ║║ ║║ ║║ ║ ╚═╗ ║
// ╔═════╝ ║   ║ ║   ║ ║ ║ ╚═╗╔══╝ ╚══╗║ ║║ ╚╝ ║║ ╚═══╝ ║
// ╚═══════╝   ╚═╝   ╚═╝ ╚═══╝╚═══════╝╚═╝╚════╝╚═══════╝

export function isFilledString(value) {             // The provided value was found to be a filled string
    return isString(value) && '' !== value.trim();  // The provided value was found to be a filled string
}

export function isEmptyString(value) {              // The provided value was found to be an empty string
    return isString(value) && '' === value.trim();  // The provided value was found to be an empty string
}

export function isString(value) {                           // The submitted value was found to be a valid string
    return value != null && value.constructor === String;   // The submitted value was found to be a valid string
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
