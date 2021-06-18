const snakeMatrix = function (n, m) {
  let rt = m - 1;
  let rb = n - 1;
  let lt = 0;
  let lb = 0;

  let num = 1;
  const res = [];
  for (let i = 0; i < n; i += 1) {
    res[i] = [];
    for (let j = 0; j < n; j += 1) {
      res[i][j] = 0;
    }
  }

  while (lt <= rb && lb <= rt) {
    for (let i = lb; i <= rt; i += 1) {
      res[lt][i] = num;
      num += 1;
    }
    lt += 1;
    if (lt > rb) {
      break;
    }

    for (let i = lt; i <= rb; i += 1) {
      res[i][rt] = num;
      num += 1;
    }
    rt -= 1;
    if (lb > rt) {
      break;
    }

    for (let i = rt; i >= lb; i -= 1) {
      res[rb][i] = num;
      num += 1;
    }
    rb -= 1;
    if (lt > rb) {
      break;
    }

    for (let i = rb; i >= lt; i -= 1) {
      res[i][lb] = num;
      num += 1;
    }
    lb += 1;
    if (lb > rt) {
      break;
    }
  }

  return res;
};

console.log(snakeMatrix(3, 4));
