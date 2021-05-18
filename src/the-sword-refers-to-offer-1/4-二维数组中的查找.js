/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const findNumberIn2DArray = function (matrix, target) {
  const n = matrix.length; // rows
  const m = n && matrix[0].length; // cols
  let row = 0;
  let col = m - 1;

  while (row < n && col >= 0) {
    const value = matrix[row][col];
    if (target === value) {
      return true;
    } else if (target < value) {
      col -= 1;
    } else {
      row += 1;
    }
  }

  return false;
};

console.log(
  findNumberIn2DArray(
    [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ],
    23
  )
);
