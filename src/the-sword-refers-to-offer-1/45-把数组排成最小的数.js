/**
 * @param {number[]} nums
 * @return {string}
 */
const minNumber = function (nums) {
  quickSort(nums, 0, nums.length - 1);

  return nums.join("");
};

const quickSort = function (nums, low, high) {
  if (low >= high) {
    return;
  }

  let pivot = partition(nums, low, high);
  quickSort(nums, low, pivot - 1);
  quickSort(nums, pivot + 1, high);
};

const partition = function (nums, low, high) {
  let pivot = low;
  let pivotVal = nums[pivot];
  let i = low;
  let j = high;
  while (i !== j) {
    while (i < j && myCompare(pivotVal, nums[j])) {
      j -= 1;
    }
    while (i < j && myCompare(nums[i], pivotVal)) {
      i += 1;
    }
    if (i < j) {
      let tmp = nums[i];
      nums[i] = nums[j];
      nums[j] = tmp;
    }
  }

  nums[pivot] = nums[i];
  nums[i] = pivotVal;

  return i;
};

const myCompare = function (num1, num2) {
  const s1 = num1.toString();
  const s2 = num2.toString();

  return s1 + s2 <= s2 + s1;
};

console.log(minNumber([3, 30, 34, 5, 9, 3]));
