/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    for (let c of magazine) {
        if (ransomNote.includes(c))
            ransomNote = ransomNote.replace(c, "")
        if (ransomNote.length == 0)
            return true
    }
    return false
};