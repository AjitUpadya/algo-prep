class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  if (!head || !head.next)  return null;
  let slow = head;
  let fast = head;
  let isCycle = false;
  while (fast && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) { 
      isCycle = true;
      break;
    }
  }
  let lengthOfCycle = 0;
  if (isCycle) {
    lengthOfCycle = 1;
    const slow2 = slow;
    slow = slow.next;
    while (slow2 !== slow) {
      lengthOfCycle++;
      slow = slow.next;
    }
    // once we have the length, move fast by lengthOfCycle nodes
    slow = head;
    fast = head;

    while (lengthOfCycle > 0 && fast) {
      fast = fast.next;
      lengthOfCycle -= 1;
    }
    // now move them both by one node at a time until they meet to get the start of cycle

    while (slow !== fast) {
      //console.log(`slow is at ${slow.val} and fast at ${fast.val}`);
      fast = fast.next;
      slow = slow.next;
    }
    return slow;
  } else return null;
};

const head3 = new ListNode(3);
head3.next = new ListNode(2);
head3.next.next = new ListNode(0);
head3.next.next.next = new ListNode(-4);
head3.next.next.next.next = head3.next;
console.log(detectCycle(head3));
console.log(`--------`);


const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);
head.next.next.next.next.next = new ListNode(6);
head.next.next.next.next.next.next = head.next.next;
console.log(detectCycle(head));

head.next.next.next.next.next.next = head;
console.log(detectCycle(head));

console.log('````````');
const head1 = new ListNode(1);
console.log(detectCycle(head1));

console.log('````````');
const head2 = new ListNode(1);
head2.next = head2;
console.log(detectCycle(head2));

console.log('````head4 below````');
const head4 = new ListNode(1);
head4.next = new ListNode(2);
console.log(detectCycle(head4));