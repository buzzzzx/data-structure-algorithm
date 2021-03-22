/**
 * Data structure: Set
 * Methods:
 *  - add(element)
 *  - delete(element)
 *  - has(element)
 *  - clear, size,  values
 */
class MySet {
  constructor() {
    this.items = {};
  }

  has(element) {
    // 调用 Object.prototype.hasOwnProperty.call()，而不是 this.items.hasOwnProperty
    // 是因为不是所有的对象都继承了 hasOwnProperty 并且就算是继承了这个方法也可能被覆盖
    return Object.prototype.hasOwnProperty.call(this.items, element);
  }

  add(element) {
    if (this.has(element)) {
      return false;
    }

    this.items[element] = element;
    return true;
  }

  delete(element) {
    if (!this.has(element)) {
      return false;
    }
    delete this.items[element];
    return true;
  }

  clear() {
    this.items = {};
  }

  size() {
    return Object.keys(this.items).length;
  }

  values() {
    return Object.values(this.items);
  }

  // 集合的运算
  union(otherSet) {
    const unionSet = new MySet();
    this.values().forEach((value) => unionSet.add(value));
    otherSet.values().forEach((value) => unionSet.add(value));

    return unionSet;
  }

  intersection(otherSet) {
    const intersectionSet = new MySet();
    let smallerValues, biggerValues;
    if (this.values().length > otherSet.values().length) {
      smallerValues = otherSet.values();
      biggerValues = this.values();
    } else {
      smallerValues = this.values();
      biggerValues = otherSet.values();
    }
    smallerValues.forEach((value) => {
      if (biggerValues.includes(value)) {
        intersectionSet.add(value);
      }
    });
  }

  difference(otherSet) {
    const differenceSet = new MySet();
    this.values().forEach((value) => {
      if (!otherSet.has(value)) {
        differenceSet.add(value);
      }
    });
  }

  isSubsetOf(otherSet) {
    if (this.size() > otherSet.size()) {
      return false;
    }

    this.values().forEach((value) => {
      if (!otherSet.has(value)) {
        return false;
      }
    });
    return true;
  }
}
