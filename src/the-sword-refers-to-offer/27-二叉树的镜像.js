/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const mirrorTree = function (root) {
  if (root == null) {
    return root;
  }

  const tmp = root.left;
  root.left = mirrorTree(root.right);
  root.right = mirrorTree(tmp);

  return root;
};
