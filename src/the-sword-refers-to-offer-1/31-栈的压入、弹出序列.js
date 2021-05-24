/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
const validateStackSequences = function (pushed, popped) {
  let len = pushed.length;
  if (len === 0) {
    return true;
  }

  let helper = [];
  let i = 0;
  for (let num of pushed) {
    helper.push(num);
    while (i < len && helper[helper.length - 1] === popped[i]) {
      i += 1;
      helper.pop();
    }
  }

  return i === len;
};

console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]));
