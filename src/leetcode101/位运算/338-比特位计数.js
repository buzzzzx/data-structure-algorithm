/**
 * @param {number} n
 * @return {number[]}
 */
const countBits = function (n) {
  const dp = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i += 1) {
    if ((i & 1) === 1) {
      dp[i] = dp[i - 1] + 1;
    } else {
      dp[i] = dp[i >> 1];
    }
  }
  return dp;
};

console.log(countBits(2));
