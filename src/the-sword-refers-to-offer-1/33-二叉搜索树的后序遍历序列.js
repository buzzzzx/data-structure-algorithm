/**
 * @param {number[]} postorder
 * @return {boolean}
 */
const verifyPostorder = function (postorder) {
  const len = postorder.length;
  if (len === 0 || len === 1) {
    return true;
  }

  const root = postorder[len - 1];
  let index = len - 1;
  for (let i = 0; i < len - 1; i += 1) {
    if (postorder[i] > root) {
      index = i;
      break;
    }
  }

  // check right
  for (let i = index + 1; i < len - 1; i += 1) {
    if (postorder[i] < root) {
      return false;
    }
  }

  return (
    verifyPostorder(postorder.slice(0, index)) &&
    verifyPostorder(postorder.slice(index, len - 1))
  );
};

console.log(verifyPostorder([1, 2, 5, 10, 6, 9, 4, 3]));
