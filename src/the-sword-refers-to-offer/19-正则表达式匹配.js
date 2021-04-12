/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = function (s, p) {
  const { length: lenS } = s;
  const { length: lenP } = p;

  const f = [];
  for (let i = 0; i <= lenS; i += 1) {
    f[i] = [];
    for (let j = 0; j <= lenP; j += 1) {
      f[i][j] = false;
    }
  }

  f[0][0] = true;
  for (let i = 0; i <= lenS; i += 1) {
    for (let j = 1; j <= lenP; j += 1) {
      if (p[j - 1] === "*") {
        // p[j-1] 是 *

        // 不看
        if (j > 1) {
          f[i][j] = f[i][j - 2];
        }
        // 看
        if (i > 0 && j > 1 && matches(s[i - 1], p[j - 2])) {
          f[i][j] |= f[i - 1][j] || f[i][j - 2]; // 这里用或符号是因为，f[i][j] 的值若在不看的时候已经计算为 true 了，则保持 true 不变
        }
      } else {
        // p[j-1] 是字母
        if (i > 0 && matches(s[i - 1], p[j - 1])) {
          f[i][j] = f[i - 1][j - 1];
        }
      }
    }
  }

  return f[lenS][lenP];
};

const matches = (a, b) => {
  if (a === b) {
    return true;
  } else return b === ".";
};

// test
console.log(isMatch("aa", "a"));
console.log(isMatch("aa", "a*"));
console.log(isMatch("aa", ".*"));
console.log(isMatch("aab", "c*a*b"));
console.log(isMatch("mississippi", "mis*is*p*."));
console.log(isMatch("aaa", "ab*a"));
