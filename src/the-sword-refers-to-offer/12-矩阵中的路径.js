function hasPath(matrix, word) {
  const visited = [];
  const rows = matrix.length;
  const cols = matrix[0].length;

  for (let i = 0; i < rows; i += 1) {
    visited[i] = [];
    for (let j = 0; j < cols; j += 1) {
      visited[i][j] = 0;
    }
  }

  for (let i = 0; i < rows; i += 1) {
    for (let j = 0; j < cols; j += 1) {
      if (findPath(matrix, word, visited, i, j, 0)) {
        return true;
      }
    }
  }

  return false;
}

function findPath(matrix, word, visited, r, c, i) {
  if (i === word.length) {
    return true;
  }

  const rows = matrix.length;
  const cols = matrix[0].length;

  if (r < 0 || r >= rows || c < 0 || c >= cols) {
    return false;
  }

  if (visited[r][c] === 1) {
    return false;
  }

  if (matrix[r][c] === word[i]) {
    visited[r][c] = 1;

    // right
    if (findPath(matrix, word, visited, r, c + 1, i + 1)) {
      return true;
    }

    // left
    if (findPath(matrix, word, visited, r, c - 1, i + 1)) {
      return true;
    }

    // up
    if (findPath(matrix, word, visited, r - 1, c, i + 1)) {
      return true;
    }

    // down
    if (findPath(matrix, word, visited, r + 1, c, i + 1)) {
      return true;
    }

    visited[r][c] = 0;
    return false;
  }
}

console.log(
  hasPath(
    [
      ["a", "b", "c", "e"],
      ["s", "f", "c", "s"],
      ["a", "d", "e", "e"],
    ],
    "abcced"
  )
);

console.log(
  hasPath(
    [
      ["a", "b", "c", "e"],
      ["s", "f", "c", "s"],
      ["a", "d", "e", "e"],
    ],
    "abcb"
  )
);
