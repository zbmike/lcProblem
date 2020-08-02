let arr = [1, 0, 2, 3, 0, 4, 5, 0];

var duplicateZeros = function (arr) {
  let dups = 0;
  let len = arr.length - 1;
  for (let i = 0; i <= len - dups; i++) {
    if (arr[i] === 0) {
      if (i == len - dups) {
        arr[len] = 0;
        len -= 1;
        break;
      }
      dups += 1;
    }
  }

  for (let j = len - dups; j >= 0; j--) {
    if (arr[j] === 0) {
      arr[j + dups] = 0;
      dups -= 1;
      arr[j + dups] = 0;
    } else {
      arr[j + dups] = arr[j];
    }
  }
};

duplicateZeros(arr);

console.log(arr);
