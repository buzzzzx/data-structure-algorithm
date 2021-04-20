/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  let i = 0;
  let j = nums.length - 1;

  while (i < j) {
    let sum = nums[i] + nums[j];
    if (sum > target) {
      j -= 1;
    } else if (sum < target) {
      i += 1;
    } else {
      return [nums[i], nums[j]];
    }
  }

  return [];
};
