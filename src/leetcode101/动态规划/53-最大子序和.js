/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function (nums) {
  let res = nums[0];
  let sum = nums[0];
  for (let i = 1; i < nums.length; i += 1) {
    sum = Math.max(sum + nums[i], nums[i]);
    res = Math.max(res, sum);
  }

  return res;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([1, -2, 0]));
