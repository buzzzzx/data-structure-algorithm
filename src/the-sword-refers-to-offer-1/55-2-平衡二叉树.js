/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isBalanced = function (root) {
  return dfs(root) !== -1;
};

const dfs = function (root) {
  if (root == null) {
    return 0;
  }

  const left = dfs(root.left);
  if (left === -1) {
    return -1;
  }
  const right = dfs(root.right);
  if (right === -1) {
    return -1;
  }

  return Math.abs(left - right) >= 2 ? -1 : Math.max(left, right) + 1;
};
