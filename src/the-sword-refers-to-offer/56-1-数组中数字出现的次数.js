/**
 * @param {number[]} nums
 * @return {number[]}
 */
const singleNumbers = function (nums) {
  let x = 0;
  for (let num of nums) {
    x ^= num;
  }
  let div = 1;
  while ((div & x) === 0) {
    div <<= 1;
  }
  let a = 0,
    b = 0;
  for (let num of nums) {
    if ((num & div) === 0) {
      a ^= num;
    } else {
      b ^= num;
    }
  }

  return [a, b];
};

// test
console.log(singleNumbers([4, 1, 4, 2]));
