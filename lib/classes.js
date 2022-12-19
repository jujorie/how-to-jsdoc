// ## Simple Class

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

//  ----------------------------------------------------------------------------

// ## Generic classes

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
