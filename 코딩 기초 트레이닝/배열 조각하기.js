function solution(arr, query) {
  for (i = 0; i < query.length; i++) {
    if (i % 2 == 0) {
      // 짝수 인덱스 일 때
      arr.splice(query[i] + 1, arr.length - query[i]);
    } else if (i % 2 == 1) {
      // 홀수 인덱스 일 때
      arr.splice(0, query[i]);
    }
  }
  return arr;
}
