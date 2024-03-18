/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s, path = [], result = [], idx = 0) {
  if (idx === s.length) {
    if (isPartition(path)) {
      result.push(path.concat([]));
    }
    return;
  }

  for (let i = idx; i < s.length; i++) {
    path.push(s.slice(idx, i + 1));
    partition(s, path, result, i + 1);
    path.pop();
  }

  return result;
};

/**
 *
 * @param {string[]} path
 * @returns
 */
function isPartition(path) {
  return path.every(isPalindrome);
}

function isPalindrome(s) {
  s = s.replace(/[^a-zA-Z0-9]/g, "");
  let len = s.length;
  if (len > 1) {
    for (let i = 0, j = len - 1; i <= Math.floor(len / 2); i++, j--) {
      if (s[i].toLocaleLowerCase() !== s[j].toLocaleLowerCase()) return false;
    }
  }
  return true;
}

console.log(partition("aab"));
