function solution(array) {
  var temp = Math.floor(array.length / 2);
  var answer = array.sort((a, b) => {
    return a - b;
  });
  return answer[temp];
}
