/**
 * Algorithm: DP - 矩阵链相乘
 * 思路：
 * - 使用一个矩阵保存矩阵链的最优代价
 * - 从最小长度的矩阵链开始，寻找所有该长度下所有矩阵链的最优代价，并保存，增加长度直到长度到达矩阵个数
 * - 如何寻找最优代价，遍历该长度下的矩阵链的切分点的所有情况，可以计算该长度的矩阵链的最优代价
 */

const matrixChainOrder = (p) => {
  const n = p.length; // 矩阵的个数为 n - 1
  const m = [];
  const s = [];

  // 长度为 1 的矩阵链的代价
  for (let i = 1; i < n; i += 1) {
    m[i] = [];
    m[i][i] = 0;
  }

  for (let i = 1; i < n; i += 1) {
    s[i] = [];
    for (let j = 1; j < n; j += 1) {
      s[i][j] = 0;
    }
  }

  // 从长度为 2 开始，计算所有该长度的矩阵链的最优代价
  for (let l = 2; l <= n - 1; l += 1) {
    for (let i = 1; i < n - l + 1; i += 1) {
      const j = i + l - 1;
      let min = Number.MAX_SAFE_INTEGER;
      for (let k = i; k < j; k += 1) {
        const cost = m[i][k] + m[k + 1][j] + p[i - 1] * p[k] * p[j];
        if (min > cost) {
          min = cost;
          m[i][j] = min;
          s[i][j] = k;
        }
      }
    }
  }

  printOptimalParenthesis(s, 1, n - 1);
  return m[1][n - 1];
};

const printOptimalParenthesis = (s, i, j) => {
  if (i === j) {
    console.log(i);
    return;
  }
  console.log("(");
  printOptimalParenthesis(s, i, s[i][j]);
  printOptimalParenthesis(s, s[i][j] + 1, j);
  console.log(")");
};

// test
console.log(matrixChainOrder([10, 100, 5, 50, 1]));
// console.log(matrixChainOrder([30, 35, 15, 5, 10, 20, 25]));
