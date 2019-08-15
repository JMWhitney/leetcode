/**
 * Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

 * Note: For the purpose of this problem, we define empty string as valid palindrome.
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  // Format string with regex
  let str = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

  // Advance two pointers from either side that converge on the middle. 
  // If they aren't always equal, the string is not a palindrome.
  for(let i = 0; i < str.length/2; i++) {
    if(str[i] !== str[str.length - i - 1]) return false
  }

  return true;
};

module.exports = isPalindrome;