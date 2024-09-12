function solution(num_list) {
  var answer = 0;
  var odd = 0;
  var even = 0;
  for (i = 0; i < num_list.length; i++) {
    if (i % 2 == 0) {
      even += num_list[i];
    } else if (i % 2 == 1) {
      odd += num_list[i];
    }
  }
  answer = even > odd ? even : odd;
  return answer;
}
