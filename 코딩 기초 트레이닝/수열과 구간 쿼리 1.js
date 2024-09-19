function solution(arr, queries) {
  var answer = [...arr];
  var query = [];
  for (i = 0; i < queries.length; i++) {
    query = queries[i];
    for (j = 0; j < arr.length; j++) {
      if (j >= query[0] && j <= query[1]) answer[j]++;
    }
  }
  return answer;
}
