/**
 * @param {number[]} nums
 * @return {boolean}
 */
const isStraight = function (nums) {
  const count = [];
  let max = -1;
  let min = 100;
  for (let num of nums) {
    if (num === 0) {
      continue;
    }
    if (count[num] >= 1) {
      return false;
    }
    count[num] = 1;
    min = Math.min(min, num);
    max = Math.max(max, num);
  }

  return max - min <= 4;
};
