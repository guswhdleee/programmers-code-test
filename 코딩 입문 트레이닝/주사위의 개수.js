function solution(box, n) {
  var answer = 1;
  var temp = [];
  for (i = 0; i < box.length; i++) {
    temp.push(Math.floor(box[i] / n));
  }
  console.log(temp);
  temp.forEach((value) => {
    answer *= value;
  });
  return answer;
}
