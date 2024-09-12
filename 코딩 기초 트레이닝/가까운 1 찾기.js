function solution(arr, idx) {
  var answer = 0;
  var doIt = 0;
  for (i = idx; i <= arr.length; i++) {
    if (arr[i] == 1) {
      answer = i;
      doIt++;
      break;
    }
  }
  if (doIt == 1) return answer;
  if (doIt == 0) return -1;
}
