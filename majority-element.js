/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let maj = Math.floor(nums.length / 2);
    let memo = new Map();
    for (let num of nums) {
        if (memo.has(num)) memo.set(num, memo.get(num) + 1);
        else memo.set(num, 1);
    }
    for (const [key, value] of memo.entries()) {
        if (value > maj) return key;
    }
};
