/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSlidingWindow = function (nums, k) {
  const res = [];
  const mq = new MonotonicQueue();
  let i, j;
  i = j = 0;
  while (j < nums.length) {
    mq.push(nums[j]);
    if (j >= k - 1) {
      res.push(mq.max());
      mq.pop(nums[i]);
      i += 1;
    }
    j += 1;
  }

  return res;
};

class MonotonicQueue {
  constructor() {
    this.deque = []; // 使用双端队列实现
  }

  push(ele) {
    while (this.size() > 0 && this.deque[this.size() - 1] < ele) {
      this.deque.pop();
    }
    this.deque.push(ele);
  }

  pop(ele) {
    if (this.size() > 0 && this.deque[0] === ele) {
      this.deque.shift();
    }
  }

  max() {
    return this.size() === 0 ? null : this.deque[0];
  }

  size() {
    return this.deque.length;
  }
}

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
