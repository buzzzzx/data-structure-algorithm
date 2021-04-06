/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

function reConstructBinaryTree(pre, vin) {
  // write code here
  if (pre.length === 0 || vin.length === 0) {
    return null;
  }

  let root = pre[0];
  let index = vin.indexOf(root);
  let left = vin.slice(0, index);
  let right = vin.slice(index + 1, vin.length);

  return {
    val: root,
    left: reConstructBinaryTree(pre.slice(1, 1 + index), left),
    right: reConstructBinaryTree(pre.slice(1 + index, pre.length), right),
  };
}
