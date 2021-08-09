/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  const map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  const stack = [];
  for (let ch of s) {
    if (ch === "(" || ch === "[" || ch === "{") {
      stack.push(ch);
    } else {
      if (stack.length === 0 || map[stack[stack.length - 1]] !== ch) {
        return false;
      } else {
        stack.pop();
      }
    }
  }

  return stack.length === 0;
};
