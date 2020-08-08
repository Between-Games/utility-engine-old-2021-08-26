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
                expect(UtilityEngine.hasWhitespace('1 2 3 ', 0)).to.equal(true);
            });

            it('Should return true when minimum count parameter is at maximum', () => {
                expect(UtilityEngine.hasWhitespace('1 2 3 ', 3)).to.equal(true);
            });

            it('Should return true when minimum count parameter is zero', () => {
                expect(UtilityEngine.hasWhitespace('0', 0)).to.equal(true);
            });


            it('Should return false when minimum count parameter is too big', () => {
                expect(UtilityEngine.hasWhitespace('1 2 3 ', 4)).to.equal(false);
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

            it('Should return true when maximum and minimum count parameters are zero', () => {
                expect(UtilityEngine.hasWhitespace('0', 0, 0)).to.equal(true);
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

    // ╔═╗   ╔═╗╔═══════╗╔═══════╗         ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗
    // ║ ║   ║ ║║ ╔═══╗ ║║ ╔═════╝         ╚╗ ╔══╗ ║╚══╗ ╔══╝║ ╔═════╝╚══╗ ╔══╝╚══╗ ╔══╝
    // ║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═════╗╔═══════╗ ║ ║  ║ ║   ║ ║   ║ ║ ╔═══╗   ║ ║      ║ ║
    // ║ ╔═══╗ ║║ ╔═══╗ ║╚═════╗ ║╚═══════╝ ║ ║  ║ ║   ║ ║   ║ ║ ╚═╗ ║   ║ ║      ║ ║
    // ║ ║   ║ ║║ ║   ║ ║╔═════╝ ║         ╔╝ ╚══╝ ║╔══╝ ╚══╗║ ╚═══╝ ║╔══╝ ╚══╗   ║ ║
    // ╚═╝   ╚═╝╚═╝   ╚═╝╚═══════╝         ╚═══════╝╚═══════╝╚═══════╝╚═══════╝   ╚═╝

    describe('#hasDigit(value, minimumCount, maximumCount)', function() {
        describe('#hasDigit(VALUE, minimumCount, maximumCount)', function() {
            it('Should return true when value has a digit character', () => {
                expect(UtilityEngine.hasDigit('1')).to.equal(true);
            });

            it('Should return true when value has a digit character', () => {
                expect(UtilityEngine.hasDigit('123')).to.equal(true);
            });

            it('Should return true when value has a digit character', () => {
                expect(UtilityEngine.hasDigit('1string2')).to.equal(true);
            });

            it('Should return true when value has a digit character', () => {
                expect(UtilityEngine.hasDigit('1string2string3')).to.equal(true);
            });

            it('Should return true when value has a digit character', () => {
                expect(UtilityEngine.hasDigit('1 string 2 string 3')).to.equal(true);
            });

            it('Should return true when value has a digit character', () => {
                expect(UtilityEngine.hasDigit('1 2 3 4 5 6 7 8 9')).to.equal(true);
            });


            it('Should return false when value is an empty string', () => {
                expect(UtilityEngine.hasDigit('')).to.equal(false);
            });

            it('Should return false when value is a filled string', () => {
                expect(UtilityEngine.hasDigit('string')).to.equal(false);
            });

            it('Should return false when value is true', () => {
                expect(UtilityEngine.hasDigit(true)).to.equal(false);
            });

            it('Should return false when value is false', () => {
                expect(UtilityEngine.hasDigit(false)).to.equal(false);
            });

            it('Should return false when value is null', () => {
                expect(UtilityEngine.hasDigit(null)).to.equal(false);
            });

            it('Should return false when value is undefined', () => {
                expect(UtilityEngine.hasDigit(undefined)).to.equal(false);
            });

            it('Should return false when value is an object', () => {
                expect(UtilityEngine.hasDigit({})).to.equal(false);
            });

            it('Should return false when value is a number', () => {
                expect(UtilityEngine.hasDigit(0)).to.equal(false);
            });

            it('Should return false when value is an array', () => {
                expect(UtilityEngine.hasDigit([])).to.equal(false);
            });

            it('Should return false when value is a function', () => {
                expect(UtilityEngine.hasDigit(function() {})).to.equal(false);
            });
        });

        describe('#hasDigit(value, MINIMUMCOUNT, maximumCount)', function() {
            it('Should return true when minimum count parameter is undefined', () => {
                expect(UtilityEngine.hasDigit('123', undefined)).to.equal(true);
            });

            it('Should return true when minimum count parameter is small enough', () => {
                expect(UtilityEngine.hasDigit('123', 1)).to.equal(true);
            });

            it('Should return true when minimum count parameter is big enough', () => {
                expect(UtilityEngine.hasDigit('123', 2)).to.equal(true);
            });

            it('Should return true when minimum count parameter is at minimum', () => {
                expect(UtilityEngine.hasDigit('123', 0)).to.equal(true);
            });

            it('Should return true when minimum count parameter is at maximum', () => {
                expect(UtilityEngine.hasDigit('123', 3)).to.equal(true);
            });

            it('Should return true when minimum count parameter is zero', () => {
                expect(UtilityEngine.hasDigit('123', 0)).to.equal(true);
            });


            it('Should return false when minimum count parameter is too big', () => {
                expect(UtilityEngine.hasDigit('123', 4)).to.equal(false);
            });

            it('Should return false when minimum count parameter is bigger than maximum count', () => {
                expect(UtilityEngine.hasDigit('123', 4, 3)).to.equal(false);
            });

            it('Should return false when minimum count parameter is null', () => {
                expect(UtilityEngine.hasDigit('123', null)).to.equal(false);
            });

            it('Should return false when minimum count parameter is true', () => {
                expect(UtilityEngine.hasDigit('123', true)).to.equal(false);
            });

            it('Should return false when minimum count parameter is false', () => {
                expect(UtilityEngine.hasDigit('123', false)).to.equal(false);
            });

            it('Should return false when minimum count parameter is an object', () => {
                expect(UtilityEngine.hasDigit('123', {})).to.equal(false);
            });

            it('Should return false when minimum count parameter is a string', () => {
                expect(UtilityEngine.hasDigit('123', 'string')).to.equal(false);
            });

            it('Should return false when minimum count parameter is an array', () => {
                expect(UtilityEngine.hasDigit('123', [])).to.equal(false);
            });

            it('Should return false when minimum count parameter is a function', () => {
                expect(UtilityEngine.hasDigit('123', function() {})).to.equal(false);
            });

            it('Should return false when minimum count parameter negative number', () => {
                expect(UtilityEngine.hasDigit('123', -1)).to.equal(false);
            });

            it('Should return false when maximum count parameter is positive infinity', () => {
                expect(UtilityEngine.hasDigit('123', Number.POSITIVE_INFINITY)).to.equal(false);
            });

            it('Should return false when maximum count parameter is negative infinity', () => {
                expect(UtilityEngine.hasDigit('123', Number.NEGATIVE_INFINITY)).to.equal(false);
            });
        });

        describe('#hasDigit(value, minimumCount, MAXIMUMCOUNT)', function() {
            it('Should return true when maximum count parameter is undefined', () => {
                expect(UtilityEngine.hasDigit('123 ', undefined, undefined)).to.equal(true);
            });

            it('Should return true when maximum count parameter is just small enough', () => {
                expect(UtilityEngine.hasDigit('123 ', undefined, 3)).to.equal(true);
            });

            it('Should return true when maximum count parameter is big enough', () => {
                expect(UtilityEngine.hasDigit('123 ', undefined, 4)).to.equal(true);
            });

            it('Should return true when maximum and minimum count parameters are zero', () => {
                expect(UtilityEngine.hasDigit('zero', 0, 0)).to.equal(true);
            });

            it('Should return true when maximum count parameter is positive infinity', () => {
                expect(UtilityEngine.hasDigit('123', undefined, Number.POSITIVE_INFINITY)).to.equal(true);
            });


            it('Should return false when maximum count parameter is too small', () => {
                expect(UtilityEngine.hasDigit('123', undefined, 2)).to.equal(false);
            });

            it('Should return false when maximum count parameter is smaller than minimum count', () => {
                expect(UtilityEngine.hasDigit('123', 3, 2)).to.equal(false);
            });

            it('Should return false when maximum count parameter is null', () => {
                expect(UtilityEngine.hasDigit('123', undefined, null)).to.equal(false);
            });

            it('Should return false when maximum count parameter is true', () => {
                expect(UtilityEngine.hasDigit('123', undefined, true)).to.equal(false);
            });

            it('Should return false when maximum count parameter is false', () => {
                expect(UtilityEngine.hasDigit('123', undefined, false)).to.equal(false);
            });

            it('Should return false when maximum count parameter is an object', () => {
                expect(UtilityEngine.hasDigit('123', undefined, {})).to.equal(false);
            });

            it('Should return false when maximum count parameter is a string', () => {
                expect(UtilityEngine.hasDigit('123', undefined, 'string')).to.equal(false);
            });

            it('Should return false when maximum count parameter is an array', () => {
                expect(UtilityEngine.hasDigit('123', undefined, [])).to.equal(false);
            });

            it('Should return false when maximum count parameter is a function', () => {
                expect(UtilityEngine.hasDigit('123', undefined, function() {})).to.equal(false);
            });

            it('Should return false when maximum count parameter negative number', () => {
                expect(UtilityEngine.hasDigit('123 ', undefined, -1)).to.equal(false);
            });

            it('Should return false when maximum count parameter is negative infinity', () => {
                expect(UtilityEngine.hasDigit('123', undefined, Number.NEGATIVE_INFINITY)).to.equal(false);
            });
        });
    });

    // ╔═╗   ╔═╗╔═══════╗╔═══════╗         ╔═╗      ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗
    // ║ ║   ║ ║║ ╔═══╗ ║║ ╔═════╝         ║ ║      ║ ╔═════╝╚══╗ ╔══╝╚══╗ ╔══╝║ ╔═════╝║ ╔═══╗ ║
    // ║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═════╗╔═══════╗║ ║      ║ ╚═════╗   ║ ║      ║ ║   ║ ╚═════╗║ ╚═══╝ ║
    // ║ ╔═══╗ ║║ ╔═══╗ ║╚═════╗ ║╚═══════╝║ ║      ║ ╔═════╝   ║ ║      ║ ║   ║ ╔═════╝║ ╔═╗ ╔═╝
    // ║ ║   ║ ║║ ║   ║ ║╔═════╝ ║         ║ ╚═════╗║ ╚═════╗   ║ ║      ║ ║   ║ ╚═════╗║ ║ ║ ╚═╗
    // ╚═╝   ╚═╝╚═╝   ╚═╝╚═══════╝         ╚═══════╝╚═══════╝   ╚═╝      ╚═╝   ╚═══════╝╚═╝ ╚═══╝

    describe('#hasLetter(value, minimumCount, maximumCount)', function() {
        describe('#hasLetter(VALUE, minimumCount, maximumCount)', function() {
            it('Should return true when value has a letter character', () => {
                expect(UtilityEngine.hasLetter('À')).to.equal(true);
            });

            it('Should return true when value has many letter characters', () => {
                expect(UtilityEngine.hasLetter('1AZ 2Aa z3ÀŽ 4àž 5Œœ  .:;×÷<>~`^!?(){}[]!@#$%^&*()_-+"/|\\\'')).to.equal(true);
            });

            it('Should return true when value has a letter character', () => {
                expect(UtilityEngine.hasLetter(' a à æ œ o 6 7 8 9')).to.equal(true);
            });


            it('Should return false when value is an empty string', () => {
                expect(UtilityEngine.hasLetter('')).to.equal(false);
            });

            it('Should return false when value is only whitespace character', () => {
                expect(UtilityEngine.hasLetter(' ')).to.equal(false);
            });

            it('Should return false when value has only special characters', () => {
                expect(UtilityEngine.hasLetter(' .:;×÷<>~`^!?(){}[]!@#$%^&*()_-+"/|\\\'')).to.equal(false);
            });

            it('Should return false when value is true', () => {
                expect(UtilityEngine.hasLetter(true)).to.equal(false);
            });

            it('Should return false when value is false', () => {
                expect(UtilityEngine.hasLetter(false)).to.equal(false);
            });

            it('Should return false when value is null', () => {
                expect(UtilityEngine.hasLetter(null)).to.equal(false);
            });

            it('Should return false when value is undefined', () => {
                expect(UtilityEngine.hasLetter(undefined)).to.equal(false);
            });

            it('Should return false when value is an object', () => {
                expect(UtilityEngine.hasLetter({})).to.equal(false);
            });

            it('Should return false when value is a number', () => {
                expect(UtilityEngine.hasLetter(0)).to.equal(false);
            });

            it('Should return false when value is an array', () => {
                expect(UtilityEngine.hasLetter([])).to.equal(false);
            });

            it('Should return false when value is a function', () => {
                expect(UtilityEngine.hasLetter(function() {})).to.equal(false);
            });
        });

        describe('#hasLetter(value, MINIMUMCOUNT, maximumCount)', function() {
            it('Should return true when minimum count parameter is undefined', () => {
                expect(UtilityEngine.hasLetter('AZAazÀŽàž', undefined)).to.equal(true);
            });

            it('Should return true when minimum count parameter is small enough', () => {
                expect(UtilityEngine.hasLetter('AZAazÀŽàž', 1)).to.equal(true);
            });

            it('Should return true when minimum count parameter is big enough', () => {
                expect(UtilityEngine.hasLetter('AZAazÀŽàž', 2)).to.equal(true);
            });

            it('Should return true when minimum count parameter is at minimum', () => {
                expect(UtilityEngine.hasLetter('AZAazÀŽàž', 0)).to.equal(true);
            });

            it('Should return true when minimum count parameter is at maximum', () => {
                expect(UtilityEngine.hasLetter('AZAazÀŽàž', 3)).to.equal(true);
            });

            it('Should return true when minimum count parameter is zero', () => {
                expect(UtilityEngine.hasLetter('AZAazÀŽàž', 0)).to.equal(true);
            });


            it('Should return false when minimum count parameter is too big', () => {
                expect(UtilityEngine.hasLetter('1A2Z3A', 4)).to.equal(false);
            });

            it('Should return false when minimum count parameter is bigger than maximum count', () => {
                expect(UtilityEngine.hasLetter('AZAazÀŽàž', 4, 3)).to.equal(false);
            });

            it('Should return false when minimum count parameter is null', () => {
                expect(UtilityEngine.hasLetter('AZAazÀŽàž', null)).to.equal(false);
            });

            it('Should return false when minimum count parameter is true', () => {
                expect(UtilityEngine.hasLetter('AZAazÀŽàž', true)).to.equal(false);
            });

            it('Should return false when minimum count parameter is false', () => {
                expect(UtilityEngine.hasLetter('AZAazÀŽàž', false)).to.equal(false);
            });

            it('Should return false when minimum count parameter is an object', () => {
                expect(UtilityEngine.hasLetter('AZAazÀŽàž', {})).to.equal(false);
            });

            it('Should return false when minimum count parameter is a string', () => {
                expect(UtilityEngine.hasLetter('AZAazÀŽàž', 'string')).to.equal(false);
            });

            it('Should return false when minimum count parameter is an array', () => {
                expect(UtilityEngine.hasLetter('AZAazÀŽàž', [])).to.equal(false);
            });

            it('Should return false when minimum count parameter is a function', () => {
                expect(UtilityEngine.hasLetter('AZAazÀŽàž', function() {})).to.equal(false);
            });

            it('Should return false when minimum count parameter negative number', () => {
                expect(UtilityEngine.hasLetter('AZAazÀŽàž', -1)).to.equal(false);
            });

            it('Should return false when maximum count parameter is positive infinity', () => {
                expect(UtilityEngine.hasLetter('AZAazÀŽàž', Number.POSITIVE_INFINITY)).to.equal(false);
            });

            it('Should return false when maximum count parameter is negative infinity', () => {
                expect(UtilityEngine.hasLetter('AZAazÀŽàž', Number.NEGATIVE_INFINITY)).to.equal(false);
            });
        });

        describe('#hasLetter(value, minimumCount, MAXIMUMCOUNT)', function() {
            it('Should return true when maximum count parameter is undefined', () => {
                expect(UtilityEngine.hasLetter('AZAazÀŽàž ', undefined, undefined)).to.equal(true);
            });

            it('Should return true when maximum count parameter is just small enough', () => {
                expect(UtilityEngine.hasLetter('1A2Z3A ', undefined, 3)).to.equal(true);
            });

            it('Should return true when maximum count parameter is big enough', () => {
                expect(UtilityEngine.hasLetter('1A2Z3A ', undefined, 4)).to.equal(true);
            });

            it('Should return true when maximum and minimum count parameters are zero', () => {
                expect(UtilityEngine.hasLetter('0', 0, 0)).to.equal(true);
            });

            it('Should return true when maximum count parameter is positive infinity', () => {
                expect(UtilityEngine.hasLetter('AZAazÀŽàž', undefined, Number.POSITIVE_INFINITY)).to.equal(true);
            });


            it('Should return false when maximum count parameter is too small', () => {
                expect(UtilityEngine.hasLetter('AZAazÀŽàž', undefined, 2)).to.equal(false);
            });

            it('Should return false when maximum count parameter is smaller than minimum count', () => {
                expect(UtilityEngine.hasLetter('AZAazÀŽàž', 3, 2)).to.equal(false);
            });

            it('Should return false when maximum count parameter is null', () => {
                expect(UtilityEngine.hasLetter('AZAazÀŽàž', undefined, null)).to.equal(false);
            });

            it('Should return false when maximum count parameter is true', () => {
                expect(UtilityEngine.hasLetter('AZAazÀŽàž', undefined, true)).to.equal(false);
            });

            it('Should return false when maximum count parameter is false', () => {
                expect(UtilityEngine.hasLetter('AZAazÀŽàž', undefined, false)).to.equal(false);
            });

            it('Should return false when maximum count parameter is an object', () => {
                expect(UtilityEngine.hasLetter('AZAazÀŽàž', undefined, {})).to.equal(false);
            });

            it('Should return false when maximum count parameter is a string', () => {
                expect(UtilityEngine.hasDigit('AZAazÀŽàž', undefined, 'string')).to.equal(false);
            });

            it('Should return false when maximum count parameter is an array', () => {
                expect(UtilityEngine.hasLetter('AZAazÀŽàž', undefined, [])).to.equal(false);
            });

            it('Should return false when maximum count parameter is a function', () => {
                expect(UtilityEngine.hasLetter('AZAazÀŽàž', undefined, function() {})).to.equal(false);
            });

            it('Should return false when maximum count parameter negative number', () => {
                expect(UtilityEngine.hasLetter('AZAazÀŽàž ', undefined, -1)).to.equal(false);
            });

            it('Should return false when maximum count parameter is negative infinity', () => {
                expect(UtilityEngine.hasLetter('AZAazÀŽàž', undefined, Number.NEGATIVE_INFINITY)).to.equal(false);
            });
        });
    });
});
