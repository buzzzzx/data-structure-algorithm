/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
const maxProfit = function (prices, fee) {
  const dp = [];
  for (let i = 0; i < prices.length; i += 1) {
    dp[i][0] = 0;
    dp[i][1] = 0;
  }

  dp[0][0] = 0;
  dp[0][1] = -prices[0];
  for (let i = 1; i < prices.length; i += 1) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i] - fee);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
  }
  return dp[prices.length - 1][0];
};

// 空间优化
const maxProfit1 = function (prices, fee) {
  const dp = [];
  dp[0] = 0;
  dp[1] = -prices[0];

  for (let i = 1; i < prices.length; i += 1) {
    let tmp = dp[0];
    dp[0] = Math.max(dp[0], dp[1] + prices[i] - fee);
    dp[1] = Math.max(dp[1], tmp - prices[i]);
  }
  return dp[0];
};
