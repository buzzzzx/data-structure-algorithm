function bonus(arr, s) {
  let tmp = 1;
  for (let i = 1; i < arr.length; i += 1) {
    tmp += arr[0] / arr[i];
  }
  let a = s / tmp;
  let res = [a];
  for (let i = 1; i < arr.length; i += 1) {
    res[i] = (arr[0] * a) / arr[i];
  }
  console.log(res);
}

bonus([30, 27, 8, 14, 7], 34067);
