function findOdd(arr) {
  let res = 0;
  for (let i = 0; i < arr.length; i += 1) {
    res = res ^ arr[i];
  }
  return res;
}

console.log(findOdd([5, 4, 3, 2, 7, 7, 7, 5, 4, 3, 2, 10, 10]));
