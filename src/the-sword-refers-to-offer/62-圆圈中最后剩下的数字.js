/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
const lastRemaining = function (n, m) {};

// 模拟法过不了会超时，我个蠢货
const lastRemaining1 = function (n, m) {
  const arr = [];
  for (let i = 0; i < n; i += 1) {
    arr[i] = i;
  }
  let idx = 0;
  let cnt = 0;
  let num = n;
  while (num > 1) {
    if (arr[idx] != undefined) {
      cnt += 1;
      if (cnt === m) {
        arr[idx] = undefined;
        cnt = 0;
        num -= 1;
      }
    }
    idx = (idx + 1) % n;
  }

  for (let i = 0; i < n; i += 1) {
    if (arr[i] !== undefined) {
      return arr[i];
    }
  }
};

console.log(lastRemaining(10, 17));
