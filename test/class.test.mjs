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

    describe('#isClass(VALUE)', function() {
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

    // ╔═══════╗╔═══════╗         ╔═══════╗╔═╗      ╔═══════╗╔═══════╗╔═══════╗         ╔═══════╗╔════╗╔═╗╔═══════╗╔═══════╗╔═══════╗╔════╗╔═╗╔═══════╗╔═══════╗
    // ╚══╗ ╔══╝║ ╔═════╝         ║ ╔═════╝║ ║      ║ ╔═══╗ ║║ ╔═════╝║ ╔═════╝         ╚══╗ ╔══╝║ ╔╗ ║║ ║║ ╔═════╝╚══╗ ╔══╝║ ╔═══╗ ║║ ╔╗ ║║ ║║ ╔═════╝║ ╔═════╝
    //    ║ ║   ║ ╚═════╗╔═══════╗║ ║      ║ ║      ║ ╚═══╝ ║║ ╚═════╗║ ╚═════╗╔═══════╗   ║ ║   ║ ║║ ║║ ║║ ╚═════╗   ║ ║   ║ ╚═══╝ ║║ ║║ ║║ ║║ ║      ║ ╚═════╗
    //    ║ ║   ╚═════╗ ║╚═══════╝║ ║      ║ ║      ║ ╔═══╗ ║╚═════╗ ║╚═════╗ ║╚═══════╝   ║ ║   ║ ║║ ║║ ║╚═════╗ ║   ║ ║   ║ ╔═══╗ ║║ ║║ ║║ ║║ ║      ║ ╔═════╝
    // ╔══╝ ╚══╗╔═════╝ ║         ║ ╚═════╗║ ╚═════╗║ ║   ║ ║╔═════╝ ║╔═════╝ ║         ╔══╝ ╚══╗║ ║║ ╚╝ ║╔═════╝ ║   ║ ║   ║ ║   ║ ║║ ║║ ╚╝ ║║ ╚═════╗║ ╚═════╗
    // ╚═══════╝╚═══════╝         ╚═══════╝╚═══════╝╚═╝   ╚═╝╚═══════╝╚═══════╝         ╚═══════╝╚═╝╚════╝╚═══════╝   ╚═╝   ╚═╝   ╚═╝╚═╝╚════╝╚═══════╝╚═══════╝

    describe('#isClassInstance(VALUE)', function() {
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
            expect(UtilityEngine.isClassInstance(function() {
            })).to.equal(false);
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
});
