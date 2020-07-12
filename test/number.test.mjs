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

    describe('#isNumber(value, minimum, maximum)', function() {
        describe('#isNumber(VALUE, minimum, maximum)', function() {
            it('Should return true when value is a neutral zero', () => {
                expect(UtilityEngine.isNumber(0)).to.equal(true);
            });

            it('Should return true when value is a positive zero', () => {
                expect(UtilityEngine.isNumber(+0)).to.equal(true);
            });

            it('Should return true when value is a negative zero', () => {
                expect(UtilityEngine.isNumber(-0)).to.equal(true);
            });

            it('Should return true when value is a positive number', () => {
                expect(UtilityEngine.isNumber(+1)).to.equal(true);
            });

            it('Should return true when value is a negative number', () => {
                expect(UtilityEngine.isNumber(-1)).to.equal(true);
            });

            it('Should return true when value is a positive decimal', () => {
                expect(UtilityEngine.isNumber(+1.1)).to.equal(true);
            });

            it('Should return true when value is a negative decimal', () => {
                expect(UtilityEngine.isNumber(-1.1)).to.equal(true);
            });

            it('Should return true when value is minimum number', () => {
                expect(UtilityEngine.isNumber(100, 0, 100)).to.equal(true);
            });

            it('Should return true when value is maximum number', () => {
                expect(UtilityEngine.isNumber(0, 0, 100)).to.equal(true);
            });

            it('Should return true when value is a big enough number', () => {
                expect(UtilityEngine.isNumber(100, 0, 100)).to.equal(true);
            });

            it('Should return true when value is a big enough decimal', () => {
                expect(UtilityEngine.isNumber(99.9, 0, 100)).to.equal(true);
            });

            it('Should return true when value is a small enough number', () => {
                expect(UtilityEngine.isNumber(0, 0, 100)).to.equal(true);
            });

            it('Should return true when value is a small enough decimal', () => {
                expect(UtilityEngine.isNumber(0.01, 0, 100)).to.equal(true);
            });

            it('Should return true when value is a primitive number', () => {
                expect(UtilityEngine.isNumber(Number('1'))).to.equal(true);
            });

            it('Should return true when value is a primitive decimal', () => {
                expect(UtilityEngine.isNumber(Number('1.1'))).to.equal(true);
            });

            it('Should return true when value is positive infinity', () => {
                expect(UtilityEngine.isNumber(Number.POSITIVE_INFINITY)).to.equal(true);
            });

            it('Should return true when value is negative infinity', () => {
                expect(UtilityEngine.isNumber(Number.NEGATIVE_INFINITY)).to.equal(true);
            });

            it('Should return false when value is null', () => {
                expect(UtilityEngine.isNumber(null)).to.equal(false);
            });

            it('Should return false when value is undefined', () => {
                expect(UtilityEngine.isNumber(undefined)).to.equal(false);
            });

            it('Should return false when value is an array', () => {
                expect(UtilityEngine.isNumber([])).to.equal(false);
            });

            it('Should return false when value is an object', () => {
                expect(UtilityEngine.isNumber({})).to.equal(false);
            });

            it('Should return false when value is a function', () => {
                expect(UtilityEngine.isNumber(function() {})).to.equal(false);
            });

            it('Should return false when value is a true boolean', () => {
                expect(UtilityEngine.isNumber(true)).to.equal(false);
            });

            it('Should return false when value is a false boolean', () => {
                expect(UtilityEngine.isNumber(false)).to.equal(false);
            });

            it('Should return false when value is a string number', () => {
                expect(UtilityEngine.isNumber('1')).to.equal(false);
            });

            it('Should return false when value is too big number', () => {
                expect(UtilityEngine.isNumber(101, 0, 100)).to.equal(false);
            });

            it('Should return false when value is too big decimal', () => {
                expect(UtilityEngine.isNumber(100.01, 0, 100)).to.equal(false);
            });

            it('Should return false when value is too small number', () => {
                expect(UtilityEngine.isNumber(-1, 0, 100)).to.equal(false);
            });

            it('Should return false when value is too small decimal', () => {
                expect(UtilityEngine.isNumber(-0.01, 0, 1)).to.equal(false);
            });
        });

        describe('#isNumber(value, MINIMUM, maximum)', function() {
            it('Should return false when minimum parameter is null', () => {
                expect(UtilityEngine.isNumber(1, null)).to.equal(false);
            });

            it('Should return false when minimum parameter is a string', () => {
                expect(UtilityEngine.isNumber(1, 'min')).to.equal(false);
            });

            it('Should return false when minimum parameter is an array', () => {
                expect(UtilityEngine.isNumber(1, [])).to.equal(false);
            });

            it('Should return false when minimum parameter is an object', () => {
                expect(UtilityEngine.isNumber(1, {})).to.equal(false);
            });

            it('Should return false when minimum parameter is a function', () => {
                expect(UtilityEngine.isNumber(1, function() {})).to.equal(false);
            });
        });

        describe('#isNumber(value, minimum, MAXIMUM)', function() {
            it('Should return false when maximum parameter is null', () => {
                expect(UtilityEngine.isNumber(1, 0, null)).to.equal(false);
            });

            it('Should return false when maximum parameter is a string', () => {
                expect(UtilityEngine.isNumber(1, 0, 'min')).to.equal(false);
            });

            it('Should return false when maximum parameter is an array', () => {
                expect(UtilityEngine.isNumber(1, 0, [])).to.equal(false);
            });

            it('Should return false when maximum parameter is an object', () => {
                expect(UtilityEngine.isNumber(1, 0, {})).to.equal(false);
            });

            it('Should return false when maximum parameter is a function', () => {
                expect(UtilityEngine.isNumber(1, 0, function() {})).to.equal(false);
            });
        });
    });

    // ╔═══════╗╔═══════╗         ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═╗   ╔═╗╔═══════╗         ╔════╗╔═╗╔═╗   ╔═╗╔═══════╗╔══════╗ ╔═══════╗╔═══════╗
    // ╚══╗ ╔══╝║ ╔═════╝         ║ ╔═══╗ ║║ ╔═══╗ ║║ ╔═════╝╚══╗ ╔══╝╚══╗ ╔══╝╚══╗ ╔══╝║ ║   ║ ║║ ╔═════╝         ║ ╔╗ ║║ ║║ ║   ║ ║║ ╔╗ ╔╗ ║║ ╔══╗ ║ ║ ╔═════╝║ ╔═══╗ ║
    //    ║ ║   ║ ╚═════╗╔═══════╗║ ╚═══╝ ║║ ║   ║ ║║ ╚═════╗   ║ ║      ║ ║      ║ ║   ║ ╚╗ ╔╝ ║║ ╚═════╗╔═══════╗║ ║║ ║║ ║║ ║   ║ ║║ ║║ ║║ ║║ ╚══╝ ╚╗║ ╚═════╗║ ╚═══╝ ║
    //    ║ ║   ╚═════╗ ║╚═══════╝║ ╔═════╝║ ║   ║ ║╚═════╗ ║   ║ ║      ║ ║      ║ ║   ╚╗ ║ ║ ╔╝║ ╔═════╝╚═══════╝║ ║║ ║║ ║║ ║   ║ ║║ ║║ ║║ ║║ ╔═══╗ ║║ ╔═════╝║ ╔═╗ ╔═╝
    // ╔══╝ ╚══╗╔═════╝ ║         ║ ║      ║ ╚═══╝ ║╔═════╝ ║╔══╝ ╚══╗   ║ ║   ╔══╝ ╚══╗ ║ ╚═╝ ║ ║ ╚═════╗         ║ ║║ ╚╝ ║║ ╚═══╝ ║║ ║║ ║║ ║║ ╚═══╝ ║║ ╚═════╗║ ║ ║ ╚═╗
    // ╚═══════╝╚═══════╝         ╚═╝      ╚═══════╝╚═══════╝╚═══════╝   ╚═╝   ╚═══════╝ ╚═════╝ ╚═══════╝         ╚═╝╚════╝╚═══════╝╚═╝╚═╝╚═╝╚═══════╝╚═══════╝╚═╝ ╚═══╝

    describe('#isPositiveNumber(value, maximum)', function() {
        describe('#isPositiveNumber(VALUE, maximum)', function() {
            it('Should return true when value is a neutral zero', () => {
                expect(UtilityEngine.isPositiveNumber(0)).to.equal(true);
            });

            it('Should return true when value is a positive zero', () => {
                expect(UtilityEngine.isPositiveNumber(+0)).to.equal(true);
            });

            it('Should return true when value is a negative zero', () => {
                expect(UtilityEngine.isPositiveNumber(-0)).to.equal(true);
            });

            it('Should return true when value is a positive number', () => {
                expect(UtilityEngine.isPositiveNumber(+1)).to.equal(true);
            });

            it('Should return true when value is a positive decimal', () => {
                expect(UtilityEngine.isPositiveNumber(+1.1)).to.equal(true);
            });

            it('Should return true when value is minimum number', () => {
                expect(UtilityEngine.isPositiveNumber(100, 100)).to.equal(true);
            });

            it('Should return true when value is maximum number', () => {
                expect(UtilityEngine.isPositiveNumber(0, 100)).to.equal(true);
            });

            it('Should return true when value is a big enough number', () => {
                expect(UtilityEngine.isPositiveNumber(100, 100)).to.equal(true);
            });

            it('Should return true when value is a big enough decimal', () => {
                expect(UtilityEngine.isPositiveNumber(99.9, 100)).to.equal(true);
            });

            it('Should return true when value is a small enough number', () => {
                expect(UtilityEngine.isPositiveNumber(0, 100)).to.equal(true);
            });

            it('Should return true when value is a small enough decimal', () => {
                expect(UtilityEngine.isPositiveNumber(0.01, 100)).to.equal(true);
            });

            it('Should return true when value is a primitive number', () => {
                expect(UtilityEngine.isPositiveNumber(Number('1'))).to.equal(true);
            });

            it('Should return true when value is a primitive decimal', () => {
                expect(UtilityEngine.isPositiveNumber(Number('1.1'))).to.equal(true);
            });

            it('Should return true when value is positive infinity', () => {
                expect(UtilityEngine.isPositiveNumber(Number.POSITIVE_INFINITY)).to.equal(true);
            });


            it('Should return false when value is null', () => {
                expect(UtilityEngine.isPositiveNumber(null)).to.equal(false);
            });

            it('Should return false when value is undefined', () => {
                expect(UtilityEngine.isPositiveNumber(undefined)).to.equal(false);
            });

            it('Should return false when value is an array', () => {
                expect(UtilityEngine.isPositiveNumber([])).to.equal(false);
            });

            it('Should return false when value is an object', () => {
                expect(UtilityEngine.isPositiveNumber({})).to.equal(false);
            });

            it('Should return false when value is a function', () => {
                expect(UtilityEngine.isPositiveNumber(function() {})).to.equal(false);
            });

            it('Should return false when value is a true boolean', () => {
                expect(UtilityEngine.isPositiveNumber(true)).to.equal(false);
            });

            it('Should return false when value is a false boolean', () => {
                expect(UtilityEngine.isPositiveNumber(false)).to.equal(false);
            });

            it('Should return false when value is a string number', () => {
                expect(UtilityEngine.isPositiveNumber('1')).to.equal(false);
            });

            it('Should return false when value is a negative number', () => {
                expect(UtilityEngine.isPositiveNumber(-1)).to.equal(false);
            });

            it('Should return false when value is too big number', () => {
                expect(UtilityEngine.isPositiveNumber(101, 100)).to.equal(false);
            });

            it('Should return false when value is too big decimal', () => {
                expect(UtilityEngine.isPositiveNumber(100.01, 100)).to.equal(false);
            });

            it('Should return false when value is too small number', () => {
                expect(UtilityEngine.isPositiveNumber(-1, 100)).to.equal(false);
            });

            it('Should return false when value is a negative decimal', () => {
                expect(UtilityEngine.isPositiveNumber(-1.1)).to.equal(false);
            });

            it('Should return false when value is too small decimal', () => {
                expect(UtilityEngine.isPositiveNumber(-0.01, 1)).to.equal(false);
            });

            it('Should return false when value is negative infinity', () => {
                expect(UtilityEngine.isPositiveNumber(Number.NEGATIVE_INFINITY)).to.equal(false);
            });
        });

        describe('#isPositiveNumber(value, MAXIMUM)', function() {
            it('Should return false when maximum parameter is null', () => {
                expect(UtilityEngine.isPositiveNumber(1, null)).to.equal(false);
            });

            it('Should return false when maximum parameter is a string', () => {
                expect(UtilityEngine.isPositiveNumber(1, 'min')).to.equal(false);
            });

            it('Should return false when maximum parameter is an array', () => {
                expect(UtilityEngine.isPositiveNumber(1, [])).to.equal(false);
            });

            it('Should return false when maximum parameter is an object', () => {
                expect(UtilityEngine.isPositiveNumber(1, {})).to.equal(false);
            });

            it('Should return false when maximum parameter is a function', () => {
                expect(UtilityEngine.isPositiveNumber(1, function() {})).to.equal(false);
            });
        });
    });

    // ╔═══════╗╔═══════╗         ╔════╗╔═╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═╗   ╔═╗╔═══════╗         ╔════╗╔═╗╔═╗   ╔═╗╔═══════╗╔══════╗ ╔═══════╗╔═══════╗
    // ╚══╗ ╔══╝║ ╔═════╝         ║ ╔╗ ║║ ║║ ╔═════╝║ ╔═════╝║ ╔═══╗ ║╚══╗ ╔══╝╚══╗ ╔══╝║ ║   ║ ║║ ╔═════╝         ║ ╔╗ ║║ ║║ ║   ║ ║║ ╔╗ ╔╗ ║║ ╔══╗ ║ ║ ╔═════╝║ ╔═══╗ ║
    //    ║ ║   ║ ╚═════╗╔═══════╗║ ║║ ║║ ║║ ╚═════╗║ ║ ╔═══╗║ ╚═══╝ ║   ║ ║      ║ ║   ║ ╚╗ ╔╝ ║║ ╚═════╗╔═══════╗║ ║║ ║║ ║║ ║   ║ ║║ ║║ ║║ ║║ ╚══╝ ╚╗║ ╚═════╗║ ╚═══╝ ║
    //    ║ ║   ╚═════╗ ║╚═══════╝║ ║║ ║║ ║║ ╔═════╝║ ║ ╚═╗ ║║ ╔═══╗ ║   ║ ║      ║ ║   ╚╗ ║ ║ ╔╝║ ╔═════╝╚═══════╝║ ║║ ║║ ║║ ║   ║ ║║ ║║ ║║ ║║ ╔═══╗ ║║ ╔═════╝║ ╔═╗ ╔═╝
    // ╔══╝ ╚══╗╔═════╝ ║         ║ ║║ ╚╝ ║║ ╚═════╗║ ╚═══╝ ║║ ║   ║ ║   ║ ║   ╔══╝ ╚══╗ ║ ╚═╝ ║ ║ ╚═════╗         ║ ║║ ╚╝ ║║ ╚═══╝ ║║ ║║ ║║ ║║ ╚═══╝ ║║ ╚═════╗║ ║ ║ ╚═╗
    // ╚═══════╝╚═══════╝         ╚═╝╚════╝╚═══════╝╚═══════╝╚═╝   ╚═╝   ╚═╝   ╚═══════╝ ╚═════╝ ╚═══════╝         ╚═╝╚════╝╚═══════╝╚═╝╚═╝╚═╝╚═══════╝╚═══════╝╚═╝ ╚═══╝

    describe('#isNegativeNumber(value, minimum)', function() {
        describe('#isNegativeNumber(VALUE, minimum)', function() {
            it('Should return true when value is a neutral zero', () => {
                expect(UtilityEngine.isNegativeNumber(0)).to.equal(true);
            });

            it('Should return true when value is a positive zero', () => {
                expect(UtilityEngine.isNegativeNumber(+0)).to.equal(true);
            });

            it('Should return true when value is a negative zero', () => {
                expect(UtilityEngine.isNegativeNumber(-0)).to.equal(true);
            });

            it('Should return true when value is a negative number', () => {
                expect(UtilityEngine.isNegativeNumber(-1)).to.equal(true);
            });

            it('Should return true when value is a negative decimal', () => {
                expect(UtilityEngine.isNegativeNumber(-1.1)).to.equal(true);
            });

            it('Should return true when value is minimum number', () => {
                expect(UtilityEngine.isNegativeNumber(-100, -100)).to.equal(true);
            });

            it('Should return true when value is maximum number', () => {
                expect(UtilityEngine.isNegativeNumber(0, -100)).to.equal(true);
            });

            it('Should return true when value is a big enough number', () => {
                expect(UtilityEngine.isNegativeNumber(0, -100)).to.equal(true);
            });

            it('Should return true when value is a big enough decimal', () => {
                expect(UtilityEngine.isNegativeNumber(-0.01, -100)).to.equal(true);
            });

            it('Should return true when value is a small enough number', () => {
                expect(UtilityEngine.isNegativeNumber(-99, -100)).to.equal(true);
            });

            it('Should return true when value is a small enough decimal', () => {
                expect(UtilityEngine.isNegativeNumber(-99.9, -100)).to.equal(true);
            });

            it('Should return true when value is a primitive number', () => {
                expect(UtilityEngine.isNegativeNumber(Number('-1'))).to.equal(true);
            });

            it('Should return true when value is a primitive decimal', () => {
                expect(UtilityEngine.isNegativeNumber(Number('-1.1'))).to.equal(true);
            });

            it('Should return true when value is negative infinity', () => {
                expect(UtilityEngine.isNegativeNumber(Number.NEGATIVE_INFINITY)).to.equal(true);
            });


            it('Should return false when value is null', () => {
                expect(UtilityEngine.isNegativeNumber(null)).to.equal(false);
            });

            it('Should return false when value is undefined', () => {
                expect(UtilityEngine.isNegativeNumber(undefined)).to.equal(false);
            });

            it('Should return false when value is an array', () => {
                expect(UtilityEngine.isNegativeNumber([])).to.equal(false);
            });

            it('Should return false when value is an object', () => {
                expect(UtilityEngine.isNegativeNumber({})).to.equal(false);
            });

            it('Should return false when value is a function', () => {
                expect(UtilityEngine.isNegativeNumber(function() {})).to.equal(false);
            });

            it('Should return false when value is a true boolean', () => {
                expect(UtilityEngine.isNegativeNumber(true)).to.equal(false);
            });

            it('Should return false when value is a false boolean', () => {
                expect(UtilityEngine.isNegativeNumber(false)).to.equal(false);
            });

            it('Should return false when value is a string number', () => {
                expect(UtilityEngine.isNegativeNumber('1')).to.equal(false);
            });

            it('Should return false when value is a positive number', () => {
                expect(UtilityEngine.isNegativeNumber(1)).to.equal(false);
            });

            it('Should return false when value is too big number', () => {
                expect(UtilityEngine.isNegativeNumber(101, 100)).to.equal(false);
            });

            it('Should return false when value is too big decimal', () => {
                expect(UtilityEngine.isNegativeNumber(100.01, 100)).to.equal(false);
            });

            it('Should return false when value is too small number', () => {
                expect(UtilityEngine.isNegativeNumber(-1, 100)).to.equal(false);
            });

            it('Should return false when value is a positive decimal', () => {
                expect(UtilityEngine.isNegativeNumber(1.1)).to.equal(false);
            });

            it('Should return false when value is too small decimal', () => {
                expect(UtilityEngine.isNegativeNumber(-0.01, 1)).to.equal(false);
            });

            it('Should return false when value is positive infinity', () => {
                expect(UtilityEngine.isNegativeNumber(Number.POSITIVE_INFINITY)).to.equal(false);
            });
        });

        describe('#isNegativeNumber(value, MINIMUM)', function() {
            it('Should return false when minimum parameter is null', () => {
                expect(UtilityEngine.isNegativeNumber(1, null)).to.equal(false);
            });

            it('Should return false when minimum parameter is a string', () => {
                expect(UtilityEngine.isNegativeNumber(1, 'min')).to.equal(false);
            });

            it('Should return false when minimum parameter is an array', () => {
                expect(UtilityEngine.isNegativeNumber(1, [])).to.equal(false);
            });

            it('Should return false when minimum parameter is an object', () => {
                expect(UtilityEngine.isNegativeNumber(1, {})).to.equal(false);
            });

            it('Should return false when minimum parameter is a function', () => {
                expect(UtilityEngine.isNegativeNumber(1, function() {})).to.equal(false);
            });
        });
    });
});
