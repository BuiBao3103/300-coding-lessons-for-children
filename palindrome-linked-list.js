/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    let slow = head
    let fast = head
    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
    }
    let prev = slow
    slow = slow.next
    prev.next = null
    while (slow) {
        let temp = slow.next
        slow.next = prev
        prev = slow
        slow = temp
    }
    fast = head
    slow = prev
    while (slow) {
        if (fast.val !== slow.val) return false
        else {
            fast = fast.next
            slow = slow.next
        }
    }
    return true
};