function solution(num_list, n) {
  var answer = [];
  var k = n;
  for (i = 0; i < num_list.length; i = i + n) {
    var temp = num_list.slice(i, k);
    answer.push(temp);
    k = k + n;
  }
  return answer;
}
