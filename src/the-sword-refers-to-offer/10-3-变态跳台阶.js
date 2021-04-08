function jumpFloorII(number) {
  // write code here
  if (number === 1 || number === 2) {
    return number;
  }

  let count = 0;
  for (let i = 1; i < number; i += 1) {
    count += jumpFloorII(number - i);
  }

  return count + 1;
}

function moreClever(number) {
  return Math.pow(2, number - 1);
}
