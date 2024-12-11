function solution(numbers, direction) {
  var answer = [];
  var k = numbers.length - 1;
  var z = numbers[0];
  if (direction == "right") {
    for (i = 0; i < numbers.length; i++) {
      answer[i] = numbers[k];
      k++;
      if (k == numbers.length) {
        k = 0;
      }
    }
  } else if (direction == "left") {
    for (i = 0; i < numbers.length; i++) {
      answer[i] = numbers[i + 1];
      if (i == numbers.length - 1) answer[numbers.length - 1] = z;
    }
  }
  return answer;
}
