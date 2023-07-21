/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
function canAttendMeetings(intervals) {
    if (intervals.length < 2) return true;
    intervals.sort((a, b) => {
        return a[0] - b[0];
    });
    let end = intervals[0][1];
    for (let i = 1; i < intervals.length; i++) {
        if (end > intervals[i][0]) return false;
        end = intervals[i][1];
    }
    return true;
}
