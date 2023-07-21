/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
    function afterBackSpace(str) {
        let st = []
        for (let c of str) {
            if (c != "#")
                st.push(c)
            else if (st.length > 0)
                st.pop()
        }
        return st.join("");
    }
    return afterBackSpace(s) === afterBackSpace(t);

};