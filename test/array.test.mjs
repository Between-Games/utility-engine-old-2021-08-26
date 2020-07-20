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

import UtilityEngine from '../build/index.js';

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
});
