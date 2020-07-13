// ╔═══════╗╔═╗   ╔═╗╔════╗╔═╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔════╗╔═╗   ╔═══════╗╔═══════╗╔═══════╗╔═══════╗   ╔═══════╗╔═══════╗╔═══════╗
// ║ ╔═════╝║ ║   ║ ║║ ╔╗ ║║ ║║ ╔═════╝╚══╗ ╔══╝╚══╗ ╔══╝║ ╔═══╗ ║║ ╔╗ ║║ ║   ╚══╗ ╔══╝║ ╔═════╝║ ╔═════╝╚══╗ ╔══╝   ║ ╔╗ ╔╗ ║╚═══╗ ╔═╝║ ╔═════╝
// ║ ╚═════╗║ ║   ║ ║║ ║║ ║║ ║║ ║         ║ ║      ║ ║   ║ ║   ║ ║║ ║║ ║║ ║      ║ ║   ║ ╚═════╗║ ╚═════╗   ║ ║      ║ ║║ ║║ ║    ║ ║  ║ ╚═════╗
// ║ ╔═════╝║ ║   ║ ║║ ║║ ║║ ║║ ║         ║ ║      ║ ║   ║ ║   ║ ║║ ║║ ║║ ║      ║ ║   ║ ╔═════╝╚═════╗ ║   ║ ║      ║ ║║ ║║ ║    ║ ║  ╚═════╗ ║
// ║ ║      ║ ╚═══╝ ║║ ║║ ╚╝ ║║ ╚═════╗   ║ ║   ╔══╝ ╚══╗║ ╚═══╝ ║║ ║║ ╚╝ ║╔═╗   ║ ║   ║ ╚═════╗╔═════╝ ║   ║ ║   ╔═╗║ ║║ ║║ ║╔═══╝ ║  ╔═════╝ ║
// ╚═╝      ╚═══════╝╚═╝╚════╝╚═══════╝   ╚═╝   ╚═══════╝╚═══════╝╚═╝╚════╝╚═╝   ╚═╝   ╚═══════╝╚═══════╝   ╚═╝   ╚═╝╚═╝╚═╝╚═╝╚═════╝  ╚═══════╝

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

// ╔═══════╗╔═╗   ╔═╗╔════╗╔═╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔════╗╔═╗
// ║ ╔═════╝║ ║   ║ ║║ ╔╗ ║║ ║║ ╔═════╝╚══╗ ╔══╝╚══╗ ╔══╝║ ╔═══╗ ║║ ╔╗ ║║ ║
// ║ ╚═════╗║ ║   ║ ║║ ║║ ║║ ║║ ║         ║ ║      ║ ║   ║ ║   ║ ║║ ║║ ║║ ║
// ║ ╔═════╝║ ║   ║ ║║ ║║ ║║ ║║ ║         ║ ║      ║ ║   ║ ║   ║ ║║ ║║ ║║ ║
// ║ ║      ║ ╚═══╝ ║║ ║║ ╚╝ ║║ ╚═════╗   ║ ║   ╔══╝ ╚══╗║ ╚═══╝ ║║ ║║ ╚╝ ║
// ╚═╝      ╚═══════╝╚═╝╚════╝╚═══════╝   ╚═╝   ╚═══════╝╚═══════╝╚═╝╚════╝

describe('Function', function() {
    // ╔═══════╗╔═══════╗         ╔═══════╗╔═╗   ╔═╗╔════╗╔═╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔════╗╔═╗
    // ╚══╗ ╔══╝║ ╔═════╝         ║ ╔═════╝║ ║   ║ ║║ ╔╗ ║║ ║║ ╔═════╝╚══╗ ╔══╝╚══╗ ╔══╝║ ╔═══╗ ║║ ╔╗ ║║ ║
    //    ║ ║   ║ ╚═════╗╔═══════╗║ ╚═════╗║ ║   ║ ║║ ║║ ║║ ║║ ║         ║ ║      ║ ║   ║ ║   ║ ║║ ║║ ║║ ║
    //    ║ ║   ╚═════╗ ║╚═══════╝║ ╔═════╝║ ║   ║ ║║ ║║ ║║ ║║ ║         ║ ║      ║ ║   ║ ║   ║ ║║ ║║ ║║ ║
    // ╔══╝ ╚══╗╔═════╝ ║         ║ ║      ║ ╚═══╝ ║║ ║║ ╚╝ ║║ ╚═════╗   ║ ║   ╔══╝ ╚══╗║ ╚═══╝ ║║ ║║ ╚╝ ║
    // ╚═══════╝╚═══════╝         ╚═╝      ╚═══════╝╚═╝╚════╝╚═══════╝   ╚═╝   ╚═══════╝╚═══════╝╚═╝╚════╝

    describe('#isFunction(VALUE)', function() {
        it('Should return true when value is a function', () => {
            expect(UtilityEngine.isFunction(function() {})).to.equal(true);
        });

        it('Should return true when value is a class declaration', () => {
            expect(UtilityEngine.isFunction(class Class {})).to.equal(true);
        });


        it('Should return false when value is null', () => {
            expect(UtilityEngine.isFunction(null)).to.equal(false);
        });

        it('Should return false when value is undefined', () => {
            expect(UtilityEngine.isFunction(undefined)).to.equal(false);
        });

        it('Should return false when value is an empty object', () => {
            expect(UtilityEngine.isFunction({})).to.equal(false);
        });

        it('Should return false when value is a filled object', () => {
            expect(UtilityEngine.isFunction({foo: 'bar'})).to.equal(false);
        });

        it('Should return false when value is true boolean', () => {
            expect(UtilityEngine.isFunction(true)).to.equal(false);
        });

        it('Should return false when value is false boolean', () => {
            expect(UtilityEngine.isFunction(false)).to.equal(false);
        });

        it('Should return false when value is a number', () => {
            expect(UtilityEngine.isFunction(1)).to.equal(false);
        });

        it('Should return false when value is a primitive number', () => {
            expect(UtilityEngine.isFunction(Number('1'))).to.equal(false);
        });

        it('Should return false when value is a wrapped primitive number', () => {
            expect(UtilityEngine.isFunction(new Number('1'))).to.equal(false);
        });

        it('Should return false when value is a string', () => {
            expect(UtilityEngine.isFunction('string')).to.equal(false);
        });

        it('Should return false when value is a primitive string', () => {
            expect(UtilityEngine.isFunction(String('string'))).to.equal(false);
        });

        it('Should return false when value is a wrapped primitive string', () => {
            expect(UtilityEngine.isFunction(new String('string'))).to.equal(false);
        });

        it('Should return false when value is an array', () => {
            expect(UtilityEngine.isFunction([])).to.equal(false);
        });

        it('Should return false when value is a map', () => {
            expect(UtilityEngine.isFunction(new Map())).to.equal(false);
        });

        it('Should return false when value is a date', () => {
            expect(UtilityEngine.isFunction(new Date())).to.equal(false);
        });

        it('Should return false when value is a class instance', () => {
            expect(UtilityEngine.isFunction(new (class Class {})())).to.equal(false);
        });

        it('Should return false when value is a class instance', () => {
            expect(UtilityEngine.isFunction(new (class Class {}))).to.equal(false);
        });
    });
});
