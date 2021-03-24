/**
 * Data structure: Max Heap
 * Description: 堆结构是一种完全二叉树的结构，最大堆能快速导出最大值，
 *              在内部可以使用数组或者 Node 存储数据
 * Methods:
 * - insert
 * - extract
 * - findMinimum
 */
import { MinHeap } from "./min-heap.js";
import { Compare, defaultCompare } from "../utils/index.js";

class MaxHeap extends MinHeap {
  constructor(compareFn = defaultCompare) {
    super(compareFn);
    this.compareFn = (a, b) => compareFn(b, a);
    this.heap = [];
  }
}

// heap sort
function heapSort(array) {
  const compareFn = (a, b) => defaultCompare(b, a);
  let heapSize = array.length;
  let arr = [...array];
  buildMaxHeap(arr, compareFn);
  while (heapSize > 1) {
    swap(arr, 0, heapSize - 1);
    heapSize -= 1;
    heapify(arr, 0, heapSize, compareFn);
  }

  return arr;
}

function buildMaxHeap(array, compareFn) {
  for (let i = Math.floor(array.length / 2); i >= 0; i -= 1) {
    heapify(array, i, array.length, compareFn);
  }
}

function heapify(array, i, size, compareFn) {
  let idx = i;
  const left = getLeftIndex(idx);
  const right = getRightIndex(idx);
  if (left < size && compareFn(array[idx], array[left]) === Compare.LESS_THAN) {
    idx = left;
  }
  if (
    right < size &&
    compareFn(array[idx], array[right]) === Compare.LESS_THAN
  ) {
    idx = right;
  }
  if (idx !== i) {
    swap(array, idx, i);
    heapify(array, idx, size, compareFn);
  }
}

function swap(array, a, b) {
  const tmp = array[a];
  array[a] = array[b];
  array[b] = tmp;
}

function getLeftIndex(index) {
  return index * 2 + 1;
}

function getRightIndex(index) {
  return index * 2 + 2;
}

function getParentIndex(index) {
  if (index === 0) {
    return undefined;
  }

  return Math.floor((index - 1) / 2);
}

// test heap sort
console.log(heapSort([2, 3, 6, 1, 4, 8, 5, 0, 9]));
