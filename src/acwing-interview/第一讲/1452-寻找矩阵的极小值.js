/**
 * Forward declaration of query API.
 * @param {integer} a, b
 * @return {integer} the value of matrix[x][y]
 * query = function(a, b) {
 *     ...
 * };
 */

/**
 * @param {number} n
 * @return {number[]}
 */
const getMinimumValue = function (n) {
  let l = 0;
  let r = n - 1;

  while (l < r) {
    let mid = Math.floor((l + r) / 2);
    let minVal = Infinity;
    let minIdx = 0;
    for (let i = 0; i < n; i += 1) {
      const val = query(i, mid);
      if (minVal > val) {
        minVal = val;
        minIdx = i;
      }
    }

    let left = mid - 1 >= 0 ? query(minIdx, mid - 1) : Infinity;
    let right = mid + 1 < n ? query(minIdx, mid + 1) : Infinity;

    if (minVal < left && minVal < right) {
      return [minIdx, mid];
    } else if (minVal < left) {
      // minVal > right
      l = mid + 1;
    } else {
      // minVal > left or minVal > right (随便选一边都可以，所以这里就选的左边)
      r = mid - 1;
    }
  }

  // 最后只剩下一列 l === r
  let minVal = Infinity;
  let minIdx = 0;
  for (let i = 0; i < n; i += 1) {
    const val = query(i, l);
    if (minVal > val) {
      minVal = val;
      minIdx = i;
    }
  }

  return [minIdx, l];
};
