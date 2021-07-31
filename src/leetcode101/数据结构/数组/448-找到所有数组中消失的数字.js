/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers = function (nums) {
  const res = [];
  for (let num of nums) {
    const pos = Math.abs(num) - 1;
    if (nums[pos] > 0) {
      nums[pos] = -nums[pos];
    }
  }
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] > 0) {
      res.push(i + 1);
    }
  }

  return res;
};
