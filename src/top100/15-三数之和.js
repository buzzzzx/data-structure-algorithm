/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
  const len = nums.length;
  const res = [];
  nums.sort((a, b) => a - b);
  if (len <= 2 || nums[0] > 0) {
    return res;
  }

  for (let i = 0; i < len; i += 1) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let low = i + 1;
    let high = len - 1;
    while (low < high) {
      const sum = nums[low] + nums[high];
      if (sum > -nums[i]) {
        high -= 1;
      } else if (sum < -nums[i]) {
        low += 1;
      } else {
        res.push([nums[i], nums[low], nums[high]]);
        while (low < high && nums[low] === nums[low + 1]) {
          low += 1;
        }
        while (low < high && nums[high] === nums[high - 1]) {
          high -= 1;
        }
        low += 1;
        high -= 1;
      }
    }
  }

  return res;
};

// test
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
