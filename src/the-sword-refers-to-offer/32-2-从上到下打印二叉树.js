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

  const res = [];
  const queue = [];
  queue.push([root]);
  let level;

  while (queue.length !== 0) {
    level = queue.shift();

    let vals = [];
    let nextLevel = [];
    while (level.length !== 0) {
      let curr = level.shift();
      vals.push(curr.val);

      if (curr.left) {
        nextLevel.push(curr.left);
      }
      if (curr.right) {
        nextLevel.push(curr.right);
      }
    }
    res.push(vals);
    if (nextLevel.length !== 0) {
      queue.push(nextLevel);
    }
  }

  return res;
};
