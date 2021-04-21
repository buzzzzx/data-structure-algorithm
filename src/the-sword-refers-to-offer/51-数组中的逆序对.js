/**
 * @param {number[]} nums
 * @return {number}
 */
const reversePairs = function (nums) {
  return mergeSort(nums, [], 0, nums.length - 1);
};

const mergeSort = function (nums, tmp, left, right) {
  if (left >= right) {
    return 0;
  }

  let mid = Math.floor((left + right) / 2);
  let cnt =
    mergeSort(nums, tmp, left, mid) + mergeSort(nums, tmp, mid + 1, right);
  let i = left,
    j = mid + 1,
    pos = i;
  while (i <= mid && j <= right) {
    if (nums[i] > nums[j]) {
      tmp[pos] = nums[j];
      j += 1;
      cnt += mid - i + 1;
    } else {
      tmp[pos] = nums[i];
      i += 1;
    }
    pos += 1;
  }

  while (i <= mid) {
    tmp[pos] = nums[i];
    i += 1;
    pos += 1;
  }

  while (j <= right) {
    tmp[pos] = nums[j];
    j += 1;
    pos += 1;
  }
  for (let k = left; k < right + 1; k += 1) {
    nums[k] = tmp[k];
  }

  return cnt;
};

// test
console.log(reversePairs([5, 7, 6, 4]));
