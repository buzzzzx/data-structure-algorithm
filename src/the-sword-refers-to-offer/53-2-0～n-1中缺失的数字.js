/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function (nums) {
  const len = nums.length;
  if (len === 1) {
    return 1 - nums[0];
  }
  let i = 0,
    j = len - 1;
  while (i < j) {
    let mid = Math.floor((i + j) / 2);
    if (nums[mid] === mid) {
      i = mid + 1;
    } else {
      j = mid;
    }
  }

  return nums[i] === i ? i + 1 : i;
};

// test
console.log(missingNumber([0, 1, 3]));
console.log(missingNumber([0]));
console.log(missingNumber([1]));
console.log(missingNumber([0, 1, 2, 3, 4, 5, 6, 7, 9]));
