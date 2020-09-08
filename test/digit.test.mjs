// ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗   ╔═══════╗╔═══════╗╔═══════╗╔═══════╗   ╔═══════╗╔═══════╗╔═══════╗
// ╚╗ ╔══╗ ║╚══╗ ╔══╝║ ╔═════╝╚══╗ ╔══╝╚══╗ ╔══╝   ╚══╗ ╔══╝║ ╔═════╝║ ╔═════╝╚══╗ ╔══╝   ║ ╔╗ ╔╗ ║╚═══╗ ╔═╝║ ╔═════╝
//  ║ ║  ║ ║   ║ ║   ║ ║ ╔═══╗   ║ ║      ║ ║         ║ ║   ║ ╚═════╗║ ╚═════╗   ║ ║      ║ ║║ ║║ ║    ║ ║  ║ ╚═════╗
//  ║ ║  ║ ║   ║ ║   ║ ║ ╚═╗ ║   ║ ║      ║ ║         ║ ║   ║ ╔═════╝╚═════╗ ║   ║ ║      ║ ║║ ║║ ║    ║ ║  ╚═════╗ ║
// ╔╝ ╚══╝ ║╔══╝ ╚══╗║ ╚═══╝ ║╔══╝ ╚══╗   ║ ║   ╔═╗   ║ ║   ║ ╚═════╗╔═════╝ ║   ║ ║   ╔═╗║ ║║ ║║ ║╔═══╝ ║  ╔═════╝ ║
// ╚═══════╝╚═══════╝╚═══════╝╚═══════╝   ╚═╝   ╚═╝   ╚═╝   ╚═══════╝╚═══════╝   ╚═╝   ╚═╝╚═╝╚═╝╚═╝╚═════╝  ╚═══════╝

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

// ╔═══════╗╔═══════╗╔═══════╗╔═╗      ╔═══════╗╔═══════╗╔═══════╗
// ╚╗ ╔══╗ ║║ ╔═════╝║ ╔═════╝║ ║      ║ ╔═══╗ ║║ ╔═══╗ ║║ ╔═════╝
//  ║ ║  ║ ║║ ╚═════╗║ ║      ║ ║      ║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═════╗
//  ║ ║  ║ ║║ ╔═════╝║ ║      ║ ║      ║ ╔═══╗ ║║ ╔═╗ ╔═╝║ ╔═════╝
// ╔╝ ╚══╝ ║║ ╚═════╗║ ╚═════╗║ ╚═════╗║ ║   ║ ║║ ║ ║ ╚═╗║ ╚═════╗
// ╚═══════╝╚═══════╝╚═══════╝╚═══════╝╚═╝   ╚═╝╚═╝ ╚═══╝╚═══════╝

const _basicLatinDigits = '0123456789';
const _basicLatinLowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const _basicLatinUppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const _basicLatinSymbols = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

const _latin1Symbols = '¡¢£¤¥¦§¨©«¬®¯°±´¶·¸»¿×÷';
const _latin1LowercaseLetters = 'ßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿ';
const _latin1UppercaseLetters = 'ÁÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞ';

const _latinALowercaseLetters = 'āăąćĉċčďđēĕėęěĝğġģĥħĩīĭįıĳĵķĸĺļľŀłńņňŉŋōŏőœŕŗřśŝşšţťŧũūŭůűųŵŷźżžſ';
const _latinAUppercaseLetters = 'ĀĂĄĆĈĊČĎĐĒĔĖĘĚĜĞĠĢĤĦĨĪĬĮİĲĴĶĹĻĽĿŁŃŅŇŊŌŎŐŒŔŖŘŚŜŞŠŢŤŦŨŪŬŮŰŲŴŶŸŹŻŽ';

const _latinBLowercaseLetters = 'ƀƃƅƈƌƍƒƕƙƚƛƞơƣƥƨƫƭưƴƶƹƺƽǆǉǌǎǐǒǔǖǘǚǜǝǟǡǣǥǧǩǫǭǯǰǳǵǹǻǽǿȁȃȅȇȉȋȍȏȑȓȕȗșțȝȟȡȣȥȧȩȫȭȯȱȳȴȵȶȷȸȹȼȿɀɂɇɉɋɍɏ';
const _latinBUppercaseLetters = 'ƁƂƄƆƇƉƊƋƎƏƐƑƓƔƖƗƘƜƝƟƠƢƤƧƩƬƮƯƱƲƳƵƷƸƼǄǇǊǍǏǑǓǕǗǙǛǞǠǢǤǦǨǪǬǮǱǴǶǷǸǺǼǾȀȂȄȆȈȊȌȎȐȒȔȖȘȚȜȞȠȢȤȦȨȪȬȮȰȲȺȻȽȾɁɃɄɅɆɈɊɌɎ';

