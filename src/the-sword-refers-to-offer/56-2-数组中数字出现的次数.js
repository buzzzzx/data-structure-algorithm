/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function (nums) {
  let res = 0;
  const counts = [];
  for (let num of nums) {
    for (let i = 0; i < 32; i += 1) {
      let tmp = num & 1;
      counts[i] = counts[i] == null ? tmp : counts[i] + tmp;
      num >>>= 1;
    }
  }
  for (let i = 0; i < 32; i += 1) {
    res <<= 1;
    res |= counts[31 - i] % 3;
  }

  return res;
};

// test
console.log(singleNumber([3, 1, 3, 3]));
