var addTwoNumbers = function (l1, l2) {
  let carry = false;
  let digit1 = l1;
  let digit2 = l2;
  let head;
  let total;
  while (digit1 || digit2 || carry) {
    let sum = carry ? 1 : 0;
    if (digit1) {
      sum += digit1.val;
      digit1 = digit1.next;
    }
    if (digit2) {
      sum += digit2.val;
      digit2 = digit2.next;
    }
    let node = new ListNode(sum % 10);
    if (!head) {
      head = node;
      total = head;
    } else {
      total.next = node;
      total = node;
    }
    carry = sum >= 10 ? true : false;
  }
  return head;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

let l1 = new ListNode(8);
l1.next = new ListNode(1);
let l2 = new ListNode(0);

console.log(l1);
console.log(addTwoNumbers(l1, l2));
[].reverse;
