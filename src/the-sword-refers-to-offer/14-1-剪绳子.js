function cutRope(number) {
  let num = number;
  const dp = [];
  for (let i = 0; i < num; i += 1) {
    dp[i] = i;
  }
  dp[num] = 1;

  for (let i = 1; i <= num; i += 1) {
    for (let j = 1; j < i; j += 1) {
      const res = dp[i - j] * j;
      dp[i] = Math.max(res, dp[i]);
    }
  }

  return dp[num];
}

// 数学问题解法
function cutRope1(number) {
  let num = number;
  if (num === 2) {
    return 1;
  }
  if (num === 3) {
    return 2;
  }

  let res = 0;

  const x = num % 3;
  const y = Math.floor(num / 3);
  if (x === 0) {
    res = Math.pow(3, y);
  } else if (x === 1) {
    res = 2 * 2 * Math.pow(3, y - 1);
  } else {
    res = 2 * Math.pow(3, y);
  }

  return res;
}

// test
console.log(cutRope1(8));
