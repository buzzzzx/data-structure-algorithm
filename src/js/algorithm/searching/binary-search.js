/**
 * Algorithm: 二分搜索
 * Description: 要求被搜索结构已排序，每次比较中间的值
 */

import { quickSort } from "../sorting/quick-sort.js";

const binarySearch = (array, element) => {
  const sortedArr = quickSort(array);
  let low = 0;
  let high = array.length - 1;
  while (low <= high) {
    let middle = Math.floor((low + high) / 2);
    let middleVal = sortedArr[middle];
    if (element < middleVal) {
      high = middle - 1;
    } else if (element > middleVal) {
      low = middle + 1;
    } else {
      return middle;
    }
  }

  return DOES_NOT_FOUND;
};

const DOES_NOT_FOUND = -1;

// test
const array = [2, 3, 7, 4, 1, 6, 9, 5, 8];
console.log(binarySearch(array, 100));
