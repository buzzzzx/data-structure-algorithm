/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function (nums) {
  const { length } = nums;

  let res = nums[0];
  let max = res;
  let i = 1;
  while (i < length) {
    if (res < 0) {
      res = nums[i];
    } else {
      res += nums[i];
    }

    if (max < res) {
      max = res;
    }
    i += 1;
  }

  return max;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray1 = function (nums) {
  const { length } = nums;

  let curr = nums[0];
  let max = curr;
  for (let i = 1; i < length; i += 1) {
    curr = Math.max(curr, 0) + nums[i];
    max = Math.max(curr, max);
  }

  return max;
};
