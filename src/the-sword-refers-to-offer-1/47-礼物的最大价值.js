/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxValue = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const dp = [];
  // initial
  for (let i = 0; i <= rows; i += 1) {
    dp[i] = [];
    for (let j = 0; j <= cols; j += 1) {
      dp[i][j] = 0;
    }
  }

  for (let i = 1; i <= rows; i += 1) {
    for (let j = 1; j <= cols; j += 1) {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]) + grid[i - 1][j - 1];
    }
  }
  return dp[rows][cols];
};

console.log(
  maxValue([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ])
);
