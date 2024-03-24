/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // 买入的价格
  let p = 0;

  for (let i = 0; i < prices.length; i++) {
    const price = prices[i];

    let slow = i;
    let flag = false;
    for (let fast = slow + 1; fast <= prices.length; fast++) {
      if (prices[fast] > prices[slow]) {
        // 可以卖出了, 但是我还可以等等
        slow = fast;
        flag = true;
        i = fast;
      } else {
        break;
      }
    }

    if (flag) {
      p += prices[slow] - price;
    }
  }

  return p;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
