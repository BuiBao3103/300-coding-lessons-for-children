/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
	let l = 0
	let r = 1
	let maxP = 0
	for (let i = 0; i < prices.length; i++) {
			if (prices[l] < prices[r]) {
					p = prices[r] - prices[l]
					maxP = Math.max(maxP, p)
			} else {
					l = r
			}
			r++
	}
	return maxP
};