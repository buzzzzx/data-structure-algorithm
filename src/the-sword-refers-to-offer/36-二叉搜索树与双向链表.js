/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
const treeToDoublyList = function (root) {
  if (root == null) {
    return root;
  }

  let head;
  let pre;

  function dfs(root) {
    if (root == null) {
      return;
    }

    dfs(root.left);

    if (pre == null) {
      head = root;
    } else {
      pre.right = root;
    }
    root.left = pre;
    pre = root;

    dfs(root.right);
  }

  dfs(root);

  head.left = pre;
  pre.right = head;

  return head;
};
