/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  if (s == null) {
    return 0;
  }

  let len = s.length;
  let count = 0;

  const hashmap = {};
  let i = -1,
    j = 0;
  while (j < len) {
    if (hashmap[s[j]] != null) {
      i = Math.max(i, hashmap[s[j]]);
    }
    count = Math.max(count, j - i);
    hashmap[s[j]] = j;
    j += 1;
  }

  return count;
};

// test
console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
