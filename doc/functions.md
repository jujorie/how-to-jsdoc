# Functions

## Content

* [Simple function](#simple-function)
* [With arguments](#with-arguments)
* [With simple return](#with-simple-return)
* [Multiple types](#return-multiple-types)
* [Using enums](#using-enums)
* [Examples](../lib/functions.js)

[Home](../README.md)

---

## Simple function 

```javascript

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

```

[Back](#content)

---

## With Arguments

Define arguments using the [@param](https://jsdoc.app/tags-param.html) tag

```javascript
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
```

[Back](#content)

---

# With simple return 

The return value must be defined using the [returns](https://jsdoc.app/tags-returns.html)

### Return base value

```javascript

/**
 * Function with a simple return
 * @returns {number} 1 as constant
 */
function withSimpleReturn() {
    return 1
}

```

### Return Promise

```javascript

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
    const result = await withPromiseReturn(a, b)
    return result
}
```

[Back](#content)

---

## Return multiple types

To specify several types you may use the pipe (|) the pipe also can be used in
the tags @param and @property tags

```javascript
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
```

[Back](#content)

---

## Return complex types

### Specify only types with no description

```javascript
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
```

### Using typedef

To define a class less type you may use the [@typedef](https://jsdoc.app/tags-typedef.html) tag

```javascript
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
```

[Back](#content)

---

## Using Enums

### Simple enum

```javascript
/**
 * Using value
 *
 * @param { "a" | "b" | "c" } [enumValue] 
 * @returns {string}
 */
function usingSimpleEnum(enumValue) {
    return enumValue
}

// Sample call

usingSimpleEnum("a")
```

### Using Typedef enum

```javascript
/**
 * Enum values for sample
 * @typedef { "a" | "b" | "c" } EnumValues 
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
```

### Using Typedef enum as integer

```javascript

/**
 * Using values as integer 
 * 
 * @param { "1" | "2" | "3" | "-1" | "-2" } [valueAsString = "1"] Value of enum as string
 * @returns 
 */
function usingSimpleIntegerEnum(valueAsString) {
    const value = parseInt(valueAsString)
    return value
}

// Sample call

usingSimpleIntegerEnum("1")

```

[Back](#content)

---
