/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  if (prices == null || prices.length <= 0) {
    return 0;
  }
  let res = 0;
  let min = prices[0];
  for (let i = 1; i < prices.length; i += 1) {
    let price = prices[i];
    if (price < min) {
      min = price;
    }
    res = Math.max(res, price - min);
  }

  return res;
};

// 我用归并排序做，我是个蠢东西
const maxProfit1 = function (prices) {
  let max = 0;

  const mergeSort = function (nums, tmp, left, right) {
    if (left >= right) {
      return;
    }
    let mid = Math.floor((left + right) / 2);
    mergeSort(nums, tmp, left, mid);
    mergeSort(nums, tmp, mid + 1, right);

    let diff = nums[right] - nums[left];
    max = Math.max(max, diff);

    let i = left,
      j = mid + 1,
      pos = i;
    // merge
    while (i <= mid && j <= right) {
      if (nums[i] < nums[j]) {
        tmp[pos] = nums[i];
        i += 1;
      } else {
        tmp[pos] = nums[j];
        j += 1;
      }
      pos += 1;
    }

    while (i <= mid) {
      tmp[pos] = nums[i];
      pos += 1;
      i += 1;
    }
    while (j <= right) {
      tmp[pos] = nums[j];
      pos += 1;
      j += 1;
    }
    for (let i = left; i <= right; i += 1) {
      nums[i] = tmp[i];
    }
  };

  mergeSort(prices, [], 0, prices.length - 1);

  return max;
};

// test
console.log(maxProfit([1, 2, 4, 2, 5, 7, 2, 4, 9, 0]));
