/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = function (board, word) {
  const rows = board.length;
  const cols = board[0].length;
  const visited = [];
  for (let i = 0; i < rows; i += 1) {
    visited[i] = [];
    for (let j = 0; j < cols; j += 1) {
      visited[i][j] = false;
    }
  }

  for (let i = 0; i < rows; i += 1) {
    for (let j = 0; j < cols; j += 1) {
      if (dfs(board, word, i, j, visited, 0)) {
        return true;
      }
    }
  }

  return false;
};

const dfs = (board, word, i, j, visited, pos) => {
  if (pos === word.length) {
    return true;
  }

  if (i >= board.length || i < 0 || j >= board[0].length || j < 0) {
    return false;
  }

  if (visited[i][j] || board[i][j] !== word[pos]) {
    return false;
  }

  visited[i][j] = true;
  if (dfs(board, word, i - 1, j, visited, pos + 1)) {
    return true;
  }

  if (dfs(board, word, i + 1, j, visited, pos + 1)) {
    return true;
  }

  if (dfs(board, word, i, j + 1, visited, pos + 1)) {
    return true;
  }

  if (dfs(board, word, i, j - 1, visited, pos + 1)) {
    return true;
  }

  visited[i][j] = false;
  return false;
};

console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCB"
  )
);
