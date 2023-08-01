/**
 * @param {string[]} tokens
 * @return {number}
 */

var evalRPN = function (tokens) {
    let cal = (num1, num2, op) => {
        switch (op) {
            case "+":
                return num1 + num2
            case '-':
                return num1 - num2
            case '*':
                return num1 * num2
            case '/':
                let num = num1 / num2
                return num > 0 ? Math.floor(num) : Math.ceil(num)
            default:
                return 0
        }
    }
    let st = []
    let op = ['+', '-', '*', '/']
    while (tokens.length) {
        let token = tokens.shift()
        if (op.includes(token)) {
            let num2 = parseInt(st.pop())
            let num1 = parseInt(st.pop())
            st.push(cal(num1, num2, token))
        } else
            st.push(token)
    }
    return st[0]
};