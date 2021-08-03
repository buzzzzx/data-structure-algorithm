function findIndex(str, subStr) {
  let i = 0;
  let j = 0;
  while (j < subStr.length && i < str.length) {
    if (str[i] === subStr[j]) {
      i += 1;
      j += 1;
    } else {
      if (j === 0) {
        i += 1;
      }
      j = 0;
    }
  }
  return i - subStr.length;
}

// test
console.log(findIndex("abcde", "cde"));
