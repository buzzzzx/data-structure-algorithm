/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  let mid;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (nums[mid] === mid) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left === mid + 1 ? nums[mid] + 1 : nums[mid] - 1;
};

console.log(missingNumber([0, 1, 2, 3, 4, 5, 6, 7, 9]));
