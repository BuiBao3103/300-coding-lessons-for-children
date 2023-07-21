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
 * @return {boolean}
 */
var isBalanced = function (root) {
    function height(root) {
        if (root == null) return 0
        return 1 + Math.max(height(root.left), height(root.right));
    }
    if (root == null)
        return true;
    let leftH = height(root.left);
    let rightH = height(root.right);
    return Math.abs(leftH - rightH) <= 1 && isBalanced(root.left) && isBalanced(root.right)
};