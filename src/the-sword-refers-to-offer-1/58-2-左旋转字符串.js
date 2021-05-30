/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
const reverseLeftWords = function (s, n) {
  return s.substring(n, s.length) + s.substring(0, n);
};
