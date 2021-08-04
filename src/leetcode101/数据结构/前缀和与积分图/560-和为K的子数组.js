/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraySum = function (nums, k) {
  const map = {};
  map[0] = 1;
  let res = 0;
  let psum = 0;
  for (let num of nums) {
    psum += num;
    res += map[psum - k] ? map[psum - k] : 0;
    map[psum] = map[psum] ? map[psum] + 1 : 1;
  }

  return res;
};

console.log(subarraySum([1, 1, 1], 2));
