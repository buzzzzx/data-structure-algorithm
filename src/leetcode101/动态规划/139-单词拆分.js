/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
const wordBreak = function (s, wordDict) {
  const dp = [];
  for (let i = 0; i <= s.length; i += 1) {
    dp[i] = false;
  }
  dp[0] = true;
  for (let i = 1; i <= s.length; i += 1) {
    for (let word of wordDict) {
      let len = word.length;
      if (i >= len && s.slice(i - len, i) === word) {
        dp[i] = dp[i] || dp[i - len];
      }
    }
  }

  return dp[s.length];
};

console.log(wordBreak("aaaaaaa", ["aaaa", "aaa"]));
console.log(wordBreak("applepenapple", ["apple", "pen"]));
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]));
