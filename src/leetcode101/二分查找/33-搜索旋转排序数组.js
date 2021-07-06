/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
  const len = nums.length;
  if (len === 0) {
    return -1;
  }

  let l, r, mid;
  l = 0;
  r = len - 1;
  while (l <= r) {
    mid = Math.floor((l + r) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < nums[r]) {
      // 右边是有序的
      if (nums[mid] < target && target <= nums[r]) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    } else {
      // 左边是有序的
      if (nums[mid] > target && target >= nums[l]) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }
  }

  return -1;
};
