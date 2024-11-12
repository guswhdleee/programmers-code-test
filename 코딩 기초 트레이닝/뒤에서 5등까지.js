function solution(num_list) {
  var answer = num_list.sort((a, b) => {
    return a - b;
  });
  answer.splice(5, answer.length - 5);
  return answer;
}
