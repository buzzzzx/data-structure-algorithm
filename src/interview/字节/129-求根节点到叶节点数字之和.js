/**
 * 解题思路：
 *    DFS
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const sumNumbers = function (root) {
  if (root == null) {
    return 0;
  }
  let res = 0;

  function dfs(root, tmp) {
    if (root == null) {
      return;
    }
    if (root.left == null && root.right == null) {
      res += tmp * 10 + root.val;
      return;
    }

    dfs(root.left, tmp * 10 + root.val);
    dfs(root.right, tmp * 10 + root.val);
  }
  dfs(root, 0);
  return res;
};
