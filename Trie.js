/**
 * Initialize your data structure here.
 */
var Trie = function () {
  this.root = new TrieNode();
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
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
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let node = this.root;
  for (let i = 0; i < word.length; i++) {
    const alphabet = word.charCodeAt(i) - 97;
    if (!node.children[alphabet]) {
      return false;
    }
    node = node.children[alphabet];
  }
  return node.eow;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let node = this.root;
  for (let i = 0; i < prefix.length; i++) {
    const alphabet = prefix.charCodeAt(i) - 97;
    if (!node.children[alphabet]) {
      return false;
    }
    node = node.children[alphabet];
  }
  if (node) return true;
  return false;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

function TrieNode(eow) {
  this.eow = eow === undefined ? false : true;
  this.children = Array(26);
}

const trie = new Trie();

trie.insert("apple");
console.log(trie.search("apple")); // returns true
console.log(trie.search("app")); // returns false
console.log(trie.startsWith("app")); // returns true
trie.insert("app");
console.log(trie.search("app")); // returns true
