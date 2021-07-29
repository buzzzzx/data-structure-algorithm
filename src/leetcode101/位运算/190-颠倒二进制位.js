/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
const reverseBits = function (n) {
  let res = 0;
  for (let i = 0; i < 32 && n > 0; i += 1) {
    res |= (n & 1) << (31 - i);
    n >>>= 1;
  }
  return res >>> 0; // res 转换为无符号数
};