const _greekLowercaseLetters = 'αβγδεζηθικλμνξοπρστυφχψω';
const _greekUppercaseLetters = 'ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ';

const _basicLatinLetters = `${_basicLatinLowercaseLetters}${_basicLatinUppercaseLetters}`;
const _latin1Letters = `${_latin1LowercaseLetters}${_latin1UppercaseLetters}`;
const _latinALetters = `${_latinALowercaseLetters}${_latinAUppercaseLetters}`;
const _latinBLetters = `${_latinBLowercaseLetters}${_latinBUppercaseLetters}`;

const _latinLetters = `${_basicLatinLetters}${_latin1Letters}${_latinALetters}${_latinBLetters}`;
const _greekLetters = `${_greekLowercaseLetters}${_greekUppercaseLetters}`;

const _latinCharacters = `${_latinLetters}${_basicLatinSymbols}${_latin1Symbols}${_basicLatinDigits}`;

// ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗
// ╚╗ ╔══╗ ║╚══╗ ╔══╝║ ╔═════╝╚══╗ ╔══╝╚══╗ ╔══╝
//  ║ ║  ║ ║   ║ ║   ║ ║ ╔═══╗   ║ ║      ║ ║
//  ║ ║  ║ ║   ║ ║   ║ ║ ╚═╗ ║   ║ ║      ║ ║
// ╔╝ ╚══╝ ║╔══╝ ╚══╗║ ╚═══╝ ║╔══╝ ╚══╗   ║ ║
// ╚═══════╝╚═══════╝╚═══════╝╚═══════╝   ╚═╝

