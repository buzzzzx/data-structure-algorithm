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
const inOrderTraverse = function (root) {
  const res = [];
  dfs(root);

  function dfs(root) {
    if (root == null) {
      return;
    }
    dfs(root.left);
    res.push(root.val);
    dfs(root.right);
  }
  return res;
};

/**
 * 栈
 * @param {TreeNode} root
 * @return {number[]}
 */
const inOrderTraverse1 = function (root) {
  if (root) {
    return [];
  }

  const res = [];
  const stack = [];
  stack.push(root);
  while (stack.length !== 0) {
    const node = stack[stack.length - 1];
  }
};
