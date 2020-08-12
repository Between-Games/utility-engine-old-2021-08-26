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
    // ╔═╗   ╔═╗╔═══════╗╔═══════╗         ╔═╗      ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗         ╔═══════╗╔═══════╗╔═╗   ╔═╗╔════╗╔═╗╔═══════╗
    // ║ ║   ║ ║║ ╔═══╗ ║║ ╔═════╝         ║ ║      ║ ╔═════╝╚══╗ ╔══╝╚══╗ ╔══╝║ ╔═════╝║ ╔═══╗ ║         ║ ╔═════╝║ ╔═══╗ ║║ ║   ║ ║║ ╔╗ ║║ ║╚══╗ ╔══╝
    // ║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═════╗╔═══════╗║ ║      ║ ╚═════╗   ║ ║      ║ ║   ║ ╚═════╗║ ╚═══╝ ║╔═══════╗║ ║      ║ ║   ║ ║║ ║   ║ ║║ ║║ ║║ ║   ║ ║
    // ║ ╔═══╗ ║║ ╔═══╗ ║╚═════╗ ║╚═══════╝║ ║      ║ ╔═════╝   ║ ║      ║ ║   ║ ╔═════╝║ ╔═╗ ╔═╝╚═══════╝║ ║      ║ ║   ║ ║║ ║   ║ ║║ ║║ ║║ ║   ║ ║
    // ║ ║   ║ ║║ ║   ║ ║╔═════╝ ║         ║ ╚═════╗║ ╚═════╗   ║ ║      ║ ║   ║ ╚═════╗║ ║ ║ ╚═╗         ║ ╚═════╗║ ╚═══╝ ║║ ╚═══╝ ║║ ║║ ╚╝ ║   ║ ║
    // ╚═╝   ╚═╝╚═╝   ╚═╝╚═══════╝         ╚═══════╝╚═══════╝   ╚═╝      ╚═╝   ╚═══════╝╚═╝ ╚═══╝         ╚═══════╝╚═══════╝╚═══════╝╚═╝╚════╝   ╚═╝

    describe('#hasLetters(value, minimumCount, maximumCount)', function() {
        describe('#hasLetters(VALUE, minimumCount, maximumCount)', function() {
            it('Should return true when value is a lower case letter character', () => {
                expect(UtilityEngine.hasLetters('a')).to.equal(true);
            });

            it('Should return true when value is an upper case letter character', () => {
                expect(UtilityEngine.hasLetters('A')).to.equal(true);
            });

            it('Should return true when value is an accented lower case letter character', () => {
                expect(UtilityEngine.hasLetters('à')).to.equal(true);
            });

            it('Should return true when value is an accented upper case letter character', () => {
                expect(UtilityEngine.hasLetters('À')).to.equal(true);
            });

            it('Should return true when value is lower case letter characters', () => {
                expect(UtilityEngine.hasLetters('abcdefghijklmnopqrstuvwxyz')).to.equal(true);
            });

            it('Should return true when value is upper case letter characters', () => {
                expect(UtilityEngine.hasLetters('ABCDEFGHIJKLMNOPQRSTUVWXYZ')).to.equal(true);
            });

            it('Should return true when value is lower case accented letter characters', () => {
                expect(UtilityEngine.hasLetters('àáâäæãåāèéêëēėęôöòóœøōõ')).to.equal(true);
            });

            it('Should return true when value has upper case accented letter characters', () => {
                expect(UtilityEngine.hasLetters('ÀÁÂÄÆÃÅĀÈÉÊËĒĖĘÔÖÒÓŒØŌÕ')).to.equal(true);
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

            it('Should return false when value is numerical characters', () => {
                expect(UtilityEngine.hasLetters('0123456789')).to.equal(false);
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

    // ╔═╗   ╔═╗╔═══════╗╔═══════╗         ╔═╗      ╔═══════╗╔═╗╔═╗╔═╗╔═══════╗╔═══════╗         ╔═══════╗╔═══════╗╔═══════╗╔═══════╗         ╔═╗      ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗         ╔═══════╗╔═══════╗╔═╗   ╔═╗╔════╗╔═╗╔═══════╗
    // ║ ║   ║ ║║ ╔═══╗ ║║ ╔═════╝         ║ ║      ║ ╔═══╗ ║║ ║║ ║║ ║║ ╔═════╝║ ╔═══╗ ║         ║ ╔═════╝║ ╔═══╗ ║║ ╔═════╝║ ╔═════╝         ║ ║      ║ ╔═════╝╚══╗ ╔══╝╚══╗ ╔══╝║ ╔═════╝║ ╔═══╗ ║         ║ ╔═════╝║ ╔═══╗ ║║ ║   ║ ║║ ╔╗ ║║ ║╚══╗ ╔══╝
    // ║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═════╗╔═══════╗║ ║      ║ ║   ║ ║║ ║║ ║║ ║║ ╚═════╗║ ╚═══╝ ║╔═══════╗║ ║      ║ ╚═══╝ ║║ ╚═════╗║ ╚═════╗╔═══════╗║ ║      ║ ╚═════╗   ║ ║      ║ ║   ║ ╚═════╗║ ╚═══╝ ║╔═══════╗║ ║      ║ ║   ║ ║║ ║   ║ ║║ ║║ ║║ ║   ║ ║
    // ║ ╔═══╗ ║║ ╔═══╗ ║╚═════╗ ║╚═══════╝║ ║      ║ ║   ║ ║║ ║║ ║║ ║║ ╔═════╝║ ╔═╗ ╔═╝╚═══════╝║ ║      ║ ╔═══╗ ║╚═════╗ ║║ ╔═════╝╚═══════╝║ ║      ║ ╔═════╝   ║ ║      ║ ║   ║ ╔═════╝║ ╔═╗ ╔═╝╚═══════╝║ ║      ║ ║   ║ ║║ ║   ║ ║║ ║║ ║║ ║   ║ ║
    // ║ ║   ║ ║║ ║   ║ ║╔═════╝ ║         ║ ╚═════╗║ ╚═══╝ ║║ ╚╝ ╚╝ ║║ ╚═════╗║ ║ ║ ╚═╗         ║ ╚═════╗║ ║   ║ ║╔═════╝ ║║ ╚═════╗         ║ ╚═════╗║ ╚═════╗   ║ ║      ║ ║   ║ ╚═════╗║ ║ ║ ╚═╗         ║ ╚═════╗║ ╚═══╝ ║║ ╚═══╝ ║║ ║║ ╚╝ ║   ║ ║
    // ╚═╝   ╚═╝╚═╝   ╚═╝╚═══════╝         ╚═══════╝╚═══════╝╚═══════╝╚═══════╝╚═╝ ╚═══╝         ╚═══════╝╚═╝   ╚═╝╚═══════╝╚═══════╝         ╚═══════╝╚═══════╝   ╚═╝      ╚═╝   ╚═══════╝╚═╝ ╚═══╝         ╚═══════╝╚═══════╝╚═══════╝╚═╝╚════╝   ╚═╝

    describe('#hasLowercaseLetters(value, minimumCount, maximumCount)', function() {
        describe('#hasLowercaseLetters(VALUE, minimumCount, maximumCount)', function() {
            it('Should return true when value is a lower case letter character', () => {
                expect(UtilityEngine.hasLowercaseLetters('a')).to.equal(true);
            });

            it('Should return true when value is an accented lower case letter character', () => {
                expect(UtilityEngine.hasLowercaseLetters('á')).to.equal(true);
            });

            it('Should return true when value is lower case letter characters', () => {
                expect(UtilityEngine.hasLowercaseLetters('abcdefghijklmnopqrstuvwxyz')).to.equal(true);
            });

            it('Should return true when value is lower case accented letter characters', () => {
                expect(UtilityEngine.hasLowercaseLetters('àáâäæãåāèéêëēėęôöòóœøōõ')).to.equal(true);
            });

            it('Should return true when value is a sentence', () => {
                expect(UtilityEngine.hasLowercaseLetters('No more half-measures.')).to.equal(true);
            });

            it('Should return true when value is mixed characters', () => {
                expect(UtilityEngine.hasLowercaseLetters('123 ABC abc $#& .!?')).to.equal(true);
            });


            it('Should return false when value is an empty string', () => {
                expect(UtilityEngine.hasLowercaseLetters('')).to.equal(false);
            });

            it('Should return false when value is a whitespace character', () => {
                expect(UtilityEngine.hasLowercaseLetters(' ')).to.equal(false);
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
                expect(UtilityEngine.hasLowercaseLetters('1à2æ3ø', undefined)).to.equal(true);
            });

            it('Should return true when minimum count parameter is small enough', () => {
                expect(UtilityEngine.hasLowercaseLetters('1à2æ3ø', 1)).to.equal(true);
            });

            it('Should return true when minimum count parameter is big enough', () => {
                expect(UtilityEngine.hasLowercaseLetters('1à2æ3ø', 2)).to.equal(true);
            });

            it('Should return true when minimum count parameter is at minimum', () => {
                expect(UtilityEngine.hasLowercaseLetters('1à2æ3ø', 0)).to.equal(true);
            });

            it('Should return true when minimum count parameter is at maximum', () => {
                expect(UtilityEngine.hasLowercaseLetters('1à2æ3ø', 3)).to.equal(true);
            });

            it('Should return true when minimum count parameter is zero', () => {
                expect(UtilityEngine.hasLowercaseLetters('1à2æ3ø', 0)).to.equal(true);
            });


            it('Should return false when minimum count parameter is too big', () => {
                expect(UtilityEngine.hasLowercaseLetters('1à2æ3ø', 4)).to.equal(false);
            });

            it('Should return false when minimum count parameter is bigger than maximum count', () => {
                expect(UtilityEngine.hasLowercaseLetters('1à2æ3ø', 4, 3)).to.equal(false);
            });

            it('Should return false when minimum count parameter is null', () => {
                expect(UtilityEngine.hasLowercaseLetters('1à2æ3ø', null)).to.equal(false);
            });

            it('Should return false when minimum count parameter is true', () => {
                expect(UtilityEngine.hasLowercaseLetters('1à2æ3ø', true)).to.equal(false);
            });

            it('Should return false when minimum count parameter is false', () => {
                expect(UtilityEngine.hasLowercaseLetters('1à2æ3ø', false)).to.equal(false);
            });

            it('Should return false when minimum count parameter is an object', () => {
                expect(UtilityEngine.hasLowercaseLetters('1à2æ3ø', {})).to.equal(false);
            });

            it('Should return false when minimum count parameter is a string', () => {
                expect(UtilityEngine.hasLowercaseLetters('1à2æ3ø', 'string')).to.equal(false);
            });

            it('Should return false when minimum count parameter is an array', () => {
                expect(UtilityEngine.hasLowercaseLetters('1à2æ3ø', [])).to.equal(false);
            });

            it('Should return false when minimum count parameter is a function', () => {
                expect(UtilityEngine.hasLowercaseLetters('1à2æ3ø', function() {})).to.equal(false);
            });

            it('Should return false when minimum count parameter negative number', () => {
                expect(UtilityEngine.hasLowercaseLetters('1à2æ3ø', -1)).to.equal(false);
            });

            it('Should return false when maximum count parameter is positive infinity', () => {
                expect(UtilityEngine.hasLowercaseLetters('1à2æ3ø', Number.POSITIVE_INFINITY)).to.equal(false);
            });

            it('Should return false when maximum count parameter is negative infinity', () => {
                expect(UtilityEngine.hasLowercaseLetters('1à2æ3ø', Number.NEGATIVE_INFINITY)).to.equal(false);
            });
        });

        describe('#hasLowercaseLetters(value, minimumCount, MAXIMUMCOUNT)', function() {
            it('Should return true when maximum count parameter is undefined', () => {
                expect(UtilityEngine.hasLowercaseLetters('1à2æ3ø ', undefined, undefined)).to.equal(true);
            });

            it('Should return true when maximum count parameter is just small enough', () => {
                expect(UtilityEngine.hasLowercaseLetters('1à2æ3ø ', undefined, 3)).to.equal(true);
            });

            it('Should return true when maximum count parameter is big enough', () => {
                expect(UtilityEngine.hasLowercaseLetters('1à2æ3ø ', undefined, 4)).to.equal(true);
            });

            it('Should return true when maximum and minimum count parameters are zero', () => {
                expect(UtilityEngine.hasLowercaseLetters('0', 0, 0)).to.equal(true);
            });

            it('Should return true when maximum count parameter is positive infinity', () => {
                expect(UtilityEngine.hasLowercaseLetters('1à2æ3ø', undefined, Number.POSITIVE_INFINITY)).to.equal(true);
            });


            it('Should return false when maximum count parameter is too small', () => {
                expect(UtilityEngine.hasLowercaseLetters('1à2æ3ø', undefined, 2)).to.equal(false);
            });

            it('Should return false when maximum count parameter is smaller than minimum count', () => {
                expect(UtilityEngine.hasLowercaseLetters('1à2æ3ø', 3, 2)).to.equal(false);
            });

            it('Should return false when maximum count parameter is null', () => {
                expect(UtilityEngine.hasLowercaseLetters('1à2æ3ø', undefined, null)).to.equal(false);
            });

            it('Should return false when maximum count parameter is true', () => {
                expect(UtilityEngine.hasLowercaseLetters('1à2æ3ø', undefined, true)).to.equal(false);
            });

            it('Should return false when maximum count parameter is false', () => {
                expect(UtilityEngine.hasLowercaseLetters('1à2æ3ø', undefined, false)).to.equal(false);
            });

            it('Should return false when maximum count parameter is an object', () => {
                expect(UtilityEngine.hasLowercaseLetters('1à2æ3ø', undefined, {})).to.equal(false);
            });

            it('Should return false when maximum count parameter is a string', () => {
                expect(UtilityEngine.hasLowercaseLetters('1à2æ3ø', undefined, 'string')).to.equal(false);
            });

            it('Should return false when maximum count parameter is an array', () => {
                expect(UtilityEngine.hasLowercaseLetters('1à2æ3ø', undefined, [])).to.equal(false);
            });

            it('Should return false when maximum count parameter is a function', () => {
                expect(UtilityEngine.hasLowercaseLetters('1à2æ3ø', undefined, function() {})).to.equal(false);
            });

            it('Should return false when maximum count parameter negative number', () => {
                expect(UtilityEngine.hasLowercaseLetters('1à2æ3ø ', undefined, -1)).to.equal(false);
            });

            it('Should return false when maximum count parameter is negative infinity', () => {
                expect(UtilityEngine.hasLowercaseLetters('1à2æ3ø', undefined, Number.NEGATIVE_INFINITY)).to.equal(false);
            });
        });
    });

    // ╔═╗   ╔═╗╔═══════╗╔═══════╗         ╔═╗   ╔═╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗         ╔═══════╗╔═══════╗╔═══════╗╔═══════╗         ╔═╗      ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗         ╔═══════╗╔═══════╗╔═╗   ╔═╗╔════╗╔═╗╔═══════╗
    // ║ ║   ║ ║║ ╔═══╗ ║║ ╔═════╝         ║ ║   ║ ║║ ╔═══╗ ║║ ╔═══╗ ║║ ╔═════╝║ ╔═══╗ ║         ║ ╔═════╝║ ╔═══╗ ║║ ╔═════╝║ ╔═════╝         ║ ║      ║ ╔═════╝╚══╗ ╔══╝╚══╗ ╔══╝║ ╔═════╝║ ╔═══╗ ║         ║ ╔═════╝║ ╔═══╗ ║║ ║   ║ ║║ ╔╗ ║║ ║╚══╗ ╔══╝
    // ║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═════╗╔═══════╗║ ║   ║ ║║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═════╗║ ╚═══╝ ║╔═══════╗║ ║      ║ ╚═══╝ ║║ ╚═════╗║ ╚═════╗╔═══════╗║ ║      ║ ╚═════╗   ║ ║      ║ ║   ║ ╚═════╗║ ╚═══╝ ║╔═══════╗║ ║      ║ ║   ║ ║║ ║   ║ ║║ ║║ ║║ ║   ║ ║
    // ║ ╔═══╗ ║║ ╔═══╗ ║╚═════╗ ║╚═══════╝║ ║   ║ ║║ ╔═════╝║ ╔═════╝║ ╔═════╝║ ╔═╗ ╔═╝╚═══════╝║ ║      ║ ╔═══╗ ║╚═════╗ ║║ ╔═════╝╚═══════╝║ ║      ║ ╔═════╝   ║ ║      ║ ║   ║ ╔═════╝║ ╔═╗ ╔═╝╚═══════╝║ ║      ║ ║   ║ ║║ ║   ║ ║║ ║║ ║║ ║   ║ ║
    // ║ ║   ║ ║║ ║   ║ ║╔═════╝ ║         ║ ╚═══╝ ║║ ║      ║ ║      ║ ╚═════╗║ ║ ║ ╚═╗         ║ ╚═════╗║ ║   ║ ║╔═════╝ ║║ ╚═════╗         ║ ╚═════╗║ ╚═════╗   ║ ║      ║ ║   ║ ╚═════╗║ ║ ║ ╚═╗         ║ ╚═════╗║ ╚═══╝ ║║ ╚═══╝ ║║ ║║ ╚╝ ║   ║ ║
    // ╚═╝   ╚═╝╚═╝   ╚═╝╚═══════╝         ╚═══════╝╚═╝      ╚═╝      ╚═══════╝╚═╝ ╚═══╝         ╚═══════╝╚═╝   ╚═╝╚═══════╝╚═══════╝         ╚═══════╝╚═══════╝   ╚═╝      ╚═╝   ╚═══════╝╚═╝ ╚═══╝         ╚═══════╝╚═══════╝╚═══════╝╚═╝╚════╝   ╚═╝

    describe('#hasUppercaseLetters(value, minimumCount, maximumCount)', function() {
        describe('#hasUppercaseLetters(VALUE, minimumCount, maximumCount)', function() {
            it('Should return true when value is an upper case letter character', () => {
                expect(UtilityEngine.hasUppercaseLetters('A')).to.equal(true);
            });

            it('Should return true when value is an accented upper case letter character', () => {
                expect(UtilityEngine.hasUppercaseLetters('À')).to.equal(true);
            });

            it('Should return true when value is upper case letter characters', () => {
                expect(UtilityEngine.hasUppercaseLetters('ABCDEFGHIJKLMNOPQRSTUVWXYZ')).to.equal(true);
            });

            it('Should return true when value has upper case accented letter characters', () => {
                expect(UtilityEngine.hasUppercaseLetters('ÀÁÂÄÆÃÅĀÈÉÊËĒĖĘÔÖÒÓŒØŌÕ')).to.equal(true);
            });

            it('Should return true when value is a sentence', () => {
                expect(UtilityEngine.hasUppercaseLetters('No more half-measures.')).to.equal(true);
            });

            it('Should return true when value is mixed characters', () => {
                expect(UtilityEngine.hasUppercaseLetters('123 ABC abc $#& .!?')).to.equal(true);
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

            it('Should return false when value is numerical characters', () => {
                expect(UtilityEngine.hasUppercaseLetters('0123456789')).to.equal(false);
            });

            it('Should return false when value is lower case letter characters', () => {
                expect(UtilityEngine.hasUppercaseLetters('abcdefghijklmnopqrstuvwxyz')).to.equal(false);
            });

            it('Should return false when value is lower case accented letter characters', () => {
                expect(UtilityEngine.hasUppercaseLetters('àáâäæãåāèéêëēėęôöòóœøōõ')).to.equal(false);
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
                expect(UtilityEngine.hasUppercaseLetters('1À2Æ3Ø', undefined)).to.equal(true);
            });

            it('Should return true when minimum count parameter is small enough', () => {
                expect(UtilityEngine.hasUppercaseLetters('1À2Æ3Ø', 1)).to.equal(true);
            });

            it('Should return true when minimum count parameter is big enough', () => {
                expect(UtilityEngine.hasUppercaseLetters('1À2Æ3Ø', 2)).to.equal(true);
            });

            it('Should return true when minimum count parameter is at minimum', () => {
                expect(UtilityEngine.hasUppercaseLetters('1À2Æ3Ø', 0)).to.equal(true);
            });

            it('Should return true when minimum count parameter is at maximum', () => {
                expect(UtilityEngine.hasUppercaseLetters('1À2Æ3Ø', 3)).to.equal(true);
            });

            it('Should return true when minimum count parameter is zero', () => {
                expect(UtilityEngine.hasUppercaseLetters('1À2Æ3Ø', 0)).to.equal(true);
            });


            it('Should return false when minimum count parameter is too big', () => {
                expect(UtilityEngine.hasUppercaseLetters('1À2Æ3Ø', 4)).to.equal(false);
            });

            it('Should return false when minimum count parameter is bigger than maximum count', () => {
                expect(UtilityEngine.hasUppercaseLetters('1À2Æ3Ø', 4, 3)).to.equal(false);
            });

            it('Should return false when minimum count parameter is null', () => {
                expect(UtilityEngine.hasUppercaseLetters('1À2Æ3Ø', null)).to.equal(false);
            });

            it('Should return false when minimum count parameter is true', () => {
                expect(UtilityEngine.hasUppercaseLetters('1À2Æ3Ø', true)).to.equal(false);
            });

            it('Should return false when minimum count parameter is false', () => {
                expect(UtilityEngine.hasUppercaseLetters('1À2Æ3Ø', false)).to.equal(false);
            });

            it('Should return false when minimum count parameter is an object', () => {
                expect(UtilityEngine.hasUppercaseLetters('1À2Æ3Ø', {})).to.equal(false);
            });

            it('Should return false when minimum count parameter is a string', () => {
                expect(UtilityEngine.hasUppercaseLetters('1À2Æ3Ø', 'string')).to.equal(false);
            });

            it('Should return false when minimum count parameter is an array', () => {
                expect(UtilityEngine.hasUppercaseLetters('1À2Æ3Ø', [])).to.equal(false);
            });

            it('Should return false when minimum count parameter is a function', () => {
                expect(UtilityEngine.hasUppercaseLetters('1À2Æ3Ø', function() {})).to.equal(false);
            });

            it('Should return false when minimum count parameter negative number', () => {
                expect(UtilityEngine.hasUppercaseLetters('1À2Æ3Ø', -1)).to.equal(false);
            });

            it('Should return false when maximum count parameter is positive infinity', () => {
                expect(UtilityEngine.hasUppercaseLetters('1À2Æ3Ø', Number.POSITIVE_INFINITY)).to.equal(false);
            });

            it('Should return false when maximum count parameter is negative infinity', () => {
                expect(UtilityEngine.hasUppercaseLetters('1À2Æ3Ø', Number.NEGATIVE_INFINITY)).to.equal(false);
            });
        });

        describe('#hasUppercaseLetters(value, minimumCount, MAXIMUMCOUNT)', function() {
            it('Should return true when maximum count parameter is undefined', () => {
                expect(UtilityEngine.hasUppercaseLetters('1À2Æ3Ø ', undefined, undefined)).to.equal(true);
            });

            it('Should return true when maximum count parameter is just small enough', () => {
                expect(UtilityEngine.hasUppercaseLetters('1À2Æ3Ø ', undefined, 3)).to.equal(true);
            });

            it('Should return true when maximum count parameter is big enough', () => {
                expect(UtilityEngine.hasUppercaseLetters('1À2Æ3Ø ', undefined, 4)).to.equal(true);
            });

            it('Should return true when maximum and minimum count parameters are zero', () => {
                expect(UtilityEngine.hasUppercaseLetters('0', 0, 0)).to.equal(true);
            });

            it('Should return true when maximum count parameter is positive infinity', () => {
                expect(UtilityEngine.hasUppercaseLetters('1À2Æ3Ø', undefined, Number.POSITIVE_INFINITY)).to.equal(true);
            });


            it('Should return false when maximum count parameter is too small', () => {
                expect(UtilityEngine.hasUppercaseLetters('1À2Æ3Ø', undefined, 2)).to.equal(false);
            });

            it('Should return false when maximum count parameter is smaller than minimum count', () => {
                expect(UtilityEngine.hasUppercaseLetters('1À2Æ3Ø', 3, 2)).to.equal(false);
            });

            it('Should return false when maximum count parameter is null', () => {
                expect(UtilityEngine.hasUppercaseLetters('1À2Æ3Ø', undefined, null)).to.equal(false);
            });

            it('Should return false when maximum count parameter is true', () => {
                expect(UtilityEngine.hasUppercaseLetters('1À2Æ3Ø', undefined, true)).to.equal(false);
            });

            it('Should return false when maximum count parameter is false', () => {
                expect(UtilityEngine.hasUppercaseLetters('1À2Æ3Ø', undefined, false)).to.equal(false);
            });

            it('Should return false when maximum count parameter is an object', () => {
                expect(UtilityEngine.hasUppercaseLetters('1À2Æ3Ø', undefined, {})).to.equal(false);
            });

            it('Should return false when maximum count parameter is a string', () => {
                expect(UtilityEngine.hasUppercaseLetters('1À2Æ3Ø', undefined, 'string')).to.equal(false);
            });

            it('Should return false when maximum count parameter is an array', () => {
                expect(UtilityEngine.hasUppercaseLetters('1À2Æ3Ø', undefined, [])).to.equal(false);
            });

            it('Should return false when maximum count parameter is a function', () => {
                expect(UtilityEngine.hasUppercaseLetters('1À2Æ3Ø', undefined, function() {})).to.equal(false);
            });

            it('Should return false when maximum count parameter negative number', () => {
                expect(UtilityEngine.hasUppercaseLetters('1À2Æ3Ø ', undefined, -1)).to.equal(false);
            });

            it('Should return false when maximum count parameter is negative infinity', () => {
                expect(UtilityEngine.hasUppercaseLetters('1À2Æ3Ø', undefined, Number.NEGATIVE_INFINITY)).to.equal(false);
            });
        });
    });
});
