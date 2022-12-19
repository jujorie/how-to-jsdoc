
/**
 * Simple Function with no return
 */
function simple() {

}

/**
 * Simple function with no return using arrow
 */
const simpleAsArrow = () => {

}

//  ----------------------------------------------------------------------------


/**
 * Function with arguments
 * @param {number} arg1  first arguments
 * @param {string} arg2  second argument
 * @param {boolean} arg3  third argument
 */
function withArguments(arg1, arg2, arg3) {

}

/**
 * With variadic arguments of string
 * @param  {...string} args 
 */
function withArrayArguments(...args) {

}

// Example call
withArrayArguments("a", "b", "c", "d")

//  ----------------------------------------------------------------------------

//  ### Return base value

/**
 * Function with a simple return
 * @returns {number} 1 as constant
 */
function withSimpleReturn() {
    return 1
}

//  ### Return Promise

/**
 * Async call of sum
 * 
 * @param {number} a First value
 * @param {number} b Second Value
 * @returns {Promise<Number>} Resolves with a sum of arguments
 */
function withPromiseReturn(a, b) {
    return new Promise((resolve) => {
        resolve(a + b)
    })
}

// --- OR --

/**
 * Async call of sum
 * 
 * @param {number} a First value
 * @param {number} b Second Value
 * @returns {Promise<Number>} Resolves with a sum of arguments
 */
async function withAsyncReturn(a, b) {
    return new Promise((resolve) => {
        resolve(a + b)
    })
}

//  ----------------------------------------------------------------------------

// ### Return multiple types

/**
 * Sums arguments, and return the sum
 * @param {number} a First argument
 * @param {number} b Second argument
 * @param {boolean} useArray true if return is array
 * @returns {number | number[]} if useArray is true, return Number else array
 */
function returnSeveralTypes(a, b, useArray) {
    if (useArray) {
        return [a, b, a + b]
    }
    return a + b
}

//  ----------------------------------------------------------------------------

//  ## Return complex types

// ### Specify only types with no description

/**
 * Returns a object
 * 
 * @returns {{x: number, y: number, type: string, boo: boolean}} test value 
 */
function returnObject() {
    return {
        x: 0,
        y: 0,
        type: 'position',
        bool: true
    }
}

// ### Using typedef

/**
 * Return type of _returnObjectDocAsTypedef_
 *
 * @typedef {object} ReturnObjectDocAsTypedefResult
 * @property {Number} x X coord
 * @property {Number} y Y coord
 * @property {String} type Type of coordinates
 * @property {boolean} x Flag
 */

/**
 * Return a object 
 * @returns {ReturnObjectDocAsTypedefResult} return object
 */
function returnObjectDocAsTypedef() {
    return {
        x: 0,
        y: 0,
        type: 'position',
        bool: true
    }
}

// ## Using enums

// ### Simple enum

/**
 * Using value
 *
 * @param {"a" | "b" | "c" } [enumValue] 
 * @returns {string}
 */
function usingSimpleEnum(enumValue) {
    return enumValue
}

// Sample call

usingSimpleEnum("a")

// ### Using Typedef enum

/**
 * Enum values for sample
 * @typedef {"a" | "b" | "c"} EnumValues 
 */

/**
 * @param {EnumValues} enumValue
 * @returns {string}
 */
function usingSimpleEnumTypeDef(enumValue) {
    return enumValue
}

// Sample call

usingSimpleEnumTypeDef("a")
