/**
 * Algorithm: DP - 背包问题
 * Solution:
 * - 递归
 * - 矩阵解法
 */

// 这个是一个物品可以装很多次的写法。我服了，看了你吗半个小时都快怀疑人生了，才发现原始的背包问题是一个物品只能装 0 或 1 次。
const knapSackRecursive = (capacity, weights, values) => {
  const cache = {};

  const putItem = (capacity) => {
    if (capacity <= 0) {
      return 0;
    }

    if (cache[capacity]) {
      return cache[capacity];
    }

    let max = 0;
    let newMax = 0;
    for (let i = 0; i < values.length; i += 1) {
      let newCapacity = capacity - weights[i];
      if (newCapacity >= 0) {
        newMax = putItem(newCapacity);
      }

      if (
        newCapacity >= 0 &&
        (newMax > max - values[i] || !max) &&
        (newMax || !newCapacity)
      ) {
        max = newMax + values[i];
      }
    }

    return (cache[capacity] = max);
  };

  return putItem(capacity);
};

const knapSackRecursiveReal = (capacity, weights, values, n) => {
  if (capacity === 0 || n === 0) {
    return 0;
  }

  if (weights[n - 1] > capacity) {
    return knapSackRecursiveReal(capacity, weights, values, n - 1);
  } else {
    return Math.max(
      values[n - 1] +
        knapSackRecursiveReal(
          capacity - weights[n - 1],
          weights,
          values,
          n - 1
        ),
      knapSackRecursiveReal(capacity, weights, values, n - 1)
    );
  }
};

const knapSackMatrix = (capacity, weights, values, n) => {
  const ks = [];
  for (let i = 0; i <= n; i += 1) {
    ks[i] = [];
  }

  for (let i = 0; i <= n; i += 1) {
    for (let w = 0; w <= capacity; w += 1) {
      if (i === 0 || w === 0) {
        ks[i][w] = 0;
      } else {
        if (weights[i - 1] <= w) {
          // 表示物品 i 可以放进去
          // 那么就选择最大的值
          let putIn = values[i - 1] + ks[i - 1][w - weights[i - 1]];
          let notPutIn = ks[i - 1][w]; // w 重量下不选第 i 个物体的价值
          ks[i][w] = putIn > notPutIn ? putIn : notPutIn;
        } else {
          ks[i][w] = ks[i - 1][w];
        }
      }
    }
  }

  return ks[n][capacity];
};

// test
console.log(knapSackRecursiveReal(7, [2, 3, 1], [4, 3, 2], 3));
console.log(knapSackRecursiveReal(10, [2, 3, 4], [3, 4, 5], 3));
console.log(knapSackMatrix(7, [2, 3, 1], [4, 3, 2], 3));
console.log(knapSackMatrix(10, [2, 3, 4], [3, 4, 5], 3));
