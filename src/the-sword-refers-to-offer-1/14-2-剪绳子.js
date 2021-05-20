/**
 * @param {number} n
 * @return {number}
 */
const cuttingRope = function (n) {
  if (n < 4) {
    return n - 1;
  }
  let res = 1;
  while (n > 4) {
    n -= 3;
    res *= 3;
    res %= 1e9 + 7;
  }

  return (res * n) % (1e9 + 7);
};
