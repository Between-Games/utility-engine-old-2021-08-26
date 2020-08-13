// ╔═╗      ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗   ╔═══════╗╔═══════╗╔═══════╗╔═══════╗   ╔═══════╗╔═══════╗╔═══════╗
// ║ ║      ║ ╔═════╝╚══╗ ╔══╝╚══╗ ╔══╝║ ╔═════╝║ ╔═══╗ ║   ╚══╗ ╔══╝║ ╔═════╝║ ╔═════╝╚══╗ ╔══╝   ║ ╔╗ ╔╗ ║╚═══╗ ╔═╝║ ╔═════╝
// ║ ║      ║ ╚═════╗   ║ ║      ║ ║   ║ ╚═════╗║ ╚═══╝ ║      ║ ║   ║ ╚═════╗║ ╚═════╗   ║ ║      ║ ║║ ║║ ║    ║ ║  ║ ╚═════╗
// ║ ║      ║ ╔═════╝   ║ ║      ║ ║   ║ ╔═════╝║ ╔═╗ ╔═╝      ║ ║   ║ ╔═════╝╚═════╗ ║   ║ ║      ║ ║║ ║║ ║    ║ ║  ╚═════╗ ║
// ║ ╚═════╗║ ╚═════╗   ║ ║      ║ ║   ║ ╚═════╗║ ║ ║ ╚═╗╔═╗   ║ ║   ║ ╚═════╗╔═════╝ ║   ║ ║   ╔═╗║ ║║ ║║ ║╔═══╝ ║  ╔═════╝ ║
// ╚═══════╝╚═══════╝   ╚═╝      ╚═╝   ╚═══════╝╚═╝ ╚═══╝╚═╝   ╚═╝   ╚═══════╝╚═══════╝   ╚═╝   ╚═╝╚═╝╚═╝╚═╝╚═════╝  ╚═══════╝

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

// ╔═╗      ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗
// ║ ║      ║ ╔═════╝╚══╗ ╔══╝╚══╗ ╔══╝║ ╔═════╝║ ╔═══╗ ║
// ║ ║      ║ ╚═════╗   ║ ║      ║ ║   ║ ╚═════╗║ ╚═══╝ ║
// ║ ║      ║ ╔═════╝   ║ ║      ║ ║   ║ ╔═════╝║ ╔═╗ ╔═╝
// ║ ╚═════╗║ ╚═════╗   ║ ║      ║ ║   ║ ╚═════╗║ ║ ║ ╚═╗
// ╚═══════╝╚═══════╝   ╚═╝      ╚═╝   ╚═══════╝╚═╝ ╚═══╝

