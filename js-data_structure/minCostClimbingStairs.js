/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost, i = -1, dp = []) {
  if (i >= cost.length) return 0;
  if (i === cost.length - 1) return cost[i];
  if (dp[i]) return dp[i];
  let one = minCostClimbingStairs(cost, i + 1, dp);
  let two = minCostClimbingStairs(cost, i + 2, dp);

  dp[i] = Math.min(one, two) + (cost[i] ?? 0);

  return dp[i];
};
