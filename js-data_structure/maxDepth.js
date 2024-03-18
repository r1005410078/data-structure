function maxDepth(node) {
  if (!node) return 0;

  let leftDepth = maxDepth(node.left);
  let rightDepth = maxDepth(node.right);

  return 1 + Math.max(leftDepth, rightDepth);
}

let max = maxDepth({
  value: 1,
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

console.log(max);
