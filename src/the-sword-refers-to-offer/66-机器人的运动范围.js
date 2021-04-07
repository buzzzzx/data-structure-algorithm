function movingCount(threshold, rows, cols) {
  const visited = [];
  for (let i = 0; i < rows; i += 1) {
    visited[i] = [];
    for (let j = 0; j < cols; j += 1) {
      visited[i][j] = 0;
    }
  }

  return dfs(threshold, visited, 0, 0);
}

function dfs(threshold, visited, i, j) {
  const rows = visited.length;
  const cols = visited[0].length;

  if (i < 0 || i >= rows || j < 0 || j >= cols) {
    return 0;
  }

  if (visited[i][j] === 1) {
    return 0;
  }

  if (getSum(i) + getSum(j) > threshold) {
    return 0;
  } else {
    visited[i][j] = 1;
    return (
      1 +
      (dfs(threshold, visited, i + 1, j) +
        dfs(threshold, visited, i - 1, j) +
        dfs(threshold, visited, i, j - 1) +
        dfs(threshold, visited, i, j + 1))
    );
  }
}

function getSum(num) {
  let tmp = num;
  let sum = 0;

  while (tmp > 0) {
    sum += tmp % 10;
    tmp = Math.floor(tmp / 10);
  }

  return sum;
}

// test
console.log(movingCount(15, 20, 20));
