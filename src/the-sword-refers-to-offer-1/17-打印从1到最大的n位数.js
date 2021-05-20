/**
 * @param {number} n
 * @return {number[]}
 */
const printNumbers = function (n) {
  let end = 10 ** n;
  let res = [];
  for (let i = 1; i <= end; i += 1) {
    res.push(i);
  }
  return res;
};

/**
 * 考虑大数问题，返回字符数组
 * @param n
 */
const printNumbers1 = function (n) {
  const nums = [];
  const res = [];
  dfs(res, nums, 0, n);
  return res;
};

const dfs = (res, nums, k, n) => {
  if (k === n) {
    let num = nums.join("");
    // 去除前导 0
    while (num.startsWith("0")) {
      num = num.slice(1);
    }
    if (num !== "") {
      res.push(num);
    }
    return;
  }

  for (let i = 0; i < 10; i += 1) {
    nums[k] = i.toString();
    dfs(res, nums, k + 1, n);
  }
};

console.log(printNumbers1(3));
