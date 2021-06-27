/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  let dp0 = 0;
  let dp1 = 0;
  let dp2 = -prices[0];

  for (let i = 1; i < prices.length; i += 1) {
    let newDp0 = Math.max(dp0, dp1);
    let newDp1 = dp2 + prices[i];
    let newDp2 = Math.max(dp2, dp0 - prices[i]);
    dp0 = newDp0;
    dp1 = newDp1;
    dp2 = newDp2;
  }

  return Math.max(dp0, dp1);
};

console.log(maxProfit([1, 2, 3, 0, 2]));
