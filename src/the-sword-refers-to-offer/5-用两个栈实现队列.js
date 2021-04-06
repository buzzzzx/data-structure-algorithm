const inStack = [];
const outStack = [];

function enqueue(element) {
  inStack.push(element);
}

function dequeue() {
  if (outStack.length === 0) {
    while (inStack.length !== 0) {
      outStack.push(inStack.pop());
    }
  }

  return outStack.pop();
}
