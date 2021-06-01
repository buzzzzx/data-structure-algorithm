/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = function (s, p) {
  const lenS = s.length;
  const lenP = p.length;

  const dp = [];
  for (let i = 0; i <= lenS; i += 1) {
    dp[i] = [];
    for (let j = 0; j <= lenP; j += 1) {
      dp[i][j] = false;
    }
  }

  dp[0][0] = true;
  for (let i = 0; i <= lenS; i += 1) {
    for (let j = 1; j <= lenP; j += 1) {
      if (p[j - 1] === "*") {
        // 匹配 0 次
        if (j > 1) {
          dp[i][j] = dp[i][j - 2];
        }

        // 匹配多次
        if (i > 0 && j > 1 && matches(s[i], p[j - 2])) {
          dp[i][j] |= dp[i - 1][j] || dp[i][j - 2];
        }
      } else {
        if (i > 0 && matches(s[i - 1], p[j - 1])) {
          dp[i][j] = dp[i - 1][j - 1];
        }
      }
    }
  }
};

const matches = function (a, b) {
  return b === "." || a === b;
};
