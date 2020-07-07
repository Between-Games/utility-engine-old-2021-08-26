// ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔════╗╔═╗╔═══════╗   ╔═══════╗╔═══════╗╔═══════╗╔═══════╗   ╔═══════╗╔═══════╗
// ║ ╔═════╝╚══╗ ╔══╝║ ╔═══╗ ║╚══╗ ╔══╝║ ╔╗ ║║ ║║ ╔═════╝   ╚══╗ ╔══╝║ ╔═════╝║ ╔═════╝╚══╗ ╔══╝   ╚═══╗ ╔═╝║ ╔═════╝
// ║ ╚═════╗   ║ ║   ║ ╚═══╝ ║   ║ ║   ║ ║║ ║║ ║║ ║ ╔═══╗      ║ ║   ║ ╚═════╗║ ╚═════╗   ║ ║          ║ ║  ║ ╚═════╗
// ╚═════╗ ║   ║ ║   ║ ╔═╗ ╔═╝   ║ ║   ║ ║║ ║║ ║║ ║ ╚═╗ ║      ║ ║   ║ ╔═════╝╚═════╗ ║   ║ ║          ║ ║  ╚═════╗ ║
// ╔═════╝ ║   ║ ║   ║ ║ ║ ╚═╗╔══╝ ╚══╗║ ║║ ╚╝ ║║ ╚═══╝ ║╔═╗   ║ ║   ║ ╚═════╗╔═════╝ ║   ║ ║   ╔═╗╔═══╝ ║  ╔═════╝ ║
// ╚═══════╝   ╚═╝   ╚═╝ ╚═══╝╚═══════╝╚═╝╚════╝╚═══════╝╚═╝   ╚═╝   ╚═══════╝╚═══════╝   ╚═╝   ╚═╝╚═════╝  ╚═══════╝

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

// ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔════╗╔═╗╔═══════╗
// ║ ╔═════╝╚══╗ ╔══╝║ ╔═══╗ ║╚══╗ ╔══╝║ ╔╗ ║║ ║║ ╔═════╝
// ║ ╚═════╗   ║ ║   ║ ╚═══╝ ║   ║ ║   ║ ║║ ║║ ║║ ║ ╔═══╗
// ╚═════╗ ║   ║ ║   ║ ╔═╗ ╔═╝   ║ ║   ║ ║║ ║║ ║║ ║ ╚═╗ ║
// ╔═════╝ ║   ║ ║   ║ ║ ║ ╚═╗╔══╝ ╚══╗║ ║║ ╚╝ ║║ ╚═══╝ ║
// ╚═══════╝   ╚═╝   ╚═╝ ╚═══╝╚═══════╝╚═╝╚════╝╚═══════╝

