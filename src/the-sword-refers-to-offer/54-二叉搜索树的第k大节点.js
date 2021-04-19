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
  const helper = function (root, k) {
    if (root == null) {
      return;
    }

    helper(root.right, k);
    count += 1;
    if (k === count) {
      ans = root.val;
      return;
    }
    if (count !== k) {
      helper(root.left, k);
    }
  };

  let ans = 0;
  let count = 0;

  if (root == null) {
    return -1;
  }
  helper(root, k);
  return ans;
};
