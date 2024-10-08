function solution(arr, flag) {
  var answer = [];
  for (i = 0; i < flag.length; i++) {
    if (flag[i] == true) {
      for (j = 0; j < arr[i] * 2; j++) {
        answer.push(arr[i]);
      }
    } else if (flag[i] == false) {
      for (j = 0; j < arr[i]; j++) {
        answer.pop(arr[i]);
      }
    }
  }
  return answer;
}
