/**
 * @param {number} c
 * @return {boolean}
 */
const judgeSquareSum = function (c) {
  let left = 0;
  let right = 0;
  while (true) {
    if (right * right === c) {
      return true;
    } else if (right * right < c) {
      right += 1;
    } else {
      break;
    }
  }

  while (left !== right) {
    let tmp = left * left + right * right;
    if (tmp === c) {
      return true;
    } else if (tmp < c) {
      left += 1;
    } else {
      right -= 1;
    }
  }

  return false;
};
