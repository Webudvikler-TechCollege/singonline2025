/**
 * Returns a random sort of an array
 * @param {Array} array 
 * @returns a random sorted array
 */
export const FlushArray = array => {
    return array.sort(function (a, b) {
        return 0.5 - Math.random()
    })
}