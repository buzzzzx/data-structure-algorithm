/**
 * Algorithm: DP - 最长公共子序列
 * Solution:
 * - 矩阵
 * - 递归
 */

const lcsMatrix = (s1, s2) => {
  const m = s1.length;
  const n = s2.length;
  const l = [];
  const solution = []; // for print lcs
  // initialize l
  for (let i = 0; i <= m; i += 1) {
    l[i] = [];
    solution[i] = [];
    for (let j = 0; j <= n; j += 1) {
      l[i][j] = 0;
      solution[i][j] = "0";
    }
  }

  // fill value
  for (let i = 0; i <= m; i += 1) {
    for (let j = 0; j <= n; j += 1) {
      if (i === 0 || j === 0) {
        l[i][j] = 0;
        solution[i][j] = "0";
      } else {
        if (s1[i - 1] === s2[j - 1]) {
          l[i][j] = l[i - 1][j - 1] + 1;
          solution[i][j] = "diag";
        } else {
          const a = l[i][j - 1];
          const b = l[i - 1][j];
          l[i][j] = a > b ? a : b;
          solution[i][j] = l[i][j] === l[i - 1][j] ? "top" : "left";
        }
      }
    }
  }

  printSolution(solution, s1, m, n);
};

const printSolution = (solution, s, m, n) => {
  let a = m;
  let b = n;
  let answer = "";
  let x = solution[a][b];
  while (x !== "0") {
    if (x === "diag") {
      answer = s[a - 1] + answer;
      a -= 1;
      b -= 1;
    } else if (x === "top") {
      a -= 1;
    } else if (x === "left") {
      b -= 1;
    }
    x = solution[a][b];
  }

  console.log(answer);
};

const lcsRecursive = (s1, s2, m, n, p) => {
  if (m >= s1.length) {
    return 0;
  }

  if (n >= s2.length) {
    return lcsRecursive(s1, s2, m + 1, p, p);
  }

  const a = s1[m];
  const b = s2[n];

  if (a === b) {
    return 1 + lcsRecursive(s1, s2, m + 1, n + 1, n + 1);
  } else {
    return lcsRecursive(s1, s2, m, n + 1, p);
  }
};

// test
lcsMatrix("abcadf", "acbaed");
console.log(lcsRecursive("abcadfiu", "acbaedufi", 0, 0, 0));
