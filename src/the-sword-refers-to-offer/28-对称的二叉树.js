/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void}
 */
const isSymmetric = function (root) {
  if (root == null) {
    return true;
  }

  return isSymmetricHelper(root.left, root.right);
};

const isSymmetricHelper = function (t1, t2) {
  if (t1 == null && t2 == null) {
    return true;
  }

  if (t1 == null || t2 == null) {
    return false;
  }

  return (
    t1.val === t2.val &&
    isSymmetricHelper(t1.left, t2.right) &&
    isSymmetricHelper(t1.right, t2.left)
  );
};
