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
const averageOfLevels = function (root) {
  if (root == null) {
    return null;
  }
  const queue = [];
  const res = [];
  queue.push(root);
  while (queue.length !== 0) {
    const count = queue.length;
    let sum = 0;
    for (let i = 0; i < count; i += 1) {
      const node = queue.shift();
      sum += node.val;
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    res.push(sum / count);
  }

  return res;
};
