/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let l = 0, r = nums.length - 1
    while (l <= r) {
        i = Math.floor((l + r) / 2)
        if (nums[i] == target) return i
        else if (nums[i] > target)
            r = i - 1;
        else
            l = i + 1

    }
    return -1
};