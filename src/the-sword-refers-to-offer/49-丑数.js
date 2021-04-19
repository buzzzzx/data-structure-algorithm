/**
 * @param {number} n
 * @return {number}
 */
const nthUglyNumber = function (n) {
  if (n <= 0) {
    return 0;
  }

  const arr = [];
  arr[0] = 1;
  let id2 = 0,
    id3 = 0,
    id5 = 0;
  for (let i = 1; i < n; i += 1) {
    let m2 = arr[id2] * 2;
    let m3 = arr[id3] * 3;
    let m5 = arr[id5] * 5;
    let min = Math.min(m2, m3, m5);
    arr[i] = min;
    if (min === m2) {
      id2 += 1;
    }
    if (min === m3) {
      id3 += 1;
    }
    if (min === m5) {
      id5 += 1;
    }
  }

  return arr[n - 1];
};

// test
console.log(nthUglyNumber(10));
