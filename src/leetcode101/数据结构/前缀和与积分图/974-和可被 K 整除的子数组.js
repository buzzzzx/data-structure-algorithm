/**
 * 问题转化：子数组之和可被 K 整除 <-> i 和 j 之和可被 K 整除 <->
 *   (psum[j + 1] - psum[i]) % K === 0 <-> psum[j+1] % K === psum[i] % K
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraysDivByK = function (nums, k) {
  const map = {};
  let res = 0;
  let psum = 0;
  map[0] = 1;
  for (let num of nums) {
    psum += num;
    let mod = psum % k;
    if (mod < 0) {
      mod += k; // e.g. K = 4，求出某个前缀和为 -1，-1 % K 应该为 3，但有的语言中：-1 % K = -1，这个 -1，要加上 K，转成正数的 3。
    }
    if (map[mod]) {
      res += map[mod];
      map[mod] += 1;
    } else {
      map[mod] = 1;
    }
  }
  return res;
};

console.log(subarraysDivByK([4, 5, 0, -2, -3, 1], 5));

// 效率很低的方法
const subarraysDivByK1 = function (nums, k) {
  const len = nums.length;
  const psum = new Array(len).fill(0);
  for (let i = 1; i <= len; i += 1) {
    psum[i] = psum[i - 1] + nums[i - 1];
  }

  let res = 0;
  for (let i = 0; i < len; i += 1) {
    for (let j = i; j < len; j += 1) {
      let tmp = psum[j + 1] - psum[i];
      if (Math.abs(tmp) % k === 0) {
        res += 1;
      }
    }
  }
  return res;
};
