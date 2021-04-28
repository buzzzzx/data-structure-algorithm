/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function (nums1, nums2) {
  const len1 = nums1.length;
  const len2 = nums2.length;
  const totalLen = len1 + len2;
  let k = Math.floor(totalLen / 2);
  if (totalLen % 2 === 0) {
    return (
      (getKthSmallestNum(nums1, nums2, k) +
        getKthSmallestNum(nums1, nums2, k + 1)) /
      2
    );
  } else {
    return getKthSmallestNum(nums1, nums2, k + 1);
  }
};

const getKthSmallestNum = function (nums1, nums2, k) {
  const len1 = nums1.length;
  const len2 = nums2.length;
  let idx1 = 0;
  let idx2 = 0;

  while (1) {
    // 边界条件
    if (idx1 === len1) {
      return nums2[idx2 + k - 1];
    }
    if (idx2 === len2) {
      return nums1[idx1 + k - 1];
    }
    // k === 1 这个条件放在前面两个后面，当数组都没找完时且 k === 1 了就返回较小的那个数
    if (k === 1) {
      return Math.min(nums1[idx1], nums2[idx2]);
    }

    // 正常情况
    let half = Math.floor(k / 2);
    let newIdx1 = Math.min(idx1 + half, len1) - 1;
    let newIdx2 = Math.min(idx2 + half, len2) - 1;
    let pivot1 = nums1[newIdx1];
    let pivot2 = nums2[newIdx2];
    if (pivot1 < pivot2) {
      k -= newIdx1 - idx1 + 1;
      idx1 = newIdx1 + 1;
    } else {
      k -= newIdx2 - idx2 + 1;
      idx2 = newIdx2 + 1;
    }
  }
};

// test
console.log(findMedianSortedArrays([1, 2], [3, 4]));
