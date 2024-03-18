function constructMaximumBinaryTree(nums) {
  if (nums.length == 0) return;
  if (nums.length == 1) return new TreeNode(nums[0]);

  let max = Math.max.apply(null, nums);
  let idx = nums.indexOf(max);
  let node = new TreeNode(max);

  let left = constructMaximumBinaryTree(nums.slice(0, idx));
  let right = constructMaximumBinaryTree(nums.slice(idx + 1, nums.length));

  if (left) node.left = left;
  if (right) node.right = right;

  return node;
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

console.log(constructMaximumBinaryTree([3, 2, 1, 6, 0, 5]));
