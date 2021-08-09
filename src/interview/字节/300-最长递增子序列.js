/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = function (nums) {
  const len = nums.length;
  if (len === 1) {
    return nums[0];
  }
  const dp = new Array(len).fill(1);
  let res = 1;
  for (let i = 1; i < len; i += 1) {
    for (let j = i - 1; j >= 0; j -= 1) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    res = Math.max(res, dp[i]);
  }

  return res;
};
