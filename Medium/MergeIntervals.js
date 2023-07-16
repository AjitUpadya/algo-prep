/**
 * For each iterval, check if start <= prevEnd, if yes, ignore start and update prevEnd
 * if there's no overlap then add to mergedIntervals and update prevStart and prevEnd
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  const mergedIntervals  = [];
  intervals.sort((a, b) => a[0] - b[0]);
  let prevStart = intervals[0][0];
  let prevEnd = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    const start = intervals[i][0];
    const end = intervals[i][1];
    if (start <= prevEnd) {
      prevEnd = Math.max(prevEnd, end);
    }
    else {
      mergedIntervals.push([prevStart, prevEnd]);
      prevStart = start;
      prevEnd = end;
    }
  }
  mergedIntervals.push([prevStart, prevEnd]);
  return mergedIntervals;
};

console.log(merge([[1,4], [2,5], [7,9]]));
console.log(merge([[1,3],[2,6],[8,10],[15,18]]));
console.log(merge([[1,4],[4,5]]));
