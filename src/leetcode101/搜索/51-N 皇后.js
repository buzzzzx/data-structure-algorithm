/**
 * @param {number} n
 * @return {string[][]}
 */
const solveNQueens = function (n) {
  if (n === 1) {
    return [["Q"]];
  }
  const board = [];
  for (let i = 0; i < n; i += 1) {
    board[i] = new Array(n).fill(".");
  }
  const cols = new Array(n).fill(false);
  const lDiag = new Array(2 * n - 1).fill(false); // / 行下标与列下标之和相等
  const rDiag = new Array(2 * n - 1).fill(false); // \ 行下标与列下标之差相等
  const res = [];
  dfs(res, board, cols, lDiag, rDiag, 0, n);
  return res;
};

const dfs = (res, board, cols, lDiag, rDiag, row, n) => {
  if (row === n) {
    const tmp = [];
    for (let arr of board) {
      tmp.push(arr.join(""));
    }
    res.push(tmp);
    return;
  }

  for (let i = 0; i < n; i += 1) {
    if (cols[i] || lDiag[row + i] || rDiag[n - row + i - 1]) {
      continue;
    }
    board[row][i] = "Q";
    cols[i] = lDiag[row + i] = rDiag[n - row + i - 1] = true;
    dfs(res, board, cols, lDiag, rDiag, row + 1, n);
    board[row][i] = ".";
    cols[i] = lDiag[row + i] = rDiag[n - row + i - 1] = false;
  }
};

console.log(solveNQueens(4));
