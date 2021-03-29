/**
 * Algorithm: DP - 最少硬币找零数
 * Solution: 假设面额是 n，求 n 的最少硬币找零数，需要找到所有小于 n 的面额的最少找零数，需要记忆化
 * 1. 对每个面额 x 判断是否合理，并且是否已有最少找零数，有则直接返回
 * 2. 没有则通过遍历每一种硬币面额 d，来求解这个 x 的找零数，得到找零数后和之前的找零数比较
 * 3. 遍历完后将最优解保存起来
 */

const minCoinChange = (coins, amount) => {
  const cache = {};
  const makeChange = (amount) => {
    if (amount === 0) {
      return [];
    }

    if (cache[amount]) {
      return cache[amount];
    }

    let min = [];
    let newMin = [];
    for (let i = 0; i < coins.length; i += 1) {
      let newMount = amount - coins[i];
      if (newMount >= 0) {
        newMin = makeChange(newMount);
      }
      if (
        newMount >= 0 && // newMount < 0 直接跳过
        (newMin.length < min.length - 1 || !min.length) && // 如果 newMin 的长度小于 min 的长度减 1(因为 min 包括了 coins[i])，或者 min 还没有值
        (newMin.length || !newMount) // 如果 newMin 有值或者 newCount 为 0
      ) {
        min = [coins[i]].concat(newMin);
        console.log("newMin " + min + " for " + amount);
      }
    }
    return (cache[amount] = min);
  };

  return makeChange(amount);
};

// test
console.log(minCoinChange([1, 5, 10, 25], 36));
console.log(minCoinChange([1, 3, 4], 6));
