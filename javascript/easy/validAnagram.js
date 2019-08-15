/**
 * Given two strings s and t , write a function to determine if t is an anagram of s.
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * Note:
  You may assume the string contains only lowercase alphabets.

  Follow up:
  What if the inputs contain unicode characters? How would you adapt your solution to such case?
 */
var isAnagram = function(s, t) {
  // input validation
  if(s.length !== t.length) return false;

  // This map will contain the number of references for each character in the string
  let referenceMapS = {}, referenceMapT = {};

  // Build maps
  for(let i = 0; i < s.length; i++) {
    referenceMapS[s[i]] ? referenceMapS[s[i]]++ : referenceMapS[s[i]] = 1; 
    referenceMapT[t[i]] ? referenceMapT[t[i]]++ : referenceMapT[t[i]] = 1; 
  }

  // Check if each string has the same number of each character.
  for(let i = 0; i < s.length; i++) {
    if(referenceMapS[s[i]] !== referenceMapT[s[i]]) {
      return false;
    }
  }

  return true;
};

module.exports = isAnagram