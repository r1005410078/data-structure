/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
  let state;

  let res = [];
  for (let slow = 0, fast = 1; fast <= nums.length; fast++, slow++) {
    if (nums[fast] === undefined) {
      res.push(nums[slow]);
    }

    if (nums[fast] > nums[slow] && state !== 1) {
      state = 1;
      res.push(nums[slow]);
    }

    if (nums[fast] < nums[slow] && state !== -1) {
      state = -1;
      res.push(nums[slow]);
    }
  }

  return res.length;
};

console.log(wiggleMaxLength([1]));

console.log(
  wiggleMaxLength([
    33, 53, 12, 64, 50, 41, 45, 21, 97, 35, 47, 92, 39, 0, 93, 55, 40, 46, 69,
    42, 6, 95, 51, 68, 72, 9, 32, 84, 34, 64, 6, 2, 26, 98, 3, 43, 30, 60, 3,
    68, 82, 9, 97, 19, 27, 98, 99, 4, 30, 96, 37, 9, 78, 43, 64, 4, 65, 30, 84,
    90, 87, 64, 18, 50, 60, 1, 40, 32, 48, 50, 76, 100, 57, 29, 63, 53, 46, 57,
    93, 98, 42, 80, 82, 9, 41, 55, 69, 84, 82, 79, 30, 79, 18, 97, 67, 23, 52,
    38, 74, 15,
  ])
);
