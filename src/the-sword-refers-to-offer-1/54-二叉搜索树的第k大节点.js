/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
const kthLargest = function (root, k) {
  const helper = function (root) {
    if (root.right != null && k > 0) {
      helper(root.right);
    }
    k -= 1;
    if (k === 0) {
      ans = root.val;
      return;
    }
    if (root.left != null && k > 0) {
      helper(root.left);
    }
  };

  let ans;
  helper(root);
  return ans;
};
