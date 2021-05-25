/**
 * @param {number} n
 * @return {number}
 */
const nthUglyNumber = function (n) {
  const res = [];
  res[0] = 1;
  let i, j, k;
  i = j = k = 0;
  for (let m = 1; m < n; m += 1) {
    let m2 = res[i] * 2;
    let m3 = res[j] * 3;
    let m5 = res[k] * 5;
    res[m] = Math.min(m2, m3, m5);
    i = res[m] === m2 ? i + 1 : i;
    j = res[m] === m3 ? j + 1 : j;
    k = res[m] === m5 ? k + 1 : k;
  }

  return res[n - 1];
};

console.log(nthUglyNumber(10));
