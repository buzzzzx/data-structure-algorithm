/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
const serialize = function (root) {
  if (root == null) {
    return "[]";
  }

  const queue = [];
  const res = [];
  queue.push(root);
  while (queue.length !== 0) {
    let curr = queue.shift();
    if (curr != null) {
      res.push(curr.val);
      queue.push(curr.left);
      queue.push(curr.right);
    } else {
      res.push("null");
    }
  }

  return `[${res.join(",")}]`;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
const deserialize = function (data) {
  if (data === "[]") {
    return null;
  }

  const copy = data.slice(1, data.length - 1).split(",");
  const root = new TreeNode(copy[0]);
  const queue = [];
  queue.push(root);
  let i = 1;
  while (queue.length !== 0) {
    let curr = queue.shift();
    if (copy[i] !== "null") {
      curr.left = new TreeNode(copy[i]);
      queue.push(curr.left);
    }
    i += 1;
    if (copy[i] !== "null") {
      curr.right = new TreeNode(copy[i]);
      queue.push(curr.right);
    }
    i += 1;
  }

  return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
