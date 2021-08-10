/**
 * 用二分的思想，partition
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = function (nums, k) {
  const len = nums.length;
  let i = 0;
  let j = len - 1;
  while (true) {
    let pivot = partition(nums, i, j);
    if (k === len - pivot) {
      return nums[pivot];
    } else if (k < len - pivot) {
      i = pivot + 1;
    } else {
      j = pivot - 1;
    }
  }
};

const partition = function (nums, left, right) {
  const pivot = nums[left];
  let pivotIdx = left;
  let i = left;
  let j = right;
  while (i !== j) {
    while (i < j && nums[j] >= pivot) {
      j -= 1;
    }
    while (i < j && nums[i] <= pivot) {
      i += 1;
    }
    if (i < j) {
      let tmp = nums[i];
      nums[i] = nums[j];
      nums[j] = tmp;
    }
  }

  nums[pivotIdx] = nums[i];
  nums[i] = pivot;
  return i;
};

console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));
