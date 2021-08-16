/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function (x) {
  if (x === 0 || x === 1) {
    return x;
  }
  let res = -1;
  let l = 1;
  let h = x;
  while (l <= h) {
    let mid = l + ((h - l) >> 2);
    if (mid * mid === x) {
      return mid;
    } else if (mid * mid < x) {
      res = mid;
      l = mid + 1;
    } else {
      h = mid - 1;
    }
  }

  return res;
};