describe('String', function() {
    // ╔═══════╗╔═══════╗         ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔════╗╔═╗╔═══════╗
    // ╚══╗ ╔══╝║ ╔═════╝         ║ ╔═════╝╚══╗ ╔══╝║ ╔═══╗ ║╚══╗ ╔══╝║ ╔╗ ║║ ║║ ╔═════╝
    //    ║ ║   ║ ╚═════╗╔═══════╗║ ╚═════╗   ║ ║   ║ ╚═══╝ ║   ║ ║   ║ ║║ ║║ ║║ ║ ╔═══╗
    //    ║ ║   ╚═════╗ ║╚═══════╝╚═════╗ ║   ║ ║   ║ ╔═╗ ╔═╝   ║ ║   ║ ║║ ║║ ║║ ║ ╚═╗ ║
    // ╔══╝ ╚══╗╔═════╝ ║         ╔═════╝ ║   ║ ║   ║ ║ ║ ╚═╗╔══╝ ╚══╗║ ║║ ╚╝ ║║ ╚═══╝ ║
    // ╚═══════╝╚═══════╝         ╚═══════╝   ╚═╝   ╚═╝ ╚═══╝╚═══════╝╚═╝╚════╝╚═══════╝

    describe('#isString()', function() {
        it('should return true when value is a filled string', () => {
            expect(UtilityEngine.isString('string')).to.equal(true);
        });

        it('should return true when value is an empty string', () => {
            expect(UtilityEngine.isString('')).to.equal(true);
        });

        it('should return false when value is true', () => {
            expect(UtilityEngine.isString(true)).to.equal(false);
        });

        it('should return false when value is false', () => {
            expect(UtilityEngine.isString(false)).to.equal(false);
        });

        it('should return false when value is null', () => {
            expect(UtilityEngine.isString(null)).to.equal(false);
        });

        it('should return false when value is undefined', () => {
            expect(UtilityEngine.isString(undefined)).to.equal(false);
        });

        it('should return false when value is an object', () => {
            expect(UtilityEngine.isString({})).to.equal(false);
        });

        it('should return false when value is a number', () => {
            expect(UtilityEngine.isString(0)).to.equal(false);
        });

        it('should return false when value is an array', () => {
            expect(UtilityEngine.isString([])).to.equal(false);
        });

        it('should return false when value is a function', () => {
            expect(UtilityEngine.isString(function() {})).to.equal(false);
        });
    });

    // ╔═══════╗╔═══════╗         ╔═══════╗╔═══════╗╔═╗      ╔═╗      ╔═══════╗╔═══════╗         ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔════╗╔═╗╔═══════╗
    // ╚══╗ ╔══╝║ ╔═════╝         ║ ╔═════╝╚══╗ ╔══╝║ ║      ║ ║      ║ ╔═════╝╚╗ ╔══╗ ║         ║ ╔═════╝╚══╗ ╔══╝║ ╔═══╗ ║╚══╗ ╔══╝║ ╔╗ ║║ ║║ ╔═════╝
    //    ║ ║   ║ ╚═════╗╔═══════╗║ ╚═════╗   ║ ║   ║ ║      ║ ║      ║ ╚═════╗ ║ ║  ║ ║╔═══════╗║ ╚═════╗   ║ ║   ║ ╚═══╝ ║   ║ ║   ║ ║║ ║║ ║║ ║ ╔═══╗
    //    ║ ║   ╚═════╗ ║╚═══════╝║ ╔═════╝   ║ ║   ║ ║      ║ ║      ║ ╔═════╝ ║ ║  ║ ║╚═══════╝╚═════╗ ║   ║ ║   ║ ╔═╗ ╔═╝   ║ ║   ║ ║║ ║║ ║║ ║ ╚═╗ ║
    // ╔══╝ ╚══╗╔═════╝ ║         ║ ║      ╔══╝ ╚══╗║ ╚═════╗║ ╚═════╗║ ╚═════╗╔╝ ╚══╝ ║         ╔═════╝ ║   ║ ║   ║ ║ ║ ╚═╗╔══╝ ╚══╗║ ║║ ╚╝ ║║ ╚═══╝ ║
    // ╚═══════╝╚═══════╝         ╚═╝      ╚═══════╝╚═══════╝╚═══════╝╚═══════╝╚═══════╝         ╚═══════╝   ╚═╝   ╚═╝ ╚═══╝╚═══════╝╚═╝╚════╝╚═══════╝

    describe('#isFilledString()', function() {
        it('should return true when value is a filled string', () => {
            expect(UtilityEngine.isFilledString('string')).to.equal(true);
        });

        it('should return false when value is an empty string', () => {
            expect(UtilityEngine.isFilledString('')).to.equal(false);
        });

        it('should return false when value is true', () => {
            expect(UtilityEngine.isFilledString(true)).to.equal(false);
        });

        it('should return false when value is false', () => {
            expect(UtilityEngine.isFilledString(false)).to.equal(false);
        });

        it('should return false when value is null', () => {
            expect(UtilityEngine.isFilledString(null)).to.equal(false);
        });

        it('should return false when value is undefined', () => {
            expect(UtilityEngine.isFilledString(undefined)).to.equal(false);
        });

        it('should return false when value is an object', () => {
            expect(UtilityEngine.isFilledString({})).to.equal(false);
        });

        it('should return false when value is a number', () => {
            expect(UtilityEngine.isFilledString(0)).to.equal(false);
        });

        it('should return false when value is an array', () => {
            expect(UtilityEngine.isFilledString([])).to.equal(false);
        });

        it('should return false when value is a function', () => {
            expect(UtilityEngine.isFilledString(function() {})).to.equal(false);
        });
    });

    // ╔═══════╗╔═══════╗         ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═╗   ╔═╗         ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔════╗╔═╗╔═══════╗
    // ╚══╗ ╔══╝║ ╔═════╝         ║ ╔═════╝║ ╔╗ ╔╗ ║║ ╔═══╗ ║╚══╗ ╔══╝║ ║   ║ ║         ║ ╔═════╝╚══╗ ╔══╝║ ╔═══╗ ║╚══╗ ╔══╝║ ╔╗ ║║ ║║ ╔═════╝
    //    ║ ║   ║ ╚═════╗╔═══════╗║ ╚═════╗║ ║║ ║║ ║║ ╚═══╝ ║   ║ ║   ║ ╚═══╝ ║╔═══════╗║ ╚═════╗   ║ ║   ║ ╚═══╝ ║   ║ ║   ║ ║║ ║║ ║║ ║ ╔═══╗
    //    ║ ║   ╚═════╗ ║╚═══════╝║ ╔═════╝║ ║║ ║║ ║║ ╔═════╝   ║ ║   ╚═════╗ ║╚═══════╝╚═════╗ ║   ║ ║   ║ ╔═╗ ╔═╝   ║ ║   ║ ║║ ║║ ║║ ║ ╚═╗ ║
    // ╔══╝ ╚══╗╔═════╝ ║         ║ ╚═════╗║ ║║ ║║ ║║ ║         ║ ║   ╔═════╝ ║         ╔═════╝ ║   ║ ║   ║ ║ ║ ╚═╗╔══╝ ╚══╗║ ║║ ╚╝ ║║ ╚═══╝ ║
    // ╚═══════╝╚═══════╝         ╚═══════╝╚═╝╚═╝╚═╝╚═╝         ╚═╝   ╚═══════╝         ╚═══════╝   ╚═╝   ╚═╝ ╚═══╝╚═══════╝╚═╝╚════╝╚═══════╝

    describe('#isEmptyString()', function() {
        it('should return true when value is an empty string', () => {
            expect(UtilityEngine.isEmptyString('')).to.equal(true);
        });

        it('should return false when value is a filled string', () => {
            expect(UtilityEngine.isEmptyString('string')).to.equal(false);
        });

        it('should return false when value is true', () => {
            expect(UtilityEngine.isEmptyString(true)).to.equal(false);
        });

        it('should return false when value is false', () => {
            expect(UtilityEngine.isEmptyString(false)).to.equal(false);
        });

        it('should return false when value is null', () => {
            expect(UtilityEngine.isEmptyString(null)).to.equal(false);
        });

        it('should return false when value is undefined', () => {
            expect(UtilityEngine.isEmptyString(undefined)).to.equal(false);
        });

        it('should return false when value is an object', () => {
            expect(UtilityEngine.isEmptyString({})).to.equal(false);
        });

        it('should return false when value is a number', () => {
            expect(UtilityEngine.isEmptyString(0)).to.equal(false);
        });

        it('should return false when value is an array', () => {
            expect(UtilityEngine.isEmptyString([])).to.equal(false);
        });

        it('should return false when value is a function', () => {
            expect(UtilityEngine.isEmptyString(function() {})).to.equal(false);
        });
    });
});
