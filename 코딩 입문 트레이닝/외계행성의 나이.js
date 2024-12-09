function solution(age) {
  var answer = [];
  var temp = String(age).split("");
  for (i = 0; i < temp.length; i++) {
    answer.push(String.fromCharCode(parseInt(temp[i]) + 97));
  }

  return answer.join("");
}
