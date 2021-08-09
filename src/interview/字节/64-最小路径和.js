/**
 * @param {number[][]} grid
 * @return {number}
 */
const minPathSum = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const dp = [];
  for (let i = 0; i <= rows; i += 1) {
    dp[i] = [];
    for (let j = 0; j <= cols; j += 1) {
      dp[i][j] = Infinity;
    }
  }

  for (let i = 1; i <= rows; i += 1) {
    for (let j = 1; j <= cols; j += 1) {
      if (i === 1 && j === 1) {
        dp[i][j] = grid[i - 1][j - 1];
        continue;
      }
      dp[i][j] =
        (dp[i - 1][j] > dp[i][j - 1] ? dp[i][j - 1] : dp[i - 1][j]) +
        grid[i - 1][j - 1];
    }
  }

  return dp[rows][cols];
};

// dfs 不可取
const minPathSum1 = function (grid) {
  let res = Infinity;
  let rows = grid.length;
  let cols = grid[0].length;

  function dfs(grid, i, j, tmp) {
    if (i < 0 || i >= rows || j < 0 || j >= cols) {
      return;
    }

    if (i === rows - 1 && j === cols - 1) {
      res = Math.min(res, tmp + grid[rows - 1][cols - 1]);
      return;
    }

    dfs(grid, i + 1, j, tmp + grid[i][j]);
    dfs(grid, i, j + 1, tmp + grid[i][j]);
  }

  dfs(grid, 0, 0, 0);
  return res;
};

console.log(
  minPathSum([
    [3, 8, 6, 0, 5, 9, 9, 6, 3, 4, 0, 5, 7, 3, 9, 3],
    [0, 9, 2, 5, 5, 4, 9, 1, 4, 6, 9, 5, 6, 7, 3, 2],
    [8, 2, 2, 3, 3, 3, 1, 6, 9, 1, 1, 6, 6, 2, 1, 9],
    [1, 3, 6, 9, 9, 5, 0, 3, 4, 9, 1, 0, 9, 6, 2, 7],
    [8, 6, 2, 2, 1, 3, 0, 0, 7, 2, 7, 5, 4, 8, 4, 8],
    [4, 1, 9, 5, 8, 9, 9, 2, 0, 2, 5, 1, 8, 7, 0, 9],
    [6, 2, 1, 7, 8, 1, 8, 5, 5, 7, 0, 2, 5, 7, 2, 1],
    [8, 1, 7, 6, 2, 8, 1, 2, 2, 6, 4, 0, 5, 4, 1, 3],
    [9, 2, 1, 7, 6, 1, 4, 3, 8, 6, 5, 5, 3, 9, 7, 3],
    [0, 6, 0, 2, 4, 3, 7, 6, 1, 3, 8, 6, 9, 0, 0, 8],
    [4, 3, 7, 2, 4, 3, 6, 4, 0, 3, 9, 5, 3, 6, 9, 3],
    [2, 1, 8, 8, 4, 5, 6, 5, 8, 7, 3, 7, 7, 5, 8, 3],
    [0, 7, 6, 6, 1, 2, 0, 3, 5, 0, 8, 0, 8, 7, 4, 3],
    [0, 4, 3, 4, 9, 0, 1, 9, 7, 7, 8, 6, 4, 6, 9, 5],
    [6, 5, 1, 9, 9, 2, 2, 7, 4, 2, 7, 2, 2, 3, 7, 2],
    [7, 1, 9, 6, 1, 2, 7, 0, 9, 6, 6, 4, 4, 5, 1, 0],
    [3, 4, 9, 2, 8, 3, 1, 2, 6, 9, 7, 0, 2, 4, 2, 0],
    [5, 1, 8, 8, 4, 6, 8, 5, 2, 4, 1, 6, 2, 2, 9, 7],
  ])
);
