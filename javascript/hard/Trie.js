/**
 * Initialize your data structure here.
 * Note:

 * You may assume that all inputs are consist of lowercase letters a-z.
 * All inputs are guaranteed to be non-empty strings.
 */
var Trie = function() {
  this.children = new Map();
  this.isWord = false;
};

/**
 * Recursively inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  //Base case. No more chars in the word
  if( word.length === 0 ) {
    this.isWord = true;
    return;
  }

  //If the node doesn't contain the current char, add it
  const char = word[0];
  if( !this.children.has(char) ) {
    const node = new Trie();
    this.children.set(char, node);
  }

  //Recurse to the next char in the word
  this.children.get(char).insert(word.substring(1));
};

/**
 * Recursively searchs the trie and returns if the word is in it. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  // Base case
  if( word.length === 0 && this.isWord ) return true;
  if( word.length === 0 && !this.isWord ) return false;

  const char = word[0];

  // If the char is not in the current node the word is not in the Trie
  if( !this.children.get(char) ) {
    return false;
  } 
  // Recursively search the Trie
  else {
    return this.children.get(char).search(word.substring(1));
  }
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  if( prefix.length === 0 ) return true;
  const char = prefix[0];
  if( !this.children.get(char) ) return false;
  return this.children.get(char).startsWith(prefix.substring(1));
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

 module.exports = Trie;