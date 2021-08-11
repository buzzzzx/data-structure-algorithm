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
 * @return {number[][]}
 */
const levelOrder = function (root) {
  if (root == null) {
    return [];
  }

  const queue = [];
  const res = [];
  queue.push(root);
  while (queue.length !== 0) {
    let size = queue.length;
    const tmp = [];
    while (size) {
      const node = queue.shift();
      tmp.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
      size -= 1;
    }
    res.push(tmp);
  }

  return res;
};
