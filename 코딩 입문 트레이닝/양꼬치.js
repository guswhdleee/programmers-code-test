function solution(n, k) {
  var answer = 0;
  var service = Math.floor(n / 10);
  k = k - service;
  return n * 12000 + k * 2000;
}
