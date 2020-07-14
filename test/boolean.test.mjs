// ╔══════╗ ╔═══════╗╔═══════╗╔═╗      ╔═══════╗╔═══════╗╔════╗╔═╗   ╔═══════╗╔═══════╗╔═══════╗╔═══════╗   ╔═══════╗╔═══════╗╔═══════╗
// ║ ╔══╗ ║ ║ ╔═══╗ ║║ ╔═══╗ ║║ ║      ║ ╔═════╝║ ╔═══╗ ║║ ╔╗ ║║ ║   ╚══╗ ╔══╝║ ╔═════╝║ ╔═════╝╚══╗ ╔══╝   ║ ╔╗ ╔╗ ║╚═══╗ ╔═╝║ ╔═════╝
// ║ ╚══╝ ╚╗║ ║   ║ ║║ ║   ║ ║║ ║      ║ ╚═════╗║ ╚═══╝ ║║ ║║ ║║ ║      ║ ║   ║ ╚═════╗║ ╚═════╗   ║ ║      ║ ║║ ║║ ║    ║ ║  ║ ╚═════╗
// ║ ╔═══╗ ║║ ║   ║ ║║ ║   ║ ║║ ║      ║ ╔═════╝║ ╔═══╗ ║║ ║║ ║║ ║      ║ ║   ║ ╔═════╝╚═════╗ ║   ║ ║      ║ ║║ ║║ ║    ║ ║  ╚═════╗ ║
// ║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═════╗║ ╚═════╗║ ║   ║ ║║ ║║ ╚╝ ║╔═╗   ║ ║   ║ ╚═════╗╔═════╝ ║   ║ ║   ╔═╗║ ║║ ║║ ║╔═══╝ ║  ╔═════╝ ║
// ╚═══════╝╚═══════╝╚═══════╝╚═══════╝╚═══════╝╚═╝   ╚═╝╚═╝╚════╝╚═╝   ╚═╝   ╚═══════╝╚═══════╝   ╚═╝   ╚═╝╚═╝╚═╝╚═╝╚═════╝  ╚═══════╝

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

// ╔══════╗ ╔═══════╗╔═══════╗╔═╗      ╔═══════╗╔═══════╗╔════╗╔═╗
// ║ ╔══╗ ║ ║ ╔═══╗ ║║ ╔═══╗ ║║ ║      ║ ╔═════╝║ ╔═══╗ ║║ ╔╗ ║║ ║
// ║ ╚══╝ ╚╗║ ║   ║ ║║ ║   ║ ║║ ║      ║ ╚═════╗║ ╚═══╝ ║║ ║║ ║║ ║
// ║ ╔═══╗ ║║ ║   ║ ║║ ║   ║ ║║ ║      ║ ╔═════╝║ ╔═══╗ ║║ ║║ ║║ ║
// ║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═════╗║ ╚═════╗║ ║   ║ ║║ ║║ ╚╝ ║
// ╚═══════╝╚═══════╝╚═══════╝╚═══════╝╚═══════╝╚═╝   ╚═╝╚═╝╚════╝

