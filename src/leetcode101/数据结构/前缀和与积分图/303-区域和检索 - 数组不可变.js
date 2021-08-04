/**
 * @param {number[]} nums
 */
const NumArray = function (nums) {
  this.psum = new Array(nums.length + 1).fill(0);
  for (let i = 0; i < nums.length; i += 1) {
    this.psum[i + 1] = this.psum[i] + nums[i];
  }
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  return this.psum[right + 1] - this.psum[left];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
