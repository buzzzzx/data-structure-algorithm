/**
 * @param {string} s
 * @return {character}
 */
const firstUniqChar = function (s) {
  const map = {};
  for (let c of s) {
    map[c] = map[c] == null ? 1 : map[c] + 1;
  }
  for (let key in map) {
    if (map[key] === 1) {
      return key;
    }
  }

  return " ";
};
