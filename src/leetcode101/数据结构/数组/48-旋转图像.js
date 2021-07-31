/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = function (matrix) {
  const n = matrix.length - 1;
  for (let i = 0; i <= Math.floor(n / 2); i += 1) {
    for (let j = i; j < n - i; j += 1) {
      const tmp = matrix[i][j];
      matrix[i][j] = matrix[n - j][i];
      matrix[n - j][i] = matrix[n - i][n - j];
      matrix[n - i][n - j] = matrix[j][n - i];
      matrix[j][n - i] = tmp;
    }
  }
};
