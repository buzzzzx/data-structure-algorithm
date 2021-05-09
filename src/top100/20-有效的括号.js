/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  const stack = [];
  const map = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let c of s) {
    if (c === "(" || c === "[" || c === "{") {
      stack.push(c);
    } else {
      if (stack.pop() !== map[c]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

// test
console.log(isValid("()[]{}"));
console.log(isValid("({})[]{}"));
console.log(isValid("(])"));
