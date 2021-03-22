/**
 * 使用 built-in 的 Set
 */

const set = new Set();
set.add(1);
console.log(set.values()); //  @@iterator
console.log(set.has(1));
console.log(set.size);

const s1 = new Set([1, 2, 3]);
const s2 = new Set([4, 2, 3]);

// 模拟集合运算 - 使用扩展运算符
const unionSet = new Set([...s1, ...s2]);
const intersectionSet = new Set([...s1].filter((value) => s2.has(value)));
const differenceSet = new Set([...s1].filter((value) => !s2.has(value)));
