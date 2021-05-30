/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
const add = function (a, b) {
  if (b === 0) {
    return a;
  }
  return add(a ^ b, (a & b) << 1);
};
