// ╔═══════╗╔═╗   ╔═╗╔═══════╗╔══════╗ ╔═══════╗╔═╗         ╔═══════╗╔═══════╗╔═══════╗╔═══════╗   ╔═══════╗╔═══════╗╔═══════╗
// ║ ╔═════╝║ ║   ║ ║║ ╔╗ ╔╗ ║║ ╔══╗ ║ ║ ╔═══╗ ║║ ║         ╚══╗ ╔══╝║ ╔═════╝║ ╔═════╝╚══╗ ╔══╝   ║ ╔╗ ╔╗ ║╚═══╗ ╔═╝║ ╔═════╝
// ║ ╚═════╗║ ╚═══╝ ║║ ║║ ║║ ║║ ╚══╝ ╚╗║ ║   ║ ║║ ║            ║ ║   ║ ╚═════╗║ ╚═════╗   ║ ║      ║ ║║ ║║ ║    ║ ║  ║ ╚═════╗
// ╚═════╗ ║╚═════╗ ║║ ║║ ║║ ║║ ╔═══╗ ║║ ║   ║ ║║ ║            ║ ║   ║ ╔═════╝╚═════╗ ║   ║ ║      ║ ║║ ║║ ║    ║ ║  ╚═════╗ ║
// ╔═════╝ ║╔═════╝ ║║ ║║ ║║ ║║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═════╗╔═╗   ║ ║   ║ ╚═════╗╔═════╝ ║   ║ ║   ╔═╗║ ║║ ║║ ║╔═══╝ ║  ╔═════╝ ║
// ╚═══════╝╚═══════╝╚═╝╚═╝╚═╝╚═══════╝╚═══════╝╚═══════╝╚═╝   ╚═╝   ╚═══════╝╚═══════╝   ╚═╝   ╚═╝╚═╝╚═╝╚═╝╚═════╝  ╚═══════╝

'use strict';   // Extend JavaScript strict mode to the entire script

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

const _latinCharacters = `${_latinLetters}${_basicLatinSymbols}${_latin1Symbols}`;

// ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗
// ╚══╗ ╔══╝║ ╔╗ ╔╗ ║║ ╔═══╗ ║║ ╔═══╗ ║║ ╔═══╗ ║╚══╗ ╔══╝
//    ║ ║   ║ ║║ ║║ ║║ ╚═══╝ ║║ ║   ║ ║║ ╚═══╝ ║   ║ ║
//    ║ ║   ║ ║║ ║║ ║║ ╔═════╝║ ║   ║ ║║ ╔═╗ ╔═╝   ║ ║
// ╔══╝ ╚══╗║ ║║ ║║ ║║ ║      ║ ╚═══╝ ║║ ║ ║ ╚═╗   ║ ║
// ╚═══════╝╚═╝╚═╝╚═╝╚═╝      ╚═══════╝╚═╝ ╚═══╝   ╚═╝

import UtilityEngine from '../dist/index.js';

import chai from 'chai';

const expect = chai.expect;

// ╔═══════╗╔═╗   ╔═╗╔═══════╗╔══════╗ ╔═══════╗╔═╗
// ║ ╔═════╝║ ║   ║ ║║ ╔╗ ╔╗ ║║ ╔══╗ ║ ║ ╔═══╗ ║║ ║
// ║ ╚═════╗║ ╚═══╝ ║║ ║║ ║║ ║║ ╚══╝ ╚╗║ ║   ║ ║║ ║
// ╚═════╗ ║╚═════╗ ║║ ║║ ║║ ║║ ╔═══╗ ║║ ║   ║ ║║ ║
// ╔═════╝ ║╔═════╝ ║║ ║║ ║║ ║║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═════╗
// ╚═══════╝╚═══════╝╚═╝╚═╝╚═╝╚═══════╝╚═══════╝╚═══════╝

