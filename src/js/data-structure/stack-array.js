/**
 * Data structure: Stack
 * methods:
 *  - push
 *  - pop
 *  - peak
 *  - isEmpty
 *  - clear
 *  - size
 * */

class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  peak() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  clear() {
    this.items = [];
  }

  size() {
    return this.items.length;
  }
}

// 关于私有变量
// 使用 Symbol 来实现变量私有
// 但是实际上这是一种假实现，还是可以通过 Object.getOwnPropertySymbols 方法获取类的 Symbol 属性
// 还可以通过 WeakMap 来实现，但是这种方法代码可读性不强
const items = new WeakMap();
class StackWeakMap {
  constructor() {
    items.set(this, []);
  }

  push(element) {
    items.get(this).push(element);
  }

  pop() {
    let list = items.get(this);
    return list.pop();
  }
}

// 一些栈的例子
// 十进制转二进制
function decimalToBinary(value) {
  const remStack = new Stack();
  let num = value;
  let rem;

  while (num !== 0) {
    rem = num % 2;
    remStack.push(rem);
    num = parseInt(num / 2);
  }

  let binary = "";
  while (!remStack.isEmpty()) {
    binary = binary + remStack.pop();
  }

  return binary;
}

console.log(decimalToBinary(10));
console.log(decimalToBinary(233));
console.log(decimalToBinary(1000));
