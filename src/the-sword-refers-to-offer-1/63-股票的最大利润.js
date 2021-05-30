/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  let max = 0;
  let min = prices[0];

  for (let i = 1; i < prices.length; i += 1) {
    if (prices[i] > min) {
      max = Math.max(max, prices[i] - min);
    } else {
      min = prices[i];
    }
  }

  return max;
};
