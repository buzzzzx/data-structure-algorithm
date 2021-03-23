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

export const defaultCompare = (a, b) => {
  if (a === b) {
    return 0;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
};

export const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
};
