function main(n) {
  let totalThree = n / 3;
  if (totalThree < 3) {
    console.log(0);
    return;
  }
  let rest = totalThree - 3;
  let res = 1;
  for (let i = 1; i <= rest; i += 1) {
    res += i + 1;
  }

  console.log(res);
}

main(21);
