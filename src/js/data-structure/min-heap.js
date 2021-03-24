/**
 * Data structure: Min Heap
 * Description: 堆结构是一种完全二叉树的结构，最小堆能快速导出最小值，
 *              在内部可以使用数组或者 Node 存储数据
 * Methods:
 * - insert
 * - extract
 * - findMinimum
 */
import { Compare, defaultCompare } from "../utils/index.js";

export class MinHeap {
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
    let removed;
    if (this.size() === 1) {
      removed = this.heap.pop();
    } else {
      removed = this.heap.shift();
      this.siftDown(0);
    }
    return removed;
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
      this.compareFn(this.heap[left], this.heap[siftIndex]) ===
        Compare.LESS_THAN
    ) {
      siftIndex = left;
    }
    if (
      right < size &&
      this.compareFn(this.heap[right], this.heap[siftIndex]) ===
        Compare.LESS_THAN
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
    let parentIndex = this.getParentIndex(index);
    if (
      this.compareFn(this.heap[parentIndex], this.heap[index]) ===
      Compare.BIGGER_THAN
    ) {
      this.swap(this.heap, parentIndex, index);
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

// test
const heap = new MinHeap();
heap.insert(4);
heap.insert(3);
heap.insert(2);
heap.insert(5);
console.log(heap.findMinimum());
console.log(heap.heap);
console.log(heap.extract());
console.log(heap.heap);