describe('Function', function() {
    // ╔═══════╗╔═══════╗         ╔══════╗ ╔═══════╗╔═══════╗╔═╗      ╔═══════╗╔═══════╗╔════╗╔═╗
    // ╚══╗ ╔══╝║ ╔═════╝         ║ ╔══╗ ║ ║ ╔═══╗ ║║ ╔═══╗ ║║ ║      ║ ╔═════╝║ ╔═══╗ ║║ ╔╗ ║║ ║
    //    ║ ║   ║ ╚═════╗╔═══════╗║ ╚══╝ ╚╗║ ║   ║ ║║ ║   ║ ║║ ║      ║ ╚═════╗║ ╚═══╝ ║║ ║║ ║║ ║
    //    ║ ║   ╚═════╗ ║╚═══════╝║ ╔═══╗ ║║ ║   ║ ║║ ║   ║ ║║ ║      ║ ╔═════╝║ ╔═══╗ ║║ ║║ ║║ ║
    // ╔══╝ ╚══╗╔═════╝ ║         ║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═════╗║ ╚═════╗║ ║   ║ ║║ ║║ ╚╝ ║
    // ╚═══════╝╚═══════╝         ╚═══════╝╚═══════╝╚═══════╝╚═══════╝╚═══════╝╚═╝   ╚═╝╚═╝╚════╝

    describe('#isBoolean(VALUE)', function() {
        it('Should return true when value is true boolean', () => {
            expect(UtilityEngine.isBoolean(true)).to.equal(true);
        });

        it('Should return true when value is false boolean', () => {
            expect(UtilityEngine.isBoolean(false)).to.equal(true);
        });

        it('Should return false when value is null', () => {
            expect(UtilityEngine.isBoolean(null)).to.equal(false);
        });

        it('Should return false when value is undefined', () => {
            expect(UtilityEngine.isBoolean(undefined)).to.equal(false);
        });

        it('Should return false when value is an empty object', () => {
            expect(UtilityEngine.isBoolean({})).to.equal(false);
        });

        it('Should return false when value is a function', () => {
            expect(UtilityEngine.isBoolean(function() {})).to.equal(false);
        });

        it('Should return false when value is a filled object', () => {
            expect(UtilityEngine.isBoolean({foo: 'bar'})).to.equal(false);
        });


        it('Should return false when value is a zero', () => {
            expect(UtilityEngine.isBoolean(0)).to.equal(false);
        });

        it('Should return false when value is a number', () => {
            expect(UtilityEngine.isBoolean(1)).to.equal(false);
        });

        it('Should return false when value is a primitive number', () => {
            expect(UtilityEngine.isBoolean(Number('1'))).to.equal(false);
        });

        it('Should return false when value is a wrapped primitive number', () => {
            expect(UtilityEngine.isBoolean(new Number('1'))).to.equal(false);
        });

        it('Should return false when value is a string', () => {
            expect(UtilityEngine.isBoolean('string')).to.equal(false);
        });

        it('Should return false when value is a primitive string', () => {
            expect(UtilityEngine.isBoolean(String('string'))).to.equal(false);
        });

        it('Should return false when value is a wrapped primitive string', () => {
            expect(UtilityEngine.isBoolean(new String('string'))).to.equal(false);
        });

        it('Should return false when value is an array', () => {
            expect(UtilityEngine.isBoolean([])).to.equal(false);
        });

        it('Should return false when value is a map', () => {
            expect(UtilityEngine.isBoolean(new Map())).to.equal(false);
        });

        it('Should return false when value is a date', () => {
            expect(UtilityEngine.isBoolean(new Date())).to.equal(false);
        });

        it('Should return false when value is a class instance', () => {
            expect(UtilityEngine.isBoolean(new (class Class {})())).to.equal(false);
        });

        it('Should return false when value is a class instance', () => {
            expect(UtilityEngine.isBoolean(new (class Class {}))).to.equal(false);
        });

        it('Should return false when value is a class declaration', () => {
            expect(UtilityEngine.isBoolean(class Class {})).to.equal(false);
        });
    });

    // ╔═══════╗╔═══════╗         ╔═══════╗╔═══════╗╔═╗      ╔═══════╗╔═╗   ╔═╗
    // ╚══╗ ╔══╝║ ╔═════╝         ║ ╔═════╝║ ╔═══╗ ║║ ║      ║ ╔═════╝║ ║   ║ ║
    //    ║ ║   ║ ╚═════╗╔═══════╗║ ╚═════╗║ ╚═══╝ ║║ ║      ║ ╚═════╗║ ╚═══╝ ║
    //    ║ ║   ╚═════╗ ║╚═══════╝║ ╔═════╝║ ╔═══╗ ║║ ║      ╚═════╗ ║╚═════╗ ║
    // ╔══╝ ╚══╗╔═════╝ ║         ║ ║      ║ ║   ║ ║║ ╚═════╗╔═════╝ ║╔═════╝ ║
    // ╚═══════╝╚═══════╝         ╚═╝      ╚═╝   ╚═╝╚═══════╝╚═══════╝╚═══════╝

    describe('#isFalsy(VALUE)', function() {
        it('Should return true when value is null', () => {
            expect(UtilityEngine.isFalsy(null)).to.equal(true);
        });

        it('Should return true when value is undefined', () => {
            expect(UtilityEngine.isFalsy(undefined)).to.equal(true);
        });

        it('Should return true when value is false boolean', () => {
            expect(UtilityEngine.isFalsy(false)).to.equal(true);
        });

        it('Should return true when value is NaN', () => {
            expect(UtilityEngine.isFalsy(NaN)).to.equal(true);
        });

        it('Should return true when value is an empty string', () => {
            expect(UtilityEngine.isFalsy('')).to.equal(true);
        });

        it('Should return true when value is a zero', () => {
            expect(UtilityEngine.isFalsy(0)).to.equal(true);
        });

        it('Should return true when value is a positive zero', () => {
            expect(UtilityEngine.isFalsy(+0)).to.equal(true);
        });

        it('Should return true when value is a negative zero', () => {
            expect(UtilityEngine.isFalsy(-0)).to.equal(true);
        });


        it('Should return false when value is true boolean', () => {
            expect(UtilityEngine.isFalsy(true)).to.equal(false);
        });

        it('Should return false when value is an empty object', () => {
            expect(UtilityEngine.isFalsy({})).to.equal(false);
        });

        it('Should return false when value is an empty array', () => {
            expect(UtilityEngine.isFalsy([])).to.equal(false);
        });

        it('Should return false when value is a function', () => {
            expect(UtilityEngine.isFalsy(function() {})).to.equal(false);
        });

        it('Should return false when value is a filled object', () => {
            expect(UtilityEngine.isFalsy({foo: 'bar'})).to.equal(false);
        });

        it('Should return false when value is a number', () => {
            expect(UtilityEngine.isFalsy(1)).to.equal(false);
        });

        it('Should return false when value is a primitive number', () => {
            expect(UtilityEngine.isBoolean(Number('1'))).to.equal(false);
        });

        it('Should return false when value is a wrapped primitive number', () => {
            expect(UtilityEngine.isFalsy(new Number('1'))).to.equal(false);
        });

        it('Should return false when value is a filled string', () => {
            expect(UtilityEngine.isFalsy('string')).to.equal(false);
        });

        it('Should return false when value is a primitive string', () => {
            expect(UtilityEngine.isFalsy(String('string'))).to.equal(false);
        });

        it('Should return false when value is a wrapped primitive string', () => {
            expect(UtilityEngine.isFalsy(new String('string'))).to.equal(false);
        });

        it('Should return false when value is a filled array', () => {
            expect(UtilityEngine.isFalsy([1, 2, 3])).to.equal(false);
        });

        it('Should return false when value is a map', () => {
            expect(UtilityEngine.isFalsy(new Map())).to.equal(false);
        });

        it('Should return false when value is a date', () => {
            expect(UtilityEngine.isFalsy(new Date())).to.equal(false);
        });

        it('Should return false when value is a class instance', () => {
            expect(UtilityEngine.isFalsy(new (class Class {})())).to.equal(false);
        });

        it('Should return false when value is a class instance', () => {
            expect(UtilityEngine.isFalsy(new (class Class {}))).to.equal(false);
        });

        it('Should return false when value is a class declaration', () => {
            expect(UtilityEngine.isFalsy(class Class {})).to.equal(false);
        });
    });
});
