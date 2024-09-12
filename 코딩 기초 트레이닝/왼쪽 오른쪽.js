function solution(str_list) {
  var answer = [];
  for (i = 0; i < str_list.length; i++) {
    if (str_list[i] == "l") {
      answer = str_list.splice(0, i);
      return answer;
    } else if (str_list[i] == "r") {
      answer = str_list.splice(i + 1, str_list.length);
      return answer;
    }
  }
  return answer;
}
