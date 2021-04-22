/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
const add = function (a, b) {
  while (b !== 0) {
    let carry = (a & b) << 1;
    a = a ^ b;
    b = carry;
  }

  return a;
};

// 我自己的想的——留作纪念
const add1 = function (a, b) {
  let res = [];
  let acc = 0;
  for (let i = 0; i < 32; i += 1) {
    let m = a & 1;
    let n = b & 1;
    if (m === 0 && n === 0) {
      res.push(acc);
      acc = 0;
    } else if (m === 0 || n === 0) {
      if (acc === 0) {
        res.push(1);
      } else {
        res.push(0);
        acc = 1;
      }
    } else {
      if (acc === 0) {
        res.push(0);
      } else {
        res.push(1);
      }
      acc = 1;
    }
    a >>= 1;
    b >>= 1;
  }

  console.log(res);
  res.reverse();
  if (res[0] === 0) {
    return parseInt(res.join(""), 2);
  } else {
    return -Math.pow(2, 31) + parseInt(res.join("").substring(1), 2);
  }
};

// test
console.log(add(1, -2));
