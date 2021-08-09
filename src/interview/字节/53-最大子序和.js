/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function (nums) {
  let res = nums[0];
  let sum = nums[0];
  for (let i = 1; i < nums.length; i += 1) {
    if (sum < 0) {
      sum = nums[i];
    } else {
      sum += nums[i];
    }
    res = Math.max(res, sum);
  }

  return res;
};
