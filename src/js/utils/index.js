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

// graph
export const Color = {
  WHITE: 0, // 未访问
  GRAY: 1, // 已访问，未探索完成
  BLACK: 2, // 已探索完成
};

export const initializeColor = (vertices) => {
  const colors = {};
  for (let i = 0; i < vertices.length; i += 1) {
    colors[vertices[i]] = Color.WHITE;
  }
  return colors;
};

export const swap = (array, a, b) => {
  const tmp = array[a];
  array[a] = array[b];
  array[b] = tmp;
};
