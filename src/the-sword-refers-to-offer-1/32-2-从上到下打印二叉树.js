/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
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
  queue.push([root]);
  while (queue.length !== 0) {
    const nodes = queue.pop();
    const tmp = [];
    const level = [];
    while (nodes.length !== 0) {
      const node = nodes.shift();
      tmp.push(node.val);
      node.left && level.push(node.left);
      node.right && level.push(node.right);
    }

    tmp.length !== 0 && res.push(tmp);
    level.length !== 0 && queue.push(level);
  }

  return res;
};
