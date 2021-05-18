/**
 * @param {number} n
 * @return {number}
 */
const numWays = function (n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  const cache = [1, 1];
  for (let i = 2; i <= n; i += 1) {
    cache[i] = (cache[i - 1] + cache[i - 2]) % (1e9 + 7);
  }

  return cache[n];
};
