/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums, path = [], result = [], used = []) {
  if (path.length === nums.length) {
    result.push(path.concat([]));
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    if (used[i]) {
      continue;
    }

    path.push(nums[i]); // [1]
    used[i] = true; // used[]
    permute(nums, path, result, used);
    path.pop();
    used[i] = false;
  }

  return result;
};

console.log(permute([1, 1, 2]));
