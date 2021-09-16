function main(arr) {
  let startEndArr = [];
  let maxEnd = 0;
  for (let i = 0; i < arr.length; i += 1) {
    let start = arr[i][0];
    let end = arr[i][0] + arr[i][1];
    startEndArr[i] = [start, end];
    maxEnd = Math.max(maxEnd, end);
  }

  let res = 0;
  for (let i = 1; i <= maxEnd; i += 1) {
    let count = 0;
    for (let j = 0; j < startEndArr.length; j += 1) {
      let task = startEndArr[j];
      if (task[0] <= i && task[1] >= i) {
        count += 1;
      }
    }
    res = Math.max(res, count);
  }

  console.log(res);
}

main([
  [1, 2],
  [2, 3],
]);

main([
  [1, 2],
  [2, 3],
  [3, 5],
  [4, 3],
]);
