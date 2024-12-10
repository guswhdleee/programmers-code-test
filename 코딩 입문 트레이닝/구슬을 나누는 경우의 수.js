function solution(balls, share) {
  var answer = 0;
  var dif = balls - share;
  var n = 1;
  var m = 1;
  for (j = dif; j > 0; j--) {
    // (n-m)!
    m = m * j;
  }
  for (i = balls; i > share; i--) {
    n = n * i;
  }
  console.log(n);
  console.log(m);
  return Math.floor(n / m);
}
