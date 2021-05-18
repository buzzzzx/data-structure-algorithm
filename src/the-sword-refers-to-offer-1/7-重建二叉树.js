/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const buildTree = function (preorder, inorder) {
  if (preorder.length === 0) {
    return null;
  }
  const headVal = preorder[0];
  const head = new TreeNode(headVal);
  const mid = inorder.findIndex((val) => val === headVal);
  const leftPreorder = preorder.slice(1, mid + 1);
  const leftInorder = inorder.slice(0, mid);
  const rightPreorder = preorder.slice(mid + 1);
  const rightInorder = inorder.slice(mid + 1);
  head.left = buildTree(leftPreorder, leftInorder);
  head.right = buildTree(rightPreorder, rightInorder);

  return head;
};
