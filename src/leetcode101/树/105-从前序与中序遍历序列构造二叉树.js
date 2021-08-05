/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
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
  if (preorder.length === 1) {
    return new TreeNode(preorder[0]);
  }

  let rootIdx = inorder.indexOf(preorder[0]);
  const root = new TreeNode(preorder[0]);
  const leftIn = inorder.slice(0, rootIdx);
  const rightIn = inorder.slice(rootIdx + 1);
  const leftPre = preorder.slice(1, rootIdx + 1);
  const rightPre = preorder.slice(rootIdx + 1);
  root.left = buildTree(leftPre, leftIn);
  root.right = buildTree(rightPre, rightIn);
  return root;
};
