/**
 * dfs 和  547 差不多
 * @param {string[][]} grid
 * @return {number}
 */
const numIslands = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const visited = [];
  for (let i = 0; i < rows; i += 1) {
    visited[i] = [];
    for (let j = 0; j < cols; j += 1) {
      visited[i][j] = false;
    }
  }

  let res = 0;
  for (let i = 0; i < rows; i += 1) {
    for (let j = 0; j < cols; j += 1) {
      if (!visited[i][j] && grid[i][j] === "1") {
        visited[i][j] = true;
        dfs(grid, visited, i, j);
        res += 1;
      }
    }
  }

  return res;
};

function dfs(grid, visited, i, j) {
  const rows = grid.length;
  const cols = grid[0].length;

  let d1 = [-1, 1, 0, 0];
  let d2 = [0, 0, -1, 1];
  for (let k = 0; k < 4; k += 1) {
    let x = d1[k] + i;
    let y = d2[k] + j;
    if (
      x >= 0 &&
      y >= 0 &&
      x < rows &&
      y < cols &&
      !visited[x][y] &&
      grid[x][y] === "1"
    ) {
      visited[x][y] = true;
      dfs(grid, visited, x, y);
    }
  }
}

console.log(
  numIslands([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ])
);
