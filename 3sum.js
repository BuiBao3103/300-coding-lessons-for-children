/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort((a, b) => a - b);
    let res = []
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) continue
        let l = i + 1, r = nums.length - 1
        while (l < r) {
            let threesum = nums[i] + nums[l] + nums[r]
            if (threesum > 0) r--
            else if (threesum < 0) l++
            else {
                res.push([nums[i], nums[l], nums[r]])
                while (nums[l] == nums[l + 1]) l++
                while (nums[r] == nums[r - 1]) r--
                l++
                r--
            }
        }
    }
    return res
};