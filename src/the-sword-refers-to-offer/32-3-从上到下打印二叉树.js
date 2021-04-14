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

  let isEven = false; // 奇数：从左到右；偶数：从右到左

  while (queue.length !== 0) {
    level = queue.shift();

    let vals = [];
    let nextLevel = [];
    while (level.length !== 0) {
      let curr;
      if (isEven) {
        // 从右到左
        curr = level.pop();
        if (curr.right) {
          nextLevel.unshift(curr.right);
        }
        if (curr.left) {
          nextLevel.unshift(curr.left);
        }
      } else {
        // 从左到右
        curr = level.shift();
        if (curr.left) {
          nextLevel.push(curr.left);
        }
        if (curr.right) {
          nextLevel.push(curr.right);
        }
      }
      vals.push(curr.val);
    }
    res.push(vals);
    if (nextLevel.length !== 0) {
      queue.push(nextLevel);
    }

    isEven = !isEven;
  }

  return res;
};
