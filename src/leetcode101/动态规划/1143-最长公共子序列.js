/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
const longestCommonSubsequence = function (text1, text2) {
  const dp = [];
  let text1Len = text1.length;
  let text2Len = text2.length;
  for (let i = 0; i <= text1Len; i += 1) {
    dp[i] = [];
    for (let j = 0; j <= text2Len; j += 1) {
      dp[i][j] = 0;
    }
  }

  for (let i = 1; i <= text1Len; i += 1) {
    for (let j = 1; j <= text2Len; j += 1) {
      dp[i][j] =
        text1[i - 1] === text2[j - 1]
          ? dp[i - 1][j - 1] + 1
          : Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }

  return dp[text1Len][text2Len];
};
