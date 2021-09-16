// let input;
// while ((input = read_line())) {
//   let arr = input
//     .slice(1, -1)
//     .split(",")
//     .map((n) => Number(n));
//   let N = +read_line();
//
//   main(arr, N);
// }

function main(arr, N) {
  let map = {};
  for (let v of arr) {
    map[v] = map[v] === undefined ? 1 : map[v] + 1;
  }

  let keys = [...Object.keys(map)].sort((a, b) => {
    if (map[a] === map[b]) {
      return a - b;
    }
    return map[b] - map[a];
  });

  if (N > keys.length) {
    console.log("-1 -1");
  } else {
    console.log(`${keys[N - 1]} ${map[keys[N - 1]]}`);
  }
}

main([1, 3, 2, 3, 2, 2, 1, 2], 4);
