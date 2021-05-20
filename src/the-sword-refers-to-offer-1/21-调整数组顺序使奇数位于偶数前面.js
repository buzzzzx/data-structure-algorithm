/**
 * @param {number[]} nums
 * @return {number[]}
 */
const exchange = function (nums) {
  const len = nums.length;
  let i = 0;
  let j = len - 1;

  while (i < j) {
    while (i < j && nums[i] % 2 === 1) {
      i += 1;
    }

    while (i < j && nums[j] % 2 === 0) {
      j -= 1;
    }

    if (i < j) {
      let tmp = nums[i];
      nums[i] = nums[j];
      nums[j] = tmp;
      i += 1;
      j -= 1;
    }
  }

  return nums;
};
