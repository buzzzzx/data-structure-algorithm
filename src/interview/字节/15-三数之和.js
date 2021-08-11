/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
  if (nums.length <= 2) {
    return [];
  }
  nums.sort((a, b) => a - b);
  const res = [];
  for (let i = 0; i < nums.length; i += 1) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let low = i + 1;
    let high = nums.length - 1;
    while (low < high) {
      let sum = nums[i] + nums[low] + nums[high];
      if (sum === 0) {
        res.push([nums[i], nums[low], nums[high]]);
        while (low < nums.length - 1 && nums[low] === nums[low + 1]) {
          low += 1;
        }
        while (high > 0 && nums[high] === nums[high - 1]) {
          high -= 1;
        }
        low += 1;
        high -= 1;
      } else if (sum < 0) {
        low += 1;
      } else {
        high -= 1;
      }
    }
  }

  return res;
};
