/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
    const target = image[sr][sc];
    const [m, n] = [image.length, image[sr].length];
    function traverse(sr, sc) {
        if (sr < 0 || sc < 0) return;
        if (sr >= m || sc >= n) return;
        if (image[sr][sc] === color) return;
        if (image[sr][sc] !== target) return;

        image[sr][sc] = color;
        traverse(sr, sc + 1);
        traverse(sr, sc - 1);
        traverse(sr + 1, sc);
        traverse(sr - 1, sc);
    }
    traverse(sr, sc);
    return image;
};