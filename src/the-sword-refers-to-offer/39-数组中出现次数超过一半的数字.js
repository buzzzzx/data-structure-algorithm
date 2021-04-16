/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function (nums) {
  const count = {};

  let len = Math.ceil(nums.length / 2);
  for (let num of nums) {
    if (count[num] == null) {
      count[num] = 1;
    } else {
      count[num] += 1;
    }
    if (count[num] >= len) {
      return num;
    }
  }
};

// test
console.log(majorityElement([1, 2, 3, 2, 2, 2, 5, 4, 2]));
console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([1]));
