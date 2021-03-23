/**
 * 递归是一种解决问题的方法。
 */

// Fibonacci: 0 1 1 2 3 5 8 13 21 ...

// 迭代式写法
function fibonacciIterative(n) {
  let pre1 = 1;
  let pre2 = 0;
  let res = 0;
  if (n === 0) {
    res = pre2;
  } else if (n === 1) {
    res = pre1;
  } else {
    for (let i = 2; i <= n; i += 1) {
      res = pre1 + pre2;
      pre2 = pre1;
      pre1 = res;
    }
  }
  return res;
}

// recursive
function fibonacciRecursive(n) {
  if (n === 0 || n === 1) {
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

// for more performance: use memorization
function fibonacciMemo() {
  const memo = [0, 1];
  const fibonacci = (i) => {
    if (memo[i] != null) {
      return memo[i];
    }

    let res = fibonacci(i - 1) + fibonacci(i - 2);
    memo[i] = res;
    return res;
  };
  return fibonacci;
}

// test
console.log(fibonacciIterative(7));
console.log(fibonacciRecursive(7));
const fib = fibonacciMemo();
console.log(fib(8));
