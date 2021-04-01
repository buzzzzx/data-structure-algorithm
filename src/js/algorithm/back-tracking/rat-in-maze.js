/**
 * Algorithm: 回溯算法 - 老鼠迷宫问题
 * 思路：使用递归的方式
 * - 不断的判断当前位置是否可以加入解的路径，是的话就继续移动到下一个位置并继续判断，
 * - 如果所有下一个位置都不能行走，那么当前位置不能作为路径，回溯到之前的位置继续判断另一个下一个位置
 * - 直到当前位置已经到了最后一个位置，则成功，或者所有的可能性都试过还是不行，则失败
 */

const ratInMaze = (maze) => {
  const solution = [];
  for (let i = 0; i < maze.length; i += 1) {
    solution[i] = [];
    for (let j = 0; j < maze[i].length; j += 1) {
      solution[i][j] = 0;
    }
  }

  if (findPath(maze, 0, 0, solution)) {
    return solution;
  } else {
    return "No solution";
  }
};

const findPath = (maze, x, y, solution) => {
  const m = maze.length;
  const n = maze[0].length;

  if (x === m - 1 && y === n - 1) {
    solution[x][y] = 1;
    return true;
  }

  if (isSafe(maze, x, y)) {
    solution[x][y] = 1;
    if (findPath(maze, x, y + 1, solution)) {
      return true;
    }

    if (findPath(maze, x + 1, y, solution)) {
      return true;
    }

    solution[x][y] = 0;
    return false;
  }

  return false;
};

const isSafe = (maze, x, y) => {
  const m = maze.length;
  const n = maze[0].length;
  return x < m && y < n && x >= 0 && y >= 0 && maze[x][y] !== 0;
};

// test
const maze = [
  [1, 0, 0, 0],
  [1, 1, 1, 1],
  [0, 0, 1, 0],
  [0, 1, 1, 1],
];

console.log(ratInMaze(maze));
