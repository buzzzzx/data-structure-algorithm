/**
 * 双指针
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
const compareVersion = function (version1, version2) {
  const len1 = version1.length;
  const len2 = version2.length;
  let i = 0;
  let j = 0;

  while (i < len1 || j < len2) {
    let num1 = 0;
    while (i < len1 && version1[i] !== ".") {
      num1 += num1 * 10 + Number(version1[i]);
      i += 1;
    }
    let num2 = 0;
    while (j < len2 && version2[j] !== ".") {
      num2 += num2 * 10 + Number(version2[j]);
      j += 1;
    }

    if (num1 < num2) {
      return -1;
    }
    if (num1 > num2) {
      return 1;
    }
    i += 1;
    j += 1;
  }

  return 0;
};

console.log(compareVersion("1.01", "1.001"));

// 使用 split 分割
const compareVersion1 = function (version1, version2) {
  const arr1 = version1.split(".");
  const arr2 = version2.split(".");
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    let v1 = arr1[i] === "" ? 0 : parseInt(arr1[i]);
    let v2 = arr1[i] === "" ? 0 : parseInt(arr2[i]);
    if (v1 === v2) {
      i += 1;
      j += 1;
    } else if (v1 < v2) {
      return -1;
    } else {
      return 1;
    }
  }

  while (i !== arr1.length) {
    let v1 = arr1[i] === "" ? 0 : parseInt(arr1[i]);
    if (v1 !== 0) {
      return 1;
    }
    if (v1 === 0 && i === arr1.length - 1) {
      return 0;
    }
    i += 1;
  }
  while (j !== arr2.length) {
    let v1 = arr2[j] === "" ? 0 : parseInt(arr2[j]);
    if (v1 !== 0) {
      return -1;
    }
    if (v1 === 0 && j === arr2.length - 1) {
      return 0;
    }
    j += 1;
  }

  return 0;
};
