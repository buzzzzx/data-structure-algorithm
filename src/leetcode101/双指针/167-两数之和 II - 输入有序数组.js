/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;
  while (left !== right) {
    let tmp = numbers[left] + numbers[right];
    if (tmp === target) {
      return [left + 1, right + 1];
    } else if (tmp < target) {
      left += 1;
    } else {
      right -= 1;
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
