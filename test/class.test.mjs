// ╔═══════╗╔═╗      ╔═══════╗╔═══════╗╔═══════╗   ╔═══════╗╔═══════╗╔═══════╗╔═══════╗   ╔═══════╗╔═══════╗╔═══════╗
// ║ ╔═════╝║ ║      ║ ╔═══╗ ║║ ╔═════╝║ ╔═════╝   ╚══╗ ╔══╝║ ╔═════╝║ ╔═════╝╚══╗ ╔══╝   ║ ╔╗ ╔╗ ║╚═══╗ ╔═╝║ ╔═════╝
// ║ ║      ║ ║      ║ ╚═══╝ ║║ ╚═════╗║ ╚═════╗      ║ ║   ║ ╚═════╗║ ╚═════╗   ║ ║      ║ ║║ ║║ ║    ║ ║  ║ ╚═════╗
// ║ ║      ║ ║      ║ ╔═══╗ ║╚═════╗ ║╚═════╗ ║      ║ ║   ║ ╔═════╝╚═════╗ ║   ║ ║      ║ ║║ ║║ ║    ║ ║  ╚═════╗ ║
// ║ ╚═════╗║ ╚═════╗║ ║   ║ ║╔═════╝ ║╔═════╝ ║╔═╗   ║ ║   ║ ╚═════╗╔═════╝ ║   ║ ║   ╔═╗║ ║║ ║║ ║╔═══╝ ║  ╔═════╝ ║
// ╚═══════╝╚═══════╝╚═╝   ╚═╝╚═══════╝╚═══════╝╚═╝   ╚═╝   ╚═══════╝╚═══════╝   ╚═╝   ╚═╝╚═╝╚═╝╚═╝╚═════╝  ╚═══════╝

'use strict';   // Extend JavaScript strict mode to the entire script

// ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗
// ╚══╗ ╔══╝║ ╔╗ ╔╗ ║║ ╔═══╗ ║║ ╔═══╗ ║║ ╔═══╗ ║╚══╗ ╔══╝
//    ║ ║   ║ ║║ ║║ ║║ ╚═══╝ ║║ ║   ║ ║║ ╚═══╝ ║   ║ ║
//    ║ ║   ║ ║║ ║║ ║║ ╔═════╝║ ║   ║ ║║ ╔═╗ ╔═╝   ║ ║
// ╔══╝ ╚══╗║ ║║ ║║ ║║ ║      ║ ╚═══╝ ║║ ║ ║ ╚═╗   ║ ║
// ╚═══════╝╚═╝╚═╝╚═╝╚═╝      ╚═══════╝╚═╝ ╚═══╝   ╚═╝

import UtilityEngine from '../build/index.js';

import chai from 'chai';

const expect = chai.expect;

// ╔═══════╗╔═══════╗╔═══════╗╔═╗      ╔═══════╗╔═══════╗╔═══════╗
// ╚╗ ╔══╗ ║║ ╔═════╝║ ╔═════╝║ ║      ║ ╔═══╗ ║║ ╔═══╗ ║║ ╔═════╝
//  ║ ║  ║ ║║ ╚═════╗║ ║      ║ ║      ║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═════╗
//  ║ ║  ║ ║║ ╔═════╝║ ║      ║ ║      ║ ╔═══╗ ║║ ╔═╗ ╔═╝║ ╔═════╝
// ╔╝ ╚══╝ ║║ ╚═════╗║ ╚═════╗║ ╚═════╗║ ║   ║ ║║ ║ ║ ╚═╗║ ╚═════╗
// ╚═══════╝╚═══════╝╚═══════╝╚═══════╝╚═╝   ╚═╝╚═╝ ╚═══╝╚═══════╝

class Superclass {
    constructor() {}
}

class Subclass extends Superclass {
    constructor() {
        super();
    }
}

class SubSubclass extends Subclass {
    constructor() {
        super();
    }
}

const subclassInstance = new Subclass();
const subSubclassInstance = new SubSubclass();
const superclassInstance = new Superclass();

// ╔═══════╗╔══════╗ ╔═══════╗╔═══════╗╔═══════╗╔═══════╗
// ║ ╔═══╗ ║║ ╔══╗ ║ ╚═══╗ ╔═╝║ ╔═════╝║ ╔═════╝╚══╗ ╔══╝
// ║ ║   ║ ║║ ╚══╝ ╚╗    ║ ║  ║ ╚═════╗║ ║         ║ ║
// ║ ║   ║ ║║ ╔═══╗ ║    ║ ║  ║ ╔═════╝║ ║         ║ ║
// ║ ╚═══╝ ║║ ╚═══╝ ║╔═══╝ ║  ║ ╚═════╗║ ╚═════╗   ║ ║
// ╚═══════╝╚═══════╝╚═════╝  ╚═══════╝╚═══════╝   ╚═╝

