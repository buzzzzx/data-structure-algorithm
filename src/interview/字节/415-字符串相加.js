/**
 * 双指针 + 注意进位
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const addStrings = function (num1, num2) {
  const len1 = num1.length;
  const len2 = num2.length;
  let i = len1 - 1;
  let j = len2 - 1;
  let add = 0;
  let res = [];
  while (i >= 0 || j >= 0 || add !== 0) {
    let v1 = i < 0 ? 0 : Number(num1[i]);
    let v2 = j < 0 ? 0 : Number(num2[j]);
    let tmp = v1 + v2 + add;
    if (tmp >= 10) {
      add = 1;
      tmp = tmp % 10;
    } else {
      add = 0;
    }
    res.push(tmp);
    i -= 1;
    j -= 1;
  }

  return res.reverse().join("");
};
