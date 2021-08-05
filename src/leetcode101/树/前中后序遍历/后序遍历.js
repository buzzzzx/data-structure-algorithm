/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 递归
 * @param {TreeNode} root
 * @return {number[]}
 */
const postOrderTraverse = function (root) {
  const res = [];
  dfs(root);

  function dfs(root) {
    if (root == null) {
      return;
    }
    dfs(root.left);
    dfs(root.right);
    res.push(root.val);
  }
  return res;
};

/**
 * 栈
 * @param {TreeNode} root
 * @return {number[]}
 */
const postOrderTraverse1 = function (root) {};
