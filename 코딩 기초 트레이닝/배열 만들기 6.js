function solution(arr) {
  var answer = [];
  var i = 0;
  while (i < arr.length) {
    if (answer.length == 0) {
      answer.push(arr[i]);
      i++;
      continue;
    }
    if (answer[answer.length - 1] == arr[i]) {
      answer.pop();
      i++;
      continue;
    }
    if (answer[answer.length - 1] != arr[i]) {
      answer.push(arr[i]);
      i++;
      continue;
    }
  }
  if (answer.length == 0) return [-1];
  return answer;
}
