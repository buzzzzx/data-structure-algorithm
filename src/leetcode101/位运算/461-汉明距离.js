/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const hammingDistance = function (x, y) {
  let res = x ^ y;
  let count = 0;
  while (res) {
    count += 1;
    res &= res - 1;
  }
  return count;
};

console.log(hammingDistance(1, 4));
