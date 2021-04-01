/**
 * Algorithm: 贪心算法 - 最少硬币找零
 * 思路：
 * - 从最大面额开始找零，最大面额超过零钱数后，再用小面额
 */

const minCoinChange = (coins, amount) => {
  let value = amount;
  const changes = [];
  for (let i = coins.length - 1; i >= 0; i -= 1) {
    const coin = coins[i];
    while (value >= coin) {
      changes.push(coin);
      value = value - coin;
    }
  }

  return changes;
};

// test
console.log(minCoinChange([1, 5, 10, 25], 36));
console.log(minCoinChange([1, 3, 4], 6));
