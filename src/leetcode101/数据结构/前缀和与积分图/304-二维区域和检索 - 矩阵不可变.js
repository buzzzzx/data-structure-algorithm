/**
 * @param {number[][]} matrix
 */
const NumMatrix = function (matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const integral = [];
  for (let i = 0; i <= rows; i += 1) {
    integral[i] = new Array(cols + 1).fill(0);
  }
  for (let i = 1; i <= rows; i += 1) {
    for (let j = 1; j <= cols; j += 1) {
      integral[i][j] =
        integral[i - 1][j] +
        integral[i][j - 1] -
        integral[i - 1][j - 1] +
        matrix[i - 1][j - 1];
    }
  }

  this.integral = integral;
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  return (
    this.integral[row2 + 1][col2 + 1] -
    this.integral[row1][col2 + 1] -
    this.integral[row2 + 1][col1] +
    this.integral[row1][col1]
  );
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
