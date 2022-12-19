# Callbacks

## Content

* [Simple Callbacks](#simple-callbacks)
* [Complex Callbacks](#complex-callback)
* [Examples](../lib/callbacks.js)

[Home](../README.md)

---


## Simple callbacks

```javascript
/**
 * Simple callback definition
 * 
 * @param {string} path Path to read
 * @param {(err: error, content: any)=>void} callBack 
 */
function readFile(path, callBack) {

}

// Sample call
readFile('path', (err, content) => {
    console.info(content)
})
```

[Back](#content)

---


## Complex callback

```javascript
/**
 * On read complete
 * 
 * @callback readFileAsCallbackCallback
 * @param {Error} error Error on read
 * @param {ArrayBuffer} content Content read
 * @return {void}
 */

/**
 * 
 * @param {string} path Path to read
 * @param {readFileAsCallbackCallback} callBack 
 */
function readFileAsCallback(path, callBack) {

}

// Sample call
readFileAsCallback('path', (err, content) => {
    console.info(content.byteLength)
})
```

[Back](#content)

---
