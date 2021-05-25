/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function (nums) {
  let len = nums.length;
  let curr = nums[0];
  let max = nums[0];

  for (let i = 1; i < len; i += 1) {
    curr = curr < 0 ? nums[i] : curr + nums[i];
    max = Math.max(curr, max);
  }

  return max;
};
