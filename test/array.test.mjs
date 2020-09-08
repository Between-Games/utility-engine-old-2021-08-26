// ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═╗   ╔═╗   ╔═══════╗╔═══════╗╔═══════╗╔═══════╗   ╔═══════╗╔═══════╗╔═══════╗
// ║ ╔═══╗ ║║ ╔═══╗ ║║ ╔═══╗ ║║ ╔═══╗ ║║ ║   ║ ║   ╚══╗ ╔══╝║ ╔═════╝║ ╔═════╝╚══╗ ╔══╝   ║ ╔╗ ╔╗ ║╚═══╗ ╔═╝║ ╔═════╝
// ║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═══╝ ║      ║ ║   ║ ╚═════╗║ ╚═════╗   ║ ║      ║ ║║ ║║ ║    ║ ║  ║ ╚═════╗
// ║ ╔═══╗ ║║ ╔═╗ ╔═╝║ ╔═╗ ╔═╝║ ╔═══╗ ║╚═════╗ ║      ║ ║   ║ ╔═════╝╚═════╗ ║   ║ ║      ║ ║║ ║║ ║    ║ ║  ╚═════╗ ║
// ║ ║   ║ ║║ ║ ║ ╚═╗║ ║ ║ ╚═╗║ ║   ║ ║╔═════╝ ║╔═╗   ║ ║   ║ ╚═════╗╔═════╝ ║   ║ ║   ╔═╗║ ║║ ║║ ║╔═══╝ ║  ╔═════╝ ║
// ╚═╝   ╚═╝╚═╝ ╚═══╝╚═╝ ╚═══╝╚═╝   ╚═╝╚═══════╝╚═╝   ╚═╝   ╚═══════╝╚═══════╝   ╚═╝   ╚═╝╚═╝╚═╝╚═╝╚═════╝  ╚═══════╝

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

// ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═╗   ╔═╗
// ║ ╔═══╗ ║║ ╔═══╗ ║║ ╔═══╗ ║║ ╔═══╗ ║║ ║   ║ ║
// ║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═══╝ ║
// ║ ╔═══╗ ║║ ╔═╗ ╔═╝║ ╔═╗ ╔═╝║ ╔═══╗ ║╚═════╗ ║
// ║ ║   ║ ║║ ║ ║ ╚═╗║ ║ ║ ╚═╗║ ║   ║ ║╔═════╝ ║
// ╚═╝   ╚═╝╚═╝ ╚═══╝╚═╝ ╚═══╝╚═╝   ╚═╝╚═══════╝

