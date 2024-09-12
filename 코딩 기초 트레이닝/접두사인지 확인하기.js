function solution(my_string, is_prefix) {
  var answer = 0;
  for (i = 0; i < my_string.length; i++) {
    if (is_prefix == my_string.slice(0, i)) answer = 1;
  }
  return answer;
}
