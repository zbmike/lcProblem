var detectCapitalUse = function (word) {
  const firstCap = word.charCodeAt(0) < 91;
  let res = true;
  let allUpper = word.slice(1).toUpperCase();
  let allLower = word.slice(1).toLowerCase();
  if (firstCap) {
    res = allUpper === word.slice(1) || allLower === word.slice(1);
  } else {
    res = allLower === word.slice(1);
  }
  return res;
};

console.log(detectCapitalUse("USE"));
