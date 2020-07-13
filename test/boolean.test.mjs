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
});
