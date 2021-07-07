/**
 * @param {number[][]} isConnected
 * @return {number}
 */
const findCircleNum = function (isConnected) {
  const len = isConnected.length;
  const visited = [];
  for (let i = 0; i < len; i += 1) {
    visited[i] = false;
  }

  let res = 0;
  for (let i = 0; i < len; i += 1) {
    if (!visited[i]) {
      visited[i] = true;
      dfs(isConnected, visited, i);
      res += 1;
    }
  }

  return res;
};

const dfs = function (isConnected, visited, i) {
  for (let j = 0; j < isConnected.length; j += 1) {
    if (isConnected[i][j] === 1 && !visited[j]) {
      visited[j] = true;
      dfs(isConnected, visited, j);
    }
  }
};
