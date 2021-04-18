/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  // 动态规划解法
  if (s.length === 0) {
    return 0;
  }

  let i;
  let j = 1;
  const dp = [];
  dp[0] = 1;
  const hashmap = {
    [s[0]]: 0,
  };
  while (j < s.length) {
    i = hashmap[s[j]] == null ? -1 : hashmap[s[j]];
    dp[j] = j - i > dp[j - 1] ? dp[j - 1] + 1 : j - i;
    hashmap[s[j]] = j;
    j += 1;
  }

  return Math.max(...dp);
};

// 滑动窗口
const lengthOfLongestSubstring1 = function (s) {
  let res = 0;
  let i = -1;
  let j = 0;
  const hashmap = {};
  while (j < s.length) {
    if (hashmap[s[j]] != null) {
      i = Math.max(i, hashmap[s[j]]);
    }
    res = Math.max(res, j - i);
    hashmap[s[j]] = j;
    j += 1;
  }

  return res;
};

// 暴力法不可取
const lengthOfLongestSubstring2 = function (s) {
  if (s.length === 0) {
    return 0;
  }

  let start = 0;
  let i = 1;
  const dp = [];
  dp[0] = 1;
  let max = dp[0];
  while (i < s.length) {
    let sub = s.substring(start, i);

    if (sub.includes(s[i])) {
      if (max < dp[i - 1]) {
        max = dp[i - 1];
      }
      start = s.indexOf(s[i], start) + 1;
      i = start;
      dp[i] = 1;
    } else {
      dp[i] = dp[i - 1] + 1;
      if (max < dp[i]) {
        max = dp[i];
      }
    }
    i += 1;
  }

  return max;
};

// test
console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbb"));
// console.log(lengthOfLongestSubstring("pwwkew"));
// console.log(lengthOfLongestSubstring("dvdf"));
