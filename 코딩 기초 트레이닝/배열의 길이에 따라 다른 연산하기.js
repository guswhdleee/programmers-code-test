function solution(arr, n) {
  let answer = [];
  if (arr.length % 2 == 1) {
    // arr 길이가 홀수 일때
    answer = arr.map((value, index) => {
      if (index % 2 == 0) {
        return (value = value + n);
      } else return value;
    });
  } else if (arr.length % 2 == 0) {
    // arr 길이가 짝수 일때
    answer = arr.map((value, index) => {
      if (index % 2 == 1) {
        return (value = value + n);
      } else return value;
    });
  }
  return answer;
}
