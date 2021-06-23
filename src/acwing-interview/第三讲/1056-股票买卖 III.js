/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  const dp1 = [];
  const dp2 = [];
  for (let i = 0; i < prices.length; i += 1) {
    dp1[i] = 0;
    dp2[i] = 0;
  }

  let min = prices[0];
  let max = prices[prices.length - 1];

  // dp1
  for (let i = 1; i < prices.length; i += 1) {
    dp1[i] = Math.max(dp1[i - 1], prices[i] - min);
    min = Math.min(min, prices[i]);
  }

  // dp2
  for (let i = prices.length - 2; i >= 0; i -= 1) {
    dp2[i] = Math.max(dp2[i + 1], max - prices[i]);
    max = Math.max(max, prices[i]);
  }

  let res = 0;
  for (let i = 1; i < prices.length - 1; i += 1) {
    res = Math.max(res, dp1[i] + dp2[i + 1]);
  }

  return Math.max(res, dp1[prices.length - 1]); // dp1 的最后一个没有被比较到，所以在这里被比较
};

// test
console.log(maxProfit([3, 3, 5, 0, 0, 3, 1, 4]));
console.log(maxProfit([1, 2, 3, 4, 5]));
console.log(maxProfit([7, 6, 4, 3, 1]));
