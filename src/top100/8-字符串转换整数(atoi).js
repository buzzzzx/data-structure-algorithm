/**
 * @param {string} s
 * @return {number}
 */
const myAtoi = function (s) {
  let match = s.trim().match(/^[+-]?\d+/);
  if (match !== null) {
    let num = match[0];
    const MAX = Math.pow(2, 31) - 1;
    const MIN = -Math.pow(2, 31);
    return num > MAX ? MAX : num < MIN ? MIN : num;
  }

  return 0;
};
