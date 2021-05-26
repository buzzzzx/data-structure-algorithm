/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
  return helper(nums, 0, nums.length - 1, target);
};

const helper = function (nums, low, high, target) {
  if (low > high) {
    return 0;
  }
  if (low === high) {
    return nums[low] === target ? 1 : 0;
  }

  let pivot = partition(nums, low, high);
  let pivotVal = nums[pivot];
  if (pivotVal === target) {
    let count = 1;
    let left = pivot - 1;
    while (left >= low && nums[left] === target) {
      count += 1;
      left -= 1;
    }
    let right = pivot + 1;
    while (right <= high && nums[right] === target) {
      count += 1;
      right += 1;
    }

    return count;
  } else if (pivotVal > target) {
    return helper(nums, low, pivot - 1, target);
  } else {
    return helper(nums, pivot + 1, high, target);
  }
};

const partition = function (nums, low, high) {
  let i = low;
  let j = high;
  let pivot = low;
  let pivotVal = nums[pivot];

  while (i !== j) {
    while (i < j && nums[j] > pivotVal) {
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

  nums[pivot] = nums[i];
  nums[i] = pivotVal;

  return i;
};

console.log(search([5, 7, 7, 8, 8, 10], 0));
