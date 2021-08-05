/**
 * 华为一面 2021-8-3
 *  暴力还是过了
 * @param str
 * @return {number}
 */
function count(str) {
  if (str.length === 1) {
    return 1;
  }

  let res = 0;
  for (let i = 0; i < str.length; i += 1) {
    dfs(str, str[i], i);
  }

  function dfs(str, tmp, i) {
    if (i === str.length - 1) {
      res = isPalindrome(tmp) ? res + 1 : res;
      return;
    }

    if (isPalindrome(tmp)) {
      res += 1;
    }

    dfs(str, tmp + str[i + 1], i + 1);
  }

  return res;
}

function isPalindrome(str) {
  if (str.length === 1) {
    return true;
  }

  let i = 0;
  let j = str.length - 1;
  while (i < j) {
    if (str[i] !== str[j]) {
      return false;
    }
    i += 1;
    j -= 1;
  }

  return true;
}

// test
console.log(count("aaa"));

/**
 * 动态规划算法
 * @param {string} s
 * @return {number}
 */
const countSubstrings = function (s) {
  const len = s.length;
  if (len === 0) {
    return 0;
  }
  if (len === 1) {
    return 1;
  }

  const dp = [];
  for (let i = 0; i < len; i += 1) {
    dp[i] = [];
    for (let j = 0; j < len; j += 1) {
      dp[i][j] = false;
    }
  }

  let res = 0;

  for (let j = 0; j < len; j += 1) {
    for (let i = 0; i <= j; i += 1) {
      if (s[i] === s[j] && (j - i < 2 || dp[i + 1][j - 1])) {
        dp[i][j] = true;
        res += 1;
      }
    }
  }

  return res;
};

console.log(countSubstrings("aaa"));
