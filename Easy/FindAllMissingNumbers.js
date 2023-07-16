/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  const missingNumbers = [];

  for (let i = 0; i < nums.length; i++) {
    while (i+1 !== nums[i] && nums[i] !== nums[nums[i]-1]) {
      const temp = nums[i]; 
      nums[i] = nums[temp-1];
      nums[temp-1] = temp;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (i+1 !== nums[i])  missingNumbers.push(i+1);
  }
  return missingNumbers;
};

console.log(JSON.stringify(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])) ==  JSON.stringify([5, 6]));
/*
7 3 2 4 8 2 3 1
3 3 2 4 8 2 7 1
2 3 3 4 8 2 7 1
3 2 3 4 8 2 7 1

3 2 3 4 1 2 7 8
1 2 3 4 3 2 7 8
*/
console.log(JSON.stringify(findDisappearedNumbers([1, 1])) == JSON.stringify([2]));
// console.log(findDisappearedNumbers([2, 3, 1, 8, 2, 3, 5, 1]) === [4 , 6, 7]);
// console.log(findDisappearedNumbers([2, 4, 1, 2]) === [3]);