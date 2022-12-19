# Constants

## Content

* [Literal Constants](#literal-constant) 
* [Object Constant](#object-constants)
* [Private Constants](#private-constants)
* [Examples](../lib/constants.js)

[Home](../README.md)

---

## Literal Constant

You may specify the type of the constant using the [@type](https://jsdoc.app/tags-type.html) tag

```javascript

/**
 *  Description of the constant 
 *  @type {string}
 */
const CONSTANT_ONE = 'VALUE'

```

[Back](#content)

---

## Object Constants

You may specify the description of the fields in the same way of a [Literal Constant](#literal-constant)

```javascript
/**
  * Description of the group of constants
  */
 const CONSTANT_COMPLEX = Object.freeze({
    /**
     * Description of field one
     *
     * @type {number}
     */
    fieldOne: 1,

    /**
     * Description fo field two
     *
     * @type: {string}
     */
    fieldTwo: 'text',
 })
```

[Back](#content)
---

## Private Constants

You may specify the scope of the constant using the tag [@private](https://jsdoc.app/tags-private.html)

```javascript
 /**
  * This is a private constant at module level
  * @type {boolean}
  * @private
  */
 const _PRIVATE_CONSTANT = false
```

[Back](#content)

---