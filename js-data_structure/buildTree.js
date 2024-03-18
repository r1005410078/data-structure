/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  const val = postorder[postorder.length - 1];

  const node = new TreeNode(val || 0);
  const i = inorder.indexOf(val);

  if (postorder.length === 0) return null;
  if (postorder.length === 1) return node;

  const left = buildTree(inorder.slice(0, i), postorder.slice(0, i));
  const right = buildTree(
    inorder.slice(i + 1, inorder.length),
    postorder.slice(i, postorder.length - 1)
  );

  node.left = left;
  node.right = right;

  return node;
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

console.log(buildTree([2, 1], [2, 1]));
