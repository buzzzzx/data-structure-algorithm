/**
 * Algorithm: 插入排序
 * Description: 要进行排序的项和前面的项进行比较，选择插入位置进行插入
 */

const insertionSort = (array) => {
  const { length } = array;
  for (let i = 1; i < length; i += 1) {
    let j = i;
    let tmp = array[i];
    while (j > 0 && array[j - 1] > tmp) {
      array[j] = array[j - 1];
      j -= 1;
    }
    if (j !== i) {
      array[j] = tmp;
    }
  }

  return array;
};

// test
const array = [2, 3, 7, 4, 1, 6, 9, 8];
console.log(insertionSort(array));
