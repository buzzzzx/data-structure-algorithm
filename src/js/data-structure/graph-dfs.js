/**
 * 使用 DFS 广度优先算法进行：
 * - 遍历图
 * - 对于给定的图G，我们希望深度优先搜索算法遍历图G的所有节点，构建“森林”（有根树的一个集合）以及一组源顶点（根），并输出两个数组：发现时间和完成探索时间
 * - 拓扑排序（只能应用有向无环图）
 */

import { Color, initializeColor } from "../utils/index.js";
import { getNewGraph, Graph } from "./graph.js";

// 图的遍历
const depthFirstSearch = (graph, callback) => {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  const colors = initializeColor(vertices);

  for (let i = 0; i < vertices.length; i += 1) {
    if (colors[vertices[i]] === Color.WHITE) {
      depthFirstSearchVisit(colors, vertices[i], adjList, callback);
    }
  }
};

function depthFirstSearchVisit(colors, v, adjList, callback) {
  if (callback) {
    callback(v);
  }
  colors[v] = Color.GRAY;
  const neighbours = adjList.get(v);
  for (let i = 0; i < neighbours.length; i += 1) {
    if (colors[neighbours[i]] === Color.WHITE) {
      depthFirstSearchVisit(colors, neighbours[i], adjList, callback);
    }
  }
  colors[v] = Color.BLACK;
}

// 构造森林，返回发现时间和探索完成时间
function dfs(graph) {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  const colors = initializeColor(vertices);
  const d = {};
  const f = {};
  const p = {};
  const time = { count: 0 };
  // initialize d f p
  for (let i = 0; i < vertices.length; i += 1) {
    d[vertices[i]] = 0;
    f[vertices[i]] = 0;
    p[vertices[i]] = null;
  }

  for (let i = 0; i < vertices.length; i += 1) {
    if (colors[vertices[i]] === Color.WHITE) {
      dfsVisit(colors, vertices[i], adjList, d, f, p, time);
    }
  }

  return {
    discovery: d,
    finished: f,
    predecessors: p,
  };
}

function dfsVisit(colors, v, adjList, d, f, p, time) {
  d[v] = ++time.count;
  colors[v] = Color.GRAY;

  const neighbours = adjList.get(v);
  for (let i = 0; i < neighbours.length; i += 1) {
    if (colors[neighbours[i]] === Color.WHITE) {
      dfsVisit(colors, neighbours[i], adjList, d, f, p, time);
      p[neighbours[i]] = v;
    }
  }

  f[v] = ++time.count;
  colors[v] = Color.BLACK;
}

// test
const graph = getNewGraph();

// test depthFirstSearch
const printVertex = (v) => {
  console.log("Visited vertex: " + v);
};

depthFirstSearch(graph, printVertex);

// test dfs - 拓扑排序
const dagGraph = new Graph(true);
const myVertices = ["A", "B", "C", "D", "E", "F"];
for (let i = 0; i < myVertices.length; i += 1) {
  dagGraph.addVertex(myVertices[i]);
}
dagGraph.addEdge("A", "C");
dagGraph.addEdge("A", "D");
dagGraph.addEdge("B", "D");
dagGraph.addEdge("B", "E");
dagGraph.addEdge("C", "F");
dagGraph.addEdge("F", "E");

const result = dfs(dagGraph);

const fTimes = result.finished;
let s = "";
while (Object.keys(fTimes).length !== 0) {
  let max = 0;
  let maxName = null;
  for (let key in fTimes) {
    if (fTimes[key] > max) {
      max = fTimes[key];
      maxName = key;
    }
  }
  delete fTimes[maxName];
  if (s === "") {
    s = `${maxName}`;
  } else {
    s = `${maxName} - ${s}`;
  }
}
console.log(s);
