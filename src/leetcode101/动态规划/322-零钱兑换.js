/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = function (coins, amount) {
  const len = coins.length;
  const dp = [];
  for (let i = 0; i <= len; i += 1) {
    for (let j = 0; j <= amount; j += 1) {
      dp[i][j] = 0;
    }
  }

  for (let i = 1; i <= len; i += 1) {
    for (let j = 0; j <= amount; j += 1) {
      dp[i][j] = dp[i - 1][j];
      if (coins[i] <= j) {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - coins[i]] + 1);
      }
    }
  }

  return -1;
};
