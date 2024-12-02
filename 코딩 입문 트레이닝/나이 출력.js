function solution(age) {
  var answer = 0;
  if (age <= 24) return 2022 - age + 1;
  else return 2000 - (age - 22) + 1;
  return answer;
}
