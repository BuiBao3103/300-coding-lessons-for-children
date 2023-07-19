/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    let counter = []
    for (let i = 0; i < 26; i++) {
        counter.push(0)
    }
    for (let i = 0; i < s.length; i++) {
        counter[s.charCodeAt(i) - 97]++
    }
    for (let i = 0; i < t.length; i++) {
        counter[t.charCodeAt(i) - 97]--
    }
    for (let c of counter) {
        if (c != 0) return false
    }
    return true
};