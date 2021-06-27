/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  let res = 0;
  let min = prices[0];
  for (let i = 1; i < prices.length; i += 1) {
    if (prices[i] <= min) {
      min = prices[i];
    } else {
      res = Math.max(res, prices[i] - min);
    }
  }

  return res;
};
