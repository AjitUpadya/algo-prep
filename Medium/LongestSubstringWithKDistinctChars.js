/**
 * @param {number} k
 * @param {string} str
 * @return {number}
 */
function longestSubstringWithKDistinctChars(str, k) {
  let windowStart = 0;
  let max = 0;
  let s = new Set();
  let windowEnd = 0;
  let currMax = 0;
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    if(s.has(str.charAt(windowEnd))) {
      console.log(`${str.charAt(windowEnd)} already in set, incrementing count`);
      currMax +=1;
      continue;
    }
    if(!s.has(str.charAt(windowEnd)) && s.size < k) {
      console.log('adding to set '+str.charAt(windowEnd));
      s.add(str.charAt(windowEnd));
      currMax += 1;
    } else {
      max = Math.max(max, currMax);
      currMax -= 1;
      const [first] = s;
      s.delete(first);
    }
  }
  return max;
}

console.log(longestSubstringWithKDistinctChars("araaci", 2));
console.log(longestSubstringWithKDistinctChars("araaci", 1));
console.log(longestSubstringWithKDistinctChars("cbbebi", 3));
console.log(longestSubstringWithKDistinctChars("cbbebi", 4));
console.log(longestSubstringWithKDistinctChars("cb", 1));