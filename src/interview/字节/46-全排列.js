/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function (nums) {
  if (nums.length === 1) {
    return [[nums[0]]];
  }
  const visited = new Array(nums.length).fill(false);
  const res = [];
  dfs(nums, visited, res, []);
  return res;
};

const dfs = function (nums, visited, res, tmp) {
  if (tmp.length === nums.length) {
    res.push(tmp);
    return;
  }

  for (let i = 0; i < nums.length; i += 1) {
    if (visited[i]) {
      continue;
    }
    visited[i] = true;
    dfs(nums, visited, res, [...tmp, nums[i]]);
    visited[i] = false;
  }
};
