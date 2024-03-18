function invertTree(root) {
  invertNode(root, root);
  return root;
}

function invertNode(left, right) {
  if (!left?.left && !right?.right) return;

  swap(left, right);
  invertNode(left?.left, right?.right);
  invertNode(right?.right, left?.left);
}

function swap(left, right) {
  const temp = right?.right;
  if (right) right.right = left?.left;
  if (left) left.left = temp;
}

let root = invertTree({
  val: 4,
  left: {
    val: 2,
    left: {
      val: 1,
      left: {
        val: 10,
      },
      right: {
        val: 11,
      },
    },
    right: {
      val: 3,
      left: {
        val: 12,
      },
      right: {
        val: 13,
      },
    },
  },
  right: {
    val: 7,
    left: {
      val: 6,
      left: {
        val: 14,
      },
      right: {
        val: 15,
      },
    },
    right: {
      val: 9,
      left: {
        val: 16,
      },
      right: {
        val: 17,
      },
    },
  },
});

console.log(root);
