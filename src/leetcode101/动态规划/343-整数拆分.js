/**
 * @param {number} n
 * @return {number}
 */
const integerBreak = function (n) {
  if (n === 2) {
    return 1;
  }
  if (n === 3) {
    return 2;
  }

  let res = 1;
  while (n > 4) {
    res *= 3;
    n -= 3;
  }
  return res * n;
};

// dp
const integerBreak1 = function (n) {
  const dp = [];
  for (let i = 1; i <= n; i += 1) {
    dp[i] = 0;
  }

  for (let i = 2; i <= n; i += 1) {
    for (let j = 1; j < i; j += 1) {
      dp[i] = Math.max(dp[i], dp[i - j] * j, (i - j) * j);
    }
  }

  return dp[n];
};

console.log(integerBreak1(20));
