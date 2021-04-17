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

  const res = [];
  bfs(root, res);
  return `[${res.join(",")}]`;
};

const bfs = function (root, res) {
  const queue = [];
  queue.push(root);
  while (queue.length !== 0) {
    let curr = queue.shift();
    if (curr == null) {
      res.push("null");
    } else {
      res.push(`${curr.val}`);
      queue.push(curr.left);
      queue.push(curr.right);
    }
  }
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

  const root = new TreeNode(parseInt(copy[0]));
  let i = 1;
  const queue = [];
  queue.push(root);
  while (queue.length !== 0) {
    let curr = queue.shift();
    if (copy[i] !== "null") {
      let left = new TreeNode(parseInt(copy[i]));
      curr.left = left;
      queue.push(left);
    }
    i += 1;

    if (copy[i] !== "null") {
      let right = new TreeNode(parseInt(copy[i]));
      curr.right = right;
      queue.push(right);
    }
    i += 1;
  }

  return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
