/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
  return process(nums);
};

function process(nums, startIndex = 0, result = [], path = []) {
  const used = [];
  if (path.length > 1) {
    result.push(path.concat([]));
  }

  if (startIndex === nums.length) return result;

  for (let i = startIndex; i < nums.length; i++) {
    const el = nums[i];

    if (used[el]) {
      continue;
    }

    if (path[path.length - 1] > el) {
      continue;
    }

    path.push(el);
    process(nums, i + 1, result, path);
    path.pop();
    used[el] = true;
  }

  return result;
}
