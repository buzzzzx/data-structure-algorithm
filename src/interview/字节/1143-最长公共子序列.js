/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
const longestCommonSubsequence = function (text1, text2) {
  const len1 = text1.length;
  const len2 = text2.length;
  const dp = [];
  for (let i = 0; i <= len1; i += 1) {
    dp[i] = [];
    for (let j = 0; j <= len2; j += 1) {
      dp[i][j] = 0;
    }
  }

  for (let i = 1; i <= len1; i += 1) {
    for (let j = 1; j <= len2; j += 1) {
      dp[i][j] =
        text1[i - 1] === text2[j - 1]
          ? dp[i - 1][j - 1] + 1
          : Math.max(dp[i][j - 1], dp[i - 1][j]);
    }
  }

  return dp[len1][len2];
};

console.log(longestCommonSubsequence("abcde", "ace"));
