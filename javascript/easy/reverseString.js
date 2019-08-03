/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  let midPoint = Math.floor((s.length)/2);

  for(let i = 0; i < midPoint; i++) {
    //Swap first with last ES6 syntax
    [s[i], s[s.length - 1 - i]] = [s[s.length - 1 - i], s[i]];
  }
};

module.exports = reverseString;