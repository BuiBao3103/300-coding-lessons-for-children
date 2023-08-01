/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    let preMap = new Map()
    let visited = new Set()
    for (let i = 0; i < numCourses; i++)
        preMap.set(i, [])
    for (let [pre1, pre2] of prerequisites) {
        let temp = preMap.get(pre1)
        temp.push(pre2)
        preMap.set(pre1, temp)
    }
    const dfs = (pre) => {
        if (visited.has(pre)) return false
        if (preMap.get(pre) === []) return true
        visited.add(pre)
        let pre2s = preMap.get(pre)
        if (pre2s.length)
            for (const pre2 of pre2s)
                if (!dfs(pre2)) return false
        visited.delete(pre)
        preMap.set(pre, [])
        return true
    }
    for (const [pre, nei] of preMap)
        if (!dfs(pre)) return false
    return true
};