/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  return process(nums.sort((a, b) => a - b));
};

function process(nums, startIndex = 0, result = [], path = []) {
  const used = [];
  result.push(path.concat([]));
  if (startIndex === nums.length) return result;

  for (let i = startIndex; i < nums.length; i++) {
    const el = nums[i];
    used[i] = true;
    if (el === nums[i - 1] && used[i - 1]) {
      continue;
    }
    path.push(el);
    process(nums, i + 1, result, path);
    path.pop();
  }

  return result;
}

console.log(subsetsWithDup([4, 4, 4, 1, 4]));
