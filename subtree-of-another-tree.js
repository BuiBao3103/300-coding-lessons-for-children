/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
    if (subRoot === null) return true
    if (root === null) return false

    function check(root, subRoot) {
        if (subRoot === null && root === null) return true
        else if ((root !== null && subRoot === null)
            || (root === null && subRoot !== null)) {
            return false;
        }

        return root.val === subRoot.val
            && check(subRoot.left, root.left)
            && check(subRoot.right, root.right)
    }
    if (check(root, subRoot)) {
        return true;
    }
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
};