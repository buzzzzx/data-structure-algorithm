/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function (nums) {
  const len = nums.length;
  if (len === 1) {
    return nums[0];
  }
  if (len === 2) {
    return nums[0] > nums[1] ? nums[0] : nums[1];
  }

  const dp1 = [];
  const dp2 = [];
  for (let i = 0; i < len; i += 1) {
    dp1[i] = 0;
    dp2[i] = 0;
  }

  // dp1: 不抢第一个
  dp1[1] = nums[1];
  for (let i = 2; i < len; i += 1) {
    dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + nums[i]);
  }

  // 不抢最后一个
  dp2[0] = nums[0];
  dp2[1] = Math.max(dp2[0], nums[1]);
  for (let i = 2; i < len - 1; i += 1) {
    dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + nums[i]);
  }

  return Math.max(dp1[len - 1], dp2[len - 2]);
};

console.log(rob([2, 3, 2]));
console.log(rob([1, 2, 3, 1]));
console.log(rob([0]));
