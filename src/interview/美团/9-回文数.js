/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }

  let m = x;
  let n = 0;
  while (m > n) {
    n = n * 10 + (m % 10);
    m = Math.floor(m / 10);
  }

  return m === n || m === Math.floor(n / 10);
};
