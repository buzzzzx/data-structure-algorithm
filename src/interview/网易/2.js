const l = "abcdefghijklmnopqrstuvwxyz";

function sn(n, k) {
  const dp = [];
  dp[1] = "a";
  for (let i = 2; i <= n; i += 1) {
    dp[i] =
      dp[i - 1] +
      l[i - 1] +
      invert(dp[i - 1])
        .split("")
        .reverse()
        .join("");
  }

  console.log(dp[n]);
  return dp[n][k - 1];
}

function invert(str) {
  let res = "";
  let z = "z".charCodeAt(0);
  for (let i = 0; i < str.length; i += 1) {
    let idx = z - str[i].charCodeAt(0);
    res += l[idx];
  }
  return res;
}

// test
// console.log(invert("abz"));
console.log(sn(5, 11));
