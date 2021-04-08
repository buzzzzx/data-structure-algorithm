function minNumberInRotateArray(rotatedArray) {
  const { length } = rotatedArray;
  if (length === 0) {
    return 0;
  }

  let p1 = 0;
  let p2 = length - 1;
  let midIdx = 0;
  let midVal = 0;
  while (p2 - p1 > 1) {
    midIdx = Math.floor((p1 + p2) / 2);
    midVal = rotatedArray[midIdx];
    if (midVal >= rotatedArray[p1]) {
      p1 = midIdx;
    } else {
      p2 = midIdx;
    }
  }

  return rotatedArray[p2];
}
