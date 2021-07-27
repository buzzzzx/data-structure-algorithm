/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = function (n, k) {
  if (n === 1 && k === 1) {
    return [[1]];
  }

  const visited = new Array(n + 1).fill(false);

  const res = [];
  dfs(n, k, visited, res, []);

  return res;
};

const dfs = (n, k, visited, res, tmp) => {
  if (k === tmp.length) {
    res.push(tmp);
    return;
  }

  for (let i = 1; i <= n; i += 1) {
    if (visited[i] || (tmp.length !== 0 && tmp[tmp.length - 1] >= i)) {
      continue;
    }
    visited[i] = true;
    dfs(n, k, visited, res, [...tmp, i]);
    visited[i] = false;
  }
};

// 牛逼的解法
const combine1 = function (n, k) {
  if (k > n) {
    return [];
  }
  if (k === 1) {
    const res = [];
    for (let i = 1; i <= n; i += 1) {
      res.push([i]);
    }
    return res;
  }
  if (k === n) {
    const res = [];
    for (let i = 1; i <= n; i += 1) {
      res.push(i);
    }
    return [res];
  }

  const res = combine1(n - 1, k);
  for (let tmp of combine1(n - 1, k - 1)) {
    tmp.push(n);
    res.push(tmp);
  }
  return res;
};
