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
const zigzagLevelOrder = function (root) {
  if (root == null) {
    return [];
  }
  const res = [];
  const queue = [];
  queue.push(root);
  let flag = true;
  while (queue.length !== 0) {
    let size = queue.length;
    const tmp = [];
    while (size) {
      const node = queue.shift();
      if (flag) {
        tmp.push(node.val);
      } else {
        tmp.unshift(node.val);
      }
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
      size -= 1;
    }
    res.push(tmp);
    flag = !flag;
  }

  return res;
};
