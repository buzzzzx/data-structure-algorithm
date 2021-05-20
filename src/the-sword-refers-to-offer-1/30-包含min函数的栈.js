/**
 * initialize your data structure here.
 */
const MinStack = function () {
  this.items = [];
  this.minItems = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.items.push(x);
  if (this.minItems.length === 0) {
    this.minItems.push(x);
  } else {
    const min = this.minItems[this.minItems.length - 1];
    x < min ? this.minItems.push(x) : this.minItems.push(min);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (this.items.length !== 0) {
    this.items.pop();
    this.minItems.pop();
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  if (this.items.length !== 0) {
    return this.items[this.items.length - 1];
  }
};

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
  if (this.items.length !== 0) {
    return this.minItems[this.minItems.length - 1];
  }
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */
