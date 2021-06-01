/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
const lastRemaining = function (n, m) {
  let pos = 0;
  for (let i = 2; i <= n; i += 1) {
    pos = (pos + m) % i;
  }

  return pos;
};

console.log(lastRemaining(5, 3));
