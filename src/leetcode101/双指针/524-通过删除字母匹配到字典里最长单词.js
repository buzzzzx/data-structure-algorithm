/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
const findLongestWord = function (s, dictionary) {
  dictionary.sort((a, b) =>
    a.length !== b.length ? b.length - a.length : a.localeCompare(b)
  );
  for (let i = 0; i < dictionary.length; i += 1) {
    let p1 = 0;
    let p2 = 0;
    const item = dictionary[i];
    while (p1 < s.length && p2 < item.length) {
      if (s[p1] === item[p2]) {
        p2 += 1;
      }
      p1 += 1;
    }
    if (p2 === item.length) {
      return item;
    }
  }

  return "";
};
