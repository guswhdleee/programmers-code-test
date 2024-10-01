function solution(myString) {
  var answer = myString
    .split("x")
    .filter((x) => x)
    .sort();
  return answer;
}
