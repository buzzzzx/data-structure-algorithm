/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  const len = prices.length;
  let res = 0;
  let min = prices[0];
  for (let i = 1; i < len; i += 1) {
    if (prices[i] > min) {
      res += prices[i] - min;
    }
    min = prices[i];
  }

  return res;
};
