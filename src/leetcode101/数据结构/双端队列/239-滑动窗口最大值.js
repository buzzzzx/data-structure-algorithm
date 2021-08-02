class MonotonicQueue {
  constructor() {
    this.deque = [];
  }

  push(ele) {
    while (this.deque.length !== 0 && this.deque[this.deque.length - 1] < ele) {
      this.deque.pop();
    }
    this.deque.push(ele);
  }

  pop(ele) {
    if (this.deque.length !== 0 && this.deque[0] === ele) {
      this.deque.shift();
    }
  }

  max() {
    return this.deque.length === 0 ? undefined : this.deque[0];
  }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSlidingWindow = function (nums, k) {
  if (nums.length === 1) {
    return [nums[0]];
  }

  const mq = new MonotonicQueue();
  const res = [];
  let i = 0;
  let j = 0;
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
