/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function(arr, k, threshold) {
  let num = 0;
  let windowSum = 0;
  let windowStart = 0;
  for(let windowEnd = 0; windowEnd <= arr.length-1; windowEnd++) {
      windowSum += arr[windowEnd];
      console.log(`added ${arr[windowEnd]} and windowSum is ${windowSum}`);
      if(windowEnd >= k-1) {
          let currAvg = windowSum/k;
          console.log(`currAvg is ${currAvg}`);
          if (currAvg >= threshold) num += 1;
          windowSum -= arr[windowStart];
          windowStart += 1;
      }
  }
  return num;
};

console.log(numOfSubarrays([2,2,2,2,5,5,5,8], 3, 4));
console.log(numOfSubarrays([11,13,17,23,29,31,7,5,2,3], 3, 5));