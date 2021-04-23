/**
 * @param {string} str
 * @return {number}
 */
const strToInt = function (str) {
  let s = str.trim();
  let pattern = /^[\-+]?\d+/;
  let match = s.match(pattern);
  if (match == null) {
    return 0;
  }
  const min = -(2 ** 31),
    max = 2 ** 31 - 1;
  let num = match[0];
  return num < min ? min : num > max ? max : num;
};

console.log(strToInt("words and 987"));
console.log(strToInt("-4193 with words"));
console.log(strToInt("-with words"));
console.log(strToInt("-91283472332"));
