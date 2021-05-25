/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  const len = s.length;
  if (len === 1) {
    return 1;
  }

  let l = 0;
  let h = l + 1;
  let res = 0;
  while (h < len) {
    if (s.substring(l, h).includes(s[h])) {
      l += 1;
    } else {
      h += 1;
      res = Math.max(h - l, res);
    }
  }

  return res;
};

console.log(lengthOfLongestSubstring("pwwkew"));
