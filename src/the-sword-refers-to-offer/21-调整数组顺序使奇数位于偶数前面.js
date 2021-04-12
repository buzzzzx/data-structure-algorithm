/**
 * @param {number[]} nums
 * @return {number[]}
 */
const exchange = function (nums) {
  if (nums == null || nums.length === 0) {
    return nums;
  }

  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    // 注意要加上 left < right 这个约束条件，否则 nums[left] === 0 当 left 超出数组长度后
    while (!isEven(nums[left]) && left < right) {
      left += 1;
    }
    while (isEven(nums[right]) && left < right) {
      right -= 1;
    }

    if (left < right) {
      let tmp = 0;
      tmp = nums[left];
      nums[left] = nums[right];
      nums[right] = tmp;

      left += 1;
      right -= 1;
    }
  }

  return nums;
};

const isEven = (num) => num % 2 === 0;

// test
console.log(exchange([1, 3, 5]));
