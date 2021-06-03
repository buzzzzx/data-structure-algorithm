const MaxQueue = function () {
  this.items = [];
  this.helper = [];
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function () {
  return this.items.length === 0 ? -1 : this.helper[0];
};

/**
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function (value) {
  this.items.push(value);
  while (
    this.helper.length > 0 &&
    this.helper[this.helper.length - 1] < value
  ) {
    this.helper.pop();
  }
  this.helper.push(value);
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function () {
  if (this.items.length === 0) {
    return -1;
  }
  let res = this.items.shift();
  if (this.helper.length > 0 && res === this.helper[0]) {
    this.helper.shift();
  }

  return res;
};

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */
