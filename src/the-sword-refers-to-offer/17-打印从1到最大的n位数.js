function printNumbers(n) {
  if (n === 0) {
    return [];
  }

  const max = Math.pow(10, n) - 1;
  const res = [];
  for (let i = 1; i <= max; i += 1) {
    res.push(i);
  }

  return res;
}
