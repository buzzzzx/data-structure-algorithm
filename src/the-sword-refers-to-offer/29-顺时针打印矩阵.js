/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
const spiralOrder = function (matrix) {
  if (matrix == null || matrix.length === 0) {
    return matrix;
  }

  const res = [];
  let left = 0;
  let right = matrix[0].length - 1;
  let up = 0;
  let down = matrix.length - 1;

  while (1) {
    // 从左到右
    for (let i = left; i <= right; i += 1) {
      res.push(matrix[up][i]);
    }
    up += 1;
    if (up > down) {
      break;
    }
    // 从上到下
    for (let i = up; i <= down; i += 1) {
      res.push(matrix[i][right]);
    }
    right -= 1;
    if (left > right) {
      break;
    }
    // 从右到左
    for (let i = right; i >= left; i -= 1) {
      res.push(matrix[down][i]);
    }
    down -= 1;
    if (up > down) {
      break;
    }
    // 从下到上
    for (let i = down; i >= up; i -= 1) {
      res.push(matrix[i][left]);
    }
    left += 1;
    if (left > right) {
      break;
    }
  }

  return res;
};

// test
console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ])
);
