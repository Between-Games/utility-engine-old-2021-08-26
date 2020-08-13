// ╔═╗╔═╗╔═╗╔═╗   ╔═╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗   ╔═══════╗╔═══════╗╔═══════╗╔═══════╗   ╔═══════╗╔═══════╗╔═══════╗
// ║ ║║ ║║ ║║ ║   ║ ║╚══╗ ╔══╝╚══╗ ╔══╝║ ╔═════╝║ ╔═════╝║ ╔═══╗ ║║ ╔═══╗ ║║ ╔═════╝║ ╔═════╝   ╚══╗ ╔══╝║ ╔═════╝║ ╔═════╝╚══╗ ╔══╝   ║ ╔╗ ╔╗ ║╚═══╗ ╔═╝║ ╔═════╝
// ║ ║║ ║║ ║║ ╚═══╝ ║   ║ ║      ║ ║   ║ ╚═════╗║ ╚═════╗║ ╚═══╝ ║║ ╚═══╝ ║║ ║      ║ ╚═════╗      ║ ║   ║ ╚═════╗║ ╚═════╗   ║ ║      ║ ║║ ║║ ║    ║ ║  ║ ╚═════╗
// ║ ║║ ║║ ║║ ╔═══╗ ║   ║ ║      ║ ║   ║ ╔═════╝╚═════╗ ║║ ╔═════╝║ ╔═══╗ ║║ ║      ║ ╔═════╝      ║ ║   ║ ╔═════╝╚═════╗ ║   ║ ║      ║ ║║ ║║ ║    ║ ║  ╚═════╗ ║
// ║ ╚╝ ╚╝ ║║ ║   ║ ║╔══╝ ╚══╗   ║ ║   ║ ╚═════╗╔═════╝ ║║ ║      ║ ║   ║ ║║ ╚═════╗║ ╚═════╗╔═╗   ║ ║   ║ ╚═════╗╔═════╝ ║   ║ ║   ╔═╗║ ║║ ║║ ║╔═══╝ ║  ╔═════╝ ║
// ╚═══════╝╚═╝   ╚═╝╚═══════╝   ╚═╝   ╚═══════╝╚═══════╝╚═╝      ╚═╝   ╚═╝╚═══════╝╚═══════╝╚═╝   ╚═╝   ╚═══════╝╚═══════╝   ╚═╝   ╚═╝╚═╝╚═╝╚═╝╚═════╝  ╚═══════╝

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

// ╔═╗╔═╗╔═╗╔═╗   ╔═╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗
// ║ ║║ ║║ ║║ ║   ║ ║╚══╗ ╔══╝╚══╗ ╔══╝║ ╔═════╝║ ╔═════╝║ ╔═══╗ ║║ ╔═══╗ ║║ ╔═════╝║ ╔═════╝
// ║ ║║ ║║ ║║ ╚═══╝ ║   ║ ║      ║ ║   ║ ╚═════╗║ ╚═════╗║ ╚═══╝ ║║ ╚═══╝ ║║ ║      ║ ╚═════╗
// ║ ║║ ║║ ║║ ╔═══╗ ║   ║ ║      ║ ║   ║ ╔═════╝╚═════╗ ║║ ╔═════╝║ ╔═══╗ ║║ ║      ║ ╔═════╝
// ║ ╚╝ ╚╝ ║║ ║   ║ ║╔══╝ ╚══╗   ║ ║   ║ ╚═════╗╔═════╝ ║║ ║      ║ ║   ║ ║║ ╚═════╗║ ╚═════╗
// ╚═══════╝╚═╝   ╚═╝╚═══════╝   ╚═╝   ╚═══════╝╚═══════╝╚═╝      ╚═╝   ╚═╝╚═══════╝╚═══════╝

