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
  if (
    this.minItems.length === 0 ||
    x < this.minItems[this.minItems.length - 1]
  ) {
    this.minItems.push(x);
  } else {
    this.minItems.push(this.minItems[this.minItems.length - 1]);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.items.pop();
  this.minItems.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.items[this.items.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
  return this.minItems[this.items.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */
