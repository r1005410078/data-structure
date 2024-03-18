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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  if (val === root.val) return root;
  if (val < root.val) {
    if (root.left) {
      return searchBST(root.left, val);
    }
    return null;
  }

  if (root.right) {
    return searchBST(root.right, val);
  }

  return null;
};

const node = searchBST(
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
  2
);

console.log(node);
