function numberOf1(n) {
  let num = n;
  let count = 0;
  while (num) {
    count += 1;
    num = num & (num - 1);
  }

  return count;
}

// flag 会进行 32 次
function NumberOf1(n) {
  let count = 0,
    flag = 1;
  while (flag !== 0) {
    if ((n & flag) !== 0) {
      count++;
    }
    flag = flag << 1;
  }
  return count;
}

console.log(NumberOf1(10));
