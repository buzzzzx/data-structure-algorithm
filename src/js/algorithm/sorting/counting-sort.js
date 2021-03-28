/**
 * Algorithm: 计数排序
 * Description: 使用一个临时数组来存储原数组的计数信息，原数组元素的大小作为索引，个数作为值
 */

const countingSort = (array) => {
  if (array.length < 2) {
    return array;
  }

  const maxValue = findMaxValue(array);
  const countArr = new Array(maxValue + 1);
  for (let i = 0; i < array.length; i += 1) {
    if (!countArr[array[i]]) {
      countArr[array[i]] = 0;
    }
    countArr[array[i]] += 1;
  }

  let sortIndex = 0;
  for (let i = 0; i < countArr.length; i += 1) {
    let count = countArr[i];
    while (count > 0) {
      array[sortIndex] = i;
      sortIndex += 1;
      count -= 1;
    }
  }

  return array;
};

const findMaxValue = (array) => {
  let maxValue = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (maxValue < array[i]) {
      maxValue = array[i];
    }
  }

  return maxValue;
};

// test
// const array = [2, 3, 7, 4, 1, 6, 9, 8];
const array = [2, 3, 7, 4, 3, 1, 6, 9, 8];
console.log(countingSort(array));
