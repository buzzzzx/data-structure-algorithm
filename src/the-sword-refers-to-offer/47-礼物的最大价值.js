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

// dfs 暴力法会超时 shit it
const dfs = function (grid, max, res, row, col) {
  const rows = grid.length;
  const cols = grid[0].length;
  if (row >= rows || col >= cols) {
    return;
  }

  if (row === rows - 1 && col === cols - 1) {
    if (max.num < res + grid[row][col]) {
      max.num = res + grid[row][col];
    }
    return;
  }

  dfs(grid, max, res + grid[row][col], row + 1, col);
  dfs(grid, max, res + grid[row][col], row, col + 1);
};

// test
console.log(
  maxValue([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ])
);
