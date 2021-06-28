/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
const minDistance = function (word1, word2) {
  let lenWord1 = word1.length;
  let lenWord2 = word2.length;
  const dp = [];
  for (let i = 0; i <= lenWord1; i += 1) {
    dp[i] = [];
    for (let j = 0; j <= lenWord2; j += 1) {
      dp[i][j] = 0;
      if (i === 0) {
        dp[i][j] = j;
      }
      if (j === 0) {
        dp[i][j] = i;
      }
    }
  }

  for (let i = 1; i <= lenWord1; i += 1) {
    for (let j = 1; j <= lenWord2; j += 1) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + 1;
      }
    }
  }

  return dp[lenWord1][lenWord2];
};

console.log(minDistance("sea", "eat"));
console.log(minDistance("s", "s"));
