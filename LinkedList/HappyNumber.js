/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let slow = n;
  let fast = n;
  while (true) {
    slow = findSquareSum(slow);
    console.log(`slow square sum is ${slow}`);
    fast = findSquareSum(findSquareSum(fast));
    console.log(`fast square sum is ${fast}`);
    if(slow === fast) break;
  }
  return slow === 1;
};

function findSquareSum(n) {
  let sum = 0;
  while (n > 0) {
    let digit = n % 10;
    sum += digit * digit;
    n = Math.floor(n / 10);
  }
  return sum;
}

console.log(isHappy(19));
console.log(isHappy(2));
console.log(isHappy(23));
console.log(isHappy(12));
console.log(isHappy(0));
console.log(isHappy(1));
console.log(isHappy(100));