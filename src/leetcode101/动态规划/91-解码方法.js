/**
 * @param {string} s
 * @return {number}
 */
const numDecodings = function (s) {
  let len = s.length;
  if (len === 0 || s[0] === "0") {
    return 0;
  }

  const dp = [];
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= len; i += 1) {
    if (s[i - 1] === "0") {
      if (s[i - 2] !== "0" && parseInt(s.substr(i - 2, 2)) <= 26) {
        dp[i] = dp[i - 2];
      } else {
        return 0;
      }
    } else {
      dp[i] = dp[i - 1];
      if (s[i - 2] !== "0" && parseInt(s.substr(i - 2, 2)) <= 26) {
        dp[i] = dp[i - 1] + dp[i - 2];
      }
    }
  }

  return dp[len];
};

console.log(numDecodings("1201234"));
