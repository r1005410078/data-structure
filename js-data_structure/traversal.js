/// https://leetcode.cn/problems/binary-tree-paths/

function binaryTreePaths(node, path = []) {
  let data = [];
  if (!node) return data;

  path.push(node.value);

  if (!node.left && !node.right) {
    data.push(path.join("->"));
    return data;
  }

  if (node.left) {
    data.push(...binaryTreePaths(node.left, path));
    path.pop();
  }

  if (node.right) {
    data.push(...binaryTreePaths(node.right, path));
    path.pop();
  }

  return data;
}

const data = binaryTreePaths(
  {
    value: 1,
    left: {
      value: 2,
      right: {
        value: 5,
      },
    },
    right: {
      value: 3,
    },
  },
  [],
  []
);

console.log("data", data);
