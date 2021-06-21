/**
 *
 * @param {number} n
 * @param {number} m
 * @param {number[]} ms
 */
const hire = function (n, m, ms) {
  let pos = 0;
  for (let i = 2; i <= n; i += 1) {
    pos = (pos + ms[(n - i) % m]) % i;
  }

  return pos;
};

console.log(hire(4, 2, [3, 1]));
