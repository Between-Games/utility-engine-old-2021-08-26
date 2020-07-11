// ╔════╗╔═╗╔═╗   ╔═╗╔═══════╗╔══════╗ ╔═══════╗╔═══════╗   ╔═══════╗╔═══════╗╔═══════╗╔═══════╗   ╔═══════╗╔═══════╗
// ║ ╔╗ ║║ ║║ ║   ║ ║║ ╔╗ ╔╗ ║║ ╔══╗ ║ ║ ╔═════╝║ ╔═══╗ ║   ╚══╗ ╔══╝║ ╔═════╝║ ╔═════╝╚══╗ ╔══╝   ╚═══╗ ╔═╝║ ╔═════╝
// ║ ║║ ║║ ║║ ║   ║ ║║ ║║ ║║ ║║ ╚══╝ ╚╗║ ╚═════╗║ ╚═══╝ ║      ║ ║   ║ ╚═════╗║ ╚═════╗   ║ ║          ║ ║  ║ ╚═════╗
// ║ ║║ ║║ ║║ ║   ║ ║║ ║║ ║║ ║║ ╔═══╗ ║║ ╔═════╝║ ╔═╗ ╔═╝      ║ ║   ║ ╔═════╝╚═════╗ ║   ║ ║          ║ ║  ╚═════╗ ║
// ║ ║║ ╚╝ ║║ ╚═══╝ ║║ ║║ ║║ ║║ ╚═══╝ ║║ ╚═════╗║ ║ ║ ╚═╗╔═╗   ║ ║   ║ ╚═════╗╔═════╝ ║   ║ ║   ╔═╗╔═══╝ ║  ╔═════╝ ║
// ╚═╝╚════╝╚═══════╝╚═╝╚═╝╚═╝╚═══════╝╚═══════╝╚═╝ ╚═══╝╚═╝   ╚═╝   ╚═══════╝╚═══════╝   ╚═╝   ╚═╝╚═════╝  ╚═══════╝

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

// ╔════╗╔═╗╔═╗   ╔═╗╔═══════╗╔══════╗ ╔═══════╗╔═══════╗
// ║ ╔╗ ║║ ║║ ║   ║ ║║ ╔╗ ╔╗ ║║ ╔══╗ ║ ║ ╔═════╝║ ╔═══╗ ║
// ║ ║║ ║║ ║║ ║   ║ ║║ ║║ ║║ ║║ ╚══╝ ╚╗║ ╚═════╗║ ╚═══╝ ║
// ║ ║║ ║║ ║║ ║   ║ ║║ ║║ ║║ ║║ ╔═══╗ ║║ ╔═════╝║ ╔═╗ ╔═╝
// ║ ║║ ╚╝ ║║ ╚═══╝ ║║ ║║ ║║ ║║ ╚═══╝ ║║ ╚═════╗║ ║ ║ ╚═╗
// ╚═╝╚════╝╚═══════╝╚═╝╚═╝╚═╝╚═══════╝╚═══════╝╚═╝ ╚═══╝