describe('Letter', function() {
    // ╔═══════╗╔═══════╗         ╔═╗      ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗
    // ╚══╗ ╔══╝║ ╔═════╝         ║ ║      ║ ╔═════╝╚══╗ ╔══╝╚══╗ ╔══╝║ ╔═════╝║ ╔═══╗ ║
    //    ║ ║   ║ ╚═════╗╔═══════╗║ ║      ║ ╚═════╗   ║ ║      ║ ║   ║ ╚═════╗║ ╚═══╝ ║
    //    ║ ║   ╚═════╗ ║╚═══════╝║ ║      ║ ╔═════╝   ║ ║      ║ ║   ║ ╔═════╝║ ╔═╗ ╔═╝
    // ╔══╝ ╚══╗╔═════╝ ║         ║ ╚═════╗║ ╚═════╗   ║ ║      ║ ║   ║ ╚═════╗║ ║ ║ ╚═╗
    // ╚═══════╝╚═══════╝         ╚═══════╝╚═══════╝   ╚═╝      ╚═╝   ╚═══════╝╚═╝ ╚═══╝

    describe('#isLetter(value, minimumLength, maximumLength)', function() {
        describe('#isLetter(VALUE, minimumLength, maximumLength)', function() {
            it('Should return true when value is a lowercase letter', () => {
                expect(UtilityEngine.isLetter('a')).to.equal(true);
            });

            it('Should return true when value is an uppercase letter', () => {
                expect(UtilityEngine.isLetter('A')).to.equal(true);
            });

            it('Should return true when value is mixed letters', () => {
                expect(UtilityEngine.isLetter('aBzZ', 1, 4)).to.equal(true);
            });

            it('Should return true when value is lower case letter characters', () => {
                expect(UtilityEngine.isLetter('abcdefghijklmnopqrstuvwxyz', 1, 100)).to.equal(true);
            });

            it('Should return true when value is upper case letter characters', () => {
                expect(UtilityEngine.isLetter('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 1, 100)).to.equal(true);
            });


            it('Should return false when value is a lowercase accented letter', () => {
                expect(UtilityEngine.isLetter('à')).to.equal(false);
            });

            it('Should return false when value is a uppercase accented letter', () => {
                expect(UtilityEngine.isLetter('À')).to.equal(false);
            });

            it('Should return false when value is a whitespace character', () => {
                expect(UtilityEngine.isLetter(' ', 1, 10)).to.equal(false);
            });

            it('Should return false when value contains only non-letters', () => {
                expect(UtilityEngine.isLetter('123!@#AàÀ', 1, 10)).to.equal(false);
            });

            it('Should return false when value contains some non-letters', () => {
                expect(UtilityEngine.isLetter('aA123', 1, 10)).to.equal(false);
            });

            it('Should return false when value is numerical characters', () => {
                expect(UtilityEngine.isLetter('0123456789', 1, 100)).to.equal(false);
            });

            it('Should return false when value is lower case accented letter characters', () => {
                expect(UtilityEngine.isLetter('àáâäæãåāèéêëēėęôöòóœøōõ', 1, 100)).to.equal(false);
            });

            it('Should return false when value has upper case accented letter characters', () => {
                expect(UtilityEngine.isLetter('ÀÁÂÄÆÃÅĀÈÉÊËĒĖĘÔÖÒÓŒØŌÕ', 1, 100)).to.equal(false);
            });


            it('Should return false when value is special characters', () => {
                expect(UtilityEngine.isLetter('.:;•°×÷‰<>~`^!?(){}[]!@#$%$^&*()_шФ-+"/|\\\'', 1, 100)).to.equal(false);
            });

            it('Should return false when value is zero', () => {
                expect(UtilityEngine.isLetter(0)).to.equal(false);
            });

            it('Should return false when value is a positive number', () => {
                expect(UtilityEngine.isLetter(1)).to.equal(false);
            });

            it('Should return false when value is a negative number', () => {
                expect(UtilityEngine.isLetter(-1)).to.equal(false);
            });

            it('Should return false when value is true', () => {
                expect(UtilityEngine.isLetter(true)).to.equal(false);
            });

            it('Should return false when value is false', () => {
                expect(UtilityEngine.isLetter(false)).to.equal(false);
            });

            it('Should return false when value is null', () => {
                expect(UtilityEngine.isLetter(null)).to.equal(false);
            });
            it('Should return false when value is an object', () => {
                expect(UtilityEngine.isLetter({})).to.equal(false);
            });

            it('Should return false when value is a empty string', () => {
                expect(UtilityEngine.isLetter('')).to.equal(false);
            });

            it('Should return false when value is a filled string', () => {
                expect(UtilityEngine.isLetter('string')).to.equal(false);
            });

            it('Should return false when value is an array', () => {
                expect(UtilityEngine.isLetter([])).to.equal(false);
            });

            it('Should return false when value is a function', () => {
                expect(UtilityEngine.isLetter(function() {})).to.equal(false);
            });
        });

        describe('#isLetter(value, MINIMUMLENGTH, maximumLength)', function() {
            it('Should return true when minimum length parameter is empty', () => {
                expect(UtilityEngine.isLetter('a')).to.equal(true);
            });

            it('Should return true when minimum length parameter is undefined', () => {
                expect(UtilityEngine.isLetter('a', undefined)).to.equal(true);
            });

            it('Should return true when minimum length parameter is small enough', () => {
                expect(UtilityEngine.isLetter('abc', 2, 3)).to.equal(true);
            });

            it('Should return true when minimum length parameter is big enough', () => {
                expect(UtilityEngine.isLetter('abc', 3, 3)).to.equal(true);
            });

            it('Should return true when minimum length parameter is minimum range', () => {
                expect(UtilityEngine.isLetter('abc', 1, 3)).to.equal(true);
            });


            it('Should return false when minimum length parameter is smaller than minimum range', () => {
                expect(UtilityEngine.isLetter('abc', 0, 3)).to.equal(false);
            });

            it('Should return false when minimum length parameter is null', () => {
                expect(UtilityEngine.isLetter('abc', null, 3)).to.equal(false);
            });

            it('Should return false when minimum length parameter is true', () => {
                expect(UtilityEngine.isLetter('abc', true, 3)).to.equal(false);
            });

            it('Should return false when minimum length parameter is false', () => {
                expect(UtilityEngine.isLetter('abc', false, 3)).to.equal(false);
            });

            it('Should return false when minimum length parameter is an object', () => {
                expect(UtilityEngine.isLetter('abc', {}, 3)).to.equal(false);
            });

            it('Should return false when minimum length parameter is a string', () => {
                expect(UtilityEngine.isLetter('abc', 'string', 3)).to.equal(false);
            });

            it('Should return false when minimum length parameter is an array', () => {
                expect(UtilityEngine.isLetter('abc', [], 3)).to.equal(false);
            });

            it('Should return false when minimum length parameter is a function', () => {
                expect(UtilityEngine.isLetter('abc', function() {}, 3)).to.equal(false);
            });

            it('Should return false when minimum length parameter negative number', () => {
                expect(UtilityEngine.isLetter('abc', -1, 3)).to.equal(false);
            });

            it('Should return false when minimum length parameter is too big', () => {
                expect(UtilityEngine.isLetter('abc', 4, 3)).to.equal(false);
            });
        });

        describe('#isLetter(value, minimumLength, MAXIMUMLENGTH)', function() {
            it('Should return true when maximum length parameter is empty', () => {
                expect(UtilityEngine.isLetter('a', undefined)).to.equal(true);
            });

            it('Should return true when maximum length parameter is undefined', () => {
                expect(UtilityEngine.isLetter('a', undefined, undefined)).to.equal(true);
            });

            it('Should return true when maximum length parameter is small enough', () => {
                expect(UtilityEngine.isLetter('abc', undefined, 12)).to.equal(true);
            });

            it('Should return true when maximum length parameter is big enough', () => {
                expect(UtilityEngine.isLetter('abc', undefined, 3)).to.equal(true);
            });

            it('Should return true when maximum length parameter is minimum range', () => {
                expect(UtilityEngine.isLetter('a', undefined, 1)).to.equal(true);
            });


            it('Should return false when maximum length parameter is too small', () => {
                expect(UtilityEngine.isLetter('abc', undefined, 2)).to.equal(false);
            });

            it('Should return false when maximum length parameter negative number', () => {
                expect(UtilityEngine.isLetter('abc', undefined, -1)).to.equal(false);
            });

            it('Should return false when maximum length parameter is smaller than minimum range', () => {
                expect(UtilityEngine.isLetter('abc', undefined, 0)).to.equal(false);
            });

            it('Should return false when maximum length parameter is true', () => {
                expect(UtilityEngine.isLetter('abc', undefined, true)).to.equal(false);
            });

            it('Should return false when maximum length parameter is false', () => {
                expect(UtilityEngine.isLetter('abc', undefined, false)).to.equal(false);
            });

            it('Should return false when maximum length parameter is null', () => {
                expect(UtilityEngine.isLetter('abc', undefined, null)).to.equal(false);
            });
            it('Should return false when maximum length parameter is an object', () => {
                expect(UtilityEngine.isLetter('abc', undefined, {})).to.equal(false);
            });

            it('Should return false when maximum length parameter is a string', () => {
                expect(UtilityEngine.isLetter('abc', undefined, 'string')).to.equal(false);
            });

            it('Should return false when maximum length parameter is an array', () => {
                expect(UtilityEngine.isLetter('abc', undefined, [])).to.equal(false);
            });

            it('Should return false when maximum length parameter is a function', () => {
                expect(UtilityEngine.isLetter('abc', undefined, function() {})).to.equal(false);
            });
        });
    });

    // ╔═╗   ╔═╗╔═══════╗╔═══════╗         ╔═╗      ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗
    // ║ ║   ║ ║║ ╔═══╗ ║║ ╔═════╝         ║ ║      ║ ╔═════╝╚══╗ ╔══╝╚══╗ ╔══╝║ ╔═════╝║ ╔═══╗ ║║ ╔═════╝
    // ║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═════╗╔═══════╗║ ║      ║ ╚═════╗   ║ ║      ║ ║   ║ ╚═════╗║ ╚═══╝ ║║ ╚═════╗
    // ║ ╔═══╗ ║║ ╔═══╗ ║╚═════╗ ║╚═══════╝║ ║      ║ ╔═════╝   ║ ║      ║ ║   ║ ╔═════╝║ ╔═╗ ╔═╝╚═════╗ ║
    // ║ ║   ║ ║║ ║   ║ ║╔═════╝ ║         ║ ╚═════╗║ ╚═════╗   ║ ║      ║ ║   ║ ╚═════╗║ ║ ║ ╚═╗╔═════╝ ║
    // ╚═╝   ╚═╝╚═╝   ╚═╝╚═══════╝         ╚═══════╝╚═══════╝   ╚═╝      ╚═╝   ╚═══════╝╚═╝ ╚═══╝╚═══════╝

    describe('#hasLetters(value, minimumCount, maximumCount)', function() {
        describe('#hasLetters(VALUE, minimumCount, maximumCount)', function() {
            it('Should return true when value is a lower case letter character', () => {
                expect(UtilityEngine.hasLetters('a')).to.equal(true);
            });

            it('Should return true when value is an upper case letter character', () => {
                expect(UtilityEngine.hasLetters('A')).to.equal(true);
            });

            it('Should return true when value is lower case letter characters', () => {
                expect(UtilityEngine.hasLetters('abcdefghijklmnopqrstuvwxyz')).to.equal(true);
            });

            it('Should return true when value is upper case letter characters', () => {
                expect(UtilityEngine.hasLetters('ABCDEFGHIJKLMNOPQRSTUVWXYZ')).to.equal(true);
            });

            it('Should return true when value is a sentence', () => {
                expect(UtilityEngine.hasLetters('No more half-measures')).to.equal(true);
            });

            it('Should return true when value is mixed characters', () => {
                expect(UtilityEngine.hasLetters('123 ABC abc $#& .!?')).to.equal(true);
            });


            it('Should return false when value is an empty string', () => {
                expect(UtilityEngine.hasLetters('')).to.equal(false);
            });

            it('Should return false when value is a whitespace character', () => {
                expect(UtilityEngine.hasLetters(' ')).to.equal(false);
            });

            it('Should return false when value is an accented lower case letter character', () => {
                expect(UtilityEngine.hasLetters('à')).to.equal(false);
            });

            it('Should return false when value is an accented upper case letter character', () => {
                expect(UtilityEngine.hasLetters('À')).to.equal(false);
            });

            it('Should return false when value is numerical characters', () => {
                expect(UtilityEngine.hasLetters('0123456789')).to.equal(false);
            });

            it('Should return false when value is lower case accented letter characters', () => {
                expect(UtilityEngine.hasLetters('àáâäæãåāèéêëēėęôöòóœøōõ')).to.equal(false);
            });

            it('Should return false when value has upper case accented letter characters', () => {
                expect(UtilityEngine.hasLetters('ÀÁÂÄÆÃÅĀÈÉÊËĒĖĘÔÖÒÓŒØŌÕ')).to.equal(false);
            });

            it('Should return false when value is special characters', () => {
                expect(UtilityEngine.hasLetters('.:;•°×÷‰<>~`^!?(){}[]!@#$%$^&*()_шФ-+"/|\\\'')).to.equal(false);
            });

            it('Should return false when value is true', () => {
                expect(UtilityEngine.hasLetters(true)).to.equal(false);
            });

            it('Should return false when value is false', () => {
                expect(UtilityEngine.hasLetters(false)).to.equal(false);
            });

            it('Should return false when value is null', () => {
                expect(UtilityEngine.hasLetters(null)).to.equal(false);
            });

            it('Should return false when value is undefined', () => {
                expect(UtilityEngine.hasLetters(undefined)).to.equal(false);
            });

            it('Should return false when value is an object', () => {
                expect(UtilityEngine.hasLetters({})).to.equal(false);
            });

            it('Should return false when value is a number', () => {
                expect(UtilityEngine.hasLetters(0)).to.equal(false);
            });

            it('Should return false when value is an array', () => {
                expect(UtilityEngine.hasLetters([])).to.equal(false);
            });

            it('Should return false when value is a function', () => {
                expect(UtilityEngine.hasLetters(function() {})).to.equal(false);
            });
        });

        describe('#hasLetters(value, MINIMUMCOUNT, maximumCount)', function() {
            it('Should return true when minimum count parameter is undefined', () => {
                expect(UtilityEngine.hasLetters('AZAazÀŽàž', undefined)).to.equal(true);
            });

            it('Should return true when minimum count parameter is small enough', () => {
                expect(UtilityEngine.hasLetters('AZAazÀŽàž', 1)).to.equal(true);
            });

            it('Should return true when minimum count parameter is big enough', () => {
                expect(UtilityEngine.hasLetters('AZAazÀŽàž', 2)).to.equal(true);
            });

            it('Should return true when minimum count parameter is at minimum', () => {
                expect(UtilityEngine.hasLetters('AZAazÀŽàž', 0)).to.equal(true);
            });

            it('Should return true when minimum count parameter is at maximum', () => {
                expect(UtilityEngine.hasLetters('AZAazÀŽàž', 3)).to.equal(true);
            });

            it('Should return true when minimum count parameter is zero', () => {
                expect(UtilityEngine.hasLetters('AZAazÀŽàž', 0)).to.equal(true);
            });


            it('Should return false when minimum count parameter is too big', () => {
                expect(UtilityEngine.hasLetters('1A2Z3A', 4)).to.equal(false);
            });

            it('Should return false when minimum count parameter is bigger than maximum count', () => {
                expect(UtilityEngine.hasLetters('AZAazÀŽàž', 4, 3)).to.equal(false);
            });

            it('Should return false when minimum count parameter is null', () => {
                expect(UtilityEngine.hasLetters('AZAazÀŽàž', null)).to.equal(false);
            });

            it('Should return false when minimum count parameter is true', () => {
                expect(UtilityEngine.hasLetters('AZAazÀŽàž', true)).to.equal(false);
            });

            it('Should return false when minimum count parameter is false', () => {
                expect(UtilityEngine.hasLetters('AZAazÀŽàž', false)).to.equal(false);
            });

            it('Should return false when minimum count parameter is an object', () => {
                expect(UtilityEngine.hasLetters('AZAazÀŽàž', {})).to.equal(false);
            });

            it('Should return false when minimum count parameter is a string', () => {
                expect(UtilityEngine.hasLetters('AZAazÀŽàž', 'string')).to.equal(false);
            });

            it('Should return false when minimum count parameter is an array', () => {
                expect(UtilityEngine.hasLetters('AZAazÀŽàž', [])).to.equal(false);
            });

            it('Should return false when minimum count parameter is a function', () => {
                expect(UtilityEngine.hasLetters('AZAazÀŽàž', function() {})).to.equal(false);
            });

            it('Should return false when minimum count parameter negative number', () => {
                expect(UtilityEngine.hasLetters('AZAazÀŽàž', -1)).to.equal(false);
            });

            it('Should return false when maximum count parameter is positive infinity', () => {
                expect(UtilityEngine.hasLetters('AZAazÀŽàž', Number.POSITIVE_INFINITY)).to.equal(false);
            });

            it('Should return false when maximum count parameter is negative infinity', () => {
                expect(UtilityEngine.hasLetters('AZAazÀŽàž', Number.NEGATIVE_INFINITY)).to.equal(false);
            });
        });

        describe('#hasLetters(value, minimumCount, MAXIMUMCOUNT)', function() {
            it('Should return true when maximum count parameter is undefined', () => {
                expect(UtilityEngine.hasLetters('AZAazÀŽàž ', undefined, undefined)).to.equal(true);
            });

            it('Should return true when maximum count parameter is just small enough', () => {
                expect(UtilityEngine.hasLetters('1A2Z3A ', undefined, 3)).to.equal(true);
            });

            it('Should return true when maximum count parameter is big enough', () => {
                expect(UtilityEngine.hasLetters('1A2Z3A ', undefined, 4)).to.equal(true);
            });

            it('Should return true when maximum and minimum count parameters are zero', () => {
                expect(UtilityEngine.hasLetters('0', 0, 0)).to.equal(true);
            });

            it('Should return true when maximum count parameter is positive infinity', () => {
                expect(UtilityEngine.hasLetters('AZAazÀŽàž', undefined, Number.POSITIVE_INFINITY)).to.equal(true);
            });


            it('Should return false when maximum count parameter is too small', () => {
                expect(UtilityEngine.hasLetters('AZAazÀŽàž', undefined, 2)).to.equal(false);
            });

            it('Should return false when maximum count parameter is smaller than minimum count', () => {
                expect(UtilityEngine.hasLetters('AZAazÀŽàž', 3, 2)).to.equal(false);
            });

            it('Should return false when maximum count parameter is null', () => {
                expect(UtilityEngine.hasLetters('AZAazÀŽàž', undefined, null)).to.equal(false);
            });

            it('Should return false when maximum count parameter is true', () => {
                expect(UtilityEngine.hasLetters('AZAazÀŽàž', undefined, true)).to.equal(false);
            });

            it('Should return false when maximum count parameter is false', () => {
                expect(UtilityEngine.hasLetters('AZAazÀŽàž', undefined, false)).to.equal(false);
            });

            it('Should return false when maximum count parameter is an object', () => {
                expect(UtilityEngine.hasLetters('AZAazÀŽàž', undefined, {})).to.equal(false);
            });

            it('Should return false when maximum count parameter is a string', () => {
                expect(UtilityEngine.hasLetters('AZAazÀŽàž', undefined, 'string')).to.equal(false);
            });

            it('Should return false when maximum count parameter is an array', () => {
                expect(UtilityEngine.hasLetters('AZAazÀŽàž', undefined, [])).to.equal(false);
            });

            it('Should return false when maximum count parameter is a function', () => {
                expect(UtilityEngine.hasLetters('AZAazÀŽàž', undefined, function() {})).to.equal(false);
            });

            it('Should return false when maximum count parameter negative number', () => {
                expect(UtilityEngine.hasLetters('AZAazÀŽàž ', undefined, -1)).to.equal(false);
            });

            it('Should return false when maximum count parameter is negative infinity', () => {
                expect(UtilityEngine.hasLetters('AZAazÀŽàž', undefined, Number.NEGATIVE_INFINITY)).to.equal(false);
            });
        });
    });

    // ╔═╗   ╔═╗╔═══════╗╔═══════╗         ╔═╗      ╔═══════╗╔═╗╔═╗╔═╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗         ╔═╗      ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗
    // ║ ║   ║ ║║ ╔═══╗ ║║ ╔═════╝         ║ ║      ║ ╔═══╗ ║║ ║║ ║║ ║║ ╔═════╝║ ╔═══╗ ║║ ╔═════╝║ ╔═══╗ ║║ ╔═════╝║ ╔═════╝         ║ ║      ║ ╔═════╝╚══╗ ╔══╝╚══╗ ╔══╝║ ╔═════╝║ ╔═══╗ ║║ ╔═════╝
    // ║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═════╗╔═══════╗║ ║      ║ ║   ║ ║║ ║║ ║║ ║║ ╚═════╗║ ╚═══╝ ║║ ║      ║ ╚═══╝ ║║ ╚═════╗║ ╚═════╗╔═══════╗║ ║      ║ ╚═════╗   ║ ║      ║ ║   ║ ╚═════╗║ ╚═══╝ ║║ ╚═════╗
    // ║ ╔═══╗ ║║ ╔═══╗ ║╚═════╗ ║╚═══════╝║ ║      ║ ║   ║ ║║ ║║ ║║ ║║ ╔═════╝║ ╔═╗ ╔═╝║ ║      ║ ╔═══╗ ║╚═════╗ ║║ ╔═════╝╚═══════╝║ ║      ║ ╔═════╝   ║ ║      ║ ║   ║ ╔═════╝║ ╔═╗ ╔═╝╚═════╗ ║
    // ║ ║   ║ ║║ ║   ║ ║╔═════╝ ║         ║ ╚═════╗║ ╚═══╝ ║║ ╚╝ ╚╝ ║║ ╚═════╗║ ║ ║ ╚═╗║ ╚═════╗║ ║   ║ ║╔═════╝ ║║ ╚═════╗         ║ ╚═════╗║ ╚═════╗   ║ ║      ║ ║   ║ ╚═════╗║ ║ ║ ╚═╗╔═════╝ ║
    // ╚═╝   ╚═╝╚═╝   ╚═╝╚═══════╝         ╚═══════╝╚═══════╝╚═══════╝╚═══════╝╚═╝ ╚═══╝╚═══════╝╚═╝   ╚═╝╚═══════╝╚═══════╝         ╚═══════╝╚═══════╝   ╚═╝      ╚═╝   ╚═══════╝╚═╝ ╚═══╝╚═══════╝

    describe('#hasLowercaseLetters(value, minimumCount, maximumCount)', function() {
        describe('#hasLowercaseLetters(VALUE, minimumCount, maximumCount)', function() {
            it('Should return true when value is a lower case letter character', () => {
                expect(UtilityEngine.hasLowercaseLetters('a')).to.equal(true);
            });

            it('Should return true when value is lower case letter characters', () => {
                expect(UtilityEngine.hasLowercaseLetters('abcdefghijklmnopqrstuvwxyz')).to.equal(true);
            });


            it('Should return true when value is a sentence', () => {
                expect(UtilityEngine.hasLowercaseLetters('No more half-measures.')).to.equal(true);
            });

            it('Should return true when value is mixed characters', () => {
                expect(UtilityEngine.hasLowercaseLetters('123 ABC abc  àáâ ÀÁÂ $#& .!?')).to.equal(true);
            });


            it('Should return false when value is an empty string', () => {
                expect(UtilityEngine.hasLowercaseLetters('')).to.equal(false);
            });

            it('Should return false when value is a whitespace character', () => {
                expect(UtilityEngine.hasLowercaseLetters(' ')).to.equal(false);
            });

            it('Should return false when value is an accented lower case letter character', () => {
                expect(UtilityEngine.hasLowercaseLetters('á')).to.equal(false);
            });

            it('Should return false when value is an upper case letter character', () => {
                expect(UtilityEngine.hasLowercaseLetters('A')).to.equal(false);
            });

            it('Should return false when value is an accented upper case letter character', () => {
                expect(UtilityEngine.hasLowercaseLetters('À')).to.equal(false);
            });

            it('Should return false when value is numerical characters', () => {
                expect(UtilityEngine.hasLowercaseLetters('0123456789')).to.equal(false);
            });

            it('Should return false when value is upper case letter characters', () => {
                expect(UtilityEngine.hasLowercaseLetters('ABCDEFGHIJKLMNOPQRSTUVWXYZ')).to.equal(false);
            });

            it('Should return false when value is lower case accented letter characters', () => {
                expect(UtilityEngine.hasLowercaseLetters('àáâäæãåāèéêëēėęôöòóœøōõ')).to.equal(false);
            });

            it('Should return false when value has upper case accented letter characters', () => {
                expect(UtilityEngine.hasLowercaseLetters('ÀÁÂÄÆÃÅĀÈÉÊËĒĖĘÔÖÒÓŒØŌÕ')).to.equal(false);
            });

            it('Should return false when value is special characters', () => {
                expect(UtilityEngine.hasLowercaseLetters('.:;•°×÷‰<>~`^!?(){}[]!@#$%$^&*()_шФ-+"/|\\\'')).to.equal(false);
            });

            it('Should return false when value is true', () => {
                expect(UtilityEngine.hasLowercaseLetters(true)).to.equal(false);
            });

            it('Should return false when value is false', () => {
                expect(UtilityEngine.hasLowercaseLetters(false)).to.equal(false);
            });

            it('Should return false when value is null', () => {
                expect(UtilityEngine.hasLowercaseLetters(null)).to.equal(false);
            });

            it('Should return false when value is undefined', () => {
                expect(UtilityEngine.hasLowercaseLetters(undefined)).to.equal(false);
            });

            it('Should return false when value is an object', () => {
                expect(UtilityEngine.hasLowercaseLetters({})).to.equal(false);
            });

            it('Should return false when value is a number', () => {
                expect(UtilityEngine.hasLowercaseLetters(0)).to.equal(false);
            });

            it('Should return false when value is an array', () => {
                expect(UtilityEngine.hasLowercaseLetters([])).to.equal(false);
            });

            it('Should return false when value is a function', () => {
                expect(UtilityEngine.hasLowercaseLetters(function() {})).to.equal(false);
            });
        });

        describe('#hasLowercaseLetters(value, MINIMUMCOUNT, maximumCount)', function() {
            it('Should return true when minimum count parameter is undefined', () => {
                expect(UtilityEngine.hasLowercaseLetters('1a2b3c', undefined)).to.equal(true);
            });

            it('Should return true when minimum count parameter is small enough', () => {
                expect(UtilityEngine.hasLowercaseLetters('1a2b3c', 1)).to.equal(true);
            });

            it('Should return true when minimum count parameter is big enough', () => {
                expect(UtilityEngine.hasLowercaseLetters('1a2b3c', 2)).to.equal(true);
            });

            it('Should return true when minimum count parameter is at minimum', () => {
                expect(UtilityEngine.hasLowercaseLetters('1a2b3c', 0)).to.equal(true);
            });

            it('Should return true when minimum count parameter is at maximum', () => {
                expect(UtilityEngine.hasLowercaseLetters('1a2b3c', 3)).to.equal(true);
            });

            it('Should return true when minimum count 1a2æ3ø is zero', () => {
                expect(UtilityEngine.hasLowercaseLetters('1a2b3c', 0)).to.equal(true);
            });


            it('Should return false when minimum count parameter is too big', () => {
                expect(UtilityEngine.hasLowercaseLetters('1a2b3c', 4)).to.equal(false);
            });

            it('Should return false when minimum count parameter is bigger than maximum count', () => {
                expect(UtilityEngine.hasLowercaseLetters('1a2b3c', 4, 3)).to.equal(false);
            });

            it('Should return false when minimum count parameter is null', () => {
                expect(UtilityEngine.hasLowercaseLetters('1a2b3c', null)).to.equal(false);
            });

            it('Should return false when minimum count parameter is true', () => {
                expect(UtilityEngine.hasLowercaseLetters('1a2b3c', true)).to.equal(false);
            });

            it('Should return false when minimum count parameter is false', () => {
                expect(UtilityEngine.hasLowercaseLetters('1a2b3c', false)).to.equal(false);
            });

            it('Should return false when minimum count parameter is an object', () => {
                expect(UtilityEngine.hasLowercaseLetters('1a2b3c', {})).to.equal(false);
            });

            it('Should return false when minimum count parameter is a string', () => {
                expect(UtilityEngine.hasLowercaseLetters('1a2b3c', 'string')).to.equal(false);
            });

            it('Should return false when minimum count parameter is an array', () => {
                expect(UtilityEngine.hasLowercaseLetters('1a2b3c', [])).to.equal(false);
            });

            it('Should return false when minimum count parameter is a function', () => {
                expect(UtilityEngine.hasLowercaseLetters('1a2b3c', function() {})).to.equal(false);
            });

            it('Should return false when minimum count parameter negative number', () => {
                expect(UtilityEngine.hasLowercaseLetters('1a2b3c', -1)).to.equal(false);
            });

            it('Should return false when maximum count parameter is positive infinity', () => {
                expect(UtilityEngine.hasLowercaseLetters('1a2b3c', Number.POSITIVE_INFINITY)).to.equal(false);
            });

            it('Should return false when maximum count parameter is negative infinity', () => {
                expect(UtilityEngine.hasLowercaseLetters('1a2b3c', Number.NEGATIVE_INFINITY)).to.equal(false);
            });
        });

        describe('#hasLowercaseLetters(value, minimumCount, MAXIMUMCOUNT)', function() {
            it('Should return true when maximum count parameter is undefined', () => {
                expect(UtilityEngine.hasLowercaseLetters('1a2b3c ', undefined, undefined)).to.equal(true);
            });

            it('Should return true when maximum count parameter is just small enough', () => {
                expect(UtilityEngine.hasLowercaseLetters('1a2b3c ', undefined, 3)).to.equal(true);
            });

            it('Should return true when maximum count parameter is big enough', () => {
                expect(UtilityEngine.hasLowercaseLetters('1a2b3c ', undefined, 4)).to.equal(true);
            });

            it('Should return true when maximum and minimum count parameters are zero', () => {
                expect(UtilityEngine.hasLowercaseLetters('0', 0, 0)).to.equal(true);
            });

            it('Should return true when maximum count parameter is positive infinity', () => {
                expect(UtilityEngine.hasLowercaseLetters('1a2b3c', undefined, Number.POSITIVE_INFINITY)).to.equal(true);
            });


            it('Should return false when maximum count parameter is too small', () => {
                expect(UtilityEngine.hasLowercaseLetters('1a2b3c', undefined, 2)).to.equal(false);
            });

            it('Should return false when maximum count parameter is smaller than minimum count', () => {
                expect(UtilityEngine.hasLowercaseLetters('1a2b3c', 3, 2)).to.equal(false);
            });

            it('Should return false when maximum count parameter is null', () => {
                expect(UtilityEngine.hasLowercaseLetters('1a2b3c', undefined, null)).to.equal(false);
            });

            it('Should return false when maximum count parameter is true', () => {
                expect(UtilityEngine.hasLowercaseLetters('1a2b3c', undefined, true)).to.equal(false);
            });

            it('Should return false when maximum count parameter is false', () => {
                expect(UtilityEngine.hasLowercaseLetters('1a2b3c', undefined, false)).to.equal(false);
            });

            it('Should return false when maximum count parameter is an object', () => {
                expect(UtilityEngine.hasLowercaseLetters('1a2b3c', undefined, {})).to.equal(false);
            });

            it('Should return false when maximum count parameter is a string', () => {
                expect(UtilityEngine.hasLowercaseLetters('1a2b3c', undefined, 'string')).to.equal(false);
            });

            it('Should return false when maximum count parameter is an array', () => {
                expect(UtilityEngine.hasLowercaseLetters('1a2b3c', undefined, [])).to.equal(false);
            });

            it('Should return false when maximum count parameter is a function', () => {
                expect(UtilityEngine.hasLowercaseLetters('1a2b3c', undefined, function() {})).to.equal(false);
            });

            it('Should return false when maximum count parameter negative number', () => {
                expect(UtilityEngine.hasLowercaseLetters('1a2b3c ', undefined, -1)).to.equal(false);
            });

            it('Should return false when maximum count parameter is negative infinity', () => {
                expect(UtilityEngine.hasLowercaseLetters('1a2b3c', undefined, Number.NEGATIVE_INFINITY)).to.equal(false);
            });
        });
    });

    // ╔═╗   ╔═╗╔═══════╗╔═══════╗         ╔═╗   ╔═╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗         ╔═╗      ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗
    // ║ ║   ║ ║║ ╔═══╗ ║║ ╔═════╝         ║ ║   ║ ║║ ╔═══╗ ║║ ╔═══╗ ║║ ╔═════╝║ ╔═══╗ ║║ ╔═════╝║ ╔═══╗ ║║ ╔═════╝║ ╔═════╝         ║ ║      ║ ╔═════╝╚══╗ ╔══╝╚══╗ ╔══╝║ ╔═════╝║ ╔═══╗ ║║ ╔═════╝
    // ║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═════╗╔═══════╗║ ║   ║ ║║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═════╗║ ╚═══╝ ║║ ║      ║ ╚═══╝ ║║ ╚═════╗║ ╚═════╗╔═══════╗║ ║      ║ ╚═════╗   ║ ║      ║ ║   ║ ╚═════╗║ ╚═══╝ ║║ ╚═════╗
    // ║ ╔═══╗ ║║ ╔═══╗ ║╚═════╗ ║╚═══════╝║ ║   ║ ║║ ╔═════╝║ ╔═════╝║ ╔═════╝║ ╔═╗ ╔═╝║ ║      ║ ╔═══╗ ║╚═════╗ ║║ ╔═════╝╚═══════╝║ ║      ║ ╔═════╝   ║ ║      ║ ║   ║ ╔═════╝║ ╔═╗ ╔═╝╚═════╗ ║
    // ║ ║   ║ ║║ ║   ║ ║╔═════╝ ║         ║ ╚═══╝ ║║ ║      ║ ║      ║ ╚═════╗║ ║ ║ ╚═╗║ ╚═════╗║ ║   ║ ║╔═════╝ ║║ ╚═════╗         ║ ╚═════╗║ ╚═════╗   ║ ║      ║ ║   ║ ╚═════╗║ ║ ║ ╚═╗╔═════╝ ║
    // ╚═╝   ╚═╝╚═╝   ╚═╝╚═══════╝         ╚═══════╝╚═╝      ╚═╝      ╚═══════╝╚═╝ ╚═══╝╚═══════╝╚═╝   ╚═╝╚═══════╝╚═══════╝         ╚═══════╝╚═══════╝   ╚═╝      ╚═╝   ╚═══════╝╚═╝ ╚═══╝╚═══════╝

    describe('#hasUppercaseLetters(value, minimumCount, maximumCount)', function() {
        describe('#hasUppercaseLetters(VALUE, minimumCount, maximumCount)', function() {
            it('Should return true when value is an upper case letter character', () => {
                expect(UtilityEngine.hasUppercaseLetters('A')).to.equal(true);
            });

            it('Should return true when value is upper case letter characters', () => {
                expect(UtilityEngine.hasUppercaseLetters('ABCDEFGHIJKLMNOPQRSTUVWXYZ')).to.equal(true);
            });

            it('Should return true when value is a sentence', () => {
                expect(UtilityEngine.hasUppercaseLetters('No more half-measures.')).to.equal(true);
            });

            it('Should return true when value is mixed characters', () => {
                expect(UtilityEngine.hasUppercaseLetters('123 ABC abc  àáâ ÀÁÂ $#& .!?')).to.equal(true);
            });


            it('Should return false when value is an empty string', () => {
                expect(UtilityEngine.hasUppercaseLetters('')).to.equal(false);
            });

            it('Should return false when value is a whitespace character', () => {
                expect(UtilityEngine.hasUppercaseLetters(' ')).to.equal(false);
            });

            it('Should return false when value is a lower case letter character', () => {
                expect(UtilityEngine.hasUppercaseLetters('a')).to.equal(false);
            });

            it('Should return false when value is an accented lower case letter character', () => {
                expect(UtilityEngine.hasUppercaseLetters('á')).to.equal(false);
            });

            it('Should return false when value is an accented upper case letter character', () => {
                expect(UtilityEngine.hasUppercaseLetters('À')).to.equal(false);
            });

            it('Should return false when value is numerical characters', () => {
                expect(UtilityEngine.hasUppercaseLetters('0123456789')).to.equal(false);
            });

            it('Should return false when value is lower case letter characters', () => {
                expect(UtilityEngine.hasUppercaseLetters('abcdefghijklmnopqrstuvwxyz')).to.equal(false);
            });

            it('Should return false when value is lower case accented letter characters', () => {
                expect(UtilityEngine.hasUppercaseLetters('àáâäæãåāèéêëēėęôöòóœøōõ')).to.equal(false);
            });

            it('Should return false when value has upper case accented letter characters', () => {
                expect(UtilityEngine.hasUppercaseLetters('ÀÁÂÄÆÃÅĀÈÉÊËĒĖĘÔÖÒÓŒØŌÕ')).to.equal(false);
            });

            it('Should return false when value is special characters', () => {
                expect(UtilityEngine.hasUppercaseLetters('.:;•°×÷‰<>~`^!?(){}[]!@#$%$^&*()_шФ-+"/|\\\'')).to.equal(false);
            });

            it('Should return false when value is true', () => {
                expect(UtilityEngine.hasUppercaseLetters(true)).to.equal(false);
            });

            it('Should return false when value is false', () => {
                expect(UtilityEngine.hasUppercaseLetters(false)).to.equal(false);
            });

            it('Should return false when value is null', () => {
                expect(UtilityEngine.hasUppercaseLetters(null)).to.equal(false);
            });

            it('Should return false when value is undefined', () => {
                expect(UtilityEngine.hasUppercaseLetters(undefined)).to.equal(false);
            });

            it('Should return false when value is an object', () => {
                expect(UtilityEngine.hasUppercaseLetters({})).to.equal(false);
            });

            it('Should return false when value is a number', () => {
                expect(UtilityEngine.hasUppercaseLetters(0)).to.equal(false);
            });

            it('Should return false when value is an array', () => {
                expect(UtilityEngine.hasUppercaseLetters([])).to.equal(false);
            });

            it('Should return false when value is a function', () => {
                expect(UtilityEngine.hasUppercaseLetters(function() {})).to.equal(false);
            });
        });

        describe('#hasUppercaseLetters(value, MINIMUMCOUNT, maximumCount)', function() {
            it('Should return true when minimum count parameter is undefined', () => {
                expect(UtilityEngine.hasUppercaseLetters('1A2B3C', undefined)).to.equal(true);
            });

            it('Should return true when minimum count parameter is small enough', () => {
                expect(UtilityEngine.hasUppercaseLetters('1A2B3C', 1)).to.equal(true);
            });

            it('Should return true when minimum count parameter is big enough', () => {
                expect(UtilityEngine.hasUppercaseLetters('1A2B3C', 2)).to.equal(true);
            });

            it('Should return true when minimum count parameter is at minimum', () => {
                expect(UtilityEngine.hasUppercaseLetters('1A2B3C', 0)).to.equal(true);
            });

            it('Should return true when minimum count parameter is at maximum', () => {
                expect(UtilityEngine.hasUppercaseLetters('1A2B3C', 3)).to.equal(true);
            });

            it('Should return true when minimum count parameter is zero', () => {
                expect(UtilityEngine.hasUppercaseLetters('1A2B3C', 0)).to.equal(true);
            });


            it('Should return false when minimum count parameter is too big', () => {
                expect(UtilityEngine.hasUppercaseLetters('1A2B3C', 4)).to.equal(false);
            });

            it('Should return false when minimum count parameter is bigger than maximum count', () => {
                expect(UtilityEngine.hasUppercaseLetters('1A2B3C', 4, 3)).to.equal(false);
            });

            it('Should return false when minimum count parameter is null', () => {
                expect(UtilityEngine.hasUppercaseLetters('1A2B3C', null)).to.equal(false);
            });

            it('Should return false when minimum count parameter is true', () => {
                expect(UtilityEngine.hasUppercaseLetters('1A2B3C', true)).to.equal(false);
            });

            it('Should return false when minimum count parameter is false', () => {
                expect(UtilityEngine.hasUppercaseLetters('1A2B3C', false)).to.equal(false);
            });

            it('Should return false when minimum count parameter is an object', () => {
                expect(UtilityEngine.hasUppercaseLetters('1A2B3C', {})).to.equal(false);
            });

            it('Should return false when minimum count parameter is a string', () => {
                expect(UtilityEngine.hasUppercaseLetters('1A2B3C', 'string')).to.equal(false);
            });

            it('Should return false when minimum count parameter is an array', () => {
                expect(UtilityEngine.hasUppercaseLetters('1A2B3C', [])).to.equal(false);
            });

            it('Should return false when minimum count parameter is a function', () => {
                expect(UtilityEngine.hasUppercaseLetters('1A2B3C', function() {})).to.equal(false);
            });

            it('Should return false when minimum count parameter negative number', () => {
                expect(UtilityEngine.hasUppercaseLetters('1A2B3C', -1)).to.equal(false);
            });

            it('Should return false when maximum count parameter is positive infinity', () => {
                expect(UtilityEngine.hasUppercaseLetters('1A2B3C', Number.POSITIVE_INFINITY)).to.equal(false);
            });

            it('Should return false when maximum count parameter is negative infinity', () => {
                expect(UtilityEngine.hasUppercaseLetters('1A2B3C', Number.NEGATIVE_INFINITY)).to.equal(false);
            });
        });

        describe('#hasUppercaseLetters(value, minimumCount, MAXIMUMCOUNT)', function() {
            it('Should return true when maximum count parameter is undefined', () => {
                expect(UtilityEngine.hasUppercaseLetters('1A2B3C ', undefined, undefined)).to.equal(true);
            });

            it('Should return true when maximum count parameter is just small enough', () => {
                expect(UtilityEngine.hasUppercaseLetters('1A2B3C ', undefined, 3)).to.equal(true);
            });

            it('Should return true when maximum count parameter is big enough', () => {
                expect(UtilityEngine.hasUppercaseLetters('1A2B3C ', undefined, 4)).to.equal(true);
            });

            it('Should return true when maximum and minimum count parameters are zero', () => {
                expect(UtilityEngine.hasUppercaseLetters('0', 0, 0)).to.equal(true);
            });

            it('Should return true when maximum count parameter is positive infinity', () => {
                expect(UtilityEngine.hasUppercaseLetters('1A2B3C', undefined, Number.POSITIVE_INFINITY)).to.equal(true);
            });


            it('Should return false when maximum count parameter is too small', () => {
                expect(UtilityEngine.hasUppercaseLetters('1A2B3C', undefined, 2)).to.equal(false);
            });

            it('Should return false when maximum count parameter is smaller than minimum count', () => {
                expect(UtilityEngine.hasUppercaseLetters('1A2B3C', 3, 2)).to.equal(false);
            });

            it('Should return false when maximum count parameter is null', () => {
                expect(UtilityEngine.hasUppercaseLetters('1A2B3C', undefined, null)).to.equal(false);
            });

            it('Should return false when maximum count parameter is true', () => {
                expect(UtilityEngine.hasUppercaseLetters('1A2B3C', undefined, true)).to.equal(false);
            });

            it('Should return false when maximum count parameter is false', () => {
                expect(UtilityEngine.hasUppercaseLetters('1A2B3C', undefined, false)).to.equal(false);
            });

            it('Should return false when maximum count parameter is an object', () => {
                expect(UtilityEngine.hasUppercaseLetters('1A2B3C', undefined, {})).to.equal(false);
            });

            it('Should return false when maximum count parameter is a string', () => {
                expect(UtilityEngine.hasUppercaseLetters('1A2B3C', undefined, 'string')).to.equal(false);
            });

            it('Should return false when maximum count parameter is an array', () => {
                expect(UtilityEngine.hasUppercaseLetters('1A2B3C', undefined, [])).to.equal(false);
            });

            it('Should return false when maximum count parameter is a function', () => {
                expect(UtilityEngine.hasUppercaseLetters('1A2B3C', undefined, function() {})).to.equal(false);
            });

            it('Should return false when maximum count parameter negative number', () => {
                expect(UtilityEngine.hasUppercaseLetters('1A2B3C ', undefined, -1)).to.equal(false);
            });

            it('Should return false when maximum count parameter is negative infinity', () => {
                expect(UtilityEngine.hasUppercaseLetters('1A2B3C', undefined, Number.NEGATIVE_INFINITY)).to.equal(false);
            });
        });
    });
});
