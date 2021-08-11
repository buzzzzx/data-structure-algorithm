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
  let left = 0;
  let right = len - 1;
  while (left <= right) {
    let mid = left + ((right - left) >> 1);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9));
console.log(search([-1], -1));
