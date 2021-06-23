/**
 * @param {number[]} nums
 * @return {number}
 */
const numberOfArithmeticSlices = function (nums) {
  const len = nums.length;
  if (len <= 2) {
    return 0;
  }
  let idx = 0;
  let res = 0;
  let count = 0;
  let diff = nums[1] - nums[0];
  for (let i = 2; i < len; i += 1) {
    if (nums[i] - nums[i - 1] !== diff) {
      diff = nums[i] - nums[i - 1];
      idx = i - 1;
      count = 0;
    } else {
      if (i - idx >= 2) {
        res = res + count + 1;
        count += 1;
      }
    }
  }

  return res;
};

// 利用 nums[i] - nums[i-1] = nums[i-1] - nums[i-2]
const numberOfArithmeticSlices1 = function (nums) {
  const len = nums.length;
  if (len <= 2) {
    return 0;
  }
  const dp = [];
  for (let i = 0; i < len; i += 1) {
    dp[i] = 0;
  }

  for (let i = 2; i < len; i += 1) {
    if (nums[i] - nums[i - 1] === nums[i - 1] - nums[i - 2]) {
      dp[i] = dp[i - 1] + 1;
    }
  }

  return dp.reduce((acc, curr) => acc + curr, 0);
};

// test
console.log(numberOfArithmeticSlices([1, 2, 3, 4]));
