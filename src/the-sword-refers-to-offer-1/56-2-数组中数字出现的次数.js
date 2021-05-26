/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function (nums) {
  const tmp = [];
  for (let num of nums) {
    for (let i = 0; i < 32; i += 1) {
      tmp[i] = tmp[i] == null ? num & 1 : tmp[i] + (num & 1);
      num >>= 1;
    }
  }

  let res = 0;
  for (let i = 31; i >= 0; i -= 1) {
    res <<= 1;
    res |= tmp[i] % 3;
  }

  return res;
};

console.log(singleNumber([3, 4, 3, 3]));
