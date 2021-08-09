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
 * @param {number} targetSum
 * @return {boolean}
 */
const hasPathSum = function (root, targetSum) {
  if (root == null) {
    return false;
  }

  return dfs(root, targetSum);
};

const dfs = function (root, targetSum) {
  if (root == null) {
    return false;
  }
  if (root.left == null && root.right == null) {
    return targetSum === root.val;
  }

  return (
    dfs(root.left, targetSum - root.val) ||
    dfs(root.right, targetSum - root.val)
  );
};
