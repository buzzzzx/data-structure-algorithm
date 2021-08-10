/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  const len = s.length;
  if (len === 0 || len === 1) {
    return len;
  }
  let i = -1;
  let j = 0;
  const map = {};
  let res = 1;
  while (j < len) {
    if (map[s[j]] !== undefined && i < map[s[j]]) {
      i = map[s[j]];
    }
    map[s[j]] = j;
    res = Math.max(res, j - i);
    j += 1;
  }
  return res;
};

console.log(lengthOfLongestSubstring("abba"));
