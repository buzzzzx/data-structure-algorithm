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
  if (!A || !B) {
    return false;
  }

  let currA = A;
  let currB = B;
  let res = false;

  if (currA.val === currB.val) {
    res =
      isSubStructureHelper(currA.left, currB.left) &&
      isSubStructureHelper(currA.right, currB.right);
    if (!res) {
      return (
        isSubStructure(currA.left, currB) || isSubStructure(currA.right, currB)
      );
    } else {
      return res;
    }
  } else {
    return (
      isSubStructure(currA.left, currB) || isSubStructure(currA.right, currB)
    );
  }
};

const isSubStructureHelper = function (A, B) {
  if (A == null && B == null) {
    return true;
  }

  if (A == null) {
    return false;
  }

  if (B == null) {
    return true;
  }

  if (A.val !== B.val) {
    return false;
  } else {
    return (
      isSubStructureHelper(A.left, B.left) &&
      isSubStructureHelper(A.right, B.right)
    );
  }
};
