/**
 * @param {string} s
 * @return {boolean}
 */

const State = {
  STATE_INITIAL: "STATE_INITIAL",
  STATE_INT_SIGN: "STATE_INT_SIGN",
  STATE_INTEGER: "STATE_INTEGER",
  STATE_POINT: "STATE_POINT",
  STATE_POINT_WITHOUT_INT: "STATE_POINT_WITHOUT_INT",
  STATE_FRACTION: "STATE_FRACTION",
  STATE_EXP: "STATE_EXP",
  STATE_EXP_SIGN: "STATE_EXP_SIGN",
  STATE_EXP_NUMBER: "STATE_EXP_NUMBER",
  STATE_END: "STATE_END",
};

const CharType = {
  CHAR_NUMBER: "CHAR_NUMBER",
  CHAR_EXP: "CHAR_EXP",
  CHAR_POINT: "CHAR_POINT",
  CHAR_SIGN: "CHAR_SIGN",
  CHAR_SPACE: "CHAR_SPACE",
  CHAR_ILLEGAL: "CHAR_ILLEGAL",
};

const transfer = {
  [State.STATE_INITIAL]: {
    [CharType.CHAR_SPACE]: State.STATE_INITIAL,
    [CharType.CHAR_SIGN]: State.STATE_INT_SIGN,
    [CharType.CHAR_POINT]: State.STATE_POINT_WITHOUT_INT,
    [CharType.CHAR_NUMBER]: State.STATE_INTEGER,
  },
  [State.STATE_INT_SIGN]: {
    [CharType.CHAR_POINT]: State.STATE_POINT_WITHOUT_INT,
    [CharType.CHAR_NUMBER]: State.STATE_INTEGER,
  },
  [State.STATE_INTEGER]: {
    [CharType.CHAR_NUMBER]: State.STATE_INTEGER,
    [CharType.CHAR_POINT]: State.STATE_POINT,
    [CharType.CHAR_EXP]: State.STATE_EXP,
    [CharType.CHAR_SPACE]: State.STATE_END,
  },
  [State.STATE_POINT_WITHOUT_INT]: {
    [CharType.CHAR_NUMBER]: State.STATE_FRACTION,
  },
  [State.STATE_POINT]: {
    [CharType.CHAR_NUMBER]: State.STATE_FRACTION,
    [CharType.CHAR_EXP]: State.STATE_EXP,
    [CharType.CHAR_SPACE]: State.STATE_END,
  },
  [State.STATE_FRACTION]: {
    [CharType.CHAR_NUMBER]: State.STATE_FRACTION,
    [CharType.CHAR_EXP]: State.STATE_EXP,
    [CharType.CHAR_SPACE]: State.STATE_END,
  },
  [State.STATE_EXP]: {
    [CharType.CHAR_SIGN]: State.STATE_EXP_SIGN,
    [CharType.CHAR_NUMBER]: State.STATE_EXP_NUMBER,
  },
  [State.STATE_EXP_SIGN]: {
    [CharType.CHAR_NUMBER]: State.STATE_EXP_NUMBER,
  },
  [State.STATE_EXP_NUMBER]: {
    [CharType.CHAR_NUMBER]: State.STATE_EXP_NUMBER,
    [CharType.CHAR_SPACE]: State.STATE_END,
  },
  [State.STATE_END]: {
    [CharType.CHAR_SPACE]: State.STATE_END,
  },
};

const isNumber = function (s) {
  if (s == null) {
    return false;
  }

  let state = State.STATE_INITIAL;
  for (let ch of s) {
    const charType = toCharType(ch);
    let st;
    if (transfer[state] == null) {
      return false;
    } else {
      st = transfer[state][charType];
      if (st == null) {
        return false;
      }
    }
    state = st;
  }

  return (
    state === State.STATE_INTEGER ||
    state === State.STATE_POINT ||
    state === State.STATE_FRACTION ||
    state === State.STATE_EXP_NUMBER ||
    state === State.STATE_END
  );
};

function toCharType(ch) {
  if (ch === "+" || ch === "-") {
    return CharType.CHAR_SIGN;
  } else if (ch === "e" || ch === "E") {
    return CharType.CHAR_EXP;
  } else if (ch === ".") {
    return CharType.CHAR_POINT;
  } else if (ch === " ") {
    return CharType.CHAR_SPACE;
  } else if (!Number.isNaN(parseInt(ch))) {
    return CharType.CHAR_NUMBER;
  } else {
    return CharType.CHAR_ILLEGAL;
  }
}

// test
// console.log(isNumber("1 4"));
// console.log(isNumber(" "));
// console.log(isNumber("+100"));
// console.log(isNumber("5e2"));
// console.log(isNumber("-1E-16"));
// console.log(isNumber("12e"));
// console.log(isNumber("1.2.3"));
// console.log(isNumber("te1"));
console.log(isNumber("-1.e49046 "));
