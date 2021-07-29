/**
 * @param {string} expression
 * @return {number[]}
 */
const diffWaysToCompute = function (expression) {
  const res = [];
  for (let i = 0; i < expression.length; i += 1) {
    const ch = expression[i];
    if (ch === "+" || ch === "-" || ch === "*") {
      const left = diffWaysToCompute(expression.slice(0, i));
      const right = diffWaysToCompute(
        expression.slice(i + 1, expression.length)
      );
      for (let l of left) {
        for (let r of right) {
          switch (ch) {
            case "*":
              res.push(Number(l) * Number(r));
              break;
            case "+":
              res.push(Number(l) + Number(r));
              break;
            case "-":
              res.push(Number(l) - Number(r));
              break;
          }
        }
      }
    }
  }

  if (res.length === 0) {
    return [Number(expression)];
  }

  return res;
};

console.log(diffWaysToCompute("2-1-1"));
