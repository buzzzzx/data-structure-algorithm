/**
 * Algorithm: 冒泡排序
 * Description: 比较相邻的两项大小，并决定交换
 */
import { swap } from "../../utils/index.js";

const bubbleSort = (array) => {
  const { length } = array;

  for (let i = 0; i < length - 1; i += 1) {
    for (let j = 0; j < length - 1 - i; j += 1) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
  }
  return array;
};

// test
const array = [2, 3, 7, 4, 1, 6, 9, 8];
console.log(bubbleSort(array));
