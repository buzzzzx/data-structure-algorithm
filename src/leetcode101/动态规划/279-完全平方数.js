/**
 * @param {number} n
 * @return {number}
 */
const numSquares = function (n) {
  const dp = [];
  for (let i = 1; i <= n; i += 1) {
    dp[i] = Infinity;
  }
  dp[0] = 0;
  for (let i = 1; i <= n; i += 1) {
    for (let j = 1; j * j <= i; j += 1) {
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
    }
  }

  return dp[n];
};
