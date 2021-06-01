/**
 * @param {number} n
 * @return {number[]}
 */
const dicesProbability = function (n) {
  let dp = new Array(6).fill(1 / 6);

  for (let i = 2; i <= n; i += 1) {
    const tmp = new Array(5 * i + 1).fill(0);
    for (let j = 0; j < dp.length; j += 1) {
      for (let k = 0; k < 6; k += 1) {
        tmp[j + k] += dp[j] * (1 / 6);
      }
    }
    dp = tmp;
  }

  return dp;
};