describe('Class', function() {
    // ╔═══════╗╔═══════╗         ╔═══════╗╔═╗      ╔═══════╗╔═══════╗╔═══════╗
    // ╚══╗ ╔══╝║ ╔═════╝         ║ ╔═════╝║ ║      ║ ╔═══╗ ║║ ╔═════╝║ ╔═════╝
    //    ║ ║   ║ ╚═════╗╔═══════╗║ ║      ║ ║      ║ ╚═══╝ ║║ ╚═════╗║ ╚═════╗
    //    ║ ║   ╚═════╗ ║╚═══════╝║ ║      ║ ║      ║ ╔═══╗ ║╚═════╗ ║╚═════╗ ║
    // ╔══╝ ╚══╗╔═════╝ ║         ║ ╚═════╗║ ╚═════╗║ ║   ║ ║╔═════╝ ║╔═════╝ ║
    // ╚═══════╝╚═══════╝         ╚═══════╝╚═══════╝╚═╝   ╚═╝╚═══════╝╚═══════╝

    describe('#isClass(value, superclassValue)', function() {
        describe('#isClass(VALUE, superclassValue)', function() {
            it('Should return true when value is a superclass', () => {
                expect(UtilityEngine.isClass(Superclass)).to.equal(true);
            });

            it('Should return true when value is a subclass', () => {
                expect(UtilityEngine.isClass(Subclass)).to.equal(true);
            });

            it('Should return true when value is a subclass of a subclass', () => {
                expect(UtilityEngine.isClass(SubSubclass)).to.equal(true);
            });


            it('Should return false when value is a superclass instance', () => {
                expect(UtilityEngine.isClass(superclassInstance)).to.equal(false);
            });

            it('Should return false when value is a subclass instance', () => {
                expect(UtilityEngine.isClass(subclassInstance)).to.equal(false);
            });

            it('Should return false when value is a subclass of a subclass instance', () => {
                expect(UtilityEngine.isClass(subSubclassInstance)).to.equal(false);
            });

            it('Should return false when value is null', () => {
                expect(UtilityEngine.isClass(null)).to.equal(false);
            });

            it('Should return false when value is undefined', () => {
                expect(UtilityEngine.isClass(undefined)).to.equal(false);
            });

            it('Should return false when value is an empty object', () => {
                expect(UtilityEngine.isClass({})).to.equal(false);
            });

            it('Should return false when value is a filled object', () => {
                expect(UtilityEngine.isClass({foo: 'bar'})).to.equal(false);
            });

            it('Should return false when value is a function', () => {
                expect(UtilityEngine.isClass(function() {})).to.equal(false);
            });

            it('Should return false when value is true boolean', () => {
                expect(UtilityEngine.isClass(true)).to.equal(false);
            });

            it('Should return false when value is false boolean', () => {
                expect(UtilityEngine.isClass(false)).to.equal(false);
            });

            it('Should return false when value is a number', () => {
                expect(UtilityEngine.isClass(1)).to.equal(false);
            });

            it('Should return false when value is a primitive number', () => {
                expect(UtilityEngine.isClass(Number('1'))).to.equal(false);
            });

            it('Should return false when value is a wrapped primitive number', () => {
                expect(UtilityEngine.isClass(new Number('1'))).to.equal(false);
            });

            it('Should return false when value is a string', () => {
                expect(UtilityEngine.isClass('string')).to.equal(false);
            });

            it('Should return false when value is a primitive string', () => {
                expect(UtilityEngine.isClass(String('string'))).to.equal(false);
            });

            it('Should return false when value is a wrapped primitive string', () => {
                expect(UtilityEngine.isClass(new String('string'))).to.equal(false);
            });

            it('Should return false when value is an array', () => {
                expect(UtilityEngine.isClass([])).to.equal(false);
            });

            it('Should return false when value is a map', () => {
                expect(UtilityEngine.isClass(new Map())).to.equal(false);
            });

            it('Should return false when value is a date', () => {
                expect(UtilityEngine.isClass(new Date())).to.equal(false);
            });
        });

        describe('#isClass(value, SUPERCLASSVALUE)', function() {
            it('Should return true when value is undefined', () => {
                expect(UtilityEngine.isClass(Subclass, undefined)).to.equal(true);
            });

            it('Should return true when value is a superclass', () => {
                expect(UtilityEngine.isClass(Subclass, Superclass)).to.equal(true);
            });

            it('Should return true when value is a subclass of a subclass of a subclass', () => {
                expect(UtilityEngine.isClass(SubSubclass, Subclass)).to.equal(true);
            });


            it('Should return false when value is a subclass of a subclass', () => {
                expect(UtilityEngine.isClass(Subclass, SubSubclass)).to.equal(false);
            });

            it('Should return false when value is the same as given class', () => {
                expect(UtilityEngine.isClass(Subclass, Subclass)).to.equal(false);
            });

            it('Should return false when value is a superclass instance', () => {
                expect(UtilityEngine.isClass(Subclass, superclassInstance)).to.equal(false);
            });

            it('Should return false when value is a subclass instance', () => {
                expect(UtilityEngine.isClass(Subclass, subclassInstance)).to.equal(false);
            });

            it('Should return false when value is a subclass of a subclass instance', () => {
                expect(UtilityEngine.isClass(Subclass, subSubclassInstance)).to.equal(false);
            });

            it('Should return false when value is null', () => {
                expect(UtilityEngine.isClass(Subclass, null)).to.equal(false);
            });

            it('Should return false when value is an empty object', () => {
                expect(UtilityEngine.isClass(Subclass, {})).to.equal(false);
            });

            it('Should return false when value is a filled object', () => {
                expect(UtilityEngine.isClass(Subclass, {foo: 'bar'})).to.equal(false);
            });

            it('Should return false when value is a function', () => {
                expect(UtilityEngine.isClass(Subclass, function() {})).to.equal(false);
            });

            it('Should return false when value is true boolean', () => {
                expect(UtilityEngine.isClass(Subclass, true)).to.equal(false);
            });

            it('Should return false when value is false boolean', () => {
                expect(UtilityEngine.isClass(Subclass, false)).to.equal(false);
            });

            it('Should return false when value is a number', () => {
                expect(UtilityEngine.isClass(Subclass, 1)).to.equal(false);
            });

            it('Should return false when value is a primitive number', () => {
                expect(UtilityEngine.isClass(Subclass, Number('1'))).to.equal(false);
            });

            it('Should return false when value is a wrapped primitive number', () => {
                expect(UtilityEngine.isClass(Subclass, new Number('1'))).to.equal(false);
            });

            it('Should return false when value is a string', () => {
                expect(UtilityEngine.isClass(Subclass, 'string')).to.equal(false);
            });

            it('Should return false when value is a primitive string', () => {
                expect(UtilityEngine.isClass(Subclass, String('string'))).to.equal(false);
            });

            it('Should return false when value is a wrapped primitive string', () => {
                expect(UtilityEngine.isClass(Subclass, new String('string'))).to.equal(false);
            });

            it('Should return false when value is an array', () => {
                expect(UtilityEngine.isClass(Subclass, [])).to.equal(false);
            });

            it('Should return false when value is a map', () => {
                expect(UtilityEngine.isClass(Subclass, new Map())).to.equal(false);
            });

            it('Should return false when value is a date', () => {
                expect(UtilityEngine.isClass(Subclass, new Date())).to.equal(false);
            });
        });
    });

    // ╔═══════╗╔═══════╗         ╔═══════╗╔═╗      ╔═══════╗╔═══════╗╔═══════╗         ╔═══════╗╔════╗╔═╗╔═══════╗╔═══════╗╔═══════╗╔════╗╔═╗╔═══════╗╔═══════╗
    // ╚══╗ ╔══╝║ ╔═════╝         ║ ╔═════╝║ ║      ║ ╔═══╗ ║║ ╔═════╝║ ╔═════╝         ╚══╗ ╔══╝║ ╔╗ ║║ ║║ ╔═════╝╚══╗ ╔══╝║ ╔═══╗ ║║ ╔╗ ║║ ║║ ╔═════╝║ ╔═════╝
    //    ║ ║   ║ ╚═════╗╔═══════╗║ ║      ║ ║      ║ ╚═══╝ ║║ ╚═════╗║ ╚═════╗╔═══════╗   ║ ║   ║ ║║ ║║ ║║ ╚═════╗   ║ ║   ║ ╚═══╝ ║║ ║║ ║║ ║║ ║      ║ ╚═════╗
    //    ║ ║   ╚═════╗ ║╚═══════╝║ ║      ║ ║      ║ ╔═══╗ ║╚═════╗ ║╚═════╗ ║╚═══════╝   ║ ║   ║ ║║ ║║ ║╚═════╗ ║   ║ ║   ║ ╔═══╗ ║║ ║║ ║║ ║║ ║      ║ ╔═════╝
    // ╔══╝ ╚══╗╔═════╝ ║         ║ ╚═════╗║ ╚═════╗║ ║   ║ ║╔═════╝ ║╔═════╝ ║         ╔══╝ ╚══╗║ ║║ ╚╝ ║╔═════╝ ║   ║ ║   ║ ║   ║ ║║ ║║ ╚╝ ║║ ╚═════╗║ ╚═════╗
    // ╚═══════╝╚═══════╝         ╚═══════╝╚═══════╝╚═╝   ╚═╝╚═══════╝╚═══════╝         ╚═══════╝╚═╝╚════╝╚═══════╝   ╚═╝   ╚═╝   ╚═╝╚═╝╚════╝╚═══════╝╚═══════╝

    describe('#isClassInstance(value, superclassValue', function() {
        describe('#isClassInstance(VALUE, superclassInstance)', function() {
            it('Should return true when value is a superclass instance', () => {
                expect(UtilityEngine.isClassInstance(superclassInstance)).to.equal(true);
            });

            it('Should return true when value is a subclass instance', () => {
                expect(UtilityEngine.isClassInstance(subclassInstance)).to.equal(true);
            });

            it('Should return true when value is a subclass of a subclass instance', () => {
                expect(UtilityEngine.isClassInstance(subSubclassInstance)).to.equal(true);
            });


            it('Should return false when value is a superclass', () => {
                expect(UtilityEngine.isClassInstance(Superclass)).to.equal(false);
            });

            it('Should return false when value is a subclass', () => {
                expect(UtilityEngine.isClassInstance(Subclass)).to.equal(false);
            });

            it('Should return false when value is a subclass of a subclass', () => {
                expect(UtilityEngine.isClassInstance(SubSubclass)).to.equal(false);
            });

            it('Should return false when value is null', () => {
                expect(UtilityEngine.isClassInstance(null)).to.equal(false);
            });

            it('Should return false when value is undefined', () => {
                expect(UtilityEngine.isClassInstance(undefined)).to.equal(false);
            });

            it('Should return false when value is an empty object', () => {
                expect(UtilityEngine.isClassInstance({})).to.equal(false);
            });

            it('Should return false when value is a filled object', () => {
                expect(UtilityEngine.isClassInstance({foo: 'bar'})).to.equal(false);
            });

            it('Should return false when value is a function', () => {
                expect(UtilityEngine.isClassInstance(function() {})).to.equal(false);
            });

            it('Should return false when value is true boolean', () => {
                expect(UtilityEngine.isClassInstance(true)).to.equal(false);
            });

            it('Should return false when value is false boolean', () => {
                expect(UtilityEngine.isClassInstance(false)).to.equal(false);
            });

            it('Should return false when value is a number', () => {
                expect(UtilityEngine.isClassInstance(1)).to.equal(false);
            });

            it('Should return false when value is a primitive number', () => {
                expect(UtilityEngine.isClassInstance(Number('1'))).to.equal(false);
            });

            it('Should return false when value is a wrapped primitive number', () => {
                expect(UtilityEngine.isClassInstance(new Number('1'))).to.equal(false);
            });

            it('Should return false when value is a string', () => {
                expect(UtilityEngine.isClassInstance('string')).to.equal(false);
            });

            it('Should return false when value is a primitive string', () => {
                expect(UtilityEngine.isClassInstance(String('string'))).to.equal(false);
            });

            it('Should return false when value is a wrapped primitive string', () => {
                expect(UtilityEngine.isClassInstance(new String('string'))).to.equal(false);
            });

            it('Should return false when value is an array', () => {
                expect(UtilityEngine.isClassInstance([])).to.equal(false);
            });

            it('Should return false when value is a map', () => {
                expect(UtilityEngine.isClassInstance(new Map())).to.equal(false);
            });

            it('Should return false when value is a date', () => {
                expect(UtilityEngine.isClassInstance(new Date())).to.equal(false);
            });
        });

        describe('#isClassInstance(value, SUPERCLASSVALUE)', function() {
            it('Should return true when value is undefined', () => {
                expect(UtilityEngine.isClassInstance(subclassInstance, undefined)).to.equal(true);
            });

            it('Should return true when value is a superclass', () => {
                expect(UtilityEngine.isClassInstance(subclassInstance, Superclass)).to.equal(true);
            });

            it('Should return true when value is a subclass of a subclass of a subclass', () => {
                expect(UtilityEngine.isClassInstance(subSubclassInstance, Subclass)).to.equal(true);
            });

            it('Should return true when value is the same as given class', () => {
                expect(UtilityEngine.isClassInstance(subclassInstance, Subclass)).to.equal(true);
            });


            it('Should return false when value is a subclass of a subclass', () => {
                expect(UtilityEngine.isClassInstance(subclassInstance, SubSubclass)).to.equal(false);
            });

            it('Should return false when value is a superclass instance', () => {
                expect(UtilityEngine.isClassInstance(subclassInstance, superclassInstance)).to.equal(false);
            });

            it('Should return false when value is a subclass instance', () => {
                expect(UtilityEngine.isClassInstance(subclassInstance, subclassInstance)).to.equal(false);
            });

            it('Should return false when value is a subclass of a subclass instance', () => {
                expect(UtilityEngine.isClassInstance(subclassInstance, subSubclassInstance)).to.equal(false);
            });

            it('Should return false when value is null', () => {
                expect(UtilityEngine.isClassInstance(subclassInstance, null)).to.equal(false);
            });

            it('Should return false when value is an empty object', () => {
                expect(UtilityEngine.isClassInstance(subclassInstance, {})).to.equal(false);
            });

            it('Should return false when value is a filled object', () => {
                expect(UtilityEngine.isClassInstance(subclassInstance, {foo: 'bar'})).to.equal(false);
            });

            it('Should return false when value is a function', () => {
                expect(UtilityEngine.isClassInstance(subclassInstance, function() {})).to.equal(false);
            });

            it('Should return false when value is true boolean', () => {
                expect(UtilityEngine.isClassInstance(subclassInstance, true)).to.equal(false);
            });

            it('Should return false when value is false boolean', () => {
                expect(UtilityEngine.isClassInstance(subclassInstance, false)).to.equal(false);
            });

            it('Should return false when value is a number', () => {
                expect(UtilityEngine.isClassInstance(subclassInstance, 1)).to.equal(false);
            });

            it('Should return false when value is a primitive number', () => {
                expect(UtilityEngine.isClassInstance(subclassInstance, Number('1'))).to.equal(false);
            });

            it('Should return false when value is a wrapped primitive number', () => {
                expect(UtilityEngine.isClassInstance(subclassInstance, new Number('1'))).to.equal(false);
            });

            it('Should return false when value is a string', () => {
                expect(UtilityEngine.isClassInstance(subclassInstance, 'string')).to.equal(false);
            });

            it('Should return false when value is a primitive string', () => {
                expect(UtilityEngine.isClassInstance(subclassInstance, String('string'))).to.equal(false);
            });

            it('Should return false when value is a wrapped primitive string', () => {
                expect(UtilityEngine.isClassInstance(subclassInstance, new String('string'))).to.equal(false);
            });

            it('Should return false when value is an array', () => {
                expect(UtilityEngine.isClassInstance(subclassInstance, [])).to.equal(false);
            });

            it('Should return false when value is a map', () => {
                expect(UtilityEngine.isClassInstance(subclassInstance, new Map())).to.equal(false);
            });

            it('Should return false when value is a date', () => {
                expect(UtilityEngine.isClassInstance(subclassInstance, new Date())).to.equal(false);
            });
        });
    });

    // ╔═══════╗╔═══════╗         ╔═══════╗╔═╗   ╔═╗╔══════╗ ╔═══════╗╔═╗      ╔═══════╗╔═══════╗╔═══════╗         ╔═══════╗╔═══════╗         ╔═══════╗╔═╗   ╔═╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═╗      ╔═══════╗╔═══════╗╔═══════╗
    // ╚══╗ ╔══╝║ ╔═════╝         ║ ╔═════╝║ ║   ║ ║║ ╔══╗ ║ ║ ╔═════╝║ ║      ║ ╔═══╗ ║║ ╔═════╝║ ╔═════╝         ║ ╔═══╗ ║║ ╔═════╝         ║ ╔═════╝║ ║   ║ ║║ ╔═══╗ ║║ ╔═════╝║ ╔═══╗ ║║ ╔═════╝║ ║      ║ ╔═══╗ ║║ ╔═════╝║ ╔═════╝
    //    ║ ║   ║ ╚═════╗╔═══════╗║ ╚═════╗║ ║   ║ ║║ ╚══╝ ╚╗║ ║      ║ ║      ║ ╚═══╝ ║║ ╚═════╗║ ╚═════╗╔═══════╗║ ║   ║ ║║ ╚═════╗╔═══════╗║ ╚═════╗║ ║   ║ ║║ ╚═══╝ ║║ ╚═════╗║ ╚═══╝ ║║ ║      ║ ║      ║ ╚═══╝ ║║ ╚═════╗║ ╚═════╗
    //    ║ ║   ╚═════╗ ║╚═══════╝╚═════╗ ║║ ║   ║ ║║ ╔═══╗ ║║ ║      ║ ║      ║ ╔═══╗ ║╚═════╗ ║╚═════╗ ║╚═══════╝║ ║   ║ ║║ ╔═════╝╚═══════╝╚═════╗ ║║ ║   ║ ║║ ╔═════╝║ ╔═════╝║ ╔═╗ ╔═╝║ ║      ║ ║      ║ ╔═══╗ ║╚═════╗ ║╚═════╗ ║
    // ╔══╝ ╚══╗╔═════╝ ║         ╔═════╝ ║║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═════╗║ ╚═════╗║ ║   ║ ║╔═════╝ ║╔═════╝ ║         ║ ╚═══╝ ║║ ║               ╔═════╝ ║║ ╚═══╝ ║║ ║      ║ ╚═════╗║ ║ ║ ╚═╗║ ╚═════╗║ ╚═════╗║ ║   ║ ║╔═════╝ ║╔═════╝ ║
    // ╚═══════╝╚═══════╝         ╚═══════╝╚═══════╝╚═══════╝╚═══════╝╚═══════╝╚═╝   ╚═╝╚═══════╝╚═══════╝         ╚═══════╝╚═╝               ╚═══════╝╚═══════╝╚═╝      ╚═══════╝╚═╝ ╚═══╝╚═══════╝╚═══════╝╚═╝   ╚═╝╚═══════╝╚═══════╝

    describe('#isSubclassOfSuperclass(subclassValue, superclassValue)', function() {
        describe('#isSubclassOfSuperclass(SUBCLASSVALUE, superclassValue)', function() {
            it('Should return true when value is a subclass of a superclass', () => {
                expect(UtilityEngine.isSubclassOfSuperclass(Subclass, Superclass)).to.equal(true);
            });

            it('Should return true when value is a subclass of a subclass of a superclass', () => {
                expect(UtilityEngine.isSubclassOfSuperclass(SubSubclass, Superclass)).to.equal(true);
            });

            it('Should return true when value is a subclass of a subclass', () => {
                expect(UtilityEngine.isSubclassOfSuperclass(SubSubclass, Subclass)).to.equal(true);
            });


            it('Should return false when value is the same as given superclass', () => {
                expect(UtilityEngine.isSubclassOfSuperclass(Superclass, Superclass)).to.equal(false);
            });

            it('Should return false when value is a superclass of a subclass', () => {
                expect(UtilityEngine.isSubclassOfSuperclass(Superclass, Subclass)).to.equal(false);
            });

            it('Should return false when value is a superclass of a subclass of a subclass', () => {
                expect(UtilityEngine.isSubclassOfSuperclass(Superclass, SubSubclass)).to.equal(false);
            });

            it('Should return false when value is a superclass instance', () => {
                expect(UtilityEngine.isSubclassOfSuperclass(superclassInstance, Superclass)).to.equal(false);
            });

            it('Should return false when value is a subclass instance', () => {
                expect(UtilityEngine.isSubclassOfSuperclass(subclassInstance, Superclass)).to.equal(false);
            });

            it('Should return false when value is a subclass of a subclass instance', () => {
                expect(UtilityEngine.isSubclassOfSuperclass(subSubclassInstance, Superclass)).to.equal(false);
            });

            it('Should return false when value is null', () => {
                expect(UtilityEngine.isSubclassOfSuperclass(null, Superclass)).to.equal(false);
            });

            it('Should return false when value is undefined', () => {
                expect(UtilityEngine.isSubclassOfSuperclass(undefined, Superclass)).to.equal(false);
            });

            it('Should return false when value is an empty object', () => {
                expect(UtilityEngine.isSubclassOfSuperclass({}, Superclass)).to.equal(false);
            });

            it('Should return false when value is a filled object', () => {
                expect(UtilityEngine.isSubclassOfSuperclass({foo: 'bar'}, Superclass)).to.equal(false);
            });

            it('Should return false when value is a function', () => {
                expect(UtilityEngine.isSubclassOfSuperclass(function() {}, Superclass)).to.equal(false);
            });

            it('Should return false when value is true boolean', () => {
                expect(UtilityEngine.isSubclassOfSuperclass(true, Superclass)).to.equal(false);
            });

            it('Should return false when value is false boolean', () => {
                expect(UtilityEngine.isSubclassOfSuperclass(false, Superclass)).to.equal(false);
            });

            it('Should return false when value is a number', () => {
                expect(UtilityEngine.isSubclassOfSuperclass(1, Superclass)).to.equal(false);
            });

            it('Should return false when value is a primitive number', () => {
                expect(UtilityEngine.isSubclassOfSuperclass(Number('1'), Superclass)).to.equal(false);
            });

            it('Should return false when value is a wrapped primitive number', () => {
                expect(UtilityEngine.isSubclassOfSuperclass(new Number('1'), Superclass)).to.equal(false);
            });

            it('Should return false when value is a string', () => {
                expect(UtilityEngine.isSubclassOfSuperclass('string', Superclass)).to.equal(false);
            });

            it('Should return false when value is a primitive string', () => {
                expect(UtilityEngine.isSubclassOfSuperclass(String('string'), Superclass)).to.equal(false);
            });

            it('Should return false when value is a wrapped primitive string', () => {
                expect(UtilityEngine.isSubclassOfSuperclass(new String('string'), Superclass)).to.equal(false);
            });

            it('Should return false when value is an array', () => {
                expect(UtilityEngine.isSubclassOfSuperclass([], Superclass)).to.equal(false);
            });

            it('Should return false when value is a map', () => {
                expect(UtilityEngine.isSubclassOfSuperclass(new Map(), Superclass)).to.equal(false);
            });

            it('Should return false when value is a date', () => {
                expect(UtilityEngine.isSubclassOfSuperclass(new Date(), Superclass)).to.equal(false);
            });
        });

        describe('#isSubclassOfSuperclass(subclassValue, SUPERCLASSVALUE)', function() {
            it('Should return true when value is a superclass of a subclass', () => {
                expect(UtilityEngine.isSubclassOfSuperclass(Subclass, Superclass)).to.equal(true);
            });

            it('Should return true when value is a subclass of a subclass of a subclass', () => {
                expect(UtilityEngine.isSubclassOfSuperclass(SubSubclass, Subclass)).to.equal(true);
            });


            it('Should return false when value is the same as given subclass', () => {
                expect(UtilityEngine.isSubclassOfSuperclass(Subclass, Subclass)).to.equal(false);
            });

            it('Should return false when value is a superclass instance', () => {
                expect(UtilityEngine.isSubclassOfSuperclass(Subclass, superclassInstance)).to.equal(false);
            });

            it('Should return false when value is a subclass instance', () => {
                expect(UtilityEngine.isSubclassOfSuperclass(Subclass, subclassInstance)).to.equal(false);
            });

            it('Should return false when value is a subclass of a subclass instance', () => {
                expect(UtilityEngine.isSubclassOfSuperclass(Subclass, subSubclassInstance)).to.equal(false);
            });

            it('Should return false when value is null', () => {
                expect(UtilityEngine.isSubclassOfSuperclass(Subclass, null)).to.equal(false);
            });

            it('Should return false when value is undefined', () => {
                expect(UtilityEngine.isSubclassOfSuperclass(Subclass, undefined)).to.equal(false);
            });

            it('Should return false when value is an empty object', () => {
                expect(UtilityEngine.isSubclassOfSuperclass(Subclass, {})).to.equal(false);
            });

            it('Should return false when value is a filled object', () => {
                expect(UtilityEngine.isSubclassOfSuperclass(Subclass, {foo: 'bar'})).to.equal(false);
            });

            it('Should return false when value is a function', () => {
                expect(UtilityEngine.isSubclassOfSuperclass(Subclass, function() {})).to.equal(false);
            });

            it('Should return false when value is true boolean', () => {
                expect(UtilityEngine.isSubclassOfSuperclass(Subclass, true)).to.equal(false);
            });

            it('Should return false when value is false boolean', () => {
                expect(UtilityEngine.isSubclassOfSuperclass(Subclass, false)).to.equal(false);
            });

            it('Should return false when value is a number', () => {
                expect(UtilityEngine.isSubclassOfSuperclass(Subclass, 1)).to.equal(false);
            });

            it('Should return false when value is a primitive number', () => {
                expect(UtilityEngine.isSubclassOfSuperclass(Subclass, Number('1'))).to.equal(false);
            });

            it('Should return false when value is a wrapped primitive number', () => {
                expect(UtilityEngine.isSubclassOfSuperclass(Subclass, new Number('1'))).to.equal(false);
            });

            it('Should return false when value is a string', () => {
                expect(UtilityEngine.isSubclassOfSuperclass(Subclass, 'string')).to.equal(false);
            });

            it('Should return false when value is a primitive string', () => {
                expect(UtilityEngine.isSubclassOfSuperclass(Subclass, String('string'))).to.equal(false);
            });

            it('Should return false when value is a wrapped primitive string', () => {
                expect(UtilityEngine.isSubclassOfSuperclass(Subclass, new String('string'))).to.equal(false);
            });

            it('Should return false when value is an array', () => {
                expect(UtilityEngine.isSubclassOfSuperclass(Subclass, [])).to.equal(false);
            });

            it('Should return false when value is a map', () => {
                expect(UtilityEngine.isSubclassOfSuperclass(Subclass, new Map())).to.equal(false);
            });

            it('Should return false when value is a date', () => {
                expect(UtilityEngine.isSubclassOfSuperclass(Subclass, new Date())).to.equal(false);
            });
        });
    });

    // ╔═══════╗╔═══════╗         ╔═══════╗╔═╗   ╔═╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═╗      ╔═══════╗╔═══════╗╔═══════╗         ╔═══════╗╔═══════╗         ╔═══════╗╔═╗   ╔═╗╔══════╗ ╔═══════╗╔═╗      ╔═══════╗╔═══════╗╔═══════╗
    // ╚══╗ ╔══╝║ ╔═════╝         ║ ╔═════╝║ ║   ║ ║║ ╔═══╗ ║║ ╔═════╝║ ╔═══╗ ║║ ╔═════╝║ ║      ║ ╔═══╗ ║║ ╔═════╝║ ╔═════╝         ║ ╔═══╗ ║║ ╔═════╝         ║ ╔═════╝║ ║   ║ ║║ ╔══╗ ║ ║ ╔═════╝║ ║      ║ ╔═══╗ ║║ ╔═════╝║ ╔═════╝
    //    ║ ║   ║ ╚═════╗╔═══════╗║ ╚═════╗║ ║   ║ ║║ ╚═══╝ ║║ ╚═════╗║ ╚═══╝ ║║ ║      ║ ║      ║ ╚═══╝ ║║ ╚═════╗║ ╚═════╗╔═══════╗║ ║   ║ ║║ ╚═════╗╔═══════╗║ ╚═════╗║ ║   ║ ║║ ╚══╝ ╚╗║ ║      ║ ║      ║ ╚═══╝ ║║ ╚═════╗║ ╚═════╗
    //    ║ ║   ╚═════╗ ║╚═══════╝╚═════╗ ║║ ║   ║ ║║ ╔═════╝║ ╔═════╝║ ╔═╗ ╔═╝║ ║      ║ ║      ║ ╔═══╗ ║╚═════╗ ║╚═════╗ ║╚═══════╝║ ║   ║ ║║ ╔═════╝╚═══════╝╚═════╗ ║║ ║   ║ ║║ ╔═══╗ ║║ ║      ║ ║      ║ ╔═══╗ ║╚═════╗ ║╚═════╗ ║
    // ╔══╝ ╚══╗╔═════╝ ║         ╔═════╝ ║║ ╚═══╝ ║║ ║      ║ ╚═════╗║ ║ ║ ╚═╗║ ╚═════╗║ ╚═════╗║ ║   ║ ║╔═════╝ ║╔═════╝ ║         ║ ╚═══╝ ║║ ║               ╔═════╝ ║║ ╚═══╝ ║║ ╚═══╝ ║║ ╚═════╗║ ╚═════╗║ ║   ║ ║╔═════╝ ║╔═════╝ ║
    // ╚═══════╝╚═══════╝         ╚═══════╝╚═══════╝╚═╝      ╚═══════╝╚═╝ ╚═══╝╚═══════╝╚═══════╝╚═╝   ╚═╝╚═══════╝╚═══════╝         ╚═══════╝╚═╝               ╚═══════╝╚═══════╝╚═══════╝╚═══════╝╚═══════╝╚═╝   ╚═╝╚═══════╝╚═══════╝

    describe('#isSuperclassOfSubclass(superclassValue, subclassValue)', function() {
        describe('#isSubclassOfSuperclass(SUPERCLASSVALUE, subclassValue)', function() {
            it('Should return true when value is a superclass of a subclass', () => {
                expect(UtilityEngine.isSuperclassOfSubclass(Superclass, Subclass)).to.equal(true);
            });

            it('Should return true when value is a superclass of a subclass of a subclass', () => {
                expect(UtilityEngine.isSuperclassOfSubclass(Superclass, SubSubclass)).to.equal(true);
            });

            it('Should return true when value is a subclass of a subclass of a subclass', () => {
                expect(UtilityEngine.isSuperclassOfSubclass(Subclass, SubSubclass)).to.equal(true);
            });


            it('Should return false when value is the same as given superclass', () => {
                expect(UtilityEngine.isSuperclassOfSubclass(Superclass, Superclass)).to.equal(false);
            });

            it('Should return false when value is a subclass of a superclass', () => {
                expect(UtilityEngine.isSuperclassOfSubclass(Subclass, Superclass)).to.equal(false);
            });

            it('Should return false when value is a subclass of a subclass of a superclass', () => {
                expect(UtilityEngine.isSuperclassOfSubclass(SubSubclass, Superclass)).to.equal(false);
            });

            it('Should return false when value is a superclass instance', () => {
                expect(UtilityEngine.isSuperclassOfSubclass(superclassInstance, Subclass)).to.equal(false);
            });

            it('Should return false when value is a subclass instance', () => {
                expect(UtilityEngine.isSuperclassOfSubclass(subclassInstance, Subclass)).to.equal(false);
            });

            it('Should return false when value is a subclass of a subclass instance', () => {
                expect(UtilityEngine.isSuperclassOfSubclass(subSubclassInstance, Subclass)).to.equal(false);
            });

            it('Should return false when value is null', () => {
                expect(UtilityEngine.isSuperclassOfSubclass(null, Subclass)).to.equal(false);
            });

            it('Should return false when value is undefined', () => {
                expect(UtilityEngine.isSuperclassOfSubclass(undefined, Subclass)).to.equal(false);
            });

            it('Should return false when value is an empty object', () => {
                expect(UtilityEngine.isSuperclassOfSubclass({}, Subclass)).to.equal(false);
            });

            it('Should return false when value is a filled object', () => {
                expect(UtilityEngine.isSuperclassOfSubclass({foo: 'bar'}, Subclass)).to.equal(false);
            });

            it('Should return false when value is a function', () => {
                expect(UtilityEngine.isSuperclassOfSubclass(function() {}, Subclass)).to.equal(false);
            });

            it('Should return false when value is true boolean', () => {
                expect(UtilityEngine.isSuperclassOfSubclass(true, Subclass)).to.equal(false);
            });

            it('Should return false when value is false boolean', () => {
                expect(UtilityEngine.isSuperclassOfSubclass(false, Subclass)).to.equal(false);
            });

            it('Should return false when value is a number', () => {
                expect(UtilityEngine.isSuperclassOfSubclass(1, Subclass)).to.equal(false);
            });

            it('Should return false when value is a primitive number', () => {
                expect(UtilityEngine.isSuperclassOfSubclass(Number('1'), Subclass)).to.equal(false);
            });

            it('Should return false when value is a wrapped primitive number', () => {
                expect(UtilityEngine.isSuperclassOfSubclass(new Number('1'), Subclass)).to.equal(false);
            });

            it('Should return false when value is a string', () => {
                expect(UtilityEngine.isSuperclassOfSubclass('string', Subclass)).to.equal(false);
            });

            it('Should return false when value is a primitive string', () => {
                expect(UtilityEngine.isSuperclassOfSubclass(String('string'), Subclass)).to.equal(false);
            });

            it('Should return false when value is a wrapped primitive string', () => {
                expect(UtilityEngine.isSuperclassOfSubclass(new String('string'), Subclass)).to.equal(false);
            });

            it('Should return false when value is an array', () => {
                expect(UtilityEngine.isSuperclassOfSubclass([], Subclass)).to.equal(false);
            });

            it('Should return false when value is a map', () => {
                expect(UtilityEngine.isSuperclassOfSubclass(new Map(), Subclass)).to.equal(false);
            });

            it('Should return false when value is a date', () => {
                expect(UtilityEngine.isSuperclassOfSubclass(new Date(), Subclass)).to.equal(false);
            });
        });

        describe('#isSuperclassOfSubclass(subclassValue, SUPERCLASSVALUE)', function() {
            it('Should return true when value is a subclass of a superclass', () => {
                expect(UtilityEngine.isSuperclassOfSubclass(Superclass, Subclass)).to.equal(true);
            });

            it('Should return true when value is a subclass of a subclass of a superclass', () => {
                expect(UtilityEngine.isSuperclassOfSubclass(Superclass, SubSubclass)).to.equal(true);
            });


            it('Should return false when value is the same as given subclass', () => {
                expect(UtilityEngine.isSuperclassOfSubclass(Superclass, Superclass)).to.equal(false);
            });

            it('Should return false when value is a superclass instance', () => {
                expect(UtilityEngine.isSuperclassOfSubclass(Superclass, superclassInstance)).to.equal(false);
            });

            it('Should return false when value is a subclass instance', () => {
                expect(UtilityEngine.isSuperclassOfSubclass(Superclass, subclassInstance)).to.equal(false);
            });

            it('Should return false when value is a subclass of a subclass instance', () => {
                expect(UtilityEngine.isSuperclassOfSubclass(Superclass, subSubclassInstance)).to.equal(false);
            });

            it('Should return false when value is null', () => {
                expect(UtilityEngine.isSuperclassOfSubclass(Superclass, null)).to.equal(false);
            });

            it('Should return false when value is undefined', () => {
                expect(UtilityEngine.isSuperclassOfSubclass(Superclass, undefined)).to.equal(false);
            });

            it('Should return false when value is an empty object', () => {
                expect(UtilityEngine.isSuperclassOfSubclass(Superclass, {})).to.equal(false);
            });

            it('Should return false when value is a filled object', () => {
                expect(UtilityEngine.isSuperclassOfSubclass(Superclass, {foo: 'bar'})).to.equal(false);
            });

            it('Should return false when value is a function', () => {
                expect(UtilityEngine.isSuperclassOfSubclass(Superclass, function() {})).to.equal(false);
            });

            it('Should return false when value is true boolean', () => {
                expect(UtilityEngine.isSuperclassOfSubclass(Superclass, true)).to.equal(false);
            });

            it('Should return false when value is false boolean', () => {
                expect(UtilityEngine.isSuperclassOfSubclass(Superclass, false)).to.equal(false);
            });

            it('Should return false when value is a number', () => {
                expect(UtilityEngine.isSuperclassOfSubclass(Superclass, 1)).to.equal(false);
            });

            it('Should return false when value is a primitive number', () => {
                expect(UtilityEngine.isSuperclassOfSubclass(Superclass, Number('1'))).to.equal(false);
            });

            it('Should return false when value is a wrapped primitive number', () => {
                expect(UtilityEngine.isSuperclassOfSubclass(Superclass, new Number('1'))).to.equal(false);
            });

            it('Should return false when value is a string', () => {
                expect(UtilityEngine.isSuperclassOfSubclass(Superclass, 'string')).to.equal(false);
            });

            it('Should return false when value is a primitive string', () => {
                expect(UtilityEngine.isSuperclassOfSubclass(Superclass, String('string'))).to.equal(false);
            });

            it('Should return false when value is a wrapped primitive string', () => {
                expect(UtilityEngine.isSuperclassOfSubclass(Superclass, new String('string'))).to.equal(false);
            });

            it('Should return false when value is an array', () => {
                expect(UtilityEngine.isSuperclassOfSubclass(Superclass, [])).to.equal(false);
            });

            it('Should return false when value is a map', () => {
                expect(UtilityEngine.isSuperclassOfSubclass(Superclass, new Map())).to.equal(false);
            });

            it('Should return false when value is a date', () => {
                expect(UtilityEngine.isSuperclassOfSubclass(Superclass, new Date())).to.equal(false);
            });
        });
    });
});
