/**
 * @param {number[][]} grid
 * @return {number}
 */
const shortestBridge = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const queue = [];
  let flag = false;
  for (let i = 0; i < rows; i += 1) {
    if (flag) {
      break;
    }
    for (let j = 0; j < cols; j += 1) {
      if (grid[i][j] === 1) {
        dfs(grid, queue, rows, cols, i, j);
        flag = true;
        break;
      }
    }
  }

  let level = 0;
  const directions = [-1, 0, 1, 0, -1];
  while (queue.length !== 0) {
    level += 1;
    let levelCount = queue.length;
    while (levelCount) {
      levelCount -= 1;
      const point = queue.shift();
      for (let k = 0; k < 4; k += 1) {
        let x = point[0] + directions[k];
        let y = point[1] + directions[k + 1];
        if (x >= 0 && x < rows && y >= 0 && y < cols) {
          if (grid[x][y] === 2) {
            continue;
          }
          if (grid[x][y] === 1) {
            return level;
          }
          grid[x][y] = 2;
          queue.push([x, y]);
        }
      }
    }
  }

  return 0;
};

const dfs = (grid, queue, rows, cols, i, j) => {
  if (i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] === 2) {
    return;
  }
  if (grid[i][j] === 0) {
    queue.push([i, j]);
    return;
  }
  grid[i][j] = 2;
  dfs(grid, queue, rows, cols, i + 1, j);
  dfs(grid, queue, rows, cols, i - 1, j);
  dfs(grid, queue, rows, cols, i, j + 1);
  dfs(grid, queue, rows, cols, i, j - 1);
};

// test
console.log(
  shortestBridge([
    [0, 1, 0],
    [0, 0, 0],
    [0, 0, 1],
  ])
);
