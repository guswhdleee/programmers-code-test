function solution(myString) {
  var answer = [];
  for (value of myString) {
    if (value == "a" || value == "A") {
      value = value.toUpperCase();
      answer.push(value);
    } else {
      value = value.toLowerCase();
      answer.push(value);
    }
  }
  return answer.join("");
}
