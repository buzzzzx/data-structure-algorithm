/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const hashmap = {};
  for (let i = 0; i < nums.length; i += 1) {
    if (hashmap[nums[i]] == null) {
      hashmap[target - nums[i]] = i;
    } else {
      return [hashmap[nums[i]], i];
    }
  }
  return [];
};
