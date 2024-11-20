function solution(order) {
  var answer = 0;
  for (var i = 0; i < order.length; i++) {
    if (order[i] == "anything") {
      answer += 4500;
      continue;
    } else if (order[i].includes("americano")) {
      answer += 4500;
      continue;
    } else if (order[i].includes("cafelatte")) {
      answer += 5000;
      continue;
    }
  }
  return answer;
}
