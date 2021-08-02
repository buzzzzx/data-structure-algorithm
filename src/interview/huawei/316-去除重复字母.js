/**
 * 华为后端一面
 * @param {string} s
 * @return {string}
 */
const removeDuplicateLetters = function (s) {
  if (s.length === 1) {
    return s;
  }
  const stack = [];
  for (let i = 0; i < s.length; i += 1) {
    let ch = s[i];
    if (stack.includes(ch)) {
      continue;
    }
    while (
      stack.length !== 0 &&
      stack[stack.length - 1] > ch &&
      s.includes(stack[stack.length - 1], i)
    ) {
      stack.pop();
    }
    stack.push(ch);
  }
  let res = "";
  while (stack.length !== 0) {
    res = stack.pop() + res;
  }

  return res;
};
