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
 * @param {number} targetSum
 * @return {number}
 */
const pathSum = function (root, targetSum) {
  if (root == null) {
    return 0;
  }
  return (
    helper(root, targetSum) +
    pathSum(root.left, targetSum) +
    pathSum(root.right, targetSum)
  );
};

function helper(root, sum) {
  if (root == null) {
    return 0;
  }

  let count = root.val === sum ? 1 : 0;
  count += helper(root.left, sum - root.val);
  count += helper(root.right, sum - root.val);
  return count;
}
