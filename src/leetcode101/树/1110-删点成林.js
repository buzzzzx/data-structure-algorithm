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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
const delNodes = function (root, to_delete) {
  if (root == null) {
    return [];
  }

  const res = [];
  const set = new Set();
  to_delete.forEach((del) => set.add(del));
  const d = new TreeNode(to_delete[0]);
  d.left = root;
  dfs(d);

  function dfs(root) {
    if (root == null) {
      return null;
    }
    root.left = dfs(root.left);
    root.right = dfs(root.right);
    if (set.has(root.val)) {
      if (root.left != null) {
        res.push(root.left);
      }
      if (root.right != null) {
        res.push(root.right);
      }
      root = null;
    }
    return root;
  }

  return res;
};
