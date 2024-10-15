function solution(strArr) {
  var n = 31;
  var answer = new Array(n).fill(0);
  for (i = 0; i < strArr.length; i++) {
    answer[strArr[i].length]++;
  }
  var call = Math.max(...answer);
  return call;
}
