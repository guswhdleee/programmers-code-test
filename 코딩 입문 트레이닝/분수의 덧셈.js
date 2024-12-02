function solution(numer1, denom1, numer2, denom2) {
  var answer = [];
  var temp2 = [];
  var num1 = numer1 * denom2;
  var num2 = numer2 * denom1;
  var den = denom1 * denom2;
  var num3 = num1 + num2;
  var temp = num3 > den ? num3 : den;
  if (num3 == den) {
    answer.push(1);
    answer.push(1);
    return answer;
  }
  for (i = 0; i < temp; i++) {
    if (den % i == 0 && num3 % i == 0) temp2.push(i);
  }
  var num3 = num3 / temp2[temp2.length - 1];
  var den = den / temp2[temp2.length - 1];
  answer.push(num3);
  answer.push(den);
  return answer;
}
