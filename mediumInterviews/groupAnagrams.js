var groupAnagrams = function (strs) {
  let memo = new Map();
  for (let i = 0; i < strs.length; i++) {
    let cur = strs[i]
      .split("")
      .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
      .join("");
    if (!memo.has(cur)) memo.set(cur, [strs[i]]);
    else memo.get(cur).push(strs[i]);
  }
  return Array.from(memo.values());
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
