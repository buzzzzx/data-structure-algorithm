/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number[][]}
 */
const pathSum = function (root, target) {
  if (root == null) {
    return [];
  }
  const res = [];
  const path = [];
  dfs(root, target, res, path);
  return res;
};

const dfs = function (root, target, res, path) {
  const left = root.left;
  const right = root.right;
  const rootVal = root.val;
  if (left == null && right == null) {
    if (target === rootVal) {
      res.push([...path, rootVal]);
    }
    return;
  }

  path.push(rootVal);
  if (left) {
    dfs(root.left, target - rootVal, res, [...path]);
  }

  if (right) {
    dfs(root.right, target - rootVal, res, [...path]);
  }
};
