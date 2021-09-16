function main(N, Q, ks) {
  let res = [];
  let arr = [];
  for (let i = 0; i < N; i += 1) {
    arr[i] = i;
  }

  for (let count of ks) {
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i] !== undefined) {
        let tmp = 0;
        tmp += arr[i] === 0 ? 0 : arr[i];
        arr[i] = undefined;
        let j = i + 1;

        while (count) {
          if (arr[j - 1] === undefined) {
            tmp += arr[j];
            arr[j] = 0;
          } else {
            while (arr[j] > arr[j - 1] + 1) {
              arr[j] -= 1;
              tmp += 1;
            }
          }
          count -= 1;
          j += 1;
        }

        res.push(tmp);
        break;
      }
    }
  }

  console.log(res);
}

main(5, 3, [3, 3, 2]);
main(5, 3, [0, 0, 1]);
