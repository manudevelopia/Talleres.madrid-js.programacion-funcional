/**
 * The factorial of a positive integer n, denoted by n!, is the product of all positive integers less than or equal to n.
 * For example,. 5 ! = 5 × 4 × 3 × 2 x 1
 * Table with factorial numbers http://2000clicks.com/mathhelp/BasicFactorialTable.aspx
 */

const factorial = {
    nonFunctional: (n) => {
        let result=  1;
        for(let i = 1; i <= n; i ++) {
            result = result * i;
        }

        return result;
    },
    functional: (num) => {
        const calcFactorial = (n) => {
            // Base case: if n is 0, result should be 1;
            return n === 0 ? 1 : calcFactorial(n - 1) * n;
        }

        return calcFactorial(num);
    }

};

/**
 * Fibonacci sequence is a sequence of numbers, where each number is the sum of the 2 previous fibonacci numbers,
 * except the first two numbers that are 0 and 1.
 * Example:
 * 6 =>	8
 * 7 =>	13
 * 8 => 21 (13 + 8)
 * 9 =>	34 (21+13)
 * Fibonacci table => https://www.rapidtables.com/math/number/fibonacci.html
 */
const fibonacci = {
    nonFunctional: (num) => {
        let cache = {
            0: 0,
            1: 1,
            2: 1,
        };

        const getResult = (num) => {
            if(cache[num] || cache[num] === 0) {
                return cache[num];
            } else {
                for(let i = 3; i <= num; i++) {
                    cache[i] = cache[i-1] + cache[i-2];
                }
                return cache[num];
            }
        }

        return getResult(num);
    },
    functional: (n) => {
        const fibonacci = (n) => {
            return n <= 2 ? 1 : fibonacci(n-1) + fibonacci(n-2);
        }
    }
}

/**
 * Design to logical predicates [even] and [odd]. They should return true or false for the given number passed as parameter.
 * You cannot use % operator.
 */
const evenOrodd = {
    even: function(num) {
        return num === 0 ? true : !this.even(num-1);
    },
    odd: () => {

    }
}

/**
 * Design a recursive function [addUp] that returns the sum of the n first natural numbers.
 * Example: addUp(3) // 6 => (1+2+3)
 */
const addUp = {
     // We use anonymous function instead of arrow function in order to avoid the creation of a new variable (arrow function)
    //  and be able to be called recursively
    sum: function(num) {
        return num === 1 ? 1 : num + this.sum(num - 1);
    }
};

/**
 * Design the recursive funtion [digits]. This function should sum all the number of the given parameter
 * Exmaples:
 *  - digits(5) // 5
 *  - digits(25) // 7
 *  - digits(125) // 8
 */
const digits = function(num) {
    return num < 10 ? num : num % 10 + digits(Math.floor(num/10));
}

module.exports = {
    factorial,
    fibonacci,
    evenOrodd,
    addUp,
    digits,
};