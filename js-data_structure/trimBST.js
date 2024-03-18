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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
var trimBST = function (root, low, high) {
  if (!root) return null;

  if (root.val < low || root.val > high) {
    if (!root.left && !root.right) return null;
    if (!root.left && root.right) {
      return trimBST(root.right, low, high);
    }

    if (root.left && !root.right) {
      return trimBST(root.left, low, high);
    }

    if (root.left && root.right) {
      let cur = root.right;
      if (!cur.left) {
        cur.left = root.left;
        return trimBST(cur, low, high);
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
      cur.left = root.left;
      cur.right = root.right;

      return trimBST(cur, low, high);
    }
  }

  root.left = trimBST(root.left, low, high);
  root.right = trimBST(root.right, low, high);

  return root;
};

const result = trimBST(
  {
    val: 41,
    left: {
      val: 37,
      left: {
        val: 24,
        left: {
          val: 1,
          left: {
            val: 0,
          },
          right: {
            val: 2,
            right: {
              val: 4,
            },
          },
        },
        right: {
          val: 35,
          left: {
            val: 30,
            right: 32,
          },
          right: {
            val: 36,
          },
        },
      },
      right: {
        val: 39,
      },
    },
    right: {
      val: 44,
    },
  },
  25,
  55
);

console.log(result);
