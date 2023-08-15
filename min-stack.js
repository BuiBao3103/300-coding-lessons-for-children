var MinStack = function () {
    this.stack = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    if (this.stack.length === 0) {
        this.stack.push({ val: val, min: val })
    } else {
        let currMin = this.stack[this.stack.length - 1].min
        this.stack.push({ val: val, min: Math.min(val, currMin) })
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    if (this.stack.length > 0)
        this.stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    if (this.stack.length > 0)
        return this.stack[this.stack.length - 1].val
    return null
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    if (this.stack.length > 0)
        return this.stack[this.stack.length - 1].min
    return null
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */