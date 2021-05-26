/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  let i = 0;
  let j = nums.length - 1;
  while (i < j) {
    if (nums[i] + nums[j] === target) {
      return [nums[i], nums[j]];
    } else if (nums[i] + nums[j] > target) {
      j -= 1;
    } else {
      i += 1;
    }
  }
  return [];
};

console.log(twoSum([10, 26, 30, 31, 47, 60], 40));
