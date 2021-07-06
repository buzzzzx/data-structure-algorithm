/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNonDuplicate = function (nums) {
  const len = nums.length;
  if (len === 1) {
    return nums[0];
  }

  let l, r, mid;
  l = 0;
  r = len - 1;
  while (l < r) {
    mid = Math.floor((l + r) / 2);
    if (mid % 2 === 1) {
      mid -= 1;
    }

    if (nums[mid] === nums[mid + 1]) {
      l = mid + 2;
    } else {
      r = mid;
    }
  }

  return nums[l];
};
