function solution(arr, k) {
  var answer = [];
  if (k % 2 == 1) {
    answer = arr.map((value) => {
      return (value = value * k);
    });
  } else {
    answer = arr.map((value) => {
      return (value = value + k);
    });
  }
  return answer;
}
