/**
 * Initialize your data structure here.
 */
var WordDictionary = function () {
  this.root = new TrieNode();
};

/**
 * Adds a word into the data structure.
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  let node = this.root;
  for (let i = 0; i < word.length; i++) {
    const alphabet = word.charCodeAt(i) - 97;
    if (!node.children[alphabet]) {
      node.children[alphabet] = new TrieNode();
    }
    node = node.children[alphabet];
  }
  node.eow = true;
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter.
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  return this.searchHelper(word, 0, this.root);
};

WordDictionary.prototype.searchHelper = function (word, idx, node) {
  if (!node) return false;
  if (word.length === idx) return node.eow;
  if (word.charAt(idx) != ".") {
    const alphabet = word.charCodeAt(idx) - 97;
    return this.searchHelper(word, idx + 1, node.children[alphabet]);
  }
  for (let i = 0; i < 26; i++) {
    if (this.searchHelper(word, idx + 1, node.children[i])) {
      return true;
    }
  }
  return false;
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

function TrieNode(eow) {
  this.eow = eow === undefined ? false : true;
  this.children = Array(26);
}

const dict = new WordDictionary();

dict.addWord("bad");
dict.addWord("dad");
dict.addWord("mad");

console.log(dict.search("pad")); // -> false
console.log(dict.search("bad")); // -> true
console.log(dict.search(".ad")); // -> true
console.log(dict.search("b..")); // -> true