describe('Whitespace', function() {
    // ╔═══════╗╔═══════╗         ╔═╗╔═╗╔═╗╔═╗   ╔═╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗
    // ╚══╗ ╔══╝║ ╔═════╝         ║ ║║ ║║ ║║ ║   ║ ║╚══╗ ╔══╝╚══╗ ╔══╝║ ╔═════╝║ ╔═════╝║ ╔═══╗ ║║ ╔═══╗ ║║ ╔═════╝║ ╔═════╝
    //    ║ ║   ║ ╚═════╗╔═══════╗║ ║║ ║║ ║║ ╚═══╝ ║   ║ ║      ║ ║   ║ ╚═════╗║ ╚═════╗║ ╚═══╝ ║║ ╚═══╝ ║║ ║      ║ ╚═════╗
    //    ║ ║   ╚═════╗ ║╚═══════╝║ ║║ ║║ ║║ ╔═══╗ ║   ║ ║      ║ ║   ║ ╔═════╝╚═════╗ ║║ ╔═════╝║ ╔═══╗ ║║ ║      ║ ╔═════╝
    // ╔══╝ ╚══╗╔═════╝ ║         ║ ╚╝ ╚╝ ║║ ║   ║ ║╔══╝ ╚══╗   ║ ║   ║ ╚═════╗╔═════╝ ║║ ║      ║ ║   ║ ║║ ╚═════╗║ ╚═════╗
    // ╚═══════╝╚═══════╝         ╚═══════╝╚═╝   ╚═╝╚═══════╝   ╚═╝   ╚═══════╝╚═══════╝╚═╝      ╚═╝   ╚═╝╚═══════╝╚═══════╝

    describe('#isWhitespace(value, minimumLength, maximumLength)', function() {
        describe('#isWhitespace(VALUE, minimumLength, maximumLength)', function() {

        });

        describe('#isWhitespace(value, MINIMUMLENGTH, maximumLength)', function() {

        });

        describe('#isWhitespace(value, minimumLength, MAXIMUMLENGTH)', function() {

        });
    });

    // ╔═╗   ╔═╗╔═══════╗╔═══════╗         ╔═╗╔═╗╔═╗╔═╗   ╔═╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗
    // ║ ║   ║ ║║ ╔═══╗ ║║ ╔═════╝         ║ ║║ ║║ ║║ ║   ║ ║╚══╗ ╔══╝╚══╗ ╔══╝║ ╔═════╝║ ╔═════╝║ ╔═══╗ ║║ ╔═══╗ ║║ ╔═════╝║ ╔═════╝║ ╔═════╝
    // ║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═════╗╔═══════╗║ ║║ ║║ ║║ ╚═══╝ ║   ║ ║      ║ ║   ║ ╚═════╗║ ╚═════╗║ ╚═══╝ ║║ ╚═══╝ ║║ ║      ║ ╚═════╗║ ╚═════╗
    // ║ ╔═══╗ ║║ ╔═══╗ ║╚═════╗ ║╚═══════╝║ ║║ ║║ ║║ ╔═══╗ ║   ║ ║      ║ ║   ║ ╔═════╝╚═════╗ ║║ ╔═════╝║ ╔═══╗ ║║ ║      ║ ╔═════╝╚═════╗ ║
    // ║ ║   ║ ║║ ║   ║ ║╔═════╝ ║         ║ ╚╝ ╚╝ ║║ ║   ║ ║╔══╝ ╚══╗   ║ ║   ║ ╚═════╗╔═════╝ ║║ ║      ║ ║   ║ ║║ ╚═════╗║ ╚═════╗╔═════╝ ║
    // ╚═╝   ╚═╝╚═╝   ╚═╝╚═══════╝         ╚═══════╝╚═╝   ╚═╝╚═══════╝   ╚═╝   ╚═══════╝╚═══════╝╚═╝      ╚═╝   ╚═╝╚═══════╝╚═══════╝╚═══════╝

    describe('#hasWhitespaces(value, minimumCount, maximumCount)', function() {
        describe('#hasWhitespaces(VALUE, minimumCount, maximumCount)', function() {
            it('Should return true when value is whitespace character', () => {
                expect(UtilityEngine.hasWhitespaces(' ')).to.equal(true);
            });

            it('Should return true when value is whitespace characters', () => {
                expect(UtilityEngine.hasWhitespaces('  ')).to.equal(true);
            });

            it('Should return true when value is mixed characters', () => {
                expect(UtilityEngine.hasWhitespaces('123 ABC abc $#& .!?')).to.equal(true);
            });

            it('Should return true when value is a sentence', () => {
                expect(UtilityEngine.hasWhitespaces('No more half-measures')).to.equal(true);
            });


            it('Should return false when value is an empty string', () => {
                expect(UtilityEngine.hasWhitespaces('')).to.equal(false);
            });

            it('Should return false when value is lower case letter characters', () => {
                expect(UtilityEngine.hasWhitespaces('abcdefghijklmnopqrstuvwxyz')).to.equal(false);
            });

            it('Should return false when value is upper case letter characters', () => {
                expect(UtilityEngine.hasWhitespaces('ABCDEFGHIJKLMNOPQRSTUVWXYZ')).to.equal(false);
            });

            it('Should return false when value is lower case accented letter characters', () => {
                expect(UtilityEngine.hasWhitespaces('àáâäæãåāèéêëēėęôöòóœøōõ')).to.equal(false);
            });

            it('Should return false when value has upper case accented letter characters', () => {
                expect(UtilityEngine.hasWhitespaces('ÀÁÂÄÆÃÅĀÈÉÊËĒĖĘÔÖÒÓŒØŌÕ')).to.equal(false);
            });

            it('Should return false when value is special characters', () => {
                expect(UtilityEngine.hasWhitespaces('.:;•°×÷‰<>~`^!?(){}[]!@#$%$^&*()_шФ-+"/|\\\'')).to.equal(false);
            });

            it('Should return false when value is true', () => {
                expect(UtilityEngine.hasWhitespaces(true)).to.equal(false);
            });

            it('Should return false when value is false', () => {
                expect(UtilityEngine.hasWhitespaces(false)).to.equal(false);
            });

            it('Should return false when value is null', () => {
                expect(UtilityEngine.hasWhitespaces(null)).to.equal(false);
            });

            it('Should return false when value is undefined', () => {
                expect(UtilityEngine.hasWhitespaces(undefined)).to.equal(false);
            });

            it('Should return false when value is an object', () => {
                expect(UtilityEngine.hasWhitespaces({})).to.equal(false);
            });

            it('Should return false when value is a number', () => {
                expect(UtilityEngine.hasWhitespaces(0)).to.equal(false);
            });

            it('Should return false when value is an array', () => {
                expect(UtilityEngine.hasWhitespaces([])).to.equal(false);
            });

            it('Should return false when value is a function', () => {
                expect(UtilityEngine.hasWhitespaces(function() {
                })).to.equal(false);
            });
        });

        describe('#hasWhitespaces(value, MINIMUMCOUNT, maximumCount)', function() {
            it('Should return true when minimum count parameter is undefined', () => {
                expect(UtilityEngine.hasWhitespaces('1 2 3 ', undefined)).to.equal(true);
            });

            it('Should return true when minimum count parameter is small enough', () => {
                expect(UtilityEngine.hasWhitespaces('1 2 3 ', 1)).to.equal(true);
            });

            it('Should return true when minimum count parameter is big enough', () => {
                expect(UtilityEngine.hasWhitespaces('1 2 3 ', 2)).to.equal(true);
            });

            it('Should return true when minimum count parameter is at minimum', () => {
                expect(UtilityEngine.hasWhitespaces('1 2 3 ', 0)).to.equal(true);
            });

            it('Should return true when minimum count parameter is at maximum', () => {
                expect(UtilityEngine.hasWhitespaces('1 2 3 ', 3)).to.equal(true);
            });

            it('Should return true when minimum count parameter is zero', () => {
                expect(UtilityEngine.hasWhitespaces('0', 0)).to.equal(true);
            });


            it('Should return false when minimum count parameter is too big', () => {
                expect(UtilityEngine.hasWhitespaces('1 2 3 ', 4)).to.equal(false);
            });

            it('Should return false when minimum count parameter is bigger than maximum count', () => {
                expect(UtilityEngine.hasWhitespaces('1 2 3 ', 4, 3)).to.equal(false);
            });

            it('Should return false when minimum count parameter is null', () => {
                expect(UtilityEngine.hasWhitespaces('1 2 3 ', null)).to.equal(false);
            });

            it('Should return false when minimum count parameter is true', () => {
                expect(UtilityEngine.hasWhitespaces('1 2 3 ', true)).to.equal(false);
            });

            it('Should return false when minimum count parameter is false', () => {
                expect(UtilityEngine.hasWhitespaces('1 2 3 ', false)).to.equal(false);
            });

            it('Should return false when minimum count parameter is an object', () => {
                expect(UtilityEngine.hasWhitespaces('1 2 3 ', {})).to.equal(false);
            });

            it('Should return false when minimum count parameter is a string', () => {
                expect(UtilityEngine.hasWhitespaces('1 2 3 ', 'string')).to.equal(false);
            });

            it('Should return false when minimum count parameter is an array', () => {
                expect(UtilityEngine.hasWhitespaces('1 2 3 ', [])).to.equal(false);
            });

            it('Should return false when minimum count parameter is a function', () => {
                expect(UtilityEngine.hasWhitespaces('1 2 3 ', function() {})).to.equal(false);
            });

            it('Should return false when minimum count parameter negative number', () => {
                expect(UtilityEngine.hasWhitespaces('1 2 3 ', -1)).to.equal(false);
            });

            it('Should return false when maximum count parameter is positive infinity', () => {
                expect(UtilityEngine.hasWhitespaces('1 2 3 ', Number.POSITIVE_INFINITY)).to.equal(false);
            });

            it('Should return false when maximum count parameter is negative infinity', () => {
                expect(UtilityEngine.hasWhitespaces('1 2 3 ', Number.NEGATIVE_INFINITY)).to.equal(false);
            });
        });

        describe('#hasWhitespaces(value, minimumCount, MAXIMUMCOUNT)', function() {
            it('Should return true when maximum count parameter is undefined', () => {
                expect(UtilityEngine.hasWhitespaces('1 2 3 ', undefined, undefined)).to.equal(true);
            });

            it('Should return true when maximum count parameter is just small enough', () => {
                expect(UtilityEngine.hasWhitespaces('1 2 3 ', undefined, 3)).to.equal(true);
            });

            it('Should return true when maximum count parameter is big enough', () => {
                expect(UtilityEngine.hasWhitespaces('1 2 3 ', undefined, 4)).to.equal(true);
            });

            it('Should return true when maximum and minimum count parameters are zero', () => {
                expect(UtilityEngine.hasWhitespaces('0', 0, 0)).to.equal(true);
            });


            it('Should return true when maximum count parameter is positive infinity', () => {
                expect(UtilityEngine.hasWhitespaces('1 2 3 ', undefined, Number.POSITIVE_INFINITY)).to.equal(true);
            });


            it('Should return false when maximum count parameter is too small', () => {
                expect(UtilityEngine.hasWhitespaces('1 2 3 ', undefined, 2)).to.equal(false);
            });

            it('Should return false when maximum count parameter is smaller than minimum count', () => {
                expect(UtilityEngine.hasWhitespaces('1 2 3 ', 4, 3)).to.equal(false);
            });

            it('Should return false when maximum count parameter is null', () => {
                expect(UtilityEngine.hasWhitespaces('1 2 3 ', undefined, null)).to.equal(false);
            });

            it('Should return false when maximum count parameter is true', () => {
                expect(UtilityEngine.hasWhitespaces('1 2 3 ', undefined, true)).to.equal(false);
            });

            it('Should return false when maximum count parameter is false', () => {
                expect(UtilityEngine.hasWhitespaces('1 2 3 ', undefined, false)).to.equal(false);
            });

            it('Should return false when maximum count parameter is an object', () => {
                expect(UtilityEngine.hasWhitespaces('1 2 3 ', undefined, {})).to.equal(false);
            });

            it('Should return false when maximum count parameter is a string', () => {
                expect(UtilityEngine.hasWhitespaces('1 2 3 ', undefined, 'string')).to.equal(false);
            });

            it('Should return false when maximum count parameter is an array', () => {
                expect(UtilityEngine.hasWhitespaces('1 2 3 ', undefined, [])).to.equal(false);
            });

            it('Should return false when maximum count parameter is a function', () => {
                expect(UtilityEngine.hasWhitespaces('1 2 3 ', undefined, function() {})).to.equal(false);
            });

            it('Should return false when maximum count parameter negative number', () => {
                expect(UtilityEngine.hasWhitespaces('1 2 3 ', undefined, -1)).to.equal(false);
            });

            it('Should return false when maximum count parameter is negative infinity', () => {
                expect(UtilityEngine.hasWhitespaces('1 2 3 ', undefined, Number.NEGATIVE_INFINITY)).to.equal(false);
            });
        });
    });
});
