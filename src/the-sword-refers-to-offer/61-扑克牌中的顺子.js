/**
 * @param {number[]} nums
 * @return {boolean}
 */
const isStraight = function (nums) {
  const count = [];
  let max = -1,
    min = 100;
  for (let num of nums) {
    if (num === 0) {
      continue;
    }
    if (count[num] >= 1) {
      return false;
    } else {
      count[num] = 1;
      max = Math.max(max, num);
      min = Math.min(min, num);
    }
  }

  return max - min <= 4;
};

// 我自己想的排序的蠢方法
const isStraight1 = function (nums) {
  nums.sort((a, b) => a - b);
  const len = nums.length;
  let i = 0;
  let j = i + 1;
  let cnt = 0;
  while (i !== len - 1) {
    if (nums[i] === 0) {
      cnt += 1;
      i += 1;
      j += 1;
    } else {
      if (nums[j] - nums[i] === 1) {
        i += 1;
        j += 1;
      } else if (nums[j] - nums[i] === 0) {
        return false;
      } else {
        if (nums[j] - nums[i] - 1 <= cnt) {
          i += 1;
          j += 1;
          cnt -= nums[j] - nums[i] - 1;
        } else {
          return false;
        }
      }
    }
  }

  return true;
};

// test
// console.log(isStraight([1, 2, 3, 4, 5]));
// console.log(isStraight([0, 0, 1, 2, 5]));
console.log(isStraight([0, 0, 0, 9, 11]));
