/**
 * Algorithm: 归并排序，一种分而治之的思想的算法，因此会用到递归
 * Description: 将数组拆分为左边和右边两部分分别进行归并排序，直到数组只有一个元素不能再拆，则直接返回
 *              将排序好的左边右边进行合并
 */

const mergeSort = (array) => {
  const { length } = array;
  if (length > 1) {
    const middle = Math.floor(length / 2);
    const left = mergeSort(array.slice(0, middle));
    const right = mergeSort(array.slice(middle, length));
    array = merge(left, right);
  }
  return array;
};

const merge = (left, right) => {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i += 1;
    } else {
      result.push(right[j]);
      j += 1;
    }
  }

  result =
    i === left.length
      ? result.concat(right.slice(j, right.length))
      : result.concat(left.slice(i, left.length));

  return result;
};

// test
const array = [2, 3, 7, 4, 1, 6, 9, 8];
console.log(mergeSort(array));
