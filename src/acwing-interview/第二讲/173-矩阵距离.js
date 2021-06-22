/**
 *
 * @param {number[][]} matrix
 * @return {number[][]}
 */
const matrixDistance = function (matrix) {
  if (matrix == null) {
    return null;
  }

  const rows = matrix.length;
  const cols = matrix[0].length;
  const res = [];
  // initial res
  for (let i = 0; i < rows; i += 1) {
    res[i] = [];
    for (let j = 0; j < cols; j += 1) {
      res[i][j] = -1;
    }
  }

  const queue = [];
  // 将 matrix 中的 1 的点的坐标加入 queue
  for (let i = 0; i < rows; i += 1) {
    for (let j = 0; j < cols; j += 1) {
      if (matrix[i][j] === 1) {
        queue.push([i, j]);
        res[i][j] = 0;
      }
    }
  }

  let dx = [-1, 1, 0, 0]; // 上下左右
  let dy = [0, 0, -1, 1]; // 上下左右
  while (queue.length !== 0) {
    const item = queue.shift();
    // 将上下左右中未访问过的元素加入 queue
    for (let i = 0; i < 4; i += 1) {
      let x = dx[i] + item[0];
      let y = dy[i] + item[1];
      if (x < 0 || x >= rows || y < 0 || y >= cols || res[x][y] !== -1) {
        continue;
      }

      queue.push([x, y]);
      res[x][y] = res[item[0]][item[1]] + 1;
    }
  }

  return res;
};

// test
console.log(
  matrixDistance([
    [0, 0, 0, 1],
    [0, 0, 1, 1],
    [0, 1, 1, 0],
  ])
);
