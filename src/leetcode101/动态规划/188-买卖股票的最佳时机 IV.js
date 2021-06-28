/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (k, prices) {
  const dp = [];
  let upj = Math.min(prices.length, 2 * k);
  for (let i = 0; i <= prices.length; i += 1) {
    dp[i] = [];
    for (let j = 0; j <= upj; j += 1) {
      dp[i][j] = -Infinity;
    }
  }

  dp[0][0] = 0;
  for (let i = 1; i <= prices.length; i += 1) {
    dp[i][0] = 0;
    let upj = Math.min(i, 2 * k);
    for (let j = 1; j <= upj; j += 1) {
      if (j % 2 === 0) {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - 1] + prices[i - 1]);
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - 1] - prices[i - 1]);
      }
    }
  }

  let res = 0;
  for (let j = 0; j <= upj; j += 1) {
    res = Math.max(res, dp[prices.length][j]);
  }

  return res;
};

// 空间压缩
const maxProfit1 = function (k, prices) {
  const dp = [];
  let upj = Math.min(prices.length, 2 * k);
  for (let j = 0; j <= upj; j += 1) {
    dp[j] = -Infinity;
  }

  dp[0] = 0;
  for (let i = 1; i <= prices.length; i += 1) {
    let upj = Math.min(i, 2 * k);
    for (let j = upj; j >= 1; j -= 1) {
      if (j % 2 === 0) {
        dp[j] = Math.max(dp[j], dp[j - 1] + prices[i - 1]);
      } else {
        dp[j] = Math.max(dp[j], dp[j - 1] - prices[i - 1]);
      }
    }
  }

  let res = 0;
  for (let j = 0; j <= upj; j += 1) {
    res = Math.max(res, dp[j]);
  }

  return res;
};

console.log(maxProfit(2, [2, 4, 1]));
