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

  let left = dfs(root.left);
  if (left === -1) {
    return -1;
  }
  let right = dfs(root.right);
  if (right === -1) {
    return -1;
  }

  return Math.abs(left - right) >= 2 ? -1 : Math.max(left, right) + 1;
};

// 会重复的计算子树的高度
const isBalanced1 = function (root) {
  if (root == null) {
    return true;
  }

  let child = isBalanced(root.left) && isBalanced(root.right);
  return child && Math.abs(getDepth(root.left) - getDepth(root.right)) <= 1;
};

const getDepth = function (root) {
  if (root == null) {
    return 0;
  }

  return Math.max(getDepth(root.left), getDepth(root.right)) + 1;
};
