/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
  let res = 0;
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let midVal = nums[mid];
    if (target === midVal) {
      res += 1;
      let front = mid - 1;
      let behind = mid + 1;
      while (front >= left && nums[front] === target) {
        res += 1;
        front -= 1;
      }
      while (behind <= right && nums[behind] === target) {
        res += 1;
        behind += 1;
      }
      break;
    } else if (target < midVal) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return res;
};

// 递归的写法 但是速度很慢
const helper = function (nums, target, left, right, count) {
  if (left > right) {
    return;
  }

  let mid = Math.floor((left + right) / 2);
  let midVal = nums[mid];
  if (target > midVal) {
    helper(nums, target, mid + 1, right, count);
  } else if (target < midVal) {
    helper(nums, target, left, mid - 1, count);
  } else {
    count[target] += 1;
    helper(nums, target, left, mid - 1, count);
    helper(nums, target, mid + 1, right, count);
  }
};

console.log(search([5, 7, 7, 8, 8, 10], 8));
