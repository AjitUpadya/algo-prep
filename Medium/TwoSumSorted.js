/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let start = 0;
  let end = numbers.length - 1;
  while(start <= end) {
    const sum = numbers[start] + numbers[end];
    if (sum === target) return [start+1, end+1];
    if (sum > target) {
      end--;
    } else {
      start++;
    }
  }
};

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([2,3,4], 6));
console.log(twoSum([-1,0], -1));
console.log(twoSum([2, 5, 9, 11], 11));
console.log(twoSum([1, 3, 5, 8, 9, 11], 11));
//console.log(twoSum([], ));