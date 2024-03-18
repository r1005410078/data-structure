function sumOfLeftLeaves(node, is_left) {
  if (!node) return 0;
  if (!node.left && !node.right) {
    return is_left ? node.val : 0;
  }

  let left = sumOfLeftLeaves(node.left, true);
  let right = sumOfLeftLeaves(node.right);

  return left + right;
}

let num = sumOfLeftLeaves({
  value: 3,
  left: {
    value: 9,
  },
  right: {
    value: 20,
    left: {
      value: 15,
    },
    right: {
      value: 7,
    },
  },
});

console.log("num", num);
