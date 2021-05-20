/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const myPow = function (x, n) {
  if (n === 0) {
    return 1;
  }

  if (n === 1) {
    return x;
  }

  if (n < 0) {
    x = 1 / x;
    n = -n;
  }

  return n % 2 === 0
    ? myPow(x * x, n / 2)
    : myPow(x * x, Math.floor(n / 2)) * x;
};

console.log(myPow(0.00001, 2147483647));
