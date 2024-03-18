/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums, startIndex = 0, result = [], path = []) {
  result.push(path.concat([]));
  if (startIndex === nums.length) {
    return result;
  }

  for (let i = startIndex; i < nums.length; i++) {
    const el = nums[i];
    path.push(el);
    subsets(nums, i + 1, result, path);
    path.pop();
  }

  return result;
};

console.log(subsets([1, 2, 3]));
