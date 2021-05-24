/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function (nums) {
  const len = Math.ceil(nums.length / 2);
  const o = {};
  for (let num of nums) {
    if (o[num]) {
      o[num] += 1;
    } else {
      o[num] = 1;
    }
    if (o[num] >= len) {
      return num;
    }
  }
};
