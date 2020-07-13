// ╔════╗╔═╗╔═╗   ╔═╗╔═╗      ╔═╗      ╔═══════╗╔═══════╗╔═╗   ╔═╗   ╔═══════╗╔═══════╗╔═══════╗╔═══════╗   ╔═══════╗╔═══════╗╔═══════╗
// ║ ╔╗ ║║ ║║ ║   ║ ║║ ║      ║ ║      ╚══╗ ╔══╝║ ╔═════╝║ ║   ║ ║   ╚══╗ ╔══╝║ ╔═════╝║ ╔═════╝╚══╗ ╔══╝   ║ ╔╗ ╔╗ ║╚═══╗ ╔═╝║ ╔═════╝
// ║ ║║ ║║ ║║ ║   ║ ║║ ║      ║ ║         ║ ║   ║ ╚═════╗║ ╚═══╝ ║      ║ ║   ║ ╚═════╗║ ╚═════╗   ║ ║      ║ ║║ ║║ ║    ║ ║  ║ ╚═════╗
// ║ ║║ ║║ ║║ ║   ║ ║║ ║      ║ ║         ║ ║   ╚═════╗ ║║ ╔═══╗ ║      ║ ║   ║ ╔═════╝╚═════╗ ║   ║ ║      ║ ║║ ║║ ║    ║ ║  ╚═════╗ ║
// ║ ║║ ╚╝ ║║ ╚═══╝ ║║ ╚═════╗║ ╚═════╗╔══╝ ╚══╗╔═════╝ ║║ ║   ║ ║╔═╗   ║ ║   ║ ╚═════╗╔═════╝ ║   ║ ║   ╔═╗║ ║║ ║║ ║╔═══╝ ║  ╔═════╝ ║
// ╚═╝╚════╝╚═══════╝╚═══════╝╚═══════╝╚═══════╝╚═══════╝╚═╝   ╚═╝╚═╝   ╚═╝   ╚═══════╝╚═══════╝   ╚═╝   ╚═╝╚═╝╚═╝╚═╝╚═════╝  ╚═══════╝

'use strict';   // Extend JavaScript strict mode to the entire script

// ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗
// ╚══╗ ╔══╝║ ╔╗ ╔╗ ║║ ╔═══╗ ║║ ╔═══╗ ║║ ╔═══╗ ║╚══╗ ╔══╝
//    ║ ║   ║ ║║ ║║ ║║ ╚═══╝ ║║ ║   ║ ║║ ╚═══╝ ║   ║ ║
//    ║ ║   ║ ║║ ║║ ║║ ╔═════╝║ ║   ║ ║║ ╔═╗ ╔═╝   ║ ║
// ╔══╝ ╚══╗║ ║║ ║║ ║║ ║      ║ ╚═══╝ ║║ ║ ║ ╚═╗   ║ ║
// ╚═══════╝╚═╝╚═╝╚═╝╚═╝      ╚═══════╝╚═╝ ╚═══╝   ╚═╝

import UtilityEngine from '../build/index.js';

import chai from 'chai';

const expect = chai.expect;

// ╔════╗╔═╗╔═╗   ╔═╗╔═╗      ╔═╗      ╔═══════╗╔═══════╗╔═╗   ╔═╗
// ║ ╔╗ ║║ ║║ ║   ║ ║║ ║      ║ ║      ╚══╗ ╔══╝║ ╔═════╝║ ║   ║ ║
// ║ ║║ ║║ ║║ ║   ║ ║║ ║      ║ ║         ║ ║   ║ ╚═════╗║ ╚═══╝ ║
// ║ ║║ ║║ ║║ ║   ║ ║║ ║      ║ ║         ║ ║   ╚═════╗ ║║ ╔═══╗ ║
// ║ ║║ ╚╝ ║║ ╚═══╝ ║║ ╚═════╗║ ╚═════╗╔══╝ ╚══╗╔═════╝ ║║ ║   ║ ║
// ╚═╝╚════╝╚═══════╝╚═══════╝╚═══════╝╚═══════╝╚═══════╝╚═╝   ╚═╝

