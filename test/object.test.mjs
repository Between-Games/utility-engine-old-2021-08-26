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

import UtilityEngine from '../build/index.js';

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
            expect(UtilityEngine.isObjectLiteral(new (class Class {})())).to.equal(false);
        });

        it('Should return false when value is a class instance', () => {
            expect(UtilityEngine.isObjectLiteral(new (class Class {}))).to.equal(false);
        });
    });
});