describe('Symbol', function() {
    // ╔═══════╗╔═══════╗         ╔═══════╗╔═╗   ╔═╗╔═══════╗╔══════╗ ╔═══════╗╔═╗
    // ╚══╗ ╔══╝║ ╔═════╝         ║ ╔═════╝║ ║   ║ ║║ ╔╗ ╔╗ ║║ ╔══╗ ║ ║ ╔═══╗ ║║ ║
    //    ║ ║   ║ ╚═════╗╔═══════╗║ ╚═════╗║ ╚═══╝ ║║ ║║ ║║ ║║ ╚══╝ ╚╗║ ║   ║ ║║ ║
    //    ║ ║   ╚═════╗ ║╚═══════╝╚═════╗ ║╚═════╗ ║║ ║║ ║║ ║║ ╔═══╗ ║║ ║   ║ ║║ ║
    // ╔══╝ ╚══╗╔═════╝ ║         ╔═════╝ ║╔═════╝ ║║ ║║ ║║ ║║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═════╗
    // ╚═══════╝╚═══════╝         ╚═══════╝╚═══════╝╚═╝╚═╝╚═╝╚═══════╝╚═══════╝╚═══════╝

    describe('#isSymbol(value, minimumLength, maximumLength)', function() {
        describe('#isSymbol(VALUE, minimumLength, maximumLength)', function() {
            it('Should return true when value is a point', () => {
                expect(UtilityEngine.isSymbol('.', 1, 500)).to.equal(true);
            });

            it('Should return true when value is a comma', () => {
                expect(UtilityEngine.isSymbol(',', 1, 500)).to.equal(true);
            });

            it('Should return true when value is an asterisk', () => {
                expect(UtilityEngine.isSymbol('*', 1, 500)).to.equal(true);
            });

            it('Should return true when value is a hyphen', () => {
                expect(UtilityEngine.isSymbol('-', 1, 500)).to.equal(true);
            });

            it('Should return true when value is a tolde', () => {
                expect(UtilityEngine.isSymbol('~', 1, 500)).to.equal(true);
            });

            it('Should return true when value is a low line', () => {
                expect(UtilityEngine.isSymbol('_', 1, 500)).to.equal(true);
            });

            it('Should return true when value a at sign', () => {
                expect(UtilityEngine.isSymbol('@', 1, 500)).to.equal(true);
            });

            it('Should return true when value a colon', () => {
                expect(UtilityEngine.isSymbol(':', 1, 500)).to.equal(true);
            });

            it('Should return true when value a semi color', () => {
                expect(UtilityEngine.isSymbol(';', 1, 500)).to.equal(true);
            });

            it('Should return true when value is a single quote', () => {
                expect(UtilityEngine.isSymbol('\'', 1, 500)).to.equal(true);
            });

            it('Should return true when value is a double quote', () => {
                expect(UtilityEngine.isSymbol('"', 1, 500)).to.equal(true);
            });

            it('Should return true when value is a hashtag', () => {
                expect(UtilityEngine.isSymbol('#', 1, 500)).to.equal(true);
            });

            it('Should return true when value is a dollar sign', () => {
                expect(UtilityEngine.isSymbol('$', 1, 200)).to.equal(true);
            });

            it('Should return true when value is a percent sign', () => {
                expect(UtilityEngine.isSymbol('%', 1, 200)).to.equal(true);
            });

            it('Should return true when value is a question mark', () => {
                expect(UtilityEngine.isSymbol('?', 1, 500)).to.equal(true);
            });

            it('Should return true when value an exclamation point', () => {
                expect(UtilityEngine.isSymbol('!', 1, 500)).to.equal(true);
            });

            it('Should return true when value a forward slash', () => {
                expect(UtilityEngine.isSymbol('/', 1, 500)).to.equal(true);
            });

            it('Should return true when value a backslash', () => {
                expect(UtilityEngine.isSymbol('\\', 1, 500)).to.equal(true);
            });

            it('Should return true when value a less-than sign', () => {
                expect(UtilityEngine.isSymbol('<', 1, 500)).to.equal(true);
            });

            it('Should return true when value an equal sign', () => {
                expect(UtilityEngine.isSymbol('\\', 1, 500)).to.equal(true);
            });

            it('Should return true when value a greater-than sign', () => {
                expect(UtilityEngine.isSymbol('>', 1, 500)).to.equal(true);
            });

            it('Should return true when value is a left parenthesis', () => {
                expect(UtilityEngine.isSymbol('(', 1, 500)).to.equal(true);
            });

            it('Should return true when value is right parenthesis', () => {
                expect(UtilityEngine.isSymbol(')', 1, 500)).to.equal(true);
            });

            it('Should return true when value is a left square bracket', () => {
                expect(UtilityEngine.isSymbol('[', 1, 200)).to.equal(true);
            });

            it('Should return true when value is right square bracket', () => {
                expect(UtilityEngine.isSymbol(']', 1, 500)).to.equal(true);
            });

            it('Should return true when value is a left curly bracket', () => {
                expect(UtilityEngine.isSymbol('{', 1, 500)).to.equal(true);
            });

            it('Should return true when value is right curly bracket', () => {
                expect(UtilityEngine.isSymbol('}', 1, 500)).to.equal(true);
            });

            it('Should return true when value contains only basic latin symbols', () => {
                expect(UtilityEngine.isSymbol(_basicLatinSymbols, 1, 500)).to.equal(true);
            });

            it('Should return true when value contains only latin-1 symbols', () => {
                expect(UtilityEngine.isSymbol(_latin1Symbols, 1, 500)).to.equal(true);
            });


            it('Should return false when value is a basic latin lowercase letter', () => {
                expect(UtilityEngine.isSymbol('a', 1, 500)).to.equal(false);
            });

            it('Should return false when value is a basic uppercase letter', () => {
                expect(UtilityEngine.isSymbol('A', 1, 500)).to.equal(false);
            });

            it('Should return false when value is a latin-1 lowercase letter', () => {
                expect(UtilityEngine.isSymbol('à', 1, 500)).to.equal(false);
            });

            it('Should return false when value is a latin-1 uppercase letter', () => {
                expect(UtilityEngine.isSymbol('Á', 1, 500)).to.equal(false);
            });

            it('Should return false when value is a latin-A lowercase letter', () => {
                expect(UtilityEngine.isSymbol('ā', 1, 500)).to.equal(false);
            });

            it('Should return false when value is a latin-A uppercase letter', () => {
                expect(UtilityEngine.isSymbol('Ā', 1, 500)).to.equal(false);
            });

            it('Should return false when value contains only basic latin letters', () => {
                expect(UtilityEngine.isSymbol(_basicLatinLetters, 1, 500)).to.equal(false);
            });

            it('Should return false when value contains only basic latin lowercase letters', () => {
                expect(UtilityEngine.isSymbol(_basicLatinLowercaseLetters, 1, 500)).to.equal(false);
            });

            it('Should return false when value contains only basic latin uppercase letters', () => {
                expect(UtilityEngine.isSymbol(_basicLatinUppercaseLetters, 1, 500)).to.equal(false);
            });

            it('Should return false when value contains only latin-1 letters', () => {
                expect(UtilityEngine.isSymbol(_latin1Letters, 1, 500)).to.equal(false);
            });

            it('Should return false when value contains only latin-1 lowercase letters', () => {
                expect(UtilityEngine.isSymbol(_latin1LowercaseLetters, 1, 500)).to.equal(false);
            });

            it('Should return false when value contains only latin-1 uppercase letters', () => {
                expect(UtilityEngine.isSymbol(_latin1UppercaseLetters, 1, 500)).to.equal(false);
            });

            it('Should return false when value contains only latin-A letters', () => {
                expect(UtilityEngine.isSymbol(_latinALetters, 1, 500)).to.equal(false);
            });

            it('Should return trufalsee when value contains only latin-A lowercase letters', () => {
                expect(UtilityEngine.isSymbol(_latinALowercaseLetters, 1, 500)).to.equal(false);
            });

            it('Should return false when value contains only latin-A uppercase letters', () => {
                expect(UtilityEngine.isSymbol(_latinAUppercaseLetters, 1, 500)).to.equal(false);
            });

            it('Should return false when value contains only latin-B letters', () => {
                expect(UtilityEngine.isSymbol(_latinBLetters, 1, 500)).to.equal(false);
            });

            it('Should return false when value contains only latin-B lowercase letters', () => {
                expect(UtilityEngine.isSymbol(_latinBLowercaseLetters, 1, 500)).to.equal(false);
            });

            it('Should return false when value contains only latin-B uppercase letters', () => {
                expect(UtilityEngine.isSymbol(_latinBUppercaseLetters, 1, 500)).to.equal(false);
            });

            it('Should return false when value contains only greek letters', () => {
                expect(UtilityEngine.isSymbol(_greekLetters, 1, 500)).to.equal(false);
            });

            it('Should return false when value contains only greek lowercase letters', () => {
                expect(UtilityEngine.isSymbol(_greekLowercaseLetters, 1, 500)).to.equal(false);
            });

            it('Should return false when value contains only greek uppercase letters', () => {
                expect(UtilityEngine.isSymbol(_greekUppercaseLetters, 1, 500)).to.equal(false);
            });

            it('Should return false when value contains only basic latin digits', () => {
                expect(UtilityEngine.isSymbol(_basicLatinDigits, 1, 500)).to.equal(false);
            });

            it('Should return false when value contains only latin characters', () => {
                expect(UtilityEngine.isSymbol(_latinCharacters, 1, 500)).to.equal(false);
            });

            it('Should return false when value is mixed characters', () => {
                expect(UtilityEngine.isSymbol('123 ABC abc $#& .!?', 1, 500)).to.equal(false);
            });

            it('Should return false when value is a sentence', () => {
                expect(UtilityEngine.isSymbol('No half measures.', 1, 500)).to.equal(false);
            });

            it('Should return false when value is an empty string', () => {
                expect(UtilityEngine.isSymbol('', 1, 500)).to.equal(false);
            });

            it('Should return false when value is a whitespace', () => {
                expect(UtilityEngine.isSymbol(' ', 1, 500)).to.equal(false);
            });

            it('Should return false when value contains only an emoji', () => {
                expect(UtilityEngine.isSymbol('😀', 1, 500)).to.equal(false);
            });

            it('Should return false when value is zero', () => {
                expect(UtilityEngine.isSymbol(0)).to.equal(false);
            });

            it('Should return false when value is a positive number', () => {
                expect(UtilityEngine.isSymbol(1)).to.equal(false);
            });

            it('Should return false when value is a negative number', () => {
                expect(UtilityEngine.isSymbol(-1)).to.equal(false);
            });

            it('Should return false when value is true', () => {
                expect(UtilityEngine.isSymbol(true)).to.equal(false);
            });

            it('Should return false when value is false', () => {
                expect(UtilityEngine.isSymbol(false)).to.equal(false);
            });

            it('Should return false when value is null', () => {
                expect(UtilityEngine.isSymbol(null)).to.equal(false);
            });
            it('Should return false when value is an object', () => {
                expect(UtilityEngine.isSymbol({})).to.equal(false);
            });

            it('Should return false when value is a empty string', () => {
                expect(UtilityEngine.isSymbol('')).to.equal(false);
            });

            it('Should return false when value is an array', () => {
                expect(UtilityEngine.isSymbol([])).to.equal(false);
            });

            it('Should return false when value is a function', () => {
                expect(UtilityEngine.isSymbol(function() {})).to.equal(false);
            });
        });

        describe('#isSymbol(value, MINIMUMCOUNT, maximumCount)', function() {
            it('Should return true when minimum count parameter is undefined', () => {
                expect(UtilityEngine.isSymbol('!!!', undefined, 3)).to.equal(true);
            });

            it('Should return true when minimum count parameter is small enough', () => {
                expect(UtilityEngine.isSymbol('!!!', 1, 3)).to.equal(true);
            });

            it('Should return true when minimum count parameter is big enough', () => {
                expect(UtilityEngine.isSymbol('!!!', 3, 3)).to.equal(true);
            });

            it('Should return true when minimum count parameter is at minimum range', () => {
                expect(UtilityEngine.isSymbol('!!!', 0, 3)).to.equal(true);
            });

            it('Should return true when minimum count parameter is at maximum range', () => {
                expect(UtilityEngine.isSymbol('!!!', 3, 3)).to.equal(true);
            });

            it('Should return true when minimum count parameter is zero', () => {
                expect(UtilityEngine.isSymbol('!!!', 0, 3)).to.equal(true);
            });


            it('Should return false when minimum count parameter is too big', () => {
                expect(UtilityEngine.isSymbol('!!!', 4, 3)).to.equal(false);
            });

            it('Should return false when minimum count parameter is bigger than maximum count', () => {
                expect(UtilityEngine.isSymbol('!!!', 4, 3)).to.equal(false);
            });

            it('Should return false when minimum count parameter is null', () => {
                expect(UtilityEngine.isSymbol('!', null, 3)).to.equal(false);
            });

            it('Should return false when minimum count parameter is true', () => {
                expect(UtilityEngine.isSymbol('!', true, 3)).to.equal(false);
            });

            it('Should return false when minimum count parameter is false', () => {
                expect(UtilityEngine.isSymbol('!', false, 3)).to.equal(false);
            });

            it('Should return false when minimum count parameter is an object', () => {
                expect(UtilityEngine.isSymbol('!', {}, 3)).to.equal(false);
            });

            it('Should return false when minimum count parameter is a string', () => {
                expect(UtilityEngine.isSymbol('!', 'string', 3)).to.equal(false);
            });

            it('Should return false when minimum count parameter is an array', () => {
                expect(UtilityEngine.isSymbol('!', [], 3)).to.equal(false);
            });

            it('Should return false when minimum count parameter is a function', () => {
                expect(UtilityEngine.isSymbol('!', function() {}, 3)).to.equal(false);
            });

            it('Should return false when minimum count parameter negative number', () => {
                expect(UtilityEngine.isSymbol('!', -1, 3)).to.equal(false);
            });

            it('Should return false when minimum count parameter is positive infinity', () => {
                expect(UtilityEngine.isSymbol('!', Number.POSITIVE_INFINITY, 3)).to.equal(false);
            });

            it('Should return false when minimum count parameter is negative infinity', () => {
                expect(UtilityEngine.isSymbol('!', Number.NEGATIVE_INFINITY, 3)).to.equal(false);
            });
        });

        describe('#isSymbol(value, minimumCount, MAXIMUMCOUNT)', function() {
            it('Should return true when maximum count parameter is undefined', () => {
                expect(UtilityEngine.isSymbol('!', undefined, undefined)).to.equal(true);
            });

            it('Should return true when maximum count parameter is small enough', () => {
                expect(UtilityEngine.isSymbol('!!!', undefined, 3)).to.equal(true);
            });

            it('Should return true when maximum count parameter is big enough', () => {
                expect(UtilityEngine.isSymbol('!!!', undefined, 5)).to.equal(true);
            });

            it('Should return true when maximum count parameter is at maximum range', () => {
                expect(UtilityEngine.isSymbol('!!!', undefined, Number.POSITIVE_INFINITY)).to.equal(true);
            });


            it('Should return false when maximum count parameter is too small', () => {
                expect(UtilityEngine.isSymbol('!!!', undefined, 2)).to.equal(false);
            });

            it('Should return false when maximum count parameter is smaller than minimum count', () => {
                expect(UtilityEngine.isSymbol('!!!', 3, 2)).to.equal(false);
            });

            it('Should return false when maximum count parameter is null', () => {
                expect(UtilityEngine.isSymbol('!', undefined, null)).to.equal(false);
            });

            it('Should return false when maximum count parameter is true', () => {
                expect(UtilityEngine.isSymbol('!', undefined, true)).to.equal(false);
            });

            it('Should return false when maximum count parameter is false', () => {
                expect(UtilityEngine.isSymbol('!', undefined, false)).to.equal(false);
            });

            it('Should return false when maximum count parameter is an object', () => {
                expect(UtilityEngine.isSymbol('!', undefined, {})).to.equal(false);
            });

            it('Should return false when maximum count parameter is a string', () => {
                expect(UtilityEngine.isSymbol('!', undefined, 'string')).to.equal(false);
            });

            it('Should return false when maximum count parameter is an array', () => {
                expect(UtilityEngine.isSymbol('!', undefined, [])).to.equal(false);
            });

            it('Should return false when maximum count parameter is a function', () => {
                expect(UtilityEngine.isSymbol('!', undefined, function() {})).to.equal(false);
            });

            it('Should return false when maximum count parameter negative number', () => {
                expect(UtilityEngine.isSymbol('!', undefined, -1)).to.equal(false);
            });

            it('Should return false when maximum count parameter is negative infinity', () => {
                expect(UtilityEngine.isSymbol('!', undefined, Number.NEGATIVE_INFINITY)).to.equal(false);
            });
        });
    });
});
