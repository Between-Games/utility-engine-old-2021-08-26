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
});
