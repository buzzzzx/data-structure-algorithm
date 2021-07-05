/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function (x) {
  if (x === 0) {
    return 0;
  }

  let l, r, mid, sqrt;
  (l = 1), (r = x);
  while (l <= r) {
    mid = l + Math.floor((r - l) / 2);
    sqrt = Math.floor(x / mid);
    if (sqrt === mid) {
      return mid;
    } else if (mid > sqrt) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return r;
};

// 牛顿迭代法
const mySqrt2 = function (x) {
  let a = x;
  while (a * a > x) {
    a = a + Math.floor(x / a) / 2;
  }
  return a;
};
