/**
 * Data structure: Min Heap
 * Description: 堆结构是一种完全二叉树的结构，最小堆能快速导出最小值，
 *              在内部可以使用数组或者 Node 存储数据
 * Methods:
 * - insert
 * - extract
 * - findMinimum
 */
const defaultCompare = (a, b) => {
  if (a === b) {
    return 0;
  }
  return a < b ? -1 : 1;
};

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
    let head = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.siftDown(0);
    return head;
  }

  findMinimum() {
    return this.isEmpty() ? undefined : this.heap[0];
  }

  siftDown(index) {
    let siftIndex = index;
    const left = this.getLeftIndex(siftIndex);
    const right = this.getRightIndex(siftIndex);
    const size = this.size();

    if (
      left < size &&
      this.compareFn(this.heap[left], this.heap[siftIndex]) === -1
    ) {
      siftIndex = left;
    }
    if (
      right < size &&
      this.compareFn(this.heap[right], this.heap[siftIndex]) === -1
    ) {
      siftIndex = right;
    }
    if (siftIndex !== index) {
      this.swap(this.heap, index, siftIndex);
      this.siftDown(siftIndex);
    }
  }

  siftUp(index) {
    if (index <= 0) {
      return;
    }
    let siftIndex = index;
    let parentIndex = this.getParentIndex(siftIndex);
    while (
      siftIndex > 0 &&
      this.compareFn(this.heap[parentIndex], this.heap[siftIndex]) === 1
    ) {
      this.swap(this.heap, parentIndex, siftIndex);
      siftIndex = parentIndex;
      parentIndex = this.getParentIndex(siftIndex);
    }
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

  // 这种方式比 ES6 的解构性能更好
  swap(array, a, b) {
    const tmp = array[a];
    array[a] = array[b];
    array[b] = tmp;
  }
}

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
    return (this.minHeap.findMinimum() + this.maxHeap.findMinimum()) / 2;
  } else {
    return this.minHeap.findMinimum();
  }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

const obj = new MedianFinder();
obj.addNum(1);
obj.addNum(2);
obj.addNum(3);
obj.addNum(4);
obj.addNum(5);
obj.addNum(6);
obj.addNum(7);
console.log(obj.findMedian());
obj.addNum(8);
console.log(obj.findMedian());
obj.addNum(9);
console.log(obj.findMedian());
obj.addNum(10);
console.log(obj.findMedian());
