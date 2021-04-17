/**
 * @param {number[]} nums
 * @return {string}
 */
const minNumber = function (nums) {
  quickSort(nums, 0, nums.length - 1);
  return nums.join("");
};

const quickSort = function (nums, left, right) {
  if (left >= right) {
    return;
  }

  let pivot = partition(nums, left, right);
  quickSort(nums, left, pivot - 1);
  quickSort(nums, pivot + 1, right);
};

const partition = function (nums, left, right) {
  let pivot = left;
  let ch = nums[pivot];
  let i = left;
  let j = right;
  while (i !== j) {
    while (i < j && myCompare(ch, nums[j])) {
      j -= 1;
    }

    while (i < j && myCompare(nums[i], ch)) {
      i += 1;
    }

    if (i < j) {
      swap(nums, i, j);
    }
  }

  swap(nums, i, pivot);
  return i;
};

const swap = function (nums, i, j) {
  let tmp = nums[i];
  nums[i] = nums[j];
  nums[j] = tmp;
};

const myCompare = function (n1, n2) {
  // s1 < s2 -> true; s1 > s2 -> false
  let s1 = n1.toString();
  let s2 = n2.toString();
  return s1 + s2 <= s2 + s1;
};

// test
console.log(minNumber([10, 2]));
console.log(minNumber([3, 30, 34, 5, 9]));
