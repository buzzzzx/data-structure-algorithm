/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = function (nums) {
  const len = nums.length;
  if (len === 0 || len === 1) {
    return len;
  }

  const map = {};
  for (let num of nums) {
    map[num] = num;
  }

  let res = 0;
  for (let key in map) {
    const num = map[key];
    let pre = num - 1;
    let after = num + 1;
    delete map[key];

    while (map[pre] !== undefined) {
      delete map[pre];
      pre -= 1;
    }
    while (map[after] !== undefined) {
      delete map[after];
      after += 1;
    }
    res = Math.max(res, after - pre - 1);
  }

  return res;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
