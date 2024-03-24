/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums, path = [], result = [], used = []) {
  if (path.length === nums.length) {
    result.push(path.concat([]));
    return;
  }

  let _used = [];
  for (let i = 0; i < nums.length; i++) {
    if (used[i] || _used[nums[i]]) {
      continue;
    }

    path.push(nums[i]); // [1]
    used[i] = true; // used[]
    _used[nums[i]] = true;
    permuteUnique(nums, path, result, used);
    path.pop();
    used[i] = false;
  }

  return result;
};
