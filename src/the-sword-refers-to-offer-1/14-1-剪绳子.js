/**
 * @param {number} n
 * @return {number}
 */
const cuttingRope = function (n) {
  const dp = [];
  dp[0] = 0;
  dp[1] = 0;

  for (let i = 2; i <= n; i += 1) {
    let max = 0;
    for (let j = 1; j < i; j += 1) {
      let tmp1 = j * dp[i - j];
      let tmp2 = j * (i - j);
      max = Math.max(tmp1, tmp2, max);
    }
    dp[i] = max;
  }

  return dp[n];
};

const cuttingRopeMath = function (n) {
  if (n < 4) {
    return n - 1;
  }
  let res = 1;
  while (n > 4) {
    n -= 3;
    res *= 3;
  }

  return res * n;
};

console.log(cuttingRope(10));
