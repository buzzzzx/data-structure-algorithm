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

  let curr = root;
  const res = [];
  const queue = [];
  queue.push(curr);

  while (queue.length !== 0) {
    curr = queue.shift();
    res.push(curr.val);
    if (curr.left) {
      queue.push(curr.left);
    }
    if (curr.right) {
      queue.push(curr.right);
    }
  }

  return res;
};
