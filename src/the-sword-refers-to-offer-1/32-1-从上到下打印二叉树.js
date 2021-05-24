/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const levelOrder = function (root) {
  if (root == null) {
    return [];
  }

  const queue = [];
  const res = [];
  queue.push(root);
  while (queue.length !== 0) {
    const node = queue.shift();
    res.push(node.val);
    node.left && queue.push(node.left);
    node.right && queue.push(node.right);
  }

  return res;
};
