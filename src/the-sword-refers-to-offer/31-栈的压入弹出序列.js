/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
const validateStackSequences = function (pushed, popped) {
  const stack = [];
  let poppedPointer = 0;
  for (let i = 0; i < pushed.length; i += 1) {
    stack.push(pushed[i]);
    while (
      poppedPointer < popped.length &&
      stack[stack.length - 1] === popped[poppedPointer]
    ) {
      poppedPointer += 1;
      stack.pop();
    }
  }

  return poppedPointer === popped.length;
};

// test
console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]));
