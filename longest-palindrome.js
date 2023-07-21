/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    let result = 0
    let memo = new Set()
    for (let c of s) {
        if (memo.has(c)) {
            result += 2
            memo.delete(c)
        }
        else
            memo.add(c)
    }
    return result + ((memo.size > 0) ? 1 : 0)
};