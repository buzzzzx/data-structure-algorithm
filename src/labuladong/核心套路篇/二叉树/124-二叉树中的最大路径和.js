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
 * @return {number}
 */
const maxPathSum = function (root) {
  let res = -Infinity;

  function helper(root) {
    if (root == null) {
      return 0;
    }

    let left = Math.max(helper(root.left), 0);
    let right = Math.max(helper(root.right), 0);

    res = Math.max(res, left + right + root.val);
    return Math.max(left, right) + root.val;
  }

  helper(root);
  return res;
};

/**
 * 后序遍历的思想
 * 递归计算左右子树的最大贡献值，只有在贡献值大于 0 时，才会有贡献
 * 递归的过程中更新 res，返回以 root 为根节点的某一边的最大值
 */
