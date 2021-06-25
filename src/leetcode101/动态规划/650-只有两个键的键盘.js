/**
 * @param {number} n
 * @return {number}
 */
const minSteps = function (n) {
  const dp = [];
  for (let i = 2; i <= n; i += 1) {
    dp[i] = i;
  }

  dp[1] = 0;
  for (let i = 2; i <= n; i += 1) {
    for (let j = 2; j * j <= i; j += 1) {
      if (i % j === 0) {
        dp[i] = dp[j] + dp[i / j];
      }
    }
  }

  return dp[n];
};

console.log(minSteps(6));
