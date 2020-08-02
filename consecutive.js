function consecutive(num) {
  // Write your code here
  let count = 0;
  if (num % 2 === 1) count = 1;
  for (let i = 0; i < num / 2; i++) {
    let sum = 0;
    for (let j = Math.ceil(num / 2) - i; j > 0; j--) {
      sum += j;
      console.log(sum, j);
      if (sum === num) count++;
      else if (sum > num) break;
    }
  }
  return count;
}

console.log(consecutive(15));
