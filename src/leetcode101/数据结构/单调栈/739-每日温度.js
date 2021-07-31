/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures = function (temperatures) {
  const res = [];
  const stack = [];
  for (let i = temperatures.length - 1; i >= 0; i -= 1) {
    while (
      stack.length !== 0 &&
      temperatures[stack[stack.length - 1]] <= temperatures[i]
    ) {
      stack.pop();
    }
    res[i] = stack.length === 0 ? 0 : stack[stack.length - 1] - i;
    stack.push(i);
  }

  return res;
};
