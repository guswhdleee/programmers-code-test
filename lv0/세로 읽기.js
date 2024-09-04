function solution(my_string, m, c) {
  var answer = [];
  var compareArr = "";
  var indexNum = 0;
  var indexNum2 = m;
  for (i = 0; i < my_string.length / m; i++) {
    compareArr = my_string.slice(indexNum, indexNum2);
    indexNum += m;
    indexNum2 += m;
    answer.push(compareArr[c - 1]);
  }
  return answer.join("");
}
