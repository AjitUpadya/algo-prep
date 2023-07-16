class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  
  const newHead = new ListNode(0, null);
  let head = newHead;
  while (list1 && list2) {
    if(list1.val < list2.val) {
      head.next = new ListNode(list1.val, null);
      list1 = list1.next;
    } else {
      head.next = new ListNode(list2.val, null);
      list2 = list2.next;
    }
    head = head.next;
  }
  while (list1) {
    head.next = new ListNode(list1.val, null);
    list1 = list1.next;
    head = head.next;
  }
  while (list2) {
    head.next = new ListNode(list2.val, null);
    list2 = list2.next;
    head = head.next;
  }
  return newHead.next;
};

const head = new ListNode(1, null);
head.next = new ListNode(3, new ListNode(5, new ListNode(7, null)));

const head2 = new ListNode(2, null);
head2.next = new ListNode(4, new ListNode(6, new ListNode(8, null)));

let newHead = mergeTwoLists(head, head2);
while(newHead) {
  console.log(`${newHead.val}`);
  newHead = newHead.next;
}
