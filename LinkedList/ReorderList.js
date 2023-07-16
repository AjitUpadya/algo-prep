class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  // find middle
  const middleNode = findMiddle(head);
  console.log(`middle node is ${middleNode.val}`);
  // reverse second half of list
  let reversedHead = reverseList(middleNode);
  console.log(`reversed middle head is %o`, reversedHead);

  // interlace the reversed list back to original list
  let tmpHead = head;
  while(tmpHead && reversedHead && tmpHead.next && reversedHead.next) {
    //console.log(`tmpHead is ${tmpHead.val} and reversedHead is ${reversedHead.val}`);
    let tmpHeadNext = tmpHead.next; // 2, 3
    //console.log(`tmpheadNext is ${tmpHeadNext.val}`);
    let reversedHeadNext = reversedHead.next; // 4, 3
    //console.log(`reversedHeadNext is ${reversedHeadNext.val}`);
    tmpHead.next = reversedHead; // 1 -> 5
    reversedHead.next = tmpHeadNext; // 1 -> 5 -> 2
    //console.log(`%o`, tmpHead);
    tmpHead = tmpHeadNext;
    reversedHead = reversedHeadNext;
  }
};

function findMiddle(head) {
  let slow = head;
  let fast = head;

  while(fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

function reverseList(head) {
  let tmpNode = null;
  let next = head;
  while (next) {
    let nextNext = next.next;
    next.next = tmpNode;
    tmpNode = next;
    next = nextNext;
  }
  return tmpNode;
}

// 1 -> 2 -> 3 -> 4 -> 5
// 1 -> 5 -> 2 -> 4 -> 3
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
// head.next.next.next.next = new ListNode(5);
// head.next.next.next.next.next = new ListNode(6);

reorderList(head);
console.log(`%o`, head);