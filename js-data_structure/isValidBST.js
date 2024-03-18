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
 * @return {boolean}
 */
var isValidBST = function (node, data = []) {
  if (node.left) {
    if (!isValidBST(node.left, data)) {
      return false;
    }
  }

  if (data[data.length - 1] >= node.val) {
    return false;
  }

  data.push(node.val);

  if (node.right) {
    if (!isValidBST(node.right, data)) {
      return false;
    }
  }

  return true;
};

let flag = isValidBST({
  val: 5,
  left: {
    val: 4,
  },
  right: {
    val: 7,
    left: {
      val: 4,
    },
    right: {
      val: 8,
    },
  },
});

console.log(flag);
