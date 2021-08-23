function givePapers(arr) {
  const len = arr.length;
  let minAge = Infinity;
  let minIdx = -1;
  for (let i = 0; i < len; i += 1) {
    if (arr[i] < minAge) {
      minAge = arr[i];
      minIdx = i;
    }
  }

  const res = [];
  res[minIdx] = 1;
  let count = 1;

  let next = (minIdx + 1) % len;
  while (count < len) {
    let leftIdx = (next - 1 + len) % len;
    let rightIdx = (next + 1) % len;
    let tmp = 1;
    if (arr[next] > arr[leftIdx]) {
      tmp = res[leftIdx] ? res[leftIdx] : tmp;
    }
  }

  return res;
}
