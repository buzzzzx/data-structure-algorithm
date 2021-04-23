/**
 * @param {number[]} a
 * @return {number[]}
 */
const constructArr = function (a) {
  let len = a.length;
  let res = [];
  let acc = 1;
  for (let i = 0; i < len; i += 1) {
    res.push(acc);
    acc *= a[i];
  }
  acc = 1;
  for (let i = len - 1; i >= 0; i -= 1) {
    res[i] *= acc;
    acc *= a[i];
  }

  return res;
};

// test
console.log(constructArr([1, 2, 3, 4, 5]));
