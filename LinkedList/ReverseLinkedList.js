class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 * Create a tmpHead as null, start from head, point to null, move tmpHead and next
 */
var reverseListR = function(head) {
  if(!head || !head.next) return head;
  let tmpHead = null;
  return recursiveReverse(tmpHead, head);
};

/**
 * 
 * @param {ListNode} node1 
 * @param {ListNode} node2 
 */
function recursiveReverse(node1, node2) {
  if(!node2)  return node1;
  let nextnext = node2.next;
  node2.next = node1;
  return recursiveReverse(node2, nextnext);
}

var reverseListI = function(head) {
  if (!head) return head;
  let tmpHead = null;
  let next = head;
  while (next) {
    let nextNext = next.next;
    next.next = tmpHead;
    tmpHead = next;
    next = nextNext;
  }
  return tmpHead;
};

// 1 -> 2 -> 3 -> 4 -> 5
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

const res = reverseListR(head);
console.log(`%o`, res);

// const res1 = reverseListI(head);
// console.log(`%o`, res1);