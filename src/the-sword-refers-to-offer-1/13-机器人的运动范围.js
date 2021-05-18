/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const movingCount = function (m, n, k) {
  const visited = [];
  for (let i = 0; i < m; i += 1) {
    visited[i] = [];
    for (let j = 0; j < n; j += 1) {
      visited[i][j] = 0;
    }
  }

  return dfs(k, 0, 0, visited);
};

const dfs = function (threshold, i, j, visited) {
  const m = visited.length;
  const n = visited[0].length;

  if (i >= m || i < 0 || j >= n || j < 0) {
    return 0;
  }

  if (visited[i][j] === 1) {
    return 0;
  }

  visited[i][j] = 1;
  if (getSum(i) + getSum(j) <= threshold) {
    return (
      1 +
      (dfs(threshold, i + 1, j, visited) +
        dfs(threshold, i - 1, j, visited) +
        dfs(threshold, i, j + 1, visited) +
        dfs(threshold, i, j - 1, visited))
    );
  } else {
    return 0;
  }
};

const getSum = function (num) {
  let sum = 0;
  while (num) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
};
