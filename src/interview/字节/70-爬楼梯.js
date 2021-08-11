/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function (n) {
  if (n === 1 || n === 2) {
    return n;
  }
  let a = 1;
  let b = 2;
  let k = 3;
  while (k <= n) {
    let tmp = b;
    b = a + b;
    a = tmp;
    k += 1;
  }

  return b;
};
