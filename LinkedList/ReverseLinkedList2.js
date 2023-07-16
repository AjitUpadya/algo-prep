class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
  if (!head || !head.next)  return head;

  // find the start of reversal
  let startOfReversal = head;
  let tmpLeft = left;
  while (tmpLeft > 1) { startOfReversal = startOfReversal.next; tmpLeft -= 1;}

  // find right part of list to be appended to reversed list
  let rightPartOfList = head;
  let tmpRight = right;
  while (tmpRight > 0) { rightPartOfList = rightPartOfList.next; tmpRight -= 1;}

  // reverse sub list
  let reversedListHead = null;
  let next = startOfReversal;
  while (right-left+1 > 0 && next) {
    right -= 1;
    const nextNext = next.next;
    next.next = reversedListHead;
    reversedListHead = next;
    next = nextNext;
  }

  // find reversed list tail so that we can append the right part of unreversed list
  let reversedListTail = reversedListHead;
  while (reversedListTail.next) reversedListTail = reversedListTail.next;
  reversedListTail.next = rightPartOfList;

  // find the node frem left where we should append the reversed list
  let nodeBeforeReversedHead = head;
  while (left > 2) {
    nodeBeforeReversedHead = nodeBeforeReversedHead.next;
    left -= 1;
  }
  // check if there's a loop from reversed list tail back to node where we are appending
  if (nodeBeforeReversedHead !== reversedListTail) {
    nodeBeforeReversedHead.next = reversedListHead;
    return head;
  } else {
    return reversedListHead;
  }
};

// 1 -> 2 -> 3 -> 4 -> 5
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);
head.next.next.next.next.next = new ListNode(6);

let res = reverseBetween(head, 2, 4);
console.log(`%o`, res);
console.log(`---------`);

let head1 = new ListNode(3, new ListNode(5));
let res1 = reverseBetween(head1, 1, 1);
console.log(`%o`, res1);
console.log(`---------`);

head1 = new ListNode(3, new ListNode(5));
res1 = reverseBetween(head1, 1, 2);
console.log(`%o`, res1);
console.log(`---------`);

head1 = new ListNode(1, new ListNode(2, new ListNode(3)));
res1 = reverseBetween(head1, 1, 1);
console.log(`%o`, res1);
console.log(`---------`);

head1 = new ListNode(1, new ListNode(2, new ListNode(3)));
res1 = reverseBetween(head1, 1, 3);
console.log(`%o`, res1);
