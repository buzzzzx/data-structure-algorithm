/**
 * @param {number} n
 * @return {number}
 */
const findNthDigit = function (n) {
  let digit = 1; // 每个数字的位数
  let start = 1; // 这种位数下的数字范围的开始数字
  let count = 9; // 这种位数下的所有数字一共占多少位

  let m = n;

  while (m > count) {
    m -= count;
    digit += 1;
    start *= 10;
    count = digit * start * 9;
  }

  let num = start + Math.floor((m - 1) / digit); // n 对应的数字
  return parseInt(num.toString()[(m - 1) % digit]);
};
