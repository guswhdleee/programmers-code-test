function solution(picture, k) {
  var answer = [];
  var temp2 = [];
  for (i = 0; i < picture.length; i++) {
    var temp = Array.from(picture[i]);
    temp2 = [];
    temp.forEach((value) => {
      for (j = 0; j < k; j++) {
        temp2.push(value);
      }
    });
    var temp3 = temp2.join("");
    for (e = 0; e < k; e++) {
      answer.push(temp3);
    }
  }
  return answer;
}
