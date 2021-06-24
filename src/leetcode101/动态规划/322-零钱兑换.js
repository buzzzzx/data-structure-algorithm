/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = function (coins, amount) {
  const dp = [];
  for (let i = 0; i <= amount; i += 1) {
    dp[i] = amount + 1;
  }

  dp[0] = 0;
  for (let i = 1; i <= amount; i += 1) {
    for (let coin of coins) {
      if (i >= coin) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }
  return dp[amount] === amount + 1 ? -1 : dp[amount];
};

console.log(coinChange([5, 2, 1], 11));
