/**
 * Data structure: Dictionary
 * Description: key-value pairs
 * Methods:
 *  - set(key, value)
 *  - remove(key)
 *  - hasKey(key)
 *  - get(key)
 *  - clear(), size(), isEmpty()
 *  - keys(), values(), keyValues()(返回[键，值]对)
 *  - forEach(callbackFn): 迭代字典中所有的键值对。callbackFn有两个参数：key和value。该方法可以在回调函数返回false时被中止（和Array类中的every方法相似）
 */

import { defaultToString } from "../utils/index";

class Dictionary {
  constructor(toStrFn = defaultToString) {
    this.table = {};
    this.toStrFn = toStrFn;
  }

  hasKey(key) {
    return Object.prototype.hasOwnProperty.call(this.table, this.toStrFn(key));
  }

  set(key, value) {
    if (key == null || value == null) {
      return false;
    }

    this.table[this.toStrFn(key)] = new ValuePair(key, value);
    return true;
  }

  remove(key) {
    if (!this.hasKey(key)) {
      return false;
    }

    delete this.table[this.toStrFn(key)];
    return true;
  }

  get(key) {
    const valuePair = this.table[this.toStrFn(key)];
    return valuePair == null ? undefined : valuePair.value;
  }

  keys() {
    return this.keyValues().map((valuePair) => valuePair.key);
  }

  values() {
    return this.keyValues().map((valuePair) => valuePair.value);
  }

  keyValues() {
    const valuePairs = [];
    for (const k in this.table) {
      valuePairs.push(this.table[k]);
    }

    return valuePairs;
  }

  clear() {
    this.table = {};
  }

  size() {
    return this.keyValues().length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  forEach(cb) {
    const valuePairs = this.keyValues();
    for (let i = 0; i < valuePairs.length; i += 1) {
      const result = cb(valuePairs[i].key, valuePairs[i].value);
      if (result === false) {
        break;
      }
    }
  }

  toString() {
    if (this.isEmpty()) {
      return "";
    }

    const valuePairs = this.keyValues();

    let objString = `${valuePairs[0].toString()}`;
    for (let i = 1; i < valuePairs.length; i += 1) {
      objString = `${objString}, ${valuePairs[i].toString()}`;
    }

    return objString;
  }
}

export class ValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }

  toString() {
    return `[#${this.key}: ${this.value}]`;
  }
}

// usage
const dictionary = new Dictionary();
dictionary.set("Gandalf", "123");
dictionary.set("John", "456");
dictionary.set("Kylo", "777");
dictionary.set({ a: 1, b: 2 }, "object");
dictionary.set({ c: 1, d: 2 }, "object2");

console.log(dictionary.keyValues());
console.log(dictionary.toString());
