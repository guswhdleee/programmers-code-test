function solution(n) {
  var answer = [];
  var temp = [];
  var temp2 = 0;
  for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
      if (temp2 == j) temp.push(1);
      else temp.push(0);
    }
    answer.push(temp);
    temp = [];
    temp2++;
  }
  return answer;
}
