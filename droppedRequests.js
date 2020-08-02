"use strict";

function droppedRequests(requestTime) {
  // Write your code here
  let map = new Map();
  let dropped = 0;
  let secCount = 0;
  let minCount = 0;
  for (const el of requestTime) {
    let droppedFlag = false;
    secCount++;
    minCount++;
    if (map.has(el - 10)) secCount - map.get(el - 10);
    if (map.has(el - 60)) minCount - map.get(el - 10);
    if (!map.has(el)) map.set(el, 1);
    else if (map.get(el) > 2) {
      dropped++;
      droppedFlag = true;

      let s = map.get(el);
      console.log(s);
      map.set(s + 1);
    } else {
      let s = map.get(el);
      map.set(el, s + 1);
    }
    if (!droppedFlag && (secCount > 20 || minCount > 60)) dropped++;
  }
  console.log(map.get(1) > 0);
  return dropped;
}

console.log(
  droppedRequests([
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    3,
    3,
    3,
    4,
    4,
    4,
    5,
    5,
    5,
    6,
    6,
    6,
    7,
    7,
    7,
    7,
  ])
);
