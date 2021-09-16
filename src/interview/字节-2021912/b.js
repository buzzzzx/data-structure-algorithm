function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

function isSym(preOrder, inOrder) {
  let root = buildTree(preOrder, inOrder);
  let maxNode = root.val;
  let symNode = root.val;

  let res = helper(root.left, root.right);

  if (res) {
    return symNode;
  } else {
    return maxNode;
  }

  function helper(left, right) {
    if (left == null && right == null) {
      return true;
    } else if (left == null) {
      maxNode = Math.max(maxNode, right.val);
      return false;
    } else if (right == null) {
      maxNode = Math.max(maxNode, left.val);
      return false;
    } else {
      if (left.val > maxNode) {
        maxNode = left.val;
        symNode = right.val;
      }
      if (right.val > maxNode) {
        maxNode = right.val;
        symNode = left.val;
      }
      return helper(left.left, right.right) && helper(left.right, right.left);
    }
  }
}

function buildTree(preorder, inorder) {
  if (preorder.length === 0) {
    return null;
  }
  if (preorder.length === 1) {
    return new TreeNode(preorder[0]);
  }

  let rootIdx = inorder.indexOf(preorder[0]);
  const root = new TreeNode(preorder[0]);
  const leftIn = inorder.slice(0, rootIdx);
  const rightIn = inorder.slice(rootIdx + 1);
  const leftPre = preorder.slice(1, rootIdx + 1);
  const rightPre = preorder.slice(rootIdx + 1);
  root.left = buildTree(leftPre, leftIn);
  root.right = buildTree(rightPre, rightIn);
  return root;
}

console.log(isSym([1, 3, 5, 7, 2], [5, 3, 1, 2, 7]));
