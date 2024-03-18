function lowestCommonAncestor(node, p, q) {
  if (!node) return null;
  if (node.val === p.val || node.val === q.val) {
    return node.val;
  }

  let left = lowestCommonAncestor(node?.left, p, q);
  let right = lowestCommonAncestor(node?.right, p, q);

  if (left && right) return node.val;
  return left || right;
}

let case1 = {
  val: 3,
  left: {
    val: 5,
    left: {
      val: 6,
    },
    right: {
      val: 2,
      left: {
        val: 7,
      },
      right: {
        val: 4,
      },
    },
  },
  right: {
    val: 1,
    left: {
      val: 0,
    },
    right: {
      val: 8,
    },
  },
};
const case2 = {
  val: 1,
  left: {
    val: 2,
  },
};
const root = lowestCommonAncestor(case1, new TreeNode(1), new TreeNode(2));

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
console.log(root);
