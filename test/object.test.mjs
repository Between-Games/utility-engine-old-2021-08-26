// ╔═══════╗╔══════╗ ╔═══════╗╔═══════╗╔═══════╗╔═══════╗   ╔═══════╗╔═══════╗╔═══════╗╔═══════╗   ╔═══════╗╔═══════╗╔═══════╗
// ║ ╔═══╗ ║║ ╔══╗ ║ ╚═══╗ ╔═╝║ ╔═════╝║ ╔═════╝╚══╗ ╔══╝   ╚══╗ ╔══╝║ ╔═════╝║ ╔═════╝╚══╗ ╔══╝   ║ ╔╗ ╔╗ ║╚═══╗ ╔═╝║ ╔═════╝
// ║ ║   ║ ║║ ╚══╝ ╚╗    ║ ║  ║ ╚═════╗║ ║         ║ ║         ║ ║   ║ ╚═════╗║ ╚═════╗   ║ ║      ║ ║║ ║║ ║    ║ ║  ║ ╚═════╗
// ║ ║   ║ ║║ ╔═══╗ ║    ║ ║  ║ ╔═════╝║ ║         ║ ║         ║ ║   ║ ╔═════╝╚═════╗ ║   ║ ║      ║ ║║ ║║ ║    ║ ║  ╚═════╗ ║
// ║ ╚═══╝ ║║ ╚═══╝ ║╔═══╝ ║  ║ ╚═════╗║ ╚═════╗   ║ ║   ╔═╗   ║ ║   ║ ╚═════╗╔═════╝ ║   ║ ║   ╔═╗║ ║║ ║║ ║╔═══╝ ║  ╔═════╝ ║
// ╚═══════╝╚═══════╝╚═════╝  ╚═══════╝╚═══════╝   ╚═╝   ╚═╝   ╚═╝   ╚═══════╝╚═══════╝   ╚═╝   ╚═╝╚═╝╚═╝╚═╝╚═════╝  ╚═══════╝

'use strict';   // Extend JavaScript strict mode to the entire script

// ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗
// ╚══╗ ╔══╝║ ╔╗ ╔╗ ║║ ╔═══╗ ║║ ╔═══╗ ║║ ╔═══╗ ║╚══╗ ╔══╝
//    ║ ║   ║ ║║ ║║ ║║ ╚═══╝ ║║ ║   ║ ║║ ╚═══╝ ║   ║ ║
//    ║ ║   ║ ║║ ║║ ║║ ╔═════╝║ ║   ║ ║║ ╔═╗ ╔═╝   ║ ║
// ╔══╝ ╚══╗║ ║║ ║║ ║║ ║      ║ ╚═══╝ ║║ ║ ║ ╚═╗   ║ ║
// ╚═══════╝╚═╝╚═╝╚═╝╚═╝      ╚═══════╝╚═╝ ╚═══╝   ╚═╝

import UtilityEngine from '../dist/index.js';

import chai from 'chai';

const expect = chai.expect;

// ╔═══════╗╔══════╗ ╔═══════╗╔═══════╗╔═══════╗╔═══════╗
// ║ ╔═══╗ ║║ ╔══╗ ║ ╚═══╗ ╔═╝║ ╔═════╝║ ╔═════╝╚══╗ ╔══╝
// ║ ║   ║ ║║ ╚══╝ ╚╗    ║ ║  ║ ╚═════╗║ ║         ║ ║
// ║ ║   ║ ║║ ╔═══╗ ║    ║ ║  ║ ╔═════╝║ ║         ║ ║
// ║ ╚═══╝ ║║ ╚═══╝ ║╔═══╝ ║  ║ ╚═════╗║ ╚═════╗   ║ ║
// ╚═══════╝╚═══════╝╚═════╝  ╚═══════╝╚═══════╝   ╚═╝

