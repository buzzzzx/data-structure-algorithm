/**
 * 使用 BFS 广度优先算法进行：
 * - 遍历图
 * - 寻找最短路径
 */

import { Color, initializeColor } from "../utils/index.js";
import { getNewGraph } from "./graph.js";
import { Queue } from "./queue.js";
import { Stack } from "./stack-array.js";

// 遍历图
const breathFirstSearch = (graph, src, callback) => {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  const colors = initializeColor(vertices);
  const queue = new Queue();

  queue.enqueue(src);

  while (!queue.isEmpty()) {
    const v = queue.dequeue();
    colors[v] = Color.GRAY;
    const neighbours = adjList.get(v);
    for (let i = 0; i < neighbours.length; i += 1) {
      const w = neighbours[i];
      if (colors[w] === Color.WHITE) {
        queue.enqueue(w);
        colors[w] = Color.GRAY;
      }
    }
    colors[v] = Color.BLACK;
    if (callback) {
      callback(v);
    }
  }
};

// 寻找最短路径
const bfs = (graph, src) => {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  const colors = initializeColor(vertices);
  const queue = new Queue();
  const distances = {}; // distances[v] 表示 v 到 src 的距离
  const predecessors = {}; // predecessors[u] 表示 u 的前继节点
  // initialize distances and predecessors
  for (let i = 0; i < vertices.length; i += 1) {
    distances[vertices[i]] = 0;
    predecessors[vertices[i]] = null;
  }

  queue.enqueue(src);

  while (!queue.isEmpty()) {
    const v = queue.dequeue();
    colors[v] = Color.GRAY;
    const neighbours = adjList.get(v);
    for (let i = 0; i < neighbours.length; i += 1) {
      const w = neighbours[i];
      if (colors[w] === Color.WHITE) {
        distances[w] = distances[v] + 1;
        predecessors[w] = v;
        queue.enqueue(w);
        colors[w] = Color.GRAY;
      }
    }
  }

  return {
    distances,
    predecessors,
  };
};

const graph = getNewGraph();
const vertices = graph.getVertices();

// test breadthFirstSearch
const printVertex = (v) => {
  console.log("Visited vertex: " + v);
};

breathFirstSearch(graph, vertices[0], printVertex);

// test bfs
const { distances, predecessors } = bfs(graph, vertices[0]);
console.log({ distances, predecessors });

const fromVertex = vertices[0];
for (let i = 1; i < vertices.length; i += 1) {
  let s = `${fromVertex}`;
  let path = new Stack();
  for (
    let toVertex = vertices[i];
    toVertex !== fromVertex;
    toVertex = predecessors[toVertex]
  ) {
    path.push(toVertex);
  }

  while (!path.isEmpty()) {
    s += ` - ${path.pop()}`;
  }

  console.log(s);
}
