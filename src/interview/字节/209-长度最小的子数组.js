/**
 * 滑动窗口
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen = function (target, nums) {
  let i = 0;
  let j = 0;
  const len = nums.length;
  let sum = 0;
  let res = len + 1;
  while (j < len) {
    sum += nums[j];
    j += 1;
    while (sum >= target) {
      res = Math.min(res, j - i);
      sum -= nums[i];
      i += 1;
    }
  }

  return res > len ? 0 : res;
};

// 暴力：O(n2)
const minSubArrayLen1 = function (target, nums) {
  let res = 0;
  for (let i = 0; i < nums.length; i += 1) {
    let sum = nums[i];
    let count = 1;
    if (sum === target) {
      return 1;
    }
    let j;
    for (j = i + 1; j < nums.length; j += 1) {
      sum += nums[j];
      if (sum >= target) {
        res = res === 0 ? count + 1 : Math.min(res, count + 1);
        break;
      } else {
        count += 1;
      }
    }
    if (i === 0 && j === nums.length) {
      return 0;
    }
  }

  return res;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
