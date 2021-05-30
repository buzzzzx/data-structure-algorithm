/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function (s) {
  const splitted = s.trimStart().trimEnd().split(/\s+/g);
  let i = 0;
  let j = splitted.length - 1;
  while (i < j) {
    let tmp = splitted[i];
    splitted[i] = splitted[j];
    splitted[j] = tmp;
    i += 1;
    j -= 1;
  }

  return splitted.join(" ");
};

console.log(reverseWords("    hello  world!  "));
