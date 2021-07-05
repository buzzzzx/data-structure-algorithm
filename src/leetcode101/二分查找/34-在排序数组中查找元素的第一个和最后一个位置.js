/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = function (nums, target) {
  const len = nums.length;
  if (len === 0) {
    return [-1, -1];
  }

  let l, r, mid, res1, res2;
  l = 0;
  r = len - 1;
  while (l <= r) {
    mid = Math.floor((l + r) / 2);
    if (nums[mid] === target) {
      res1 = res2 = mid;
      let p = mid - 1;
      let q = mid + 1;
      while (p >= 0) {
        if (nums[p] !== target) {
          break;
        }
        res1 = p;
        p -= 1;
      }
      while (q <= len - 1) {
        if (nums[q] !== target) {
          break;
        }
        res2 = q;
        q += 1;
      }
      return [res1, res2];
    } else if (nums[mid] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return [-1, -1];
};
