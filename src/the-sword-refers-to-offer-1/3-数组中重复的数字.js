/**
 * @param {number[]} nums
 * @return {number}
 */
const findRepeatNumber = function (nums) {
  let idx = 0;
  const len = nums.length;
  while (len !== idx) {
    if (idx === nums[idx]) {
      idx += 1;
    } else {
      let numIdx = nums[idx];
      if (nums[idx] === nums[numIdx]) {
        return nums[idx];
      } else {
        let tmp = nums[idx];
        nums[idx] = nums[numIdx];
        nums[numIdx] = tmp;
      }
    }
  }
};

console.log(findRepeatNumber([2, 3, 1, 0, 2, 5, 3]));
