/**
 * Data structure: Queue
 * methods:
 *  - enqueue
 *  - dequeue
 *  - peek
 *  - size
 *  - isEmpty
 *  - clear
 */

class Queue {
  constructor() {
    this.count = 0;
    this.lowerCount = 0;
    this.items = {};
  }

  enqueue(element) {
    this.items[this.count] = element;
    this.count += 1;
  }

  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }

    const result = this.items[this.lowerCount];
    delete this.items[this.lowerCount];
    this.lowerCount += 1;
    return result;
  }

  peek() {
    return this.isEmpty() ? undefined : this.items[this.lowerCount];
  }

  isEmpty() {
    return this.count - this.lowerCount === 0;
  }

  size() {
    return this.count - this.lowerCount;
  }

  clear() {
    this.lowerCount = 0;
    this.count = 0;
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

// 例子：击鼓传花
// 思路：先将玩家都加到队列中，然后根据指定的数字进行传花，从队列首部开始，移除一项再将其添加到尾部
//      模拟击鼓传花中把花传给了旁边的人，自己被淘汰的危险系数暂时降为最低。
function hotPotato(elementList, num) {
  const queue = new Queue();
  for (let i = 0; i < elementList.length; i += 1) {
    queue.enqueue(elementList[i]);
  }

  const eliminatedList = [];
  while (queue.size() > 1) {
    for (let i = 0; i < num; i += 1) {
      queue.enqueue(queue.dequeue());
    }

    eliminatedList.push(queue.dequeue());
  }

  return {
    eliminated: eliminatedList,
    winner: queue.dequeue(),
  };
}