describe('Array', function() {
    // ╔═══════╗╔═══════╗         ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═╗   ╔═╗
    // ╚══╗ ╔══╝║ ╔═══╗ ║         ║ ╔═══╗ ║║ ╔═══╗ ║║ ╔═══╗ ║║ ╔═══╗ ║║ ║   ║ ║
    //    ║ ║   ║ ║   ║ ║╔═══════╗║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═══╝ ║
    //    ║ ║   ║ ║   ║ ║╚═══════╝║ ╔═══╗ ║║ ╔═╗ ╔═╝║ ╔═╗ ╔═╝║ ╔═══╗ ║╚═════╗ ║
    //    ║ ║   ║ ╚═══╝ ║         ║ ║   ║ ║║ ║ ║ ╚═╗║ ║ ║ ╚═╗║ ║   ║ ║╔═════╝ ║
    //    ╚═╝   ╚═══════╝         ╚═╝   ╚═╝╚═╝ ╚═══╝╚═╝ ╚═══╝╚═╝   ╚═╝╚═══════╝

    describe('#toArray(value)', function() {
        describe('#toArray(VALUE)', function() {
            it('Should return an empty array when value parameter is empty', () => {
                expect(UtilityEngine.toArray()).to.deep.equal([]);
            });

            it('Should return an empty array when value parameter is undefined', () => {
                expect(UtilityEngine.toArray(undefined)).to.deep.equal([]);
            });

            it('Should return an empty array when value parameter is an empty', () => {
                expect(UtilityEngine.toArray(undefined)).to.deep.equal([]);
            });

            it('Should return a filled array when value parameter is a filled array', () => {
                expect(UtilityEngine.toArray([1, 2, 3])).to.deep.equal([1, 2, 3]);
            });

            it('Should return a filled array when value is NaN', () => {
                expect(UtilityEngine.toArray(NaN)).to.deep.equal([NaN]);
            });

            it('Should return a filled array when value is an empty string', () => {
                expect(UtilityEngine.toArray('')).to.deep.equal(['']);
            });

            it('Should return a filled array when value is true boolean', () => {
                expect(UtilityEngine.toArray(true)).to.deep.equal([true]);
            });

            it('Should return a filled array when value is false boolean', () => {
                expect(UtilityEngine.toArray(false)).to.deep.equal([false]);
            });

            it('Should return a filled array when value is an empty object', () => {
                expect(UtilityEngine.toArray({})).to.deep.equal([{}]);
            });

            it('Should return a filled array when value is a filled object', () => {
                expect(UtilityEngine.toArray({foo: 'bar'})).to.deep.equal([{foo: 'bar'}]);
            });

            it('Should return a filled array when value is a number', () => {
                expect(UtilityEngine.toArray(1)).to.deep.equal([1]);
            });

            it('Should return a filled array when value is a zero', () => {
                expect(UtilityEngine.toArray(0)).to.deep.equal([0]);
            });

            it('Should return a filled array when value is a primitive number', () => {
                expect(UtilityEngine.toArray(Number('1'))).to.deep.equal([Number('1')]);
            });

            it('Should return a filled array when value is a wrapped primitive number', () => {
                expect(UtilityEngine.toArray(new Number('1'))).to.deep.equal([new Number('1')]);
            });

            it('Should return a filled array when value is a filled string', () => {
                expect(UtilityEngine.toArray('string')).to.deep.equal(['string']);
            });

            it('Should return a filled array when value is a primitive string', () => {
                expect(UtilityEngine.toArray(String('string'))).to.deep.equal([String('string')]);
            });

            it('Should return a filled array when value is a wrapped primitive string', () => {
                expect(UtilityEngine.toArray(new String('string'))).to.deep.equal([new String('string')]);
            });

            it('Should return a filled array when value is a map', () => {
                expect(UtilityEngine.toArray(new Map())).to.deep.equal([new Map()]);
            });

            it('Should return a filled array when value is a date', () => {
                expect(UtilityEngine.toArray(new Date())).to.deep.equal([new Date()]);
            });

            it('Should return a filled array when value is a class instance', () => {
                expect(UtilityEngine.toArray(new (class Class {}))).to.deep.equal([new (class Class {})]);
            });

            it('Should return a filled array when value is a class instance', () => {
                expect(UtilityEngine.toArray(new (class Class {})())).to.deep.equal([new (class Class {})()]);
            });
        });
    });

    // ╔═══════╗╔═══════╗         ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═╗   ╔═╗
    // ╚══╗ ╔══╝║ ╔═════╝         ║ ╔═══╗ ║║ ╔═══╗ ║║ ╔═══╗ ║║ ╔═══╗ ║║ ║   ║ ║
    //    ║ ║   ║ ╚═════╗╔═══════╗║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═══╝ ║
    //    ║ ║   ╚═════╗ ║╚═══════╝║ ╔═══╗ ║║ ╔═╗ ╔═╝║ ╔═╗ ╔═╝║ ╔═══╗ ║╚═════╗ ║
    // ╔══╝ ╚══╗╔═════╝ ║         ║ ║   ║ ║║ ║ ║ ╚═╗║ ║ ║ ╚═╗║ ║   ║ ║╔═════╝ ║
    // ╚═══════╝╚═══════╝         ╚═╝   ╚═╝╚═╝ ╚═══╝╚═╝ ╚═══╝╚═╝   ╚═╝╚═══════╝

    describe('#isArray(value, minimumLength, maximumLength)', function() {
        describe('#isArray(VALUE, minimumLength, maximumLength)', function() {
            it('Should return true when value is a filled array', () => {
                expect(UtilityEngine.isArray([1, 2, 3])).to.equal(true);
            });

            it('Should return true when value is an empty array', () => {
                expect(UtilityEngine.isArray([])).to.equal(true);
            });

            it('Should return true when value is minimum length array', () => {
                expect(UtilityEngine.isArray([], 0)).to.equal(true);
            });

            it('Should return true when value is maximum length array', () => {
                expect(UtilityEngine.isArray([1, 2, 3], 0, 3)).to.equal(true);
            });

            it('Should return true when value is short enough length array', () => {
                expect(UtilityEngine.isArray([1], 0, 3)).to.equal(true);
            });

            it('Should return true when value is long enough length array', () => {
                expect(UtilityEngine.isArray([1, 2], 0, 3)).to.equal(true);
            });


            it('Should return false when value is too short array', () => {
                expect(UtilityEngine.isArray([1], 2, 3)).to.equal(false);
            });

            it('Should return false when value is too big array', () => {
                expect(UtilityEngine.isArray([1, 2, 3], 0, 2)).to.equal(false);
            });

            it('Should return false when value is true', () => {
                expect(UtilityEngine.isArray(true)).to.equal(false);
            });

            it('Should return false when value is false', () => {
                expect(UtilityEngine.isArray(false)).to.equal(false);
            });

            it('Should return false when value is null', () => {
                expect(UtilityEngine.isArray(null)).to.equal(false);
            });

            it('Should return false when value is undefined', () => {
                expect(UtilityEngine.isArray(undefined)).to.equal(false);
            });

            it('Should return false when value is an object', () => {
                expect(UtilityEngine.isArray({})).to.equal(false);
            });

            it('Should return false when value is an empty string', () => {
                expect(UtilityEngine.isArray('')).to.equal(false);
            });

            it('Should return false when value is a filled string', () => {
                expect(UtilityEngine.isArray('string')).to.equal(false);
            });

            it('Should return false when value is a number', () => {
                expect(UtilityEngine.isArray(0)).to.equal(false);
            });

            it('Should return false when value is a function', () => {
                expect(UtilityEngine.isArray(function() {})).to.equal(false);
            });
        });

        describe('#isArray(value, MINIMUMLENGTH, maximumLength)', function() {
            it('Should return true when minimum length parameter is undefined', () => {
                expect(UtilityEngine.isArray([1, 2, 3], undefined)).to.equal(true);
            });

            it('Should return true when minimum length parameter is small enough', () => {
                expect(UtilityEngine.isArray([1, 2, 3], 1)).to.equal(true);
            });

            it('Should return true when minimum length parameter is big enough', () => {
                expect(UtilityEngine.isArray([1, 2, 3], 2)).to.equal(true);
            });

            it('Should return true when minimum length parameter is at minimum', () => {
                expect(UtilityEngine.isArray([1, 2, 3], 0)).to.equal(true);
            });

            it('Should return true when minimum length parameter is at maximum', () => {
                expect(UtilityEngine.isArray([1, 2, 3], 3)).to.equal(true);
            });


            it('Should return false when minimum length parameter is bigger than maximum length', () => {
                expect(UtilityEngine.isArray([1, 2, 3], 4, 3)).to.equal(false);
            });

            it('Should return false when minimum length parameter is null', () => {
                expect(UtilityEngine.isArray([1, 2, 3], null)).to.equal(false);
            });

            it('Should return false when minimum length parameter is true', () => {
                expect(UtilityEngine.isArray([1, 2, 3], true)).to.equal(false);
            });

            it('Should return false when minimum length parameter is false', () => {
                expect(UtilityEngine.isArray([1, 2, 3], false)).to.equal(false);
            });

            it('Should return false when minimum length parameter is null', () => {
                expect(UtilityEngine.isArray([1, 2, 3], null)).to.equal(false);
            });
            it('Should return false when minimum length parameter is an object', () => {
                expect(UtilityEngine.isArray([1, 2, 3], {})).to.equal(false);
            });

            it('Should return false when minimum length parameter is a string', () => {
                expect(UtilityEngine.isArray([1, 2, 3], 'string')).to.equal(false);
            });

            it('Should return false when minimum length parameter is an array', () => {
                expect(UtilityEngine.isArray([1, 2, 3], [])).to.equal(false);
            });

            it('Should return false when minimum length parameter is a function', () => {
                expect(UtilityEngine.isArray([1, 2, 3], function() {})).to.equal(false);
            });

            it('Should return false when minimum length parameter negative number', () => {
                expect(UtilityEngine.isArray([1, 2, 3], -1)).to.equal(false);
            });

            it('Should return false when minimum length parameter is too big', () => {
                expect(UtilityEngine.isArray([1, 2, 3], 4)).to.equal(false);
            });
        });

        describe('#isArray(value, minimumLength, MAXIMUMLENGTH)', function() {
            it('Should return true when maximum length parameter is undefined', () => {
                expect(UtilityEngine.isArray([1, 2, 3], undefined)).to.equal(true);
            });

            it('Should return true when maximum length parameter is big enough', () => {
                expect(UtilityEngine.isArray([1, 2, 3], undefined, 4)).to.equal(true);
            });

            it('Should return false when maximum length parameter is smaller than minimum length', () => {
                expect(UtilityEngine.isArray([1, 2, 3], 2, 1)).to.equal(false);
            });

            it('Should return false when maximum length parameter is null', () => {
                expect(UtilityEngine.isArray([1, 2, 3], undefined, null)).to.equal(false);
            });

            it('Should return false when maximum length parameter is true', () => {
                expect(UtilityEngine.isArray([1, 2, 3], undefined, true)).to.equal(false);
            });

            it('Should return false when maximum length parameter is false', () => {
                expect(UtilityEngine.isArray([1, 2, 3], undefined, false)).to.equal(false);
            });

            it('Should return false when maximum length parameter is null', () => {
                expect(UtilityEngine.isArray([1, 2, 3], undefined, null)).to.equal(false);
            });
            it('Should return false when maximum length parameter is an object', () => {
                expect(UtilityEngine.isArray([1, 2, 3], undefined, {})).to.equal(false);
            });

            it('Should return false when maximum length parameter is a string', () => {
                expect(UtilityEngine.isArray([1, 2, 3], undefined, 'string')).to.equal(false);
            });

            it('Should return false when maximum length parameter is an array', () => {
                expect(UtilityEngine.isArray([1, 2, 3], undefined, [])).to.equal(false);
            });

            it('Should return false when maximum length parameter is a function', () => {
                expect(UtilityEngine.isArray([1, 2, 3], undefined, function() {})).to.equal(false);
            });

            it('Should return false when maximum length parameter negative number', () => {
                expect(UtilityEngine.isArray([1, 2, 3], undefined, -1)).to.equal(false);
            });

            it('Should return false when maximum length parameter is too small', () => {
                expect(UtilityEngine.isArray([1, 2, 3], undefined, 2)).to.equal(false);
            });
        });
    });

    // ╔═══════╗╔═══════╗         ╔═══════╗╔═══════╗╔═╗      ╔═╗      ╔═══════╗╔═══════╗         ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═╗   ╔═╗
    // ╚══╗ ╔══╝║ ╔═════╝         ║ ╔═════╝╚══╗ ╔══╝║ ║      ║ ║      ║ ╔═════╝╚╗ ╔══╗ ║         ║ ╔═══╗ ║║ ╔═══╗ ║║ ╔═══╗ ║║ ╔═══╗ ║║ ║   ║ ║
    //    ║ ║   ║ ╚═════╗╔═══════╗║ ╚═════╗   ║ ║   ║ ║      ║ ║      ║ ╚═════╗ ║ ║  ║ ║╔═══════╗║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═══╝ ║
    //    ║ ║   ╚═════╗ ║╚═══════╝║ ╔═════╝   ║ ║   ║ ║      ║ ║      ║ ╔═════╝ ║ ║  ║ ║╚═══════╝║ ╔═══╗ ║║ ╔═╗ ╔═╝║ ╔═╗ ╔═╝║ ╔═══╗ ║╚═════╗ ║
    // ╔══╝ ╚══╗╔═════╝ ║         ║ ║      ╔══╝ ╚══╗║ ╚═════╗║ ╚═════╗║ ╚═════╗╔╝ ╚══╝ ║         ║ ║   ║ ║║ ║ ║ ╚═╗║ ║ ║ ╚═╗║ ║   ║ ║╔═════╝ ║
    // ╚═══════╝╚═══════╝         ╚═╝      ╚═══════╝╚═══════╝╚═══════╝╚═══════╝╚═══════╝         ╚═╝   ╚═╝╚═╝ ╚═══╝╚═╝ ╚═══╝╚═╝   ╚═╝╚═══════╝

    describe('#isFilledArray(value, maximumLength)', function() {
        describe('#isFilledArray(VALUE, maximumLength)', function() {
            it('Should return true when value is a filled array', () => {
                expect(UtilityEngine.isFilledArray([1, 2, 3])).to.equal(true);
            });

            it('Should return true when value is maximum length array', () => {
                expect(UtilityEngine.isFilledArray([1, 2, 3], 3)).to.equal(true);
            });

            it('Should return true when value is short enough length array', () => {
                expect(UtilityEngine.isFilledArray([1], 3)).to.equal(true);
            });

            it('Should return true when value is long enough length array', () => {
                expect(UtilityEngine.isFilledArray([1, 2], 3)).to.equal(true);
            });


            it('Should return false when value is an empty array', () => {
                expect(UtilityEngine.isFilledArray([])).to.equal(false);
            });

            it('Should return false when value is too short array', () => {
                expect(UtilityEngine.isFilledArray([])).to.equal(false);
            });

            it('Should return false when value is too big array', () => {
                expect(UtilityEngine.isFilledArray([1, 2, 3], 2)).to.equal(false);
            });

            it('Should return false when value is true', () => {
                expect(UtilityEngine.isFilledArray(true)).to.equal(false);
            });

            it('Should return false when value is false', () => {
                expect(UtilityEngine.isFilledArray(false)).to.equal(false);
            });

            it('Should return false when value is null', () => {
                expect(UtilityEngine.isFilledArray(null)).to.equal(false);
            });

            it('Should return false when value is undefined', () => {
                expect(UtilityEngine.isFilledArray(undefined)).to.equal(false);
            });

            it('Should return false when value is an object', () => {
                expect(UtilityEngine.isFilledArray({})).to.equal(false);
            });

            it('Should return false when value is an empty string', () => {
                expect(UtilityEngine.isFilledArray('')).to.equal(false);
            });

            it('Should return false when value is a filled string', () => {
                expect(UtilityEngine.isFilledArray('string')).to.equal(false);
            });

            it('Should return false when value is a number', () => {
                expect(UtilityEngine.isFilledArray(0)).to.equal(false);
            });

            it('Should return false when value is a function', () => {
                expect(UtilityEngine.isFilledArray(function() {})).to.equal(false);
            });
        });

        describe('#isFilledArray(value, MAXIMUMLENGTH)', function() {
            it('Should return true when maximum length parameter is undefined', () => {
                expect(UtilityEngine.isFilledArray([1, 2, 3], undefined)).to.equal(true);
            });

            it('Should return true when maximum length parameter is big enough', () => {
                expect(UtilityEngine.isFilledArray([1, 2, 3], 4)).to.equal(true);
            });


            it('Should return false when maximum length parameter is smaller than minimum length', () => {
                expect(UtilityEngine.isFilledArray([1, 2, 3], 1)).to.equal(false);
            });

            it('Should return false when maximum length parameter is null', () => {
                expect(UtilityEngine.isFilledArray([1, 2, 3], null)).to.equal(false);
            });

            it('Should return false when maximum length parameter is true', () => {
                expect(UtilityEngine.isFilledArray([1, 2, 3], true)).to.equal(false);
            });

            it('Should return false when maximum length parameter is false', () => {
                expect(UtilityEngine.isFilledArray([1, 2, 3], false)).to.equal(false);
            });

            it('Should return false when maximum length parameter is null', () => {
                expect(UtilityEngine.isFilledArray([1, 2, 3], null)).to.equal(false);
            });
            it('Should return false when maximum length parameter is an object', () => {
                expect(UtilityEngine.isFilledArray([1, 2, 3], {})).to.equal(false);
            });

            it('Should return false when maximum length parameter is a string', () => {
                expect(UtilityEngine.isFilledArray([1, 2, 3], 'string')).to.equal(false);
            });

            it('Should return false when maximum length parameter is an array', () => {
                expect(UtilityEngine.isFilledArray([1, 2, 3], [])).to.equal(false);
            });

            it('Should return false when maximum length parameter is a function', () => {
                expect(UtilityEngine.isFilledArray([1, 2, 3], function() {})).to.equal(false);
            });

            it('Should return false when maximum length parameter negative number', () => {
                expect(UtilityEngine.isFilledArray([1, 2, 3], -1)).to.equal(false);
            });

            it('Should return false when maximum length parameter is too small', () => {
                expect(UtilityEngine.isFilledArray([1, 2, 3], 2)).to.equal(false);
            });
        });
    });

    // ╔═══════╗╔═══════╗         ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═╗   ╔═╗         ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═╗   ╔═╗
    // ╚══╗ ╔══╝║ ╔═════╝         ║ ╔═════╝║ ╔╗ ╔╗ ║║ ╔═══╗ ║╚══╗ ╔══╝║ ║   ║ ║         ║ ╔═══╗ ║║ ╔═══╗ ║║ ╔═══╗ ║║ ╔═══╗ ║║ ║   ║ ║
    //    ║ ║   ║ ╚═════╗╔═══════╗║ ╚═════╗║ ║║ ║║ ║║ ╚═══╝ ║   ║ ║   ║ ╚═══╝ ║╔═══════╗║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═══╝ ║
    //    ║ ║   ╚═════╗ ║╚═══════╝║ ╔═════╝║ ║║ ║║ ║║ ╔═════╝   ║ ║   ╚═════╗ ║╚═══════╝║ ╔═══╗ ║║ ╔═╗ ╔═╝║ ╔═╗ ╔═╝║ ╔═══╗ ║╚═════╗ ║
    // ╔══╝ ╚══╗╔═════╝ ║         ║ ╚═════╗║ ║║ ║║ ║║ ║         ║ ║   ╔═════╝ ║         ║ ║   ║ ║║ ║ ║ ╚═╗║ ║ ║ ╚═╗║ ║   ║ ║╔═════╝ ║
    // ╚═══════╝╚═══════╝         ╚═══════╝╚═╝╚═╝╚═╝╚═╝         ╚═╝   ╚═══════╝         ╚═╝   ╚═╝╚═╝ ╚═══╝╚═╝ ╚═══╝╚═╝   ╚═╝╚═══════╝

    describe('#isEmptyArray(VALUE, maximumLength)', function() {
        it('Should return true when value is an empty array', () => {
            expect(UtilityEngine.isEmptyArray([])).to.equal(true);
        });

        it('Should return true when value is instantiated empty array', () => {
            expect(UtilityEngine.isEmptyArray(new Array())).to.equal(true);
        });

        it('Should return true when value is instantiated empty array', () => {
            expect(UtilityEngine.isEmptyArray(new Array(0))).to.equal(true);
        });


        it('Should return false when value is a filled array', () => {
            expect(UtilityEngine.isEmptyArray([1, 2, 3])).to.equal(false);
        });

        it('Should return false when value is true', () => {
            expect(UtilityEngine.isEmptyArray(true)).to.equal(false);
        });

        it('Should return false when value is false', () => {
            expect(UtilityEngine.isEmptyArray(false)).to.equal(false);
        });

        it('Should return false when value is null', () => {
            expect(UtilityEngine.isEmptyArray(null)).to.equal(false);
        });

        it('Should return false when value is undefined', () => {
            expect(UtilityEngine.isEmptyArray(undefined)).to.equal(false);
        });

        it('Should return false when value is an object', () => {
            expect(UtilityEngine.isEmptyArray({})).to.equal(false);
        });

        it('Should return false when value is an empty string', () => {
            expect(UtilityEngine.isEmptyArray('')).to.equal(false);
        });

        it('Should return false when value is a filled string', () => {
            expect(UtilityEngine.isEmptyArray('string')).to.equal(false);
        });

        it('Should return false when value is a number', () => {
            expect(UtilityEngine.isEmptyArray(0)).to.equal(false);
        });

        it('Should return false when value is a function', () => {
            expect(UtilityEngine.isEmptyArray(function() {})).to.equal(false);
        });
    });
});
