/**
 * @param {string} s
 * @return {character}
 */
const firstUniqChar = function (s) {
  const hashmap = {};
  for (let c of s) {
    hashmap[c] = hashmap[c] == null ? 1 : hashmap[c] + 1;
  }
  for (let k in hashmap) {
    if (hashmap[k] === 1) {
      return k;
    }
  }

  return " ";
};

// test
console.log(firstUniqChar("abaccdeff"));
