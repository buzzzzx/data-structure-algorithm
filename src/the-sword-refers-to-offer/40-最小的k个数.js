/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
const getLeastNumbers = function (arr, k) {
  quickSort(arr, 0, arr.length - 1);
  const res = [];
  for (let i = 0; i < k; i += 1) {
    res.push(arr[i]);
  }

  return res;
};

const quickSort = function (numbers, left, right) {
  if (left > right) {
    return;
  }

  let pivot = partition(numbers, left, right);
  quickSort(numbers, left, pivot - 1);
  quickSort(numbers, pivot + 1, right);
};

const partition = function (numbers, left, right) {
  let pivot = left;
  let val = numbers[pivot];
  let i = left;
  let j = right;

  while (i !== j) {
    while (i < j && numbers[j] >= val) {
      j -= 1;
    }
    while (i < j && numbers[i] <= val) {
      i += 1;
    }

    // swap
    if (i < j) {
      swap(numbers, i, j);
    }
  }

  swap(numbers, pivot, i);
  return i;
};

const swap = function (arr, i, j) {
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
};

// test
console.log(getLeastNumbers([3, 2, 1], 2));
