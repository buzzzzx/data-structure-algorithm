/**
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {
  let res = 0;
  let n = x;
  while (n !== 0) {
    res = res * 10 + (n % 10);
    n = (n / 10) | 0; // JS 将数字存储为 64 浮点数，但是在进行位运算之前，JS 将数字转换为 32 位有符号整数（取低位 32 位），执行按位操作后，结果将转换回 64 位
  }

  // return res > Math.pow(2, 31) - 1 || res < Math.pow(-2, 31) ? 0 : res;
  return (res | 0) === res ? res : 0;
};

// console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
