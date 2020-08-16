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

const _latin1Symbols = '¡¢£¤¥¦§¨©ª«¬®¯°±²³´¶·¸¹º»¼½¾¿×÷';
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
                expect(UtilityEngine.isSymbol('.', 1, 200)).to.equal(true);
            });

            it('Should return true when value is a comma', () => {
                expect(UtilityEngine.isSymbol(',', 1, 200)).to.equal(true);
            });

            it('Should return true when value is an asterisk', () => {
                expect(UtilityEngine.isSymbol('*', 1, 200)).to.equal(true);
            });

            it('Should return true when value is a hyphen', () => {
                expect(UtilityEngine.isSymbol('-', 1, 200)).to.equal(true);
            });

            it('Should return true when value is a tolde', () => {
                expect(UtilityEngine.isSymbol('~', 1, 200)).to.equal(true);
            });

            it('Should return true when value is a low line', () => {
                expect(UtilityEngine.isSymbol('_', 1, 200)).to.equal(true);
            });

            it('Should return true when value a at sign', () => {
                expect(UtilityEngine.isSymbol('@', 1, 200)).to.equal(true);
            });

            it('Should return true when value a colon', () => {
                expect(UtilityEngine.isSymbol(':', 1, 200)).to.equal(true);
            });

            it('Should return true when value a semi color', () => {
                expect(UtilityEngine.isSymbol(';', 1, 200)).to.equal(true);
            });

            it('Should return true when value is a single quote', () => {
                expect(UtilityEngine.isSymbol('\'', 1, 200)).to.equal(true);
            });

            it('Should return true when value is a double quote', () => {
                expect(UtilityEngine.isSymbol('"', 1, 200)).to.equal(true);
            });

            it('Should return true when value is a hashtag', () => {
                expect(UtilityEngine.isSymbol('#', 1, 200)).to.equal(true);
            });

            it('Should return true when value is a dollar sign', () => {
                expect(UtilityEngine.isSymbol('$', 1, 200)).to.equal(true);
            });

            it('Should return true when value is a percent sign', () => {
                expect(UtilityEngine.isSymbol('%', 1, 200)).to.equal(true);
            });

            it('Should return true when value is a question mark', () => {
                expect(UtilityEngine.isSymbol('?', 1, 200)).to.equal(true);
            });

            it('Should return true when value an exclamation point', () => {
                expect(UtilityEngine.isSymbol('!', 1, 200)).to.equal(true);
            });

            it('Should return true when value a forward slash', () => {
                expect(UtilityEngine.isSymbol('/', 1, 200)).to.equal(true);
            });

            it('Should return true when value a backslash', () => {
                expect(UtilityEngine.isSymbol('\\', 1, 200)).to.equal(true);
            });

            it('Should return true when value a less-than sign', () => {
                expect(UtilityEngine.isSymbol('<', 1, 200)).to.equal(true);
            });

            it('Should return true when value an equal sign', () => {
                expect(UtilityEngine.isSymbol('\\', 1, 200)).to.equal(true);
            });

            it('Should return true when value a greater-than sign', () => {
                expect(UtilityEngine.isSymbol('>', 1, 200)).to.equal(true);
            });

            it('Should return true when value is a left parenthesis', () => {
                expect(UtilityEngine.isSymbol('(', 1, 200)).to.equal(true);
            });

            it('Should return true when value is right parenthesis', () => {
                expect(UtilityEngine.isSymbol(')', 1, 200)).to.equal(true);
            });

            it('Should return true when value is a left square bracket', () => {
                expect(UtilityEngine.isSymbol('[', 1, 200)).to.equal(true);
            });

            it('Should return true when value is right square bracket', () => {
                expect(UtilityEngine.isSymbol(']', 1, 200)).to.equal(true);
            });

            it('Should return true when value is a left curly bracket', () => {
                expect(UtilityEngine.isSymbol('{', 1, 200)).to.equal(true);
            });

            it('Should return true when value is right curly bracket', () => {
                expect(UtilityEngine.isSymbol('}', 1, 200)).to.equal(true);
            });

            it('Should return true when value contains only basic latin symbols', () => {
                expect(UtilityEngine.isSymbol(_basicLatinSymbols, 1, 200)).to.equal(true);
            });

            it('Should return true when value contains only latin-1 symbols', () => {
                expect(UtilityEngine.isSymbol(_latin1Symbols, 1, 200)).to.equal(true);
            });


            it('Should return false when value is a basic latin lowercase letter', () => {
                expect(UtilityEngine.isSymbol('a', 1, 200)).to.equal(false);
            });

            it('Should return false when value is a basic uppercase letter', () => {
                expect(UtilityEngine.isSymbol('A', 1, 200)).to.equal(false);
            });

            it('Should return false when value is a latin-1 lowercase letter', () => {
                expect(UtilityEngine.isSymbol('à', 1, 200)).to.equal(false);
            });

            it('Should return false when value is a latin-1 uppercase letter', () => {
                expect(UtilityEngine.isSymbol('Á', 1, 200)).to.equal(false);
            });

            it('Should return false when value is a latin-A lowercase letter', () => {
                expect(UtilityEngine.isSymbol('ā', 1, 200)).to.equal(false);
            });

            it('Should return false when value is a latin-A uppercase letter', () => {
                expect(UtilityEngine.isSymbol('Ā', 1, 200)).to.equal(false);
            });

            it('Should return false when value contains only basic latin letters', () => {
                expect(UtilityEngine.isSymbol(_basicLatinLetters, 1, 200)).to.equal(false);
            });

            it('Should return false when value contains only basic latin lowercase letters', () => {
                expect(UtilityEngine.isSymbol(_basicLatinLowercaseLetters, 1, 200)).to.equal(false);
            });

            it('Should return false when value contains only basic latin uppercase letters', () => {
                expect(UtilityEngine.isSymbol(_basicLatinUppercaseLetters, 1, 200)).to.equal(false);
            });

            it('Should return false when value contains only latin-1 letters', () => {
                expect(UtilityEngine.isSymbol(_latin1Letters, 1, 200)).to.equal(false);
            });

            it('Should return false when value contains only latin-1 lowercase letters', () => {
                expect(UtilityEngine.isSymbol(_latin1LowercaseLetters, 1, 200)).to.equal(false);
            });

            it('Should return false when value contains only latin-1 uppercase letters', () => {
                expect(UtilityEngine.isSymbol(_latin1UppercaseLetters, 1, 200)).to.equal(false);
            });

            it('Should return false when value contains only latin-A letters', () => {
                expect(UtilityEngine.isSymbol(_latinALetters, 1, 200)).to.equal(false);
            });

            it('Should return trufalsee when value contains only latin-A lowercase letters', () => {
                expect(UtilityEngine.isSymbol(_latinALowercaseLetters, 1, 200)).to.equal(false);
            });

            it('Should return false when value contains only latin-A uppercase letters', () => {
                expect(UtilityEngine.isSymbol(_latinAUppercaseLetters, 1, 200)).to.equal(false);
            });

            it('Should return false when value contains only latin-B letters', () => {
                expect(UtilityEngine.isSymbol(_latinBLetters, 1, 200)).to.equal(false);
            });

            it('Should return false when value contains only latin-B lowercase letters', () => {
                expect(UtilityEngine.isSymbol(_latinBLowercaseLetters, 1, 200)).to.equal(false);
            });

            it('Should return false when value contains only latin-B uppercase letters', () => {
                expect(UtilityEngine.isSymbol(_latinBUppercaseLetters, 1, 200)).to.equal(false);
            });

            it('Should return false when value contains only greek letters', () => {
                expect(UtilityEngine.isSymbol(_greekLetters, 1, 200)).to.equal(false);
            });

            it('Should return false when value contains only greek lowercase letters', () => {
                expect(UtilityEngine.isSymbol(_greekLowercaseLetters, 1, 200)).to.equal(false);
            });

            it('Should return false when value contains only greek uppercase letters', () => {
                expect(UtilityEngine.isSymbol(_greekUppercaseLetters, 1, 200)).to.equal(false);
            });

            it('Should return false when value is an empty string', () => {
                expect(UtilityEngine.isSymbol('', 1, 200)).to.equal(false);
            });

            it('Should return false when value is a whitespace', () => {
                expect(UtilityEngine.isSymbol(' ', 1, 200)).to.equal(false);
            });

            it('Should return false when value contains only basic latin digits', () => {
                expect(UtilityEngine.isSymbol(_basicLatinDigits, 1, 200)).to.equal(false);
            });

            it('Should return false when value contains only latin characters', () => {
                expect(UtilityEngine.isSymbol(_latinCharacters, 1, 200)).to.equal(false);
            });

            it('Should return false when value contains only an emoji', () => {
                expect(UtilityEngine.isSymbol('😀', 1, 200)).to.equal(false);
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

        describe('#isSymbol(value, MINIMUMLENGTH, maximumLength)', function() {

        });

        describe('#isSymbol(value, minimumLength, MAXIMUMLENGTH)', function() {

        });
    });
});
