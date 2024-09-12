function solution(number) {
  var answer = 0;
  for (i = 0; i < number.length; i++) {
    answer += parseInt(number[i]);
  }
  answer = answer % 9;
  return answer;
}
