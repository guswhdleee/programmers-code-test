function solution(my_string) {
  var answer = [];
  for (i = my_string.length - 1; i >= 0; i--) {
    answer.push(my_string[i]);
  }

  return answer.join("");
}
