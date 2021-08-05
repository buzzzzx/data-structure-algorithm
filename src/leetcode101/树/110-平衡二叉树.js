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
const isBalanced = function (root) {
  if (root == null) {
    return true;
  }

  const left = depth(root.left);
  if (left === -1) {
    return false;
  }
  const right = depth(root.right);
  if (right === -1) {
    return false;
  }
  return Math.abs(left - right) <= 1;
};

function depth(root) {
  if (root == null) {
    return 0;
  }
  const left = depth(root.left);
  if (left === -1) {
    return -1;
  }
  const right = depth(root.right);
  if (right === -1) {
    return -1;
  }
  if (Math.abs(left - right) > 1) {
    return -1;
  } else {
    return Math.max(left, right) + 1;
  }
}
