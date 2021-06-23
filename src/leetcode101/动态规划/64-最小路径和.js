/**
 * @param {number[][]} grid
 * @return {number}
 */
const minPathSum = function (grid) {
  if (grid == null) {
    return 0;
  }

  const rows = grid.length;
  const cols = grid[0].length;
  const dp = [];
  for (let i = 0; i <= rows; i += 1) {
    dp[i] = [];
    for (let j = 0; j <= cols; j += 1) {
      if (i === 0 || j === 0) {
        dp[i][j] = Infinity;
      } else {
        dp[i][j] = 0;
      }
    }
  }

  for (let i = 1; i <= rows; i += 1) {
    for (let j = 1; j <= cols; j += 1) {
      if (i === 1 && j === 1) {
        dp[i][j] = grid[i - 1][j - 1];
        continue;
      }
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i - 1][j - 1];
    }
  }

  return dp[rows][cols];
};

// 另一种写法
const minPathSum1 = function (grid) {
  if (grid == null) {
    return 0;
  }

  const rows = grid.length;
  const cols = grid[0].length;
  const dp = [];
  for (let i = 0; i < rows; i += 1) {
    dp[i] = [];
    for (let j = 0; j < cols; j += 1) {
      dp[i][j] = 0;
    }
  }

  for (let i = 0; i < rows; i += 1) {
    for (let j = 0; j < cols; j += 1) {
      if (i === 0 && j === 0) {
        dp[i][j] = grid[i][j];
      } else if (i === 0) {
        dp[i][j] = dp[i][j - 1] + grid[i][j];
      } else if (j === 0) {
        dp[i][j] = dp[i - 1][j] + grid[i][j];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
      }
    }
  }

  return dp[rows - 1][cols - 1];
};

// TODO 空间优化写法 dp 为一维数组

console.log(
  minPathSum1([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ])
);
