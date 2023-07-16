class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if (!head || !head.next)  return false
  let slow = head;
  let fast = head;
  while (fast && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast)  return true;
  }
  return false;
};

const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);
head.next.next.next.next.next = head.next.next;

console.log(hasCycle(head));
head.next.next.next.next.next = new ListNode(6);
console.log(hasCycle(head));
head.next.next.next.next.next.next = head.next;
console.log(hasCycle(head));