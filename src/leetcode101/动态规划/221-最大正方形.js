/**
 * @param {character[][]} matrix
 * @return {number}
 */
const maximalSquare = function (matrix) {
  if (matrix == null) {
    return null;
  }
  const rows = matrix.length;
  const cols = matrix[0].length;
  const dp = [];
  for (let i = 0; i <= rows; i += 1) {
    dp[i] = [];
    for (let j = 0; j <= cols; j += 1) {
      dp[i][j] = 0;
    }
  }

  let resSide = 0;
  for (let i = 1; i <= rows; i += 1) {
    for (let j = 1; j <= cols; j += 1) {
      if (matrix[i - 1][j - 1] === "0") {
        continue;
      }

      dp[i][j] =
        Math.min(dp[i - 1][j - 1], Math.min(dp[i - 1][j], dp[i][j - 1])) + 1;
      resSide = Math.max(resSide, dp[i][j]);
    }
  }

  return resSide * resSide;
};

// test
console.log(
  maximalSquare([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "1", "1", "0"],
    ["1", "1", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["0", "0", "1", "1", "1"],
  ])
);
console.log(
  maximalSquare([
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"],
  ])
);
