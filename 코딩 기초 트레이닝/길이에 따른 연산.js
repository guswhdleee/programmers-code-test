function solution(num_list) {
  var answer = 0;
  if (num_list.length >= 11) {
    num_list.forEach((value) => {
      answer += value;
    });
  } else if (num_list.length <= 10) {
    answer = 1;
    num_list.forEach((value) => {
      answer *= value;
    });
  }
  return answer;
}
