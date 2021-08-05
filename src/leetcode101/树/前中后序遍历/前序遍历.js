/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 递归写法
 * @param {TreeNode} root
 * @return {number[]}
 */
const preOrderTraverse = function (root) {
  const res = [];
  dfs(root);

  function dfs(root) {
    if (root == null) {
      return;
    }
    res.push(root.val);
    dfs(root.left);
    dfs(root.right);
  }
  return res;
};

/**
 * 栈写法
 * @param {TreeNode} root
 * @return {number[]}
 */
const preOrderTraverse1 = function (root) {
  if (root == null) {
    return [];
  }
  const res = [];
  const stack = [];
  stack.push(root);
  while (stack.length !== 0) {
    const node = stack.pop();
    res.push(node.val);
    if (node.right) {
      stack.push(node.right);
    }
    if (node.left) {
      stack.push(node.left);
    }
  }
  return res;
};
