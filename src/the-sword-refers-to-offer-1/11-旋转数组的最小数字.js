/**
 * @param {number[]} numbers
 * @return {number}
 */
const minArray = function (numbers) {
  let p = 0;
  let q = numbers.length - 1;

  while (p < q) {
    let m = Math.floor((p + q) / 2);
    if (numbers[m] > numbers[q]) {
      p = m + 1;
    } else if (numbers[m] < numbers[q]) {
      q = m;
    } else {
      q = q - 1;
    }
  }

  return numbers[q];
};

console.log(minArray([1, 2, 3, 4, 5]));
console.log(minArray([3, 4, 5, 1, 2]));
console.log(minArray([2, 2, 2, 1, 2]));
console.log(minArray([2, 2, 2, 2, 2]));
