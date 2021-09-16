function rank(arr) {
  let max = -1;
  for (let kv of arr) {
    max = Math.max(max, kv[0]);
  }

  arr.sort((a, b) => {
    if (a[1] === b[1]) {
      return b[0] - a[0];
    }
    return b[1] - a[1];
  });
  let count = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i][0] === max) {
      if (arr[i - 1][1] === arr[i][1]) {
        count -= 1;
      }
      console.log(count + 1, arr[i][1]);
    }
    count += 1;
  }
}

rank([
  [1, 100],
  [1, 100],
  [1, 200],
  [2, 200],
  [3, 300],
  [3, 300],
  [3, 400],
  [3, 400],
  [1, 400],
  [1, 500],
  [1, 500],
]);
