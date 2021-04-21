/**
 * @param {number} n
 * @return {number}
 */
const countDigitOne = function (n) {
  let res = 0;
  let num = n;
  let low = 0;
  let high;
  let curr;
  let digit = 1;
  while (num !== 0) {
    curr = num % 10;
    high = Math.floor(num / 10);

    if (curr === 0) {
      res += high * digit;
    } else if (curr === 1) {
      res += high * digit + low + 1;
    } else {
      res += (high + 1) * digit;
    }

    num = high;
    low += curr * digit;
    digit *= 10;
  }

  return res;
};

// test
console.log(countDigitOne(12));
console.log(countDigitOne(32104));
