class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  let middle = head;
  let end = head;
  while (end && end.next) {
    middle = middle.next;
    end = end.next.next;
  }
  let reversedFromMiddleHead = reverseList(middle);
  
  let tempReversedFromMiddleHead = reversedFromMiddleHead;
  let tmpHead = head;
  while (tmpHead && tempReversedFromMiddleHead) {
    if (tmpHead.val !== tempReversedFromMiddleHead.val)
      break;
    tmpHead = tmpHead.next;
    tempReversedFromMiddleHead = tempReversedFromMiddleHead.next;
  }
  
  // reverse the middle section and put it back in list
  let newT = reverseList(reversedFromMiddleHead);
  middle = newT;

  if(!tmpHead || !tempReversedFromMiddleHead) return true;
  else return false;
};

function reverseList(head) {
  let tmpHead = null;
  let next = head;
  while (next) {
    let nextNext = next.next;
    next.next = tmpHead;
    tmpHead = next;
    next = nextNext;
  }
  return tmpHead;
}

const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(2);
head.next.next.next = new ListNode(1);
//head.next.next.next.next = new ListNode(1);
console.log(isPalindrome(head));

// head.next.next.next.next.next = new ListNode(6);
// console.log(isPalindrome(head));

const head2 = new ListNode(1);
head2.next = new ListNode(2);
// head2.next.next = new ListNode(2);
// head2.next.next.next = new ListNode(1);
console.log(isPalindrome(head2));