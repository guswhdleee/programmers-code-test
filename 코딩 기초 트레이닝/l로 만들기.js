function solution(myString) {
  var answer = "";
  var temp = Array.from(myString);
  var temp2 = temp.map((value) => {
    if (value.charCodeAt() < 108) return "l";
    else return value;
  });
  answer = temp2.join("");

  return answer;
}
