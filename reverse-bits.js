/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
    let str = n.toString(2)
    if (str.length != 32) {
        let addSize = 32 - str.length
        for (let i = 1; i <= addSize; i++) {
            str = '0' + str
        }
    }
    let newStr = ""
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i]
    }
    return parseInt(newStr, 2)
};