/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArray = function (nums) {
  quickSort(nums, 0, nums.length - 1);
  return nums;
};

const quickSort = function (nums, left, right) {
  if (left >= right) {
    return;
  }

  const pivot = partition(nums, left, right);
  quickSort(nums, left, pivot - 1);
  quickSort(nums, pivot + 1, right);
};

const partition = function (nums, left, right) {
  let pivotIdx = left;
  let pivotVal = nums[pivotIdx];
  let i = left;
  let j = right;
  while (i !== j) {
    while (i < j && nums[j] >= pivotVal) {
      j -= 1;
    }

    while (i < j && nums[i] <= pivotVal) {
      i += 1;
    }

    if (i < j) {
      let tmp = nums[i];
      nums[i] = nums[j];
      nums[j] = tmp;
    }
  }

  nums[pivotIdx] = nums[i];
  nums[i] = pivotVal;

  return i;
};
