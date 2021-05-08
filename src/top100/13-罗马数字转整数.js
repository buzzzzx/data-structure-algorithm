/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
  const roma = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let res = 0;
  let i = 0;
  let len = s.length;
  while (i < len) {
    if ((s[i] === "C" || s[i] === "X" || s[i] === "I") && i !== len - 1) {
      let tmp = roma[s.substring(i, i + 2)];
      if (tmp) {
        res += tmp;
        i += 2;
        continue;
      }
    }

    res += roma[s[i]];
    i += 1;
  }

  return res;
};

// test
console.log(romanToInt("MCMXCIV"));
