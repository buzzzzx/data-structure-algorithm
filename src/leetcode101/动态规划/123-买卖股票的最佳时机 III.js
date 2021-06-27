/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  const len = prices.length;
  const dp1 = [];
  const dp2 = [];
  for (let i = 0; i < len; i += 1) {
    dp1[i] = 0;
    dp2[i] = 0;
  }

  let min = prices[0];
  for (let i = 1; i < len; i += 1) {
    if (prices[i] > min) {
      dp1[i] = Math.max(dp1[i - 1], prices[i] - min);
    } else {
      dp1[i] = dp1[i - 1];
      min = prices[i];
    }
  }

  let max = prices[len - 1];
  for (let i = len - 2; i >= 0; i -= 1) {
    if (prices[i] < max) {
      dp2[i] = Math.max(dp2[i + 1], max - prices[i]);
    } else {
      dp2[i] = dp2[i + 1];
      max = prices[i];
    }
  }

  let res = 0;
  for (let i = 1; i < len - 1; i += 1) {
    res = Math.max(res, dp1[i] + dp2[i + 1]);
  }

  return Math.max(res, dp1[len - 1]);
};

console.log(maxProfit([2, 1, 2, 1, 0, 0, 1]));
