/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function (s, numRows) {
  if (numRows === 1) {
    return s;
  }
  let res = [];
  for (let i = 0; i < numRows; i += 1) {
    res[i] = [];
  }

  let currRow = 0;
  let goingDown = false;
  for (let c of s) {
    res[currRow].push(c);
    if (currRow === 0 || currRow === numRows - 1) {
      goingDown = !goingDown;
    }
    currRow += goingDown ? 1 : -1;
  }

  return res.flat().join("");
};

// 我写得弱智代码，留作纪念
const convert1 = function (s, numRows) {
  if (numRows === 1) {
    return s;
  }

  let res = [];
  for (let i = 0; i < numRows; i += 1) {
    res[i] = [];
  }

  const midCols = numRows - 2;
  let flag = 0;
  let idx = 0;
  while (idx < s.length) {
    let emptyStr = flag;
    if (flag === 0) {
      let cnt = numRows;
      while (cnt !== 0) {
        res[numRows - cnt].push(s[idx]);
        cnt -= 1;
        idx += 1;
      }
      flag = midCols;
    } else {
      let cnt = numRows;
      let startEmpty = emptyStr;
      let endEmpty = numRows - startEmpty - 1;
      while (startEmpty !== 0) {
        res[numRows - cnt].push("");
        startEmpty -= 1;
        cnt -= 1;
      }
      res[numRows - cnt].push(s[idx]);
      idx += 1;
      cnt -= 1;
      while (endEmpty !== 0) {
        res[numRows - cnt].push("");
        endEmpty -= 1;
        cnt -= 1;
      }

      flag -= 1;
    }
  }

  return res.flat().join("");
};

console.log(convert("PAYPALISHIRING", 3));
console.log(convert("PAYPALISHIRING", 4));
