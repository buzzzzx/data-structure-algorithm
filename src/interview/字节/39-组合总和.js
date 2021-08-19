/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = function (candidates, target) {
  candidates.sort((a, b) => a - b);
  const res = [];
  function dfs(i, tmpSum, tmp) {
    if (tmpSum > target || i >= candidates.length) {
      return;
    }

    if (tmpSum === target) {
      res.push(tmp);
      return;
    }

    dfs(i, tmpSum + candidates[i], [...tmp, candidates[i]]);
    dfs(i + 1, tmpSum, tmp);
  }

  dfs(0, 0, []);
  return res;
};