describe('Digit', function() {
    // ╔═══════╗╔═══════╗         ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗
    // ╚══╗ ╔══╝║ ╔═════╝         ╚╗ ╔══╗ ║╚══╗ ╔══╝║ ╔═════╝╚══╗ ╔══╝╚══╗ ╔══╝
    //    ║ ║   ║ ╚═════╗╔═══════╗ ║ ║  ║ ║   ║ ║   ║ ║ ╔═══╗   ║ ║      ║ ║
    //    ║ ║   ╚═════╗ ║╚═══════╝ ║ ║  ║ ║   ║ ║   ║ ║ ╚═╗ ║   ║ ║      ║ ║
    // ╔══╝ ╚══╗╔═════╝ ║         ╔╝ ╚══╝ ║╔══╝ ╚══╗║ ╚═══╝ ║╔══╝ ╚══╗   ║ ║
    // ╚═══════╝╚═══════╝         ╚═══════╝╚═══════╝╚═══════╝╚═══════╝   ╚═╝

    describe('#isDigit(value, minimumLength, maximumLength)', function() {
        describe('#isDigit(VALUE, minimumLength, maximumLength)', function() {
            it('Should return true when value is a point', () => {
                expect(UtilityEngine.isDigit('0')).to.equal(true);
            });

            it('Should return true when value is a comma', () => {
                expect(UtilityEngine.isDigit('1')).to.equal(true);
            });

            it('Should return true when value is an asterisk', () => {
                expect(UtilityEngine.isDigit('2')).to.equal(true);
            });

            it('Should return true when value is a hyphen', () => {
                expect(UtilityEngine.isDigit('3')).to.equal(true);
            });

            it('Should return true when value is a tolde', () => {
                expect(UtilityEngine.isDigit('4')).to.equal(true);
            });

            it('Should return true when value is a low line', () => {
                expect(UtilityEngine.isDigit('5')).to.equal(true);
            });

            it('Should return true when value a at sign', () => {
                expect(UtilityEngine.isDigit('6')).to.equal(true);
            });

            it('Should return true when value a colon', () => {
                expect(UtilityEngine.isDigit('7')).to.equal(true);
            });

            it('Should return true when value a semi color', () => {
                expect(UtilityEngine.isDigit('8')).to.equal(true);
            });

            it('Should return true when value is a single quote', () => {
                expect(UtilityEngine.isDigit('9')).to.equal(true);
            });

            it('Should return true when value contains only basic latin digits', () => {
                expect(UtilityEngine.isDigit(_basicLatinDigits, 1, 500)).to.equal(true);
            });


            it('Should return false when value contains only basic latin symbols', () => {
                expect(UtilityEngine.isDigit(_basicLatinSymbols, 1, 500)).to.equal(false);
            });

            it('Should return false when value contains only latin-1 symbols', () => {
                expect(UtilityEngine.isDigit(_latin1Symbols, 1, 500)).to.equal(false);
            });

            it('Should return false when value is a basic latin lowercase letter', () => {
                expect(UtilityEngine.isDigit('a')).to.equal(false);
            });

            it('Should return false when value is a basic uppercase letter', () => {
                expect(UtilityEngine.isDigit('A')).to.equal(false);
            });

            it('Should return false when value is a latin-1 lowercase letter', () => {
                expect(UtilityEngine.isDigit('à')).to.equal(false);
            });

            it('Should return false when value is a latin-1 uppercase letter', () => {
                expect(UtilityEngine.isDigit('Á')).to.equal(false);
            });

            it('Should return false when value is a latin-A lowercase letter', () => {
                expect(UtilityEngine.isDigit('ā')).to.equal(false);
            });

            it('Should return false when value is a latin-A uppercase letter', () => {
                expect(UtilityEngine.isDigit('Ā')).to.equal(false);
            });

            it('Should return false when value contains only basic latin letters', () => {
                expect(UtilityEngine.isDigit(_basicLatinLetters, 1, 500)).to.equal(false);
            });

            it('Should return false when value contains only basic latin lowercase letters', () => {
                expect(UtilityEngine.isDigit(_basicLatinLowercaseLetters, 1, 500)).to.equal(false);
            });

            it('Should return false when value contains only basic latin uppercase letters', () => {
                expect(UtilityEngine.isDigit(_basicLatinUppercaseLetters, 1, 500)).to.equal(false);
            });

            it('Should return false when value contains only latin-1 letters', () => {
                expect(UtilityEngine.isDigit(_latin1Letters, 1, 500)).to.equal(false);
            });

            it('Should return false when value contains only latin-1 lowercase letters', () => {
                expect(UtilityEngine.isDigit(_latin1LowercaseLetters, 1, 500)).to.equal(false);
            });

            it('Should return false when value contains only latin-1 uppercase letters', () => {
                expect(UtilityEngine.isDigit(_latin1UppercaseLetters, 1, 500)).to.equal(false);
            });

            it('Should return false when value contains only latin-A letters', () => {
                expect(UtilityEngine.isDigit(_latinALetters, 1, 500)).to.equal(false);
            });

            it('Should return false when value contains only latin-A lowercase letters', () => {
                expect(UtilityEngine.isDigit(_latinALowercaseLetters, 1, 500)).to.equal(false);
            });

            it('Should return false when value contains only latin-A uppercase letters', () => {
                expect(UtilityEngine.isDigit(_latinAUppercaseLetters, 1, 500)).to.equal(false);
            });

            it('Should return false when value contains only latin-B letters', () => {
                expect(UtilityEngine.isDigit(_latinBLetters, 1, 500)).to.equal(false);
            });

            it('Should return false when value contains only latin-B lowercase letters', () => {
                expect(UtilityEngine.isDigit(_latinBLowercaseLetters, 1, 500)).to.equal(false);
            });

            it('Should return false when value contains only latin-B uppercase letters', () => {
                expect(UtilityEngine.isDigit(_latinBUppercaseLetters, 1, 500)).to.equal(false);
            });

            it('Should return false when value contains only greek letters', () => {
                expect(UtilityEngine.isDigit(_greekLetters, 1, 500)).to.equal(false);
            });

            it('Should return false when value contains only greek lowercase letters', () => {
                expect(UtilityEngine.isDigit(_greekLowercaseLetters, 1, 500)).to.equal(false);
            });

            it('Should return false when value contains only greek uppercase letters', () => {
                expect(UtilityEngine.isDigit(_greekUppercaseLetters, 1, 500)).to.equal(false);
            });

            it('Should return false when value contains only latin characters', () => {
                expect(UtilityEngine.isDigit(_latinCharacters, 1, 500)).to.equal(false);
            });

            it('Should return false when value is mixed characters', () => {
                expect(UtilityEngine.isDigit('123 ABC abc $#& .!?', 1, 500)).to.equal(false);
            });

            it('Should return false when value is a sentence', () => {
                expect(UtilityEngine.isDigit('No half measures.', 1, 500)).to.equal(false);
            });

            it('Should return false when value is an empty string', () => {
                expect(UtilityEngine.isDigit('')).to.equal(false);
            });

            it('Should return false when value is a whitespace', () => {
                expect(UtilityEngine.isDigit(' ')).to.equal(false);
            });

            it('Should return false when value contains only an emoji', () => {
                expect(UtilityEngine.isDigit('😀')).to.equal(false);
            });

            it('Should return false when value is zero', () => {
                expect(UtilityEngine.isDigit(0)).to.equal(false);
            });

            it('Should return false when value is a positive number', () => {
                expect(UtilityEngine.isDigit(1)).to.equal(false);
            });

            it('Should return false when value is a negative number', () => {
                expect(UtilityEngine.isDigit(-1)).to.equal(false);
            });

            it('Should return false when value is true', () => {
                expect(UtilityEngine.isDigit(true)).to.equal(false);
            });

            it('Should return false when value is false', () => {
                expect(UtilityEngine.isDigit(false)).to.equal(false);
            });

            it('Should return false when value is null', () => {
                expect(UtilityEngine.isDigit(null)).to.equal(false);
            });
            it('Should return false when value is an object', () => {
                expect(UtilityEngine.isDigit({})).to.equal(false);
            });

            it('Should return false when value is a empty string', () => {
                expect(UtilityEngine.isDigit('')).to.equal(false);
            });

            it('Should return false when value is an array', () => {
                expect(UtilityEngine.isDigit([])).to.equal(false);
            });

            it('Should return false when value is a function', () => {
                expect(UtilityEngine.isDigit(function() {})).to.equal(false);
            });
        });

        describe('#isDigit(value, MINIMUMLENGTH, maximumLength)', function() {
            it('Should return true when minimum length parameter is undefined', () => {
                expect(UtilityEngine.isDigit('123', undefined, 3)).to.equal(true);
            });

            it('Should return true when minimum length parameter is small enough', () => {
                expect(UtilityEngine.isDigit('123', 1, 3)).to.equal(true);
            });

            it('Should return true when minimum length parameter is big enough', () => {
                expect(UtilityEngine.isDigit('123', 3, 3)).to.equal(true);
            });

            it('Should return true when minimum length parameter is at minimum range', () => {
                expect(UtilityEngine.isDigit('123', 0, 3)).to.equal(true);
            });

            it('Should return true when minimum length parameter is at maximum range', () => {
                expect(UtilityEngine.isDigit('123', 3, 3)).to.equal(true);
            });

            it('Should return true when minimum length parameter is zero', () => {
                expect(UtilityEngine.isDigit('123', 0, 3)).to.equal(true);
            });


            it('Should return false when minimum length parameter is too big', () => {
                expect(UtilityEngine.isDigit('123', 4, 3)).to.equal(false);
            });

            it('Should return false when minimum length parameter is bigger than maximum count', () => {
                expect(UtilityEngine.isDigit('123', 4, 3)).to.equal(false);
            });

            it('Should return false when minimum length parameter is null', () => {
                expect(UtilityEngine.isDigit('1', null, 3)).to.equal(false);
            });

            it('Should return false when minimum length parameter is true', () => {
                expect(UtilityEngine.isDigit('1', true, 3)).to.equal(false);
            });

            it('Should return false when minimum length parameter is false', () => {
                expect(UtilityEngine.isDigit('1', false, 3)).to.equal(false);
            });

            it('Should return false when minimum length parameter is an object', () => {
                expect(UtilityEngine.isDigit('1', {}, 3)).to.equal(false);
            });

            it('Should return false when minimum length parameter is a string', () => {
                expect(UtilityEngine.isDigit('1', 'string', 3)).to.equal(false);
            });

            it('Should return false when minimum length parameter is an array', () => {
                expect(UtilityEngine.isDigit('1', [], 3)).to.equal(false);
            });

            it('Should return false when minimum length parameter is a function', () => {
                expect(UtilityEngine.isDigit('1', function() {}, 3)).to.equal(false);
            });

            it('Should return false when minimum length parameter negative number', () => {
                expect(UtilityEngine.isDigit('1', -1, 3)).to.equal(false);
            });

            it('Should return false when minimum length parameter is positive infinity', () => {
                expect(UtilityEngine.isDigit('1', Number.POSITIVE_INFINITY, 3)).to.equal(false);
            });

            it('Should return false when minimum length parameter is negative infinity', () => {
                expect(UtilityEngine.isDigit('1', Number.NEGATIVE_INFINITY, 3)).to.equal(false);
            });
        });

        describe('#isDigit(value, minimumLength, MAXIMUMLENGTH)', function() {
            it('Should return true when maximum count length is undefined', () => {
                expect(UtilityEngine.isDigit('1', undefined, undefined)).to.equal(true);
            });

            it('Should return true when maximum count length is small enough', () => {
                expect(UtilityEngine.isDigit('123', undefined, 3)).to.equal(true);
            });

            it('Should return true when maximum count length is big enough', () => {
                expect(UtilityEngine.isDigit('123', undefined, 5)).to.equal(true);
            });

            it('Should return true when maximum count length is at maximum range', () => {
                expect(UtilityEngine.isDigit('123', undefined, Number.POSITIVE_INFINITY)).to.equal(true);
            });


            it('Should return false when maximum count length is too small', () => {
                expect(UtilityEngine.isDigit('123', undefined, 2)).to.equal(false);
            });

            it('Should return false when maximum count length is smaller than minimum count', () => {
                expect(UtilityEngine.isDigit('123', 3, 2)).to.equal(false);
            });

            it('Should return false when maximum count length is null', () => {
                expect(UtilityEngine.isDigit('1', undefined, null)).to.equal(false);
            });

            it('Should return false when maximum count length is true', () => {
                expect(UtilityEngine.isDigit('1', undefined, true)).to.equal(false);
            });

            it('Should return false when maximum count length is false', () => {
                expect(UtilityEngine.isDigit('1', undefined, false)).to.equal(false);
            });

            it('Should return false when maximum count length is an object', () => {
                expect(UtilityEngine.isDigit('1', undefined, {})).to.equal(false);
            });

            it('Should return false when maximum count length is a string', () => {
                expect(UtilityEngine.isDigit('1', undefined, 'string')).to.equal(false);
            });

            it('Should return false when maximum count length is an array', () => {
                expect(UtilityEngine.isDigit('1', undefined, [])).to.equal(false);
            });

            it('Should return false when maximum count length is a function', () => {
                expect(UtilityEngine.isDigit('1', undefined, function() {})).to.equal(false);
            });

            it('Should return false when maximum count length negative number', () => {
                expect(UtilityEngine.isDigit('1', undefined, -1)).to.equal(false);
            });

            it('Should return false when maximum count length is negative infinity', () => {
                expect(UtilityEngine.isDigit('1', undefined, Number.NEGATIVE_INFINITY)).to.equal(false);
            });
        });
    });

    // ╔═╗   ╔═╗╔═══════╗╔═══════╗         ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗
    // ║ ║   ║ ║║ ╔═══╗ ║║ ╔═════╝         ╚╗ ╔══╗ ║╚══╗ ╔══╝║ ╔═════╝╚══╗ ╔══╝╚══╗ ╔══╝║ ╔═════╝
    // ║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═════╗╔═══════╗ ║ ║  ║ ║   ║ ║   ║ ║ ╔═══╗   ║ ║      ║ ║   ║ ╚═════╗
    // ║ ╔═══╗ ║║ ╔═══╗ ║╚═════╗ ║╚═══════╝ ║ ║  ║ ║   ║ ║   ║ ║ ╚═╗ ║   ║ ║      ║ ║   ╚═════╗ ║
    // ║ ║   ║ ║║ ║   ║ ║╔═════╝ ║         ╔╝ ╚══╝ ║╔══╝ ╚══╗║ ╚═══╝ ║╔══╝ ╚══╗   ║ ║   ╔═════╝ ║
    // ╚═╝   ╚═╝╚═╝   ╚═╝╚═══════╝         ╚═══════╝╚═══════╝╚═══════╝╚═══════╝   ╚═╝   ╚═══════╝

    describe('#hasDigits(value, minimumCount, maximumCount)', function() {
        describe('#hasDigits(VALUE, minimumLength, maximumLength)', function() {
            it('Should return true when value is a point', () => {
                expect(UtilityEngine.hasDigits('0')).to.equal(true);
            });

            it('Should return true when value is a comma', () => {
                expect(UtilityEngine.hasDigits('1')).to.equal(true);
            });

            it('Should return true when value is an asterisk', () => {
                expect(UtilityEngine.hasDigits('2')).to.equal(true);
            });

            it('Should return true when value is a hyphen', () => {
                expect(UtilityEngine.hasDigits('3')).to.equal(true);
            });

            it('Should return true when value is a tolde', () => {
                expect(UtilityEngine.hasDigits('4')).to.equal(true);
            });

            it('Should return true when value is a low line', () => {
                expect(UtilityEngine.hasDigits('5')).to.equal(true);
            });

            it('Should return true when value a at sign', () => {
                expect(UtilityEngine.hasDigits('6')).to.equal(true);
            });

            it('Should return true when value a colon', () => {
                expect(UtilityEngine.hasDigits('7')).to.equal(true);
            });

            it('Should return true when value a semi color', () => {
                expect(UtilityEngine.hasDigits('8')).to.equal(true);
            });

            it('Should return true when value is a single quote', () => {
                expect(UtilityEngine.hasDigits('9')).to.equal(true);
            });

            it('Should return true when value contains only basic latin digits', () => {
                expect(UtilityEngine.hasDigits(_basicLatinDigits, 1, 500)).to.equal(true);
            });

            it('Should return true when value contains only latin characters', () => {
                expect(UtilityEngine.hasDigits(_latinCharacters, 1, 500)).to.equal(true);
            });

            it('Should return true when value is mixed characters', () => {
                expect(UtilityEngine.hasDigits('123 ABC abc $#& .!?', 1, 500)).to.equal(true);
            });


            it('Should return false when value is a basic latin lowercase letter', () => {
                expect(UtilityEngine.hasDigits('a', 1, 500)).to.equal(false);
            });

            it('Should return false when value is a basic uppercase letter', () => {
                expect(UtilityEngine.hasDigits('A', 1, 500)).to.equal(false);
            });

            it('Should return false when value is a latin-1 lowercase letter', () => {
                expect(UtilityEngine.hasDigits('à', 1, 500)).to.equal(false);
            });

            it('Should return false when value is a latin-1 uppercase letter', () => {
                expect(UtilityEngine.hasDigits('Á', 1, 500)).to.equal(false);
            });

            it('Should return false when value is a latin-A lowercase letter', () => {
                expect(UtilityEngine.hasDigits('ā', 1, 500)).to.equal(false);
            });

            it('Should return false when value is a latin-A uppercase letter', () => {
                expect(UtilityEngine.hasDigits('Ā', 1, 500)).to.equal(false);
            });

            it('Should return false when value contains only basic latin letters', () => {
                expect(UtilityEngine.hasDigits(_basicLatinLetters, 1, 500)).to.equal(false);
            });

            it('Should return false when value contains only basic latin lowercase letters', () => {
                expect(UtilityEngine.hasDigits(_basicLatinLowercaseLetters, 1, 500)).to.equal(false);
            });

            it('Should return false when value contains only basic latin uppercase letters', () => {
                expect(UtilityEngine.hasDigits(_basicLatinUppercaseLetters, 1, 500)).to.equal(false);
            });

            it('Should return false when value contains only latin-1 letters', () => {
                expect(UtilityEngine.hasDigits(_latin1Letters, 1, 500)).to.equal(false);
            });

            it('Should return false when value contains only latin-1 lowercase letters', () => {
                expect(UtilityEngine.hasDigits(_latin1LowercaseLetters, 1, 500)).to.equal(false);
            });

            it('Should return false when value contains only latin-1 uppercase letters', () => {
                expect(UtilityEngine.hasDigits(_latin1UppercaseLetters, 1, 500)).to.equal(false);
            });

            it('Should return false when value contains only latin-A letters', () => {
                expect(UtilityEngine.hasDigits(_latinALetters, 1, 500)).to.equal(false);
            });

            it('Should return false when value contains only latin-A lowercase letters', () => {
                expect(UtilityEngine.hasDigits(_latinALowercaseLetters, 1, 500)).to.equal(false);
            });

            it('Should return false when value contains only latin-A uppercase letters', () => {
                expect(UtilityEngine.hasDigits(_latinAUppercaseLetters, 1, 500)).to.equal(false);
            });

            it('Should return false when value contains only latin-B letters', () => {
                expect(UtilityEngine.hasDigits(_latinBLetters, 1, 500)).to.equal(false);
            });

            it('Should return false when value contains only latin-B lowercase letters', () => {
                expect(UtilityEngine.hasDigits(_latinBLowercaseLetters, 1, 500)).to.equal(false);
            });

            it('Should return false when value contains only latin-B uppercase letters', () => {
                expect(UtilityEngine.hasDigits(_latinBUppercaseLetters, 1, 500)).to.equal(false);
            });

            it('Should return false when value contains only greek letters', () => {
                expect(UtilityEngine.hasDigits(_greekLetters, 1, 500)).to.equal(false);
            });

            it('Should return false when value contains only greek lowercase letters', () => {
                expect(UtilityEngine.hasDigits(_greekLowercaseLetters, 1, 500)).to.equal(false);
            });

            it('Should return false when value contains only greek uppercase letters', () => {
                expect(UtilityEngine.hasDigits(_greekUppercaseLetters, 1, 500)).to.equal(false);
            });

            it('Should return false when value contains only basic latin symbols', () => {
                expect(UtilityEngine.hasDigits(_basicLatinSymbols, 1, 500)).to.equal(false);
            });

            it('Should return false when value contains only latin-1 symbols', () => {
                expect(UtilityEngine.hasDigits(_latin1Symbols, 1, 500)).to.equal(false);
            });

            it('Should return false when value is a sentence', () => {
                expect(UtilityEngine.hasDigits('No half measures.', 1, 500)).to.equal(false);
            });

            it('Should return false when value is an empty string', () => {
                expect(UtilityEngine.hasDigits('', 1, 500)).to.equal(false);
            });

            it('Should return false when value is a whitespace', () => {
                expect(UtilityEngine.hasDigits(' ', 1, 500)).to.equal(false);
            });

            it('Should return false when value contains only an emoji', () => {
                expect(UtilityEngine.hasDigits('😀', 1, 500)).to.equal(false);
            });

            it('Should return false when value is zero', () => {
                expect(UtilityEngine.hasSymbols(0)).to.equal(false);
            });

            it('Should return false when value is a positive number', () => {
                expect(UtilityEngine.hasDigits(1)).to.equal(false);
            });

            it('Should return false when value is a negative number', () => {
                expect(UtilityEngine.hasDigits(-1)).to.equal(false);
            });

            it('Should return false when value is true', () => {
                expect(UtilityEngine.hasDigits(true)).to.equal(false);
            });

            it('Should return false when value is false', () => {
                expect(UtilityEngine.hasDigits(false)).to.equal(false);
            });

            it('Should return false when value is null', () => {
                expect(UtilityEngine.hasDigits(null)).to.equal(false);
            });
            it('Should return false when value is an object', () => {
                expect(UtilityEngine.hasDigits({})).to.equal(false);
            });

            it('Should return false when value is a empty string', () => {
                expect(UtilityEngine.hasDigits('')).to.equal(false);
            });

            it('Should return false when value is an array', () => {
                expect(UtilityEngine.hasDigits([])).to.equal(false);
            });

            it('Should return false when value is a function', () => {
                expect(UtilityEngine.hasDigits(function() {})).to.equal(false);
            });
        });

        describe('#hasDigits(value, MINIMUMCOUNT, maximumCount)', function() {
            it('Should return true when minimum count parameter is undefined', () => {
                expect(UtilityEngine.hasDigits('1A2B3C', undefined)).to.equal(true);
            });

            it('Should return true when minimum count parameter is small enough', () => {
                expect(UtilityEngine.hasDigits('1A2B3C', 1)).to.equal(true);
            });

            it('Should return true when minimum count parameter is big enough', () => {
                expect(UtilityEngine.hasDigits('1A2B3C', 3)).to.equal(true);
            });

            it('Should return true when minimum count parameter is at minimum range', () => {
                expect(UtilityEngine.hasDigits('1A2B3C', 0)).to.equal(true);
            });

            it('Should return true when minimum count parameter is at maximum range', () => {
                expect(UtilityEngine.hasDigits('1A2B3C', 3)).to.equal(true);
            });

            it('Should return true when minimum count parameter is zero', () => {
                expect(UtilityEngine.hasDigits('1A2B3C', 0)).to.equal(true);
            });


            it('Should return false when minimum count parameter is too big', () => {
                expect(UtilityEngine.hasDigits('1A2B3C', 4)).to.equal(false);
            });

            it('Should return false when minimum count parameter is bigger than maximum count', () => {
                expect(UtilityEngine.hasDigits('1!2#3', 4, 3)).to.equal(false);
            });

            it('Should return false when minimum count parameter is null', () => {
                expect(UtilityEngine.hasDigits('1A2B3C', null)).to.equal(false);
            });

            it('Should return false when minimum count parameter is true', () => {
                expect(UtilityEngine.hasDigits('1A2B3C', true)).to.equal(false);
            });

            it('Should return false when minimum count parameter is false', () => {
                expect(UtilityEngine.hasDigits('1A2B3C', false)).to.equal(false);
            });

            it('Should return false when minimum count parameter is an object', () => {
                expect(UtilityEngine.hasDigits('1A2B3C', {})).to.equal(false);
            });

            it('Should return false when minimum count parameter is a string', () => {
                expect(UtilityEngine.hasDigits('1A2B3C', 'string')).to.equal(false);
            });

            it('Should return false when minimum count parameter is an array', () => {
                expect(UtilityEngine.hasDigits('1A2B3C', [])).to.equal(false);
            });

            it('Should return false when minimum count parameter is a function', () => {
                expect(UtilityEngine.hasDigits('1A2B3C', function() {})).to.equal(false);
            });

            it('Should return false when minimum count parameter negative number', () => {
                expect(UtilityEngine.hasDigits('1A2B3C', -1)).to.equal(false);
            });

            it('Should return false when minimum count parameter is positive infinity', () => {
                expect(UtilityEngine.hasDigits('1A2B3C', Number.POSITIVE_INFINITY)).to.equal(false);
            });

            it('Should return false when minimum count parameter is negative infinity', () => {
                expect(UtilityEngine.hasDigits('1A2B3C', Number.NEGATIVE_INFINITY)).to.equal(false);
            });
        });

        describe('#hasDigits(value, minimumCount, MAXIMUMCOUNT)', function() {
            it('Should return true when maximum count parameter is undefined', () => {
                expect(UtilityEngine.hasDigits('1A2B3C', undefined, undefined)).to.equal(true);
            });

            it('Should return true when maximum count parameter is small enough', () => {
                expect(UtilityEngine.hasDigits('1A2B3C', undefined, 3)).to.equal(true);
            });

            it('Should return true when maximum count parameter is big enough', () => {
                expect(UtilityEngine.hasDigits('1A2B3C', undefined, 5)).to.equal(true);
            });

            it('Should return true when maximum count parameter is at maximum range', () => {
                expect(UtilityEngine.hasDigits('1A2B3C', undefined, Number.POSITIVE_INFINITY)).to.equal(true);
            });


            it('Should return false when maximum count parameter is too small', () => {
                expect(UtilityEngine.hasDigits('1A2B3C', undefined, 2)).to.equal(false);
            });

            it('Should return false when maximum count parameter is smaller than minimum count', () => {
                expect(UtilityEngine.hasDigits('1A2B3C', 3, 2)).to.equal(false);
            });

            it('Should return false when maximum count parameter is null', () => {
                expect(UtilityEngine.hasDigits('1A2B3C', undefined, null)).to.equal(false);
            });

            it('Should return false when maximum count parameter is true', () => {
                expect(UtilityEngine.hasDigits('1A2B3C', undefined, true)).to.equal(false);
            });

            it('Should return false when maximum count parameter is false', () => {
                expect(UtilityEngine.hasDigits('1A2B3C', undefined, false)).to.equal(false);
            });

            it('Should return false when maximum count parameter is an object', () => {
                expect(UtilityEngine.hasDigits('1A2B3C', undefined, {})).to.equal(false);
            });

            it('Should return false when maximum count parameter is a string', () => {
                expect(UtilityEngine.hasDigits('1A2B3C', undefined, 'string')).to.equal(false);
            });

            it('Should return false when maximum count parameter is an array', () => {
                expect(UtilityEngine.hasDigits('1A2B3C', undefined, [])).to.equal(false);
            });

            it('Should return false when maximum count parameter is a function', () => {
                expect(UtilityEngine.hasDigits('1A2B3C', undefined, function() {})).to.equal(false);
            });

            it('Should return false when maximum count parameter negative number', () => {
                expect(UtilityEngine.hasDigits('1A2B3C', undefined, -1)).to.equal(false);
            });

            it('Should return false when maximum count parameter is negative infinity', () => {
                expect(UtilityEngine.hasDigits('1A2B3C', undefined, Number.NEGATIVE_INFINITY)).to.equal(false);
            });
        });
    });
});
