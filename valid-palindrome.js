/**
 * @param {string} s
 * @return {boolean}
 */


var isPalindrome = function (s) {
    s = s.toLowerCase().replace(/[^0-9a-z]/gi, "")
    let l = 0, r = s.length - 1;
    while (l < r) {
        if (s[l] !== s[r]) {
            return false
        } else {
            l++
            r--
        }
    }
    return true;
};
