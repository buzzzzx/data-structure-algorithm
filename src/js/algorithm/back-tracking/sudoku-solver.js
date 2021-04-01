/**
 * Algorithm: 回溯问题 - 数独解题器
 */

const sudokuSolver = (matrix) => {
  if (solveSudoku(matrix)) {
    return matrix;
  }
  return "No solve";
};

const solveSudoku = (matrix) => {
  let row = 0;
  let col = 0;
  let allFilled = true;

  // check all filled
  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[i].length; j += 1) {
      if (matrix[i][j] === 0) {
        allFilled = false;
        row = i;
        col = j;
        break;
      }
    }
    if (!allFilled) {
      break;
    }
  }

  if (allFilled) {
    return true;
  }

  for (let i = 1; i <= 9; i += 1) {
    if (isSafe(matrix, row, col, i)) {
      matrix[row][col] = i;
      if (solveSudoku(matrix)) {
        return true;
      } else {
        matrix[row][col] = 0;
      }
    }
  }
  return false;
};

const isSafe = (matrix, row, col, num) => {
  return (
    !usedInRow(matrix, row, num) &&
    !usedInCol(matrix, col, num) &&
    !usedInBox(matrix, row - (row % 3), col - (col % 3), num)
  );
};

const usedInRow = (matrix, row, value) => {
  for (let i = 0; i < matrix.length; i += 1) {
    if (matrix[row][i] === value) {
      return true;
    }
  }

  return false;
};

const usedInCol = (matrix, col, value) => {
  for (let i = 0; i < matrix.length; i += 1) {
    if (matrix[i][col] === value) {
      return true;
    }
  }

  return false;
};

const usedInBox = (matrix, r, c, value) => {
  for (let i = 0; i < 3; i += 1) {
    for (let j = 0; j < 3; j += 1) {
      if (matrix[r + i][c + j] === value) {
        return true;
      }
    }
  }

  return false;
};

// test
const sudokuGrid = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9],
];

console.log(sudokuSolver(sudokuGrid));
