function minDepth(node) {
  if (!node) return 0;

  let leftDepth = minDepth(node.left);
  let rightDepth = minDepth(node.right);

  if (!node.left) {
    return 1 + rightDepth;
  }

  if (!node.right) {
    return 1 + leftDepth;
  }

  return 1 + Math.min(leftDepth, rightDepth);
}

let min = minDepth({
  value: 1,
  left: {
    value: 6,
  },
  right: {
    value: 2,
    left: {
      value: 4,
      left: {
        value: 6,
      },
      right: {
        value: 5,
      },
    },
    right: {
      value: 3,
    },
  },
});

console.log(min);
