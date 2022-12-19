# Classes

## Content

* [Simple class](#simple-class)
* [Generic Class](#generic-classes)
* [Examples](../lib/classes.js)

[Home](../README.md)

---

## Simple Class

The properties or fields can be documented using the [variables](./variables.md) or [constants](./constants.md) rules

The methods and constructors can be documented using the [functions](functions.md) rules

```javascript
/**
 * Class description
 */
class Sample {
    /**
     * Constructor def
     */
    constructor() {
        /**
         * Property One
         *
         * @type {number}
         */
        this.propertyOne = 1

        /**
         * Private method
         *
         * @type {number}
         * @private
         */
        this._propertyPrivate = 0
    }

    /**
     * Private method
     * @param {number} value Value to be assigned
     * @private
     */
    _private(value) {
        this._propertyPrivate = value
    }

    /**
     * Method one
     * @return {void}
     */
    methodOne() {
        this._private(2)
    }
}
```

[Back](#content)

---


## Generic classes

You may specify the template type use the [template](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html#template) tag

```javascript
/**
 * Simple list class
 * @template T
 */
class List {
    /**
     * Initial list
     * @param {T[]} list base list 
     */
    constructor(list) {
        /**
         * @type {T[]}
         * @private
         */
        this._list = list        
    }

    /**
     * 
     * @param {number} index zero based index 
     * @returns {T | undefined} undefined if not found otherwise a T value
     */
    item(index) {
        return this._list[index]
    }

    /**
     * push a new value on the list
     *
     * @param {T} item new item
     * @return {Number} new array length
     */
    push(item) {
        return this._list.push(item)
    }
}

// Sample call
const list = new List(["aa"])
list.push('bb')
const item = list.item(1)
```

[Back](#content)

---