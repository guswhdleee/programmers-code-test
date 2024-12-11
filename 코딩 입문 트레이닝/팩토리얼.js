function solution(n) {
  var answer = 0;
  var temp = 1;
  for (i = 1; i <= n; i++) {
    temp *= i;
    if (temp > n) return i - 1;
    else if (temp == n) return i;
  }
  return answer;
}
