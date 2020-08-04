var isPalindrome = function (s) {
  if (s.length === 0) return true;
  const alphabet = "abcdefghijklmnopqrstuvwxyz1234567890".split("");
  let str = "";
  let reverse = "";
  for (let i = 0; i < s.length; i++) {
    let char = s.charAt(i).toLowerCase();
    if (alphabet.includes(char)) {
      str += char;
      reverse = char + reverse;
    }
  }
  return str === reverse;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
