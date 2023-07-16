/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let max = 0;
  if(prices.length) {
    let currMin = prices[0];
    for(let i = 1; i < prices.length; i++) {
      if(prices[i] < currMin) {
        currMin = prices[i];
      } else if(prices[i] - currMin > max) {
        max = prices[i] - currMin;
      }
    }
  }
  return max;
};

const res = maxProfit([5,4,3,2,1]);
console.log(res);