/**
 * Algorithm: 内插搜索
 * Description: 与二分搜索不同的是每次比较的值不是中间值，而是有 position 公式返回的下标
 */
import { quickSort } from "../sorting/quick-sort.js";

const interpolationSearch = (array, element) => {
  const { length } = array;
  const sortedArr = quickSort(array);
  let low = 0;
  let high = length - 1;
  let delta = -1;
  let position = -1;

  while (
    low <= high &&
    element <= sortedArr[high] &&
    element >= sortedArr[low]
  ) {
    delta = Math.abs(
      (element - sortedArr[low]) / (sortedArr[high] - sortedArr[low])
    );
    position = Math.floor((high - low) * delta);
    if (element < sortedArr[position]) {
      high = position - 1;
    } else if (element > sortedArr[position]) {
      low = position + 1;
    } else {
      return position;
    }
  }

  return DOES_NOT_FOUND;
};

const DOES_NOT_FOUND = -1;

// test
const array = [2, 3, 7, 4, 1, 6, 9, 5, 8];
console.log(interpolationSearch(array, 3));
