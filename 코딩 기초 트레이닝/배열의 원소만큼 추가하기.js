function solution(arr) {
  var answer = [];
  for (i = 0; i < arr.length; i++) {
    var key = arr[i];
    for (j = 0; j < arr[i]; j++) {
      answer.push(key);
    }
  }
  return answer;
}
