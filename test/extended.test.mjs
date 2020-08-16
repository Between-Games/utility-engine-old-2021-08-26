// ╔═══════╗╔════╗╔═╗╔═══════╗╔═══════╗╔════╗╔═╗╔═══════╗╔═══════╗╔═══════╗   ╔═══════╗╔═══════╗╔═══════╗╔═══════╗   ╔═══════╗╔═══════╗╔═══════╗
// ║ ╔═════╝╚══╗ ║║ ║╚══╗ ╔══╝║ ╔═════╝║ ╔╗ ║║ ║╚╗ ╔══╗ ║║ ╔═════╝╚╗ ╔══╗ ║   ╚══╗ ╔══╝║ ╔═════╝║ ╔═════╝╚══╗ ╔══╝   ║ ╔╗ ╔╗ ║╚═══╗ ╔═╝║ ╔═════╝
// ║ ╚═════╗╔══╝ ╚╝ ║   ║ ║   ║ ╚═════╗║ ║║ ║║ ║ ║ ║  ║ ║║ ╚═════╗ ║ ║  ║ ║      ║ ║   ║ ╚═════╗║ ╚═════╗   ║ ║      ║ ║║ ║║ ║    ║ ║  ║ ╚═════╗
// ║ ╔═════╝║ ╔╗ ╔══╝   ║ ║   ║ ╔═════╝║ ║║ ║║ ║ ║ ║  ║ ║║ ╔═════╝ ║ ║  ║ ║      ║ ║   ║ ╔═════╝╚═════╗ ║   ║ ║      ║ ║║ ║║ ║    ║ ║  ╚═════╗ ║
// ║ ╚═════╗║ ║║ ╚══╗   ║ ║   ║ ╚═════╗║ ║║ ╚╝ ║╔╝ ╚══╝ ║║ ╚═════╗╔╝ ╚══╝ ║╔═╗   ║ ║   ║ ╚═════╗╔═════╝ ║   ║ ║   ╔═╗║ ║║ ║║ ║╔═══╝ ║  ╔═════╝ ║
// ╚═══════╝╚═╝╚════╝   ╚═╝   ╚═══════╝╚═╝╚════╝╚═══════╝╚═══════╝╚═══════╝╚═╝   ╚═╝   ╚═══════╝╚═══════╝   ╚═╝   ╚═╝╚═╝╚═╝╚═╝╚═════╝  ╚═══════╝

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

const _latinCharacters = `${_latinLetters}${_basicLatinSymbols}${_latin1Symbols}`;

// ╔═══════╗╔════╗╔═╗╔═══════╗╔═══════╗╔════╗╔═╗╔═══════╗╔═══════╗╔═══════╗
// ║ ╔═════╝╚══╗ ║║ ║╚══╗ ╔══╝║ ╔═════╝║ ╔╗ ║║ ║╚╗ ╔══╗ ║║ ╔═════╝╚╗ ╔══╗ ║
// ║ ╚═════╗╔══╝ ╚╝ ║   ║ ║   ║ ╚═════╗║ ║║ ║║ ║ ║ ║  ║ ║║ ╚═════╗ ║ ║  ║ ║
// ║ ╔═════╝║ ╔╗ ╔══╝   ║ ║   ║ ╔═════╝║ ║║ ║║ ║ ║ ║  ║ ║║ ╔═════╝ ║ ║  ║ ║
// ║ ╚═════╗║ ║║ ╚══╗   ║ ║   ║ ╚═════╗║ ║║ ╚╝ ║╔╝ ╚══╝ ║║ ╚═════╗╔╝ ╚══╝ ║
// ╚═══════╝╚═╝╚════╝   ╚═╝   ╚═══════╝╚═╝╚════╝╚═══════╝╚═══════╝╚═══════╝

