/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function (nums) {
  let res = 0;
  for (let num of nums) {
    res ^= num;
  }
  return res;
};
