/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (s.length == 1)  return 1;
  let windowStart = 0;
  const map = new Map();
  let max = 0;
  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    const char = s.charAt(windowEnd);
    if (map.has(char)) {
      windowStart = Math.max(windowStart, map.get(char) + 1);
    }
    map.set(char, windowEnd);
    max = Math.max(max, windowEnd - windowStart + 1);
  }
  return max; 
};

console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));
console.log(lengthOfLongestSubstring('aabccbb'));

console.log(lengthOfLongestSubstring('abbbb'));
console.log(lengthOfLongestSubstring('abccde'));
console.log(lengthOfLongestSubstring('ab'));
console.log(lengthOfLongestSubstring('abcabcdcdefgh'));
console.log(lengthOfLongestSubstring(' '));
console.log(lengthOfLongestSubstring('aab'));
console.log(lengthOfLongestSubstring('a'));
console.log(lengthOfLongestSubstring('aabasfjhajsdhaaaakjdjdkjiwoqplc'));