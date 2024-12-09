function solution(n) {
  var answer = 0;
  for (i = 1; i < 100; i++) {
    if ((6 * i) % n == 0) return i;
  }
}
