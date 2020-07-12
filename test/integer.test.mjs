// ╔═══════╗╔════╗╔═╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗   ╔═══════╗╔═══════╗╔═══════╗╔═══════╗   ╔═══════╗╔═══════╗╔═══════╗
// ╚══╗ ╔══╝║ ╔╗ ║║ ║╚══╗ ╔══╝║ ╔═════╝║ ╔═════╝║ ╔═════╝║ ╔═══╗ ║   ╚══╗ ╔══╝║ ╔═════╝║ ╔═════╝╚══╗ ╔══╝   ║ ╔╗ ╔╗ ║╚═══╗ ╔═╝║ ╔═════╝
//    ║ ║   ║ ║║ ║║ ║   ║ ║   ║ ╚═════╗║ ║ ╔═══╗║ ╚═════╗║ ╚═══╝ ║      ║ ║   ║ ╚═════╗║ ╚═════╗   ║ ║      ║ ║║ ║║ ║    ║ ║  ║ ╚═════╗
//    ║ ║   ║ ║║ ║║ ║   ║ ║   ║ ╔═════╝║ ║ ╚═╗ ║║ ╔═════╝║ ╔═╗ ╔═╝      ║ ║   ║ ╔═════╝╚═════╗ ║   ║ ║      ║ ║║ ║║ ║    ║ ║  ╚═════╗ ║
// ╔══╝ ╚══╗║ ║║ ╚╝ ║   ║ ║   ║ ╚═════╗║ ╚═══╝ ║║ ╚═════╗║ ║ ║ ╚═╗╔═╗   ║ ║   ║ ╚═════╗╔═════╝ ║   ║ ║   ╔═╗║ ║║ ║║ ║╔═══╝ ║  ╔═════╝ ║
// ╚═══════╝╚═╝╚════╝   ╚═╝   ╚═══════╝╚═══════╝╚═══════╝╚═╝ ╚═══╝╚═╝   ╚═╝   ╚═══════╝╚═══════╝   ╚═╝   ╚═╝╚═╝╚═╝╚═╝╚═════╝  ╚═══════╝

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

// ╔═══════╗╔════╗╔═╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗
// ╚══╗ ╔══╝║ ╔╗ ║║ ║╚══╗ ╔══╝║ ╔═════╝║ ╔═════╝║ ╔═════╝║ ╔═══╗ ║
//    ║ ║   ║ ║║ ║║ ║   ║ ║   ║ ╚═════╗║ ║ ╔═══╗║ ╚═════╗║ ╚═══╝ ║
//    ║ ║   ║ ║║ ║║ ║   ║ ║   ║ ╔═════╝║ ║ ╚═╗ ║║ ╔═════╝║ ╔═╗ ╔═╝
// ╔══╝ ╚══╗║ ║║ ╚╝ ║   ║ ║   ║ ╚═════╗║ ╚═══╝ ║║ ╚═════╗║ ║ ║ ╚═╗
// ╚═══════╝╚═╝╚════╝   ╚═╝   ╚═══════╝╚═══════╝╚═══════╝╚═╝ ╚═══╝

