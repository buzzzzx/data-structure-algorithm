/**
 * @param {number} n
 * @return {number[]}
 */
const dicesProbability = function (n) {
  let dp = new Array(6).fill(1 / 6);
  for (let i = 2; i <= n; i += 1) {
    let tmp = new Array(5 * i + 1).fill(0);
    for (let k = 0; k < dp.length; k += 1) {
      for (let j = 0; j < 6; j += 1) {
        tmp[j + k] += dp[k] / 6;
      }
    }
    dp = tmp;
  }

  return dp;
};

// test
console.log(dicesProbability(3));
