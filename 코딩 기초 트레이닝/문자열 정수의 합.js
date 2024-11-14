function solution(num_str) {
  var answer = 0;
  Array.from(num_str).forEach((value) => {
    answer += parseInt(value);
  });

  return answer;
}
