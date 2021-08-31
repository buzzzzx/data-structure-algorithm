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
 * @return {void} Do not return anything, modify root in-place instead.
 */
const recoverTree = function (root) {
  let mistake1 = null;
  let mistake2 = null;
  let pre = null;
  inOrderHelper(root);
  if (mistake1 && mistake2) {
    let tmp = mistake1.val;
    mistake1.val = mistake2.val;
    mistake2.val = tmp;
  }

  function inOrderHelper(root) {
    if (root == null) {
      return;
    }
    inOrderHelper(root.left);
    if (pre && root.val < pre.val) {
      if (mistake1) {
        mistake2 = root; // 最小值节点
      } else {
        mistake1 = pre; // 最大值节点
        mistake2 = root;
      }
    }
    pre = root;
    inOrderHelper(root.right);
  }
};

/**
 * 中序遍历，找到第一个升序错误的最大值节点，找到最后一个升序错误的最小值节点，交换顺序
 */
