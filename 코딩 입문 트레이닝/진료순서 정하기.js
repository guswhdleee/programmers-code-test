function solution(emergency) {
  var answer = new Array(emergency.length).fill(0);
  var temp = [...emergency];
  var k = 1;
  for (i = 0; i < emergency.length; i++) {
    var max = Math.max(...temp);
    for (j = 0; j < emergency.length; j++) {
      if (temp[j] == max) {
        answer[j] = k;
        temp[j] = 0;
        k++;
        break;
      }
    }
  }
  return answer;
}
