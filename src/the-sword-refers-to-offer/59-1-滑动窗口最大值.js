/**
 * 双端队列
 */
class Deque {
  constructor() {
    this.items = [];
  }

  pushBack(ele) {
    this.items.push(ele);
  }

  pushFront(ele) {
    this.items.unshift(ele);
  }

  popBack() {
    return this.items.pop();
  }

  popFront() {
    return this.items.shift();
  }

  back() {
    return this.items[this.items.length - 1];
  }

  front() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

/**
 * 单调队列
 */
class MonotonicQueue {
  constructor() {
    this.deque = new Deque();
  }

  push(ele) {
    while (!this.deque.isEmpty() && this.deque.back() < ele) {
      this.deque.popBack();
    }
    this.deque.pushBack(ele);
  }

  pop(ele) {
    if (!this.deque.isEmpty() && this.deque.front() === ele) {
      this.deque.popFront();
    }
  }

  max() {
    if (!this.deque.isEmpty()) {
      return this.deque.front();
    }

    return null;
  }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSlidingWindow = function (nums, k) {
  let res = [];
  let slideWindow = new MonotonicQueue();
  for (let i = 0; i < nums.length; i += 1) {
    if (i < k - 1) {
      slideWindow.push(nums[i]);
    } else {
      slideWindow.push(nums[i]);
      res.push(slideWindow.max());
      slideWindow.pop(nums[i - k + 1]);
    }
  }

  return res;
};

// test
console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
