/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canPartition = function (nums) {
  const sum = nums.reduce((acc, curr) => acc + curr, 0);
  if (sum % 2 === 1) {
    return false;
  }
  const target = sum / 2;
  const dp = [];
  for (let i = 0; i < nums.length; i += 1) {
    dp[i] = [];
    for (let j = 0; j <= target; j += 1) {
      dp[i][j] = false;
    }
  }

  // 填第一行的数
  if (nums[0] <= target) {
    dp[0][nums[0]] = true;
  }
  for (let i = 1; i < nums.length; i += 1) {
    for (let j = 0; j <= target; j += 1) {
      if (nums[i] === j || dp[i - 1][j] === true) {
        dp[i][j] = true;
        continue;
      }

      if (nums[i] < j) {
        dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i]];
      }
    }
  }

  return dp[nums.length - 1][target];
};

console.log(canPartition([1, 2, 5]));
