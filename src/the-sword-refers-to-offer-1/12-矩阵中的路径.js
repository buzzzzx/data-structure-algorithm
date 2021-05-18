/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = function (board, word) {
  const visited = [];
  // initial visited
  for (let i = 0; i < board.length; i += 1) {
    visited[i] = [];
    for (let j = 0; j < board[0].length; j += 1) {
      visited[i][j] = false;
    }
  }

  for (let i = 0; i < board.length; i += 1) {
    for (let j = 0; j < board[0].length; j += 1) {
      if (helper(board, visited, word, 0, i, j)) {
        return true;
      }
    }
  }

  return false;
};

const helper = function (board, visited, word, idx, i, j) {
  if (idx === word.length) {
    return true;
  }

  if (i >= board.length || i < 0 || j >= board[0].length || j < 0) {
    return false;
  }

  if (visited[i][j]) {
    return false;
  }

  if (board[i][j] !== word[idx]) {
    return false;
  }

  visited[i][j] = true;
  if (helper(board, visited, word, idx + 1, i, j + 1)) {
    return true;
  }
  if (helper(board, visited, word, idx + 1, i + 1, j)) {
    return true;
  }
  if (helper(board, visited, word, idx + 1, i - 1, j)) {
    return true;
  }
  if (helper(board, visited, word, idx + 1, i, j - 1)) {
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
    "ABCCED"
  )
);
console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCD"
  )
);
