/**
 * Algorithm: Fisher-Yates 隨機算法
 * Description: 将数组的元素进行随机排列，从最后一位元素开始迭代数组
 *              将当前位置和随机位置的元素进行交换（随机位置会比当前位置小，这样就保证已经随机过的位置不会再次随机一次）
 */
import { swap } from "../../utils/index.js";

const shuffle = (array) => {
  for (let i = array.length - 1; i >= 0; i -= 1) {
    const randomIdx = Math.floor(Math.random() * i);
    swap(array, randomIdx, i);
  }
  return array;
};

const array = [1, 2, 3, 4, 5];
console.log(shuffle(array));
