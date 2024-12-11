function solution(numbers) {
  var max = Math.max(...numbers);
  numbers.forEach((value, index) => {
    if (value == max) numbers.splice(index, 1);
  });
  var max2 = Math.max(...numbers);
  return max * max2;
}
