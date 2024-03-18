function hasPathSum(node, targetSum) {
  targetSum -= node.val;
  if (!node.left && !node.right) {
    return targetSum === 0;
  }

  if (node.left) {
    if (hasPathSum(node.left, targetSum)) {
      return true;
    }
    targetSum += node.val;
  }

  if (node.right) {
    targetSum -= node.val;
    if (hasPathSum(node.right, targetSum)) return true;
    targetSum += node.val;
  }

  return false;
}

console.log(
  hasPathSum(
    {
      val: 5,
      left: {
        val: 4,
        left: {
          val: 11,
          left: {
            val: 2,
          },
          right: {
            val: 7,
          },
        },
      },
      right: {
        val: 8,
        left: {
          val: 13,
        },
        right: {
          val: 4,
          right: {
            val: 1,
          },
        },
      },
    },
    26
  )
);
