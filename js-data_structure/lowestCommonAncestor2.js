function lowestCommonAncestor(node, p, q) {
  if (!node) return null;

  if (p.val < node.val && q.val < node.val) {
    return lowestCommonAncestor(node.left, p, q);
  }

  if (p.val > node.val && q.val > node.val) {
    return lowestCommonAncestor(node.right, p, q);
  }

  return node;
}

let case1 = {
  val: 6,
  left: {
    val: 2,
    left: {
      val: 0,
    },
    right: {
      val: 4,
      left: {
        val: 3,
      },
      right: {
        val: 5,
      },
    },
  },
  right: {
    val: 8,
    left: {
      val: 7,
    },
    right: {
      val: 9,
    },
  },
};
const case2 = {
  val: 1,
  left: {
    val: 2,
  },
};
const root = lowestCommonAncestor(case1, new TreeNode(3), new TreeNode(5));

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

console.log(root);
