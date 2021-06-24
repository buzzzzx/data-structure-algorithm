/**
 *
 * @param {number[]} weights
 * @param {number[]} values
 * @param {number} N
 * @param {number} W
 * @return {number}
 */
const knapsack = function (weights, values, N, W) {
  const dp = [];
  for (let i = 0; i <= N; i += 1) {
    dp[i] = [];
    for (let j = 0; j <= W; j += 1) {
      dp[i][j] = 0;
    }
  }

  for (let i = 1; i <= N; i += 1) {
    for (let j = 1; j <= W; j += 1) {
      let w = weights[i - 1];
      let v = values[i - 1];
      if (w <= j) {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - w] + v);
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

  return dp[N][W];
};
