function test(arr, m) {
  let res = 0;
  for (let i = 0; i < arr.length - 1; i += 1) {
    for (let j = i + 1; j < arr.length; j += 1) {
      if (arr[i] + arr[j] <= m) {
        res += 1;
      }
    }
  }

  return res;
}

// test
console.log(test([7, -1, -1], 9));

// 构建输入
var line;
while ((line = readline())) {
  let nums = line.split(" ").map((s) => Number(s));
  let m = +readline();

  console.log(test(nums, m));
}
