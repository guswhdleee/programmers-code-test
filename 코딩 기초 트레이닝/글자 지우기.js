function solution(my_string, indices) {
  var answer = Array.from(my_string);
  for (i = 0; i < indices.length; i++) {
    answer[indices[i]] = null;
  }
  return answer.join("");
}
