/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    if(map.has(s.charAt(i))) {
      map.set(s.charAt(i), map.get(s.charAt(i)) + 1);
    } else {
      map.set(s.charAt(i), 1);
    }
  }

  for (let i = 0; i < t.length; i++) {
    if(!map.has(t.charAt(i))) return false;
    else {
      const count = map.get(t.charAt(i)) - 1;
      if(count <= 0) {
        map.delete(t.charAt(i));
      } else {
        map.set(t.charAt(i), count);
      }
    }
  }
  return map.size === 0;
};

console.log(isAnagram('abcdefgha', 'dcbahgfe'));

// can also be done with using a fixed size array
const frequency = new Array(26).fill(0);
s = '';
t = '';

for(let i =0; i < s.length; i++) {
  frequency[s.charAt(i) - 'a'.charCodeAt(0)]++;
  frequency[t.charAt(i) - 'a'.charCodeAt(0)]--;
}
//loop through frequency to check every entry is 0