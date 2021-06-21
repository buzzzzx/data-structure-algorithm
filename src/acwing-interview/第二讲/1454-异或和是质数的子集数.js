/**
 * @param {number} n
 * @param {number[]} nums
 * @return {number}
 */
const main = function (n, nums) {
  const M = 8192;
  const MOD = Math.pow(10, 9) + 7;
  let res = 0;
  const dp = [];
  for (let i = 0; i <= 2; i += 1) {
    dp[i] = [];
    for (let j = 1; j < M; j += 1) {
      dp[i][j] = 0;
    }
  }

  dp[0][0] = 1;
  for (let i = 1; i <= n; i += 1) {
    for (let j = 0; j < M; j += 1) {
      dp[i & 1][j] = dp[(i - 1) & 1][j];
      if ((j ^ nums[i]) < M) {
        dp[i & 1][j] = (dp[i & 1][j] + dp[(i - 1) & 1][j ^ nums[i]]) % MOD;
      }
    }
  }

  for (let i = 2; i < M; i += 1) {
    if (isPrime(i)) {
      res = (res + dp[n & 1][i]) % MOD;
    }
  }

  return res;
};

const isPrime = function (num) {
  for (let i = 2; i * i <= num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

// test
console.log(main(3, [1, 2, 3]));
