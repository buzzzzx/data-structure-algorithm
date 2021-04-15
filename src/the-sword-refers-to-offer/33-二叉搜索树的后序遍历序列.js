/**
 * @param {number[]} postorder
 * @return {boolean}
 */
const verifyPostorder = function (postorder) {
  return helper(postorder, 0, postorder.length - 1);
};

const helper = function (postorder, left, right) {
  if (left >= right) {
    return true;
  }

  let mid = left;
  while (postorder[mid] < postorder[right]) {
    mid += 1;
  }

  // check right
  let tmp = mid + 1;
  while (tmp < right) {
    if (postorder[tmp] < postorder[right]) {
      return false;
    }
    tmp += 1;
  }

  return helper(postorder, left, mid - 1) && helper(postorder, mid, right - 1);
};

// console.log(verifyPostorder([1, 6, 3, 2, 5]));
console.log(verifyPostorder([1, 3, 2, 6, 5]));
