/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
  const q = [];
  const currColor = image[sr][sc];
  q.push([sr, sc]);
  if(image[sr][sc] === color)
    return image;

  while(q.length > 0) {
    const xy = q.shift();
    console.log(xy);
    image[xy[0]][xy[1]] = color;
    if(xy[0] > 0) {
      if(typeof image[xy[0]-1][xy[1]] !== 'undefined' && image[xy[0]-1][xy[1]] === currColor)
      q.push([xy[0]-1, xy[1]]);
    }

    if(xy[1] > 0) {
      if(typeof image[xy[0]][xy[1]-1] !== 'undefined' && image[xy[0]][xy[1]-1] === currColor)
      q.push([xy[0], xy[1]-1]);
    }

    console.log('pushing next row, same col');
    if(xy[0] < image.length-1) {
      console.log('1');
      if(typeof image[xy[0]+1][xy[1]] !== 'undefined' && image[xy[0]+1][xy[1]] === currColor)
        q.push([xy[0]+1, xy[1]]);
    }
    console.log('pushing next col, same row');
    if(xy[1] < image[image.length-1].length-1) {
      console.log('2');
      if(typeof image[xy[0]][xy[1]+1] !== 'undefined' && image[xy[0]][xy[1]+1] === currColor)
        q.push([xy[0], xy[1]+1]);
    }
  }
  return image;
};

//let image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0;
let image = [[0,0,0],[0,0,0]], sr = 1, sc = 0, color = 2;
//let image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
console.log(floodFill(image, sr, sc, color));