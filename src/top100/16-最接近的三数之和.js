/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = function (nums, target) {
  let minDist = Number.MAX_SAFE_INTEGER;
  let closet = 0;
  let len = nums.length;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < len - 2; i += 1) {
    let l = i + 1;
    let h = len - 1;
    let dist = target - nums[i];
    while (l < h) {
      let two = nums[l] + nums[h];
      let total = two + nums[i];

      if (minDist > Math.abs(total - target)) {
        minDist = Math.abs(total - target);
        closet = total;
      }

      if (dist > two) {
        l += 1;
      } else if (dist < two) {
        h -= 1;
      } else {
        return target;
      }
    }
  }

  return closet;
};

// test
console.log(threeSumClosest([1, 1, 1, 0], -100));
console.log(threeSumClosest([-1, 2, 1, -4], -3));
