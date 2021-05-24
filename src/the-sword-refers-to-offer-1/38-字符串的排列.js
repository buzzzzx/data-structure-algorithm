/**
 * @param {string} s
 * @return {string[]}
 */
const permutation = function (s) {
  const res = new Set();
  const visited = [];
  // initial
  for (let i = 0; i < s.length; i += 1) {
    visited[i] = 0;
  }

  dfs(res, visited, s, "");

  return [...res];
};

const dfs = function (res, visited, s, tmp) {
  if (tmp.length === s.length) {
    res.add(tmp);
    return;
  }

  for (let i = 0; i < s.length; i += 1) {
    if (visited[i]) {
      continue;
    }

    visited[i] = 1;
    dfs(res, visited, s, tmp + s[i]);
    visited[i] = 0;
  }
};
