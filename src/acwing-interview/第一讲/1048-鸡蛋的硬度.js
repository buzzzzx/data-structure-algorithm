// dp1: f(i, j) 表示使用 j 个鸡蛋测量 i 层楼所需要的次数
const eggDrop1 = function (n, m) {
  const dp = [];
  // initial
  for (let i = 0; i <= n; i += 1) {
    dp[i] = [];
    for (let j = 0; j <= m; j += 1) {
      if (i === 1) {
        dp[i][j] = 1;
      } else if (j === 1) {
        dp[i][j] = i;
      } else {
        dp[i][j] = 0;
      }
    }
  }

  for (let i = 2; i <= n; i += 1) {
    for (let j = 2; j <= m; j += 1) {
      dp[i][j] = dp[i][j - 1];
      for (let k = 1; k <= i; k += 1) {
        dp[i][j] = Math.min(
          dp[i][j],
          Math.max(dp[k - 1][j - 1], dp[i - k][j]) + 1
        );
      }
    }
  }

  return dp[n][m];
};

// dp2: f(i, j) 表示使用 j 个鸡蛋测量 i 次能够达到的最高高度
const eggDrop2 = function (n, m) {
  const dp = [];
  // initial
  for (let i = 0; i <= n; i += 1) {
    dp[i] = [];
    for (let j = 0; j <= m; j += 1) {
      dp[i][j] = 0;
    }
  }

  for (let i = 1; i <= n; i += 1) {
    for (let j = 1; j <= m; j += 1) {
      dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j] + 1;
    }
    if (dp[i][m] >= n) {
      return i;
    }
  }

  return 0;
};

// test
console.log(eggDrop1(100, 2));
console.log(eggDrop2(100, 2));
