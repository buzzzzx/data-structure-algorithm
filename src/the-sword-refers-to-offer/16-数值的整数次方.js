function Power(base, exp) {
  if (equal(base, 0.0)) {
    if (exp === 0) {
      // 没有意义
      return 0;
    }
    if (exp < 0) {
      throw new Error("对零求负的整数次方");
    }
    if (exp > 0) {
      return 0;
    }
  } else {
    if (exp === 0) {
      return 1;
    }
    if (exp < 0) {
      base = 1 / base;
      exp = -exp;
    }
    return powerHelper(base, exp);
  }
}

function powerHelper(base, exp) {
  if (exp === 1) {
    return base;
  }

  let res = powerHelper(base, exp >> 1);
  if ((exp & 0x1) === 1) {
    res = res * res * base;
  } else {
    res = res * res;
  }

  return res;
}

function equal(num1, num2) {
  return num1 - num2 >= -0.00000001 && num1 - num2 <= 0.00000001;
}

// test
console.log(Power(2.0, 3));
console.log(Power(2.1, 3));
console.log(Power(2.0, -2));
