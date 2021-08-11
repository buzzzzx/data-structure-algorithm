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
 * @return {number[]}
 */
const inorderTraversal = function (root) {
  if (root == null) {
    return [];
  }

  const stack = [];
  const res = [];
  stack.push(root);
  while (stack.length !== 0) {
    let peek = stack[stack.length - 1];
    while (peek.left) {
      stack.push(peek.left);
      peek = peek.left;
    }
    while (stack.length !== 0) {
      const node = stack.pop();
      res.push(node.val);
      if (node.right) {
        stack.push(node.right);
        break;
      }
    }
  }

  return res;
};
