/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
const updateMatrix = function (mat) {
  const rows = mat.length;
  const cols = mat[0].length;
  const dp = [];
  for (let i = 0; i < rows; i += 1) {
    dp[i] = [];
    for (let j = 0; j < cols; j += 1) {
      dp[i][j] = Infinity;
    }
  }

  // 从左上到右下
  for (let i = 0; i < rows; i += 1) {
    for (let j = 0; j < cols; j += 1) {
      if (mat[i][j] === 0) {
        dp[i][j] = 0;
      } else {
        if (i > 0) {
          dp[i][j] = Math.min(dp[i][j], dp[i - 1][j] + 1); // 上
        }
        if (j > 0) {
          dp[i][j] = Math.min(dp[i][j], dp[i][j - 1] + 1); // 左
        }
      }
    }
  }

  // 从右下到左上
  for (let i = rows - 1; i >= 0; i -= 1) {
    for (let j = cols - 1; j >= 0; j -= 1) {
      if (mat[i][j] === 0) {
        continue;
      }

      if (i + 1 < rows) {
        dp[i][j] = Math.min(dp[i][j], dp[i + 1][j] + 1); // 下
      }
      if (j + 1 < cols) {
        dp[i][j] = Math.min(dp[i][j], dp[i][j + 1] + 1); // 右
      }
    }
  }

  return dp;
};

// 用 bfs 来做
const updateMatrix1 = function (mat) {
  const rows = mat.length;
  const cols = mat[0].length;
  const dp = [];
  for (let i = 0; i < rows; i += 1) {
    dp[i] = [];
    for (let j = 0; j < cols; j += 1) {
      dp[i][j] = -1;
    }
  }

  // bfs
  const queue = [];
  for (let i = 0; i < rows; i += 1) {
    for (let j = 0; j < cols; j += 1) {
      if (mat[i][j] === 0) {
        queue.push([i, j]);
        dp[i][j] = 0;
      }
    }
  }

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  while (queue.length !== 0) {
    const item = queue.shift();
    let x = item[0];
    let y = item[1];

    // 四个方向
    for (let i = 0; i < 4; i += 1) {
      let a = dx[i] + x;
      let b = dy[i] + y;
      if (a < 0 || a >= rows || b < 0 || b >= cols || dp[a][b] !== -1) {
        continue;
      }

      dp[a][b] = dp[x][y] + 1;
      queue.push([a, b]);
    }
  }

  return dp;
};

console.log(
  updateMatrix1([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ])
);
console.log(
  updateMatrix1([
    [0, 0, 0],
    [0, 1, 0],
    [1, 1, 1],
  ])
);
