/**
 * @param {String} num
 * @param {number} k
 * @return {String}
 */
const removeK = function (num, k) {
  let res = "0";
  for (let c of num) {
    while (k !== 0 && res[res.length - 1] > c) {
      k -= 1;
      res = res.substr(0, res.length - 1);
    }
    res += c;
  }

  while (k !== 0) {
    k -= 1;
    res.substr(0, res.length - 1);
  }

  // 前导 0
  k = 0;
  for (let c of res) {
    if (c === "0") {
      k += 1;
    } else {
      break;
    }
  }

  return k === res.length ? "0" : res.substr(k, res.length);
};

// test
console.log(removeK("10", 2));
