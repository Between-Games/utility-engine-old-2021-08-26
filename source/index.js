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
    return typeof value === 'number' && value >= minimum && value <= maximum;                               //
}
