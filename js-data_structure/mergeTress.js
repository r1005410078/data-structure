/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  if (root1 && root2) {
    const newNode = new TreeNode(null);

    newNode.val = root1.val + root2.val;

    const left = mergeTrees(root1.left, root2.left);
    if (left) newNode.left = left;

    const right = mergeTrees(root1.right, root2.right);
    if (right) newNode.right = right;

    return newNode;
  }

  return root1 || root2;
};

const root1 = {
  val: 1,
  left: {
    val: 3,
    left: {
      val: 5,
    },
  },
  right: {
    val: 2,
  },
};
const root2 = {
  val: 2,
  left: {
    val: 1,
    right: {
      val: 4,
    },
  },
  right: {
    val: 3,
    right: {
      val: 7,
    },
  },
};

const newTrees = mergeTrees(root1, root2);

console.log(newTrees);

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
