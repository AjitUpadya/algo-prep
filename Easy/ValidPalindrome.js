/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  if(!s.trim().length)
    return true;
  let i = 0;
  let j = s.length - 1;

  while(i < j) {
    let code = s.charCodeAt(i);
    if (!(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
      i += 1;
      continue;
    }
    let jcode = s.charCodeAt(j);
    if (!(jcode > 47 && jcode < 58) && // numeric (0-9)
        !(jcode > 64 && jcode < 91) && // upper alpha (A-Z)
        !(jcode > 96 && jcode < 123)) { // lower alpha (a-z)
      j -= 1;
      continue;
    }
    if(s.charAt(i).toLowerCase() != s.charAt(j).toLowerCase())
      return false;
    
    i++;
    j--;
  }
  return true;

};

console.log(isPalindrome('0P'));
console.log(isPalindrome('abcdcba'));
console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('sdfsdf'));