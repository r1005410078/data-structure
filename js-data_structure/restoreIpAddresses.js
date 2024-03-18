/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s, startIndex = 0, path = [], result = []) {
  if (startIndex === s.length) {
    if (path.length === 4) result.push(path.join("."));
    return result;
  }

  for (let i = startIndex; i < s.length; i++) {
    const str = s.slice(startIndex, i + 1);
    if (isValid(str)) {
      path.push(str);
      restoreIpAddresses(s, i + 1, path, result);
      path.pop();
    }
  }

  return result;
};

function isValid(s) {
  if (s.length > 1 && s[0] === "0") return false;
  s = Number(s);
  return s < 256 && s > -1;
}

let ips = restoreIpAddresses("101023");
console.log(ips);
