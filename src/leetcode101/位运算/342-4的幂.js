/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfFour = function (n) {
  while (n >= 4) {
    if (n % 4 !== 0) {
      return false;
    }
    n = n >> 2;
  }

  return n === 1;
};

console.log(isPowerOfFour(5));
