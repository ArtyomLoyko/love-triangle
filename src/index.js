/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var counter = 0;
  for(var i = 0; i < preferences.length; i++) {
    if(preferences[i]) {
      var A = preferences[i], C = preferences[A - 1], B = preferences[C - 1];
      var indexA = i + 1, indexC = A, indexB = C;
      if(A + C + B == indexA + indexC + indexB && A != B) {
        counter++;
        delete preferences[indexA - 1], preferences[indexC - 1], preferences[indexB - 1];
      }
    }
  }
  return counter;
};
