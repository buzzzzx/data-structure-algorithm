function score(america, china) {
  america.sort((a, b) => a - b);
  china.sort((a, b) => a - b);
  let aLeft = 0;
  let aRight = america.length - 1;
  let cLeft = 0;
  let cRight = china.length - 1;

  let res = 0;

  let flag = true;
  while (flag) {
    if (aLeft === aRight) {
      flag = false;
    }
    if (china[cRight] > america[aRight]) {
      res += 3;
      cRight -= 1;
      aRight -= 1;
    } else if (china[cLeft] > america[aLeft]) {
      res += 3;
      cLeft += 1;
      aLeft += 1;
    } else {
      if (china[cLeft] === america[aRight]) {
        res += 1;
      }
      cLeft += 1;
      aRight -= 1;
    }
  }

  console.log(res);
}

score([8, 7, 5], [7, 4, 9]);