describe('Extended', function() {
    // ╔═══════╗╔═══════╗         ╔═══════╗╔════╗╔═╗╔═══════╗╔═══════╗╔════╗╔═╗╔═══════╗╔═══════╗╔═══════╗         ╔═╗      ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗
    // ╚══╗ ╔══╝║ ╔═════╝         ║ ╔═════╝╚══╗ ║║ ║╚══╗ ╔══╝║ ╔═════╝║ ╔╗ ║║ ║╚╗ ╔══╗ ║║ ╔═════╝╚╗ ╔══╗ ║         ║ ║      ║ ╔═════╝╚══╗ ╔══╝╚══╗ ╔══╝║ ╔═════╝║ ╔═══╗ ║
    //    ║ ║   ║ ╚═════╗╔═══════╗║ ╚═════╗╔══╝ ╚╝ ║   ║ ║   ║ ╚═════╗║ ║║ ║║ ║ ║ ║  ║ ║║ ╚═════╗ ║ ║  ║ ║╔═══════╗║ ║      ║ ╚═════╗   ║ ║      ║ ║   ║ ╚═════╗║ ╚═══╝ ║
    //    ║ ║   ╚═════╗ ║╚═══════╝║ ╔═════╝║ ╔╗ ╔══╝   ║ ║   ║ ╔═════╝║ ║║ ║║ ║ ║ ║  ║ ║║ ╔═════╝ ║ ║  ║ ║╚═══════╝║ ║      ║ ╔═════╝   ║ ║      ║ ║   ║ ╔═════╝║ ╔═╗ ╔═╝
    // ╔══╝ ╚══╗╔═════╝ ║         ║ ╚═════╗║ ║║ ╚══╗   ║ ║   ║ ╚═════╗║ ║║ ╚╝ ║╔╝ ╚══╝ ║║ ╚═════╗╔╝ ╚══╝ ║         ║ ╚═════╗║ ╚═════╗   ║ ║      ║ ║   ║ ╚═════╗║ ║ ║ ╚═╗
    // ╚═══════╝╚═══════╝         ╚═══════╝╚═╝╚════╝   ╚═╝   ╚═══════╝╚═╝╚════╝╚═══════╝╚═══════╝╚═══════╝         ╚═══════╝╚═══════╝   ╚═╝      ╚═╝   ╚═══════╝╚═╝ ╚═══╝

    describe('#isExtendedLetter(value, minimumLength, maximumLength)', function() {
        describe('#isExtendedLetter(VALUE, minimumLength, maximumLength)', function() {
            it('Should return true when value is a basic latin lowercase letter', () => {
                expect(UtilityEngine.isExtendedLetter('a', 1, 200)).to.equal(true);
            });

            it('Should return true when value is a basic uppercase letter', () => {
                expect(UtilityEngine.isExtendedLetter('A', 1, 200)).to.equal(true);
            });

            it('Should return true when value is a latin-1 lowercase letter', () => {
                expect(UtilityEngine.isExtendedLetter('à', 1, 200)).to.equal(true);
            });

            it('Should return true when value is a latin-1 uppercase letter', () => {
                expect(UtilityEngine.isExtendedLetter('Á', 1, 200)).to.equal(true);
            });

            it('Should return true when value is a latin-A lowercase letter', () => {
                expect(UtilityEngine.isExtendedLetter('ā', 1, 200)).to.equal(true);
            });

            it('Should return true when value is a latin-A uppercase letter', () => {
                expect(UtilityEngine.isExtendedLetter('Ā', 1, 200)).to.equal(true);
            });

            it('Should return true when value contains only basic latin letters', () => {
                expect(UtilityEngine.isExtendedLetter(_basicLatinLetters, 1, 200)).to.equal(true);
            });

            it('Should return true when value contains only basic latin lowercase letters', () => {
                expect(UtilityEngine.isExtendedLetter(_basicLatinLowercaseLetters, 1, 200)).to.equal(true);
            });

            it('Should return true when value contains only basic latin uppercase letters', () => {
                expect(UtilityEngine.isExtendedLetter(_basicLatinUppercaseLetters, 1, 200)).to.equal(true);
            });

            it('Should return true when value contains only latin-1 letters', () => {
                expect(UtilityEngine.isExtendedLetter(_latin1Letters, 1, 200)).to.equal(true);
            });

            it('Should return true when value contains only latin-1 lowercase letters', () => {
                expect(UtilityEngine.isExtendedLetter(_latin1LowercaseLetters, 1, 200)).to.equal(true);
            });

            it('Should return true when value contains only latin-1 uppercase letters', () => {
                expect(UtilityEngine.isExtendedLetter(_latin1UppercaseLetters, 1, 200)).to.equal(true);
            });

            it('Should return true when value contains only latin-A letters', () => {
                expect(UtilityEngine.isExtendedLetter(_latinALetters, 1, 200)).to.equal(true);
            });

            it('Should return true when value contains only latin-A lowercase letters', () => {
                expect(UtilityEngine.isExtendedLetter(_latinALowercaseLetters, 1, 200)).to.equal(true);
            });

            it('Should return true when value contains only latin-A uppercase letters', () => {
                expect(UtilityEngine.isExtendedLetter(_latinAUppercaseLetters, 1, 200)).to.equal(true);
            });

            it('Should return true when value contains only latin-B letters', () => {
                expect(UtilityEngine.isExtendedLetter(_latinBLetters, 1, 200)).to.equal(true);
            });

            it('Should return true when value contains only latin-B lowercase letters', () => {
                expect(UtilityEngine.isExtendedLetter(_latinBLowercaseLetters, 1, 200)).to.equal(true);
            });

            it('Should return true when value contains only latin-B uppercase letters', () => {
                expect(UtilityEngine.isExtendedLetter(_latinBUppercaseLetters, 1, 200)).to.equal(true);
            });

            it('Should return true when value contains only greek letters', () => {
                expect(UtilityEngine.isExtendedLetter(_greekLetters, 1, 200)).to.equal(true);
            });

            it('Should return true when value contains only greek lowercase letters', () => {
                expect(UtilityEngine.isExtendedLetter(_greekLowercaseLetters, 1, 200)).to.equal(true);
            });

            it('Should return true when value contains only greek uppercase letters', () => {
                expect(UtilityEngine.isExtendedLetter(_greekUppercaseLetters, 1, 200)).to.equal(true);
            });


            it('Should return false when value is an empty string', () => {
                expect(UtilityEngine.isExtendedLetter('', 1, 200)).to.equal(false);
            });

            it('Should return false when value is a whitespace', () => {
                expect(UtilityEngine.isExtendedLetter(' ', 1, 200)).to.equal(false);
            });

            it('Should return false when value contains only basic latin digits', () => {
                expect(UtilityEngine.isExtendedLetter(_basicLatinDigits, 1, 200)).to.equal(false);
            });

            it('Should return false when value contains only basic latin symbols', () => {
                expect(UtilityEngine.isExtendedLetter(_basicLatinSymbols, 1, 200)).to.equal(false);
            });

            it('Should return false when value contains only latin-1 symbols', () => {
                expect(UtilityEngine.isExtendedLetter(_latin1Symbols, 1, 200)).to.equal(false);
            });

            it('Should return false when value contains only latin characters', () => {
                expect(UtilityEngine.isExtendedLetter(_latinCharacters, 1, 200)).to.equal(false);
            });

            it('Should return false when value is zero', () => {
                expect(UtilityEngine.isExtendedLetter(0)).to.equal(false);
            });

            it('Should return false when value is a positive number', () => {
                expect(UtilityEngine.isExtendedLetter(1)).to.equal(false);
            });

            it('Should return false when value is a negative number', () => {
                expect(UtilityEngine.isExtendedLetter(-1)).to.equal(false);
            });

            it('Should return false when value is true', () => {
                expect(UtilityEngine.isExtendedLetter(true)).to.equal(false);
            });

            it('Should return false when value is false', () => {
                expect(UtilityEngine.isExtendedLetter(false)).to.equal(false);
            });

            it('Should return false when value is null', () => {
                expect(UtilityEngine.isExtendedLetter(null)).to.equal(false);
            });
            it('Should return false when value is an object', () => {
                expect(UtilityEngine.isExtendedLetter({})).to.equal(false);
            });

            it('Should return false when value is a empty string', () => {
                expect(UtilityEngine.isExtendedLetter('')).to.equal(false);
            });

            it('Should return false when value is a filled string', () => {
                expect(UtilityEngine.isExtendedLetter('string')).to.equal(false);
            });

            it('Should return false when value is an array', () => {
                expect(UtilityEngine.isExtendedLetter([])).to.equal(false);
            });

            it('Should return false when value is a function', () => {
                expect(UtilityEngine.isExtendedLetter(function() {})).to.equal(false);
            });
        });

        describe('#isExtendedLetter(value, MINIMUMLENGTH, maximumLength)', function() {

        });

        describe('#isExtendedLetter(value, minimumLength, MAXIMUMLENGTH)', function() {

        });
    });

    // ╔═╗   ╔═╗╔═══════╗╔═══════╗         ╔═══════╗╔════╗╔═╗╔═══════╗╔═══════╗╔════╗╔═╗╔═══════╗╔═══════╗╔═══════╗         ╔═╗      ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗
    // ║ ║   ║ ║║ ╔═══╗ ║║ ╔═════╝         ║ ╔═════╝╚══╗ ║║ ║╚══╗ ╔══╝║ ╔═════╝║ ╔╗ ║║ ║╚╗ ╔══╗ ║║ ╔═════╝╚╗ ╔══╗ ║         ║ ║      ║ ╔═════╝╚══╗ ╔══╝╚══╗ ╔══╝║ ╔═════╝║ ╔═══╗ ║║ ╔═════╝
    // ║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═════╗╔═══════╗║ ╚═════╗╔══╝ ╚╝ ║   ║ ║   ║ ╚═════╗║ ║║ ║║ ║ ║ ║  ║ ║║ ╚═════╗ ║ ║  ║ ║╔═══════╗║ ║      ║ ╚═════╗   ║ ║      ║ ║   ║ ╚═════╗║ ╚═══╝ ║║ ╚═════╗
    // ║ ╔═══╗ ║║ ╔═══╗ ║╚═════╗ ║╚═══════╝║ ╔═════╝║ ╔╗ ╔══╝   ║ ║   ║ ╔═════╝║ ║║ ║║ ║ ║ ║  ║ ║║ ╔═════╝ ║ ║  ║ ║╚═══════╝║ ║      ║ ╔═════╝   ║ ║      ║ ║   ║ ╔═════╝║ ╔═╗ ╔═╝╚═════╗ ║
    // ║ ║   ║ ║║ ║   ║ ║╔═════╝ ║         ║ ╚═════╗║ ║║ ╚══╗   ║ ║   ║ ╚═════╗║ ║║ ╚╝ ║╔╝ ╚══╝ ║║ ╚═════╗╔╝ ╚══╝ ║         ║ ╚═════╗║ ╚═════╗   ║ ║      ║ ║   ║ ╚═════╗║ ║ ║ ╚═╗╔═════╝ ║
    // ╚═╝   ╚═╝╚═╝   ╚═╝╚═══════╝         ╚═══════╝╚═╝╚════╝   ╚═╝   ╚═══════╝╚═╝╚════╝╚═══════╝╚═══════╝╚═══════╝         ╚═══════╝╚═══════╝   ╚═╝      ╚═╝   ╚═══════╝╚═╝ ╚═══╝╚═══════╝

    describe('#hasExtendedLetters(value, minimumCount, maximumCount)', function() {
        describe('#hasExtendedLetters(VALUE, minimumCount, maximumCount)', function() {
            describe('#hasExtendedLetters(VALUE, minimumLength, maximumLength)', function() {
                it('Should return true when value is a basic latin lowercase letter', () => {
                    expect(UtilityEngine.hasExtendedLetters('a', 1, 500)).to.equal(true);
                });

                it('Should return true when value is a basic uppercase letter', () => {
                    expect(UtilityEngine.hasExtendedLetters('A', 1, 500)).to.equal(true);
                });

                it('Should return true when value is a latin-1 lowercase letter', () => {
                    expect(UtilityEngine.hasExtendedLetters('à', 1, 500)).to.equal(true);
                });

                it('Should return true when value is a latin-1 uppercase letter', () => {
                    expect(UtilityEngine.hasExtendedLetters('Á', 1, 500)).to.equal(true);
                });

                it('Should return true when value is a latin-A lowercase letter', () => {
                    expect(UtilityEngine.hasExtendedLetters('ā', 1, 500)).to.equal(true);
                });

                it('Should return true when value is a latin-A uppercase letter', () => {
                    expect(UtilityEngine.hasExtendedLetters('Ā', 1, 500)).to.equal(true);
                });

                it('Should return true when value contains only basic latin letters', () => {
                    expect(UtilityEngine.hasExtendedLetters(_basicLatinLetters, 1, 500)).to.equal(true);
                });

                it('Should return true when value contains only basic latin lowercase letters', () => {
                    expect(UtilityEngine.hasExtendedLetters(_basicLatinLowercaseLetters, 1, 500)).to.equal(true);
                });

                it('Should return true when value contains only basic latin uppercase letters', () => {
                    expect(UtilityEngine.hasExtendedLetters(_basicLatinUppercaseLetters, 1, 500)).to.equal(true);
                });

                it('Should return true when value contains only latin-1 letters', () => {
                    expect(UtilityEngine.hasExtendedLetters(_latin1Letters, 1, 500)).to.equal(true);
                });

                it('Should return true when value contains only latin-1 lowercase letters', () => {
                    expect(UtilityEngine.hasExtendedLetters(_latin1LowercaseLetters, 1, 500)).to.equal(true);
                });

                it('Should return true when value contains only latin-1 uppercase letters', () => {
                    expect(UtilityEngine.hasExtendedLetters(_latin1UppercaseLetters, 1, 500)).to.equal(true);
                });

                it('Should return true when value contains only latin-A letters', () => {
                    expect(UtilityEngine.hasExtendedLetters(_latinALetters, 1, 500)).to.equal(true);
                });

                it('Should return true when value contains only latin-A lowercase letters', () => {
                    expect(UtilityEngine.hasExtendedLetters(_latinALowercaseLetters, 1, 500)).to.equal(true);
                });

                it('Should return true when value contains only latin-A uppercase letters', () => {
                    expect(UtilityEngine.hasExtendedLetters(_latinAUppercaseLetters, 1, 500)).to.equal(true);
                });

                it('Should return true when value contains only latin-B letters', () => {
                    expect(UtilityEngine.hasExtendedLetters(_latinBLetters, 1, 500)).to.equal(true);
                });

                it('Should return true when value contains only latin-B lowercase letters', () => {
                    expect(UtilityEngine.hasExtendedLetters(_latinBLowercaseLetters, 1, 500)).to.equal(true);
                });

                it('Should return true when value contains only latin-B uppercase letters', () => {
                    expect(UtilityEngine.hasExtendedLetters(_latinBUppercaseLetters, 1, 500)).to.equal(true);
                });

                it('Should return false when value contains only latin characters', () => {
                    expect(UtilityEngine.hasExtendedLetters(_latinCharacters, 1, 500)).to.equal(true);
                });

                it('Should return true when value contains only greek letters', () => {
                    expect(UtilityEngine.hasExtendedLetters(_greekLetters, 1, 500)).to.equal(true);
                });

                it('Should return true when value contains only greek lowercase letters', () => {
                    expect(UtilityEngine.hasExtendedLetters(_greekLowercaseLetters, 1, 500)).to.equal(true);
                });

                it('Should return true when value contains only greek uppercase letters', () => {
                    expect(UtilityEngine.hasExtendedLetters(_greekUppercaseLetters, 1, 500)).to.equal(true);
                });

                it('Should return true when value is a sentence', () => {
                    expect(UtilityEngine.hasExtendedLetters('No more half-measures.')).to.equal(true);
                });


                it('Should return false when value is an empty string', () => {
                    expect(UtilityEngine.hasExtendedLetters('', 1, 500)).to.equal(false);
                });

                it('Should return false when value is a whitespace', () => {
                    expect(UtilityEngine.hasExtendedLetters(' ', 1, 500)).to.equal(false);
                });

                it('Should return false when value contains only basic latin digits', () => {
                    expect(UtilityEngine.hasExtendedLetters(_basicLatinDigits, 1, 500)).to.equal(false);
                });

                it('Should return false when value contains only basic latin symbols', () => {
                    expect(UtilityEngine.hasExtendedLetters(_basicLatinSymbols, 1, 500)).to.equal(false);
                });

                it('Should return false when value contains only latin-1 symbols', () => {
                    expect(UtilityEngine.hasExtendedLetters(_latin1Symbols, 1, 500)).to.equal(false);
                });

                it('Should return false when value is zero', () => {
                    expect(UtilityEngine.hasExtendedLetters(0)).to.equal(false);
                });

                it('Should return false when value is a positive number', () => {
                    expect(UtilityEngine.hasExtendedLetters(1)).to.equal(false);
                });

                it('Should return false when value is a negative number', () => {
                    expect(UtilityEngine.hasExtendedLetters(-1)).to.equal(false);
                });

                it('Should return false when value is true', () => {
                    expect(UtilityEngine.hasExtendedLetters(true)).to.equal(false);
                });

                it('Should return false when value is false', () => {
                    expect(UtilityEngine.hasExtendedLetters(false)).to.equal(false);
                });

                it('Should return false when value is null', () => {
                    expect(UtilityEngine.hasExtendedLetters(null)).to.equal(false);
                });
                it('Should return false when value is an object', () => {
                    expect(UtilityEngine.hasExtendedLetters({})).to.equal(false);
                });

                it('Should return false when value is a empty string', () => {
                    expect(UtilityEngine.hasExtendedLetters('')).to.equal(false);
                });

                it('Should return false when value is an array', () => {
                    expect(UtilityEngine.hasExtendedLetters([])).to.equal(false);
                });

                it('Should return false when value is a function', () => {
                    expect(UtilityEngine.hasExtendedLetters(function() {})).to.equal(false);
                });
            });
        });

        describe('#hasExtendedLetters(value, MINIMUMCOUNT, maximumCount)', function() {
            it('Should return true when minimum count parameter is undefined', () => {
                expect(UtilityEngine.hasExtendedLetters('1a2à3Ɓ', undefined)).to.equal(true);
            });

            it('Should return true when minimum count parameter is small enough', () => {
                expect(UtilityEngine.hasExtendedLetters('1a2à3Ɓ', 1)).to.equal(true);
            });

            it('Should return true when minimum count parameter is big enough', () => {
                expect(UtilityEngine.hasExtendedLetters('1a2à3Ɓ', 3)).to.equal(true);
            });

            it('Should return true when minimum count parameter is at minimum range', () => {
                expect(UtilityEngine.hasExtendedLetters('1a2à3Ɓ', 0)).to.equal(true);
            });

            it('Should return true when minimum count parameter is at maximum range', () => {
                expect(UtilityEngine.hasExtendedLetters('1a2à3Ɓ', 3)).to.equal(true);
            });

            it('Should return true when minimum count parameter is zero', () => {
                expect(UtilityEngine.hasExtendedLetters('1a2à3Ɓ', 0)).to.equal(true);
            });


            it('Should return false when minimum count parameter is too big', () => {
                expect(UtilityEngine.hasExtendedLetters('1a2à3Ɓ', 4)).to.equal(false);
            });

            it('Should return false when minimum count parameter is bigger than maximum count', () => {
                expect(UtilityEngine.hasExtendedLetters('1a2à3Ɓ', 4, 3)).to.equal(false);
            });

            it('Should return false when minimum count parameter is null', () => {
                expect(UtilityEngine.hasExtendedLetters('1a2à3Ɓ', null)).to.equal(false);
            });

            it('Should return false when minimum count parameter is true', () => {
                expect(UtilityEngine.hasExtendedLetters('1a2à3Ɓ', true)).to.equal(false);
            });

            it('Should return false when minimum count parameter is false', () => {
                expect(UtilityEngine.hasExtendedLetters('1a2à3Ɓ', false)).to.equal(false);
            });

            it('Should return false when minimum count parameter is an object', () => {
                expect(UtilityEngine.hasExtendedLetters('1a2à3Ɓ', {})).to.equal(false);
            });

            it('Should return false when minimum count parameter is a string', () => {
                expect(UtilityEngine.hasExtendedLetters('1a2à3Ɓ', 'string')).to.equal(false);
            });

            it('Should return false when minimum count parameter is an array', () => {
                expect(UtilityEngine.hasExtendedLetters('1a2à3Ɓ', [])).to.equal(false);
            });

            it('Should return false when minimum count parameter is a function', () => {
                expect(UtilityEngine.hasExtendedLetters('1a2à3Ɓ', function() {})).to.equal(false);
            });

            it('Should return false when minimum count parameter negative number', () => {
                expect(UtilityEngine.hasExtendedLetters('1a2à3Ɓ', -1)).to.equal(false);
            });

            it('Should return false when minimum count parameter is positive infinity', () => {
                expect(UtilityEngine.hasExtendedLetters('1a2à3Ɓ', Number.POSITIVE_INFINITY)).to.equal(false);
            });

            it('Should return false when minimum count parameter is negative infinity', () => {
                expect(UtilityEngine.hasExtendedLetters('1a2à3Ɓ', Number.NEGATIVE_INFINITY)).to.equal(false);
            });
        });

        describe('#hasExtendedLetters(value, minimumCount, MAXIMUMCOUNT)', function() {
            it('Should return true when maximum count parameter is undefined', () => {
                expect(UtilityEngine.hasExtendedLetters('1a2à3Ɓ', undefined, undefined)).to.equal(true);
            });

            it('Should return true when maximum count parameter is small enough', () => {
                expect(UtilityEngine.hasExtendedLetters('1a2à3Ɓ', undefined, 3)).to.equal(true);
            });

            it('Should return true when maximum count parameter is big enough', () => {
                expect(UtilityEngine.hasExtendedLetters('1a2à3Ɓ', undefined, 5)).to.equal(true);
            });

            it('Should return true when maximum count parameter is at maximum range', () => {
                expect(UtilityEngine.hasExtendedLetters('1a2à3Ɓ', undefined, Number.POSITIVE_INFINITY)).to.equal(true);
            });


            it('Should return false when maximum count parameter is too small', () => {
                expect(UtilityEngine.hasExtendedLetters('1a2à3Ɓ', undefined, 2)).to.equal(false);
            });

            it('Should return false when maximum count parameter is smaller than minimum count', () => {
                expect(UtilityEngine.hasExtendedLetters('1a2à3Ɓ', 3, 2)).to.equal(false);
            });

            it('Should return false when maximum count parameter is null', () => {
                expect(UtilityEngine.hasExtendedLetters('1a2à3Ɓ', undefined, null)).to.equal(false);
            });

            it('Should return false when maximum count parameter is true', () => {
                expect(UtilityEngine.hasExtendedLetters('1a2à3Ɓ', undefined, true)).to.equal(false);
            });

            it('Should return false when maximum count parameter is false', () => {
                expect(UtilityEngine.hasExtendedLetters('1a2à3Ɓ', undefined, false)).to.equal(false);
            });

            it('Should return false when maximum count parameter is an object', () => {
                expect(UtilityEngine.hasExtendedLetters('1a2à3Ɓ', undefined, {})).to.equal(false);
            });

            it('Should return false when maximum count parameter is a string', () => {
                expect(UtilityEngine.hasExtendedLetters('1a2à3Ɓ', undefined, 'string')).to.equal(false);
            });

            it('Should return false when maximum count parameter is an array', () => {
                expect(UtilityEngine.hasExtendedLetters('1a2à3Ɓ', undefined, [])).to.equal(false);
            });

            it('Should return false when maximum count parameter is a function', () => {
                expect(UtilityEngine.hasExtendedLetters('1a2à3Ɓ', undefined, function() {})).to.equal(false);
            });

            it('Should return false when maximum count parameter negative number', () => {
                expect(UtilityEngine.hasExtendedLetters('1a2à3Ɓ', undefined, -1)).to.equal(false);
            });

            it('Should return false when maximum count parameter is negative infinity', () => {
                expect(UtilityEngine.hasExtendedLetters('1a2à3Ɓ', undefined, Number.NEGATIVE_INFINITY)).to.equal(false);
            });
        });
    });

    // ╔═╗   ╔═╗╔═══════╗╔═══════╗         ╔═══════╗╔════╗╔═╗╔═══════╗╔═══════╗╔════╗╔═╗╔═══════╗╔═══════╗╔═══════╗         ╔═╗      ╔═══════╗╔═╗╔═╗╔═╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗         ╔═╗      ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗
    // ║ ║   ║ ║║ ╔═══╗ ║║ ╔═════╝         ║ ╔═════╝╚══╗ ║║ ║╚══╗ ╔══╝║ ╔═════╝║ ╔╗ ║║ ║╚╗ ╔══╗ ║║ ╔═════╝╚╗ ╔══╗ ║         ║ ║      ║ ╔═══╗ ║║ ║║ ║║ ║║ ╔═════╝║ ╔═══╗ ║║ ╔═════╝║ ╔═══╗ ║║ ╔═════╝║ ╔═════╝         ║ ║      ║ ╔═════╝╚══╗ ╔══╝╚══╗ ╔══╝║ ╔═════╝║ ╔═══╗ ║
    // ║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═════╗╔═══════╗║ ╚═════╗╔══╝ ╚╝ ║   ║ ║   ║ ╚═════╗║ ║║ ║║ ║ ║ ║  ║ ║║ ╚═════╗ ║ ║  ║ ║╔═══════╗║ ║      ║ ║   ║ ║║ ║║ ║║ ║║ ╚═════╗║ ╚═══╝ ║║ ║      ║ ╚═══╝ ║║ ╚═════╗║ ╚═════╗╔═══════╗║ ║      ║ ╚═════╗   ║ ║      ║ ║   ║ ╚═════╗║ ╚═══╝ ║
    // ║ ╔═══╗ ║║ ╔═══╗ ║╚═════╗ ║╚═══════╝║ ╔═════╝║ ╔╗ ╔══╝   ║ ║   ║ ╔═════╝║ ║║ ║║ ║ ║ ║  ║ ║║ ╔═════╝ ║ ║  ║ ║╚═══════╝║ ║      ║ ║   ║ ║║ ║║ ║║ ║║ ╔═════╝║ ╔═╗ ╔═╝║ ║      ║ ╔═══╗ ║╚═════╗ ║║ ╔═════╝╚═══════╝║ ║      ║ ╔═════╝   ║ ║      ║ ║   ║ ╔═════╝║ ╔═╗ ╔═╝
    // ║ ║   ║ ║║ ║   ║ ║╔═════╝ ║         ║ ╚═════╗║ ║║ ╚══╗   ║ ║   ║ ╚═════╗║ ║║ ╚╝ ║╔╝ ╚══╝ ║║ ╚═════╗╔╝ ╚══╝ ║         ║ ╚═════╗║ ╚═══╝ ║║ ╚╝ ╚╝ ║║ ╚═════╗║ ║ ║ ╚═╗║ ╚═════╗║ ║   ║ ║╔═════╝ ║║ ╚═════╗         ║ ╚═════╗║ ╚═════╗   ║ ║      ║ ║   ║ ╚═════╗║ ║ ║ ╚═╗
    // ╚═╝   ╚═╝╚═╝   ╚═╝╚═══════╝         ╚═══════╝╚═╝╚════╝   ╚═╝   ╚═══════╝╚═╝╚════╝╚═══════╝╚═══════╝╚═══════╝         ╚═══════╝╚═══════╝╚═══════╝╚═══════╝╚═╝ ╚═══╝╚═══════╝╚═╝   ╚═╝╚═══════╝╚═══════╝         ╚═══════╝╚═══════╝   ╚═╝      ╚═╝   ╚═══════╝╚═╝ ╚═══╝

    describe('#hasExtendedLowercaseLetters(value, minimumCount, maximumCount)', function() {
        describe('#hasExtendedLowercaseLetters(VALUE, minimumLength, maximumLength)', function() {
            it('Should return true when value is a basic latin lowercase letter', () => {
                expect(UtilityEngine.hasExtendedLowercaseLetters('a')).to.equal(true);
            });

            it('Should return true when value is a latin-1 lowercase letter', () => {
                expect(UtilityEngine.hasExtendedLowercaseLetters('à')).to.equal(true);
            });

            it('Should return true when value is a latin-A lowercase letter', () => {
                expect(UtilityEngine.hasExtendedLowercaseLetters('ā')).to.equal(true);
            });

            it('Should return true when value contains only basic latin letters', () => {
                expect(UtilityEngine.hasExtendedLowercaseLetters(_basicLatinLetters)).to.equal(true);
            });

            it('Should return true when value contains only basic latin lowercase letters', () => {
                expect(UtilityEngine.hasExtendedLowercaseLetters(_basicLatinLowercaseLetters)).to.equal(true);
            });

            it('Should return true when value contains only latin-1 letters', () => {
                expect(UtilityEngine.hasExtendedLowercaseLetters(_latin1Letters)).to.equal(true);
            });

            it('Should return true when value contains only latin-1 lowercase letters', () => {
                expect(UtilityEngine.hasExtendedLowercaseLetters(_latin1LowercaseLetters)).to.equal(true);
            });

            it('Should return true when value contains only latin-A letters', () => {
                expect(UtilityEngine.hasExtendedLowercaseLetters(_latinALetters)).to.equal(true);
            });

            it('Should return true when value contains only latin-A lowercase letters', () => {
                expect(UtilityEngine.hasExtendedLowercaseLetters(_latinALowercaseLetters)).to.equal(true);
            });

            it('Should return true when value contains only latin-B letters', () => {
                expect(UtilityEngine.hasExtendedLowercaseLetters(_latinBLetters)).to.equal(true);
            });

            it('Should return true when value contains only latin-B lowercase letters', () => {
                expect(UtilityEngine.hasExtendedLowercaseLetters(_latinBLowercaseLetters)).to.equal(true);
            });

            it('Should return false when value contains only latin characters', () => {
                expect(UtilityEngine.hasExtendedLowercaseLetters(_latinCharacters)).to.equal(true);
            });

            it('Should return true when value contains only greek letters', () => {
                expect(UtilityEngine.hasExtendedLowercaseLetters(_greekLetters)).to.equal(true);
            });

            it('Should return true when value contains only greek lowercase letters', () => {
                expect(UtilityEngine.hasExtendedLowercaseLetters(_greekLowercaseLetters)).to.equal(true);
            });

            it('Should return true when value is a sentence', () => {
                expect(UtilityEngine.hasExtendedLowercaseLetters('No more half-measures.')).to.equal(true);
            });


            it('Should return false when value is a basic uppercase letter', () => {
                expect(UtilityEngine.hasExtendedLowercaseLetters('A')).to.equal(false);
            });

            it('Should return false when value is a latin-1 uppercase letter', () => {
                expect(UtilityEngine.hasExtendedLowercaseLetters('Á')).to.equal(false);
            });

            it('Should return false when value is a latin-A uppercase letter', () => {
                expect(UtilityEngine.hasExtendedLowercaseLetters('Ā')).to.equal(false);
            });

            it('Should return false when value contains only basic latin uppercase letters', () => {
                expect(UtilityEngine.hasExtendedLowercaseLetters(_basicLatinUppercaseLetters)).to.equal(false);
            });

            it('Should return false when value contains only latin-1 uppercase letters', () => {
                expect(UtilityEngine.hasExtendedLowercaseLetters(_latin1UppercaseLetters)).to.equal(false);
            });

            it('Should return false when value contains only latin-A uppercase letters', () => {
                expect(UtilityEngine.hasExtendedLowercaseLetters(_latinAUppercaseLetters)).to.equal(false);
            });

            it('Should return false when value contains only latin-B uppercase letters', () => {
                expect(UtilityEngine.hasExtendedLowercaseLetters(_latinBUppercaseLetters)).to.equal(false);
            });

            it('Should return false when value contains only greek uppercase letters', () => {
                expect(UtilityEngine.hasExtendedLowercaseLetters(_greekUppercaseLetters)).to.equal(false);
            });

            it('Should return false when value is an empty string', () => {
                expect(UtilityEngine.hasExtendedLowercaseLetters('')).to.equal(false);
            });

            it('Should return false when value is a whitespace', () => {
                expect(UtilityEngine.hasExtendedLowercaseLetters(' ')).to.equal(false);
            });

            it('Should return false when value contains only basic latin digits', () => {
                expect(UtilityEngine.hasExtendedLowercaseLetters(_basicLatinDigits)).to.equal(false);
            });

            it('Should return false when value contains only basic latin symbols', () => {
                expect(UtilityEngine.hasExtendedLowercaseLetters(_basicLatinSymbols)).to.equal(false);
            });

            it('Should return false when value contains only latin-1 symbols', () => {
                expect(UtilityEngine.hasExtendedLowercaseLetters(_latin1Symbols)).to.equal(false);
            });

            it('Should return false when value is zero', () => {
                expect(UtilityEngine.hasExtendedLowercaseLetters(0)).to.equal(false);
            });

            it('Should return false when value is a positive number', () => {
                expect(UtilityEngine.hasExtendedLowercaseLetters(1)).to.equal(false);
            });

            it('Should return false when value is a negative number', () => {
                expect(UtilityEngine.hasExtendedLowercaseLetters(-1)).to.equal(false);
            });

            it('Should return false when value is true', () => {
                expect(UtilityEngine.hasExtendedLowercaseLetters(true)).to.equal(false);
            });

            it('Should return false when value is false', () => {
                expect(UtilityEngine.hasExtendedLowercaseLetters(false)).to.equal(false);
            });

            it('Should return false when value is null', () => {
                expect(UtilityEngine.hasExtendedLowercaseLetters(null)).to.equal(false);
            });
            it('Should return false when value is an object', () => {
                expect(UtilityEngine.hasExtendedLowercaseLetters({})).to.equal(false);
            });

            it('Should return false when value is a empty string', () => {
                expect(UtilityEngine.hasExtendedLowercaseLetters('')).to.equal(false);
            });

            it('Should return false when value is an array', () => {
                expect(UtilityEngine.hasExtendedLowercaseLetters([])).to.equal(false);
            });

            it('Should return false when value is a function', () => {
                expect(UtilityEngine.hasExtendedLowercaseLetters(function() {})).to.equal(false);
            });
        });

        describe('#hasExtendedLetters(value, MINIMUMCOUNT, maximumCount)', function() {
            it('Should return true when minimum count parameter is undefined', () => {
                expect(UtilityEngine.hasExtendedLowercaseLetters('1a2à3ɓ', undefined)).to.equal(true);
            });

            it('Should return true when minimum count parameter is small enough', () => {
                expect(UtilityEngine.hasExtendedLowercaseLetters('1a2à3ɓ', 1)).to.equal(true);
            });

            it('Should return true when minimum count parameter is big enough', () => {
                expect(UtilityEngine.hasExtendedLowercaseLetters('1a2à3ɓ', 3)).to.equal(true);
            });

            it('Should return true when minimum count parameter is at minimum range', () => {
                expect(UtilityEngine.hasExtendedLowercaseLetters('1a2à3α', 0)).to.equal(true);
            });

            it('Should return true when minimum count parameter is at maximum range', () => {
                expect(UtilityEngine.hasExtendedLowercaseLetters('1a2à3ɓ', 3)).to.equal(true);
            });

            it('Should return true when minimum count parameter is zero', () => {
                expect(UtilityEngine.hasExtendedLowercaseLetters('1a2à3ɓ', 0)).to.equal(true);
            });


            it('Should return false when minimum count parameter is too big', () => {
                expect(UtilityEngine.hasExtendedLowercaseLetters('1a2à3ɓ', 4)).to.equal(false);
            });

            it('Should return false when minimum count parameter is bigger than maximum count', () => {
                expect(UtilityEngine.hasExtendedLowercaseLetters('1a2à3α', 4, 3)).to.equal(false);
            });

            it('Should return false when minimum count parameter is null', () => {
                expect(UtilityEngine.hasExtendedLowercaseLetters('1a2à3ɓ', null)).to.equal(false);
            });

            it('Should return false when minimum count parameter is true', () => {
                expect(UtilityEngine.hasExtendedLowercaseLetters('1a2à3ɓ', true)).to.equal(false);
            });

            it('Should return false when minimum count parameter is false', () => {
                expect(UtilityEngine.hasExtendedLowercaseLetters('1a2à3ɓ', false)).to.equal(false);
            });

            it('Should return false when minimum count parameter is an object', () => {
                expect(UtilityEngine.hasExtendedLowercaseLetters('1a2à3ɓ', {})).to.equal(false);
            });

            it('Should return false when minimum count parameter is a string', () => {
                expect(UtilityEngine.hasExtendedLowercaseLetters('1a2à3ɓ', 'string')).to.equal(false);
            });

            it('Should return false when minimum count parameter is an array', () => {
                expect(UtilityEngine.hasExtendedLowercaseLetters('1a2à3ɓ', [])).to.equal(false);
            });

            it('Should return false when minimum count parameter is a function', () => {
                expect(UtilityEngine.hasExtendedLowercaseLetters('1a2à3ɓ', function() {})).to.equal(false);
            });

            it('Should return false when minimum count parameter negative number', () => {
                expect(UtilityEngine.hasExtendedLowercaseLetters('1a2à3ɓ', -1)).to.equal(false);
            });

            it('Should return false when minimum count parameter is positive infinity', () => {
                expect(UtilityEngine.hasExtendedLowercaseLetters('1a2à3ɓ', Number.POSITIVE_INFINITY)).to.equal(false);
            });

            it('Should return false when minimum count parameter is negative infinity', () => {
                expect(UtilityEngine.hasExtendedLowercaseLetters('1a2à3ɓ', Number.NEGATIVE_INFINITY)).to.equal(false);
            });
        });

        describe('#hasExtendedLetters(value, minimumCount, MAXIMUMCOUNT)', function() {
            it('Should return true when maximum count parameter is undefined', () => {
                expect(UtilityEngine.hasExtendedLowercaseLetters('1a2à3ɓ', undefined, undefined)).to.equal(true);
            });

            it('Should return true when maximum count parameter is small enough', () => {
                expect(UtilityEngine.hasExtendedLowercaseLetters('1a2à3ɓ', undefined, 3)).to.equal(true);
            });

            it('Should return true when maximum count parameter is big enough', () => {
                expect(UtilityEngine.hasExtendedLowercaseLetters('1a2à3ɓ', undefined, 5)).to.equal(true);
            });

            it('Should return true when maximum count parameter is at maximum range', () => {
                expect(UtilityEngine.hasExtendedLowercaseLetters('1a2à3ɓ', undefined, Number.POSITIVE_INFINITY)).to.equal(true);
            });


            it('Should return false when maximum count parameter is too small', () => {
                expect(UtilityEngine.hasExtendedLowercaseLetters('1a2à3ɓ', undefined, 2)).to.equal(false);
            });

            it('Should return false when maximum count parameter is smaller than minimum count', () => {
                expect(UtilityEngine.hasExtendedLowercaseLetters('1a2à3ɓ', 3, 2)).to.equal(false);
            });

            it('Should return false when maximum count parameter is null', () => {
                expect(UtilityEngine.hasExtendedLowercaseLetters('1a2à3ɓ', undefined, null)).to.equal(false);
            });

            it('Should return false when maximum count parameter is true', () => {
                expect(UtilityEngine.hasExtendedLowercaseLetters('1a2à3ɓ', undefined, true)).to.equal(false);
            });

            it('Should return false when maximum count parameter is false', () => {
                expect(UtilityEngine.hasExtendedLowercaseLetters('1a2à3ɓ', undefined, false)).to.equal(false);
            });

            it('Should return false when maximum count parameter is an object', () => {
                expect(UtilityEngine.hasExtendedLowercaseLetters('1a2à3ɓ', undefined, {})).to.equal(false);
            });

            it('Should return false when maximum count parameter is a string', () => {
                expect(UtilityEngine.hasExtendedLowercaseLetters('1a2à3ɓ', undefined, 'string')).to.equal(false);
            });

            it('Should return false when maximum count parameter is an array', () => {
                expect(UtilityEngine.hasExtendedLowercaseLetters('1a2à3ɓ', undefined, [])).to.equal(false);
            });

            it('Should return false when maximum count parameter is a function', () => {
                expect(UtilityEngine.hasExtendedLowercaseLetters('1a2à3ɓ', undefined, function() {})).to.equal(false);
            });

            it('Should return false when maximum count parameter negative number', () => {
                expect(UtilityEngine.hasExtendedLowercaseLetters('1a2à3ɓ', undefined, -1)).to.equal(false);
            });

            it('Should return false when maximum count parameter is negative infinity', () => {
                expect(UtilityEngine.hasExtendedLowercaseLetters('1a2à3ɓ', undefined, Number.NEGATIVE_INFINITY)).to.equal(false);
            });
        });
    });

    // ╔═╗   ╔═╗╔═══════╗╔═══════╗         ╔═══════╗╔════╗╔═╗╔═══════╗╔═══════╗╔════╗╔═╗╔═══════╗╔═══════╗╔═══════╗         ╔═╗   ╔═╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗         ╔═╗      ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗
    // ║ ║   ║ ║║ ╔═══╗ ║║ ╔═════╝         ║ ╔═════╝╚══╗ ║║ ║╚══╗ ╔══╝║ ╔═════╝║ ╔╗ ║║ ║╚╗ ╔══╗ ║║ ╔═════╝╚╗ ╔══╗ ║         ║ ║   ║ ║║ ╔═══╗ ║║ ╔═══╗ ║║ ╔═════╝║ ╔═══╗ ║║ ╔═════╝║ ╔═══╗ ║║ ╔═════╝║ ╔═════╝         ║ ║      ║ ╔═════╝╚══╗ ╔══╝╚══╗ ╔══╝║ ╔═════╝║ ╔═══╗ ║
    // ║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═════╗╔═══════╗║ ╚═════╗╔══╝ ╚╝ ║   ║ ║   ║ ╚═════╗║ ║║ ║║ ║ ║ ║  ║ ║║ ╚═════╗ ║ ║  ║ ║╔═══════╗║ ║   ║ ║║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═════╗║ ╚═══╝ ║║ ║      ║ ╚═══╝ ║║ ╚═════╗║ ╚═════╗╔═══════╗║ ║      ║ ╚═════╗   ║ ║      ║ ║   ║ ╚═════╗║ ╚═══╝ ║
    // ║ ╔═══╗ ║║ ╔═══╗ ║╚═════╗ ║╚═══════╝║ ╔═════╝║ ╔╗ ╔══╝   ║ ║   ║ ╔═════╝║ ║║ ║║ ║ ║ ║  ║ ║║ ╔═════╝ ║ ║  ║ ║╚═══════╝║ ║   ║ ║║ ╔═════╝║ ╔═════╝║ ╔═════╝║ ╔═╗ ╔═╝║ ║      ║ ╔═══╗ ║╚═════╗ ║║ ╔═════╝╚═══════╝║ ║      ║ ╔═════╝   ║ ║      ║ ║   ║ ╔═════╝║ ╔═╗ ╔═╝
    // ║ ║   ║ ║║ ║   ║ ║╔═════╝ ║         ║ ╚═════╗║ ║║ ╚══╗   ║ ║   ║ ╚═════╗║ ║║ ╚╝ ║╔╝ ╚══╝ ║║ ╚═════╗╔╝ ╚══╝ ║         ║ ╚═══╝ ║║ ║      ║ ║      ║ ╚═════╗║ ║ ║ ╚═╗║ ╚═════╗║ ║   ║ ║╔═════╝ ║║ ╚═════╗         ║ ╚═════╗║ ╚═════╗   ║ ║      ║ ║   ║ ╚═════╗║ ║ ║ ╚═╗
    // ╚═╝   ╚═╝╚═╝   ╚═╝╚═══════╝         ╚═══════╝╚═╝╚════╝   ╚═╝   ╚═══════╝╚═╝╚════╝╚═══════╝╚═══════╝╚═══════╝         ╚═══════╝╚═╝      ╚═╝      ╚═══════╝╚═╝ ╚═══╝╚═══════╝╚═╝   ╚═╝╚═══════╝╚═══════╝         ╚═══════╝╚═══════╝   ╚═╝      ╚═╝   ╚═══════╝╚═╝ ╚═══╝

    describe('#hasExtendedUppercaseLetters(value, minimumCount, maximumCount)', function() {
        describe('#hasExtendedUppercaseLetters(VALUE, minimumCount, maximumCount)', function() {
            it('Should return true when value is a basic uppercase letter', () => {
                expect(UtilityEngine.hasExtendedUppercaseLetters('A')).to.equal(true);
            });

            it('Should return true when value is a latin-1 uppercase letter', () => {
                expect(UtilityEngine.hasExtendedUppercaseLetters('Á')).to.equal(true);
            });

            it('Should return true when value is a latin-A uppercase letter', () => {
                expect(UtilityEngine.hasExtendedUppercaseLetters('Ā')).to.equal(true);
            });

            it('Should return true when value contains only basic latin letters', () => {
                expect(UtilityEngine.hasExtendedUppercaseLetters(_basicLatinLetters)).to.equal(true);
            });

            it('Should return true when value contains only basic latin uppercase letters', () => {
                expect(UtilityEngine.hasExtendedUppercaseLetters(_basicLatinUppercaseLetters)).to.equal(true);
            });

            it('Should return true when value contains only latin-1 letters', () => {
                expect(UtilityEngine.hasExtendedUppercaseLetters(_latin1Letters)).to.equal(true);
            });

            it('Should return true when value contains only latin-1 uppercase letters', () => {
                expect(UtilityEngine.hasExtendedUppercaseLetters(_latin1UppercaseLetters)).to.equal(true);
            });

            it('Should return true when value contains only latin-A letters', () => {
                expect(UtilityEngine.hasExtendedUppercaseLetters(_latinALetters)).to.equal(true);
            });

            it('Should return true when value contains only latin-A uppercase letters', () => {
                expect(UtilityEngine.hasExtendedUppercaseLetters(_latinAUppercaseLetters)).to.equal(true);
            });

            it('Should return true when value contains only latin-B letters', () => {
                expect(UtilityEngine.hasExtendedUppercaseLetters(_latinBLetters)).to.equal(true);
            });

            it('Should return true when value contains only latin-B uppercase letters', () => {
                expect(UtilityEngine.hasExtendedUppercaseLetters(_latinBUppercaseLetters)).to.equal(true);
            });

            it('Should return false when value contains only latin characters', () => {
                expect(UtilityEngine.hasExtendedUppercaseLetters(_latinCharacters)).to.equal(true);
            });

            it('Should return true when value contains only greek letters', () => {
                expect(UtilityEngine.hasExtendedUppercaseLetters(_greekLetters)).to.equal(true);
            });

            it('Should return true when value contains only greek uppercase letters', () => {
                expect(UtilityEngine.hasExtendedUppercaseLetters(_greekUppercaseLetters)).to.equal(true);
            });

            it('Should return true when value is a sentence', () => {
                expect(UtilityEngine.hasExtendedUppercaseLetters('No more half-measures.')).to.equal(true);
            });


            it('Should return false when value is a basic latin lowercase letter', () => {
                expect(UtilityEngine.hasExtendedUppercaseLetters('a')).to.equal(false);
            });

            it('Should return false when value is a latin-1 lowercase letter', () => {
                expect(UtilityEngine.hasExtendedUppercaseLetters('à')).to.equal(false);
            });

            it('Should return false when value is a latin-A lowercase letter', () => {
                expect(UtilityEngine.hasExtendedUppercaseLetters('ā')).to.equal(false);
            });

            it('Should return false when value contains only basic latin lowercase letters', () => {
                expect(UtilityEngine.hasExtendedUppercaseLetters(_basicLatinLowercaseLetters)).to.equal(false);
            });

            it('Should return false when value contains only latin-1 lowercase letters', () => {
                expect(UtilityEngine.hasExtendedUppercaseLetters(_latin1LowercaseLetters)).to.equal(false);
            });

            it('Should return false when value contains only latin-A lowercase letters', () => {
                expect(UtilityEngine.hasExtendedUppercaseLetters(_latinALowercaseLetters)).to.equal(false);
            });

            it('Should return false when value contains only latin-B lowercase letters', () => {
                expect(UtilityEngine.hasExtendedUppercaseLetters(_latinBLowercaseLetters)).to.equal(false);
            });

            it('Should return false when value contains only greek lowercase letters', () => {
                expect(UtilityEngine.hasExtendedUppercaseLetters(_greekLowercaseLetters)).to.equal(false);
            });

            it('Should return false when value is an empty string', () => {
                expect(UtilityEngine.hasExtendedUppercaseLetters('')).to.equal(false);
            });

            it('Should return false when value is a whitespace', () => {
                expect(UtilityEngine.hasExtendedUppercaseLetters(' ')).to.equal(false);
            });

            it('Should return false when value contains only basic latin digits', () => {
                expect(UtilityEngine.hasExtendedUppercaseLetters(_basicLatinDigits)).to.equal(false);
            });

            it('Should return false when value contains only basic latin symbols', () => {
                expect(UtilityEngine.hasExtendedUppercaseLetters(_basicLatinSymbols)).to.equal(false);
            });

            it('Should return false when value contains only latin-1 symbols', () => {
                expect(UtilityEngine.hasExtendedUppercaseLetters(_latin1Symbols)).to.equal(false);
            });

            it('Should return false when value is zero', () => {
                expect(UtilityEngine.hasExtendedUppercaseLetters(0)).to.equal(false);
            });

            it('Should return false when value is a positive number', () => {
                expect(UtilityEngine.hasExtendedUppercaseLetters(1)).to.equal(false);
            });

            it('Should return false when value is a negative number', () => {
                expect(UtilityEngine.hasExtendedUppercaseLetters(-1)).to.equal(false);
            });

            it('Should return false when value is true', () => {
                expect(UtilityEngine.hasExtendedUppercaseLetters(true)).to.equal(false);
            });

            it('Should return false when value is false', () => {
                expect(UtilityEngine.hasExtendedUppercaseLetters(false)).to.equal(false);
            });

            it('Should return false when value is null', () => {
                expect(UtilityEngine.hasExtendedUppercaseLetters(null)).to.equal(false);
            });
            it('Should return false when value is an object', () => {
                expect(UtilityEngine.hasExtendedUppercaseLetters({})).to.equal(false);
            });

            it('Should return false when value is a empty string', () => {
                expect(UtilityEngine.hasExtendedUppercaseLetters('')).to.equal(false);
            });

            it('Should return false when value is an array', () => {
                expect(UtilityEngine.hasExtendedUppercaseLetters([])).to.equal(false);
            });

            it('Should return false when value is a function', () => {
                expect(UtilityEngine.hasExtendedUppercaseLetters(function() {})).to.equal(false);
            });
        });

        describe('#hasExtendedUppercaseLetters(value, MINIMUMCOUNT, maximumCount)', function() {
            it('Should return true when minimum count parameter is undefined', () => {
                expect(UtilityEngine.hasExtendedUppercaseLetters('1A2À3Ɓ', undefined)).to.equal(true);
            });

            it('Should return true when minimum count parameter is small enough', () => {
                expect(UtilityEngine.hasExtendedUppercaseLetters('1A2À3Ɓ', 1)).to.equal(true);
            });

            it('Should return true when minimum count parameter is big enough', () => {
                expect(UtilityEngine.hasExtendedUppercaseLetters('1A2À3Ɓ', 3)).to.equal(true);
            });

            it('Should return true when minimum count parameter is at minimum range', () => {
                expect(UtilityEngine.hasExtendedUppercaseLetters('1A2À3Ɓ', 0)).to.equal(true);
            });

            it('Should return true when minimum count parameter is at maximum range', () => {
                expect(UtilityEngine.hasExtendedUppercaseLetters('1A2À3Ɓ', 3)).to.equal(true);
            });

            it('Should return true when minimum count parameter is zero', () => {
                expect(UtilityEngine.hasExtendedUppercaseLetters('1A2À3Ɓ', 0)).to.equal(true);
            });


            it('Should return false when minimum count parameter is too big', () => {
                expect(UtilityEngine.hasExtendedUppercaseLetters('1A2À3Ɓ', 4)).to.equal(false);
            });

            it('Should return false when minimum count parameter is bigger than maximum count', () => {
                expect(UtilityEngine.hasExtendedUppercaseLetters('1A2À3Ɓ', 4, 3)).to.equal(false);
            });

            it('Should return false when minimum count parameter is null', () => {
                expect(UtilityEngine.hasExtendedUppercaseLetters('1A2À3Ɓ', null)).to.equal(false);
            });

            it('Should return false when minimum count parameter is true', () => {
                expect(UtilityEngine.hasExtendedUppercaseLetters('1A2À3Ɓ', true)).to.equal(false);
            });

            it('Should return false when minimum count parameter is false', () => {
                expect(UtilityEngine.hasExtendedUppercaseLetters('1A2À3Ɓ', false)).to.equal(false);
            });

            it('Should return false when minimum count parameter is an object', () => {
                expect(UtilityEngine.hasExtendedUppercaseLetters('1A2À3Ɓ', {})).to.equal(false);
            });

            it('Should return false when minimum count parameter is a string', () => {
                expect(UtilityEngine.hasExtendedUppercaseLetters('1A2À3Ɓ', 'string')).to.equal(false);
            });

            it('Should return false when minimum count parameter is an array', () => {
                expect(UtilityEngine.hasExtendedUppercaseLetters('1A2À3Ɓ', [])).to.equal(false);
            });

            it('Should return false when minimum count parameter is a function', () => {
                expect(UtilityEngine.hasExtendedUppercaseLetters('1A2À3Ɓ', function() {})).to.equal(false);
            });

            it('Should return false when minimum count parameter negative number', () => {
                expect(UtilityEngine.hasExtendedUppercaseLetters('1A2À3Ɓ', -1)).to.equal(false);
            });

            it('Should return false when minimum count parameter is positive infinity', () => {
                expect(UtilityEngine.hasExtendedUppercaseLetters('1A2À3Ɓ', Number.POSITIVE_INFINITY)).to.equal(false);
            });

            it('Should return false when minimum count parameter is negative infinity', () => {
                expect(UtilityEngine.hasExtendedUppercaseLetters('1A2À3Ɓ', Number.NEGATIVE_INFINITY)).to.equal(false);
            });
        });

        describe('#hasExtendedUppercaseLetters(value, minimumCount, MAXIMUMCOUNT)', function() {
            it('Should return true when maximum count parameter is undefined', () => {
                expect(UtilityEngine.hasExtendedUppercaseLetters('1A2À3Ɓ', undefined, undefined)).to.equal(true);
            });

            it('Should return true when maximum count parameter is small enough', () => {
                expect(UtilityEngine.hasExtendedUppercaseLetters('1A2À3Ɓ', undefined, 3)).to.equal(true);
            });

            it('Should return true when maximum count parameter is big enough', () => {
                expect(UtilityEngine.hasExtendedUppercaseLetters('1A2À3Ɓ', undefined, 5)).to.equal(true);
            });

            it('Should return true when maximum count parameter is at maximum range', () => {
                expect(UtilityEngine.hasExtendedUppercaseLetters('1A2À3Ɓ', undefined, Number.POSITIVE_INFINITY)).to.equal(true);
            });


            it('Should return false when maximum count parameter is too small', () => {
                expect(UtilityEngine.hasExtendedUppercaseLetters('1A2À3Ɓ', undefined, 2)).to.equal(false);
            });

            it('Should return false when maximum count parameter is smaller than minimum count', () => {
                expect(UtilityEngine.hasExtendedUppercaseLetters('1A2À3Ɓ', 3, 2)).to.equal(false);
            });

            it('Should return false when maximum count parameter is null', () => {
                expect(UtilityEngine.hasExtendedUppercaseLetters('1A2À3Ɓ', undefined, null)).to.equal(false);
            });

            it('Should return false when maximum count parameter is true', () => {
                expect(UtilityEngine.hasExtendedUppercaseLetters('1A2À3Ɓ', undefined, true)).to.equal(false);
            });

            it('Should return false when maximum count parameter is false', () => {
                expect(UtilityEngine.hasExtendedUppercaseLetters('1A2À3Ɓ', undefined, false)).to.equal(false);
            });

            it('Should return false when maximum count parameter is an object', () => {
                expect(UtilityEngine.hasExtendedUppercaseLetters('1A2À3Ɓ', undefined, {})).to.equal(false);
            });

            it('Should return false when maximum count parameter is a string', () => {
                expect(UtilityEngine.hasExtendedUppercaseLetters('1A2À3Ɓ', undefined, 'string')).to.equal(false);
            });

            it('Should return false when maximum count parameter is an array', () => {
                expect(UtilityEngine.hasExtendedUppercaseLetters('1A2À3Ɓ', undefined, [])).to.equal(false);
            });

            it('Should return false when maximum count parameter is a function', () => {
                expect(UtilityEngine.hasExtendedUppercaseLetters('1A2À3Ɓ', undefined, function() {})).to.equal(false);
            });

            it('Should return false when maximum count parameter negative number', () => {
                expect(UtilityEngine.hasExtendedUppercaseLetters('1A2À3Ɓ', undefined, -1)).to.equal(false);
            });

            it('Should return false when maximum count parameter is negative infinity', () => {
                expect(UtilityEngine.hasExtendedUppercaseLetters('1A2À3Ɓ', undefined, Number.NEGATIVE_INFINITY)).to.equal(false);
            });
        });
    });
});
