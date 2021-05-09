/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum = function (nums, target) {
  const res = [];

  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 3; i += 1) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    const tmp = threeSum(nums.slice(i + 1), target - nums[i]);
    if (tmp.length === 0) {
      continue;
    }
    for (let arr of tmp) {
      arr.unshift(nums[i]);
      res.push(arr);
    }
  }

  return res;
};

const threeSum = function (nums, target) {
  const res = [];
  const len = nums.length;

  for (let i = 0; i < nums.length - 2; i += 1) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let l = i + 1;
    let h = len - 1;
    let newTarget = target - nums[i];
    while (l < h) {
      let sum = nums[l] + nums[h];

      if (sum > newTarget) {
        h -= 1;
      } else if (sum < newTarget) {
        l += 1;
      } else {
        res.push([nums[i], nums[l], nums[h]]);
        while (l < h && nums[l] === nums[l + 1]) {
          l += 1;
        }
        while (l < h && nums[h] === nums[h - 1]) {
          h -= 1;
        }
        l += 1;
        h -= 1;
      }
    }
  }

  return res;
};

// test
console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
