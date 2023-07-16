/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  if (!intervals.length) return [newInterval];
  const merged = [];
  let i = 0;

  // add all intervals that come before newInterval
  while (i < intervals.length && intervals[i][1] < newInterval[0] ) {
    merged.push(intervals[i]);
    i++;
  }

  // we have reached the overlap part, start of new interval is less than intervals[i] end
  // keep moving while interval[i] start is before newInterval end
  // 
  while (i < intervals.length && intervals[i][0] < newInterval[1]) {
    newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
    newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
    i++;
  }
  merged.push(newInterval);

  while (i < intervals.length) {
    merged.push(intervals[i]);
    i++;
  }
  return merged;
};

console.log(insert([[1,3],[6,9]], [2, 5])); // [[1, 5], [6, 9]]

console.log(insert([[1,3], [5,7], [8,12]], [4, 6])); // [[1,3], [4,7], [8,12]]

console.log(insert([[1,3], [5,7], [8,12]], [4, 10])); // [[1,3], [4,12]]

console.log(insert([[2,3],[5,7]], [1, 4])); // [[1,4], [5,7]]

console.log(`---`);
console.log(insert([[1, 5]], [2, 7])); // [[1, 7]]

console.log(insert([[1,5]],[0, 0])); // [[0,0],[1,5]]

console.log(insert([[2,5],[6,7],[8,9]], [0, 1])); // [[0,1],[2,5],[6,7],[8,9]]

console.log(insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4, 8]));