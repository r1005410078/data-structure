function insertIntoBST(node, val) {
  if (!node) return new TreeNode(val);
  if (val < node.val) {
    if (node.left) {
      insertIntoBST(node.left, val);
    } else {
      node.left = new TreeNode(val);
    }
  } else if (val > node.val) {
    if (node.right) {
      insertIntoBST(node.right, val);
    } else {
      node.right = new TreeNode(val);
    }
  }

  return node;
}

const root = insertIntoBST(
  {
    val: 4,
    left: {
      val: 2,
      left: {
        val: 1,
      },
      right: {
        val: 3,
      },
    },
    right: {
      val: 7,
    },
  },
  8
);

console.log(root);

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
