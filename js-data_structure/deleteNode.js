/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (node, key) {
  if (!node) return null;
  if (node.val === key) {
    if (!node.left && !node.right) return null;
    if (node.left && !node.right) return node.left;
    if (node.right && !node.left) return node.right;
    if (node.right && node.left) {
      let cur = node.right;
      if (!cur.left) {
        cur.left = node.left;
        node.right = node.right.right;
        return cur;
      }

      let pre = cur;

      while (cur) {
        if (cur.left) {
          pre = cur;
          cur = cur.left;
          continue;
        }
        break;
      }

      pre.left = cur.right;
      cur.left = node.left;
      cur.right = node.right;
      return cur;
    }
  }

  if (node.val > key) {
    node.left = deleteNode(node.left, key);
  } else {
    node.right = deleteNode(node.right, key);
  }

  return node;
};

/**
 * 
  {
    val: 3,
    left: {
      val: 2,
    },
    right: {
      val: 5,
      left: {
        val: 4,
      },
      right: {
        val: 10,
        left: {
          val: 8,
          left: {
            val: 7,
          },
        },
        right: {
          val: 15,
        },
      },
    },
  },
  5
 */

let val = deleteNode(
  {
    val: 20,
    left: {
      val: 10,
      left: {
        val: 8,
      },
      right: {
        val: 13,
        right: {
          val: 16,
        },
        left: {
          val: 11,
          right: {
            val: 12,
          },
        },
      },
    },
    right: {
      val: 21,
      right: {
        val: 26,
      },
    },
  },
  10

  // {
  //   val: 3,
  //   left: {
  //     val: 2,
  //   },
  //   right: {
  //     val: 5,
  //     left: {
  //       val: 4,
  //     },
  //     right: {
  //       val: 10,
  //       left: {
  //         val: 8,
  //         left: {
  //           val: 7,
  //         },
  //       },
  //       right: {
  //         val: 15,
  //       },
  //     },
  //   },
  // },
  // 6
);

console.log(val);

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
