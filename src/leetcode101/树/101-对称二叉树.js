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
  } else if (left == null || right == null) {
    return false;
  } else if (left.val === right.val) {
    return helper(left.left, right.right) && helper(left.right, right.left);
  } else {
    return false;
  }
};
