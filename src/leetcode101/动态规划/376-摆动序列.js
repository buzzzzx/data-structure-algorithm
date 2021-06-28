/**
 * @param {number[]} nums
 * @return {number}
 */
const wiggleMaxLength = function (nums) {
  const len = nums.length;
  if (len <= 1) {
    return len;
  }
  const dp = [];
  for (let i = 1; i <= len; i += 1) {
    dp[i] = 1;
  }

  let min = -1;
  let max = -1;
  for (let i = 2; i <= len; i += 1) {
    dp[i] = dp[i - 1];
    if (nums[i - 1] > nums[i - 2]) {
      if (max === -1 || nums[i - 2] === min) {
        dp[i] = dp[i - 1] + 1;
      }
      max = nums[i - 1];
    } else if (nums[i - 1] < nums[i - 2]) {
      if (min === -1 || nums[i - 2] === max) {
        dp[i] = dp[i - 1] + 1;
      }
      min = nums[i - 1];
    }
  }

  return dp[len];
};

// leetcode 上的神仙代码
const wiggleMaxLength1 = function (nums) {
  let up = 1;
  let down = 1;

  for (let i = 1; i < nums.length; i += 1) {
    if (nums[i] > nums[i - 1]) {
      up = down + 1;
    }
    if (nums[i] < nums[i - 1]) {
      down = up + 1;
    }
  }

  return Math.max(up, down);
};

console.log(wiggleMaxLength([1, 2, 3, 4, 5, 6, 3, 2, 3]));
