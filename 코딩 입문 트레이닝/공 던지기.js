function solution(numbers, k) {
  var answer = 0;
  var i = 0;
  var j = 0;
  while (i < k) {
    if (j >= numbers.length) {
      var z = j - numbers.length;
      j = 0;
      j = j + z;
    }
    answer = numbers[j];
    j = j + 2;
    i++;
  }

  return answer;
}
