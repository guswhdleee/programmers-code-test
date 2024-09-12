function solution(num_list, n) {
  var arr = num_list.splice(0, n);
  var answer = [...num_list, ...arr];
  return answer;
}
