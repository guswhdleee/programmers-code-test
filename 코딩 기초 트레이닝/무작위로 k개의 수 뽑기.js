function solution(arr, k) {
  var answer = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] != arr[i + 1] && answer.length < k) {
      if (answer.includes(arr[i]) == false) answer.push(arr[i]);
    }
  }
  if (answer.length != k) {
    var dif = k - answer.length;
    for (i = 0; i < dif; i++) {
      answer.push(-1);
    }
  }
  return answer;
}
