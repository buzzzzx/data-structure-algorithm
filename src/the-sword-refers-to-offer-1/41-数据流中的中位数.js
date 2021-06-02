/**
 * initialize your data structure here.
 */
const MedianFinder = function () {
  this.minHeap = new MinHeap();
  this.maxHeap = new MinHeap((a, b) => defaultCompare(b, a));
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  if (this.minHeap.size() === this.maxHeap.size()) {
    this.maxHeap.insert(num);
    this.minHeap.insert(this.maxHeap.extract());
  } else {
    this.minHeap.insert(num);
    this.maxHeap.insert(this.minHeap.extract());
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  if (this.minHeap.size() === this.maxHeap.size()) {
    return (this.maxHeap.findTop() + this.minHeap.findTop()) / 2;
  } else {
    return this.minHeap.findTop();
  }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

function defaultCompare(a, b) {
  return a === b ? 0 : a < b ? -1 : 1;
}

class MinHeap {
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn;
    this.heap = [];
  }

  insert(element) {
    if (element == null) {
      return false;
    }

    this.heap.push(element);
    this.siftUp(this.size() - 1);

    return true;
  }

  extract() {
    if (this.isEmpty()) {
      return undefined;
    }

    const value = this.heap[0];
    this.heap[0] = this.heap[this.size() - 1];
    this.heap.pop();
    this.siftDown(0);

    return value;
  }

  findTop() {
    return this.isEmpty() ? undefined : this.heap[0];
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  getLeftIndex(index) {
    return index * 2 + 1;
  }

  getRightIndex(index) {
    return index * 2 + 2;
  }

  getParentIndex(index) {
    if (index === 0) {
      return undefined;
    }

    return Math.floor((index - 1) / 2);
  }

  siftUp(index) {
    if (index === 0) {
      return;
    }
    let siftIndex = index;
    let parentIdx = this.getParentIndex(siftIndex);
    while (
      siftIndex > 0 &&
      this.compareFn(this.heap[parentIdx], this.heap[siftIndex]) === 1
    ) {
      this.swap(parentIdx, siftIndex);
      siftIndex = parentIdx;
      parentIdx = this.getParentIndex(siftIndex);
    }
  }

  siftDown(index) {
    let leftIndex = this.getLeftIndex(index);
    let rightIndex = this.getRightIndex(index);
    let size = this.size();

    let siftIndex = index;
    if (
      leftIndex < size &&
      this.compareFn(this.heap[siftIndex], this.heap[leftIndex]) === 1
    ) {
      siftIndex = leftIndex;
    }

    if (
      rightIndex < size &&
      this.compareFn(this.heap[siftIndex], this.heap[rightIndex]) === 1
    ) {
      siftIndex = rightIndex;
    }

    if (siftIndex !== index) {
      this.swap(siftIndex, index);
      this.siftDown(siftIndex);
    }
  }

  swap(i, j) {
    let tmp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = tmp;
  }
}
