/**
 * @param {number[][]} pairs
 * @return {number}
 */
const findLongestChain = function (pairs) {
  const len = pairs.length;
  pairs.sort((a, b) => a[1] - b[1]);
  const dp = [];
  for (let i = 0; i < len; i += 1) {
    dp[i] = 1;
  }
  dp[0] = 1;
  let res = 1;
  for (let i = 1; i < len; i += 1) {
    for (let j = i - 1; j >= 0; j -= 1) {
      if (pairs[i][0] > pairs[j][1]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    res = Math.max(res, dp[i]);
  }

  return res;
};

// 贪心算法
const findLongestChain1 = function (pairs) {
  pairs.sort((a, b) => a[1] - b[1]);

  let res = 1;
  let tmp = pairs[0][1];
  for (let i = 1; i < pairs.length; i += 1) {
    if (pairs[i][0] > tmp) {
      res += 1;
      tmp = pairs[i][1];
    }
  }

  return res;
};
