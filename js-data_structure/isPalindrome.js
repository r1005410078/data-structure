/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.replace(/[^a-zA-Z0-9]/g, "");
  let len = s.length;
  if (len > 1) {
    for (let i = 0, j = len - 1; i <= Math.floor(len / 2); i++, j--) {
      if (s[i].toLocaleLowerCase() !== s[j].toLocaleLowerCase()) return false;
    }
  }
  return true;
};
