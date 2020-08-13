var titleToNumber = function (s) {
  return s
    .split("")
    .map((char) => char.charCodeAt(0) - 64)
    .reduce((sum, cur) => (sum = sum * 26 + cur), 0);
};

console.log(titleToNumber("A"));
