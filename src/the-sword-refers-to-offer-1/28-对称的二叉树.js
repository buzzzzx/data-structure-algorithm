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
const isSymmetric = function (root) {
  if (root == null) {
    return true;
  }

  return helper(root.left, root.right);
};

const helper = function (left, right) {
  if (left == null && right == null) {
    return true;
  }
  if (left == null || right == null || left.val !== right.val) {
    return false;
  }

  return helper(left.left, right.right) && helper(left.right, right.left);
  return true;
};
