var arrangeWords = function (text) {
  const words = text.split(" ");
  words[0] = words[0].toLowerCase();
  words.sort((a, b) => a.length - b.length);
  words[0] = words[0][0].toUpperCase() + words[0].slice(1);
  return words.join(" ");
};
console.log(arrangeWords("Leetcode is cool"));
