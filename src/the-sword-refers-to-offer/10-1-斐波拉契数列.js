function Fibonacci(n) {
  if (n === 0 || n === 1) {
    return n;
  }

  let a = 0;
  let b = 1;
  let tmp = 0;
  for (let i = 2; i <= n; i += 1) {
    tmp = a + b;
    a = b;
    b = tmp;
  }

  return b;
}
