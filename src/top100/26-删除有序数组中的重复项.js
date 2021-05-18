/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
  const len = nums.length;
  if (len === 0) {
    return 0;
  }

  let i = 0;
  for (let j = 1; j < len; j += 1) {
    if (nums[i] !== nums[j]) {
      i += 1;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};

// test
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
