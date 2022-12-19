
/**
 * Counter variable 
 * 
 * @type {number}
 */
let counter = 1

//  ----------------------------------------------------------------------------

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

//  ----------------------------------------------------------------------------

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
