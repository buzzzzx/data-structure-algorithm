/**
 * Algorithm: 快速排序，也是分而治之
 * Description: 寻找主元 pivot，将数组切分为两部分 left 和 right，左边的项小于 pivot，右边的项大于 pivot
 *
 */
import { swap } from "../../utils/index.js";

export const quickSort = (array) => {
  quick(array, 0, array.length - 1);
  return array;
};

const quick = (array, left, right) => {
  if (right <= left) {
    return;
  }

  let index = partition(array, left, right);
  quick(array, left, index - 1);
  quick(array, index + 1, right);
};

// 以左边第一个数作为基数：在几乎已排序的数组中表现不好
const partition = (array, left, right) => {
  let pivot = left;
  let tmp = array[pivot];
  let i = left;
  let j = right;
  while (i !== j) {
    while (i < j && array[j] >= tmp) {
      j -= 1;
    }
    while (i < j && array[i] <= tmp) {
      i += 1;
    }

    if (i < j) {
      swap(array, i, j);
    }
  }

  swap(array, pivot, i);
  return i;
};

// 以中间的数做为主元
const quick2 = (array, left, right) => {
  if (left > right) {
    return;
  }

  let index = partition2(array, left, right);
  if (left < index - 1) {
    quick2(array, left, index - 1);
  }
  if (right > index) {
    quick2(array, index, right);
  }
};

const partition2 = (array, left, right) => {
  let pivot = Math.floor((left + right) / 2);
  let tmp = array[pivot];
  let i = left;
  let j = right;

  while (i <= j) {
    while (array[i] < tmp) {
      i += 1;
    }
    while (array[j] > tmp) {
      j -= 1;
    }
    if (i <= j) {
      swap(array, i, j);
      i += 1;
      j -= 1;
    }
  }

  return i;
};

// test
// const array = [2, 3, 7, 4, 1, 6, 9, 8];
const array = [2, 3, 7, 4, 1, 6, 9, 5, 8];
console.log(quickSort(array));
