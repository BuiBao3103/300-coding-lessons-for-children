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
 * @return {number}
 */
var maxDepth = function (root) {
    const recursivelyGetHeight = (root, depth) => {
        if (!root) {
            return depth;
        }
        return Math.max(recursivelyGetHeight(root.left, depth + 1), recursivelyGetHeight(root.right, depth + 1));
    };
    return recursivelyGetHeight(root, 0)
}