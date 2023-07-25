/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
    let m = mat.length, n = mat[0].length
    let q = []
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] == 0)
                q.push([i, j])
            else
                mat[i][j] = "#"
        }
    }
    let dir = [[1, 0], [-1, 0], [0, 1], [0, -1]]
    while (q.length != 0) {
        let [r, c] = q.shift()
        for (let i = 0; i < 4; i++) {
            let [dx, dy] = dir[i]
            let [nr, nc] = [r + dx, c + dy]
            if (0 <= nr && nr < m && 0 <= nc && nc < n
                && mat[nr][nc] == "#") {
                mat[nr][nc] = mat[r][c] + 1
                q.push([nr, nc])
            }
        }
    }
    return mat
};