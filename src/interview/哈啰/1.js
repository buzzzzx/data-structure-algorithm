const main = (n, array) => {
  quick(array, 0, array.length - 1);
  const res = [1];
  for (let i = 1; i < n; i += 1) {
    if (array[i] === array[i - 1]) {
      res.push(res[i - 1]);
      continue;
    }

    res.push(res[i - 1] + 1);
  }
  console.log(res.join(" "));
};

const quick = (array, left, right) => {
  if (right <= left) {
    return;
  }

  let index = partition(array, left, right);
  quick(array, left, index - 1);
  quick(array, index + 1, right);
};

// 以左边第一个数作为基数：在几乎已排序的数组中表现不好
const partition = (array, left, right) => {
  let pivot = left;
  let tmp = array[pivot];
  let i = left;
  let j = right;
  while (i !== j) {
    while (i < j && array[j] >= tmp) {
      j -= 1;
    }
    while (i < j && array[i] <= tmp) {
      i += 1;
    }

    if (i < j) {
      let tmp = array[i];
      array[i] = array[j];
      array[j] = tmp;
    }
  }

  array[pivot] = array[i];
  array[i] = tmp;
  return i;
};

// test
console.log(main(4, [1, 1, 4, 5]));
