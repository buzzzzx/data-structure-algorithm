/**
 * @param {number} n
 * @return {number}
 */
const sumNums = function (n) {
  let sum = n;
  n >= 1 && (sum += sumNums(n - 1));
  return sum;
};