describe('Function', function() {
    // ╔═══════╗╔═══════╗         ╔════╗╔═╗╔═╗   ╔═╗╔═╗      ╔═╗
    // ╚══╗ ╔══╝║ ╔═════╝         ║ ╔╗ ║║ ║║ ║   ║ ║║ ║      ║ ║
    //    ║ ║   ║ ╚═════╗╔═══════╗║ ║║ ║║ ║║ ║   ║ ║║ ║      ║ ║
    //    ║ ║   ╚═════╗ ║╚═══════╝║ ║║ ║║ ║║ ║   ║ ║║ ║      ║ ║
    // ╔══╝ ╚══╗╔═════╝ ║         ║ ║║ ╚╝ ║║ ╚═══╝ ║║ ╚═════╗║ ╚═════╗
    // ╚═══════╝╚═══════╝         ╚═╝╚════╝╚═══════╝╚═══════╝╚═══════╝

    describe('#isNull(VALUE)', function() {
        it('Should return true when value is null', () => {
            expect(UtilityEngine.isNull(null)).to.equal(true);
        });


        it('Should return false when value is undefined', () => {
            expect(UtilityEngine.isNull(undefined)).to.equal(false);
        });

        it('Should return false when value is an empty object', () => {
            expect(UtilityEngine.isNull({})).to.equal(false);
        });

        it('Should return false when value is a function', () => {
            expect(UtilityEngine.isNull(function() {})).to.equal(false);
        });

        it('Should return false when value is a filled object', () => {
            expect(UtilityEngine.isNull({foo: 'bar'})).to.equal(false);
        });

        it('Should return false when value is true boolean', () => {
            expect(UtilityEngine.isNull(true)).to.equal(false);
        });

        it('Should return false when value is false boolean', () => {
            expect(UtilityEngine.isNull(false)).to.equal(false);
        });

        it('Should return false when value is a zero', () => {
            expect(UtilityEngine.isNull(0)).to.equal(false);
        });

        it('Should return false when value is a number', () => {
            expect(UtilityEngine.isNull(1)).to.equal(false);
        });

        it('Should return false when value is a primitive number', () => {
            expect(UtilityEngine.isNull(Number('1'))).to.equal(false);
        });

        it('Should return false when value is a wrapped primitive number', () => {
            expect(UtilityEngine.isNull(new Number('1'))).to.equal(false);
        });

        it('Should return false when value is a string', () => {
            expect(UtilityEngine.isNull('string')).to.equal(false);
        });

        it('Should return false when value is a primitive string', () => {
            expect(UtilityEngine.isNull(String('string'))).to.equal(false);
        });

        it('Should return false when value is a wrapped primitive string', () => {
            expect(UtilityEngine.isNull(new String('string'))).to.equal(false);
        });

        it('Should return false when value is an array', () => {
            expect(UtilityEngine.isNull([])).to.equal(false);
        });

        it('Should return false when value is a map', () => {
            expect(UtilityEngine.isNull(new Map())).to.equal(false);
        });

        it('Should return false when value is a date', () => {
            expect(UtilityEngine.isNull(new Date())).to.equal(false);
        });

        it('Should return false when value is a class instance', () => {
            expect(UtilityEngine.isNull(new (class Class {})())).to.equal(false);
        });

        it('Should return false when value is a class instance', () => {
            expect(UtilityEngine.isNull(new (class Class {}))).to.equal(false);
        });

        it('Should return false when value is a class declaration', () => {
            expect(UtilityEngine.isNull(class Class {})).to.equal(false);
        });
    });

    // ╔═══════╗╔═══════╗         ╔════╗╔═╗╔═╗   ╔═╗╔═╗      ╔═╗      ╔═══════╗╔═══════╗╔═╗   ╔═╗
    // ╚══╗ ╔══╝║ ╔═════╝         ║ ╔╗ ║║ ║║ ║   ║ ║║ ║      ║ ║      ╚══╗ ╔══╝║ ╔═════╝║ ║   ║ ║
    //    ║ ║   ║ ╚═════╗╔═══════╗║ ║║ ║║ ║║ ║   ║ ║║ ║      ║ ║         ║ ║   ║ ╚═════╗║ ╚═══╝ ║
    //    ║ ║   ╚═════╗ ║╚═══════╝║ ║║ ║║ ║║ ║   ║ ║║ ║      ║ ║         ║ ║   ╚═════╗ ║║ ╔═══╗ ║
    // ╔══╝ ╚══╗╔═════╝ ║         ║ ║║ ╚╝ ║║ ╚═══╝ ║║ ╚═════╗║ ╚═════╗╔══╝ ╚══╗╔═════╝ ║║ ║   ║ ║
    // ╚═══════╝╚═══════╝         ╚═╝╚════╝╚═══════╝╚═══════╝╚═══════╝╚═══════╝╚═══════╝╚═╝   ╚═╝

    describe('#isNullish(VALUE)', function() {
        it('Should return true when value is null', () => {
            expect(UtilityEngine.isNullish(null)).to.equal(true);
        });

        it('Should return true when value is undefined', () => {
            expect(UtilityEngine.isNullish(undefined)).to.equal(true);
        });


        it('Should return false when value is an empty object', () => {
            expect(UtilityEngine.isNullish({})).to.equal(false);
        });

        it('Should return false when value is a function', () => {
            expect(UtilityEngine.isNullish(function() {})).to.equal(false);
        });

        it('Should return false when value is a filled object', () => {
            expect(UtilityEngine.isNullish({foo: 'bar'})).to.equal(false);
        });

        it('Should return false when value is true boolean', () => {
            expect(UtilityEngine.isNullish(true)).to.equal(false);
        });

        it('Should return false when value is false boolean', () => {
            expect(UtilityEngine.isNullish(false)).to.equal(false);
        });

        it('Should return false when value is a zero', () => {
            expect(UtilityEngine.isNullish(0)).to.equal(false);
        });

        it('Should return false when value is a number', () => {
            expect(UtilityEngine.isNullish(1)).to.equal(false);
        });

        it('Should return false when value is a primitive number', () => {
            expect(UtilityEngine.isNullish(Number('1'))).to.equal(false);
        });

        it('Should return false when value is a wrapped primitive number', () => {
            expect(UtilityEngine.isNullish(new Number('1'))).to.equal(false);
        });

        it('Should return false when value is a string', () => {
            expect(UtilityEngine.isNullish('string')).to.equal(false);
        });

        it('Should return false when value is a primitive string', () => {
            expect(UtilityEngine.isNullish(String('string'))).to.equal(false);
        });

        it('Should return false when value is a wrapped primitive string', () => {
            expect(UtilityEngine.isNullish(new String('string'))).to.equal(false);
        });

        it('Should return false when value is an array', () => {
            expect(UtilityEngine.isNullish([])).to.equal(false);
        });

        it('Should return false when value is a map', () => {
            expect(UtilityEngine.isNullish(new Map())).to.equal(false);
        });

        it('Should return false when value is a date', () => {
            expect(UtilityEngine.isNullish(new Date())).to.equal(false);
        });

        it('Should return false when value is a class instance', () => {
            expect(UtilityEngine.isNullish(new (class Class {})())).to.equal(false);
        });

        it('Should return false when value is a class instance', () => {
            expect(UtilityEngine.isNullish(new (class Class {}))).to.equal(false);
        });

        it('Should return false when value is a class declaration', () => {
            expect(UtilityEngine.isNullish(class Class {})).to.equal(false);
        });
    });

    // ╔═══════╗╔═══════╗         ╔═╗   ╔═╗╔════╗╔═╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔════╗╔═╗╔═══════╗╔═══════╗
    // ╚══╗ ╔══╝║ ╔═════╝         ║ ║   ║ ║║ ╔╗ ║║ ║╚╗ ╔══╗ ║║ ╔═════╝║ ╔═════╝╚══╗ ╔══╝║ ╔╗ ║║ ║║ ╔═════╝╚╗ ╔══╗ ║
    //    ║ ║   ║ ╚═════╗╔═══════╗║ ║   ║ ║║ ║║ ║║ ║ ║ ║  ║ ║║ ╚═════╗║ ╚═════╗   ║ ║   ║ ║║ ║║ ║║ ╚═════╗ ║ ║  ║ ║
    //    ║ ║   ╚═════╗ ║╚═══════╝║ ║   ║ ║║ ║║ ║║ ║ ║ ║  ║ ║║ ╔═════╝║ ╔═════╝   ║ ║   ║ ║║ ║║ ║║ ╔═════╝ ║ ║  ║ ║
    // ╔══╝ ╚══╗╔═════╝ ║         ║ ╚═══╝ ║║ ║║ ╚╝ ║╔╝ ╚══╝ ║║ ╚═════╗║ ║      ╔══╝ ╚══╗║ ║║ ╚╝ ║║ ╚═════╗╔╝ ╚══╝ ║
    // ╚═══════╝╚═══════╝         ╚═══════╝╚═╝╚════╝╚═══════╝╚═══════╝╚═╝      ╚═══════╝╚═╝╚════╝╚═══════╝╚═══════╝

    describe('#isUndefined(VALUE)', function() {
        it('Should return true when value is undefined', () => {
            expect(UtilityEngine.isUndefined(undefined)).to.equal(true);
        });


        it('Should return false when value is null', () => {
            expect(UtilityEngine.isUndefined(null)).to.equal(false);
        });

        it('Should return false when value is an empty object', () => {
            expect(UtilityEngine.isUndefined({})).to.equal(false);
        });

        it('Should return false when value is a function', () => {
            expect(UtilityEngine.isUndefined(function() {})).to.equal(false);
        });

        it('Should return false when value is a filled object', () => {
            expect(UtilityEngine.isUndefined({foo: 'bar'})).to.equal(false);
        });

        it('Should return false when value is true boolean', () => {
            expect(UtilityEngine.isUndefined(true)).to.equal(false);
        });

        it('Should return false when value is false boolean', () => {
            expect(UtilityEngine.isUndefined(false)).to.equal(false);
        });

        it('Should return false when value is a zero', () => {
            expect(UtilityEngine.isUndefined(0)).to.equal(false);
        });

        it('Should return false when value is a number', () => {
            expect(UtilityEngine.isUndefined(1)).to.equal(false);
        });

        it('Should return false when value is a primitive number', () => {
            expect(UtilityEngine.isUndefined(Number('1'))).to.equal(false);
        });

        it('Should return false when value is a wrapped primitive number', () => {
            expect(UtilityEngine.isUndefined(new Number('1'))).to.equal(false);
        });

        it('Should return false when value is a string', () => {
            expect(UtilityEngine.isUndefined('string')).to.equal(false);
        });

        it('Should return false when value is a primitive string', () => {
            expect(UtilityEngine.isUndefined(String('string'))).to.equal(false);
        });

        it('Should return false when value is a wrapped primitive string', () => {
            expect(UtilityEngine.isUndefined(new String('string'))).to.equal(false);
        });

        it('Should return false when value is an array', () => {
            expect(UtilityEngine.isUndefined([])).to.equal(false);
        });

        it('Should return false when value is a map', () => {
            expect(UtilityEngine.isUndefined(new Map())).to.equal(false);
        });

        it('Should return false when value is a date', () => {
            expect(UtilityEngine.isUndefined(new Date())).to.equal(false);
        });

        it('Should return false when value is a class instance', () => {
            expect(UtilityEngine.isUndefined(new (class Class {})())).to.equal(false);
        });

        it('Should return false when value is a class instance', () => {
            expect(UtilityEngine.isUndefined(new (class Class {}))).to.equal(false);
        });

        it('Should return false when value is a class declaration', () => {
            expect(UtilityEngine.isUndefined(class Class {})).to.equal(false);
        });
    });
});
