function solution(array) {
  var answer = 0;
  var temp = []; // array에서 등장하는 값들의 목록
  var temp2 = {}; // 빈도수를 체크할 객체
  for (i = 0; i < array.length; i++) {
    if (temp.includes(array[i]) == false) {
      // 목록에 없는 값이 나왔을 때
      temp.push(array[i]);
      temp2[array[i]] = 0;
    }
    if (temp.includes(array[i]) == true) {
      // 빈도수 추가
      temp2[array[i]] = temp2[array[i]] + 1;
    }
  }
  var temp3 = Object.entries(temp2); // 키, value 이차원 배열 생성
  var temp4 = Math.max.apply(null, Object.values(temp2)); // 빈도수 최대값 구해버림
  if (temp3.length == 1) {
    return parseInt(temp3[0][0]);
  }
  console.log(temp3);
  answer = temp3[0][1];
  var pass = 0;
  var trueAns = 0;
  for (k = 0; k < temp3.length; k++) {
    if (temp3[k][1] == temp4) {
      // 최빈값이다?
      answer = temp3[k][0];
      pass++;
      if (pass > 1) return -1;
    }
  }

  return parseInt(answer);
}
