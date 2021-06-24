/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = function (nums) {
  let len = nums.length;
  if (len === 1) {
    return 1;
  }

  const dp = [];
  for (let i = 0; i < len; i += 1) {
    dp[i] = 1;
  }

  let res = 0;
  for (let i = 1; i < len; i += 1) {
    let j = i - 1;
    while (j >= 0) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
      j -= 1;
    }
    res = Math.max(res, dp[i]);
  }

  return res;
};

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
console.log(lengthOfLIS([0, 1, 0, 3, 2, 3]));
console.log(lengthOfLIS([7, 7, 7, 7, 7, 7, 7]));
