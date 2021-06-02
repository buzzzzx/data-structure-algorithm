/**
 * @param {number} n
 * @return {number}
 */
const countDigitOne = function (n) {
  let res = 0;
  let high, low, curr, digit;
  high = low = curr = 0;
  digit = 1;
  while (n) {
    curr = n % 10;
    high = Math.floor(n / 10);
    if (curr === 0) {
      res += high * digit;
    } else if (curr === 1) {
      res += high * digit + low + 1;
    } else {
      res += (high + 1) * digit;
    }

    low = low + curr * digit;
    digit *= 10;
    n = high;
  }

  return res;
};

console.log(countDigitOne(32104));
