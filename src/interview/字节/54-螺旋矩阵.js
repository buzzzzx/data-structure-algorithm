/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = function (matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  let lt = 0; // row
  let rt = cols - 1; // col
  let rb = rows - 1; // row
  let lb = 0; // col

  const res = [];

  while (true) {
    for (let i = lb; i <= rt; i += 1) {
      res.push(matrix[lt][i]);
    }
    lt += 1;
    if (lt > rb) {
      break;
    }

    for (let i = lt; i <= rb; i += 1) {
      res.push(matrix[i][rt]);
    }
    rt -= 1;
    if (rt < lb) {
      break;
    }

    for (let i = rt; i >= lb; i -= 1) {
      res.push(matrix[rb][i]);
    }
    rb -= 1;
    if (rb < lt) {
      break;
    }

    for (let i = rb; i >= lt; i -= 1) {
      res.push(matrix[i][lb]);
    }
    lb += 1;
    if (lb > rt) {
      break;
    }
  }

  return res;
};

console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