describe('Object', function() {
    // ╔═══════╗╔═══════╗         ╔═══════╗╔══════╗ ╔═══════╗╔═══════╗╔═══════╗╔═══════╗
    // ╚══╗ ╔══╝║ ╔═════╝         ║ ╔═══╗ ║║ ╔══╗ ║ ╚═══╗ ╔═╝║ ╔═════╝║ ╔═════╝╚══╗ ╔══╝
    //    ║ ║   ║ ╚═════╗╔═══════╗║ ║   ║ ║║ ╚══╝ ╚╗    ║ ║  ║ ╚═════╗║ ║         ║ ║
    //    ║ ║   ╚═════╗ ║╚═══════╝║ ║   ║ ║║ ╔═══╗ ║    ║ ║  ║ ╔═════╝║ ║         ║ ║
    // ╔══╝ ╚══╗╔═════╝ ║         ║ ╚═══╝ ║║ ╚═══╝ ║╔═══╝ ║  ║ ╚═════╗║ ╚═════╗   ║ ║
    // ╚═══════╝╚═══════╝         ╚═══════╝╚═══════╝╚═════╝  ╚═══════╝╚═══════╝   ╚═╝

    describe('#isObject(VALUE)', function() {
        it('Should return true when value is an empty object', () => {
            expect(UtilityEngine.isObject({})).to.equal(true);
        });

        it('Should return true when value is a filled object', () => {
            expect(UtilityEngine.isObject({foo: 'bar'})).to.equal(true);
        });

        it('Should return true when value is a function', () => {
            expect(UtilityEngine.isObject(function() {})).to.equal(true);
        });

        it('Should return true when value is a class instance', () => {
            expect(UtilityEngine.isObject(new (class Class {})())).to.equal(true);
        });

        it('Should return true when value is a class instance', () => {
            expect(UtilityEngine.isObject(new (class Class {}))).to.equal(true);
        });

        it('Should return true when value is an array', () => {
            expect(UtilityEngine.isObject([])).to.equal(true);
        });

        it('Should return true when value is a map', () => {
            expect(UtilityEngine.isObject(new Map())).to.equal(true);
        });

        it('Should return true when value is a date', () => {
            expect(UtilityEngine.isObject(new Date())).to.equal(true);
        });

        it('Should return true when value is a class definition', () => {
            expect(UtilityEngine.isObject(class Class {})).to.equal(true);
        });

        it('Should return true when value is a wrapped primitive string', () => {
            expect(UtilityEngine.isObject(new String('string'))).to.equal(true);
        });

        it('Should return true when value is a wrapped primitive number', () => {
            expect(UtilityEngine.isObject(new Number('1'))).to.equal(true);
        });


        it('Should return false when value is null', () => {
            expect(UtilityEngine.isObject(null)).to.equal(false);
        });

        it('Should return false when value is undefined', () => {
            expect(UtilityEngine.isObject(undefined)).to.equal(false);
        });

        it('Should return false when value is true boolean', () => {
            expect(UtilityEngine.isObject(true)).to.equal(false);
        });

        it('Should return false when value is false boolean', () => {
            expect(UtilityEngine.isObject(false)).to.equal(false);
        });

        it('Should return false when value is a number', () => {
            expect(UtilityEngine.isObject(1)).to.equal(false);
        });

        it('Should return false when value is a primitive number', () => {
            expect(UtilityEngine.isObject(Number('1'))).to.equal(false);
        });

        it('Should return false when value is a string', () => {
            expect(UtilityEngine.isObject('string')).to.equal(false);
        });

        it('Should return false when value is a primitive string', () => {
            expect(UtilityEngine.isObject(String('string'))).to.equal(false);
        });
    });

    // ╔═══════╗╔═══════╗         ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═╗   ╔═╗         ╔═══════╗╔══════╗ ╔═══════╗╔═══════╗╔═══════╗╔═══════╗
    // ╚══╗ ╔══╝║ ╔═════╝         ║ ╔═════╝║ ╔╗ ╔╗ ║║ ╔═══╗ ║╚══╗ ╔══╝║ ║   ║ ║         ║ ╔═══╗ ║║ ╔══╗ ║ ╚═══╗ ╔═╝║ ╔═════╝║ ╔═════╝╚══╗ ╔══╝
    //    ║ ║   ║ ╚═════╗╔═══════╗║ ╚═════╗║ ║║ ║║ ║║ ╚═══╝ ║   ║ ║   ║ ╚═══╝ ║╔═══════╗║ ║   ║ ║║ ╚══╝ ╚╗    ║ ║  ║ ╚═════╗║ ║         ║ ║
    //    ║ ║   ╚═════╗ ║╚═══════╝║ ╔═════╝║ ║║ ║║ ║║ ╔═════╝   ║ ║   ╚═════╗ ║╚═══════╝║ ║   ║ ║║ ╔═══╗ ║    ║ ║  ║ ╔═════╝║ ║         ║ ║
    // ╔══╝ ╚══╗╔═════╝ ║         ║ ╚═════╗║ ║║ ║║ ║║ ║         ║ ║   ╔═════╝ ║         ║ ╚═══╝ ║║ ╚═══╝ ║╔═══╝ ║  ║ ╚═════╗║ ╚═════╗   ║ ║
    // ╚═══════╝╚═══════╝         ╚═══════╝╚═╝╚═╝╚═╝╚═╝         ╚═╝   ╚═══════╝         ╚═══════╝╚═══════╝╚═════╝  ╚═══════╝╚═══════╝   ╚═╝

    describe('#isFilledObject(VALUE)', function() {
        it('Should return true when value is an empty object', () => {
            expect(UtilityEngine.isEmptyObject({})).to.equal(true);
        });


        it('Should return false when value is a filled object', () => {
            expect(UtilityEngine.isEmptyObject({foo: 'bar'})).to.equal(false);
        });

        it('Should return false when value is a function', () => {
            expect(UtilityEngine.isEmptyObject(function() {})).to.equal(false);
        });

        it('Should return false when value is a class instance', () => {
            expect(UtilityEngine.isEmptyObject(new (class Class {})())).to.equal(false);
        });

        it('Should return false when value is a class instance', () => {
            expect(UtilityEngine.isEmptyObject(new (class Class {}))).to.equal(false);
        });

        it('Should return false when value is an array', () => {
            expect(UtilityEngine.isEmptyObject([])).to.equal(false);
        });

        it('Should return false when value is a map', () => {
            expect(UtilityEngine.isEmptyObject(new Map())).to.equal(false);
        });

        it('Should return false when value is a date', () => {
            expect(UtilityEngine.isEmptyObject(new Date())).to.equal(false);
        });

        it('Should return false when value is a class definition', () => {
            expect(UtilityEngine.isEmptyObject(class Class {})).to.equal(false);
        });

        it('Should return false when value is a wrapped primitive string', () => {
            expect(UtilityEngine.isEmptyObject(new String('string'))).to.equal(false);
        });

        it('Should return false when value is a wrapped primitive number', () => {
            expect(UtilityEngine.isEmptyObject(new Number('1'))).to.equal(false);
        });

        it('Should return false when value is null', () => {
            expect(UtilityEngine.isEmptyObject(null)).to.equal(false);
        });

        it('Should return false when value is undefined', () => {
            expect(UtilityEngine.isEmptyObject(undefined)).to.equal(false);
        });

        it('Should return false when value is true boolean', () => {
            expect(UtilityEngine.isEmptyObject(true)).to.equal(false);
        });

        it('Should return false when value is false boolean', () => {
            expect(UtilityEngine.isEmptyObject(false)).to.equal(false);
        });

        it('Should return false when value is a number', () => {
            expect(UtilityEngine.isEmptyObject(1)).to.equal(false);
        });

        it('Should return false when value is a primitive number', () => {
            expect(UtilityEngine.isEmptyObject(Number('1'))).to.equal(false);
        });

        it('Should return false when value is a string', () => {
            expect(UtilityEngine.isEmptyObject('string')).to.equal(false);
        });

        it('Should return false when value is a primitive string', () => {
            expect(UtilityEngine.isEmptyObject(String('string'))).to.equal(false);
        });
    });


    // ╔═══════╗╔═══════╗         ╔═══════╗╔═══════╗╔═╗      ╔═╗      ╔═══════╗╔═══════╗         ╔═══════╗╔══════╗ ╔═══════╗╔═══════╗╔═══════╗╔═══════╗
    // ╚══╗ ╔══╝║ ╔═════╝         ║ ╔═════╝╚══╗ ╔══╝║ ║      ║ ║      ║ ╔═════╝╚╗ ╔══╗ ║         ║ ╔═══╗ ║║ ╔══╗ ║ ╚═══╗ ╔═╝║ ╔═════╝║ ╔═════╝╚══╗ ╔══╝
    //    ║ ║   ║ ╚═════╗╔═══════╗║ ╚═════╗   ║ ║   ║ ║      ║ ║      ║ ╚═════╗ ║ ║  ║ ║╔═══════╗║ ║   ║ ║║ ╚══╝ ╚╗    ║ ║  ║ ╚═════╗║ ║         ║ ║
    //    ║ ║   ╚═════╗ ║╚═══════╝║ ╔═════╝   ║ ║   ║ ║      ║ ║      ║ ╔═════╝ ║ ║  ║ ║╚═══════╝║ ║   ║ ║║ ╔═══╗ ║    ║ ║  ║ ╔═════╝║ ║         ║ ║
    // ╔══╝ ╚══╗╔═════╝ ║         ║ ║      ╔══╝ ╚══╗║ ╚═════╗║ ╚═════╗║ ╚═════╗╔╝ ╚══╝ ║         ║ ╚═══╝ ║║ ╚═══╝ ║╔═══╝ ║  ║ ╚═════╗║ ╚═════╗   ║ ║
    // ╚═══════╝╚═══════╝         ╚═╝      ╚═══════╝╚═══════╝╚═══════╝╚═══════╝╚═══════╝         ╚═══════╝╚═══════╝╚═════╝  ╚═══════╝╚═══════╝   ╚═╝

    describe('#isFilledObject(VALUE)', function() {
        it('Should return true when value is a filled object', () => {
            expect(UtilityEngine.isFilledObject({foo: 'bar'})).to.equal(true);
        });

        it('Should return false when value is an empty object', () => {
            expect(UtilityEngine.isFilledObject({})).to.equal(false);
        });

        it('Should return false when value is a function', () => {
            expect(UtilityEngine.isFilledObject(function() {})).to.equal(false);
        });

        it('Should return false when value is a class instance', () => {
            expect(UtilityEngine.isFilledObject(new (class Class {})())).to.equal(false);
        });

        it('Should return false when value is a class instance', () => {
            expect(UtilityEngine.isFilledObject(new (class Class {}))).to.equal(false);
        });

        it('Should return false when value is an array', () => {
            expect(UtilityEngine.isFilledObject([])).to.equal(false);
        });

        it('Should return false when value is a map', () => {
            expect(UtilityEngine.isFilledObject(new Map())).to.equal(false);
        });

        it('Should return false when value is a date', () => {
            expect(UtilityEngine.isFilledObject(new Date())).to.equal(false);
        });

        it('Should return false when value is a class definition', () => {
            expect(UtilityEngine.isFilledObject(class Class {})).to.equal(false);
        });

        it('Should return false when value is a wrapped primitive string', () => {
            expect(UtilityEngine.isFilledObject(new String('string'))).to.equal(false);
        });

        it('Should return false when value is a wrapped primitive number', () => {
            expect(UtilityEngine.isFilledObject(new Number('1'))).to.equal(false);
        });

        it('Should return false when value is null', () => {
            expect(UtilityEngine.isFilledObject(null)).to.equal(false);
        });

        it('Should return false when value is undefined', () => {
            expect(UtilityEngine.isFilledObject(undefined)).to.equal(false);
        });

        it('Should return false when value is true boolean', () => {
            expect(UtilityEngine.isFilledObject(true)).to.equal(false);
        });

        it('Should return false when value is false boolean', () => {
            expect(UtilityEngine.isFilledObject(false)).to.equal(false);
        });

        it('Should return false when value is a number', () => {
            expect(UtilityEngine.isFilledObject(1)).to.equal(false);
        });

        it('Should return false when value is a primitive number', () => {
            expect(UtilityEngine.isFilledObject(Number('1'))).to.equal(false);
        });

        it('Should return false when value is a string', () => {
            expect(UtilityEngine.isFilledObject('string')).to.equal(false);
        });

        it('Should return false when value is a primitive string', () => {
            expect(UtilityEngine.isFilledObject(String('string'))).to.equal(false);
        });
    });

    // ╔═══════╗╔═══════╗         ╔═══════╗╔══════╗ ╔═══════╗╔═══════╗╔═══════╗╔═══════╗         ╔═╗      ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═╗
    // ╚══╗ ╔══╝║ ╔═════╝         ║ ╔═══╗ ║║ ╔══╗ ║ ╚═══╗ ╔═╝║ ╔═════╝║ ╔═════╝╚══╗ ╔══╝         ║ ║      ╚══╗ ╔══╝╚══╗ ╔══╝║ ╔═════╝║ ╔═══╗ ║║ ╔═══╗ ║║ ║
    //    ║ ║   ║ ╚═════╗╔═══════╗║ ║   ║ ║║ ╚══╝ ╚╗    ║ ║  ║ ╚═════╗║ ║         ║ ║   ╔═══════╗║ ║         ║ ║      ║ ║   ║ ╚═════╗║ ╚═══╝ ║║ ╚═══╝ ║║ ║
    //    ║ ║   ╚═════╗ ║╚═══════╝║ ║   ║ ║║ ╔═══╗ ║    ║ ║  ║ ╔═════╝║ ║         ║ ║   ╚═══════╝║ ║         ║ ║      ║ ║   ║ ╔═════╝║ ╔═╗ ╔═╝║ ╔═══╗ ║║ ║
    // ╔══╝ ╚══╗╔═════╝ ║         ║ ╚═══╝ ║║ ╚═══╝ ║╔═══╝ ║  ║ ╚═════╗║ ╚═════╗   ║ ║            ║ ╚═════╗╔══╝ ╚══╗   ║ ║   ║ ╚═════╗║ ║ ║ ╚═╗║ ║   ║ ║║ ╚═════╗
    // ╚═══════╝╚═══════╝         ╚═══════╝╚═══════╝╚═════╝  ╚═══════╝╚═══════╝   ╚═╝            ╚═══════╝╚═══════╝   ╚═╝   ╚═══════╝╚═╝ ╚═══╝╚═╝   ╚═╝╚═══════╝

    describe('#isObjectLiteral(VALUE)', function() {
        it('Should return true when value is an empty object', () => {
            expect(UtilityEngine.isObjectLiteral({})).to.equal(true);
        });

        it('Should return true when value is a filled object', () => {
            expect(UtilityEngine.isObjectLiteral({foo: 'bar'})).to.equal(true);
        });


        it('Should return false when value is null', () => {
            expect(UtilityEngine.isObjectLiteral(null)).to.equal(false);
        });

        it('Should return false when value is undefined', () => {
            expect(UtilityEngine.isObjectLiteral(undefined)).to.equal(false);
        });

        it('Should return false when value is a function', () => {
            expect(UtilityEngine.isObjectLiteral(function() {})).to.equal(false);
        });

        it('Should return false when value is true boolean', () => {
            expect(UtilityEngine.isObjectLiteral(true)).to.equal(false);
        });

        it('Should return false when value is false boolean', () => {
            expect(UtilityEngine.isObjectLiteral(false)).to.equal(false);
        });

        it('Should return false when value is a number', () => {
            expect(UtilityEngine.isObjectLiteral(1)).to.equal(false);
        });

        it('Should return false when value is a primitive number', () => {
            expect(UtilityEngine.isObjectLiteral(Number('1'))).to.equal(false);
        });

        it('Should return false when value is a wrapped primitive number', () => {
            expect(UtilityEngine.isObjectLiteral(new Number('1'))).to.equal(false);
        });

        it('Should return false when value is a string', () => {
            expect(UtilityEngine.isObjectLiteral('string')).to.equal(false);
        });

        it('Should return false when value is a primitive string', () => {
            expect(UtilityEngine.isObjectLiteral(String('string'))).to.equal(false);
        });

        it('Should return false when value is a wrapped primitive string', () => {
            expect(UtilityEngine.isObjectLiteral(new String('string'))).to.equal(false);
        });

        it('Should return false when value is an array', () => {
            expect(UtilityEngine.isObjectLiteral([])).to.equal(false);
        });

        it('Should return false when value is a map', () => {
            expect(UtilityEngine.isObjectLiteral(new Map())).to.equal(false);
        });

        it('Should return false when value is a date', () => {
            expect(UtilityEngine.isObjectLiteral(new Date())).to.equal(false);
        });

        it('Should return false when value is a class declaration', () => {
            expect(UtilityEngine.isObjectLiteral(class Class {})).to.equal(false);
        });

        it('Should return false when value is a class instance', () => {
            expect(UtilityEngine.isObjectLiteral(new (class Class {}))).to.equal(false);
        });

        it('Should return false when value is a class instance', () => {
            expect(UtilityEngine.isObjectLiteral(new (class Class {})())).to.equal(false);
        });
    });

    // ╔═══════╗╔═══════╗╔═══════╗╔═╗      ╔═══════╗╔═══════╗╔═══════╗         ╔═══════╗╔══════╗ ╔═══════╗╔═══════╗╔═══════╗╔═══════╗
    // ╚╗ ╔══╗ ║║ ╔═════╝║ ╔═════╝║ ║      ║ ╔═══╗ ║╚══╗ ╔══╝║ ╔═════╝         ║ ╔═══╗ ║║ ╔══╗ ║ ╚═══╗ ╔═╝║ ╔═════╝║ ╔═════╝╚══╗ ╔══╝
    //  ║ ║  ║ ║║ ╚═════╗║ ╚═════╗║ ║      ║ ╚═══╝ ║   ║ ║   ║ ╚═════╗╔═══════╗║ ║   ║ ║║ ╚══╝ ╚╗    ║ ║  ║ ╚═════╗║ ║         ║ ║
    //  ║ ║  ║ ║║ ╔═════╝║ ╔═════╝║ ║      ║ ╔═══╗ ║   ║ ║   ║ ╔═════╝╚═══════╝║ ║   ║ ║║ ╔═══╗ ║    ║ ║  ║ ╔═════╝║ ║         ║ ║
    // ╔╝ ╚══╝ ║║ ╚═════╗║ ║      ║ ╚═════╗║ ║   ║ ║   ║ ║   ║ ╚═════╗         ║ ╚═══╝ ║║ ╚═══╝ ║╔═══╝ ║  ║ ╚═════╗║ ╚═════╗   ║ ║
    // ╚═══════╝╚═══════╝╚═╝      ╚═══════╝╚═╝   ╚═╝   ╚═╝   ╚═══════╝         ╚═══════╝╚═══════╝╚═════╝  ╚═══════╝╚═══════╝   ╚═╝

    const emptyObject = {};
    const filledObject = {foo: 'bar'};

    const deflatedObject1 = {'foo.bar': 'foo'};
    const inflatedObject1 = {foo: {bar: 'foo'}};

    const deflatedObject2 = {'foo1': 'bar1', 'foo2.bar2': 'foo2'};
    const inflatedObject2 = {foo1: 'bar1', foo2: {bar2: 'foo2'}};

    const deflatedObject3 = {'foo1': 'bar1', 'foo2.bar2': 'foo2', 'foo2.bar3': 'foo3'};
    const inflatedObject3 = {foo1: 'bar1', foo2: {bar2: 'foo2', bar3: 'foo3'}};


    describe('#deflateObject(VALUE)', function() {
        it('Should return deflated object when value is an empty object', () => {
            expect(UtilityEngine.deflateObject(emptyObject)).to.deep.equal(emptyObject);
        });

        it('Should return deflated object when value is an filled object', () => {
            expect(UtilityEngine.deflateObject(filledObject)).to.deep.equal(filledObject);
        });

        it('Should return deflated object when value is an inflated object', () => {
            expect(UtilityEngine.deflateObject(inflatedObject1)).to.deep.equal(deflatedObject1);
        });

        it('Should return deflated object when value is an inflated object', () => {
            expect(UtilityEngine.deflateObject(inflatedObject2)).to.deep.equal(deflatedObject2);
        });

        it('Should return deflated object when value is an inflated object', () => {
            expect(UtilityEngine.deflateObject(inflatedObject3)).to.deep.equal(deflatedObject3);
        });


        it('Should throw type error when value is null', () => {
            expect(() => UtilityEngine.deflateObject(null)).to.throw(TypeError);
        });

        it('Should throw type error when value is undefined', () => {
            expect(() => UtilityEngine.deflateObject(undefined)).to.throw(TypeError);
        });

        it('Should throw type error when value is a function', () => {
            expect(() => UtilityEngine.deflateObject(function() {})).to.throw(TypeError);
        });

        it('Should throw type error when value is true boolean', () => {
            expect(() => UtilityEngine.deflateObject(true)).to.throw(TypeError);
        });

        it('Should throw type error when value is false boolean', () => {
            expect(() => UtilityEngine.deflateObject(false)).to.throw(TypeError);
        });

        it('Should throw type error when value is a number', () => {
            expect(() => UtilityEngine.deflateObject(1)).to.throw(TypeError);
        });

        it('Should throw type error when value is a primitive number', () => {
            expect(() => UtilityEngine.deflateObject(Number('1'))).to.throw(TypeError);
        });

        it('Should throw type error when value is a wrapped primitive number', () => {
            expect(() => UtilityEngine.deflateObject(new Number('1'))).to.throw(TypeError);
        });

        it('Should throw type error when value is a string', () => {
            expect(() => UtilityEngine.deflateObject('string')).to.throw(TypeError);
        });

        it('Should throw type error when value is a primitive string', () => {
            expect(() => UtilityEngine.deflateObject(String('string'))).to.throw(TypeError);
        });

        it('Should throw type error when value is a wrapped primitive string', () => {
            expect(() => UtilityEngine.deflateObject(new String('string'))).to.throw(TypeError);
        });

        it('Should throw type error when value is an array', () => {
            expect(() => UtilityEngine.deflateObject([])).to.throw(TypeError);
        });

        it('Should throw type error when value is a map', () => {
            expect(() => UtilityEngine.deflateObject(new Map())).to.throw(TypeError);
        });

        it('Should throw type error when value is a date', () => {
            expect(() => UtilityEngine.deflateObject(new Date())).to.throw(TypeError);
        });

        it('Should throw type error when value is a class declaration', () => {
            expect(() => UtilityEngine.deflateObject(class Class {})).to.throw(TypeError);
        });

        it('Should throw type error when value is a class instance', () => {
            expect(() => UtilityEngine.deflateObject(new (class Class {}))).to.throw(TypeError);
        });

        it('Should throw type error when value is a class instance', () => {
            expect(() => UtilityEngine.deflateObject(new (class Class {})())).to.throw(TypeError);
        });
    });
});
