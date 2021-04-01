/**
 * Algorithm: 贪心算法 - 分数背包问题
 * 思路：
 * - 迭代物品，如果物品能够完全装入，则完整装入物品，他的价值完整计算
 * - 如果物品不能够完全装入，则装入分数的物品，价值也按比例计算
 */

const fractionKnapSack = (capacity, weights, values) => {
  const length = weights.length;
  let results = 0;
  let cp = capacity;
  let weight;
  for (let i = 0; i < length; i += 1) {
    weight = weights[i];
    if (weight >= cp) {
      results += (cp / weight) * values[i];
      return results;
    } else {
      results += values[i];
      cp -= weight;
    }
  }

  return results;
};

// test
console.log(fractionKnapSack(7, [2, 3, 1], [4, 3, 2]));
console.log(fractionKnapSack(10, [2, 3, 4], [3, 4, 5]));
console.log(fractionKnapSack(6, [2, 3, 4], [3, 4, 5]));
