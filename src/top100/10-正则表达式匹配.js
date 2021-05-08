/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = function (s, p) {
  if (s == null || p == null) {
    return false;
  }

  let sLen = s.length;
  let pLen = p.length;

  const dp = [];
  // initial
  for (let i = 0; i <= sLen; i += 1) {
    dp[i] = [];
    for (let j = 0; j <= pLen; j += 1) {
      dp[i][j] = false;
    }
  }

  dp[0][0] = true;
  for (let i = 0; i <= sLen; i += 1) {
    for (let j = 1; j <= pLen; j += 1) {
      if (p[j - 1] === "*") {
        // not need *
        if (j > 1) {
          dp[i][j] = dp[i][j - 2];
        }

        // need *
        if (i > 0 && j > 1 && matches(s[i - 1], p[j - 2])) {
          dp[i][j] |= dp[i - 1][j] || dp[i][j - 2];
        }
      } else {
        if (i > 0 && matches(s[i - 1], p[j - 1])) {
          dp[i][j] = dp[i - 1][j - 1];
        }
      }
    }
  }

  // console.log(dp);

  return dp[sLen][pLen];
};

const matches = (a, b) => {
  if (a === b) {
    return true;
  } else return b === ".";
};

// test
console.log(isMatch("aaa", "a*a"));
// console.log(isMatch("ab", ".*c"));
// console.log(isMatch("aa", "a"));
// console.log(isMatch("ab", ".*"));
// console.log(isMatch("aab", "c*a*b"));
// console.log(isMatch("mississippi", "mis*is*p*."));
