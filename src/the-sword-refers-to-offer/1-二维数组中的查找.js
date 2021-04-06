function Find(target, array) {
  if (array == null) {
    return false;
  }

  return FindHelper(target, array, 0, array[0].length - 1);
}

function FindHelper(target, array, row, col) {
  if (col < 0 || row >= array.length) {
    return false;
  }

  const val = array[row][col];
  if (val === target) {
    return true;
  } else if (val > target) {
    return FindHelper(target, array, row, col - 1);
  } else {
    return FindHelper(target, array, row + 1, col);
  }
}

// test
console.log(
  Find(7, [
    [1, 2, 8, 9],
    [2, 4, 9, 12],
    [4, 7, 10, 13],
    [6, 8, 11, 15],
  ])
);

console.log(
  Find(5, [
    [1, 2, 8, 9],
    [2, 4, 9, 12],
    [4, 7, 10, 13],
    [6, 8, 11, 15],
  ])
);

console.log(
  Find(3, [
    [1, 2, 8, 9],
    [2, 4, 9, 12],
    [4, 7, 10, 13],
    [6, 8, 11, 15],
  ])
);
