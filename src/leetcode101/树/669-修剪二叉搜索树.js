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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
const trimBST = function (root, low, high) {
  if (root == null) {
    return null;
  }

  const rootVal = root.val;
  if (rootVal === low) {
    root.left = null;
  }
  if (rootVal === high) {
    root.right = null;
  }
  if (rootVal > low) {
    root.left = trimBST(root.left, low, high);
  }
  if (rootVal < high) {
    root.right = trimBST(root.right, low, high);
  }
  if (rootVal < low) {
    return trimBST(root.right, low, high);
  }
  if (rootVal > high) {
    return trimBST(root.left, low, high);
  }

  return root;
};
