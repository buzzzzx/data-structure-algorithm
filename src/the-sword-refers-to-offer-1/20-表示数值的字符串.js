/**
 * @param {string} s
 * @return {boolean}
 */
const isNumber = function (s) {
  const State = {
    STATE_INITIAL: "STATE_INITIAL",
    STATE_INT_SIGN: "STATE_INT_SIGN",
    STATE_INTEGER: "STATE_INTEGER",
    STATE_POINT_WITHOUT_INT: "STATE_POINT_WITHOUT_INT",
    STATE_POINT: "STATE_POINT",
    STATE_FRACTION: "STATE_FRACTION",
    STATE_EXP: "STATE_EXP",
    STATE_EXP_SIGN: "STATE_EXP_SIGN",
    STATE_EXP_NUMBER: "STATE_EXP_NUMBER",
    STATE_END: "STATE_END",
  };

  const CharType = {
    CHAR_SPACE: "CHAR_SPACE",
    CHAR_SIGN: "CHAR_SIGN",
    CHAR_POINT: "CHAR_POINT",
    CHAR_NUMBER: "CHAR_NUMBER",
    CHAR_EXP: "CHAR_EXP",
    CHAR_ILLEGAL: "CHAR_ILLEGAL",
  };

  const tranfer = {
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
    [State.STATE_POINT_WITHOUT_INT]: {
      [CharType.CHAR_NUMBER]: State.STATE_FRACTION,
    },
    [State.STATE_FRACTION]: {
      [CharType.CHAR_NUMBER]: State.STATE_FRACTION,
      [CharType.CHAR_EXP]: State.STATE_EXP,
      [CharType.CHAR_SPACE]: State.STATE_END,
    },
    [State.STATE_INTEGER]: {
      [CharType.CHAR_NUMBER]: State.STATE_INTEGER,
      [CharType.CHAR_EXP]: State.STATE_EXP,
      [CharType.CHAR_POINT]: State.STATE_POINT,
      [CharType.CHAR_SPACE]: State.STATE_END,
    },
    [State.STATE_POINT]: {
      [CharType.CHAR_NUMBER]: State.STATE_FRACTION,
      [CharType.CHAR_EXP]: State.STATE_EXP,
      [CharType.CHAR_SPACE]: State.STATE_END,
    },
    [State.STATE_EXP]: {
      [CharType.CHAR_NUMBER]: State.STATE_EXP_NUMBER,
      [CharType.CHAR_SIGN]: State.STATE_EXP_SIGN,
    },
    [State.STATE_EXP_NUMBER]: {
      [CharType.CHAR_NUMBER]: State.STATE_EXP_NUMBER,
      [CharType.CHAR_SPACE]: State.STATE_END,
    },
    [State.STATE_EXP_SIGN]: {
      [CharType.CHAR_NUMBER]: State.STATE_EXP_NUMBER,
    },
    [State.STATE_END]: {
      [CharType.CHAR_SPACE]: State.STATE_END,
    },
  };
  const toCharType = function (ch) {
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
  };

  let state = State.STATE_INITIAL;
  for (let ch of s) {
    let charType = toCharType(ch);
    if (charType === CharType.CHAR_ILLEGAL) {
      return false;
    }
    let tmp = tranfer[state][charType];
    if (tmp == null) {
      return false;
    }
    state = tmp;
  }

  return (
    state === State.STATE_INTEGER ||
    state === State.STATE_FRACTION ||
    state === State.STATE_EXP_NUMBER ||
    state === State.STATE_POINT ||
    state === State.STATE_END
  );
};
