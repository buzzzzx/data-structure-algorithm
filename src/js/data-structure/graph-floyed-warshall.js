/**
 * 最短路径算法 Floy-Warshall：所有源到所有顶点的最短路径
 */

const graph = [
  [0, 2, 4, 0, 0, 0],
  [0, 0, 1, 4, 2, 0],
  [0, 0, 0, 0, 3, 0],
  [0, 0, 0, 0, 0, 2],
  [0, 0, 0, 3, 0, 2],
  [0, 0, 0, 0, 0, 0],
];

const floyedWarshall = (graph) => {
  const distances = [];
  const { length } = graph;

  // initialize distances
  for (let i = 0; i < length; i += 1) {
    distances[i] = [];
    for (let j = 0; j < length; j += 1) {
      if (i === j) {
        distances[i][j] = 0;
      } else if (graph[i][j] === 0) {
        distances[i][j] = Infinity;
      } else {
        distances[i][j] = graph[i][j];
      }
    }
  }

  for (let k = 0; k < length; k += 1) {
    for (let i = 0; i < length; i += 1) {
      for (let j = 0; j < length; j += 1) {
        if (distances[i][k] + distances[k][j] < distances[i][j]) {
          distances[i][j] = distances[i][k] + distances[k][j];
        }
      }
    }
  }

  return distances;
};

// test
console.log(floyedWarshall(graph));
