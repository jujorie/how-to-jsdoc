
// ## Simple callbacks


/**
 * Simple callback definition
 * 
 * @param {string} path Path to read
 * @param {(err: error, content: any)=>void} callBack 
 */
function readfile(path, callBack) {

}

// Sample call
readfile('path', (err, content) => {
    console.info(content)
})


// ## Complex callback

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