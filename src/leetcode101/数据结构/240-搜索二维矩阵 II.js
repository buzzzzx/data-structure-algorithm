/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = function (matrix, target) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  let i = 0;
  let j = cols - 1;
  while (j < cols && j >= 0 && i < rows && i >= 0) {
    if (matrix[i][j] === target) {
      return true;
    }
    if (matrix[i][j] > target) {
      j -= 1;
    }
    if (matrix[i][j] < target) {
      i += 1;
    }
  }

  return false;
};
