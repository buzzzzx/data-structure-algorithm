/**
 * @param {string} str
 * @return {number}
 */
const strToInt = function (str) {
  const INT_MAX = 2 ** 31 - 1;
  const INT_MIN = -(2 ** 31);
  const match = str.match(/^\s*[+-]?\d+.*$/);
  if (match == null) {
    return 0;
  }
  let res = match[0];
  return Number(res) > INT_MAX
    ? INT_MAX
    : Number(res) < INT_MIN
    ? INT_MIN
    : Number(res);
};
