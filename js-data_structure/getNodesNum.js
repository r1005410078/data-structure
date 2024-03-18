function getNodesNum(node) {
  if (!node) return 0;

  let leftDepth = 0;
  {
    let cur = node;
    while (cur) {
      cur = cur.left;
      leftDepth++;
    }
  }

  let rightDepth = 0;
  {
    let cur = node;
    while (cur) {
      cur = cur.right;
      rightDepth++;
    }
  }

  if (leftDepth === rightDepth) {
    return (2 << (leftDepth - 1)) - 1;
  }

  let leftNum = getNodesNum(node.left);
  let rightNum = getNodesNum(node.right);

  return leftNum + rightNum + 1;
}

let num = getNodesNum({
  value: 1,
  left: {
    value: 2,
    left: {
      value: 2,
      left: {
        value: 2,
      },
      right: {
        value: 3,
      },
    },
    right: {
      value: 3,
      left: {
        value: 2,
      },
      right: {
        value: 3,
      },
    },
  },
  right: {
    value: 3,
    left: {
      value: 2,
    },
    right: {
      value: 3,
    },
  },
});

console.log(num);
