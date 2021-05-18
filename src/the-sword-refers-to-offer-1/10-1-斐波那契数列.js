/**
 * @param {number} n
 * @return {number}
 */
const fib = function (n) {
  if (n === 0 || n === 1) {
    return n;
  }
  let a = 0;
  let b = 1;
  let i = 2;
  while (i <= n) {
    let tmp = b % (1e9 + 7);
    b = (b + a) % (1e9 + 7);
    a = tmp;
    i += 1;
  }

  return b;
};

const fib1 = function (n) {
  if (n === 0 || n === 1) {
    return n;
  }
  const res = [];
  res[0] = 0;
  res[1] = 1;
  for (let i = 2; i <= n; i += 1) {
    res[i] = (res[i - 1] + res[i - 2]) % (1e9 + 7);
  }

  return res[n];
};
