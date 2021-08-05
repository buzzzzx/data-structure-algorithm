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
const diameterOfBinaryTree = function (root) {
  let res = 0;
  function dfs(root) {
    if (root == null) {
      return 0;
    }
    let left = dfs(root.left);
    let right = dfs(root.right);
    res = Math.max(res, left + right);
    return Math.max(left, right) + 1;
  }
  dfs(root);
  return res;
};

// 这种递归会导致很多重复的深度计算
const diameterOfBinaryTree1 = function (root) {
  if (root == null) {
    return 0;
  }

  return Math.max(
    depth(root.left) + depth(root.right),
    diameterOfBinaryTree(root.left),
    diameterOfBinaryTree(root.right)
  );
};

function depth(root) {
  if (root == null) {
    return 0;
  }

  return Math.max(depth(root.left), depth(root.right)) + 1;
}
