/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const findTargetSumWays = function (nums, target) {
  const dp = [];
  const sum = nums.reduce((acc, curr) => acc + curr, 0);
  const diff = sum - target;
  if (diff < 0 || diff % 2 !== 0) {
    return 0;
  }
  const neg = diff / 2;
  for (let i = 0; i <= nums.length; i += 1) {
    dp[i] = [];
    for (let j = 0; j <= neg; j += 1) {
      dp[i][j] = 0;
    }
  }

  dp[0][0] = 1;
  for (let i = 1; i <= nums.length; i += 1) {
    for (let j = 0; j <= neg; j += 1) {
      if (nums[i - 1] > j) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i - 1][j - nums[i - 1]];
      }
    }
  }

  return dp[nums.length][neg];
};

// 空间优化
const findTargetSumWays1 = function (nums, target) {
  const dp = [];
  const sum = nums.reduce((acc, curr) => acc + curr, 0);
  const diff = sum - target;
  if (diff < 0 || diff % 2 !== 0) {
    return 0;
  }

  const neg = diff / 2;
  for (let j = 0; j <= neg; j += 1) {
    dp[j] = 0;
  }

  dp[0] = 1;
  for (const num of nums) {
    for (let j = neg; j >= num; j -= 1) {
      dp[j] = dp[j] + dp[j - num];
    }
  }

  return dp[neg];
};
