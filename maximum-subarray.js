/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let curr = 0
    let max = -Infinity
    for(let n of nums){
        if(curr < 0)
            curr = 0
        curr += n
        max = Math.max(curr, max)
    }
    return max
};