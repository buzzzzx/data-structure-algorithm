/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function (nums) {
  const len = nums.length;
  if (len === 0) {
    return 0;
  }
  if (len === 1) {
    return nums[0];
  }

  let pre2 = 0;
  let pre1 = 0;
  let curr = 0;
  for (let i = 0; i < len; i += 1) {
    curr = Math.max(pre1, pre2 + nums[i]);
    pre2 = pre1;
    pre1 = curr;
  }

  return curr;
};
