/**
 * @param {string[]} strs
 * @return {string}
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 * Note:
 * All given inputs are in lowercase letters a-z.
 */
var longestCommonPrefix = function(strs) {
  let lcp = "";
  let length = strs[0] ? strs[0].length : 0;

  for(let i = 0; i < length; i++) {
    let char = strs[0][i]

    for(let j = 1; j < strs.length; j++) {
      if(strs[j][i] !== char) {
        return lcp;
      }
    }
    lcp += char;
  }
  return lcp;
};

module.exports = longestCommonPrefix;