/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let step = 0;
  for (let slow = nums.length - 1, fast = slow - 1; fast > -1; fast--) {
    if (nums[fast] === 0) {
      step = slow - fast;
      continue;
    }

    if (nums[fast] <= step && step !== 0) {
      step = slow - fast;
    } else {
      step = 0;
      slow = fast;
    }
  }

  return step <= 0;
};

console.log(canJump([3, 0, 8, 2, 0, 0, 1]));
