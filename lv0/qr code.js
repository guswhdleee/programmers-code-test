function solution(q, r, code) {
  var answer = [];
  let compareNum = code.split("");
  for (i = 0; i < code.length; i++) {
    if (i % q == r) {
      answer.push(compareNum[i]);
    }
  }
  return answer.join("");
}
