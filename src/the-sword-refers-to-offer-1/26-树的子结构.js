/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
const isSubStructure = function (A, B) {
  if (B == null || A == null) {
    return false;
  }

  if (A.val === B.val) {
    return (
      (helper(A.left, B.left) && helper(A.right, B.right)) ||
      isSubStructure(A.left, B) ||
      isSubStructure(A.right, B)
    );
  } else {
    return isSubStructure(A.left, B) || isSubStructure(A.right, B);
  }
};

const helper = function (A, B) {
  if (B == null) {
    return true;
  }
  if (A == null) {
    return false;
  }

  return A.val === B.val
    ? helper(A.left, B.left) && helper(A.right, B.right)
    : false;
};
