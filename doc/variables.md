# Variables

## Content

* [Variable Simple](#variable-simple)
* [Variable of a class](#variable-of-a-class)
* [Using Typedef of a variable](#using-typedef-of-a-variable)
* [Examples](../lib/variables.js)

[Home](../README.md)

---

## Variable simple

type must be defined by [@type](https://jsdoc.app/tags-type.html)

```javascript
/**
 * Counter variable 
 * 
 * @type {number}
 */
let counter = 1
```

[Back](#content)

---

## Variable of a Class

```javascript
class SampleClass {
    constructor() {
        this.value = 1
    }
}

/**
 * Instance of sample class
 * 
 * @type {SampleClass}
 */
let sampleClass = null

// Later
sampleClass = new SampleClass()
```

[Back](#content)

---

## Using Typedef of a variable

To define a class less type you may use the [@typedef](https://jsdoc.app/tags-typedef.html) tag

```javascript
/**
 * Description of the typedef
 *
 * @typedef {object} SampleClass1
 * @property {number} propertyName property description
 */

/**
 * Variable from a typedef
 *
 * @type {SampleClass1}
 */
let typedefVariable = null

typedefVariable = {
    propertyName: 1
}

// OR

typedefVariable = {}
typedefVariable.propertyName = 1

```

[Back](#content)

---