function solution(rsp) {
  var answer = [];
  var rspSpt = rsp.split("");
  for (i = 0; i < rspSpt.length; i++) {
    switch (rspSpt[i]) {
      case "2":
        answer.push(0);
        break;
      case "0":
        answer.push(5);
        break;
      case "5":
        answer.push(2);
        break;
    }
  }

  return answer.join("");
}
