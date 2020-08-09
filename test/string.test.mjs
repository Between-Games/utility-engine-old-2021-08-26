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

    // ╔═╗   ╔═╗╔═══════╗╔═══════╗         ╔═╗╔═╗╔═╗╔═╗   ╔═╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗         ╔═══════╗╔═══════╗╔═╗   ╔═╗╔════╗╔═╗╔═══════╗
    // ║ ║   ║ ║║ ╔═══╗ ║║ ╔═════╝         ║ ║║ ║║ ║║ ║   ║ ║╚══╗ ╔══╝╚══╗ ╔══╝║ ╔═════╝║ ╔═════╝║ ╔═══╗ ║║ ╔═══╗ ║║ ╔═════╝║ ╔═════╝         ║ ╔═════╝║ ╔═══╗ ║║ ║   ║ ║║ ╔╗ ║║ ║╚══╗ ╔══╝
    // ║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═════╗╔═══════╗║ ║║ ║║ ║║ ╚═══╝ ║   ║ ║      ║ ║   ║ ╚═════╗║ ╚═════╗║ ╚═══╝ ║║ ╚═══╝ ║║ ║      ║ ╚═════╗╔═══════╗║ ║      ║ ║   ║ ║║ ║   ║ ║║ ║║ ║║ ║   ║ ║
    // ║ ╔═══╗ ║║ ╔═══╗ ║╚═════╗ ║╚═══════╝║ ║║ ║║ ║║ ╔═══╗ ║   ║ ║      ║ ║   ║ ╔═════╝╚═════╗ ║║ ╔═════╝║ ╔═══╗ ║║ ║      ║ ╔═════╝╚═══════╝║ ║      ║ ║   ║ ║║ ║   ║ ║║ ║║ ║║ ║   ║ ║
    // ║ ║   ║ ║║ ║   ║ ║╔═════╝ ║         ║ ╚╝ ╚╝ ║║ ║   ║ ║╔══╝ ╚══╗   ║ ║   ║ ╚═════╗╔═════╝ ║║ ║      ║ ║   ║ ║║ ╚═════╗║ ╚═════╗         ║ ╚═════╗║ ╚═══╝ ║║ ╚═══╝ ║║ ║║ ╚╝ ║   ║ ║
    // ╚═╝   ╚═╝╚═╝   ╚═╝╚═══════╝         ╚═══════╝╚═╝   ╚═╝╚═══════╝   ╚═╝   ╚═══════╝╚═══════╝╚═╝      ╚═╝   ╚═╝╚═══════╝╚═══════╝         ╚═══════╝╚═══════╝╚═══════╝╚═╝╚════╝   ╚═╝

    describe('#hasWhitespaceCount(value, minimumCount, maximumCount)', function() {
        describe('#hasWhitespaceCount(VALUE, minimumCount, maximumCount)', function() {
            it('Should return true when value is whitespace character', () => {
                expect(UtilityEngine.hasWhitespaceCount(' ')).to.equal(true);
            });

            it('Should return true when value is whitespace characters', () => {
                expect(UtilityEngine.hasWhitespaceCount('  ')).to.equal(true);
            });

            it('Should return true when value is mixed characters', () => {
                expect(UtilityEngine.hasWhitespaceCount('123 ABC abc $#& .!?')).to.equal(true);
            });

            it('Should return true when value is a sentence', () => {
                expect(UtilityEngine.hasWhitespaceCount('No more half-measures')).to.equal(true);
            });


            it('Should return false when value is an empty string', () => {
                expect(UtilityEngine.hasWhitespaceCount('')).to.equal(false);
            });

            it('Should return false when value is lower case letter characters', () => {
                expect(UtilityEngine.hasWhitespaceCount('abcdefghijklmnopqrstuvwxyz')).to.equal(false);
            });

            it('Should return false when value is upper case letter characters', () => {
                expect(UtilityEngine.hasWhitespaceCount('ABCDEFGHIJKLMNOPQRSTUVWXYZ')).to.equal(false);
            });

            it('Should return false when value is lower case accented letter characters', () => {
                expect(UtilityEngine.hasWhitespaceCount('àáâäæãåāèéêëēėęôöòóœøōõ')).to.equal(false);
            });

            it('Should return false when value has upper case accented letter characters', () => {
                expect(UtilityEngine.hasWhitespaceCount('ÀÁÂÄÆÃÅĀÈÉÊËĒĖĘÔÖÒÓŒØŌÕ')).to.equal(false);
            });

            it('Should return false when value is special characters', () => {
                expect(UtilityEngine.hasWhitespaceCount('.:;•°×÷‰<>~`^!?(){}[]!@#$%$^&*()_шФ-+"/|\\\'')).to.equal(false);
            });

            it('Should return false when value is true', () => {
                expect(UtilityEngine.hasWhitespaceCount(true)).to.equal(false);
            });

            it('Should return false when value is false', () => {
                expect(UtilityEngine.hasWhitespaceCount(false)).to.equal(false);
            });

            it('Should return false when value is null', () => {
                expect(UtilityEngine.hasWhitespaceCount(null)).to.equal(false);
            });

            it('Should return false when value is undefined', () => {
                expect(UtilityEngine.hasWhitespaceCount(undefined)).to.equal(false);
            });

            it('Should return false when value is an object', () => {
                expect(UtilityEngine.hasWhitespaceCount({})).to.equal(false);
            });

            it('Should return false when value is a number', () => {
                expect(UtilityEngine.hasWhitespaceCount(0)).to.equal(false);
            });

            it('Should return false when value is an array', () => {
                expect(UtilityEngine.hasWhitespaceCount([])).to.equal(false);
            });

            it('Should return false when value is a function', () => {
                expect(UtilityEngine.hasWhitespaceCount(function() {
                })).to.equal(false);
            });
        });

        describe('#hasWhitespaceCount(value, MINIMUMCOUNT, maximumCount)', function() {
            it('Should return true when minimum count parameter is undefined', () => {
                expect(UtilityEngine.hasWhitespaceCount('1 2 3 ', undefined)).to.equal(true);
            });

            it('Should return true when minimum count parameter is small enough', () => {
                expect(UtilityEngine.hasWhitespaceCount('1 2 3 ', 1)).to.equal(true);
            });

            it('Should return true when minimum count parameter is big enough', () => {
                expect(UtilityEngine.hasWhitespaceCount('1 2 3 ', 2)).to.equal(true);
            });

            it('Should return true when minimum count parameter is at minimum', () => {
                expect(UtilityEngine.hasWhitespaceCount('1 2 3 ', 0)).to.equal(true);
            });

            it('Should return true when minimum count parameter is at maximum', () => {
                expect(UtilityEngine.hasWhitespaceCount('1 2 3 ', 3)).to.equal(true);
            });

            it('Should return true when minimum count parameter is zero', () => {
                expect(UtilityEngine.hasWhitespaceCount('0', 0)).to.equal(true);
            });


            it('Should return false when minimum count parameter is too big', () => {
                expect(UtilityEngine.hasWhitespaceCount('1 2 3 ', 4)).to.equal(false);
            });

            it('Should return false when minimum count parameter is bigger than maximum count', () => {
                expect(UtilityEngine.hasWhitespaceCount('1 2 3 ', 4, 3)).to.equal(false);
            });

            it('Should return false when minimum count parameter is null', () => {
                expect(UtilityEngine.hasWhitespaceCount('1 2 3 ', null)).to.equal(false);
            });

            it('Should return false when minimum count parameter is true', () => {
                expect(UtilityEngine.hasWhitespaceCount('1 2 3 ', true)).to.equal(false);
            });

            it('Should return false when minimum count parameter is false', () => {
                expect(UtilityEngine.hasWhitespaceCount('1 2 3 ', false)).to.equal(false);
            });

            it('Should return false when minimum count parameter is an object', () => {
                expect(UtilityEngine.hasWhitespaceCount('1 2 3 ', {})).to.equal(false);
            });

            it('Should return false when minimum count parameter is a string', () => {
                expect(UtilityEngine.hasWhitespaceCount('1 2 3 ', 'string')).to.equal(false);
            });

            it('Should return false when minimum count parameter is an array', () => {
                expect(UtilityEngine.hasWhitespaceCount('1 2 3 ', [])).to.equal(false);
            });

            it('Should return false when minimum count parameter is a function', () => {
                expect(UtilityEngine.hasWhitespaceCount('1 2 3 ', function() {})).to.equal(false);
            });

            it('Should return false when minimum count parameter negative number', () => {
                expect(UtilityEngine.hasWhitespaceCount('1 2 3 ', -1)).to.equal(false);
            });

            it('Should return false when maximum count parameter is positive infinity', () => {
                expect(UtilityEngine.hasWhitespaceCount('1 2 3 ', Number.POSITIVE_INFINITY)).to.equal(false);
            });

            it('Should return false when maximum count parameter is negative infinity', () => {
                expect(UtilityEngine.hasWhitespaceCount('1 2 3 ', Number.NEGATIVE_INFINITY)).to.equal(false);
            });
        });

        describe('#hasWhitespaceCount(value, minimumCount, MAXIMUMCOUNT)', function() {
            it('Should return true when maximum count parameter is undefined', () => {
                expect(UtilityEngine.hasWhitespaceCount('1 2 3 ', undefined, undefined)).to.equal(true);
            });

            it('Should return true when maximum count parameter is just small enough', () => {
                expect(UtilityEngine.hasWhitespaceCount('1 2 3 ', undefined, 3)).to.equal(true);
            });

            it('Should return true when maximum count parameter is big enough', () => {
                expect(UtilityEngine.hasWhitespaceCount('1 2 3 ', undefined, 4)).to.equal(true);
            });

            it('Should return true when maximum and minimum count parameters are zero', () => {
                expect(UtilityEngine.hasWhitespaceCount('0', 0, 0)).to.equal(true);
            });


            it('Should return true when maximum count parameter is positive infinity', () => {
                expect(UtilityEngine.hasWhitespaceCount('1 2 3 ', undefined, Number.POSITIVE_INFINITY)).to.equal(true);
            });


            it('Should return false when maximum count parameter is too small', () => {
                expect(UtilityEngine.hasWhitespaceCount('1 2 3 ', undefined, 2)).to.equal(false);
            });

            it('Should return false when maximum count parameter is smaller than minimum count', () => {
                expect(UtilityEngine.hasWhitespaceCount('1 2 3 ', 4, 3)).to.equal(false);
            });

            it('Should return false when maximum count parameter is null', () => {
                expect(UtilityEngine.hasWhitespaceCount('1 2 3 ', undefined, null)).to.equal(false);
            });

            it('Should return false when maximum count parameter is true', () => {
                expect(UtilityEngine.hasWhitespaceCount('1 2 3 ', undefined, true)).to.equal(false);
            });

            it('Should return false when maximum count parameter is false', () => {
                expect(UtilityEngine.hasWhitespaceCount('1 2 3 ', undefined, false)).to.equal(false);
            });

            it('Should return false when maximum count parameter is an object', () => {
                expect(UtilityEngine.hasWhitespaceCount('1 2 3 ', undefined, {})).to.equal(false);
            });

            it('Should return false when maximum count parameter is a string', () => {
                expect(UtilityEngine.hasWhitespaceCount('1 2 3 ', undefined, 'string')).to.equal(false);
            });

            it('Should return false when maximum count parameter is an array', () => {
                expect(UtilityEngine.hasWhitespaceCount('1 2 3 ', undefined, [])).to.equal(false);
            });

            it('Should return false when maximum count parameter is a function', () => {
                expect(UtilityEngine.hasWhitespaceCount('1 2 3 ', undefined, function() {})).to.equal(false);
            });

            it('Should return false when maximum count parameter negative number', () => {
                expect(UtilityEngine.hasWhitespaceCount('1 2 3 ', undefined, -1)).to.equal(false);
            });

            it('Should return false when maximum count parameter is negative infinity', () => {
                expect(UtilityEngine.hasWhitespaceCount('1 2 3 ', undefined, Number.NEGATIVE_INFINITY)).to.equal(false);
            });
        });
    });

    // ╔═╗   ╔═╗╔═══════╗╔═══════╗         ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗         ╔═══════╗╔═══════╗╔═╗   ╔═╗╔════╗╔═╗╔═══════╗
    // ║ ║   ║ ║║ ╔═══╗ ║║ ╔═════╝         ╚╗ ╔══╗ ║╚══╗ ╔══╝║ ╔═════╝╚══╗ ╔══╝╚══╗ ╔══╝         ║ ╔═════╝║ ╔═══╗ ║║ ║   ║ ║║ ╔╗ ║║ ║╚══╗ ╔══╝
    // ║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═════╗╔═══════╗ ║ ║  ║ ║   ║ ║   ║ ║ ╔═══╗   ║ ║      ║ ║   ╔═══════╗║ ║      ║ ║   ║ ║║ ║   ║ ║║ ║║ ║║ ║   ║ ║
    // ║ ╔═══╗ ║║ ╔═══╗ ║╚═════╗ ║╚═══════╝ ║ ║  ║ ║   ║ ║   ║ ║ ╚═╗ ║   ║ ║      ║ ║   ╚═══════╝║ ║      ║ ║   ║ ║║ ║   ║ ║║ ║║ ║║ ║   ║ ║
    // ║ ║   ║ ║║ ║   ║ ║╔═════╝ ║         ╔╝ ╚══╝ ║╔══╝ ╚══╗║ ╚═══╝ ║╔══╝ ╚══╗   ║ ║            ║ ╚═════╗║ ╚═══╝ ║║ ╚═══╝ ║║ ║║ ╚╝ ║   ║ ║
    // ╚═╝   ╚═╝╚═╝   ╚═╝╚═══════╝         ╚═══════╝╚═══════╝╚═══════╝╚═══════╝   ╚═╝            ╚═══════╝╚═══════╝╚═══════╝╚═╝╚════╝   ╚═╝

    describe('#hasDigitCount(value, minimumCount, maximumCount)', function() {
        describe('#hasDigitCount(VALUE, minimumCount, maximumCount)', function() {
            it('Should return true when value is a  numerical character', () => {
                expect(UtilityEngine.hasDigitCount('1')).to.equal(true);
            });

            it('Should return true when value is numerical characters', () => {
                expect(UtilityEngine.hasDigitCount('0123456789')).to.equal(true);
            });

            it('Should return true when value is mixed characters', () => {
                expect(UtilityEngine.hasDigitCount('123 ABC abc $#& .!?')).to.equal(true);
            });


            it('Should return false when value is an empty string', () => {
                expect(UtilityEngine.hasDigitCount('')).to.equal(false);
            });

            it('Should return false when value is a whitespace character', () => {
                expect(UtilityEngine.hasDigitCount(' ')).to.equal(false);
            });

            it('Should return false when value is lower case letter characters', () => {
                expect(UtilityEngine.hasDigitCount('abcdefghijklmnopqrstuvwxyz')).to.equal(false);
            });

            it('Should return false when value is upper case letter characters', () => {
                expect(UtilityEngine.hasDigitCount('ABCDEFGHIJKLMNOPQRSTUVWXYZ')).to.equal(false);
            });

            it('Should return false when value is lower case accented letter characters', () => {
                expect(UtilityEngine.hasDigitCount('àáâäæãåāèéêëēėęôöòóœøōõ')).to.equal(false);
            });

            it('Should return false when value has upper case accented letter characters', () => {
                expect(UtilityEngine.hasDigitCount('ÀÁÂÄÆÃÅĀÈÉÊËĒĖĘÔÖÒÓŒØŌÕ')).to.equal(false);
            });

            it('Should return false when value is special characters', () => {
                expect(UtilityEngine.hasDigitCount('.:;•°×÷‰<>~`^!?(){}[]!@#$%$^&*()_шФ-+"/|\\\'')).to.equal(false);
            });

            it('Should return false when value is a sentence', () => {
                expect(UtilityEngine.hasDigitCount('No more half-measures')).to.equal(false);
            });

            it('Should return false when value is true', () => {
                expect(UtilityEngine.hasDigitCount(true)).to.equal(false);
            });

            it('Should return false when value is false', () => {
                expect(UtilityEngine.hasDigitCount(false)).to.equal(false);
            });

            it('Should return false when value is null', () => {
                expect(UtilityEngine.hasDigitCount(null)).to.equal(false);
            });

            it('Should return false when value is undefined', () => {
                expect(UtilityEngine.hasDigitCount(undefined)).to.equal(false);
            });

            it('Should return false when value is an object', () => {
                expect(UtilityEngine.hasDigitCount({})).to.equal(false);
            });

            it('Should return false when value is a number', () => {
                expect(UtilityEngine.hasDigitCount(0)).to.equal(false);
            });

            it('Should return false when value is an array', () => {
                expect(UtilityEngine.hasDigitCount([])).to.equal(false);
            });

            it('Should return false when value is a function', () => {
                expect(UtilityEngine.hasDigitCount(function() {})).to.equal(false);
            });
        });

        describe('#hasDigitCount(value, MINIMUMCOUNT, maximumCount)', function() {
            it('Should return true when minimum count parameter is undefined', () => {
                expect(UtilityEngine.hasDigitCount('123', undefined)).to.equal(true);
            });

            it('Should return true when minimum count parameter is small enough', () => {
                expect(UtilityEngine.hasDigitCount('123', 1)).to.equal(true);
            });

            it('Should return true when minimum count parameter is big enough', () => {
                expect(UtilityEngine.hasDigitCount('123', 2)).to.equal(true);
            });

            it('Should return true when minimum count parameter is at minimum', () => {
                expect(UtilityEngine.hasDigitCount('123', 0)).to.equal(true);
            });

            it('Should return true when minimum count parameter is at maximum', () => {
                expect(UtilityEngine.hasDigitCount('123', 3)).to.equal(true);
            });

            it('Should return true when minimum count parameter is zero', () => {
                expect(UtilityEngine.hasDigitCount('123', 0)).to.equal(true);
            });


            it('Should return false when minimum count parameter is too big', () => {
                expect(UtilityEngine.hasDigitCount('123', 4)).to.equal(false);
            });

            it('Should return false when minimum count parameter is bigger than maximum count', () => {
                expect(UtilityEngine.hasDigitCount('123', 4, 3)).to.equal(false);
            });

            it('Should return false when minimum count parameter is null', () => {
                expect(UtilityEngine.hasDigitCount('123', null)).to.equal(false);
            });

            it('Should return false when minimum count parameter is true', () => {
                expect(UtilityEngine.hasDigitCount('123', true)).to.equal(false);
            });

            it('Should return false when minimum count parameter is false', () => {
                expect(UtilityEngine.hasDigitCount('123', false)).to.equal(false);
            });

            it('Should return false when minimum count parameter is an object', () => {
                expect(UtilityEngine.hasDigitCount('123', {})).to.equal(false);
            });

            it('Should return false when minimum count parameter is a string', () => {
                expect(UtilityEngine.hasDigitCount('123', 'string')).to.equal(false);
            });

            it('Should return false when minimum count parameter is an array', () => {
                expect(UtilityEngine.hasDigitCount('123', [])).to.equal(false);
            });

            it('Should return false when minimum count parameter is a function', () => {
                expect(UtilityEngine.hasDigitCount('123', function() {})).to.equal(false);
            });

            it('Should return false when minimum count parameter negative number', () => {
                expect(UtilityEngine.hasDigitCount('123', -1)).to.equal(false);
            });

            it('Should return false when maximum count parameter is positive infinity', () => {
                expect(UtilityEngine.hasDigitCount('123', Number.POSITIVE_INFINITY)).to.equal(false);
            });

            it('Should return false when maximum count parameter is negative infinity', () => {
                expect(UtilityEngine.hasDigitCount('123', Number.NEGATIVE_INFINITY)).to.equal(false);
            });
        });

        describe('#hasDigitCount(value, minimumCount, MAXIMUMCOUNT)', function() {
            it('Should return true when maximum count parameter is undefined', () => {
                expect(UtilityEngine.hasDigitCount('123 ', undefined, undefined)).to.equal(true);
            });

            it('Should return true when maximum count parameter is just small enough', () => {
                expect(UtilityEngine.hasDigitCount('123 ', undefined, 3)).to.equal(true);
            });

            it('Should return true when maximum count parameter is big enough', () => {
                expect(UtilityEngine.hasDigitCount('123 ', undefined, 4)).to.equal(true);
            });

            it('Should return true when maximum and minimum count parameters are zero', () => {
                expect(UtilityEngine.hasDigitCount('zero', 0, 0)).to.equal(true);
            });

            it('Should return true when maximum count parameter is positive infinity', () => {
                expect(UtilityEngine.hasDigitCount('123', undefined, Number.POSITIVE_INFINITY)).to.equal(true);
            });


            it('Should return false when maximum count parameter is too small', () => {
                expect(UtilityEngine.hasDigitCount('123', undefined, 2)).to.equal(false);
            });

            it('Should return false when maximum count parameter is smaller than minimum count', () => {
                expect(UtilityEngine.hasDigitCount('123', 3, 2)).to.equal(false);
            });

            it('Should return false when maximum count parameter is null', () => {
                expect(UtilityEngine.hasDigitCount('123', undefined, null)).to.equal(false);
            });

            it('Should return false when maximum count parameter is true', () => {
                expect(UtilityEngine.hasDigitCount('123', undefined, true)).to.equal(false);
            });

            it('Should return false when maximum count parameter is false', () => {
                expect(UtilityEngine.hasDigitCount('123', undefined, false)).to.equal(false);
            });

            it('Should return false when maximum count parameter is an object', () => {
                expect(UtilityEngine.hasDigitCount('123', undefined, {})).to.equal(false);
            });

            it('Should return false when maximum count parameter is a string', () => {
                expect(UtilityEngine.hasDigitCount('123', undefined, 'string')).to.equal(false);
            });

            it('Should return false when maximum count parameter is an array', () => {
                expect(UtilityEngine.hasDigitCount('123', undefined, [])).to.equal(false);
            });

            it('Should return false when maximum count parameter is a function', () => {
                expect(UtilityEngine.hasDigitCount('123', undefined, function() {})).to.equal(false);
            });

            it('Should return false when maximum count parameter negative number', () => {
                expect(UtilityEngine.hasDigitCount('123 ', undefined, -1)).to.equal(false);
            });

            it('Should return false when maximum count parameter is negative infinity', () => {
                expect(UtilityEngine.hasDigitCount('123', undefined, Number.NEGATIVE_INFINITY)).to.equal(false);
            });
        });
    });

    // ╔═╗   ╔═╗╔═══════╗╔═══════╗         ╔═╗      ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗         ╔═══════╗╔═══════╗╔═╗   ╔═╗╔════╗╔═╗╔═══════╗
    // ║ ║   ║ ║║ ╔═══╗ ║║ ╔═════╝         ║ ║      ║ ╔═════╝╚══╗ ╔══╝╚══╗ ╔══╝║ ╔═════╝║ ╔═══╗ ║         ║ ╔═════╝║ ╔═══╗ ║║ ║   ║ ║║ ╔╗ ║║ ║╚══╗ ╔══╝
    // ║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═════╗╔═══════╗║ ║      ║ ╚═════╗   ║ ║      ║ ║   ║ ╚═════╗║ ╚═══╝ ║╔═══════╗║ ║      ║ ║   ║ ║║ ║   ║ ║║ ║║ ║║ ║   ║ ║
    // ║ ╔═══╗ ║║ ╔═══╗ ║╚═════╗ ║╚═══════╝║ ║      ║ ╔═════╝   ║ ║      ║ ║   ║ ╔═════╝║ ╔═╗ ╔═╝╚═══════╝║ ║      ║ ║   ║ ║║ ║   ║ ║║ ║║ ║║ ║   ║ ║
    // ║ ║   ║ ║║ ║   ║ ║╔═════╝ ║         ║ ╚═════╗║ ╚═════╗   ║ ║      ║ ║   ║ ╚═════╗║ ║ ║ ╚═╗         ║ ╚═════╗║ ╚═══╝ ║║ ╚═══╝ ║║ ║║ ╚╝ ║   ║ ║
    // ╚═╝   ╚═╝╚═╝   ╚═╝╚═══════╝         ╚═══════╝╚═══════╝   ╚═╝      ╚═╝   ╚═══════╝╚═╝ ╚═══╝         ╚═══════╝╚═══════╝╚═══════╝╚═╝╚════╝   ╚═╝

    describe('#hasLetterCount(value, minimumCount, maximumCount)', function() {
        describe('#hasLetterCount(VALUE, minimumCount, maximumCount)', function() {
            it('Should return true when value is a lower case letter character', () => {
                expect(UtilityEngine.hasLetterCount('a')).to.equal(true);
            });

            it('Should return true when value is an upper case letter character', () => {
                expect(UtilityEngine.hasLetterCount('A')).to.equal(true);
            });

            it('Should return true when value is an accented lower case letter character', () => {
                expect(UtilityEngine.hasLetterCount('à')).to.equal(true);
            });

            it('Should return true when value is an accented upper case letter character', () => {
                expect(UtilityEngine.hasLetterCount('À')).to.equal(true);
            });

            it('Should return true when value is lower case letter characters', () => {
                expect(UtilityEngine.hasLetterCount('abcdefghijklmnopqrstuvwxyz')).to.equal(true);
            });

            it('Should return true when value is upper case letter characters', () => {
                expect(UtilityEngine.hasLetterCount('ABCDEFGHIJKLMNOPQRSTUVWXYZ')).to.equal(true);
            });

            it('Should return true when value is lower case accented letter characters', () => {
                expect(UtilityEngine.hasLetterCount('àáâäæãåāèéêëēėęôöòóœøōõ')).to.equal(true);
            });

            it('Should return true when value has upper case accented letter characters', () => {
                expect(UtilityEngine.hasLetterCount('ÀÁÂÄÆÃÅĀÈÉÊËĒĖĘÔÖÒÓŒØŌÕ')).to.equal(true);
            });

            it('Should return true when value is a sentence', () => {
                expect(UtilityEngine.hasLetterCount('No more half-measures')).to.equal(true);
            });

            it('Should return true when value is mixed characters', () => {
                expect(UtilityEngine.hasLetterCount('123 ABC abc $#& .!?')).to.equal(true);
            });

            it('Should return false when value is an empty string', () => {
                expect(UtilityEngine.hasLetterCount('')).to.equal(false);
            });

            it('Should return false when value is a whitespace character', () => {
                expect(UtilityEngine.hasLetterCount(' ')).to.equal(false);
            });

            it('Should return false when value is numerical characters', () => {
                expect(UtilityEngine.hasLetterCount('0123456789')).to.equal(false);
            });

            it('Should return false when value is special characters', () => {
                expect(UtilityEngine.hasLetterCount('.:;•°×÷‰<>~`^!?(){}[]!@#$%$^&*()_шФ-+"/|\\\'')).to.equal(false);
            });

            it('Should return false when value is true', () => {
                expect(UtilityEngine.hasLetterCount(true)).to.equal(false);
            });

            it('Should return false when value is false', () => {
                expect(UtilityEngine.hasLetterCount(false)).to.equal(false);
            });

            it('Should return false when value is null', () => {
                expect(UtilityEngine.hasLetterCount(null)).to.equal(false);
            });

            it('Should return false when value is undefined', () => {
                expect(UtilityEngine.hasLetterCount(undefined)).to.equal(false);
            });

            it('Should return false when value is an object', () => {
                expect(UtilityEngine.hasLetterCount({})).to.equal(false);
            });

            it('Should return false when value is a number', () => {
                expect(UtilityEngine.hasLetterCount(0)).to.equal(false);
            });

            it('Should return false when value is an array', () => {
                expect(UtilityEngine.hasLetterCount([])).to.equal(false);
            });

            it('Should return false when value is a function', () => {
                expect(UtilityEngine.hasLetterCount(function() {})).to.equal(false);
            });
        });

        describe('#hasLetterCount(value, MINIMUMCOUNT, maximumCount)', function() {
            it('Should return true when minimum count parameter is undefined', () => {
                expect(UtilityEngine.hasLetterCount('AZAazÀŽàž', undefined)).to.equal(true);
            });

            it('Should return true when minimum count parameter is small enough', () => {
                expect(UtilityEngine.hasLetterCount('AZAazÀŽàž', 1)).to.equal(true);
            });

            it('Should return true when minimum count parameter is big enough', () => {
                expect(UtilityEngine.hasLetterCount('AZAazÀŽàž', 2)).to.equal(true);
            });

            it('Should return true when minimum count parameter is at minimum', () => {
                expect(UtilityEngine.hasLetterCount('AZAazÀŽàž', 0)).to.equal(true);
            });

            it('Should return true when minimum count parameter is at maximum', () => {
                expect(UtilityEngine.hasLetterCount('AZAazÀŽàž', 3)).to.equal(true);
            });

            it('Should return true when minimum count parameter is zero', () => {
                expect(UtilityEngine.hasLetterCount('AZAazÀŽàž', 0)).to.equal(true);
            });


            it('Should return false when minimum count parameter is too big', () => {
                expect(UtilityEngine.hasLetterCount('1A2Z3A', 4)).to.equal(false);
            });

            it('Should return false when minimum count parameter is bigger than maximum count', () => {
                expect(UtilityEngine.hasLetterCount('AZAazÀŽàž', 4, 3)).to.equal(false);
            });

            it('Should return false when minimum count parameter is null', () => {
                expect(UtilityEngine.hasLetterCount('AZAazÀŽàž', null)).to.equal(false);
            });

            it('Should return false when minimum count parameter is true', () => {
                expect(UtilityEngine.hasLetterCount('AZAazÀŽàž', true)).to.equal(false);
            });

            it('Should return false when minimum count parameter is false', () => {
                expect(UtilityEngine.hasLetterCount('AZAazÀŽàž', false)).to.equal(false);
            });

            it('Should return false when minimum count parameter is an object', () => {
                expect(UtilityEngine.hasLetterCount('AZAazÀŽàž', {})).to.equal(false);
            });

            it('Should return false when minimum count parameter is a string', () => {
                expect(UtilityEngine.hasLetterCount('AZAazÀŽàž', 'string')).to.equal(false);
            });

            it('Should return false when minimum count parameter is an array', () => {
                expect(UtilityEngine.hasLetterCount('AZAazÀŽàž', [])).to.equal(false);
            });

            it('Should return false when minimum count parameter is a function', () => {
                expect(UtilityEngine.hasLetterCount('AZAazÀŽàž', function() {})).to.equal(false);
            });

            it('Should return false when minimum count parameter negative number', () => {
                expect(UtilityEngine.hasLetterCount('AZAazÀŽàž', -1)).to.equal(false);
            });

            it('Should return false when maximum count parameter is positive infinity', () => {
                expect(UtilityEngine.hasLetterCount('AZAazÀŽàž', Number.POSITIVE_INFINITY)).to.equal(false);
            });

            it('Should return false when maximum count parameter is negative infinity', () => {
                expect(UtilityEngine.hasLetterCount('AZAazÀŽàž', Number.NEGATIVE_INFINITY)).to.equal(false);
            });
        });

        describe('#hasLetterCount(value, minimumCount, MAXIMUMCOUNT)', function() {
            it('Should return true when maximum count parameter is undefined', () => {
                expect(UtilityEngine.hasLetterCount('AZAazÀŽàž ', undefined, undefined)).to.equal(true);
            });

            it('Should return true when maximum count parameter is just small enough', () => {
                expect(UtilityEngine.hasLetterCount('1A2Z3A ', undefined, 3)).to.equal(true);
            });

            it('Should return true when maximum count parameter is big enough', () => {
                expect(UtilityEngine.hasLetterCount('1A2Z3A ', undefined, 4)).to.equal(true);
            });

            it('Should return true when maximum and minimum count parameters are zero', () => {
                expect(UtilityEngine.hasLetterCount('0', 0, 0)).to.equal(true);
            });

            it('Should return true when maximum count parameter is positive infinity', () => {
                expect(UtilityEngine.hasLetterCount('AZAazÀŽàž', undefined, Number.POSITIVE_INFINITY)).to.equal(true);
            });


            it('Should return false when maximum count parameter is too small', () => {
                expect(UtilityEngine.hasLetterCount('AZAazÀŽàž', undefined, 2)).to.equal(false);
            });

            it('Should return false when maximum count parameter is smaller than minimum count', () => {
                expect(UtilityEngine.hasLetterCount('AZAazÀŽàž', 3, 2)).to.equal(false);
            });

            it('Should return false when maximum count parameter is null', () => {
                expect(UtilityEngine.hasLetterCount('AZAazÀŽàž', undefined, null)).to.equal(false);
            });

            it('Should return false when maximum count parameter is true', () => {
                expect(UtilityEngine.hasLetterCount('AZAazÀŽàž', undefined, true)).to.equal(false);
            });

            it('Should return false when maximum count parameter is false', () => {
                expect(UtilityEngine.hasLetterCount('AZAazÀŽàž', undefined, false)).to.equal(false);
            });

            it('Should return false when maximum count parameter is an object', () => {
                expect(UtilityEngine.hasLetterCount('AZAazÀŽàž', undefined, {})).to.equal(false);
            });

            it('Should return false when maximum count parameter is a string', () => {
                expect(UtilityEngine.hasLetterCount('AZAazÀŽàž', undefined, 'string')).to.equal(false);
            });

            it('Should return false when maximum count parameter is an array', () => {
                expect(UtilityEngine.hasLetterCount('AZAazÀŽàž', undefined, [])).to.equal(false);
            });

            it('Should return false when maximum count parameter is a function', () => {
                expect(UtilityEngine.hasLetterCount('AZAazÀŽàž', undefined, function() {})).to.equal(false);
            });

            it('Should return false when maximum count parameter negative number', () => {
                expect(UtilityEngine.hasLetterCount('AZAazÀŽàž ', undefined, -1)).to.equal(false);
            });

            it('Should return false when maximum count parameter is negative infinity', () => {
                expect(UtilityEngine.hasLetterCount('AZAazÀŽàž', undefined, Number.NEGATIVE_INFINITY)).to.equal(false);
            });
        });
    });

    // ╔═╗   ╔═╗╔═══════╗╔═══════╗         ╔═╗      ╔═══════╗╔═╗╔═╗╔═╗╔═══════╗╔═══════╗         ╔═══════╗╔═══════╗╔═══════╗╔═══════╗         ╔═╗      ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗         ╔═══════╗╔═══════╗╔═╗   ╔═╗╔════╗╔═╗╔═══════╗
    // ║ ║   ║ ║║ ╔═══╗ ║║ ╔═════╝         ║ ║      ║ ╔═══╗ ║║ ║║ ║║ ║║ ╔═════╝║ ╔═══╗ ║         ║ ╔═════╝║ ╔═══╗ ║║ ╔═════╝║ ╔═════╝         ║ ║      ║ ╔═════╝╚══╗ ╔══╝╚══╗ ╔══╝║ ╔═════╝║ ╔═══╗ ║         ║ ╔═════╝║ ╔═══╗ ║║ ║   ║ ║║ ╔╗ ║║ ║╚══╗ ╔══╝
    // ║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═════╗╔═══════╗║ ║      ║ ║   ║ ║║ ║║ ║║ ║║ ╚═════╗║ ╚═══╝ ║╔═══════╗║ ║      ║ ╚═══╝ ║║ ╚═════╗║ ╚═════╗╔═══════╗║ ║      ║ ╚═════╗   ║ ║      ║ ║   ║ ╚═════╗║ ╚═══╝ ║╔═══════╗║ ║      ║ ║   ║ ║║ ║   ║ ║║ ║║ ║║ ║   ║ ║
    // ║ ╔═══╗ ║║ ╔═══╗ ║╚═════╗ ║╚═══════╝║ ║      ║ ║   ║ ║║ ║║ ║║ ║║ ╔═════╝║ ╔═╗ ╔═╝╚═══════╝║ ║      ║ ╔═══╗ ║╚═════╗ ║║ ╔═════╝╚═══════╝║ ║      ║ ╔═════╝   ║ ║      ║ ║   ║ ╔═════╝║ ╔═╗ ╔═╝╚═══════╝║ ║      ║ ║   ║ ║║ ║   ║ ║║ ║║ ║║ ║   ║ ║
    // ║ ║   ║ ║║ ║   ║ ║╔═════╝ ║         ║ ╚═════╗║ ╚═══╝ ║║ ╚╝ ╚╝ ║║ ╚═════╗║ ║ ║ ╚═╗         ║ ╚═════╗║ ║   ║ ║╔═════╝ ║║ ╚═════╗         ║ ╚═════╗║ ╚═════╗   ║ ║      ║ ║   ║ ╚═════╗║ ║ ║ ╚═╗         ║ ╚═════╗║ ╚═══╝ ║║ ╚═══╝ ║║ ║║ ╚╝ ║   ║ ║
    // ╚═╝   ╚═╝╚═╝   ╚═╝╚═══════╝         ╚═══════╝╚═══════╝╚═══════╝╚═══════╝╚═╝ ╚═══╝         ╚═══════╝╚═╝   ╚═╝╚═══════╝╚═══════╝         ╚═══════╝╚═══════╝   ╚═╝      ╚═╝   ╚═══════╝╚═╝ ╚═══╝         ╚═══════╝╚═══════╝╚═══════╝╚═╝╚════╝   ╚═╝

    describe('#hasLowerCaseLetterCount(value, minimumCount, maximumCount)', function() {
        describe('#hasLowerCaseLetterCount(VALUE, minimumCount, maximumCount)', function() {
            it('Should return true when value is a lower case letter character', () => {
                expect(UtilityEngine.hasLowerCaseLetterCount('a')).to.equal(true);
            });

            it('Should return true when value is an accented lower case letter character', () => {
                expect(UtilityEngine.hasLowerCaseLetterCount('á')).to.equal(true);
            });

            it('Should return true when value is lower case letter characters', () => {
                expect(UtilityEngine.hasLowerCaseLetterCount('abcdefghijklmnopqrstuvwxyz')).to.equal(true);
            });

            it('Should return true when value is lower case accented letter characters', () => {
                expect(UtilityEngine.hasLowerCaseLetterCount('àáâäæãåāèéêëēėęôöòóœøōõ')).to.equal(true);
            });

            it('Should return true when value is a sentence', () => {
                expect(UtilityEngine.hasLowerCaseLetterCount('No more half-measures.')).to.equal(true);
            });

            it('Should return true when value is mixed characters', () => {
                expect(UtilityEngine.hasLowerCaseLetterCount('123 ABC abc $#& .!?')).to.equal(true);
            });


            it('Should return false when value is an empty string', () => {
                expect(UtilityEngine.hasLowerCaseLetterCount('')).to.equal(false);
            });

            it('Should return false when value is a whitespace character', () => {
                expect(UtilityEngine.hasLowerCaseLetterCount(' ')).to.equal(false);
            });

            it('Should return false when value is an upper case letter character', () => {
                expect(UtilityEngine.hasLowerCaseLetterCount('A')).to.equal(false);
            });

            it('Should return false when value is an accented upper case letter character', () => {
                expect(UtilityEngine.hasLowerCaseLetterCount('À')).to.equal(false);
            });

            it('Should return false when value is numerical characters', () => {
                expect(UtilityEngine.hasLowerCaseLetterCount('0123456789')).to.equal(false);
            });

            it('Should return false when value is upper case letter characters', () => {
                expect(UtilityEngine.hasLowerCaseLetterCount('ABCDEFGHIJKLMNOPQRSTUVWXYZ')).to.equal(false);
            });

            it('Should return false when value has upper case accented letter characters', () => {
                expect(UtilityEngine.hasLowerCaseLetterCount('ÀÁÂÄÆÃÅĀÈÉÊËĒĖĘÔÖÒÓŒØŌÕ')).to.equal(false);
            });

            it('Should return false when value is special characters', () => {
                expect(UtilityEngine.hasLowerCaseLetterCount('.:;•°×÷‰<>~`^!?(){}[]!@#$%$^&*()_шФ-+"/|\\\'')).to.equal(false);
            });

            it('Should return false when value is true', () => {
                expect(UtilityEngine.hasLowerCaseLetterCount(true)).to.equal(false);
            });

            it('Should return false when value is false', () => {
                expect(UtilityEngine.hasLowerCaseLetterCount(false)).to.equal(false);
            });

            it('Should return false when value is null', () => {
                expect(UtilityEngine.hasLowerCaseLetterCount(null)).to.equal(false);
            });

            it('Should return false when value is undefined', () => {
                expect(UtilityEngine.hasLowerCaseLetterCount(undefined)).to.equal(false);
            });

            it('Should return false when value is an object', () => {
                expect(UtilityEngine.hasLowerCaseLetterCount({})).to.equal(false);
            });

            it('Should return false when value is a number', () => {
                expect(UtilityEngine.hasLowerCaseLetterCount(0)).to.equal(false);
            });

            it('Should return false when value is an array', () => {
                expect(UtilityEngine.hasLowerCaseLetterCount([])).to.equal(false);
            });

            it('Should return false when value is a function', () => {
                expect(UtilityEngine.hasLowerCaseLetterCount(function() {})).to.equal(false);
            });
        });

        describe('#hasLowerCaseLetterCount(value, MINIMUMCOUNT, maximumCount)', function() {
            it('Should return true when minimum count parameter is undefined', () => {
                expect(UtilityEngine.hasLowerCaseLetterCount('1à2æ3ø', undefined)).to.equal(true);
            });

            it('Should return true when minimum count parameter is small enough', () => {
                expect(UtilityEngine.hasLowerCaseLetterCount('1à2æ3ø', 1)).to.equal(true);
            });

            it('Should return true when minimum count parameter is big enough', () => {
                expect(UtilityEngine.hasLowerCaseLetterCount('1à2æ3ø', 2)).to.equal(true);
            });

            it('Should return true when minimum count parameter is at minimum', () => {
                expect(UtilityEngine.hasLowerCaseLetterCount('1à2æ3ø', 0)).to.equal(true);
            });

            it('Should return true when minimum count parameter is at maximum', () => {
                expect(UtilityEngine.hasLowerCaseLetterCount('1à2æ3ø', 3)).to.equal(true);
            });

            it('Should return true when minimum count parameter is zero', () => {
                expect(UtilityEngine.hasLowerCaseLetterCount('1à2æ3ø', 0)).to.equal(true);
            });


            it('Should return false when minimum count parameter is too big', () => {
                expect(UtilityEngine.hasLowerCaseLetterCount('1à2æ3ø', 4)).to.equal(false);
            });

            it('Should return false when minimum count parameter is bigger than maximum count', () => {
                expect(UtilityEngine.hasLowerCaseLetterCount('1à2æ3ø', 4, 3)).to.equal(false);
            });

            it('Should return false when minimum count parameter is null', () => {
                expect(UtilityEngine.hasLowerCaseLetterCount('1à2æ3ø', null)).to.equal(false);
            });

            it('Should return false when minimum count parameter is true', () => {
                expect(UtilityEngine.hasLowerCaseLetterCount('1à2æ3ø', true)).to.equal(false);
            });

            it('Should return false when minimum count parameter is false', () => {
                expect(UtilityEngine.hasLowerCaseLetterCount('1à2æ3ø', false)).to.equal(false);
            });

            it('Should return false when minimum count parameter is an object', () => {
                expect(UtilityEngine.hasLowerCaseLetterCount('1à2æ3ø', {})).to.equal(false);
            });

            it('Should return false when minimum count parameter is a string', () => {
                expect(UtilityEngine.hasLowerCaseLetterCount('1à2æ3ø', 'string')).to.equal(false);
            });

            it('Should return false when minimum count parameter is an array', () => {
                expect(UtilityEngine.hasLowerCaseLetterCount('1à2æ3ø', [])).to.equal(false);
            });

            it('Should return false when minimum count parameter is a function', () => {
                expect(UtilityEngine.hasLowerCaseLetterCount('1à2æ3ø', function() {})).to.equal(false);
            });

            it('Should return false when minimum count parameter negative number', () => {
                expect(UtilityEngine.hasLowerCaseLetterCount('1à2æ3ø', -1)).to.equal(false);
            });

            it('Should return false when maximum count parameter is positive infinity', () => {
                expect(UtilityEngine.hasLowerCaseLetterCount('1à2æ3ø', Number.POSITIVE_INFINITY)).to.equal(false);
            });

            it('Should return false when maximum count parameter is negative infinity', () => {
                expect(UtilityEngine.hasLowerCaseLetterCount('1à2æ3ø', Number.NEGATIVE_INFINITY)).to.equal(false);
            });
        });

        describe('#hasLowerCaseLetterCount(value, minimumCount, MAXIMUMCOUNT)', function() {
            it('Should return true when maximum count parameter is undefined', () => {
                expect(UtilityEngine.hasLowerCaseLetterCount('1à2æ3ø ', undefined, undefined)).to.equal(true);
            });

            it('Should return true when maximum count parameter is just small enough', () => {
                expect(UtilityEngine.hasLowerCaseLetterCount('1à2æ3ø ', undefined, 3)).to.equal(true);
            });

            it('Should return true when maximum count parameter is big enough', () => {
                expect(UtilityEngine.hasLowerCaseLetterCount('1à2æ3ø ', undefined, 4)).to.equal(true);
            });

            it('Should return true when maximum and minimum count parameters are zero', () => {
                expect(UtilityEngine.hasLowerCaseLetterCount('0', 0, 0)).to.equal(true);
            });

            it('Should return true when maximum count parameter is positive infinity', () => {
                expect(UtilityEngine.hasLowerCaseLetterCount('1à2æ3ø', undefined, Number.POSITIVE_INFINITY)).to.equal(true);
            });


            it('Should return false when maximum count parameter is too small', () => {
                expect(UtilityEngine.hasLowerCaseLetterCount('1à2æ3ø', undefined, 2)).to.equal(false);
            });

            it('Should return false when maximum count parameter is smaller than minimum count', () => {
                expect(UtilityEngine.hasLowerCaseLetterCount('1à2æ3ø', 3, 2)).to.equal(false);
            });

            it('Should return false when maximum count parameter is null', () => {
                expect(UtilityEngine.hasLowerCaseLetterCount('1à2æ3ø', undefined, null)).to.equal(false);
            });

            it('Should return false when maximum count parameter is true', () => {
                expect(UtilityEngine.hasLowerCaseLetterCount('1à2æ3ø', undefined, true)).to.equal(false);
            });

            it('Should return false when maximum count parameter is false', () => {
                expect(UtilityEngine.hasLowerCaseLetterCount('1à2æ3ø', undefined, false)).to.equal(false);
            });

            it('Should return false when maximum count parameter is an object', () => {
                expect(UtilityEngine.hasLowerCaseLetterCount('1à2æ3ø', undefined, {})).to.equal(false);
            });

            it('Should return false when maximum count parameter is a string', () => {
                expect(UtilityEngine.hasLowerCaseLetterCount('1à2æ3ø', undefined, 'string')).to.equal(false);
            });

            it('Should return false when maximum count parameter is an array', () => {
                expect(UtilityEngine.hasLowerCaseLetterCount('1à2æ3ø', undefined, [])).to.equal(false);
            });

            it('Should return false when maximum count parameter is a function', () => {
                expect(UtilityEngine.hasLowerCaseLetterCount('1à2æ3ø', undefined, function() {})).to.equal(false);
            });

            it('Should return false when maximum count parameter negative number', () => {
                expect(UtilityEngine.hasLowerCaseLetterCount('1à2æ3ø ', undefined, -1)).to.equal(false);
            });

            it('Should return false when maximum count parameter is negative infinity', () => {
                expect(UtilityEngine.hasLowerCaseLetterCount('1à2æ3ø', undefined, Number.NEGATIVE_INFINITY)).to.equal(false);
            });
        });
    });

    // ╔═╗   ╔═╗╔═══════╗╔═══════╗         ╔═╗   ╔═╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗         ╔═══════╗╔═══════╗╔═══════╗╔═══════╗         ╔═╗      ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗         ╔═══════╗╔═══════╗╔═╗   ╔═╗╔════╗╔═╗╔═══════╗
    // ║ ║   ║ ║║ ╔═══╗ ║║ ╔═════╝         ║ ║   ║ ║║ ╔═══╗ ║║ ╔═══╗ ║║ ╔═════╝║ ╔═══╗ ║         ║ ╔═════╝║ ╔═══╗ ║║ ╔═════╝║ ╔═════╝         ║ ║      ║ ╔═════╝╚══╗ ╔══╝╚══╗ ╔══╝║ ╔═════╝║ ╔═══╗ ║         ║ ╔═════╝║ ╔═══╗ ║║ ║   ║ ║║ ╔╗ ║║ ║╚══╗ ╔══╝
    // ║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═════╗╔═══════╗║ ║   ║ ║║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═════╗║ ╚═══╝ ║╔═══════╗║ ║      ║ ╚═══╝ ║║ ╚═════╗║ ╚═════╗╔═══════╗║ ║      ║ ╚═════╗   ║ ║      ║ ║   ║ ╚═════╗║ ╚═══╝ ║╔═══════╗║ ║      ║ ║   ║ ║║ ║   ║ ║║ ║║ ║║ ║   ║ ║
    // ║ ╔═══╗ ║║ ╔═══╗ ║╚═════╗ ║╚═══════╝║ ║   ║ ║║ ╔═════╝║ ╔═════╝║ ╔═════╝║ ╔═╗ ╔═╝╚═══════╝║ ║      ║ ╔═══╗ ║╚═════╗ ║║ ╔═════╝╚═══════╝║ ║      ║ ╔═════╝   ║ ║      ║ ║   ║ ╔═════╝║ ╔═╗ ╔═╝╚═══════╝║ ║      ║ ║   ║ ║║ ║   ║ ║║ ║║ ║║ ║   ║ ║
    // ║ ║   ║ ║║ ║   ║ ║╔═════╝ ║         ║ ╚═══╝ ║║ ║      ║ ║      ║ ╚═════╗║ ║ ║ ╚═╗         ║ ╚═════╗║ ║   ║ ║╔═════╝ ║║ ╚═════╗         ║ ╚═════╗║ ╚═════╗   ║ ║      ║ ║   ║ ╚═════╗║ ║ ║ ╚═╗         ║ ╚═════╗║ ╚═══╝ ║║ ╚═══╝ ║║ ║║ ╚╝ ║   ║ ║
    // ╚═╝   ╚═╝╚═╝   ╚═╝╚═══════╝         ╚═══════╝╚═╝      ╚═╝      ╚═══════╝╚═╝ ╚═══╝         ╚═══════╝╚═╝   ╚═╝╚═══════╝╚═══════╝         ╚═══════╝╚═══════╝   ╚═╝      ╚═╝   ╚═══════╝╚═╝ ╚═══╝         ╚═══════╝╚═══════╝╚═══════╝╚═╝╚════╝   ╚═╝

    describe('#hasUpperCaseLetterCount(value, minimumCount, maximumCount)', function() {
        describe('#hasUpperCaseLetterCount(VALUE, minimumCount, maximumCount)', function() {
            it('Should return true when value is an upper case letter character', () => {
                expect(UtilityEngine.hasUpperCaseLetterCount('A')).to.equal(true);
            });

            it('Should return true when value is an accented upper case letter character', () => {
                expect(UtilityEngine.hasUpperCaseLetterCount('À')).to.equal(true);
            });

            it('Should return true when value is upper case letter characters', () => {
                expect(UtilityEngine.hasUpperCaseLetterCount('ABCDEFGHIJKLMNOPQRSTUVWXYZ')).to.equal(true);
            });

            it('Should return true when value has upper case accented letter characters', () => {
                expect(UtilityEngine.hasUpperCaseLetterCount('ÀÁÂÄÆÃÅĀÈÉÊËĒĖĘÔÖÒÓŒØŌÕ')).to.equal(true);
            });

            it('Should return true when value is a sentence', () => {
                expect(UtilityEngine.hasUpperCaseLetterCount('No more half-measures.')).to.equal(true);
            });

            it('Should return true when value is mixed characters', () => {
                expect(UtilityEngine.hasUpperCaseLetterCount('123 ABC abc $#& .!?')).to.equal(true);
            });


            it('Should return false when value is an empty string', () => {
                expect(UtilityEngine.hasUpperCaseLetterCount('')).to.equal(false);
            });

            it('Should return false when value is a whitespace character', () => {
                expect(UtilityEngine.hasUpperCaseLetterCount(' ')).to.equal(false);
            });

            it('Should return false when value is a lower case letter character', () => {
                expect(UtilityEngine.hasUpperCaseLetterCount('a')).to.equal(false);
            });

            it('Should return false when value is an accented lower case letter character', () => {
                expect(UtilityEngine.hasUpperCaseLetterCount('á')).to.equal(false);
            });

            it('Should return false when value is numerical characters', () => {
                expect(UtilityEngine.hasUpperCaseLetterCount('0123456789')).to.equal(false);
            });

            it('Should return false when value is lower case letter characters', () => {
                expect(UtilityEngine.hasUpperCaseLetterCount('abcdefghijklmnopqrstuvwxyz')).to.equal(false);
            });

            it('Should return false when value is lower case accented letter characters', () => {
                expect(UtilityEngine.hasUpperCaseLetterCount('àáâäæãåāèéêëēėęôöòóœøōõ')).to.equal(false);
            });

            it('Should return false when value is special characters', () => {
                expect(UtilityEngine.hasUpperCaseLetterCount('.:;•°×÷‰<>~`^!?(){}[]!@#$%$^&*()_шФ-+"/|\\\'')).to.equal(false);
            });

            it('Should return false when value is true', () => {
                expect(UtilityEngine.hasUpperCaseLetterCount(true)).to.equal(false);
            });

            it('Should return false when value is false', () => {
                expect(UtilityEngine.hasUpperCaseLetterCount(false)).to.equal(false);
            });

            it('Should return false when value is null', () => {
                expect(UtilityEngine.hasUpperCaseLetterCount(null)).to.equal(false);
            });

            it('Should return false when value is undefined', () => {
                expect(UtilityEngine.hasUpperCaseLetterCount(undefined)).to.equal(false);
            });

            it('Should return false when value is an object', () => {
                expect(UtilityEngine.hasUpperCaseLetterCount({})).to.equal(false);
            });

            it('Should return false when value is a number', () => {
                expect(UtilityEngine.hasUpperCaseLetterCount(0)).to.equal(false);
            });

            it('Should return false when value is an array', () => {
                expect(UtilityEngine.hasUpperCaseLetterCount([])).to.equal(false);
            });

            it('Should return false when value is a function', () => {
                expect(UtilityEngine.hasUpperCaseLetterCount(function() {})).to.equal(false);
            });
        });

        describe('#hasUpperCaseLetterCount(value, MINIMUMCOUNT, maximumCount)', function() {
            it('Should return true when minimum count parameter is undefined', () => {
                expect(UtilityEngine.hasUpperCaseLetterCount('1À2Æ3Ø', undefined)).to.equal(true);
            });

            it('Should return true when minimum count parameter is small enough', () => {
                expect(UtilityEngine.hasUpperCaseLetterCount('1À2Æ3Ø', 1)).to.equal(true);
            });

            it('Should return true when minimum count parameter is big enough', () => {
                expect(UtilityEngine.hasUpperCaseLetterCount('1À2Æ3Ø', 2)).to.equal(true);
            });

            it('Should return true when minimum count parameter is at minimum', () => {
                expect(UtilityEngine.hasUpperCaseLetterCount('1À2Æ3Ø', 0)).to.equal(true);
            });

            it('Should return true when minimum count parameter is at maximum', () => {
                expect(UtilityEngine.hasUpperCaseLetterCount('1À2Æ3Ø', 3)).to.equal(true);
            });

            it('Should return true when minimum count parameter is zero', () => {
                expect(UtilityEngine.hasUpperCaseLetterCount('1À2Æ3Ø', 0)).to.equal(true);
            });


            it('Should return false when minimum count parameter is too big', () => {
                expect(UtilityEngine.hasUpperCaseLetterCount('1À2Æ3Ø', 4)).to.equal(false);
            });

            it('Should return false when minimum count parameter is bigger than maximum count', () => {
                expect(UtilityEngine.hasUpperCaseLetterCount('1À2Æ3Ø', 4, 3)).to.equal(false);
            });

            it('Should return false when minimum count parameter is null', () => {
                expect(UtilityEngine.hasUpperCaseLetterCount('1À2Æ3Ø', null)).to.equal(false);
            });

            it('Should return false when minimum count parameter is true', () => {
                expect(UtilityEngine.hasUpperCaseLetterCount('1À2Æ3Ø', true)).to.equal(false);
            });

            it('Should return false when minimum count parameter is false', () => {
                expect(UtilityEngine.hasUpperCaseLetterCount('1À2Æ3Ø', false)).to.equal(false);
            });

            it('Should return false when minimum count parameter is an object', () => {
                expect(UtilityEngine.hasUpperCaseLetterCount('1À2Æ3Ø', {})).to.equal(false);
            });

            it('Should return false when minimum count parameter is a string', () => {
                expect(UtilityEngine.hasUpperCaseLetterCount('1À2Æ3Ø', 'string')).to.equal(false);
            });

            it('Should return false when minimum count parameter is an array', () => {
                expect(UtilityEngine.hasUpperCaseLetterCount('1À2Æ3Ø', [])).to.equal(false);
            });

            it('Should return false when minimum count parameter is a function', () => {
                expect(UtilityEngine.hasUpperCaseLetterCount('1À2Æ3Ø', function() {})).to.equal(false);
            });

            it('Should return false when minimum count parameter negative number', () => {
                expect(UtilityEngine.hasUpperCaseLetterCount('1À2Æ3Ø', -1)).to.equal(false);
            });

            it('Should return false when maximum count parameter is positive infinity', () => {
                expect(UtilityEngine.hasUpperCaseLetterCount('1À2Æ3Ø', Number.POSITIVE_INFINITY)).to.equal(false);
            });

            it('Should return false when maximum count parameter is negative infinity', () => {
                expect(UtilityEngine.hasUpperCaseLetterCount('1À2Æ3Ø', Number.NEGATIVE_INFINITY)).to.equal(false);
            });
        });

        describe('#hasLowerCaseLetterCount(value, minimumCount, MAXIMUMCOUNT)', function() {
            it('Should return true when maximum count parameter is undefined', () => {
                expect(UtilityEngine.hasUpperCaseLetterCount('1À2Æ3Ø ', undefined, undefined)).to.equal(true);
            });

            it('Should return true when maximum count parameter is just small enough', () => {
                expect(UtilityEngine.hasUpperCaseLetterCount('1À2Æ3Ø ', undefined, 3)).to.equal(true);
            });

            it('Should return true when maximum count parameter is big enough', () => {
                expect(UtilityEngine.hasUpperCaseLetterCount('1À2Æ3Ø ', undefined, 4)).to.equal(true);
            });

            it('Should return true when maximum and minimum count parameters are zero', () => {
                expect(UtilityEngine.hasUpperCaseLetterCount('0', 0, 0)).to.equal(true);
            });

            it('Should return true when maximum count parameter is positive infinity', () => {
                expect(UtilityEngine.hasUpperCaseLetterCount('1À2Æ3Ø', undefined, Number.POSITIVE_INFINITY)).to.equal(true);
            });


            it('Should return false when maximum count parameter is too small', () => {
                expect(UtilityEngine.hasUpperCaseLetterCount('1À2Æ3Ø', undefined, 2)).to.equal(false);
            });

            it('Should return false when maximum count parameter is smaller than minimum count', () => {
                expect(UtilityEngine.hasUpperCaseLetterCount('1À2Æ3Ø', 3, 2)).to.equal(false);
            });

            it('Should return false when maximum count parameter is null', () => {
                expect(UtilityEngine.hasUpperCaseLetterCount('1À2Æ3Ø', undefined, null)).to.equal(false);
            });

            it('Should return false when maximum count parameter is true', () => {
                expect(UtilityEngine.hasUpperCaseLetterCount('1À2Æ3Ø', undefined, true)).to.equal(false);
            });

            it('Should return false when maximum count parameter is false', () => {
                expect(UtilityEngine.hasUpperCaseLetterCount('1À2Æ3Ø', undefined, false)).to.equal(false);
            });

            it('Should return false when maximum count parameter is an object', () => {
                expect(UtilityEngine.hasUpperCaseLetterCount('1À2Æ3Ø', undefined, {})).to.equal(false);
            });

            it('Should return false when maximum count parameter is a string', () => {
                expect(UtilityEngine.hasUpperCaseLetterCount('1À2Æ3Ø', undefined, 'string')).to.equal(false);
            });

            it('Should return false when maximum count parameter is an array', () => {
                expect(UtilityEngine.hasUpperCaseLetterCount('1À2Æ3Ø', undefined, [])).to.equal(false);
            });

            it('Should return false when maximum count parameter is a function', () => {
                expect(UtilityEngine.hasUpperCaseLetterCount('1À2Æ3Ø', undefined, function() {})).to.equal(false);
            });

            it('Should return false when maximum count parameter negative number', () => {
                expect(UtilityEngine.hasUpperCaseLetterCount('1À2Æ3Ø ', undefined, -1)).to.equal(false);
            });

            it('Should return false when maximum count parameter is negative infinity', () => {
                expect(UtilityEngine.hasUpperCaseLetterCount('1À2Æ3Ø', undefined, Number.NEGATIVE_INFINITY)).to.equal(false);
            });
        });
    });

    // ╔═╗   ╔═╗╔═══════╗╔═══════╗         ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═╗               ╔═══════╗╔═╗   ╔═╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗         ╔═══════╗╔═══════╗╔═╗   ╔═╗╔════╗╔═╗╔═══════╗
    // ║ ║   ║ ║║ ╔═══╗ ║║ ╔═════╝         ║ ╔═════╝║ ╔═══╗ ║║ ╔═════╝║ ╔═════╝╚══╗ ╔══╝║ ╔═══╗ ║║ ║               ║ ╔═════╝║ ║   ║ ║║ ╔═══╗ ║║ ╔═══╗ ║║ ╔═══╗ ║║ ╔═════╝╚══╗ ╔══╝║ ╔═════╝║ ╔═══╗ ║         ║ ╔═════╝║ ╔═══╗ ║║ ║   ║ ║║ ╔╗ ║║ ║╚══╗ ╔══╝
    // ║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═════╗╔═══════╗║ ╚═════╗║ ╚═══╝ ║║ ╚═════╗║ ║         ║ ║   ║ ╚═══╝ ║║ ║      ╔═══════╗║ ║      ║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═══╝ ║║ ║         ║ ║   ║ ╚═════╗║ ╚═══╝ ║╔═══════╗║ ║      ║ ║   ║ ║║ ║   ║ ║║ ║║ ║║ ║   ║ ║
    // ║ ╔═══╗ ║║ ╔═══╗ ║╚═════╗ ║╚═══════╝╚═════╗ ║║ ╔═════╝║ ╔═════╝║ ║         ║ ║   ║ ╔═══╗ ║║ ║      ╚═══════╝║ ║      ║ ╔═══╗ ║║ ╔═══╗ ║║ ╔═╗ ╔═╝║ ╔═══╗ ║║ ║         ║ ║   ║ ╔═════╝║ ╔═╗ ╔═╝╚═══════╝║ ║      ║ ║   ║ ║║ ║   ║ ║║ ║║ ║║ ║   ║ ║
    // ║ ║   ║ ║║ ║   ║ ║╔═════╝ ║         ╔═════╝ ║║ ║      ║ ╚═════╗║ ╚═════╗╔══╝ ╚══╗║ ║   ║ ║║ ╚═════╗         ║ ╚═════╗║ ║   ║ ║║ ║   ║ ║║ ║ ║ ╚═╗║ ║   ║ ║║ ╚═════╗   ║ ║   ║ ╚═════╗║ ║ ║ ╚═╗         ║ ╚═════╗║ ╚═══╝ ║║ ╚═══╝ ║║ ║║ ╚╝ ║   ║ ║
    // ╚═╝   ╚═╝╚═╝   ╚═╝╚═══════╝         ╚═══════╝╚═╝      ╚═══════╝╚═══════╝╚═══════╝╚═╝   ╚═╝╚═══════╝         ╚═══════╝╚═╝   ╚═╝╚═╝   ╚═╝╚═╝ ╚═══╝╚═╝   ╚═╝╚═══════╝   ╚═╝   ╚═══════╝╚═╝ ╚═══╝         ╚═══════╝╚═══════╝╚═══════╝╚═╝╚════╝   ╚═╝

    describe('#hasSpecialCharacterCount(value, minimumCount, maximumCount)', function() {
        describe('#hasSpecialCharacterCount(VALUE, minimumCount, maximumCount)', function() {
            it('Should return true when value is special characters', () => {
                expect(UtilityEngine.hasSpecialCharacterCount('!')).to.equal(true);
            });

            it('Should return true when value is special characters', () => {
                expect(UtilityEngine.hasSpecialCharacterCount('.:;•°×÷‰<>~`^!?(){}[]!@#$%$^&*()_шФ-+"/|\\\'')).to.equal(true);
            });

            it('Should return true when value is a sentence', () => {
                expect(UtilityEngine.hasSpecialCharacterCount('No more half-measures.')).to.equal(true);
            });

            it('Should return true when value is mixed characters', () => {
                expect(UtilityEngine.hasSpecialCharacterCount('123 ABC abc $#& .!?')).to.equal(true);
            });


            it('Should return false when value is an empty string', () => {
                expect(UtilityEngine.hasSpecialCharacterCount('')).to.equal(false);
            });

            it('Should return false when value is a whitespace character', () => {
                expect(UtilityEngine.hasSpecialCharacterCount(' ')).to.equal(false);
            });

            it('Should return false when value is a lower case letter character', () => {
                expect(UtilityEngine.hasSpecialCharacterCount('a')).to.equal(false);
            });

            it('Should return false when value is an accented lower case letter character', () => {
                expect(UtilityEngine.hasSpecialCharacterCount('á')).to.equal(false);
            });

            it('Should return false when value is an upper case letter character', () => {
                expect(UtilityEngine.hasSpecialCharacterCount('A')).to.equal(false);
            });

            it('Should return false when value is an accented upper case letter character', () => {
                expect(UtilityEngine.hasSpecialCharacterCount('À')).to.equal(false);
            });

            it('Should return false when value is numerical characters', () => {
                expect(UtilityEngine.hasSpecialCharacterCount('0123456789')).to.equal(false);
            });

            it('Should return false when value is lower case letter characters', () => {
                expect(UtilityEngine.hasSpecialCharacterCount('abcdefghijklmnopqrstuvwxyz')).to.equal(false);
            });

            it('Should return false when value is lower case accented letter characters', () => {
                expect(UtilityEngine.hasSpecialCharacterCount('àáâäæãåāèéêëēėęôöòóœøōõ')).to.equal(false);
            });

            it('Should return false when value is upper case letter characters', () => {
                expect(UtilityEngine.hasSpecialCharacterCount('ABCDEFGHIJKLMNOPQRSTUVWXYZ')).to.equal(false);
            });

            it('Should return false when value has upper case accented letter characters', () => {
                expect(UtilityEngine.hasSpecialCharacterCount('ØŌÕ')).to.equal(false);
            });

            it('Should return false when value is true', () => {
                expect(UtilityEngine.hasSpecialCharacterCount(true)).to.equal(false);
            });

            it('Should return false when value is false', () => {
                expect(UtilityEngine.hasSpecialCharacterCount(false)).to.equal(false);
            });

            it('Should return false when value is null', () => {
                expect(UtilityEngine.hasSpecialCharacterCount(null)).to.equal(false);
            });

            it('Should return false when value is undefined', () => {
                expect(UtilityEngine.hasSpecialCharacterCount(undefined)).to.equal(false);
            });

            it('Should return false when value is an object', () => {
                expect(UtilityEngine.hasSpecialCharacterCount({})).to.equal(false);
            });

            it('Should return false when value is a number', () => {
                expect(UtilityEngine.hasSpecialCharacterCount(0)).to.equal(false);
            });

            it('Should return false when value is an array', () => {
                expect(UtilityEngine.hasSpecialCharacterCount([])).to.equal(false);
            });

            it('Should return false when value is a function', () => {
                expect(UtilityEngine.hasSpecialCharacterCount(function() {})).to.equal(false);
            });
        });

        describe('#hasSpecialCharacterCount(value, MINIMUMCOUNT, maximumCount)', function() {
            it('Should return true when minimum count parameter is undefined', () => {
                expect(UtilityEngine.hasSpecialCharacterCount('1!2$3@', undefined)).to.equal(true);
            });

            it('Should return true when minimum count parameter is small enough', () => {
                expect(UtilityEngine.hasSpecialCharacterCount('1!2$3@', 1)).to.equal(true);
            });

            it('Should return true when minimum count parameter is big enough', () => {
                expect(UtilityEngine.hasSpecialCharacterCount('1!2$3@', 2)).to.equal(true);
            });

            it('Should return true when minimum count parameter is at minimum', () => {
                expect(UtilityEngine.hasSpecialCharacterCount('1!2$3@', 0)).to.equal(true);
            });

            it('Should return true when minimum count parameter is at maximum', () => {
                expect(UtilityEngine.hasSpecialCharacterCount('1!2$3@', 3)).to.equal(true);
            });

            it('Should return true when minimum count parameter is zero', () => {
                expect(UtilityEngine.hasSpecialCharacterCount('1!2$3@', 0)).to.equal(true);
            });


            it('Should return false when minimum count parameter is too big', () => {
                expect(UtilityEngine.hasSpecialCharacterCount('1!2$3@', 4)).to.equal(false);
            });

            it('Should return false when minimum count parameter is bigger than maximum count', () => {
                expect(UtilityEngine.hasSpecialCharacterCount('1!2$3@', 4, 3)).to.equal(false);
            });

            it('Should return false when minimum count parameter is null', () => {
                expect(UtilityEngine.hasSpecialCharacterCount('1!2$3@', null)).to.equal(false);
            });

            it('Should return false when minimum count parameter is true', () => {
                expect(UtilityEngine.hasSpecialCharacterCount('1!2$3@', true)).to.equal(false);
            });

            it('Should return false when minimum count parameter is false', () => {
                expect(UtilityEngine.hasSpecialCharacterCount('1!2$3@', false)).to.equal(false);
            });

            it('Should return false when minimum count parameter is an object', () => {
                expect(UtilityEngine.hasSpecialCharacterCount('1!2$3@', {})).to.equal(false);
            });

            it('Should return false when minimum count parameter is a string', () => {
                expect(UtilityEngine.hasSpecialCharacterCount('1!2$3@', 'string')).to.equal(false);
            });

            it('Should return false when minimum count parameter is an array', () => {
                expect(UtilityEngine.hasSpecialCharacterCount('1!2$3@', [])).to.equal(false);
            });

            it('Should return false when minimum count parameter is a function', () => {
                expect(UtilityEngine.hasSpecialCharacterCount('1!2$3@', function() {})).to.equal(false);
            });

            it('Should return false when minimum count parameter negative number', () => {
                expect(UtilityEngine.hasSpecialCharacterCount('1!2$3@', -1)).to.equal(false);
            });

            it('Should return false when maximum count parameter is positive infinity', () => {
                expect(UtilityEngine.hasSpecialCharacterCount('1!2$3@', Number.POSITIVE_INFINITY)).to.equal(false);
            });

            it('Should return false when maximum count parameter is negative infinity', () => {
                expect(UtilityEngine.hasSpecialCharacterCount('1!2$3@', Number.NEGATIVE_INFINITY)).to.equal(false);
            });
        });

        describe('#hasSpecialCharacterCount(value, minimumCount, MAXIMUMCOUNT)', function() {
            it('Should return true when maximum count parameter is undefined', () => {
                expect(UtilityEngine.hasSpecialCharacterCount('1!2$3@ ', undefined, undefined)).to.equal(true);
            });

            it('Should return true when maximum count parameter is just small enough', () => {
                expect(UtilityEngine.hasSpecialCharacterCount('1!2$3@ ', undefined, 3)).to.equal(true);
            });

            it('Should return true when maximum count parameter is big enough', () => {
                expect(UtilityEngine.hasSpecialCharacterCount('1!2$3@ ', undefined, 4)).to.equal(true);
            });

            it('Should return true when maximum and minimum count parameters are zero', () => {
                expect(UtilityEngine.hasSpecialCharacterCount('0', 0, 0)).to.equal(true);
            });

            it('Should return true when maximum count parameter is positive infinity', () => {
                expect(UtilityEngine.hasSpecialCharacterCount('1!2$3@', undefined, Number.POSITIVE_INFINITY)).to.equal(true);
            });


            it('Should return false when maximum count parameter is too small', () => {
                expect(UtilityEngine.hasSpecialCharacterCount('1!2$3@', undefined, 2)).to.equal(false);
            });

            it('Should return false when maximum count parameter is smaller than minimum count', () => {
                expect(UtilityEngine.hasSpecialCharacterCount('1!2$3@', 3, 2)).to.equal(false);
            });

            it('Should return false when maximum count parameter is null', () => {
                expect(UtilityEngine.hasSpecialCharacterCount('1!2$3@', undefined, null)).to.equal(false);
            });

            it('Should return false when maximum count parameter is true', () => {
                expect(UtilityEngine.hasSpecialCharacterCount('1À2Æ3Ø', undefined, true)).to.equal(false);
            });

            it('Should return false when maximum count parameter is false', () => {
                expect(UtilityEngine.hasSpecialCharacterCount('1!2$3@', undefined, false)).to.equal(false);
            });

            it('Should return false when maximum count parameter is an object', () => {
                expect(UtilityEngine.hasSpecialCharacterCount('1!2$3@', undefined, {})).to.equal(false);
            });

            it('Should return false when maximum count parameter is a string', () => {
                expect(UtilityEngine.hasSpecialCharacterCount('1!2$3@', undefined, 'string')).to.equal(false);
            });

            it('Should return false when maximum count parameter is an array', () => {
                expect(UtilityEngine.hasSpecialCharacterCount('1!2$3@', undefined, [])).to.equal(false);
            });

            it('Should return false when maximum count parameter is a function', () => {
                expect(UtilityEngine.hasSpecialCharacterCount('1!2$3@', undefined, function() {})).to.equal(false);
            });

            it('Should return false when maximum count parameter negative number', () => {
                expect(UtilityEngine.hasSpecialCharacterCount('1!2$3@ ', undefined, -1)).to.equal(false);
            });

            it('Should return false when maximum count parameter is negative infinity', () => {
                expect(UtilityEngine.hasSpecialCharacterCount('1!2$3@', undefined, Number.NEGATIVE_INFINITY)).to.equal(false);
            });
        });
    });
});
