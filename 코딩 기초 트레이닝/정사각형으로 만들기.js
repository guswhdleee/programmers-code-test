function solution(arr) {
  var arrLth = arr[0].length < arr.length ? arr.length : arr[0].length;
  var answer = Array.from(Array(arrLth), () => new Array(arrLth).fill(null));
  for (i = 0; i < arrLth; i++) {
    for (j = 0; j < arrLth; j++) {
      try {
        answer[i][j] = arr[i][j];
        if (answer[i][j] == undefined) answer[i][j] = 0;
      } catch (err) {
        answer[i][j] = 0;
      }
    }
  }
  return answer;
}
