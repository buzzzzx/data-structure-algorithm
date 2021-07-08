/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
const pacificAtlantic = function (heights) {
  const rows = heights.length;
  const cols = heights[0].length;
  const res = [];
  const pacific = [];
  const atlantic = [];
  for (let i = 0; i < rows; i += 1) {
    pacific[i] = [];
    atlantic[i] = [];
    for (let j = 0; j < cols; j += 1) {
      pacific[i][j] = false;
      atlantic[i][j] = false;
    }
  }

  for (let i = 0; i < rows; i += 1) {
    dfs(heights, pacific, i, 0);
    dfs(heights, atlantic, i, cols - 1);
  }
  for (let j = 0; j < cols; j += 1) {
    dfs(heights, pacific, 0, j);
    dfs(heights, atlantic, rows - 1, j);
  }
  for (let i = 0; i < rows; i += 1) {
    for (let j = 0; j < cols; j += 1) {
      if (pacific[i][j] && atlantic[i][j]) {
        res.push([i, j]);
      }
    }
  }

  return res;
};

const dfs = function (heights, ocean, i, j) {
  if (ocean[i][j]) {
    return;
  }
  ocean[i][j] = true;
  const height = heights[i][j];

  const directions = [-1, 0, 1, 0, -1];
  for (let m = 0; m < 4; m += 1) {
    let x = i + directions[m];
    let y = j + directions[m + 1];
    if (
      x >= 0 &&
      x < heights.length &&
      y >= 0 &&
      y < heights[0].length &&
      heights[x][y] >= height
    ) {
      dfs(heights, ocean, x, y);
    }
  }
};

console.log(
  pacificAtlantic([
    [1, 2, 2, 3, 5],
    [3, 2, 3, 4, 4],
    [2, 4, 5, 3, 1],
    [6, 7, 1, 4, 5],
    [5, 1, 1, 2, 4],
  ])
);
