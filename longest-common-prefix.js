/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length == 1) return strs[0];
    let prefixLong = 0;
    strs.sort();
    let str1 = strs[0];
    let str2 = strs[strs.length - 1];
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] == str2[i]) prefixLong++;
        else break;
    }
    return str1.slice(0, prefixLong);
};
