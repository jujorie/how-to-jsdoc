
/**
 * 
 * @param {number} [value = 1] value to store
 * @returns {number}
 */
function process(value = 1) {
    return value
}

/**
 * Type of x
 * @typedef {object} X
 * @property {number} [value] Value to use 
 */

/**
 * @type {X}
 */
const x = {
    
}

console.log(process())
console.log(process(x.value))
console.log(process(undefined))
console.log(process(null))


/**
 * Set a value 
 * 
 * @param {"11" | "22" | "33" | "-2"} valueAsStr Value to set
 * @returns {number}
 */
function usingIntegerEnum(valueAsStr) {
    const value = parseInt(valueAsStr)
    return value
}

console.log(usingIntegerEnum("-2"))


/**
 * @template T
 * @param {T} value 
 * @returns {T}
 */
function asTemplate(value) {
    return value
}

const test = "aaa"
console.info(asTemplate(undefined))


const ProcessDefaultOptions = Object.freeze({
    /**
     * Source url
     */
    url: ''
})

/**
 * 
 * @param {ProcessDefaultOptions} [options = undefined] 
 */
function processObject(options) {
    const opts = {
        ...ProcessDefaultOptions,
        ...options
    }
    return opts
}

console.info(processObject())