/**
 * @param {number[]} nums
 * @return {number[]}
 */
const singleNumbers = function (nums) {
  let tmp = 0;
  for (let num of nums) {
    tmp ^= num;
  }
  let idx = 0;
  while ((tmp & 1) === 0) {
    idx += 1;
    tmp >>= 1;
  }

  let res1, res2;
  res1 = res2 = 0;
  for (let num of nums) {
    if (((num >> idx) & 1) === 0) {
      res1 ^= num;
    } else {
      res2 ^= num;
    }
  }

  return [res1, res2];
};
