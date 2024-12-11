function solution(n) {
  var answer = 0;
  for (i = 1; i <= n; i++) {
    var temp = [];
    for (j = 1; j <= i; j++) {
      if (i % j == 0) temp.push(j);
    }
    if (temp.length >= 3) {
      answer++;
    }
  }
  return answer;
}
