/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let c = 0;
    for (let num of nums) {
        c ^= num;
    }
    return c;
};
