/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = function (num) {
  let res = "";
  const vals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const roma = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];

  for (let i = 0; i < 13; i += 1) {
    while (num >= vals[i]) {
      num -= vals[i];
      res += roma[i];
    }
  }

  return res;
};

const intToRoman1 = function (num) {
  let res = "";

  let digit = 1;
  let n;
  while (num > 0) {
    n = (num % 10) * digit;

    if (n < 5) {
      if (n === 4) {
        res = "IV" + res;
      } else {
        res = "I".repeat(n) + res;
      }
    } else if (n < 10) {
      if (n === 9) {
        res = "IX" + res;
      } else {
        res = "V" + "I".repeat(n - 5) + res;
      }
    } else if (n < 50) {
      if (n === 40) {
        res = "XL" + res;
      } else {
        res = "X".repeat(n / 10) + res;
      }
    } else if (n < 100) {
      if (n === 90) {
        res = "XC" + res;
      } else {
        res = "L" + "X".repeat((n - 50) / 10) + res;
      }
    } else if (n < 500) {
      if (n === 400) {
        res = "CD" + res;
      } else {
        res = "C".repeat(n / 100) + res;
      }
    } else if (n < 1000) {
      if (n === 900) {
        res = "CM" + res;
      } else {
        res = "D" + "C".repeat((n - 500) / 100) + res;
      }
    } else {
      res = "M".repeat(n / 1000) + res;
    }

    num = Math.floor(num / 10);
    digit *= 10;
  }

  return res;
};

// test
console.log(intToRoman(1994));
