/**
 *
 * @param {number[]} nums
 * @param {number[]} ms
 * @return {number[]}
 */
const differential = function (nums, ms) {
  let df = [];
  for (let i = 0; i <= nums.length; i += 1) {
    df[i] = 0;
  }

  // 得到 nums 的差分数组
  for (let i = 0; i < nums.length; i += 1) {
    insert(i, i, nums[i], df);
  }

  for (let m of ms) {
    let start = m[0] - 1;
    let end = m[1] - 1;
    let add = m[2];
    insert(start, end, add, df);
  }

  // 得到新的 nums
  for (let i = 0; i < nums.length; i += 1) {
    nums[i] = i === 0 ? df[i] : nums[i - 1] + df[i];
  }

  return nums;
};

const insert = function (l, r, c, df) {
  df[l] += c;
  df[r + 1] -= c;
};

// 循环
const differential1 = function (nums, ms) {
  for (let m of ms) {
    let start = m[0] - 1;
    let end = m[1] - 1;
    let add = m[2];
    for (let s = start; s <= end; s += 1) {
      nums[s] += add;
    }
  }

  return nums;
};

console.log(
  differential(
    [1, 2, 2, 1, 2, 1],
    [
      [1, 3, 1],
      [3, 5, 1],
      [1, 6, 1],
    ]
  )
);
