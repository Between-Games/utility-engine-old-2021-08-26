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

import UtilityEngine from '../dist/index.js';

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

    describe('#isString(value, minimumLength, maximumLength)', function() {
        describe('#isString(VALUE, minimumLength, maximumLength)', function() {
            it('Should return true when value is a filled string', () => {
                expect(UtilityEngine.isString('string')).to.equal(true);
            });

            it('Should return true when value is an empty string', () => {
                expect(UtilityEngine.isString('')).to.equal(true);
            });

            it('Should return true when value is minimum length string', () => {
                expect(UtilityEngine.isString('', 0)).to.equal(true);
            });

            it('Should return true when value is maximum length string', () => {
                expect(UtilityEngine.isString('123', 0, 3)).to.equal(true);
            });

            it('Should return true when value is short enough length string', () => {
                expect(UtilityEngine.isString('1', 0, 3)).to.equal(true);
            });

            it('Should return true when value is long enough length string', () => {
                expect(UtilityEngine.isString('12', 0, 3)).to.equal(true);
            });


            it('Should return false when value is true', () => {
                expect(UtilityEngine.isString(true)).to.equal(false);
            });

            it('Should return false when value is false', () => {
                expect(UtilityEngine.isString(false)).to.equal(false);
            });

            it('Should return false when value is null', () => {
                expect(UtilityEngine.isString(null)).to.equal(false);
            });

            it('Should return false when value is undefined', () => {
                expect(UtilityEngine.isString(undefined)).to.equal(false);
            });

            it('Should return false when value is an object', () => {
                expect(UtilityEngine.isString({})).to.equal(false);
            });

            it('Should return false when value is a number', () => {
                expect(UtilityEngine.isString(0)).to.equal(false);
            });

            it('Should return false when value is an array', () => {
                expect(UtilityEngine.isString([])).to.equal(false);
            });

            it('Should return false when value is a function', () => {
                expect(UtilityEngine.isString(function() {})).to.equal(false);
            });

            it('Should return false when value is too short string', () => {
                expect(UtilityEngine.isString('1', 2, 3)).to.equal(false);
            });

            it('Should return false when value is too big string', () => {
                expect(UtilityEngine.isString('123', 0, 2)).to.equal(false);
            });
        });

        describe('#isString(value, MINIMUMLENGTH, maximumLength)', function() {
            it('Should return true when minimum length parameter is undefined', () => {
                expect(UtilityEngine.isString('123', undefined)).to.equal(true);
            });

            it('Should return true when minimum length parameter is small enough', () => {
                expect(UtilityEngine.isString('123', 1)).to.equal(true);
            });

            it('Should return true when minimum length parameter is big enough', () => {
                expect(UtilityEngine.isString('123', 3)).to.equal(true);
            });


            it('Should return false when minimum length parameter is null', () => {
                expect(UtilityEngine.isString('123', null)).to.equal(false);
            });

            it('Should return false when minimum length parameter is true', () => {
                expect(UtilityEngine.isString('123', true)).to.equal(false);
            });

            it('Should return false when minimum length parameter is false', () => {
                expect(UtilityEngine.isString('123', false)).to.equal(false);
            });

            it('Should return false when minimum length parameter is null', () => {
                expect(UtilityEngine.isString('123', null)).to.equal(false);
            });
            it('Should return false when minimum length parameter is an object', () => {
                expect(UtilityEngine.isString('123', {})).to.equal(false);
            });

            it('Should return false when minimum length parameter is a string', () => {
                expect(UtilityEngine.isString('123', 'string')).to.equal(false);
            });

            it('Should return false when minimum length parameter is an array', () => {
                expect(UtilityEngine.isString('123', [])).to.equal(false);
            });

            it('Should return false when minimum length parameter is a function', () => {
                expect(UtilityEngine.isString('123', function() {})).to.equal(false);
            });

            it('Should return false when minimum length parameter negative number', () => {
                expect(UtilityEngine.isString('123', -1)).to.equal(false);
            });

            it('Should return false when minimum length parameter is too big', () => {
                expect(UtilityEngine.isString('123', 4)).to.equal(false);
            });

            it('Should return false when minimum length parameter is bigger than maximum length', () => {
                expect(UtilityEngine.isString('123', 4, 3)).to.equal(false);
            });
        });

        describe('#isString(value, minimumLength, MAXIMUMLENGTH)', function() {
            it('Should return true when maximum length parameter is undefined', () => {
                expect(UtilityEngine.isString('123', undefined)).to.equal(true);
            });

            it('Should return true when maximum length parameter is big enough', () => {
                expect(UtilityEngine.isString('123', undefined, 4)).to.equal(true);
            });


            it('Should return false when maximum length parameter is null', () => {
                expect(UtilityEngine.isString('123', undefined, null)).to.equal(false);
            });

            it('Should return false when maximum length parameter is true', () => {
                expect(UtilityEngine.isString('123', undefined, true)).to.equal(false);
            });

            it('Should return false when maximum length parameter is false', () => {
                expect(UtilityEngine.isString('123', undefined, false)).to.equal(false);
            });

            it('Should return false when maximum length parameter is null', () => {
                expect(UtilityEngine.isString('123', undefined, null)).to.equal(false);
            });
            it('Should return false when maximum length parameter is an object', () => {
                expect(UtilityEngine.isString('123', undefined, {})).to.equal(false);
            });

            it('Should return false when maximum length parameter is a string', () => {
                expect(UtilityEngine.isString('123', undefined, 'string')).to.equal(false);
            });

            it('Should return false when maximum length parameter is an array', () => {
                expect(UtilityEngine.isString('123', undefined, [])).to.equal(false);
            });

            it('Should return false when maximum length parameter is a function', () => {
                expect(UtilityEngine.isString('123', undefined, function() {})).to.equal(false);
            });

            it('Should return false when maximum length parameter negative number', () => {
                expect(UtilityEngine.isString('123', undefined, -1)).to.equal(false);
            });

            it('Should return false when maximum length parameter is too small', () => {
                expect(UtilityEngine.isString('123', undefined, 2)).to.equal(false);
            });

            it('Should return false when maximum length parameter is smaller than minimum length', () => {
                expect(UtilityEngine.isString('123', 2, 1)).to.equal(false);
            });
        });
    });

    // ╔═══════╗╔═══════╗         ╔═══════╗╔═══════╗╔═╗      ╔═╗      ╔═══════╗╔═══════╗         ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔════╗╔═╗╔═══════╗
    // ╚══╗ ╔══╝║ ╔═════╝         ║ ╔═════╝╚══╗ ╔══╝║ ║      ║ ║      ║ ╔═════╝╚╗ ╔══╗ ║         ║ ╔═════╝╚══╗ ╔══╝║ ╔═══╗ ║╚══╗ ╔══╝║ ╔╗ ║║ ║║ ╔═════╝
    //    ║ ║   ║ ╚═════╗╔═══════╗║ ╚═════╗   ║ ║   ║ ║      ║ ║      ║ ╚═════╗ ║ ║  ║ ║╔═══════╗║ ╚═════╗   ║ ║   ║ ╚═══╝ ║   ║ ║   ║ ║║ ║║ ║║ ║ ╔═══╗
    //    ║ ║   ╚═════╗ ║╚═══════╝║ ╔═════╝   ║ ║   ║ ║      ║ ║      ║ ╔═════╝ ║ ║  ║ ║╚═══════╝╚═════╗ ║   ║ ║   ║ ╔═╗ ╔═╝   ║ ║   ║ ║║ ║║ ║║ ║ ╚═╗ ║
    // ╔══╝ ╚══╗╔═════╝ ║         ║ ║      ╔══╝ ╚══╗║ ╚═════╗║ ╚═════╗║ ╚═════╗╔╝ ╚══╝ ║         ╔═════╝ ║   ║ ║   ║ ║ ║ ╚═╗╔══╝ ╚══╗║ ║║ ╚╝ ║║ ╚═══╝ ║
    // ╚═══════╝╚═══════╝         ╚═╝      ╚═══════╝╚═══════╝╚═══════╝╚═══════╝╚═══════╝         ╚═══════╝   ╚═╝   ╚═╝ ╚═══╝╚═══════╝╚═╝╚════╝╚═══════╝

    describe('#isFilledString(value, maximumLength)', function() {
        describe('#isFilledString(VALUE, maximumLength)', function() {
            it('Should return true when value is a filled string', () => {
                expect(UtilityEngine.isFilledString('string')).to.equal(true);
            });

            it('Should return true when value is minimum length string', () => {
                expect(UtilityEngine.isFilledString('1')).to.equal(true);
            });

            it('Should return true when value is maximum length string', () => {
                expect(UtilityEngine.isFilledString('123', 3)).to.equal(true);
            });

            it('Should return true when value is short enough length string', () => {
                expect(UtilityEngine.isFilledString('1', 3)).to.equal(true);
            });

            it('Should return true when value is long enough length string', () => {
                expect(UtilityEngine.isFilledString('12', 3)).to.equal(true);
            });


            it('Should return false when value is an empty string', () => {
                expect(UtilityEngine.isFilledString('')).to.equal(false);
            });

            it('Should return false when value is a whitespace character', () => {
                expect(UtilityEngine.isFilledString(' ')).to.equal(false);
            });

            it('Should return false when value is true', () => {
                expect(UtilityEngine.isFilledString(true)).to.equal(false);
            });

            it('Should return false when value is false', () => {
                expect(UtilityEngine.isFilledString(false)).to.equal(false);
            });

            it('Should return false when value is null', () => {
                expect(UtilityEngine.isFilledString(null)).to.equal(false);
            });

            it('Should return false when value is undefined', () => {
                expect(UtilityEngine.isFilledString(undefined)).to.equal(false);
            });

            it('Should return false when value is an object', () => {
                expect(UtilityEngine.isFilledString({})).to.equal(false);
            });

            it('Should return false when value is a number', () => {
                expect(UtilityEngine.isFilledString(0)).to.equal(false);
            });

            it('Should return false when value is an array', () => {
                expect(UtilityEngine.isFilledString([])).to.equal(false);
            });

            it('Should return false when value is a function', () => {
                expect(UtilityEngine.isFilledString(function() {
                })).to.equal(false);
            });

            it('Should return false when value is too long string', () => {
                expect(UtilityEngine.isFilledString('123', 2)).to.equal(false);
            });
        });

        describe('#isFilledString(value, MAXIMUMLENGTH)', function() {
            it('Should return true when maximum length parameter is undefined', () => {
                expect(UtilityEngine.isFilledString('123', undefined)).to.equal(true);
            });

            it('Should return true when maximum length parameter is big enough', () => {
                expect(UtilityEngine.isFilledString('123', 4)).to.equal(true);
            });


            it('Should return false when maximum length parameter is null', () => {
                expect(UtilityEngine.isFilledString('123', null)).to.equal(false);
            });

            it('Should return false when maximum length parameter is true', () => {
                expect(UtilityEngine.isFilledString('123', true)).to.equal(false);
            });

            it('Should return false when maximum length parameter is false', () => {
                expect(UtilityEngine.isFilledString('123', false)).to.equal(false);
            });

            it('Should return false when maximum length parameter is null', () => {
                expect(UtilityEngine.isFilledString('123', null)).to.equal(false);
            });
            it('Should return false when maximum length parameter is an object', () => {
                expect(UtilityEngine.isFilledString('123', {})).to.equal(false);
            });

            it('Should return false when maximum length parameter is a string', () => {
                expect(UtilityEngine.isFilledString('123', 'string')).to.equal(false);
            });

            it('Should return false when maximum length parameter is an array', () => {
                expect(UtilityEngine.isFilledString('123', [])).to.equal(false);
            });

            it('Should return false when maximum length parameter is a function', () => {
                expect(UtilityEngine.isFilledString('123', function() {})).to.equal(false);
            });

            it('Should return false when maximum length parameter negative number', () => {
                expect(UtilityEngine.isFilledString('123', -1)).to.equal(false);
            });

            it('Should return false when maximum length parameter is too small', () => {
                expect(UtilityEngine.isFilledString('123', 2)).to.equal(false);
            });
        });
    });

    // ╔═══════╗╔═══════╗         ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═╗   ╔═╗         ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔════╗╔═╗╔═══════╗
    // ╚══╗ ╔══╝║ ╔═════╝         ║ ╔═════╝║ ╔╗ ╔╗ ║║ ╔═══╗ ║╚══╗ ╔══╝║ ║   ║ ║         ║ ╔═════╝╚══╗ ╔══╝║ ╔═══╗ ║╚══╗ ╔══╝║ ╔╗ ║║ ║║ ╔═════╝
    //    ║ ║   ║ ╚═════╗╔═══════╗║ ╚═════╗║ ║║ ║║ ║║ ╚═══╝ ║   ║ ║   ║ ╚═══╝ ║╔═══════╗║ ╚═════╗   ║ ║   ║ ╚═══╝ ║   ║ ║   ║ ║║ ║║ ║║ ║ ╔═══╗
    //    ║ ║   ╚═════╗ ║╚═══════╝║ ╔═════╝║ ║║ ║║ ║║ ╔═════╝   ║ ║   ╚═════╗ ║╚═══════╝╚═════╗ ║   ║ ║   ║ ╔═╗ ╔═╝   ║ ║   ║ ║║ ║║ ║║ ║ ╚═╗ ║
    // ╔══╝ ╚══╗╔═════╝ ║         ║ ╚═════╗║ ║║ ║║ ║║ ║         ║ ║   ╔═════╝ ║         ╔═════╝ ║   ║ ║   ║ ║ ║ ╚═╗╔══╝ ╚══╗║ ║║ ╚╝ ║║ ╚═══╝ ║
    // ╚═══════╝╚═══════╝         ╚═══════╝╚═╝╚═╝╚═╝╚═╝         ╚═╝   ╚═══════╝         ╚═══════╝   ╚═╝   ╚═╝ ╚═══╝╚═══════╝╚═╝╚════╝╚═══════╝

    describe('#isEmptyString(VALUE)', function() {
        it('Should return true when value is an empty string', () => {
            expect(UtilityEngine.isEmptyString('')).to.equal(true);
        });

        it('Should return false when value is a filled string', () => {
            expect(UtilityEngine.isEmptyString('string')).to.equal(false);
        });

        it('Should return false when value is true', () => {
            expect(UtilityEngine.isEmptyString(true)).to.equal(false);
        });

        it('Should return false when value is false', () => {
            expect(UtilityEngine.isEmptyString(false)).to.equal(false);
        });

        it('Should return false when value is null', () => {
            expect(UtilityEngine.isEmptyString(null)).to.equal(false);
        });

        it('Should return false when value is undefined', () => {
            expect(UtilityEngine.isEmptyString(undefined)).to.equal(false);
        });

        it('Should return false when value is an object', () => {
            expect(UtilityEngine.isEmptyString({})).to.equal(false);
        });

        it('Should return false when value is a number', () => {
            expect(UtilityEngine.isEmptyString(0)).to.equal(false);
        });

        it('Should return false when value is an array', () => {
            expect(UtilityEngine.isEmptyString([])).to.equal(false);
        });

        it('Should return false when value is a function', () => {
            expect(UtilityEngine.isEmptyString(function() {})).to.equal(false);
        });
    });

    // ╔═╗   ╔═╗╔═══════╗╔═══════╗         ╔═╗╔═╗╔═╗╔═╗   ╔═╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗
    // ║ ║   ║ ║║ ╔═══╗ ║║ ╔═════╝         ║ ║║ ║║ ║║ ║   ║ ║╚══╗ ╔══╝╚══╗ ╔══╝║ ╔═════╝║ ╔═════╝║ ╔═══╗ ║║ ╔═══╗ ║║ ╔═════╝║ ╔═════╝
    // ║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═════╗╔═══════╗║ ║║ ║║ ║║ ╚═══╝ ║   ║ ║      ║ ║   ║ ╚═════╗║ ╚═════╗║ ╚═══╝ ║║ ╚═══╝ ║║ ║      ║ ╚═════╗
    // ║ ╔═══╗ ║║ ╔═══╗ ║╚═════╗ ║╚═══════╝║ ║║ ║║ ║║ ╔═══╗ ║   ║ ║      ║ ║   ║ ╔═════╝╚═════╗ ║║ ╔═════╝║ ╔═══╗ ║║ ║      ║ ╔═════╝
    // ║ ║   ║ ║║ ║   ║ ║╔═════╝ ║         ║ ╚╝ ╚╝ ║║ ║   ║ ║╔══╝ ╚══╗   ║ ║   ║ ╚═════╗╔═════╝ ║║ ║      ║ ║   ║ ║║ ╚═════╗║ ╚═════╗
    // ╚═╝   ╚═╝╚═╝   ╚═╝╚═══════╝         ╚═══════╝╚═╝   ╚═╝╚═══════╝   ╚═╝   ╚═══════╝╚═══════╝╚═╝      ╚═╝   ╚═╝╚═══════╝╚═══════╝

    describe('#hasWhitespace(value, minimumCount, maximumCount)', function() {
        describe('#hasWhitespace(VALUE, minimumCount, maximumCount)', function() {
            it('Should return true when value has a whitespace character', () => {
                expect(UtilityEngine.hasWhitespace(' ')).to.equal(true);
            });

            it('Should return true when value has a whitespace character', () => {
                expect(UtilityEngine.hasWhitespace(' string')).to.equal(true);
            });

            it('Should return true when value has a whitespace character', () => {
                expect(UtilityEngine.hasWhitespace('string ')).to.equal(true);
            });

            it('Should return true when value has a whitespace character', () => {
                expect(UtilityEngine.hasWhitespace(' string ')).to.equal(true);
            });

            it('Should return true when value has a whitespace character', () => {
                expect(UtilityEngine.hasWhitespace(' str ing ')).to.equal(true);
            });

            it('Should return true when value has a whitespace character', () => {
                expect(UtilityEngine.hasWhitespace(' s t r i ng ')).to.equal(true);
            });


            it('Should return false when value is an empty string', () => {
                expect(UtilityEngine.hasWhitespace('')).to.equal(false);
            });

            it('Should return false when value is a filled string', () => {
                expect(UtilityEngine.hasWhitespace('string')).to.equal(false);
            });

            it('Should return false when value is true', () => {
                expect(UtilityEngine.hasWhitespace(true)).to.equal(false);
            });

            it('Should return false when value is false', () => {
                expect(UtilityEngine.hasWhitespace(false)).to.equal(false);
            });

            it('Should return false when value is null', () => {
                expect(UtilityEngine.hasWhitespace(null)).to.equal(false);
            });

            it('Should return false when value is undefined', () => {
                expect(UtilityEngine.hasWhitespace(undefined)).to.equal(false);
            });

            it('Should return false when value is an object', () => {
                expect(UtilityEngine.hasWhitespace({})).to.equal(false);
            });

            it('Should return false when value is a number', () => {
                expect(UtilityEngine.hasWhitespace(0)).to.equal(false);
            });

            it('Should return false when value is an array', () => {
                expect(UtilityEngine.hasWhitespace([])).to.equal(false);
            });

            it('Should return false when value is a function', () => {
                expect(UtilityEngine.hasWhitespace(function() {
                })).to.equal(false);
            });
        });

        describe('#hasWhitespace(value, MINIMUMCOUNT, maximumCount)', function() {
            it('Should return true when minimum count parameter is undefined', () => {
                expect(UtilityEngine.hasWhitespace('1 2 3 ', undefined)).to.equal(true);
            });

            it('Should return true when minimum count parameter is small enough', () => {
                expect(UtilityEngine.hasWhitespace('1 2 3 ', 1)).to.equal(true);
            });

            it('Should return true when minimum count parameter is big enough', () => {
                expect(UtilityEngine.hasWhitespace('1 2 3 ', 2)).to.equal(true);
            });

            it('Should return true when minimum count parameter is at minimum', () => {
                expect(UtilityEngine.hasWhitespace('1 2 3 ', 1)).to.equal(true);
            });

            it('Should return true when minimum count parameter is at maximum', () => {
                expect(UtilityEngine.hasWhitespace('1 2 3 ', 3)).to.equal(true);
            });


            it('Should return false when minimum count parameter is too big', () => {
                expect(UtilityEngine.hasWhitespace('1 2 3 ', 4)).to.equal(false);
            });

            it('Should return false when minimum count parameter is too small', () => {
                expect(UtilityEngine.hasWhitespace('1 2 3 ', 0)).to.equal(false);
            });

            it('Should return false when minimum count parameter is bigger than maximum count', () => {
                expect(UtilityEngine.hasWhitespace('1 2 3 ', 4, 3)).to.equal(false);
            });

            it('Should return false when minimum count parameter is null', () => {
                expect(UtilityEngine.hasWhitespace('1 2 3 ', null)).to.equal(false);
            });

            it('Should return false when minimum count parameter is true', () => {
                expect(UtilityEngine.hasWhitespace('1 2 3 ', true)).to.equal(false);
            });

            it('Should return false when minimum count parameter is false', () => {
                expect(UtilityEngine.hasWhitespace('1 2 3 ', false)).to.equal(false);
            });

            it('Should return false when minimum count parameter is an object', () => {
                expect(UtilityEngine.hasWhitespace('1 2 3 ', {})).to.equal(false);
            });

            it('Should return false when minimum count parameter is a string', () => {
                expect(UtilityEngine.hasWhitespace('1 2 3 ', 'string')).to.equal(false);
            });

            it('Should return false when minimum count parameter is an array', () => {
                expect(UtilityEngine.hasWhitespace('1 2 3 ', [])).to.equal(false);
            });

            it('Should return false when minimum count parameter is a function', () => {
                expect(UtilityEngine.hasWhitespace('1 2 3 ', function() {})).to.equal(false);
            });

            it('Should return false when minimum count parameter negative number', () => {
                expect(UtilityEngine.hasWhitespace('1 2 3 ', -1)).to.equal(false);
            });

            it('Should return false when maximum count parameter is positive infinity', () => {
                expect(UtilityEngine.hasWhitespace('1 2 3 ', Number.POSITIVE_INFINITY)).to.equal(false);
            });

            it('Should return false when maximum count parameter is negative infinity', () => {
                expect(UtilityEngine.hasWhitespace('1 2 3 ', Number.NEGATIVE_INFINITY)).to.equal(false);
            });
        });

        describe('#hasWhitespace(value, minimumCount, MAXIMUMCOUNT)', function() {
            it('Should return true when maximum count parameter is undefined', () => {
                expect(UtilityEngine.hasWhitespace('1 2 3 ', undefined, undefined)).to.equal(true);
            });

            it('Should return true when maximum count parameter is just small enough', () => {
                expect(UtilityEngine.hasWhitespace('1 2 3 ', undefined, 3)).to.equal(true);
            });

            it('Should return true when maximum count parameter is big enough', () => {
                expect(UtilityEngine.hasWhitespace('1 2 3 ', undefined, 4)).to.equal(true);
            });

            it('Should return true when maximum count parameter is positive infinity', () => {
                expect(UtilityEngine.hasWhitespace('1 2 3 ', undefined, Number.POSITIVE_INFINITY)).to.equal(true);
            });


            it('Should return false when maximum count parameter is too small', () => {
                expect(UtilityEngine.hasWhitespace('1 2 3 ', undefined, 2)).to.equal(false);
            });

            it('Should return false when maximum count parameter is smaller than minimum count', () => {
                expect(UtilityEngine.hasWhitespace('1 2 3 ', 4, 3)).to.equal(false);
            });

            it('Should return false when maximum count parameter is null', () => {
                expect(UtilityEngine.hasWhitespace('1 2 3 ', undefined, null)).to.equal(false);
            });

            it('Should return false when maximum count parameter is true', () => {
                expect(UtilityEngine.hasWhitespace('1 2 3 ', undefined, true)).to.equal(false);
            });

            it('Should return false when maximum count parameter is false', () => {
                expect(UtilityEngine.hasWhitespace('1 2 3 ', undefined, false)).to.equal(false);
            });

            it('Should return false when maximum count parameter is an object', () => {
                expect(UtilityEngine.hasWhitespace('1 2 3 ', undefined, {})).to.equal(false);
            });

            it('Should return false when maximum count parameter is a string', () => {
                expect(UtilityEngine.hasWhitespace('1 2 3 ', undefined, 'string')).to.equal(false);
            });

            it('Should return false when maximum count parameter is an array', () => {
                expect(UtilityEngine.hasWhitespace('1 2 3 ', undefined, [])).to.equal(false);
            });

            it('Should return false when maximum count parameter is a function', () => {
                expect(UtilityEngine.hasWhitespace('1 2 3 ', undefined, function() {})).to.equal(false);
            });

            it('Should return false when maximum count parameter negative number', () => {
                expect(UtilityEngine.hasWhitespace('1 2 3 ', undefined, -1)).to.equal(false);
            });

            it('Should return false when maximum count parameter is negative infinity', () => {
                expect(UtilityEngine.hasWhitespace('1 2 3 ', undefined, Number.NEGATIVE_INFINITY)).to.equal(false);
            });
        });
    });
});
