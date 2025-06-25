/**
 * SelftecCalc - Basic Math Operations
 * Author: Selftec
 * License: Custom
 */

const SelftecCalc = {
    /**
     * Adds two numbers.
     * @param {number} a 
     * @param {number} b 
     * @returns {number}
     */
    add(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            console.error('[SelftecCalc] Invalid parameters for addition.');
            return NaN;
        }
        return a + b;
    },

    /**
     * Subtracts two numbers.
     * @param {number} a 
     * @param {number} b 
     * @returns {number}
     */
    subtract(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            console.error('[SelftecCalc] Invalid parameters for subtraction.');
            return NaN;
        }
        return a - b;
    },

    /**
     * Calculates the percentage of a value.
     * @param {number} value - The base value.
     * @param {number} percent - The percentage to apply.
     * @returns {number}
     */
    percentage(value, percent) {
        if (typeof value !== 'number' || typeof percent !== 'number') {
            console.error('[SelftecCalc] Invalid parameters for percentage calculation.');
            return NaN;
        }
        return (value * percent) / 100;
    }
};

// Example usage:
// console.log(SelftecCalc.add(5, 3)); // Output: 8
// console.log(SelftecCalc.percentage(200, 15)); // Output: 30

module.exports = SelftecCalc;