describe('Number', function() {
    // ╔═══════╗╔═══════╗         ╔════╗╔═╗╔═╗   ╔═╗╔═══════╗╔══════╗ ╔═══════╗╔═══════╗
    // ╚══╗ ╔══╝║ ╔═════╝         ║ ╔╗ ║║ ║║ ║   ║ ║║ ╔╗ ╔╗ ║║ ╔══╗ ║ ║ ╔═════╝║ ╔═══╗ ║
    //    ║ ║   ║ ╚═════╗╔═══════╗║ ║║ ║║ ║║ ║   ║ ║║ ║║ ║║ ║║ ╚══╝ ╚╗║ ╚═════╗║ ╚═══╝ ║
    //    ║ ║   ╚═════╗ ║╚═══════╝║ ║║ ║║ ║║ ║   ║ ║║ ║║ ║║ ║║ ╔═══╗ ║║ ╔═════╝║ ╔═╗ ╔═╝
    // ╔══╝ ╚══╗╔═════╝ ║         ║ ║║ ╚╝ ║║ ╚═══╝ ║║ ║║ ║║ ║║ ╚═══╝ ║║ ╚═════╗║ ║ ║ ╚═╗
    // ╚═══════╝╚═══════╝         ╚═╝╚════╝╚═══════╝╚═╝╚═╝╚═╝╚═══════╝╚═══════╝╚═╝ ╚═══╝

    describe('#isNumber()', function() {
        it('should return true when value is a neutral zero', () => {
            expect(UtilityEngine.isNumber(0)).to.equal(true);
        });

        it('should return true when value is a positive zero', () => {
            expect(UtilityEngine.isNumber(+0)).to.equal(true);
        });

        it('should return true when value is a negative zero', () => {
            expect(UtilityEngine.isNumber(-0)).to.equal(true);
        });

        it('should return true when value is a positive number', () => {
            expect(UtilityEngine.isNumber(+1)).to.equal(true);
        });

        it('should return true when value is a negative number', () => {
            expect(UtilityEngine.isNumber(-1)).to.equal(true);
        });

        it('should return true when value is a positive decimal', () => {
            expect(UtilityEngine.isNumber(+1.1)).to.equal(true);
        });

        it('should return true when value is a negative decimal', () => {
            expect(UtilityEngine.isNumber(-1.1)).to.equal(true);
        });

        it('should return true when value is minimum number', () => {
            expect(UtilityEngine.isNumber(100, 0, 100)).to.equal(true);
        });

        it('should return true when value is maximum number', () => {
            expect(UtilityEngine.isNumber(0, 0, 100)).to.equal(true);
        });

        it('should return true when value is a big enough number', () => {
            expect(UtilityEngine.isNumber(100, 0, 100)).to.equal(true);
        });

        it('should return true when value is a big enough decimal', () => {
            expect(UtilityEngine.isNumber(99.9, 0, 100)).to.equal(true);
        });

        it('should return true when value is a small enough number', () => {
            expect(UtilityEngine.isNumber(0, 0, 100)).to.equal(true);
        });

        it('should return true when value is a small enough decimal', () => {
            expect(UtilityEngine.isNumber(0.01, 0, 100)).to.equal(true);
        });

        it('should return true when value is a primitive number', () => {
            expect(UtilityEngine.isNumber(Number('1'))).to.equal(true);
        });

        it('should return true when value is a primitive decimal', () => {
            expect(UtilityEngine.isNumber(Number('1.1'))).to.equal(true);
        });

        it('should return true when value is positive infinity', () => {
            expect(UtilityEngine.isNumber(Number.POSITIVE_INFINITY)).to.equal(true);
        });

        it('should return true when value is negative infinity', () => {
            expect(UtilityEngine.isNumber(Number.NEGATIVE_INFINITY)).to.equal(true);
        });

        it('should return false when value is null', () => {
            expect(UtilityEngine.isNumber(null)).to.equal(false);
        });

        it('should return false when value is undefined', () => {
            expect(UtilityEngine.isNumber(undefined)).to.equal(false);
        });

        it('should return false when value is an array', () => {
            expect(UtilityEngine.isNumber([])).to.equal(false);
        });

        it('should return false when value is an object', () => {
            expect(UtilityEngine.isNumber({})).to.equal(false);
        });

        it('should return false when value is a function', () => {
            expect(UtilityEngine.isNumber(function() {})).to.equal(false);
        });

        it('should return false when value is a true boolean', () => {
            expect(UtilityEngine.isNumber(true)).to.equal(false);
        });

        it('should return false when value is a false boolean', () => {
            expect(UtilityEngine.isNumber(false)).to.equal(false);
        });

        it('should return false when value is a string number', () => {
            expect(UtilityEngine.isNumber('1')).to.equal(false);
        });

        it('should return false when value is too big number', () => {
            expect(UtilityEngine.isNumber(101, 0, 100)).to.equal(false);
        });

        it('should return false when value is too big decimal', () => {
            expect(UtilityEngine.isNumber(100.01, 0, 100)).to.equal(false);
        });

        it('should return false when value is too small number', () => {
            expect(UtilityEngine.isNumber(-1, 0, 100)).to.equal(false);
        });

        it('should return false when value is too small decimal', () => {
            expect(UtilityEngine.isNumber(-0.01, 0, 1)).to.equal(false);
        });
    });
});
