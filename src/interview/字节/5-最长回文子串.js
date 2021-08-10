/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function (s) {
  if (s.length === 0 || s.length === 1) {
    return s;
  }

  let res = "";
  for (let i = 0; i < s.length - 1; i += 1) {
    let tmp1 = expandWithCenter(s, i - 1, i + 1);
    let tmp2 = expandWithCenter(s, i, i + 1);
    if (tmp1.length > tmp2.length) {
      res = res.length > tmp1.length ? res : tmp1;
    } else {
      res = res.length > tmp2.length ? res : tmp2;
    }
  }

  return res;
};

const expandWithCenter = function (s, left, right) {
  if (left < 0 || right >= s.length || s[left] !== s[right]) {
    return s.slice(left + 1, right);
  }

  return expandWithCenter(s, left - 1, right + 1);
};
