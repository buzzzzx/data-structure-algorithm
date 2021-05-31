/**
 * @param {number[]} a
 * @return {number[]}
 */
const constructArr = function (a) {
  const len = a.length;
  const res = [];

  let curr = 1;
  for (let i = 0; i < len; i += 1) {
    res[i] = curr;
    curr *= a[i];
  }
  curr = 1;
  for (let i = len - 1; i >= 0; i -= 1) {
    res[i] *= curr;
    curr *= a[i];
  }

  return res;
};
