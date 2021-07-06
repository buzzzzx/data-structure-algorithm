/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
const search = function (nums, target) {
  const len = nums.length;
  if (len === 0) {
    return false;
  }

  let l, r, mid;
  l = 0;
  r = len - 1;
  while (l <= r) {
    mid = Math.floor((l + r) / 2);
    if (nums[mid] === target) {
      return true;
    }

    if (nums[mid] === nums[r]) {
      r -= 1;
    } else if (nums[mid] >= nums[l]) {
      // 左区间有序
      if (nums[mid] > target && nums[l] <= target) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    } else {
      // 右区间有序
      if (nums[mid] < target && nums[r] >= target) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
  }

  return false;
};
