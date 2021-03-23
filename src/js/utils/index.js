export const defaultEquals = (a, b) => {
  return a === b;
};

export const defaultToString = (item) => {
  if (item === null) {
    return "NULL";
  } else if (item === undefined) {
    return "UNDEFINED";
  } else if (typeof item === "string" || item instanceof String) {
    return `${item}`;
  } else {
    return item.toString();
  }
};

export const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
};
