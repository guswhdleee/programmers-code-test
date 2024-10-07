function solution(myStr) {
  var answer = myStr.split("");
  var word = [];
  var answer2 = [];
  var pass = false;
  for (i = 0; i < myStr.length; i++) {
    if (answer[i] == "a") pass = true;
    if (answer[i] == "b") pass = true;
    if (answer[i] == "c") pass = true;
    if (pass == true) {
      answer2.push(word.join(""));
      word = [];
      pass = false;
      continue;
    } else if (pass == false) word.push(answer[i]);
  }
  answer2.push(word.join(""));
  var answer3 = answer2.filter((value) => value);
  if (answer3.length == 0) return ["EMPTY"];
  return answer3;
}
