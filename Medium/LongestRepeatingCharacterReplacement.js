/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
  let windowStart = 0;
  let maxRepeatingCharCount = 0;
  let max = 0;
  const map = new Map();
  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    const char = s.charAt(windowEnd);
    if(map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
    }

    maxRepeatingCharCount = Math.max(maxRepeatingCharCount, map.get(char));

    if ((windowEnd-windowStart+1 - maxRepeatingCharCount) > k) {
      map.set(s.charAt(windowStart), map.get(s.charAt(windowStart)) - 1);
      windowStart += 1;
    }

    max = Math.max(max, windowEnd - windowStart + 1);
  }
  return max;
};

console.log(characterReplacement('ABAB', 2));
console.log(characterReplacement('AABABBA', 1));
console.log(characterReplacement('aabccbb', 2));
console.log(characterReplacement('abbcb', 1));
console.log(characterReplacement('ab', 1));
console.log(characterReplacement('abb', 2));
console.log(characterReplacement('abccde', 1));