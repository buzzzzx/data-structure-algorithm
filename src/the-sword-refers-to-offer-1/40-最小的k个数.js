/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
const getLeastNumbers = function (arr, k) {
  if (arr.length === 0 || k === 0) {
    return [];
  }

  return helper(arr, 0, arr.length - 1, k);
};

const helper = function (arr, low, high, k) {
  const pivot = partition(arr, low, high);
  if (pivot === k) {
    return arr.slice(low, pivot);
  } else if (pivot < k) {
    return helper(arr, pivot + 1, high, k);
  } else {
    return helper(arr, low, pivot - 1, k);
  }
};

const partition = function (arr, low, high) {
  let pivot = low;
  let pivotVal = arr[pivot];
  let i = low;
  let j = high;
  while (i !== j) {
    while (i < j && arr[j] > pivotVal) {
      j -= 1;
    }
    while (i < j && arr[i] <= pivotVal) {
      i += 1;
    }

    if (i < j) {
      let tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
    }
  }

  arr[pivot] = arr[i];
  arr[i] = pivotVal;

  return i;
};

console.log(getLeastNumbers([1], 1));
