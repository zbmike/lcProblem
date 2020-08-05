var lengthOfLongestSubstring = function (s) {
  const set = new Set();
  let res = 0,
    i = 0,
    j = 0;
  while (i < s.length && j < s.length) {
    if (!set.has(s.charAt(j))) {
      set.add(s.charAt(j));
      res = Math.max(res, j - i + 1);
      j++;
    } else {
      set.delete(s.charAt(i));
      i++;
    }
  }
  return res;
};

var lengthOfLongestSubstringMap = function (s) {
  const map = new Map();
  let res = 0,
    i = 0;
  for (let j = 0; j < s.length; j++) {
    if (map.has(s.charAt(j))) {
      i = Math.max(i, map.get(s.charAt(j)));
    }
    res = Math.max(res, j - i + 1);
    map.set(s.charAt(j), j + 1);
  }
  return res;
};

console.log(lengthOfLongestSubstring("pwwkew"));
