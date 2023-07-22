/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
    let str = n.toString(2)
    str = str.replaceAll("0", "")
    return str.length
};