function solution(num_list) {
  var answer = 0;
  for (value of num_list) {
    while (value != 1) {
      if (value % 2 == 0) {
        value = value / 2;
        answer++;
      } else if (value % 2 == 1) {
        value = (value - 1) / 2;
        answer++;
      }
    }
  }
  return answer;
}

// 테스트
