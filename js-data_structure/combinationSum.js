/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (
  candidates,
  target,
  path = [],
  result = [],
  index = 0
) {
  if (target < 0) return result;
  if (target === 0) {
    result.push(path.concat([]));
    return result;
  }

  for (let i = index; i < candidates.length; i++) {
    const el = candidates[i];
    path.push(el);
    combinationSum(candidates, target - el, path, result, i);
    path.pop();
  }

  return result;
};

const arr = combinationSum([2, 3, 6, 7], 7);
console.log(arr);
