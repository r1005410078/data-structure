function isBalanced(node) {
  if (!node) return 0;

  let left = isBalanced(node.left);
  let right = isBalanced(node.right);

  if (left === -1 || right === -1) return -1;

  if (Math.abs(left - right) > 1) return -1;

  return Math.max(left, right) + 1;
}

let flag = isBalanced({
  value: 1,
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
  },
});

console.log(flag > -1);
