function main(N, K) {
  let res = 0;
  for (let i = 1; i <= K; i += 1) {
    let tmp = N * i;
    res = Math.max(res, +String(tmp).split("").reverse().join(""));
  }

  console.log(res);
}

main(9, 8);
