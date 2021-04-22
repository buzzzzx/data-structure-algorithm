/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = function (root, p, q) {
  if (root === p || root === q) {
    return root;
  }
  if (p.val > q.val) {
    let tmp = p;
    p = q;
    q = tmp;
  }
  if (p.val > root.val) {
    return lowestCommonAncestor(root.right, p, q);
  } else if (q.val < root.val) {
    return lowestCommonAncestor(root.left, p, q);
  } else {
    return root;
  }
};
