/**
 * Algorithm: 选择排序
 * Description: 选择最小的项与第一项进行交换，再从剩下的选择最小的项与第二项交换
 */
import { swap } from "../../utils/index.js";

const selectionSort = (array) => {
  const { length } = array;
  for (let i = 0; i < length - 1; i += 1) {
    let minIdx = i;
    for (let j = i + 1; j < length; j += 1) {
      if (array[minIdx] > array[j]) {
        minIdx = j;
      }
    }

    swap(array, minIdx, i);
  }
  return array;
};

// test
const array = [2, 3, 7, 4, 1, 6, 9, 8];
console.log(selectionSort(array));
