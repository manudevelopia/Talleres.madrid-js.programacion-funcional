const {expect, assert} = require('chai');
const {
    mirror,
    palindrome,
    addV,
    hasV,
    repeatV,
    mirrorV,
    insertV,
    sortV,
    containsV,
    parts
} = require('../problems/02.inmersion');

suite('Inmersion', () => {
    suite('Mirrow', () => {
        test('should verify if two numbers are simetric', () => {
            assert.isFalse(mirror(1, 7));
            assert.isTrue(mirror(0, 0));
            assert.isTrue(mirror(123, 321));
            assert.isFalse(mirror (123, 123));
            assert.isFalse(mirror (123, 132));
            assert.isFalse(palindrome (123));
            assert.isTrue(palindrome (12321));
            assert.isTrue(palindrome (1221));
        });
    });
    suite('Palindrome', () => {
        test('should verify if a number simetric compared with itself', () => {
            assert.isFalse(palindrome (123));
            assert.isTrue(palindrome (12321));
            assert.isTrue(palindrome (1221));
        });
    });
    suite('AddV', () => {
        test('should sum all elements of an array', () => {
            expect(addV.addVA([1,2,3,4,5])).to.be.equals(15);
            expect(addV.addVA([])).to.be.equals(0);
            // expect(addVB([1,2,3,4,5]).to.be.equals(15);
        });
    });
    suite('hasV', () => {
        test('should return true if the defined constains the given element "e"', () => {
            assert.isTrue(hasV([1,2,3,4,5], 4));
        });
        test('should return false if the defined does not constain the given element "e"', () => {
            assert.isFalse(hasV([1,2,3,4,5], 6));
        });
    });
    suite('repeatV', () => {
        test('should return true if the array contains repeated elements', () => {
            assert.isTrue(repeatV([1,2,3,4,5,3]));
        });
        test('should return false if the array does not contain repeated elements', () => {
            assert.isFalse(repeatV([1,2,3,4,5]));
        });
    });
});