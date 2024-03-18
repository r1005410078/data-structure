/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const values = [
    "", // 0
    "", // 1
    "abc", // 2
    "def", // 3
    "ghi", // 4
    "jkl", // 5
    "mno", // 6
    "pqrs", // 7
    "tuv", // 8
    "wxyz", // 9
  ];

  let result = [];
  traversal(values, digits.split(""), 0, [], result);

  return result;
};

function traversal(values, digits, startIndex, path = [], result = []) {
  if (path.length == digits.length) {
    result.push(path.filter(Bo).join(""));
  }
  for (let i = startIndex; i < digits.length; i++) {
    let items = values[digits[i]].split("");
    for (let j = 0; j < items.length; j++) {
      path.push(items[j]);
      traversal(values, digits, i + 1, path, result);
      path.pop();
    }
  }
}

console.log(letterCombinations(""));
