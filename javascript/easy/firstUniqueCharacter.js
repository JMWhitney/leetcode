/**
 * Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.
 * @param {string} s
 * @return {number}
 * Note: You may assume the string contain only lowercase letters.
 */
var firstUniqChar = function(s) {
  // map to store the number of references
  let referenceMap = {};

  // Build map
  for(let i = 0; i < s.length; i++) {
    // If the mapping exists, increment it. Otherwise initialize it.
    if(referenceMap[s[i]]) {
      referenceMap[s[i]] += 1;
    } else {
      referenceMap[s[i]] = 1;
    }
  }

  // If the current number of references is 1, that is the first unique char.
  for(let i = 0; i < s.length; i++) {
    if(referenceMap[s[i]] === 1) {
      return i;
    }
  }
  
  // Otherwise we didn't find any unique chars
  return -1;
};

module.exports = firstUniqChar;