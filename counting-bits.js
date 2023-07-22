/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
    let res = [0]
    for (let i = 1; i <= n; i++) {
        res.push(res[Math.floor(i / 2)] + i % 2)
    }
    return res
};