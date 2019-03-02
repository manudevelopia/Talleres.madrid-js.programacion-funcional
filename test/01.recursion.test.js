const {expect, assert} = require('chai');
const {factorial, fibonacci, evenOrodd, addUp, digits} = require('../problems/01.recursion');

suite('Recursion', () => {
    suite('Factorial', () => {
        suite('Non functional factorial function', () => {
            test('should return "6227020800" for "13"', () => {
                expect(factorial.nonFunctional(13)).to.be.equals(6227020800);
            });
        });
        suite('Recursive/functional function', () => {
            test('should return "6227020800" for "13"', () => {
                expect(factorial.functional(13)).to.be.equals(6227020800);
            });
        });
    });

    suite('Fibonacci', () => {
        suite('Non functional fibonacci function', () => {
            test('should return "0" for "0"', () => {
                expect(fibonacci.nonFunctional(0)).to.be.equals(0);
            });
            test('should return "1" for "1"', () => {
                expect(fibonacci.nonFunctional(1)).to.be.equals(1);
            });
            test('should return "233" for "13"', () => {
                expect(fibonacci.nonFunctional(13)).to.be.equals(233);
            });
        });
        suite('recursion function', () => {
            test('should return "0" for "0"', () => {
                expect(fibonacci.nonFunctional(0)).to.be.equals(0);
            });
            test('should return "1" for "1"', () => {
                expect(fibonacci.nonFunctional(1)).to.be.equals(1);
            });
            test('should return "233" for "13"', () => {
                expect(fibonacci.nonFunctional(13)).to.be.equals(233);
            });
        });
    });

    suite('Even or odd', () => {
        suite('even function', () => {
            test('should return "true" for "8"', () => {
                assert.isTrue(evenOrodd.even(8));
            });
            test('should return "true" for "0"', () => {
                assert.isTrue(evenOrodd.even(0));
            });
            test('should return "false" for "9"', () => {
                assert.isFalse(evenOrodd.even(9));
            });
        });
    });

    suite('addUp function', () => {
        test('should return "15" for given number "5"', () => {
            expect(addUp.sum(5)).to.be.equals(15);
        });
    });

    suite('digits function', () => {
        test('should return "5" for given number "5"', () => {
            expect(digits(5)).to.be.equals(5);
        });
        test('should return "7" for given number "25"', () => {
            expect(digits(25)).to.be.equals(7);
        });
        test('should return "8" for given number "125"', () => {
            expect(digits(125)).to.be.equals(8);
        });
    });
});