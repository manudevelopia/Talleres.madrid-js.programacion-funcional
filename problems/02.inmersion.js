// Function Design II. Immersion [30 min]


/**
 * Diseña una función recursiva [mirror] para determinar si un número entero n es simétrico a otro número entero m
 * Construye a partir de aquí la función [palindrome] que indica si un número es simétrico respecto a sí mismo.
 * Test cases:
 * - mirror (1, 7),          // false
 * - mirror (0, 0),          // true
 * - mirror (123, 321),      // true
 * - mirror (123, 123),      // false
 * - mirror (123, 132),      // false
 * - palindrome (123),       // false
 * - palindrome (12321),     // true
 * - palindrome (1221)       // true
 */

const reverseAux = (n, a) => {
    return n === 0 ? a : reverseAux(Math.floor(n/10), a * 10 + n % 10);
};

const reverse = (n) => {
    return reverseAux(n, 0);
};

const mirror = function (n, m) {
    return reverse(n) === m;
};

const palindrome = function (n) {
    return reverse(n) === n;
};

/**
* Diseña una función recursiva [addV] que dado un vector v calcule la suma de todos sus elementos.
* Por ejemplo, addV ([1,2,3]) = 1 + 2 + 3 = 6.
* Test cases:
*  - addVA ([1,2,3,4,5]), // 15
*  - addVB ([1,2,3,4,5])  // 15
* IMPORTANTE: No se puede utilizar array.reduce()
*/

const addVFrom = (v, index) => {
    return index > v.length - 1 ? 0 : v[index] + addVFrom(v, index + 1);
}

const addV = {
    addVA: function (v) {
        return addVFrom(v, 0);
    },
    addVB: function (v) {

    }
};

/**
* Diseña una función recursiva [hasV] para determinar si un elemento e está contendido dentro de un vector v.
* No pueden utilizarse funciones auxiliares disponibles dentro del prototipo Array.
* Test cases:
*   - hasV ([1,2,3,4,5], 4), // true
*   - hasV ([1,2,3,4,5], 6)  // false
*/

const hasVFrom = (arr, e, index) => {
    // In this case we need to do a lazy evaluation arr[index] === e || hasVFrom(arr, e, index + 1) in order to get
    // the result for the third element in the ternary. So, if arr[index] === e is not true we execute the recursion again
    return index > arr.length - 1 ? false : arr[index] === e || hasVFrom(arr, e, index + 1);
};

const hasV = function (v, e) {
    return hasVFrom(v, e, 0);
};

/**
* Diseña una función recursiva [repeatV] para determinar si un dentro de un vector v se encuentran al menos un elemento
* repetido. No pueden utilizarse funciones auxiliares disponibles dentro del prototipo Array (indexOf(), map(), contains())
* Test cases:
*   - repeatV ([1,2,3,4,5]),   // false
*   - repeatV ([1,2,3,4,5,3])  // true
*/

const repeatVFrom = (arr, index) => {
    // We can use the previous function hasV which search an element within an array.
    return index > arr.length - 1 ? false : hasVFrom(arr, arr[index], index + 1) || repeatVFrom(arr, index + 1);
}

const repeatV = function (v) {
    return repeatVFrom(v, 0);
};

/**
* Diseña una función recursiva [mirrorV] que determine si dos vectores son simétricos el uno con respecto al otro.
* Por ejemplo, [1,2,3] es simétrico a [3,2,1]. No pueden utilizarse funciones auxiliares disponibles dentro del prototipo Array.
* Test cases:
*   - mirrorV ([2, 4, 6], []),            // false
*   - mirrorV ([2, 4, 6], [2, 4, 6]),     // false
*   - mirrorV ([2, 4, 6], [6, 4]),        // false
*   - mirrorV ([2, 4, 6], [6, 4, 2]),     // true
*   - mirrorV ([2, 4, 6], [6, 4, 2, 7])   // false
*/

const mirrorV = function (v, w) {

};

/**
* Diseña una función recursiva [sortV] que ordene un vector v.
* Puedes utilizar la técnica de ordenación por inserción. Primero resuelve el problema de insertar un elemento en orden
* dentro de un array que se asume previamente ordenado. Diseña para ello la función [insertV]. Después, utilizando esa función,
* resuelve la función de ordenación.
* Test cases:
*   - sortV ([1, 3, 2, 4, 8, 1]), // [ 1, 1, 2, 3, 4, 8 ]
*   - sortV ([2, 4, 6, 8, 3, 0]), // [ 0, 2, 3, 4, 6, 8 ]
*   - sortV ([1, 2, 3, 4, 5, 6]), // [ 1, 2, 3, 4, 5, 6 ]
*   - sortV ([6, 5, 4, 3, 2, 1])  // [ 1, 2, 3, 4, 5, 6 ]
*/

const insertV = function (v, e) {

};

const sortV = function (v) {

};

/**
* Bonus 01. Diseña una función recursiva [containsV] que determine si un vector w está contenido dentro de otro
* vector mayor v. No pueden utilizarse funciones auxiliares disponibles dentro del prototipo Array.
* Test cases:
*   - containsV ([],        []),
*   - containsV ([],        [1]),
*   - containsV ([],        [1,2]),
*   - containsV ([1],       [1]),
*   - containsV ([1],       [2]),
*   - containsV ([1,2],     []),
*   - containsV ([1,2],     [1]),
*   - containsV ([1,2],     [2]),
*   - containsV ([1,2],     [3]),
*   - containsV ([1,2],     [1,2]),
*   - containsV ([1,2],     [2,3]),
*   - containsV ([1,2],     [1,2,3]),
*   - containsV ([1,2,3],   [1,2]),
*   - containsV ([1,2,3],   [2,3]),
*   - containsV ([1,2,3,4], [1,2]),
*   - containsV ([1,2,3,4], [2,3]),
*   - containsV ([1,2,3,4], [3,4]),
*   - containsV ([1,2,3,4], [1,3])
* Should return T F F T F T T T F T F F T T T T T F
*/
const containsV = function (v, w) {

};

/**
* Bonus 02. Diseña una función recursiva [parts] que calcule las partes de un conjunto. Las Partes de un conjunto S se
* definen como el conjunto de todos los subconjuntos de S.
* Por ejemplo Partes de [1,2,3] = [[], [1], [2], [3], [1,2], [1,3], [2,3], [1,2,3]].
* Como se muestra en el ejemplo deben utilizarse Arrays de Arrays para representar el resultado. El orden en el que aparezcan
* los elementos dentro del array exterior e interiores no es relevante. Es decir, a todos los efectos [1,2] y [2,1] representan el
* mismo subconjunto.
* Test cases:
    - parts ([1, 2, 3]) // [ [], [ 1 ], [ 2 ], [ 1, 2 ], [ 3 ], [ 1, 3 ], [ 2, 3 ], [ 1, 2, 3 ] ]
*/

const parts = function (v) {

};


module.exports = {
    mirror,
    palindrome,
    addV,
    hasV,
    repeatV,
    mirrorV,
    insertV,
    sortV,
    containsV,
    parts,
}