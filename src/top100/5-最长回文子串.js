/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function (s) {
  const len = s.length;
  let maxLen = 0;
  let begin = 0;
  for (let m = 0; m < len; m += 1) {
    let l1 = expandAroundCenter(s, m, m + 1);
    let l2 = expandAroundCenter(s, m - 1, m + 1);
    let l = Math.max(l1, l2);
    if (l > maxLen) {
      maxLen = l;
      begin = m - Math.floor((l - 1) / 2);
    }
  }
  return s.substring(begin, begin + maxLen);
};

const expandAroundCenter = function (s, left, right) {
  let i = left,
    j = right;
  while (i >= 0 && j < s.length && s[i] === s[j]) {
    i -= 1;
    j += 1;
  }
  return j - i - 1;
};

// 动态规划
const longestPalindrome2 = function (s) {
  const len = s.length;
  if (len < 2) {
    return s;
  }
  const dp = [];
  // initial dp
  for (let i = 0; i < len; i += 1) {
    dp[i] = [];
    for (let j = 0; j < len; j += 1) {
      dp[i][j] = i === j;
    }
  }

  let maxLen = 1;
  let begin = 0;

  // L 表示子串的长度
  for (let L = 2; L <= len; L += 1) {
    // i 表示左边界
    for (let i = 0; i < len; i += 1) {
      // j 表示右边界
      let j = i + L - 1;
      if (j >= len) {
        break;
      }

      if (s[i] === s[j]) {
        if (j - i <= 2) {
          dp[i][j] = true;
        } else {
          dp[i][j] = dp[i + 1][j - 1];
        }
      } else {
        dp[i][j] = false;
      }

      if (dp[i][j] && L > maxLen) {
        maxLen = L;
        begin = i;
      }
    }
  }

  return s.substring(begin, begin + maxLen);
};

// 暴力法，用了两个指针
const longestPalindrome1 = function (s) {
  let res = "";
  const len = s.length;
  for (let i = 0; i < len; i += 1) {
    res = helper(s, i, len - 1, res);
  }

  return res;
};

const helper = function (s, low, high, res) {
  let i = low,
    j = high;
  while (j - i >= 1) {
    if (s[i] !== s[j]) {
      return helper(s, low, high - 1, res);
    }
    i += 1;
    j -= 1;
  }
  if (high - low + 1 > res.length) {
    return s.substring(low, high + 1);
  }

  return res;
};

// test
console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));
// console.log(longestPalindrome("xaabacxcabaaxcabaax"));
