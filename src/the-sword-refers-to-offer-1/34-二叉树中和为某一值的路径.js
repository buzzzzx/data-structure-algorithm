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
 * @param {number} target
 * @return {number[][]}
 */
const pathSum = function (root, target) {
  if (root == null) {
    return [];
  }
  const res = [];
  helper(root, target, res, []);

  return res;
};

const helper = function (root, target, res, tmp) {
  const val = root.val;
  tmp.push(val);

  if (root.left == null && root.right == null) {
    if (val === target) {
      res.push(tmp.slice(0));
    }
  } else if (root.left == null) {
    helper(root.right, target - val, res, tmp);
  } else if (root.right == null) {
    helper(root.left, target - val, res, tmp);
  } else {
    helper(root.left, target - val, res, tmp);
    helper(root.right, target - val, res, tmp);
  }

  tmp.pop();
};
