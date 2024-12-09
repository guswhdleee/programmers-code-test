function solution(my_string, letter) {
  var answer = [];
  for (i = 0; i < my_string.length; i++) {
    if (my_string[i] != letter) {
      answer.push(my_string[i]);
    } else continue;
  }

  return answer.join("");
}
