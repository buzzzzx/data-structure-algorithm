/**
 * @param {string} s
 * @return {string[]}
 */
const permutation = function (s) {
  if (s == null) {
    return [];
  }
  const res = new Set();
  const visited = new Array(s.length).fill(false);
  dfs(s, res, "", visited);
  return [...res];
};

const dfs = function (s, res, tmp, visited) {
  if (tmp.length === s.length) {
    res.add(tmp);
    return;
  }

  for (let i = 0; i < s.length; i += 1) {
    if (visited[i]) continue;
    visited[i] = true;
    let chs = tmp + s[i];
    dfs(s, res, chs, visited);
    visited[i] = false;
  }
};

// test
console.log(permutation("abc"));