describe('Integer', function() {
// ╔═══════╗╔═══════╗         ╔═══════╗╔════╗╔═╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗
// ╚══╗ ╔══╝║ ╔═════╝         ╚══╗ ╔══╝║ ╔╗ ║║ ║╚══╗ ╔══╝║ ╔═════╝║ ╔═════╝║ ╔═════╝║ ╔═══╗ ║
//    ║ ║   ║ ╚═════╗╔═══════╗   ║ ║   ║ ║║ ║║ ║   ║ ║   ║ ╚═════╗║ ║ ╔═══╗║ ╚═════╗║ ╚═══╝ ║
//    ║ ║   ╚═════╗ ║╚═══════╝   ║ ║   ║ ║║ ║║ ║   ║ ║   ║ ╔═════╝║ ║ ╚═╗ ║║ ╔═════╝║ ╔═╗ ╔═╝
// ╔══╝ ╚══╗╔═════╝ ║         ╔══╝ ╚══╗║ ║║ ╚╝ ║   ║ ║   ║ ╚═════╗║ ╚═══╝ ║║ ╚═════╗║ ║ ║ ╚═╗
// ╚═══════╝╚═══════╝         ╚═══════╝╚═╝╚════╝   ╚═╝   ╚═══════╝╚═══════╝╚═══════╝╚═╝ ╚═══╝

    describe('#isInteger(value, minimum, maximum)', function() {
        describe('#isInteger(VALUE, minimum, maximum)', function() {
            it('Should return true when value is a neutral zero', () => {
                expect(UtilityEngine.isInteger(0)).to.equal(true);
            });

            it('Should return true when value is a positive zero', () => {
                expect(UtilityEngine.isInteger(+0)).to.equal(true);
            });

            it('Should return true when value is a negative zero', () => {
                expect(UtilityEngine.isInteger(-0)).to.equal(true);
            });

            it('Should return true when value is a positive number', () => {
                expect(UtilityEngine.isInteger(+1)).to.equal(true);
            });

            it('Should return true when value is a negative number', () => {
                expect(UtilityEngine.isInteger(-1)).to.equal(true);
            });

            it('Should return true when value is minimum number', () => {
                expect(UtilityEngine.isInteger(0, 0, 100)).to.equal(true);
            });

            it('Should return true when value is maximum number', () => {
                expect(UtilityEngine.isInteger(100, 0, 100)).to.equal(true);
            });

            it('Should return true when value is a big enough number', () => {
                expect(UtilityEngine.isInteger(99, 0, 100)).to.equal(true);
            });

            it('Should return true when value is a small enough number', () => {
                expect(UtilityEngine.isInteger(1, 0, 100)).to.equal(true);
            });

            it('Should return true when value is a primitive number', () => {
                expect(UtilityEngine.isInteger(Number('1'))).to.equal(true);
            });


            it('Should return false when value is null', () => {
                expect(UtilityEngine.isInteger(null)).to.equal(false);
            });

            it('Should return false when value is undefined', () => {
                expect(UtilityEngine.isInteger(undefined)).to.equal(false);
            });

            it('Should return false when value is an array', () => {
                expect(UtilityEngine.isInteger([])).to.equal(false);
            });

            it('Should return false when value is an object', () => {
                expect(UtilityEngine.isInteger({})).to.equal(false);
            });

            it('Should return false when value is a function', () => {
                expect(UtilityEngine.isInteger(function() {})).to.equal(false);
            });

            it('Should return false when value is a true boolean', () => {
                expect(UtilityEngine.isInteger(true)).to.equal(false);
            });

            it('Should return false when value is a false boolean', () => {
                expect(UtilityEngine.isInteger(false)).to.equal(false);
            });

            it('Should return false when value is a string number', () => {
                expect(UtilityEngine.isInteger('1')).to.equal(false);
            });

            it('Should return false when value is a positive decimal', () => {
                expect(UtilityEngine.isInteger(+1.1)).to.equal(false);
            });

            it('Should return false when value is a negative decimal', () => {
                expect(UtilityEngine.isInteger(-1.1)).to.equal(false);
            });

            it('Should return false when value is too big number', () => {
                expect(UtilityEngine.isInteger(101, 0, 100)).to.equal(false);
            });

            it('Should return false when value is a big enough decimal', () => {
                expect(UtilityEngine.isInteger(99.9, 0, 100)).to.equal(false);
            });

            it('Should return false when value is too big decimal', () => {
                expect(UtilityEngine.isInteger(100.01, 0, 100)).to.equal(false);
            });

            it('Should return false when value is too small number', () => {
                expect(UtilityEngine.isInteger(-1, 0, 100)).to.equal(false);
            });

            it('Should return false when value is a small enough decimal', () => {
                expect(UtilityEngine.isInteger(0.01, 0, 100)).to.equal(false);
            });

            it('Should return false when value is too small decimal', () => {
                expect(UtilityEngine.isInteger(-0.01, 0, 1)).to.equal(false);
            });

            it('Should return false when value is a primitive decimal', () => {
                expect(UtilityEngine.isInteger(Number('1.1'))).to.equal(false);
            });

            it('Should return false when value is positive infinity', () => {
                expect(UtilityEngine.isInteger(Number.POSITIVE_INFINITY)).to.equal(false);
            });

            it('Should return false when value is negative infinity', () => {
                expect(UtilityEngine.isInteger(Number.NEGATIVE_INFINITY)).to.equal(false);
            });
        });

        describe('#isInteger(value, MINIMUM, maximum)', function() {
            it('Should return true when minimum parameter is undefined', () => {
                expect(UtilityEngine.isInteger(1, undefined)).to.equal(true);
            });

            it('Should return true when minimum parameter is a small enough number', () => {
                expect(UtilityEngine.isInteger(1, 0)).to.equal(true);
            });

            it('Should return true when minimum parameter is a small enough decimal', () => {
                expect(UtilityEngine.isInteger(1, 0.9)).to.equal(true);
            });

            it('Should return true when minimum parameter is a small enough primitive number', () => {
                expect(UtilityEngine.isInteger(1, Number(0))).to.equal(true);
            });

            it('Should return true when minimum parameter is a small enough primitive decimal', () => {
                expect(UtilityEngine.isInteger(1, Number(0.9))).to.equal(true);
            });


            it('Should return false when minimum parameter is null', () => {
                expect(UtilityEngine.isInteger(1, null)).to.equal(false);
            });

            it('Should return false when minimum parameter is a string', () => {
                expect(UtilityEngine.isInteger(1, 'min')).to.equal(false);
            });

            it('Should return false when minimum parameter is an array', () => {
                expect(UtilityEngine.isInteger(1, [])).to.equal(false);
            });

            it('Should return false when minimum parameter is an object', () => {
                expect(UtilityEngine.isInteger(1, {})).to.equal(false);
            });

            it('Should return false when minimum parameter is a function', () => {
                expect(UtilityEngine.isInteger(1, function() {
                })).to.equal(false);
            });

            it('Should return false when minimum parameter is a too big number', () => {
                expect(UtilityEngine.isInteger(1, 2)).to.equal(false);
            });

            it('Should return false when minimum parameter is a too big decimal', () => {
                expect(UtilityEngine.isInteger(1, 1.1)).to.equal(false);
            });
        });

        describe('#isInteger(value, minimum, MAXIMUM)', function() {
            it('Should return true when maximum parameter is undefined', () => {
                expect(UtilityEngine.isInteger(1, undefined, undefined)).to.equal(true);
            });

            it('Should return true when maximum parameter is a big enough number', () => {
                expect(UtilityEngine.isInteger(1, undefined, 1)).to.equal(true);
            });

            it('Should return true when maximum parameter is a big enough decimal', () => {
                expect(UtilityEngine.isInteger(1, undefined, 1.1)).to.equal(true);
            });

            it('Should return true when maximum parameter is a big enough primitive number', () => {
                expect(UtilityEngine.isInteger(1, undefined, Number(1))).to.equal(true);
            });

            it('Should return true when maximum parameter is a big enough primitive decimal', () => {
                expect(UtilityEngine.isInteger(1, undefined, Number(1.1))).to.equal(true);
            });


            it('Should return false when maximum parameter is null', () => {
                expect(UtilityEngine.isInteger(1, undefined, null)).to.equal(false);
            });

            it('Should return false when maximum parameter is a string', () => {
                expect(UtilityEngine.isInteger(1, undefined, 'min')).to.equal(false);
            });

            it('Should return false when maximum parameter is an array', () => {
                expect(UtilityEngine.isInteger(1, undefined, [])).to.equal(false);
            });

            it('Should return false when maximum parameter is an object', () => {
                expect(UtilityEngine.isInteger(1, undefined, {})).to.equal(false);
            });

            it('Should return false when maximum parameter is a function', () => {
                expect(UtilityEngine.isInteger(1, undefined, function() {
                })).to.equal(false);
            });

            it('Should return false when maximum parameter is a too small number', () => {
                expect(UtilityEngine.isInteger(1, undefined, 0)).to.equal(false);
            });

            it('Should return false when maximum parameter is a too small decimal', () => {
                expect(UtilityEngine.isInteger(1, undefined, 0.9)).to.equal(false);
            });
        });
    });

    // ╔═══════╗╔═══════╗         ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═╗   ╔═╗╔═══════╗         ╔═══════╗╔════╗╔═╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗
    // ╚══╗ ╔══╝║ ╔═════╝         ║ ╔═══╗ ║║ ╔═══╗ ║║ ╔═════╝╚══╗ ╔══╝╚══╗ ╔══╝╚══╗ ╔══╝║ ║   ║ ║║ ╔═════╝         ╚══╗ ╔══╝║ ╔╗ ║║ ║╚══╗ ╔══╝║ ╔═════╝║ ╔═════╝║ ╔═════╝║ ╔═══╗ ║
    //    ║ ║   ║ ╚═════╗╔═══════╗║ ╚═══╝ ║║ ║   ║ ║║ ╚═════╗   ║ ║      ║ ║      ║ ║   ║ ╚╗ ╔╝ ║║ ╚═════╗╔═══════╗   ║ ║   ║ ║║ ║║ ║   ║ ║   ║ ╚═════╗║ ║ ╔═══╗║ ╚═════╗║ ╚═══╝ ║
    //    ║ ║   ╚═════╗ ║╚═══════╝║ ╔═════╝║ ║   ║ ║╚═════╗ ║   ║ ║      ║ ║      ║ ║   ╚╗ ║ ║ ╔╝║ ╔═════╝╚═══════╝   ║ ║   ║ ║║ ║║ ║   ║ ║   ║ ╔═════╝║ ║ ╚═╗ ║║ ╔═════╝║ ╔═╗ ╔═╝
    // ╔══╝ ╚══╗╔═════╝ ║         ║ ║      ║ ╚═══╝ ║╔═════╝ ║╔══╝ ╚══╗   ║ ║   ╔══╝ ╚══╗ ║ ╚═╝ ║ ║ ╚═════╗         ╔══╝ ╚══╗║ ║║ ╚╝ ║   ║ ║   ║ ╚═════╗║ ╚═══╝ ║║ ╚═════╗║ ║ ║ ╚═╗
    // ╚═══════╝╚═══════╝         ╚═╝      ╚═══════╝╚═══════╝╚═══════╝   ╚═╝   ╚═══════╝ ╚═════╝ ╚═══════╝         ╚═══════╝╚═╝╚════╝   ╚═╝   ╚═══════╝╚═══════╝╚═══════╝╚═╝ ╚═══╝

    describe('#isPositiveInteger(value, maximum)', function() {
        describe('#isPositiveInteger(VALUE, maximum)', function() {
            it('Should return true when value is a neutral zero', () => {
                expect(UtilityEngine.isPositiveInteger(0)).to.equal(true);
            });

            it('Should return true when value is a positive zero', () => {
                expect(UtilityEngine.isPositiveInteger(+0)).to.equal(true);
            });

            it('Should return true when value is a negative zero', () => {
                expect(UtilityEngine.isPositiveInteger(-0)).to.equal(true);
            });

            it('Should return true when value is a positive number', () => {
                expect(UtilityEngine.isPositiveInteger(+1)).to.equal(true);
            });

            it('Should return true when value is minimum number', () => {
                expect(UtilityEngine.isPositiveInteger(0, 100)).to.equal(true);
            });

            it('Should return true when value is maximum number', () => {
                expect(UtilityEngine.isPositiveInteger(100, 100)).to.equal(true);
            });

            it('Should return true when value is a big enough number', () => {
                expect(UtilityEngine.isPositiveInteger(99, 100)).to.equal(true);
            });

            it('Should return true when value is a small enough number', () => {
                expect(UtilityEngine.isPositiveInteger(1, 100)).to.equal(true);
            });

            it('Should return true when value is a primitive number', () => {
                expect(UtilityEngine.isPositiveInteger(Number('1'))).to.equal(true);
            });


            it('Should return false when value is null', () => {
                expect(UtilityEngine.isPositiveInteger(null)).to.equal(false);
            });

            it('Should return false when value is undefined', () => {
                expect(UtilityEngine.isPositiveInteger(undefined)).to.equal(false);
            });

            it('Should return false when value is an array', () => {
                expect(UtilityEngine.isPositiveInteger([])).to.equal(false);
            });

            it('Should return false when value is an object', () => {
                expect(UtilityEngine.isPositiveInteger({})).to.equal(false);
            });

            it('Should return false when value is a function', () => {
                expect(UtilityEngine.isPositiveInteger(function() {})).to.equal(false);
            });

            it('Should return false when value is a true boolean', () => {
                expect(UtilityEngine.isPositiveInteger(true)).to.equal(false);
            });

            it('Should return false when value is a false boolean', () => {
                expect(UtilityEngine.isPositiveInteger(false)).to.equal(false);
            });

            it('Should return false when value is a string number', () => {
                expect(UtilityEngine.isPositiveInteger('1')).to.equal(false);
            });

            it('Should return false when value is a negative number', () => {
                expect(UtilityEngine.isPositiveInteger(-1)).to.equal(false);
            });

            it('Should return false when value is a positive decimal', () => {
                expect(UtilityEngine.isPositiveInteger(+1.1)).to.equal(false);
            });

            it('Should return false when value is a negative decimal', () => {
                expect(UtilityEngine.isPositiveInteger(-1.1)).to.equal(false);
            });

            it('Should return false when value is too big number', () => {
                expect(UtilityEngine.isPositiveInteger(101, 100)).to.equal(false);
            });

            it('Should return false when value is too small decimal', () => {
                expect(UtilityEngine.isPositiveInteger(-0.01, 0)).to.equal(false);
            });

            it('Should return false when value is a primitive decimal', () => {
                expect(UtilityEngine.isPositiveInteger(Number('1.1'))).to.equal(false);
            });

            it('Should return false when value is positive infinity', () => {
                expect(UtilityEngine.isPositiveInteger(Number.POSITIVE_INFINITY)).to.equal(false);
            });

            it('Should return false when value is negative infinity', () => {
                expect(UtilityEngine.isPositiveInteger(Number.NEGATIVE_INFINITY)).to.equal(false);
            });
        });

        describe('#isPositiveInteger(value, MAXIMUM)', function() {
            it('Should return true when maximum parameter is undefined', () => {
                expect(UtilityEngine.isPositiveInteger(1, undefined)).to.equal(true);
            });

            it('Should return true when maximum parameter is a big enough number', () => {
                expect(UtilityEngine.isPositiveInteger(1, 1)).to.equal(true);
            });

            it('Should return true when maximum parameter is a big enough decimal', () => {
                expect(UtilityEngine.isPositiveInteger(1, 1.1)).to.equal(true);
            });

            it('Should return true when maximum parameter is a big enough primitive number', () => {
                expect(UtilityEngine.isPositiveInteger(1, Number(1))).to.equal(true);
            });

            it('Should return true when maximum parameter is a big enough primitive decimal', () => {
                expect(UtilityEngine.isPositiveInteger(1, Number(1.1))).to.equal(true);
            });


            it('Should return false when maximum parameter is null', () => {
                expect(UtilityEngine.isPositiveInteger(1, null)).to.equal(false);
            });

            it('Should return false when maximum parameter is a string', () => {
                expect(UtilityEngine.isPositiveInteger(1, 'min')).to.equal(false);
            });

            it('Should return false when maximum parameter is an array', () => {
                expect(UtilityEngine.isPositiveInteger(1, [])).to.equal(false);
            });

            it('Should return false when maximum parameter is an object', () => {
                expect(UtilityEngine.isPositiveInteger(1, {})).to.equal(false);
            });

            it('Should return false when maximum parameter is a function', () => {
                expect(UtilityEngine.isPositiveInteger(1, function() {
                })).to.equal(false);
            });

            it('Should return false when maximum parameter is a too small number', () => {
                expect(UtilityEngine.isPositiveInteger(1, 0)).to.equal(false);
            });

            it('Should return false when maximum parameter is a too small decimal', () => {
                expect(UtilityEngine.isPositiveInteger(1, 0.9)).to.equal(false);
            });
        });
    });

    // ╔═══════╗╔═══════╗         ╔════╗╔═╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═╗   ╔═╗╔═══════╗         ╔═══════╗╔════╗╔═╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗
    // ╚══╗ ╔══╝║ ╔═════╝         ║ ╔╗ ║║ ║║ ╔═════╝║ ╔═════╝║ ╔═══╗ ║╚══╗ ╔══╝╚══╗ ╔══╝║ ║   ║ ║║ ╔═════╝         ╚══╗ ╔══╝║ ╔╗ ║║ ║╚══╗ ╔══╝║ ╔═════╝║ ╔═════╝║ ╔═════╝║ ╔═══╗ ║
    //    ║ ║   ║ ╚═════╗╔═══════╗║ ║║ ║║ ║║ ╚═════╗║ ║ ╔═══╗║ ╚═══╝ ║   ║ ║      ║ ║   ║ ╚╗ ╔╝ ║║ ╚═════╗╔═══════╗   ║ ║   ║ ║║ ║║ ║   ║ ║   ║ ╚═════╗║ ║ ╔═══╗║ ╚═════╗║ ╚═══╝ ║
    //    ║ ║   ╚═════╗ ║╚═══════╝║ ║║ ║║ ║║ ╔═════╝║ ║ ╚═╗ ║║ ╔═══╗ ║   ║ ║      ║ ║   ╚╗ ║ ║ ╔╝║ ╔═════╝╚═══════╝   ║ ║   ║ ║║ ║║ ║   ║ ║   ║ ╔═════╝║ ║ ╚═╗ ║║ ╔═════╝║ ╔═╗ ╔═╝
    // ╔══╝ ╚══╗╔═════╝ ║         ║ ║║ ╚╝ ║║ ╚═════╗║ ╚═══╝ ║║ ║   ║ ║   ║ ║   ╔══╝ ╚══╗ ║ ╚═╝ ║ ║ ╚═════╗         ╔══╝ ╚══╗║ ║║ ╚╝ ║   ║ ║   ║ ╚═════╗║ ╚═══╝ ║║ ╚═════╗║ ║ ║ ╚═╗
    // ╚═══════╝╚═══════╝         ╚═╝╚════╝╚═══════╝╚═══════╝╚═╝   ╚═╝   ╚═╝   ╚═══════╝ ╚═════╝ ╚═══════╝         ╚═══════╝╚═╝╚════╝   ╚═╝   ╚═══════╝╚═══════╝╚═══════╝╚═╝ ╚═══╝

    describe('#isNegativeInteger(value, minimum)', function() {
        describe('#isNegativeInteger(VALUE, minimum)', function() {
            it('Should return true when value is a neutral zero', () => {
                expect(UtilityEngine.isNegativeInteger(0)).to.equal(true);
            });

            it('Should return true when value is a positive zero', () => {
                expect(UtilityEngine.isNegativeInteger(+0)).to.equal(true);
            });

            it('Should return true when value is a negative zero', () => {
                expect(UtilityEngine.isNegativeInteger(-0)).to.equal(true);
            });

            it('Should return true when value is a negative number', () => {
                expect(UtilityEngine.isNegativeInteger(-1)).to.equal(true);
            });

            it('Should return true when value is minimum number', () => {
                expect(UtilityEngine.isNegativeInteger(-100, -100)).to.equal(true);
            });

            it('Should return true when value is a big enough number', () => {
                expect(UtilityEngine.isNegativeInteger(-99, -100)).to.equal(true);
            });

            it('Should return true when value is a small enough number', () => {
                expect(UtilityEngine.isNegativeInteger(-1, -100)).to.equal(true);
            });

            it('Should return true when value is a primitive number', () => {
                expect(UtilityEngine.isNegativeInteger(Number('-1'))).to.equal(true);
            });


            it('Should return false when value is null', () => {
                expect(UtilityEngine.isNegativeInteger(null)).to.equal(false);
            });

            it('Should return false when value is undefined', () => {
                expect(UtilityEngine.isNegativeInteger(undefined)).to.equal(false);
            });

            it('Should return false when value is an array', () => {
                expect(UtilityEngine.isNegativeInteger([])).to.equal(false);
            });

            it('Should return false when value is an object', () => {
                expect(UtilityEngine.isNegativeInteger({})).to.equal(false);
            });

            it('Should return false when value is a function', () => {
                expect(UtilityEngine.isNegativeInteger(function() {})).to.equal(false);
            });

            it('Should return false when value is a true boolean', () => {
                expect(UtilityEngine.isNegativeInteger(true)).to.equal(false);
            });

            it('Should return false when value is a false boolean', () => {
                expect(UtilityEngine.isNegativeInteger(false)).to.equal(false);
            });

            it('Should return false when value is a string number', () => {
                expect(UtilityEngine.isNegativeInteger('1')).to.equal(false);
            });

            it('Should return false when value is a positive number', () => {
                expect(UtilityEngine.isNegativeInteger(1)).to.equal(false);
            });

            it('Should return false when value is a positive decimal', () => {
                expect(UtilityEngine.isNegativeInteger(+1.1)).to.equal(false);
            });

            it('Should return false when value is a negative decimal', () => {
                expect(UtilityEngine.isNegativeInteger(-1.1)).to.equal(false);
            });

            it('Should return false when value is too big number', () => {
                expect(UtilityEngine.isNegativeInteger(101, 100)).to.equal(false);
            });

            it('Should return false when value is too small decimal', () => {
                expect(UtilityEngine.isNegativeInteger(-0.01, 0)).to.equal(false);
            });

            it('Should return false when value is a primitive decimal', () => {
                expect(UtilityEngine.isNegativeInteger(Number('1.1'))).to.equal(false);
            });

            it('Should return false when value is positive infinity', () => {
                expect(UtilityEngine.isNegativeInteger(Number.POSITIVE_INFINITY)).to.equal(false);
            });

            it('Should return false when value is negative infinity', () => {
                expect(UtilityEngine.isNegativeInteger(Number.NEGATIVE_INFINITY)).to.equal(false);
            });
        });

        describe('#isNegativeInteger(value, MINIMUM)', function() {
            it('Should return true when minimum parameter is undefined', () => {
                expect(UtilityEngine.isNegativeInteger(-1, undefined)).to.equal(true);
            });

            it('Should return true when minimum parameter is a small enough number', () => {
                expect(UtilityEngine.isNegativeInteger(-1, -2)).to.equal(true);
            });

            it('Should return true when minimum parameter is a small enough decimal', () => {
                expect(UtilityEngine.isNegativeInteger(-1, -2.1)).to.equal(true);
            });

            it('Should return true when minimum parameter is a small enough primitive number', () => {
                expect(UtilityEngine.isNegativeInteger(-1, Number(-2))).to.equal(true);
            });

            it('Should return true when minimum parameter is a small enough primitive decimal', () => {
                expect(UtilityEngine.isNegativeInteger(-1, Number(-2.1))).to.equal(true);
            });


            it('Should return false when minimum parameter is null', () => {
                expect(UtilityEngine.isNegativeInteger(-1, null)).to.equal(false);
            });

            it('Should return false when minimum parameter is a string', () => {
                expect(UtilityEngine.isNegativeInteger(-1, 'min')).to.equal(false);
            });

            it('Should return false when minimum parameter is an array', () => {
                expect(UtilityEngine.isNegativeInteger(-1, [])).to.equal(false);
            });

            it('Should return false when minimum parameter is an object', () => {
                expect(UtilityEngine.isNegativeInteger(-1, {})).to.equal(false);
            });

            it('Should return false when minimum parameter is a function', () => {
                expect(UtilityEngine.isNegativeInteger(-1, function() {
                })).to.equal(false);
            });

            it('Should return false when minimum parameter is a too big number', () => {
                expect(UtilityEngine.isNegativeInteger(-1, 2)).to.equal(false);
            });

            it('Should return false when minimum parameter is a too big decimal', () => {
                expect(UtilityEngine.isNegativeInteger(-1, 1.1)).to.equal(false);
            });
        });
    });
});
