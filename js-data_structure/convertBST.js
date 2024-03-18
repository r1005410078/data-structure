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
 * @return {TreeNode}
 */

let sum = 0;
var convertBST = function (root) {
  if (!root) return null;

  convertBST(root.right);
  root.val += sum;
  sum = root.val;

  convertBST(root.left);

  return root;
};

const root = convertBST({
  val: 4,
  left: {
    val: 1,
    left: {
      val: 0,
    },
    right: {
      val: 2,
      right: {
        val: 3,
      },
    },
  },
  right: {
    val: 6,
    left: {
      val: 5,
    },
    right: {
      val: 7,
      right: {
        val: 8,
      },
    },
  },
});

console.log(root);

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
