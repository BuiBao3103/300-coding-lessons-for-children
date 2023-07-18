/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const st = [];
  for (let c of s) {
    if (c === "(" || c === "{" || c === "[") {
      st.push(c);
    } else {
      if (
        !st.length ||
        (st[st.length - 1] !== "{" && c === "}") ||
        (st[st.length - 1] !== "(" && c === ")") ||
        (st[st.length - 1] !== "[" && c === "]")
      )
        return false;
      else {
        st.pop();
      }
    }
  }
  return !st.length;
};
