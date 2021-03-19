/**
 * Data structure: Deque, double-ended queue
 * description: 允许同时从前端和后端添加和移除元素的特殊队列
 * application: 存储一系列的撤销操作
 * methods:
 *  - addFront
 *  - addBack
 *  - removeFront
 *  - removeBack
 *  - peekFront
 *  - peekBack
 *  - clear, isEmpty, size, toString
 */

class Deque {
  constructor() {
    this.count = 0;
    this.lowerCount = 0;
    this.items = {};
  }

  // 若不使用对象，使用的是数组，则考虑将所有元素向后移动一位
  addFront(element) {
    this.lowerCount -= 1;
    this.items[this.lowerCount] = element;
  }

  addBack(element) {
    this.items[this.count] = element;
    this.count += 1;
  }

  removeFront() {
    if (this.isEmpty()) {
      return undefined;
    }

    const result = this.items[this.lowerCount];
    delete this.items[this.lowerCount];
    this.lowerCount += 1;

    return result;
  }

  removeBack() {
    if (this.isEmpty()) {
      return undefined;
    }

    this.count -= 1;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }

  peekFront() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items[this.lowerCount];
  }

  peekBack() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items[this.count - 1];
  }

  isEmpty() {
    return this.count - this.lowerCount === 0;
  }

  size() {
    return this.count - this.lowerCount;
  }

  clear() {
    this.count = 0;
    this.lowerCount = 0;
    this.items = {};
  }

  toString() {
    if (this.isEmpty()) {
      return "";
    }

    let objString = `${this.items[this.lowerCount]}`;

    for (let i = this.lowerCount + 1; i < this.count; i += 1) {
      objString = `${objString}, ${this.items[i]}`;
    }

    return objString;
  }
}

// 使用
const deque = new Deque();
console.log(deque.isEmpty());
deque.addBack("John");
deque.addBack("Remie");
console.log(deque.toString());
deque.addBack("Derek");
console.log(deque.size());
console.log(deque.isEmpty());
deque.addFront("Bob");
console.log(deque.toString());
deque.removeFront();
console.log(deque.toString());
deque.removeBack();
console.log(deque.toString());
deque.addFront("Bob");
console.log(deque.toString());

// 例子：回文检查器
// 思路：首先检查输入是否合法，其次转化为小写并且去掉空格，然后使用双端队列
//      我的代码使用的是 addBack 和 removeBack 保存反序的字符串，
//      实际上还可以通过 removeFront 和 removeBack 分别比较首部和尾部的字符，直到 deque.size() < 2

function palindromeChecker(aString) {
  // first check aString is legal
  if (aString === undefined || aString === null || aString.length === 0) {
    return false;
  }

  const lowerString = aString.toLocaleLowerCase().split(" ").join("");

  const deque = new Deque();
  let result = "";
  for (let i = 0; i < lowerString.length; i += 1) {
    deque.addBack(lowerString[i]);
  }

  for (let i = 0; i < lowerString.length; i += 1) {
    result = result + deque.removeBack();
  }

  return result === lowerString;
}

console.log(palindromeChecker("abc"));
console.log(palindromeChecker("abbc"));
console.log(palindromeChecker("tenet"));
console.log(palindromeChecker("Step on no pets"));
