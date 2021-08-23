function findRoad(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  if (matrix[0][0] === 2 || matrix[rows - 1][cols - 1] === 2) {
    return -1;
  }
  const visited = [];
  for (let i = 0; i < rows; i += 1) {
    visited[i] = [];
    for (let j = 0; j < cols; j += 1) {
      visited[i][j] = false;
    }
  }

  let res = Infinity;
  dfs(matrix, 0, 0, visited, 0);

  function dfs(matrix, i, j, visited, tmp) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    if (i < 0 || i >= rows || j < 0 || j >= cols) {
      return;
    }
    if (matrix[i][j] === 2) {
      return;
    }
    if (i === rows - 1 && j === cols - 1) {
      res = Math.min(res, tmp + (matrix[i][j] === 1 ? 1 : 2));
      return;
    }

    if (visited[i][j]) {
      return;
    }
    visited[i][j] = true;
    const val = matrix[i][j] === 1 ? 1 : 2;
    dfs(matrix, i + 1, j, visited, tmp + val);
    dfs(matrix, i - 1, j, visited, tmp + val);
    dfs(matrix, i, j + 1, visited, tmp + val);
    dfs(matrix, i, j - 1, visited, tmp + val);
    visited[i][j] = false;
  }

  return res - (matrix[0][0] === 1 ? 1 : 2);
}

console.log(
  findRoad([
    [1, 1, 1, 1, 0],
    [0, 1, 0, 1, 0],
    [1, 1, 2, 1, 1],
    [0, 2, 0, 0, 1],
  ])
);

console.log(
  findRoad([
    [1, 2, 1, 1, 0],
    [1, 1, 1, 2, 0],
    [1, 2, 2, 2, 1],
  ])
);
