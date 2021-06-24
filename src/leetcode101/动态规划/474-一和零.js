/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const findMaxForm = function (strs, m, n) {
  let len = strs.length;
  const dp = [];
  for (let i = 0; i <= len; i += 1) {
    dp[i] = [];
    for (let j = 0; j <= m; j += 1) {
      dp[i][j] = [];
      for (let k = 0; k <= n; k += 1) {
        dp[i][j][k] = 0;
      }
    }
  }

  for (let i = 1; i <= len; i += 1) {
    const str = strs[i - 1];
    let x = 0;
    let y = 0;
    for (let c of str) {
      if (c === "0") {
        x += 1;
      } else {
        y += 1;
      }
    }
    for (let j = 0; j <= m; j += 1) {
      for (let k = 0; k <= n; k += 1) {
        dp[i][j][k] = dp[i - 1][j][k];
        if (j >= x && k >= y) {
          dp[i][j][k] = Math.max(dp[i][j][k], dp[i - 1][j - x][k - y] + 1);
        }
      }
    }
  }

  return dp[len][m][n];
};

console.log(findMaxForm(["10", "0001", "111001", "1", "0"], 5, 3));
console.log(findMaxForm(["10", "0", "1"], 1, 1));
